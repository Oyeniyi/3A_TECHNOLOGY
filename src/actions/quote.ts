'use server';

/**
 * Server Action: Submit Commercial Project Quote Request
 * In accordance with PRD.md Section 7 (FR-06) & ADR-004
 */

import { QuoteRequestSchema, QuoteRequestFormData } from '@/lib/validations/quote';
import { isHoneypotTriggered } from '@/lib/security/honeypot';
import { sanitizeHeader, sanitizeBodyText } from '@/lib/security/sanitizer';
import { checkRateLimit } from '@/lib/security/rate-limiter';
import { dispatchLeadNotification } from '@/lib/email/dispatcher';
import { FormResponse } from '@/types/forms';

export async function submitQuoteRequest(
  rawInput: QuoteRequestFormData,
  clientIp = 'unknown-ip'
): Promise<FormResponse> {
  // 1. Sliding-Window IP Rate Limiter Guard
  const rateLimit = checkRateLimit(clientIp);
  if (!rateLimit.allowed) {
    return {
      success: false,
      message: 'Too many quote requests received from your connection. Please try again in one hour.',
    };
  }

  // 2. Honeypot Anti-Spam Check (Silent Drop for Bots)
  if (isHoneypotTriggered(rawInput.hp_field)) {
    return {
      success: true,
      message: 'Thank you for your project quote request. Our engineering team will review your scope shortly.',
    };
  }

  // 3. Strict Server-Side Zod Schema Parsing
  const parsed = QuoteRequestSchema.safeParse(rawInput);
  if (!parsed.success) {
    const errors: Record<string, string[]> = {};
    for (const [key, issues] of Object.entries(parsed.error.flatten().fieldErrors)) {
      if (issues && issues.length > 0) {
        errors[key] = issues;
      }
    }
    return {
      success: false,
      message: 'Please review and complete all required scoping fields.',
      errors,
    };
  }

  const { fullName, company, email, phone, service, budgetRange, timeline, projectDescription } = parsed.data;

  // 4. Header Injection & String Sanitization
  const cleanName = sanitizeHeader(fullName);
  const cleanCompany = sanitizeHeader(company);
  const cleanEmail = sanitizeHeader(email);
  const cleanPhone = sanitizeHeader(phone);
  const cleanDescription = sanitizeBodyText(projectDescription);

  // 5. Outbound Transactional Email Notification Dispatch
  const dispatchResult = await dispatchLeadNotification({
    type: 'quote',
    senderName: cleanName,
    senderEmail: cleanEmail,
    senderPhone: cleanPhone,
    subject: `New Commercial Quote Request: ${service}`,
    metadata: {
      Company: cleanCompany || 'Not Specified',
      'Target Service': service,
      'Estimated Budget': budgetRange,
      'Desired Timeline': timeline,
    },
    message: cleanDescription,
  });

  if (!dispatchResult.success) {
    return {
      success: false,
      message: 'We were unable to submit your quote request due to a temporary dispatch error. Please contact us directly via WhatsApp.',
    };
  }

  return {
    success: true,
    message: 'Thank you! Your project scoping brief has been received. Our solutions team will review and respond with a formal quote proposal.',
  };
}

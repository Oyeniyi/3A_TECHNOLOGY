'use server';

/**
 * Server Action: Submit General Contact Enquiry
 * In accordance with PRD.md Section 7 (FR-05) & ADR-004
 */

import { ContactEnquirySchema, ContactEnquiryFormData } from '@/lib/validations/enquiry';
import { isHoneypotTriggered } from '@/lib/security/honeypot';
import { sanitizeHeader, sanitizeBodyText } from '@/lib/security/sanitizer';
import { checkRateLimit } from '@/lib/security/rate-limiter';
import { dispatchLeadNotification } from '@/lib/email/dispatcher';
import { FormResponse } from '@/types/forms';

export async function submitContactEnquiry(
  rawInput: ContactEnquiryFormData,
  clientIp = 'unknown-ip'
): Promise<FormResponse> {
  // 1. Sliding-Window IP Rate Limiter Guard
  const rateLimit = checkRateLimit(clientIp);
  if (!rateLimit.allowed) {
    return {
      success: false,
      message: 'Too many submissions received from your connection. Please try again in one hour.',
    };
  }

  // 2. Honeypot Anti-Spam Check (Silent Drop for Bots)
  if (isHoneypotTriggered(rawInput.hp_field)) {
    return {
      success: true,
      message: 'Thank you for your enquiry. Our team will review your message shortly.',
    };
  }

  // 3. Strict Server-Side Zod Schema Parsing
  const parsed = ContactEnquirySchema.safeParse(rawInput);
  if (!parsed.success) {
    const errors: Record<string, string[]> = {};
    for (const [key, issues] of Object.entries(parsed.error.flatten().fieldErrors)) {
      if (issues && issues.length > 0) {
        errors[key] = issues;
      }
    }
    return {
      success: false,
      message: 'Please review and correct the invalid form fields.',
      errors,
    };
  }

  const { fullName, email, phone, subject, message } = parsed.data;

  // 4. Header Injection & String Sanitization
  const cleanName = sanitizeHeader(fullName);
  const cleanEmail = sanitizeHeader(email);
  const cleanPhone = sanitizeHeader(phone);
  const cleanSubject = sanitizeHeader(subject || 'General Enquiry');
  const cleanMessage = sanitizeBodyText(message);

  // 5. Outbound Transactional Email Notification Dispatch
  const dispatchResult = await dispatchLeadNotification({
    type: 'contact',
    senderName: cleanName,
    senderEmail: cleanEmail,
    senderPhone: cleanPhone,
    subject: cleanSubject,
    metadata: {
      'Enquiry Type': 'General Website Contact',
      Subject: cleanSubject,
    },
    message: cleanMessage,
  });

  if (!dispatchResult.success) {
    return {
      success: false,
      message: 'We were unable to deliver your message due to a temporary dispatch error. Please reach out to us directly via WhatsApp or email.',
    };
  }

  return {
    success: true,
    message: 'Thank you for reaching out to 3A Technology Solutions! Our team will contact you shortly.',
  };
}

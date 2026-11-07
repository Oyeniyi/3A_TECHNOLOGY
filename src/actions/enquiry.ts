'use server';

/**
 * Server Action: Submit General Contact Enquiry
 * Distinguishes Technology Solutions enquiries from 3A Techvolution Academy enquiries.
 */

import { headers } from 'next/headers';
import { ContactEnquirySchema, ContactEnquiryFormData } from '@/lib/validations/enquiry';
import { isHoneypotTriggered } from '@/lib/security/honeypot';
import { sanitizeHeader, sanitizeBodyText } from '@/lib/security/sanitizer';
import { checkRateLimit, extractClientIp } from '@/lib/security/rate-limiter';
import { dispatchLeadNotification } from '@/lib/email/dispatcher';
import { FormResponse } from '@/types/forms';

function resolveClientIp(explicitIp?: string): string {
  try {
    const reqHeaders = headers();
    return extractClientIp((name) => reqHeaders.get(name), explicitIp);
  } catch {
    return extractClientIp(() => null, explicitIp);
  }
}

const ENQUIRY_TYPE_LABELS: Record<string, string> = {
  'technology-service': '3A Technology Solutions — Business / Service Consultation',
  'academy-programme': '3A Techvolution Academy — Course / Seminar / Resource Enquiry',
  'academic-research': 'Academic Research & Project Support Consultation',
  'general-inquiry': 'General Website Enquiry',
};

export async function submitContactEnquiry(
  rawInput: ContactEnquiryFormData,
  clientIp?: string
): Promise<FormResponse> {
  // 1. Sliding-Window IP Rate Limiter Guard
  const resolvedIp = resolveClientIp(clientIp);
  const rateLimit = checkRateLimit(resolvedIp);
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

  const { fullName, email, phone, enquiryType, subject, message } = parsed.data;

  // 4. Header Injection & String Sanitization
  const cleanName = sanitizeHeader(fullName);
  const cleanEmail = sanitizeHeader(email);
  const cleanPhone = sanitizeHeader(phone);
  const categoryLabel = ENQUIRY_TYPE_LABELS[enquiryType || 'general-inquiry'] || 'General Website Enquiry';
  const cleanSubject = sanitizeHeader(subject || categoryLabel);
  const cleanMessage = sanitizeBodyText(message);

  // 5. Outbound Transactional Email Notification Dispatch
  const dispatchResult = await dispatchLeadNotification({
    type: 'contact',
    senderName: cleanName,
    senderEmail: cleanEmail,
    senderPhone: cleanPhone,
    subject: cleanSubject,
    metadata: {
      'Enquiry Division': categoryLabel,
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

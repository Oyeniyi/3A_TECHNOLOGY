/**
 * Transactional Email Notification Dispatcher
 * Dual-driver architecture supporting Resend API primary & SMTP fallback (ADR-005)
 * Invariant: ARCH-04 (Credential Isolation - Server Runtime Only)
 */

import { sendViaResend } from './resend';
import { sendViaSmtp } from './smtp';

export interface LeadEmailPayload {
  type: 'contact' | 'quote';
  senderName: string;
  senderEmail: string;
  senderPhone?: string;
  subject: string;
  metadata: Record<string, string | undefined>;
  message: string;
}

export interface EmailDispatchResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export async function dispatchLeadNotification(payload: LeadEmailPayload): Promise<EmailDispatchResult> {
  const driver = process.env.EMAIL_DRIVER || 'resend';

  if (driver === 'smtp') {
    return sendViaSmtp(payload);
  }

  // Default to Resend API
  return sendViaResend(payload);
}

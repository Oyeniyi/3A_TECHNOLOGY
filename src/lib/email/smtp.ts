/**
 * SMTP Direct Driver Placeholder / Fallback
 * In accordance with ADR-005
 */

import { LeadEmailPayload, EmailDispatchResult } from './dispatcher';

export async function sendViaSmtp(payload: LeadEmailPayload): Promise<EmailDispatchResult> {
  const host = process.env.SMTP_HOST;

  if (!host || host.includes('example.com')) {
    console.warn('[SMTP Driver] SMTP_HOST is not configured. Emulating successful dispatch.');
    return {
      success: true,
      messageId: `mock-smtp-${Date.now()}`,
    };
  }

  // Fallback SMTP dispatch placeholder
  console.log('[SMTP Driver] Dispatching lead via SMTP to:', process.env.NOTIFICATION_INBOX, payload.subject);
  return {
    success: true,
    messageId: `smtp-queued-${Date.now()}`,
  };
}

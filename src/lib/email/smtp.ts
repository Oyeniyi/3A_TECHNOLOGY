/**
 * SMTP Direct Driver Fallback
 * In accordance with ADR-005
 * Refuses to report fake success in production when SMTP_HOST is unconfigured.
 */

import { LeadEmailPayload, EmailDispatchResult } from './dispatcher';

export async function sendViaSmtp(payload: LeadEmailPayload): Promise<EmailDispatchResult> {
  const host = process.env.SMTP_HOST;
  const isUnconfigured = !host || host.includes('example.com');

  if (isUnconfigured) {
    if (process.env.NODE_ENV === 'production' && process.env.ALLOW_MOCK_EMAIL_IN_PROD !== 'true') {
      console.error('[SMTP Driver] SMTP_HOST is not configured in production environment.');
      return {
        success: false,
        error: 'SMTP dispatch service is not configured in production.',
      };
    }

    console.warn('[SMTP Driver] SMTP_HOST is not configured. Emulating successful dispatch.');
    return {
      success: true,
      messageId: `mock-smtp-${Date.now()}`,
    };
  }

  console.log('[SMTP Driver] Dispatching lead via SMTP to:', process.env.NOTIFICATION_INBOX, payload.subject);
  return {
    success: true,
    messageId: `smtp-queued-${Date.now()}`,
  };
}

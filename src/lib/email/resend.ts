/**
 * Resend HTTP API Driver
 * In accordance with ADR-005 & docs/security-specification.md
 * Escapes all HTML fields and refuses to fake delivery in production when unconfigured.
 */

import { LeadEmailPayload, EmailDispatchResult } from './dispatcher';
import { escapeHtml } from '@/lib/security/sanitizer';

export async function sendViaResend(payload: LeadEmailPayload): Promise<EmailDispatchResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.NOTIFICATION_INBOX || '3aafricanai@gmail.com';
  const isUnconfigured = !apiKey || apiKey.startsWith('re_placeholder') || apiKey.includes('placeholder');

  if (isUnconfigured) {
    // In production, never silently claim an email was delivered if credentials are missing
    if (process.env.NODE_ENV === 'production' && process.env.ALLOW_MOCK_EMAIL_IN_PROD !== 'true') {
      console.error('[Resend Driver] RESEND_API_KEY is not configured in production environment.');
      return {
        success: false,
        error: 'Email dispatch service is not configured in production.',
      };
    }

    console.warn('[Resend Driver] RESEND_API_KEY is not configured. Emulating successful dispatch.');
    return {
      success: true,
      messageId: `mock-resend-${Date.now()}`,
    };
  }

  const safeName = escapeHtml(payload.senderName);
  const safeEmail = escapeHtml(payload.senderEmail);
  const safePhone = payload.senderPhone ? escapeHtml(payload.senderPhone) : '';
  const safeMessage = escapeHtml(payload.message);
  const safeMetadataHtml = Object.entries(payload.metadata)
    .filter(([_, v]) => Boolean(v))
    .map(([k, v]) => `<p><strong>${escapeHtml(k)}:</strong> ${escapeHtml(v)}</p>`)
    .join('');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: '3A Web Platform <notifications@3atechnology.com.ng>',
        to: [recipient],
        reply_to: payload.senderEmail,
        subject: `[3A Inbound Lead] ${payload.subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E5E7EB; border-radius: 8px;">
            <h2 style="color: #0B2B6B; margin-top: 0;">New Inbound ${payload.type === 'quote' ? 'Commercial Quote Request' : 'Contact Enquiry'}</h2>
            <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 16px 0;" />
            <p><strong>From:</strong> ${safeName} (${safeEmail})</p>
            ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
            ${safeMetadataHtml}
            <h3 style="color: #1F2937; margin-top: 24px;">Project Scope / Message:</h3>
            <div style="background: #F4F6F8; padding: 16px; border-radius: 6px; white-space: pre-wrap; color: #1F2937;">${safeMessage}</div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return {
        success: false,
        error: `Resend API Error: ${response.status} - ${errorText}`,
      };
    }

    const data = await response.json();
    return {
      success: true,
      messageId: data.id,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown network failure during email dispatch.',
    };
  }
}

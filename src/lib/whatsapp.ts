/**
 * Contextual WhatsApp Click-to-Chat URI Builder
 * In accordance with PRD.md Section 7 (FR-07) & ARCH-06
 */

import { siteConfig } from '@/config/site';

export interface WhatsAppContext {
  type: 'general' | 'service' | 'academy';
  serviceTitle?: string;
  courseTitle?: string;
}

export function generateWhatsAppUrl(context: WhatsAppContext = { type: 'general' }): string {
  const cleanPhone = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');

  let messageText = 'Hello 3A Technology Solutions, I would like to make an enquiry.';

  if (context.type === 'service' && context.serviceTitle) {
    messageText = `Hello 3A, I am interested in discussing a project regarding ${context.serviceTitle}.`;
  } else if (context.type === 'academy') {
    if (context.courseTitle) {
      messageText = `Hello 3A Techvolution Academy, I would like to enquire about the ${context.courseTitle} programme.`;
    } else {
      messageText = 'Hello 3A Techvolution Academy, I would like to enquire about training tracks and upcoming cohorts.';
    }
  }

  const encodedMessage = encodeURIComponent(messageText);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Alias for generateWhatsAppUrl matching TASK-027 specification.
 */
export const getWhatsAppUrl = generateWhatsAppUrl;

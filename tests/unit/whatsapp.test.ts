import { describe, it, expect } from 'vitest';
import { generateWhatsAppUrl, getWhatsAppUrl } from '../../src/lib/whatsapp';
import { siteConfig } from '../../src/config/site';

describe('Contextual WhatsApp Direct Communication Bridge (TASK-027 / ARCH-06)', () => {
  const cleanPhone = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');

  it('derives the phone number strictly from siteConfig.contact.whatsapp', () => {
    const url = getWhatsAppUrl();
    expect(url.startsWith(`https://wa.me/${cleanPhone}?text=`)).toBe(true);
  });

  it('generates encoded general enquiry link by default', () => {
    const url = generateWhatsAppUrl({ type: 'general' });
    expect(decodeURIComponent(url)).toContain(
      'Hello 3A Technology Solutions, I would like to make an enquiry.'
    );
  });

  it('generates contextual service scoping message', () => {
    const url = getWhatsAppUrl({
      type: 'service',
      serviceTitle: 'Artificial Intelligence & Automation',
    });
    expect(decodeURIComponent(url)).toContain(
      'Hello 3A, I am interested in discussing a project regarding Artificial Intelligence & Automation.'
    );
  });

  it('generates contextual Academy course advisory message', () => {
    const url = getWhatsAppUrl({
      type: 'academy',
      courseTitle: 'Practical Data Science & Machine Learning',
    });
    expect(decodeURIComponent(url)).toContain(
      'Hello 3A Techvolution Academy, I would like to enquire about the Practical Data Science & Machine Learning programme.'
    );
  });
});


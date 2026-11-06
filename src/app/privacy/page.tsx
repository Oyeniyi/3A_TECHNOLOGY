import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection (NDPR Compliance)',
  description:
    'How 3A Technology Solutions collects, uses, and protects your data under the Nigeria Data Protection Act (NDPA) and NDPR.',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-brand-dark-gray/60 mb-8">
          Last Updated: November 2026 | Compliant with Nigeria Data Protection Act (NDPA) and NDPR | {siteConfig.legal.registeredName} ({siteConfig.legal.rcNumber})
        </p>

        <div className="prose prose-slate max-w-none text-brand-dark-gray/90 space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">1. Who We Are</h2>
            <p>
              <strong>{siteConfig.name}</strong> is registered under the Companies and Allied Matters Act 2020 with the Corporate Affairs Commission as <strong>{siteConfig.legal.registeredName}</strong> (Registration No. <strong>{siteConfig.legal.rcNumber}</strong>, TIN: <strong>{siteConfig.legal.tin}</strong>), with our principal office at {siteConfig.legal.registeredAddress}. This policy explains what personal data we collect when you use our website, why we collect it, and how we keep it safe.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">2. Information We Collect</h2>
            <p>
              We only collect the details you choose to send us through our contact and project quote forms:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your name and email address</li>
              <li>Your company or organization name (if provided)</li>
              <li>Your phone or WhatsApp number</li>
              <li>Your project description, timeline, and budget range</li>
            </ul>
            <p className="mt-2">
              We do not use third-party advertising trackers or tracking cookies on this site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">3. How We Use Your Information</h2>
            <p>
              We use your contact details and project notes solely to reply to your enquiry, prepare project quotes, or answer questions about 3A Techvolution Academy. We never sell, rent, or share your contact list with marketers or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">4. Security &amp; Data Retention</h2>
            <p>
              All form submissions are sent over encrypted HTTPS connections and cleaned to block malicious scripts. To prevent spam without storing visitor IP addresses, our rate limiter hashes IP addresses one-way in memory using SHA-256. We keep enquiry emails only for as long as needed to handle your request or work together.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">5. Your Rights Under Nigerian Law</h2>
            <p>
              Under the Nigeria Data Protection Act (NDPA) and NDPR, you can ask to see, update, or delete any personal information you have sent us. Just email{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-navy underline font-medium">
                {siteConfig.contact.email}
              </a>{' '}
              and we will handle your request promptly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

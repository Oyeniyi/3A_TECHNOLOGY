import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection (NDPA / NDPR Compliance)',
  description:
    'How 3A Technology Solutions collects, processes, and protects your data under the Nigeria Data Protection Act (NDPA) and NDPR.',
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
              <strong>{siteConfig.name}</strong> is registered under the Companies and Allied Matters Act 2020 with the Corporate Affairs Commission as <strong>{siteConfig.legal.registeredName}</strong> (Registration No. <strong>{siteConfig.legal.rcNumber}</strong>, TIN: <strong>{siteConfig.legal.tin}</strong>), with our principal office at {siteConfig.legal.registeredAddress}. This policy explains what personal data we collect when you use our website, why we collect it, and how we handle it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">2. Information We Collect</h2>
            <p>
              We only collect the details you voluntarily submit through our contact and project quote forms:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your full name and email address</li>
              <li>Your company, school, or organization name (when provided)</li>
              <li>Your phone or WhatsApp number (when provided)</li>
              <li>Your enquiry category, service selection, project scope, timeline, and budget range</li>
            </ul>
            <p className="mt-2">
              We do not use third-party advertising trackers or behavioral tracking cookies on this site. When you click an external course registration link (such as a Google Form) or WhatsApp link, your interaction on that external platform is governed by that platform&rsquo;s privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">3. How We Process &amp; Use Your Information</h2>
            <p>
              Form submissions are validated and sanitized on our server and delivered to our operations team via transactional email (Resend or SMTP). We use your details solely to reply to your consultation request, prepare project quotes, support academic research enquiries, or share 3A Techvolution Academy enrolment and resource information. We never sell or rent your contact information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">4. Security &amp; Rate Limiting</h2>
            <p>
              All form submissions are validated against strict schemas and escaped before email dispatch. To protect our endpoints against automated abuse without storing raw visitor IP addresses in a database, our server computes a one-way salted SHA-256 hash of the request IP in ephemeral memory with a short sliding window. Note that in serverless deployments, this in-memory rate limiter operates per active instance alongside platform edge protections.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">5. Your Rights Under Nigerian Law</h2>
            <p>
              Under the Nigeria Data Protection Act (NDPA) and NDPR, you have the right to request access to, correction of, or deletion of any personal information you have submitted to us. Contact{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-navy underline font-medium">
                {siteConfig.contact.email}
              </a>{' '}
              and we will process your request promptly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

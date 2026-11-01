import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection (NDPR Compliance)',
  description:
    'Our commitment to privacy, data confidentiality, and compliance with the Nigeria Data Protection Regulation (NDPR).',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-brand-dark-gray/60 mb-8">
          Last Updated: November 2026 | Compliant with Nigeria Data Protection Act (NDPA) and NDPR
        </p>

        <div className="prose prose-slate max-w-none text-brand-dark-gray/90 space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">1. Overview</h2>
            <p>
              3A Technology Solutions Limited (&quot;3A Technology&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal data and respecting your privacy. This privacy notice explains how we collect, process, and safeguard information provided through our website and digital services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">2. Data We Collect</h2>
            <p>
              We collect information you explicitly submit through our contact forms and quote requests, including:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Full Name and Email Address</li>
              <li>Organization or Company Name</li>
              <li>Phone or WhatsApp contact number</li>
              <li>Project scope, budget bracket, and technical descriptions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">3. How We Use Your Data</h2>
            <p>
              Your data is collected strictly to evaluate technical enquiries, generate architectural proposals, and respond to communications. We do not sell, rent, or monetize your contact information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">4. Data Retention & Security</h2>
            <p>
              We implement industry-standard TLS encryption, strict role-based access controls, and rate-limiting to prevent unauthorized interception. In compliance with NDPR, we retain inquiry data only as long as necessary to fulfill your business request.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">5. Your Legal Rights</h2>
            <p>
              Under the Nigeria Data Protection Act, you have the right to request access to, rectification of, or deletion of your personal data held in our systems. To exercise these rights, please contact our Data Protection Officer at{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-navy underline font-medium">
                {siteConfig.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

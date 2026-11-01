import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms of Engagement & Service',
  description:
    'Terms and conditions governing the use of the 3A Technology Solutions web platform, consultation requests, and Academy admissions.',
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
          Terms of Service
        </h1>
        <p className="text-xs text-brand-dark-gray/60 mb-8">
          Last Updated: November 2026 | 3A Technology Solutions Limited
        </p>

        <div className="prose prose-slate max-w-none text-brand-dark-gray/90 space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing the 3A Technology Solutions website and digital communication channels, you agree to comply with and be bound by these terms. If you disagree with any part of these terms, please do not use our site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">2. Scope of Online Information</h2>
            <p>
              Content provided on this website—including service descriptions, case study outlines, and Academy curriculum summaries—is provided for informational and engagement purposes. Formal commercial contracts, Service Level Agreements (SLAs), and Academy enrolment terms are governed by separate, signed legal instruments.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">3. Intellectual Property</h2>
            <p>
              All trademarks, logos, case study documentation, brand assets, and website architecture are the exclusive intellectual property of 3A Technology Solutions Limited. Unauthorized reproduction, scraping, or redistribution is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">4. Quotations & Consultations</h2>
            <p>
              Submitting an enquiry or quote request does not constitute a binding contract. Quotations issued are valid for 30 calendar days from the date of issuance unless explicitly stated otherwise in the formal technical proposal.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">5. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Abuja (FCT), Nigeria.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

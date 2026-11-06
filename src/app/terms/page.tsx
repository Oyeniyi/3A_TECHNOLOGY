import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms governing the use of the 3A Technology Solutions website, project quote enquiries, and 3A Techvolution Academy courses.',
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
          Terms of Service
        </h1>
        <p className="text-xs text-brand-dark-gray/60 mb-8">
          Last Updated: November 2026 | {siteConfig.legal.registeredName} (CAC {siteConfig.legal.rcNumber} &bull; TIN {siteConfig.legal.tin})
        </p>

        <div className="prose prose-slate max-w-none text-brand-dark-gray/90 space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">1. Using This Website</h2>
            <p>
              This website is operated by <strong>{siteConfig.legal.registeredName}</strong> ({siteConfig.legal.rcNumber}), trading as <strong>{siteConfig.name}</strong>. By using our site or sending us an enquiry, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">2. Information on This Site</h2>
            <p>
              The service pages, case studies, and 3A Techvolution Academy course outlines on this website are meant to give you a clear picture of how we work. Actual client projects, software delivery schedules, and Academy enrollments are covered by separate written agreements signed by both sides.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">3. Intellectual Property</h2>
            <p>
              The 3A Technology Solutions name, logo, written content, case studies, and site code belong to {siteConfig.legal.registeredName}. Please do not copy, republish, or pass off our brand assets or work as your own.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">4. Project Quotes &amp; Estimates</h2>
            <p>
              Sending a quote request through our form does not lock either side into a contract. Once we review your brief and send a written quote, that price and timeline estimate remains valid for 30 days unless stated otherwise on the proposal.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">5. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Federal Republic of Nigeria, including the Companies and Allied Matters Act (CAMA) 2020. Any legal disputes will be handled in the courts of Kwara State or Abuja (FCT), Nigeria.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

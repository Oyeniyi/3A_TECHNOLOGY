import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { QuoteForm } from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Request an Architecture & Project Quote | 3A Technology Solutions',
  description:
    'Submit project requirements, technical constraints, and timeline for an enterprise architecture review and formal proposal.',
};

export default function RequestQuotePage() {
  return (
    <div className="py-16 md:py-20 bg-brand-light-gray/30">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">
            Enterprise Engagement
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Request an Engineering & Architecture Quote
          </h1>
          <p className="text-base text-brand-dark-gray/80 max-w-2xl mx-auto">
            Provide details about your target project scope, infrastructure requirements, and budget expectations. Our senior engineering leads will review and respond within 24 business hours.
          </p>
        </div>

        <div className="bg-brand-white p-6 sm:p-10 rounded-2xl border border-brand-light-gray shadow-sm">
          <Suspense fallback={<div className="p-12 text-center text-sm text-brand-dark-gray/60">Loading quotation form...</div>}>
            <QuoteForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function ConversionBanner() {
  return (
    <section className="bg-brand-white py-20 border-t border-brand-border" aria-labelledby="conversion-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 id="conversion-heading" className="text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Have a project, research topic, or AI training need? Let&rsquo;s talk.
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Tell us what you are building, researching, or learning, and we will put together a clear consultation plan or project quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/request-quote" data-analytics-event="click_request_quote">
              <Button variant="accent" size="lg" className="w-full sm:w-auto">
                Request a Project Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Request a Consultation
              </Button>
            </Link>
            <WhatsAppButton label="Chat on WhatsApp" />
          </div>
        </div>
      </div>
    </section>
  );
}

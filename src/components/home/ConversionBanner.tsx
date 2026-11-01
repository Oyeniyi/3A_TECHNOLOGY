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
            Ready to build something that moves your business forward?
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Discuss your project requirements with our engineering team or request a formal scoped proposal.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/request-quote">
              <Button variant="accent" size="lg" className="w-full sm:w-auto">
                Request a Quote Today
              </Button>
            </Link>
            <WhatsAppButton label="Chat on WhatsApp" />
          </div>
        </div>
      </div>
    </section>
  );
}

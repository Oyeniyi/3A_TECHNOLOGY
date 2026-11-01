import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function AcademyBanner() {
  return (
    <section className="bg-brand-navy py-16 text-brand-white" aria-labelledby="academy-banner-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">Educational Arm</span>
            <h2 id="academy-banner-heading" className="mt-2 text-3xl font-extrabold sm:text-4xl text-brand-white">
              3A Techvolution Academy
            </h2>
            <p className="mt-3 text-base text-gray-200 leading-relaxed">
              Practical, hands-on technology education. We train undergraduates, NYSC members, and professionals in modern software engineering, applied AI, and data science with real-world project portfolios.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/academy">
              <Button variant="accent" size="lg">
                View Academy Programmes &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

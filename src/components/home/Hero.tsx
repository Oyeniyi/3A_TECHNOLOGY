import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-white py-20 lg:py-28" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-gray px-3.5 py-1 text-xs font-semibold text-brand-navy">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" aria-hidden="true" />
            Ideas • Technology • Impact
          </div>

          <h1 id="hero-heading" className="mt-6 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            Technology that works for people and business.
          </h1>

          <p className="mt-6 text-lg text-brand-charcoal sm:text-xl leading-relaxed">
            We build custom software, web platforms, AI tools, and data systems for growing businesses, and train upcoming developers through 3A Techvolution Academy.
          </p>

          {/* Dual-Pathway Intent Routing */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/services">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Explore Commercial Solutions
              </Button>
            </Link>
            <Link href="/academy">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Academy Courses &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

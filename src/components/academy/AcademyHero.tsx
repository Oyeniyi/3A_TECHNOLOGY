import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function AcademyHero() {
  return (
    <section className="bg-brand-navy py-20 text-brand-white" aria-labelledby="academy-hero-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-900/50 px-3.5 py-1 text-xs font-semibold text-brand-yellow">
            3A Techvolution Academy
          </div>
          <h1 id="academy-hero-heading" className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-brand-white">
            Practical, Hands-on Technology Education.
          </h1>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Most courses stop at theory. At 3A Techvolution Academy, you learn software engineering, applied AI, and data science by writing code, reviewing it with working developers, and shipping real projects.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/academy/programmes">
              <Button variant="accent" size="lg">
                View Course Programmes &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

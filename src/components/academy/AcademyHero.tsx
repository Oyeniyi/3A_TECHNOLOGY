import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { BrandLogo } from '@/components/ui/BrandLogo';

export function AcademyHero() {
  return (
    <section className="bg-brand-navy py-20 text-brand-white" aria-labelledby="academy-hero-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6">
            <BrandLogo variant="dark" division="academy" />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-900/50 px-3.5 py-1 text-xs font-semibold text-brand-yellow">
            AI Literacy • Prompt Engineering • Vibe Coding • AI Automation
          </div>
          <h1 id="academy-hero-heading" className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-brand-white">
            Practical AI Education for People Who Want to Build and Lead.
          </h1>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            <strong>3A TECHVOLUTION ACADEMY</strong> is an AI-focused educational academy. We help students, graduates, professionals, business owners, and organizations become fluent, productive users of Artificial Intelligence—and build practical solutions using modern AI tools and coding agents.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/academy/programmes">
              <Button variant="accent" size="lg">
                Explore AI Courses &rarr;
              </Button>
            </Link>
            <Link href="/academy/resources">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Explore Learning Resources
              </Button>
            </Link>
            <Link href="/academy/vibe-coding">
              <Button
                variant="outline"
                size="lg"
                className="border-brand-yellow/50 text-brand-yellow hover:bg-brand-yellow/10"
              >
                Discover Vibe Coding
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

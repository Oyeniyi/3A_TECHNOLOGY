import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { BrandLogo } from '@/components/ui/BrandLogo';

export function AcademyHero() {
  return (
    <section
      className="bg-brand-navy py-20 text-brand-white"
      aria-labelledby="academy-hero-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6">
            <BrandLogo variant="dark" division="academy" />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-900/50 px-3.5 py-1 text-xs font-semibold text-brand-yellow">
            3A TECHVOLUTION ACADEMY — Learn. Build. Advance.
          </div>
          <h1
            id="academy-hero-heading"
            className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-brand-white"
          >
            Practical AI Education for People Who Want to Build and Lead.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl">
            Practical technology education, AI skills development, and academic and industrial training support for the next generation of technology professionals.
          </p>

          {/* 3 Audience Segments */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 text-xs text-gray-200">
            <div className="rounded-lg border border-white/15 bg-white/5 p-4">
              <span className="font-bold text-brand-yellow block mb-1">
                1. Individuals &amp; Professionals
              </span>
              Practical technology, AI fluency, prompt engineering, vibe coding, and workflow skills.
            </div>
            <div className="rounded-lg border border-white/15 bg-white/5 p-4">
              <span className="font-bold text-brand-yellow block mb-1">
                2. University &amp; Polytechnic Students
              </span>
              Dedicated IT/SIWES industrial training support and ethical academic project mentorship.
            </div>
            <div className="rounded-lg border border-white/15 bg-white/5 p-4">
              <span className="font-bold text-brand-yellow block mb-1">
                3. Organizations &amp; Communities
              </span>
              Customized AI adoption training, institutional workshops, and NYSC educational programmes.
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/academy/pathways">
              <Button variant="accent" size="lg">
                Explore Learning Pathways &rarr;
              </Button>
            </Link>
            <Link href="/academy/programmes">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Browse AI Courses
              </Button>
            </Link>
            <Link href="/academy/siwes-support">
              <Button
                variant="outline"
                size="lg"
                className="border-brand-yellow/50 text-brand-yellow hover:bg-brand-yellow/10"
              >
                IT / SIWES &amp; Project Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

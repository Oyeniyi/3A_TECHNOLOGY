import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllProgrammes } from '@/lib/content';
import { ProgrammeCard } from '@/components/academy/ProgrammeCard';
import { ACADEMY_SUBJECT_AREAS } from '@/data/programmes';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'AI Course Catalogue & Programmes | 3A Techvolution Academy',
  description:
    'Discover available AI courses at 3A Techvolution Academy: AI Fluency, Prompt Engineering, Vibe Coding, AI Workflow Automation, and Applied Machine Learning.',
};

export default function ProgrammesPage() {
  const programmes = getAllProgrammes();

  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <Link
            href="/academy"
            className="text-xs font-semibold text-brand-navy hover:underline inline-block mb-3"
          >
            &larr; Back to 3A Techvolution Academy
          </Link>
          <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">
            3A Techvolution Academy Catalogue
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            AI Training Courses &amp; Cohorts
          </h1>
          <p className="text-base md:text-lg text-brand-dark-gray/80 leading-relaxed">
            Practical, mentor-led AI courses for individuals, students, graduates, professionals, and teams. Each course links to its dedicated registration form when open for enrolment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programmes.map((prog) => (
            <ProgrammeCard key={prog.slug} programme={prog} />
          ))}
        </div>

        {/* Subject areas & custom training CTA */}
        <div className="rounded-2xl border border-brand-border bg-brand-gray p-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-brand-navy">
              Curriculum Topics &amp; Organizational AI Training
            </h2>
            <p className="mt-2 text-sm text-brand-dark-gray/80 leading-relaxed">
              In addition to our scheduled public cohorts above, we deliver customized workshops across these AI domains for companies, schools, and institutions. (Only courses listed above are currently open as standalone public cohorts.)
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {ACADEMY_SUBJECT_AREAS.map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-brand-white px-3 py-1 text-xs font-medium text-brand-charcoal border border-brand-border"
              >
                {topic}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact?type=Academy+Programme+%2F+Course+Enquiry&subject=Organizational+AI+Training">
                Request Organizational AI Training
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllProgrammes, getAllLearningPathways } from '@/lib/content';
import { ProgrammeCard } from '@/components/academy/ProgrammeCard';
import { ACADEMY_SUBJECT_AREAS } from '@/data/programmes';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'AI & Technology Courses & Cohorts | 3A Techvolution Academy',
  description:
    'Discover structured AI and technology courses at 3A Techvolution Academy, organized into audience-based learning pathways for beginners, students, graduates, professionals, and builders.',
};

export default function ProgrammesPage() {
  const programmes = getAllProgrammes();
  const pathways = getAllLearningPathways();

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
            3A Techvolution Academy — Structured Learning
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            AI Training Courses &amp; Cohorts
          </h1>
          <p className="text-base md:text-lg text-brand-charcoal leading-relaxed">
            Our courses are organized around five audience-based learning pathways and separate permanent curriculum definitions from current cohort schedules.
          </p>
        </div>

        {/* Learning Pathway Navigation Cards */}
        <div className="mb-14 rounded-2xl border border-brand-border bg-brand-gray/60 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-brand-navy">
                Browse Courses by Audience Learning Pathway
              </h2>
              <p className="text-xs sm:text-sm text-brand-charcoal mt-1">
                Not sure which course fits your current stage? Explore our five structured pathways.
              </p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/academy/pathways">Open Full Pathways Guide &rarr;</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pathways.map((pw, idx) => (
              <Link
                key={pw.slug}
                href={`/academy/pathways#${pw.slug}`}
                className="rounded-xl border border-brand-border bg-brand-white p-4 hover:border-brand-navy transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600 block">
                    Pathway 0{idx + 1}
                  </span>
                  <h3 className="mt-1 text-sm font-bold text-brand-navy">{pw.title}</h3>
                  <p className="mt-1.5 text-xs text-gray-600 line-clamp-2">{pw.audienceSummary}</p>
                </div>
                <span className="mt-3 text-xs font-bold text-brand-navy block">
                  View Pathway &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* All Published Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programmes.map((prog) => (
            <ProgrammeCard key={prog.slug} programme={prog} />
          ))}
        </div>

        {/* Student Support & Customized Organizational Training Links */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-brand-border bg-brand-gray p-8">
            <h2 className="text-xl font-bold text-brand-navy">
              Need IT / SIWES or Academic Project Support?
            </h2>
            <p className="mt-2 text-sm text-brand-charcoal leading-relaxed">
              University and polytechnic students looking for industrial training mentorship or final-year academic project guidance have dedicated support tracks outside the regular course catalogue.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="primary" size="sm" asChild>
                <Link href="/academy/siwes-support">Get IT/SIWES Support</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/academy/project-support">Discuss Your Academic Project</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-border bg-brand-gray p-8">
            <h2 className="text-xl font-bold text-brand-navy">
              Curriculum Topics &amp; Customized Organizational Training
            </h2>
            <p className="mt-2 text-sm text-brand-charcoal leading-relaxed">
              In addition to our scheduled cohorts above, we deliver customized training across these technology and AI domains for companies, schools, and institutions.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {ACADEMY_SUBJECT_AREAS.slice(0, 8).map((topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-brand-white px-2.5 py-1 text-xs font-medium text-brand-charcoal border border-brand-border"
                >
                  {topic}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="primary" size="sm" asChild>
                <Link href="/academy/corporate-training">Request Customized Training &rarr;</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

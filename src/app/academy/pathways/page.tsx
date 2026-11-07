import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllLearningPathways, getProgrammesByPathway } from '@/lib/content';
import { ProgrammeCard } from '@/components/academy/ProgrammeCard';
import { FindYourPathSelector } from '@/components/academy/FindYourPathSelector';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'AI & Technology Learning Pathways | 3A Techvolution Academy',
  description:
    'Explore structured, audience-based AI learning pathways at 3A Techvolution Academy: AI for Beginners, Students & Researchers, Graduates & NYSC Members, Professionals & Businesses, and Vibe Coding.',
};

export default function LearningPathwaysPage() {
  const pathways = getAllLearningPathways();

  return (
    <div className="bg-brand-white">
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20 text-brand-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link
              href="/academy"
              className="text-xs font-semibold text-brand-yellow hover:underline"
            >
              &larr; Back to 3A Techvolution Academy
            </Link>
            <div className="mt-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold text-brand-yellow">
              Structured Learning Architecture
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-white">
              Explore Our Learning Pathways
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
              Rather than displaying an unrelated list of courses, 3A Techvolution Academy organizes learning into five audience-focused pathways so you can build the exact skills relevant to your stage and career goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {pathways.map((pw) => (
                <a
                  key={pw.slug}
                  href={`#${pw.slug}`}
                  className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-brand-yellow hover:text-brand-navy transition-colors"
                >
                  {pw.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Path Selector */}
      <FindYourPathSelector />

      {/* 5 Learning Pathways Breakdown */}
      <section className="py-16">
        <div className="container-custom space-y-16">
          {pathways.map((pathway, index) => {
            const mappedCourses = getProgrammesByPathway(pathway.slug);

            return (
              <div
                key={pathway.slug}
                id={pathway.slug}
                className="scroll-mt-24 rounded-2xl border border-brand-border bg-brand-gray/40 p-6 sm:p-10"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <span className="inline-flex items-center rounded-md bg-brand-navy px-3 py-1 text-xs font-extrabold text-brand-yellow">
                      Pathway 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                      {pathway.title}
                    </h2>
                    <p className="text-sm font-semibold text-brand-navy/80">
                      Audience: {pathway.audienceSummary}
                    </p>
                    <p className="text-sm text-brand-charcoal leading-relaxed">
                      {pathway.description}
                    </p>

                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                        Core Focus Areas
                      </h3>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-brand-charcoal">
                        {pathway.focusAreas.map((focus) => (
                          <li key={focus} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                        Recommended For
                      </h3>
                      <ul className="space-y-1.5 text-xs text-brand-charcoal">
                        {pathway.recommendedFor.map((rec) => (
                          <li key={rec} className="flex items-start gap-2">
                            <span className="font-bold text-brand-navy">✓</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button variant="primary" size="sm" asChild>
                        <Link
                          href={`/contact?type=course-info&subject=${encodeURIComponent(`Pathway Enquiry: ${pathway.title}`)}`}
                        >
                          Enquire About This Pathway &rarr;
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Mapped Courses in this Pathway */}
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy">
                      Mapped Courses in This Pathway ({mappedCourses.length})
                    </h3>
                    <div className="grid grid-cols-1 gap-6">
                      {mappedCourses.map((course) => (
                        <ProgrammeCard key={course.slug} programme={course} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}


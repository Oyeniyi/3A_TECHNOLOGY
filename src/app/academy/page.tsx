import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AcademyHero } from '@/components/academy/AcademyHero';
import { LearningPillars } from '@/components/academy/LearningPillars';
import { ProgrammeCard } from '@/components/academy/ProgrammeCard';
import { EventCard } from '@/components/academy/EventCard';
import { Button } from '@/components/ui/Button';
import {
  getAllProgrammes,
  getAllAcademyEvents,
  getAllAcademyResources,
} from '@/lib/content';
import { ACADEMY_SUBJECT_AREAS } from '@/data/programmes';

export const metadata: Metadata = {
  title: '3A Techvolution Academy | Practical AI Education, Vibe Coding & Resources',
  description:
    '3A TECHVOLUTION ACADEMY is an AI-focused educational academy helping students, graduates, professionals, and organizations master AI fluency, prompt engineering, vibe coding, and AI automation.',
};

export default function AcademyPage() {
  const programmes = getAllProgrammes();
  const events = getAllAcademyEvents().slice(0, 3);
  const resources = getAllAcademyResources().slice(0, 3);

  return (
    <div>
      <AcademyHero />
      <LearningPillars />

      {/* Section A: Functional Course Catalogue */}
      <section className="py-16 bg-brand-light-gray/40" aria-labelledby="academy-courses-heading">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy">
                A. AI Training Programmes
              </p>
              <h2 id="academy-courses-heading" className="text-2xl md:text-3xl font-bold text-brand-navy mt-1">
                Available AI Courses &amp; Cohorts
              </h2>
              <p className="text-sm text-brand-dark-gray/80 mt-2 max-w-2xl">
                Each course below shows its current registration status, schedule, pricing, and direct enrolment link.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/academy/programmes">View Full Course Catalogue</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {programmes.map((programme) => (
              <ProgrammeCard key={programme.slug} programme={programme} />
            ))}
          </div>

          {/* Subject Areas Covered (with clear status disclosure) */}
          <div className="mt-12 rounded-xl border border-brand-border bg-brand-white p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-brand-navy">
                  Core AI Subject Areas We Teach
                </h3>
                <p className="text-xs text-brand-dark-gray/75 mt-1">
                  Note: These represent our curriculum domains across cohorts and corporate training. Only programmes explicitly listed in the Course Catalogue above are currently scheduled as active standalone courses.
                </p>
              </div>
              <Link
                href="/contact?type=academy-programme&subject=Corporate+AI+Training+Enquiry"
                className="text-xs font-bold text-brand-navy hover:underline shrink-0"
              >
                Request Custom Team Training &rarr;
              </Link>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-4">
              {ACADEMY_SUBJECT_AREAS.map((subject) => (
                <span
                  key={subject}
                  className="rounded-full bg-brand-gray px-3.5 py-1.5 text-xs font-semibold text-brand-charcoal border border-brand-border"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Vibe Coding & AI-Assisted Development Highlight */}
      <section className="py-16 bg-brand-navy text-brand-white" aria-labelledby="vibe-coding-spotlight">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-yellow">
                B. Vibe Coding &amp; AI-Assisted Development
              </span>
              <h2 id="vibe-coding-spotlight" className="mt-4 text-3xl sm:text-4xl font-extrabold text-brand-white">
                Turn Ideas into Working Software with AI Coding Agents
              </h2>
              <p className="mt-4 text-base text-gray-200 leading-relaxed">
                Vibe coding is not about blindly pasting code you do not understand. At 3A Techvolution Academy, we teach you how to write clear technical specifications, guide AI coding assistants, verify generated logic, debug issues, and ship reliable web applications.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="accent" asChild>
                  <Link href="/academy/vibe-coding">Explore Vibe Coding Methodology &rarr;</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/academy/programmes/vibe-coding-ai-software-development">
                    View Vibe Coding Bootcamp
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-yellow mb-4">
                What Learners Practice
              </h3>
              <ul className="space-y-3 text-sm text-gray-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-yellow font-bold">✓</span>
                  <span>Build websites and full-stack web applications with AI coding tools</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-yellow font-bold">✓</span>
                  <span>Prototype software ideas rapidly from structured specifications</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-yellow font-bold">✓</span>
                  <span>Read, understand, review, and test AI-generated code</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-yellow font-bold">✓</span>
                  <span>Debug and improve existing applications responsibly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section C: AI Seminars & Workshops */}
      <section className="py-16 bg-brand-white" aria-labelledby="seminars-heading">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy">
                C. Seminars, Webinars &amp; Workshops
              </p>
              <h2 id="seminars-heading" className="text-2xl md:text-3xl font-bold text-brand-navy mt-1">
                Upcoming AI Events &amp; Learning Sessions
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/academy/events">View All Seminars &amp; Events</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Section D: AI Educational Resource Library Preview */}
      <section className="py-16 bg-brand-gray border-t border-brand-border" aria-labelledby="resources-preview-heading">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy">
                D. Academy Resource Library
              </p>
              <h2 id="resources-preview-heading" className="text-2xl md:text-3xl font-bold text-brand-navy mt-1">
                Free Guides, Templates &amp; Paid AI Toolkits
              </h2>
              <p className="text-sm text-brand-dark-gray/80 mt-2 max-w-2xl">
                Download free AI starter guides and prompt engineering checklists immediately, or request our comprehensive paid workbooks and toolkits.
              </p>
            </div>
            <Button variant="primary" asChild>
              <Link href="/academy/resources">Open Full Resource Library &rarr;</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.slug}
                className="flex flex-col justify-between rounded-xl border border-brand-border bg-brand-white p-6 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                      {resource.category}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold border ${
                        resource.accessType === 'Free'
                          ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                          : 'bg-amber-50 text-amber-900 border-amber-300'
                      }`}
                    >
                      {resource.accessType === 'Free'
                        ? 'Free Download'
                        : `Paid • ${resource.priceDisplay}`}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">{resource.title}</h3>
                  <p className="mt-2 text-sm text-brand-dark-gray/80 leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border">
                  <Link
                    href="/academy/resources"
                    className="text-xs font-bold text-brand-navy hover:underline"
                  >
                    {resource.accessType === 'Free'
                      ? 'Download Free Resource →'
                      : 'View Paid Toolkit Details →'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

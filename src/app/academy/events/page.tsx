import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllAcademyEvents } from '@/lib/content';
import { SEMINAR_PROGRAMME_TYPES } from '@/data/events';
import { EventCard } from '@/components/academy/EventCard';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'AI Seminars, Webinars & Practical Workshops | 3A Techvolution Academy',
  description:
    'Join AI awareness programmes, AI fluency webinars, NYSC educational programmes, student technology seminars, practical AI workshops, and vibe coding sessions organized by 3A Techvolution Academy.',
};

export default function AcademyEventsPage() {
  const events = getAllAcademyEvents();

  return (
    <div className="bg-brand-white">
      <section className="bg-brand-navy py-16 text-brand-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link
              href="/academy"
              className="text-xs font-semibold text-brand-yellow hover:underline"
            >
              &larr; Back to 3A Techvolution Academy
            </Link>
            <div className="mt-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold text-brand-yellow">
              Distinct from Multi-Week Courses
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-white">
              AI Seminars, Webinars &amp; Practical Workshops
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
              We organize AI awareness programmes, fluency webinars, NYSC educational programmes, student technology seminars, hands-on workshops, and organizational sessions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          {/* Categories of Seminars & Workshops */}
          <div className="mb-10 rounded-xl border border-brand-border bg-brand-gray/60 p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-navy mb-3">
              Event &amp; Seminar Formats We Deliver
            </h2>
            <div className="flex flex-wrap gap-2">
              {SEMINAR_PROGRAMME_TYPES.map((type) => (
                <span
                  key={type}
                  className="rounded-full bg-brand-white px-3.5 py-1.5 text-xs font-semibold text-brand-charcoal border border-brand-border"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-brand-border bg-brand-gray p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold text-brand-navy">
                Host an AI Seminar or Workshop for Your School, NYSC Group, or Organization
              </h2>
              <p className="mt-2 text-sm text-brand-charcoal leading-relaxed">
                We partner with universities, polytechnics, student associations, NYSC CDS groups, and corporate teams to deliver tailored AI awareness and productivity workshops.
              </p>
            </div>
            <Button variant="primary" asChild>
              <Link href="/academy/corporate-training">
                Request Customized Workshop &rarr;
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

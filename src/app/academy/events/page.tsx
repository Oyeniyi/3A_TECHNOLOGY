import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllAcademyEvents } from '@/lib/content';
import { EventCard } from '@/components/academy/EventCard';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'AI Seminars, Webinars & Practical Workshops | 3A Techvolution Academy',
  description:
    'Join upcoming AI awareness seminars, AI fluency webinars, practical workshops, and organizational AI training sessions organized by 3A Techvolution Academy.',
};

export default function AcademyEventsPage() {
  const events = getAllAcademyEvents();

  return (
    <div className="bg-brand-white">
      <section className="bg-brand-navy py-16 text-brand-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link href="/academy" className="text-xs font-semibold text-brand-yellow hover:underline">
              &larr; Back to 3A Techvolution Academy
            </Link>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-white">
              AI Seminars, Webinars &amp; Workshops
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
              We organize AI awareness seminars, fluency webinars, hands-on workshops, and custom organizational training for students, graduates, professionals, and teams.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-brand-border bg-brand-gray p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold text-brand-navy">
                Host an AI Workshop for Your School, Company, or Association
              </h2>
              <p className="mt-2 text-sm text-brand-dark-gray/80 leading-relaxed">
                We run tailored AI literacy and workflow productivity sessions for universities, corporate departments, student bodies, and professional associations.
              </p>
            </div>
            <Button variant="primary" asChild>
              <Link href="/contact?type=academy&subject=Organizational+AI+Workshop+Request">
                Request a Custom Workshop
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


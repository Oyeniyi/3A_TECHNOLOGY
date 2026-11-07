import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { getFeaturedProgrammes, getAllAcademyEvents } from '@/lib/content';
import { Badge } from '@/components/ui/Badge';

export function AcademyBanner() {
  const featuredCourses = getFeaturedProgrammes(2);
  const upcomingEvents = getAllAcademyEvents().slice(0, 2);

  return (
    <section className="bg-brand-navy py-20 text-brand-white" aria-labelledby="academy-banner-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-yellow">
              AI-Focused Educational Academy
            </span>
            <h2 id="academy-banner-heading" className="mt-4 text-3xl font-extrabold sm:text-4xl text-brand-white">
              3A Techvolution Academy
            </h2>
            <p className="mt-3 text-base text-gray-200 leading-relaxed">
              We help individuals, students, graduates, professionals, business owners, and organizations understand and practically use Artificial Intelligence—through structured AI courses, vibe coding bootcamps, live seminars, and downloadable learning resources.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/academy/programmes">
              <Button variant="accent" size="md">
                Explore AI Courses &rarr;
              </Button>
            </Link>
            <Link href="/academy/resources">
              <Button
                variant="outline"
                size="md"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Explore Learning Resources
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured AI Courses & Seminars Preview */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <div
              key={course.slug}
              className="flex flex-col justify-between rounded-xl border border-white/15 bg-white/5 p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge status={course.status} />
                  <span className="text-xs font-semibold text-brand-yellow">{course.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-white">{course.title}</h3>
                <p className="mt-2 text-xs text-gray-300 leading-relaxed">
                  {course.shortDescription}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-yellow">{course.feeDisplay}</span>
                <Link
                  href={`/academy/programmes/${course.slug}`}
                  className="text-xs font-bold text-brand-white hover:text-brand-yellow underline"
                >
                  Course Details &rarr;
                </Link>
              </div>
            </div>
          ))}

          {/* Upcoming Seminars, Vibe Coding & Resources Card */}
          <div className="flex flex-col justify-between rounded-xl border border-brand-yellow/30 bg-blue-950/60 p-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
                Seminars, Vibe Coding &amp; Guides
              </span>
              <h3 className="mt-2 text-lg font-bold text-brand-white">
                Upcoming Workshops &amp; Resource Library
              </h3>
              <ul className="mt-4 space-y-3 text-xs text-gray-200">
                {upcomingEvents.map((ev) => (
                  <li key={ev.slug} className="border-l-2 border-brand-yellow pl-3">
                    <div className="font-bold text-brand-white">{ev.title}</div>
                    <div className="text-gray-300 mt-0.5">
                      {ev.dateDisplay} • {ev.format}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-4">
              <Link
                href="/academy/events"
                className="text-xs font-bold text-brand-yellow hover:underline"
              >
                All Seminars &rarr;
              </Link>
              <Link
                href="/academy/vibe-coding"
                className="text-xs font-bold text-brand-white hover:underline"
              >
                Vibe Coding &rarr;
              </Link>
              <Link
                href="/academy/resources"
                className="text-xs font-bold text-brand-white hover:underline"
              >
                Free &amp; Paid Guides &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

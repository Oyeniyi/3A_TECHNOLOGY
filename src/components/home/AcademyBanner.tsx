import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { getFeaturedProgrammes, getAllAcademyEvents } from '@/lib/content';
import { Badge } from '@/components/ui/Badge';

export function AcademyBanner() {
  const featuredCourses = getFeaturedProgrammes(2);
  const upcomingEvents = getAllAcademyEvents().slice(0, 2);

  return (
    <section
      className="bg-brand-navy py-20 text-brand-white"
      aria-labelledby="academy-banner-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-yellow">
              3A TECHVOLUTION ACADEMY — Learn. Build. Advance.
            </span>
            <h2
              id="academy-banner-heading"
              className="mt-4 text-3xl font-extrabold sm:text-4xl text-brand-white"
            >
              3A Techvolution Academy
            </h2>
            <p className="mt-3 text-base text-gray-200 leading-relaxed">
              Practical technology education, AI skills development, and academic and industrial training support for the next generation of technology professionals. Explore our audience-based AI learning pathways, IT/SIWES training support, academic project mentorship, seminars, and resource hub.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/academy">
              <Button variant="accent" size="md">
                Explore the Academy &rarr;
              </Button>
            </Link>
            <Link href="/academy/pathways">
              <Button
                variant="outline"
                size="md"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Learning Pathways
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured AI Courses, Student Support & Seminars Preview */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <div
              key={course.slug}
              className="flex flex-col justify-between rounded-xl border border-white/15 bg-white/5 p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge status={course.status} />
                  {course.duration && (
                    <span className="text-xs font-semibold text-brand-yellow">
                      {course.duration}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-brand-white">{course.title}</h3>
                <p className="mt-2 text-xs text-gray-200 leading-relaxed">
                  {course.shortDescription}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-yellow">{course.feeDisplay}</span>
                <Link
                  href={`/academy/programmes/${course.slug}`}
                  className="text-xs font-bold text-brand-white hover:text-brand-yellow underline"
                >
                  View Programme &rarr;
                </Link>
              </div>
            </div>
          ))}

          {/* Student Support, Seminars & Resource Hub Card */}
          <div className="flex flex-col justify-between rounded-xl border border-brand-yellow/30 bg-blue-950/60 p-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
                Student Support, Seminars &amp; Resources
              </span>
              <h3 className="mt-2 text-lg font-bold text-brand-white">
                IT/SIWES, Academic Projects &amp; Live Workshops
              </h3>
              <ul className="mt-4 space-y-3 text-xs text-gray-200">
                <li className="border-l-2 border-brand-yellow pl-3">
                  <div className="font-bold text-brand-white">IT / SIWES Training Support</div>
                  <div className="text-gray-300 mt-0.5">
                    Weekly practical tasks, coding/AI mentorship &amp; logbook/report guidance
                  </div>
                </li>
                <li className="border-l-2 border-brand-yellow pl-3">
                  <div className="font-bold text-brand-white">Academic Project Support</div>
                  <div className="text-gray-300 mt-0.5">
                    Topic refinement, Python/ML &amp; software mentorship, defence prep
                  </div>
                </li>
                {upcomingEvents.slice(0, 1).map((ev) => (
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
                href="/academy/siwes-support"
                className="text-xs font-bold text-brand-yellow hover:underline"
              >
                IT/SIWES Support &rarr;
              </Link>
              <Link
                href="/academy/project-support"
                className="text-xs font-bold text-brand-white hover:underline"
              >
                Academic Projects &rarr;
              </Link>
              <Link
                href="/academy/resources"
                className="text-xs font-bold text-brand-white hover:underline"
              >
                Resource Hub &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

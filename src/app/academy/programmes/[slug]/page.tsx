import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllProgrammes, getProgrammeBySlug } from '@/lib/content';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { isSafeActionUrl } from '@/lib/security/sanitizer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface CourseDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getAllProgrammes().map((prog) => ({
    slug: prog.slug,
  }));
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const programme = getProgrammeBySlug(params.slug);
  if (!programme) {
    return { title: 'Course Not Found' };
  }
  return {
    title: `${programme.title} | 3A Techvolution Academy`,
    description: programme.shortDescription,
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const programme = getProgrammeBySlug(params.slug);

  if (!programme) {
    notFound();
  }

  const isRegistrationOpen =
    programme.status === 'Open for Enrolment' || programme.status === 'Upcoming';
  const hasValidEnrollUrl = isRegistrationOpen && isSafeActionUrl(programme.enrollmentUrl);

  const whatsappUrl = generateWhatsAppUrl({
    type: 'academy',
    courseTitle: programme.title,
  });

  return (
    <div className="bg-brand-white">
      {/* Course Hero */}
      <section className="bg-brand-navy py-16 text-brand-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link href="/academy/programmes" className="text-xs font-semibold text-brand-yellow hover:underline">
              &larr; Back to All AI Courses
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Badge status={programme.status} />
              <span className="text-xs font-medium text-gray-200">
                {programme.duration} &bull; {programme.format} &bull; {programme.level}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-brand-white">
              {programme.title}
            </h1>
            <p className="mt-4 text-lg text-gray-200 leading-relaxed">
              {programme.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Course Content & Enrolment Sidebar */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-3">Programme Overview</h2>
              <p className="text-base text-brand-dark-gray leading-relaxed">{programme.overview}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">What You Will Learn</h2>
              <ul className="space-y-3">
                {programme.learningOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-lg border border-brand-border bg-brand-gray/50 p-4 text-sm text-brand-charcoal">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-brand-yellow">
                      ✓
                    </span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Curriculum &amp; Modules</h2>
              <div className="space-y-3">
                {programme.curriculumModules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-lg border border-brand-border bg-brand-white p-4 text-sm font-medium text-brand-charcoal"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded bg-blue-50 text-xs font-bold text-brand-navy">
                      0{idx + 1}
                    </span>
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <section className="rounded-xl border border-brand-border bg-brand-gray/40 p-6">
                <h3 className="text-base font-bold text-brand-navy mb-3">Who Should Attend</h3>
                <ul className="space-y-2 text-sm text-brand-charcoal">
                  {programme.targetAudience.map((aud) => (
                    <li key={aud} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-navy" />
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-brand-border bg-brand-gray/40 p-6">
                <h3 className="text-base font-bold text-brand-navy mb-3">Prerequisites</h3>
                <ul className="space-y-2 text-sm text-brand-charcoal">
                  {programme.prerequisites.map((pre) => (
                    <li key={pre} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                      <span>{pre}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Enrolment Sidebar */}
          <div>
            <div className="rounded-xl border border-brand-border bg-brand-gray p-6 sticky top-24 space-y-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Course Status</span>
                <div className="mt-1">
                  <Badge status={programme.status} />
                </div>
              </div>

              <dl className="space-y-2.5 text-sm border-y border-brand-border py-4">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Duration:</dt>
                  <dd className="font-semibold text-brand-charcoal">{programme.duration}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Delivery Format:</dt>
                  <dd className="font-semibold text-brand-charcoal">{programme.format}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Skill Level:</dt>
                  <dd className="font-semibold text-brand-charcoal">{programme.level}</dd>
                </div>
                {programme.startDate && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Start Date:</dt>
                    <dd className="font-semibold text-brand-navy">{programme.startDate}</dd>
                  </div>
                )}
                <div className="flex justify-between">
                  <dt className="text-gray-500">Tuition:</dt>
                  <dd className="font-bold text-brand-navy">{programme.feeDisplay}</dd>
                </div>
                {programme.instructor && (
                  <div className="pt-2 border-t border-brand-border/60">
                    <dt className="text-xs text-gray-500">Facilitated By:</dt>
                    <dd className="text-xs font-semibold text-brand-charcoal mt-0.5">
                      {programme.instructor.name} ({programme.instructor.role})
                    </dd>
                  </div>
                )}
              </dl>

              {hasValidEnrollUrl ? (
                <div className="space-y-3">
                  <Button variant="accent" size="lg" fullWidth asChild>
                    <a
                      href={programme.enrollmentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-event="click_academy_enroll"
                    >
                      Enrol Now ↗
                    </a>
                  </Button>
                  <p className="text-[11px] text-gray-500 text-center">
                    Opens the dedicated registration form for this programme.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="rounded-md bg-brand-white p-3 text-xs text-brand-charcoal border border-brand-border">
                    Registration for this programme is currently closed or scheduled on request. Leave your details to be notified when the next cohort opens.
                  </div>
                  <Button variant="primary" size="md" fullWidth asChild>
                    <Link
                      href={`/contact?type=academy&subject=${encodeURIComponent(`Future Cohort Notification: ${programme.title}`)}`}
                    >
                      Notify Me for Future Cohort
                    </Link>
                  </Button>
                </div>
              )}

              <Button variant="outline" size="sm" fullWidth asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Chat with an Academy Advisor
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


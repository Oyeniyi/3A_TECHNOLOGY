import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllProgrammes, getProgrammeBySlug, getAllLearningPathways } from '@/lib/content';
import { getCourseCtaLabel } from '@/components/academy/ProgrammeCard';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { isSafeActionUrl } from '@/lib/security/sanitizer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

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

  const allPathways = getAllLearningPathways();
  const mappedPathways = allPathways.filter((pw) =>
    programme.learningPathways.includes(pw.slug)
  );

  const externalEnrollUrl = programme.cohortInfo?.registrationUrl || programme.enrollmentUrl;
  const hasVerifiedExternalUrl =
    (programme.status === 'Open for Enrolment' || programme.status === 'Upcoming') &&
    isSafeActionUrl(externalEnrollUrl);

  const primaryCtaLabel = getCourseCtaLabel(programme.status, programme.isCustomizedTraining);

  const whatsappUrl = generateWhatsAppUrl({
    type: 'academy',
    courseTitle: programme.title,
  });

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: programme.title,
    description: programme.shortDescription,
    provider: {
      '@type': 'EducationalOrganization',
      name: '3A TECHVOLUTION ACADEMY',
      sameAs: `${siteConfig.url}/academy`,
    },
    educationalLevel: programme.level,
    teaches: programme.learningOutcomes,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: programme.format,
      ...(programme.duration ? { courseWorkload: programme.duration } : {}),
    },
  };

  return (
    <div className="bg-brand-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      {/* Course Hero */}
      <section className="bg-brand-navy py-16 text-brand-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link
              href="/academy/programmes"
              className="text-xs font-semibold text-brand-yellow hover:underline"
            >
              &larr; Back to All AI &amp; Tech Courses
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Badge status={programme.status} />
              <span className="text-xs font-medium text-gray-200">
                {programme.duration ? `${programme.duration} • ` : ''}
                {programme.format} &bull; {programme.level}
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
              <p className="text-base text-brand-charcoal leading-relaxed">{programme.overview}</p>
            </section>

            {mappedPathways.length > 0 && (
              <section className="rounded-xl border border-brand-border bg-brand-gray/50 p-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-brand-navy mb-3">
                  Included in Learning Pathways
                </h2>
                <div className="flex flex-wrap gap-2">
                  {mappedPathways.map((pw) => (
                    <Link
                      key={pw.slug}
                      href={`/academy/pathways#${pw.slug}`}
                      className="rounded-full bg-brand-white px-3.5 py-1.5 text-xs font-semibold text-brand-navy border border-brand-border hover:border-brand-navy"
                    >
                      {pw.title} &rarr;
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">What You Will Learn</h2>
              <ul className="space-y-3">
                {programme.learningOutcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-lg border border-brand-border bg-brand-gray/50 p-4 text-sm text-brand-charcoal"
                  >
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

          {/* Enrolment & Cohort Information Sidebar */}
          <div>
            <div className="rounded-xl border border-brand-border bg-brand-gray p-6 sticky top-24 space-y-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Enrolment Status
                </span>
                <div className="mt-1">
                  <Badge status={programme.status} />
                </div>
              </div>

              {programme.cohortInfo && (
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-3.5 text-xs text-brand-charcoal space-y-1">
                  <div className="font-bold text-brand-navy">
                    Cohort / Intake: {programme.cohortInfo.cohortLabel}
                  </div>
                  {programme.cohortInfo.intakeWindow && (
                    <div>{programme.cohortInfo.intakeWindow}</div>
                  )}
                  {programme.cohortInfo.scheduleNotes && (
                    <div className="text-gray-600">{programme.cohortInfo.scheduleNotes}</div>
                  )}
                </div>
              )}

              <dl className="space-y-2.5 text-sm border-y border-brand-border py-4">
                {programme.duration && (
                  <div className="flex justify-between gap-2">
                    <dt className="text-gray-600">Duration:</dt>
                    <dd className="font-semibold text-brand-charcoal text-right">
                      {programme.duration}
                    </dd>
                  </div>
                )}
                <div className="flex justify-between gap-2">
                  <dt className="text-gray-600">Delivery Format:</dt>
                  <dd className="font-semibold text-brand-charcoal text-right">
                    {programme.format}
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-gray-600">Skill Level:</dt>
                  <dd className="font-semibold text-brand-charcoal text-right">
                    {programme.level}
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-gray-600">Tuition:</dt>
                  <dd className="font-bold text-brand-navy text-right">{programme.feeDisplay}</dd>
                </div>
                {programme.instructor && (
                  <div className="pt-2 border-t border-brand-border/60">
                    <dt className="text-xs text-gray-600">Facilitated By:</dt>
                    <dd className="text-xs font-semibold text-brand-charcoal mt-0.5">
                      {programme.instructor.name} ({programme.instructor.role})
                    </dd>
                  </div>
                )}
              </dl>

              {hasVerifiedExternalUrl ? (
                <div className="space-y-3">
                  <Button variant="accent" size="lg" fullWidth asChild>
                    <a
                      href={externalEnrollUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-event="click_academy_enroll"
                    >
                      {primaryCtaLabel} ↗
                    </a>
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Button variant="accent" size="lg" fullWidth asChild>
                    <Link
                      href={programme.enquiryRoute}
                      data-analytics-event="click_academy_enquire"
                    >
                      {primaryCtaLabel} &rarr;
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

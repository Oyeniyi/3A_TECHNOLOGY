/**
 * @file ProgrammeCard.tsx
 * @description Structured AI & Technology Course Card separating permanent course definition
 * from cohort/intake schedule, displaying course duration only when known, showing mapped
 * learning pathways, and enforcing status-specific CTA labels without invented URLs.
 */

import React from 'react';
import Link from 'next/link';
import type { AcademyProgramme, CourseStatus } from '@/types/content';
import { learningPathways } from '@/data/programmes';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { isSafeActionUrl } from '@/lib/security/sanitizer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProgrammeCardProps {
  programme: AcademyProgramme;
}

export function getCourseCtaLabel(status: CourseStatus, isCustomizedTraining?: boolean): string {
  if (isCustomizedTraining) {
    return 'Request Customized Training';
  }
  switch (status) {
    case 'Open for Enrolment':
      return 'Enrol Now';
    case 'Upcoming':
      return 'Register Interest';
    case 'Registration Closed':
      return 'Join Next Cohort';
    case 'Ongoing':
      return 'View Programme';
    case 'Completed':
      return 'Join Next Cohort';
    default:
      return 'View Programme';
  }
}

export const ProgrammeCard: React.FC<ProgrammeCardProps> = ({ programme }) => {
  const whatsappUrl = generateWhatsAppUrl({
    type: 'academy',
    courseTitle: programme.title,
  });

  const externalEnrollUrl = programme.cohortInfo?.registrationUrl || programme.enrollmentUrl;
  const hasVerifiedExternalUrl =
    (programme.status === 'Open for Enrolment' || programme.status === 'Upcoming') &&
    isSafeActionUrl(externalEnrollUrl);

  const primaryCtaLabel = getCourseCtaLabel(programme.status, programme.isCustomizedTraining);
  const primaryActionHref =
    programme.status === 'Ongoing'
      ? `/academy/programmes/${programme.slug}`
      : programme.enquiryRoute;

  const mappedPathways = learningPathways.filter((pw) =>
    programme.learningPathways.includes(pw.slug)
  );

  return (
    <Card hoverEffect className="flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <Badge status={programme.status} />
          <span className="text-xs text-gray-600 font-medium">
            {programme.duration ? `${programme.duration} • ` : ''}
            {programme.format}
          </span>
        </div>

        <Link href={`/academy/programmes/${programme.slug}`} className="group">
          <h3 className="text-xl font-bold text-brand-navy group-hover:underline mb-2">
            {programme.title}
          </h3>
        </Link>

        <p className="text-sm text-brand-charcoal mb-4 leading-relaxed">
          {programme.shortDescription}
        </p>

        {/* Mapped Learning Pathways */}
        {mappedPathways.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {mappedPathways.map((pw) => (
              <Link
                key={pw.slug}
                href={`/academy/pathways#${pw.slug}`}
                className="rounded-full bg-brand-gray px-2.5 py-0.5 text-[11px] font-semibold text-brand-navy border border-brand-border hover:bg-blue-50"
              >
                Pathway: {pw.shortTitle}
              </Link>
            ))}
          </div>
        )}

        {/* Separated Cohort / Intake Information */}
        {programme.cohortInfo && (
          <div className="mb-4 rounded-lg border border-blue-100 bg-blue-50/70 p-3 text-xs text-brand-charcoal">
            <div className="font-bold text-brand-navy">
              Cohort Intake: {programme.cohortInfo.cohortLabel}
            </div>
            {programme.cohortInfo.intakeWindow && (
              <div className="mt-0.5 text-gray-700">{programme.cohortInfo.intakeWindow}</div>
            )}
            {programme.cohortInfo.scheduleNotes && (
              <div className="mt-0.5 text-gray-600">{programme.cohortInfo.scheduleNotes}</div>
            )}
          </div>
        )}

        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
            Who It Is For
          </h4>
          <p className="text-xs text-brand-charcoal bg-brand-gray/70 p-2 rounded">
            {programme.targetAudience.join(' • ')}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
            Key Topics Covered
          </h4>
          <ul className="space-y-1.5">
            {programme.curriculumModules.slice(0, 4).map((mod: string, idx: number) => (
              <li key={idx} className="text-xs text-brand-charcoal flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                <span>{mod}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-brand-border space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold uppercase tracking-wider text-gray-600">
            Level: {programme.level}
          </span>
          <span className="font-semibold text-brand-navy">{programme.feeDisplay}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/academy/programmes/${programme.slug}`}>View Programme</Link>
          </Button>

          {hasVerifiedExternalUrl ? (
            <Button variant="accent" size="sm" className="flex-1" asChild>
              <a
                href={externalEnrollUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="click_academy_enroll"
              >
                {primaryCtaLabel} ↗
              </a>
            </Button>
          ) : (
            <Button
              variant={programme.status === 'Open for Enrolment' ? 'accent' : 'primary'}
              size="sm"
              className="flex-1"
              asChild
            >
              <Link
                href={primaryActionHref}
                data-analytics-event="click_academy_enquire"
              >
                {primaryCtaLabel} &rarr;
              </Link>
            </Button>
          )}
        </div>

        <div className="pt-1 text-right">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="click_whatsapp_academy"
            className="text-xs font-medium text-brand-navy hover:underline"
          >
            Ask an Advisor on WhatsApp &rarr;
          </a>
        </div>
      </div>
    </Card>
  );
};

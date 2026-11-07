/**
 * @file ProgrammeCard.tsx
 * @description Functional AI Course Card supporting course-specific registration URLs,
 * 5 course lifecycle statuses, and links to detailed course pages.
 */

import React from 'react';
import Link from 'next/link';
import type { AcademyProgramme } from '@/types/content';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { isSafeActionUrl } from '@/lib/security/sanitizer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProgrammeCardProps {
  programme: AcademyProgramme;
}

export const ProgrammeCard: React.FC<ProgrammeCardProps> = ({ programme }) => {
  const whatsappUrl = generateWhatsAppUrl({
    type: 'academy',
    courseTitle: programme.title,
  });

  const isRegistrationOpen =
    programme.status === 'Open for Enrolment' || programme.status === 'Upcoming';
  const hasValidEnrollUrl = isRegistrationOpen && isSafeActionUrl(programme.enrollmentUrl);

  return (
    <Card hoverEffect className="flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <Badge status={programme.status} />
          <span className="text-xs text-brand-dark-gray/70 font-medium">
            {programme.duration} &bull; {programme.format}
          </span>
        </div>

        <Link href={`/academy/programmes/${programme.slug}`} className="group">
          <h3 className="text-xl font-bold text-brand-navy group-hover:underline mb-2">
            {programme.title}
          </h3>
        </Link>

        <p className="text-sm text-brand-dark-gray/80 mb-4 leading-relaxed">
          {programme.shortDescription}
        </p>

        {programme.startDate && (
          <div className="mb-4 text-xs font-medium text-brand-navy bg-blue-50/70 px-3 py-1.5 rounded border border-blue-100">
            Schedule: {programme.startDate}
          </div>
        )}

        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-dark-gray/70 mb-1.5">
            Who It Is For
          </h4>
          <p className="text-xs text-brand-dark-gray/90 bg-brand-light-gray/60 p-2 rounded">
            {programme.targetAudience.join(' • ')}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-dark-gray/70 mb-2">
            Key Topics Covered
          </h4>
          <ul className="space-y-1.5">
            {programme.curriculumModules.slice(0, 4).map((mod: string, idx: number) => (
              <li key={idx} className="text-xs text-brand-dark-gray flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                <span>{mod}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-brand-light-gray/60 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold uppercase tracking-wider text-gray-500">Level: {programme.level}</span>
          <span className="font-semibold text-brand-navy">{programme.feeDisplay}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/academy/programmes/${programme.slug}`}>
              Course Details
            </Link>
          </Button>

          {hasValidEnrollUrl ? (
            <Button variant="accent" size="sm" className="flex-1" asChild>
              <a
                href={programme.enrollmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="click_academy_enroll"
              >
                Enrol Now ↗
              </a>
            </Button>
          ) : (
            <Button variant="secondary" size="sm" className="flex-1" asChild>
              <Link
                href={`/contact?type=academy&subject=${encodeURIComponent(`Future Cohort Notification: ${programme.title}`)}`}
                data-analytics-event="click_academy_waitlist"
              >
                Notify Me Next Cohort
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

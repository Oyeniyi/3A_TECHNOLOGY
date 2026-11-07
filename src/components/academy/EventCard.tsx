import React from 'react';
import Link from 'next/link';
import { AcademyEvent } from '@/types/content';
import { isSafeActionUrl } from '@/lib/security/sanitizer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function EventCard({ event }: { event: AcademyEvent }) {
  const canRegisterExternally =
    (event.status === 'Registration Open' || event.status === 'Upcoming') &&
    isSafeActionUrl(event.registrationUrl);

  const ctaLabel =
    event.status === 'Registration Open'
      ? 'Register for Event'
      : event.status === 'Upcoming'
      ? 'Register Interest'
      : event.status === 'Completed'
      ? 'Request Future Edition'
      : 'Request Custom Session';

  return (
    <Card hoverEffect className="flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <Badge
            variant={
              event.status === 'Registration Open'
                ? 'yellow'
                : event.status === 'Upcoming'
                ? 'navy'
                : event.status === 'Completed'
                ? 'emerald'
                : 'neutral'
            }
          >
            {event.status}
          </Badge>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-navy">
            {event.format} Session
          </span>
        </div>

        <div className="mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-600">
          {event.categoryLabel}
        </div>

        <h3 className="text-xl font-bold text-brand-navy mb-2">{event.title}</h3>
        <p className="text-sm text-brand-charcoal leading-relaxed mb-4">{event.description}</p>

        <dl className="space-y-1.5 text-xs text-brand-charcoal bg-brand-gray/70 p-3 rounded-md border border-brand-border">
          <div className="flex justify-between gap-2">
            <dt className="font-semibold text-gray-600">Date:</dt>
            <dd className="font-medium text-brand-charcoal text-right">{event.dateDisplay}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="font-semibold text-gray-600">Time:</dt>
            <dd className="font-medium text-brand-charcoal text-right">{event.timeDisplay}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="font-semibold text-gray-600">Venue / Platform:</dt>
            <dd className="font-medium text-brand-charcoal text-right">{event.venueOrPlatform}</dd>
          </div>
          <div className="pt-1 border-t border-brand-border/60">
            <dt className="font-semibold text-gray-600 mb-0.5">Target Audience:</dt>
            <dd className="text-brand-charcoal">{event.targetAudience.join(' • ')}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 pt-4 border-t border-brand-border">
        {canRegisterExternally ? (
          <Button variant="primary" size="sm" fullWidth asChild>
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="click_seminar_register"
            >
              {ctaLabel} ↗
            </a>
          </Button>
        ) : (
          <Button
            variant={event.status === 'Registration Open' ? 'primary' : 'outline'}
            size="sm"
            fullWidth
            asChild
          >
            <Link href={event.enquiryHref}>{ctaLabel} &rarr;</Link>
          </Button>
        )}
      </div>
    </Card>
  );
}

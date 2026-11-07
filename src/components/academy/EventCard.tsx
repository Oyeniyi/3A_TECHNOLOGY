import React from 'react';
import Link from 'next/link';
import { AcademyEvent } from '@/types/content';
import { isSafeActionUrl } from '@/lib/security/sanitizer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function EventCard({ event }: { event: AcademyEvent }) {
  const canRegister =
    (event.status === 'Registration Open' || event.status === 'Upcoming') &&
    isSafeActionUrl(event.registrationUrl);

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
                : 'neutral'
            }
          >
            {event.status}
          </Badge>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-navy">
            {event.format} Session
          </span>
        </div>

        <h3 className="text-xl font-bold text-brand-navy mb-2">{event.title}</h3>
        <p className="text-sm text-brand-dark-gray/80 leading-relaxed mb-4">{event.description}</p>

        <dl className="space-y-1.5 text-xs text-brand-dark-gray bg-brand-gray/70 p-3 rounded-md border border-brand-border">
          <div className="flex justify-between gap-2">
            <dt className="font-semibold text-gray-500">Date:</dt>
            <dd className="font-medium text-brand-charcoal">{event.dateDisplay}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="font-semibold text-gray-500">Time:</dt>
            <dd className="font-medium text-brand-charcoal">{event.timeDisplay}</dd>
          </div>
          <div className="pt-1 border-t border-brand-border/60">
            <dt className="font-semibold text-gray-500 mb-0.5">Audience:</dt>
            <dd className="text-brand-charcoal">{event.targetAudience.join(' • ')}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 pt-4 border-t border-brand-border">
        {canRegister ? (
          <Button variant="primary" size="sm" fullWidth asChild>
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="click_seminar_register"
            >
              Register for Seminar ↗
            </a>
          </Button>
        ) : (
          <Button variant="outline" size="sm" fullWidth asChild>
            <Link
              href={`/contact?type=academy&subject=${encodeURIComponent(`Seminar Enquiry: ${event.title}`)}`}
            >
              Request Session / Enquire
            </Link>
          </Button>
        )}
      </div>
    </Card>
  );
}


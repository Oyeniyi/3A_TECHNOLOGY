/**
 * @file ProgrammeCard.tsx
 * @description Structural card component for displaying an Academy training programme track.
 * Follows design tokens: Navy #0B2B6B, Yellow #F7C800 accents, Dark Charcoal #1F2937 body text.
 */

import React from 'react';
import type { AcademyProgramme } from '@/types/content';
import { siteConfig } from '@/config/site';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
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

  return (
    <Card className="flex flex-col justify-between h-full hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="warning">{programme.level}</Badge>
          <span className="text-xs text-brand-dark-gray/60 font-medium">
            {programme.duration} • {programme.format}
          </span>
        </div>
        <h3 className="text-xl font-bold text-brand-navy mb-2">
          {programme.title}
        </h3>
        <p className="text-sm text-brand-dark-gray/80 mb-4 line-clamp-3">
          {programme.overview}
        </p>

        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-dark-gray/70 mb-2">
            Target Audience
          </h4>
          <p className="text-xs text-brand-dark-gray/90 bg-brand-light-gray/60 p-2 rounded">
            {programme.targetAudience.join(', ')}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-dark-gray/70 mb-2">
            Key Modules
          </h4>
          <ul className="space-y-1">
            {programme.curriculumModules.slice(0, 4).map((mod: string, idx: number) => (
              <li key={idx} className="text-xs text-brand-dark-gray flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                <span className="truncate">{mod}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-brand-light-gray/60 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold uppercase tracking-wider text-gray-500">Tuition & Schedule</span>
          <span className="font-semibold text-brand-navy">{programme.feeDisplay}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="primary" size="sm" className="flex-1" asChild>
            <a
              href={siteConfig.academy.enrollmentFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="click_academy_enroll"
            >
              Enroll Now ↗
            </a>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="click_whatsapp_academy"
            >
              Enquire via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

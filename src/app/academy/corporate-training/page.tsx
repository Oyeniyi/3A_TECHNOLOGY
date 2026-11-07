import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAcademySupportServiceBySlug } from '@/lib/content';
import { AcademyServiceTemplate } from '@/components/academy/AcademyServiceTemplate';

export const metadata: Metadata = {
  title: 'Customized Organizational & Institutional AI Training | 3A Techvolution Academy',
  description:
    'Tailored AI literacy, workplace productivity, workflow automation, and technical training programmes for businesses, universities, schools, NYSC groups, and communities.',
};

export default function CorporateTrainingPage() {
  const service = getAcademySupportServiceBySlug('corporate-training');

  if (!service) {
    notFound();
  }

  return <AcademyServiceTemplate service={service} />;
}


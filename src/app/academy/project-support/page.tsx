import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAcademySupportServiceBySlug } from '@/lib/content';
import { AcademyServiceTemplate } from '@/components/academy/AcademyServiceTemplate';

export const metadata: Metadata = {
  title: 'Academic Project Support & Technical Mentorship | 3A Techvolution Academy',
  description:
    'Structured technical consultation, project planning, dataset preparation, machine learning and software implementation guidance, documentation review, and defence preparation for computing and AI students.',
};

export default function AcademicProjectSupportPage() {
  const service = getAcademySupportServiceBySlug('project-support');

  if (!service) {
    notFound();
  }

  return <AcademyServiceTemplate service={service} />;
}


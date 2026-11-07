import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAcademySupportServiceBySlug } from '@/lib/content';
import { AcademyServiceTemplate } from '@/components/academy/AcademyServiceTemplate';

export const metadata: Metadata = {
  title: 'IT / SIWES Training Support for Students | 3A Techvolution Academy',
  description:
    'Practical technology skill development, programming and AI learning guidance, weekly technical tasks, SIWES logbook documentation, and technical report preparation for university and polytechnic students.',
};

export default function SiwesSupportPage() {
  const service = getAcademySupportServiceBySlug('siwes-support');

  if (!service) {
    notFound();
  }

  return <AcademyServiceTemplate service={service} />;
}


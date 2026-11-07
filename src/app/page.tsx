/**
 * @file page.tsx
 * @description Homepage for 3A Technology Solutions and 3A TECHVOLUTION ACADEMY.
 */

import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { DualPathwayGate } from '@/components/home/DualPathwayGate';
import { TrustBanner } from '@/components/home/TrustBanner';
import { ServiceGrid } from '@/components/home/ServiceGrid';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { Methodology } from '@/components/home/Methodology';
import { AcademyBanner } from '@/components/home/AcademyBanner';
import { ConversionBanner } from '@/components/home/ConversionBanner';

export const metadata: Metadata = {
  title: '3A Technology Solutions & 3A Techvolution Academy | Software, AI & Practical AI Education',
  description:
    '3A Technology Solutions builds web platforms, custom software, AI automations, data analytics, and supports computing/mathematics research. 3A Techvolution Academy teaches practical AI fluency, prompt engineering, and vibe coding.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <DualPathwayGate />
      <TrustBanner />
      <ServiceGrid />
      <FeaturedProjects />
      <Methodology />
      <AcademyBanner />
      <ConversionBanner />
    </>
  );
}

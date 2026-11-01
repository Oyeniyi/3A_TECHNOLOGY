/**
 * @file page.tsx
 * @description Homepage for 3A Technology Solutions platform.
 * Assembles all 8 PRD-mandated sections: Hero, DualPathwayGate, TrustBanner,
 * ServiceGrid, FeaturedProjects, Methodology, AcademyBanner, and ConversionBanner.
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
  title: 'Enterprise IT Solutions & Engineering Academy | Abuja, Nigeria',
  description:
    '3A Technology Solutions delivers mission-critical software engineering, cloud architecture, and cybersecurity solutions alongside the premier 3A Academy.',
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

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
  title: '3A Technology Solutions | Software, AI & Techvolution Academy',
  description:
    'We build custom software, web applications, AI automations, and data tools for businesses in Nigeria, and train new developers through 3A Techvolution Academy.',
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

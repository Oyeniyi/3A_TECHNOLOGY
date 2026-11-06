import React from 'react';
import type { Metadata } from 'next';
import { MissionStatement } from '@/components/about/MissionStatement';
import { DualEntityExplainer } from '@/components/about/DualEntityExplainer';
import { CoreValuesGrid } from '@/components/about/CoreValuesGrid';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About 3A Technology Solutions & 3A Techvolution Academy',
  description: `${siteConfig.brand.essence} Learn about ${siteConfig.name} (${siteConfig.legal.registeredName}, ${siteConfig.legal.rcNumber}), our five brand pillars, and 3A Techvolution Academy.`,
};

export default function AboutPage() {
  return (
    <div>
      <MissionStatement />
      <DualEntityExplainer />
      <CoreValuesGrid />
    </div>
  );
}

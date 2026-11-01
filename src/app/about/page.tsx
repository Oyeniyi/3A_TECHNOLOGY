import React from 'react';
import type { Metadata } from 'next';
import { MissionStatement } from '@/components/about/MissionStatement';
import { DualEntityExplainer } from '@/components/about/DualEntityExplainer';
import { CoreValuesGrid } from '@/components/about/CoreValuesGrid';

export const metadata: Metadata = {
  title: 'About 3A Technology Solutions & 3A Academy',
  description:
    'Learn about our mission to engineer resilient African enterprise systems and cultivate sovereign technical excellence from Abuja, Nigeria.',
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

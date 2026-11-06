import React from 'react';
import type { Metadata } from 'next';
import { AcademyHero } from '@/components/academy/AcademyHero';
import { LearningPillars } from '@/components/academy/LearningPillars';
import { TrackOverviewGrid } from '@/components/academy/TrackOverviewGrid';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3A Techvolution Academy | Practical Technology Education',
  description:
    'Hands-on engineering tracks in Practical Software Engineering, Applied AI & Automation, and Data Science & Machine Learning.',
};

export default function AcademyPage() {
  return (
    <div>
      <AcademyHero />
      <LearningPillars />

      <section className="py-16 bg-brand-light-gray/40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy">
                Current Offerings
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-1">
                Active Training Tracks
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/academy/programmes">View Complete Curriculum</Link>
            </Button>
          </div>

          <TrackOverviewGrid />
        </div>
      </section>
    </div>
  );
}

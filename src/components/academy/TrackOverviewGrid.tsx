import React from 'react';
import { getAllProgrammes } from '@/lib/content';
import { ProgrammeCard } from './ProgrammeCard';

export function TrackOverviewGrid() {
  const programmes = getAllProgrammes();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {programmes.map((programme) => (
        <ProgrammeCard key={programme.slug} programme={programme} />
      ))}
    </div>
  );
}

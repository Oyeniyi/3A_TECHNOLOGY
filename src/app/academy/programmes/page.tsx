import React from 'react';
import type { Metadata } from 'next';
import { getAllProgrammes } from '@/lib/content';
import { ProgrammeCard } from '@/components/academy/ProgrammeCard';

export const metadata: Metadata = {
  title: 'All Academy Training Programmes & Tracks | 3A Academy',
  description:
    'Comprehensive syllabus, module breakdown, target audience, and admission requirements for 3A Academy cohorts.',
};

export default function ProgrammesPage() {
  const programmes = getAllProgrammes();

  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">
            Curriculum Catalogue
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Professional Training Programmes
          </h1>
          <p className="text-base md:text-lg text-brand-dark-gray/80">
            Intensive, project-driven curriculums led by practicing enterprise architects. Learn real production engineering in Abuja or online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((prog) => (
            <ProgrammeCard key={prog.id} programme={prog} />
          ))}
        </div>
      </div>
    </div>
  );
}

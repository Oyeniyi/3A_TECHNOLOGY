import React from 'react';
import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/content';
import { ProjectCard } from '@/components/projects/ProjectCard';

export const metadata: Metadata = {
  title: 'Enterprise Case Studies & Delivered Systems',
  description:
    'Discover proven mission-critical software engineering, cloud migration, and cybersecurity projects delivered by 3A Technology Solutions.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">
            Proven Track Record
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Delivered Enterprise Case Studies
          </h1>
          <p className="text-base md:text-lg text-brand-dark-gray/80">
            A portfolio of production systems architected for financial institutions, government agencies, logistics networks, and health systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

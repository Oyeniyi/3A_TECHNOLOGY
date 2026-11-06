import React from 'react';
import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/content';
import { ProjectsClientCatalog } from '@/components/projects/ProjectsClientCatalog';

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description:
    'See the software, web tools, AI pipelines, and data science projects built by 3A Technology Solutions.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">
            Our Work
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Projects &amp; Case Studies
          </h1>
          <p className="text-base md:text-lg text-brand-dark-gray/80">
            Live software, working prototypes, and research tools we have built across web development, custom software, AI, and data science.
          </p>
        </div>

        <ProjectsClientCatalog projects={projects} />
      </div>
    </div>
  );
}

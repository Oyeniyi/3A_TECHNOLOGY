import React from 'react';
import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/content';
import { ProjectsClientCatalog } from '@/components/projects/ProjectsClientCatalog';

export const metadata: Metadata = {
  title: 'Portfolio | Business Solutions, Websites & Research Projects',
  description:
    'Explore 3A Technology Solutions’ portfolio across Business & Client Solutions (MarketMind AI for Akinmart Store, Dominion College Portal), Websites & Digital Experiences (Raph2 Interiors, Custom Digital Wedding Platform), and Selected Student & Research Projects.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">
            3A Technology Solutions Portfolio
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Business Solutions, Websites &amp; Technical Case Studies
          </h1>
          <p className="text-base md:text-lg text-brand-dark-gray/85 leading-relaxed">
            3A Technology Solutions develops practical digital solutions for businesses and institutions, builds high-converting websites and landing pages, creates custom software and AI-enabled tools, and supports academic and research projects.
          </p>
        </div>

        <ProjectsClientCatalog projects={projects} />
      </div>
    </div>
  );
}

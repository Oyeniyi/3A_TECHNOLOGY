'use client';

import React, { useState } from 'react';
import { Project } from '@/types/content';
import { ProjectFilterBar } from './ProjectFilterBar';
import { ProjectCard } from './ProjectCard';
import { EmptyState } from '@/components/ui/EmptyState';

export interface ProjectsClientCatalogProps {
  projects: Project[];
}

export function ProjectsClientCatalog({ projects }: ProjectsClientCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="space-y-10">
      <ProjectFilterBar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {filteredProjects.length === 0 ? (
        <EmptyState
          title="No Case Studies in This Category Yet"
          description="We currently have no published case studies matching this filter. Reset the filter to browse all delivered systems and prototypes."
          actionLabel="Reset Filters"
          onAction={() => setActiveCategory('all')}
        />
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}


import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllProjects, getProjectBySlug } from '@/lib/content';
import { Badge } from '@/components/ui/Badge';
import { TechStackBadges } from '@/components/projects/TechStackBadges';
import { CaseStudySections } from '@/components/projects/CaseStudySections';
import { Button } from '@/components/ui/Button';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} | Case Study | 3A Technology Solutions`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline">{project.clientSector}</Badge>
            <span className="text-xs text-brand-dark-gray/60 font-medium">{project.completionYear}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-brand-dark-gray/80 leading-relaxed">
            {project.summary}
          </p>
        </div>

        <div className="mb-12">
          <TechStackBadges stack={project.techStack} />
        </div>

        <div className="border-t border-brand-light-gray/80 pt-10">
          <CaseStudySections
            challenge={project.challenge}
            solution={project.solution}
            results={project.results}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-brand-light-gray/80 flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/projects">← Back to All Case Studies</Link>
          </Button>
          <Button variant="primary" asChild>
            <Link href={`/request-quote?ref=${encodeURIComponent(project.title)}`}>
              Inquire Similar Architecture
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

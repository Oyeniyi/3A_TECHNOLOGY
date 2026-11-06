import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllProjects, getProjectBySlug } from '@/lib/content';
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
    description: project.shortSummary,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom">
        <CaseStudySections project={project} />

        <div className="mt-16 pt-8 border-t border-brand-light-gray/80 flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/projects">← Back to All Projects</Link>
          </Button>
          <Button variant="primary" asChild>
            <Link href={`/request-quote?service=${encodeURIComponent(project.category)}`}>
              Request a Similar Project
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

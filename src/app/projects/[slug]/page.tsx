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
    title: project.seoTitle,
    description: project.seoDescription,
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
        <div className="mb-8">
          <Link
            href="/projects"
            className="text-xs font-semibold text-brand-navy hover:underline"
          >
            &larr; Back to Portfolio Overview
          </Link>
        </div>

        <CaseStudySections project={project} />

        <div className="mt-16 pt-8 border-t border-brand-light-gray/80 flex flex-wrap items-center justify-between gap-4">
          <Button variant="outline" asChild>
            <Link href="/projects">&larr; Back to All Portfolio Collections</Link>
          </Button>
          <Button variant="primary" asChild>
            <Link href={`/request-quote?service=${encodeURIComponent(project.category)}`}>
              Request a Similar Solution
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

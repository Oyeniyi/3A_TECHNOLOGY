import React from 'react';
import type { Metadata } from 'next';
import { getAllServices } from '@/lib/content';
import { ServiceCard } from '@/components/services/ServiceCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Technology, AI, Data & Academic Research Services',
  description:
    'Explore our six services: Web & Digital Product Development, Custom Software Engineering, AI & Automation, Data Science & Analytics, Technology Consulting, and Academic Research & Project Support.',
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">
            3A Technology Solutions
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Practical Technology Services &amp; Implementation
          </h1>
          <p className="text-base md:text-lg text-brand-dark-gray/80 leading-relaxed">
            We help businesses, organizations, educational institutions, and researchers use software engineering, artificial intelligence, data science, and technical consultation to solve practical problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="bg-brand-light-gray p-8 rounded-xl border border-brand-light-gray/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-1">
              Need a consultation or project quote?
            </h2>
            <p className="text-sm text-brand-dark-gray/80">
              Share your requirements—whether for a business system, AI workflow, or computing/mathematics research project—and our team will respond within one business day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button variant="primary" asChild>
              <Link href="/request-quote">Request a Project Quote</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { getAllServices } from '@/lib/content';
import { ServiceCard } from '@/components/services/ServiceCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Enterprise IT Services & Solutions',
  description:
    'Explore our 5 enterprise service disciplines: Custom Software, Cloud Architecture, IT Infrastructure, Cybersecurity, and IT Strategy.',
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">
            Enterprise Solutions
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Commercial Engineering Disciplines
          </h1>
          <p className="text-base md:text-lg text-brand-dark-gray/80">
            We deliver production-ready architectures built for scale, compliance, and enterprise resilience across Nigeria and West Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="bg-brand-light-gray p-8 rounded-xl border border-brand-light-gray/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-brand-navy mb-1">Need a custom technical proposal?</h3>
            <p className="text-sm text-brand-dark-gray/80">Our engineering leads evaluate requirements and respond within 24 business hours.</p>
          </div>
          <Button variant="primary" asChild>
            <Link href="/request-quote">Request an Architecture Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllServices, getServiceBySlug } from '@/lib/content';
import { ServiceDetailHero } from '@/components/services/ServiceDetailHero';
import { DeliverablesList } from '@/components/services/DeliverablesList';
import { Button } from '@/components/ui/Button';

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return { title: 'Service Not Found' };
  }
  return {
    title: `${service.title} | 3A Technology Solutions`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <ServiceDetailHero service={service} />

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Detailed Architecture & Scope</h2>
            <p className="text-base text-brand-dark-gray leading-relaxed mb-8">
              {service.fullDescription}
            </p>

            <DeliverablesList deliverables={service.deliverables} />
          </div>

          <div>
            <div className="bg-brand-light-gray p-6 rounded-xl border border-brand-light-gray/80 sticky top-24">
              <h3 className="text-lg font-bold text-brand-navy mb-3">Initiate Engagement</h3>
              <p className="text-xs text-brand-dark-gray/80 mb-6 leading-relaxed">
                Schedule a formal engineering assessment or request scoping for your organization.
              </p>
              <div className="space-y-3">
                <Button variant="primary" className="w-full" asChild>
                  <Link href={`/request-quote?service=${service.id}`}>
                    Request Scoped Quote
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/contact?subject=Enquiry:+${encodeURIComponent(service.title)}`}>
                    General Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

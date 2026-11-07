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
    description: service.shortSummary,
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
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-3">The Problem We Solve</h2>
              <p className="text-base text-brand-dark-gray leading-relaxed">
                {service.problemContext}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-3">How We Work With You</h2>
              <p className="text-base text-brand-dark-gray leading-relaxed">
                {service.technicalApproach}
              </p>
            </section>

            {service.ethicalNote && (
              <section className="rounded-xl border-l-4 border-l-brand-navy bg-blue-50/70 p-6">
                <h2 className="text-base font-bold text-brand-navy mb-2">
                  Professional &amp; Ethical Mentorship Standards
                </h2>
                <p className="text-sm text-brand-charcoal leading-relaxed">
                  {service.ethicalNote}
                </p>
              </section>
            )}

            <section>
              <h2 className="text-xl font-bold text-brand-navy mb-3">Who This Service Is For</h2>
              <div className="flex flex-wrap gap-2">
                {service.targetAudience.map((audience) => (
                  <span
                    key={audience}
                    className="rounded-full bg-brand-gray px-3 py-1 text-xs font-semibold text-brand-charcoal border border-brand-border"
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy mb-4">What We Deliver</h2>
              <DeliverablesList deliverables={service.deliverables} />
            </section>
          </div>

          <div>
            <div className="bg-brand-light-gray p-6 rounded-xl border border-brand-light-gray/80 sticky top-24">
              <h3 className="text-lg font-bold text-brand-navy mb-3">Start a Conversation</h3>
              <p className="text-xs text-brand-dark-gray/80 mb-6 leading-relaxed">
                Tell us what you are working on and we will respond with a clear consultation plan, scope, and estimate.
              </p>
              <div className="space-y-3">
                <Button variant="primary" className="w-full" asChild>
                  <Link href={`/request-quote?service=${service.slug}`}>
                    Request a Project Quote
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/contact?subject=Consultation:+${encodeURIComponent(service.title)}`}>
                    Request a Consultation
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

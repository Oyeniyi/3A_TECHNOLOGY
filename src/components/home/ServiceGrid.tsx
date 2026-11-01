import React from 'react';
import Link from 'next/link';
import { getAllServices } from '@/lib/content';
import { Card } from '@/components/ui/Card';

export function ServiceGrid() {
  const services = getAllServices();

  return (
    <section className="bg-brand-gray py-20" aria-labelledby="services-overview-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">Core Capabilities</span>
            <h2 id="services-overview-heading" className="mt-2 text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
              Engineering Built for Commercial Growth
            </h2>
          </div>
          <Link href="/services" className="mt-4 text-sm font-semibold text-brand-navy hover:underline sm:mt-0">
            View All Services &rarr;
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} hoverEffect className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-brand-navy">{service.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{service.shortSummary}</p>

                <div className="mt-6 border-t border-brand-border pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Deliverables</span>
                  <ul className="mt-2 space-y-1.5 text-xs text-brand-charcoal">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-brand-border pt-4">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-bold text-brand-navy hover:underline"
                >
                  Explore Specialization &rarr;
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

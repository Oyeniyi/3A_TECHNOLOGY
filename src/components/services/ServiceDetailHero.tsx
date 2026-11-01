import React from 'react';
import Link from 'next/link';
import { Service } from '@/types/content';
import { Button } from '@/components/ui/Button';

export function ServiceDetailHero({ service }: { service: Service }) {
  return (
    <div className="border-b border-brand-border bg-brand-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Link href="/services" className="text-xs font-semibold text-brand-navy hover:underline">
            &larr; Back to All Services
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold text-brand-navy sm:text-4xl lg:text-5xl">{service.title}</h1>
          <p className="mt-4 text-lg text-brand-charcoal leading-relaxed">{service.shortSummary}</p>
          <div className="mt-8">
            <Link href={`/request-quote?service=${service.slug}`}>
              <Button variant="accent" size="lg">
                Request a Quote for this Service
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { Service } from '@/types/content';
import { Card } from '@/components/ui/Card';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card hoverEffect className="flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-brand-navy">{service.title}</h3>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">{service.shortSummary}</p>

        <div className="mt-6 border-t border-brand-border pt-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Key Deliverables</span>
          <ul className="mt-2 space-y-1.5 text-xs text-brand-charcoal">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-brand-border pt-4">
        <Link href={`/services/${service.slug}`} className="text-xs font-bold text-brand-navy hover:underline">
          View Service Details &rarr;
        </Link>
      </div>
    </Card>
  );
}

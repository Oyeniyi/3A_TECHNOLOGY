import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function DualPathwayGate() {
  return (
    <section className="bg-brand-gray py-12" aria-labelledby="pathway-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="pathway-heading" className="sr-only">
          Select Your Pathway
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Pathway A: Commercial Clients */}
          <Card className="flex flex-col justify-between border-l-4 border-l-brand-navy p-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">Pathway A: For Businesses</span>
              <h3 className="mt-2 text-2xl font-bold text-brand-charcoal">&ldquo;I need a technology solution&rdquo;</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Custom software development, enterprise web platforms, workflow automation, and predictive machine learning models tailored to solve business bottlenecks.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/services">
                <Button variant="primary" size="sm">
                  View Services
                </Button>
              </Link>
              <Link href="/request-quote">
                <Button variant="accent" size="sm">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </Card>

          {/* Pathway B: Techvolution Academy */}
          <Card className="flex flex-col justify-between border-l-4 border-l-brand-yellow p-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Pathway B: For Learners</span>
              <h3 className="mt-2 text-2xl font-bold text-brand-charcoal">&ldquo;I want to learn technology&rdquo;</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Practical, project-anchored curriculum in programming, artificial intelligence, and data science designed for university students, graduates, and professionals.
              </p>
            </div>
            <div className="mt-6">
              <Link href="/academy">
                <Button variant="outline" size="sm">
                  Explore Academy Programmes &rarr;
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

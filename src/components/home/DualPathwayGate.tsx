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
          {/* Pathway A: 3A Technology Solutions */}
          <Card className="flex flex-col justify-between border-l-4 border-l-brand-navy p-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                Division A: 3A Technology Solutions
              </span>
              <h3 className="mt-2 text-2xl font-bold text-brand-charcoal">
                &ldquo;I need a technology or research solution&rdquo;
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Web &amp; digital products, custom software engineering, AI workflow automation, data science &amp; analytics, technology consulting, and computing/mathematics academic research support.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/services">
                <Button variant="primary" size="sm">
                  View All 6 Services
                </Button>
              </Link>
              <Link href="/request-quote" data-analytics-event="click_request_quote">
                <Button variant="accent" size="sm">
                  Request a Project Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="sm">
                  Request a Consultation
                </Button>
              </Link>
            </div>
          </Card>

          {/* Pathway B: 3A Techvolution Academy */}
          <Card className="flex flex-col justify-between border-l-4 border-l-brand-yellow p-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Division B: 3A Techvolution Academy — Learn. Build. Advance.
              </span>
              <h3 className="mt-2 text-2xl font-bold text-brand-charcoal">
                &ldquo;I want to learn AI, build software, or get student training support&rdquo;
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Structured AI &amp; technology learning pathways, vibe coding, IT/SIWES industrial training support, academic project mentorship, live seminars, and our AI Learning Resource Hub.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/academy/programmes" data-analytics-event="click_explore_academy">
                <Button variant="primary" size="sm">
                  Explore AI Courses &rarr;
                </Button>
              </Link>
              <Link href="/academy/siwes-support">
                <Button variant="outline" size="sm">
                  IT/SIWES &amp; Project Support
                </Button>
              </Link>
              <Link href="/academy/pathways">
                <Button variant="outline" size="sm">
                  Learning Pathways
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

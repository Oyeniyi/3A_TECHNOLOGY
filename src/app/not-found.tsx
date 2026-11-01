/**
 * @file not-found.tsx
 * @description Branded 404 page for unmatched routes.
 * Provides intuitive recovery paths back to commercial services or academy.
 */

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-brand-light-gray/30">
      <div className="max-w-md w-full text-center">
        <span className="text-6xl font-extrabold text-brand-navy block mb-4">404</span>
        <h1 className="text-2xl font-bold text-brand-navy mb-2">Page Not Found</h1>
        <p className="text-brand-dark-gray/80 text-sm mb-8">
          The page or resource you requested could not be located. You can navigate back to our main services or contact our team directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="primary" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/services">Browse Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

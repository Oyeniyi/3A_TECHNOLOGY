'use client';

/**
 * @file error.tsx
 * @description Global client-side error boundary for unhandled application errors.
 */

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Structural error logging placeholder
    console.error('Unhandled runtime error in client boundary:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-brand-light-gray/30">
      <div className="max-w-md w-full text-center">
        <span className="text-5xl font-extrabold text-red-600 block mb-4">500</span>
        <h1 className="text-2xl font-bold text-brand-navy mb-2">Unexpected Error Encountered</h1>
        <p className="text-brand-dark-gray/80 text-sm mb-6">
          An unexpected error occurred while loading this section. Our engineering operations team has been notified.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary" onClick={() => reset()}>
            Try Again
          </Button>
          <Button variant="outline" asChild>
            <a href="/">Go to Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

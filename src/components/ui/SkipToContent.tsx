import React from 'react';

/**
 * Accessible Skip to Content Link
 * First focusable element for keyboard and screen-reader users (WCAG 2.1 AA)
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-brand-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow"
    >
      Skip to main content
    </a>
  );
}

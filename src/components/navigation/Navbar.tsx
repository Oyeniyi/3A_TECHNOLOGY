'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { NavDropdown } from './NavDropdown';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="hidden items-center gap-8 lg:flex" aria-label="Main Navigation">
      {siteConfig.nav.main.map((item) => {
        const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));

        if (item.title === 'Services') {
          return (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href={item.href}
                className={cn(
                  'inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-navy',
                  isActive ? 'font-semibold text-brand-navy' : 'text-brand-charcoal'
                )}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                {item.title}
                <svg
                  className={cn('h-4 w-4 transition-transform', servicesOpen && 'rotate-180')}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <NavDropdown
                items={siteConfig.nav.services}
                isOpen={servicesOpen}
                onClose={() => setServicesOpen(false)}
              />
            </div>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-brand-navy',
              isActive ? 'font-semibold text-brand-navy border-b-2 border-brand-navy pb-1' : 'text-brand-charcoal'
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}

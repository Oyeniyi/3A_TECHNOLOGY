'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function MobileDrawer() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Automatically close drawer upon route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Toggle Navigation Menu"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-brand-border text-brand-charcoal hover:bg-brand-gray lg:hidden focus:outline-none focus:ring-2 focus:ring-brand-navy"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col bg-brand-white p-6 shadow-2xl transition-transform focus:outline-none">
          <div className="flex items-center justify-between border-b border-brand-border pb-4">
            <div className="text-base font-bold text-brand-navy">3A Technology</div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close Navigation Menu"
                className="flex h-11 w-11 items-center justify-center rounded-md text-brand-charcoal hover:bg-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-navy"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </Dialog.Close>
          </div>

          <nav className="mt-6 flex-1 space-y-2 overflow-y-auto" aria-label="Mobile Navigation">
            {siteConfig.nav.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex h-11 items-center rounded-md px-3 text-base font-medium transition-colors hover:bg-brand-gray hover:text-brand-navy',
                  pathname === item.href ? 'bg-blue-50 font-semibold text-brand-navy' : 'text-brand-charcoal'
                )}
              >
                {item.title}
              </Link>
            ))}

            <div className="pt-4 border-t border-brand-border">
              <div className="px-3 text-xs font-semibold tracking-wider uppercase text-gray-400">
                Commercial Services
              </div>
              <div className="mt-2 space-y-1">
                {siteConfig.nav.services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-brand-gray hover:text-brand-navy"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="mt-6 space-y-3 border-t border-brand-border pt-6">
            <Link href="/academy" onClick={() => setOpen(false)} className="block">
              <Button variant="outline" fullWidth>
                Explore Academy
              </Button>
            </Link>
            <Link href="/request-quote" onClick={() => setOpen(false)} className="block">
              <Button variant="accent" fullWidth>
                Request a Quote
              </Button>
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

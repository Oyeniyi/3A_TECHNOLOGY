'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from './Navbar';
import { MobileDrawer } from './MobileDrawer';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200',
        scrolled
          ? 'border-b border-brand-border bg-brand-white/95 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-brand-white'
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-navy rounded">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy font-bold text-brand-yellow shadow-sm">
            3A
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-brand-navy">3A TECHNOLOGY</span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-500">Solutions & Academy</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <Navbar />

        {/* Dual CTA Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/academy" className="hidden sm:inline-flex">
            <Button variant="outline" size="sm">
              Explore Academy
            </Button>
          </Link>
          <Link href="/request-quote">
            <Button variant="accent" size="sm">
              Request a Quote
            </Button>
          </Link>
          <MobileDrawer />
        </div>
      </div>
    </header>
  );
}

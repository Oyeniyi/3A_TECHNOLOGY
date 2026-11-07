import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface BrandLogoProps {
  variant?: 'light' | 'dark';
  division?: 'parent' | 'academy';
  showWordmark?: boolean;
  subtitle?: string;
  className?: string;
}

/**
 * Official 3A Technology Solutions Brand Mark & Wordmark
 * Uses the original, unmodified official logo mark extracted directly from
 * 3a_technology_solutions_ending_slide.png (/images/brand/3a-logo-mark.png)
 * preserving its exact original proportions, lettering, navy (#0B2B6B) and
 * yellow (#F7C800) colors, brushstroke shape, and structure.
 */
export function BrandLogo({
  variant = 'light',
  division = 'parent',
  showWordmark = true,
  subtitle = 'Ideas • Technology • Impact',
  className,
}: BrandLogoProps) {
  const isDarkSurface = variant === 'dark';

  return (
    <div className={cn('inline-flex items-center gap-3 select-none', className)}>
      {/* Official Original 3A Emblem Asset */}
      <div
        className={cn(
          'relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full p-1 transition-transform',
          isDarkSurface ? 'bg-brand-white shadow-sm' : 'bg-brand-white ring-1 ring-brand-border/80 shadow-sm'
        )}
      >
        <Image
          src="/images/brand/3a-logo-mark.png"
          alt="3A Technology Solutions Official Logo Mark"
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
          priority
        />
      </div>

      {showWordmark && (
        <div className="flex flex-col leading-tight">
          {division === 'academy' ? (
            <>
              <span className="text-base font-extrabold tracking-tight sm:text-lg">
                <span className={isDarkSurface ? 'text-brand-white' : 'text-brand-navy'}>3A </span>
                <span className={isDarkSurface ? 'text-brand-yellow' : 'text-brand-navy'}>TECHVOLUTION </span>
                <span className={isDarkSurface ? 'text-brand-white' : 'text-brand-navy'}>ACADEMY</span>
              </span>
              <span
                className={cn(
                  'text-[10px] font-semibold uppercase tracking-wider',
                  isDarkSurface ? 'text-gray-300' : 'text-gray-500'
                )}
              >
                {subtitle || 'Practical AI Education & Fluency'}
              </span>
            </>
          ) : (
            <>
              <span className="text-base font-extrabold tracking-tight sm:text-lg">
                <span className={isDarkSurface ? 'text-brand-white' : 'text-brand-navy'}>3A </span>
                <span className={isDarkSurface ? 'text-brand-yellow' : 'text-brand-navy'}>Technology </span>
                <span className={isDarkSurface ? 'text-brand-white' : 'text-brand-navy'}>Solutions</span>
              </span>
              {subtitle && (
                <span
                  className={cn(
                    'text-[10px] font-semibold uppercase tracking-wider',
                    isDarkSurface ? 'text-gray-300' : 'text-gray-500'
                  )}
                >
                  {subtitle}
                </span>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

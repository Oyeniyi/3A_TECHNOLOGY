import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({ className, hoverEffect = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-brand-border bg-brand-white p-6 transition-all',
        hoverEffect && 'hover:border-brand-navy hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

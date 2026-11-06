import React from 'react';
import { cn } from '@/lib/utils';
import { ProjectStatus } from '@/types/content';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: ProjectStatus;
  variant?: 'navy' | 'yellow' | 'neutral' | 'outline' | 'warning';
}

export function Badge({ className, status, variant = 'neutral', children, ...props }: BadgeProps) {
  let resolvedVariant = variant;

  if (status === 'Live Production') resolvedVariant = 'navy';
  if (status === 'Client Project') resolvedVariant = 'navy';
  if (status === 'Deployed Prototype') resolvedVariant = 'yellow';
  if (status === 'Research & Development') resolvedVariant = 'neutral';

  const variantStyles = {
    navy: 'bg-blue-50 text-brand-navy border border-blue-200',
    yellow: 'bg-yellow-50 text-amber-900 border border-yellow-200 font-semibold',
    warning: 'bg-yellow-50 text-amber-900 border border-yellow-200 font-semibold',
    neutral: 'bg-brand-gray text-brand-charcoal border border-brand-border',
    outline: 'bg-transparent text-brand-navy border border-brand-border',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantStyles[resolvedVariant],
        className
      )}
      {...props}
    >
      {children || status}
    </span>
  );
}

import React from 'react';
import { cn } from '@/lib/utils';
import { ProjectClassification, CourseStatus } from '@/types/content';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: ProjectClassification | CourseStatus | string;
  variant?: 'navy' | 'yellow' | 'neutral' | 'outline' | 'warning' | 'emerald';
}

export function Badge({ className, status, variant = 'neutral', children, ...props }: BadgeProps) {
  let resolvedVariant = variant;

  if (
    status === 'AI-Powered Business Operations Tool' ||
    status === 'Business Solution' ||
    status === 'Website & Landing Page' ||
    status === 'Open for Enrolment' ||
    status === 'Live Client Website'
  ) {
    resolvedVariant = 'yellow';
  }
  if (
    status === 'Institutional Platform' ||
    status === 'Custom Digital Experience' ||
    status === 'Client Project' ||
    status === 'Upcoming'
  ) {
    resolvedVariant = 'navy';
  }
  if (status === 'Research Project' || status === 'Ongoing') {
    resolvedVariant = 'emerald';
  }
  if (
    status === 'Student Project' ||
    status === 'Completed' ||
    status === 'Registration Closed' ||
    status === 'Private Institutional Deployment' ||
    status === 'Confidential Client Project' ||
    status === 'Internal Business Deployment'
  ) {
    resolvedVariant = 'neutral';
  }

  const variantStyles = {
    navy: 'bg-blue-50 text-brand-navy border border-blue-200 font-semibold',
    yellow: 'bg-yellow-50 text-amber-900 border border-yellow-200 font-semibold',
    warning: 'bg-yellow-50 text-amber-900 border border-yellow-200 font-semibold',
    emerald: 'bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold',
    neutral: 'bg-brand-gray text-brand-charcoal border border-brand-border font-medium',
    outline: 'bg-transparent text-brand-navy border border-brand-border font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs',
        variantStyles[resolvedVariant],
        className
      )}
      {...props}
    >
      {children || status}
    </span>
  );
}

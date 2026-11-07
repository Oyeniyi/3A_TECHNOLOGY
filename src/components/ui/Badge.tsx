import React from 'react';
import { cn } from '@/lib/utils';
import { ProjectStatus, ProjectClassification, CourseStatus } from '@/types/content';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: ProjectStatus | ProjectClassification | CourseStatus | string;
  variant?: 'navy' | 'yellow' | 'neutral' | 'outline' | 'warning' | 'emerald';
}

export function Badge({ className, status, variant = 'neutral', children, ...props }: BadgeProps) {
  let resolvedVariant = variant;

  if (status === '3A Prototype' || status === 'Open for Enrolment') resolvedVariant = 'yellow';
  if (status === 'Student Project' || status === 'Upcoming') resolvedVariant = 'navy';
  if (status === 'Research Project' || status === 'Research Prototype' || status === 'Ongoing') resolvedVariant = 'emerald';
  if (status === 'Demonstration Project' || status === 'Demonstration Build' || status === 'Completed' || status === 'Registration Closed') {
    resolvedVariant = 'neutral';
  }

  const variantStyles = {
    navy: 'bg-blue-50 text-brand-navy border border-blue-200 font-medium',
    yellow: 'bg-yellow-50 text-amber-900 border border-yellow-200 font-semibold',
    warning: 'bg-yellow-50 text-amber-900 border border-yellow-200 font-semibold',
    emerald: 'bg-emerald-50 text-emerald-900 border border-emerald-200 font-medium',
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

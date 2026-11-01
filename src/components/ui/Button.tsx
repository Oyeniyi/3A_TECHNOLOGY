import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variantStyles = {
      // Primary Navy with Pure White text (contrast > 12:1)
      primary: 'bg-brand-navy text-brand-white hover:bg-blue-900 shadow-sm',
      // Accent Yellow strictly with Dark Charcoal text (contrast > 8:1, ARCH-05 Invariant)
      accent: 'bg-brand-yellow text-brand-charcoal hover:bg-yellow-400 font-semibold shadow-sm',
      // Outline with Primary Navy border
      outline: 'border border-brand-navy text-brand-navy hover:bg-brand-gray',
      // Ghost for subtle links
      ghost: 'text-brand-charcoal hover:bg-brand-gray hover:text-brand-navy',
    };

    const sizeStyles = {
      sm: 'h-9 px-3 text-xs min-h-[44px] min-w-[44px]',
      md: 'h-11 px-5 text-sm min-h-[44px]',
      lg: 'h-12 px-7 text-base min-h-[48px]',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], fullWidth && 'w-full', className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

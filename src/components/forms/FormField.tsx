import React from 'react';
import { cn } from '@/lib/utils';

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  textarea?: boolean;
  rows?: number;
}

export const FormField = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, FormFieldProps>(
  ({ label, error, textarea = false, rows = 4, id, className, required, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    const errorId = `${inputId}-error`;

    const inputClasses = cn(
      'block w-full rounded border border-brand-border bg-brand-white px-3.5 py-2.5 text-sm text-brand-charcoal placeholder:text-gray-400 focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy disabled:bg-gray-100',
      error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
      className
    );

    return (
      <div className="space-y-1.5">
        <label htmlFor={inputId} className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {textarea ? (
          <textarea
            ref={ref}
            id={inputId}
            rows={rows}
            aria-describedby={error ? errorId : undefined}
            aria-invalid={Boolean(error)}
            className={inputClasses}
            {...props}
          />
        ) : (
          <input
            ref={ref}
            id={inputId}
            aria-describedby={error ? errorId : undefined}
            aria-invalid={Boolean(error)}
            className={inputClasses}
            {...props}
          />
        )}
        {error && (
          <p id={errorId} className="text-xs font-medium text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

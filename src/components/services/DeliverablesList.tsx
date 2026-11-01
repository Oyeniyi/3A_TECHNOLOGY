import React from 'react';

export function DeliverablesList({ deliverables }: { deliverables: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {deliverables.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 rounded-lg border border-brand-border bg-brand-white p-4">
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-brand-navy">
            ✓
          </span>
          <span className="text-sm font-medium text-brand-charcoal">{item}</span>
        </li>
      ))}
    </ul>
  );
}

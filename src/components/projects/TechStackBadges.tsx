import React from 'react';

export function TechStackBadges({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded border border-brand-border bg-brand-gray px-3 py-1 text-xs font-semibold text-brand-charcoal"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

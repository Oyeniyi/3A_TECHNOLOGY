/**
 * @file MissionStatement.tsx
 * @description Structural hero and mission statement component for the About page.
 */

import React from 'react';

export const MissionStatement: React.FC = () => {
  return (
    <section className="bg-brand-navy text-white py-16 md:py-20">
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="text-brand-yellow font-semibold text-sm uppercase tracking-wider mb-3">
            About 3A Technology Solutions
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Pioneering African Enterprise Engineering & Tech Capacity
          </h1>
          <p className="text-lg md:text-xl text-brand-white/80 leading-relaxed font-light">
            Headquartered in Abuja, Nigeria, 3A Technology Solutions is a premier technology partner delivering
            mission-critical software architecture, enterprise cloud solutions, and technical talent incubation across the African continent.
          </p>
        </div>
      </div>
    </section>
  );
};

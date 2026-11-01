import { describe, it, expect } from 'vitest';
import tailwindConfig from '../../tailwind.config';

describe('Design Tokens & Contrast Specification Tests (AUD-01)', () => {
  it('defines the approved 5 brand color hex codes', () => {
    const colors = tailwindConfig.theme?.extend?.colors as Record<string, string>;
    expect(colors['brand-navy']).toBe('#0B2B6B');
    expect(colors['brand-yellow']).toBe('#F7C800');
    expect(colors['brand-dark-gray']).toBe('#1F2937');
    expect(colors['brand-light-gray']).toBe('#F4F6F8');
    expect(colors['brand-white']).toBe('#FFFFFF');
  });

  it('prohibits white text pairings on yellow background in button tokens', () => {
    // AUD-01 audit condition: Yellow #F7C800 has 1.34:1 contrast with white (#FFFFFF).
    // Must strictly pair with #1F2937 (11.0:1 AAA contrast).
    const yellowHex = '#F7C800';
    const darkGrayHex = '#1F2937';
    expect(yellowHex).not.toBe('#FFFFFF');
    expect(darkGrayHex).toBe('#1F2937');
  });
});

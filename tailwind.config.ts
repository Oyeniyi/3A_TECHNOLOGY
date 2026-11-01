import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B2B6B',     // Primary brand anchor
          yellow: '#F7C800',   // Accent focal points
          charcoal: '#1F2937', // Text, dark cards, footer
          gray: '#F4F6F8',     // Section & input backgrounds
          white: '#FFFFFF',    // Primary canvas
          border: '#E5E7EB'    // Standard 1px structural outline
        }
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif']
      },
      lineHeight: {
        relaxed: '1.65'
      }
    },
  },
  plugins: [],
};

export default config;

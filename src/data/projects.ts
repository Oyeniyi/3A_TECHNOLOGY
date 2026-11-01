/**
 * Portfolio Case Studies & Prototypes Static Data
 * In accordance with PRD.md Section 7 (AC-03.3) & ARCH-01
 */

import { Project } from '@/types/content';

export const projects: Project[] = [
  {
    slug: 'marketmind-ai',
    title: 'MarketMind AI',
    category: 'ai-automation',
    status: 'Live Production',
    shortSummary:
      'Autonomous market intelligence engine delivering synthesized commercial trend analyses, competitor profiling, and actionable business briefs.',
    theChallenge:
      'Business analysts spent dozens of manual hours compiling fragmented industry reports, economic indicators, and news updates into executive summaries.',
    theSolution:
      'Architected a multi-step LLM extraction pipeline utilizing retrieval-augmented generation (RAG) and automated document parsers to synthesize structured market briefs.',
    technologiesUsed: ['TypeScript', 'Next.js', 'FastAPI', 'OpenAI API', 'Vector Embeddings', 'Tailwind CSS'],
    imagePlaceholder: '/images/projects/marketmind-ai.webp',
    liveUrl: 'https://marketmind.3atechnology.com.ng',
  },
  {
    slug: 'deforestation-analysis',
    title: 'Deforestation Analysis Platform',
    category: 'data-science-analytics',
    status: 'Research & Development',
    shortSummary:
      'Geospatial satellite imagery processing pipeline quantifying forest cover depletion patterns and historical land-use changes.',
    theChallenge:
      'Environmental monitors lacked automated tools to accurately measure forest canopy loss over multi-year periods across regional conservation boundaries in Nigeria.',
    theSolution:
      'Developed a computer vision analysis pipeline using multi-spectral satellite imagery and semantic segmentation algorithms to detect canopy density shifts.',
    technologiesUsed: ['Python', 'OpenCV', 'PyTorch', 'GeoTIFF Processing', 'Matplotlib', 'Streamlit'],
    imagePlaceholder: '/images/projects/deforestation-analysis.webp',
    githubUrl: 'https://github.com/3a-technology/deforestation-analysis',
  },
  {
    slug: 'medicinal-plant-recognition',
    title: 'Medicinal Plant Recognition System',
    category: 'data-science-analytics',
    status: 'Deployed Prototype',
    shortSummary:
      'Mobile computer vision classifier identifying indigenous Nigerian medicinal plants and cataloging their verified pharmacological properties.',
    theChallenge:
      'Traditional botanical and pharmacological knowledge regarding indigenous Nigerian flora is widely undocumented digitally and prone to misidentification.',
    theSolution:
      'Trained a convolutional neural network (CNN) on a curated botanical leaf dataset to provide accurate species classification and medicinal taxonomy details.',
    technologiesUsed: ['Python', 'TensorFlow Lite', 'FastAPI', 'React Native', 'Docker'],
    imagePlaceholder: '/images/projects/medicinal-plant-recognition.webp',
  },
  {
    slug: 'image-compression-tool',
    title: 'High-Performance Image Compression Tool',
    category: 'web-development',
    status: 'Live Production',
    shortSummary:
      'Browser-based zero-loss image optimization utility converting heavy media into modern WebP/AVIF formats client-side.',
    theChallenge:
      'Web developers and digital marketers struggled with slow upload speeds and payload limits when uploading high-resolution imagery to websites and portals.',
    theSolution:
      'Implemented WebAssembly-powered image encoding algorithms directly within the browser, optimizing media without transferring private images to third-party servers.',
    technologiesUsed: ['TypeScript', 'Next.js', 'WebAssembly', 'Web Workers', 'Tailwind CSS'],
    imagePlaceholder: '/images/projects/image-compression.webp',
    liveUrl: 'https://compress.3atechnology.com.ng',
  },
  {
    slug: 'electronic-logbook',
    title: 'Enterprise Electronic Logbook',
    category: 'custom-software',
    status: 'Deployed Prototype',
    shortSummary:
      'Digital operational activity recording system replacing manual paper logbooks with tamper-evident audit trails and reporting.',
    theChallenge:
      'Industrial facilities and technical laboratories relied on paper journals that suffered from physical damage, unsearchable records, and zero accountability.',
    theSolution:
      'Engineered an offline-capable digital logbook application with cryptographic timestamping, role-based signatures, and automated shift handover reports.',
    technologiesUsed: ['TypeScript', 'React', 'Node.js', 'IndexedDB', 'Tailwind CSS'],
    imagePlaceholder: '/images/projects/electronic-logbook.webp',
  },
];

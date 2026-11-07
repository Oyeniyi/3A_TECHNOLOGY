/**
 * Portfolio Projects & Prototypes Static Data
 * Accurately classifies MarketMind AI as the sole 3A Prototype and represents
 * the remaining repository projects transparently as Student Projects.
 */

import { Project } from '@/types/content';

export const projects: Project[] = [
  {
    slug: 'marketmind-ai',
    title: 'MarketMind AI',
    category: 'ai-automation',
    classification: '3A Prototype',
    status: '3A Prototype',
    shortSummary:
      'An internal 3A prototype exploring automated market research, competitor tracking, and structured brief generation using retrieval-augmented generation (RAG).',
    theChallenge:
      'Analysts and business owners spend hours reading scattered industry updates, economic indicators, and news articles to assemble market summaries.',
    theSolution:
      'Built as an internal 3A prototype using a multi-step LLM extraction pipeline, retrieval-augmented generation (RAG), and document parsers to draft structured market briefs for review.',
    technologiesUsed: ['TypeScript', 'Next.js', 'FastAPI', 'OpenAI API', 'Vector Embeddings', 'Tailwind CSS'],
    imagePlaceholder: '/images/projects/marketmind-ai.webp',
    githubUrl: 'https://github.com/Oyeniyi/3A_TECHNOLOGY',
  },
  {
    slug: 'deforestation-analysis',
    title: 'Deforestation Analysis Platform',
    category: 'data-science-analytics',
    classification: 'Student Project',
    status: 'Student Project',
    shortSummary:
      'Student research project applying satellite imagery analysis and computer vision to measure forest cover loss and land-use change over time.',
    theChallenge:
      'Tracking forest canopy loss across multi-year satellite imagery is slow and error-prone when researchers have to inspect map tiles manually.',
    theSolution:
      'Implemented a Python computer vision and geospatial processing workflow using OpenCV and PyTorch image segmentation to compare satellite imagery across time periods and highlight canopy changes.',
    technologiesUsed: ['Python', 'OpenCV', 'PyTorch', 'GeoTIFF Processing', 'Matplotlib', 'Streamlit'],
    imagePlaceholder: '/images/projects/deforestation-analysis.webp',
    githubUrl: 'https://github.com/Oyeniyi/3A_TECHNOLOGY',
  },
  {
    slug: 'medicinal-plant-recognition',
    title: 'Medicinal Plant Recognition System',
    category: 'academic-research-support',
    classification: 'Student Project',
    status: 'Student Project',
    shortSummary:
      'Student project using a convolutional neural network (CNN) to identify local Nigerian medicinal plants from leaf images and display documented botanical uses.',
    theChallenge:
      'Local botanical knowledge about indigenous Nigerian medicinal plants is rarely digitized in a structured format, and visually similar leaves are easy to misidentify.',
    theSolution:
      'Trained an image classification model on a labeled dataset of plant leaves and packaged it with TensorFlow Lite and FastAPI to demonstrate species identification.',
    technologiesUsed: ['Python', 'TensorFlow Lite', 'FastAPI', 'React Native', 'Docker'],
    imagePlaceholder: '/images/projects/medicinal-plant-recognition.webp',
    githubUrl: 'https://github.com/Oyeniyi/3A_TECHNOLOGY',
  },
  {
    slug: 'image-compression-tool',
    title: 'Browser-Based Image Compression Utility',
    category: 'web-development',
    classification: 'Student Project',
    status: 'Student Project',
    shortSummary:
      'Student web engineering project that compresses and converts large images into WebP and AVIF formats directly in the browser.',
    theChallenge:
      'Uploading unoptimized high-resolution photos slows down web pages and consumes unnecessary bandwidth on mobile networks.',
    theSolution:
      'Built a client-side image compression tool using WebAssembly and Web Workers so users can shrink and convert images locally in their browser.',
    technologiesUsed: ['TypeScript', 'Next.js', 'WebAssembly', 'Web Workers', 'Tailwind CSS'],
    imagePlaceholder: '/images/projects/image-compression.webp',
    githubUrl: 'https://github.com/Oyeniyi/3A_TECHNOLOGY',
  },
  {
    slug: 'electronic-logbook',
    title: 'Digital Activity & Shift Logbook',
    category: 'custom-software',
    classification: 'Student Project',
    status: 'Student Project',
    shortSummary:
      'Student software project replacing paper activity logbooks with searchable digital records, timestamps, and structured shift handovers.',
    theChallenge:
      'Paper logbooks used in laboratories and training records are easily damaged, difficult to search, and inconvenient to review.',
    theSolution:
      'Developed an offline-capable web application using React, Node.js, and IndexedDB for recording daily entries, role-based sign-offs, and summary exports.',
    technologiesUsed: ['TypeScript', 'React', 'Node.js', 'IndexedDB', 'Tailwind CSS'],
    imagePlaceholder: '/images/projects/electronic-logbook.webp',
    githubUrl: 'https://github.com/Oyeniyi/3A_TECHNOLOGY',
  },
];

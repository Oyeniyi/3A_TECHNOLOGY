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
      'Automated market research tool that gathers industry news, tracks competitors, and summarizes key findings into short briefs.',
    theChallenge:
      'Analysts were spending hours each week reading scattered industry reports, economic updates, and news articles just to put together a single weekly summary.',
    theSolution:
      'We built a document pipeline using retrieval-augmented generation (RAG) and automated parsers that pulls from trusted sources and drafts structured market briefs in minutes.',
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
      'Satellite image analysis pipeline that tracks tree cover loss and land-use changes over time.',
    theChallenge:
      'Environmental researchers needed a reliable way to measure forest canopy loss across multi-year satellite images without manually marking thousands of map tiles.',
    theSolution:
      'We wrote a computer vision pipeline in Python using OpenCV and PyTorch image segmentation to compare satellite imagery across dates and highlight where tree cover had thinned.',
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
      'Mobile image classifier that identifies local Nigerian medicinal plants from leaf photos and lists their documented uses.',
    theChallenge:
      'Knowledge about local Nigerian medicinal plants is rarely digitized in one place, and visually similar leaves are easy to mix up in the field.',
    theSolution:
      'We trained a convolutional neural network (CNN) on a labeled dataset of local plant leaves and packaged it with TensorFlow Lite so it can identify species directly on a phone.',
    technologiesUsed: ['Python', 'TensorFlow Lite', 'FastAPI', 'React Native', 'Docker'],
    imagePlaceholder: '/images/projects/medicinal-plant-recognition.webp',
  },
  {
    slug: 'image-compression-tool',
    title: 'High-Performance Image Compression Tool',
    category: 'web-development',
    status: 'Live Production',
    shortSummary:
      'Browser-based image compressor that converts large photos into lightweight WebP and AVIF files without uploading them to a server.',
    theChallenge:
      'Content teams and developers were dealing with slow page loads and failed uploads because raw camera images were too large for web publishing.',
    theSolution:
      'We used WebAssembly and Web Workers to run image compression right inside the user’s browser. Files shrink in seconds, and private photos never leave the device.',
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
      'Digital shift and activity logbook that replaces paper journals with searchable records and signed handovers.',
    theChallenge:
      'Technical labs and industrial sites were still using paper logbooks that got damaged, couldn’t be searched, and made it hard to track who signed off on a shift.',
    theSolution:
      'We built an offline-ready web app with timestamped entries, role-based sign-offs, and automatic shift summary exports.',
    technologiesUsed: ['TypeScript', 'React', 'Node.js', 'IndexedDB', 'Tailwind CSS'],
    imagePlaceholder: '/images/projects/electronic-logbook.webp',
  },
];

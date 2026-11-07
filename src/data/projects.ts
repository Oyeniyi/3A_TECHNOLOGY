/**
 * Portfolio Projects, Client Solutions, Websites & Student Research Static Data
 * Organized into three distinct portfolio collections:
 *   1. Business & Client Solutions ('business-client-solutions')
 *   2. Websites & Digital Experiences ('websites-digital-experiences')
 *   3. Student & Research Projects ('student-research-projects')
 *
 * Strictly enforces confidentiality: confidential projects never include private
 * deployment URLs or private repository URLs anywhere in the data model.
 */

import { Project } from '@/types/content';

export const projects: Project[] = [
  // ============================================================================
  // BUSINESS & CLIENT SOLUTIONS + WEBSITES & DIGITAL EXPERIENCES
  // ============================================================================
  {
    slug: 'marketmind-ai',
    title: 'MarketMind AI — Akinmart Store',
    primaryCollection: 'business-client-solutions',
    collections: ['business-client-solutions'],
    category: 'ai-automation',
    relatedServices: ['ai-automation', 'custom-software', 'technology-consulting'],
    classification: 'AI-Powered Business Operations Tool',
    clientOrOrganization: 'Akinmart Store',
    status: 'Internal Business Deployment',
    visibility: 'confidential',
    confidentialityNotice:
      'Internal business deployment for Akinmart Store — Store operational data and internal interfaces are confidential.',
    shortSummary:
      'An internal AI-enabled business operations tool developed for Akinmart Store to support its supermarket operations and day-to-day operational decision-making.',
    theChallenge:
      'Supermarket operations generate continuous daily operational questions across inventory coordination, product categorization, and store management workflows where manual review slows down routine decision-making.',
    theSolution:
      'Developed MarketMind AI as a dedicated internal AI-enabled business tool tailored for Akinmart Store, providing structured AI assistance and operational support workflows built around the supermarket’s internal processes.',
    verifiedFeatures: [
      'Internal AI-assisted supermarket operations support for Akinmart Store',
      'Structured operational query and decision-support workflows',
      'Role-focused internal web interface tailored for store operations',
      'Private internal deployment protecting store business data',
    ],
    technologiesUsed: ['TypeScript', 'Next.js', 'Python', 'AI / LLM Integration', 'Tailwind CSS'],
    imagePlaceholder: '/images/projects/marketmind-ai.svg',
    featured: true,
    seoTitle: 'MarketMind AI for Akinmart Store | Case Study | 3A Technology Solutions',
    seoDescription:
      'How 3A Technology Solutions developed MarketMind AI, an internal AI-powered business operations tool for Akinmart Store supermarket operations.',
  },
  {
    slug: 'dominion-college-portal',
    title: 'Dominion College School Management Portal',
    primaryCollection: 'business-client-solutions',
    collections: ['business-client-solutions', 'websites-digital-experiences'],
    category: 'custom-software',
    relatedServices: ['custom-software', 'web-development', 'technology-consulting'],
    classification: 'Institutional Platform',
    clientOrOrganization: 'Dominion College',
    status: 'Private Institutional Deployment',
    visibility: 'confidential',
    confidentialityNotice:
      'Private institutional deployment — Project link confidential to protect student records, payment data, and school administration.',
    shortSummary:
      'A digital school management platform designed to support institutional administration, student payment processes, and academic result access for Dominion College.',
    theChallenge:
      'Managing school fee collections, termly student result processing, and academic record keeping through manual or disconnected channels creates administrative bottlenecks for school staff and delays for parents and students.',
    theSolution:
      'Built a dedicated School Management & Digital Administration Portal for Dominion College that brings school payment workflows, digital academic result checking, and day-to-day institutional administration together in a private, access-controlled web platform.',
    verifiedFeatures: [
      'School payment functionality and fee record management',
      'Student academic result checking and termly access workflow',
      'School administration and digital academic record management',
      'Access-controlled institutional portal architecture',
    ],
    technologiesUsed: [
      'Web Application Architecture',
      'Role-Based Access Control',
      'Payment Workflow Integration',
      'Result Management System',
      'Responsive Portal UI',
    ],
    imagePlaceholder: '/images/projects/dominion-college-portal.svg',
    featured: true,
    seoTitle: 'Dominion College School Management Portal | Case Study | 3A Technology Solutions',
    seoDescription:
      'Case study of the Dominion College School Management & Digital Administration Portal supporting school payments, student result checking, and institutional administration.',
  },
  {
    slug: 'raph2-interiors',
    title: 'Raph2 Interiors — Business Website & Landing Page',
    primaryCollection: 'websites-digital-experiences',
    collections: ['business-client-solutions', 'websites-digital-experiences'],
    category: 'web-development',
    relatedServices: ['web-development', 'technology-consulting'],
    classification: 'Website & Landing Page',
    clientOrOrganization: 'Raph2 Interior Expert (Ogunwale Raphael)',
    status: 'Live Client Website',
    visibility: 'public',
    shortSummary:
      'A business website and interactive landing page developed for Raph2 Interior Expert, showcasing P.O.P ceiling design, wall screeding, luxury painting, and interior finishing services.',
    theChallenge:
      'Homeowners, architects, and property developers evaluating interior finishing specialists need to see verified visual craftsmanship, understand service scope across P.O.P ceilings, screeding, painting, and Tyrolean finishes, and request an on-site Bill of Quantities (BOQ) without friction.',
    theSolution:
      'Designed and built a fast, mobile-first business website and landing page (`raph2-interior.netlify.app`) using React, TypeScript, Vite, and Tailwind CSS. The platform combines a curated project portfolio gallery, service breakdowns, an interactive square-meter project cost estimator, structured LocalBusiness and FAQ Schema.org markup, and direct WhatsApp and consultation booking workflows.',
    verifiedFeatures: [
      'Responsive hero showcase highlighting P.O.P ceiling design, screeding, luxury painting, wallpapers, and Tyrolean finishes',
      'Interactive Project Cost Estimator allowing prospective clients to estimate budgets by room type, area (sqm), and finish tier',
      'Categorized Portfolio Gallery showcasing completed residential and commercial interior finishing projects',
      'Service detail cards with direct one-click WhatsApp enquiry routing and consultation request form',
      'Technical SEO implementation including LocalBusiness, FAQPage, and Founder Person JSON-LD structured data',
    ],
    technologiesUsed: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Lucide Icons',
      'Schema.org JSON-LD',
      'Netlify Edge',
    ],
    imagePlaceholder: '/images/projects/raph2-interiors-showcase.jpg',
    liveUrl: 'https://raph2-interior.netlify.app/',
    githubUrl: 'https://github.com/Oyeniyi/raph-2-interior',
    featured: true,
    seoTitle: 'Raph2 Interiors Business Website & Landing Page | Case Study | 3A Technology Solutions',
    seoDescription:
      'Explore the business website and interactive landing page developed by 3A Technology Solutions for Raph2 Interior Expert.',
  },
  {
    slug: 'custom-wedding-invitation-platform',
    title: 'Custom Digital Wedding Invitation & Gatepass Platform',
    primaryCollection: 'websites-digital-experiences',
    collections: ['business-client-solutions', 'websites-digital-experiences'],
    category: 'web-development',
    relatedServices: ['web-development', 'custom-software'],
    classification: 'Custom Digital Experience',
    clientOrOrganization: 'Private Event Client (Confidential)',
    status: 'Confidential Client Project',
    visibility: 'confidential',
    confidentialityNotice:
      'Confidential client project — Private event deployment and repository are kept private to protect personal event and guest details.',
    shortSummary:
      'A custom digital wedding invitation and event experience featuring unique digital invitation cards, guest gatepass functionality, and downloadable guest gatepasses.',
    theChallenge:
      'Private celebrations and formal events often require a personalized digital invitation experience that shares event details clearly with invited guests while providing structured guest gatepasses for venue access.',
    theSolution:
      'Developed a tailored digital wedding invitation platform that presents an interactive event invitation experience, generates unique digital invitation cards, and provides guest gatepass functionality with downloadable gatepasses for invited attendees.',
    verifiedFeatures: [
      'Custom digital wedding invitation experience tailored to the event',
      'Unique digital invitation cards for invited guests',
      'Guest gatepass functionality for organized event entry',
      'Downloadable guest gatepasses for mobile and print use',
    ],
    technologiesUsed: [
      'Modern Web Frontend',
      'Custom Digital Card Rendering',
      'Downloadable Gatepass Generation',
      'Responsive Mobile-First UI',
    ],
    imagePlaceholder: '/images/projects/wedding-invitation-platform.svg',
    featured: true,
    seoTitle: 'Custom Digital Wedding Invitation & Gatepass Platform | Case Study | 3A Technology Solutions',
    seoDescription:
      'Case study of a custom digital wedding invitation and downloadable guest gatepass experience developed by 3A Technology Solutions.',
  },

  // ============================================================================
  // SELECTED STUDENT & RESEARCH PROJECTS
  // ============================================================================
  {
    slug: 'medicinal-plant-recognition',
    title: 'Medicinal Plant Leaf Recognition (CNN + Random Forest vs. Decision Tree)',
    primaryCollection: 'student-research-projects',
    collections: ['student-research-projects'],
    category: 'academic-research-support',
    relatedServices: ['academic-research-support', 'data-science-analytics'],
    classification: 'Research Project',
    clientOrOrganization: 'Academic Computer Science Research (KWASU)',
    status: 'Student & Research Project',
    visibility: 'public',
    shortSummary:
      'Comparative machine learning and computer vision research project evaluating Decision Tree feature classification against a hybrid CNN + Random Forest pipeline for identifying medicinal plant species from leaf images.',
    theChallenge:
      'Identifying medicinal plants manually is difficult when distinct species share visually similar leaf morphologies, requiring an objective comparison between handcrafted image features and deep neural feature representations.',
    theSolution:
      'Implemented two end-to-end recognition pipelines in Python: (1) colour, texture, and shape feature extraction classified via a Decision Tree, and (2) deep feature extraction via a Convolutional Neural Network (CNN) classified with a Random Forest model. Integrated both trained models into an interactive Streamlit web application for side-by-side prediction and inference-time comparison.',
    verifiedFeatures: [
      'Dual-pipeline comparison: handcrafted image features + Decision Tree vs. CNN feature extraction + Random Forest',
      'Automated leaf image preprocessing and colour/texture/shape analysis',
      'Interactive Streamlit web interface for uploading leaf images and running live inference',
      'Side-by-side prediction comparison and processing-time evaluation',
    ],
    technologiesUsed: [
      'Python',
      'TensorFlow / Keras',
      'Scikit-Learn',
      'Streamlit',
      'NumPy',
      'Computer Vision',
    ],
    imagePlaceholder: '/images/projects/medicinal-plant-recognition.svg',
    githubUrl: 'https://github.com/Psalm001/leaves-recognition',
    featured: false,
    seoTitle: 'Medicinal Plant Leaf Recognition Research Project | 3A Technology Solutions',
    seoDescription:
      'Student and research project comparing CNN + Random Forest and Decision Tree classifiers for medicinal plant leaf recognition in Python and Streamlit.',
  },
  {
    slug: 'image-compression-analysis',
    title: 'Image Compression & Quantitative Analysis — RLE vs. DCT',
    primaryCollection: 'student-research-projects',
    collections: ['student-research-projects'],
    category: 'data-science-analytics',
    relatedServices: ['academic-research-support', 'data-science-analytics'],
    classification: 'Student Project',
    clientOrOrganization: 'Academic Computer Science Project (KWASU)',
    status: 'Student & Research Project',
    visibility: 'public',
    shortSummary:
      'Python digital image-processing project implementing, visualizing, and quantitatively evaluating Run-Length Encoding (RLE) and Discrete Cosine Transform (DCT) compression with MSE, PSNR, and compression ratio metrics.',
    theChallenge:
      'Understanding the practical trade-offs between lossless run-length encoding and transform-based image processing requires side-by-side visual reconstruction and quantitative signal-quality evaluation across diverse image types.',
    theSolution:
      'Built a modular Python image-processing system (`rle_dct_model.py`, `evaluation.py`, `statistical_report.py`) paired with an interactive Streamlit application (`app.py`). The system processes images through both RLE and DCT/IDCT pipelines, computes Mean Squared Error (MSE), Peak Signal-to-Noise Ratio (PSNR), and compression ratios, and exports aggregated Pandas statistical reports to CSV.',
    verifiedFeatures: [
      'Channel-by-channel Run-Length Encoding (RLE) and Discrete Cosine Transform (DCT) implementation',
      'Quantitative evaluation of reconstructed images using MSE, PSNR, and Compression Ratio',
      'Batch image evaluation script generating filterable Pandas DataFrames and CSV statistical reports',
      'Interactive Streamlit interface for side-by-side visual and metric comparison',
    ],
    technologiesUsed: ['Python', 'NumPy', 'Pillow', 'Scikit-Image', 'Pandas', 'Streamlit'],
    imagePlaceholder: '/images/projects/image-compression-analysis.svg',
    githubUrl: 'https://github.com/Psalm001/image',
    featured: false,
    seoTitle: 'Image Compression & Analysis (RLE vs DCT) Student Project | 3A Technology Solutions',
    seoDescription:
      'Academic computer science project evaluating Run-Length Encoding (RLE) and Discrete Cosine Transform (DCT) image processing in Python and Streamlit.',
  },
  {
    slug: 'deforestation-analysis',
    title: 'Deforestation & Multi-Temporal Canopy Change Analysis',
    primaryCollection: 'student-research-projects',
    collections: ['student-research-projects'],
    category: 'data-science-analytics',
    relatedServices: ['data-science-analytics', 'academic-research-support'],
    classification: 'Research Project',
    clientOrOrganization: 'Environmental & Computational Research Project',
    status: 'Student & Research Project',
    visibility: 'public',
    shortSummary:
      'Academic research project applying computer vision and geospatial image processing in Python to detect and visualize forest cover change across multi-temporal imagery.',
    theChallenge:
      'Inspecting multi-year environmental and satellite imagery manually makes it difficult for researchers to quantify vegetation loss and highlight regions of canopy change consistently.',
    theSolution:
      'Developed a Python image analysis and segmentation workflow using OpenCV, PyTorch, and geospatial raster processing to compare imagery across time intervals, highlight vegetation change masks, and summarize findings visually.',
    verifiedFeatures: [
      'Multi-temporal image preprocessing and alignment workflow',
      'Vegetation and canopy change segmentation masks in Python',
      'Visual comparison plots and summary statistics for research reporting',
    ],
    technologiesUsed: ['Python', 'OpenCV', 'PyTorch', 'NumPy', 'Matplotlib'],
    imagePlaceholder: '/images/projects/deforestation-analysis.svg',
    githubUrl: 'https://github.com/psalm001',
    featured: false,
    seoTitle: 'Deforestation & Canopy Change Analysis Research Project | 3A Technology Solutions',
    seoDescription:
      'Research project demonstrating computer vision and environmental image analysis in Python.',
  },
];

/**
 * 3A Techvolution Academy Programmes Static Data
 * In accordance with PRD.md Section 7 (FR-04) & ARCH-01
 */

import { AcademyProgramme } from '@/types/content';

export const programmes: AcademyProgramme[] = [
  {
    slug: 'practical-software-engineering',
    title: 'Practical Software Engineering & Web Development',
    level: 'Beginner',
    format: 'Hybrid',
    duration: '12 Weeks',
    overview:
      'A hands-on, intensive training track designed to transition beginners and students into production-ready software developers with modern TypeScript and React skills.',
    curriculumModules: [
      'Modern JavaScript & TypeScript Fundamentals',
      'Component Architecture with React & Next.js',
      'State Management, Form Handling & Zod Validation',
      'REST API Design & Backend Integrations',
      'Git Collaboration, Testing & Production Deployment'
    ],
    targetAudience: ['University Undergraduates', 'Recent Graduates & NYSC Members', 'Career Transitioners'],
    prerequisites: ['Basic computer literacy', 'Personal laptop', 'Dedication to complete practical assignments'],
    feeDisplay: 'Inquire for Schedule & Pricing',
  },
  {
    slug: 'applied-ai-automation',
    title: 'Applied Artificial Intelligence & Workflow Automation',
    level: 'Intermediate',
    format: 'Weekend Cohort',
    duration: '8 Weeks',
    overview:
      'Learn how to integrate large language models, build retrieval-augmented generation (RAG) pipelines, and automate enterprise workflows with pragmatic engineering.',
    curriculumModules: [
      'Prompt Engineering & Structured Output Generation',
      'Vector Databases, Embeddings & Semantic Search',
      'Building Retrieval-Augmented Generation (RAG) Systems',
      'Workflow Automation with Webhooks & Serverless Pipelines',
      'AI Privacy, Security & Cost Management'
    ],
    targetAudience: ['Software Engineers', 'Technical Product Managers', 'Automation Specialists'],
    prerequisites: ['Foundational programming skills (Python or JavaScript)', 'Familiarity with APIs'],
    feeDisplay: 'Inquire for Schedule & Pricing',
  },
  {
    slug: 'data-science-machine-learning',
    title: 'Practical Data Science & Machine Learning',
    level: 'Intermediate',
    format: 'In-Person',
    duration: '10 Weeks',
    overview:
      'Master the tools and techniques needed to extract commercial insights from real-world data, build predictive machine learning models, and present interactive dashboards.',
    curriculumModules: [
      'Data Manipulation & Cleaning with Python & Pandas',
      'Exploratory Data Analysis & Statistical Modeling',
      'Supervised & Unsupervised Machine Learning Algorithms',
      'Computer Vision Basics with OpenCV',
      'Deploying Machine Learning Models as APIs'
    ],
    targetAudience: ['Aspiring Data Analysts', 'Researchers & Academics', 'Engineering Professionals'],
    prerequisites: ['Basic high school mathematics', 'Basic programming familiarity in Python'],
    feeDisplay: 'Inquire for Schedule & Pricing',
  },
];

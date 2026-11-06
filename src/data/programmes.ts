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
      'A 12-week course where beginners and students learn how to build, test, and deploy real web applications using TypeScript, React, and Next.js.',
    curriculumModules: [
      'Modern JavaScript & TypeScript Fundamentals',
      'Component Architecture with React & Next.js',
      'State Management, Form Handling & Zod Validation',
      'REST API Design & Backend Integrations',
      'Git Collaboration, Testing & Production Deployment'
    ],
    targetAudience: ['University Undergraduates', 'Recent Graduates & NYSC Members', 'Career Switchers'],
    prerequisites: ['Basic computer literacy', 'A working laptop', 'Time for weekly coding assignments'],
    feeDisplay: 'Inquire for Schedule & Pricing',
  },
  {
    slug: 'applied-ai-automation',
    title: 'Applied Artificial Intelligence & Workflow Automation',
    level: 'Intermediate',
    format: 'Weekend Cohort',
    duration: '8 Weeks',
    overview:
      'Learn how to connect language models to real software, build retrieval-augmented generation (RAG) tools, and automate repetitive business tasks.',
    curriculumModules: [
      'Prompt Engineering & Structured Output Generation',
      'Vector Databases, Embeddings & Semantic Search',
      'Building Retrieval-Augmented Generation (RAG) Systems',
      'Workflow Automation with Webhooks & Serverless Pipelines',
      'AI Privacy, Security & Cost Control'
    ],
    targetAudience: ['Software Developers', 'Technical Product Managers', 'Operations & Automation Specialists'],
    prerequisites: ['Basic programming experience (Python or JavaScript)', 'Familiarity with web APIs'],
    feeDisplay: 'Inquire for Schedule & Pricing',
  },
  {
    slug: 'data-science-machine-learning',
    title: 'Practical Data Science & Machine Learning',
    level: 'Intermediate',
    format: 'In-Person',
    duration: '10 Weeks',
    overview:
      'Learn how to clean messy datasets, run statistical analysis in Python, train predictive models, and build clear dashboards.',
    curriculumModules: [
      'Data Cleaning & Analysis with Python & Pandas',
      'Exploratory Data Analysis & Statistics',
      'Supervised & Unsupervised Machine Learning',
      'Computer Vision Fundamentals with OpenCV',
      'Packaging & Deploying Models as APIs'
    ],
    targetAudience: ['Aspiring Data Analysts', 'Researchers & Postgraduate Students', 'Engineers & Analysts'],
    prerequisites: ['Secondary school mathematics', 'Basic familiarity with Python'],
    feeDisplay: 'Inquire for Schedule & Pricing',
  },
];

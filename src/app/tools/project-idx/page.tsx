'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, CloudCog, Smartphone } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const projectIdxData = {
  name: 'Project IDX',
  tagline: 'Google\'s AI-powered cloud IDE with Gemini integration',
  description: 'Project IDX (Firebase Studio) is Google\'s cloud-based development environment featuring Gemini AI, real-time collaboration, and seamless integration with Firebase and Google Cloud Platform.',
  url: 'https://idx.dev',
  category: 'Cloud IDE',
  logo: '/logos/project-idx.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          'Cloud-based IDE',
          'Gemini AI assistance',
          'Basic workspace',
          'VS Code framework',
          'Firebase integration',
          'Google Cloud access',
          'Real-time collaboration'
        ],
        highlighted: true
      },
      {
        name: 'Developer Program',
        price: '$0',
        features: [
          'Everything in Free',
          'Up to 5 workspaces',
          'Enhanced Gemini access',
          'Priority features',
          'Documentation summaries',
          'Advanced code explanations',
          'Community support'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Cloud Services',
        price: 'Usage-based',
        features: [
          'Firebase App Hosting',
          'Cloud Functions',
          'Firestore database',
          'Cloud Run deployment',
          'GCP API access',
          'Pay-as-you-go pricing',
          'Enterprise support options'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Coming Soon',
        features: [
          'Advanced features',
          'Custom configurations',
          'Priority support',
          'SLA guarantees',
          'Team management',
          'Security compliance',
          'Contact for details'
        ]
      }
    ]
  },

  features: [
    {
      icon: Brain,
      title: 'Gemini AI Integration',
      description: 'Powered by Gemini (24b) for chat and Codey (12b) for completion. Generate code, explain concepts, and debug with Google\'s latest AI.'
    },
    {
      icon: Cloud,
      title: 'Full Cloud Workstation',
      description: 'Complete VM on Google Cloud with persistent storage. Access your development environment from any device, anywhere.'
    },
    {
      icon: Sparkles,
      title: 'AI Prototyping Mode',
      description: 'Create full apps from multimodal prompts - text, images, or drawings. Currently generates Next.js applications instantly.'
    },
    {
      icon: Users,
      title: 'Real-time Collaboration',
      description: 'Share workspaces with cursor visibility and shared terminals. Like Google Docs for coding with live collaboration.'
    },
    {
      icon: Database,
      title: 'Firebase One-Click Setup',
      description: 'Instant Firebase integration for hosting, Firestore, authentication, and more. Deploy directly from the IDE.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Built-in Android and Flutter emulators. Test mobile apps directly in your browser without local setup.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: 'Free',
      competitors: { 'Cursor': '$20', 'Windsurf': '$15', 'Replit AI': '$20' }
    },
    {
      feature: 'Cloud-Based',
      tool: 'Full VM',
      competitors: { 'Cursor': 'Desktop only', 'Windsurf': 'Desktop only', 'Replit AI': 'Cloud native' }
    },
    {
      feature: 'AI Model',
      tool: 'Gemini & Codey',
      competitors: { 'Cursor': 'GPT-4/Claude', 'Windsurf': 'Claude/GPT-4', 'Replit AI': 'GPT-4/Claude' }
    },
    {
      feature: 'Google Integration',
      tool: 'Native',
      competitors: { 'Cursor': 'None', 'Windsurf': 'None', 'Replit AI': 'Limited' }
    },
    {
      feature: 'Mobile Dev',
      tool: 'Android/Flutter',
      competitors: { 'Cursor': 'External', 'Windsurf': 'External', 'Replit AI': 'Limited' }
    },
    {
      feature: 'Setup Required',
      tool: 'None',
      competitors: { 'Cursor': 'Download app', 'Windsurf': 'Download app', 'Replit AI': 'None' }
    }
  ],

  integrations: [
    { name: 'Gemini', category: 'AI Model', icon: '🧠', description: 'Google\'s latest AI model' },
    { name: 'Firebase', category: 'Backend', icon: '🔥', description: 'Full Firebase suite' },
    { name: 'Google Cloud', category: 'Platform', icon: '☁️', description: 'GCP services' },
    { name: 'Flutter', category: 'Framework', icon: '🦋', description: 'Cross-platform apps' },
    { name: 'Android', category: 'Platform', icon: '🤖', description: 'Android development' },
    { name: 'Next.js', category: 'Framework', icon: '⚡', description: 'React framework' },
    { name: 'Angular', category: 'Framework', icon: '🅰️', description: 'Google\'s framework' },
    { name: 'VS Code', category: 'IDE', icon: '📝', description: 'Code OSS base' }
  ],

  reviews: [
    {
      author: 'Developer Community',
      role: 'Multiple Users',
      company: 'Various',
      rating: 4,
      comment: 'Like having a senior developer looking over my shoulder. The Gemini integration is incredibly helpful for learning and debugging.',
      verified: true
    },
    {
      author: 'Remote Team Lead',
      role: 'Engineering Manager',
      company: 'Tech Startup',
      rating: 5,
      comment: 'Magic collaboration portal for remote teams. Having your entire development environment in your pocket is game-changing.',
      verified: true
    },
    {
      author: 'Full-Stack Developer',
      role: 'Senior Engineer',
      company: 'Enterprise',
      rating: 4,
      comment: 'Go from opening browser to developing in minutes. The Firebase integration saves hours of setup time.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://developers.google.com/idx',
    github: 'https://github.com/google',
    discord: 'https://discord.gg/firebase',
    twitter: 'https://twitter.com/googledevs',
    blog: 'https://developers.googleblog.com'
  },

  faqs: [
    {
      question: 'Is Project IDX really free?',
      answer: 'Yes, Project IDX has a generous free tier with full IDE access, Gemini AI assistance, and basic workspace. Join the Google Developer Program (also free) for up to 5 workspaces. Some Google Cloud services like Firebase App Hosting may incur usage-based charges.'
    },
    {
      question: 'How does Project IDX compare to Cursor or Windsurf?',
      answer: 'Project IDX is fully cloud-based requiring no downloads, while Cursor and Windsurf are desktop apps. IDX offers free access with Gemini AI, deep Google Cloud integration, and built-in mobile emulators. However, Cursor and Windsurf may have more advanced AI coding features for pure development tasks.'
    },
    {
      question: 'What is AI Prototyping Mode?',
      answer: 'AI Prototyping Mode allows you to create full applications from multimodal prompts - text descriptions, images, or even drawings. Currently it generates Next.js web apps, with more frameworks coming soon. It\'s like having an AI architect that builds your app structure instantly.'
    },
    {
      question: 'Can I develop mobile apps with Project IDX?',
      answer: 'Yes! Project IDX includes built-in Android and Flutter emulators that run directly in your browser. You can develop, test, and debug mobile applications without any local setup. iOS support through React Native is coming soon.'
    },
    {
      question: 'What Google services integrate with Project IDX?',
      answer: 'Project IDX offers one-click integration with Firebase (hosting, Firestore, authentication), Google Cloud Platform (Cloud Functions, Cloud Run, Pub/Sub), and Google AI services (Gemini API, AI Studio). It\'s designed as a native Google Cloud development environment.'
    },
    {
      question: 'Is Project IDX suitable for production development?',
      answer: 'Project IDX is currently in preview status, meaning it\'s stable for development but may have backwards-incompatible changes. Many teams use it for prototyping and development, though enterprise features and SLAs are still being developed.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://idx.dev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Project IDX</a> by <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Google Cloud</a> revolutionizes cloud development with a free, browser-based IDE powered by <a href="https://deepmind.google/technologies/gemini/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Gemini AI</a> and seamless <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Firebase</a> integration. Unlike desktop-based <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link> or <Link href="/tools/windsurf" className="text-purple-400 hover:text-purple-300">Windsurf</Link>, Project IDX runs entirely in the cloud on Google Cloud Workstations, offering instant access from any device with built-in Android and Flutter emulators. The platform's AI Prototyping Mode creates complete Next.js applications from multimodal prompts—text, images, or drawings—while real-time collaboration features enable teams to code together like Google Docs.
      </p>
      
      <p className="text-lg leading-relaxed">
        Launched in 2024 and evolved into Firebase Studio in 2025, Project IDX represents Google's vision for AI-first development with zero setup required. The platform's unique combination of Gemini (24b) for conversational AI and Codey (12b) for code completion, plus native integration with <a href="https://cloud.google.com/functions" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Cloud Functions</a>, <a href="https://cloud.google.com/run" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Cloud Run</a>, and the entire Google ecosystem, makes it the ideal choice for developers building modern web and mobile applications. While <Link href="/tools/replit-ai" className="text-purple-400 hover:text-purple-300">Replit AI</Link> charges $20/month for similar features, Project IDX offers a comprehensive free tier with optional pay-as-you-go pricing for advanced Google Cloud services, democratizing professional development tools for hundreds of thousands of developers worldwide.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Project IDX?',
    segments: [
      {
        name: 'Google Cloud Developers',
        description: 'Teams building on GCP leverage native integration with Firebase, Cloud Functions, and Google AI services.',
        icon: Cloud,
        stats: '100K+ developers'
      },
      {
        name: 'Mobile App Teams',
        description: 'Flutter and Android developers use built-in emulators for instant mobile testing without local setup.',
        icon: Smartphone,
        stats: 'Android & Flutter'
      },
      {
        name: 'Remote Collaborators',
        description: 'Distributed teams utilize real-time collaboration features for pair programming and code reviews.',
        icon: Users,
        stats: 'Magic collaboration'
      },
      {
        name: 'AI-First Builders',
        description: 'Developers leverage Gemini AI for prototyping, debugging, and accelerated development workflows.',
        icon: Brain,
        stats: 'Gemini powered'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Project IDX Unique?',
    points: [
      {
        title: 'Truly Free Cloud IDE',
        description: 'Generous free tier with full IDE, AI assistance, and Google Cloud integration—no credit card required.',
        icon: Cloud
      },
      {
        title: 'Multimodal AI Prototyping',
        description: 'Create apps from text, images, or drawings. The only IDE that turns sketches into working code.',
        icon: Sparkles
      },
      {
        title: 'Google Ecosystem Native',
        description: 'One-click Firebase setup, GCP integration, and Gemini AI built-in from day one.',
        icon: Package
      },
      {
        title: 'Browser-Based Mobile Dev',
        description: 'Android and Flutter emulators run in browser—develop and test mobile apps without any downloads.',
        icon: Smartphone
      },
      {
        title: 'Zero Setup Required',
        description: 'Full development environment accessible from any device instantly. No installation, configuration, or maintenance.',
        icon: Zap
      }
    ]
  }
}

export default function ProjectIDXPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={projectIdxData} />
    </>
  )
}
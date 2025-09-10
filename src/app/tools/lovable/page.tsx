'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Sparkles, Code, Zap, Shield, Brain, Rocket, Target, GitBranch, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Heart } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const lovableData = {
  name: 'Lovable',
  tagline: 'Build full-stack web apps with AI in minutes',
  description: 'Lovable (formerly GPT Engineer) is the world\'s first AI Full Stack Engineer. Transform ideas into production-ready web applications through natural language conversations. Build, iterate, and deploy without writing code.',
  url: 'https://lovable.dev',
  category: 'AI Full-Stack Builder',
  logo: '/logos/lovable.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          '5 messages per day',
          '30 messages monthly total',
          'Unlimited public projects',
          'GitHub sync',
          'One-click deployment',
          'Basic AI assistance',
          'Community support'
        ]
      },
      {
        name: 'Starter',
        price: '$20',
        features: [
          'Everything in Free',
          '100 monthly chats',
          'Private projects',
          'Priority AI responses',
          'Advanced code generation',
          'Email support',
          'Export to GitHub'
        ],
        highlighted: true
      },
      {
        name: 'Pro',
        price: '$100',
        features: [
          'Everything in Starter',
          'Unlimited chats',
          'Supabase integration',
          'Custom domains',
          'Advanced authentication',
          'Priority support',
          'Team collaboration'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Unlimited everything',
          'Dedicated support team',
          'Custom integrations',
          'SSO authentication',
          'Advanced security',
          'SLA guarantees',
          'Training and onboarding'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Heart,
      title: 'Natural Language Development',
      description: 'Simply describe what you want to build in plain English. Lovable understands complex requirements and generates complete applications.'
    },
    {
      icon: Sparkles,
      title: 'shadcn/ui Components',
      description: 'Built on shadcn/ui and Tailwind CSS for beautiful, accessible, and customizable components out of the box.'
    },
    {
      icon: Database,
      title: 'Supabase Backend',
      description: 'Integrated Supabase support for databases, authentication, and real-time features. Build full-stack apps, not just frontends.'
    },
    {
      icon: GitBranch,
      title: 'GitHub Integration',
      description: 'Every project syncs to GitHub. You own your code completely with full export capabilities.'
    },
    {
      icon: Zap,
      title: '20x Faster Development',
      description: 'Create functional prototypes in minutes instead of days. Perfect for MVPs and rapid iteration.'
    },
    {
      icon: Brain,
      title: 'Dual AI Models',
      description: 'Uses GPT-4 Mini for speed and Claude for complex reasoning, automatically selecting the best model for each task.'
    }
  ],

  comparisons: [
    {
      feature: 'Full-Stack Capability',
      tool: 'Complete',
      competitors: { 'Bolt.new': 'Complete', 'v0': 'Frontend only', 'Claude Code': 'Code-focused' }
    },
    {
      feature: 'Database Integration',
      tool: 'Supabase built-in',
      competitors: { 'Bolt.new': 'Manual setup', 'v0': false, 'Claude Code': false }
    },
    {
      feature: 'Authentication',
      tool: 'Built-in (Alpha)',
      competitors: { 'Bolt.new': 'Manual', 'v0': false, 'Claude Code': false }
    },
    {
      feature: 'Pricing Model',
      tool: 'Message-based',
      competitors: { 'Bolt.new': 'Token-based', 'v0': 'Credit-based', 'Claude Code': 'Usage-based' }
    },
    {
      feature: 'Starting Price',
      tool: '$0 (Free)',
      competitors: { 'Bolt.new': '$0 (Free)', 'v0': '$0 (Free)', 'Claude Code': '$20' }
    },
    {
      feature: 'GitHub Export',
      tool: 'One-click',
      competitors: { 'Bolt.new': 'Available', 'v0': 'Available', 'Claude Code': 'N/A' }
    }
  ],

  integrations: [
    { name: 'GitHub', category: 'Version Control', icon: '🔗', description: 'Automatic repository sync' },
    { name: 'Supabase', category: 'Backend', icon: '🗄️', description: 'Database and authentication' },
    { name: 'React', category: 'Framework', icon: '⚛️', description: 'Component framework' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨', description: 'Utility-first CSS' },
    { name: 'shadcn/ui', category: 'Components', icon: '🧩', description: 'UI component library' },
    { name: 'Vite', category: 'Build Tool', icon: '⚡', description: 'Fast build tooling' },
    { name: 'OpenAPI', category: 'API', icon: '📡', description: 'Backend connectivity' },
    { name: 'Vercel', category: 'Deployment', icon: '▲', description: 'One-click deployment' }
  ],

  reviews: [
    {
      author: 'Sarah Chen',
      role: 'Startup Founder',
      company: 'TechStart',
      rating: 5,
      comment: 'Built our MVP in 3 days instead of 3 months. The Supabase integration saved us weeks of backend work.',
      verified: true
    },
    {
      author: 'Michael Roberts',
      role: 'Product Manager',
      company: 'InnovateCo',
      rating: 5,
      comment: 'Perfect for prototyping. I can test ideas with real users without waiting for dev resources.',
      verified: true
    },
    {
      author: 'Alex Kim',
      role: 'Full-Stack Developer',
      company: 'Freelancer',
      rating: 4,
      comment: 'Great for quick projects. The code quality is surprisingly good and maintainable.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.lovable.dev',
    github: 'https://github.com/lovable-dev',
    discord: 'https://discord.gg/lovable',
    youtube: 'https://youtube.com/@lovabledev',
    blog: 'https://lovable.dev/blog'
  },

  faqs: [
    {
      question: 'How is Lovable different from Bolt.new?',
      answer: 'While both build full-stack apps, Lovable has built-in Supabase integration for databases and authentication, uses a message-based pricing model instead of tokens, and focuses on React/shadcn/ui specifically. Bolt.new offers more framework flexibility but requires manual backend setup.'
    },
    {
      question: 'What is the message limit?',
      answer: 'Free users get 5 messages per day with a 30 message monthly cap. Each interaction with the AI counts as one message, regardless of complexity. Paid plans start at 100 monthly messages for $20.'
    },
    {
      question: 'Can I use my own backend?',
      answer: 'Yes! While Lovable has built-in Supabase integration, you can connect to any OpenAPI-compatible backend. The generated frontend code is standard React and can be modified to work with any API.'
    },
    {
      question: 'Is the generated code production-ready?',
      answer: 'Yes, the code follows React best practices, uses TypeScript, and includes proper error handling. However, you should review and test thoroughly before deploying to production, especially for complex applications.'
    },
    {
      question: 'What happened to GPT Engineer?',
      answer: 'Lovable is the evolution of GPT Engineer. The team transitioned from a command-line tool to a full GUI-based platform in November 2024, keeping the same core technology but making it more accessible.'
    },
    {
      question: 'How much does it cost to build an app?',
      answer: 'Cost varies by complexity. A simple app might use 10-20 messages ($2-4 on paid plans), while complex applications could use 100+ messages. The free tier is sufficient for experimenting and small projects.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Lovable</a> revolutionizes full-stack development as the world's first AI Full Stack Engineer, transforming natural language into production-ready <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">React</a> applications with integrated <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Supabase</a> backend, <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">shadcn/ui</a> components, and <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Tailwind CSS</a> styling. Unlike <Link href="/tools/bolt-new" className="text-purple-400 hover:text-purple-300">Bolt.new</Link>'s token-based model or <Link href="/tools/v0" className="text-purple-400 hover:text-purple-300">v0</Link>'s frontend-only generation, Lovable delivers complete full-stack solutions with built-in database and authentication, achieving $13.5M ARR in just 3 months with projections to hit $120M ARR by 2025.
      </p>
      
      <p className="text-lg leading-relaxed">
        Powered by dual AI models—<a href="https://openai.com/gpt-4" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GPT-4 Mini</a> for speed and <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Claude</a> for complex reasoning—Lovable accelerates development 20x faster than traditional coding while maintaining complete code ownership through one-click <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitHub</a> export. Starting at $0 for 5 daily messages, this groundbreaking platform empowers non-technical founders to build MVPs in days instead of months, making <Link href="/tools/claude-code" className="text-purple-400 hover:text-purple-300">AI-powered development</Link> accessible to everyone from solo entrepreneurs to enterprise teams seeking rapid prototyping capabilities.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Lovable?',
    segments: [
      {
        name: 'Startup Founders',
        description: 'Non-technical founders use {toolData.name} to build MVPs without hiring developers. Hit $13.5M ARR in just 3 months after launch.',
        icon: Rocket,
        stats: '$120M ARR projected'
      },
      {
        name: 'Product Managers',
        description: 'PMs leverage {toolData.name} to create functional prototypes for user testing and stakeholder demos without dev dependencies.',
        icon: Briefcase,
        stats: '20x faster prototyping'
      },
      {
        name: 'Freelance Developers',
        description: 'Developers use {toolData.name} to accelerate client projects, especially for standard web apps and admin dashboards.',
        icon: Code,
        stats: 'Minutes not hours'
      },
      {
        name: 'Agencies & Studios',
        description: 'Design agencies adopt {toolData.name} to deliver working prototypes alongside designs, adding value to their services.',
        icon: Building2,
        stats: 'Complete deliverables'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Lovable Unique?',
    points: [
      {
        title: 'True Full-Stack in Browser',
        description: 'Unlike {toolData.name} competitors, Lovable includes database and authentication out of the box with Supabase integration.',
        icon: Database
      },
      {
        title: 'Message-Based Simplicity',
        description: 'No complex token calculations. Each interaction is one message, making costs predictable and easy to understand.',
        icon: Zap
      },
      {
        title: 'From Command Line to GUI',
        description: 'Evolved from the original GPT Engineer CLI tool to a polished web interface while maintaining the powerful core technology.',
        icon: Sparkles
      },
      {
        title: 'Rapid Growth Trajectory',
        description: 'Achieved $13.5M ARR in 3 months, projected to hit $120M ARR by August 2025—fastest growing AI dev tool.',
        icon: Rocket
      },
      {
        title: 'Complete Code Ownership',
        description: 'Every project syncs to GitHub. You own the code completely with no vendor lock-in.',
        icon: GitBranch
      }
    ]
  }
}

export default function LovablePage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={lovableData} />
    </>
  )
}
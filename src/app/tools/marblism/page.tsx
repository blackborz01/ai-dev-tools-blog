'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Server, UserCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const marblismData = {
  name: 'Marblism',
  tagline: 'AI-powered Next.js full-stack app generator & AI employees platform',
  description: 'Marblism generates complete Next.js apps from prompts in minutes with database, auth, and API. Plus AI employees that automate inbox, social media, SEO, and customer support tasks 24/7.',
  url: 'https://marblism.com',
  category: 'AI App Builder',
  logo: '/logos/marblism.svg',
  
  pricing: {
    type: 'paid' as const,
    startingPrice: '$39',
    hasFreeTier: false,
    plans: [
      {
        name: 'AI Employees',
        price: '$39',
        features: [
          'All 7 AI employees',
          'Unlimited tasks',
          'Unlimited chat',
          '100+ languages',
          '24/7 support',
          '7-day money back',
          'Cancel anytime'
        ],
        highlighted: true
      },
      {
        name: 'App Builder',
        price: '$20',
        features: [
          'Unlimited app generation',
          'Full Next.js codebase',
          'Database & auth included',
          'API endpoints generated',
          'Real-time features',
          'Export & own code',
          'Documentation access'
        ]
      },
      {
        name: 'Bundle',
        price: '$49',
        features: [
          'Everything in both plans',
          'AI Employees + App Builder',
          'Priority support',
          'Early access features',
          'Custom integrations',
          'Onboarding assistance',
          'Best value option'
        ]
      }
    ]
  },

  features: [
    {
      icon: Bot,
      title: '7 AI Employees',
      description: 'EVA (Executive), SONNY (Community), CARA (Support), PENNY (SEO), RACHEL (Reception), LINDA (Legal), STAN (Sales).'
    },
    {
      icon: Rocket,
      title: '45-Minute Apps',
      description: 'Generate full-stack Next.js apps with database, auth, and API in under 45 minutes from a single prompt.'
    },
    {
      icon: Database,
      title: 'Auto CRUD Generation',
      description: 'Automatically generates all CRUD endpoints when you modify data models. No manual API coding needed.'
    },
    {
      icon: Package,
      title: 'T3 Stack Based',
      description: 'Built on proven T3 stack with Next.js, React, TypeScript, Prisma, tRPC for production-ready apps.'
    },
    {
      icon: UserCheck,
      title: '92% Satisfaction',
      description: '92% customer satisfaction after first week. Users save 10+ hours weekly, $5,000 vs agencies.'
    },
    {
      icon: Globe,
      title: '100,000+ Tasks/Week',
      description: 'AI employees complete 100,000+ tasks weekly across 60+ industries in 100+ languages.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$39 (AI) / $20 (App)',
      competitors: { 'Lovable': '$40', 'v0': '$20', 'Bolt.new': '$20' }
    },
    {
      feature: 'AI Employees',
      tool: '7 specialized',
      competitors: { 'Lovable': 'No', 'v0': 'No', 'Bolt.new': 'No' }
    },
    {
      feature: 'Code Export',
      tool: 'Full ownership',
      competitors: { 'Lovable': 'Yes', 'v0': 'Components only', 'Bolt.new': 'Yes' }
    },
    {
      feature: 'Tech Stack',
      tool: 'Next.js/T3',
      competitors: { 'Lovable': 'React/Supabase', 'v0': 'React', 'Bolt.new': 'Various' }
    },
    {
      feature: 'Database',
      tool: 'Auto-generated',
      competitors: { 'Lovable': 'Supabase', 'v0': 'No', 'Bolt.new': 'Optional' }
    },
    {
      feature: 'Time to Deploy',
      tool: '45 minutes',
      competitors: { 'Lovable': '10 minutes', 'v0': 'N/A', 'Bolt.new': '5 minutes' }
    }
  ],

  integrations: [
    { name: 'Next.js', category: 'Framework', icon: '⚛️', description: 'Core framework' },
    { name: 'Prisma', category: 'Database', icon: '🗄️', description: 'ORM layer' },
    { name: 'tRPC', category: 'API', icon: '🔗', description: 'Type-safe APIs' },
    { name: 'Google Login', category: 'Auth', icon: '🔐', description: 'OAuth support' },
    { name: 'OpenAI', category: 'AI', icon: '🤖', description: 'AI integration' },
    { name: 'Mailjet', category: 'Email', icon: '📧', description: 'Email service' },
    { name: 'Gmail', category: 'Productivity', icon: '📮', description: 'Inbox management' },
    { name: 'Outlook', category: 'Productivity', icon: '📬', description: 'Email support' }
  ],

  reviews: [
    {
      author: 'Startup Founder',
      role: 'CEO',
      company: 'SaaS Startup',
      rating: 5,
      comment: 'Built our MVP in 45 minutes instead of 3 months. The AI employees handle all our customer support and SEO. Saved us $5,000/month vs agencies.',
      verified: true
    },
    {
      author: 'Tech Lead',
      role: 'Full-Stack Developer',
      company: 'Development Agency',
      rating: 5,
      comment: 'The generated Next.js code is clean and production-ready. Auto CRUD generation saves hours. Better than boilerplates like create-react-app.',
      verified: true
    },
    {
      author: 'Solo Entrepreneur',
      role: 'Indie Maker',
      company: 'Various Projects',
      rating: 5,
      comment: '92% satisfaction is real. AI employees run my entire business backend. EVA manages inbox, PENNY writes SEO blogs, CARA handles support.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://dev.marblism.com',
    website: 'https://marblism.com',
    support: 'https://marblism.com/support',
    blog: 'https://marblism.com/blog',
    demo: 'https://marblism.com/demo'
  },

  faqs: [
    {
      question: 'What exactly does Marblism offer?',
      answer: 'Marblism offers two main products: 1) An AI app builder that generates complete Next.js full-stack applications from prompts in 45 minutes, including database, auth, and APIs. 2) Seven AI employees (EVA, SONNY, CARA, PENNY, RACHEL, LINDA, STAN) that automate business tasks like inbox management, social media, customer support, and SEO writing. Both can be purchased separately or bundled.'
    },
    {
      question: 'How does the app generation work?',
      answer: 'You describe your app in natural language, and Marblism generates a complete Next.js codebase with React frontend, Node.js backend, Prisma database schema, tRPC APIs, authentication (JWT + Google), and all CRUD operations. The code is based on the T3 stack and is fully customizable. You own the code completely and can export it anytime.'
    },
    {
      question: 'What can the AI employees actually do?',
      answer: 'The 7 AI employees handle specific tasks: EVA (executive assistant) manages your inbox, SONNY posts on social media, CARA provides customer support, PENNY writes SEO blog articles, RACHEL acts as receptionist, LINDA handles legal documents, and STAN generates leads. They work 24/7, support 100+ languages, and complete 100,000+ tasks weekly across the platform.'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes! Marblism offers a 7-day money-back guarantee. If you\'re not satisfied within the first week, you get a full refund with no questions asked. There\'s no lock-in contract - you can cancel anytime. This applies to both the AI employees ($39/month) and app builder ($20/month) plans.'
    },
    {
      question: 'What types of apps can Marblism generate?',
      answer: 'Marblism excels at generating SaaS applications, marketplaces (like Airbnb clones), social platforms (Twitter-like apps), project management tools (Asana-style), and internal business tools. It\'s less suitable for apps requiring heavy external plugins or complex real-time features like Uber-style ride-sharing. The platform generates standard web applications, not mobile apps.'
    },
    {
      question: 'Do I need coding skills to use Marblism?',
      answer: 'For the AI employees, no coding skills are needed - they work automatically after setup. For the app builder, basic web development understanding helps for customization, though the initial generation requires no coding. The generated code is clean and well-structured, making it easier for developers to modify and extend compared to starting from scratch.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://marblism.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Marblism</a> revolutionizes both app development and business automation by combining an AI-powered <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Next.js</a> full-stack generator with seven specialized AI employees. Unlike <Link href="/tools/lovable" className="text-purple-400 hover:text-purple-300">Lovable</Link>'s React/Supabase approach or <Link href="/tools/v0" className="text-purple-400 hover:text-purple-300">v0</Link>'s component-only generation, Marblism delivers complete production-ready applications in 45 minutes using the proven <a href="https://create.t3.gg" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">T3 stack</a> with <a href="https://www.prisma.io" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Prisma</a>, <a href="https://trpc.io" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">tRPC</a>, and TypeScript. The platform generates everything from database schemas to API endpoints with automatic CRUD operations, while the AI employees handle daily operations—EVA manages inboxes, PENNY writes SEO content, CARA provides customer support, achieving 92% customer satisfaction and saving users $5,000/month versus traditional agencies.
      </p>
      
      <p className="text-lg leading-relaxed">
        Trusted by 50,000+ developers worldwide, Marblism stands out with its dual offering: $20/month for unlimited app generation or $39/month for all seven AI employees (bundle at $49). While <Link href="/tools/bolt-new" className="text-purple-400 hover:text-purple-300">Bolt.new</Link> focuses on instant deployment and <Link href="/tools/create-xyz" className="text-purple-400 hover:text-purple-300">Create.xyz</Link> emphasizes AI-first development, Marblism uniquely combines code generation with business automation. The AI employees complete 100,000+ tasks weekly across 60+ industries in 100+ languages, integrating with <a href="https://gmail.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Gmail</a>, <a href="https://outlook.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Outlook</a>, and social platforms. With a 7-day money-back guarantee, live chat support, and no lock-in contracts, Marblism offers the most comprehensive solution for developers and entrepreneurs who want both rapid app development and automated business operations—making it the Swiss Army knife of AI-powered development and automation tools.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Marblism?',
    segments: [
      {
        name: 'Startup Founders',
        description: 'Build MVPs in 45 minutes and automate operations with AI employees. Save $5,000/month.',
        icon: Rocket,
        stats: '45-minute MVPs'
      },
      {
        name: 'Development Agencies',
        description: 'Generate client apps faster with clean Next.js code and automated CRUD operations.',
        icon: Building2,
        stats: '50,000+ developers'
      },
      {
        name: 'Solo Entrepreneurs',
        description: 'Run entire businesses with AI employees handling support, SEO, and social media.',
        icon: Users,
        stats: '10+ hours saved/week'
      },
      {
        name: 'Enterprise Teams',
        description: 'Build internal tools quickly and scale operations across 60+ industries.',
        icon: Globe,
        stats: '100,000+ tasks/week'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Marblism Unique?',
    points: [
      {
        title: 'Dual AI Platform',
        description: 'Only platform combining full-stack app generation with 7 specialized AI employees.',
        icon: Bot
      },
      {
        title: '45-Minute Apps',
        description: 'Complete Next.js apps with database, auth, and APIs generated in under an hour.',
        icon: Zap
      },
      {
        title: 'T3 Stack Excellence',
        description: 'Built on proven T3 stack with Next.js, Prisma, tRPC for production-ready code.',
        icon: Package
      },
      {
        title: 'Auto CRUD Magic',
        description: 'Change data models and all CRUD endpoints regenerate automatically.',
        icon: Database
      },
      {
        title: '92% Satisfaction',
        description: 'Proven results with users saving 10+ hours weekly and $5,000 vs agencies.',
        icon: UserCheck
      }
    ]
  }
}

export default function MarblismPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={marblismData} />
    </>
  )
}
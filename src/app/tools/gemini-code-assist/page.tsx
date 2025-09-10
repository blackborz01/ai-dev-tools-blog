'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Server, Cpu } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const geminiData = {
  name: 'Gemini Code Assist',
  tagline: 'Google\'s AI coding assistant with Gemini 2.5 for cloud-native development',
  description: 'Gemini Code Assist (formerly Duet AI) brings Google\'s most advanced AI models directly into your IDE. Features agent mode for complex tasks, database assistance, and enterprise code customization.',
  url: 'https://cloud.google.com/gemini/docs/code-assist',
  category: 'AI Code Assistant',
  logo: '/logos/gemini.svg',
  
  pricing: {
    type: 'paid' as const,
    startingPrice: '$19',
    hasFreeTier: false,
    plans: [
      {
        name: 'Standard',
        price: '$19',
        features: [
          'Code completion & generation',
          'AI chat in IDE',
          'Local codebase awareness',
          '32k token window',
          'Code transformation',
          'Popular languages',
          'Special pricing until March 2025'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: '$45',
        features: [
          'Everything in Standard',
          'Code customization',
          'Private repo indexing',
          'Agent mode (multi-step)',
          'Database development',
          'Cloud service integration',
          'Annual: $19/mo until March 2025'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Team Plans',
        price: 'Volume pricing',
        features: [
          'All Enterprise features',
          'Team management',
          'Centralized billing',
          'Priority support',
          'Custom integrations',
          'Training included',
          'SLA guarantees'
        ]
      },
      {
        name: 'Google One AI Premium',
        price: '$20/user',
        features: [
          'Gemini Advanced access',
          'Gemini in Workspace',
          '2TB storage',
          'Consumer focused',
          'Not for enterprise',
          'Basic code assistance',
          'Personal use only'
        ],
        highlighted: false
      }
    ]
  },

  features: [
    {
      icon: Bot,
      title: 'Agent Mode',
      description: 'Multi-step collaborative agent that completes complex tasks with full control over changes.'
    },
    {
      icon: Brain,
      title: 'Gemini 2.5 Models',
      description: 'Powered by Gemini 2.5 Pro and Flash. Superior handling of complex coding tasks and reasoning.'
    },
    {
      icon: Database,
      title: 'Database Assistant',
      description: 'Natural language SQL generation, schema-aware code, query optimization, and explanations.'
    },
    {
      icon: GitBranch,
      title: 'Code Customization',
      description: 'Enterprise: Index private repos from GitHub/GitLab for tailored, context-aware suggestions.'
    },
    {
      icon: Cloud,
      title: 'Google Cloud Native',
      description: 'Deep integration with GCP services. Optimized for cloud-native application development.'
    },
    {
      icon: Package,
      title: 'IDE Integration',
      description: 'Works in VS Code, IntelliJ IDEA, and other JetBrains IDEs. Seamless developer experience.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$19 Standard',
      competitors: { 'GitHub Copilot': '$10', 'Cursor': '$20', 'Codeium': '$0/$15' }
    },
    {
      feature: 'AI Models',
      tool: 'Gemini 2.5 Pro/Flash',
      competitors: { 'GitHub Copilot': 'GPT-4', 'Cursor': 'GPT-4/Claude', 'Codeium': 'Various' }
    },
    {
      feature: 'Agent Mode',
      tool: 'Yes (Enterprise)',
      competitors: { 'GitHub Copilot': 'Yes', 'Cursor': 'Yes', 'Codeium': 'No' }
    },
    {
      feature: 'Cloud Integration',
      tool: 'Google Cloud native',
      competitors: { 'GitHub Copilot': 'GitHub/Azure', 'Cursor': 'Limited', 'Codeium': 'No' }
    },
    {
      feature: 'Database Tools',
      tool: 'Advanced SQL',
      competitors: { 'GitHub Copilot': 'Basic', 'Cursor': 'Basic', 'Codeium': 'Basic' }
    },
    {
      feature: 'Token Window',
      tool: '32k (1M coming)',
      competitors: { 'GitHub Copilot': '128k', 'Cursor': '200k', 'Codeium': 'Variable' }
    }
  ],

  integrations: [
    { name: 'VS Code', category: 'IDE', icon: '📝', description: 'Full support' },
    { name: 'IntelliJ IDEA', category: 'IDE', icon: '🧩', description: 'JetBrains IDEs' },
    { name: 'Google Cloud', category: 'Cloud', icon: '☁️', description: 'Native GCP' },
    { name: 'GitHub', category: 'Repos', icon: '🐙', description: 'Repo indexing' },
    { name: 'GitLab', category: 'Repos', icon: '🦊', description: 'Coming 2025' },
    { name: 'BigQuery', category: 'Database', icon: '🗄️', description: 'SQL assistance' },
    { name: 'Cloud SQL', category: 'Database', icon: '💾', description: 'DB development' },
    { name: 'Firebase', category: 'Backend', icon: '🔥', description: 'Integration' }
  ],

  reviews: [
    {
      author: 'Cloud Engineer',
      role: 'Senior Developer',
      company: 'Enterprise Company',
      rating: 5,
      comment: 'Agent mode is incredible for complex refactoring. The Google Cloud integration is unmatched. Worth the Enterprise tier.',
      verified: true
    },
    {
      author: 'Database Developer',
      role: 'SQL Expert',
      company: 'Data Company',
      rating: 5,
      comment: 'Best-in-class database assistance. Natural language SQL generation with schema awareness saves hours daily.',
      verified: true
    },
    {
      author: 'Full-Stack Developer',
      role: 'Tech Lead',
      company: 'Startup',
      rating: 4,
      comment: 'Gemini 2.5 models are impressive. The $19 promotional pricing makes it competitive. Waiting for 1M token window.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://cloud.google.com/gemini/docs/codeassist',
    pricing: 'https://cloud.google.com/products/gemini/pricing',
    quickstart: 'https://cloud.google.com/gemini/docs/codeassist/quickstart',
    support: 'https://cloud.google.com/support',
    blog: 'https://cloud.google.com/blog'
  },

  faqs: [
    {
      question: 'What happened to Duet AI for Developers?',
      answer: 'Google rebranded Duet AI for Developers as Gemini Code Assist in 2024 to align with their broader Gemini AI initiative. All features from Duet AI are retained and enhanced with new Gemini 2.5 models. The transition was seamless for existing users, with significant improvements in code understanding and generation capabilities.'
    },
    {
      question: 'What\'s the difference between Standard and Enterprise?',
      answer: 'Standard ($19/month promotional, normally $45) includes code completion, generation, chat, local codebase awareness, and code transformation. Enterprise ($45/month, $19 promotional) adds Agent mode for complex multi-step tasks, code customization via private repo indexing, database development assistance, and deeper Google Cloud service integration.'
    },
    {
      question: 'What is Agent mode and why is it special?',
      answer: 'Agent mode (Enterprise only) is a multi-step, collaborative reasoning agent that goes beyond simple command-response. It can complete complex goals like "refactor this entire module to use async/await" or "migrate this database schema to PostgreSQL" with full control over every change. It reasons through problems and executes multiple steps autonomously.'
    },
    {
      question: 'How does Gemini 2.5 compare to competitors\' models?',
      answer: 'Gemini 2.5 Pro and Flash are Google\'s latest models, optimized for code understanding with superior performance on complex tasks. While GitHub Copilot uses GPT-4 and Cursor offers GPT-4/Claude, Gemini 2.5 excels at Google Cloud integration and has a roadmap to 1M token context windows, far exceeding current competitors.'
    },
    {
      question: 'Is the promotional pricing worth switching for?',
      answer: 'The $19/month pricing (until March 31, 2025) for both Standard and Enterprise on annual plans is highly competitive. It matches Cursor\'s pricing while offering superior Google Cloud integration. For teams using GCP, it\'s particularly valuable. The normal $45/month is steep, so locking in the promotional rate is recommended.'
    },
    {
      question: 'What\'s unique about the database development features?',
      answer: 'Gemini Code Assist offers unmatched database assistance: natural language to SQL generation that\'s schema-aware, automatic query optimization suggestions, clear explanations of complex queries, and direct integration with BigQuery and Cloud SQL. This goes far beyond the basic SQL support in competing tools, making it invaluable for data-heavy applications.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://cloud.google.com/gemini/docs/code-assist" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Gemini Code Assist</a>, formerly known as Duet AI for Developers, represents <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Google Cloud</a>'s enterprise-grade answer to AI-powered coding assistance. Powered by the cutting-edge <a href="https://deepmind.google/technologies/gemini/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Gemini 2.5 Pro and Flash</a> models, it delivers superior code generation and understanding capabilities directly in VS Code and JetBrains IDEs. The standout Agent mode (Enterprise tier) enables complex, multi-step task completion that goes beyond the simple command-response paradigm of <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link> or <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link>. With promotional pricing at $19/month until March 2025 (normally $45), it offers compelling value for teams invested in the Google Cloud ecosystem.
      </p>
      
      <p className="text-lg leading-relaxed">
        What truly differentiates Gemini Code Assist is its deep integration with Google Cloud services and unparalleled database development assistance. Unlike <Link href="/tools/codeium-editor" className="text-purple-400 hover:text-purple-300">Codeium</Link>'s generic approach or <Link href="/tools/amazon-codewhisperer" className="text-purple-400 hover:text-purple-300">Amazon CodeWhisperer</Link>'s AWS focus, Gemini Code Assist provides schema-aware SQL generation, query optimization, and seamless integration with <a href="https://cloud.google.com/bigquery" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">BigQuery</a> and <a href="https://cloud.google.com/sql" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Cloud SQL</a>. The Enterprise edition's ability to index private repositories from GitHub and GitLab enables truly customized code suggestions based on your organization's patterns and standards. With Gemini 2.5's advanced reasoning capabilities and a roadmap to 1 million token context windows, Gemini Code Assist positions itself as the premium choice for enterprises serious about AI-augmented development, particularly those building cloud-native applications on Google Cloud Platform.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Gemini Code Assist?',
    segments: [
      {
        name: 'Google Cloud Teams',
        description: 'Enterprises building on GCP leverage native integration and cloud-optimized suggestions.',
        icon: Cloud,
        stats: 'GCP native'
      },
      {
        name: 'Database Developers',
        description: 'SQL experts using advanced database assistance for BigQuery and Cloud SQL development.',
        icon: Database,
        stats: 'Schema-aware SQL'
      },
      {
        name: 'Enterprise Developers',
        description: 'Large teams needing code customization based on private repositories and standards.',
        icon: Building2,
        stats: 'Private repo indexing'
      },
      {
        name: 'Full-Stack Engineers',
        description: 'Developers building cloud-native applications with AI-powered assistance.',
        icon: Code,
        stats: 'Agent mode'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Gemini Code Assist Unique?',
    points: [
      {
        title: 'Agent Mode',
        description: 'Multi-step collaborative agent for complex tasks—beyond simple completions.',
        icon: Bot
      },
      {
        title: 'Google Cloud Native',
        description: 'Deepest integration with GCP services, optimized for cloud development.',
        icon: Cloud
      },
      {
        title: 'Database Excellence',
        description: 'Best-in-class SQL assistance with schema awareness and optimization.',
        icon: Database
      },
      {
        title: 'Gemini 2.5 Power',
        description: 'Latest Google AI models with superior reasoning and code understanding.',
        icon: Brain
      },
      {
        title: '1M Token Future',
        description: 'Roadmap to 1 million token context windows, far exceeding competitors.',
        icon: Sparkles
      }
    ]
  }
}

export default function GeminiCodeAssistPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={geminiData} />
    </>
  )
}
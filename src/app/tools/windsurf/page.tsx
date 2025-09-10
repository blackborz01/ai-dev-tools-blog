'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Wind, Flow } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const windsurfData = {
  name: 'Windsurf',
  tagline: 'The AI IDE that creates seamless flows between human and machine',
  description: 'Windsurf by Codeium revolutionizes coding with AI Flows and Cascade technology. Experience real-time context awareness and multi-file editing that understands your intent without repeated explanations.',
  url: 'https://codeium.com/windsurf',
  category: 'AI IDE',
  logo: '/logos/windsurf.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          '25 prompt credits/month',
          '2-week Pro trial',
          'Unlimited SWE-1 model',
          'Fast Tab & Command',
          '1 App Deploy/day',
          'All premium models',
          'Zero data retention'
        ]
      },
      {
        name: 'Pro',
        price: '$15',
        features: [
          '500 prompt credits/month',
          'SWE-1 model (0 credits)',
          '$10 for 250 add-on credits',
          '5 App Deploys/day',
          'Priority model access',
          'Advanced AI features',
          'Email support'
        ],
        highlighted: true
      },
      {
        name: 'Teams',
        price: '$30/user',
        features: [
          '500 credits per user',
          'Windsurf Reviews',
          'Centralized billing',
          'Admin dashboard',
          'Priority support',
          'Auto zero data retention',
          'Optional SSO (+$10)'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: '$60+/user',
        features: [
          '1,000 credits per user',
          'Role-Based Access Control',
          'SSO & access control',
          'Volume discounts (200+ seats)',
          'Dedicated account manager',
          'Hybrid deployment',
          'FedRAMP & SOC 2 compliant'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Wind,
      title: 'AI Flows Technology',
      description: 'Creates seamless collaboration between developer and AI with real-time context awareness and intent synchronization.'
    },
    {
      icon: Brain,
      title: 'Cascade System',
      description: 'Neural network-like codebase mapping that enables intelligent multi-file edits while maintaining project coherence.'
    },
    {
      icon: Zap,
      title: 'Supercomplete',
      description: 'Analyzes potential next actions and predicts cursor location with uncanny accuracy, anticipating your coding flow.'
    },
    {
      icon: FileCode,
      title: 'Real-time Awareness',
      description: 'Understands your actions without repeated explanations. The AI maintains perfect synchronization with your intent.'
    },
    {
      icon: Cloud,
      title: 'Instant Deploy',
      description: 'Live preview and deployment directly from the IDE. Modify elements and deploy without context switching.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type 2, FedRAMP High, HIPAA compliant with zero data retention and hybrid deployment options.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$15 Pro',
      competitors: { 'Cursor': '$20', 'GitHub Copilot': '$10', 'Replit AI': '$20' }
    },
    {
      feature: 'Free Credits',
      tool: '25/month',
      competitors: { 'Cursor': 'Limited trial', 'GitHub Copilot': '2000 completions', 'Replit AI': 'Limited Agent' }
    },
    {
      feature: 'Real-time Context',
      tool: 'Advanced Flows',
      competitors: { 'Cursor': 'Good', 'GitHub Copilot': 'Basic', 'Replit AI': 'Limited' }
    },
    {
      feature: 'Multi-file Editing',
      tool: 'Cascade AI',
      competitors: { 'Cursor': 'Composer', 'GitHub Copilot': 'Basic', 'Replit AI': 'N/A' }
    },
    {
      feature: 'Response Speed',
      tool: 'Fastest',
      competitors: { 'Cursor': 'Fast', 'GitHub Copilot': 'Moderate', 'Replit AI': 'Moderate' }
    },
    {
      feature: 'Enterprise Ready',
      tool: 'FedRAMP High',
      competitors: { 'Cursor': 'SOC 2', 'GitHub Copilot': 'Yes', 'Replit AI': 'Limited' }
    }
  ],

  integrations: [
    { name: 'Claude 3.5', category: 'AI Model', icon: '🧠', description: 'Anthropic Claude Sonnet' },
    { name: 'GPT-4', category: 'AI Model', icon: '🤖', description: 'OpenAI models' },
    { name: 'VS Code', category: 'IDE', icon: '📝', description: 'Extension support' },
    { name: 'Python', category: 'Language', icon: '🐍', description: '70+ languages' },
    { name: 'React', category: 'Framework', icon: '⚛️', description: 'Full framework support' },
    { name: 'Docker', category: 'DevOps', icon: '🐳', description: 'Container integration' },
    { name: 'Git', category: 'Version Control', icon: '🔗', description: 'Native Git support' },
    { name: 'MCP', category: 'Protocol', icon: '🔌', description: 'Model Context Protocol' }
  ],

  reviews: [
    {
      author: 'Engineering Team',
      role: 'Enterprise Developer',
      company: 'JPMorgan Chase',
      rating: 5,
      comment: 'Windsurf increased our team productivity by 200%. The AI Flows feature completely changed how we approach complex codebases.',
      verified: true
    },
    {
      author: 'Developer Community',
      role: 'Multiple Users',
      company: 'Various',
      rating: 5,
      comment: 'The Cascade system is revolutionary. It understands multi-file changes better than any other AI IDE we\'ve tested.',
      verified: true
    },
    {
      author: 'Tech Lead',
      role: 'Senior Engineer',
      company: 'Dell Technologies',
      rating: 5,
      comment: '4-9x faster onboarding for new developers. Windsurf\'s real-time awareness eliminates constant context switching.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.codeium.com/windsurf',
    github: 'https://github.com/Exafunction',
    discord: 'https://discord.gg/codeium',
    twitter: 'https://twitter.com/codeiumdev',
    changelog: 'https://codeium.com/windsurf/changelog'
  },

  faqs: [
    {
      question: 'What makes Windsurf different from Cursor?',
      answer: 'Windsurf features revolutionary AI Flows technology that creates seamless collaboration between human and AI with real-time context awareness. While Cursor offers excellent AI assistance, Windsurf\'s Cascade system provides superior multi-file editing and faster response times with the same underlying models. Plus, Windsurf offers a more generous free tier with 25 credits/month.'
    },
    {
      question: 'What is the AI Flows technology?',
      answer: 'AI Flows is Windsurf\'s unique approach to human-AI collaboration. It maintains perfect synchronization between your intent and the AI\'s understanding, eliminating the need to repeatedly explain context. The system creates a seamless "flow" state where the AI anticipates your needs in real-time.'
    },
    {
      question: 'How does Cascade work for multi-file editing?',
      answer: 'Cascade maps your codebase like a neural network, understanding relationships between files and components. When you make changes, it intelligently propagates updates across related files while maintaining project coherence. This enables complex refactoring and feature implementation across multiple files simultaneously.'
    },
    {
      question: 'Is Windsurf secure for enterprise use?',
      answer: 'Yes, Windsurf is SOC 2 Type 2 certified, FedRAMP High compliant, and HIPAA compliant. It offers zero data retention, hybrid deployment options for enterprises with 200+ seats, and is used by 59% of Fortune 500 companies including JPMorgan Chase and Dell.'
    },
    {
      question: 'What programming languages does Windsurf support?',
      answer: 'Windsurf supports 70+ programming languages including JavaScript, TypeScript, Python, Ruby, PHP, Swift, C#, Go, Java, and more. It works with all major frameworks and integrates with 40+ different IDEs, making it versatile for any tech stack.'
    },
    {
      question: 'How much does Windsurf cost compared to alternatives?',
      answer: 'Windsurf Pro costs $15/month with 500 credits, making it cheaper than Cursor ($20) and Replit AI ($20), though slightly more than GitHub Copilot ($10). The free tier offers 25 credits/month, and enterprise plans start at $60/user with volume discounts for 200+ seats.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://codeium.com/windsurf" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Windsurf</a> by <a href="https://codeium.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Codeium</a> revolutionizes AI-powered development through its groundbreaking Flows technology that creates seamless collaboration between developers and artificial intelligence. With Cascade's neural network-like codebase mapping and real-time context awareness, Windsurf delivers 40-200% productivity gains for the 1 million+ developers at companies like <a href="https://www.jpmorganchase.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">JPMorgan Chase</a>, <a href="https://dell.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Dell</a>, and <a href="https://zillow.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Zillow</a>. Unlike <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link>'s traditional approach or <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link>'s suggestion model, Windsurf anticipates developer intent without repeated explanations, achieving faster response times while using the same <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Claude 3.5 Sonnet</a> models.
      </p>
      
      <p className="text-lg leading-relaxed">
        Valued at $2.85B in 2025 after <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">OpenAI</a>'s failed $3B acquisition attempt, Windsurf represents the future of enterprise AI development with FedRAMP High compliance, SOC 2 Type 2 certification, and adoption by 59% of Fortune 500 companies. Starting at just $15/month (compared to <Link href="/tools/replit-ai" className="text-purple-400 hover:text-purple-300">Replit AI</Link>'s $20), Windsurf's generous free tier with 25 monthly credits and revolutionary Supercomplete feature that predicts cursor location make it the fastest-growing AI IDE with $100M ARR. The platform's ability to generate 70M+ lines of code daily while maintaining zero data retention positions Windsurf as the enterprise choice for teams seeking 4-9x faster onboarding and 20-40x traditional ROI through AI-powered development.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Windsurf?',
    segments: [
      {
        name: 'Enterprise Teams',
        description: '59% of Fortune 500 companies including JPMorgan Chase and Dell rely on Windsurf for 200% productivity gains.',
        icon: Building2,
        stats: '59% of Fortune 500'
      },
      {
        name: 'Professional Developers',
        description: '1M+ developers achieve 40-200% productivity increases with AI Flows and real-time context awareness.',
        icon: Code,
        stats: '1M+ active users'
      },
      {
        name: 'Tech Startups',
        description: 'Fast-moving teams leverage Windsurf for 4-9x faster onboarding and rapid feature development.',
        icon: Rocket,
        stats: '70M+ lines daily'
      },
      {
        name: 'Government & Healthcare',
        description: 'FedRAMP High and HIPAA compliant platform trusted for sensitive development environments.',
        icon: Shield,
        stats: 'FedRAMP certified'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Windsurf Unique?',
    points: [
      {
        title: 'AI Flows Innovation',
        description: 'First IDE to create seamless human-AI collaboration with perfect intent synchronization.',
        icon: Wind
      },
      {
        title: 'Cascade Neural Mapping',
        description: 'Maps codebases like neural networks for intelligent multi-file edits maintaining project coherence.',
        icon: Brain
      },
      {
        title: 'Fastest Response Times',
        description: 'Outperforms competitors using same models through superior architecture and optimization.',
        icon: Zap
      },
      {
        title: 'Enterprise-Grade Security',
        description: 'FedRAMP High, SOC 2 Type 2, HIPAA compliant with zero data retention guarantee.',
        icon: Shield
      },
      {
        title: 'Generous Free Tier',
        description: 'Most comprehensive free offering with 25 credits/month and 2-week Pro trial access.',
        icon: Sparkles
      }
    ]
  }
}

export default function WindsurfPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={windsurfData} />
    </>
  )
}
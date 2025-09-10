'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Play, Laptop } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const replitData = {
  name: 'Replit AI',
  tagline: 'Build and deploy AI-powered apps instantly in your browser',
  description: 'Replit AI transforms natural language into complete applications with Agent mode. Zero setup required - code, collaborate, and deploy instantly from any browser with integrated AI assistance.',
  url: 'https://replit.com',
  category: 'AI Development Platform',
  logo: '/logos/replit.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Starter',
        price: '$0',
        features: [
          '10 development apps',
          'Limited Agent trial',
          '50+ languages',
          '3 public projects',
          '2 GiB storage',
          '10 GiB data transfer',
          'Community support'
        ]
      },
      {
        name: 'Core',
        price: '$20',
        features: [
          'Full Agent access',
          'Claude Sonnet & GPT-4o',
          '$25 monthly credits',
          'Unlimited private apps',
          '100 GiB data transfer',
          'Advanced AI tools',
          'Priority support'
        ],
        highlighted: true
      },
      {
        name: 'Teams',
        price: '$35/user',
        features: [
          'Everything in Core',
          '$40 credits per user',
          '50 viewer seats',
          'Private deployments',
          '8 vCPUs, 16 GiB memory',
          '250 GiB storage',
          'Role-based access'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Dedicated account manager',
          'Advanced security',
          'SSO integration',
          'Single tenant GCP',
          'Custom contracts',
          'Priority support',
          'Training & onboarding'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Bot,
      title: 'Replit Agent',
      description: 'Build complete apps from natural language. Agent handles environment setup, dependencies, and implementation automatically.'
    },
    {
      icon: Sparkles,
      title: 'Ghostwriter AI',
      description: '2-3x faster than GitHub Copilot with proactive debugging, code explanation, and Edit Code Magic refactoring.'
    },
    {
      icon: Play,
      title: 'Zero Setup Required',
      description: 'Start coding instantly in browser. No downloads, installations, or environment configuration needed.'
    },
    {
      icon: Users,
      title: 'Real-time Collaboration',
      description: 'Google Docs-style multiplayer coding. Work together on the same code simultaneously from anywhere.'
    },
    {
      icon: Cloud,
      title: 'One-Click Deploy',
      description: 'Deploy to production instantly with live URLs. Autoscale, Reserved VMs, and static hosting options available.'
    },
    {
      icon: Package,
      title: 'Template Ecosystem',
      description: 'Every project becomes a reusable template. Fork from millions of open-source projects instantly.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$20 Core',
      competitors: { 'Cursor': '$20', 'GitHub Copilot': '$10', 'Claude Code': '$20' }
    },
    {
      feature: 'Full App Generation',
      tool: 'Complete',
      competitors: { 'Cursor': 'Code only', 'GitHub Copilot': 'No', 'Claude Code': 'Code only' }
    },
    {
      feature: 'Development Environment',
      tool: 'Browser-based',
      competitors: { 'Cursor': 'Desktop IDE', 'GitHub Copilot': 'Extension', 'Claude Code': 'Terminal' }
    },
    {
      feature: 'Deployment',
      tool: 'Built-in',
      competitors: { 'Cursor': 'External', 'GitHub Copilot': 'External', 'Claude Code': 'External' }
    },
    {
      feature: 'Collaboration',
      tool: 'Real-time',
      competitors: { 'Cursor': 'Git-based', 'GitHub Copilot': 'Git-based', 'Claude Code': 'Git-based' }
    },
    {
      feature: 'Setup Required',
      tool: 'None',
      competitors: { 'Cursor': 'Download app', 'GitHub Copilot': 'IDE setup', 'Claude Code': 'Terminal setup' }
    }
  ],

  integrations: [
    { name: 'GPT-4', category: 'AI Model', icon: '🤖', description: 'OpenAI GPT-4o integration' },
    { name: 'Claude', category: 'AI Model', icon: '🧠', description: 'Anthropic Claude Sonnet' },
    { name: 'Python', category: 'Language', icon: '🐍', description: 'Full Python support' },
    { name: 'JavaScript', category: 'Language', icon: '📜', description: 'Node.js & frameworks' },
    { name: 'React', category: 'Framework', icon: '⚛️', description: 'React & Next.js apps' },
    { name: 'Flask', category: 'Framework', icon: '🌶️', description: 'Python web apps' },
    { name: 'Google Cloud', category: 'Partner', icon: '☁️', description: 'GCP integration' },
    { name: 'GitHub', category: 'Version Control', icon: '🐙', description: 'Git integration' }
  ],

  reviews: [
    {
      author: 'GenAIPI Founder',
      role: 'Non-technical Founder',
      company: 'EdTech Startup',
      rating: 5,
      comment: 'Built a Fortune 500 training platform with zero coding knowledge. What would have cost $300K and 18 months took 3 months with Replit Agent.',
      verified: true
    },
    {
      author: 'Sarah Mitchell',
      role: 'Sr Financial Analyst',
      company: 'Financial Services',
      rating: 5,
      comment: 'Very impactful, easy to use and quick to deploy. Replit AI is 2-3x faster than GitHub Copilot for our prototypes.',
      verified: true
    },
    {
      author: 'Developer Community',
      role: 'Multiple Users',
      company: 'Various',
      rating: 4,
      comment: 'Best "prompt to code" tool for non-technical folks. The Agent feature is revolutionary for MVP development.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.replit.com',
    github: 'https://github.com/replit',
    discord: 'https://discord.gg/replit',
    twitter: 'https://twitter.com/replit',
    blog: 'https://blog.replit.com'
  },

  faqs: [
    {
      question: 'How is Replit AI different from Cursor or GitHub Copilot?',
      answer: 'Replit AI builds complete applications from natural language, not just code completion. It includes a full browser-based development environment with zero setup, instant deployment, and real-time collaboration. While Cursor and Copilot focus on code assistance, Replit Agent creates entire working apps with hosting included.'
    },
    {
      question: 'What is Replit Agent and how does it work?',
      answer: 'Replit Agent is an AI that builds complete applications from natural language prompts. It automatically sets up the environment, installs dependencies, writes code, and handles deployment. Uses GPT-4 and Claude models with effort-based pricing - simple changes cost ~$0.25, complex tasks cost more.'
    },
    {
      question: 'How much does Replit AI cost?',
      answer: 'Free tier includes limited Agent access and 10 development apps. Core plan at $20/month provides full Agent access with $25 monthly credits. Teams at $35/user/month includes $40 credits per user. Agent uses effort-based pricing where costs scale with task complexity.'
    },
    {
      question: 'Can I deploy apps built with Replit?',
      answer: 'Yes! Replit includes one-click deployment with live URLs. Options include Autoscale ($1/month), Reserved VMs ($20/month), Static Pages, and Scheduled Jobs ($1/month). Your apps get instant hosting with 100 GiB monthly data transfer on Core plan.'
    },
    {
      question: 'What languages does Replit support?',
      answer: 'Replit supports 50+ programming languages including Python, JavaScript, TypeScript, Java, C++, Go, Rust, and more. It handles frontend frameworks like React, Vue, Next.js and backend frameworks like Flask, Django, and Node.js - all with AI assistance.'
    },
    {
      question: 'Is Replit suitable for professional development?',
      answer: 'Yes, companies like Zillow and HubSpot use Replit for production systems. With $100M+ ARR and 22.5M users, Replit handles everything from MVPs to enterprise applications. The Teams and Enterprise plans include advanced security, SSO, and dedicated support.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Replit AI</a> revolutionizes software development by transforming natural language into complete, deployed applications through its groundbreaking Agent technology. Powered by <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GPT-4</a> and <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Claude Sonnet</a>, Replit achieved 10x growth to $100M ARR in just 6 months by democratizing app creation for 22.5 million users worldwide. Unlike <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link>'s desktop IDE or <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link>'s code completion, Replit delivers instant browser-based development with zero setup, real-time collaboration, and one-click deployment—making it the fastest path from idea to production app.
      </p>
      
      <p className="text-lg leading-relaxed">
        With backing from <a href="https://a16z.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Andreessen Horowitz</a> at a $3B valuation target, Replit's unique combination of Ghostwriter AI (2-3x faster than competitors) and effort-based Agent pricing starting at $0.25 per task empowers non-technical founders to build MVPs saving $300K+ compared to traditional development. The platform's vision of "1 billion developers" becomes reality through features like <a href="https://docs.replit.com/agent" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Replit Agent</a> for autonomous coding, template ecosystem with millions of forkable projects, and enterprise adoption by companies like <a href="https://zillow.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Zillow</a> and <a href="https://hubspot.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">HubSpot</a>, positioning Replit as the future of AI-native development where anyone can build software instantly.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Replit AI?',
    segments: [
      {
        name: 'Non-Technical Founders',
        description: 'Entrepreneurs build MVPs and startups without coding knowledge, saving $300K+ and months of development time.',
        icon: Rocket,
        stats: '$300K+ savings'
      },
      {
        name: 'Students & Educators',
        description: '22.5 million users across 200+ countries learn programming with AI assistance and instant deployment.',
        icon: GraduationCap,
        stats: '22.5M users'
      },
      {
        name: 'Professional Developers',
        description: 'Engineers at Zillow and HubSpot use Replit for rapid prototyping and production deployments.',
        icon: Code,
        stats: '$100M+ ARR'
      },
      {
        name: 'Enterprise Teams',
        description: 'Fortune 500 companies leverage Replit for collaborative development with SSO and advanced security.',
        icon: Building2,
        stats: '10x growth in 6 months'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Replit AI Unique?',
    points: [
      {
        title: 'Complete App Generation',
        description: 'Agent builds entire applications from prompts, not just code snippets—from setup to deployment.',
        icon: Bot
      },
      {
        title: 'Zero Setup Browser IDE',
        description: 'Start coding instantly from any device. No downloads, installations, or environment configuration.',
        icon: Laptop
      },
      {
        title: 'Fastest B2B SaaS Growth',
        description: 'Achieved $100M ARR in record time with 10x growth in 6 months, targeting $3B valuation.',
        icon: Rocket
      },
      {
        title: 'Real-time Collaboration',
        description: 'Google Docs-style multiplayer coding where teams work together on the same code simultaneously.',
        icon: Users
      },
      {
        title: 'Effort-Based AI Pricing',
        description: 'Pay based on task complexity starting at $0.25—simple edits cost less, complex features cost more.',
        icon: Zap
      }
    ]
  }
}

export default function ReplitAIPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={replitData} />
    </>
  )
}
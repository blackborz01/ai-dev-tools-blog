'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Search, Lock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const sourcegraphCodyData = {
  name: 'Sourcegraph Cody',
  tagline: 'Enterprise AI coding assistant with deep multi-repo context and shared team prompts',
  description: 'Cody leverages Sourcegraph\'s code graph to understand entire codebases across repositories. Features context-aware suggestions, shared team prompts, and enterprise security with zero data retention.',
  url: 'https://sourcegraph.com/cody',
  category: 'AI Code Assistant',
  logo: '/logos/sourcegraph-cody.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          'Basic code completions',
          'Code explanations',
          '500K tokens context/month',
          'Limited chat requests',
          'Personal use only',
          'VS Code & JetBrains',
          'Community support'
        ]
      },
      {
        name: 'Pro',
        price: '$9',
        features: [
          'Everything in Free',
          '1M tokens context/month',
          'Unlimited chat & commands',
          'Priority model access',
          'Enhanced autocomplete',
          'Advanced context search',
          'Email support'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise Starter',
        price: '$19',
        features: [
          'Up to 50 developers',
          '100 repositories indexed',
          '5GB storage',
          'Admin controls',
          'SSO authentication',
          'Audit logs',
          'Priority support'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: '$59/user',
        features: [
          'Unlimited repositories',
          'Unlimited context',
          'Context filters',
          'Custom LLM choice',
          'IP indemnity',
          'Zero data retention',
          'Dedicated support'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise Plus',
        price: 'Custom',
        features: [
          'Everything in Enterprise',
          'On-premise deployment',
          'Air-gapped option',
          'Custom integrations',
          'Professional services',
          'SLA guarantees',
          'Contact sales'
        ]
      }
    ]
  },

  features: [
    {
      icon: Search,
      title: 'Code Graph Context',
      description: 'Understands entire codebases using Sourcegraph\'s advanced search API for multi-repo awareness.'
    },
    {
      icon: Users,
      title: 'Shared Team Prompts',
      description: 'Teams share and reuse prompts to ensure consistency and automate repetitive tasks across projects.'
    },
    {
      icon: Shield,
      title: 'Zero Data Retention',
      description: 'Enterprise-grade security with full data isolation, audit logs, and no training on your code.'
    },
    {
      icon: Brain,
      title: 'Multiple LLMs',
      description: 'Choose from Claude 3.5, GPT-4o, or Gemini Pro. Models that never retain or train on your data.'
    },
    {
      icon: GitBranch,
      title: 'Multi-Repo Search',
      description: 'Context from 100+ repositories simultaneously. Understands dependencies and cross-repo patterns.'
    },
    {
      icon: Lock,
      title: 'Context Filters',
      description: 'Enterprise controls to prevent sensitive code from being sent to LLM providers.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$9 Pro / $59 Ent',
      competitors: { 'GitHub Copilot': '$10 / $19', 'Cursor': '$20', 'Tabnine': '$12 / $39' }
    },
    {
      feature: 'Multi-Repo Context',
      tool: 'Advanced (100+)',
      competitors: { 'GitHub Copilot': 'Limited', 'Cursor': 'Single repo', 'Tabnine': 'Limited' }
    },
    {
      feature: 'Shared Prompts',
      tool: 'Team library',
      competitors: { 'GitHub Copilot': 'No', 'Cursor': 'No', 'Tabnine': 'No' }
    },
    {
      feature: 'Context Window',
      tool: 'Up to 1M tokens',
      competitors: { 'GitHub Copilot': '128K', 'Cursor': '200K', 'Tabnine': '32K' }
    },
    {
      feature: 'Zero Retention',
      tool: 'Guaranteed',
      competitors: { 'GitHub Copilot': 'No', 'Cursor': 'No', 'Tabnine': 'Yes' }
    },
    {
      feature: 'Code Search',
      tool: 'Enterprise search',
      competitors: { 'GitHub Copilot': 'Basic', 'Cursor': 'Local', 'Tabnine': 'Basic' }
    }
  ],

  integrations: [
    { name: 'VS Code', category: 'IDE', icon: '📝', description: 'Full extension' },
    { name: 'JetBrains', category: 'IDE', icon: '🧩', description: 'All IDEs' },
    { name: 'GitHub', category: 'Git', icon: '🐙', description: 'Code host' },
    { name: 'GitLab', category: 'Git', icon: '🦊', description: 'Self-hosted' },
    { name: 'Bitbucket', category: 'Git', icon: '🪣', description: 'Atlassian' },
    { name: 'Claude 3.5', category: 'LLM', icon: '🤖', description: 'Anthropic' },
    { name: 'GPT-4o', category: 'LLM', icon: '🧠', description: 'OpenAI' },
    { name: 'Gemini Pro', category: 'LLM', icon: '✨', description: 'Google' }
  ],

  reviews: [
    {
      author: 'Engineering Manager',
      role: 'Platform Team Lead',
      company: 'Fortune 500 Bank',
      rating: 5,
      comment: 'Cody\'s multi-repo context is unmatched. Shared prompts ensure our 200+ developers follow consistent patterns. Saves 5-6 hours per week.',
      verified: true
    },
    {
      author: 'Senior Developer',
      role: 'Backend Engineer',
      company: 'Enterprise Software',
      rating: 5,
      comment: 'The code graph understanding is incredible. It knows our entire microservices architecture. Zero data retention was mandatory for us.',
      verified: true
    },
    {
      author: 'DevOps Lead',
      role: 'Infrastructure Team',
      company: 'Government Agency',
      rating: 5,
      comment: 'Context filters prevent sensitive code exposure. Audit logs satisfy compliance. Best enterprise AI assistant we evaluated.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://sourcegraph.com/docs/cody',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai',
    pricing: 'https://sourcegraph.com/pricing',
    blog: 'https://sourcegraph.com/blog',
    github: 'https://github.com/sourcegraph/cody'
  },

  faqs: [
    {
      question: 'What makes Cody\'s context understanding unique?',
      answer: 'Cody leverages Sourcegraph\'s code graph technology to understand entire codebases across multiple repositories. Unlike competitors that focus on single files or repos, Cody can pull context from 100+ repositories simultaneously, understanding dependencies, API usage patterns, and cross-repo relationships. This "code intelligence" provides suggestions based on how your entire organization writes code, not just the current file.'
    },
    {
      question: 'How do shared team prompts work?',
      answer: 'Shared prompts allow teams to create, save, and reuse AI prompts for common tasks. For example, a "generate unit test" prompt customized for your testing framework becomes available to all team members. This ensures consistency across the codebase, automates repetitive tasks, and captures institutional knowledge. Teams report 40% faster onboarding as new developers can leverage pre-built prompts for common workflows.'
    },
    {
      question: 'Is Cody Pro worth $9/month vs the free tier?',
      answer: 'Pro at $9/month offers significant value: 2x context window (1M vs 500K tokens), unlimited chat/commands, priority model access, and enhanced autocomplete. The expanded context is crucial for understanding larger codebases. Users report 2x faster coding with Pro\'s features. It\'s cheaper than GitHub Copilot ($10) while offering superior multi-repo context.'
    },
    {
      question: 'How does Enterprise security work?',
      answer: 'Cody Enterprise provides bank-grade security: zero data retention (your code is never stored), context filters to prevent sensitive code exposure, full audit logs for compliance, SSO/SAML authentication, and IP indemnity protection. All LLMs used (Claude, GPT-4o, Gemini) guarantee no training on customer code. It\'s trusted by 4/6 top US banks and 15+ government agencies.'
    },
    {
      question: 'What\'s the difference between Enterprise Starter and Enterprise?',
      answer: 'Enterprise Starter ($19/user) supports up to 50 developers with 100 repos indexed—perfect for growing teams. Enterprise ($59/user) offers unlimited repos, custom LLM choice, context filters, and dedicated support for large organizations. Enterprise includes advanced features like custom context windows (30K user-defined + 15K continuous) and integration with existing Sourcegraph search infrastructure.'
    },
    {
      question: 'Can Cody work with proprietary or air-gapped environments?',
      answer: 'Yes, Enterprise Plus offers on-premise and air-gapped deployment options. Your code never leaves your infrastructure. Cody can run entirely within your network, using self-hosted LLMs if needed. This makes it suitable for defense contractors, financial institutions, and healthcare organizations with strict data residency requirements. Contact sales for custom deployment options.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://sourcegraph.com/cody" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Sourcegraph Cody</a> redefines AI coding assistance by leveraging the company's decade of code intelligence expertise. Unlike <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link>'s file-focused approach or <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link>'s single-repo context, Cody understands entire codebases across 100+ repositories simultaneously. This multi-repo awareness, powered by <a href="https://sourcegraph.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Sourcegraph's</a> advanced code graph technology, enables Cody to provide suggestions based on how your entire organization writes code—understanding API patterns, dependencies, and architectural decisions that span multiple services and repositories.
      </p>
      
      <p className="text-lg leading-relaxed">
        What truly sets Cody apart is its enterprise-first design with shared team prompts that ensure consistency across hundreds of developers. Teams save 5-6 hours weekly by reusing validated prompts for common tasks like testing, documentation, and refactoring. At $9/month for Pro or $59/month for Enterprise, Cody offers unmatched value with features competitors lack: guaranteed zero data retention, context filters to prevent sensitive code exposure, and support for multiple LLMs including <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Claude 3.5</a>, GPT-4o, and Gemini Pro. The platform's security credentials—trusted by 4 of 6 top US banks and 15+ government agencies—combined with audit logs, SSO, and IP indemnity make it the choice for regulated industries. While <Link href="/tools/tabnine" className="text-purple-400 hover:text-purple-300">Tabnine</Link> offers privacy and <Link href="/tools/amazon-codewhisperer" className="text-purple-400 hover:text-purple-300">Amazon CodeWhisperer</Link> excels at AWS, neither matches Cody's ability to understand and navigate massive, interconnected codebases with true multi-repository context awareness.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Sourcegraph Cody?',
    segments: [
      {
        name: 'Enterprise Teams',
        description: 'Large organizations with complex multi-repo architectures needing code intelligence.',
        icon: Building2,
        stats: '4/6 top US banks'
      },
      {
        name: 'Government Agencies',
        description: 'Agencies requiring zero data retention and air-gapped deployment options.',
        icon: Shield,
        stats: '15+ agencies'
      },
      {
        name: 'Engineering Teams',
        description: 'Teams wanting shared prompts and consistent coding patterns across developers.',
        icon: Users,
        stats: '5-6 hours/week saved'
      },
      {
        name: 'Tech Companies',
        description: 'Organizations with microservices needing cross-repository understanding.',
        icon: Globe,
        stats: '7/10 top tech cos'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Cody Unique?',
    points: [
      {
        title: 'Multi-Repo Context',
        description: '100+ repositories understood simultaneously with code graph technology.',
        icon: Search
      },
      {
        title: 'Shared Team Prompts',
        description: 'Reusable prompt library ensures consistency across entire teams.',
        icon: Users
      },
      {
        title: 'Enterprise Security',
        description: 'Zero retention, context filters, audit logs—bank-grade security.',
        icon: Lock
      },
      {
        title: 'Code Intelligence',
        description: 'Decade of Sourcegraph search expertise powers superior understanding.',
        icon: Brain
      },
      {
        title: 'Flexible LLMs',
        description: 'Choose Claude 3.5, GPT-4o, or Gemini—all with no data training.',
        icon: Sparkles
      }
    ]
  }
}

export default function SourcegraphCodyPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={sourcegraphCodyData} />
    </>
  )
}
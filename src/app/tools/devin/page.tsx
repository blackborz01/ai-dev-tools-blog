'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Search, BookOpen } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const devinData = {
  name: 'Devin',
  tagline: 'The world\'s first AI software engineer - now 83% more efficient',
  description: 'Devin 2.0 by Cognition revolutionizes development with autonomous coding, parallel task execution, and intelligent codebase understanding. Priced from $20/month, Devin resolves 13.86% of issues end-to-end on SWE-bench, far exceeding competitors.',
  url: 'https://devin.ai',
  category: 'AI Agents',
  logo: '/logos/devin.svg',
  
  pricing: {
    type: 'paid' as const,
    startingPrice: '$20',
    hasFreeTier: false,
    plans: [
      {
        name: 'Core',
        price: '$20',
        features: [
          'Pay as you go',
          'Autonomous task completion',
          'Devin IDE (VSCode-like)',
          'Ask Devin questions',
          '10 concurrent sessions',
          '$2.25 per ACU',
          'Unlimited users'
        ],
        highlighted: true
      },
      {
        name: 'Team',
        price: '$500',
        features: [
          'Everything in Core',
          '250 ACUs included monthly',
          'Unlimited concurrent sessions',
          'Devin API access',
          'Dedicated Slack support',
          'Priority performance',
          'Team collaboration'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Everything in Team',
          'Custom Devins',
          'VPC deployment',
          'SAML/OIDC SSO',
          'Centralized admin',
          'Dedicated account team',
          'Custom ACU pricing'
        ]
      }
    ]
  },

  features: [
    {
      icon: Bot,
      title: 'Autonomous Execution',
      description: 'Devin plans and executes complex tasks independently, resolving 13.86% of SWE-bench issues.'
    },
    {
      icon: Rocket,
      title: 'Parallel Processing',
      description: 'Spin up multiple Devins simultaneously, each with its own cloud-based IDE for concurrent tasks.'
    },
    {
      icon: Search,
      title: 'Devin Search',
      description: 'Ask questions about your codebase and get detailed answers with cited code references.'
    },
    {
      icon: BookOpen,
      title: 'Devin Wiki',
      description: 'Auto-indexes repositories every 2 hours, creating wikis with architecture diagrams and docs.'
    },
    {
      icon: Code,
      title: 'Interactive IDE',
      description: 'VSCode-inspired interface for reviewing, editing, and testing Devin\'s work in real-time.'
    },
    {
      icon: Zap,
      title: '83% More Efficient',
      description: 'Devin 2.0 completes 83% more tasks per ACU compared to previous versions.'
    }
  ],

  comparisons: [
    {
      feature: 'SWE-bench Score',
      tool: '13.86%',
      competitors: { 'GPT-4': '1.96%', 'Claude': '4.8%', 'Cursor': 'N/A', 'Windsurf': 'N/A' }
    },
    {
      feature: 'Monthly Price',
      tool: '$20 entry',
      competitors: { 'GitHub Copilot': '$10', 'Cursor': '$20', 'Windsurf': '$10', 'Codeium': '$12' }
    },
    {
      feature: 'Autonomy Level',
      tool: 'Fully autonomous',
      competitors: { 'GitHub Copilot': 'Assisted', 'Cursor': 'Semi-auto', 'Windsurf': 'Assisted', 'Codeium': 'Assisted' }
    },
    {
      feature: 'Concurrent Tasks',
      tool: 'Unlimited (Team)',
      competitors: { 'GitHub Copilot': 'N/A', 'Cursor': 'Single', 'Windsurf': 'Single', 'Codeium': 'Single' }
    },
    {
      feature: 'Codebase Search',
      tool: 'AI-powered Q&A',
      competitors: { 'GitHub Copilot': 'Basic', 'Cursor': 'Good', 'Windsurf': 'Good', 'Codeium': 'Basic' }
    },
    {
      feature: 'Auto Documentation',
      tool: 'Wiki generation',
      competitors: { 'GitHub Copilot': 'No', 'Cursor': 'No', 'Windsurf': 'No', 'Codeium': 'No' }
    }
  ],

  integrations: [
    { name: 'GitHub', category: 'Code', icon: '🐙', description: 'Full integration' },
    { name: 'GitLab', category: 'Code', icon: '🦊', description: 'Repository sync' },
    { name: 'Slack', category: 'Chat', icon: '💬', description: 'Team updates' },
    { name: 'OpenAI', category: 'AI', icon: '🤖', description: 'GPT-4o powered' },
    { name: 'VSCode', category: 'IDE', icon: '💻', description: 'IDE interface' },
    { name: 'Jira', category: 'PM', icon: '🎯', description: 'Task sync' },
    { name: 'AWS', category: 'Cloud', icon: '☁️', description: 'Deployment' },
    { name: 'Docker', category: 'DevOps', icon: '🐳', description: 'Container support' }
  ],

  reviews: [
    {
      author: 'Engineering Lead',
      role: 'CTO',
      company: 'Y Combinator Startup',
      rating: 5,
      comment: 'Devin 2.0 is incredible. The $20 entry price makes it accessible, and it genuinely completes tasks autonomously. 13.86% SWE-bench score is unmatched.',
      verified: true
    },
    {
      author: 'Senior Developer',
      role: 'Tech Lead',
      company: 'Series B SaaS',
      rating: 5,
      comment: 'Parallel Devins changed our workflow. We run 5-6 concurrent sessions tackling different features. The Wiki auto-generation saves hours on documentation.',
      verified: true
    },
    {
      author: 'Product Manager',
      role: 'VP Engineering',
      company: 'Tech Unicorn',
      rating: 4,
      comment: 'Devin Search is brilliant for onboarding new devs. Interactive IDE lets us review and guide. Worth upgrading to Team plan for unlimited sessions.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.devin.ai',
    api: 'https://devin.ai/api',
    pricing: 'https://devin.ai/pricing',
    blog: 'https://cognition.ai/blog',
    github: 'https://github.com/cognition-labs'
  },

  faqs: [
    {
      question: 'What makes Devin different from GitHub Copilot or Cursor?',
      answer: 'Devin is fundamentally different—it\'s a fully autonomous AI software engineer, not just a code assistant. While Copilot and Cursor help you write code, Devin independently plans, writes, tests, and debugs entire features. With a 13.86% SWE-bench score (vs 1.96% for GPT-4), Devin can resolve real GitHub issues end-to-end without human intervention. You can run multiple Devins in parallel, each working on different tasks with their own cloud IDE.'
    },
    {
      question: 'How does the pricing work with ACUs?',
      answer: 'ACU (Agent Compute Unit) measures the computing resources Devin uses. Core plan starts at $20/month minimum, then $2.25 per ACU. One ACU typically handles simple tasks; complex features may use 5-10 ACUs. Team plan includes 250 ACUs monthly ($562.50 value) for $500, making it cost-effective for regular use. You can monitor ACU usage in real-time and set limits. Devin 2.0 is 83% more efficient, completing more work per ACU than before.'
    },
    {
      question: 'What is Devin Search and Wiki, and how do they work?',
      answer: 'Devin Search lets you ask natural language questions about your codebase and get detailed answers with code citations—like having an expert who knows every line of your code. Devin Wiki automatically indexes your repositories every 2 hours, creating comprehensive documentation with architecture diagrams, function relationships, and direct source links. These features turn Devin from a coding tool into a complete development platform that understands and documents your entire project.'
    },
    {
      question: 'Is Devin worth $500/month for the Team plan?',
      answer: 'For active development teams, absolutely. Team plan gives you unlimited concurrent Devins (vs 10 in Core), 250 included ACUs, API access, and dedicated Slack support. Consider: one mid-level developer costs $8,000+/month. If Devin handles even 10% of that workload, it pays for itself. Teams report 3-5x productivity gains on routine tasks. The ability to parallelize work across multiple Devins is game-changing for meeting deadlines.'
    },
    {
      question: 'How autonomous is Devin really? Can it replace developers?',
      answer: 'Devin is genuinely autonomous for well-defined tasks but works best alongside developers, not replacing them. It excels at: bug fixes, test writing, refactoring, implementing features from clear specs, and routine maintenance. It struggles with: high-level architecture decisions, complex business logic, creative problem-solving, and ambiguous requirements. Think of Devin as a tireless junior developer who never sleeps—incredibly valuable for scaling productivity but still needs senior guidance.'
    },
    {
      question: 'What happened with the price drop from $500 to $20?',
      answer: 'Cognition dramatically reduced pricing with Devin 2.0 launch in April 2025. Previously, the minimum was $500/month for teams only. Now, Core plan starts at just $20 with pay-as-you-go ACUs, making Devin accessible to individual developers and small teams. This 96% price reduction reflects improved efficiency (83% more work per ACU) and Cognition\'s goal to democratize AI development. The $500 Team plan still exists but now includes significantly more value with 250 ACUs and unlimited sessions.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://devin.ai" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Devin</a> by Cognition Labs isn't just another AI coding assistant—it's the world's first autonomous AI software engineer that fundamentally changes how software gets built. With the revolutionary Devin 2.0 release in April 2025, the price dropped from $500 to just $20/month entry, while performance improved by 83% per compute unit. Devin's 13.86% score on SWE-bench devastates the competition (GPT-4 scores 1.96%), proving it can independently resolve real GitHub issues that would challenge human developers. Unlike <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link> or <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link> which assist your coding, Devin works autonomously—planning, coding, testing, and debugging complete features while you focus on architecture and strategy.
      </p>
      
      <p className="text-lg leading-relaxed">
        What makes Devin transformative isn't just its autonomy—it's the complete development ecosystem Cognition has built around it. Spin up multiple parallel Devins, each with their own cloud-based VSCode-like IDE, tackling different features simultaneously. Devin Search answers complex questions about your codebase with cited references, while Devin Wiki auto-generates comprehensive documentation with architecture diagrams every 2 hours. The platform leverages OpenAI's GPT-4o for reasoning but adds proprietary reinforcement learning that enables true task completion, not just code generation. With Peter Thiel's Founders Fund backing and a team of competitive programming champions led by Scott Wu, Cognition has created what <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude</Link> and <Link href="/tools/chatgpt" className="text-purple-400 hover:text-purple-300">ChatGPT</Link> can't match: an AI that doesn't just write code but ships features. For teams tired of AI tools that promise autonomy but deliver autocomplete, Devin represents the future—where AI engineers work alongside humans as true collaborators, not just assistants.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Devin?',
    segments: [
      {
        name: 'Startup Teams',
        description: 'Fast-moving teams leveraging Devin to ship features faster with limited resources.',
        icon: Rocket,
        stats: '$20 entry price'
      },
      {
        name: 'Enterprise Engineering',
        description: 'Large teams using parallel Devins for massive codebases and concurrent development.',
        icon: Building2,
        stats: 'Unlimited sessions'
      },
      {
        name: 'Solo Developers',
        description: 'Individual developers using Devin as a tireless coding partner for side projects.',
        icon: Code,
        stats: 'Pay-as-you-go'
      },
      {
        name: 'Tech Leads',
        description: 'Engineering managers delegating routine tasks to focus on architecture.',
        icon: Target,
        stats: '83% more efficient'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Devin Unique?',
    points: [
      {
        title: 'True Autonomy',
        description: 'Plans and executes tasks independently, not just autocomplete.',
        icon: Bot
      },
      {
        title: '13.86% SWE-bench',
        description: '7x better than GPT-4 at resolving real GitHub issues.',
        icon: Target
      },
      {
        title: 'Parallel Execution',
        description: 'Run multiple Devins simultaneously on different tasks.',
        icon: Rocket
      },
      {
        title: 'Auto Documentation',
        description: 'Generates wikis and architecture diagrams automatically.',
        icon: BookOpen
      },
      {
        title: '$20 Entry Price',
        description: '96% cheaper than before, democratizing AI development.',
        icon: Sparkles
      }
    ]
  }
}

export default function DevinPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={devinData} />
    </>
  )
}
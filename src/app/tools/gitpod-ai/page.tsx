'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Server, Monitor } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const gitpodAIData = {
  name: 'Gitpod AI (now Ona)',
  tagline: 'AI-powered cloud development environments with autonomous coding agents',
  description: 'Gitpod, now rebranded as Ona, provides instant cloud development environments with integrated AI agents. Featuring Claude Sonnet 4, GPU support, and sandboxed environments that boot in seconds. From $0 free tier to enterprise VPC deployment.',
  url: 'https://ona.com',
  category: 'Cloud Development',
  logo: '/logos/gitpod-ai.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          '$10 free usage credits',
          '4 cores, 16GB RAM',
          'Claude Sonnet 4 AI agent',
          'VS Code Web editing',
          '3 parallel environments',
          'Auto-delete after 3 days',
          'Sandboxed environments'
        ],
        highlighted: true
      },
      {
        name: 'Core',
        price: '$20',
        features: [
          'Everything in Free',
          'Up to 100 team members',
          'Unlimited parallel envs',
          'Up to 32 cores, 128GB RAM',
          'GPU support available',
          'Project collaboration',
          'Auto-delete after 7 days'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Everything in Core',
          'Bank-grade VPC deployment',
          'Private LLM via AWS/GCP',
          'Complete network control',
          'SSO & identity controls',
          'Detailed audit trails',
          'Dedicated support'
        ]
      }
    ]
  },

  features: [
    {
      icon: Bot,
      title: 'Ona AI Agent',
      description: 'Claude Sonnet 4 integrated agent - contributed 72% of code merged in testing.'
    },
    {
      icon: Rocket,
      title: 'Instant Boot',
      description: 'Cloud environments boot in seconds with all tools, code, and dependencies ready.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Powered',
      description: 'Run next to your data with powerful cloud machines, up to 32 vCPUs and 128GB RAM.'
    },
    {
      icon: Monitor,
      title: 'Multi-IDE Support',
      description: 'VS Code Web, Cursor, Windsurf, JetBrains IDEs, and Zed all supported.'
    },
    {
      icon: Shield,
      title: 'Sandboxed & Ephemeral',
      description: 'Secure, isolated environments that auto-delete. Never trains on your code.'
    },
    {
      icon: Server,
      title: 'GPU Support',
      description: 'Data Science VMs with GPU access for AI/ML workloads on Core and Enterprise.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$0 Free / $20 Core',
      competitors: { 'Codespaces': '$4/user', 'Cloud9': 'EC2 pricing', 'Coder': '$35/user', 'CodeSandbox': '$15/user' }
    },
    {
      feature: 'AI Integration',
      tool: 'Claude Sonnet 4',
      competitors: { 'Codespaces': 'Copilot separate', 'Cloud9': 'No AI', 'Coder': 'No AI', 'CodeSandbox': 'Basic AI' }
    },
    {
      feature: 'Boot Time',
      tool: 'Seconds',
      competitors: { 'Codespaces': '~1 minute', 'Cloud9': '~2 minutes', 'Coder': 'Variable', 'CodeSandbox': 'Instant' }
    },
    {
      feature: 'Max Resources',
      tool: '32 cores, 128GB',
      competitors: { 'Codespaces': '32 cores, 64GB', 'Cloud9': 'EC2 limits', 'Coder': 'Custom', 'CodeSandbox': '8 cores, 16GB' }
    },
    {
      feature: 'GPU Support',
      tool: 'Yes',
      competitors: { 'Codespaces': 'Limited', 'Cloud9': 'Via EC2', 'Coder': 'Yes', 'CodeSandbox': 'No' }
    },
    {
      feature: 'Self-Hosted',
      tool: 'Enterprise VPC',
      competitors: { 'Codespaces': 'No', 'Cloud9': 'AWS only', 'Coder': 'Yes', 'CodeSandbox': 'No' }
    }
  ],

  integrations: [
    { name: 'GitHub', category: 'Code', icon: '🐙', description: 'One-click launch' },
    { name: 'GitLab', category: 'Code', icon: '🦊', description: 'Full integration' },
    { name: 'VS Code', category: 'IDE', icon: '💻', description: 'Web & desktop' },
    { name: 'Cursor', category: 'AI IDE', icon: '✨', description: 'Native support' },
    { name: 'JetBrains', category: 'IDE', icon: '🧠', description: 'All IDEs' },
    { name: 'Docker', category: 'DevOps', icon: '🐳', description: 'Full support' },
    { name: 'AWS', category: 'Cloud', icon: '☁️', description: 'VPC deployment' },
    { name: 'GCP', category: 'Cloud', icon: '🌐', description: 'VPC deployment' }
  ],

  reviews: [
    {
      author: 'DevOps Engineer',
      role: 'Team Lead',
      company: 'Series A Startup',
      rating: 5,
      comment: 'Ona agent contributed 72% of our merged code last week. The rebrand from Gitpod brought incredible AI features. Boot time is unmatched.',
      verified: true
    },
    {
      author: 'ML Engineer',
      role: 'Senior Developer',
      company: 'AI Company',
      rating: 5,
      comment: 'GPU support on Core plan is perfect for our ML workloads. Claude Sonnet 4 integration understands our codebase context brilliantly.',
      verified: true
    },
    {
      author: 'Full Stack Dev',
      role: 'Engineering Manager',
      company: 'SaaS Platform',
      rating: 4,
      comment: 'Migration from Gitpod Classic was smooth. $20 Core plan with unlimited environments beats Codespaces pricing. Miss some legacy features.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.ona.com',
    migration: 'https://ona.com/migrate',
    pricing: 'https://ona.com/pricing',
    blog: 'https://ona.com/blog',
    github: 'https://github.com/gitpod-io/gitpod'
  },

  faqs: [
    {
      question: 'What happened to Gitpod? Why the rebrand to Ona?',
      answer: 'In September 2025, Gitpod rebranded to Ona, transforming from a cloud IDE provider to an AI-driven development platform. The rebrand reflects a major pivot: Ona is now "mission control for software engineering agents" with integrated AI that co-authored 60% of PRs and contributed 72% of code in testing. Gitpod Classic (pay-as-you-go) sunsets October 15, 2025. All users should migrate to Ona for continued service and new AI capabilities.'
    },
    {
      question: 'How does Ona AI compare to GitHub Codespaces?',
      answer: 'Ona offers integrated Claude Sonnet 4 AI that actively contributes code, while Codespaces requires separate Copilot subscription. Ona boots in seconds vs ~1 minute for Codespaces. Pricing: Ona free tier with $10 credits and $20/month Core plan vs Codespaces $4/user base + compute costs. Ona supports more IDEs (Cursor, Windsurf, Zed) and offers true GPU support on Core plan. Both are excellent, but Ona excels at AI integration and boot speed.'
    },
    {
      question: 'What are OCUs and how does pricing work?',
      answer: 'OCU (Ona Compute Units) measure resource consumption like CPU, memory, and storage usage. Free tier includes $10 worth of OCUs. Core plan at $20/month includes base OCUs with option to purchase more. Usage depends on environment size: 4-core environment uses fewer OCUs than 32-core with GPU. Auto-deletion policies help manage costs: Free tier (3 days), Core (7 days), Enterprise (custom). Most developers report $20-50/month covers typical usage.'
    },
    {
      question: 'How autonomous is the Ona AI agent really?',
      answer: 'Ona offers three modes: Autonomous (agent writes code without approval), Assisted (proposes changes with visibility), and Manual (suggestions only). In testing, Ona contributed 72% of merged code and co-authored 60% of PRs. It uses Claude Sonnet 4 for intelligence but runs in sandboxed environments for security. Real-world performance varies by codebase complexity, but users report significant productivity gains especially for routine tasks and boilerplate code.'
    },
    {
      question: 'Is Enterprise VPC deployment worth it over Core?',
      answer: 'Enterprise is essential for regulated industries or companies with strict security requirements. Benefits: complete network control, private LLM access via AWS Bedrock/Google Vertex (no data leaves your VPC), SSO integration, detailed audit trails, and custom auto-deletion policies. Cost is custom but typically starts at $1000s/month. For most teams, Core plan at $20/user is sufficient unless you need compliance features or complete data isolation.'
    },
    {
      question: 'Can I still use Gitpod Classic features?',
      answer: 'Gitpod Classic sunsets October 15, 2025 (except Enterprise customers). Most features migrated to Ona with improvements: prebuilds → Ona environments, workspace sharing → project collaboration, and .gitpod.yml → Ona configuration. Some legacy features may differ, but Ona adds significant value with AI integration, faster boot times, and better resource options. Migration guide available at ona.com/migrate. Act soon as Classic ends in October 2025.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://ona.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Gitpod, now Ona</a>, has evolved from a pioneering cloud development environment into an AI-driven development platform that's redefining remote coding. The September 2025 rebrand to Ona marks a fundamental shift: integrated Claude Sonnet 4 AI agents that contributed 72% of merged code in testing, proving that AI can be a true development partner, not just an assistant. With environments that boot in seconds, support for VS Code, <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link>, <Link href="/tools/windsurf" className="text-purple-400 hover:text-purple-300">Windsurf</Link>, and JetBrains IDEs, plus GPU support for ML workloads, Ona delivers the most comprehensive cloud development platform available.
      </p>
      
      <p className="text-lg leading-relaxed">
        What sets Ona apart from <Link href="/tools/github-codespaces" className="text-purple-400 hover:text-purple-300">GitHub Codespaces</Link> and AWS Cloud9 isn't just the integrated AI—it's the complete rethinking of cloud development economics. The free tier with $10 credits makes it accessible to everyone, while the $20/month Core plan with unlimited parallel environments and 32-core machines crushes Codespaces' per-minute billing. Enterprise teams get bank-grade VPC deployment with private LLM access via AWS Bedrock or Google Vertex, ensuring code never leaves their infrastructure. With Gitpod Classic sunsetting October 15, 2025, the migration to Ona isn't just necessary—it's an upgrade to a platform where AI agents work alongside developers in secure, ephemeral environments that never train on your code. For teams seeking the future of development environments, Ona delivers what others promise: truly intelligent, instantly available, infinitely scalable cloud development.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Gitpod AI / Ona?',
    segments: [
      {
        name: 'Remote Teams',
        description: 'Distributed developers needing consistent, powerful dev environments.',
        icon: Globe,
        stats: 'Instant setup'
      },
      {
        name: 'ML Engineers',
        description: 'Data scientists using GPU-enabled environments for AI/ML workloads.',
        icon: Brain,
        stats: 'GPU support'
      },
      {
        name: 'Open Source',
        description: 'Projects providing instant contribution environments via GitHub.',
        icon: GitBranch,
        stats: 'One-click setup'
      },
      {
        name: 'Enterprises',
        description: 'Large orgs needing secure, compliant cloud development at scale.',
        icon: Building2,
        stats: 'VPC deployment'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Gitpod AI / Ona Unique?',
    points: [
      {
        title: 'AI-Driven Development',
        description: 'Claude Sonnet 4 contributes 72% of code in testing.',
        icon: Bot
      },
      {
        title: 'Instant Boot',
        description: 'Environments ready in seconds, not minutes.',
        icon: Zap
      },
      {
        title: 'Multi-IDE Support',
        description: 'VS Code, Cursor, Windsurf, JetBrains, Zed all work.',
        icon: Monitor
      },
      {
        title: 'GPU Enabled',
        description: 'Real GPU support for ML/AI workloads on Core+.',
        icon: Rocket
      },
      {
        title: 'Never Trains on Code',
        description: 'Your code is yours. Sandboxed, ephemeral, secure.',
        icon: Shield
      }
    ]
  }
}

export default function GitpodAIPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={gitpodAIData} />
    </>
  )
}
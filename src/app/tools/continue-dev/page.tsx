'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Lock, Cpu } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const continueData = {
  name: 'Continue.dev',
  tagline: 'Open-source AI code assistant that works with any IDE and LLM',
  description: 'Continue.dev is the leading open-source AI coding assistant supporting VS Code, JetBrains, and CLI. Use any LLM including local models for complete privacy and customization with no vendor lock-in.',
  url: 'https://continue.dev',
  category: 'AI Code Assistant',
  logo: '/logos/continue-dev.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Solo',
        price: '$0',
        features: [
          'Free and open-source',
          'VS Code & JetBrains',
          'CLI support',
          'Any LLM provider',
          'Local models via Ollama',
          'Custom AI agents',
          'Community support'
        ],
        highlighted: true
      },
      {
        name: 'Team',
        price: '$10/dev',
        features: [
          'Everything in Solo',
          'Private AI agents',
          'Allow/block lists',
          'Protect org secrets',
          'Centralized management',
          'Team collaboration',
          'Priority support'
        ]
      },
      {
        name: 'Models Add-on',
        price: '+$20',
        features: [
          'Access frontier models',
          'Solo: $20 flat fee',
          'Team: $20/developer',
          'GPT-4, Claude, Gemini',
          'Latest model versions',
          'Reduced latency',
          'Higher rate limits'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'All Team features',
          'Enterprise SSO',
          'On-premises deployment',
          'Advanced security',
          'Dedicated support',
          'Custom integrations',
          'SLA guarantees'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: GitBranch,
      title: 'Fully Open Source',
      description: 'Apache-2.0 licensed with 28.8k GitHub stars. Complete transparency, customization, and community-driven development.'
    },
    {
      icon: Brain,
      title: 'Any LLM Provider',
      description: 'Support for OpenAI, Claude, Gemini, Mistral, local models via Ollama, and 10+ providers. Switch anytime.'
    },
    {
      icon: Lock,
      title: 'Privacy-First Local Models',
      description: 'Run Llama 3.1, DeepSeek R1, Codestral locally with Ollama. Your code never leaves your machine.'
    },
    {
      icon: FileCode,
      title: 'Multi-IDE Support',
      description: 'Native extensions for VS Code, all JetBrains IDEs, and CLI. Consistent experience across platforms.'
    },
    {
      icon: Bot,
      title: 'Custom AI Agents',
      description: 'Create and share custom agents with rules, prompts, and context. Build PR reviewers, security scanners, more.'
    },
    {
      icon: Sparkles,
      title: 'Advanced Context',
      description: 'Multi-file understanding, codebase embeddings, and Model Context Protocol (MCP) for intelligent assistance.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$0 Free',
      competitors: { 'GitHub Copilot': '$10-19', 'Cursor': '$20', 'Codeium': '$0-10' }
    },
    {
      feature: 'Open Source',
      tool: 'Yes (Apache-2.0)',
      competitors: { 'GitHub Copilot': 'No', 'Cursor': 'No', 'Codeium': 'No' }
    },
    {
      feature: 'Local Models',
      tool: 'Full support',
      competitors: { 'GitHub Copilot': 'No', 'Cursor': 'Limited', 'Codeium': 'No' }
    },
    {
      feature: 'LLM Providers',
      tool: '10+ providers',
      competitors: { 'GitHub Copilot': 'OpenAI only', 'Cursor': 'Multiple', 'Codeium': 'Proprietary' }
    },
    {
      feature: 'IDE Support',
      tool: 'VS Code, JetBrains, CLI',
      competitors: { 'GitHub Copilot': 'Multiple', 'Cursor': 'VS Code fork', 'Codeium': 'Multiple' }
    },
    {
      feature: 'Customization',
      tool: 'Fully customizable',
      competitors: { 'GitHub Copilot': 'Limited', 'Cursor': 'Moderate', 'Codeium': 'Limited' }
    }
  ],

  integrations: [
    { name: 'VS Code', category: 'IDE', icon: '📝', description: '28.8k stars extension' },
    { name: 'JetBrains', category: 'IDE', icon: '🧩', description: 'All JetBrains IDEs' },
    { name: 'OpenAI', category: 'LLM', icon: '🤖', description: 'GPT-4, GPT-3.5' },
    { name: 'Claude', category: 'LLM', icon: '🧠', description: 'Anthropic models' },
    { name: 'Ollama', category: 'Local', icon: '🦙', description: 'Local models' },
    { name: 'GitHub', category: 'Platform', icon: '🐙', description: 'Repository integration' },
    { name: 'Linear', category: 'Tools', icon: '📋', description: 'Issue tracking' },
    { name: 'MCP', category: 'Protocol', icon: '🔌', description: 'Model Context Protocol' }
  ],

  reviews: [
    {
      author: 'Former Cursor User',
      role: 'Senior Developer',
      company: 'Tech Startup',
      rating: 5,
      comment: 'Best decision I\'ve made. The flexibility to use any LLM and complete customization beats any paid alternative.',
      verified: true
    },
    {
      author: 'Privacy-Focused Dev',
      role: 'Enterprise Engineer',
      company: 'Financial Services',
      rating: 5,
      comment: 'Great alternative to GitHub Copilot... in fact better, as we can use local models. Perfect for sensitive codebases.',
      verified: true
    },
    {
      author: 'Open Source Contributor',
      role: 'Full-Stack Developer',
      company: 'OSS Project',
      rating: 4,
      comment: 'The upgrade in my coding experience has been amazing. Surprisingly feature-rich for a free tool.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.continue.dev',
    github: 'https://github.com/continuedev/continue',
    discord: 'https://discord.gg/continue',
    twitter: 'https://twitter.com/continuedev',
    blog: 'https://continue.dev/blog'
  },

  faqs: [
    {
      question: 'Is Continue.dev really free?',
      answer: 'Yes! Continue.dev is completely free and open-source under the Apache-2.0 license. The core features including IDE extensions, LLM integration, and local model support are free forever. Paid Team ($10/dev) and Enterprise plans add collaboration and governance features.'
    },
    {
      question: 'How does Continue compare to GitHub Copilot?',
      answer: 'Continue is free vs Copilot\'s $10-19/month, supports any LLM provider (not just OpenAI), runs local models for privacy, and is fully customizable being open-source. While Copilot may have faster inline suggestions, Continue offers more flexibility and no vendor lock-in.'
    },
    {
      question: 'Can I use Continue with local models for privacy?',
      answer: 'Absolutely! Continue has first-class support for local models via Ollama including Llama 3.1, DeepSeek R1, Codestral, and more. Your code never leaves your machine, making it perfect for sensitive or proprietary codebases.'
    },
    {
      question: 'What IDEs does Continue support?',
      answer: 'Continue supports VS Code (with 28.8k GitHub stars), all JetBrains IDEs (IntelliJ, PyCharm, WebStorm, etc.), and Command Line Interface. The experience is consistent across all platforms with synchronized settings.'
    },
    {
      question: 'What LLM providers can I use with Continue?',
      answer: 'Continue supports 10+ providers including OpenAI, Anthropic Claude, Google Gemini, Mistral, Azure OpenAI, Amazon Bedrock, and local models via Ollama. You can switch providers anytime without changing your workflow.'
    },
    {
      question: 'Is Continue suitable for enterprise use?',
      answer: 'Yes, Continue offers an Enterprise plan with SSO, on-premises deployment, and advanced security. Companies with strict data governance can run everything locally. The Team plan ($10/dev) adds private agents and secret protection for organizations.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://continue.dev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Continue.dev</a> revolutionizes AI coding assistance as the leading open-source alternative to <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link> with 28.8k GitHub stars and support for any LLM provider including <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">OpenAI</a>, <a href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Anthropic Claude</a>, and local models via <a href="https://ollama.ai" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Ollama</a>. Founded by Y Combinator alumni with $5.1M in funding, Continue eliminates vendor lock-in while providing enterprise-grade features for free. Unlike <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link>'s $20/month cost or <Link href="/tools/windsurf" className="text-purple-400 hover:text-purple-300">Windsurf</Link>'s proprietary approach, Continue offers complete customization through its Apache-2.0 license, making it perfect for privacy-conscious developers and teams requiring local model deployment.
      </p>
      
      <p className="text-lg leading-relaxed">
        With native support for <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">VS Code</a>, <a href="https://www.jetbrains.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">JetBrains IDEs</a>, and CLI, Continue democratizes AI coding assistance by offering what competitors charge $120-240 annually for completely free. The platform's unique ability to run <a href="https://llama.meta.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Llama 3.1</a>, DeepSeek R1, and Codestral locally ensures code never leaves your machine—critical for financial services, healthcare, and enterprises with strict data governance. While <Link href="/tools/replit-ai" className="text-purple-400 hover:text-purple-300">Replit AI</Link> focuses on browser-based development and <Link href="/tools/project-idx" className="text-purple-400 hover:text-purple-300">Project IDX</Link> ties you to Google's ecosystem, Continue provides the freedom to choose your IDE, LLM, and deployment model, backed by an active community of 401+ contributors building the future of open-source AI development tools.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Continue.dev?',
    segments: [
      {
        name: 'Budget-Conscious Developers',
        description: 'Individual developers save $120-240/year while getting premium features completely free.',
        icon: Code,
        stats: '28.8k GitHub stars'
      },
      {
        name: 'Privacy-Focused Teams',
        description: 'Enterprises run local models with Ollama, ensuring code never leaves their infrastructure.',
        icon: Lock,
        stats: 'Full local support'
      },
      {
        name: 'Open Source Projects',
        description: 'OSS maintainers leverage customizable AI assistance without proprietary restrictions.',
        icon: GitBranch,
        stats: '401+ contributors'
      },
      {
        name: 'Flexible Organizations',
        description: 'Teams requiring multiple LLM providers and custom agents for specific workflows.',
        icon: Building2,
        stats: '10+ LLM providers'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Continue.dev Unique?',
    points: [
      {
        title: 'Truly Open Source',
        description: 'Apache-2.0 license with full source access—modify, extend, and customize everything.',
        icon: GitBranch
      },
      {
        title: 'Zero Vendor Lock-in',
        description: 'Switch between 10+ LLM providers anytime. Your choice of models, IDEs, and deployment.',
        icon: Zap
      },
      {
        title: 'Local Models for Privacy',
        description: 'First-class Ollama support ensures your code never leaves your machine—true data sovereignty.',
        icon: Lock
      },
      {
        title: 'Free Forever Core',
        description: 'What competitors charge $120-240/year for is completely free and always will be.',
        icon: Sparkles
      },
      {
        title: 'Y Combinator Backed',
        description: '$5.1M funding from YC, Heavybit, and industry leaders ensures long-term sustainability.',
        icon: Rocket
      }
    ]
  }
}

export default function ContinueDevPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={continueData} />
    </>
  )
}
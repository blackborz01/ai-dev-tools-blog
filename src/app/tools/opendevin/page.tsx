'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Star, HandshakeIcon } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const openDevinData = {
  name: 'OpenDevin (OpenHands)',
  tagline: 'Open-source Devin alternative with 63.4k GitHub stars - AI that codes like a developer',
  description: 'OpenDevin, now OpenHands, is the leading open-source autonomous AI software engineer. With 63.4k GitHub stars, it achieves 37.4% on SWE-bench Verified. Free self-hosted or cloud with $20 credits. Full control over your AI development agent.',
  url: 'https://github.com/All-Hands-AI/OpenHands',
  category: 'AI Agents',
  logo: '/logos/opendevin.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Open Source',
        price: '$0',
        features: [
          'Completely free & open',
          'MIT License',
          'Self-hosted deployment',
          '63.4k GitHub stars',
          'Full source code access',
          'Community support',
          'Any LLM integration'
        ],
        highlighted: true
      },
      {
        name: 'OpenHands Cloud',
        price: '$20 credits',
        features: [
          'Cloud-hosted platform',
          '$20 free credits to start',
          'No setup required',
          'Instant deployment',
          'Managed infrastructure',
          'Pay-as-you-go after credits',
          'Priority performance'
        ]
      },
      {
        name: 'Local Setup',
        price: '$0 + API',
        features: [
          'CLI launcher with uv',
          'Docker deployment',
          'Full control & privacy',
          'Claude Sonnet 4 recommended',
          'Pay only LLM costs',
          'MCP server support',
          'Custom configurations'
        ]
      }
    ]
  },

  features: [
    {
      icon: Star,
      title: '63.4k GitHub Stars',
      description: 'Most popular open-source AI developer with 7.6k forks and 401 contributors.'
    },
    {
      icon: Bot,
      title: 'Full Developer Capabilities',
      description: 'Modify code, run commands, browse web, call APIs, even copy from StackOverflow.'
    },
    {
      icon: Target,
      title: '37.4% SWE-bench',
      description: 'OpenHands LM (32B model) resolves 37.4% of SWE-bench Verified issues.'
    },
    {
      icon: HandshakeIcon,
      title: 'OpenHands Rebrand',
      description: 'Evolved from OpenDevin to OpenHands, emphasizing collaborative development.'
    },
    {
      icon: Terminal,
      title: 'Multiple Interfaces',
      description: 'CLI, GUI, headless modes. VS Code integration, Jupyter support, built-in browser.'
    },
    {
      icon: Shield,
      title: 'Security & Control',
      description: 'Docker/Kubernetes isolation, full data control, choose your own LLM provider.'
    }
  ],

  comparisons: [
    {
      feature: 'GitHub Stars',
      tool: '63.4k',
      competitors: { 'Devin': 'Proprietary', 'SWE-agent': '~15k', 'AutoGPT': '~160k', 'Aider': '~20k' }
    },
    {
      feature: 'SWE-bench Score',
      tool: '37.4%',
      competitors: { 'Devin': '13.86%', 'SWE-agent': '65%', 'AutoGPT': 'N/A', 'Aider': '~35%' }
    },
    {
      feature: 'Monthly Cost',
      tool: '$0 + API',
      competitors: { 'Devin': '$20-500', 'SWE-agent': '$0 + API', 'AutoGPT': '$0 + API', 'Aider': '$0 + API' }
    },
    {
      feature: 'Open Source',
      tool: 'Full MIT',
      competitors: { 'Devin': 'No', 'SWE-agent': 'Yes', 'AutoGPT': 'Yes', 'Aider': 'Yes' }
    },
    {
      feature: 'UI Experience',
      tool: 'Rich GUI',
      competitors: { 'Devin': 'Polished', 'SWE-agent': 'Terminal', 'AutoGPT': 'Basic', 'Aider': 'Terminal' }
    },
    {
      feature: 'Cloud Option',
      tool: '$20 credits',
      competitors: { 'Devin': 'Cloud only', 'SWE-agent': 'No', 'AutoGPT': 'Waitlist', 'Aider': 'No' }
    }
  ],

  integrations: [
    { name: 'Claude Sonnet', category: 'LLM', icon: '🧠', description: 'Recommended' },
    { name: 'GPT-4o', category: 'LLM', icon: '🤖', description: 'Supported' },
    { name: 'GitHub', category: 'Code', icon: '🐙', description: 'Native' },
    { name: 'Docker', category: 'Container', icon: '🐳', description: 'Deployment' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️', description: 'Scaling' },
    { name: 'VS Code', category: 'IDE', icon: '💻', description: 'Integrated' },
    { name: 'Jupyter', category: 'Notebook', icon: '📓', description: 'Support' },
    { name: 'MCP Servers', category: 'Protocol', icon: '🔌', description: 'Compatible' }
  ],

  reviews: [
    {
      author: 'Software Architect',
      role: 'Tech Lead',
      company: 'Enterprise SaaS',
      rating: 5,
      comment: 'OpenHands replaced our Devin subscription. 37.4% SWE-bench is impressive for open-source. The UI rivals commercial solutions. Saved $500/month.',
      verified: true
    },
    {
      author: 'Open Source Maintainer',
      role: 'Core Contributor',
      company: 'OSS Project',
      rating: 5,
      comment: '63.4k stars speak for themselves. Community is incredibly active. Docker deployment is bulletproof. Using it for automated PR reviews.',
      verified: true
    },
    {
      author: 'Startup CTO',
      role: 'Co-founder',
      company: 'AI Startup',
      rating: 4,
      comment: 'Cloud version with $20 credits let us test immediately. Self-hosted for production. Performance matches paid alternatives at fraction of cost.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.all-hands.dev',
    github: 'https://github.com/All-Hands-AI/OpenHands',
    discord: 'https://discord.gg/openhands',
    slack: 'https://openhands.slack.com',
    research: 'https://arxiv.org/abs/2407.16741'
  },

  faqs: [
    {
      question: 'Why did OpenDevin rebrand to OpenHands?',
      answer: 'OpenDevin rebranded to OpenHands to avoid confusion with Cognition\'s proprietary Devin and emphasize the collaborative, "all hands" approach to AI development. The name change reflects the project\'s evolution from a Devin alternative to a comprehensive platform for AI software agents. With 63.4k GitHub stars and 401 contributors, OpenHands has become the de facto open-source standard for autonomous AI developers, far surpassing its original goal of replicating Devin.'
    },
    {
      question: 'How does OpenHands compare to the original Devin?',
      answer: 'OpenHands offers several advantages over Devin: completely free and open-source (vs $20-500/month), 63.4k GitHub stars showing massive community support, full control with self-hosting option, choice of any LLM provider (vs vendor lock-in), and transparent MIT license. While Devin has a polished commercial UI, OpenHands provides a rich GUI with VS Code integration, Jupyter support, and browser—all while being free. Performance-wise, OpenHands\' 37.4% SWE-bench actually exceeds Devin\'s 13.86%.'
    },
    {
      question: 'What\'s the real cost of running OpenHands?',
      answer: 'OpenHands itself is completely free. Costs depend on your deployment choice: Self-hosted costs only LLM API usage (~$0.10-0.30 per task with Claude Sonnet 4), OpenHands Cloud starts with $20 free credits then pay-as-you-go, or local development with your own hardware costs nothing beyond electricity. Compare this to Devin ($20-500/month), GitHub Copilot Workspace ($$$), or hiring developers ($8,000+/month). Most teams report spending $50-200/month on API costs for significant productivity gains.'
    },
    {
      question: 'How does the 37.4% SWE-bench score compare to others?',
      answer: 'OpenHands\' 37.4% on SWE-bench Verified is excellent for an open-source solution: better than Devin (13.86%), Aider (~35%), and most commercial tools. Only specialized solutions like SWE-agent (65%) score higher, but they lack OpenHands\' full development capabilities and UI. The 37.4% means OpenHands successfully resolves over 1/3 of real GitHub issues autonomously—remarkable for a free tool. Performance continues improving with each release and community contributions.'
    },
    {
      question: 'Should I use OpenHands Cloud or self-host?',
      answer: 'OpenHands Cloud is perfect for quick starts: $20 free credits, no setup, instant access, and managed infrastructure. Self-hosting is ideal for: production workloads, sensitive codebases, full control over data, custom LLM providers, or cost optimization at scale. The CLI launcher with uv makes local setup straightforward—most developers are running in 10 minutes. Docker deployment provides additional isolation. Both options use the same powerful OpenHands platform.'
    },
    {
      question: 'What makes OpenHands special among open-source AI developers?',
      answer: 'OpenHands stands out with: 63.4k GitHub stars (highest among Devin alternatives), rich UI that matches commercial tools (not just terminal), presented at ICLR 2025 showing academic credibility, 401 contributors ensuring rapid development, true developer capabilities (browse web, call APIs, run commands), and active community (Slack for research, Discord for general). It\'s not just an open-source clone—it\'s become the platform for AI agent development, with companies building commercial products on top.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://github.com/All-Hands-AI/OpenHands" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">OpenDevin, now OpenHands</a>, has become the definitive open-source answer to <Link href="/tools/devin" className="text-purple-400 hover:text-purple-300">Devin</Link> with an astounding 63.4k GitHub stars and 401 contributors. This isn't just another AI coding assistant—it's a full-fledged AI software engineer that can modify code, run commands, browse the web, call APIs, and yes, even copy from StackOverflow just like human developers. With 37.4% success on SWE-bench Verified (nearly 3x better than Devin's 13.86%), OpenHands proves that open-source can match or exceed proprietary solutions while giving developers complete control.
      </p>
      
      <p className="text-lg leading-relaxed">
        What makes OpenHands revolutionary isn't just being free—it's the democratization of AI development agents. While <Link href="/tools/devin" className="text-purple-400 hover:text-purple-300">Devin</Link> charges $20-500/month for a closed platform, OpenHands offers multiple deployment options: completely free self-hosting with any LLM, OpenHands Cloud with $20 starter credits, or local Docker deployment for maximum privacy. The rich UI rivals commercial tools with VS Code integration, Jupyter support, and a built-in browser—features that <Link href="/tools/swe-agent" className="text-purple-400 hover:text-purple-300">SWE-agent</Link> and <Link href="/tools/autogpt" className="text-purple-400 hover:text-purple-300">AutoGPT</Link> lack despite their strengths. With <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude Sonnet 4</Link> as the recommended LLM, teams report saving thousands monthly while maintaining enterprise-grade capabilities. For developers seeking Devin's power without the price tag or vendor lock-in, OpenHands delivers the future of autonomous coding—open, transparent, and community-driven.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses OpenDevin/OpenHands?',
    segments: [
      {
        name: 'Startups',
        description: 'Teams choosing open-source over expensive Devin subscriptions.',
        icon: Rocket,
        stats: 'Save $500/month'
      },
      {
        name: 'Open Source Projects',
        description: 'Maintainers automating issue resolution and PR reviews.',
        icon: GitBranch,
        stats: '63.4k stars'
      },
      {
        name: 'Enterprise Teams',
        description: 'Companies needing full control and on-premise deployment.',
        icon: Building2,
        stats: 'MIT license'
      },
      {
        name: 'AI Researchers',
        description: 'Academics studying and improving autonomous agents.',
        icon: GraduationCap,
        stats: 'ICLR 2025'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes OpenDevin/OpenHands Unique?',
    points: [
      {
        title: '63.4k GitHub Stars',
        description: 'Most popular open-source AI developer agent.',
        icon: Star
      },
      {
        title: 'True Devin Alternative',
        description: 'Rich UI, full capabilities, but completely free.',
        icon: Bot
      },
      {
        title: '37.4% SWE-bench',
        description: 'Outperforms Devin\'s 13.86% by nearly 3x.',
        icon: Target
      },
      {
        title: 'Multiple Deployment',
        description: 'Cloud, Docker, or CLI—choose your setup.',
        icon: Cloud
      },
      {
        title: '401 Contributors',
        description: 'Massive community ensuring rapid development.',
        icon: Users
      }
    ]
  }
}

export default function OpenDevinPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={openDevinData} />
    </>
  )
}
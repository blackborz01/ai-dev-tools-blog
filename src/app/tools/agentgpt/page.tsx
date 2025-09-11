'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, MousePointer, Compass } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const agentGPTData = {
  name: 'AgentGPT',
  tagline: 'Browser-based autonomous AI agents - no setup, instant deployment',
  description: 'AgentGPT by Reworkd lets you deploy autonomous AI agents directly in your browser. Name your agent, set goals, and watch it execute tasks. 100,000+ users, Y Combinator backed. From free trial to $40/month Pro with GPT-4 and unlimited web search.',
  url: 'https://agentgpt.reworkd.ai',
  category: 'AI Agents',
  logo: '/logos/agentgpt.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free Trial',
        price: '$0',
        features: [
          '5 demo agents per day',
          'GPT-3.5-Turbo access',
          'Basic templates',
          'Limited loops per agent',
          'Limited web search',
          'Browser-based only',
          'Community support'
        ],
        highlighted: true
      },
      {
        name: 'Pro',
        price: '$40',
        features: [
          '30 agents per day',
          'GPT-3.5 & GPT-4 access',
          '25 loops per agent',
          'Unlimited web search',
          'Latest plugins',
          'Priority support',
          'Advanced templates'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Everything in Pro',
          'Unlimited agents',
          'SAML SSO',
          'Shared workspaces',
          'Role management',
          'Dedicated manager',
          'Custom integrations'
        ]
      }
    ]
  },

  features: [
    {
      icon: MousePointer,
      title: 'Zero Setup Required',
      description: 'Browser-based platform. No downloads, installations, or technical setup needed.'
    },
    {
      icon: Bot,
      title: 'Autonomous Execution',
      description: 'Agents think of tasks, execute them, and learn from results automatically.'
    },
    {
      icon: Compass,
      title: 'Pre-Built Templates',
      description: 'TravelGPT, ResearchGPT, StudyGPT - ready-to-use agents for common tasks.'
    },
    {
      icon: Database,
      title: 'Vector Memory',
      description: 'Advanced memory management improves agent performance over time.'
    },
    {
      icon: Globe,
      title: 'Web Search Integration',
      description: 'Pro users get unlimited web search for real-time data and research.'
    },
    {
      icon: Users,
      title: 'Y Combinator Backed',
      description: '100,000+ users in first week. YC Summer 2023 cohort. Viral GitHub launch.'
    }
  ],

  comparisons: [
    {
      feature: 'Setup Complexity',
      tool: 'None (browser)',
      competitors: { 'AutoGPT': 'Technical', 'Devin': 'Account setup', 'OpenDevin': 'Docker/CLI', 'SWE-agent': 'YAML config' }
    },
    {
      feature: 'Monthly Price',
      tool: '$0-40',
      competitors: { 'AutoGPT': '$0 + API', 'Devin': '$20-500', 'OpenDevin': '$0 + API', 'SWE-agent': '$0 + API' }
    },
    {
      feature: 'Deployment',
      tool: 'Instant browser',
      competitors: { 'AutoGPT': 'Self-host', 'Devin': 'Cloud', 'OpenDevin': 'Multiple', 'SWE-agent': 'Local' }
    },
    {
      feature: 'GPT-4 Access',
      tool: 'Included Pro',
      competitors: { 'AutoGPT': 'BYO API', 'Devin': 'Included', 'OpenDevin': 'BYO API', 'SWE-agent': 'BYO API' }
    },
    {
      feature: 'Templates',
      tool: 'Pre-built',
      competitors: { 'AutoGPT': 'Community', 'Devin': 'No', 'OpenDevin': 'No', 'SWE-agent': 'No' }
    },
    {
      feature: 'User Base',
      tool: '100,000+',
      competitors: { 'AutoGPT': '50,000+', 'Devin': 'Limited', 'OpenDevin': '63.4k stars', 'SWE-agent': 'Academic' }
    }
  ],

  integrations: [
    { name: 'GPT-4', category: 'LLM', icon: '🤖', description: 'Pro tier' },
    { name: 'GPT-3.5', category: 'LLM', icon: '🧠', description: 'All tiers' },
    { name: 'Web Search', category: 'Data', icon: '🔍', description: 'Unlimited Pro' },
    { name: 'Vector DB', category: 'Memory', icon: '💾', description: 'Advanced' },
    { name: 'Chrome', category: 'Browser', icon: '🌐', description: 'Platform' },
    { name: 'APIs', category: 'External', icon: '🔌', description: 'Real-time' },
    { name: 'GitHub', category: 'Code', icon: '🐙', description: 'Open source' },
    { name: 'SAML', category: 'Auth', icon: '🔐', description: 'Enterprise' }
  ],

  reviews: [
    {
      author: 'Product Manager',
      role: 'Marketing Lead',
      company: 'SaaS Startup',
      rating: 5,
      comment: 'AgentGPT is perfect for non-technical teams. Browser-based means no IT setup. ResearchGPT template saves hours on market analysis. $40 is a steal.',
      verified: true
    },
    {
      author: 'Content Creator',
      role: 'Founder',
      company: 'Agency',
      rating: 5,
      comment: 'Went viral using AgentGPT for content research. 100k users in a week proves the demand. Web search in Pro tier is essential. Better than AutoGPT for ease.',
      verified: true
    },
    {
      author: 'Business Analyst',
      role: 'Operations',
      company: 'Enterprise',
      rating: 4,
      comment: 'Enterprise plan with SAML was key for our security. 30 agents/day on Pro handles our team. Wish it had more customization like AutoGPT.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.agentgpt.reworkd.ai',
    github: 'https://github.com/reworkd/AgentGPT',
    platform: 'https://agentgpt.reworkd.ai',
    support: 'support@reworkd.ai',
    blog: 'https://reworkd.ai/blog'
  },

  faqs: [
    {
      question: 'How does AgentGPT differ from AutoGPT?',
      answer: 'AgentGPT and AutoGPT serve different audiences. AgentGPT is browser-based with zero setup—perfect for non-technical users who want immediate results. AutoGPT requires Python installation and technical knowledge but offers unlimited customization. AgentGPT costs $40/month with everything included, while AutoGPT is free but requires API keys. AgentGPT\'s 100,000+ users in the first week proved the demand for simplified autonomous agents. Choose AgentGPT for ease, AutoGPT for control.'
    },
    {
      question: 'What happened after AgentGPT went viral?',
      answer: 'After acquiring 100,000+ daily users in a week on GitHub (April 2023), Reworkd joined Y Combinator\'s Summer 2023 cohort. The founders realized building general AI agents was too broad and pivoted—Reworkd now focuses on web-scraping AI agents for extracting structured data. However, AgentGPT continues to be maintained and updated, remaining available at agentgpt.reworkd.ai with ongoing improvements and the same browser-based simplicity that made it viral.'
    },
    {
      question: 'Is the $40 Pro plan worth it compared to free alternatives?',
      answer: 'For most business users, absolutely. Pro gives you 30 agents/day (vs 5 free), GPT-4 access (worth $20+ alone), unlimited web search (crucial for research), 25 loops per agent (vs limited), and priority support. Compare to setting up AutoGPT (hours of work) or paying for Devin ($20-500/month). The browser-based nature means immediate productivity—no DevOps, no Docker, no terminal. If your time is worth more than $1.33/day, Pro pays for itself.'
    },
    {
      question: 'What are the pre-built templates and how useful are they?',
      answer: 'AgentGPT\'s templates are game-changers for common tasks: TravelGPT creates detailed itineraries with bookings and recommendations, ResearchGPT generates comprehensive reports with citations, StudyGPT builds learning plans and study materials, PlatformerGPT helps with game development tasks. These aren\'t just prompts—they\'re configured agents with optimized settings. Users report 70-80% time savings using templates vs building from scratch. Pro users can modify templates for custom workflows.'
    },
    {
      question: 'How does the browser-based architecture affect performance?',
      answer: 'Browser-based means instant access but some limitations: all processing happens on Reworkd\'s servers (data privacy consideration), requires stable internet connection, can\'t access local files directly, and limited to web-accessible data. However, benefits outweigh drawbacks for most users: zero maintenance, automatic updates, works on any device, no resource consumption locally, and enterprise-grade infrastructure. The vector database ensures agents improve over time despite browser limitations.'
    },
    {
      question: 'What\'s the best use case for AgentGPT vs other AI agents?',
      answer: 'AgentGPT excels at: quick research and analysis tasks, content creation and planning, non-technical team automation, rapid prototyping of AI workflows, and educational/learning applications. It\'s perfect when you need results now without setup complexity. Less suitable for: code-heavy development (use SWE-agent), local file processing (use AutoGPT), continuous background tasks (use self-hosted), or highly customized workflows (use OpenDevin). Think of AgentGPT as the "Google Docs" of AI agents—instant, collaborative, and good enough for 90% of use cases.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://agentgpt.reworkd.ai" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">AgentGPT</a> by Reworkd revolutionized autonomous AI agents by making them accessible to everyone through a simple browser interface. While <Link href="/tools/autogpt" className="text-purple-400 hover:text-purple-300">AutoGPT</Link> requires technical setup and <Link href="/tools/devin" className="text-purple-400 hover:text-purple-300">Devin</Link> costs hundreds monthly, AgentGPT lets anyone deploy AI agents instantly—just name your agent, set a goal, and watch it work. With 100,000+ users in its first week and Y Combinator backing, AgentGPT proved that simplicity beats complexity for most AI automation needs.
      </p>
      
      <p className="text-lg leading-relaxed">
        The platform's genius lies in eliminating barriers: no downloads, no API keys to manage, no Docker containers—just open your browser and start. At $40/month, the Pro plan includes GPT-4 access, unlimited web search, and 30 agents daily—comparable value to <Link href="/tools/chatgpt" className="text-purple-400 hover:text-purple-300">ChatGPT Plus</Link> but with autonomous execution. Pre-built templates like ResearchGPT and TravelGPT deliver immediate value, while the vector database ensures agents improve over time. Unlike <Link href="/tools/swe-agent" className="text-purple-400 hover:text-purple-300">SWE-agent</Link> or <Link href="/tools/opendevin" className="text-purple-400 hover:text-purple-300">OpenDevin</Link> which target developers, AgentGPT democratizes AI agents for product managers, marketers, researchers—anyone who needs AI automation without the complexity. For teams seeking AutoGPT's power with Google Docs-like simplicity, AgentGPT delivers autonomous AI that just works.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses AgentGPT?',
    segments: [
      {
        name: 'Non-Technical Teams',
        description: 'Business users who need AI automation without coding or setup.',
        icon: Users,
        stats: 'Zero setup'
      },
      {
        name: 'Content Creators',
        description: 'Writers and marketers using AI for research and content generation.',
        icon: FileCode,
        stats: '100k+ users'
      },
      {
        name: 'Researchers',
        description: 'Analysts using ResearchGPT template for comprehensive reports.',
        icon: Compass,
        stats: 'Web search Pro'
      },
      {
        name: 'Small Businesses',
        description: 'Teams needing affordable AI without technical overhead.',
        icon: Briefcase,
        stats: '$40/month'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes AgentGPT Unique?',
    points: [
      {
        title: 'Browser-Based',
        description: 'No downloads, installations, or setup required.',
        icon: MousePointer
      },
      {
        title: 'Instant Deployment',
        description: 'Create and run agents in seconds, not hours.',
        icon: Zap
      },
      {
        title: 'Pre-Built Templates',
        description: 'Ready-to-use agents for common tasks.',
        icon: Package
      },
      {
        title: 'Y Combinator Backed',
        description: '100k users in week one, YC Summer 2023.',
        icon: Rocket
      },
      {
        title: 'Simplified Pricing',
        description: 'Everything included at $40/month Pro.',
        icon: Target
      }
    ]
  }
}

export default function AgentGPTPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={agentGPTData} />
    </>
  )
}
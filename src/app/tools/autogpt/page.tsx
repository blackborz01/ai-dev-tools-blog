'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Cpu, Settings } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const autoGPTData = {
  name: 'AutoGPT',
  tagline: 'The original autonomous AI agent - build and deploy self-running AI assistants',
  description: 'AutoGPT pioneered autonomous AI agents in 2023, becoming GitHub\'s most-starred AI project. Create agents that self-prompt through complex tasks, maintain memory across sessions, and integrate with 50+ plugins. Free open-source or cloud platform with 50,000+ community members.',
  url: 'https://autogpt.net',
  category: 'AI Agents',
  logo: '/logos/autogpt.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Open Source',
        price: '$0',
        features: [
          'Self-hosted deployment',
          'Full source code access',
          'Unlimited agents',
          'Community plugins',
          'API costs only ($0.03-0.06/1K tokens)',
          'Technical setup required',
          '50,000+ Discord community'
        ],
        highlighted: true
      },
      {
        name: 'Cloud Beta',
        price: 'Waitlist',
        features: [
          'Hosted platform',
          'No-code agent builder',
          'Pre-built agent marketplace',
          'Managed infrastructure',
          'Auto-scaling resources',
          'Join waitlist for access',
          'Pricing TBA'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Private deployment',
          'Custom agent training',
          'Priority support',
          'SLA guarantees',
          'Advanced security',
          'Custom integrations',
          'Contact for pricing'
        ]
      }
    ]
  },

  features: [
    {
      icon: Bot,
      title: 'True Autonomy',
      description: 'Agents self-prompt through tasks. Give a goal, watch it research, plan, and execute independently.'
    },
    {
      icon: Brain,
      title: 'Advanced Memory',
      description: 'Short-term memory for tasks, long-term memory for projects. Works on multi-day projects effectively.'
    },
    {
      icon: Package,
      title: '50+ Plugins',
      description: 'Database connections, image generation, email automation, web scraping, and more via Plugin Hub.'
    },
    {
      icon: Globe,
      title: 'Internet Access',
      description: 'Real-time web access for research, data gathering, and up-to-date information retrieval.'
    },
    {
      icon: Settings,
      title: 'Agent Builder',
      description: 'Low-code interface to design custom AI agents without extensive coding knowledge.'
    },
    {
      icon: Users,
      title: '50K+ Community',
      description: 'Massive Discord community of founders, developers, and AI innovators sharing knowledge.'
    }
  ],

  comparisons: [
    {
      feature: 'Setup Complexity',
      tool: 'Technical (self-host)',
      competitors: { 'AgentGPT': 'Simple (browser)', 'Devin': 'Instant (cloud)', 'OpenDevin': 'Technical', 'Claude': 'Instant' }
    },
    {
      feature: 'Monthly Cost',
      tool: '$0 + API costs',
      competitors: { 'AgentGPT': '$28-97', 'Devin': '$20-500', 'OpenDevin': '$0 + API', 'Claude': '$20' }
    },
    {
      feature: 'Customization',
      tool: 'Unlimited',
      competitors: { 'AgentGPT': 'Limited', 'Devin': 'Moderate', 'OpenDevin': 'High', 'Claude': 'None' }
    },
    {
      feature: 'Plugin Ecosystem',
      tool: '50+ plugins',
      competitors: { 'AgentGPT': 'Few', 'Devin': 'Built-in', 'OpenDevin': 'Growing', 'Claude': 'None' }
    },
    {
      feature: 'Memory System',
      tool: 'Short & long-term',
      competitors: { 'AgentGPT': 'Session only', 'Devin': 'Project-based', 'OpenDevin': 'Basic', 'Claude': 'Conversation' }
    },
    {
      feature: 'Community Size',
      tool: '50,000+ Discord',
      competitors: { 'AgentGPT': 'Small', 'Devin': 'Growing', 'OpenDevin': 'Open source', 'Claude': 'Large' }
    }
  ],

  integrations: [
    { name: 'OpenAI', category: 'LLM', icon: '🤖', description: 'GPT-4/GPT-5' },
    { name: 'Claude', category: 'LLM', icon: '🧠', description: 'Anthropic models' },
    { name: 'Google', category: 'Search', icon: '🔍', description: 'Web search' },
    { name: 'GitHub', category: 'Code', icon: '🐙', description: 'Repository access' },
    { name: 'Discord', category: 'Community', icon: '💬', description: '50K members' },
    { name: 'PostgreSQL', category: 'Database', icon: '🗄️', description: 'Data storage' },
    { name: 'Selenium', category: 'Web', icon: '🌐', description: 'Web automation' },
    { name: 'Email', category: 'Comms', icon: '📧', description: 'SMTP/IMAP' }
  ],

  reviews: [
    {
      author: 'AI Developer',
      role: 'Founder',
      company: 'AI Startup',
      rating: 5,
      comment: 'AutoGPT changed everything. My agent runs 24/7 doing market research. The plugin system is incredibly powerful. API costs are minimal.',
      verified: true
    },
    {
      author: 'Technical Lead',
      role: 'Engineering',
      company: 'Tech Company',
      rating: 4,
      comment: 'Setup took time but worth it. Running 5 agents for different tasks. Memory system actually works for multi-day projects. Community support is amazing.',
      verified: true
    },
    {
      author: 'Solo Developer',
      role: 'Indie Hacker',
      company: 'Freelance',
      rating: 5,
      comment: 'Free and unlimited customization sold me. Built an agent that automates my entire content pipeline. Waiting for cloud version for easier deployment.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.agpt.co',
    github: 'https://github.com/Significant-Gravitas/AutoGPT',
    discord: 'https://discord.gg/autogpt',
    plugins: 'https://autogpt.net/plugins',
    blog: 'https://autogpt.net/blog'
  },

  faqs: [
    {
      question: 'How does AutoGPT differ from ChatGPT or Claude?',
      answer: 'AutoGPT is fundamentally different—it\'s an autonomous agent, not a chatbot. While ChatGPT and Claude require constant prompting, AutoGPT self-prompts to complete complex goals. Give it a task like "create a business plan" and it will research markets, analyze competitors, calculate costs, and generate documents independently. It maintains memory across sessions and can work on projects for days without intervention.'
    },
    {
      question: 'What are the real costs of running AutoGPT?',
      answer: 'AutoGPT itself is free open-source software. Costs come from LLM API usage: typically $0.03-0.06 per 1,000 tokens with GPT-4. Light usage (personal projects) costs $5-20/month. Heavy usage (business automation) runs $50-200/month. This is still cheaper than alternatives: AgentGPT charges $28-97/month, Devin starts at $20-500. You control costs by choosing models (GPT-3.5 is 10x cheaper) and setting token limits.'
    },
    {
      question: 'How technical is the setup process?',
      answer: 'Self-hosting requires intermediate technical skills: Python installation, environment variables, API key configuration, and basic command line usage. Setup takes 30-60 minutes following documentation. The cloud platform (currently in beta waitlist) will eliminate technical requirements with a no-code interface. For non-technical users, waiting for the cloud version or using alternatives like AgentGPT might be better.'
    },
    {
      question: 'What can AutoGPT actually do autonomously?',
      answer: 'Real examples from the community: Market research (analyze competitors, gather pricing, create reports), Content creation (blog posts, social media, SEO optimization), Code development (debug, refactor, generate tests), Data analysis (scrape websites, process CSVs, create visualizations), Business automation (email responses, customer support, lead qualification). The key is clear goal definition—vague instructions produce poor results.'
    },
    {
      question: 'How does the plugin system extend functionality?',
      answer: 'The Plugin Hub offers 50+ extensions that add capabilities: Database plugins for PostgreSQL/MySQL integration, Image generation via DALL-E/Stable Diffusion, Email automation with SMTP/IMAP, Web scraping with Selenium, File operations for local system access, API connectors for third-party services. Plugins are Python-based and community-contributed. You can also create custom plugins for specific needs.'
    },
    {
      question: 'Is AutoGPT worth it in 2025 with newer alternatives?',
      answer: 'AutoGPT remains valuable for specific use cases: Maximum customization (open-source, modify anything), Cost efficiency (pay only API costs, no subscription), Privacy (self-hosted, data never leaves your control), Learning opportunity (understand how AI agents work). However, for ease of use, consider Devin ($20/month) or AgentGPT (browser-based). AutoGPT is best for technical users wanting control or businesses needing custom solutions.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://autogpt.net" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">AutoGPT</a> revolutionized AI by introducing truly autonomous agents in March 2023, quickly becoming GitHub's most-starred AI project with over 50,000 community members. Unlike conversational AI like <Link href="/tools/chatgpt" className="text-purple-400 hover:text-purple-300">ChatGPT</Link> or <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude</Link>, AutoGPT agents self-prompt through complex tasks—give them a goal and watch them research, plan, and execute independently for days. With advanced memory management, 50+ community plugins, and complete customization freedom, AutoGPT offers unlimited potential for those willing to invest in setup time.
      </p>
      
      <p className="text-lg leading-relaxed">
        The platform's dual approach—free open-source for technical users and upcoming cloud platform for everyone else—democratizes autonomous AI. While <Link href="/tools/devin" className="text-purple-400 hover:text-purple-300">Devin</Link> charges $20-500/month and AgentGPT requires $28-97 subscriptions, AutoGPT costs only API tokens ($5-200/month depending on usage). The vibrant Discord community of 50,000+ members shares plugins, strategies, and support, making AutoGPT more than software—it's a movement. For businesses automating workflows, developers building custom solutions, or innovators exploring AI's limits, AutoGPT provides the foundation for creating AI agents that work tirelessly on your behalf. As the platform evolves with its cloud offering and marketplace, AutoGPT continues to define what autonomous AI can achieve when given true independence and community-driven development.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses AutoGPT?',
    segments: [
      {
        name: 'AI Developers',
        description: 'Engineers building custom autonomous agents for specific use cases.',
        icon: Code,
        stats: 'Unlimited customization'
      },
      {
        name: 'Startups',
        description: 'Teams automating research, content, and repetitive tasks at low cost.',
        icon: Rocket,
        stats: '$5-200/month'
      },
      {
        name: 'Researchers',
        description: 'Academics using agents for data gathering and analysis automation.',
        icon: Brain,
        stats: 'Multi-day projects'
      },
      {
        name: 'Indie Hackers',
        description: 'Solo entrepreneurs automating entire business workflows.',
        icon: Briefcase,
        stats: '50K+ community'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes AutoGPT Unique?',
    points: [
      {
        title: 'True Autonomy',
        description: 'Self-prompts through tasks without human intervention.',
        icon: Bot
      },
      {
        title: 'Open Source',
        description: 'Free, modifiable, self-hosted. Complete control.',
        icon: GitBranch
      },
      {
        title: 'Plugin Ecosystem',
        description: '50+ community plugins extend capabilities infinitely.',
        icon: Package
      },
      {
        title: 'Memory System',
        description: 'Short and long-term memory for complex projects.',
        icon: Brain
      },
      {
        title: 'Massive Community',
        description: '50,000+ Discord members sharing and innovating.',
        icon: Users
      }
    ]
  }
}

export default function AutoGPTPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={autoGPTData} />
    </>
  )
}
'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Search, BookOpen } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const claudeData = {
  name: 'Claude',
  tagline: 'Anthropic\'s AI assistant with 200K context, extended thinking, and Claude 4 models',
  description: 'Claude by Anthropic features Claude 4 Opus and Sonnet with extended thinking modes, Artifacts for collaborative work, Projects for organized workflows, and industry-leading safety. Trusted for complex reasoning and coding.',
  url: 'https://claude.ai',
  category: 'AI Assistant',
  logo: '/logos/claude.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          'Claude 3.5 Sonnet access',
          'Limited daily messages',
          'Basic features',
          'No Projects access',
          'No priority during peak',
          'Standard response time',
          'Community support'
        ]
      },
      {
        name: 'Pro',
        price: '$20',
        features: [
          '5x more usage',
          'Claude 4 Opus & Sonnet',
          'Projects & Artifacts',
          'Priority access',
          'Extended thinking mode',
          'Web search capability',
          '$18/mo annually'
        ],
        highlighted: true
      },
      {
        name: 'Max Standard',
        price: '$100',
        features: [
          '5x Pro usage (25x Free)',
          'All Pro features',
          'Claude Code terminal',
          'Advanced capabilities',
          'Priority processing',
          'Enhanced limits',
          'Premium support'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Team',
        price: '$30/user',
        features: [
          'Everything in Pro',
          'More usage than Pro',
          'Central billing',
          'Team collaboration',
          '200K context window',
          'Admin dashboard',
          '$25/mo annually'
        ]
      },
      {
        name: 'Max Ultimate',
        price: '$200/user',
        features: [
          '20x Pro usage',
          'Highest limits',
          'All Max features',
          'Priority everything',
          'Dedicated resources',
          'Premium support',
          'Power user tier'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: '$60/user',
        features: [
          'Custom usage limits',
          'Enhanced security',
          'SSO/SAML',
          'Advanced admin',
          'SLA guarantees',
          '70 user minimum',
          'Annual only'
        ]
      }
    ]
  },

  features: [
    {
      icon: Brain,
      title: 'Claude 4 Models',
      description: 'Opus 4 (72.5% SWE-bench) and Sonnet 4 (72.7%) with hybrid reasoning and extended thinking modes.'
    },
    {
      icon: BookOpen,
      title: '200K Context',
      description: 'Process 500+ pages of text. Beta 1M token context for tier 4 organizations on Sonnet 4.'
    },
    {
      icon: Sparkles,
      title: 'Artifacts',
      description: 'Dynamic workspace for code, documents, and designs. Edit and build collaboratively in real-time.'
    },
    {
      icon: Search,
      title: 'Web Search',
      description: 'Access current information beyond training data. Find recent news, research, and live data.'
    },
    {
      icon: FileCode,
      title: 'Projects',
      description: 'Organize conversations by topic with persistent context. Build on previous insights over time.'
    },
    {
      icon: Terminal,
      title: 'Computer Use',
      description: 'Beta: Claude can control computers—click, type, and navigate screens autonomously.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$20 Pro / $100 Max',
      competitors: { 'ChatGPT Plus': '$20', 'Perplexity Pro': '$20', 'Gemini Advanced': '$20' }
    },
    {
      feature: 'Context Window',
      tool: '200K (1M beta)',
      competitors: { 'ChatGPT Plus': '128K', 'Perplexity Pro': '32K', 'Gemini Advanced': '2M' }
    },
    {
      feature: 'Coding (SWE-bench)',
      tool: '72.7% Sonnet 4',
      competitors: { 'ChatGPT Plus': '~45%', 'Perplexity Pro': 'N/A', 'Gemini Advanced': '~40%' }
    },
    {
      feature: 'Extended Thinking',
      tool: 'Yes (Opus/Sonnet 4)',
      competitors: { 'ChatGPT Plus': 'o1 models', 'Perplexity Pro': 'No', 'Gemini Advanced': 'No' }
    },
    {
      feature: 'Artifacts',
      tool: 'Advanced workspace',
      competitors: { 'ChatGPT Plus': 'Canvas', 'Perplexity Pro': 'Labs', 'Gemini Advanced': 'No' }
    },
    {
      feature: 'Computer Control',
      tool: 'Yes (Beta)',
      competitors: { 'ChatGPT Plus': 'No', 'Perplexity Pro': 'No', 'Gemini Advanced': 'No' }
    }
  ],

  integrations: [
    { name: 'Claude 4 Opus', category: 'Model', icon: '🧠', description: 'Best coding' },
    { name: 'Claude 4 Sonnet', category: 'Model', icon: '⚡', description: 'Fast & smart' },
    { name: 'Claude 3.5 Haiku', category: 'Model', icon: '🎯', description: 'Instant' },
    { name: 'Artifacts', category: 'Feature', icon: '📝', description: 'Workspace' },
    { name: 'Projects', category: 'Feature', icon: '📁', description: 'Organization' },
    { name: 'Web Search', category: 'Tool', icon: '🔍', description: 'Current info' },
    { name: 'Claude Code', category: 'Tool', icon: '💻', description: 'Python env' },
    { name: 'Computer Use', category: 'Beta', icon: '🖱️', description: 'Automation' }
  ],

  reviews: [
    {
      author: 'Software Engineer',
      role: 'Senior Developer',
      company: 'Tech Startup',
      rating: 5,
      comment: 'Claude 4 Opus is the best coding model I\'ve used. Extended thinking catches logic errors I miss. Projects keeps my work organized.',
      verified: true
    },
    {
      author: 'Research Scientist',
      role: 'AI Researcher',
      company: 'University Lab',
      rating: 5,
      comment: '200K context handles entire research papers. Artifacts makes collaborative writing seamless. Worth every penny of Pro.',
      verified: true
    },
    {
      author: 'Product Manager',
      role: 'Team Lead',
      company: 'Enterprise SaaS',
      rating: 5,
      comment: 'Team plan transformed our workflow. Shared Projects ensure consistency. Claude\'s safety and accuracy are unmatched.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.anthropic.com',
    api: 'https://www.anthropic.com/api',
    pricing: 'https://www.anthropic.com/pricing',
    blog: 'https://www.anthropic.com/news',
    research: 'https://www.anthropic.com/research'
  },

  faqs: [
    {
      question: 'What makes Claude 4 special compared to earlier versions?',
      answer: 'Claude 4 (Opus and Sonnet) introduces hybrid reasoning with extended thinking modes, allowing deeper analysis of complex problems. Opus 4 achieves 72.5% on SWE-bench (world\'s best coding model), while Sonnet 4 hits 72.7%. Both models can alternate between reasoning and tool use (like web search) during extended thinking, spending more time on harder problems for better accuracy.'
    },
    {
      question: 'How do Projects and Artifacts work together?',
      answer: 'Projects organize your conversations by topic with persistent context—like folders for your AI work. Within Projects, Artifacts create a dynamic workspace where Claude generates code, documents, or designs in a dedicated window. You can edit Artifacts in real-time while chatting, building iteratively. Projects remember context across sessions, while Artifacts provide the collaborative canvas for creation.'
    },
    {
      question: 'Is Claude Pro worth $20/month vs free?',
      answer: 'Pro offers 5x more usage, access to Claude 4 models (vastly superior to 3.5 Sonnet in free), Projects for organization, Artifacts for collaboration, extended thinking for complex tasks, and web search for current information. Users report 2-3x productivity gains with Pro features. The annual plan at $18/month offers better value. For heavy users, Max plans at $100-200 provide even more capacity.'
    },
    {
      question: 'What is Computer Use and how does it work?',
      answer: 'Computer Use (public beta) allows Claude to control computers like humans do—viewing screens, moving cursors, clicking buttons, and typing. Developers can direct Claude to navigate websites, fill forms, or operate software autonomously. It\'s the first frontier AI model offering this capability, opening possibilities for automation, testing, and accessibility applications. Currently requires API access and developer implementation.'
    },
    {
      question: 'How does Claude compare to ChatGPT for different use cases?',
      answer: 'Claude excels at: longer context (200K vs 128K tokens), safer outputs with less hallucination, superior coding (72%+ vs ~45% SWE-bench), and nuanced writing. ChatGPT offers: broader feature set (DALL-E, voice), larger ecosystem, o-series reasoning models. Claude is preferred for research, coding, and professional writing. ChatGPT wins for multimodal tasks and general versatility. Both are $20/month for Pro tiers.'
    },
    {
      question: 'What are the Max plans and who needs them?',
      answer: 'Max Standard ($100/month) provides 5x Pro usage (25x free), while Max Ultimate ($200/month) offers 20x Pro usage (100x free). These plans add Claude Code terminal access and are designed for power users, researchers, and professionals who hit Pro limits. If you\'re constantly waiting for usage to reset on Pro, or need to process massive documents frequently, Max plans eliminate friction. Most users find Pro sufficient.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Claude</a> by <a href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Anthropic</a> represents the frontier of safe, capable AI assistance. With the 2025 launch of Claude 4 Opus and Sonnet models achieving over 72% on SWE-bench benchmarks, Claude has become the world's leading coding assistant. The platform's 200K token context window (with 1M in beta) dwarfs <Link href="/tools/chatgpt" className="text-purple-400 hover:text-purple-300">ChatGPT's</Link> 128K limit, allowing processing of entire codebases, research papers, or books in a single conversation. Features like Artifacts create a dynamic workspace for real-time collaboration, while Projects organize work with persistent context across sessions—capabilities that <Link href="/tools/perplexity" className="text-purple-400 hover:text-purple-300">Perplexity</Link> and <Link href="/tools/gemini-code-assist" className="text-purple-400 hover:text-purple-300">Gemini</Link> lack entirely.
      </p>
      
      <p className="text-lg leading-relaxed">
        What truly distinguishes Claude is its commitment to safety and accuracy without sacrificing capability. The extended thinking mode in Claude 4 models allows deep reasoning on complex problems, while web search integration provides current information beyond training data. At $20/month for Pro (or $18 annually), Claude matches competitor pricing while delivering superior performance in coding, writing, and analysis. The new Max tiers ($100-200/month) cater to power users needing 5-20x more capacity. With unique features like Computer Use (beta) enabling autonomous computer control, and the industry's best safety record trusted by major enterprises, Claude has evolved from an AI assistant to a comprehensive platform for augmented intelligence. While <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link> focuses on IDE integration and <Link href="/tools/phind" className="text-purple-400 hover:text-purple-300">Phind</Link> on developer search, Claude offers the most versatile, capable, and trustworthy AI experience available in 2025.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Claude?',
    segments: [
      {
        name: 'Software Developers',
        description: 'Engineers leveraging world-best coding models achieving 72%+ on SWE-bench.',
        icon: Code,
        stats: '72.7% SWE-bench'
      },
      {
        name: 'Researchers & Academics',
        description: 'Scientists using 200K context for papers, extended thinking for complex analysis.',
        icon: GraduationCap,
        stats: '200K tokens'
      },
      {
        name: 'Professional Writers',
        description: 'Authors and content creators using Artifacts for collaborative writing.',
        icon: BookOpen,
        stats: 'Artifacts workspace'
      },
      {
        name: 'Enterprise Teams',
        description: 'Organizations valuing safety, accuracy, and team collaboration features.',
        icon: Building2,
        stats: 'Team plans'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Claude Unique?',
    points: [
      {
        title: 'Best-in-Class Coding',
        description: 'World record 72.7% SWE-bench score with Claude 4 models.',
        icon: Code
      },
      {
        title: 'Extended Thinking',
        description: 'Hybrid reasoning mode for deeper analysis of complex problems.',
        icon: Brain
      },
      {
        title: '200K Context',
        description: 'Process entire books or codebases. 1M tokens in beta.',
        icon: BookOpen
      },
      {
        title: 'Safety First',
        description: 'Industry-leading accuracy with minimal hallucination.',
        icon: Shield
      },
      {
        title: 'Computer Use',
        description: 'First AI to control computers autonomously (beta feature).',
        icon: Terminal
      }
    ]
  }
}

export default function ClaudePage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={claudeData} />
    </>
  )
}
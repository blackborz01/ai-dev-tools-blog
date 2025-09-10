'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const cursorData = {
  name: 'Cursor',
  tagline: 'The AI-first code editor built for pair programming with AI',
  description: 'Cursor is an AI-powered code editor that turns developers into 10x engineers. Built as a fork of VS Code, it features advanced AI capabilities including Tab completion, natural language editing, and Agent Mode for autonomous coding.',
  url: 'https://cursor.sh',
  category: 'AI Code Editor',
  logo: '/logos/cursor.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Hobby',
        price: '$0',
        features: [
          'Two-week Pro trial',
          'Limited Agent requests',
          'Limited Tab completions',
          'Basic AI features',
          'VS Code compatibility',
          'Community support',
          'Local code indexing'
        ]
      },
      {
        name: 'Pro',
        price: '$20',
        features: [
          'Everything in Hobby',
          'Extended Agent limits',
          'Unlimited Tab completions',
          'Background Agents',
          'Bugbot for auto-fixes',
          'Maximum context windows',
          'Priority model access'
        ],
        highlighted: true
      },
      {
        name: 'Ultra',
        price: '$200',
        features: [
          'Everything in Pro',
          '20x usage on all models',
          'OpenAI o1 access',
          'Claude 3.5 Sonnet access',
          'Gemini access',
          'Priority new features',
          'Maximum performance'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Teams',
        price: '$40/user',
        features: [
          'Everything in Pro',
          'Org-wide Privacy Mode',
          'Admin dashboard',
          'Usage analytics',
          'Centralized billing',
          'SAML/OIDC SSO',
          'Team collaboration'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Everything in Teams',
          'Increased usage limits',
          'SCIM seat management',
          'Access control',
          'Priority support',
          'Custom integrations',
          'Dedicated success manager'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Sparkles,
      title: 'Tab Completion Magic',
      description: 'Predictive multi-line code suggestions that understand your entire codebase context, occasionally defying reality with accuracy.'
    },
    {
      icon: Bot,
      title: 'Agent Mode',
      description: 'End-to-end task completion with minimal supervision. Autonomous coding that turns natural language into working features.'
    },
    {
      icon: FileCode,
      title: 'Composer Multi-File Editing',
      description: 'Edit across multiple files simultaneously with AI understanding project-wide implications of changes.'
    },
    {
      icon: Brain,
      title: 'Multi-Model Intelligence',
      description: 'Choose from GPT-4o, o1, Claude 3.5 Sonnet, or cursor-small model for optimal results on each task.'
    },
    {
      icon: Shield,
      title: 'Privacy Mode',
      description: 'SOC 2 certified with local-only code indexing option. Your code never leaves your machine unless you choose.'
    },
    {
      icon: Zap,
      title: 'One-Click VS Code Migration',
      description: 'Import all your VS Code settings, extensions, and themes instantly. Zero friction transition.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$20 Pro',
      competitors: { 'GitHub Copilot': '$10', 'Claude Code': '$20', 'v0': '$0-30' }
    },
    {
      feature: 'Codebase Context',
      tool: 'Full project',
      competitors: { 'GitHub Copilot': 'Limited', 'Claude Code': 'Full project', 'v0': 'N/A' }
    },
    {
      feature: 'Multi-File Editing',
      tool: 'Advanced',
      competitors: { 'GitHub Copilot': 'Basic', 'Claude Code': 'Advanced', 'v0': 'N/A' }
    },
    {
      feature: 'Agent Capabilities',
      tool: 'Full autonomous',
      competitors: { 'GitHub Copilot': 'Limited', 'Claude Code': 'Advanced', 'v0': 'N/A' }
    },
    {
      feature: 'Model Options',
      tool: 'Multiple',
      competitors: { 'GitHub Copilot': 'GPT-4/Claude', 'Claude Code': 'Opus/Sonnet', 'v0': 'Automatic' }
    },
    {
      feature: 'IDE Type',
      tool: 'VS Code fork',
      competitors: { 'GitHub Copilot': 'Extension', 'Claude Code': 'Terminal', 'v0': 'Web-based' }
    }
  ],

  integrations: [
    { name: 'VS Code', category: 'IDE', icon: '📝', description: 'Full extension compatibility' },
    { name: 'GPT-4', category: 'AI Model', icon: '🤖', description: 'OpenAI models including o1' },
    { name: 'Claude 3.5', category: 'AI Model', icon: '🧠', description: 'Anthropic Claude Sonnet' },
    { name: 'Git', category: 'Version Control', icon: '🔗', description: 'Native Git integration' },
    { name: 'GitHub', category: 'Platform', icon: '🐙', description: 'Repository management' },
    { name: 'Python', category: 'Language', icon: '🐍', description: 'Full language support' },
    { name: 'TypeScript', category: 'Language', icon: '📘', description: 'Advanced type understanding' },
    { name: 'Supermaven', category: 'Acquisition', icon: '⚡', description: 'Enhanced autocomplete' }
  ],

  reviews: [
    {
      author: 'Kevin Whinnery',
      role: 'Engineer',
      company: 'OpenAI',
      rating: 5,
      comment: 'The Cursor tab completion while coding is occasionally so magic it defies reality. I\'ve never experienced anything like it.',
      verified: true
    },
    {
      author: 'Andrej Karpathy',
      role: 'AI Researcher',
      company: 'Former Tesla AI',
      rating: 5,
      comment: 'Cursor is transforming how we write code. The AI understanding is remarkable.',
      verified: true
    },
    {
      author: 'Kevin J.',
      role: 'Full Stack Developer',
      company: 'Startup',
      rating: 5,
      comment: 'I\'ve never shipped code this fast. Cursor AI has reduced my development time by nearly 50%.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.cursor.sh',
    github: 'https://github.com/getcursor',
    discord: 'https://discord.gg/cursor',
    twitter: 'https://twitter.com/cursor_ai',
    changelog: 'https://changelog.cursor.sh'
  },

  faqs: [
    {
      question: 'How is Cursor different from GitHub Copilot?',
      answer: 'Cursor is a complete AI-first IDE (VS Code fork) with advanced features like Agent Mode, multi-file editing, and full codebase context. GitHub Copilot is an extension focused primarily on code completion. Cursor costs $20/month vs Copilot\'s $10/month but offers significantly more AI capabilities.'
    },
    {
      question: 'Can I use my VS Code extensions with Cursor?',
      answer: 'Yes! Cursor supports most VS Code extensions from the marketplace. You can import your entire VS Code setup with one click, including settings, themes, and extensions. Note that some Microsoft-specific extensions may have limitations.'
    },
    {
      question: 'What AI models does Cursor use?',
      answer: 'Cursor supports multiple models: GPT-4o, OpenAI o1, Claude 3.5 Sonnet, Gemini, and their custom cursor-small model. Pro users can choose which model to use for different tasks, optimizing for speed or capability.'
    },
    {
      question: 'Is my code secure with Cursor?',
      answer: 'Yes, Cursor is SOC 2 certified and offers Privacy Mode where your code is indexed locally only. You control whether code is sent to AI models. Enterprise plans include additional security features like SAML SSO and access controls.'
    },
    {
      question: 'What is Agent Mode?',
      answer: 'Agent Mode allows Cursor to autonomously complete complex coding tasks from natural language instructions. It can write entire features, fix bugs, and refactor code with minimal supervision, essentially acting as an AI pair programmer.'
    },
    {
      question: 'How much does Cursor cost for teams?',
      answer: 'Teams pricing starts at $40/user/month, which includes everything in Pro plus org-wide Privacy Mode, admin dashboard, usage analytics, and SSO. Enterprise pricing is custom based on needs and includes priority support and additional features.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Cursor</a> revolutionizes software development as the AI-first code editor that transforms developers into 10x engineers through "vibe coding"—a trance-like creative flow powered by artificial intelligence. Built by <a href="https://anysphere.inc" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Anysphere</a> (valued at $9.9B in 2025), this VS Code fork integrates <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GPT-4o</a>, <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Claude 3.5 Sonnet</a>, and proprietary models to deliver predictive Tab completion, Agent Mode for autonomous coding, and Composer for multi-file editing. With over $500M ARR and 1 million users generating 1 billion lines of code daily, Cursor outpaces <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link> in advanced capabilities while maintaining SOC 2 certified security.
      </p>
      
      <p className="text-lg leading-relaxed">
        Unlike <Link href="/tools/claude-code" className="text-purple-400 hover:text-purple-300">Claude Code</Link>'s terminal approach or <Link href="/tools/v0" className="text-purple-400 hover:text-purple-300">v0</Link>'s UI generation focus, Cursor delivers a complete IDE experience starting at $20/month with unlimited Tab completions, Background Agents, and Bugbot for automated fixes. The platform's one-click <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">VS Code</a> migration preserves all extensions and settings, while Privacy Mode ensures code never leaves your machine. Trusted by engineers at <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">OpenAI</a>, <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Stripe</a>, and <a href="https://shopify.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Shopify</a>, Cursor represents the future of AI-native development where natural language transforms into production code at thought-speed.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Cursor?',
    segments: [
      {
        name: 'Professional Engineers',
        description: 'Developers at OpenAI, Stripe, Shopify, Samsung, and Notion use Cursor to ship code 50% faster with AI pair programming.',
        icon: Code,
        stats: '1M+ developers'
      },
      {
        name: 'Startup Teams',
        description: 'Fast-moving startups leverage Cursor\'s Agent Mode to build features autonomously, reducing development time dramatically.',
        icon: Rocket,
        stats: '$500M+ ARR'
      },
      {
        name: 'Junior Developers',
        description: 'New programmers use Cursor as an AI mentor, learning best practices while writing production-quality code.',
        icon: GraduationCap,
        stats: '50% faster learning'
      },
      {
        name: 'Enterprise Teams',
        description: 'Companies like Midjourney and Perplexity deploy Cursor with Privacy Mode for secure, AI-enhanced development.',
        icon: Building2,
        stats: 'SOC 2 certified'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Cursor Unique?',
    points: [
      {
        title: 'Vibe Coding Revolution',
        description: 'Enter a trance-like creative flow where AI anticipates your next move with uncanny accuracy, generating code at thought-speed.',
        icon: Sparkles
      },
      {
        title: 'Full Codebase Understanding',
        description: 'Unlike competitors, Cursor comprehends your entire project context, making intelligent suggestions across all files.',
        icon: Brain
      },
      {
        title: 'Fastest Growing Dev Tool',
        description: 'Revenue doubling every 2 months, reached $500M ARR faster than any software company in history.',
        icon: Rocket
      },
      {
        title: 'VS Code Compatible',
        description: 'One-click migration from VS Code preserves all your settings, extensions, and workflows with zero friction.',
        icon: Package
      },
      {
        title: 'Autonomous Agent Mode',
        description: 'Write entire features from natural language descriptions with minimal supervision, true AI pair programming.',
        icon: Bot
      }
    ]
  }
}

export default function CursorPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={cursorData} />
    </>
  )
}
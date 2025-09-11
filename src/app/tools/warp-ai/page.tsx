'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Command, Workflow } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const warpAIData = {
  name: 'Warp AI',
  tagline: 'The first agentic development environment with AI-powered terminal',
  description: 'Warp AI revolutionizes the terminal experience with integrated AI agents including GPT-5, Claude Opus, and Gemini Pro. Ranked #1 on Terminal-bench (52%) with autonomous code generation, intelligent error analysis, and real-time collaboration for modern development teams.',
  url: 'https://warp.dev',
  category: 'AI Terminal',
  logo: '/logos/warp-ai.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          '150 AI requests/month',
          '3 indexed codebases',
          '5,000 files per codebase',
          'GPT-5, Claude, Gemini',
          'Personal Warp Drive',
          '10 Workflows',
          '3 Notebooks'
        ],
        highlighted: true
      },
      {
        name: 'Pro',
        price: '$15',
        features: [
          'Everything in Free',
          '2,500 AI requests/month',
          '40 indexed codebases',
          '10,000 files per codebase',
          'Pay-as-you-go overages',
          'Advanced features',
          '$18/mo monthly'
        ]
      },
      {
        name: 'Turbo',
        price: '$40',
        features: [
          'Everything in Pro',
          '10,000 AI requests/month',
          '20,000 files per codebase',
          'Zero Data Retention',
          'Session sharing',
          'Private email support',
          '$50/mo monthly'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Business',
        price: '$55',
        features: [
          'Everything in Turbo',
          'Team management',
          'SAML-based SSO',
          'Team-wide Zero Retention',
          'Dedicated Slack manager',
          'Centralized billing',
          '$60/mo monthly'
        ]
      },
      {
        name: 'Lightspeed',
        price: '$200',
        features: [
          '50,000 AI requests/month',
          '100,000 files per codebase',
          'Advanced agentic workflows',
          'Priority support',
          'Maximum performance',
          'Power user features',
          '$225/mo monthly'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Custom AI limits',
          'Custom codebase limits',
          'Advanced security',
          'Dedicated support',
          'Compliance features',
          'On-premise options',
          'Contact sales'
        ]
      }
    ]
  },

  features: [
    {
      icon: Bot,
      title: 'Agent Mode',
      description: 'Autonomous AI agents that generate code, edit files, and manage complex workflows without guidance.'
    },
    {
      icon: Brain,
      title: 'Top AI Models',
      description: 'Choice of GPT-5, Claude Opus 4.1, Gemini 2.5 Pro with model switching on-demand.'
    },
    {
      icon: Terminal,
      title: '#1 Terminal Bench',
      description: 'Highest scoring terminal AI at 52% on Terminal-bench, 75.8% on SWE-bench Verified.'
    },
    {
      icon: Code,
      title: 'Code Review & Edit',
      description: 'Review changes, line-edit diffs, tabbed file viewing with syntax highlighting.'
    },
    {
      icon: Workflow,
      title: 'Projects & Rules',
      description: 'Compatible with WARP.md, Agents.MD, Claude.MD, and cursor rules for context.'
    },
    {
      icon: Shield,
      title: 'Zero Data Retention',
      description: 'LLM providers delete all inputs/outputs immediately after generation. No training on your data.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$0 Free / $15 Pro',
      competitors: { 'iTerm2': 'Free (no AI)', 'Terminator': 'Free (no AI)', 'Alacritty': 'Free (no AI)', 'Fig': 'Deprecated' }
    },
    {
      feature: 'AI Requests',
      tool: '150-50,000/month',
      competitors: { 'iTerm2': 'None', 'Terminator': 'None', 'Alacritty': 'None', 'Fig': 'N/A' }
    },
    {
      feature: 'AI Models',
      tool: 'GPT-5, Claude, Gemini',
      competitors: { 'iTerm2': 'None', 'Terminator': 'None', 'Alacritty': 'None', 'Fig': 'N/A' }
    },
    {
      feature: 'Agent Mode',
      tool: 'Fully autonomous',
      competitors: { 'iTerm2': 'No', 'Terminator': 'No', 'Alacritty': 'No', 'Fig': 'Basic' }
    },
    {
      feature: 'Collaboration',
      tool: 'Session sharing',
      competitors: { 'iTerm2': 'No', 'Terminator': 'Basic', 'Alacritty': 'No', 'Fig': 'No' }
    },
    {
      feature: 'Benchmarks',
      tool: '#1 Terminal-bench',
      competitors: { 'iTerm2': 'N/A', 'Terminator': 'N/A', 'Alacritty': 'N/A', 'Fig': 'N/A' }
    }
  ],

  integrations: [
    { name: 'GitHub', category: 'Code', icon: '🐙', description: 'Deep integration' },
    { name: 'GitLab', category: 'Code', icon: '🦊', description: 'Full support' },
    { name: 'VS Code', category: 'Editor', icon: '💻', description: 'Extension' },
    { name: 'Docker', category: 'DevOps', icon: '🐳', description: 'Native support' },
    { name: 'AWS', category: 'Cloud', icon: '☁️', description: 'CLI integration' },
    { name: 'Kubernetes', category: 'DevOps', icon: '☸️', description: 'kubectl support' },
    { name: 'SSH', category: 'Remote', icon: '🔐', description: 'Full SSH' },
    { name: 'tmux', category: 'Terminal', icon: '🖥️', description: 'Compatible' }
  ],

  reviews: [
    {
      author: 'Senior Developer',
      role: 'Staff Engineer',
      company: 'Tech Unicorn',
      rating: 5,
      comment: 'Warp AI Agent Mode is game-changing. It writes entire features while I focus on architecture. The 50K requests on Lightspeed is worth every penny.',
      verified: true
    },
    {
      author: 'DevOps Lead',
      role: 'Infrastructure',
      company: 'Series B Startup',
      rating: 5,
      comment: 'Error analysis with AI context is brilliant. GPT-5 integration catches issues I would miss. Terminal-bench #1 ranking is well deserved.',
      verified: true
    },
    {
      author: 'Full Stack Dev',
      role: 'Team Lead',
      company: 'SaaS Platform',
      rating: 5,
      comment: 'Moved from iTerm2 + Copilot to Warp. Agent Mode handles complex refactors autonomously. Zero Data Retention gives peace of mind.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.warp.dev',
    changelog: 'https://warp.dev/changelog',
    pricing: 'https://warp.dev/pricing',
    blog: 'https://warp.dev/blog',
    github: 'https://github.com/warpdotdev'
  },

  faqs: [
    {
      question: 'What makes Warp AI different from regular terminals with AI plugins?',
      answer: 'Warp is the first "agentic development environment"—not just a terminal with AI bolted on. Agent Mode provides fully autonomous task completion where AI can generate code, edit files, and manage workflows independently. With #1 ranking on Terminal-bench (52%) and top-3 on SWE-bench Verified (75.8%), Warp\'s deep integration outperforms terminal + plugin combinations. You get GPT-5, Claude Opus, and Gemini Pro built-in, with intelligent context from your indexed codebases.'
    },
    {
      question: 'How does the AI request pricing work and what counts as a request?',
      answer: 'Each AI interaction counts as one request: asking questions, generating code, error analysis, or using Agent Mode. Free tier gets 150 requests/month, Pro gets 2,500, Turbo gets 10,000, and Lightspeed gets 50,000. Pay-as-you-go overages are available on paid plans. Requests reset monthly. Agent Mode may use multiple requests for complex tasks. The system shows your remaining requests and warns before overages.'
    },
    {
      question: 'What is Agent Mode and how autonomous is it really?',
      answer: 'Agent Mode is Warp\'s autonomous AI that can complete entire development tasks without constant guidance. Give it a goal like "refactor this module for better performance" or "add error handling throughout this codebase" and it will analyze, plan, generate code, edit files, run tests, and iterate until complete. It\'s genuinely autonomous—not just autocomplete. The AI understands project context through WARP.md files (compatible with Claude.MD and cursor rules).'
    },
    {
      question: 'Is Warp worth $15-200/month compared to free terminals?',
      answer: 'For developers who value productivity, absolutely. Even the Free tier with 150 AI requests transforms your workflow. Pro at $15/month with 2,500 requests pays for itself if it saves just 1 hour monthly. Power users on Lightspeed ($200) with 50,000 requests report 10x productivity gains on complex projects. Consider: built-in GPT-5/Claude/Gemini access alone would cost more separately, plus you get the #1 ranked terminal AI, zero-config setup, and real collaboration features.'
    },
    {
      question: 'How does Zero Data Retention work and is my code safe?',
      answer: 'Zero Data Retention means LLM providers (OpenAI, Anthropic, Google) contractually agree to: never train models on your data, delete all inputs/outputs immediately after generation, and not store or log your code. This is enforced at the API level and available on all plans (configurable on Pro+, enforced team-wide on Business+). Your code never leaves your machine except for AI processing, and even then it\'s immediately deleted. Warp has SOC 2 Type II certification for security.'
    },
    {
      question: 'What makes Warp better than VS Code + Copilot or Cursor?',
      answer: 'Different tools for different needs, but Warp excels at terminal-first development. While VS Code/Cursor focus on file editing, Warp optimizes the command-line workflow with AI that understands terminal context, error outputs, and system state. Agent Mode works across your entire system, not just open files. Real-time session sharing enables pair debugging. The integrated experience means no context switching between terminal and editor AI. Many developers use Warp alongside their IDE for the best of both worlds.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://warp.dev" target="__blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Warp AI</a> has redefined what a terminal can be, evolving from a simple command-line interface into the world's first agentic development environment. Ranked #1 on Terminal-bench with 52% accuracy and scoring in the top 3 on SWE-bench Verified at 75.8%, Warp proves that AI-powered terminals aren't just convenient—they're transformative. With integrated access to GPT-5, <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude Opus 4.1</Link>, and Gemini 2.5 Pro, developers can choose the best AI model for each task, from debugging complex errors to generating entire codebases through autonomous Agent Mode.
      </p>
      
      <p className="text-lg leading-relaxed">
        What sets Warp apart isn't just raw AI power—it's the thoughtful integration that makes development faster and more intuitive. Agent Mode can autonomously complete complex tasks like refactoring entire modules, implementing features from specs, or systematically adding error handling across codebases. The terminal understands context through WARP.md files (compatible with Claude.MD and <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link> rules), indexes up to 100,000 files per codebase, and provides intelligent error analysis that explains failures and suggests fixes. With Zero Data Retention ensuring your code is never used for training, session sharing for real-time collaboration, and pricing from free (150 requests) to Lightspeed ($200 for 50,000 requests), Warp caters to everyone from hobbyists to enterprise teams. For developers tired of switching between terminals and AI tools, Warp represents the future: a unified environment where AI isn't an add-on but the foundation of modern development workflow.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Warp AI?',
    segments: [
      {
        name: 'Full-Stack Developers',
        description: 'Engineers leveraging Agent Mode for autonomous coding and debugging.',
        icon: Code,
        stats: '#1 Terminal-bench'
      },
      {
        name: 'DevOps Teams',
        description: 'Infrastructure engineers using AI for complex deployments and automation.',
        icon: Cloud,
        stats: 'Kubernetes native'
      },
      {
        name: 'Startup Engineers',
        description: 'Fast-moving teams maximizing productivity with AI-powered development.',
        icon: Rocket,
        stats: '10x productivity'
      },
      {
        name: 'Enterprise Teams',
        description: 'Large organizations with Zero Data Retention and compliance needs.',
        icon: Building2,
        stats: 'SOC 2 certified'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Warp AI Unique?',
    points: [
      {
        title: 'Agentic Environment',
        description: 'First terminal with truly autonomous AI agents.',
        icon: Bot
      },
      {
        title: '#1 on Benchmarks',
        description: 'Top-ranked on Terminal-bench and SWE-bench Verified.',
        icon: Target
      },
      {
        title: 'Multi-Model Choice',
        description: 'GPT-5, Claude Opus, Gemini Pro—switch anytime.',
        icon: Brain
      },
      {
        title: 'Zero Data Retention',
        description: 'Your code is never stored or used for training.',
        icon: Shield
      },
      {
        title: 'Deep Integration',
        description: 'AI understands terminal context, not just text.',
        icon: Terminal
      }
    ]
  }
}

export default function WarpAIPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={warpAIData} />
    </>
  )
}
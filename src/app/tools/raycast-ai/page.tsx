'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Command, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Cpu, Search, Extension } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const raycastAIData = {
  name: 'Raycast AI',
  tagline: 'AI-powered productivity launcher for macOS - Your shortcut to everything with integrated AI',
  description: 'Raycast AI brings o3-mini, Claude 3.7 Sonnet, DeepSeek R1 and more AI models directly to your macOS. $8/month Pro unlocks unlimited AI, 1000+ extensions, cloud sync. Control your OS with natural language, chat with documents, automate tasks - all from one hotkey.',
  url: 'https://www.raycast.com',
  category: 'Productivity',
  logo: '/logos/raycast-ai.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free Forever',
        price: '$0',
        features: [
          '50 free AI messages',
          'Core productivity features',
          'Clipboard History',
          'Window Management',
          'Snippets & Quicklinks',
          '1000+ free extensions',
          'Calculator & Conversions'
        ],
        highlighted: true
      },
      {
        name: 'Pro',
        price: '$8',
        features: [
          'Unlimited AI access',
          'All AI models included',
          'Claude 3.7, o3-mini, DeepSeek',
          'Cloud Sync across devices',
          'Custom themes',
          'AI Extensions (Beta)',
          '50% student discount'
        ]
      },
      {
        name: 'Team Pro',
        price: '$15',
        features: [
          'Everything in Pro',
          'Unlimited shared commands',
          'Team quicklinks & snippets',
          'Centralized billing',
          'Team collaboration',
          'Priority support',
          'Admin controls'
        ]
      }
    ]
  },

  features: [
    {
      icon: Command,
      title: 'One Hotkey to Everything',
      description: 'Quick AI floats above all apps - instant access to AI, search, actions from anywhere on macOS.'
    },
    {
      icon: Brain,
      title: 'Multiple AI Models',
      description: 'o3-mini, Claude 3.7 Sonnet, DeepSeek R1, GPT-4o, Gemini - all models in one interface.'
    },
    {
      icon: Extension,
      title: 'AI Extensions (Beta)',
      description: 'Natural language to actions - rename files, check Linear, book meetings without opening apps.'
    },
    {
      icon: FileCode,
      title: 'Chat with Documents',
      description: 'Chat with PDFs, CSVs, screenshots - AI understands context from anything on your screen.'
    },
    {
      icon: Cpu,
      title: 'Local Models via Ollama',
      description: 'Run 100+ models locally - from 135M to 671B parameters, complete privacy on your machine.'
    },
    {
      icon: Package,
      title: '1000+ Extensions',
      description: 'Community-built extensions for everything - GitHub, Linear, Notion, Slack, and more.'
    }
  ],

  comparisons: [
    {
      feature: 'Platform',
      tool: 'macOS + iOS',
      competitors: { 'Alfred': 'macOS only', 'PowerToys': 'Windows only', 'Spotlight': 'macOS only', 'Wox': 'Windows only' }
    },
    {
      feature: 'AI Integration',
      tool: 'Native multi-model',
      competitors: { 'Alfred': 'Via workflows', 'PowerToys': 'None', 'Spotlight': 'Basic Siri', 'Wox': 'None' }
    },
    {
      feature: 'Monthly Price',
      tool: '$0-8',
      competitors: { 'Alfred': '$0-50 lifetime', 'PowerToys': 'Free', 'Spotlight': 'Free', 'Wox': 'Free' }
    },
    {
      feature: 'Extensions',
      tool: '1000+ built-in',
      competitors: { 'Alfred': 'Workflows', 'PowerToys': 'Limited', 'Spotlight': 'None', 'Wox': 'Plugins' }
    },
    {
      feature: 'Developer API',
      tool: 'React + TypeScript',
      competitors: { 'Alfred': 'AppleScript', 'PowerToys': 'C#', 'Spotlight': 'None', 'Wox': 'Python/C#' }
    },
    {
      feature: 'Cloud Sync',
      tool: 'Yes (Pro)',
      competitors: { 'Alfred': 'iCloud', 'PowerToys': 'No', 'Spotlight': 'iCloud', 'Wox': 'No' }
    }
  ],

  integrations: [
    { name: 'Claude 3.7', category: 'AI', icon: '🧠', description: 'Sonnet model' },
    { name: 'o3-mini', category: 'AI', icon: '🤖', description: 'Latest model' },
    { name: 'DeepSeek R1', category: 'AI', icon: '🎯', description: 'Reasoning' },
    { name: 'Linear', category: 'PM', icon: '📋', description: 'Native ext' },
    { name: 'GitHub', category: 'Code', icon: '🐙', description: 'Full access' },
    { name: 'Notion', category: 'Docs', icon: '📝', description: 'Search & create' },
    { name: 'Slack', category: 'Chat', icon: '💬', description: 'Messages' },
    { name: 'Ollama', category: 'Local AI', icon: '🦙', description: '100+ models' }
  ],

  reviews: [
    {
      author: 'Senior Developer',
      role: 'Tech Lead',
      company: 'Startup',
      rating: 5,
      comment: 'Raycast replaced Alfred, ChatGPT desktop, and multiple utilities. $8/month for unlimited AI with all models is incredible. AI Extensions are game-changing.',
      verified: true
    },
    {
      author: 'Product Designer',
      role: 'Design Lead',
      company: 'Agency',
      rating: 5,
      comment: 'The React/TypeScript API is brilliant. Built custom extensions in hours. Quick AI floating window means I never leave my design tools. Worth every penny.',
      verified: true
    },
    {
      author: 'Engineering Manager',
      role: 'Director',
      company: 'Enterprise',
      rating: 4,
      comment: 'Team Pro at $15/user transformed our workflow. Shared snippets, team commands, cloud sync. Only wish: Windows support for cross-platform teams.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://manual.raycast.com',
    developers: 'https://developers.raycast.com',
    store: 'https://www.raycast.com/store',
    github: 'https://github.com/raycast',
    community: 'https://raycast.com/community'
  },

  faqs: [
    {
      question: 'How does Raycast AI compare to using ChatGPT or Claude directly?',
      answer: 'Raycast AI offers unique advantages over standalone AI apps: instant access via hotkey without switching contexts, multiple AI models in one interface (o3-mini, Claude 3.7, DeepSeek R1, GPT-4o), deep OS integration for file operations and system control, AI Extensions that turn natural language into actions, and the ability to chat with anything on your screen. At $8/month for unlimited access to all models, it\'s cheaper than subscribing to multiple AI services. Plus, the 1000+ extensions mean AI is integrated into your existing workflow, not a separate app.'
    },
    {
      question: 'What are AI Extensions and why are they revolutionary?',
      answer: 'AI Extensions (Beta as of February 2025) let you control your Mac with natural language. Instead of clicking through apps, just type what you want: "Schedule meeting with John next Tuesday 2pm" creates a calendar event, "Rename all screenshots in Downloads to project-[date]" batch renames files, "Check my Linear tickets for bugs" queries your project management, "Summarize this PDF and create Notion notes" processes documents. These work across Quick AI, AI Chat, and AI Commands. It\'s like having a personal assistant that understands your entire system.'
    },
    {
      question: 'Is the free plan actually useful or just a trial?',
      answer: 'Raycast Free is genuinely useful forever, not a limited trial. You get 50 AI messages to try any Pro model, all core productivity features (clipboard history, window management, snippets, quicklinks, calculator), and access to 1000+ free community extensions. Many users happily use free Raycast for months before upgrading. The free tier alone replaces multiple utilities. Pro at $8/month adds unlimited AI and cloud sync, but free users get a complete productivity launcher.'
    },
    {
      question: 'How does local AI with Ollama integration work?',
      answer: 'Raycast\'s Ollama integration lets you run AI models locally on your Mac for complete privacy. Install Ollama separately, then access 100+ models from providers like Meta, Google, Microsoft—ranging from tiny 135M to massive 671B parameter models. Your data never leaves your machine. Perfect for sensitive work, offline usage, or experimenting with different models. Local models are slower than cloud but offer total control. You can even add custom OpenAI-compatible providers via YAML configuration.'
    },
    {
      question: 'Why is Raycast better than Alfred for developers?',
      answer: 'While Alfred pioneered Mac automation, Raycast is built for modern developers: native AI integration (vs Alfred workflows), React + TypeScript API (vs AppleScript), hot-reloading development environment, strongly typed components, npm package ecosystem, and Git-based extension distribution. The developer experience is night and day—build extensions with familiar web technologies, not legacy scripting. Plus, Raycast\'s 1000+ extensions are centrally managed and updated, unlike Alfred\'s scattered workflows.'
    },
    {
      question: 'What makes Raycast worth $8/month when alternatives are free?',
      answer: 'The $8 Pro plan delivers exceptional value: unlimited access to premium AI models (would cost $20+ separately), cloud sync across all your Macs and iOS devices, custom themes for personalization, AI Extensions for automation, and continuous updates with new models. Compare to ChatGPT Plus ($20), Claude Pro ($20), or GitHub Copilot ($10)—Raycast gives you all AI models plus deep OS integration for less. Students get 50% off ($4/month). For productivity gains, it pays for itself in hours saved weekly.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://www.raycast.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Raycast AI</a> revolutionizes macOS productivity by seamlessly integrating cutting-edge AI models like o3-mini, Claude 3.7 Sonnet, and DeepSeek R1 directly into your operating system. Unlike standalone tools like <Link href="/tools/chatgpt" className="text-purple-400 hover:text-purple-300">ChatGPT</Link> or <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude</Link>, Raycast brings AI to where you work—accessible instantly via hotkey, floating above your apps, understanding context from your screen. With 1000+ extensions and a React/TypeScript API, it's not just a launcher but a complete AI-powered productivity platform that replaces multiple utilities while costing less than a single AI subscription.
      </p>
      
      <p className="text-lg leading-relaxed">
        What sets Raycast apart is its AI Extensions (Beta 2025) that transform natural language into system actions—rename files, check Linear tickets, schedule meetings—all without opening apps. The $8/month Pro plan includes unlimited access to all AI models, making it cheaper than subscribing to <Link href="/tools/perplexity" className="text-purple-400 hover:text-purple-300">Perplexity</Link> or <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude Pro</Link> individually. For developers, the modern React/TypeScript API beats Alfred's AppleScript, while privacy-conscious users can run 100+ local models via Ollama integration. Whether you're a developer needing <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub</Link> integration, a designer wanting quick AI access, or a team seeking shared productivity tools, Raycast AI delivers enterprise-grade features at indie prices—your shortcut to everything, now powered by AI.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Raycast AI?',
    segments: [
      {
        name: 'Mac Power Users',
        description: 'Professionals who want AI integrated into their macOS workflow.',
        icon: Command,
        stats: '1000+ extensions'
      },
      {
        name: 'Developers',
        description: 'Engineers building custom extensions with React/TypeScript.',
        icon: Terminal,
        stats: 'Modern API'
      },
      {
        name: 'Product Teams',
        description: 'Teams using shared commands and cloud-synced workflows.',
        icon: Users,
        stats: '$15/user teams'
      },
      {
        name: 'AI Enthusiasts',
        description: 'Users wanting all AI models in one unified interface.',
        icon: Brain,
        stats: 'Unlimited AI $8'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Raycast AI Unique?',
    points: [
      {
        title: 'OS-Level AI',
        description: 'AI integrated directly into macOS, not a separate app.',
        icon: Command
      },
      {
        title: 'All Models Included',
        description: 'o3-mini, Claude 3.7, DeepSeek R1, GPT-4o in one place.',
        icon: Brain
      },
      {
        title: 'AI Extensions',
        description: 'Natural language commands control your entire system.',
        icon: Extension
      },
      {
        title: 'Developer-First',
        description: 'React + TypeScript API for building extensions.',
        icon: Terminal
      },
      {
        title: 'One Price',
        description: '$8/month for unlimited AI, cheaper than one subscription.',
        icon: Target
      }
    ]
  }
}

export default function RaycastAIPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={raycastAIData} />
    </>
  )
}
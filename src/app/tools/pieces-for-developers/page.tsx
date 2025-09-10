'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Lock, Clock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const piecesData = {
  name: 'Pieces for Developers',
  tagline: 'AI-powered code snippet manager with 9+ months of memory',
  description: 'Pieces revolutionizes developer productivity with Long-Term Memory (LTM) that remembers everything for 9+ months. Complete privacy with on-device AI processing, 100% free for individuals.',
  url: 'https://pieces.app',
  category: 'AI Developer Tool',
  logo: '/logos/pieces.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Individual',
        price: '$0',
        features: [
          'Free forever',
          '9+ months memory',
          'All LLMs included',
          'Local AI processing',
          'VS Code & JetBrains',
          'Chrome extension',
          'Email support'
        ],
        highlighted: true
      },
      {
        name: 'Pro',
        price: 'Coming Soon',
        features: [
          'Everything in Individual',
          'Extended memory',
          'Priority features',
          'Advanced analytics',
          'Priority support',
          'Early adopter pricing',
          'Beta features access'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Teams/Enterprise',
        price: 'Contact Sales',
        features: [
          'Shared team context',
          'Custom LLM support',
          'Third-party LLMs',
          'Priority phone support',
          'Admin controls',
          'SSO integration',
          'Custom deployment'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Clock,
      title: 'Long-Term Memory (LTM)',
      description: '9+ months of contextual memory across all your work. Remember everything, search by time, never lose context.'
    },
    {
      icon: Lock,
      title: 'On-Device AI Processing',
      description: 'All AI runs locally on your machine. Fast, secure, and air-gapped from the cloud. Complete privacy control.'
    },
    {
      icon: Brain,
      title: 'Multi-LLM Support',
      description: 'Choose from GPT-4, Gemini, or local models like Llama 3, Mistral, Qwen. Switch seamlessly between cloud and local.'
    },
    {
      icon: Sparkles,
      title: 'Automatic Enrichment',
      description: 'AI automatically adds titles, tags, descriptions, and related links to every saved snippet. Zero manual work.'
    },
    {
      icon: FileCode,
      title: 'Live Context Capture',
      description: 'Real-time contextual information across all applications. Works across browsers, IDEs, and collaboration tools.'
    },
    {
      icon: Package,
      title: '440+ Languages',
      description: 'Support for 440+ programming languages with intelligent syntax highlighting and context understanding.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$0 Free',
      competitors: { 'GitHub Copilot': '$10', 'Cursor': '$20', 'Cacher': '$6-8' }
    },
    {
      feature: 'Memory Duration',
      tool: '9+ months',
      competitors: { 'GitHub Copilot': 'Session only', 'Cursor': 'Project only', 'Cacher': 'None' }
    },
    {
      feature: 'Local AI',
      tool: 'Full support',
      competitors: { 'GitHub Copilot': 'No', 'Cursor': 'Limited', 'Cacher': 'No' }
    },
    {
      feature: 'Privacy',
      tool: '100% local',
      competitors: { 'GitHub Copilot': 'Cloud only', 'Cursor': 'Mixed', 'Cacher': 'Cloud' }
    },
    {
      feature: 'Snippet Management',
      tool: 'AI-enhanced',
      competitors: { 'GitHub Copilot': 'No', 'Cursor': 'No', 'Cacher': 'Basic' }
    },
    {
      feature: 'Cross-Platform',
      tool: 'All platforms',
      competitors: { 'GitHub Copilot': 'IDE only', 'Cursor': 'VS Code', 'Cacher': 'Limited' }
    }
  ],

  integrations: [
    { name: 'VS Code', category: 'IDE', icon: '📝', description: 'Enhanced CodeLens' },
    { name: 'JetBrains', category: 'IDE', icon: '🧩', description: '2024.2 support' },
    { name: 'Neovim', category: 'Editor', icon: '⌨️', description: 'Plugin available' },
    { name: 'Chrome', category: 'Browser', icon: '🌐', description: 'Extension' },
    { name: 'GitHub', category: 'Platform', icon: '🐙', description: 'Gist integration' },
    { name: 'GPT-4', category: 'AI', icon: '🤖', description: 'OpenAI models' },
    { name: 'Llama 3', category: 'Local AI', icon: '🦙', description: 'Offline models' },
    { name: 'Ollama', category: 'Local', icon: '🔮', description: 'LLM runtime' }
  ],

  reviews: [
    {
      author: 'Senior Developer',
      role: 'Full-Stack Engineer',
      company: 'Tech Startup',
      rating: 5,
      comment: 'Saves me 10+ hours per week. The long-term memory is game-changing - I can find code I wrote months ago instantly.',
      verified: true
    },
    {
      author: 'Privacy Advocate',
      role: 'Security Engineer',
      company: 'Enterprise',
      rating: 5,
      comment: 'Finally, an AI tool that respects privacy! Everything runs locally, no data leaves my machine. Perfect for sensitive projects.',
      verified: true
    },
    {
      author: 'Product Hunt User',
      role: 'Developer',
      company: 'Various',
      rating: 5,
      comment: 'Product of the Day winner with 900+ upvotes. The combination of snippet management and AI assistance is brilliant.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.pieces.app',
    github: 'https://github.com/pieces-app',
    discord: 'https://discord.gg/pieces',
    twitter: 'https://twitter.com/getpieces',
    support: 'https://support.pieces.app'
  },

  faqs: [
    {
      question: 'Is Pieces really free forever?',
      answer: 'Yes! The Individual plan is 100% free forever with no credit card required. You get 9+ months of memory, all LLMs included, and full functionality. Enterprise teams can contact sales for custom pricing with shared context features.'
    },
    {
      question: 'How does Long-Term Memory (LTM) work?',
      answer: 'Pieces\' LTM captures and remembers everything you work on for 9+ months across all applications. It uses AI to understand context, allowing you to search using natural language and time-based queries like "that React component from last Tuesday".'
    },
    {
      question: 'Can Pieces work completely offline?',
      answer: 'Absolutely! Pieces is offline-first with all critical features working without internet. AI processing runs locally on your device using models like Llama 3, Mistral, and Qwen. Cloud features are optional and nothing is sent without your permission.'
    },
    {
      question: 'What makes Pieces different from GitHub Copilot?',
      answer: 'While Copilot focuses on code completion for $10/month, Pieces offers free comprehensive features including 9+ months memory, snippet management, local AI processing, and cross-platform support. Pieces remembers your entire development context, not just the current session.'
    },
    {
      question: 'Which IDEs and tools does Pieces support?',
      answer: 'Pieces supports VS Code, all JetBrains IDEs (2024.2), Neovim (plugin launched August 2024), Chrome browser extension, and desktop apps for Windows, macOS, and Linux. It works across 440+ programming languages.'
    },
    {
      question: 'How secure is my code with Pieces?',
      answer: 'Extremely secure. Pieces uses on-device processing with air-gapped architecture. Your code never leaves your machine unless you explicitly enable cloud features. All AI models can run locally, ensuring complete privacy for sensitive projects.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://pieces.app" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Pieces for Developers</a> revolutionizes developer productivity with Long-Term Memory (LTM) that remembers everything for 9+ months while maintaining complete privacy through on-device AI processing. Unlike <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link>'s $10/month cloud-only approach or <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link>'s $20/month desktop limitation, Pieces offers all features completely free with support for <a href="https://ollama.ai" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Ollama</a>, <a href="https://ai.meta.com/llama/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Llama 3</a>, and other local models. Backed by <a href="https://flat.capital" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Flat Capital</a> and recognized as Product Hunt's "Product of the Day" with 900+ upvotes, Pieces saves developers "10+ hours per week" through intelligent context capture across <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">VS Code</a>, <a href="https://www.jetbrains.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">JetBrains IDEs</a>, and browsers.
      </p>
      
      <p className="text-lg leading-relaxed">
        The April 2025 launch of LTM-2.5 with Nano-Models represents a breakthrough in AI-powered development tools, offering capabilities that <Link href="/tools/codeium-editor" className="text-purple-400 hover:text-purple-300">Codeium</Link> and traditional snippet managers like Dash or SnippetsLab can't match. With automatic enrichment adding titles, tags, and descriptions to 440+ supported languages, plus seamless switching between <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GPT-4</a>, <a href="https://deepmind.google/technologies/gemini/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Gemini</a>, and local models, Pieces delivers enterprise-grade features without enterprise pricing. While <Link href="/tools/continue-dev" className="text-purple-400 hover:text-purple-300">Continue.dev</Link> offers open-source flexibility and <Link href="/tools/windsurf" className="text-purple-400 hover:text-purple-300">Windsurf</Link> provides AI Flows, only Pieces combines long-term memory, complete privacy, and zero cost—making it the definitive choice for developers who value both productivity and data sovereignty.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Pieces?',
    segments: [
      {
        name: 'Privacy-Conscious Developers',
        description: 'Engineers working on sensitive projects leverage 100% local AI processing for complete data control.',
        icon: Lock,
        stats: '100% private'
      },
      {
        name: 'Productivity-Focused Teams',
        description: 'Developers save 10+ hours weekly through intelligent context capture and 9+ months memory.',
        icon: Rocket,
        stats: '10+ hours saved'
      },
      {
        name: 'Multi-Tool Developers',
        description: 'Engineers using VS Code, JetBrains, browsers benefit from unified cross-platform memory.',
        icon: Package,
        stats: '440+ languages'
      },
      {
        name: 'Budget-Conscious Individuals',
        description: 'Solo developers get enterprise features completely free—no credit card required ever.',
        icon: Code,
        stats: '$0 forever'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Pieces Unique?',
    points: [
      {
        title: '9+ Months Memory',
        description: 'Industry-first Long-Term Memory remembers everything across your entire development history.',
        icon: Clock
      },
      {
        title: '100% Free Forever',
        description: 'All features including AI, LLMs, and memory completely free for individual developers.',
        icon: Sparkles
      },
      {
        title: 'Complete Privacy',
        description: 'On-device processing with air-gapped architecture—your code never leaves your machine.',
        icon: Lock
      },
      {
        title: 'Hybrid AI Architecture',
        description: 'Seamlessly switch between cloud (GPT-4, Gemini) and local models (Llama 3, Mistral).',
        icon: Brain
      },
      {
        title: 'Automatic Enrichment',
        description: 'AI adds context, tags, and descriptions automatically—zero manual snippet management.',
        icon: Zap
      }
    ]
  }
}

export default function PiecesForDevelopersPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={piecesData} />
    </>
  )
}
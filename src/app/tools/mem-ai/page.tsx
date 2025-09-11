'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, BookOpen, Search } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const memAIData = {
  name: 'Mem AI',
  tagline: 'Self-organizing AI knowledge base that builds your second brain automatically',
  description: 'Mem AI revolutionizes note-taking with GPT-4 powered self-organization, Smart Search, and context-aware chat. Version 2.0 brings enhanced AI that knows your entire knowledge vault. From $0 free tier to $15/month for teams with unlimited AI features.',
  url: 'https://mem.ai',
  category: 'Knowledge Management',
  logo: '/logos/mem-ai.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          'Personal use unlimited',
          'Basic note-taking',
          'AI-powered organization',
          'Smart Search',
          'Limited AI features',
          'Web & mobile apps',
          'Basic integrations'
        ],
        highlighted: true
      },
      {
        name: 'Mem X',
        price: '$10',
        features: [
          'Everything in Free',
          'Unlimited AI features',
          'GPT-4 integration',
          'Smart Write & Edit',
          'Advanced collections',
          'Calendar integration',
          'Save 20% annually'
        ]
      },
      {
        name: 'Mem X Teams',
        price: '$15',
        features: [
          'Everything in Mem X',
          'Per user pricing',
          'Shared templates',
          'Team collaboration',
          'Collective intelligence',
          'Admin controls',
          'Priority support'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Everything in Teams',
          'Custom deployment',
          'Advanced security',
          'SSO integration',
          'Dedicated support',
          'Custom AI training',
          'Contact sales'
        ]
      },
      {
        name: 'Education',
        price: 'Discount',
        features: [
          'Special pricing',
          'Students & academics',
          'Non-profit orgs',
          'All Mem X features',
          'Educational resources',
          'Bulk licensing',
          'Apply for discount'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Brain,
      title: 'Self-Organizing AI',
      description: 'AI automatically tags, links, and organizes notes. Build a second brain effortlessly.'
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'AI-powered search navigates your knowledge base to instantly find exact information.'
    },
    {
      icon: Sparkles,
      title: 'Smart Write & Edit',
      description: 'GPT-4 generates, edits, and summarizes content based on your personal knowledge base.'
    },
    {
      icon: Bot,
      title: 'Context-Aware Chat',
      description: 'Mem 2.0 chat knows your entire vault, not generic web data. True personalized AI.'
    },
    {
      icon: Database,
      title: 'Collections',
      description: 'Multiple collection options: projects, research, recipes, and custom organization systems.'
    },
    {
      icon: Globe,
      title: 'Cross-Platform',
      description: 'Mac, Windows, Web, iOS with offline mode. Seamless sync across all devices.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$0 Free / $10 Pro',
      competitors: { 'Notion AI': '$20', 'Obsidian': '$8', 'Roam': '$15', 'Reflect': '$15' }
    },
    {
      feature: 'AI Integration',
      tool: 'GPT-4 built-in',
      competitors: { 'Notion AI': 'Included', 'Obsidian': 'Plugins', 'Roam': 'Limited', 'Reflect': 'GPT-4' }
    },
    {
      feature: 'Self-Organization',
      tool: 'Fully automatic',
      competitors: { 'Notion AI': 'Manual', 'Obsidian': 'Manual', 'Roam': 'Semi-auto', 'Reflect': 'Basic' }
    },
    {
      feature: 'Learning Curve',
      tool: 'Minimal',
      competitors: { 'Notion AI': 'Moderate', 'Obsidian': 'Steep', 'Roam': 'Very steep', 'Reflect': 'Low' }
    },
    {
      feature: 'Offline Mode',
      tool: 'Yes',
      competitors: { 'Notion AI': 'Limited', 'Obsidian': 'Full', 'Roam': 'No', 'Reflect': 'Yes' }
    },
    {
      feature: 'Team Features',
      tool: '$15/user',
      competitors: { 'Notion AI': '$20/user', 'Obsidian': '$50/user', 'Roam': 'No teams', 'Reflect': 'No teams' }
    }
  ],

  integrations: [
    { name: 'Notion', category: 'Import', icon: '📝', description: 'Import notes' },
    { name: 'Evernote', category: 'Import', icon: '🐘', description: 'Migration tool' },
    { name: 'Markdown', category: 'Format', icon: '📄', description: 'Full support' },
    { name: 'Calendar', category: 'Time', icon: '📅', description: 'Sync events' },
    { name: 'Email', category: 'Capture', icon: '📧', description: 'Forward to Mem' },
    { name: 'SMS', category: 'Capture', icon: '💬', description: 'Text to save' },
    { name: 'Twitter', category: 'Social', icon: '🐦', description: 'Save tweets' },
    { name: 'Chrome', category: 'Browser', icon: '🌐', description: 'Web clipper' }
  ],

  reviews: [
    {
      author: 'Knowledge Worker',
      role: 'Research Lead',
      company: 'Think Tank',
      rating: 5,
      comment: 'Mem 2.0 is revolutionary. The AI understands my entire research vault. Self-organization saves hours weekly. Worth every penny of the $10.',
      verified: true
    },
    {
      author: 'Product Manager',
      role: 'Director',
      company: 'Tech Startup',
      rating: 5,
      comment: 'Switched from Notion. Mem\'s automatic organization is magic. Smart Search finds everything instantly. Team plan at $15 beats competitors.',
      verified: true
    },
    {
      author: 'Writer',
      role: 'Author',
      company: 'Freelance',
      rating: 4,
      comment: 'GPT-4 integration with my personal knowledge is game-changing. Smart Write knows my style. Wish it had more formatting options.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://support.mem.ai',
    blog: 'https://get.mem.ai/blog',
    newsletter: 'https://newsletter.mem.ai',
    community: 'https://discord.gg/mem',
    pricing: 'https://mem.ai/pricing'
  },

  faqs: [
    {
      question: 'What makes Mem AI different from Notion, Obsidian, or Roam?',
      answer: 'Mem AI\'s killer feature is true self-organization—it automatically tags, links, and structures your notes without any manual effort. Unlike Notion (manual organization), Obsidian (folder/tag management), or Roam (complex bi-directional linking), Mem uses AI to build connections for you. The GPT-4 integration isn\'t just for writing—it understands your entire knowledge base, making it a genuine "second brain" that thinks with you, not just stores information.'
    },
    {
      question: 'How does Mem 2.0 improve on the original version?',
      answer: 'Mem 2.0 (spring 2025) brought game-changing improvements: The chat interface now rivals leading LLMs but with personal context—it knows YOUR vault, not generic web data. Ask it to outline ideas, summarize meetings, or build on half-finished thoughts, and it taps your personal archive. The backend was completely restructured for better performance. Collections got smarter, search became more intuitive, and the AI now remembers chat history to compound knowledge over time.'
    },
    {
      question: 'Is the free tier actually useful or just a trial?',
      answer: 'The free tier is genuinely useful for personal use—unlimited notes, basic AI organization, Smart Search, and cross-platform apps. You can build a complete knowledge base without paying. The main limitations are AI features (Smart Write/Edit) and advanced collections. For students, researchers, or anyone building a personal knowledge system, the free tier is substantial. Upgrade to Mem X ($10) when you need unlimited AI assistance.'
    },
    {
      question: 'How does the self-organizing feature actually work?',
      answer: 'Mem\'s AI analyzes your notes in real-time, identifying topics, entities, and relationships automatically. When you write "Meeting with Sarah about Q4 marketing," it recognizes Sarah as a person, Q4 as a time period, and marketing as a topic—creating invisible connections. Over time, it builds a knowledge graph you never had to construct. Search for "Sarah" and find all related notes; ask about "Q4 plans" and see connected ideas. It\'s like having an AI librarian organizing everything as you write.'
    },
    {
      question: 'Is Mem X Teams worth $15/user compared to alternatives?',
      answer: 'For collaborative knowledge work, absolutely. At $15/user, you get shared templates, collective intelligence (AI learns from team knowledge), and true collaboration features. Compare to Notion Business ($20/user with AI), Obsidian Publish ($50/user for teams), or Roam (no team features). The "collective intelligence" aspect is unique—your team\'s AI gets smarter from everyone\'s contributions. For teams drowning in information silos, Mem X Teams at $15 is a bargain.'
    },
    {
      question: 'What about privacy and data security with AI features?',
      answer: 'Mem takes privacy seriously: your notes are encrypted in transit and at rest, AI processing happens securely with OpenAI\'s enterprise APIs (no training on your data), and you maintain full data ownership with export options. The self-hosting option isn\'t available like Obsidian, but Mem is SOC 2 Type II compliant for enterprise security. For highly sensitive data, consider the Enterprise plan with custom deployment options.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://mem.ai" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Mem AI</a> has cracked the code on knowledge management by eliminating the organizational overhead that plagues tools like <Link href="/tools/notion-ai" className="text-purple-400 hover:text-purple-300">Notion</Link> and Obsidian. With GPT-4 powered self-organization, your notes automatically connect, tag, and structure themselves—building a genuine second brain that grows smarter with every input. The spring 2025 release of Mem 2.0 transformed the platform with context-aware chat that knows your entire knowledge vault, not generic web data, making it feel like having an AI assistant with perfect memory of everything you've ever written.
      </p>
      
      <p className="text-lg leading-relaxed">
        At just $10/month for Mem X with unlimited AI features, Mem delivers exceptional value compared to <Link href="/tools/notion-ai" className="text-purple-400 hover:text-purple-300">Notion AI</Link> ($20), Roam Research ($15), or Reflect ($15). The free tier isn't a trial—it's a fully functional knowledge base with AI organization and Smart Search, perfect for students and personal use. Teams at $15/user get collective intelligence where AI learns from everyone's contributions, creating organizational memory that compounds over time. Unlike <Link href="/tools/chatgpt" className="text-purple-400 hover:text-purple-300">ChatGPT</Link> or <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude</Link> which start fresh each session, Mem AI remembers everything, making it the only AI that truly becomes an extension of your thinking. For knowledge workers drowning in information, Mem doesn't just store your thoughts—it thinks alongside you, surfacing connections you'd never find manually.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Mem AI?',
    segments: [
      {
        name: 'Researchers',
        description: 'Academics and analysts building interconnected knowledge bases automatically.',
        icon: GraduationCap,
        stats: 'Self-organizing'
      },
      {
        name: 'Product Teams',
        description: 'PMs using collective intelligence for specs, meetings, and documentation.',
        icon: Target,
        stats: '$15/user teams'
      },
      {
        name: 'Writers & Creators',
        description: 'Content creators leveraging AI that knows their entire body of work.',
        icon: FileCode,
        stats: 'GPT-4 powered'
      },
      {
        name: 'Students',
        description: 'Learners building study systems with free tier and education discounts.',
        icon: BookOpen,
        stats: 'Free tier robust'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Mem AI Unique?',
    points: [
      {
        title: 'True Self-Organization',
        description: 'AI automatically tags, links, and structures without manual effort.',
        icon: Brain
      },
      {
        title: 'Personal Context AI',
        description: 'GPT-4 that knows YOUR knowledge, not generic web data.',
        icon: Bot
      },
      {
        title: 'Zero Learning Curve',
        description: 'Just write. AI handles organization, search, and connections.',
        icon: Zap
      },
      {
        title: 'Collective Intelligence',
        description: 'Teams build shared AI that learns from everyone\'s knowledge.',
        icon: Users
      },
      {
        title: 'Memory Persistence',
        description: 'Chat remembers history, compounding knowledge over time.',
        icon: Database
      }
    ]
  }
}

export default function MemAIPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={memAIData} />
    </>
  )
}
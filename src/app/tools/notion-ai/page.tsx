'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, BookOpen, MessageSquare } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const notionAIData = {
  name: 'Notion AI',
  tagline: 'AI-powered workspace for docs, wikis, and projects with integrated intelligence',
  description: 'Notion AI transforms your workspace with Q&A across all content, AI writing assistance, database autofill, and smart integrations. Now included in Business plans with meeting notes, enterprise search, and research mode.',
  url: 'https://notion.so',
  category: 'Productivity Workspace',
  logo: '/logos/notion-ai.svg',
  
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
          'Basic blocks & pages',
          'Share with 10 guests',
          'Basic integrations',
          '7-day page history',
          'Limited AI trial (20 uses)',
          'Community support'
        ]
      },
      {
        name: 'Plus',
        price: '$10',
        features: [
          'Everything in Free',
          'Unlimited blocks',
          'Unlimited file uploads',
          'Unlimited guests',
          '30-day page history',
          'Limited AI trial',
          '$8/mo annually'
        ]
      },
      {
        name: 'Business',
        price: '$20',
        features: [
          'Everything in Plus',
          'Full Notion AI included',
          'SAML SSO',
          'Private teamspaces',
          'Advanced permissions',
          'AI meeting notes (Beta)',
          'Enterprise search (Beta)'
        ],
        highlighted: true
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Everything in Business',
          'User provisioning (SCIM)',
          'Advanced security',
          'Audit logs',
          'Customer success manager',
          'Zero AI data retention',
          'Contact sales'
        ]
      },
      {
        name: 'AI Legacy Add-on',
        price: '+$10/user',
        features: [
          'For pre-May 2025 users',
          'Available on Free/Plus',
          'Full AI features',
          'Grandfathered pricing',
          'Cannot re-add if removed',
          'Not for new users',
          'Legacy support only'
        ],
        highlighted: false
      }
    ]
  },

  features: [
    {
      icon: MessageSquare,
      title: 'Q&A Workspace Search',
      description: 'Ask questions about any content in your workspace. AI finds and synthesizes answers instantly.'
    },
    {
      icon: Sparkles,
      title: 'AI Writer & Editor',
      description: 'Generate content, rewrite, summarize, translate. Like having an editor available 24/7.'
    },
    {
      icon: Database,
      title: 'Database Autofill',
      description: 'AI properties that auto-populate fields, generate summaries, and extract keywords from content.'
    },
    {
      icon: Users,
      title: 'AI Meeting Notes',
      description: 'Beta: Transcribe meetings, generate summaries, and create action items automatically.'
    },
    {
      icon: Globe,
      title: 'Enterprise Search',
      description: 'Beta: Search across Notion, Slack, Teams, GitHub, and connected tools in one place.'
    },
    {
      icon: BookOpen,
      title: 'Research Mode',
      description: 'Beta: Web integration for real-time research with citations and fact-checking.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$20 (AI included)',
      competitors: { 'Confluence': '$6.05', 'Monday': '$12', 'ClickUp': '$9', 'Coda': '$12' }
    },
    {
      feature: 'AI Features',
      tool: 'Fully integrated',
      competitors: { 'Confluence': 'Limited', 'Monday': 'Add-on', 'ClickUp': 'ClickUp Brain', 'Coda': 'Coda AI' }
    },
    {
      feature: 'Workspace Search',
      tool: 'AI Q&A',
      competitors: { 'Confluence': 'Basic', 'Monday': 'Standard', 'ClickUp': 'Good', 'Coda': 'Good' }
    },
    {
      feature: 'Database AI',
      tool: 'Autofill & Props',
      competitors: { 'Confluence': 'No', 'Monday': 'Basic', 'ClickUp': 'Limited', 'Coda': 'Yes' }
    },
    {
      feature: 'Meeting Notes',
      tool: 'AI transcription',
      competitors: { 'Confluence': 'No', 'Monday': 'No', 'ClickUp': 'No', 'Coda': 'No' }
    },
    {
      feature: 'Knowledge Base',
      tool: 'Excellent',
      competitors: { 'Confluence': 'Excellent', 'Monday': 'Basic', 'ClickUp': 'Good', 'Coda': 'Good' }
    }
  ],

  integrations: [
    { name: 'Slack', category: 'Chat', icon: '💬', description: 'Connected search' },
    { name: 'GitHub', category: 'Code', icon: '🐙', description: 'Code context' },
    { name: 'Google Drive', category: 'Storage', icon: '📁', description: 'File sync' },
    { name: 'Microsoft Teams', category: 'Chat', icon: '👥', description: 'Integration' },
    { name: 'Figma', category: 'Design', icon: '🎨', description: 'Embeds' },
    { name: 'Jira', category: 'PM', icon: '🎯', description: 'Sync issues' },
    { name: 'Zapier', category: 'Automation', icon: '⚡', description: '2000+ apps' },
    { name: 'Calendar', category: 'Time', icon: '📅', description: 'Notion Calendar' }
  ],

  reviews: [
    {
      author: 'Product Manager',
      role: 'Team Lead',
      company: 'Tech Startup',
      rating: 5,
      comment: 'AI Q&A across our entire knowledge base is incredible. The $20 Business plan with full AI is amazing value.',
      verified: true
    },
    {
      author: 'Engineering Manager',
      role: 'Director',
      company: 'SaaS Company',
      rating: 5,
      comment: 'Database autofill saves hours weekly. AI meeting notes beta is already transforming how we document decisions.',
      verified: true
    },
    {
      author: 'Content Team Lead',
      role: 'Marketing',
      company: 'Agency',
      rating: 4,
      comment: 'AI writer learns our style. Enterprise search across Slack and GitHub is powerful. Wish AI was in Plus tier.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://notion.so/help',
    templates: 'https://notion.so/templates',
    api: 'https://developers.notion.com',
    pricing: 'https://notion.so/pricing',
    blog: 'https://notion.so/blog'
  },

  faqs: [
    {
      question: 'What changed with Notion AI pricing in 2025?',
      answer: 'Major change on May 13, 2025: Notion AI is no longer available as a $10 add-on for new users. It\'s now included in Business ($20) and Enterprise plans only. Existing users who had the AI add-on before May 2025 keep it at the legacy price, but if removed, they must upgrade to Business to get AI back. This shift positions AI as a core business feature rather than an optional extra.'
    },
    {
      question: 'How does Notion AI Q&A work across workspaces?',
      answer: 'Notion AI can search and answer questions about any content in your workspace—docs, databases, projects. Ask "What did we decide about X?" or "Summarize project Y status" and it finds relevant information across all pages you have access to. Unlike basic search, it synthesizes information from multiple sources and provides contextual answers, acting like an intelligent assistant who knows your entire workspace.'
    },
    {
      question: 'What are AI database properties and autofill?',
      answer: 'AI properties are smart database fields that auto-populate based on content. Examples: AI Summary (condenses long text), AI Keywords (extracts tags), AI Translation (converts languages), and custom autofill that generates content based on other fields. For project management, AI can auto-generate task lists, fill missing data, or create status summaries—turning databases into intelligent, self-updating systems.'
    },
    {
      question: 'Is the Business plan worth $20/month for AI?',
      answer: 'For teams, absolutely. You get unlimited AI usage (vs 20 responses in Free), plus exclusive features: AI meeting notes transcription, enterprise search across connected tools (Slack, GitHub), private teamspaces, SAML SSO, and advanced permissions. Compared to buying Notion Plus ($10) + separate AI tools, the Business plan offers better value with integrated features that work seamlessly together.'
    },
    {
      question: 'What are the new beta features (meeting notes, enterprise search)?',
      answer: 'AI Meeting Notes (Beta): Automatically transcribes meetings, generates summaries, and creates action items—like having a smart note-taker. Enterprise Search (Beta): Search across Notion, Slack, Teams, GitHub, and other connected tools from one place. Research Mode (Beta): Integrates web search with citations for real-time fact-checking. These features are Business/Enterprise exclusive and represent Notion\'s evolution into a comprehensive AI workspace.'
    },
    {
      question: 'How does Notion AI compare to other workspace AI tools?',
      answer: 'Notion AI excels at integrated intelligence across docs, databases, and projects. Unlike Confluence (limited AI), Monday.com (AI add-on), or ClickUp Brain (separate feature), Notion AI is deeply integrated throughout. It\'s more comprehensive than single-purpose tools: better than Grammarly for writing (contextual to your workspace), superior to standalone meeting tools (integrated with your projects), and more powerful than basic database tools (intelligent autofill). The $20 Business plan is competitive considering the breadth of AI features included.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://notion.so" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Notion AI</a> has evolved from an add-on to the core of Notion's workspace platform, fundamentally changing how teams work with documents, databases, and knowledge management. With the May 2025 pricing restructure, AI features are now included in Business plans ($20/user), providing unlimited access to Q&A across your entire workspace, AI writing assistance that learns your style, and intelligent database autofill that turns static tables into dynamic, self-updating systems. Unlike standalone tools like <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude</Link> or <Link href="/tools/chatgpt" className="text-purple-400 hover:text-purple-300">ChatGPT</Link>, Notion AI understands your specific workspace context, making it invaluable for teams who've built their knowledge base in Notion.
      </p>
      
      <p className="text-lg leading-relaxed">
        The platform's latest beta features showcase its ambition to become the ultimate AI-powered workspace. AI Meeting Notes automatically transcribes and summarizes discussions with action items, while Enterprise Search unifies queries across Notion, <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Slack</a>, <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitHub</a>, and Microsoft Teams—eliminating tool-switching. Research Mode adds web integration with citations, competing directly with <Link href="/tools/perplexity" className="text-purple-400 hover:text-purple-300">Perplexity</Link> for research tasks. While competitors like <a href="https://www.atlassian.com/software/confluence" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Confluence</a> offer basic AI and <Link href="/tools/linear" className="text-purple-400 hover:text-purple-300">Linear</Link> excels at project management, Notion AI's deep integration across documents, databases, and now external tools makes it the most comprehensive AI workspace solution. For teams already using Notion, the Business plan at $20/user delivers exceptional value—essentially getting an AI assistant, meeting transcriber, and enterprise search engine included in your workspace platform.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Notion AI?',
    segments: [
      {
        name: 'Product Teams',
        description: 'PMs using AI for PRDs, meeting notes, and automated project tracking.',
        icon: Target,
        stats: 'AI meeting notes'
      },
      {
        name: 'Knowledge Workers',
        description: 'Teams building wikis and docs with AI Q&A for instant answers.',
        icon: BookOpen,
        stats: 'Q&A search'
      },
      {
        name: 'Startups',
        description: 'Small teams getting enterprise features at affordable pricing.',
        icon: Rocket,
        stats: '$20/user value'
      },
      {
        name: 'Content Teams',
        description: 'Writers and marketers using AI writing and research capabilities.',
        icon: FileCode,
        stats: 'AI writer 24/7'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Notion AI Unique?',
    points: [
      {
        title: 'Workspace Context',
        description: 'AI understands your specific docs, projects, and databases.',
        icon: Brain
      },
      {
        title: 'Integrated Intelligence',
        description: 'AI built into workspace, not bolted on as separate tool.',
        icon: Sparkles
      },
      {
        title: 'Database Autofill',
        description: 'Smart properties that auto-populate and update dynamically.',
        icon: Database
      },
      {
        title: 'Cross-Tool Search',
        description: 'Enterprise search across Slack, GitHub, Teams in one place.',
        icon: Globe
      },
      {
        title: 'Included in Business',
        description: 'Full AI features at $20/user—no separate subscription.',
        icon: Target
      }
    ]
  }
}

export default function NotionAIPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={notionAIData} />
    </>
  )
}
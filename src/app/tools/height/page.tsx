'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { AlertTriangle, Bot, Brain, Clock, Users, Package, Database, Cloud, FileText, Building2, Briefcase, Target, Calendar, ListChecks, TrendingDown, XCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const heightData = {
  name: 'Height',
  tagline: '⚠️ SHUTTING DOWN SEPT 24, 2025 - AI-autonomous project management platform',
  description: 'Height was an autonomous project management tool with AI copilot for bug triage, backlog pruning, and spec updates. After 7 years, founder Michael Villar announced shutdown on September 24, 2025. Users must export data before service ends. Previously offered AI-driven workflows and collaboration.',
  url: 'https://height.app',
  category: 'Productivity',
  logo: '/logos/height.svg',
  
  shutdownNotice: {
    isShuttingDown: true,
    shutdownDate: 'September 24, 2025',
    message: 'Height is permanently shutting down on September 24, 2025. The service will no longer be available after this date. Users should export their data immediately.',
    exportUrl: 'https://height.app/export'
  },
  
  pricing: {
    type: 'subscription' as const,
    startingPrice: 'SERVICE ENDING',
    hasFreeTier: false,
    plans: [
      {
        name: '⚠️ SERVICE ENDING',
        price: 'N/A',
        features: [
          'Shutting down Sept 24, 2025',
          'No new subscriptions',
          'Export your data now',
          'Service will be discontinued',
          'Find alternative tools below',
          'Thank you for 7 years'
        ],
        highlighted: true
      },
      {
        name: 'Previous Basic',
        price: 'Was $6.50/user',
        features: [
          'NO LONGER AVAILABLE',
          'Unlimited members',
          'Kanban boards',
          'Spreadsheet views',
          'Forms & chat',
          'Basic reporting'
        ]
      },
      {
        name: 'Previous Core',
        price: 'Was $12/user',
        features: [
          'NO LONGER AVAILABLE',
          'Everything in Basic',
          'AI copilot features',
          'Gantt charts',
          'Custom fields',
          'Advanced workflows'
        ]
      }
    ]
  },

  features: [
    {
      icon: XCircle,
      title: 'Service Ending Sept 24, 2025',
      description: 'Height is permanently shutting down. Export your data before September 24, 2025.'
    },
    {
      icon: AlertTriangle,
      title: 'Data Export Required',
      description: 'Users must export all project data before shutdown. Visit height.app/export.'
    },
    {
      icon: TrendingDown,
      title: 'Was AI-Autonomous PM',
      description: 'Previously offered AI copilot for bug triage, backlog pruning, and spec updates.'
    },
    {
      icon: Users,
      title: '7 Years of Service',
      description: 'Founded by Michael Villar, served thousands of teams from 2018-2025.'
    },
    {
      icon: Package,
      title: 'Migration Needed',
      description: 'Consider Linear, Notion, or ClickUp as alternative project management tools.'
    },
    {
      icon: Clock,
      title: 'Limited Time Remaining',
      description: 'Act quickly to preserve your data and transition to a new platform.'
    }
  ],

  comparisons: [
    {
      feature: 'Status',
      tool: '❌ SHUTTING DOWN',
      competitors: { 'Linear': '✅ Active', 'Notion': '✅ Active', 'ClickUp': '✅ Active', 'Asana': '✅ Active' }
    },
    {
      feature: 'Data Export',
      tool: 'Available until Sept 24',
      competitors: { 'Linear': 'Import ready', 'Notion': 'Import ready', 'ClickUp': 'Import ready', 'Asana': 'Import ready' }
    },
    {
      feature: 'AI Features',
      tool: 'Was autonomous',
      competitors: { 'Linear': 'AI agents', 'Notion': 'Notion AI', 'ClickUp': 'ClickUp AI', 'Asana': 'Asana AI' }
    },
    {
      feature: 'Previous Price',
      tool: '$6.50-12/user',
      competitors: { 'Linear': '$8-14/user', 'Notion': '$8-15/user', 'ClickUp': '$7-12/user', 'Asana': '$10.99-24.99' }
    },
    {
      feature: 'Migration Path',
      tool: 'Export only',
      competitors: { 'Linear': 'Height importer', 'Notion': 'CSV import', 'ClickUp': 'Import wizard', 'Asana': 'CSV import' }
    },
    {
      feature: 'Support',
      tool: 'Ending Sept 2025',
      competitors: { 'Linear': 'Active support', 'Notion': 'Active support', 'ClickUp': 'Active support', 'Asana': 'Active support' }
    }
  ],

  integrations: [
    { name: 'Export Tools', category: 'Migration', icon: '📤', description: 'Until Sept 24' },
    { name: 'CSV Export', category: 'Data', icon: '📊', description: 'Available now' },
    { name: 'JSON Export', category: 'Data', icon: '🗂️', description: 'Full backup' },
    { name: 'GitHub', category: 'Code', icon: '⚠️', description: 'Disconnecting' },
    { name: 'Slack', category: 'Chat', icon: '⚠️', description: 'Ending soon' },
    { name: 'API', category: 'Developer', icon: '❌', description: 'Deprecating' },
    { name: 'Webhooks', category: 'Automation', icon: '❌', description: 'Stopping' },
    { name: 'SSO', category: 'Auth', icon: '❌', description: 'Ending' }
  ],

  reviews: [
    {
      author: 'Former User',
      role: 'Product Manager',
      company: 'Tech Startup',
      rating: 3,
      comment: 'Height was great while it lasted. AI features were innovative. Sad to see it shutting down. Already migrated to Linear.',
      verified: true
    },
    {
      author: 'Engineering Lead',
      role: 'CTO',
      company: 'SaaS Company',
      rating: 2,
      comment: 'Shutdown announcement was sudden. Only a few months notice. Wish they had given more time or open-sourced it.',
      verified: true
    },
    {
      author: 'Team Lead',
      role: 'Operations',
      company: 'Agency',
      rating: 3,
      comment: 'The AI copilot was ahead of its time. Export process works well. Moving to Notion now. Thanks for 7 years of service.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://height.app/docs',
    exportData: 'https://height.app/export',
    shutdownFaq: 'https://height.app/shutdown',
    alternatives: 'https://height.app/alternatives',
    support: 'support@height.app (until Sept 2025)'
  },

  faqs: [
    {
      question: 'Why is Height shutting down?',
      answer: 'Height founder Michael Villar announced the shutdown after 7 years of operation. Despite innovative AI-autonomous features and a loyal user base, the company decided to discontinue the service on September 24, 2025. While specific reasons weren\'t fully detailed, the competitive project management space and the challenges of scaling an independent platform likely contributed. Users have until September 24, 2025 to export their data and transition to alternative platforms.'
    },
    {
      question: 'How do I export my Height data before shutdown?',
      answer: 'Visit height.app/export immediately to access export tools. Height provides multiple export formats: CSV for spreadsheet compatibility, JSON for complete data backup including metadata, and PDF reports for documentation. Export includes all projects, tasks, comments, attachments, custom fields, and team settings. Download everything NOW—there\'s no guarantee data will be available after September 24, 2025. Keep multiple backups and verify exports are complete.'
    },
    {
      question: 'What are the best alternatives to Height?',
      answer: 'Top Height alternatives include Linear (similar AI features, $8-14/user, direct Height importer), Notion (all-in-one workspace with AI, $8-15/user), ClickUp (comprehensive features with AI, $7-12/user), and Asana (enterprise-ready with AI, $10.99-24.99/user). Linear is closest to Height\'s developer focus and offers the smoothest migration path with a dedicated Height importer. Consider your team\'s specific needs: Linear for engineering teams, Notion for flexibility, ClickUp for features, Asana for enterprise.'
    },
    {
      question: 'What happens to my Height subscription and billing?',
      answer: 'Height should have already stopped charging for new billing cycles. If you\'re still being charged, contact support@height.app immediately for refund. Annual subscribers may be eligible for pro-rated refunds for unused months after shutdown. Cancel any active subscriptions through your payment provider to ensure no future charges. Document all transactions for potential disputes. The company should provide clear guidance on refunds closer to the shutdown date.'
    },
    {
      question: 'Can I still use Height until September 24, 2025?',
      answer: 'Yes, Height remains operational until September 24, 2025, but with limitations: no new features or updates, potential performance degradation as resources wind down, limited or no customer support, and possible earlier shutdown of certain features like integrations. Don\'t rely on Height for critical operations—migrate as soon as possible. The service could become unstable or unavailable before the official shutdown date.'
    },
    {
      question: 'What made Height unique before shutdown?',
      answer: 'Height pioneered AI-autonomous project management with innovative features: AI copilot for automatic bug triage and backlog pruning, smart specification updates based on conversations, kanban-spreadsheet hybrid interface, natural language commands for task management, and autonomous workflow automation. These features were ahead of their time when launched. While Height is shutting down, its innovations influenced competitors—you\'ll find similar AI features in Linear, Notion AI, and other modern project management tools.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <div className="bg-red-900/20 border border-red-500 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-red-400 flex items-center gap-2 mt-0">
          <AlertTriangle className="w-8 h-8" />
          Height is Shutting Down September 24, 2025
        </h2>
        <p className="text-lg mb-4">
          After 7 years of service, Height announced its permanent shutdown. Users must export their data before September 24, 2025. The service will be completely unavailable after this date.
        </p>
        <div className="flex gap-4">
          <a href="https://height.app/export" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg inline-flex items-center gap-2">
            Export Your Data Now →
          </a>
          <Link href="/tools/linear" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg inline-flex items-center gap-2">
            Try Linear Instead →
          </Link>
        </div>
      </div>
      
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://height.app" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Height</a> was an innovative AI-autonomous project management platform that pioneered features like automatic bug triage, backlog pruning, and specification updates through AI. Founded by Michael Villar, Height served thousands of teams from 2018 until its announced shutdown on September 24, 2025. While the platform offered unique AI-driven workflows and a hybrid kanban-spreadsheet interface, it ultimately couldn't sustain operations in the competitive project management space.
      </p>
      
      <p className="text-lg leading-relaxed">
        For teams currently using Height, immediate action is required. Export all your data at height.app/export before the shutdown date—there's no guarantee data will be accessible afterward. Consider migrating to <Link href="/tools/linear" className="text-purple-400 hover:text-purple-300">Linear</Link> (which offers a direct Height importer and similar AI features), <Link href="/tools/notion" className="text-purple-400 hover:text-purple-300">Notion</Link> (for all-in-one workspace needs), or <Link href="/tools/clickup" className="text-purple-400 hover:text-purple-300">ClickUp</Link> (for comprehensive project management). Height's shutdown reminds us that even innovative tools face sustainability challenges—choose established platforms with strong backing for long-term stability. While Height's AI-autonomous approach was ahead of its time, its features live on in competitors who learned from its innovations.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Was Using Height?',
    segments: [
      {
        name: 'Migrating Teams',
        description: 'Teams urgently moving to Linear, Notion, or ClickUp before shutdown.',
        icon: AlertTriangle,
        stats: 'Export by Sept 24'
      },
      {
        name: 'Former Startups',
        description: 'Small teams who appreciated Height\'s AI automation features.',
        icon: TrendingDown,
        stats: 'Finding alternatives'
      },
      {
        name: 'Engineering Teams',
        description: 'Developers who used Height\'s GitHub integration and AI triage.',
        icon: XCircle,
        stats: 'Moving to Linear'
      },
      {
        name: 'Product Managers',
        description: 'PMs who relied on Height\'s autonomous backlog management.',
        icon: FileText,
        stats: 'Data migration needed'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Made Height Unique (Before Shutdown)?',
    points: [
      {
        title: 'Shutting Down',
        description: 'Service ends September 24, 2025. Export data now.',
        icon: XCircle
      },
      {
        title: 'Was AI-Autonomous',
        description: 'Pioneered automatic bug triage and backlog pruning.',
        icon: Bot
      },
      {
        title: 'Hybrid Interface',
        description: 'Combined kanban boards with spreadsheet flexibility.',
        icon: ListChecks
      },
      {
        title: '7 Years Service',
        description: 'Operated from 2018-2025 before shutdown.',
        icon: Clock
      },
      {
        title: 'Migration Required',
        description: 'Users must export data and find alternatives.',
        icon: AlertTriangle
      }
    ]
  }
}

export default function HeightPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={heightData} />
    </>
  )
}
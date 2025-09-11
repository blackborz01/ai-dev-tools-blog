'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Mail, Keyboard } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const superhumanData = {
  name: 'Superhuman AI',
  tagline: 'The fastest email experience ever made with AI-powered productivity features',
  description: 'Superhuman combines lightning-fast email performance with AI writing assistance, smart compose, auto-summarization, and keyboard shortcuts. Save 4 hours per week on email with instant load times and intelligent automation.',
  url: 'https://superhuman.com',
  category: 'Productivity Email',
  logo: '/logos/superhuman.svg',
  
  pricing: {
    type: 'paid' as const,
    startingPrice: '$30',
    hasFreeTier: false,
    plans: [
      {
        name: 'Starter',
        price: '$30',
        features: [
          'Lightning-fast email',
          'AI writing assistant',
          'Auto-summarize emails',
          'Smart compose in your voice',
          'Keyboard shortcuts',
          'Split inbox',
          'Read statuses'
        ],
        highlighted: true
      },
      {
        name: 'Business',
        price: '$40',
        features: [
          'Everything in Starter',
          'Ask AI (chat assistant)',
          'Smart Send',
          'Recent Opens feed',
          'Salesforce integration',
          'HubSpot integration',
          'Pipedrive integration'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Team (Annual)',
        price: '$25/user',
        features: [
          'Annual billing discount',
          'Team read statuses',
          'Reply indicators',
          'Team snippets',
          'Shared conversations',
          'Team comments',
          'Priority support'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Volume discounts',
          'SSO/SAML',
          'Advanced security',
          'Dedicated onboarding',
          'Custom training',
          'SLA guarantees',
          'Contact sales'
        ],
        highlighted: false
      }
    ]
  },

  features: [
    {
      icon: Zap,
      title: 'Instant Speed',
      description: 'Opens instantly vs 3-5 seconds for Gmail. Every action executes in under 100ms.'
    },
    {
      icon: Brain,
      title: 'AI Writing Assistant',
      description: 'Learns your voice from past emails. Rewrites, shortens, lengthens, or improves any message.'
    },
    {
      icon: Sparkles,
      title: 'Auto Summarize',
      description: 'AI automatically summarizes long emails and threads, saving hours of reading time.'
    },
    {
      icon: Keyboard,
      title: 'Keyboard First',
      description: 'Every action has a shortcut. Navigate entirely without mouse for maximum speed.'
    },
    {
      icon: Mail,
      title: 'Split Inbox',
      description: 'Divide inbox into sections like Team, VIPs, or Google Docs for better focus.'
    },
    {
      icon: Target,
      title: 'Read Statuses',
      description: 'See when emails are read and on which device. Follow up with perfect timing.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$30 Starter',
      competitors: { 'Gmail': 'Free', 'Outlook': '$7', 'Spark': '$8', 'Hey': '$99/year' }
    },
    {
      feature: 'Load Speed',
      tool: 'Instant (<100ms)',
      competitors: { 'Gmail': '3-5 seconds', 'Outlook': '2-4 seconds', 'Spark': '1-2 seconds', 'Hey': '1-2 seconds' }
    },
    {
      feature: 'AI Features',
      tool: 'Advanced',
      competitors: { 'Gmail': 'Basic', 'Outlook': 'Copilot Pro', 'Spark': 'Basic', 'Hey': 'None' }
    },
    {
      feature: 'Keyboard Shortcuts',
      tool: 'Complete',
      competitors: { 'Gmail': 'Extensive', 'Outlook': 'Limited', 'Spark': 'Basic', 'Hey': 'Basic' }
    },
    {
      feature: 'Read Receipts',
      tool: 'Built-in',
      competitors: { 'Gmail': 'Extension', 'Outlook': 'Yes', 'Spark': 'No', 'Hey': 'No' }
    },
    {
      feature: 'Team Features',
      tool: 'Advanced',
      competitors: { 'Gmail': 'Workspace', 'Outlook': 'Yes', 'Spark': 'Yes', 'Hey': 'Limited' }
    }
  ],

  integrations: [
    { name: 'Gmail', category: 'Email', icon: '📧', description: 'Full support' },
    { name: 'Outlook', category: 'Email', icon: '📨', description: 'Since 2022' },
    { name: 'Salesforce', category: 'CRM', icon: '☁️', description: 'Business plan' },
    { name: 'HubSpot', category: 'CRM', icon: '🔧', description: 'Business plan' },
    { name: 'Pipedrive', category: 'CRM', icon: '🎯', description: 'Business plan' },
    { name: 'Calendar', category: 'Schedule', icon: '📅', description: 'Availability' },
    { name: 'Slack', category: 'Chat', icon: '💬', description: 'Notifications' },
    { name: 'Zoom', category: 'Meeting', icon: '📹', description: 'Quick links' }
  ],

  reviews: [
    {
      author: 'CEO',
      role: 'Startup Founder',
      company: 'Tech Startup',
      rating: 5,
      comment: 'Superhuman literally saves me 4 hours per week. The AI writing in my voice is incredible. Worth every penny of the $30.',
      verified: true
    },
    {
      author: 'Sales Director',
      role: 'Enterprise Sales',
      company: 'SaaS Company',
      rating: 5,
      comment: 'Read statuses and CRM integration transformed my workflow. The speed is addictive—can\'t go back to regular email.',
      verified: true
    },
    {
      author: 'Product Manager',
      role: 'Team Lead',
      company: 'Fortune 500',
      rating: 4,
      comment: 'Team features prevent duplicate responses. AI summarization is a game-changer for long threads. Expensive but justified.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://help.superhuman.com',
    blog: 'https://blog.superhuman.com',
    pricing: 'https://superhuman.com/pricing',
    keyboard: 'https://superhuman.com/keyboard',
    api: 'https://developers.superhuman.com'
  },

  faqs: [
    {
      question: 'Is Superhuman worth $30/month when Gmail is free?',
      answer: 'For professionals spending 2-4 hours daily on email, absolutely. Users report saving 4+ hours weekly through instant load times (vs 3-5 seconds per Gmail action), keyboard shortcuts eliminating mouse use, AI writing that learns your voice, and auto-summarization of long threads. If you value your time at $30+/hour, Superhuman pays for itself in the first week. The speed alone—every action under 100ms—makes email feel effortless rather than a chore.'
    },
    {
      question: 'How does the AI writing assistant work?',
      answer: 'Superhuman\'s AI learns your writing style from your email history, then helps in three ways: 1) Write a quick blurb, then use commands like "shorten," "lengthen," "simplify," or "improve writing" to perfect it. 2) The AI rewrites in your authentic voice, maintaining your tone and patterns. 3) It auto-drafts follow-up emails based on context, leaving them ready in your inbox. Unlike generic AI, it sounds like you, not a robot.'
    },
    {
      question: 'What makes Superhuman faster than other email clients?',
      answer: 'Superhuman is architecturally different: it pre-downloads and caches everything locally, uses optimized keyboard shortcuts for every action (no mouse needed), renders instantly with no loading screens, and processes actions in under 100ms. While Gmail takes 3-5 seconds to load, Superhuman opens instantly. Press [C] for compose and you\'re writing 2 seconds before Gmail even loads. This compounds—saving 3 seconds per action × 200 actions/day = 10 minutes daily.'
    },
    {
      question: 'What\'s the difference between Starter and Business plans?',
      answer: 'Starter ($30/month) includes core features: AI writing, auto-summarize, keyboard shortcuts, split inbox, read statuses, and snippets. Business ($40/month) adds Ask AI (chatbot for natural language email queries), Smart Send (optimal timing), Recent Opens feed (engagement tracking), and CRM integrations (Salesforce, HubSpot, Pipedrive). Most individuals find Starter sufficient; Business is for sales/customer success teams needing CRM integration.'
    },
    {
      question: 'Does Superhuman work with Outlook and team email?',
      answer: 'Yes! Initially Gmail-only, Superhuman added Outlook support in May 2022. Team features include: shared conversations, team comments for internal discussion, reply indicators showing who\'s responding, team read statuses preventing duplicates, and team snippets for consistent messaging. It\'s designed for modern teams, especially sales, customer success, and executive teams managing high email volumes.'
    },
    {
      question: 'What are the most useful keyboard shortcuts?',
      answer: 'Master these for maximum speed: [C] compose, [E] archive, [J/K] navigate up/down, [Enter] open email, [R] reply, [A] reply all, [F] forward, [/] search, [Tab+Enter] send, [Cmd+K] command palette for everything else. Split inbox navigation: [G then I] for important. The key is going fully keyboard—the mouse slows you down. Most users are fully productive within a week.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://superhuman.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Superhuman</a> has redefined email productivity by combining lightning-fast performance with powerful AI features. Unlike traditional clients like <a href="https://gmail.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Gmail</a> that take 3-5 seconds to load, Superhuman opens instantly with every action executing in under 100ms. This speed, combined with comprehensive keyboard shortcuts, allows professionals to navigate email entirely without a mouse, saving 4+ hours weekly. The platform's AI writing assistant learns your unique voice from past emails, enabling authentic rewrites, automatic follow-up drafts, and intelligent suggestions that sound like you, not a generic bot.
      </p>
      
      <p className="text-lg leading-relaxed">
        At $30/month for the Starter plan, Superhuman targets professionals who live in their inbox and value time over cost. The AI-powered features justify the premium: auto-summarization condenses lengthy threads into key points, Split Inbox organizes messages by priority (Team, VIPs, Documents), and built-in read statuses show exactly when and where emails were opened. The Business tier ($40/month) adds Ask AI for natural language email queries and integrations with <a href="https://salesforce.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Salesforce</a>, <a href="https://hubspot.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">HubSpot</a>, and Pipedrive. While alternatives like <Link href="/tools/notion-ai" className="text-purple-400 hover:text-purple-300">Notion AI</Link> excel at documentation and <Link href="/tools/linear" className="text-purple-400 hover:text-purple-300">Linear</Link> dominates project management, Superhuman remains the gold standard for email productivity. For executives, salespeople, and anyone processing 100+ emails daily, the time saved makes Superhuman an investment that pays for itself within the first week of use.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Superhuman?',
    segments: [
      {
        name: 'Executives & CEOs',
        description: 'Leaders managing high email volumes who need instant responses and perfect organization.',
        icon: Briefcase,
        stats: '4 hours/week saved'
      },
      {
        name: 'Sales Teams',
        description: 'Sales professionals using read statuses and CRM integration for perfect follow-up timing.',
        icon: Target,
        stats: 'CRM integrated'
      },
      {
        name: 'Startup Founders',
        description: 'Entrepreneurs who value speed and efficiency in every aspect of their workflow.',
        icon: Rocket,
        stats: 'Instant responses'
      },
      {
        name: 'Customer Success',
        description: 'Teams using shared conversations and team comments for coordinated responses.',
        icon: Users,
        stats: 'Team collaboration'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Superhuman Unique?',
    points: [
      {
        title: 'Fastest Email Ever',
        description: 'Instant load, <100ms actions. 30-50x faster than Gmail.',
        icon: Zap
      },
      {
        title: 'AI Learns Your Voice',
        description: 'Writing assistant that sounds authentically like you.',
        icon: Brain
      },
      {
        title: 'Keyboard Everything',
        description: 'Complete keyboard control—never touch the mouse.',
        icon: Keyboard
      },
      {
        title: 'Built-in Read Status',
        description: 'See when/where emails are read without extensions.',
        icon: Mail
      },
      {
        title: '4 Hours/Week Saved',
        description: 'Average time saved by users through speed and AI.',
        icon: Rocket
      }
    ]
  }
}

export default function SuperhumanAIPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={superhumanData} />
    </>
  )
}
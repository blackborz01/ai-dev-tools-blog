'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Zap, Bot, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, MessageSquare, Workflow, PuzzleIcon } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const zapierAIData = {
  name: 'Zapier AI',
  tagline: 'AI-powered automation platform - Connect 8,000+ apps with intelligent workflows and agents',
  description: 'Zapier AI revolutionizes automation with Copilot for building Zaps, Central AI workspace for agents, and AI Chatbots. From $0 free plan to modular AI add-ons. Build intelligent workflows connecting 8,000+ apps, create AI agents that work autonomously, deploy chatbots in minutes. Used by 2.2M businesses.',
  url: 'https://zapier.com',
  category: 'Productivity',
  logo: '/logos/zapier-ai.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          '100 tasks/month',
          '2-step Zaps',
          'AI power-ups included',
          'Unlimited Zaps',
          'Copilot access',
          'Basic AI features',
          'Core app integrations'
        ],
        highlighted: true
      },
      {
        name: 'Professional',
        price: '$29.99',
        features: [
          '750 tasks/month',
          'Multi-step Zaps',
          'Premium app access',
          'Webhooks',
          'Filters & Formatters',
          'Custom logic',
          'Email/chat support'
        ]
      },
      {
        name: 'AI Add-ons',
        price: 'Modular',
        features: [
          'Central AI: $50/month',
          'Chatbots Pro: $20/month',
          'Tables: $20/month',
          'Interfaces: $20/month',
          'Advanced Chatbots: $100',
          '1,500 AI activities',
          'Pay per module used'
        ]
      }
    ]
  },

  features: [
    {
      icon: Bot,
      title: 'Zapier Central AI Agents',
      description: 'Create AI assistants that work across 8,000+ apps autonomously with natural language.'
    },
    {
      icon: Sparkles,
      title: 'Copilot Zap Builder',
      description: 'AI drafts complete Zaps from prompts, suggests fields, explains workflows - no code needed.'
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbots',
      description: 'Build custom chatbots in minutes, connect to 7,000+ apps, automate conversations.'
    },
    {
      icon: Workflow,
      title: '8,000+ App Integrations',
      description: 'Connect more apps than any platform - Salesforce, Slack, Gmail, ChatGPT, and thousands more.'
    },
    {
      icon: PuzzleIcon,
      title: 'Modular AI Features',
      description: 'Pay only for what you use - Tables, Interfaces, Agents, Chatbots as separate modules.'
    },
    {
      icon: Users,
      title: '2.2M Business Users',
      description: 'Trusted by millions to automate billions of tasks monthly across every industry.'
    }
  ],

  comparisons: [
    {
      feature: 'App Integrations',
      tool: '8,000+',
      competitors: { 'Make': '1,500+', 'IFTTT': '700+', 'n8n': '400+', 'Bardeen': '100+' }
    },
    {
      feature: 'Starting Price',
      tool: '$0 free',
      competitors: { 'Make': '$9', 'IFTTT': '$2.92', 'n8n': '$20', 'Bardeen': '$10' }
    },
    {
      feature: 'AI Features',
      tool: 'Full suite',
      competitors: { 'Make': 'Basic AI', 'IFTTT': 'Limited', 'n8n': 'Via nodes', 'Bardeen': 'AI focus' }
    },
    {
      feature: 'No-Code Builder',
      tool: 'Visual + AI',
      competitors: { 'Make': 'Visual', 'IFTTT': 'Simple', 'n8n': 'Technical', 'Bardeen': 'Browser' }
    },
    {
      feature: 'Enterprise Ready',
      tool: 'Yes + SAML',
      competitors: { 'Make': 'Yes', 'IFTTT': 'Limited', 'n8n': 'Self-host', 'Bardeen': 'No' }
    },
    {
      feature: 'User Base',
      tool: '2.2M businesses',
      competitors: { 'Make': '500k+', 'IFTTT': '700k+', 'n8n': '40k+', 'Bardeen': '200k+' }
    }
  ],

  integrations: [
    { name: 'Salesforce', category: 'CRM', icon: '☁️', description: 'Full sync' },
    { name: 'Slack', category: 'Chat', icon: '💬', description: 'Workflows' },
    { name: 'ChatGPT', category: 'AI', icon: '🤖', description: 'Native' },
    { name: 'Gmail', category: 'Email', icon: '📧', description: 'Automation' },
    { name: 'Notion', category: 'Docs', icon: '📝', description: 'Database' },
    { name: 'Shopify', category: 'Commerce', icon: '🛍️', description: 'Orders' },
    { name: 'HubSpot', category: 'Marketing', icon: '🎯', description: 'Leads' },
    { name: 'Airtable', category: 'Database', icon: '📊', description: 'Tables' }
  ],

  reviews: [
    {
      author: 'Operations Manager',
      role: 'Director',
      company: 'SaaS Startup',
      rating: 5,
      comment: 'Zapier AI transformed our workflow. Central agents handle lead qualification autonomously. Copilot builds complex Zaps in seconds. Worth every penny of the modular pricing.',
      verified: true
    },
    {
      author: 'Marketing Lead',
      role: 'VP Marketing',
      company: 'E-commerce',
      rating: 4,
      comment: '8,000+ integrations is unmatched. AI Chatbots deployed in minutes handle 70% of support. Only downside: costs add up with multiple modules ($200+/month total).',
      verified: true
    },
    {
      author: 'Small Business Owner',
      role: 'Founder',
      company: 'Agency',
      rating: 5,
      comment: 'Free plan is genuinely useful! 100 tasks covers basic automation. Upgraded to Pro + Chatbots for $50/month. Replaced 3 other tools and saved hours weekly.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://help.zapier.com',
    blog: 'https://zapier.com/blog',
    templates: 'https://zapier.com/templates',
    community: 'https://community.zapier.com',
    developer: 'https://platform.zapier.com'
  },

  faqs: [
    {
      question: 'How does Zapier AI pricing work with all the modules?',
      answer: 'Zapier uses modular pricing in 2025. Start with a base plan: Free ($0, 100 tasks), Professional ($29.99, 750 tasks), or Team ($103.50). Then add AI modules as needed: Central AI Agents ($50/month for 1,500 activities), Chatbots ($20-100/month), Tables ($20/month), Interfaces ($20/month). This means a typical power user might pay: $29.99 base + $50 agents + $20 chatbots = ~$100/month. While modular pricing lets you pay only for what you use, costs can add up quickly if you need multiple AI features.'
    },
    {
      question: 'What is Zapier Central and how do AI agents work?',
      answer: 'Zapier Central is an AI workspace where you create autonomous agents that work across 8,000+ apps. These agents can: qualify leads by researching companies and enriching data, handle customer support by analyzing sentiment and routing tickets, generate content by researching topics and creating drafts, and manage workflows without manual triggers. Agents understand natural language, learn from your instructions, and perform complex multi-step tasks. At $50/month for 1,500 activities, each action (browsing, data review, app interaction) counts as an activity. It\'s like hiring AI employees that work 24/7 across all your apps.'
    },
    {
      question: 'How does Zapier Copilot make building automations easier?',
      answer: 'Zapier Copilot revolutionizes Zap building with AI assistance: describe what you want in plain English and Copilot drafts the entire workflow, suggests the right apps and actions for your goal, auto-maps fields between apps intelligently, explains complex steps in simple terms, and helps debug errors. Recent 2025 updates added progressive building (create Zaps step-by-step), editing existing Zaps with AI, and auto-selecting app connections. Copilot is included free in all plans, making complex automation accessible to non-technical users. What used to take 30 minutes of configuration now takes 5 minutes of conversation.'
    },
    {
      question: 'Is Zapier worth it compared to Make, n8n, or IFTTT?',
      answer: 'Zapier excels with 8,000+ integrations (vs Make\'s 1,500, n8n\'s 400, IFTTT\'s 700), making it the clear winner for app coverage. The AI features (Copilot, Central, Chatbots) are unmatched by competitors. However, Zapier is pricier: Make starts at $9/month with more tasks, n8n offers self-hosting for privacy, IFTTT is simpler and cheaper at $2.92. Choose Zapier if you need: maximum app coverage, AI-powered automation, enterprise features, or no-code simplicity. Choose alternatives if you want: lower costs (Make/IFTTT), self-hosting (n8n), or simple triggers (IFTTT).'
    },
    {
      question: 'What are the task limits and how do overages work?',
      answer: 'Tasks are individual actions in your Zaps (trigger fires, action runs). Plans include: Free (100 tasks), Professional (750 tasks), Team (20k tasks). Overages are expensive—even 1-2 extra tasks trigger a $20+ monthly increase. Monitor usage carefully! Pro tips: batch operations count as one task, use filters to prevent unnecessary runs, pause unused Zaps, and consider upgrading before hitting limits. Many users underestimate task usage—a simple Slack-to-Notion Zap running 50 times daily uses 1,500 tasks monthly. Plan accordingly or costs spiral quickly.'
    },
    {
      question: 'How do Zapier AI Chatbots compare to dedicated chatbot platforms?',
      answer: 'Zapier Chatbots shine through integration—connect to 7,000+ apps instantly, unlike standalone platforms requiring custom APIs. Build and deploy in minutes with no code. Pricing is competitive: Free (2 chatbots), Pro ($20 for 5), Advanced ($100 for 20). Compare to Intercom ($39+), Drift ($50+), or ChatBot ($52+). Zapier chatbots excel at: routing to human agents based on sentiment, updating CRM records during conversations, triggering complex workflows from chat, and pulling data from multiple sources. Limitations include less UI customization than dedicated platforms and simpler NLP than enterprise chatbots. Perfect for SMBs wanting integrated automation, not just chat.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Zapier AI</a> has evolved from a simple automation tool to a comprehensive AI-powered platform connecting 8,000+ apps—more than <Link href="/tools/make" className="text-purple-400 hover:text-purple-300">Make</Link>, <Link href="/tools/ifttt" className="text-purple-400 hover:text-purple-300">IFTTT</Link>, and <Link href="/tools/n8n" className="text-purple-400 hover:text-purple-300">n8n</Link> combined. With Zapier Central's autonomous agents, Copilot's AI-powered Zap builder, and instant chatbot deployment, it's not just automating tasks—it's creating an AI workforce. The modular pricing means you start free with 100 tasks, then add only the AI features you need: agents for $50, chatbots for $20, making it more flexible than all-or-nothing competitors.
      </p>
      
      <p className="text-lg leading-relaxed">
        What sets Zapier apart in 2025 is the seamless AI integration across every feature. While <Link href="/tools/bardeen-ai" className="text-purple-400 hover:text-purple-300">Bardeen</Link> focuses on browser automation and <Link href="/tools/make" className="text-purple-400 hover:text-purple-300">Make</Link> emphasizes visual workflows, Zapier combines both with AI that understands natural language. Create agents that qualify leads across Salesforce, HubSpot, and <Link href="/tools/slack" className="text-purple-400 hover:text-purple-300">Slack</Link> simultaneously. Build chatbots that don't just answer questions but trigger complex workflows in <Link href="/tools/notion" className="text-purple-400 hover:text-purple-300">Notion</Link>, <Link href="/tools/airtable" className="text-purple-400 hover:text-purple-300">Airtable</Link>, or any of 8,000+ apps. With 2.2 million businesses automating billions of tasks monthly, Zapier AI isn't just a tool—it's the operating system for modern business automation, now supercharged with AI that works while you sleep.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Zapier AI?',
    segments: [
      {
        name: 'Small Businesses',
        description: 'Automating operations without technical staff or developers.',
        icon: Briefcase,
        stats: '2.2M businesses'
      },
      {
        name: 'Marketing Teams',
        description: 'Connecting martech stacks and automating campaigns.',
        icon: Target,
        stats: '8,000+ apps'
      },
      {
        name: 'Operations Teams',
        description: 'Building workflows between enterprise systems.',
        icon: Workflow,
        stats: 'Billions of tasks'
      },
      {
        name: 'Customer Support',
        description: 'Deploying AI chatbots and routing tickets intelligently.',
        icon: MessageSquare,
        stats: 'AI-powered'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Zapier AI Unique?',
    points: [
      {
        title: '8,000+ Integrations',
        description: 'More app connections than all competitors combined.',
        icon: Globe
      },
      {
        title: 'Central AI Agents',
        description: 'Autonomous assistants working across all your apps.',
        icon: Bot
      },
      {
        title: 'Modular Pricing',
        description: 'Pay only for AI features you actually use.',
        icon: PuzzleIcon
      },
      {
        title: 'No-Code AI',
        description: 'Build complex AI workflows with natural language.',
        icon: Sparkles
      },
      {
        title: '2.2M Users',
        description: 'Largest automation community and ecosystem.',
        icon: Users
      }
    ]
  }
}

export default function ZapierAIPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={zapierAIData} />
    </>
  )
}
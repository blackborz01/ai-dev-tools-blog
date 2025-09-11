'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, BarChart, Workflow } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const linearData = {
  name: 'Linear',
  tagline: 'AI-powered project management built for modern software teams',
  description: 'Linear streamlines software development with AI agents, automated workflows, and lightning-fast performance. Used by 10,000+ teams including OpenAI, Ramp, and CashApp for issue tracking, sprints, and roadmaps.',
  url: 'https://linear.app',
  category: 'Project Management',
  logo: '/logos/linear.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          'Unlimited members',
          '2 teams',
          '250 active issues',
          'Slack & GitHub integration',
          'AI agents',
          'Basic automation',
          'Community support'
        ],
        highlighted: true
      },
      {
        name: 'Basic',
        price: '$8',
        features: [
          'Everything in Free',
          '5 teams',
          'Unlimited issues',
          'Unlimited file uploads',
          'Admin roles',
          'Advanced integrations',
          '$8/user annually'
        ]
      },
      {
        name: 'Business',
        price: '$14',
        features: [
          'Everything in Basic',
          'Unlimited teams',
          'Private teams & guests',
          'Product Intelligence',
          'Linear Insights',
          'Linear Asks',
          'Zendesk & Intercom'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Everything in Business',
          'Issue SLAs',
          'Sub-initiatives',
          'Advanced Linear Asks',
          'Custom dashboards',
          'SAML & SCIM',
          'Advanced security'
        ],
        highlighted: true
      },
      {
        name: 'Startup Program',
        price: 'Special',
        features: [
          'For early-stage startups',
          'Discounted pricing',
          'Migration support',
          'Onboarding assistance',
          'Priority support',
          'Custom terms',
          'Apply to qualify'
        ]
      }
    ]
  },

  features: [
    {
      icon: Bot,
      title: 'Linear for Agents',
      description: 'AI agents for code generation, task automation, and technical work delegation.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built for speed with instant page loads, real-time sync, and keyboard-first navigation.'
    },
    {
      icon: Workflow,
      title: 'Automated Workflows',
      description: 'Auto-update issues when PRs merge, custom templates, and smart status transitions.'
    },
    {
      icon: BarChart,
      title: 'Linear Insights',
      description: 'Real-time analytics tracking scope, velocity, and progress for data-driven decisions.'
    },
    {
      icon: GitBranch,
      title: 'Deep Integrations',
      description: '200+ integrations including GitHub, GitLab, Slack, Figma, Sentry, and Discord.'
    },
    {
      icon: Target,
      title: 'Cycles & Roadmaps',
      description: 'Time-boxed sprints, custom issue flows, and visual roadmaps for product planning.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$0 Free / $8 Basic',
      competitors: { 'Jira': '$7.75', 'Asana': '$13.49', 'Monday': '$12', 'ClickUp': '$9' }
    },
    {
      feature: 'Performance',
      tool: 'Lightning fast',
      competitors: { 'Jira': 'Slow', 'Asana': 'Average', 'Monday': 'Good', 'ClickUp': 'Average' }
    },
    {
      feature: 'AI Features',
      tool: 'AI agents included',
      competitors: { 'Jira': 'Limited', 'Asana': 'AI add-on', 'Monday': 'Basic', 'ClickUp': 'ClickUp Brain' }
    },
    {
      feature: 'Developer Focus',
      tool: 'Built for devs',
      competitors: { 'Jira': 'Dev-focused', 'Asana': 'General', 'Monday': 'General', 'ClickUp': 'General' }
    },
    {
      feature: 'Keyboard Shortcuts',
      tool: 'Complete',
      competitors: { 'Jira': 'Basic', 'Asana': 'Limited', 'Monday': 'Limited', 'ClickUp': 'Good' }
    },
    {
      feature: 'Free Tier',
      tool: 'Unlimited users',
      competitors: { 'Jira': '10 users', 'Asana': '15 users', 'Monday': '3 users', 'ClickUp': 'Unlimited' }
    }
  ],

  integrations: [
    { name: 'GitHub', category: 'Code', icon: '🐙', description: 'Auto-sync' },
    { name: 'GitLab', category: 'Code', icon: '🦊', description: 'Two-way sync' },
    { name: 'Slack', category: 'Chat', icon: '💬', description: 'Notifications' },
    { name: 'Figma', category: 'Design', icon: '🎨', description: 'Embeds' },
    { name: 'Sentry', category: 'Monitoring', icon: '🚨', description: 'Error tracking' },
    { name: 'Discord', category: 'Chat', icon: '🎮', description: 'Updates' },
    { name: 'Zendesk', category: 'Support', icon: '🎫', description: 'Tickets' },
    { name: 'Cursor', category: 'AI', icon: '🤖', description: 'AI coding' }
  ],

  reviews: [
    {
      author: 'Engineering Manager',
      role: 'Tech Lead',
      company: 'Y Combinator Startup',
      rating: 5,
      comment: 'Switched from Jira and never looked back. Linear is 10x faster, team loves the keyboard shortcuts. AI agents are game-changing.',
      verified: true
    },
    {
      author: 'Product Manager',
      role: 'Head of Product',
      company: 'Series B SaaS',
      rating: 5,
      comment: 'Linear Insights gives us real velocity data. The GitHub integration is seamless. Free tier with unlimited users is incredible.',
      verified: true
    },
    {
      author: 'Frontend Developer',
      role: 'Senior Engineer',
      company: 'Tech Unicorn',
      rating: 5,
      comment: 'Finally, project management that doesn\'t slow us down. Everything loads instantly. AI automation saves hours weekly.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://linear.app/docs',
    api: 'https://developers.linear.app',
    pricing: 'https://linear.app/pricing',
    blog: 'https://linear.app/blog',
    changelog: 'https://linear.app/changelog'
  },

  faqs: [
    {
      question: 'How does Linear compare to Jira for software teams?',
      answer: 'Linear is widely considered superior to Jira for modern software teams. Key advantages: Lightning-fast performance (instant vs Jira\'s slow loads), cleaner UI with keyboard-first navigation, built-in AI agents for automation, and a generous free tier with unlimited users (vs Jira\'s 10). Linear focuses on developer experience—no complex configurations, just intuitive workflows. Teams report 50% faster task management after switching from Jira.'
    },
    {
      question: 'What are Linear for Agents and how do they work?',
      answer: 'Linear for Agents lets you delegate work to AI assistants integrated directly into your workflow. Choose from various AI agents (powered by Claude, ChatGPT, Cursor) to handle code generation, bug fixes, documentation, and routine tasks. For example, create an issue "Fix login bug" and assign it to an AI agent that analyzes the codebase, generates a fix, and creates a PR—all automated within Linear\'s workflow.'
    },
    {
      question: 'Is Linear\'s free tier really unlimited users?',
      answer: 'Yes! The free tier supports unlimited team members with 250 active issues and 2 teams. This is exceptional compared to competitors: Jira (10 users), Asana (15 users), Monday (3 users). The only real limitation is issue count, which is generous for small teams. Most startups can run entirely on the free tier until they scale beyond 250 concurrent issues or need multiple teams.'
    },
    {
      question: 'How does Linear\'s automation compare to other tools?',
      answer: 'Linear\'s automation is developer-centric and requires zero configuration. When a PR merges on GitHub, issues auto-close. Create custom workflows with templates, auto-assign based on labels, and trigger status updates from external events. Unlike Jira\'s complex automation rules or Monday\'s workflow builder, Linear\'s automation "just works" out of the box with sensible defaults that match how dev teams actually work.'
    },
    {
      question: 'What makes Linear so fast compared to other project management tools?',
      answer: 'Linear was built from scratch for performance: optimistic UI updates (changes appear instantly), local-first architecture with background sync, minimal JavaScript bundle size, keyboard shortcuts for every action (no mouse needed), and smart caching that preloads likely next actions. While Jira takes 3-5 seconds to load pages, Linear loads instantly. This speed difference compounds—saving 10-15 minutes daily per developer.'
    },
    {
      question: 'Who are Linear\'s biggest users and why?',
      answer: 'Linear powers 10,000+ teams including OpenAI (AI research), Ramp (fintech), CashApp (payments), Vercel (infrastructure), and Retool (developer tools). These teams chose Linear for its speed, developer focus, and modern approach to project management. Common pattern: fast-growing tech companies that value engineering velocity and can\'t afford the overhead of traditional tools like Jira. Linear is particularly popular with YC startups and modern tech companies.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://linear.app" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Linear</a> has revolutionized project management for modern software teams by prioritizing speed, simplicity, and developer experience. Used by industry leaders like <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">OpenAI</a>, Ramp, and CashApp, Linear delivers lightning-fast performance that makes traditional tools like Jira feel outdated. The platform's AI agents, powered by integrations with <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude</Link>, <Link href="/tools/chatgpt" className="text-purple-400 hover:text-purple-300">ChatGPT</Link>, and <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link>, enable teams to delegate technical work directly from issues—transforming project management from coordination overhead into actual productivity acceleration.
      </p>
      
      <p className="text-lg leading-relaxed">
        What sets Linear apart is its obsessive focus on developer workflow optimization. Every interaction is instant, every action has a keyboard shortcut, and GitHub integration is so seamless that issues update automatically when code ships. The free tier's unlimited users (compared to Jira's 10-user limit) makes it accessible to startups, while the $8/user Basic plan delivers enterprise features at half the cost of competitors. Linear Insights provides real-time velocity tracking without the complexity of Jira's reporting, and automated workflows eliminate the manual status updates that plague tools like <Link href="/tools/notion-ai" className="text-purple-400 hover:text-purple-300">Notion</Link> or Monday.com. For engineering teams tired of fighting their project management tools, Linear represents a fundamental rethink—proof that developer tools can be both powerful and delightful to use. The platform's 10,000+ team adoption and consistent 5-star reviews validate what developers have long believed: project management software should accelerate development, not slow it down.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Linear?',
    segments: [
      {
        name: 'Engineering Teams',
        description: 'Developers who value speed, keyboard shortcuts, and GitHub integration.',
        icon: Code,
        stats: '10,000+ teams'
      },
      {
        name: 'Fast-Growing Startups',
        description: 'YC companies and scale-ups needing efficient project management.',
        icon: Rocket,
        stats: 'OpenAI, Ramp, CashApp'
      },
      {
        name: 'Product Managers',
        description: 'PMs using Insights for velocity tracking and roadmap planning.',
        icon: Target,
        stats: 'Real-time analytics'
      },
      {
        name: 'Design Teams',
        description: 'Designers collaborating through Figma integration and visual boards.',
        icon: Layers,
        stats: 'Figma integration'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Linear Unique?',
    points: [
      {
        title: 'Blazing Fast',
        description: 'Instant loads, real-time sync. 10x faster than Jira.',
        icon: Zap
      },
      {
        title: 'AI Agents Built-in',
        description: 'Delegate technical work to AI directly from issues.',
        icon: Bot
      },
      {
        title: 'Developer First',
        description: 'Keyboard shortcuts, GitHub sync, zero configuration.',
        icon: Code
      },
      {
        title: 'Free Unlimited Users',
        description: 'Most generous free tier in project management.',
        icon: Users
      },
      {
        title: 'Smart Automation',
        description: 'Workflows that match how dev teams actually work.',
        icon: Workflow
      }
    ]
  }
}

export default function LinearPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={linearData} />
    </>
  )
}
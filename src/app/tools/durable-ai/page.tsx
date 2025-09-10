'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Clock, Receipt } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const durableData = {
  name: 'Durable AI',
  tagline: 'Build a website in 30 seconds with AI',
  description: 'Durable AI creates complete business websites in 30 seconds with integrated CRM, invoicing, and AI assistant. The fastest website builder designed specifically for small businesses and entrepreneurs.',
  url: 'https://durable.co',
  category: 'AI Website Builder',
  logo: '/logos/durable.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          'Website generation',
          'Subdomain hosting',
          'Basic website builder',
          'Limited stock images',
          'Mobile responsive',
          'SEO basics',
          'No custom domain'
        ]
      },
      {
        name: 'Starter',
        price: '$12',
        features: [
          'Free custom domain',
          'Unlimited pages & traffic',
          'SEO optimization',
          'Website analytics',
          'AI content strategist',
          'Unlimited contacts CRM',
          '10+ million stock images'
        ],
        highlighted: true
      },
      {
        name: 'Business',
        price: '$20',
        features: [
          'Everything in Starter',
          'Stock video access',
          'Invoicing capabilities',
          '5 users team access',
          '1:1 screenshare support',
          'Priority features',
          'Advanced analytics'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: 'Contact Sales',
        features: [
          'Custom user limits',
          'Advanced security',
          'Dedicated support',
          'Custom integrations',
          'SLA guarantees',
          'White-label options',
          'API access'
        ]
      }
    ]
  },

  features: [
    {
      icon: Clock,
      title: '30-Second Website Creation',
      description: 'Generate a complete website with images, copy, and layout in just 30 seconds—the fastest in the market.'
    },
    {
      icon: Bot,
      title: 'AI Business Assistant',
      description: 'Conversational AI handles social media content, marketing plans, and business communications automatically.'
    },
    {
      icon: Users,
      title: 'Built-in CRM',
      description: 'Manage unlimited contacts, track leads, and handle client communications all in one integrated platform.'
    },
    {
      icon: Receipt,
      title: 'Invoicing System',
      description: 'Create and send professional invoices, track payments, and manage billing without additional software.'
    },
    {
      icon: Sparkles,
      title: 'AI Content Generation',
      description: 'Automatic weekly blog posts, SEO-optimized content, Google ads, and social media posts created by AI.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'End-to-end encryption, secure hosting, and 30-day money-back guarantee on all paid plans.'
    }
  ],

  comparisons: [
    {
      feature: 'Setup Time',
      tool: '30 seconds',
      competitors: { 'Wix': '30+ minutes', 'Squarespace': '1+ hours', 'WordPress': '2+ hours' }
    },
    {
      feature: 'Starting Price',
      tool: '$0 Free',
      competitors: { 'Wix': '$0 Free', 'Squarespace': '$16/month', 'WordPress': '$4/month' }
    },
    {
      feature: 'Built-in CRM',
      tool: 'Yes',
      competitors: { 'Wix': 'Limited', 'Squarespace': 'No', 'WordPress': 'Plugin needed' }
    },
    {
      feature: 'Invoicing',
      tool: 'Integrated',
      competitors: { 'Wix': 'Limited', 'Squarespace': 'Commerce only', 'WordPress': 'Plugin needed' }
    },
    {
      feature: 'AI Assistant',
      tool: 'Full suite',
      competitors: { 'Wix': 'ADI only', 'Squarespace': 'Limited', 'WordPress': 'No' }
    },
    {
      feature: 'Stock Assets',
      tool: '10M+ images',
      competitors: { 'Wix': 'Limited free', 'Squarespace': 'Getty Images', 'WordPress': 'External' }
    }
  ],

  integrations: [
    { name: 'Google Analytics', category: 'Analytics', icon: '📊', description: 'Website tracking' },
    { name: 'Custom Domains', category: 'Hosting', icon: '🌐', description: 'Your own domain' },
    { name: 'SSL Certificates', category: 'Security', icon: '🔒', description: 'Secure hosting' },
    { name: 'SEO Tools', category: 'Marketing', icon: '🔍', description: 'Search optimization' },
    { name: 'Stock Images', category: 'Media', icon: '📸', description: '10M+ images' },
    { name: 'Email Marketing', category: 'Communication', icon: '📧', description: 'Client outreach' },
    { name: 'Payment Processing', category: 'Finance', icon: '💳', description: 'Invoice payments' },
    { name: 'AI Models', category: 'AI', icon: '🤖', description: 'Content generation' }
  ],

  reviews: [
    {
      author: 'Small Business Owner',
      role: 'Entrepreneur',
      company: 'Local Services',
      rating: 5,
      comment: 'Built my business website in literally 30 seconds. The CRM and invoicing tools save me hours every week.',
      verified: true
    },
    {
      author: 'Freelance Consultant',
      role: 'Independent Professional',
      company: 'Consulting Firm',
      rating: 5,
      comment: 'Perfect for non-technical users. I got a professional website up faster than making a cup of coffee!',
      verified: true
    },
    {
      author: 'Startup Founder',
      role: 'CEO',
      company: 'Tech Startup',
      rating: 4,
      comment: 'Great for getting online quickly. The AI assistant helps with marketing content I would never have time to create.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://durable.co/help',
    blog: 'https://durable.co/blog',
    support: 'https://durable.co/contact',
    twitter: 'https://twitter.com/durable_ai',
    youtube: 'https://youtube.com/@durable'
  },

  faqs: [
    {
      question: 'Can Durable really build a website in 30 seconds?',
      answer: 'Yes! Durable AI generates a complete website with images, copy, layout, and mobile optimization in 30 seconds. This is verified by 10 million+ websites created. You simply enter your business type and location, and AI handles everything else instantly.'
    },
    {
      question: 'How does Durable compare to Wix or Squarespace?',
      answer: 'Durable is significantly faster (30 seconds vs hours) and includes integrated business tools like CRM and invoicing that others charge extra for. While Wix and Squarespace offer more design customization, Durable is perfect for businesses prioritizing speed and simplicity with all-in-one functionality.'
    },
    {
      question: 'What business tools are included?',
      answer: 'Durable includes a full CRM with unlimited contacts, professional invoicing system, AI assistant for content creation, marketing tools (Google ads, social posts), SEO optimization, website analytics, and automated blog generation—all integrated in one platform.'
    },
    {
      question: 'Is Durable suitable for e-commerce?',
      answer: 'Durable is best for service-based businesses and simple online presence. While it includes invoicing and payment processing, it\'s not optimized for complex e-commerce with product catalogs. For online stores, consider dedicated e-commerce platforms.'
    },
    {
      question: 'What does the AI assistant do?',
      answer: 'The AI assistant handles conversational requests, generates social media content, creates marketing plans, writes blog posts weekly, produces Google ad copy, and helps with business communications. It\'s like having a marketing team built into your website platform.'
    },
    {
      question: 'How much does Durable cost after the free trial?',
      answer: 'Durable offers a permanent free plan with basic features. Paid plans start at $12/month (annual) or $15/month (monthly) for the Starter plan with custom domain and full features. Business plan is $20/month annually. All plans include a 30-day money-back guarantee.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://durable.co" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Durable AI</a> revolutionizes website creation by generating complete business websites in just 30 seconds—verified by over 10 million websites created to date. Founded in San Francisco with $19.4M in funding, Durable combines instant website generation with integrated CRM, invoicing, and AI assistant capabilities that traditional builders like <a href="https://www.wix.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Wix</a> or <a href="https://www.squarespace.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Squarespace</a> require hours to setup and additional subscriptions to match. Unlike <Link href="/tools/v0" className="text-purple-400 hover:text-purple-300">v0</Link>'s component generation or <Link href="/tools/create-xyz" className="text-purple-400 hover:text-purple-300">Create.xyz</Link>'s app building focus, Durable specifically targets small businesses with an all-in-one platform that includes 10+ million stock images, automated SEO optimization, and weekly AI-generated blog content.
      </p>
      
      <p className="text-lg leading-relaxed">
        With a 4.8-star rating on <a href="https://www.trustpilot.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Trustpilot</a> and adoption by thousands of entrepreneurs, Durable AI eliminates the technical barriers that prevent 30% of small businesses from establishing online presence. Starting free with paid plans from just $12/month, the platform's November 2024 updates introduced enhanced SEO automation, AI content style engine, and stronger customization while maintaining the 30-second generation speed. While <Link href="/tools/builder-io-ai" className="text-purple-400 hover:text-purple-300">Builder.io AI</Link> excels at design-to-code and <Link href="/tools/lovable" className="text-purple-400 hover:text-purple-300">Lovable</Link> focuses on full-stack development, Durable delivers the fastest path from business idea to live website with integrated tools that typically cost $100+ monthly when purchased separately—making it the definitive choice for non-technical entrepreneurs who value speed and simplicity over extensive customization.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Durable AI?',
    segments: [
      {
        name: 'Small Business Owners',
        description: 'Local businesses get online in 30 seconds with integrated CRM and invoicing for complete operations.',
        icon: Building2,
        stats: '10M+ websites'
      },
      {
        name: 'Freelancers & Consultants',
        description: 'Independent professionals use Durable for instant professional presence and client management.',
        icon: Briefcase,
        stats: '30-second setup'
      },
      {
        name: 'Non-Technical Entrepreneurs',
        description: 'Founders without coding skills launch businesses online faster than making coffee.',
        icon: Rocket,
        stats: '4.8 stars rating'
      },
      {
        name: 'Service Providers',
        description: 'Coaches, agencies, and service businesses leverage integrated tools for complete workflow.',
        icon: Users,
        stats: 'All-in-one platform'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Durable AI Unique?',
    points: [
      {
        title: 'World\'s Fastest Website Builder',
        description: '30-second generation verified by 10M+ websites—faster than any competitor in the market.',
        icon: Clock
      },
      {
        title: 'Complete Business Platform',
        description: 'Website + CRM + Invoicing + AI Assistant in one tool, saving $100+ monthly on separate subscriptions.',
        icon: Package
      },
      {
        title: 'Zero Technical Skills Required',
        description: 'AI handles everything from design to content—perfect for non-technical business owners.',
        icon: Sparkles
      },
      {
        title: 'AI Business Assistant',
        description: 'Automated marketing content, weekly blogs, and social media managed by integrated AI.',
        icon: Bot
      },
      {
        title: '10M+ Stock Assets',
        description: 'Access to millions of professional images and videos without additional licensing costs.',
        icon: Globe
      }
    ]
  }
}

export default function DurableAIPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={durableData} />
    </>
  )
}
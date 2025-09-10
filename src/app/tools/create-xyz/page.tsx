'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, MessageSquare, Download } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const createData = {
  name: 'Create.xyz',
  tagline: 'Build full-stack apps instantly with natural language',
  description: 'Create.xyz (Anything AI) transforms plain English descriptions into fully functional web applications. Build, deploy, and export complete apps without writing code using GPT-4o and Claude 3.5.',
  url: 'https://create.xyz',
  category: 'AI App Builder',
  logo: '/logos/create-xyz.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          '5,000 one-time credits',
          'Chat and generate',
          'Publish apps',
          'AI integrations',
          'Unlimited public projects',
          '1 GB storage',
          'Daily message limits'
        ]
      },
      {
        name: 'Pro 20k',
        price: '$16',
        features: [
          '20,000 credits/month',
          'Private projects',
          'Remove Create branding',
          'Custom domains',
          '50 GB storage',
          'Priority generation',
          'Email support'
        ],
        highlighted: true
      },
      {
        name: 'Pro 50k',
        price: '$40',
        features: [
          '50,000-55,000 credits/month',
          'Everything in Pro 20k',
          'For app builders',
          '250 GB storage',
          'Advanced features',
          'Priority support',
          'Team collaboration'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Pro 100k',
        price: '$80',
        features: [
          '100,000-110,000 credits/month',
          'Multiple large apps',
          'Priority everything',
          '250 GB storage',
          'Dedicated support',
          'Advanced analytics',
          'Custom integrations'
        ]
      },
      {
        name: 'Teams',
        price: 'Custom',
        features: [
          'Custom credits',
          'Multi-user access',
          'Advanced permissions',
          'Enterprise security',
          'Annual billing discount',
          'Dedicated account manager',
          'Custom SLA'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: MessageSquare,
      title: 'Natural Language Building',
      description: 'Describe your app in plain English. AI understands complex requirements and builds complete functionality instantly.'
    },
    {
      icon: Brain,
      title: 'Multi-AI Models',
      description: 'Powered by GPT-4o, Claude 3.5 Sonnet, Stable Diffusion, and Google Gemini for optimal results across different tasks.'
    },
    {
      icon: Database,
      title: 'Full-Stack Capabilities',
      description: 'Frontend, backend, databases, user accounts, file uploads, and payments (Stripe) all built-in and configured.'
    },
    {
      icon: Download,
      title: 'Complete Code Export',
      description: 'Download your entire project code. Unlike many no-code platforms, you own and can modify everything.'
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'One-click publishing with custom domains. Watch your app go live instantly with automatic SSL and hosting.'
    },
    {
      icon: Package,
      title: '50+ Integrations',
      description: 'Connect with Stripe, Google Maps, Zapier, Make, n8n, OpenAI, ElevenLabs, and dozens more services.'
    }
  ],

  comparisons: [
    {
      feature: 'Starting Price',
      tool: '$0 Free',
      competitors: { 'Lovable': '$0 Free', 'Bolt.new': '$0 Free', 'v0': '$0 Free' }
    },
    {
      feature: 'Credits System',
      tool: '5,000 free',
      competitors: { 'Lovable': '30 messages', 'Bolt.new': 'Token-based', 'v0': '50 generations' }
    },
    {
      feature: 'Code Export',
      tool: 'Full download',
      competitors: { 'Lovable': 'GitHub export', 'Bolt.new': 'Download', 'v0': 'Copy only' }
    },
    {
      feature: 'Custom Domains',
      tool: 'Yes ($16+)',
      competitors: { 'Lovable': 'Yes', 'Bolt.new': 'External', 'v0': 'No' }
    },
    {
      feature: 'Mobile Apps',
      tool: 'Beta',
      competitors: { 'Lovable': 'No', 'Bolt.new': 'Web only', 'v0': 'No' }
    },
    {
      feature: 'AI Models',
      tool: 'GPT-4o + Claude',
      competitors: { 'Lovable': 'GPT-4 + Claude', 'Bolt.new': 'Multiple', 'v0': 'Automatic' }
    }
  ],

  integrations: [
    { name: 'GPT-4o', category: 'AI Model', icon: '🤖', description: 'OpenAI integration' },
    { name: 'Claude 3.5', category: 'AI Model', icon: '🧠', description: 'Anthropic Claude' },
    { name: 'Stripe', category: 'Payments', icon: '💳', description: 'Payment processing' },
    { name: 'Google Maps', category: 'Maps', icon: '🗺️', description: 'Location services' },
    { name: 'Zapier', category: 'Automation', icon: '⚡', description: 'Workflow automation' },
    { name: 'Neon', category: 'Database', icon: '🗄️', description: 'Database partner' },
    { name: 'ElevenLabs', category: 'AI', icon: '🎙️', description: 'Text-to-speech' },
    { name: 'Stable Diffusion', category: 'AI', icon: '🎨', description: 'Image generation' }
  ],

  reviews: [
    {
      author: 'Non-Technical Founder',
      role: 'Entrepreneur',
      company: 'Startup',
      rating: 5,
      comment: 'The best no-code builder I have used! Built my MVP in days instead of months without any coding knowledge.',
      verified: true
    },
    {
      author: 'Developer',
      role: 'Full-Stack Engineer',
      company: 'Tech Company',
      rating: 5,
      comment: 'Great AI Web/App builder. Even as a developer, I use it for rapid prototyping. Excellent customer support. 10/10',
      verified: true
    },
    {
      author: 'Product Manager',
      role: 'PM',
      company: 'SaaS Startup',
      rating: 4,
      comment: 'Very easy to use for someone with 0 coding skills. The natural language interface is incredibly intuitive.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://create.xyz/docs/welcome',
    github: 'https://github.com/createxyz',
    twitter: 'https://twitter.com/createxyz',
    support: 'hello@createanything.com',
    blog: 'https://create.xyz/blog'
  },

  faqs: [
    {
      question: 'How is Create.xyz different from Lovable or Bolt.new?',
      answer: 'Create.xyz focuses on natural language app building with 50+ integrations and complete code export. While Lovable specializes in Supabase-backed apps and Bolt.new offers in-browser development, Create.xyz provides instant deployment with custom domains and a credit-based system that\'s more flexible for varied project sizes.'
    },
    {
      question: 'What can I build with Create.xyz?',
      answer: 'You can build full-stack web applications including e-commerce platforms, internal business tools, customer portals, data dashboards, content management systems, and mobile apps (Beta). The platform handles frontend, backend, databases, user authentication, file uploads, and payment processing automatically.'
    },
    {
      question: 'Can I export and modify the code?',
      answer: 'Yes! Unlike many no-code platforms, Create.xyz allows complete code export. You can download your entire project and modify it as needed. This gives you full ownership and prevents vendor lock-in, making it ideal for MVPs that may need custom development later.'
    },
    {
      question: 'What AI models does Create.xyz use?',
      answer: 'Create.xyz leverages multiple AI models including GPT-4o, Claude 3.5 Sonnet, Stable Diffusion for images, and Google Gemini. The platform automatically selects the best model for each task, ensuring optimal results for different aspects of app development.'
    },
    {
      question: 'How does the credit system work?',
      answer: 'Credits are consumed based on AI usage and complexity. The free tier includes 5,000 one-time credits. Pro plans offer 20,000 to 110,000 monthly credits. Simple tasks use fewer credits while complex app generation uses more. Most apps can be built with the Pro 20k plan at $16/month.'
    },
    {
      question: 'Is Create.xyz suitable for production apps?',
      answer: 'Yes, Create.xyz is suitable for production use with custom domains, SSL, and reliable hosting. The platform is backed by $8.5M in funding from Bessemer Venture Partners and has notable investors like Tobias Lütke (Shopify CEO). Many entrepreneurs use it for live MVPs and customer-facing applications.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://create.xyz" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Create.xyz</a> (Anything AI) revolutionizes app development by transforming natural language descriptions into fully functional web applications powered by <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GPT-4o</a> and <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Claude 3.5 Sonnet</a>. Backed by <a href="https://www.bvp.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Bessemer Venture Partners</a> with $8.5M in funding and support from <a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Shopify</a> CEO Tobias Lütke, Create.xyz empowers non-technical founders to build MVPs in days instead of months. Unlike <Link href="/tools/lovable" className="text-purple-400 hover:text-purple-300">Lovable</Link>'s Supabase focus or <Link href="/tools/bolt-new" className="text-purple-400 hover:text-purple-300">Bolt.new</Link>'s developer-centric approach, Create.xyz offers 50+ integrations including <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Stripe</a> payments and complete code export for true ownership.
      </p>
      
      <p className="text-lg leading-relaxed">
        Starting free with 5,000 credits and scaling to $80/month for 110,000 credits, Create.xyz democratizes app development through its conversational AI interface that handles frontend, backend, databases, and deployment automatically. The platform's unique combination of instant publishing with custom domains, mobile app development (Beta), and integration with <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Zapier</a> and <a href="https://neon.tech" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Neon</a> databases positions it as the ideal choice for entrepreneurs and developers seeking rapid prototyping without sacrificing code-level control. While <Link href="/tools/v0" className="text-purple-400 hover:text-purple-300">v0</Link> excels at UI components and <Link href="/tools/builder-io-ai" className="text-purple-400 hover:text-purple-300">Builder.io AI</Link> focuses on design-to-code, Create.xyz delivers complete, deployable applications from simple English descriptions.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Create.xyz?',
    segments: [
      {
        name: 'Non-Technical Founders',
        description: 'Entrepreneurs build MVPs and validate ideas without hiring developers or learning to code.',
        icon: Rocket,
        stats: 'Days not months'
      },
      {
        name: 'Developers',
        description: 'Engineers use Create.xyz for rapid prototyping and accelerating development workflows.',
        icon: Code,
        stats: '10x faster'
      },
      {
        name: 'Startups',
        description: 'Early-stage companies launch products quickly and iterate based on user feedback.',
        icon: Building2,
        stats: '$8.5M backed'
      },
      {
        name: 'Product Teams',
        description: 'PMs and designers create functional prototypes for testing and stakeholder demos.',
        icon: Users,
        stats: '50+ integrations'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Create.xyz Unique?',
    points: [
      {
        title: 'Natural Language Everything',
        description: 'Build complex apps by describing functionality in plain English—no technical knowledge required.',
        icon: MessageSquare
      },
      {
        title: 'Complete Code Export',
        description: 'Download and own your entire project. No vendor lock-in, full flexibility for custom development.',
        icon: Download
      },
      {
        title: '50+ Native Integrations',
        description: 'Pre-built connections to Stripe, Google Maps, Zapier, and dozens more services out of the box.',
        icon: Package
      },
      {
        title: 'Multi-AI Intelligence',
        description: 'Leverages GPT-4o, Claude 3.5, Stable Diffusion, and Gemini for optimal results across tasks.',
        icon: Brain
      },
      {
        title: 'Mobile Apps in Beta',
        description: 'One of the few AI builders expanding into native mobile app development capabilities.',
        icon: Rocket
      }
    ]
  }
}

export default function CreateXYZPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={createData} />
    </>
  )
}
'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Smartphone, Paintbrush } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const flutterflowData = {
  name: 'FlutterFlow',
  tagline: 'AI-powered visual app builder that generates native Flutter code',
  description: 'FlutterFlow revolutionizes mobile app development with AI Gen that creates entire app pages from text prompts. Build production-ready iOS, Android, and web apps with visual tools, export clean Flutter code, and deploy instantly.',
  url: 'https://flutterflow.io',
  category: 'AI App Builder',
  logo: '/logos/flutterflow.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          '2 projects',
          'Visual development',
          '1,000+ templates',
          '5 AI Gen requests (lifetime)',
          'Flutter preview',
          'Community support',
          'Basic widgets'
        ],
        highlighted: false
      },
      {
        name: 'Basic',
        price: '$39',
        features: [
          'Unlimited projects',
          'Code & APK download',
          '1 custom domain',
          '50 AI Gen requests/month',
          'Remove FlutterFlow branding',
          'GitHub integration',
          'Custom functions'
        ],
        highlighted: true
      },
      {
        name: 'Growth',
        price: '$80',
        features: [
          '2 team members',
          '200 AI Gen requests/month',
          '2 project branches',
          'One-click localization',
          'Real-time collaboration',
          'API endpoints',
          'Advanced animations'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Business',
        price: '$150',
        features: [
          '5 team members',
          '500 AI Gen requests/month',
          '5 project branches',
          '3 automated tests/project',
          'Priority support',
          'Code review',
          'Custom packages'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Bot,
      title: 'AI Gen Page Builder',
      description: 'Generate entire app pages from text prompts. AI creates UI, database schema, and logic flows instantly.'
    },
    {
      icon: Paintbrush,
      title: 'Visual Development',
      description: '200+ pre-built widgets and templates. Drag-and-drop interface with pixel-perfect design control.'
    },
    {
      icon: Code,
      title: 'Clean Code Export',
      description: 'Export production-ready Flutter code anytime. No vendor lock-in, full ownership of your codebase.'
    },
    {
      icon: Smartphone,
      title: 'Multi-Platform Deploy',
      description: 'Build once, deploy everywhere. Native iOS, Android, and responsive web apps from single codebase.'
    },
    {
      icon: Database,
      title: 'Firebase & Supabase',
      description: 'Built-in integrations with Firebase and Supabase. Real-time databases, auth, and cloud functions.'
    },
    {
      icon: Zap,
      title: 'Action Flow Editor',
      description: 'Visual logic builder for complex workflows. No-code backend logic with conditional flows and API calls.'
    }
  ],

  comparisons: [
    {
      feature: 'Starting Price',
      tool: '$0 Free',
      competitors: { 'Bubble': '$32', 'Adalo': '$45', 'Buildfire': '$159' }
    },
    {
      feature: 'AI Generation',
      tool: 'Full pages',
      competitors: { 'Bubble': 'No', 'Adalo': 'Limited', 'Buildfire': 'No' }
    },
    {
      feature: 'Code Export',
      tool: 'Full Flutter',
      competitors: { 'Bubble': 'No', 'Adalo': 'No', 'Buildfire': 'No' }
    },
    {
      feature: 'Native Performance',
      tool: '100% native',
      competitors: { 'Bubble': 'Web only', 'Adalo': 'Wrapper', 'Buildfire': 'Hybrid' }
    },
    {
      feature: 'Templates',
      tool: '1,000+',
      competitors: { 'Bubble': '100+', 'Adalo': '50+', 'Buildfire': '200+' }
    },
    {
      feature: 'Team Collaboration',
      tool: 'Real-time',
      competitors: { 'Bubble': 'Yes', 'Adalo': 'Limited', 'Buildfire': 'Basic' }
    }
  ],

  integrations: [
    { name: 'Firebase', category: 'Backend', icon: '🔥', description: 'Full integration' },
    { name: 'Supabase', category: 'Database', icon: '⚡', description: 'Real-time DB' },
    { name: 'Stripe', category: 'Payments', icon: '💳', description: 'Payment processing' },
    { name: 'Google Maps', category: 'Maps', icon: '🗺️', description: 'Location services' },
    { name: 'GitHub', category: 'Version Control', icon: '🐙', description: 'Code sync' },
    { name: 'RevenueCat', category: 'Monetization', icon: '💰', description: 'Subscriptions' },
    { name: 'Algolia', category: 'Search', icon: '🔍', description: 'Advanced search' },
    { name: 'Braintree', category: 'Payments', icon: '🏦', description: 'Payment gateway' }
  ],

  reviews: [
    {
      author: 'Mobile Developer',
      role: 'Startup Founder',
      company: 'SaaS Startup',
      rating: 5,
      comment: 'Built our MVP in 2 weeks instead of 3 months. The AI Gen feature literally creates entire screens from descriptions. Game-changer!',
      verified: true
    },
    {
      author: 'Agency Owner',
      role: 'CEO',
      company: 'App Development Agency',
      rating: 5,
      comment: 'We deliver client apps 5x faster now. FlutterFlow\'s code export means we\'re never locked in. Clean, maintainable Flutter code.',
      verified: true
    },
    {
      author: 'Product Manager',
      role: 'Enterprise Team',
      company: 'Fortune 500',
      rating: 5,
      comment: 'Non-technical team members can now build functional prototypes. The visual editor plus AI assistance democratizes app development.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.flutterflow.io',
    github: 'https://github.com/FlutterFlow',
    community: 'https://community.flutterflow.io',
    youtube: 'https://youtube.com/@FlutterFlow',
    support: 'https://support.flutterflow.io'
  },

  faqs: [
    {
      question: 'How does FlutterFlow AI Gen work?',
      answer: 'FlutterFlow AI Gen uses advanced language models to transform text descriptions into complete app pages. Simply describe what you want like "create a social media feed with posts, likes, and comments" and AI generates the UI, database schema, and action flows. You get 5 free requests on the free plan, 50/month on Basic, and up to 500/month on Business plans.'
    },
    {
      question: 'Can I export and own the code completely?',
      answer: 'Yes! FlutterFlow provides complete code export starting from the Basic plan ($39/month). You get clean, production-ready Flutter code that you fully own. No vendor lock-in - you can continue development in any IDE like VS Code or Android Studio. The exported code is well-structured and maintainable.'
    },
    {
      question: 'How does FlutterFlow compare to Bubble or Adalo?',
      answer: 'Unlike Bubble (web-only) or Adalo (wrapped apps), FlutterFlow generates true native Flutter apps with 100% native performance. FlutterFlow offers code export (others don\'t), has 10x more templates, includes AI generation, and starts free. While Bubble costs $32/month minimum, FlutterFlow\'s free tier is surprisingly powerful.'
    },
    {
      question: 'What kind of apps can I build with FlutterFlow?',
      answer: 'FlutterFlow can build any type of mobile or web app - from simple MVPs to complex enterprise applications. Popular use cases include e-commerce apps, social networks, marketplaces, SaaS products, internal tools, and educational platforms. With Firebase/Supabase integration, you can build real-time, data-driven applications.'
    },
    {
      question: 'Do I need coding knowledge to use FlutterFlow?',
      answer: 'No coding required for most features! The visual builder and AI Gen handle the technical complexity. However, knowing Flutter/Dart allows you to add custom functions and advanced features. FlutterFlow bridges the gap - non-coders can build functional apps while developers can extend with custom code.'
    },
    {
      question: 'How does team collaboration work?',
      answer: 'FlutterFlow offers real-time collaboration starting from the Growth plan ($80/month for 2 users). Multiple team members can work on the same project simultaneously with live updates. The platform includes branching for version control, project permissions, and commenting features for seamless teamwork.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://flutterflow.io" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">FlutterFlow</a> revolutionizes mobile app development by combining AI-powered generation with visual development tools, enabling anyone to build production-ready native apps without coding. Unlike <Link href="/tools/bubble" className="text-purple-400 hover:text-purple-300">Bubble</Link>'s web-only approach or traditional no-code platforms with vendor lock-in, FlutterFlow generates clean <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Flutter</a> code that you fully own and can export anytime. With AI Gen creating entire app pages from text descriptions and over 1,000 templates, FlutterFlow accelerates development by 10x while maintaining the performance and flexibility of custom-coded apps. The platform's integration with <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Firebase</a> and <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Supabase</a> enables real-time features, while support for <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Stripe</a> and <a href="https://www.revenuecat.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">RevenueCat</a> handles monetization seamlessly.
      </p>
      
      <p className="text-lg leading-relaxed">
        Starting completely free with 2 projects and 5 AI generation requests, FlutterFlow scales from solo developers building MVPs to enterprise teams deploying complex applications. The Basic plan at $39/month unlocks unlimited projects and crucial code export, while the Business plan at $150/month provides 500 AI requests monthly and team collaboration for up to 5 members. What sets FlutterFlow apart from competitors like <Link href="/tools/adalo" className="text-purple-400 hover:text-purple-300">Adalo</Link> or <Link href="/tools/buildfire" className="text-purple-400 hover:text-purple-300">BuildFire</Link> is the combination of visual simplicity, AI assistance, and professional code output—agencies report delivering client apps 5x faster while maintaining full code ownership. With Google's <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Flutter framework</a> as its foundation and recent launch of Dreamflow AI capabilities, FlutterFlow represents the future where AI and visual tools democratize native app development without sacrificing performance or flexibility.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses FlutterFlow?',
    segments: [
      {
        name: 'Startup Founders',
        description: 'Build MVPs in weeks not months. Launch faster with AI-generated pages and pre-built templates.',
        icon: Rocket,
        stats: '2 week MVPs'
      },
      {
        name: 'Development Agencies',
        description: 'Deliver client projects 5x faster while maintaining code quality and ownership.',
        icon: Building2,
        stats: '5x faster delivery'
      },
      {
        name: 'Enterprise Teams',
        description: 'Enable non-technical members to build prototypes while developers focus on complex features.',
        icon: Users,
        stats: 'Democratized development'
      },
      {
        name: 'Solo Developers',
        description: 'Build and ship apps independently with AI assistance and visual tools.',
        icon: Code,
        stats: 'Ship 10x faster'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes FlutterFlow Unique?',
    points: [
      {
        title: 'AI Gen Pages',
        description: 'Generate complete app pages from text—UI, database, and logic created instantly by AI.',
        icon: Bot
      },
      {
        title: 'Code Export Freedom',
        description: 'Export clean Flutter code anytime. No vendor lock-in, full ownership of your codebase.',
        icon: GitBranch
      },
      {
        title: '100% Native Performance',
        description: 'True native apps, not web wrappers. Flutter delivers 60 FPS smooth performance.',
        icon: Zap
      },
      {
        title: 'Visual + Code Hybrid',
        description: 'Design visually, extend with code. Perfect balance for teams with mixed skill levels.',
        icon: Layers
      },
      {
        title: '1,000+ Templates',
        description: 'Largest template library in no-code space. Complete apps ready to customize.',
        icon: Package
      }
    ]
  }
}

export default function FlutterFlowPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={flutterflowData} />
    </>
  )
}
'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Palette, Eye } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const builderData = {
  name: 'Builder.io AI',
  tagline: 'Transform Figma designs into production code with AI',
  description: 'Builder.io AI features Visual Copilot that converts Figma designs to pixel-perfect React, Vue, Angular code. The only platform combining visual development, AI-powered design-to-code, and enterprise collaboration.',
  url: 'https://builder.io/ai',
  category: 'Visual AI Builder',
  logo: '/logos/builder-io.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          '1 space, 1 user',
          '20 AI code generations',
          '4k context window',
          '10k visual CMS views',
          'Unlimited API calls',
          '7-day activity history',
          'Community support'
        ]
      },
      {
        name: 'Basic',
        price: '$19/user',
        features: [
          '1 space, 3 users',
          'Enhanced AI generations',
          '100k visual CMS views',
          'Localization support',
          'A/B testing & analytics',
          'Heat maps',
          '30-day activity history'
        ],
        highlighted: true
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Custom spaces & roles',
          'Unlimited AI generations',
          '128k context window',
          'SSO authentication',
          '99.9% uptime SLA',
          'Premium support',
          'Private plugins'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Palette,
      title: 'Figma to Production Code',
      description: 'Convert Figma designs directly to React, Vue, Angular, Svelte, or HTML with pixel-perfect accuracy and responsiveness.'
    },
    {
      icon: Brain,
      title: 'Custom-Trained AI Model',
      description: 'Specialized model trained on 2M+ data points, not generic LLMs. Understands design patterns and best practices.'
    },
    {
      icon: FileCode,
      title: 'Component Intelligence',
      description: 'Automatically reuses existing components from your codebase, maintaining consistency and reducing redundancy.'
    },
    {
      icon: Sparkles,
      title: 'Interactive Designs',
      description: 'Make static Figma designs interactive with natural language. Add animations, states, and behaviors instantly.'
    },
    {
      icon: Users,
      title: 'Visual CMS',
      description: 'Drag-and-drop content creation for marketers. Real-time collaboration between designers, developers, and content teams.'
    },
    {
      icon: Shield,
      title: 'Enterprise Grade',
      description: 'SOC 2 compliant, 99.9% uptime SLA, SSO, and dedicated support for enterprise teams and workflows.'
    }
  ],

  comparisons: [
    {
      feature: 'Figma to Code',
      tool: 'Native AI',
      competitors: { 'v0': 'No', 'Lovable': 'No', 'Bolt.new': 'No' }
    },
    {
      feature: 'Visual Development',
      tool: 'Full Platform',
      competitors: { 'v0': 'Components only', 'Lovable': 'Code-first', 'Bolt.new': 'Code-first' }
    },
    {
      feature: 'Code Export',
      tool: 'Production-ready',
      competitors: { 'v0': 'Copy code', 'Lovable': 'GitHub export', 'Bolt.new': 'Download' }
    },
    {
      feature: 'Starting Price',
      tool: '$0 Free',
      competitors: { 'v0': '$0 Free', 'Lovable': '$0 Free', 'Bolt.new': '$0 Free' }
    },
    {
      feature: 'Enterprise Features',
      tool: 'Full suite',
      competitors: { 'v0': 'Limited', 'Lovable': 'Basic', 'Bolt.new': 'Basic' }
    },
    {
      feature: 'Team Collaboration',
      tool: 'Advanced',
      competitors: { 'v0': 'Basic', 'Lovable': 'GitHub-based', 'Bolt.new': 'Basic' }
    }
  ],

  integrations: [
    { name: 'Figma', category: 'Design', icon: '🎨', description: 'Primary design integration' },
    { name: 'React', category: 'Framework', icon: '⚛️', description: 'React & Next.js' },
    { name: 'Vue', category: 'Framework', icon: '💚', description: 'Vue.js support' },
    { name: 'Angular', category: 'Framework', icon: '🔺', description: 'Angular apps' },
    { name: 'Shopify', category: 'Platform', icon: '🛍️', description: 'E-commerce integration' },
    { name: 'WordPress', category: 'CMS', icon: '📝', description: 'WordPress sites' },
    { name: 'Cursor', category: 'IDE', icon: '💻', description: 'IDE integration' },
    { name: 'Microsoft', category: 'Partner', icon: '🪟', description: 'M12 investment' }
  ],

  reviews: [
    {
      author: 'Engineering Team',
      role: 'Senior Developers',
      company: 'Everlane',
      rating: 5,
      comment: 'Visual Copilot transformed our design-to-development workflow. We ship 3x faster with perfect Figma fidelity.',
      verified: true
    },
    {
      author: 'Marketing Director',
      role: 'Content Team Lead',
      company: 'Alo Yoga',
      rating: 5,
      comment: 'Finally, we can update content without developer bottlenecks. The visual CMS is intuitive and powerful.',
      verified: true
    },
    {
      author: 'Product Manager',
      role: 'Digital Products',
      company: 'Zapier',
      rating: 4,
      comment: 'The AI understands our design system perfectly. Component reuse saves us countless hours.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://www.builder.io/c/docs',
    github: 'https://github.com/BuilderIO',
    discord: 'https://discord.gg/builder',
    twitter: 'https://twitter.com/builderio',
    blog: 'https://www.builder.io/blog'
  },

  faqs: [
    {
      question: 'How is Builder.io AI different from v0 or Lovable?',
      answer: 'Builder.io AI specializes in converting Figma designs to production code with a custom-trained model (2M+ data points). While v0 generates UI components from prompts and Lovable builds full apps conversationally, Builder.io focuses on the design-to-code workflow with pixel-perfect accuracy and component intelligence that reuses your existing codebase.'
    },
    {
      question: 'What is Visual Copilot and how does it work?',
      answer: 'Visual Copilot is Builder.io\'s AI that converts Figma designs directly to React, Vue, Angular, or other framework code. It uses a specialized AI model trained on design patterns, automatically maintains responsiveness, reuses existing components, and can make designs interactive through natural language prompts.'
    },
    {
      question: 'Can I export the generated code?',
      answer: 'Yes! Builder.io generates production-ready code that you fully own. Unlike some competitors, the code integrates directly with your existing codebase through the Visual Copilot CLI, maintaining your architecture patterns and component libraries.'
    },
    {
      question: 'What frameworks does Builder.io support?',
      answer: 'Builder.io supports React, Next.js, Vue, Angular, Svelte, Qwik, Solid, React Native, Flutter, Swift, Kotlin, and plain HTML/CSS. It\'s framework-agnostic and generates code that follows each framework\'s best practices.'
    },
    {
      question: 'Is Builder.io suitable for enterprise teams?',
      answer: 'Absolutely. Builder.io serves 400+ enterprise customers including Everlane, Alo Yoga, Afterpay, and Zapier. Enterprise features include SSO, 99.9% uptime SLA, SOC 2 compliance, custom workflows, and dedicated support. Microsoft\'s VC arm (M12) led their $20M Series B funding.'
    },
    {
      question: 'How much does Builder.io AI cost?',
      answer: 'Builder.io offers a generous free tier with 20 AI code generations and 10k visual CMS views. The Basic plan at $19/user/month includes enhanced AI features and 100k views. Enterprise pricing is custom and includes unlimited generations with a 128k context window.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://builder.io/ai" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Builder.io AI</a> revolutionizes the design-to-development workflow with Visual Copilot, the industry's most advanced <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Figma</a> to code converter powered by a custom-trained AI model with 2M+ data points. Unlike <Link href="/tools/v0" className="text-purple-400 hover:text-purple-300">v0</Link>'s component generation or <Link href="/tools/lovable" className="text-purple-400 hover:text-purple-300">Lovable</Link>'s conversational approach, Builder.io transforms complete Figma designs into pixel-perfect <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">React</a>, <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Vue</a>, or <a href="https://angular.io" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Angular</a> code while intelligently reusing existing components from your codebase. Trusted by 400+ enterprises including <a href="https://www.everlane.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Everlane</a> and <a href="https://www.zapier.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Zapier</a>, the platform accelerates development by 3x while maintaining design system consistency.
      </p>
      
      <p className="text-lg leading-relaxed">
        Backed by <a href="https://m12.vc" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Microsoft's M12</a> with $37.2M in funding, Builder.io AI bridges the gap between design and development through its unique combination of visual CMS for marketers, enterprise-grade security with SOC 2 compliance, and seamless integration with <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link> and <Link href="/tools/windsurf" className="text-purple-400 hover:text-purple-300">Windsurf</Link> IDEs. Starting free with 20 AI generations monthly, Builder.io democratizes professional design-to-code conversion while offering enterprise teams unlimited generations, 128k context windows, and dedicated support—making it the definitive platform for teams seeking to eliminate the handoff friction between designers and developers while shipping production-ready code at unprecedented speed.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Builder.io AI?',
    segments: [
      {
        name: 'Enterprise Teams',
        description: '400+ companies like Everlane, Alo Yoga, and Zapier use Builder.io for 3x faster development.',
        icon: Building2,
        stats: '400+ enterprises'
      },
      {
        name: 'Design Teams',
        description: 'Designers ensure pixel-perfect implementation without developer interpretation errors.',
        icon: Palette,
        stats: 'Pixel-perfect code'
      },
      {
        name: 'Marketing Teams',
        description: 'Marketers create and update content autonomously without developer dependencies.',
        icon: Target,
        stats: '100k+ CMS views'
      },
      {
        name: 'Development Teams',
        description: 'Developers focus on logic while AI handles the tedious design implementation work.',
        icon: Code,
        stats: '3x faster shipping'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Builder.io AI Unique?',
    points: [
      {
        title: 'Only Native Figma-to-Code AI',
        description: 'Purpose-built for design-to-development workflow with specialized AI model, not generic LLMs.',
        icon: Palette
      },
      {
        title: 'Component Intelligence',
        description: 'Automatically detects and reuses existing components from your codebase, maintaining consistency.',
        icon: Brain
      },
      {
        title: 'Production-Ready Export',
        description: 'Generate code that integrates directly with your architecture, not isolated components.',
        icon: FileCode
      },
      {
        title: 'Visual + Code Hybrid',
        description: 'Combines visual development for marketers with code generation for developers.',
        icon: Eye
      },
      {
        title: 'Microsoft-Backed Enterprise',
        description: 'M12 investment validates enterprise readiness with SOC 2 compliance and 99.9% SLA.',
        icon: Shield
      }
    ]
  }
}

export default function BuilderIOAIPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={builderData} />
    </>
  )
}
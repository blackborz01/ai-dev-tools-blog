'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Zap, Code, Shield, Brain, Rocket, Target, GitBranch, Users, Globe, Package, Terminal, Server, Database, Cloud, Sparkles, Layers, Building2, GraduationCap, Briefcase, Cpu } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const boltNewData = {
  name: 'Bolt.new',
  tagline: 'Build full-stack web apps in your browser with AI',
  description: 'Bolt.new by StackBlitz lets you prompt, run, edit, and deploy full-stack applications entirely in your browser. Powered by WebContainers and AI, it gives you complete control over the development environment—install packages, run backends, and ship to production without any setup.',
  url: 'https://bolt.new',
  category: 'AI Full-Stack Builder',
  logo: '/logos/bolt-new.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          '150,000 tokens daily',
          '1 million tokens monthly cap',
          'Browser-based code editor',
          'AI prompt capabilities',
          'Basic collaboration tools',
          'Public and private projects',
          'Deploy to Netlify'
        ]
      },
      {
        name: 'Simple Pro',
        price: '$20',
        features: [
          'Everything in Free',
          '10 million tokens monthly',
          'Priority AI responses',
          'Advanced code generation',
          'Unlimited private projects',
          'Team collaboration',
          'Priority support'
        ],
        highlighted: true
      },
      {
        name: 'Pro 50',
        price: '$50',
        features: [
          'Everything in Simple Pro',
          '26 million tokens monthly',
          'Faster AI processing',
          'Advanced deployment options',
          'Custom domains',
          'Analytics dashboard'
        ]
      },
      {
        name: 'Pro 100',
        price: '$100',
        features: [
          'Everything in Pro 50',
          '55 million tokens monthly',
          'Highest priority processing',
          'Advanced team features',
          'Priority email support'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Pro 200',
        price: '$200',
        features: [
          '120 million tokens monthly',
          'All Pro features',
          'Dedicated support channel',
          'Advanced admin controls',
          'Team analytics',
          'SSO available'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Custom token packages',
          'Dedicated support team',
          'Custom integrations',
          'On-premise deployment',
          'Security compliance',
          'SLA guarantees',
          'Training and onboarding'
        ],
        highlighted: true
      }
    ]
  },

  metrics: {
    users: '1M+ sites deployed',
    stars: '5K+ GitHub',
    downloads: 'Browser-based',
    uptime: '99.9%',
    responseTime: '<2s'
  },

  features: [
    {
      title: 'Full-Stack in Browser',
      description: 'Complete development environment powered by WebContainers. No local setup required—everything runs in your browser with full Node.js support.',
      icon: Globe,
      highlight: true
    },
    {
      title: 'AI Environment Control',
      description: 'Unlike other tools, AI has complete control over filesystem, Node server, package manager, terminal, and browser console.',
      icon: Brain
    },
    {
      title: 'Install Any NPM Package',
      description: 'Full npm/yarn support lets you install any package, configure backends, and integrate databases like Supabase—all in browser.',
      icon: Package
    },
    {
      title: 'Multi-Framework Support',
      description: 'Works with Astro, Vite, Next.js, Svelte, Vue, Remix, and more. Build with your favorite framework without limitations.',
      icon: Layers
    },
    {
      title: 'One-Click Deploy',
      description: 'Deploy directly to Netlify with integrated deployment pipeline. Ship from development to production in seconds.',
      icon: Rocket
    },
    {
      title: 'WebContainers Technology',
      description: 'StackBlitz\'s proprietary WebContainers run Node.js entirely in browser, providing instant, secure development environments.',
      icon: Server
    },
    {
      title: 'Real-time Collaboration',
      description: 'Work together in real-time with team members. Share projects, pair program, and collaborate without screen sharing.',
      icon: Users
    },
    {
      title: 'Open Source Alternative',
      description: 'Bolt.diy available as open source version, supporting multiple LLMs including GPT-4, Claude, Ollama, and more.',
      icon: GitBranch
    }
  ],

  integrations: [
    { name: 'Netlify', type: 'Deployment' },
    { name: 'Vercel', type: 'Deployment' },
    { name: 'Supabase', type: 'Database' },
    { name: 'Firebase', type: 'Backend' },
    { name: 'Next.js', type: 'Framework' },
    { name: 'React', type: 'Framework' },
    { name: 'Vue', type: 'Framework' },
    { name: 'Svelte', type: 'Framework' },
    { name: 'Astro', type: 'Framework' },
    { name: 'Remix', type: 'Framework' },
    { name: 'Tailwind CSS', type: 'Styling' },
    { name: 'npm', type: 'Package Manager' }
  ],

  comparisons: [
    {
      feature: 'Full Environment Control',
      tool: true,
      competitors: { 'v0': false, 'Claude Code': 'Terminal only', 'Cursor': 'Local only' }
    },
    {
      feature: 'Install NPM Packages',
      tool: true,
      competitors: { 'v0': false, 'Claude Code': true, 'Cursor': true }
    },
    {
      feature: 'Run Backend Code',
      tool: true,
      competitors: { 'v0': false, 'Claude Code': true, 'Cursor': true }
    },
    {
      feature: 'Browser-Based',
      tool: '100% Browser',
      competitors: { 'v0': 'UI only', 'Claude Code': false, 'Cursor': false }
    },
    {
      feature: 'Deploy to Production',
      tool: 'One-click',
      competitors: { 'v0': 'Via Vercel', 'Claude Code': 'Manual', 'Cursor': 'Manual' }
    },
    {
      feature: 'Price (Monthly)',
      tool: '$0-200',
      competitors: { 'v0': '$0-30', 'Claude Code': '$20-150', 'Cursor': '$20' }
    },
    {
      feature: 'Token System',
      tool: '150K daily free',
      competitors: { 'v0': 'Credit-based', 'Claude Code': 'Usage-based', 'Cursor': 'Unlimited' }
    },
    {
      feature: 'Open Source Version',
      tool: 'Bolt.diy',
      competitors: { 'v0': false, 'Claude Code': false, 'Cursor': false }
    }
  ],

  resources: {
    documentation: 'https://docs.bolt.new',
    github: 'https://github.com/stackblitz/bolt.new',
    discord: 'https://discord.com/invite/stackblitz',
    youtube: 'https://youtube.com/@stackblitz',
    blog: 'https://blog.stackblitz.com'
  },

  faqs: [
    {
      question: 'How is Bolt.new different from v0 or Claude?',
      answer: 'While v0 generates UI components and Claude assists with code, Bolt.new provides a complete development environment. You can install packages, run backends, manage databases, and deploy—all from your browser with AI assistance.'
    },
    {
      question: 'What is the token system?',
      answer: 'Tokens are the currency for AI operations. Free users get 150,000 tokens daily (1M monthly cap). Each AI prompt consumes tokens based on complexity. Pro plans offer 10M to 120M tokens monthly.'
    },
    {
      question: 'Can I use my own AI models?',
      answer: 'The official Bolt.new uses integrated models, but the open-source Bolt.diy version supports OpenAI, Anthropic, Ollama, and 15+ other providers, letting you choose your preferred LLM.'
    },
    {
      question: 'Do I need technical knowledge to use Bolt.new?',
      answer: 'No! Bolt.new is designed for everyone—developers, designers, PMs, and beginners. Describe what you want to build, and the AI handles the technical implementation.'
    },
    {
      question: 'What frameworks are supported?',
      answer: 'Bolt.new supports all major JavaScript frameworks including Next.js, React, Vue, Svelte, Astro, Remix, and more. It also works with vanilla JavaScript and HTML/CSS projects.'
    },
    {
      question: 'Can I deploy commercial applications?',
      answer: 'Yes! Applications built with Bolt.new can be deployed commercially. The platform includes one-click deployment to Netlify, and you retain full ownership of your code.'
    },
    {
      question: 'Is there a self-hosted option?',
      answer: 'Yes, Bolt.diy is the open-source version you can self-host. It supports multiple LLM providers and gives you full control over your development environment.'
    },
    {
      question: 'What happens if I exceed my token limit?',
      answer: 'Free users can wait for the daily reset (150K tokens) or upgrade to a Pro plan. Pro users can purchase additional tokens or upgrade to a higher tier for more monthly tokens.'
    }
  ],

  whoUsesIt: {
    title: 'Who Uses Bolt.new?',
    segments: [
      {
        name: 'Full-Stack Developers',
        description: 'Over 1 million websites deployed in 5 months. Developers use {toolData.name} for rapid prototyping and building production apps without environment setup.',
        icon: Code,
        stats: '1M+ deploys'
      },
      {
        name: 'Startups & Founders',
        description: 'Non-technical founders and indie hackers leverage {toolData.name} to build MVPs without hiring developers. The $20 Pro plan is especially popular with solopreneurs.',
        icon: Rocket,
        stats: 'MVP ready'
      },
      {
        name: 'Designers & PMs',
        description: 'Product teams use {toolData.name} to turn ideas into working prototypes. No coding required—just describe what you want and iterate visually.',
        icon: Briefcase,
        stats: 'No code needed'
      },
      {
        name: 'Students & Learners',
        description: 'Educational institutions adopt {toolData.name} for teaching web development. Students can start coding immediately without complex setup or configuration.',
        icon: GraduationCap,
        stats: 'Learn by building'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Bolt.new Unique?',
    points: [
      {
        title: 'Complete Environment Control',
        description: 'Unlike {toolData.name} competitors that only generate code, Bolt gives AI full control over the entire development environment—filesystem, server, terminal, and console.',
        icon: Terminal
      },
      {
        title: 'WebContainers Revolution',
        description: 'StackBlitz\'s WebContainers technology runs Node.js entirely in your browser. No cloud VMs, no local setup—instant, secure development anywhere.',
        icon: Cloud
      },
      {
        title: 'Package Installation Freedom',
        description: 'Install any npm package, configure backends, integrate databases. {toolData.name} doesn\'t limit you to pre-approved libraries like other AI tools.',
        icon: Package
      },
      {
        title: 'From Idea to Deployment',
        description: 'Complete workflow in one platform. Build, test, and deploy to production with Netlify integration—no switching between tools or environments.',
        icon: Rocket
      },
      {
        title: 'Open Source Option',
        description: 'Bolt.diy provides a free, self-hostable alternative supporting 15+ LLM providers. Choose your AI model and maintain complete control.',
        icon: GitBranch
      }
    ]
  }
}

const BoltNewArticle = () => (
  <article className="prose prose-invert max-w-none">
    <h2 className="text-3xl font-bold mb-6">Bolt.new: The AI-Powered Full-Stack Development Revolution by StackBlitz</h2>
    
    <p className="text-lg leading-relaxed mb-6">
      In the rapidly evolving landscape of AI development tools, Bolt.new emerges as a game-changer that redefines what's possible in browser-based development. Unlike <Link href="/tools/v0" className="text-purple-400 hover:text-purple-300">v0 by Vercel</Link> which focuses on UI components, or <Link href="/tools/claude-code" className="text-purple-400 hover:text-purple-300">Claude Code</Link> which operates in terminals, Bolt.new delivers something unprecedented: a complete full-stack development environment powered by AI, running entirely in your browser.
    </p>

    <h3 className="text-2xl font-semibold mt-8 mb-4">The WebContainers Revolution</h3>
    
    <p className="mb-4">
      At the heart of Bolt.new lies <a href="https://stackblitz.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">StackBlitz's groundbreaking WebContainers technology</a>. This innovation runs Node.js applications entirely in the browser, eliminating the need for cloud VMs or local development setups. With over 1 million websites deployed in just five months, Bolt.new has proven that browser-based development isn't just feasible—it's the future.
    </p>

    <p className="mb-4">
      What sets Bolt.new apart is the level of control it grants to AI. While tools like <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link> assist with code generation, Bolt.new gives AI complete authority over the entire development environment. This includes the filesystem, Node server, package manager, terminal, and browser console—capabilities that were previously unimaginable in browser-based tools.
    </p>

    <h3 className="text-2xl font-semibold mt-8 mb-4">Beyond Code Generation: True Full-Stack Development</h3>

    <p className="mb-4">
      The ability to install any npm package sets Bolt.new apart from competitors. While <Link href="/tools/v0" className="text-purple-400 hover:text-purple-300">v0</Link> excels at generating UI components, it can't install packages or run backend code. Bolt.new breaks these barriers, allowing developers to configure backends, integrate databases like Supabase, and build production-ready applications without leaving the browser.
    </p>

    <p className="mb-4">
      Framework support is comprehensive, covering Next.js, React, Vue, Svelte, Astro, Remix, and more. This flexibility, combined with one-click deployment to Netlify, creates a seamless workflow from idea to production. As noted in the <a href="https://github.com/stackblitz/bolt.new" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">official GitHub repository</a>, "Claude, v0, etc are incredible—but you can't install packages, run backends or edit code. That's where Bolt.new stands out."
    </p>

    <h3 className="text-2xl font-semibold mt-8 mb-4">Democratizing Development with AI</h3>

    <p className="mb-4">
      Bolt.new isn't just for experienced developers. Product managers, designers, and even complete beginners can build production-grade applications by simply describing what they want. This democratization of development has attracted a diverse user base, from solo founders building MVPs to Fortune 500 companies prototyping new products.
    </p>

    <p className="mb-4">
      The platform's token-based pricing model makes it accessible to everyone. Free users receive 150,000 tokens daily (1 million monthly cap), sufficient for experimentation and learning. The popular $20 Simple Pro plan, with 10 million monthly tokens, hits the sweet spot for indie developers and freelancers, while enterprise plans offer custom token packages for larger teams.
    </p>

    <h3 className="text-2xl font-semibold mt-8 mb-4">The Open Source Alternative: Bolt.diy</h3>

    <p className="mb-4">
      In a move that demonstrates confidence in their technology, StackBlitz released <a href="https://github.com/stackblitz-labs/bolt.diy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Bolt.diy</a>, an open-source version that supports multiple LLM providers. Users can choose from OpenAI, Anthropic, Ollama, and 15+ other providers, maintaining complete control over their AI model selection. This flexibility is unmatched in the AI development tool space.
    </p>

    <h3 className="text-2xl font-semibold mt-8 mb-4">Performance and Reliability at Scale</h3>

    <p className="mb-4">
      With 99.9% uptime and sub-2-second response times, Bolt.new has proven its reliability at scale. The platform's architecture, built on StackBlitz's years of experience with browser-based development, ensures consistent performance even with complex applications. Real-time collaboration features enable teams to work together seamlessly, eliminating the friction of traditional development workflows.
    </p>

    <h3 className="text-2xl font-semibold mt-8 mb-4">The Future of AI-Assisted Development</h3>

    <p className="mb-4">
      As we look toward 2025, Bolt.new represents a paradigm shift in how we build web applications. The recent rebrand of StackBlitz to focus entirely on Bolt.new signals their commitment to this AI-first approach. With continuous improvements in AI models and WebContainers technology, the gap between describing an idea and deploying it to production continues to shrink.
    </p>

    <p className="mb-4">
      For teams evaluating AI development tools, Bolt.new offers a unique proposition. Unlike <Link href="/tools" className="text-purple-400 hover:text-purple-300">other AI coding assistants</Link> that augment existing workflows, Bolt.new reimagines the entire development process. Whether you're building a simple landing page or a complex full-stack application, Bolt.new provides the tools, environment, and AI assistance to go from concept to deployment faster than ever before.
    </p>

    <div className="mt-8 p-6 bg-purple-500/10 rounded-xl border border-purple-500/20">
      <h3 className="text-xl font-semibold mb-3">The Verdict</h3>
      <p className="mb-0">
        Bolt.new stands as a revolutionary force in AI-powered development, offering capabilities that seemed impossible just a year ago. Its combination of WebContainers technology, complete environment control, and seamless deployment creates an unparalleled development experience. While tools like <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link> excel in local development and <Link href="/tools/v0" className="text-purple-400 hover:text-purple-300">v0</Link> dominates UI generation, Bolt.new owns the browser-based full-stack development space. For anyone looking to build, prototype, or deploy web applications without the traditional setup overhead, Bolt.new isn't just an option—it's the future of web development.
      </p>
    </div>
  </article>
)

export default function BoltNewPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={boltNewData}>
        <BoltNewArticle />
      </ToolPageTemplate>
    </>
  )
}
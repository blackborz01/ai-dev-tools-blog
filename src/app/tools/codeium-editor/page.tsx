'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Gift, Lock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const codeiumData = {
  name: 'Codeium',
  tagline: 'Best-in-class AI code completion, completely free forever',
  description: 'Codeium provides AI-powered code completion, search, and chat for 70+ languages across 40+ IDEs. Forever free for individuals with unlimited usage, trusted by Adobe, Dropbox, IBM, and Tesla.',
  url: 'https://codeium.com',
  category: 'AI Code Assistant',
  logo: '/logos/codeium.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Individual',
        price: '$0',
        features: [
          'Free forever',
          'Unlimited usage',
          'Rapid autocomplete',
          'AI chat assistant',
          '70+ languages',
          '40+ IDEs',
          'End-to-end encryption'
        ],
        highlighted: true
      },
      {
        name: 'Teams',
        price: '$15',
        features: [
          'Everything in Individual',
          'Advanced context awareness',
          'Larger AI models',
          'Team collaboration',
          'Admin dashboard',
          'Priority support',
          'Usage analytics'
        ]
      },
      {
        name: 'Teams (Annual)',
        price: '$12',
        features: [
          'All Teams features',
          '20% annual discount',
          'Up to 200 seats',
          'Centralized billing',
          'Priority onboarding',
          'Dedicated success manager',
          'Custom integrations'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Unlimited seats',
          'Self-hosted option',
          'Fine-tuning on codebase',
          'SOC 2 Type 2 compliant',
          'SSO/SAML',
          'SLA guarantees',
          'Enterprise support portal'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Gift,
      title: 'Forever Free',
      description: 'Unlimited AI code completion for individuals. No credit card, no usage limits, no strings attached.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-second response times. Median latency under 200ms for instant code suggestions as you type.'
    },
    {
      icon: Code,
      title: '70+ Languages',
      description: 'Complete support for Python, JavaScript, TypeScript, Java, Go, Rust, C++, and 63+ more languages.'
    },
    {
      icon: Package,
      title: '40+ IDEs',
      description: 'Works in VS Code, JetBrains, Vim, Neovim, Emacs, Visual Studio, Xcode, and more.'
    },
    {
      icon: Brain,
      title: 'Context-Aware AI',
      description: 'Understands your entire codebase. Generates relevant suggestions based on your project context.'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Never trains on your code. End-to-end encryption. SOC 2 Type 2 compliant for enterprises.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$0 Forever',
      competitors: { 'GitHub Copilot': '$10', 'Cursor': '$20', 'Tabnine': '$12' }
    },
    {
      feature: 'Usage Limits',
      tool: 'Unlimited',
      competitors: { 'GitHub Copilot': 'Unlimited', 'Cursor': 'Limited', 'Tabnine': 'Limited' }
    },
    {
      feature: 'Languages',
      tool: '70+',
      competitors: { 'GitHub Copilot': '40+', 'Cursor': '30+', 'Tabnine': '30+' }
    },
    {
      feature: 'IDE Support',
      tool: '40+ IDEs',
      competitors: { 'GitHub Copilot': '10+ IDEs', 'Cursor': 'VS Code only', 'Tabnine': '15+ IDEs' }
    },
    {
      feature: 'Response Time',
      tool: '<200ms',
      competitors: { 'GitHub Copilot': '~300ms', 'Cursor': 'Variable', 'Tabnine': '~250ms' }
    },
    {
      feature: 'Privacy',
      tool: 'Never trains on code',
      competitors: { 'GitHub Copilot': 'May use code', 'Cursor': 'Privacy options', 'Tabnine': 'Privacy options' }
    }
  ],

  integrations: [
    { name: 'VS Code', category: 'IDE', icon: '📝', description: 'Full integration' },
    { name: 'JetBrains', category: 'IDE', icon: '🧩', description: 'All products' },
    { name: 'Vim/Neovim', category: 'Editor', icon: '⌨️', description: 'Native support' },
    { name: 'Visual Studio', category: 'IDE', icon: '🔷', description: 'Full support' },
    { name: 'Jupyter', category: 'Notebook', icon: '📊', description: 'Notebooks' },
    { name: 'Xcode', category: 'IDE', icon: '🍎', description: 'iOS/macOS' },
    { name: 'Chrome', category: 'Browser', icon: '🌐', description: 'Web IDE' },
    { name: 'Emacs', category: 'Editor', icon: '🐃', description: 'Package available' }
  ],

  reviews: [
    {
      author: 'Senior Engineer',
      role: 'Full-Stack Developer',
      company: 'Adobe',
      rating: 5,
      comment: 'Codeium matches Copilot\'s quality while being completely free. The speed is incredible - suggestions appear instantly. Game-changer for our team.',
      verified: true
    },
    {
      author: 'DevOps Lead',
      role: 'Infrastructure Engineer',
      company: 'Dropbox',
      rating: 5,
      comment: 'The fact that it never trains on our code was crucial for adoption. Enterprise-grade security with consumer-friendly UX.',
      verified: true
    },
    {
      author: 'Individual Developer',
      role: 'Open Source Contributor',
      company: 'Various Projects',
      rating: 5,
      comment: 'Finally, a free alternative that actually works! Better than paid options I\'ve tried. The 70+ language support is unmatched.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://codeium.com/docs',
    discord: 'https://discord.gg/codeium',
    github: 'https://github.com/Exafunction/codeium',
    blog: 'https://codeium.com/blog',
    support: 'https://codeium.com/support'
  },

  faqs: [
    {
      question: 'Is Codeium really free forever for individuals?',
      answer: 'Yes! Codeium is 100% free forever for individual developers with no usage limits, no credit card required, and no hidden fees. You get unlimited AI code completions, chat assistance, and search across 70+ languages and 40+ IDEs. The company is VC-funded and monetizes through Teams ($15/seat) and Enterprise plans.'
    },
    {
      question: 'How does Codeium compare to GitHub Copilot?',
      answer: 'Codeium offers comparable accuracy to GitHub Copilot while being completely free vs $10/month. Codeium supports 70+ languages (vs 40+), works in 40+ IDEs (vs 10+), and has faster response times (<200ms vs ~300ms). Most importantly, Codeium never trains on your code while Copilot may use it for model improvement.'
    },
    {
      question: 'What makes Codeium so fast?',
      answer: 'Codeium achieves sub-200ms median latency through optimized infrastructure built by ex-Google engineers. They use custom serving infrastructure, efficient model architectures, and strategic edge deployments. The result is instant code suggestions that appear as you type without any noticeable delay.'
    },
    {
      question: 'Which companies use Codeium?',
      answer: 'Codeium is trusted by leading tech companies including Adobe, Dropbox, IBM, Pinterest, Salesforce, and Tesla. These enterprises choose Codeium for its combination of high-quality AI assistance, enterprise-grade security (SOC 2 Type 2 compliant), and strong privacy guarantees.'
    },
    {
      question: 'Can Codeium work offline or in restricted environments?',
      answer: 'The standard Codeium requires internet connectivity for AI inference. However, Enterprise customers can opt for self-hosted deployments that run entirely within their infrastructure, enabling air-gapped or restricted environment usage. This option includes fine-tuning on proprietary codebases.'
    },
    {
      question: 'What programming languages does Codeium support best?',
      answer: 'Codeium excels at popular languages like Python, JavaScript, TypeScript, Java, Go, and Rust with highly accurate suggestions. It supports 70+ languages total including C++, C#, PHP, Ruby, Swift, Kotlin, and even configuration languages like YAML and Docker. The AI adapts to your coding style in any supported language.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://codeium.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Codeium</a> revolutionizes AI-powered coding by offering enterprise-grade code completion completely free for individual developers, challenging the paid model of <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link> ($10/month) and <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link> ($20/month). Built by ex-Google engineers and trusted by <a href="https://www.adobe.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Adobe</a>, <a href="https://www.dropbox.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Dropbox</a>, <a href="https://www.ibm.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">IBM</a>, and <a href="https://www.tesla.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Tesla</a>, Codeium delivers sub-200ms response times across 70+ programming languages and 40+ IDEs including <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">VS Code</a>, <a href="https://www.jetbrains.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">JetBrains</a>, and even <a href="https://www.vim.org" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Vim</a>.
      </p>
      
      <p className="text-lg leading-relaxed">
        What sets Codeium apart is its unwavering commitment to privacy—it never trains on user code, offers end-to-end encryption, and maintains SOC 2 Type 2 compliance for enterprise security. While competitors like <Link href="/tools/tabnine" className="text-purple-400 hover:text-purple-300">Tabnine</Link> charge $12/month for similar features and <Link href="/tools/amazon-codewhisperer" className="text-purple-400 hover:text-purple-300">Amazon CodeWhisperer</Link> limits free tier capabilities, Codeium provides unlimited AI assistance without restrictions. The platform's median latency under 200ms outperforms most competitors, delivering instant multi-line completions, intelligent refactoring, and context-aware suggestions. With the recent connection to <Link href="/tools/windsurf" className="text-purple-400 hover:text-purple-300">Windsurf Editor</Link> (Codeium's new AI-first IDE), the company demonstrates its commitment to pushing boundaries in AI-assisted development while maintaining the core principle: world-class AI coding tools should be accessible to every developer, regardless of budget.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Codeium?',
    segments: [
      {
        name: 'Individual Developers',
        description: 'Solo developers and open-source contributors who want premium AI assistance without monthly fees.',
        icon: Code,
        stats: 'Free forever'
      },
      {
        name: 'Enterprise Teams',
        description: 'Adobe, Dropbox, IBM, Tesla use Codeium for secure, compliant AI coding at scale.',
        icon: Building2,
        stats: 'Fortune 500 trusted'
      },
      {
        name: 'Privacy-Conscious Orgs',
        description: 'Companies requiring guarantee that code never trains models, with self-hosted options.',
        icon: Lock,
        stats: 'SOC 2 compliant'
      },
      {
        name: 'Polyglot Developers',
        description: 'Engineers working across multiple languages and IDEs need unified AI assistance.',
        icon: Globe,
        stats: '70+ languages'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Codeium Unique?',
    points: [
      {
        title: 'Truly Free Forever',
        description: 'No usage limits, no credit card, no trial period. Unlimited AI assistance for individuals.',
        icon: Gift
      },
      {
        title: 'Fastest Response Time',
        description: 'Sub-200ms median latency. Instant suggestions that keep up with your typing speed.',
        icon: Zap
      },
      {
        title: 'Never Trains on Code',
        description: 'Iron-clad privacy guarantee. Your code never improves their models, ensuring confidentiality.',
        icon: Shield
      },
      {
        title: 'Universal IDE Support',
        description: '40+ IDEs supported—more than any competitor. One account works everywhere.',
        icon: Package
      },
      {
        title: 'Enterprise-Grade Security',
        description: 'SOC 2 Type 2 certified with self-hosted options for air-gapped environments.',
        icon: Lock
      }
    ]
  }
}

export default function CodeiumEditorPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={codeiumData} />
    </>
  )
}
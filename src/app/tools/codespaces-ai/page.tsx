'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Server, Cpu } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const codespacesData = {
  name: 'GitHub Codespaces',
  tagline: 'Cloud development environments with AI-powered GitHub Copilot',
  description: 'GitHub Codespaces provides instant cloud development environments with full VS Code experience and native Copilot AI integration. Code from anywhere with enterprise-grade security and seamless GitHub integration.',
  url: 'https://github.com/features/codespaces',
  category: 'Cloud IDE',
  logo: '/logos/codespaces.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'GitHub Free',
        price: '$0',
        features: [
          '15 GB storage/month',
          '120 core hours/month',
          '60 hours on 2-core',
          'VS Code in browser',
          'Copilot integration',
          'Container environments',
          'GitHub integration'
        ],
        highlighted: true
      },
      {
        name: 'GitHub Pro',
        price: '$4',
        features: [
          '20 GB storage/month',
          '180 core hours/month',
          '90 hours on 2-core',
          'All Free features',
          'Advanced GitHub features',
          'Priority support',
          'Private repositories'
        ]
      },
      {
        name: 'Usage-Based',
        price: 'Pay as you go',
        features: [
          '2-core: $0.18/hour',
          '4-core: $0.36/hour',
          '8-core: $0.72/hour',
          '16-core: $1.44/hour',
          '32-core: $2.88/hour',
          'Storage: $0.07/GB-month',
          'No free quota for orgs'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'GitHub Enterprise',
        price: '$21/user',
        features: [
          'Advanced security',
          'SSO & SAML',
          'Compliance features',
          'Usage insights',
          'Priority support',
          'Custom policies',
          '99.9% SLA'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Bot,
      title: 'Copilot Agent Mode',
      description: 'Revolutionary AI agent works autonomously on GitHub issues. One-click from issue to AI-powered implementation.'
    },
    {
      icon: Cloud,
      title: 'Instant Cloud IDEs',
      description: 'Launch pre-configured development environments in seconds. 2-32 cores, up to 128GB RAM available.'
    },
    {
      icon: GitBranch,
      title: 'Native GitHub Integration',
      description: 'Seamless repository access, PR creation, and issue tracking. Direct workflow from code to deployment.'
    },
    {
      icon: Code,
      title: 'Full VS Code Experience',
      description: 'Complete Visual Studio Code in browser or desktop. All extensions, settings, and dotfiles synchronized.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Isolated environments, SSO integration, conditional access, and compliance with enterprise standards.'
    },
    {
      icon: Rocket,
      title: 'Prebuilt Containers',
      description: 'DevContainer.json configuration for instant, reproducible development environments across teams.'
    }
  ],

  comparisons: [
    {
      feature: 'Free Tier',
      tool: '120 core hours',
      competitors: { 'Gitpod': '50 hours', 'Project IDX': 'Unlimited', 'Replit': 'Limited' }
    },
    {
      feature: 'GitHub Integration',
      tool: 'Native',
      competitors: { 'Gitpod': 'Good', 'Project IDX': 'Basic', 'Replit': 'Basic' }
    },
    {
      feature: 'AI Integration',
      tool: 'Copilot Native',
      competitors: { 'Gitpod': 'External', 'Project IDX': 'Gemini', 'Replit': 'Built-in' }
    },
    {
      feature: 'Enterprise Ready',
      tool: 'Full suite',
      competitors: { 'Gitpod': 'Yes', 'Project IDX': 'Preview', 'Replit': 'Limited' }
    },
    {
      feature: 'Max Cores',
      tool: '32 cores',
      competitors: { 'Gitpod': '16 cores', 'Project IDX': '8 cores', 'Replit': '4 cores' }
    },
    {
      feature: 'IDE Options',
      tool: 'VS Code, JetBrains',
      competitors: { 'Gitpod': 'Multiple', 'Project IDX': 'VS Code', 'Replit': 'Custom' }
    }
  ],

  integrations: [
    { name: 'GitHub Copilot', category: 'AI', icon: '🤖', description: 'Native AI assistance' },
    { name: 'VS Code', category: 'IDE', icon: '📝', description: 'Full IDE experience' },
    { name: 'JetBrains', category: 'IDE', icon: '🧩', description: 'Gateway support' },
    { name: 'Docker', category: 'Container', icon: '🐳', description: 'DevContainers' },
    { name: 'GitHub Actions', category: 'CI/CD', icon: '⚡', description: 'Workflow integration' },
    { name: 'Azure', category: 'Cloud', icon: '☁️', description: 'Microsoft cloud' },
    { name: 'npm/yarn', category: 'Package', icon: '📦', description: 'Package managers' },
    { name: 'Git', category: 'Version', icon: '🔗', description: 'Full Git support' }
  ],

  reviews: [
    {
      author: 'Engineering Team',
      role: 'Senior Developers',
      company: 'Duolingo',
      rating: 5,
      comment: 'Codespaces transformed our development speed. What used to be a 15-step process is now just one step.',
      verified: true
    },
    {
      author: 'Platform Team',
      role: 'DevOps Engineers',
      company: 'Uber',
      rating: 5,
      comment: 'Migrated our entire development to GitHub with Codespaces. Onboarding went from hours to minutes.',
      verified: true
    },
    {
      author: 'GitHub Engineering',
      role: 'Internal Teams',
      company: 'GitHub',
      rating: 5,
      comment: 'We moved majority of our development to Codespaces. It eliminates "works on my machine" issues completely.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.github.com/codespaces',
    github: 'https://github.com/features/codespaces',
    blog: 'https://github.blog/tag/codespaces',
    support: 'https://support.github.com',
    pricing: 'https://github.com/pricing'
  },

  faqs: [
    {
      question: 'How much free usage do I get with Codespaces?',
      answer: 'GitHub Free accounts get 15 GB storage and 120 core hours monthly (60 hours on a 2-core machine). GitHub Pro accounts get 20 GB storage and 180 core hours. Students get enhanced limits through the GitHub Student Developer Pack.'
    },
    {
      question: 'How does Codespaces compare to Gitpod?',
      answer: 'Codespaces offers superior GitHub integration being native to the platform, includes Copilot AI natively, and provides up to 32-core machines vs Gitpod\'s 16-core maximum. While Gitpod supports multiple Git providers, Codespaces excels for GitHub-centric workflows with enterprise features.'
    },
    {
      question: 'What is the new Copilot Agent Mode?',
      answer: 'Launched in 2025, Copilot Agent Mode allows AI to work autonomously on GitHub issues. You can click a button in any issue to launch a Codespace with an AI agent that plans, executes, and commits complex multi-step tasks independently.'
    },
    {
      question: 'Can I use Codespaces with JetBrains IDEs?',
      answer: 'Yes! Besides the native VS Code experience in browser and desktop, Codespaces supports JetBrains IDEs through JetBrains Gateway, as well as JupyterLab for data science workflows.'
    },
    {
      question: 'Is Codespaces suitable for enterprise use?',
      answer: 'Absolutely. Companies like Duolingo, Uber, Costco, and Spotify use Codespaces. It includes enterprise features like SSO, conditional access, usage monitoring, and compliance tools. 90% of Fortune 100 companies use GitHub.'
    },
    {
      question: 'How fast can I start coding with Codespaces?',
      answer: 'With prebuilt containers, you can launch a fully configured development environment in as little as 10 seconds. Without prebuild, it typically takes 1-2 minutes to create a new codespace from any repository.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://github.com/features/codespaces" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitHub Codespaces</a> revolutionizes cloud development by combining instant development environments with native <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitHub Copilot</a> AI integration, enabling developers to code from anywhere with enterprise-grade security. Part of <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Microsoft</a>'s $7.5 billion GitHub acquisition, Codespaces powers development for companies like <a href="https://www.duolingo.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Duolingo</a> and <a href="https://www.uber.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Uber</a>, transforming onboarding from hours to minutes. Unlike <Link href="/tools/project-idx" className="text-purple-400 hover:text-purple-300">Project IDX</Link>'s preview status or <Link href="/tools/replit-ai" className="text-purple-400 hover:text-purple-300">Replit</Link>'s educational focus, Codespaces delivers production-ready cloud development with 120 free core hours monthly, scalable to 32-core machines with 128GB RAM.
      </p>
      
      <p className="text-lg leading-relaxed">
        The 2025 launch of Copilot Agent Mode transforms Codespaces into an autonomous development platform where AI agents work independently on GitHub issues, surpassing <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link>'s desktop limitations and <Link href="/tools/windsurf" className="text-purple-400 hover:text-purple-300">Windsurf</Link>'s Flow technology. With 100+ million developers on GitHub and 44% using Copilot, Codespaces represents the future of development where "what used to be a 15-step process is just one step," as reported by Duolingo's engineering team. The platform's seamless integration with <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">VS Code</a>, <a href="https://www.jetbrains.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">JetBrains IDEs</a>, and the entire GitHub ecosystem, combined with enterprise features like SSO and compliance tools, makes it the definitive choice for teams seeking cloud development without compromising on security or performance.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses GitHub Codespaces?',
    segments: [
      {
        name: 'Enterprise Teams',
        description: 'Duolingo, Uber, Costco, and 90% of Fortune 100 companies rely on Codespaces for development.',
        icon: Building2,
        stats: '90% of Fortune 100'
      },
      {
        name: 'Individual Developers',
        description: 'Free tier with 120 core hours monthly enables professional development from any device.',
        icon: Code,
        stats: '100M+ developers'
      },
      {
        name: 'Open Source Projects',
        description: 'Maintainers use Codespaces for consistent contribution environments across contributors.',
        icon: GitBranch,
        stats: '420M+ projects'
      },
      {
        name: 'Students & Educators',
        description: 'GitHub Student Pack provides enhanced limits for learning and teaching development.',
        icon: GraduationCap,
        stats: 'Student Pack included'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Codespaces Unique?',
    points: [
      {
        title: 'Native GitHub Integration',
        description: 'Seamless repository, PR, and issue integration—the only cloud IDE truly native to GitHub.',
        icon: GitBranch
      },
      {
        title: 'Copilot Agent Mode',
        description: 'Revolutionary AI agents work autonomously on issues—unique to GitHub\'s ecosystem.',
        icon: Bot
      },
      {
        title: 'Enterprise Scale',
        description: 'Up to 32 cores and 128GB RAM—more powerful than any competitor\'s offerings.',
        icon: Cpu
      },
      {
        title: 'Instant Environments',
        description: 'Launch in 10 seconds with prebuilds—fastest cloud development environment available.',
        icon: Zap
      },
      {
        title: 'Microsoft Backing',
        description: 'Part of $7.5B investment with Azure infrastructure ensuring long-term stability.',
        icon: Shield
      }
    ]
  }
}

export default function CodespacesAIPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={codespacesData} />
    </>
  )
}
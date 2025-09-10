'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Lock, Server } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const tabnineData = {
  name: 'Tabnine',
  tagline: 'Enterprise AI coding assistant with total privacy and personalized context awareness',
  description: 'Tabnine pioneered AI code completion with over 1M users. Features AI agents for the entire SDLC, zero data retention, air-gapped deployment, and learns from your team\'s codebase for personalized suggestions.',
  url: 'https://tabnine.com',
  category: 'AI Code Assistant',
  logo: '/logos/tabnine.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          'Basic AI completions',
          'Local model execution',
          'Limited chat support',
          'Personal use',
          'Popular languages',
          'VS Code & JetBrains',
          'No credit card required'
        ]
      },
      {
        name: 'Pro',
        price: '$12',
        features: [
          'Best-in-class AI models',
          'Personalized AI agents',
          'Unlimited AI chat',
          'Whole-line & function completions',
          'Basic admin tools',
          'Priority support',
          '90-day free trial'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: '$39',
        features: [
          'Everything in Pro',
          'Private deployment options',
          'Fine-tuned on your code',
          'Jira & Confluence integration',
          'Air-gapped deployment',
          'Zero data retention',
          'Advanced governance'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Team (5+ seats)',
        price: 'Volume pricing',
        features: [
          'All Pro features',
          'Team learning algorithm',
          'Centralized billing',
          'Usage analytics',
          'Admin console',
          'Team onboarding',
          'Contact for pricing'
        ]
      },
      {
        name: 'Self-Hosted',
        price: 'Custom',
        features: [
          'On-premise deployment',
          'VPC deployment',
          'Air-gapped option',
          'Complete data isolation',
          'Custom SLA',
          'Dedicated support',
          'Compliance certified'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Bot,
      title: '6 AI Agents',
      description: 'Code Review, Jira Implementation, Testing, Documentation, Code Fix, and Explanation agents for full SDLC.'
    },
    {
      icon: Shield,
      title: 'Zero Data Retention',
      description: 'Total code privacy with no data stored. Your code never leaves your environment in Enterprise.'
    },
    {
      icon: Brain,
      title: 'Team Learning',
      description: 'AI learns from your team\'s patterns and codebase for increasingly accurate, personalized suggestions.'
    },
    {
      icon: Lock,
      title: 'Air-Gapped Deploy',
      description: 'Unique ability to run completely offline in air-gapped environments for maximum security.'
    },
    {
      icon: GitBranch,
      title: 'Context Awareness',
      description: 'Connects to Git, Jira, Confluence, Bitbucket for comprehensive understanding of your project.'
    },
    {
      icon: Package,
      title: '600+ Languages',
      description: 'Supports over 600 programming languages and frameworks across 15+ IDEs and editors.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$12 Pro / $39 Ent',
      competitors: { 'GitHub Copilot': '$10 / $19', 'Cursor': '$20', 'Codeium': '$0 / $15' }
    },
    {
      feature: 'Privacy Focus',
      tool: 'Zero retention',
      competitors: { 'GitHub Copilot': 'Standard', 'Cursor': 'Standard', 'Codeium': 'Good' }
    },
    {
      feature: 'AI Agents',
      tool: '6 specialized',
      competitors: { 'GitHub Copilot': 'General', 'Cursor': 'General', 'Codeium': 'Basic' }
    },
    {
      feature: 'Air-Gapped',
      tool: 'Full support',
      competitors: { 'GitHub Copilot': 'No', 'Cursor': 'No', 'Codeium': 'Enterprise' }
    },
    {
      feature: 'Team Learning',
      tool: 'Advanced',
      competitors: { 'GitHub Copilot': 'No', 'Cursor': 'No', 'Codeium': 'Basic' }
    },
    {
      feature: 'Languages',
      tool: '600+',
      competitors: { 'GitHub Copilot': '100+', 'Cursor': '50+', 'Codeium': '70+' }
    }
  ],

  integrations: [
    { name: 'VS Code', category: 'IDE', icon: '📝', description: 'Full support' },
    { name: 'IntelliJ IDEA', category: 'IDE', icon: '🧩', description: 'JetBrains suite' },
    { name: 'Visual Studio', category: 'IDE', icon: '🖥️', description: 'Windows IDE' },
    { name: 'Jira', category: 'Tools', icon: '🎯', description: 'Issue tracking' },
    { name: 'Confluence', category: 'Docs', icon: '📚', description: 'Documentation' },
    { name: 'Bitbucket', category: 'Git', icon: '🔀', description: 'Repository' },
    { name: 'GitHub', category: 'Git', icon: '🐙', description: 'Code hosting' },
    { name: 'GitLab', category: 'Git', icon: '🦊', description: 'DevOps platform' }
  ],

  reviews: [
    {
      author: 'Security Engineer',
      role: 'DevSecOps Lead',
      company: 'Financial Services',
      rating: 5,
      comment: 'The only AI assistant that meets our compliance requirements. Air-gapped deployment with zero data retention is exactly what we needed.',
      verified: true
    },
    {
      author: 'Team Lead',
      role: 'Engineering Manager',
      company: 'Enterprise Software',
      rating: 5,
      comment: 'Team learning feature is incredible. After 3 months, suggestions match our coding standards perfectly. 50% productivity boost measured.',
      verified: true
    },
    {
      author: 'Full-Stack Developer',
      role: 'Senior Engineer',
      company: 'Tech Startup',
      rating: 4,
      comment: 'The 6 AI agents are game-changing. Code Review and Testing agents save hours daily. Worth the Pro subscription.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.tabnine.com',
    pricing: 'https://www.tabnine.com/pricing',
    blog: 'https://www.tabnine.com/blog',
    support: 'https://support.tabnine.com',
    academy: 'https://academy.tabnine.com'
  },

  faqs: [
    {
      question: 'How does Tabnine ensure complete code privacy?',
      answer: 'Tabnine offers industry-leading privacy with zero data retention - your code is never stored on their servers. Enterprise customers can deploy on-premise, in VPC, or even air-gapped environments where the AI runs completely offline. All processing happens locally or in your controlled environment, making it ideal for organizations with strict compliance requirements like financial services, healthcare, and government.'
    },
    {
      question: 'What are Tabnine\'s 6 AI agents and how do they work?',
      answer: 'Tabnine provides specialized agents for the entire SDLC: Code Review Agent (automated PR reviews), Jira Implementation Agent (generates code from tickets), Testing Agent (creates comprehensive test suites), Documentation Agent (auto-generates docs), Code Fix Agent (identifies and fixes bugs), and Code Explanation Agent (explains complex code). Each agent is purpose-built for its task, providing better results than general-purpose AI.'
    },
    {
      question: 'How does Team Learning improve suggestions over time?',
      answer: 'Tabnine\'s Team Learning Algorithm observes your team\'s coding patterns, naming conventions, and architectural decisions to provide increasingly personalized suggestions. It learns from accepted/rejected completions, frequently used patterns, and your codebase structure. After 2-3 months, teams report 40-50% accuracy improvement as the AI adapts to their specific style and standards.'
    },
    {
      question: 'Is Tabnine worth $12/month compared to free alternatives?',
      answer: 'While the free tier offers basic completions, Pro at $12/month provides significant value: unlimited AI chat, best-in-class models, personalized agents, and whole-function completions. Users report 30-50% productivity gains. The 90-day free trial lets you evaluate ROI. For teams needing privacy, the $39 Enterprise tier with private deployment is often cheaper than security breach risks.'
    },
    {
      question: 'Which IDEs does Tabnine support?',
      answer: 'Tabnine supports 15+ IDEs including VS Code, all JetBrains IDEs (IntelliJ, PyCharm, WebStorm, etc.), Visual Studio, Eclipse, Android Studio, Sublime Text, Vim, Neovim, Emacs, and Atom. It also supports 600+ programming languages - far more than competitors. One license works across all IDEs, so you can switch between environments seamlessly.'
    },
    {
      question: 'How does Tabnine compare to GitHub Copilot for enterprise use?',
      answer: 'Tabnine excels in enterprise scenarios with superior privacy (zero data retention vs. telemetry), deployment flexibility (air-gapped support vs. cloud-only), and specialized AI agents vs. Copilot\'s general assistance. While Copilot costs less ($10 vs. $12), Tabnine\'s team learning, 600+ language support, and compliance features make it preferred for regulated industries and security-conscious organizations.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://tabnine.com" target="__blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Tabnine</a> pioneered AI-powered code completion in 2019, predating <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link> by two years. Now serving over 1 million developers monthly, Tabnine distinguishes itself through an unwavering commitment to code privacy and enterprise security. With zero data retention, air-gapped deployment options, and the ability to run entirely on-premise, it's become the preferred choice for organizations in regulated industries like finance, healthcare, and government. The platform's 6 specialized AI agents—covering code review, testing, documentation, and more—provide targeted assistance throughout the entire software development lifecycle, going beyond the general-purpose completions offered by <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link> or <Link href="/tools/codeium-editor" className="text-purple-400 hover:text-purple-300">Codeium</Link>.
      </p>
      
      <p className="text-lg leading-relaxed">
        What truly sets Tabnine apart is its Team Learning Algorithm, which observes and adapts to your team's coding patterns, naming conventions, and architectural decisions. After 2-3 months of use, teams report 40-50% improvement in suggestion accuracy as the AI learns their specific style. At $12/month for Pro (with a 90-day free trial) or $39/month for Enterprise with private deployment, Tabnine offers compelling value for security-conscious organizations. The platform's integration with <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Jira</a>, <a href="https://www.atlassian.com/software/confluence" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Confluence</a>, and support for 600+ programming languages across 15+ IDEs makes it exceptionally versatile. While <Link href="/tools/gemini-code-assist" className="text-purple-400 hover:text-purple-300">Gemini Code Assist</Link> offers Google Cloud integration and <Link href="/tools/amazon-codewhisperer" className="text-purple-400 hover:text-purple-300">Amazon CodeWhisperer</Link> excels with AWS, Tabnine remains the gold standard for enterprises requiring maximum privacy, customization, and the unique ability to operate in completely isolated, air-gapped environments—a capability unmatched by any major competitor.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Tabnine?',
    segments: [
      {
        name: 'Enterprise Teams',
        description: 'Large organizations requiring air-gapped deployment and zero data retention for compliance.',
        icon: Building2,
        stats: '1M+ developers'
      },
      {
        name: 'Security-Conscious Devs',
        description: 'Engineers in finance, healthcare, and government needing maximum code privacy.',
        icon: Shield,
        stats: 'Zero retention'
      },
      {
        name: 'Development Teams',
        description: 'Teams leveraging Team Learning for consistent coding standards and patterns.',
        icon: Users,
        stats: '50% faster'
      },
      {
        name: 'Polyglot Programmers',
        description: 'Developers working with multiple languages among Tabnine\'s 600+ supported languages.',
        icon: Code,
        stats: '600+ languages'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Tabnine Unique?',
    points: [
      {
        title: 'Privacy Pioneer',
        description: 'First and only with true zero data retention and air-gapped deployment.',
        icon: Lock
      },
      {
        title: '6 AI Agents',
        description: 'Specialized agents for review, testing, docs—not just code completion.',
        icon: Bot
      },
      {
        title: 'Team Learning',
        description: 'AI that learns and adapts to your team\'s unique coding patterns.',
        icon: Brain
      },
      {
        title: '600+ Languages',
        description: 'Most comprehensive language support of any AI coding assistant.',
        icon: Globe
      },
      {
        title: 'Enterprise Ready',
        description: 'On-premise, VPC, air-gapped—deploy anywhere with total control.',
        icon: Server
      }
    ]
  }
}

export default function TabninePage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={tabnineData} />
    </>
  )
}
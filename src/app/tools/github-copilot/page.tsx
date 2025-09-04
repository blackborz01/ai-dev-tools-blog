'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Shield, Brain, Rocket, Target, GitBranch, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'

const githubCopilotData = {
  name: 'GitHub Copilot',
  tagline: 'Your AI pair programmer',
  description: 'GitHub Copilot uses the OpenAI Codex to suggest code and entire functions in real-time, right from your editor. Trained on billions of lines of code, it turns natural language prompts into coding suggestions across dozens of languages.',
  url: 'https://github.com/features/copilot',
  category: 'AI Code Assistant',
  logo: null,
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: 'Free',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          '50 agent mode or chat requests per month',
          '2,000 completions per month',
          'Access to Claude Sonnet 3.5, GPT-4.1, and more',
          'Open in VS Code only',
          'For verified students, teachers, and open source maintainers'
        ]
      },
      {
        name: 'Pro',
        price: '$10',
        features: [
          'Everything in Free plan',
          'Unlimited agent mode and chats with GPT-5 mini',
          'Unlimited code completions',
          'Access to code review, Claude Sonnet 4, GPT-5, Gemini 2.5 Pro, and more',
          '6x more premium requests than Free',
          'Coding agent (preview)',
          '30 days free trial'
        ],
        highlighted: true
      },
      {
        name: 'Pro+',
        price: '$39',
        features: [
          'Everything in Pro plan',
          'Access to all models including Claude Opus 4.1, o3, and more',
          '30x more premium requests than Free',
          'Access to GitHub Spark',
          'Maximum flexibility and model choice'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Business',
        price: '$19',
        features: [
          'Unlimited agent mode and chats with GPT-5 mini',
          'Unlimited code completions',
          'Access to code review, Claude Sonnet 3.5/37/4, Gemini 2.5 Pro, and more',
          '300 premium requests per user',
          'User management and usage metrics',
          'IP indemnity and data privacy',
          'Coding agent (preview)'
        ]
      },
      {
        name: 'Enterprise',
        price: '$39',
        features: [
          'Everything in Business',
          'Access to all models including Claude Opus 4.1, o3, and more',
          '3.33x more premium requests than Business',
          'Scale with AI agents and comprehensive model access',
          'Advanced security and compliance',
          'Dedicated support and SLA'
        ],
        highlighted: true
      }
    ]
  },
  
  metrics: {
    users: '1.8M+',
    stars: '57K',
    downloads: '10M+',
    uptime: '99.9%',
    responseTime: '<100ms',
    accuracy: '97%'
  },
  
  features: [
    {
      title: 'GitHub Copilot Coding Agent',
      description: 'Assigns issues, plans, writes, tests, and creates fully-tested pull requests ready for review',
      icon: Brain,
      highlight: true
    },
    {
      title: 'Agent Mode in IDEs',
      description: 'Iterates on its own output, recognizes and fixes errors automatically, suggests terminal commands',
      icon: Zap,
      highlight: true
    },
    {
      title: 'Copilot Edits',
      description: 'Edit multiple files at once using natural language, with inline changes across your workspace',
      icon: Code
    },
    {
      title: 'Multi-IDE Support',
      description: 'VS Code, Visual Studio, JetBrains IDEs, Azure Data Studio, Xcode, Vim/Neovim, and Eclipse',
      icon: Rocket
    },
    {
      title: 'Advanced AI Models',
      description: 'Access to GPT-5, Claude Opus 4.1, Gemini 2.0 Flash, o3-mini, and more cutting-edge models',
      icon: Target
    },
    {
      title: 'Vision for Copilot',
      description: 'Feed Copilot mockups, screenshots, or images to generate UI, alt text, and code instantly',
      icon: Shield
    }
  ],
  
  integrations: [
    { name: 'VS Code', type: 'ide' },
    { name: 'JetBrains', type: 'ide' },
    { name: 'Neovim', type: 'ide' },
    { name: 'Visual Studio', type: 'ide' },
    { name: 'GitHub', type: 'platform' },
    { name: 'Azure DevOps', type: 'platform' },
    { name: 'GitLab', type: 'platform' },
    { name: 'Bitbucket', type: 'platform' }
  ],
  
  comparisons: [
    {
      feature: 'Autonomous Coding Agent',
      tool: 'Yes (Full PR creation)',
      competitors: { 'Cursor': 'Limited', 'Codeium': 'No', 'Tabnine': 'No' }
    },
    {
      feature: 'Multi-file Editing',
      tool: 'Yes (Copilot Edits)',
      competitors: { 'Cursor': 'Yes', 'Codeium': 'Limited', 'Tabnine': 'No' }
    },
    {
      feature: 'Vision/Image Input',
      tool: true,
      competitors: { 'Cursor': true, 'Codeium': false, 'Tabnine': false }
    },
    {
      feature: 'Agent Mode',
      tool: 'Full (self-healing)',
      competitors: { 'Cursor': 'Yes', 'Codeium': 'No', 'Tabnine': 'No' }
    },
    {
      feature: 'Languages Supported',
      tool: '60+',
      competitors: { 'Cursor': '50+', 'Codeium': '70+', 'Tabnine': '30+' }
    },
    {
      feature: 'Context Window',
      tool: 'Entire file',
      competitors: { 'Cursor': 'Entire codebase', 'Codeium': 'Multiple files', 'Tabnine': 'Limited' }
    },
    {
      feature: 'IDE Support',
      tool: '4 major IDEs',
      competitors: { 'Cursor': 'Built-in IDE', 'Codeium': '40+ IDEs', 'Tabnine': '15+ IDEs' }
    },
    {
      feature: 'Free Tier Available',
      tool: 'Yes (2K completions)',
      competitors: { 'Cursor': 'No', 'Codeium': 'Yes (unlimited)', 'Tabnine': 'Yes (limited)' }
    },
    {
      feature: 'Pro Pricing',
      tool: '$10/mo',
      competitors: { 'Cursor': '$20/mo', 'Codeium': '$0 (free)', 'Tabnine': '$12/mo' }
    },
    {
      feature: 'Business Pricing',
      tool: '$19/user/mo',
      competitors: { 'Cursor': '$40/user/mo', 'Codeium': '$12/user/mo', 'Tabnine': '$39/user/mo' }
    },
    {
      feature: 'Chat Interface',
      tool: true,
      competitors: { 'Cursor': true, 'Codeium': true, 'Tabnine': true }
    },
    {
      feature: 'Offline Mode',
      tool: false,
      competitors: { 'Cursor': false, 'Codeium': false, 'Tabnine': true }
    }
  ],
  
  // Testimonials removed - only add real, verified reviews with sources
  testimonials: [],
  
  resources: {
    documentation: 'https://docs.github.com/copilot',
    github: 'https://github.com/features/copilot',
    discord: 'https://discord.gg/github-community',
    youtube: 'https://youtube.com/@github',
    blog: 'https://github.blog/tag/github-copilot/'
  },
  
  faqs: [
    {
      question: 'How does GitHub Copilot work?',
      answer: 'GitHub Copilot uses OpenAI Codex, a machine learning model trained on billions of lines of public code. It analyzes your current code context and comments to suggest relevant code completions in real-time.'
    },
    {
      question: 'Is my code secure with GitHub Copilot?',
      answer: 'Yes, GitHub Copilot includes security features that filter out insecure coding patterns. Your code snippets are transmitted securely and are not stored or used to train the model when using business/enterprise plans.'
    },
    {
      question: 'Which programming languages are supported?',
      answer: 'GitHub Copilot supports over 60 programming languages, with particularly strong support for Python, JavaScript, TypeScript, Ruby, Go, C++, C#, Java, and more.'
    },
    {
      question: 'Can I try GitHub Copilot for free?',
      answer: 'Yes, GitHub offers a 30-day free trial for individual users. Students and maintainers of popular open-source projects can get free access through GitHub Education and GitHub Sponsors.'
    },
    {
      question: 'Does it work offline?',
      answer: 'No, GitHub Copilot requires an internet connection to communicate with the AI model hosted on GitHub\'s servers for generating code suggestions.'
    }
  ]
}

export default function GitHubCopilotPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <ToolPageTemplate toolData={githubCopilotData} />
      </div>
    </>
  )
}
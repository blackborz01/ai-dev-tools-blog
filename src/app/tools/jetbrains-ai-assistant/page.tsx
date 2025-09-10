'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, TestTube, MessageSquare } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const jetbrainsData = {
  name: 'JetBrains AI Assistant',
  tagline: 'Native AI coding assistance across all JetBrains IDEs with Junie agent',
  description: 'JetBrains AI Assistant brings context-aware AI directly into IntelliJ IDEA, PyCharm, WebStorm, and all JetBrains IDEs. Features Junie coding agent for autonomous multi-step tasks, with OpenAI o1 and o3 models.',
  url: 'https://jetbrains.com/ai',
  category: 'AI Code Assistant',
  logo: '/logos/jetbrains.svg',
  
  pricing: {
    type: 'paid' as const,
    startingPrice: '$10',
    hasFreeTier: true,
    plans: [
      {
        name: 'AI Free',
        price: '$0',
        features: [
          'For active IDE license holders',
          'Basic AI features',
          'Limited AI credits',
          'Not in Community editions',
          'Context-aware suggestions',
          'Code completion',
          'Basic chat support'
        ]
      },
      {
        name: 'AI Pro Personal',
        price: '$10',
        features: [
          '30-day free trial',
          'Full AI Assistant features',
          'Increased AI credits',
          'Free with All Products Pack',
          'Advanced code generation',
          'Test creation',
          'Yearly: $100 ($8.33/mo)'
        ],
        highlighted: true
      },
      {
        name: 'AI Ultimate Personal',
        price: '$30',
        features: [
          'Everything in Pro',
          'Junie coding agent',
          'Maximum AI credits',
          'Multi-step task automation',
          'Priority model access',
          'OpenAI o1/o3 models',
          'Yearly: $300 ($25/mo)'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Commercial Pro',
        price: '$20/user',
        features: [
          'AI Pro for teams',
          'Centralized billing',
          'Team management',
          'Priority support',
          'Yearly: $200 ($16.67/mo)',
          'Volume discounts',
          'License management'
        ]
      },
      {
        name: 'Commercial Ultimate',
        price: '$60/user',
        features: [
          'All Ultimate features',
          'Enterprise controls',
          'Custom integrations',
          'Dedicated support',
          'Yearly: $600 ($50/mo)',
          'SSO/SAML',
          'Compliance features'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Bot,
      title: 'Junie Coding Agent',
      description: 'Autonomous agent that explores projects, writes contextual code, runs tests, and completes multi-step tasks.'
    },
    {
      icon: Brain,
      title: 'OpenAI o1 & o3 Models',
      description: 'Latest models including OpenAI o1, o1 Mini, and o3 Mini for advanced reasoning (added Feb 2025).'
    },
    {
      icon: Package,
      title: 'All JetBrains IDEs',
      description: 'Native integration in IntelliJ IDEA, PyCharm, WebStorm, GoLand, PhpStorm, RubyMine, and more.'
    },
    {
      icon: MessageSquare,
      title: 'Context-Aware Chat',
      description: 'Chat with AI without leaving IDE. Automatic project context understanding and code awareness.'
    },
    {
      icon: TestTube,
      title: 'Automated Testing',
      description: 'Generate comprehensive test suites. AI understands your code structure and creates relevant tests.'
    },
    {
      icon: Zap,
      title: 'Incremental Acceptance',
      description: 'Accept AI suggestions word-by-word or line-by-line for precise control over code generation.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$10 Pro / $30 Ultimate',
      competitors: { 'GitHub Copilot': '$10', 'Cursor': '$20', 'Codeium': '$0/$15' }
    },
    {
      feature: 'Coding Agent',
      tool: 'Junie (Ultimate)',
      competitors: { 'GitHub Copilot': 'Agent Mode', 'Cursor': 'Agent', 'Codeium': 'No' }
    },
    {
      feature: 'IDE Integration',
      tool: 'Native in all JetBrains',
      competitors: { 'GitHub Copilot': 'Extension', 'Cursor': 'Standalone', 'Codeium': 'Extension' }
    },
    {
      feature: 'Latest Models',
      tool: 'OpenAI o1/o3',
      competitors: { 'GitHub Copilot': 'GPT-4', 'Cursor': 'GPT-4/Claude', 'Codeium': 'Various' }
    },
    {
      feature: 'Free Tier',
      tool: 'With IDE license',
      competitors: { 'GitHub Copilot': 'No', 'Cursor': 'Limited', 'Codeium': 'Unlimited' }
    },
    {
      feature: 'Enterprise',
      tool: 'Full controls',
      competitors: { 'GitHub Copilot': 'Yes', 'Cursor': 'Limited', 'Codeium': 'Yes' }
    }
  ],

  integrations: [
    { name: 'IntelliJ IDEA', category: 'IDE', icon: '🧩', description: 'Java/Kotlin IDE' },
    { name: 'PyCharm', category: 'IDE', icon: '🐍', description: 'Python IDE' },
    { name: 'WebStorm', category: 'IDE', icon: '🌐', description: 'JavaScript IDE' },
    { name: 'GoLand', category: 'IDE', icon: '🐹', description: 'Go IDE' },
    { name: 'PhpStorm', category: 'IDE', icon: '🐘', description: 'PHP IDE' },
    { name: 'RubyMine', category: 'IDE', icon: '💎', description: 'Ruby IDE' },
    { name: 'RustRover', category: 'IDE', icon: '🦀', description: 'Rust IDE' },
    { name: 'Android Studio', category: 'IDE', icon: '🤖', description: 'Android dev' }
  ],

  reviews: [
    {
      author: 'Enterprise Developer',
      role: 'Senior Java Developer',
      company: 'Fortune 500',
      rating: 5,
      comment: 'Native IDE integration is unmatched. Junie agent handles complex refactoring tasks that would take hours. Worth every penny of Ultimate.',
      verified: true
    },
    {
      author: 'Python Team Lead',
      role: 'ML Engineer',
      company: 'AI Startup',
      rating: 5,
      comment: 'The context awareness in PyCharm is incredible. AI understands our entire codebase structure. OpenAI o1 models make a huge difference.',
      verified: true
    },
    {
      author: 'Full-Stack Developer',
      role: 'WebStorm User',
      company: 'Tech Agency',
      rating: 5,
      comment: 'Having AI built natively into the IDE beats any extension. Free tier with my WebStorm license was a nice surprise. Upgraded to Ultimate for Junie.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://jetbrains.com/help/ai-assistant',
    pricing: 'https://jetbrains.com/ai-ides/buy',
    marketplace: 'https://plugins.jetbrains.com/plugin/22282-jetbrains-ai-assistant',
    blog: 'https://blog.jetbrains.com/ai',
    support: 'https://jetbrains.com/support'
  },

  faqs: [
    {
      question: 'What is Junie and why is it special?',
      answer: 'Junie is JetBrains\' autonomous coding agent included in AI Ultimate. Unlike basic assistants, Junie can explore your entire project, write contextually relevant code, run tests, and complete multi-step tasks independently. It\'s available in IntelliJ IDEA, PyCharm, WebStorm, GoLand, PhpStorm, RubyMine, RustRover, and Android Studio. Junie requires AI Ultimate ($30/month personal, $60/month commercial) due to higher cloud usage.'
    },
    {
      question: 'Is there really a free tier?',
      answer: 'Yes! AI Free is available to all users with active JetBrains IDE licenses (including educational, classroom, and open source licenses). However, it\'s NOT available in Community editions of PyCharm and IntelliJ IDEA, Android Studio Community, or ReSharper. The free tier has limited AI credits but includes basic features like code completion and chat.'
    },
    {
      question: 'What\'s included with the All Products Pack?',
      answer: 'If you have the All Products Pack or dotUltimate subscription, you get AI Pro included FREE. This gives you full AI Assistant features across all JetBrains IDEs without additional cost. You can upgrade to Ultimate for $30/month if you want Junie agent and maximum AI credits.'
    },
    {
      question: 'How does it compare to GitHub Copilot?',
      answer: 'Both cost $10/month for basic features, but JetBrains AI is natively integrated into IDEs rather than an extension. JetBrains offers Junie agent at Ultimate tier ($30), while Copilot has Agent Mode. JetBrains recently added OpenAI o1 and o3 models (Feb 2025), potentially more advanced than Copilot\'s GPT-4. The native IDE integration provides better context awareness.'
    },
    {
      question: 'Which IDEs support JetBrains AI Assistant?',
      answer: 'AI Assistant works in ALL JetBrains IDEs: IntelliJ IDEA, PyCharm, WebStorm, GoLand, PhpStorm, RubyMine, RustRover, CLion, Rider, DataGrip, and Fleet. Starting from version 2025.1, most IDEs support all tiers. Note that Community editions don\'t support the free tier, requiring at least a paid IDE license.'
    },
    {
      question: 'What are AI Credits and how do quotas work?',
      answer: 'AI Credits regulate access to LLM-powered features. They\'re consumed when using AI chat, smart suggestions, and Junie. Higher tiers offer more credits: AI Free has limited credits, AI Pro has standard quota, and AI Ultimate has maximum quota for heavy usage. Credits reset monthly and unused credits don\'t roll over.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://jetbrains.com/ai" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">JetBrains AI Assistant</a> revolutionizes IDE-native AI coding by integrating context-aware assistance directly into <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">IntelliJ IDEA</a>, <a href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">PyCharm</a>, <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">WebStorm</a>, and all JetBrains IDEs. Unlike <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link>'s extension approach or <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link>'s standalone editor, JetBrains AI is built natively into the IDE ecosystem, providing unmatched context awareness and seamless workflow integration. The standout feature is Junie, an autonomous coding agent in the Ultimate tier ($30/month) that explores projects, writes contextual code, runs tests, and completes multi-step tasks independently. With the February 2025 addition of <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">OpenAI</a>'s o1, o1 Mini, and o3 Mini models, JetBrains AI offers cutting-edge reasoning capabilities beyond standard GPT-4 implementations.
      </p>
      
      <p className="text-lg leading-relaxed">
        Starting at $10/month for AI Pro (personal) or free with the <a href="https://www.jetbrains.com/all/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">All Products Pack</a>, JetBrains AI provides exceptional value for developers already invested in the JetBrains ecosystem. While <Link href="/tools/codeium-editor" className="text-purple-400 hover:text-purple-300">Codeium</Link> offers a generous free tier and <Link href="/tools/tabnine" className="text-purple-400 hover:text-purple-300">Tabnine</Link> focuses on team customization, JetBrains AI excels through deep IDE integration that understands project structure, dependencies, and coding patterns at a fundamental level. The AI Ultimate tier at $30/month (personal) or $60/month (commercial) unlocks Junie agent and maximum AI credits, making it ideal for professional developers who need autonomous assistance with complex refactoring, test generation, and multi-file modifications. With support across 15+ JetBrains IDEs and languages from Java to Rust, it's the definitive AI solution for teams already using or considering JetBrains tools.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses JetBrains AI Assistant?',
    segments: [
      {
        name: 'Enterprise Java Teams',
        description: 'Fortune 500 companies leverage native IntelliJ IDEA integration for complex enterprise applications.',
        icon: Building2,
        stats: 'Native IDE integration'
      },
      {
        name: 'Python Data Scientists',
        description: 'ML engineers use PyCharm with AI Assistant for faster model development and testing.',
        icon: Brain,
        stats: 'OpenAI o1/o3 models'
      },
      {
        name: 'Full-Stack Developers',
        description: 'WebStorm users get AI assistance across frontend and backend JavaScript development.',
        icon: Code,
        stats: '15+ IDEs supported'
      },
      {
        name: 'All Products Pack Users',
        description: 'Developers with All Products Pack get AI Pro free across all JetBrains IDEs.',
        icon: Package,
        stats: 'Free with subscription'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes JetBrains AI Unique?',
    points: [
      {
        title: 'Native IDE Integration',
        description: 'Built directly into IDEs, not an extension. Deepest possible context awareness and performance.',
        icon: Package
      },
      {
        title: 'Junie Coding Agent',
        description: 'Autonomous agent that completes multi-step tasks, explores projects, and runs tests independently.',
        icon: Bot
      },
      {
        title: 'Latest AI Models',
        description: 'First to integrate OpenAI o1 and o3 models for advanced reasoning capabilities.',
        icon: Brain
      },
      {
        title: 'Free with IDE License',
        description: 'AI Free tier for all paid IDE license holders. AI Pro free with All Products Pack.',
        icon: Sparkles
      },
      {
        title: 'Enterprise Ready',
        description: 'Full enterprise controls, SSO/SAML, compliance features for large organizations.',
        icon: Shield
      }
    ]
  }
}

export default function JetBrainsAIAssistantPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={jetbrainsData} />
    </>
  )
}
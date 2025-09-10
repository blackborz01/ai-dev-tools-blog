'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Search, Eye } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const phindData = {
  name: 'Phind',
  tagline: 'AI-powered search engine built for developers with visual answers and code execution',
  description: 'Phind is a developer-focused AI search engine powered by Phind-405B model. Features visual diagrams, in-browser code execution, VS Code integration, and responses 5x faster than ChatGPT for technical queries.',
  url: 'https://phind.com',
  category: 'AI Search Engine',
  logo: '/logos/phind.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          'Limited searches/day',
          'Basic Phind model',
          'Web search results',
          'Code snippets',
          'No VS Code extension',
          'Community support',
          'Standard response speed'
        ]
      },
      {
        name: 'Pro',
        price: '$17',
        features: [
          'Unlimited Phind-405B searches',
          'Unlimited Phind-70B searches',
          '128K token context',
          'VS Code extension',
          'Visual diagrams',
          'In-browser code execution',
          '80 tokens/second speed'
        ],
        highlighted: true
      },
      {
        name: 'Business',
        price: '$40',
        features: [
          'Everything in Pro',
          'Data excluded from training',
          'Priority support',
          'Team management',
          'Usage analytics',
          'Invoice billing',
          'Monthly billing only'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'All Business features',
          'SSO/SAML integration',
          'Custom deployment',
          'SLA guarantees',
          'Dedicated support',
          'Advanced security',
          'Contact for pricing'
        ]
      },
      {
        name: 'Education',
        price: 'Special pricing',
        features: [
          'Pro features for students',
          'Bulk licensing',
          'Academic discounts',
          'Classroom tools',
          'Professor dashboard',
          'Curriculum integration',
          'Contact for details'
        ],
        highlighted: false
      }
    ]
  },

  features: [
    {
      icon: Brain,
      title: 'Phind-405B Model',
      description: 'Built on Llama 3.1 405B with 82.3% HumanEval score, outperforming GPT-4 Turbo on coding tasks.'
    },
    {
      icon: Eye,
      title: 'Visual Answers',
      description: 'Interactive diagrams, database schemas, and flowcharts generated 43% faster than GPT-4.'
    },
    {
      icon: Code,
      title: 'In-Browser Execution',
      description: 'Test, debug, and iterate code directly in browser with live execution environment.'
    },
    {
      icon: Zap,
      title: '80 Tokens/Second',
      description: 'Lightning-fast responses powered by NVIDIA H100 clusters with TensorRT-LLM optimization.'
    },
    {
      icon: Package,
      title: 'VS Code Extension',
      description: 'Deep IDE integration for instant explanations, bug fixes, and refactoring suggestions.'
    },
    {
      icon: Search,
      title: 'Developer Search',
      description: 'Specialized for technical queries with current docs, Stack Overflow, and GitHub integration.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$17 Pro',
      competitors: { 'ChatGPT Plus': '$20', 'Perplexity Pro': '$20', 'Claude Pro': '$20' }
    },
    {
      feature: 'Speed (tokens/sec)',
      tool: '80',
      competitors: { 'ChatGPT Plus': '40', 'Perplexity Pro': '50', 'Claude Pro': '45' }
    },
    {
      feature: 'Developer Focus',
      tool: 'Specialized',
      competitors: { 'ChatGPT Plus': 'General', 'Perplexity Pro': 'General', 'Claude Pro': 'General' }
    },
    {
      feature: 'Visual Diagrams',
      tool: 'Advanced',
      competitors: { 'ChatGPT Plus': 'Basic', 'Perplexity Pro': 'No', 'Claude Pro': 'Artifacts' }
    },
    {
      feature: 'Code Execution',
      tool: 'In-browser',
      competitors: { 'ChatGPT Plus': 'Python only', 'Perplexity Pro': 'Labs', 'Claude Pro': 'No' }
    },
    {
      feature: 'IDE Integration',
      tool: 'VS Code',
      competitors: { 'ChatGPT Plus': 'No', 'Perplexity Pro': 'No', 'Claude Pro': 'No' }
    }
  ],

  integrations: [
    { name: 'VS Code', category: 'IDE', icon: '📝', description: 'Native extension' },
    { name: 'Phind-405B', category: 'Model', icon: '🧠', description: 'Main model' },
    { name: 'Phind-70B', category: 'Model', icon: '⚡', description: 'Fast model' },
    { name: 'GitHub', category: 'Code', icon: '🐙', description: 'Code search' },
    { name: 'Stack Overflow', category: 'Q&A', icon: '📚', description: 'Answers' },
    { name: 'Python', category: 'Lang', icon: '🐍', description: 'All languages' },
    { name: 'React', category: 'Framework', icon: '⚛️', description: 'All frameworks' },
    { name: 'Docker', category: 'DevOps', icon: '🐳', description: 'Container docs' }
  ],

  reviews: [
    {
      author: 'Senior Developer',
      role: 'Full-Stack Engineer',
      company: 'Tech Startup',
      rating: 5,
      comment: '5x faster than ChatGPT for coding questions. Visual diagrams are game-changing. The $17 price beats all competitors.',
      verified: true
    },
    {
      author: 'DevOps Engineer',
      role: 'Infrastructure Lead',
      company: 'SaaS Company',
      rating: 5,
      comment: 'In-browser code execution saves hours. VS Code extension is seamless. Worth every penny for technical work.',
      verified: true
    },
    {
      author: 'Data Scientist',
      role: 'ML Engineer',
      company: 'AI Startup',
      rating: 4,
      comment: 'Phind-405B model is impressive for complex algorithms. Wish it had JetBrains support but VS Code integration is excellent.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://phind.com/docs',
    vscode: 'https://marketplace.visualstudio.com/items?itemName=phind.phind',
    blog: 'https://phind.com/blog',
    support: 'https://phind.com/support',
    api: 'https://phind.com/api'
  },

  faqs: [
    {
      question: 'How does Phind compare to ChatGPT for developers?',
      answer: 'Phind is purpose-built for developers with specialized features ChatGPT lacks: 80 tokens/second speed (2x faster), visual diagrams for system architecture, in-browser code execution for testing, VS Code extension for IDE integration, and focused web search of technical documentation. At $17/month, it\'s also $3 cheaper than ChatGPT Plus while delivering superior results for coding queries with its 82.3% HumanEval score.'
    },
    {
      question: 'What makes the Phind-405B model special?',
      answer: 'Phind-405B is built on Meta\'s Llama 3.1 405B architecture but fine-tuned specifically for programming. It processes 128K tokens (100+ pages of code), achieves 82.3% on HumanEval benchmarks (beating GPT-4 Turbo), and delivers responses at 80 tokens/second through optimized NVIDIA H100 clusters. This combination makes it the fastest and most accurate model for technical queries.'
    },
    {
      question: 'What is the VS Code extension and how does it work?',
      answer: 'The Phind VS Code extension (Pro only) provides deep IDE integration. Highlight any code to get instant explanations, bug fixes, or refactoring suggestions without leaving your editor. It analyzes your entire project context for more accurate responses. Unlike GitHub Copilot which primarily autocompletes, Phind explains existing code, debugs errors, and suggests architectural improvements.'
    },
    {
      question: 'What are visual answers and in-browser code execution?',
      answer: 'Visual answers generate interactive diagrams, flowcharts, and database schemas directly in responses—43% faster than GPT-4\'s image generation. In-browser code execution lets you run, test, and modify code snippets without switching to an IDE. You can iterate on solutions in real-time, making it perfect for prototyping and debugging.'
    },
    {
      question: 'Is Phind Pro worth $17/month for developers?',
      answer: 'Yes, especially compared to alternatives. You get unlimited searches with both Phind-405B and Phind-70B models, VS Code integration, visual diagrams, and in-browser execution. Users report saving 2-3 hours daily on technical research. It\'s $3 cheaper than ChatGPT Plus, Perplexity Pro, or Claude Pro while being specifically optimized for development work.'
    },
    {
      question: 'What are Phind\'s limitations?',
      answer: 'Current limitations include: VS Code only (JetBrains support coming Q3 2025), requires internet connection (offline mode planned Q4 2025), no mobile app yet, visual interface can be overwhelming for simple queries, and the free tier is quite limited. However, for web-connected development work, these limitations rarely impact productivity.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://phind.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Phind</a> revolutionizes how developers search for technical information, delivering visual, interactive answers 5x faster than traditional AI assistants. Powered by the proprietary Phind-405B model built on <a href="https://ai.meta.com/llama/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Meta's Llama 3.1</a> architecture, it achieves an impressive 82.3% HumanEval score, outperforming <Link href="/tools/chatgpt" className="text-purple-400 hover:text-purple-300">ChatGPT's GPT-4 Turbo</Link> on coding benchmarks. What sets Phind apart is its developer-first approach: interactive diagrams that visualize system architecture, in-browser code execution for instant testing, and a native VS Code extension that brings AI assistance directly into your IDE. At just $17/month for Pro, it undercuts <Link href="/tools/perplexity" className="text-purple-400 hover:text-purple-300">Perplexity Pro</Link> and <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude Pro</Link> by $3 while delivering specialized features they lack.
      </p>
      
      <p className="text-lg leading-relaxed">
        The platform's technical superiority stems from its focused design for software engineering workflows. Unlike general-purpose assistants like <Link href="/tools/gemini-code-assist" className="text-purple-400 hover:text-purple-300">Gemini Code Assist</Link> or <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link>, Phind combines real-time web search of documentation, Stack Overflow integration, and GitHub code examples with lightning-fast 80 tokens/second response rates powered by NVIDIA H100 clusters. The visual answer engine generates database schemas and flowcharts 43% faster than GPT-4, while the in-browser execution environment eliminates context-switching between search and testing. With 1.3 million monthly users and 14% weekly growth, Phind is rapidly becoming the go-to search engine for developers who need accurate, actionable answers. The upcoming JetBrains support (Q3 2025) and offline mode (Q4 2025) will further cement its position as an essential tool for modern software development, especially for teams that report saving $138/month compared to ChatGPT Enterprise when averaging 50+ daily technical queries.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Phind?',
    segments: [
      {
        name: 'Software Engineers',
        description: 'Developers seeking fast, accurate answers with visual diagrams and executable code.',
        icon: Code,
        stats: '1.3M monthly users'
      },
      {
        name: 'DevOps Teams',
        description: 'Infrastructure engineers needing quick solutions for Docker, Kubernetes, and cloud platforms.',
        icon: Cloud,
        stats: '14% weekly growth'
      },
      {
        name: 'Full-Stack Developers',
        description: 'Engineers working across frontend, backend, and databases with VS Code integration.',
        icon: Layers,
        stats: '80 tokens/sec'
      },
      {
        name: 'Technical Students',
        description: 'CS students and bootcamp learners using visual explanations for complex concepts.',
        icon: GraduationCap,
        stats: 'Education pricing'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Phind Unique?',
    points: [
      {
        title: 'Developer-Only Focus',
        description: 'Built exclusively for technical queries, not general conversation.',
        icon: Target
      },
      {
        title: 'Visual + Executable',
        description: 'Interactive diagrams plus in-browser code execution in one platform.',
        icon: Eye
      },
      {
        title: '5x Faster',
        description: '80 tokens/second makes it the fastest AI for technical searches.',
        icon: Zap
      },
      {
        title: 'IDE Integration',
        description: 'Native VS Code extension brings AI directly into your workflow.',
        icon: Package
      },
      {
        title: 'Best Price/Performance',
        description: '$17/month for unlimited searches beats all major competitors.',
        icon: Rocket
      }
    ]
  }
}

export default function PhindPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={phindData} />
    </>
  )
}
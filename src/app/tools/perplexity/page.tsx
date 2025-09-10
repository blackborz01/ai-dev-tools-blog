'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Search, Link2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const perplexityData = {
  name: 'Perplexity AI',
  tagline: 'AI-powered search engine with real-time data and source citations',
  description: 'Perplexity AI revolutionizes research with real-time web search, accurate citations, and access to top AI models. Perfect for developers needing up-to-date technical information with verified sources.',
  url: 'https://perplexity.ai',
  category: 'AI Search & Research',
  logo: '/logos/perplexity.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          '5 Pro searches/4 hours',
          'Unlimited Quick searches',
          'Standard AI model',
          '5 follow-ups/4 hours',
          '3 uploads/day',
          'Collections support',
          'Basic search features'
        ],
        highlighted: false
      },
      {
        name: 'Pro',
        price: '$20',
        features: [
          '300 Pro searches/day',
          'GPT-4o, Claude 3.5, o3-pro',
          'Grok 4 for coding',
          'Sonar 200k context',
          'Unlimited file uploads',
          'API access ($5 credit)',
          'Yearly: $200 ($16.67/mo)'
        ],
        highlighted: true
      },
      {
        name: 'Perplexity Max',
        price: 'Premium',
        features: [
          'Everything in Pro',
          'Limitless AI productivity',
          'Early access features',
          'Priority model access',
          'Advanced capabilities',
          'Premium support',
          'Maximum quotas'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise Pro',
        price: '$40/user',
        features: [
          'All Pro features',
          'Team collaboration',
          'Enhanced security',
          'Admin controls',
          'SSO integration',
          'Priority support',
          'Yearly: $400 ($33.33/mo)'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Search,
      title: 'Real-Time Web Search',
      description: 'Access current information from the entire web. Always up-to-date results with live data crawling.'
    },
    {
      icon: Link2,
      title: 'Verified Citations',
      description: 'Every answer includes clickable source links. Perfect for research requiring credible references.'
    },
    {
      icon: Brain,
      title: 'Multiple AI Models',
      description: 'Access GPT-4o, Claude 3.5 Sonnet, Gemini 2.5 Pro, o3-pro, and Grok 4 for diverse capabilities.'
    },
    {
      icon: Code,
      title: 'Grok 4 for Coding',
      description: 'xAI\'s model built for expert scientific reasoning, coding assistance, and mathematical problem-solving.'
    },
    {
      icon: FileCode,
      title: 'Perplexity Labs',
      description: 'Create structured outputs: reports, spreadsheets, charts, small web apps, and compliance dashboards.'
    },
    {
      icon: Database,
      title: 'Document Analysis',
      description: 'Upload and analyze PDFs, CSVs, images. Process entire research papers and technical documentation.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$20 Pro',
      competitors: { 'ChatGPT Plus': '$20', 'Claude Pro': '$20', 'Gemini Advanced': '$20' }
    },
    {
      feature: 'Real-Time Data',
      tool: 'Always current',
      competitors: { 'ChatGPT Plus': 'Limited', 'Claude Pro': 'No', 'Gemini Advanced': 'Yes' }
    },
    {
      feature: 'Source Citations',
      tool: 'Every answer',
      competitors: { 'ChatGPT Plus': 'Sometimes', 'Claude Pro': 'No', 'Gemini Advanced': 'Sometimes' }
    },
    {
      feature: 'Model Access',
      tool: '6+ models',
      competitors: { 'ChatGPT Plus': 'GPT only', 'Claude Pro': 'Claude only', 'Gemini Advanced': 'Gemini only' }
    },
    {
      feature: 'API Access',
      tool: '$5 credit/mo',
      competitors: { 'ChatGPT Plus': 'Separate', 'Claude Pro': 'Separate', 'Gemini Advanced': 'Separate' }
    },
    {
      feature: 'Context Window',
      tool: '200k (Sonar)',
      competitors: { 'ChatGPT Plus': '128k', 'Claude Pro': '200k', 'Gemini Advanced': '1M' }
    }
  ],

  integrations: [
    { name: 'GPT-4o', category: 'AI Model', icon: '🤖', description: 'OpenAI latest' },
    { name: 'Claude 3.5', category: 'AI Model', icon: '🧠', description: 'Anthropic AI' },
    { name: 'Gemini 2.5', category: 'AI Model', icon: '✨', description: 'Google AI' },
    { name: 'Grok 4', category: 'AI Model', icon: '🚀', description: 'xAI coding' },
    { name: 'o3-pro', category: 'AI Model', icon: '⚡', description: 'OpenAI reasoning' },
    { name: 'DALL-E 3', category: 'Image', icon: '🎨', description: 'Image generation' },
    { name: 'Flux1 Pro', category: 'Image', icon: '🖼️', description: 'Advanced images' },
    { name: 'API', category: 'Developer', icon: '🔗', description: 'pplx-api access' }
  ],

  reviews: [
    {
      author: 'Research Developer',
      role: 'Senior Engineer',
      company: 'Tech Company',
      rating: 5,
      comment: 'The citation system is unmatched. Every technical answer I get has verifiable sources. Worth every penny for accurate research.',
      verified: true
    },
    {
      author: 'Data Scientist',
      role: 'ML Engineer',
      company: 'AI Startup',
      rating: 5,
      comment: 'Having access to 6+ AI models in one place is incredible. Grok 4 for coding tasks, Claude for analysis, all with real-time data.',
      verified: true
    },
    {
      author: 'Technical Writer',
      role: 'Documentation Lead',
      company: 'SaaS Platform',
      rating: 5,
      comment: 'Perplexity Labs creates structured outputs that save hours. Generate compliance docs, technical reports with proper citations instantly.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://perplexity.ai/help-center',
    api: 'https://docs.perplexity.ai',
    pricing: 'https://perplexity.ai/pro',
    enterprise: 'https://perplexity.ai/enterprise',
    blog: 'https://perplexity.ai/hub'
  },

  faqs: [
    {
      question: 'How does Perplexity differ from ChatGPT?',
      answer: 'While both cost $20/month for Pro, Perplexity excels at real-time web search with citations. Every answer includes clickable source links, making it superior for research. Perplexity accesses 6+ AI models (GPT-4o, Claude 3.5, Grok 4, etc.) vs ChatGPT\'s single model. It\'s designed for accurate, verifiable information rather than creative writing.'
    },
    {
      question: 'What are Pro searches vs Quick searches?',
      answer: 'Quick searches use Perplexity\'s standard model and are unlimited even on free tier. Pro searches access advanced models (GPT-4o, Claude 3.5, o3-pro, Grok 4) with deeper analysis. Free users get 5 Pro searches every 4 hours, while Pro subscribers get 300 daily. Pro searches provide more comprehensive, accurate results with better reasoning.'
    },
    {
      question: 'What is Grok 4 and why is it special for developers?',
      answer: 'Grok 4 is xAI\'s model optimized for scientific reasoning, coding, and mathematics. Available in Perplexity Pro, it excels at debugging complex code, explaining algorithms, and solving technical problems. It provides real-time updates and coding assistance superior to general-purpose models, making it invaluable for developers.'
    },
    {
      question: 'What can Perplexity Labs create?',
      answer: 'Perplexity Labs (Pro feature) generates structured outputs beyond text: compliance dashboards, technical reports, spreadsheets with formulas, charts and visualizations, even small web applications. It\'s perfect for creating project documentation, data analysis reports, or quick prototypes with proper formatting and organization.'
    },
    {
      question: 'Is the API included with Pro subscription?',
      answer: 'Pro subscribers receive $5 monthly credit toward API usage (pplx-api). API pricing ranges from $0.2-$5 per million tokens for Sonar models. The API lets developers integrate Perplexity\'s search and AI capabilities into their applications, with usage-based pricing beyond the included credit.'
    },
    {
      question: 'What is Perplexity Max?',
      answer: 'Perplexity Max is the premium tier above Pro, offering limitless AI productivity, immediate access to newest features and models, maximum quotas, and priority support. It\'s designed for power users who need the absolute latest capabilities and highest limits. Pricing is premium and tailored to advanced needs.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Perplexity AI</a> revolutionizes how developers and researchers access information by combining real-time web search with multiple AI models and verifiable citations. Unlike <Link href="/tools/chatgpt" className="text-purple-400 hover:text-purple-300">ChatGPT</Link>'s knowledge cutoff or <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude</Link>'s lack of web access, Perplexity delivers current information with clickable source links for every claim. At $20/month for Pro, users access <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GPT-4o</a>, <a href="https://anthropic.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Claude 3.5 Sonnet</a>, <a href="https://x.ai" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Grok 4</a> for coding, <a href="https://deepmind.google" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Gemini 2.5 Pro</a>, and o3-pro reasoning model—essentially getting six AI assistants for the price of one.
      </p>
      
      <p className="text-lg leading-relaxed">
        What sets Perplexity apart for developers is its focus on accuracy and verifiability. While <Link href="/tools/phind" className="text-purple-400 hover:text-purple-300">Phind</Link> targets developer search specifically, Perplexity offers broader capabilities with Perplexity Labs creating structured outputs like compliance dashboards, technical documentation, and even small web applications. The inclusion of Grok 4—xAI's model optimized for scientific reasoning and coding—makes it particularly powerful for technical tasks. With 300 Pro searches daily, unlimited file uploads for analyzing documentation, and a $5 monthly API credit, Perplexity Pro delivers exceptional value for developers who need accurate, cited information rather than creative content. The recent addition of Perplexity Max tier and Sonar's 200k token context window solidifies its position as the premier AI-powered research tool, making it indispensable for anyone who values truth and verification over speculation.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Perplexity AI?',
    segments: [
      {
        name: 'Research Developers',
        description: 'Engineers who need accurate, up-to-date technical information with verifiable sources.',
        icon: Search,
        stats: '300 Pro searches/day'
      },
      {
        name: 'Data Scientists',
        description: 'ML engineers leveraging multiple AI models and real-time data for analysis.',
        icon: Brain,
        stats: '6+ AI models'
      },
      {
        name: 'Technical Writers',
        description: 'Documentation teams creating cited, accurate content with structured outputs.',
        icon: FileCode,
        stats: 'Labs structured output'
      },
      {
        name: 'Academic Researchers',
        description: 'Scholars and students needing properly cited sources for papers and research.',
        icon: GraduationCap,
        stats: 'Every answer cited'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Perplexity Unique?',
    points: [
      {
        title: 'Real-Time Web Search',
        description: 'Always current information, not limited by training data cutoffs like other AIs.',
        icon: Search
      },
      {
        title: 'Verified Citations',
        description: 'Every answer includes clickable sources. Perfect for professional and academic work.',
        icon: Link2
      },
      {
        title: 'Multi-Model Access',
        description: 'Six+ AI models in one subscription: GPT-4o, Claude 3.5, Grok 4, Gemini, o3-pro.',
        icon: Brain
      },
      {
        title: 'Grok 4 for Coding',
        description: 'xAI\'s specialized model for scientific reasoning, coding, and mathematics.',
        icon: Code
      },
      {
        title: 'Structured Outputs',
        description: 'Perplexity Labs creates reports, dashboards, spreadsheets, and web apps.',
        icon: FileCode
      }
    ]
  }
}

export default function PerplexityPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={perplexityData} />
    </>
  )
}
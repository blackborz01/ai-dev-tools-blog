'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, MessageSquare, Video } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const chatgptData = {
  name: 'ChatGPT',
  tagline: 'OpenAI\'s conversational AI with GPT-4, o1 models, and Canvas for coding',
  description: 'ChatGPT revolutionized AI interaction with GPT-4o, o3 reasoning models, Canvas collaborative coding, DALL-E 3, and web browsing. The world\'s most popular AI assistant for coding, writing, and problem-solving.',
  url: 'https://chat.openai.com',
  category: 'AI Assistant',
  logo: '/logos/chatgpt.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          'GPT-3.5 unlimited',
          'Limited GPT-4o access',
          'Basic web browsing',
          'No file uploads',
          'No Code Interpreter',
          'No Deep Research',
          'Standard response speed'
        ]
      },
      {
        name: 'Plus',
        price: '$20',
        features: [
          '80 msgs/3hr GPT-4o',
          'o3, o1-mini models',
          'Canvas for coding',
          'DALL-E 3 images',
          'Advanced Data Analysis',
          'Custom GPTs',
          'Voice & video chat'
        ],
        highlighted: true
      },
      {
        name: 'Pro',
        price: '$200',
        features: [
          'Unlimited GPT-4o',
          'Exclusive o1 Pro mode',
          'No usage caps',
          'Sora video generation',
          '120 Deep Research/mo',
          'Operator preview',
          'Priority access'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Team',
        price: '$25/user',
        features: [
          'All Plus features',
          '2x message limits',
          'Admin console',
          'Shared workspace',
          'No training on data',
          'Google Drive integration',
          'Annual: $25/mo'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'SOC 2 compliance',
          'SSO/SAML',
          'SLA guarantees',
          'Usage analytics',
          'Volume licensing',
          'Dedicated support',
          'Custom deployment'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Brain,
      title: 'o3 Reasoning Model',
      description: 'OpenAI\'s most powerful reasoning model. 20% fewer errors than o1 on complex multi-step problems.'
    },
    {
      icon: Code,
      title: 'Canvas for Coding',
      description: 'Collaborative coding environment with inline editing, debugging, and version control features.'
    },
    {
      icon: Video,
      title: 'Multimodal GPT-4o',
      description: 'Process text, images, and code. Voice and video chat with advanced understanding capabilities.'
    },
    {
      icon: Sparkles,
      title: 'DALL-E 3 Generation',
      description: 'Create stunning images from text descriptions. Integrated directly into conversations.'
    },
    {
      icon: Globe,
      title: 'Web Browsing',
      description: 'Real-time web search via Bing integration. Access current information beyond training cutoff.'
    },
    {
      icon: FileCode,
      title: 'Deep Research',
      description: 'Comprehensive information synthesis across multiple sources. 120 queries/month on Pro.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$20 Plus / $200 Pro',
      competitors: { 'Claude Pro': '$20', 'Perplexity Pro': '$20', 'Gemini Advanced': '$20' }
    },
    {
      feature: 'Reasoning Models',
      tool: 'o3, o1, o1-mini',
      competitors: { 'Claude Pro': 'No', 'Perplexity Pro': 'o3 access', 'Gemini Advanced': 'No' }
    },
    {
      feature: 'Coding Environment',
      tool: 'Canvas',
      competitors: { 'Claude Pro': 'Artifacts', 'Perplexity Pro': 'Labs', 'Gemini Advanced': 'No' }
    },
    {
      feature: 'Image Generation',
      tool: 'DALL-E 3',
      competitors: { 'Claude Pro': 'No', 'Perplexity Pro': 'Multiple', 'Gemini Advanced': 'Imagen 3' }
    },
    {
      feature: 'Video Generation',
      tool: 'Sora (Pro)',
      competitors: { 'Claude Pro': 'No', 'Perplexity Pro': 'No', 'Gemini Advanced': 'No' }
    },
    {
      feature: 'Usage Limits',
      tool: '80/3hr (Plus)',
      competitors: { 'Claude Pro': '5x more', 'Perplexity Pro': '300/day', 'Gemini Advanced': 'Generous' }
    }
  ],

  integrations: [
    { name: 'GPT-4o', category: 'Model', icon: '🧠', description: 'Multimodal AI' },
    { name: 'o3', category: 'Model', icon: '🎯', description: 'Reasoning model' },
    { name: 'o1 Pro', category: 'Model', icon: '⚡', description: 'Pro exclusive' },
    { name: 'DALL-E 3', category: 'Image', icon: '🎨', description: 'Image generation' },
    { name: 'Canvas', category: 'Coding', icon: '📝', description: 'Code editor' },
    { name: 'Sora', category: 'Video', icon: '🎬', description: 'Video creation' },
    { name: 'Bing', category: 'Search', icon: '🔍', description: 'Web browsing' },
    { name: 'Python', category: 'Code', icon: '🐍', description: 'Code Interpreter' }
  ],

  reviews: [
    {
      author: 'Software Engineer',
      role: 'Senior Developer',
      company: 'Tech Startup',
      rating: 5,
      comment: 'Canvas transformed my coding workflow. The o3 model catches logic errors I would miss. Worth every penny of Plus.',
      verified: true
    },
    {
      author: 'AI Researcher',
      role: 'ML Engineer',
      company: 'Research Lab',
      rating: 5,
      comment: 'Pro tier is expensive but unlimited o1 access is game-changing for complex reasoning tasks. Deep Research saves hours.',
      verified: true
    },
    {
      author: 'Content Creator',
      role: 'Developer Advocate',
      company: 'SaaS Company',
      rating: 5,
      comment: 'DALL-E 3 integration and Canvas make ChatGPT my all-in-one tool. The $20 Plus tier offers incredible value.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://help.openai.com',
    api: 'https://platform.openai.com',
    pricing: 'https://openai.com/chatgpt/pricing',
    blog: 'https://openai.com/blog',
    playground: 'https://platform.openai.com/playground'
  },

  faqs: [
    {
      question: 'What\'s the difference between Plus and Pro?',
      answer: 'Plus ($20/month) offers 80 messages per 3 hours with GPT-4o, access to o3 and o1-mini reasoning models, Canvas, DALL-E 3, and custom GPTs. Pro ($200/month) provides unlimited GPT-4o, exclusive o1 Pro mode, no usage caps, Sora video generation, 120 Deep Research queries monthly, and early access to features like Operator. Pro is for power users who need unlimited access.'
    },
    {
      question: 'What are the o-series reasoning models?',
      answer: 'The o-series are OpenAI\'s specialized reasoning models. o3 is the newest high-end model with 20% fewer errors than o1 on complex problems, excellent for math, coding, and visual tasks. o1 (Pro exclusive) is the flagship reasoning model. o1-mini is a smaller, faster version for efficient reasoning. These models excel at multi-step problem solving and complex analysis.'
    },
    {
      question: 'What is Canvas and how does it help with coding?',
      answer: 'Canvas is ChatGPT\'s collaborative coding environment launched in 2024. It provides a side-by-side interface where you can edit code inline, track versions, debug with AI assistance, and get contextual suggestions. Unlike the chat interface, Canvas maintains code context and allows direct manipulation, making it ideal for larger projects and iterative development.'
    },
    {
      question: 'Is ChatGPT Team worth it over Plus?',
      answer: 'Team ($25/user/month annually or $30 monthly) offers everything in Plus with roughly 2x higher message limits, a secure shared workspace, admin console, and your data isn\'t used for training. It\'s worth it for small teams needing collaboration features, higher limits, and data privacy. Minimum 2 seats required.'
    },
    {
      question: 'How does ChatGPT compare to Claude or Perplexity?',
      answer: 'ChatGPT excels in versatility with Canvas coding, DALL-E 3 images, and o-series reasoning models. Claude offers better context handling (200K tokens) and Artifacts for code. Perplexity specializes in real-time search with citations. ChatGPT is best for general use, Claude for long documents, and Perplexity for research requiring sources.'
    },
    {
      question: 'What is Deep Research and Sora?',
      answer: 'Deep Research (Plus/Pro feature) synthesizes information across multiple sources for comprehensive analysis. Sora (Pro exclusive) is OpenAI\'s text-to-video generation model, allowing creation of realistic videos from text descriptions. Both represent ChatGPT\'s expansion beyond text into multimodal AI capabilities.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">ChatGPT</a> by <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">OpenAI</a> revolutionized AI interaction when it launched in November 2022, becoming the fastest-growing consumer application in history. Now with GPT-4o multimodal capabilities, o3 reasoning models that reduce errors by 20%, and Canvas collaborative coding environment, ChatGPT remains the world's most popular AI assistant. The Plus tier at $20/month provides exceptional value with 80 GPT-4o messages per 3 hours, <a href="https://openai.com/dall-e-3" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">DALL-E 3</a> image generation, and access to custom GPTs. Unlike <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude</Link>'s focus on context length or <Link href="/tools/perplexity" className="text-purple-400 hover:text-purple-300">Perplexity</Link>'s emphasis on citations, ChatGPT offers the most versatile AI platform with integrated multimodal capabilities.
      </p>
      
      <p className="text-lg leading-relaxed">
        The Pro tier at $200/month targets power users with unlimited GPT-4o access, exclusive o1 Pro reasoning mode, and <a href="https://openai.com/sora" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Sora</a> video generation—features unavailable in any competitor. For teams, the $25/user plan provides enhanced limits and data privacy guarantees, competing directly with <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude Team</Link> and enterprise offerings. With Canvas transforming how developers interact with AI for coding, Deep Research synthesizing comprehensive information, and continuous model improvements like o3 and o1-mini, ChatGPT maintains its position as the industry standard. While <Link href="/tools/gemini-code-assist" className="text-purple-400 hover:text-purple-300">Gemini</Link> offers Google integration and <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link> excels at code completion, ChatGPT's combination of conversational AI, reasoning models, creative tools, and coding capabilities makes it the most comprehensive AI assistant available in 2025.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses ChatGPT?',
    segments: [
      {
        name: 'Software Developers',
        description: 'Engineers using Canvas for collaborative coding and o3 models for debugging complex logic.',
        icon: Code,
        stats: 'Canvas coding'
      },
      {
        name: 'Researchers & Students',
        description: 'Academic users leveraging Deep Research and reasoning models for comprehensive analysis.',
        icon: GraduationCap,
        stats: '200M+ users'
      },
      {
        name: 'Creative Professionals',
        description: 'Designers and creators using DALL-E 3 and Sora for visual content generation.',
        icon: Sparkles,
        stats: 'DALL-E 3 + Sora'
      },
      {
        name: 'Enterprise Teams',
        description: 'Organizations using Team/Enterprise plans for secure, collaborative AI assistance.',
        icon: Building2,
        stats: '92% Fortune 500'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes ChatGPT Unique?',
    points: [
      {
        title: 'Industry Standard',
        description: 'Most popular AI with 200M+ users. Set the standard others follow.',
        icon: Globe
      },
      {
        title: 'o-Series Reasoning',
        description: 'Exclusive o3, o1, and o1-mini models for superior problem-solving capabilities.',
        icon: Brain
      },
      {
        title: 'Canvas Environment',
        description: 'Revolutionary collaborative coding interface for iterative development.',
        icon: Code
      },
      {
        title: 'Multimodal Leader',
        description: 'Text, images, voice, video, code—most comprehensive AI platform available.',
        icon: Sparkles
      },
      {
        title: 'Continuous Innovation',
        description: 'Regular updates with groundbreaking features like Sora and Operator.',
        icon: Rocket
      }
    ]
  }
}

export default function ChatGPTPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={chatgptData} />
    </>
  )
}
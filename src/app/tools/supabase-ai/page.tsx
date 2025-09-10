'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Search, Vector } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const supabaseData = {
  name: 'Supabase AI',
  tagline: 'Open-source AI backend with PostgreSQL vector embeddings',
  description: 'Supabase AI combines PostgreSQL with pgvector for seamless vector embeddings, semantic search, and RAG applications. Build AI-powered apps with unified data architecture and real-time capabilities.',
  url: 'https://supabase.com/ai',
  category: 'AI Backend Platform',
  logo: '/logos/supabase.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          '50,000 monthly active users',
          '500 MB database',
          '5 GB bandwidth',
          '1 GB file storage',
          'Full pgvector access',
          'Community support',
          'Paused after 1 week inactive'
        ],
        highlighted: true
      },
      {
        name: 'Pro',
        price: '$25+',
        features: [
          '100,000 monthly active users',
          '8 GB database',
          '250 GB bandwidth',
          '100 GB storage',
          '$10 compute credits',
          'Daily backups (7 days)',
          'Email support'
        ]
      },
      {
        name: 'Team',
        price: '$599+',
        features: [
          'Everything in Pro',
          'SOC2 certified',
          'SSO for dashboard',
          'Priority support',
          '14-day backups',
          '28-day log retention',
          'Team collaboration'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Designated support manager',
          'Uptime SLAs',
          '24×7×365 premium support',
          'Private Slack channel',
          'Custom security',
          'HIPAA compliance',
          'Advanced permissions'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Database,
      title: 'pgvector Integration',
      description: 'Store vector embeddings directly in PostgreSQL. Support for up to 4000 dimensions with float16 vectors for 50% storage savings.'
    },
    {
      icon: Search,
      title: 'Semantic Search',
      description: 'Fast similarity searches with HNSW and IVFFlat indexing. 30% faster build times with pgvector v0.7.0.'
    },
    {
      icon: Brain,
      title: 'AI Model Integration',
      description: 'Native support for OpenAI, Hugging Face (100K+ models), LangChain, and LlamaIndex. Run models via Edge Functions.'
    },
    {
      icon: Zap,
      title: 'Real-time Vector Updates',
      description: 'Live updates across vector and relational data without complex ETL. ACID compliance for transactional consistency.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC2 Type 2 certified, HIPAA compliant. Row-level security, automatic backups, and point-in-time recovery.'
    },
    {
      icon: Package,
      title: 'Unified Architecture',
      description: 'Combine vector embeddings with relational data in one database. 4X cost savings vs dedicated vector databases.'
    }
  ],

  comparisons: [
    {
      feature: 'Database Type',
      tool: 'PostgreSQL + pgvector',
      competitors: { 'Firebase': 'NoSQL', 'Pinecone': 'Vector only', 'PlanetScale': 'MySQL' }
    },
    {
      feature: 'Starting Price',
      tool: '$0 Free',
      competitors: { 'Firebase': '$0 Free', 'Pinecone': '$0 Free', 'PlanetScale': '$0 Free' }
    },
    {
      feature: 'Vector Dimensions',
      tool: 'Up to 4000',
      competitors: { 'Firebase': 'N/A', 'Pinecone': '20,000', 'PlanetScale': 'N/A' }
    },
    {
      feature: 'Open Source',
      tool: 'Yes',
      competitors: { 'Firebase': 'No', 'Pinecone': 'No', 'PlanetScale': 'Partially' }
    },
    {
      feature: 'Real-time',
      tool: 'Built-in',
      competitors: { 'Firebase': 'Built-in', 'Pinecone': 'No', 'PlanetScale': 'No' }
    },
    {
      feature: 'Cost Efficiency',
      tool: '4X savings',
      competitors: { 'Firebase': 'Standard', 'Pinecone': 'Premium', 'PlanetScale': 'Standard' }
    }
  ],

  integrations: [
    { name: 'OpenAI', category: 'AI Model', icon: '🤖', description: 'Embeddings & completions' },
    { name: 'Hugging Face', category: 'AI Platform', icon: '🤗', description: '100K+ models' },
    { name: 'LangChain', category: 'Framework', icon: '🔗', description: 'Vector store support' },
    { name: 'LlamaIndex', category: 'Framework', icon: '🦙', description: 'Data framework' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘', description: 'Core database' },
    { name: 'Edge Functions', category: 'Compute', icon: '⚡', description: 'Serverless functions' },
    { name: 'Amazon Bedrock', category: 'AI Service', icon: '☁️', description: 'AWS integration' },
    { name: 'Transformers.js', category: 'Library', icon: '🤖', description: 'Client-side AI' }
  ],

  reviews: [
    {
      author: 'Mendable Team',
      role: 'AI Startup',
      company: 'Mendable',
      rating: 5,
      comment: 'Switched from Pinecone to Supabase. The unified data architecture and 4X cost savings transformed our efficiency.',
      verified: true
    },
    {
      author: 'Bootstrapped Founder',
      role: 'Solo Entrepreneur',
      company: 'AI SaaS',
      rating: 5,
      comment: 'Built an AI app that scaled to $1M in 5 months using Supabase. The vector search performance is incredible.',
      verified: true
    },
    {
      author: 'Engineering Team',
      role: 'FinTech',
      company: 'Bree',
      rating: 5,
      comment: 'Serving 20M+ users with 10X performance gains. Supabase AI features are production-ready at scale.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://supabase.com/docs/guides/ai',
    github: 'https://github.com/supabase/supabase',
    discord: 'https://discord.gg/supabase',
    twitter: 'https://twitter.com/supabase',
    blog: 'https://supabase.com/blog'
  },

  faqs: [
    {
      question: 'How does Supabase AI compare to dedicated vector databases?',
      answer: 'Supabase provides 4X cost savings compared to dedicated vector databases like Pinecone while maintaining equivalent performance. You get the benefits of PostgreSQL\'s ACID compliance, unified data architecture (vectors + relational data), and real-time capabilities all in one platform. Companies like Mendable and Berri AI have successfully migrated from dedicated solutions.'
    },
    {
      question: 'What AI models and frameworks does Supabase support?',
      answer: 'Supabase integrates with OpenAI, Hugging Face (100K+ models), LangChain, LlamaIndex, Amazon Bedrock, and custom model endpoints. You can run models via Edge Functions, connect to external AI services, or use Transformers.js for client-side inference. The platform supports embeddings up to 4000 dimensions.'
    },
    {
      question: 'Is Supabase suitable for production AI applications?',
      answer: 'Yes, Supabase powers AI applications at companies like Meta, Netflix, Microsoft, and GitHub Next. 40% of Y Combinator 2025 startups use Supabase. The platform is SOC2 Type 2 certified, HIPAA compliant, and has proven scale with customers storing 1.6M+ embeddings with excellent performance.'
    },
    {
      question: 'What are the key AI features in Supabase?',
      answer: 'Supabase AI includes pgvector for storing embeddings, semantic search with HNSW/IVFFlat indexing, automatic embedding generation, real-time vector updates, and support for sparse/bit vectors. The latest pgvector v0.7.0 offers 30% faster builds and 50% storage savings with float16 vectors.'
    },
    {
      question: 'How much does Supabase AI cost?',
      answer: 'Supabase offers a generous free tier with full pgvector access, 500MB database, and 50K monthly active users. Pro plans start at $25/month with 8GB database and $10 compute credits. Usage-based pricing: $0.09/GB bandwidth, $0.125/GB storage, $2 per 1M Edge Function invocations.'
    },
    {
      question: 'Can I migrate from Firebase to Supabase?',
      answer: 'Yes, Supabase is designed as an open-source Firebase alternative. While Firebase uses NoSQL, Supabase uses PostgreSQL which offers better support for complex queries, vector embeddings, and AI workloads. Supabase provides migration guides and has no vendor lock-in with self-hosting options available.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://supabase.com/ai" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Supabase AI</a> revolutionizes AI application development by combining <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">PostgreSQL</a> with pgvector for seamless vector embeddings and semantic search at 4X lower cost than dedicated solutions like <a href="https://www.pinecone.io" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Pinecone</a>. With $316M in funding at a $2B valuation, Supabase powers AI applications for 40% of Y Combinator 2025 startups and enterprises like <a href="https://www.meta.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Meta</a>, <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Netflix</a>, and <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Microsoft</a>. The platform's native integration with <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">OpenAI</a>, <a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Hugging Face</a>'s 100K+ models, and <a href="https://www.langchain.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">LangChain</a> makes it the go-to backend for RAG applications and AI-powered SaaS.
      </p>
      
      <p className="text-lg leading-relaxed">
        Unlike <Link href="/tools/lovable" className="text-purple-400 hover:text-purple-300">Lovable</Link> which uses Supabase as a backend or <Link href="/tools/create-xyz" className="text-purple-400 hover:text-purple-300">Create.xyz</Link> which focuses on app generation, Supabase AI provides the infrastructure layer powering next-generation AI applications with pgvector v0.7.0 offering 30% faster builds and 50% storage savings. Starting free with generous limits and scaling to enterprise with SOC2 and HIPAA compliance, Supabase enables developers to build semantic search, recommendation systems, and AI assistants with unified vector and relational data architecture. The platform's 1.7M+ registered developers and 81K+ GitHub stars validate its position as the leading open-source alternative to <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Firebase</a> for AI workloads, with customers like Chatbase achieving $1M+ monthly revenue and bootstrapped founders scaling to $1M in just 5 months.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Supabase AI?',
    segments: [
      {
        name: 'AI Startups',
        description: '40% of Y Combinator 2025 class builds on Supabase for vector search and RAG applications.',
        icon: Rocket,
        stats: '40% of YC 2025'
      },
      {
        name: 'Enterprise Teams',
        description: 'Meta, Netflix, Microsoft, and GitHub Next rely on Supabase for production AI workloads.',
        icon: Building2,
        stats: 'Fortune 500 adoption'
      },
      {
        name: 'Indie Developers',
        description: '1.7M+ developers build AI-powered SaaS with Supabase\'s generous free tier and scaling.',
        icon: Code,
        stats: '1.7M+ developers'
      },
      {
        name: 'FinTech & Healthcare',
        description: 'SOC2 and HIPAA compliant platform trusted by Bree (20M+ users) and healthcare providers.',
        icon: Shield,
        stats: 'HIPAA compliant'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Supabase AI Unique?',
    points: [
      {
        title: 'Unified Data Architecture',
        description: 'Combine vector embeddings with relational data in PostgreSQL—no separate vector database needed.',
        icon: Database
      },
      {
        title: '4X Cost Savings',
        description: 'Proven 4X lower costs than Pinecone or Weaviate with equivalent or better performance.',
        icon: Zap
      },
      {
        title: 'Open Source Foundation',
        description: '81K+ GitHub stars, no vendor lock-in, self-hosting option with full PostgreSQL power.',
        icon: GitBranch
      },
      {
        title: 'Real-time AI Updates',
        description: 'Live vector updates with ACID compliance—the only solution combining real-time with vectors.',
        icon: Sparkles
      },
      {
        title: 'Production Scale Proven',
        description: '1M+ databases created, customers storing 1.6M+ embeddings with excellent performance.',
        icon: Rocket
      }
    ]
  }
}

export default function SupabaseAIPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={supabaseData} />
    </>
  )
}
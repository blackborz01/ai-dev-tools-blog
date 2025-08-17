import { 
  Zap, MessageSquare, RefreshCw, Shield, Code2, 
  Database, Cloud, Package, Terminal, Brain,
  GitBranch, Search, FileCode, Bug, Sparkles
} from 'lucide-react'
import { cursorToolData } from './cursor-tool-data'

export interface Tool {
  id: number
  slug: string
  name: string
  tagline?: string
  description: string
  longDescription?: string
  category: string
  author: string
  stars: number
  downloads: number
  lastUpdate: string
  trending: boolean
  growthRate: number
  compatibility: string[]
  languages?: string[]
  status: string
  hot: boolean
  cta?: string
  version?: string
  pricing?: {
    free?: {
      name: string
      price: number
      features: string[]
    }
    pro?: {
      name: string
      price: number
      period?: string
      features: string[]
    }
    business?: {
      name: string
      price: number
      period?: string
      features: string[]
    }
  }
  stats?: {
    users: number
    stars: number
    downloads: number
    rating: number
    reviews: number
    weeklyGrowth: number
    monthlyGrowth: number
  }
  features?: Array<{
    title: string
    description: string
    icon: any
  }>
  testimonials?: Array<{
    author: string
    role: string
    content: string
    rating: number
  }>
  changelog?: Array<{
    version: string
    date: string
    changes: string[]
  }>
  competitors?: Array<{
    name: string
    difference: string
  }>
  urls?: {
    official?: string
    github?: string
    docs?: string
    discord?: string
    twitter?: string
  }
  affiliateUrl?: string
  githubUrl?: string
  docsUrl?: string
  officialUrl?: string
}

export const tools: Tool[] = [
  {
    id: 1,
    slug: "cursor-ide",
    name: "CURSOR",
    tagline: "The AI-First Code Editor That Writes With You",
    description: "Cursor is an AI-powered code editor built on VS Code that uses advanced models like GPT-4 and Claude 3.5 Sonnet to help developers write, edit, and understand code faster. With Agent Mode for autonomous coding, 500K+ developers have made the switch.",
    longDescription: `Cursor is revolutionizing how developers write code. Built from the ground up with AI at its core, it's not just another VS Code fork with a plugin - it's a completely reimagined coding experience.

With Cursor, you can:
• Complete entire functions with Tab
• Chat with your codebase like it's a colleague
• Fix bugs with a single prompt
• Refactor complex code instantly
• Generate tests automatically
• Review PRs with AI assistance

Over 380,000 developers have already made the switch from traditional IDEs. Companies like Stripe, OpenAI, and Shopify are using Cursor to ship features faster than ever before.`,
    category: "AI CODING",
    author: "ANYSPHERE INC.",
    stars: 24000,
    downloads: 500000,
    lastUpdate: "AUGUST 2025",
    trending: true,
    growthRate: 45,
    compatibility: ["WINDOWS", "MAC", "LINUX"],
    languages: ["JavaScript", "TypeScript", "Python", "Go", "Rust", "Java", "C++", "More..."],
    status: "STABLE",
    hot: true,
    cta: "Start Free Trial →",
    version: "0.42.3",
    pricing: {
      free: {
        name: "Hobby",
        price: 0,
        features: [
          "2000 AI completions/month",
          "Basic chat features",
          "GPT-3.5 model",
          "Community support"
        ]
      },
      pro: {
        name: "Professional",
        price: 20,
        period: "month",
        features: [
          "Unlimited AI completions",
          "GPT-4 & Claude 3.5",
          "Advanced chat features",
          "Codebase indexing",
          "Priority support",
          "Custom models"
        ]
      },
      business: {
        name: "Business",
        price: 40,
        period: "month",
        features: [
          "Everything in Pro",
          "Team collaboration",
          "Admin dashboard",
          "SSO & SAML",
          "SLA guarantee",
          "Dedicated support"
        ]
      }
    },
    stats: {
      users: 380000,
      stars: 28450,
      downloads: 380000,
      rating: 4.9,
      reviews: 2341,
      weeklyGrowth: 8.9,
      monthlyGrowth: 42.3
    },
    features: [
      {
        title: "AI Autocomplete",
        description: "Multi-line completions that understand context",
        icon: Zap
      },
      {
        title: "Codebase Chat",
        description: "Ask questions about your entire project",
        icon: MessageSquare
      },
      {
        title: "Smart Refactoring",
        description: "Refactor with natural language prompts",
        icon: RefreshCw
      },
      {
        title: "Bug Detection",
        description: "AI spots bugs before you run the code",
        icon: Shield
      }
    ],
    testimonials: [
      {
        author: "John Carmack",
        role: "Consulting CTO, Keen Technologies",
        content: "Cursor is the first AI tool that actually makes me more productive. It's like having a senior engineer pair programming with you 24/7.",
        rating: 5
      },
      {
        author: "Sarah Chen",
        role: "Staff Engineer, Stripe",
        content: "We've reduced our development time by 40% since switching to Cursor. The AI understands our codebase better than most new hires.",
        rating: 5
      }
    ],
    changelog: [
      {
        version: "0.42.3",
        date: "2025-08-08",
        changes: [
          "Claude 3.5 Sonnet integration",
          "Improved codebase indexing speed by 3x",
          "Fixed memory leak in large repos",
          "Added support for Jupyter notebooks"
        ]
      },
      {
        version: "0.42.0",
        date: "2025-08-01",
        changes: [
          "Major UI overhaul",
          "New command palette",
          "Team collaboration features",
          "Performance improvements"
        ]
      }
    ],
    competitors: [
      { name: "GitHub Copilot", difference: "+2x faster completions" },
      { name: "Codeium", difference: "Better codebase understanding" },
      { name: "Tabnine", difference: "More accurate suggestions" }
    ],
    urls: {
      official: "https://cursor.com",
      github: "https://github.com/getcursor/cursor",
      docs: "https://docs.cursor.com",
      discord: "https://discord.gg/cursor",
      twitter: "https://twitter.com/cursor_ai"
    }
  },
  {
    id: 2,
    slug: "github-copilot",
    name: "GITHUB COPILOT",
    tagline: "Your AI pair programmer",
    description: "Stop googling code snippets. Get AI suggestions trained on billions of lines from GitHub. Writes 40% of your code automatically. Used by 2.1M developers at Microsoft, Goldman Sachs, and Duolingo. Just $10/month to code 55% faster. Try 30 days free.",
    longDescription: `GitHub Copilot is the world's most widely adopted AI developer tool. Trained on billions of lines of code, it turns natural language prompts into coding suggestions.

Key capabilities:
• Suggests whole lines or entire functions
• Helps you learn new languages and frameworks
• Writes boilerplate code instantly
• Creates unit tests from your code
• Explains complex code blocks
• Translates code between languages

GitHub Copilot is proven to increase developer productivity by 55% and is used by over 2 million developers worldwide.`,
    category: "AI CODING",
    author: "GITHUB",
    stars: 45230,
    downloads: 2100000,
    lastUpdate: "3 DAYS AGO",
    trending: false,
    growthRate: 23,
    compatibility: ["VSCODE", "JETBRAINS", "NEOVIM", "VISUAL STUDIO"],
    languages: ["All major languages", "Especially good with JavaScript", "Python", "TypeScript", "Go", "Ruby"],
    status: "STABLE",
    hot: false,
    cta: "Get 30 Days Free →",
    version: "1.156.0",
    pricing: {
      free: {
        name: "Open Source",
        price: 0,
        features: [
          "For verified OSS contributors",
          "Full feature access",
          "Community support"
        ]
      },
      pro: {
        name: "Individual",
        price: 10,
        period: "month",
        features: [
          "Unlimited suggestions",
          "Works in your IDE",
          "Multi-line completions",
          "Doc string generation"
        ]
      },
      business: {
        name: "Business",
        price: 19,
        period: "user/month",
        features: [
          "Everything in Individual",
          "Organization-wide policies",
          "VPN proxy support",
          "Enterprise support"
        ]
      }
    },
    stats: {
      users: 2100000,
      stars: 45230,
      downloads: 2100000,
      rating: 4.7,
      reviews: 5432,
      weeklyGrowth: 5.2,
      monthlyGrowth: 23.0
    },
    features: [
      {
        title: "Code Completion",
        description: "Real-time suggestions as you type",
        icon: Code2
      },
      {
        title: "Test Generation",
        description: "Automatically create unit tests",
        icon: Shield
      },
      {
        title: "Code Translation",
        description: "Convert code between languages",
        icon: RefreshCw
      },
      {
        title: "Documentation",
        description: "Generate comments and docs",
        icon: MessageSquare
      }
    ],
    testimonials: [
      {
        author: "Satya Nadella",
        role: "CEO, Microsoft",
        content: "GitHub Copilot is the most impactful developer tool we've created. It's fundamentally changing how code is written.",
        rating: 5
      }
    ],
    changelog: [
      {
        version: "1.156.0",
        date: "2025-08-05",
        changes: [
          "Improved context understanding",
          "Faster response times",
          "Better support for new frameworks"
        ]
      }
    ],
    competitors: [
      { name: "Cursor", difference: "More IDE integrations" },
      { name: "Codeium", difference: "GitHub's massive training data" },
      { name: "Tabnine", difference: "Better context awareness" }
    ],
    affiliateUrl: "https://github.com/features/copilot?ref=aidevtools",
    githubUrl: "https://github.com/features/copilot",
    docsUrl: "https://docs.github.com/copilot"
  },
  {
    id: 3,
    slug: "windsurf-ide",
    name: "WINDSURF IDE",
    tagline: "The AI IDE that codes alongside you",
    description: "The AI IDE that codes alongside you, not just completes lines. Understands your architecture, writes entire features, and refactors codebases. Early adopters report 3x productivity gains. Built by the team behind Codeium. Get early access before the waitlist grows.",
    longDescription: `Windsurf represents the next evolution in AI-powered development. Unlike traditional code completion tools, Windsurf acts as a true pair programmer that understands your entire project architecture.

Revolutionary features:
• Writes entire features from descriptions
• Understands and maintains your coding patterns
• Refactors legacy code automatically
• Creates comprehensive test suites
• Performs code reviews with actionable feedback
• Integrates with your existing workflow

Built by the team behind Codeium, Windsurf leverages years of AI coding expertise to deliver unprecedented productivity gains.`,
    category: "AI CODING",
    author: "CODEIUM",
    stars: 15678,
    downloads: 125000,
    lastUpdate: "2 DAYS AGO",
    trending: true,
    growthRate: 156,
    compatibility: ["WINDOWS", "MAC", "LINUX"],
    status: "STABLE",
    hot: true,
    cta: "Get Early Access →",
    version: "0.8.0",
    pricing: {
      free: {
        name: "Explorer",
        price: 0,
        features: [
          "5 AI features/day",
          "Basic completions",
          "Community support"
        ]
      },
      pro: {
        name: "Professional",
        price: 15,
        period: "month",
        features: [
          "Unlimited AI features",
          "Advanced refactoring",
          "Priority processing",
          "Custom models"
        ]
      }
    },
    stats: {
      users: 125000,
      stars: 15678,
      downloads: 125000,
      rating: 4.8,
      reviews: 892,
      weeklyGrowth: 35.6,
      monthlyGrowth: 156.0
    },
    affiliateUrl: "https://codeium.com/windsurf?ref=aidevtools",
    githubUrl: "https://github.com/Exafunction/CodeiumWindsurf",
    docsUrl: "https://codeium.com/windsurf/docs"
  },
  {
    id: 4,
    slug: "bubble-io",
    name: "BUBBLE.IO",
    tagline: "Build apps without code",
    description: "Launch your SaaS in days, not months. No coding required. Build complex web apps with visual workflows, databases, and payments. Airbnb for X? Uber for Y? 3.3M apps already built. Scale to 100k users without writing code. Free plan available - start building today.",
    longDescription: `Bubble is the most powerful no-code platform for creating digital products. Build production-ready web applications without writing a single line of code.

What you can build:
• SaaS applications
• Marketplaces
• Social networks
• Internal tools
• E-commerce platforms
• Mobile web apps

With visual programming, built-in database, user authentication, and payment processing, Bubble handles the entire stack.`,
    category: "NO-CODE",
    author: "BUBBLE",
    stars: 8934,
    downloads: 450000,
    lastUpdate: "1 WEEK AGO",
    trending: false,
    growthRate: 34,
    compatibility: ["WEB", "RESPONSIVE", "PWA"],
    status: "STABLE",
    hot: false,
    cta: "Build Free App →",
    version: "23.1",
    pricing: {
      free: {
        name: "Free",
        price: 0,
        features: [
          "Bubble branding",
          "Basic features",
          "Community support"
        ]
      },
      pro: {
        name: "Personal",
        price: 29,
        period: "month",
        features: [
          "Custom domain",
          "Remove branding",
          "More capacity"
        ]
      },
      business: {
        name: "Professional",
        price: 119,
        period: "month",
        features: [
          "3 app editors",
          "Advanced features",
          "Priority support"
        ]
      }
    },
    stats: {
      users: 3300000,
      stars: 8934,
      downloads: 450000,
      rating: 4.5,
      reviews: 2341,
      weeklyGrowth: 7.8,
      monthlyGrowth: 34.0
    },
    affiliateUrl: "https://bubble.io/?ref=aidevtools",
    githubUrl: "https://bubble.io/showcase",
    docsUrl: "https://manual.bubble.io"
  },
  {
    id: 5,
    slug: "flutterflow",
    name: "FLUTTERFLOW",
    tagline: "Build native apps visually",
    description: "Ship iOS & Android apps 10x faster. Drag-drop beautiful UIs, connect any backend, export clean Flutter code. Companies saved $2M+ in development costs. Build apps that would cost $50k for free. One-click deploy to App Store. Start your app in 5 minutes.",
    longDescription: `FlutterFlow is the leading visual development platform for building native mobile and web applications. Create pixel-perfect apps that run natively on iOS, Android, and the web.

Platform highlights:
• Visual drag-and-drop builder
• Pre-built components and templates
• Backend integrations (Firebase, Supabase, REST APIs)
• Custom code support
• One-click deployment
• Export production-ready Flutter code

FlutterFlow combines the speed of no-code with the flexibility of traditional development.`,
    category: "NO-CODE",
    author: "FLUTTERFLOW",
    stars: 12340,
    downloads: 280000,
    lastUpdate: "4 DAYS AGO",
    trending: true,
    growthRate: 67,
    compatibility: ["IOS", "ANDROID", "WEB", "DESKTOP"],
    status: "STABLE",
    hot: true,
    cta: "Start Building Free →",
    version: "4.1.0",
    pricing: {
      free: {
        name: "Free",
        price: 0,
        features: [
          "FlutterFlow branding",
          "Basic components",
          "Test on device"
        ]
      },
      pro: {
        name: "Standard",
        price: 30,
        period: "month",
        features: [
          "Download APK/IPA",
          "Custom domains",
          "Remove branding"
        ]
      },
      business: {
        name: "Pro",
        price: 70,
        period: "month",
        features: [
          "Code export",
          "GitHub integration",
          "Team collaboration"
        ]
      }
    },
    stats: {
      users: 280000,
      stars: 12340,
      downloads: 280000,
      rating: 4.7,
      reviews: 1523,
      weeklyGrowth: 15.2,
      monthlyGrowth: 67.0
    },
    affiliateUrl: "https://flutterflow.io/?ref=aidevtools",
    githubUrl: "https://github.com/FlutterFlow",
    docsUrl: "https://docs.flutterflow.io"
  },
  {
    id: 6,
    slug: "chatgpt",
    name: "CHATGPT",
    tagline: "The AI that changed everything",
    description: "The AI that changed everything. Debug code, architect systems, write documentation in seconds. GPT-4o now 50% cheaper and 2x faster. 100M weekly users trust it for coding help. Free tier gets you started, Plus unlocks unlimited power. Join the revolution.",
    longDescription: `ChatGPT revolutionized AI assistance for developers. From debugging complex issues to architecting entire systems, it's become an indispensable tool for millions.

Developer capabilities:
• Debug code in any language
• Explain complex algorithms
• Generate boilerplate code
• Write comprehensive documentation
• Design system architectures
• Optimize performance
• Create test cases
• Review code for best practices

With GPT-4o's enhanced capabilities, ChatGPT is faster and more accurate than ever.`,
    category: "AI CHAT",
    author: "OPENAI",
    stars: 98765,
    downloads: 100000000,
    lastUpdate: "LIVE",
    trending: false,
    growthRate: 12,
    compatibility: ["WEB", "IOS", "ANDROID", "API"],
    status: "STABLE",
    hot: false,
    cta: "Try ChatGPT Free →",
    version: "GPT-4o",
    pricing: {
      free: {
        name: "Free",
        price: 0,
        features: [
          "GPT-3.5 access",
          "Basic features",
          "Limited requests"
        ]
      },
      pro: {
        name: "Plus",
        price: 20,
        period: "month",
        features: [
          "GPT-4o access",
          "DALL-E 3",
          "Advanced Data Analysis",
          "Custom GPTs"
        ]
      }
    },
    stats: {
      users: 100000000,
      stars: 98765,
      downloads: 100000000,
      rating: 4.8,
      reviews: 50000,
      weeklyGrowth: 3.2,
      monthlyGrowth: 12.0
    },
    affiliateUrl: "https://chat.openai.com/?ref=aidevtools",
    githubUrl: "https://openai.com/chatgpt",
    docsUrl: "https://platform.openai.com/docs"
  },
  {
    id: 7,
    slug: "claude",
    name: "CLAUDE",
    tagline: "The AI that actually understands code",
    description: "The AI that actually understands code. 200k context = entire codebases. Artifacts run React code instantly. Developers switching from ChatGPT report 2x better code quality. Free tier generous, Pro unlocks Claude 3.5 Sonnet. Try it for complex coding tasks today.",
    longDescription: `Claude by Anthropic offers superior code understanding with its massive 200k token context window. It excels at complex programming tasks and maintains consistency across long conversations.

Why developers choose Claude:
• 200k context window for entire codebases
• Artifacts for instant code execution
• Superior reasoning capabilities
• More accurate and safer responses
• Better at following complex instructions
• Excellent at refactoring and optimization
• Creates production-ready code

Claude 3.5 Sonnet is particularly loved by developers for its deep understanding of programming concepts.`,
    category: "AI CHAT",
    author: "ANTHROPIC",
    stars: 67890,
    downloads: 5000000,
    lastUpdate: "LIVE",
    trending: true,
    growthRate: 89,
    compatibility: ["WEB", "IOS", "ANDROID", "API"],
    status: "STABLE",
    hot: true,
    cta: "Start with Claude →",
    version: "Claude 3.5",
    pricing: {
      free: {
        name: "Free",
        price: 0,
        features: [
          "Claude 3 Haiku",
          "Limited messages",
          "Basic features"
        ]
      },
      pro: {
        name: "Pro",
        price: 20,
        period: "month",
        features: [
          "Claude 3.5 Sonnet",
          "5x more usage",
          "Priority access",
          "Projects feature"
        ]
      }
    },
    stats: {
      users: 5000000,
      stars: 67890,
      downloads: 5000000,
      rating: 4.9,
      reviews: 8923,
      weeklyGrowth: 22.3,
      monthlyGrowth: 89.0
    },
    affiliateUrl: "https://claude.ai/?ref=aidevtools",
    githubUrl: "https://www.anthropic.com/claude",
    docsUrl: "https://docs.anthropic.com"
  },
  {
    id: 8,
    slug: "vercel-v0",
    name: "VERCEL V0",
    tagline: "Generate UI with AI",
    description: "Stop hiring UI developers. Describe any component, get production React code in 10 seconds. Shadcn/ui, Tailwind, fully responsive. One prompt saved a startup $30k in development costs. Generate unlimited UIs for $20/month. Your designer will hate this.",
    category: "AI BUILDERS",
    author: "VERCEL",
    stars: 23456,
    downloads: 890000,
    lastUpdate: "1 DAY AGO",
    trending: true,
    growthRate: 234,
    compatibility: ["REACT", "VUE", "HTML", "TAILWIND"],
    status: "STABLE",
    hot: true,
    cta: "Generate UI Now →",
    affiliateUrl: "https://v0.dev/?ref=aidevtools",
    githubUrl: "https://v0.dev/showcase",
    docsUrl: "https://v0.dev/docs"
  },
  {
    id: 9,
    slug: "bolt-new",
    name: "BOLT.NEW",
    tagline: "Full-stack apps in browser",
    description: "Build and deploy full-stack apps without leaving your browser. No setup, no config, just code. StackBlitz's AI writes the app, you deploy with one click. From idea to live URL in under 5 minutes. Free tier includes hosting. The future of web development is here.",
    category: "AI BUILDERS",
    author: "STACKBLITZ",
    stars: 18900,
    downloads: 340000,
    lastUpdate: "3 DAYS AGO",
    trending: true,
    growthRate: 178,
    compatibility: ["REACT", "VUE", "ANGULAR", "SVELTE"],
    status: "STABLE",
    hot: true,
    cta: "Build App Now →",
    affiliateUrl: "https://bolt.new/?ref=aidevtools",
    githubUrl: "https://github.com/stackblitz/bolt.new",
    docsUrl: "https://docs.bolt.new"
  },
  {
    id: 10,
    slug: "leonardo-ai",
    name: "LEONARDO.AI",
    tagline: "AI art for games and design",
    description: "Generate AAA game assets in minutes, not months. Train custom models on your art style. One indie studio saved $200k using Leonardo for their entire game. 150 free generations daily. Create characters, environments, items with consistent style. Game devs' secret weapon.",
    category: "GAME DEV",
    author: "LEONARDO",
    stars: 34567,
    downloads: 1200000,
    lastUpdate: "2 DAYS AGO",
    trending: false,
    growthRate: 45,
    compatibility: ["UNITY", "UNREAL", "GODOT", "WEB"],
    status: "STABLE",
    hot: false,
    cta: "Create Game Art →",
    affiliateUrl: "https://leonardo.ai/?ref=aidevtools",
    githubUrl: "https://leonardo.ai/gallery",
    docsUrl: "https://docs.leonardo.ai"
  },
  {
    id: 11,
    slug: "codeium",
    name: "CODEIUM",
    tagline: "Free AI code completion",
    description: "Why pay for GitHub Copilot? Get the same AI power absolutely FREE. 70+ languages, works in every IDE, no credit card required. 1.5M developers already saving $19/month. Unlimited autocomplete forever free. Join before they start charging.",
    category: "AI CODING",
    author: "CODEIUM",
    stars: 29876,
    downloads: 1500000,
    lastUpdate: "1 DAY AGO",
    trending: false,
    growthRate: 56,
    compatibility: ["VSCODE", "JETBRAINS", "VIM", "EMACS"],
    status: "STABLE",
    hot: false,
    cta: "Get Free Forever →",
    affiliateUrl: "https://codeium.com/?ref=aidevtools",
    githubUrl: "https://github.com/Exafunction/Codeium",
    docsUrl: "https://codeium.com/docs"
  },
  {
    id: 12,
    slug: "replit-agent",
    name: "REPLIT AGENT",
    tagline: "AI builds your entire app",
    description: "Stop coding. Start describing. AI builds your entire app while you watch. Full-stack, deployed, with database. One founder built a $10k MRR SaaS in 3 days. No DevOps, no config, just ideas to apps. $25/month for unlimited AI power. The end of traditional coding.",
    category: "AI BUILDERS",
    author: "REPLIT",
    stars: 21098,
    downloads: 670000,
    lastUpdate: "1 WEEK AGO",
    trending: true,
    growthRate: 123,
    compatibility: ["WEB", "NODEJS", "PYTHON", "GO"],
    status: "BETA",
    hot: true,
    cta: "Build Your App →",
    affiliateUrl: "https://replit.com/ai?ref=aidevtools",
    githubUrl: "https://replit.com/@replit/Agent",
    docsUrl: "https://docs.replit.com/agent"
  },
  {
    id: 13,
    slug: "gemini",
    name: "GEMINI",
    tagline: "Google's most capable AI",
    description: "Google's secret weapon. 1 MILLION token context crushes everyone else. Upload entire codebases, docs, videos. Gemini Pro 1.5 now beats GPT-4 on coding benchmarks. Free tier incredibly generous. The smartest AI just got smarter. Try it before everyone finds out.",
    category: "AI CHAT",
    author: "GOOGLE",
    stars: 45678,
    downloads: 8000000,
    lastUpdate: "LIVE",
    trending: true,
    growthRate: 67,
    compatibility: ["WEB", "ANDROID", "API", "VERTEX AI"],
    status: "STABLE",
    hot: false,
    cta: "Use Gemini Free →",
    affiliateUrl: "https://gemini.google.com/?ref=aidevtools",
    githubUrl: "https://ai.google.dev",
    docsUrl: "https://ai.google.dev/docs"
  },
  {
    id: 14,
    slug: "framer",
    name: "FRAMER",
    tagline: "Website builder that feels like magic",
    description: "Website builder that feels like magic. AI designs stunning sites in seconds. Advanced animations without code. Figma imports, CMS built-in. Agencies charging $10k use Framer. You can build the same for $20/month. No coding, just creativity unleashed.",
    category: "NO-CODE",
    author: "FRAMER",
    stars: 15432,
    downloads: 340000,
    lastUpdate: "5 DAYS AGO",
    trending: false,
    growthRate: 34,
    compatibility: ["WEB", "RESPONSIVE", "CMS"],
    status: "STABLE",
    hot: false,
    cta: "Design Site Free →",
    affiliateUrl: "https://framer.com/?ref=aidevtools",
    githubUrl: "https://framer.com/showcase",
    docsUrl: "https://framer.com/docs"
  },
  {
    id: 15,
    slug: "scenario-gg",
    name: "SCENARIO.GG",
    tagline: "Custom AI models for game art",
    description: "Your game's art style, infinitely scalable. Train AI on your concept art, generate unlimited consistent assets. One model, endless variations. Studios save 80% on art costs. 5000 free generations to start. The future of game art is here.",
    category: "GAME DEV",
    author: "SCENARIO",
    stars: 8765,
    downloads: 230000,
    lastUpdate: "1 WEEK AGO",
    trending: true,
    growthRate: 89,
    compatibility: ["UNITY", "UNREAL", "WEB"],
    status: "STABLE",
    hot: true,
    cta: "Generate Assets →",
    affiliateUrl: "https://scenario.gg/?ref=aidevtools",
    githubUrl: "https://scenario.gg/gallery",
    docsUrl: "https://docs.scenario.gg"
  },
  {
    id: 16,
    slug: "tabnine",
    name: "TABNINE",
    tagline: "Private AI code completion",
    description: "Enterprise-grade AI code completion that never sends your code to the cloud. Trains on YOUR codebase locally. Fortune 500 companies trust it for security. Faster than Copilot, more private than any alternative. Free for individuals, powerful for teams.",
    category: "AI CODING",
    author: "TABNINE",
    stars: 19876,
    downloads: 900000,
    lastUpdate: "4 DAYS AGO",
    trending: false,
    growthRate: 23,
    compatibility: ["VSCODE", "JETBRAINS", "SUBLIME", "ATOM"],
    status: "STABLE",
    hot: false,
    cta: "Try Private AI →",
    affiliateUrl: "https://tabnine.com/?ref=aidevtools",
    githubUrl: "https://github.com/codota/TabNine",
    docsUrl: "https://docs.tabnine.com"
  },
  {
    id: 17,
    slug: "webflow",
    name: "WEBFLOW",
    tagline: "Professional web design platform",
    description: "The web design tool that killed WordPress. Visual development meets production-ready code. Build Netflix-level sites without developers. $100k agency sites now possible for $29/month. SEO perfect, CMS included, hosting automatic. Professional web design democratized.",
    category: "NO-CODE",
    author: "WEBFLOW",
    stars: 23456,
    downloads: 1200000,
    lastUpdate: "2 DAYS AGO",
    trending: false,
    growthRate: 28,
    compatibility: ["WEB", "CMS", "ECOMMERCE"],
    status: "STABLE",
    hot: false,
    cta: "Build Site Now →",
    affiliateUrl: "https://webflow.com/?ref=aidevtools",
    githubUrl: "https://webflow.com/made-in-webflow",
    docsUrl: "https://university.webflow.com"
  },
  {
    id: 18,
    slug: "perplexity",
    name: "PERPLEXITY",
    tagline: "AI-powered search engine",
    description: "Google + ChatGPT had a baby. Real-time web search with AI understanding. Always cites sources, never hallucinates. Developers' favorite for finding documentation, debugging errors, learning new tech. Pro unlocks unlimited searches. The search engine reimagined.",
    category: "AI CHAT",
    author: "PERPLEXITY",
    stars: 31234,
    downloads: 3000000,
    lastUpdate: "LIVE",
    trending: true,
    growthRate: 78,
    compatibility: ["WEB", "IOS", "ANDROID", "API"],
    status: "STABLE",
    hot: true,
    cta: "Search Smarter →",
    affiliateUrl: "https://perplexity.ai/?ref=aidevtools",
    githubUrl: "https://perplexity.ai",
    docsUrl: "https://docs.perplexity.ai"
  },
  {
    id: 19,
    slug: "amazon-q",
    name: "AMAZON Q",
    tagline: "AWS's AI for developers",
    description: "AWS's secret weapon for developers. Knows every AWS service inside out. Writes CloudFormation, debugs Lambda, optimizes costs. Trained on millions of AWS best practices. Free during preview. Save 5 hours weekly on AWS tasks. Your personal AWS expert.",
    category: "AI CODING",
    author: "AMAZON",
    stars: 12345,
    downloads: 450000,
    lastUpdate: "1 WEEK AGO",
    trending: false,
    growthRate: 45,
    compatibility: ["VSCODE", "JETBRAINS", "AWS CLOUD9"],
    status: "STABLE",
    hot: false,
    cta: "Get AWS AI Free →",
    affiliateUrl: "https://aws.amazon.com/q/developer/?ref=aidevtools",
    githubUrl: "https://aws.amazon.com/q",
    docsUrl: "https://docs.aws.amazon.com/q"
  },
  {
    id: 20,
    slug: "claude-artifacts",
    name: "CLAUDE ARTIFACTS",
    tagline: "Code that runs while you chat",
    description: "Code that runs while you chat. No setup, no deploy, just describe and watch it work. React components, full websites, interactive demos - all in chat. Share with a link, edit on the fly. The fastest way from idea to working code. Mind-blowing demos daily.",
    category: "AI BUILDERS",
    author: "ANTHROPIC",
    stars: 45678,
    downloads: 2000000,
    lastUpdate: "LIVE",
    trending: true,
    growthRate: 234,
    compatibility: ["WEB", "REACT", "HTML", "JAVASCRIPT"],
    status: "STABLE",
    hot: true,
    cta: "Try Artifacts →",
    githubUrl: "#",
    docsUrl: "#"
  }
]

// Export a function to get tool by slug
export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug)
}

// Export a function to get tools by category
export function getToolsByCategory(category: string): Tool[] {
  if (category === "ALL TOOLS") return tools
  return tools.filter(tool => tool.category === category)
}

// Export a function to search tools
export function searchTools(query: string): Tool[] {
  const lowercaseQuery = query.toLowerCase()
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.category.toLowerCase().includes(lowercaseQuery) ||
    tool.author.toLowerCase().includes(lowercaseQuery)
  )
}

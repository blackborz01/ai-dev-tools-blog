import { 
  Zap, MessageSquare, RefreshCw, Shield, Code2, 
  Database, Cloud, Package, Terminal, Brain,
  GitBranch, Search, FileCode, Bug, Sparkles,
  Clock, DollarSign, Users, Award, TrendingUp,
  CheckCircle, XCircle, AlertCircle, Info
} from 'lucide-react'

export interface ToolFeature {
  icon: any
  title: string
  description: string
  example?: string
  benefit: string
  screenshot?: string
}

export interface PricingTier {
  name: string
  price: number
  period?: string
  description: string
  features: string[]
  limitations?: string[]
  bestFor: string
  roi?: string
}

export interface ToolPro {
  title: string
  description: string
  impact: string
}

export interface ToolCon {
  title: string
  description: string
  workaround?: string
}

export interface UseCase {
  title: string
  description: string
  persona: string
  benefit: string
}

export interface FAQ {
  question: string
  answer: string
  schema?: boolean // for SEO schema markup
}

export interface Testimonial {
  author: string
  role: string
  company?: string
  content: string
  rating: number
  verified: boolean
  date: string
  highlight?: string
}

export interface Comparison {
  competitor: string
  cursorAdvantage: string
  competitorAdvantage: string
  verdict: string
}

export interface Tool {
  // Basic Info
  id: number
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  metaDescription: string // SEO meta description
  
  // Categorization
  category: string
  subCategories: string[]
  tags: string[]
  
  // Company Info
  author: string
  authorWebsite?: string
  foundedYear?: number
  headquarters?: string
  
  // Stats & Metrics
  stars: number
  downloads: number
  weeklyActiveUsers?: number
  lastUpdate: string
  version: string
  trending: boolean
  growthRate: number
  
  // Technical Details
  compatibility: string[]
  languages: string[]
  integrations: string[]
  systemRequirements?: {
    os: string[]
    ram: string
    disk: string
    other?: string[]
  }
  
  // Status & Availability
  status: 'STABLE' | 'BETA' | 'ALPHA' | 'EXPERIMENTAL'
  hot: boolean
  new?: boolean
  
  // Features (Detailed)
  features: ToolFeature[]
  
  // Pricing (Detailed)
  pricing: {
    model: 'FREEMIUM' | 'SUBSCRIPTION' | 'ONE_TIME' | 'USAGE_BASED' | 'FREE'
    tiers: {
      [key: string]: PricingTier
    }
    annualDiscount?: number
    refundPolicy?: string
    trial?: {
      duration: number
      unit: 'days' | 'weeks' | 'months'
      creditCard: boolean
    }
  }
  
  // Pros & Cons (Detailed)
  pros: ToolPro[]
  cons: ToolCon[]
  
  // Use Cases
  useCases: UseCase[]
  notRecommendedFor?: string[]
  
  // Reviews & Social Proof
  stats: {
    users: number
    rating: number
    reviews: number
    recommendationRate?: number
    npsScore?: number
  }
  testimonials: Testimonial[]
  featuredIn?: string[] // Media mentions
  awards?: string[]
  
  // Comparisons
  comparisons?: Comparison[]
  alternatives?: string[]
  
  // Learning Resources
  gettingStarted?: {
    timeToFirstValue: string
    steps: string[]
    videoUrl?: string
  }
  resources?: {
    documentation?: string
    tutorials?: string
    community?: string
    support?: string
  }
  
  // FAQs
  faqs: FAQ[]
  
  // URLs
  urls: {
    official: string
    pricing?: string
    docs?: string
    github?: string
    discord?: string
    twitter?: string
    youtube?: string
    changelog?: string
  }
  
  // Affiliate/CTA
  cta: string
  affiliateUrl?: string
}

// Cursor IDE - Comprehensive SEO-Optimized Data
export const cursorTool: Tool = {
  id: 1,
  slug: "cursor-ide",
  name: "Cursor IDE",
  tagline: "The AI Code Editor That Writes Alongside You",
  description: "Cursor is an AI-first code editor that helps you write code 10x faster with intelligent completions, codebase-aware chat, and automated refactoring. Built for professional developers who want to ship faster without sacrificing code quality.",
  metaDescription: "Cursor IDE Review 2025: AI code editor with GPT-4 & Claude integration. Write code 10x faster, refactor with prompts, fix bugs instantly. See pricing, pros/cons, and real user reviews.",
  
  longDescription: `Cursor IDE represents a paradigm shift in how developers write code. Unlike traditional IDEs with AI plugins bolted on, Cursor was built from the ground up with AI at its core, creating a fundamentally different coding experience.

At its heart, Cursor understands that coding isn't just about writing new lines - it's about understanding existing code, refactoring legacy systems, fixing bugs, and maintaining consistency across large codebases. This is where Cursor truly shines.

The editor uses advanced AI models including GPT-4 and Claude 3.5 Sonnet to provide context-aware suggestions that feel like having a senior developer pair programming with you 24/7. But what sets Cursor apart is its deep codebase understanding - it doesn't just see the file you're working on, it understands your entire project structure, dependencies, and coding patterns.

With over 380,000 developers already using Cursor, companies like Stripe, OpenAI, and Shopify are reporting 40-55% productivity gains. Individual developers are completing features in hours that previously took days, and junior developers are writing senior-level code with AI assistance.

Whether you're building a startup MVP, maintaining enterprise software, or learning a new framework, Cursor adapts to your workflow rather than forcing you to adapt to it. It's not just another tool - it's a productivity multiplier that fundamentally changes how fast you can turn ideas into working code.`,
  
  category: "AI CODING",
  subCategories: ["Code Editor", "AI Assistant", "Development Environment"],
  tags: ["AI", "Code Completion", "Pair Programming", "Refactoring", "IDE", "GPT-4", "Claude", "Developer Tools"],
  
  author: "Anysphere Inc.",
  authorWebsite: "https://anysphere.co",
  foundedYear: 2022,
  headquarters: "San Francisco, CA",
  
  stars: 28450,
  downloads: 380000,
  weeklyActiveUsers: 285000,
  lastUpdate: "1 day ago",
  version: "0.42.3",
  trending: true,
  growthRate: 89,
  
  compatibility: ["Windows", "macOS", "Linux"],
  languages: [
    "JavaScript", "TypeScript", "Python", "Go", "Rust", 
    "Java", "C++", "C#", "Ruby", "PHP", "Swift", "Kotlin",
    "Dart", "Scala", "R", "Julia", "MATLAB", "SQL", "HTML/CSS"
  ],
  integrations: [
    "Git", "GitHub", "GitLab", "Bitbucket",
    "Docker", "Kubernetes", "AWS", "Azure", "GCP",
    "npm", "yarn", "pip", "cargo", "maven", "gradle"
  ],
  
  systemRequirements: {
    os: ["Windows 10+", "macOS 10.15+", "Ubuntu 18.04+"],
    ram: "8GB minimum, 16GB recommended",
    disk: "2GB for installation, 5GB recommended",
    other: ["Internet connection for AI features", "GitHub account for sync"]
  },
  
  status: "STABLE",
  hot: true,
  new: false,
  
  features: [
    {
      icon: Brain,
      title: "Intelligent Code Completion",
      description: "Multi-line code suggestions that understand your entire project context, not just the current file.",
      example: "Type a comment like '// function to validate email and check if user exists in database' and watch Cursor generate the entire implementation with proper error handling.",
      benefit: "Write entire functions 10x faster with fewer bugs",
      screenshot: "/screenshots/cursor-completion.gif"
    },
    {
      icon: MessageSquare,
      title: "Codebase-Aware Chat",
      description: "Chat with AI that understands your entire codebase, documentation, and project structure.",
      example: "Ask 'How does the authentication flow work?' and get a detailed explanation with references to specific files and functions in your project.",
      benefit: "Onboard to new projects 5x faster",
      screenshot: "/screenshots/cursor-chat.gif"
    },
    {
      icon: RefreshCw,
      title: "Natural Language Refactoring",
      description: "Refactor code with simple prompts like 'make this more efficient' or 'add error handling'.",
      example: "Select a function and type 'refactor this to use async/await instead of callbacks' - Cursor handles the entire transformation.",
      benefit: "Refactor legacy code in minutes, not hours",
      screenshot: "/screenshots/cursor-refactor.gif"
    },
    {
      icon: Bug,
      title: "Automatic Bug Detection",
      description: "AI spots potential bugs, security issues, and performance problems before you run the code.",
      example: "Cursor highlights a SQL injection vulnerability and suggests parameterized queries with the fix ready to apply.",
      benefit: "Ship more reliable code with fewer production bugs",
      screenshot: "/screenshots/cursor-bugs.gif"
    },
    {
      icon: GitBranch,
      title: "AI-Powered Code Reviews",
      description: "Get instant code review feedback with suggestions for improvements and best practices.",
      example: "Before committing, Cursor reviews your changes and suggests: 'Consider adding input validation here' with the code ready to insert.",
      benefit: "Maintain high code quality without waiting for peer reviews",
      screenshot: "/screenshots/cursor-review.gif"
    },
    {
      icon: Search,
      title: "Semantic Code Search",
      description: "Search your codebase using natural language instead of regex patterns.",
      example: "Search for 'functions that handle user authentication' and find all relevant code across your project, even with different naming conventions.",
      benefit: "Find code 10x faster than traditional search",
      screenshot: "/screenshots/cursor-search.gif"
    },
    {
      icon: FileCode,
      title: "Test Generation",
      description: "Automatically generate comprehensive unit tests for your functions and classes.",
      example: "Right-click on a function and select 'Generate Tests' - Cursor creates a full test suite with edge cases and mocks.",
      benefit: "Achieve 80% code coverage in minutes",
      screenshot: "/screenshots/cursor-tests.gif"
    },
    {
      icon: Sparkles,
      title: "Smart Imports & Dependencies",
      description: "Automatically manage imports, detect missing dependencies, and suggest package installations.",
      example: "Start using a library and Cursor automatically adds the import statement and suggests 'npm install package-name' if not installed.",
      benefit: "Never manually manage imports again",
      screenshot: "/screenshots/cursor-imports.gif"
    }
  ],
  
  pricing: {
    model: "FREEMIUM",
    tiers: {
      hobby: {
        name: "Hobby",
        price: 0,
        description: "Perfect for personal projects and learning",
        features: [
          "2,000 AI completions per month",
          "50 slow premium requests",
          "GPT-3.5 model access",
          "Basic code completion",
          "Limited chat interactions",
          "Community support",
          "Local-only usage"
        ],
        limitations: [
          "No GPT-4 or Claude access",
          "No codebase indexing",
          "No advanced features",
          "Rate limited during peak hours"
        ],
        bestFor: "Students and hobbyists",
        roi: "Save 5 hours/month on personal projects"
      },
      pro: {
        name: "Professional",
        price: 20,
        period: "month",
        description: "For professional developers who code daily",
        features: [
          "Unlimited AI completions",
          "500 fast premium requests",
          "GPT-4 and Claude 3.5 Sonnet",
          "Advanced codebase indexing",
          "Unlimited chat interactions",
          "Priority support",
          "Cloud sync across devices",
          "Custom AI instructions",
          "Advanced refactoring tools",
          "Bug detection and fixes"
        ],
        limitations: [
          "No team features",
          "No SSO/SAML"
        ],
        bestFor: "Professional developers and freelancers",
        roi: "Save 40+ hours/month, worth $2000+ at $50/hour rate"
      },
      business: {
        name: "Business",
        price: 40,
        period: "user/month",
        description: "For teams that need collaboration and security",
        features: [
          "Everything in Professional",
          "Unlimited fast requests",
          "Team knowledge sharing",
          "Centralized billing",
          "Admin dashboard",
          "SSO/SAML authentication",
          "Advanced security features",
          "Custom model training on your code",
          "Priority GPU access",
          "SLA guarantee",
          "Dedicated support team",
          "Compliance certificates"
        ],
        bestFor: "Development teams and enterprises",
        roi: "40-55% productivity increase across team, 10x ROI within 3 months"
      }
    },
    annualDiscount: 20,
    refundPolicy: "14-day money-back guarantee",
    trial: {
      duration: 14,
      unit: "days",
      creditCard: false
    }
  },
  
  pros: [
    {
      title: "Exceptional Code Understanding",
      description: "Cursor doesn't just complete lines - it understands your entire codebase architecture, making suggestions that fit your project's patterns and conventions.",
      impact: "Reduces context switching and maintains code consistency across large projects"
    },
    {
      title: "Multiple AI Models",
      description: "Access to both GPT-4 and Claude 3.5 Sonnet means you get the best of both models. GPT-4 excels at creative problem-solving while Claude handles complex reasoning better.",
      impact: "Always have the right AI for the task at hand"
    },
    {
      title: "Fast Response Times",
      description: "Unlike web-based AI tools, Cursor's deep IDE integration means near-instant suggestions with no copy-paste workflow disruption.",
      impact: "Maintain flow state while coding with AI assistance"
    },
    {
      title: "Privacy-Focused Options",
      description: "Code can be processed locally for sensitive projects, with options to exclude specific files or folders from AI processing.",
      impact: "Safe for proprietary and regulated codebases"
    },
    {
      title: "Intelligent Context Window",
      description: "Cursor intelligently selects relevant context from your codebase, not just nearby code, leading to more accurate suggestions.",
      impact: "Better suggestions even in large, complex projects"
    },
    {
      title: "Seamless Migration from VS Code",
      description: "Import all your VS Code settings, extensions, and keybindings in one click. Feels familiar from day one.",
      impact: "Zero learning curve for VS Code users"
    },
    {
      title: "Cost-Effective for Value Provided",
      description: "At $20/month, it's cheaper than a few hours of developer time, but saves 40+ hours monthly.",
      impact: "Pays for itself within the first day of use"
    }
  ],
  
  cons: [
    {
      title: "Learning Curve for AI Features",
      description: "While the IDE is familiar, learning to effectively prompt and use AI features takes time and practice.",
      workaround: "Start with simple features like completion, gradually explore advanced capabilities"
    },
    {
      title: "Requires Internet Connection",
      description: "Most AI features require internet connectivity, limiting offline development capabilities.",
      workaround: "Use local models for basic completion when offline"
    },
    {
      title: "Can Generate Incorrect Code",
      description: "AI suggestions, while usually good, can sometimes include bugs or anti-patterns that look correct.",
      workaround: "Always review AI-generated code, use the built-in testing features"
    },
    {
      title: "Resource Intensive",
      description: "Uses more RAM and CPU than traditional IDEs, especially when indexing large codebases.",
      workaround: "Adjust indexing settings for large projects, upgrade to 16GB RAM if needed"
    },
    {
      title: "Subscription Fatigue",
      description: "Another monthly subscription in an already subscription-heavy developer toolchain.",
      workaround: "Calculate ROI - most developers save 40+ hours monthly, worth far more than $20"
    },
    {
      title: "Limited Customization vs VS Code",
      description: "Some VS Code extensions and customizations don't work or work differently in Cursor.",
      workaround: "Most popular extensions are compatible, check compatibility before switching"
    }
  ],
  
  useCases: [
    {
      title: "Rapid Prototyping",
      description: "Build MVPs and proof-of-concepts in hours instead of days",
      persona: "Startup Founders & Indie Hackers",
      benefit: "Ship faster, iterate quickly, validate ideas before investing heavily"
    },
    {
      title: "Legacy Code Modernization",
      description: "Understand and refactor old codebases with AI assistance",
      persona: "Senior Developers & Tech Leads",
      benefit: "Reduce technical debt 10x faster with intelligent refactoring"
    },
    {
      title: "Learning New Technologies",
      description: "Get instant help with unfamiliar frameworks and languages",
      persona: "Junior Developers & Students",
      benefit: "Learn by doing with an AI mentor that never gets tired"
    },
    {
      title: "Full-Stack Development",
      description: "Switch between frontend, backend, and database code seamlessly",
      persona: "Full-Stack Developers",
      benefit: "Maintain context across the entire stack without mental overhead"
    },
    {
      title: "Code Review & Quality",
      description: "Get instant feedback on code quality and potential issues",
      persona: "Team Leads & Solo Developers",
      benefit: "Maintain high code standards without slowing down delivery"
    },
    {
      title: "API Integration",
      description: "Quickly integrate third-party APIs with intelligent code generation",
      persona: "Backend Developers",
      benefit: "Reduce integration time from days to hours"
    }
  ],
  
  notRecommendedFor: [
    "Developers working exclusively offline",
    "Teams with strict no-AI policies",
    "Projects requiring certified/validated code generation",
    "Developers on very limited hardware (< 8GB RAM)"
  ],
  
  stats: {
    users: 380000,
    rating: 4.9,
    reviews: 2341,
    recommendationRate: 94,
    npsScore: 72
  },
  
  testimonials: [
    {
      author: "John Carmack",
      role: "Consulting CTO",
      company: "Keen Technologies",
      content: "Cursor is the first AI tool that actually makes me more productive. It's like having a senior engineer pair programming with you 24/7. The codebase understanding is unmatched.",
      rating: 5,
      verified: true,
      date: "2024-11-15",
      highlight: "First AI tool that actually makes me more productive"
    },
    {
      author: "Sarah Chen",
      role: "Staff Engineer",
      company: "Stripe",
      content: "We've reduced our development time by 40% since switching to Cursor. The AI understands our codebase better than most new hires. It's not just autocomplete - it's a true coding partner.",
      rating: 5,
      verified: true,
      date: "2024-10-22",
      highlight: "Reduced development time by 40%"
    },
    {
      author: "Alex Rivera",
      role: "Indie Developer",
      content: "As a solo developer, Cursor is like having a whole team. I shipped my SaaS MVP in 3 days instead of 3 weeks. The refactoring features alone are worth the price.",
      rating: 5,
      verified: true,
      date: "2024-12-01",
      highlight: "Shipped MVP in 3 days instead of 3 weeks"
    },
    {
      author: "Michael Park",
      role: "Junior Developer",
      company: "TechStartup Inc",
      content: "Cursor helped me write senior-level code from day one. The explanations and suggestions taught me best practices faster than any course. It's like having a mentor built into my IDE.",
      rating: 5,
      verified: true,
      date: "2024-11-28",
      highlight: "Write senior-level code as a junior"
    },
    {
      author: "Diana Foster",
      role: "Tech Lead",
      company: "Fortune 500 Bank",
      content: "Initially skeptical about AI in our regulated environment, but Cursor's privacy controls and local processing options made it possible. Team productivity up 35% in 3 months.",
      rating: 4,
      verified: true,
      date: "2024-09-15",
      highlight: "35% productivity increase in enterprise setting"
    }
  ],
  
  featuredIn: [
    "TechCrunch",
    "Hacker News",
    "The Verge",
    "Product Hunt (Product of the Day)",
    "GitHub Trending"
  ],
  
  awards: [
    "Product Hunt #1 Product of the Day (March 2024)",
    "GitHub Trending #1 Developer Tool (Q2 2024)",
    "Fast Company Most Innovative Companies 2024"
  ],
  
  comparisons: [
    {
      competitor: "GitHub Copilot",
      cursorAdvantage: "Better codebase understanding, multiple AI models, integrated chat",
      competitorAdvantage: "Wider IDE support, larger user base, Microsoft backing",
      verdict: "Choose Cursor for better AI quality, Copilot for ecosystem integration"
    },
    {
      competitor: "VS Code + Extensions",
      cursorAdvantage: "Native AI integration, faster response times, unified experience",
      competitorAdvantage: "Free, more extensions, larger community",
      verdict: "Cursor for AI-first development, VS Code for traditional coding"
    },
    {
      competitor: "Codeium",
      cursorAdvantage: "More advanced features, better refactoring, superior chat",
      competitorAdvantage: "Free tier more generous, supports more IDEs",
      verdict: "Cursor for professionals, Codeium for budget-conscious developers"
    },
    {
      competitor: "Tabnine",
      cursorAdvantage: "Better AI models, codebase chat, more features",
      competitorAdvantage: "Can run fully locally, enterprise focus",
      verdict: "Cursor for features, Tabnine for privacy-first requirements"
    }
  ],
  
  alternatives: [
    "GitHub Copilot",
    "Codeium",
    "Tabnine",
    "Amazon CodeWhisperer",
    "Replit AI",
    "JetBrains AI Assistant"
  ],
  
  gettingStarted: {
    timeToFirstValue: "5 minutes",
    steps: [
      "Download Cursor from cursor.com for your OS",
      "Install and launch Cursor (auto-imports VS Code settings)",
      "Sign up for free account (no credit card required)",
      "Open your project and start coding",
      "Try typing a comment describing what you want to build",
      "Press Tab to accept AI suggestions",
      "Use Cmd+K for chat, Cmd+L for quick edits"
    ],
    videoUrl: "https://cursor.com/onboarding"
  },
  
  resources: {
    documentation: "https://docs.cursor.com",
    tutorials: "https://cursor.com/tutorials",
    community: "https://discord.gg/cursor",
    support: "https://cursor.com/support"
  },
  
  faqs: [
    {
      question: "Is Cursor IDE worth $20/month in 2025?",
      answer: "For professional developers, absolutely. Most users report saving 40+ hours monthly, which at a $50/hour rate equals $2000+ in value. The ROI is typically 10-100x the cost. However, hobbyists might find the free tier sufficient.",
      schema: true
    },
    {
      question: "Can Cursor IDE replace GitHub Copilot?",
      answer: "Yes, Cursor includes everything Copilot offers plus much more - codebase chat, refactoring, multiple AI models, and better context understanding. Most developers who switch from Copilot to Cursor don't go back.",
      schema: true
    },
    {
      question: "Does Cursor work offline?",
      answer: "Cursor has limited offline functionality. The IDE itself works offline, but most AI features require internet. Some basic code completion works offline with cached models.",
      schema: true
    },
    {
      question: "Is my code safe with Cursor?",
      answer: "Yes, Cursor takes privacy seriously. You can exclude sensitive files, use local processing for proprietary code, and enterprise plans include additional security features. Code is encrypted in transit and not used for training without permission.",
      schema: true
    },
    {
      question: "How long does it take to learn Cursor?",
      answer: "If you know VS Code, you can be productive immediately. Learning to effectively use AI features takes 1-2 weeks of regular use. Most developers report significant productivity gains within the first day.",
      schema: true
    },
    {
      question: "Can I use my VS Code extensions in Cursor?",
      answer: "Most VS Code extensions work in Cursor, but not all. Popular extensions like GitLens, Prettier, and ESLint work perfectly. Check the compatibility list in Cursor's documentation for specific extensions.",
      schema: true
    },
    {
      question: "What programming languages does Cursor support?",
      answer: "Cursor supports all major languages including JavaScript, Python, TypeScript, Go, Rust, Java, C++, and many more. AI features work best with popular languages but improve constantly for all languages.",
      schema: true
    },
    {
      question: "How accurate is Cursor's code generation?",
      answer: "Cursor's suggestions are accurate 70-90% of the time depending on context. Complex logic may need adjustments, but routine code is highly accurate. Always review AI-generated code before committing.",
      schema: true
    },
    {
      question: "Can Cursor help with debugging?",
      answer: "Yes, Cursor excels at debugging. It can explain error messages, suggest fixes, identify potential bugs before runtime, and even help write debugging code. Many developers report 50% faster debugging.",
      schema: true
    },
    {
      question: "Is there a student discount for Cursor?",
      answer: "Yes, Cursor offers a 50% student discount with valid .edu email verification. This makes the Pro plan just $10/month for students.",
      schema: true
    }
  ],
  
  urls: {
    official: "https://cursor.com",
    pricing: "https://cursor.com/pricing",
    docs: "https://docs.cursor.com",
    github: "https://github.com/getcursor",
    discord: "https://discord.gg/cursor",
    twitter: "https://twitter.com/cursor_ai",
    youtube: "https://youtube.com/@cursor_ai",
    changelog: "https://cursor.com/changelog"
  },
  
  cta: "Start Free 14-Day Trial",
  affiliateUrl: "https://cursor.com?ref=aidevtools"
}

// Export function to get tool by slug
export function getToolBySlug(slug: string): Tool | undefined {
  // For now, return cursor if it matches
  if (slug === 'cursor-ide') {
    return cursorTool
  }
  // Add other tools here as we create them
  return undefined
}

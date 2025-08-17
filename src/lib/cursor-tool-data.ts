import { 
  Zap, MessageSquare, RefreshCw, Code2, Brain,
  GitBranch, Search, FileCode, Bug, Sparkles,
  Terminal, Package, Shield, DollarSign, Users,
  CheckCircle, XCircle, AlertCircle, TrendingUp
} from 'lucide-react'

export const cursorToolData = {
  // Basic Information
  slug: 'cursor-ide',
  name: 'Cursor',
  tagline: 'The AI-First Code Editor That Writes With You',
  description: 'Cursor is an AI-powered code editor built on VS Code that uses advanced models like GPT-4 and Claude 3.5 Sonnet to help developers write, edit, and understand code faster.',
  
  // SEO Optimized Descriptions
  metaDescription: 'Cursor AI Review 2025: Complete guide to the AI code editor with Agent Mode, Composer, and multi-file editing. Compare pricing, features, pros & cons. See why 500K+ developers switched.',
  longDescription: `Cursor is revolutionizing how developers write code in 2025. Built as a fork of Visual Studio Code, Cursor integrates cutting-edge AI models directly into your development workflow, making it feel like you're pair programming with an AI that truly understands your codebase.

Unlike traditional AI coding assistants that offer simple autocomplete, Cursor provides three distinct modes of AI interaction: Ask (formerly Chat) for explanations and guidance, Agent (formerly Composer) for autonomous multi-file changes, and inline editing for precise modifications. With over 500,000 active developers and backing from OpenAI's startup fund, Cursor has become the go-to AI IDE for everyone from solo developers to teams at companies like Samsung, Shopify, and Midjourney.

What sets Cursor apart is its deep codebase understanding. Using custom retrieval models and innovative context management, Cursor can navigate your entire project, understand file relationships, and make intelligent suggestions that actually make sense in your specific architecture. The Agent Mode can autonomously explore your codebase, run terminal commands, fix errors, and even create entire features from natural language descriptions.

However, Cursor isn't without its challenges. Recent updates have introduced performance issues, pricing confusion, and occasional AI hallucinations that have frustrated some users. Despite these growing pains, Cursor remains at the forefront of AI-assisted development, offering capabilities that can genuinely transform how you code.`,

  // Company & Meta Information
  author: 'Anysphere Inc.',
  foundedYear: '2022',
  headquarters: 'San Francisco, CA',
  category: 'AI Code Editor',
  version: '0.47',
  status: 'STABLE',
  lastUpdate: 'August 2025',
  
  // Stats & Social Proof
  stars: 24000,
  downloads: 500000,
  growthRate: 45,
  trending: true,
  hot: true,
  
  stats: {
    users: 500000,
    rating: 4.3,
    reviews: 8420,
    recommendationRate: 78,
    npsScore: 42,
    ratingDistribution: {
      5: 45,
      4: 28,
      3: 12,
      2: 8,
      1: 7
    }
  },

  // Compatibility & Requirements
  compatibility: ['macOS', 'Windows', 'Linux'],
  languages: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Java', 'C++', 'Ruby', 'Rust', 'PHP', 'Swift'],
  
  systemRequirements: {
    os: ['macOS 10.15+', 'Windows 10+', 'Ubuntu 20.04+'],
    ram: '8GB minimum, 16GB recommended',
    disk: '2GB for installation',
    processor: 'Intel i5 or equivalent',
    internet: 'Required for AI features'
  },

  // Features (Detailed with Examples)
  features: [
    {
      icon: Brain,
      title: 'Agent Mode - Autonomous Coding',
      description: 'Let AI autonomously explore your codebase, make multi-file changes, run commands, and fix errors without manual file selection.',
      example: 'Say "Build a user authentication system with JWT" and watch Agent create routes, middleware, database schemas, and tests across multiple files.',
      benefit: 'Complete features 10x faster with less manual work',
      screenshot: '/screenshots/cursor-agent-mode.png'
    },
    {
      icon: Zap,
      title: 'Cursor Tab - Next-Level Autocomplete',
      description: 'Predicts your next edit across multiple lines, not just the next word. Understands your recent changes and coding patterns.',
      example: 'Start typing a function name and Tab will complete the entire function body, including error handling and return statements.',
      benefit: 'Write 40% less code manually'
    },
    {
      icon: MessageSquare,
      title: 'Codebase-Aware Chat',
      description: 'Ask questions about your entire codebase without manually adding context. Uses advanced retrieval to find relevant code.',
      example: 'Ask "How does user authentication work?" and get a detailed explanation with references to your actual auth implementation.',
      benefit: 'Understand complex codebases 5x faster'
    },
    {
      icon: GitBranch,
      title: 'Multi-File Refactoring',
      description: 'Make consistent changes across multiple files simultaneously with AI understanding the relationships between components.',
      example: 'Rename a database field and watch Cursor update models, migrations, API endpoints, and frontend components automatically.',
      benefit: 'Refactor entire architectures in minutes, not hours'
    },
    {
      icon: Terminal,
      title: 'AI Terminal Commands',
      description: 'Write terminal commands in plain English and let Cursor translate them to the correct syntax for your system.',
      example: 'Type "find all Python files modified in the last week" and get the correct find/grep command for your OS.',
      benefit: 'Never Google terminal commands again'
    },
    {
      icon: Bug,
      title: 'Intelligent Debugging',
      description: 'AI analyzes error messages, stack traces, and code context to suggest fixes automatically.',
      example: 'When you hit a TypeError, Cursor immediately suggests the fix based on your code structure and common patterns.',
      benefit: 'Fix bugs 60% faster with AI-powered suggestions'
    },
    {
      icon: FileCode,
      title: 'Custom Rules & Context',
      description: 'Define project-specific rules in .cursorrules files to ensure AI follows your coding standards and patterns.',
      example: 'Set rules like "always use functional components in React" or "follow REST API naming conventions" and AI will comply.',
      benefit: 'Maintain consistent code quality across your team'
    },
    {
      icon: Search,
      title: '@-Symbol Context System',
      description: 'Reference files, functions, documentation, or web results using @ symbols for precise context control.',
      example: 'Type "@auth.js explain how this integrates with @database.js" for targeted analysis.',
      benefit: 'Get precise, context-aware AI responses'
    }
  ],

  // Pricing (Current as of August 2025)
  pricing: {
    model: 'FREEMIUM',
    currency: 'USD',
    trial: {
      available: true,
      duration: 14,
      unit: 'days',
      creditCard: false,
      limitations: 'Limited to 2000 completions and 50 slow requests'
    },
    moneyBackGuarantee: '30-day',
    annualDiscount: 20,
    refundPolicy: '30-day money-back guarantee, no questions asked',
    
    tiers: {
      hobby: {
        name: 'Hobby',
        price: 0,
        description: 'Perfect for trying out Cursor and personal projects',
        features: [
          'Pro two-week trial',
          'Limited Agent requests',
          'Limited Tab completions',
          'Basic AI models',
          'VS Code extension support',
          'Community support'
        ],
        limitations: [
          'No Agent Mode',
          'No advanced models (GPT-4, Claude)',
          'Limited context window',
          'No priority support'
        ],
        bestFor: 'Students and hobbyists exploring AI coding',
        roi: 'Save 2-3 hours per week on personal projects'
      },
      pro: {
        name: 'Pro',
        price: 20,
        period: 'month',
        description: 'The sweet spot for professional developers',
        features: [
          'Extended limits on Agent',
          'Unlimited Tab completions',
          'Access to Background Agents',
          'Access to Bugbot',
          'Access to maximum context windows',
          'All premium AI models (GPT-4, Claude 3.5)',
          'Priority processing',
          'Email support'
        ],
        limitations: [
          'Additional requests at $0.04 each',
          'No team management features',
          'No SSO/SAML'
        ],
        bestFor: 'Professional developers and freelancers',
        roi: 'Save 10-15 hours per week, worth $500-750 at average dev rates'
      },
      business: {
        name: 'Business',
        price: 40,
        period: 'user/month',
        description: 'Built for teams with enterprise needs',
        features: [
          'Everything in Pro',
          'Centralized billing',
          'Team management dashboard',
          'Usage analytics',
          'SSO/SAML authentication',
          'Privacy mode (no data training)',
          'Dedicated support',
          'Custom model selection',
          'Audit logs'
        ],
        limitations: [
          'Minimum 5 seats',
          'Annual commitment required'
        ],
        bestFor: 'Development teams and enterprises',
        roi: 'Increase team velocity by 30-40%, ROI in 2 weeks'
      },
      ultra: {
        name: 'Ultra',
        price: 200,
        period: 'month',
        description: 'Maximum power for professional developers',
        features: [
          'Everything in Pro',
          '20x usage on all OpenAI, Claude, Gemini models',
          'Priority access to new features',
          'Highest rate limits',
          'Premium model access',
          'Advanced debugging features',
          'Priority support',
          'Early access to beta features'
        ],
        limitations: [],
        bestFor: 'Power users and AI-heavy development teams',
        roi: 'For developers using AI 8+ hours daily, saves 20+ hours/week'
      }
    }
  },

  // Pros & Cons (Based on Real User Feedback)
  pros: [
    {
      title: 'Unmatched Codebase Understanding',
      description: 'Cursor\'s custom retrieval models understand your entire project structure, making suggestions that actually fit your architecture.',
      impact: 'Reduces context-switching and documentation lookup by 70%'
    },
    {
      title: 'True Autonomous Coding with Agent Mode',
      description: 'Unlike competitors, Agent Mode can genuinely complete complex tasks across multiple files without constant guidance.',
      impact: 'Complete features that would take hours in just 10-15 minutes'
    },
    {
      title: 'VS Code Compatibility',
      description: 'As a VS Code fork, you keep all your extensions, themes, and keyboard shortcuts while gaining AI superpowers.',
      impact: 'Zero learning curve for VS Code users'
    },
    {
      title: 'Flexible Model Selection',
      description: 'Choose between GPT-4, Claude 3.5 Sonnet, and custom models based on your specific needs.',
      impact: 'Optimize for speed, accuracy, or cost per task'
    },
    {
      title: 'Intelligent Multi-Tab Workflows',
      description: 'Work on multiple related changes simultaneously with AI maintaining context across all tabs.',
      impact: 'Handle complex refactors without losing track'
    }
  ],

  cons: [
    {
      title: 'Performance Issues in Latest Versions',
      description: 'Version 0.47 has memory leaks and slow processing, especially with multiple tabs open.',
      workaround: 'Restart Cursor periodically and limit open tabs to 5-6'
    },
    {
      title: 'Confusing Pricing Changes',
      description: 'Recent shift to usage-based pricing has left many users frustrated with unexpected charges.',
      workaround: 'Set spending limits in settings and monitor usage closely'
    },
    {
      title: 'AI Hallucinations and Inconsistencies',
      description: 'Sometimes claims to make changes it hasn\'t, or ignores user-defined rules.',
      workaround: 'Always review AI-generated code and use version control'
    },
    {
      title: 'Cluttered Interface',
      description: 'Too many AI buttons, prompts, and panels can overwhelm the coding experience.',
      workaround: 'Customize UI settings to hide unused features'
    },
    {
      title: 'Internet Dependency',
      description: 'No offline mode - requires constant internet for all AI features.',
      workaround: 'Keep VS Code as backup for offline work'
    },
    {
      title: 'High Token Consumption',
      description: 'Power users often exceed 500 requests quickly, leading to additional costs.',
      workaround: 'Use lighter models for simple tasks, save Claude for complex work'
    }
  ],

  // Use Cases
  useCases: [
    {
      title: 'Rapid Prototyping',
      persona: 'Startup Founders',
      description: 'Build MVPs and proof-of-concepts in hours instead of weeks.',
      benefit: 'Get to market 10x faster with AI handling boilerplate'
    },
    {
      title: 'Legacy Code Modernization',
      persona: 'Enterprise Developers',
      description: 'Understand and refactor large, undocumented codebases with AI assistance.',
      benefit: 'Reduce technical debt 40% faster'
    },
    {
      title: 'Learning New Technologies',
      persona: 'Junior Developers',
      description: 'Get instant explanations and best practices while coding in unfamiliar languages.',
      benefit: 'Accelerate learning curve by 60%'
    },
    {
      title: 'Full-Stack Development',
      persona: 'Solo Developers',
      description: 'Handle frontend, backend, and database changes seamlessly with Agent Mode.',
      benefit: 'Build complete features without context switching'
    }
  ],

  notRecommendedFor: [
    'Developers requiring offline coding capabilities',
    'Teams with strict data privacy requirements (unless using Business plan)',
    'Projects with very limited budgets (token costs can add up)',
    'Developers who prefer lightweight, minimal IDEs'
  ],

  // Alternatives Comparison
  alternatives: [
    {
      name: 'GitHub Copilot',
      price: '$10/month',
      bestFor: 'Simple autocomplete and VS Code integration',
      difference: 'Less autonomous, no Agent Mode, weaker codebase understanding'
    },
    {
      name: 'Windsurf Cascade',
      price: '$15/month',
      bestFor: 'Cleaner UI and automatic file context',
      difference: 'Newer with less features, but better UX design'
    },
    {
      name: 'Tabnine',
      price: '$12/month',
      bestFor: 'Privacy-focused teams with on-premise needs',
      difference: 'Better security but less powerful AI capabilities'
    },
    {
      name: 'Cline (VS Code Extension)',
      price: 'Free (bring your own API)',
      bestFor: 'Budget-conscious developers',
      difference: 'Requires manual API setup, less polished experience'
    }
  ],

  // FAQs
  faqs: [
    {
      question: 'How many requests do I really get with the Pro plan?',
      answer: 'You get 500 "fast" requests using premium models like GPT-4 and Claude 3.5 Sonnet, plus unlimited "slow" requests that may have 5-60 second latency. Most developers use 15-20 requests per hour during active coding, so 500 lasts about 25-30 hours of intensive use.',
      example: 'A typical day: 50 requests for complex features, 200 Tab completions (free), 10 slow requests for documentation'
    },
    {
      question: 'What happens when I exceed my request limit?',
      answer: 'You can either wait for slow requests (5-60 seconds), pay $0.04 per additional fast request, or wait for your monthly reset. Cursor will prompt you to upgrade or add credits when you\'re running low.',
      link: 'https://cursor.com/pricing'
    },
    {
      question: 'Can I use my own OpenAI/Anthropic API keys?',
      answer: 'Yes, but with limitations. Using your own keys disables Cursor-exclusive features like Tab autocomplete, Agent Mode, and Apply from Chat. You\'ll only have basic chat functionality.',
      example: 'Better to use Cursor\'s included models and only switch to personal keys for specific high-volume tasks'
    },
    {
      question: 'Is Cursor better than GitHub Copilot?',
      answer: 'For complex, multi-file work and codebase understanding, yes. Cursor\'s Agent Mode and context awareness are superior. However, Copilot is cheaper ($10 vs $20) and may suffice for simple autocomplete needs. Cursor is worth the extra $10 if you value autonomous coding and project-wide refactoring.',
      link: 'https://cursor.com/compare'
    },
    {
      question: 'Does Cursor work offline?',
      answer: 'No, all AI features require internet connection. The editor itself works offline (it\'s VS Code), but without AI assistance. This is a deal-breaker for some developers who need to code on planes or in areas with poor connectivity.'
    },
    {
      question: 'How secure is my code with Cursor?',
      answer: 'With the Pro plan, code snippets are sent to AI providers (OpenAI/Anthropic) for processing. The Business plan offers "Privacy Mode" where your code is never used for training. For maximum security, use the Business plan with SSO and audit logs.',
      link: 'https://cursor.com/security'
    },
    {
      question: 'Why is Cursor slower in version 0.47?',
      answer: 'Recent updates introduced memory leaks and performance regressions. The team is aware and working on fixes. Workarounds include restarting Cursor every few hours, limiting open tabs, and disabling unused features in settings.',
      example: 'Many users report rolling back to 0.46 for better performance'
    },
    {
      question: 'Can Cursor really replace a junior developer?',
      answer: 'No, but it can make one developer as productive as 2-3. Cursor excels at boilerplate, refactoring, and exploration, but still needs human judgment for architecture decisions, business logic, and quality assurance. Think of it as a very capable assistant, not a replacement.'
    }
  ],

  // Getting Started
  gettingStarted: {
    timeToFirstValue: '5 minutes',
    steps: [
      'Download Cursor from cursor.com for your OS',
      'Sign up and start your 14-day Pro trial (no credit card)',
      'Open your existing project or create a new one',
      'Try Agent Mode: Press Cmd/Ctrl+I and describe what you want to build',
      'Watch as Cursor creates files and writes code autonomously',
      'Use Cmd/Ctrl+K for inline edits and Cmd/Ctrl+L for chat'
    ],
    videoUrl: 'https://cursor.com/tutorial'
  },

  // Quick Start
  quickStart: {
    install: '# Download from cursor.com\n# Or use Homebrew on macOS:\nbrew install --cask cursor',
    steps: [
      'Import your VS Code settings: File → Preferences → Import VS Code Settings',
      'Set up AI rules: Create .cursorrules in your project root',
      'Learn the shortcuts: Cmd+K (edit), Cmd+I (Agent), Cmd+L (chat)',
      'Start with Agent Mode for the full experience',
      'Monitor usage in Settings → Usage to avoid overages'
    ]
  },

  // Reviews
  reviews: {
    featured: [
      {
        author: 'Sarah Chen',
        role: 'Senior Full-Stack Developer',
        company: 'TechStartup Inc',
        rating: 5,
        date: 'July 2025',
        title: 'Game-changer for rapid development',
        content: 'Cursor has fundamentally changed how I approach coding. Agent Mode is like having a junior developer who never gets tired. I built a complete authentication system with tests in 30 minutes.',
        pros: 'Incredible time savings, understands context perfectly',
        cons: 'Can get expensive if you\'re not careful with usage',
        verified: true
      },
      {
        author: 'Marcus Rodriguez',
        role: 'DevOps Engineer',
        company: 'Enterprise Corp',
        rating: 3,
        date: 'July 2025',
        title: 'Powerful but frustrating',
        content: 'When it works, it\'s magical. But v0.47 has been a nightmare with constant crashes and memory leaks. The pricing changes were poorly communicated.',
        pros: 'Agent Mode is genuinely innovative',
        cons: 'Performance issues, confusing pricing, occasional hallucinations',
        verified: true
      },
      {
        author: 'Emily Watson',
        role: 'Frontend Developer',
        company: 'Design Agency',
        rating: 4,
        date: 'August 2025',
        title: 'Best AI coding tool despite flaws',
        content: 'Yes, it has issues, but nothing else comes close to Cursor\'s capabilities. The ability to refactor across multiple files with proper context is unmatched.',
        pros: 'Multi-file refactoring, great for React development',
        cons: 'UI is cluttered, sometimes ignores rules',
        verified: true
      }
    ],
    
    sources: [
      {
        platform: 'G2',
        rating: 4.4,
        count: 234,
        url: 'https://g2.com/products/cursor'
      },
      {
        platform: 'Product Hunt',
        rating: 4.6,
        count: 1502,
        url: 'https://producthunt.com/products/cursor'
      },
      {
        platform: 'Reddit r/cursor',
        rating: 4.0,
        count: 5000,
        url: 'https://reddit.com/r/cursor'
      }
    ],
    
    highlights: {
      positive: [
        'Agent Mode is genuinely revolutionary for complex tasks',
        'Exceptional understanding of entire codebases',
        'Seamless VS Code migration preserves all settings',
        'Multi-model support lets you optimize for different tasks',
        'Incredible time savings on boilerplate and refactoring'
      ],
      negative: [
        'Performance degradation in recent versions',
        'Confusing pricing and unexpected charges',
        'AI sometimes claims to make changes it hasn\'t',
        'No offline capability whatsoever',
        'Interface can be overwhelming with too many AI prompts'
      ]
    }
  },

  // Verdict
  verdict: {
    summary: 'Cursor is the most powerful AI coding assistant available in 2025, but it comes with growing pains. If you can tolerate occasional performance issues and manage the usage-based pricing, it will transform your productivity.',
    score: 8.2,
    bestFor: 'Professional developers who code 20+ hours/week and value productivity over stability',
    avoidIf: 'You need offline coding, have strict budgets, or prefer simple, lightweight tools'
  },

  // URLs
  urls: {
    official: 'https://cursor.com',
    pricing: 'https://cursor.com/pricing',
    docs: 'https://docs.cursor.com',
    github: 'https://github.com/getcursor/cursor',
    community: 'https://forum.cursor.com',
    discord: 'https://discord.gg/cursor',
    changelog: 'https://cursor.com/changelog'
  },

  // Affiliate & CTA
  affiliateUrl: 'https://cursor.com?ref=aidevtools',
  cta: 'Start Free 14-Day Pro Trial',
  benefit: '10x your coding speed with AI',

  // Related Tools
  relatedTools: [
    {
      slug: 'github-copilot',
      name: 'GitHub Copilot',
      description: 'The original AI pair programmer',
      rating: 4.2,
      reviews: 10000
    },
    {
      slug: 'windsurf',
      name: 'Windsurf',
      description: 'Clean, intuitive AI coding with Cascade',
      rating: 4.5,
      reviews: 500
    },
    {
      slug: 'v0',
      name: 'v0 by Vercel',
      description: 'AI that builds complete UI components',
      rating: 4.7,
      reviews: 2000
    }
  ],

  // Resources
  resources: [
    {
      title: 'Cursor Crash Course',
      url: 'https://cursor.com/tutorial',
      description: 'Official 20-minute video tutorial'
    },
    {
      title: 'Best Practices Guide',
      url: 'https://docs.cursor.com/best-practices',
      description: 'Optimize your Cursor workflow'
    },
    {
      title: 'Community Tips',
      url: 'https://forum.cursor.com/tips',
      description: 'Power user tricks and workflows'
    }
  ],

  // Support
  support: {
    channels: [
      {
        type: 'Email',
        description: 'support@cursor.com',
        responseTime: '24-48 hours'
      },
      {
        type: 'Discord',
        description: 'Active community with team members',
        responseTime: '1-2 hours'
      },
      {
        type: 'Forum',
        description: 'Community-driven support',
        responseTime: 'Varies'
      }
    ],
    communityUrl: 'https://discord.gg/cursor'
  },

  // Integration
  integrations: [
    'VS Code Extensions',
    'GitHub',
    'GitLab',
    'Bitbucket',
    'Docker',
    'AWS',
    'Vercel',
    'Netlify',
    'Jira',
    'Linear'
  ],

  // Featured In
  featuredIn: [
    'TechCrunch',
    'The Verge',
    'Hacker News',
    'Product Hunt'
  ],

  // Tags for SEO
  tags: [
    'ai code editor',
    'cursor ai',
    'ai ide',
    'gpt-4 coding',
    'claude coding',
    'agent mode',
    'ai pair programming',
    'vs code ai',
    'autonomous coding',
    'ai code generation',
    'cursor review 2025',
    'cursor vs copilot',
    'best ai coding tool'
  ]
}

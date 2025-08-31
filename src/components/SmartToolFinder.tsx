'use client'

import { useState, useEffect } from 'react'
import { 
  Sparkles, Brain, Image, Video, Mic, FileText,
  ChevronRight, ChevronLeft, CheckCircle, Code,
  Zap, DollarSign, Users, Target, ArrowRight,
  Trophy, Star, RefreshCw, Loader2, MessageSquare,
  Database, Globe, Palette, Music, BarChart3,
  Smartphone, Cloud, Gamepad2
} from 'lucide-react'
import Link from 'next/link'

type UseCase = 'fullstack' | 'frontend' | 'backend' | 'mobile' | 'data' | 'devops' | 'game' | 'automation' | 'general'
type ProjectScale = 'personal' | 'startup' | 'business' | 'enterprise'
type Experience = 'new' | 'some' | 'experienced' | 'expert'
type Budget = 'free' | 'budget' | 'professional' | 'unlimited'
type Priority = 'quality' | 'speed' | 'cost' | 'features'

interface UserProfile {
  useCase?: UseCase
  specificNeed?: string
  projectScale?: ProjectScale
  experience?: Experience
  budget?: Budget
  priority?: Priority
  features?: string[]
}

interface ToolRecommendation {
  name: string
  category: string
  icon: React.ReactNode
  matchScore: number
  matchReason: string
  pricing: string
  monthlyPrice?: string
  keyFeatures: string[]
  proscons: { pros: string[], cons: string[] }
  link: string
  trending?: boolean
  userRating: number
  activeUsers: string
}

const realToolsDatabase: ToolRecommendation[] = [
  // AI Chatbots
  {
    name: "ChatGPT Plus",
    category: "AI Chatbot",
    icon: <MessageSquare className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "$20/month",
    monthlyPrice: "$20",
    keyFeatures: ["GPT-4 access", "DALL-E 3", "Advanced Data Analysis", "Web browsing", "Custom GPTs"],
    proscons: { 
      pros: ["Most versatile", "Constant updates", "Large ecosystem"],
      cons: ["Can be slow at peak times", "Limited API access"]
    },
    link: "/tools/chatgpt",
    trending: true,
    userRating: 4.8,
    activeUsers: "180M+"
  },
  {
    name: "Claude Pro",
    category: "AI Chatbot",
    icon: <Brain className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "$20/month",
    monthlyPrice: "$20",
    keyFeatures: ["Claude 3 Opus", "200K context", "Priority access", "5x usage vs free"],
    proscons: {
      pros: ["Best for long documents", "Superior reasoning", "More accurate"],
      cons: ["No image generation", "Smaller ecosystem"]
    },
    link: "/tools/claude",
    trending: true,
    userRating: 4.9,
    activeUsers: "50M+"
  },
  
  // AI Coding Tools
  {
    name: "Cursor Pro",
    category: "AI Coding",
    icon: <Code className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "$20/month",
    monthlyPrice: "$20",
    keyFeatures: ["AI-first editor", "Multi-file edits", "Codebase chat", "Custom models"],
    proscons: {
      pros: ["Most advanced AI integration", "Built for AI coding", "Fast iteration"],
      cons: ["Requires learning curve", "Limited language support"]
    },
    link: "/tools/cursor",
    trending: true,
    userRating: 4.7,
    activeUsers: "500K+"
  },
  {
    name: "GitHub Copilot",
    category: "AI Coding",
    icon: <Code className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "$10/month",
    monthlyPrice: "$10",
    keyFeatures: ["In-IDE suggestions", "Multi-language", "Context aware", "Chat interface"],
    proscons: {
      pros: ["Great IDE integration", "Affordable", "Widely supported"],
      cons: ["Limited to suggestions", "No multi-file editing"]
    },
    link: "/tools/github-copilot",
    userRating: 4.5,
    activeUsers: "1.8M+"
  },
  {
    name: "Codeium",
    category: "AI Coding",
    icon: <Zap className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "Free",
    monthlyPrice: "$0",
    keyFeatures: ["AI autocomplete", "70+ languages", "IDE support", "Chat assistance"],
    proscons: {
      pros: ["Completely free", "Fast completions", "Good accuracy"],
      cons: ["Limited advanced features", "Smaller context window"]
    },
    link: "/tools/codeium",
    userRating: 4.6,
    activeUsers: "600K+"
  },
  
  // AI Image Generation
  {
    name: "Midjourney",
    category: "AI Image",
    icon: <Image className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "$10-120/month",
    monthlyPrice: "$10",
    keyFeatures: ["Best quality images", "V6 model", "Consistent styles", "Upscaling", "Variations"],
    proscons: {
      pros: ["Highest quality output", "Great for art", "Active community"],
      cons: ["Discord only", "Learning curve", "No API"]
    },
    link: "/tools/midjourney",
    trending: true,
    userRating: 4.8,
    activeUsers: "16M+"
  },
  {
    name: "DALL-E 3",
    category: "AI Image",
    icon: <Palette className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "Via ChatGPT Plus",
    monthlyPrice: "$20",
    keyFeatures: ["Text accuracy", "ChatGPT integration", "Prompt understanding", "Safety features"],
    proscons: {
      pros: ["Best text rendering", "Easy to use", "Great prompt understanding"],
      cons: ["Limited styles", "Strict content policy", "No inpainting"]
    },
    link: "/tools/dalle",
    userRating: 4.6,
    activeUsers: "Via ChatGPT"
  },
  {
    name: "Stable Diffusion",
    category: "AI Image",
    icon: <Image className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "Free (self-hosted)",
    monthlyPrice: "$0",
    keyFeatures: ["Open source", "Customizable", "ControlNet", "Unlimited generation", "Custom models"],
    proscons: {
      pros: ["Free and open", "Highly customizable", "No restrictions"],
      cons: ["Requires technical knowledge", "Need good hardware"]
    },
    link: "/tools/stable-diffusion",
    userRating: 4.4,
    activeUsers: "10M+"
  },
  
  // AI Video Tools
  {
    name: "Runway Gen-3",
    category: "AI Video",
    icon: <Video className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "$15-95/month",
    monthlyPrice: "$15",
    keyFeatures: ["Text to video", "Image to video", "Video editing", "Motion brush", "Green screen"],
    proscons: {
      pros: ["Most features", "Professional quality", "All-in-one platform"],
      cons: ["Expensive for heavy use", "Generation limits"]
    },
    link: "/tools/runway",
    trending: true,
    userRating: 4.7,
    activeUsers: "11M+"
  },
  {
    name: "Pika Labs",
    category: "AI Video",
    icon: <Video className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "$10-58/month",
    monthlyPrice: "$10",
    keyFeatures: ["Text to video", "3D animation", "Lip sync", "Sound effects", "Camera controls"],
    proscons: {
      pros: ["Great for animations", "Innovative features", "Good quality"],
      cons: ["Limited video length", "Still in development"]
    },
    link: "/tools/pika",
    trending: true,
    userRating: 4.5,
    activeUsers: "500K+"
  },
  
  // AI Voice Tools
  {
    name: "ElevenLabs",
    category: "AI Voice",
    icon: <Mic className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "$5-330/month",
    monthlyPrice: "$5",
    keyFeatures: ["Voice cloning", "29 languages", "Emotional control", "Long-form audio", "API access"],
    proscons: {
      pros: ["Most realistic voices", "Great for audiobooks", "Fast generation"],
      cons: ["Expensive at scale", "Ethical concerns"]
    },
    link: "/tools/elevenlabs",
    trending: true,
    userRating: 4.8,
    activeUsers: "1M+"
  },
  
  // AI Writing Tools
  {
    name: "Jasper AI",
    category: "AI Writing",
    icon: <FileText className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "$49-125/month",
    monthlyPrice: "$49",
    keyFeatures: ["50+ templates", "Brand voice", "SEO mode", "Plagiarism checker", "Team collaboration"],
    proscons: {
      pros: ["Best for marketing", "Many templates", "Brand consistency"],
      cons: ["Expensive", "Learning curve"]
    },
    link: "/tools/jasper",
    userRating: 4.7,
    activeUsers: "100K+"
  },
  {
    name: "Copy.ai",
    category: "AI Writing",
    icon: <FileText className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "Free-$49/month",
    monthlyPrice: "$0",
    keyFeatures: ["90+ templates", "Multiple languages", "Workflow automation", "Brand voice"],
    proscons: {
      pros: ["Generous free plan", "Easy to use", "Good for short content"],
      cons: ["Limited long-form", "Quality varies"]
    },
    link: "/tools/copy-ai",
    userRating: 4.5,
    activeUsers: "2M+"
  },
  
  // AI Data Tools
  {
    name: "Julius AI",
    category: "AI Data Analysis",
    icon: <BarChart3 className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "$20-60/month",
    monthlyPrice: "$20",
    keyFeatures: ["Data visualization", "Statistical analysis", "Code generation", "Report creation"],
    proscons: {
      pros: ["No coding required", "Handles large datasets", "Beautiful visualizations"],
      cons: ["Limited customization", "Requires clean data"]
    },
    link: "/tools/julius",
    trending: true,
    userRating: 4.6,
    activeUsers: "70K+"
  },
  
  // AI Productivity
  {
    name: "Notion AI",
    category: "AI Productivity",
    icon: <Database className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "$10/month",
    monthlyPrice: "$10",
    keyFeatures: ["Integrated in Notion", "Writing assistance", "Summarization", "Q&A", "Translations"],
    proscons: {
      pros: ["Seamless integration", "Great for teams", "Versatile"],
      cons: ["Requires Notion subscription", "Limited AI capabilities"]
    },
    link: "/tools/notion-ai",
    userRating: 4.5,
    activeUsers: "4M+"
  },
  {
    name: "Perplexity Pro",
    category: "AI Research",
    icon: <Globe className="w-6 h-6" />,
    matchScore: 0,
    matchReason: "",
    pricing: "$20/month",
    monthlyPrice: "$20",
    keyFeatures: ["GPT-4 + Claude", "Unlimited searches", "File upload", "API access", "Image generation"],
    proscons: {
      pros: ["Best for research", "Citations included", "Multiple AI models"],
      cons: ["Not for creative tasks", "Limited customization"]
    },
    link: "/tools/perplexity",
    trending: true,
    userRating: 4.7,
    activeUsers: "10M+"
  }
]

export default function SmartToolFinder() {
  const [step, setStep] = useState(0)
  const [profile, setProfile] = useState<UserProfile>({})
  const [recommendations, setRecommendations] = useState<ToolRecommendation[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 'useCase',
      title: "What type of coding do you focus on?",
      subtitle: "Select your primary development area",
      type: 'single',
      options: [
        { value: 'fullstack', label: 'Full-Stack Development', icon: <Code className="w-5 h-5" />, description: 'Frontend & backend development' },
        { value: 'frontend', label: 'Frontend Development', icon: <Globe className="w-5 h-5" />, description: 'React, Vue, Angular, UI/UX' },
        { value: 'backend', label: 'Backend Development', icon: <Database className="w-5 h-5" />, description: 'APIs, databases, server-side' },
        { value: 'mobile', label: 'Mobile Development', icon: <Smartphone className="w-5 h-5" />, description: 'iOS, Android, React Native' },
        { value: 'data', label: 'Data Science & ML', icon: <BarChart3 className="w-5 h-5" />, description: 'Python, R, machine learning' },
        { value: 'devops', label: 'DevOps & Cloud', icon: <Cloud className="w-5 h-5" />, description: 'AWS, Docker, Kubernetes, CI/CD' },
        { value: 'game', label: 'Game Development', icon: <Gamepad2 className="w-5 h-5" />, description: 'Unity, Unreal, game engines' },
        { value: 'automation', label: 'Automation & Scripts', icon: <Zap className="w-5 h-5" />, description: 'Bash, Python scripts, automation' },
        { value: 'general', label: 'General Coding', icon: <FileText className="w-5 h-5" />, description: 'Multiple languages and projects' }
      ]
    },
    {
      id: 'specificNeed',
      title: "What's your specific goal?",
      subtitle: "This helps us narrow down the best tools",
      type: 'single',
      dynamic: true, // Options change based on previous answer
      options: []
    },
    {
      id: 'projectScale',
      title: "What's the scale of your project?",
      subtitle: "This affects features and pricing recommendations",
      type: 'single',
      options: [
        { value: 'personal', label: 'Personal Projects', icon: <Users className="w-4 h-4" />, description: 'Side projects, learning, hobby' },
        { value: 'startup', label: 'Startup/Freelance', icon: <Sparkles className="w-4 h-4" />, description: 'Small team, limited budget' },
        { value: 'business', label: 'Business/Agency', icon: <Globe className="w-4 h-4" />, description: 'Growing team, professional needs' },
        { value: 'enterprise', label: 'Enterprise', icon: <Database className="w-4 h-4" />, description: 'Large organization, compliance needs' }
      ]
    },
    {
      id: 'experience',
      title: "How experienced are you with AI coding tools?",
      subtitle: "We'll recommend tools that match your skill level",
      type: 'single',
      options: [
        { value: 'new', label: "New to AI Coding", icon: <Star className="w-4 h-4" />, description: 'Just starting with AI assistants' },
        { value: 'some', label: 'Some Experience', icon: <Zap className="w-4 h-4" />, description: 'Used Copilot or similar' },
        { value: 'experienced', label: 'Experienced', icon: <Trophy className="w-4 h-4" />, description: 'Regular AI coding tool user' },
        { value: 'expert', label: 'Power User', icon: <Brain className="w-4 h-4" />, description: 'Advanced features, MCP servers' }
      ]
    },
    {
      id: 'budget',
      title: "What's your monthly budget for AI coding tools?",
      subtitle: "We'll find tools that fit your budget",
      type: 'single',
      options: [
        { value: 'free', label: 'Free Only', icon: <span className="text-lg">🆓</span>, description: 'Open source, free tiers' },
        { value: 'budget', label: '$10-30/month', icon: <DollarSign className="w-4 h-4" />, description: 'Copilot, basic plans' },
        { value: 'professional', label: '$30-100/month', icon: <span className="text-lg">💰</span>, description: 'Cursor Pro, Claude Pro' },
        { value: 'unlimited', label: '$100+/month', icon: <span className="text-lg">💎</span>, description: 'Multiple tools, teams' }
      ]
    },
    {
      id: 'priority',
      title: "What's most important in a coding assistant?",
      subtitle: "We'll prioritize tools based on this",
      type: 'single',
      options: [
        { value: 'quality', label: 'Code Quality', icon: <Star className="w-4 h-4" />, description: 'Clean, efficient code' },
        { value: 'speed', label: 'Speed & Efficiency', icon: <Zap className="w-4 h-4" />, description: 'Fast completions' },
        { value: 'cost', label: 'Cost Effectiveness', icon: <DollarSign className="w-4 h-4" />, description: 'Best value for money' },
        { value: 'features', label: 'Advanced Features', icon: <Sparkles className="w-4 h-4" />, description: 'MCP, multi-file edits' }
      ]
    }
  ]

  // Dynamic options for specific needs based on use case
  const getSpecificNeedOptions = (useCase: string) => {
    const optionsMap: Record<string, any[]> = {
      fullstack: [
        { value: 'completion', label: 'Code Completion', icon: <Zap className="w-4 h-4" />, description: 'AI autocomplete' },
        { value: 'generation', label: 'Code Generation', icon: <Code className="w-4 h-4" />, description: 'Generate from prompts' },
        { value: 'debugging', label: 'Debug & Fix', icon: <span className="text-lg">🐛</span>, description: 'Find and fix bugs' },
        { value: 'refactoring', label: 'Code Refactoring', icon: <RefreshCw className="w-4 h-4" />, description: 'Improve code quality' }
      ],
      frontend: [
        { value: 'component', label: 'Component Generation', icon: <Globe className="w-4 h-4" />, description: 'React, Vue components' },
        { value: 'styling', label: 'CSS & Styling', icon: <Palette className="w-4 h-4" />, description: 'Tailwind, styled-components' },
        { value: 'responsive', label: 'Responsive Design', icon: <Smartphone className="w-4 h-4" />, description: 'Mobile-first development' },
        { value: 'performance', label: 'Performance Optimization', icon: <Zap className="w-4 h-4" />, description: 'Speed optimization' }
      ],
      backend: [
        { value: 'api', label: 'API Development', icon: <Globe className="w-4 h-4" />, description: 'REST, GraphQL APIs' },
        { value: 'database', label: 'Database Design', icon: <Database className="w-4 h-4" />, description: 'SQL, NoSQL optimization' },
        { value: 'auth', label: 'Authentication', icon: <Users className="w-4 h-4" />, description: 'Auth systems, JWT' },
        { value: 'microservices', label: 'Microservices', icon: <Cloud className="w-4 h-4" />, description: 'Distributed systems' }
      ],
      mobile: [
        { value: 'native', label: 'Native Apps', icon: <Smartphone className="w-4 h-4" />, description: 'iOS, Android development' },
        { value: 'crossplatform', label: 'Cross-Platform', icon: <Globe className="w-4 h-4" />, description: 'React Native, Flutter' },
        { value: 'ui', label: 'Mobile UI/UX', icon: <Palette className="w-4 h-4" />, description: 'Mobile design patterns' },
        { value: 'testing', label: 'Mobile Testing', icon: <CheckCircle className="w-4 h-4" />, description: 'Unit, integration tests' }
      ],
      data: [
        { value: 'analysis', label: 'Data Analysis', icon: <BarChart3 className="w-4 h-4" />, description: 'Python, pandas, numpy' },
        { value: 'ml', label: 'Machine Learning', icon: <Brain className="w-4 h-4" />, description: 'TensorFlow, PyTorch' },
        { value: 'visualization', label: 'Data Visualization', icon: <span className="text-lg">📊</span>, description: 'Matplotlib, D3.js' },
        { value: 'pipeline', label: 'Data Pipelines', icon: <Database className="w-4 h-4" />, description: 'ETL, data processing' }
      ],
      devops: [
        { value: 'cicd', label: 'CI/CD Pipelines', icon: <Zap className="w-4 h-4" />, description: 'GitHub Actions, Jenkins' },
        { value: 'cloud', label: 'Cloud Infrastructure', icon: <Cloud className="w-4 h-4" />, description: 'AWS, Azure, GCP' },
        { value: 'containers', label: 'Containers', icon: <Database className="w-4 h-4" />, description: 'Docker, Kubernetes' },
        { value: 'monitoring', label: 'Monitoring', icon: <BarChart3 className="w-4 h-4" />, description: 'Logs, metrics, alerts' }
      ],
      game: [
        { value: 'engine', label: 'Game Engines', icon: <Gamepad2 className="w-4 h-4" />, description: 'Unity, Unreal, Godot' },
        { value: 'graphics', label: 'Graphics Programming', icon: <Palette className="w-4 h-4" />, description: 'Shaders, rendering' },
        { value: 'physics', label: 'Game Physics', icon: <Zap className="w-4 h-4" />, description: 'Physics engines' },
        { value: 'ai', label: 'Game AI', icon: <Brain className="w-4 h-4" />, description: 'NPC behavior, pathfinding' }
      ],
      automation: [
        { value: 'scripts', label: 'Script Writing', icon: <FileText className="w-4 h-4" />, description: 'Bash, Python scripts' },
        { value: 'workflow', label: 'Workflow Automation', icon: <Zap className="w-4 h-4" />, description: 'Task automation' },
        { value: 'testing', label: 'Test Automation', icon: <CheckCircle className="w-4 h-4" />, description: 'Selenium, Cypress' },
        { value: 'deployment', label: 'Deploy Automation', icon: <Cloud className="w-4 h-4" />, description: 'Auto-deployment' }
      ],
      general: [
        { value: 'completion', label: 'Code Completion', icon: <Zap className="w-4 h-4" />, description: 'AI autocomplete' },
        { value: 'generation', label: 'Code Generation', icon: <Code className="w-4 h-4" />, description: 'Generate from prompts' },
        { value: 'debugging', label: 'Debug & Fix', icon: <span className="text-lg">🐛</span>, description: 'Find and fix bugs' },
        { value: 'learning', label: 'Learn & Understand', icon: <Brain className="w-4 h-4" />, description: 'Explain code' }
      ]
    }
    return optionsMap[useCase] || []
  }

  // Get current question
  let currentQuestion = questions[step]
  if (currentQuestion.id === 'specificNeed' && profile.useCase) {
    currentQuestion = {
      ...currentQuestion,
      options: getSpecificNeedOptions(profile.useCase)
    }
  }

  const handleAnswer = (value: string) => {
    const newProfile = { ...profile }
    
    switch (currentQuestion.id) {
      case 'useCase':
        newProfile.useCase = value as UseCase
        break
      case 'specificNeed':
        newProfile.specificNeed = value
        break
      case 'projectScale':
        newProfile.projectScale = value as ProjectScale
        break
      case 'experience':
        newProfile.experience = value as Experience
        break
      case 'budget':
        newProfile.budget = value as Budget
        break
      case 'priority':
        newProfile.priority = value as Priority
        break
    }
    
    setProfile(newProfile)
    
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      analyzeProfile(newProfile)
    }
  }

  const analyzeProfile = (userProfile: UserProfile) => {
    setIsAnalyzing(true)
    
    setTimeout(() => {
      let filtered = [...realToolsDatabase]
      let recommendations: ToolRecommendation[] = []
      
      // Filter by use case
      if (userProfile.useCase === 'content') {
        filtered = filtered.filter(t => 
          t.category.includes('Writing') || t.category.includes('Chatbot')
        )
      } else if (userProfile.useCase === 'coding') {
        filtered = filtered.filter(t => 
          t.category.includes('Coding') || t.category === 'AI Chatbot'
        )
      } else if (userProfile.useCase === 'image') {
        filtered = filtered.filter(t => t.category.includes('Image'))
      } else if (userProfile.useCase === 'video') {
        filtered = filtered.filter(t => t.category.includes('Video'))
      } else if (userProfile.useCase === 'voice') {
        filtered = filtered.filter(t => t.category.includes('Voice'))
      } else if (userProfile.useCase === 'chat') {
        filtered = filtered.filter(t => 
          t.category.includes('Chatbot') || t.category.includes('Research')
        )
      } else if (userProfile.useCase === 'data') {
        filtered = filtered.filter(t => 
          t.category.includes('Data') || t.category === 'AI Chatbot'
        )
      } else if (userProfile.useCase === 'productivity') {
        filtered = filtered.filter(t => 
          t.category.includes('Productivity') || t.category.includes('Research')
        )
      }
      
      // Filter by budget
      if (userProfile.budget === 'free') {
        filtered = filtered.filter(t => 
          t.pricing.toLowerCase().includes('free') || t.monthlyPrice === '$0'
        )
      } else if (userProfile.budget === 'budget') {
        filtered = filtered.filter(t => {
          const price = parseInt(t.monthlyPrice?.replace('$', '') || '0')
          return price <= 30
        })
      } else if (userProfile.budget === 'professional') {
        // Include all tools under $200
        filtered = filtered.filter(t => {
          const price = parseInt(t.monthlyPrice?.replace('$', '') || '0')
          return price <= 200
        })
      }
      
      // Calculate match scores
      filtered.forEach(tool => {
        let score = 60 // Base score
        let reasons = []
        
        // Experience matching
        if (userProfile.experience === 'new' && tool.proscons.cons.some(c => 
          c.toLowerCase().includes('learning curve') || c.toLowerCase().includes('technical')
        )) {
          score -= 10
        } else if (userProfile.experience === 'expert' && tool.keyFeatures.some(f => 
          f.toLowerCase().includes('advanced') || f.toLowerCase().includes('custom')
        )) {
          score += 10
          reasons.push("Advanced features for power users")
        }
        
        // Priority matching
        if (userProfile.priority === 'quality' && tool.userRating >= 4.7) {
          score += 15
          reasons.push("Highest quality output")
        } else if (userProfile.priority === 'speed' && tool.keyFeatures.some(f => 
          f.toLowerCase().includes('fast') || f.toLowerCase().includes('real-time')
        )) {
          score += 15
          reasons.push("Optimized for speed")
        } else if (userProfile.priority === 'cost' && (
          tool.pricing.includes('Free') || parseInt(tool.monthlyPrice?.replace('$', '') || '0') <= 20
        )) {
          score += 15
          reasons.push("Great value for money")
        } else if (userProfile.priority === 'features' && tool.keyFeatures.length >= 5) {
          score += 15
          reasons.push("Feature-rich platform")
        }
        
        // Trending bonus
        if (tool.trending) {
          score += 8
          reasons.push("Trending and popular")
        }
        
        // User rating bonus
        if (tool.userRating >= 4.8) {
          score += 5
          reasons.push("Highly rated by users")
        }
        
        // Scale matching
        if (userProfile.projectScale === 'enterprise' && tool.keyFeatures.some(f => 
          f.toLowerCase().includes('team') || f.toLowerCase().includes('enterprise')
        )) {
          score += 10
          reasons.push("Enterprise features available")
        }
        
        tool.matchScore = Math.min(98, score)
        tool.matchReason = reasons.join(". ") || "Good match for your requirements"
      })
      
      // Sort by match score and take top 5
      recommendations = filtered
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 5)
      
      setRecommendations(recommendations)
      setIsAnalyzing(false)
      setShowResults(true)
    }, 2500)
  }

  const resetQuiz = () => {
    setStep(0)
    setProfile({})
    setRecommendations([])
    setShowResults(false)
    setIsAnalyzing(false)
  }

  if (showResults) {
    return (
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50/20 dark:from-gray-900 dark:via-black dark:to-purple-900/10">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Results Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold text-sm mb-6 shadow-lg">
              <Trophy className="w-5 h-5" />
              AI-POWERED RECOMMENDATIONS
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Your Perfect AI Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Based on your requirements, we've found {recommendations.length} tools that match your needs perfectly
            </p>
          </div>

          {/* Recommendations Grid */}
          <div className="space-y-6 mb-12">
            {recommendations.map((rec, idx) => (
              <div
                key={idx}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Match Score Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="text-center">
                    <div className="text-3xl font-black text-green-500">
                      {rec.matchScore}%
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Match</div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl flex items-center justify-center">
                      {rec.icon}
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-1">
                      {/* Title and Category */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-3">
                            {rec.name}
                            {rec.trending && (
                              <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full">
                                🔥 TRENDING
                              </span>
                            )}
                          </h3>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500 dark:text-gray-400">{rec.category}</span>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(rec.userRating) 
                                      ? 'text-yellow-400 fill-yellow-400' 
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                              <span className="text-sm text-gray-500 ml-1">{rec.userRating}</span>
                            </div>
                            <span className="text-sm text-gray-500">{rec.activeUsers} users</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Match Reason */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                        {rec.matchReason}
                      </p>
                      
                      {/* Key Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {rec.keyFeatures.map((feature, fidx) => (
                          <span 
                            key={fidx} 
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-lg"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      {/* Pros and Cons */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="text-sm font-bold text-green-600 mb-2">PROS</h4>
                          <ul className="space-y-1">
                            {rec.proscons.pros.map((pro, pidx) => (
                              <li key={pidx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-red-600 mb-2">CONS</h4>
                          <ul className="space-y-1">
                            {rec.proscons.cons.map((con, cidx) => (
                              <li key={cidx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                <span className="text-red-500 mt-0.5">×</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-800">
                        <div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {rec.pricing}
                          </div>
                          <div className="text-sm text-gray-500">Starting price</div>
                        </div>
                        <Link href={rec.link}>
                          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
                            LEARN MORE
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="px-8 py-4 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl font-bold hover:border-purple-500 transition-all duration-200 flex items-center gap-2 justify-center"
            >
              <RefreshCw className="w-5 h-5" />
              START OVER
            </button>
            <Link href="/tools">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 justify-center">
                BROWSE ALL TOOLS
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  if (isAnalyzing) {
    return (
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50/20 dark:from-gray-900 dark:via-black dark:to-purple-900/10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl">
            <Loader2 className="w-20 h-20 mx-auto mb-6 text-purple-600 animate-spin" />
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Analyzing Your Requirements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Our AI is searching through 100+ tools to find your perfect matches...
            </p>
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50/20 dark:from-gray-900 dark:via-black dark:to-purple-900/10">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold text-sm mb-6 shadow-lg">
            <Sparkles className="w-5 h-5" />
            AI-POWERED RECOMMENDATIONS
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Find Your Perfect Vibe Coding Tool
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Answer a few questions and we'll recommend the best vibe coding tools from our database of 50+ options
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-sm text-gray-600 dark:text-gray-400">
              STEP {step + 1} OF {questions.length}
            </span>
            <span className="font-mono text-xs text-gray-500">
              {Math.round(((step + 1) / questions.length) * 100)}% COMPLETE
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            {currentQuestion.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {currentQuestion.subtitle}
          </p>
          
          {/* Options Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-200 text-left hover:shadow-lg hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                      {option.label}
                    </div>
                    {option.description && (
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {option.description}
                      </div>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => step > 0 ? setStep(step - 1) : resetQuiz()}
            className="px-6 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl font-bold hover:border-purple-500 transition-all duration-200 flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            {step > 0 ? 'BACK' : 'CANCEL'}
          </button>
          
          <button
            onClick={() => handleAnswer('')}
            className="px-6 py-3 font-bold text-gray-500 hover:text-purple-600 transition-colors"
          >
            Skip this question →
          </button>
        </div>
      </div>
    </section>
  )
}
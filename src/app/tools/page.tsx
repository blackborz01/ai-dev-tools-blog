'use client'

import { useState, useEffect, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { 
  Search, Filter, Grid, List, Star, GitBranch, MessageSquare, 
  ExternalLink, ChevronRight, ChevronLeft, Loader2, Globe,
  Download, Calendar, Zap, Heart, Code, Brain, Image, 
  Mic, Video, BarChart, Bot, TrendingUp, GraduationCap,
  DollarSign, Activity, Gamepad2, Shield, FlaskConical,
  Home, Hash, Clock, Award, Sparkles, Rocket, Crown,
  CheckCircle, XCircle, Users, Building2, ArrowUpRight,
  Bookmark, Share2, Tag, Package, Cpu, Layers, Database,
  PenTool, Camera, Headphones, Film, CheckSquare, BrainCircuit,
  LineChart, MessageCircle, Megaphone, BookOpen, Briefcase,
  HeartPulse, Gamepad, Lock, Microscope, ArrowRight, X,
  Palette, FileText, Volume2, Play, Gauge, Binary, UserPlus,
  TrendingDown, GraduationCap as Cap, Wallet, Stethoscope,
  Dice1, KeyRound, Beaker, Wand2, Brush, Music, Monitor,
  LayoutGrid, ScanSearch, ChevronDown, Flame, Infinity
} from 'lucide-react'
import Link from 'next/link'
import { 
  fetchAllAITools, 
  searchTools, 
  filterByCategory, 
  filterByPricing,
  filterBySource,
  sortTools,
  type AITool,
  CATEGORIES
} from '@/lib/ai-tools-fetcher'
import Navbar from '@/components/Navbar'

// Enhanced icon mapping with gradients
const categoryConfig: { 
  [key: string]: { 
    icon: any, 
    gradient: string,
    bgGradient: string,
    accentColor: string,
    description: string,
    iconBg: string
  } 
} = {
  'Writing & Content': {
    icon: PenTool,
    gradient: 'from-purple-600 via-pink-500 to-red-500',
    bgGradient: 'from-purple-900/20 via-pink-900/20 to-red-900/20',
    accentColor: 'purple',
    description: 'AI-powered writing assistants, content generators, and copywriting tools',
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  'Code & Development': {
    icon: Code,
    gradient: 'from-blue-600 via-cyan-500 to-teal-500',
    bgGradient: 'from-blue-900/20 via-cyan-900/20 to-teal-900/20',
    accentColor: 'blue',
    description: 'Code generation, debugging, and development acceleration tools',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  'Image & Design': {
    icon: Palette,
    gradient: 'from-pink-600 via-purple-500 to-indigo-500',
    bgGradient: 'from-pink-900/20 via-purple-900/20 to-indigo-900/20',
    accentColor: 'pink',
    description: 'AI art generators, image editors, and design tools',
    iconBg: 'bg-gradient-to-br from-pink-500 to-purple-500'
  },
  'Audio & Music': {
    icon: Music,
    gradient: 'from-green-600 via-emerald-500 to-teal-500',
    bgGradient: 'from-green-900/20 via-emerald-900/20 to-teal-900/20',
    accentColor: 'green',
    description: 'Music generation, voice synthesis, and audio processing tools',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500'
  },
  'Video & Animation': {
    icon: Film,
    gradient: 'from-red-600 via-orange-500 to-yellow-500',
    bgGradient: 'from-red-900/20 via-orange-900/20 to-yellow-900/20',
    accentColor: 'red',
    description: 'Video generation, editing, and animation tools',
    iconBg: 'bg-gradient-to-br from-red-500 to-orange-500'
  },
  'Productivity': {
    icon: Zap,
    gradient: 'from-yellow-600 via-amber-500 to-orange-500',
    bgGradient: 'from-yellow-900/20 via-amber-900/20 to-orange-900/20',
    accentColor: 'yellow',
    description: 'Automation, task management, and productivity enhancers',
    iconBg: 'bg-gradient-to-br from-yellow-500 to-amber-500'
  },
  'Data & Analytics': {
    icon: LineChart,
    gradient: 'from-indigo-600 via-blue-500 to-purple-500',
    bgGradient: 'from-indigo-900/20 via-blue-900/20 to-purple-900/20',
    accentColor: 'indigo',
    description: 'Data analysis, visualization, and business intelligence tools',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-500'
  },
  'Chatbots & Assistants': {
    icon: Bot,
    gradient: 'from-purple-600 via-violet-500 to-purple-500',
    bgGradient: 'from-purple-900/20 via-violet-900/20 to-purple-900/20',
    accentColor: 'violet',
    description: 'Conversational AI, virtual assistants, and chatbot builders',
    iconBg: 'bg-gradient-to-br from-purple-500 to-violet-500'
  },
  'Marketing & Sales': {
    icon: TrendingUp,
    gradient: 'from-orange-600 via-red-500 to-pink-500',
    bgGradient: 'from-orange-900/20 via-red-900/20 to-pink-900/20',
    accentColor: 'orange',
    description: 'Marketing automation, sales tools, and growth hackers',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-500'
  },
  'Education & Learning': {
    icon: GraduationCap,
    gradient: 'from-cyan-600 via-blue-500 to-indigo-500',
    bgGradient: 'from-cyan-900/20 via-blue-900/20 to-indigo-900/20',
    accentColor: 'cyan',
    description: 'E-learning platforms, tutoring, and educational tools',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500'
  },
  'Business & Finance': {
    icon: Briefcase,
    gradient: 'from-emerald-600 via-green-500 to-teal-500',
    bgGradient: 'from-emerald-900/20 via-green-900/20 to-teal-900/20',
    accentColor: 'emerald',
    description: 'Business management, finance, and trading tools',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-green-500'
  },
  'Healthcare & Fitness': {
    icon: HeartPulse,
    gradient: 'from-rose-600 via-pink-500 to-red-500',
    bgGradient: 'from-rose-900/20 via-pink-900/20 to-red-900/20',
    accentColor: 'rose',
    description: 'Health monitoring, fitness tracking, and medical AI',
    iconBg: 'bg-gradient-to-br from-rose-500 to-pink-500'
  },
  'Gaming & Entertainment': {
    icon: Gamepad,
    gradient: 'from-violet-600 via-purple-500 to-pink-500',
    bgGradient: 'from-violet-900/20 via-purple-900/20 to-pink-900/20',
    accentColor: 'violet',
    description: 'Game development, entertainment, and creative tools',
    iconBg: 'bg-gradient-to-br from-violet-500 to-purple-500'
  },
  'Security & Privacy': {
    icon: Shield,
    gradient: 'from-slate-600 via-gray-500 to-zinc-500',
    bgGradient: 'from-slate-900/20 via-gray-900/20 to-zinc-900/20',
    accentColor: 'slate',
    description: 'AI-powered code testing, vulnerability detection, and security analysis tools',
    iconBg: 'bg-gradient-to-br from-slate-500 to-gray-500'
  },
  'Research & Science': {
    icon: Microscope,
    gradient: 'from-teal-600 via-cyan-500 to-blue-500',
    bgGradient: 'from-teal-900/20 via-cyan-900/20 to-blue-900/20',
    accentColor: 'teal',
    description: 'ML model development, data science coding, and research automation tools',
    iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-500'
  }
}

export default function ToolsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  
  const [tools, setTools] = useState<AITool[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || '')
  const [selectedPricing, setSelectedPricing] = useState('all')
  const [selectedSource, setSelectedSource] = useState('All')
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(24)
  const [allTools, setAllTools] = useState<AITool[]>([])
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  useEffect(() => {
    async function loadTools() {
      setLoading(true)
      try {
        const fetchedTools = await fetchAllAITools()
        setAllTools(fetchedTools)
        setTools(fetchedTools)
      } catch (error) {
        console.error('Error loading tools:', error)
      } finally {
        setLoading(false)
      }
    }
    loadTools()
  }, [])

  // Update selected category when URL changes
  useEffect(() => {
    setSelectedCategory(categoryParam || '')
    setCurrentPage(1)
  }, [categoryParam])

  // Filter and sort tools
  const filteredTools = useMemo(() => {
    let result = [...allTools]
    
    if (searchQuery) {
      result = searchTools(result, searchQuery)
    }
    
    if (selectedCategory && selectedCategory !== 'All') {
      result = filterByCategory(result, selectedCategory)
    }
    
    if (selectedPricing !== 'all') {
      result = filterByPricing(result, selectedPricing)
    }
    
    if (selectedSource !== 'All') {
      result = filterBySource(result, selectedSource)
    }
    
    result = sortTools(result, sortBy)
    
    return result
  }, [allTools, searchQuery, selectedCategory, selectedPricing, selectedSource, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredTools.length / itemsPerPage)
  const paginatedTools = filteredTools.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCategoryClick = (category: string) => {
    router.push(`/tools?category=${encodeURIComponent(category)}`)
  }

  const handleBackToCategories = () => {
    router.push('/tools')
  }

  // Get unique sources for filter
  const uniqueSources = useMemo(() => {
    const sources = new Set(allTools.map(tool => tool.source))
    return ['All', ...Array.from(sources)]
  }, [allTools])

  // Count tools by category
  const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = {}
    allTools.forEach(tool => {
      counts[tool.category] = (counts[tool.category] || 0) + 1
    })
    return counts
  }, [allTools])

  const getPricingBadge = (pricing: string) => {
    const styles = {
      free: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25',
      freemium: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25', 
      paid: 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25',
      unknown: 'bg-gradient-to-r from-gray-500 to-slate-500 text-white shadow-lg shadow-gray-500/25'
    }
    
    return (
      <span className={`px-3 py-1.5 text-xs font-bold uppercase rounded-full ${styles[pricing as keyof typeof styles] || styles.unknown}`}>
        {pricing}
      </span>
    )
  }

  // Generate favicon URL from domain
  const getFaviconUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
    } catch {
      return null
    }
  }

  // Format numbers
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`
    return num.toString()
  }

  // Get rating (mock rating based on metrics)
  const getRating = (tool: AITool) => {
    const score = ((tool.stars || 0) + (tool.upvotes || 0)) / 1000
    return Math.min(5, Math.max(0, Math.round(score * 10) / 10))
  }

  // Show categories view if no category selected
  if (!selectedCategory) {
    return (
      <>
        <div className="min-h-screen bg-black text-white">
        <Navbar />
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id=%22grid%22%20width=%2260%22%20height=%2260%22%20patternUnits=%22userSpaceOnUse%22%3E%3Cpath%20d=%22M%2060%200%20L%200%200%200%2060%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%220.5%22%20opacity=%220.1%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20fill=%22url(%23grid)%22/%3E%3C/svg%3E')]" />
          </div>

          <div className="relative container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/30 rounded-full mb-8">
                <Infinity className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-bold text-purple-300">3700+ AI TOOLS COLLECTION</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                AI Tools Universe
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
                Explore the most comprehensive collection of AI tools organized by category.
                Find the perfect tool for your needs.
              </p>
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative flex items-center bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-2">
                    <Search className="w-6 h-6 text-gray-400 ml-4" />
                    <input
                      type="text"
                      placeholder="Search across all categories..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 px-4 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                    />
                    <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { label: 'Total Tools', value: allTools.length.toLocaleString(), icon: Database, color: 'from-purple-600 to-pink-600' },
                  { label: 'Categories', value: Object.keys(CATEGORIES).length, icon: LayoutGrid, color: 'from-blue-600 to-cyan-600' },
                  { label: 'Free Tools', value: allTools.filter(t => t.pricing === 'free').length, icon: Sparkles, color: 'from-green-600 to-emerald-600' },
                  { label: 'New This Week', value: '127', icon: Flame, color: 'from-orange-600 to-red-600' }
                ].map((stat, index) => (
                  <div key={index} className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                      <stat.icon className="w-8 h-8 text-gray-400 mb-2" />
                      <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Browse by Category
            </h2>
            <p className="text-gray-400 text-lg">
              Select a category to explore specialized AI tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(CATEGORIES).map(([category, subcategories]) => {
              const config = categoryConfig[category]
              const count = categoryCounts[category] || 0
              const isHovered = hoveredCategory === category
              
              return (
                <div
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className="relative group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="relative h-full bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden hover:border-gray-700 transition-all duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient} opacity-30`} />
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id=%22grid2%22%20width=%2240%22%20height=%2240%22%20patternUnits=%22userSpaceOnUse%22%3E%3Cpath%20d=%22M%2040%200%20L%200%200%200%2040%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20fill=%22url(%23grid2)%22/%3E%3C/svg%3E')]" />
                    </div>
                    
                    <div className="relative p-8">
                      <div className="mb-6">
                        <div className={`inline-flex p-4 rounded-2xl ${config.iconBg} shadow-2xl transform transition-transform group-hover:scale-110`}>
                          <config.icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div className="mb-4">
                        <h3 className="text-2xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all">
                          {category}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className={`text-sm font-bold text-${config.accentColor}-400`}>
                            {count} tools available
                          </span>
                          <ArrowRight className={`w-4 h-4 text-${config.accentColor}-400 transform transition-transform group-hover:translate-x-1`} />
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                        {config.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {subcategories.slice(0, 3).map((subcat, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-gray-800/50 backdrop-blur border border-gray-700/50 text-xs font-semibold text-gray-300 rounded-full"
                          >
                            {subcat}
                          </span>
                        ))}
                        {subcategories.length > 3 && (
                          <span className="px-3 py-1.5 bg-gray-800/50 backdrop-blur border border-gray-700/50 text-xs font-semibold text-gray-400 rounded-full">
                            +{subcategories.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
        <section className="container mx-auto px-4 py-16 border-t border-gray-800">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Featured Tools
            </h2>
            <p className="text-gray-400 text-lg">
              Hand-picked tools recommended by our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allTools
              .filter(tool => tool.featured)
              .slice(0, 8)
              .map(tool => {
                const config = categoryConfig[tool.category]
                return (
                  <div key={tool.id} className="group">
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all">
                      <div className="flex items-start gap-4 mb-4">
                        <img 
                          src={getFaviconUrl(tool.url) || ''} 
                          alt={tool.name}
                          className="w-12 h-12 rounded-xl"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none'
                          }}
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-white mb-1">{tool.name}</h4>
                          <p className="text-xs text-gray-400">{tool.category}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                        {tool.description}
                      </p>
                      <div className="flex items-center justify-between">
                        {getPricingBadge(tool.pricing)}
                        <Link
                          href={`/tools/${tool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          Learn more →
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </section>
        </div>
      </>
    )
  }

  // Category view with tools
  const config = categoryConfig[selectedCategory] || categoryConfig['Code & Development']
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient}`}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id=%22grid%22%20width=%2260%22%20height=%2260%22%20patternUnits=%22userSpaceOnUse%22%3E%3Cpath%20d=%22M%2060%200%20L%200%200%200%2060%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%220.5%22%20opacity=%220.1%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20fill=%22url(%23grid)%22/%3E%3C/svg%3E')]" />
        </div>

        <div className="relative container mx-auto px-4 py-16">
          <div className="flex items-center gap-2 mb-8">
            <button
              onClick={handleBackToCategories}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl hover:border-gray-700 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="font-semibold">All Categories</span>
            </button>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <span className="font-semibold text-gray-400">{selectedCategory}</span>
          </div>

          <div className="max-w-4xl">
            <div className="flex items-center gap-6 mb-6">
              <div className={`p-5 rounded-2xl ${config.iconBg} shadow-2xl`}>
                <config.icon className="w-12 h-12 text-white" />
              </div>
              
              <div>
                <h1 className="text-5xl font-black mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {selectedCategory}
                </h1>
                <p className="text-xl text-gray-400">
                  {filteredTools.length} tools available
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-300 mb-8">
              {config.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES[selectedCategory as keyof typeof CATEGORIES]?.map((subcat, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 bg-gray-900/50 backdrop-blur border border-gray-800 text-sm font-semibold text-gray-300 rounded-xl hover:border-gray-700 hover:bg-gray-900/70 transition-all"
                >
                  {subcat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
            <div className="relative flex items-center bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl">
              <Search className="absolute left-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${selectedCategory} tools...`}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-12 pr-4 py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl font-bold hover:border-gray-700 transition-colors flex items-center gap-2"
          >
            <Filter className="w-5 h-5" />
            Filters
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-xl transition-all ${
                viewMode === 'grid' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25' 
                  : 'bg-gray-900/50 backdrop-blur border border-gray-800 hover:border-gray-700'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-xl transition-all ${
                viewMode === 'list' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25' 
                  : 'bg-gray-900/50 backdrop-blur border border-gray-800 hover:border-gray-700'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
        {showFilters && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 mb-8 bg-gray-900/30 backdrop-blur border border-gray-800 rounded-2xl">
            <div>
              <label className="font-bold text-sm mb-2 block text-gray-400">PRICING</label>
              <select 
                value={selectedPricing}
                onChange={(e) => {
                  setSelectedPricing(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white font-semibold focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="all">All Pricing</option>
                <option value="free">Free</option>
                <option value="freemium">Freemium</option>
                <option value="paid">Paid</option>
              </select>
            </div>
            
            <div>
              <label className="font-bold text-sm mb-2 block text-gray-400">SOURCE</label>
              <select 
                value={selectedSource}
                onChange={(e) => {
                  setSelectedSource(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white font-semibold focus:border-purple-500 focus:outline-none transition-colors"
              >
                {uniqueSources.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="font-bold text-sm mb-2 block text-gray-400">SORT BY</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white font-semibold focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest First</option>
                <option value="stars">Most Stars</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>
            
            <div>
              <label className="font-bold text-sm mb-2 block text-gray-400">PER PAGE</label>
              <select 
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value))
                  setCurrentPage(1)
                }}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white font-semibold focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="24">24</option>
                <option value="48">48</option>
                <option value="96">96</option>
              </select>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-gray-200">
            {filteredTools.length} Tools Found
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </div>
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
          </div>
        )}
        {!loading && (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
            : 'space-y-4'
          }>
            {paginatedTools.map(tool => {
              const faviconUrl = getFaviconUrl(tool.url)
              const rating = getRating(tool)
              
              return viewMode === 'grid' ? (
                // Grid View Card
                <div 
                  key={tool.id}
                  className="group relative bg-gray-900/30 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  {tool.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full flex items-center gap-1">
                        <Crown className="w-3 h-3" />
                        FEATURED
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        {faviconUrl ? (
                          <img 
                            src={faviconUrl} 
                            alt={tool.name}
                            className="w-14 h-14 rounded-xl bg-gray-800 p-2"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                              target.parentElement!.innerHTML = `
                                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                                  ${tool.name.charAt(0)}
                                </div>
                              `
                            }}
                          />
                        ) : (
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                            {tool.name.charAt(0)}
                          </div>
                        )}
                      </div>

                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white mb-1 line-clamp-1">
                          {tool.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < Math.floor(rating)
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                          <span className="text-xs text-gray-500 ml-1">
                            ({formatNumber(tool.upvotes || 0)})
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      {getPricingBadge(tool.pricing)}
                    </div>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                      {tool.description}
                    </p>
                    {tool.tags && tool.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {tool.tags.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-gray-800/50 px-2 py-1 rounded text-gray-400"
                          >
                            #{tag.toLowerCase().replace(/\s+/g, '')}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <Link
                        href={`/tools/${tool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        View Details
                      </Link>
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                // List View
                <div key={tool.id} className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all">
                  <div className="flex items-start gap-4">
                    <img 
                      src={getFaviconUrl(tool.url) || ''} 
                      alt={tool.name}
                      className="w-12 h-12 rounded-xl bg-gray-800 p-2 flex-shrink-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none'
                      }}
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                          <p className="text-sm text-gray-400 mt-1">{tool.description}</p>
                        </div>
                        {getPricingBadge(tool.pricing)}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
                        {tool.stars && (
                          <span className="flex items-center gap-1 text-gray-400">
                            <Star className="w-4 h-4 text-yellow-400" />
                            {formatNumber(tool.stars)} stars
                          </span>
                        )}
                        {tool.upvotes && (
                          <span className="flex items-center gap-1 text-gray-400">
                            <Users className="w-4 h-4 text-blue-400" />
                            {formatNumber(tool.upvotes)} users
                          </span>
                        )}
                        
                        <div className="ml-auto flex gap-2">
                          <Link
                            href={`/tools/${tool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            className="px-4 py-2 bg-gray-800/50 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                          >
                            Details
                          </Link>
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2"
                          >
                            Visit
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg font-semibold disabled:opacity-30 hover:border-gray-700 transition-colors"
            >
              First
            </button>
            
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg disabled:opacity-30 hover:border-gray-700 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              let pageNum = i + 1
              if (totalPages > 5) {
                if (currentPage > 3) {
                  pageNum = currentPage - 2 + i
                }
                if (currentPage > totalPages - 3) {
                  pageNum = totalPages - 4 + i
                }
              }
              
              if (pageNum > 0 && pageNum <= totalPages) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      currentPage === pageNum
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                        : 'bg-gray-900/50 backdrop-blur border border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              }
              return null
            })}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg disabled:opacity-30 hover:border-gray-700 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg font-semibold disabled:opacity-30 hover:border-gray-700 transition-colors"
            >
              Last
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

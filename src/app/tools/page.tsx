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

// Enhanced icon mapping with gradients - ONLY CORE CATEGORIES
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
  'Code & Development': {
    icon: Code,
    gradient: 'from-blue-600 via-cyan-500 to-teal-500',
    bgGradient: 'from-blue-900/20 via-cyan-900/20 to-teal-900/20',
    accentColor: 'blue',
    description: 'AI-powered code editors, IDEs, and code generation platforms for vibe coding',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  'Chatbots & Assistants': {
    icon: Bot,
    gradient: 'from-purple-600 via-violet-500 to-purple-500',
    bgGradient: 'from-purple-900/20 via-violet-900/20 to-purple-900/20',
    accentColor: 'violet',
    description: 'AI pair programmers, coding assistants, and intelligent code completion tools',
    iconBg: 'bg-gradient-to-br from-purple-500 to-violet-500'
  },
  'Productivity': {
    icon: Zap,
    gradient: 'from-yellow-600 via-amber-500 to-orange-500',
    bgGradient: 'from-yellow-900/20 via-amber-900/20 to-orange-900/20',
    accentColor: 'yellow',
    description: 'Development agents, workflow automation, and AI-powered DevOps tools',
    iconBg: 'bg-gradient-to-br from-yellow-500 to-amber-500'
  },
  'Security & Privacy': {
    icon: Shield,
    gradient: 'from-slate-600 via-gray-500 to-zinc-500',
    bgGradient: 'from-slate-900/20 via-gray-900/20 to-zinc-900/20',
    accentColor: 'slate',
    description: 'AI-powered code testing, vulnerability detection, and security analysis tools',
    iconBg: 'bg-gradient-to-br from-slate-500 to-gray-500'
  },
  'Data & Analytics': {
    icon: LineChart,
    gradient: 'from-indigo-600 via-blue-500 to-purple-500',
    bgGradient: 'from-indigo-900/20 via-blue-900/20 to-purple-900/20',
    accentColor: 'indigo',
    description: 'Code analytics, performance monitoring, and development metrics tools',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-500'
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
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  // Filter and sort tools
  const processedTools = useMemo(() => {
    let filtered = [...allTools]
    
    // Search
    if (searchQuery) {
      filtered = searchTools(filtered, searchQuery)
    }
    
    // Category filter
    if (selectedCategory) {
      filtered = filterByCategory(filtered, selectedCategory)
    }
    
    // Pricing filter
    if (selectedPricing !== 'all') {
      filtered = filterByPricing(filtered, selectedPricing as any)
    }
    
    // Source filter
    if (selectedSource !== 'All') {
      filtered = filterBySource(filtered, selectedSource)
    }
    
    // Sort
    filtered = sortTools(filtered, sortBy as any)
    
    return filtered
  }, [allTools, searchQuery, selectedCategory, selectedPricing, selectedSource, sortBy])

  // Pagination
  const paginatedTools = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    return processedTools.slice(start, end)
  }, [processedTools, currentPage, itemsPerPage])

  const totalPages = Math.ceil(processedTools.length / itemsPerPage)

  // Get unique sources
  const uniqueSources = useMemo(() => {
    const sources = new Set(allTools.map(tool => tool.source))
    return ['All', ...Array.from(sources)]
  }, [allTools])

  // Category stats
  const categoryStats = useMemo(() => {
    const stats: { [key: string]: number } = {}
    Object.keys(CATEGORIES).forEach(cat => {
      stats[cat] = filterByCategory(allTools, cat).length
    })
    return stats
  }, [allTools])

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('')
      router.push('/tools')
    } else {
      setSelectedCategory(category)
      router.push(`/tools?category=${encodeURIComponent(category)}`)
    }
    setCurrentPage(1)
  }

  const getPricingBadge = (pricing: string) => {
    const badges = {
      free: { text: 'Free', class: 'bg-green-500/20 text-green-400 border-green-500/30' },
      freemium: { text: 'Freemium', class: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
      paid: { text: 'Paid', class: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
      unknown: { text: 'Unknown', class: 'bg-gray-500/20 text-gray-400 border-gray-500/30' }
    }
    return badges[pricing as keyof typeof badges] || badges.unknown
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">50 Premium Vibe Coding Tools</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              AI Tools for Developers
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the best AI-powered coding tools, assistants, and development platforms. 
              Carefully curated for vibe coding and modern development workflows.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI coding tools..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 text-white placeholder-gray-400 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400">{allTools.length}</div>
                <div className="text-sm text-gray-400">Total Tools</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-purple-400">
                  {allTools.filter(t => t.featured).length}
                </div>
                <div className="text-sm text-gray-400">Featured</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-green-400">
                  {allTools.filter(t => t.pricing === 'free').length}
                </div>
                <div className="text-sm text-gray-400">Free Tools</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-blue-400">{Object.keys(CATEGORIES).length}</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Layers className="w-6 h-6 text-cyan-400" />
          Browse by Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(categoryConfig).map(([category, config]) => {
            const Icon = config.icon
            const isSelected = selectedCategory === category
            const count = categoryStats[category] || 0
            
            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`
                  relative group overflow-hidden rounded-2xl transition-all duration-300
                  ${isSelected 
                    ? 'ring-2 ring-cyan-500 scale-[1.02]' 
                    : 'hover:scale-[1.02]'
                  }
                `}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient} opacity-50`} />
                
                {/* Content */}
                <div className="relative p-6 flex items-start gap-4">
                  <div className={`
                    p-3 rounded-xl ${config.iconBg} 
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg text-white">{category}</h3>
                      <span className={`
                        px-2 py-1 rounded-full text-xs font-medium
                        bg-white/10 text-white
                      `}>
                        {count}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {config.description}
                    </p>
                  </div>
                  
                  <ChevronRight className={`
                    w-5 h-5 text-gray-400 transition-all duration-300
                    ${isSelected || hoveredCategory === category ? 'translate-x-1 text-white' : ''}
                  `} />
                </div>
                
                {/* Hover effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r ${config.gradient} opacity-0 
                  group-hover:opacity-10 transition-opacity duration-300
                `} />
              </button>
            )
          })}
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filters
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-cyan-500/50 text-white"
          >
            <option value="popular">Most Popular</option>
            <option value="recent">Recently Added</option>
            <option value="name">Name (A-Z)</option>
            <option value="stars">Most Stars</option>
          </select>

          <select
            value={selectedPricing}
            onChange={(e) => setSelectedPricing(e.target.value)}
            className="px-4 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-cyan-500/50 text-white"
          >
            <option value="all">All Pricing</option>
            <option value="free">Free</option>
            <option value="freemium">Freemium</option>
            <option value="paid">Paid</option>
          </select>

          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'hover:bg-white/10 text-gray-400'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'hover:bg-white/10 text-gray-400'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>

          <div className="text-sm text-gray-400">
            {processedTools.length} tools found
          </div>
        </div>

        {/* Advanced Filters (Expandable) */}
        {showFilters && (
          <div className="mb-8 p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Source</label>
                <select
                  value={selectedSource}
                  onChange={(e) => setSelectedSource(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-cyan-500/50 text-white"
                >
                  {uniqueSources.map(source => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Items per page</label>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value))
                    setCurrentPage(1)
                  }}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-cyan-500/50 text-white"
                >
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="48">48</option>
                  <option value="96">96</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('')
                    setSelectedPricing('all')
                    setSelectedSource('All')
                    setSortBy('popular')
                    setCurrentPage(1)
                    router.push('/tools')
                  }}
                  className="w-full px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tools Grid/List */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
          </div>
        ) : paginatedTools.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
              <Search className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No tools found</h3>
            <p className="text-gray-400">Try adjusting your filters or search query</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedTools.map((tool) => {
              const badge = getPricingBadge(tool.pricing)
              const categoryInfo = categoryConfig[tool.category] || {
                gradient: 'from-gray-600 to-gray-700',
                icon: Package
              }
              const Icon = categoryInfo.icon
              
              return (
                <div
                  key={tool.id}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  {tool.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
                        <Crown className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs font-medium text-yellow-400">Featured</span>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryInfo.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white mb-1 line-clamp-1">
                          {tool.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full border ${badge.class}`}>
                            {badge.text}
                          </span>
                          {tool.tags?.includes('🆕 NEW') && (
                            <span className="inline-flex px-2 py-0.5 text-xs font-medium rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                              New
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                      {tool.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center gap-3">
                        {tool.stars && (
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {formatNumber(tool.stars)}
                          </span>
                        )}
                        {tool.downloads && (
                          <span className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {formatNumber(tool.downloads)}
                          </span>
                        )}
                      </div>
                      <span className="text-gray-500">{tool.source}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 text-cyan-400 transition-all duration-300"
                      >
                        <Globe className="w-4 h-4" />
                        Visit Tool
                      </a>
                      <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <Bookmark className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <Share2 className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="space-y-4">
            {paginatedTools.map((tool) => {
              const badge = getPricingBadge(tool.pricing)
              const categoryInfo = categoryConfig[tool.category] || {
                gradient: 'from-gray-600 to-gray-700',
                icon: Package
              }
              const Icon = categoryInfo.icon
              
              return (
                <div
                  key={tool.id}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="p-6 flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryInfo.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-lg text-white mb-1">
                            {tool.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full border ${badge.class}`}>
                              {badge.text}
                            </span>
                            <span className="text-xs text-gray-500">{tool.category}</span>
                            {tool.featured && (
                              <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
                                <Crown className="w-3 h-3 text-yellow-400" />
                                <span className="text-xs font-medium text-yellow-400">Featured</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 text-cyan-400 transition-all duration-300"
                          >
                            <Globe className="w-4 h-4" />
                            Visit Tool
                          </a>
                          <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                            <Bookmark className="w-4 h-4 text-gray-400" />
                          </button>
                          <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                            <Share2 className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-300 mb-3">
                        {tool.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        {tool.stars && (
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {formatNumber(tool.stars)}
                          </span>
                        )}
                        {tool.downloads && (
                          <span className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {formatNumber(tool.downloads)}
                          </span>
                        )}
                        {tool.upvotes && (
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {formatNumber(tool.upvotes)}
                          </span>
                        )}
                        <span className="text-gray-500">Source: {tool.source}</span>
                        {tool.dateAdded && (
                          <span className="flex items-center gap-1 text-gray-500">
                            <Calendar className="w-3 h-3" />
                            {new Date(tool.dateAdded).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (currentPage <= 3) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = currentPage - 2 + i
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`
                      w-10 h-10 rounded-lg font-medium transition-all
                      ${currentPage === pageNum
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300'
                      }
                    `}
                  >
                    {pageNum}
                  </button>
                )
              })}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with New AI Tools
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get weekly updates on the latest AI coding tools and development platforms
          </p>
          <Link
            href="/subscribe"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Subscribe for Updates
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
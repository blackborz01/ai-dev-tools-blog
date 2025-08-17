'use client'

import { useState, useEffect, useMemo } from 'react'
import { 
  Search, Filter, Grid, List, Star, GitBranch, MessageSquare, 
  ExternalLink, ChevronRight, ChevronLeft, Loader2, Globe,
  Download, Calendar, Zap, Heart, Code, Brain, Image, 
  Mic, Video, BarChart, Bot, TrendingUp, GraduationCap,
  DollarSign, Activity, Gamepad2, Shield, FlaskConical,
  Home, Hash, Clock, Award, Sparkles, Rocket, Crown,
  CheckCircle, XCircle, Users, Building2, ArrowUpRight,
  Bookmark, Share2, Tag, Package, Cpu, Layers, Database
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

// Icon mapping for categories
const categoryIcons: { [key: string]: any } = {
  'Writing & Content': Brain,
  'Code & Development': Code,
  'Image & Design': Image,
  'Audio & Music': Mic,
  'Video & Animation': Video,
  'Productivity': Zap,
  'Data & Analytics': BarChart,
  'Chatbots & Assistants': Bot,
  'Marketing & Sales': TrendingUp,
  'Education & Learning': GraduationCap,
  'Business & Finance': DollarSign,
  'Healthcare & Fitness': Activity,
  'Gaming & Entertainment': Gamepad2,
  'Security & Privacy': Shield,
  'Research & Science': FlaskConical
}

export default function ToolsPage() {
  const [tools, setTools] = useState<AITool[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPricing, setSelectedPricing] = useState('all')
  const [selectedSource, setSelectedSource] = useState('All')
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(20)
  const [allTools, setAllTools] = useState<AITool[]>([])

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

  // Filter and sort tools
  const filteredTools = useMemo(() => {
    let result = [...allTools]
    
    if (searchQuery) {
      result = searchTools(result, searchQuery)
    }
    
    if (selectedCategory !== 'All') {
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

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value))
    setCurrentPage(1)
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
      free: 'bg-green-500 text-white',
      freemium: 'bg-blue-500 text-white', 
      paid: 'bg-orange-500 text-white',
      unknown: 'bg-gray-500 text-white'
    }
    
    return (
      <span className={`px-2 py-1 text-xs font-bold uppercase ${styles[pricing as keyof typeof styles] || styles.unknown}`}>
        {pricing}
      </span>
    )
  }

  // Generate favicon URL from domain
  const getFaviconUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/20 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-purple-900/10 text-gray-800 dark:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 border-b-4 border-black dark:border-white bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white font-black text-xs mb-6">
              <Database className="w-4 h-4" />
              COMPREHENSIVE DATABASE
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-black">
              AI TOOLS DATABASE
              <span className="block text-3xl md:text-4xl mt-2">
                {allTools.length.toLocaleString()}+ REAL TOOLS
              </span>
            </h1>
            
            <p className="text-xl mb-8 text-black font-bold">
              Discover, compare, and find the perfect AI tools for your needs.
              Live data • All categories • Updated daily
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/90 backdrop-blur border-4 border-black p-4">
                <div className="text-3xl font-black text-purple-600">{allTools.length.toLocaleString()}</div>
                <div className="text-xs font-mono text-black">TOTAL TOOLS</div>
              </div>
              <div className="bg-white/90 backdrop-blur border-4 border-black p-4">
                <div className="text-3xl font-black text-green-600">{allTools.filter(t => t.pricing === 'free').length}</div>
                <div className="text-xs font-mono text-black">FREE TOOLS</div>
              </div>
              <div className="bg-white/90 backdrop-blur border-4 border-black p-4">
                <div className="text-3xl font-black text-blue-600">{CATEGORIES.length}</div>
                <div className="text-xs font-mono text-black">CATEGORIES</div>
              </div>
              <div className="bg-white/90 backdrop-blur border-4 border-black p-4">
                <div className="text-3xl font-black text-orange-600">{uniqueSources.length - 1}</div>
                <div className="text-xs font-mono text-black">SOURCES</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rated Tools Section */}
      <section className="py-8 border-b-4 border-black dark:border-white bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="font-black text-xl mb-4 flex items-center gap-2">
            <Star className="w-5 h-5" />
            TOP RATED AI TOOLS
          </h2>
          <div className="flex flex-wrap gap-3">
            {allTools
              .sort((a, b) => (b.stars || 0) - (a.stars || 0))
              .slice(0, 5)
              .map(tool => (
                <div key={tool.id} className="flex items-center gap-2 bg-white dark:bg-black px-4 py-2 border-2 border-black dark:border-white">
                  <img 
                    src={getFaviconUrl(tool.url) || ''} 
                    alt={tool.name}
                    className="w-6 h-6"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                  <div>
                    <div className="font-black text-sm">{tool.name}</div>
                    <div className="text-xs opacity-60">⭐ {formatNumber(tool.stars || 0)} stars</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters Bar - ORIGINAL DESIGN */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
            <input
              type="text"
              placeholder="Search AI tools..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full pl-12 pr-4 py-3 border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white font-bold placeholder-gray-500"
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3 border-2 border-black dark:border-white font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-2"
          >
            <Filter className="w-5 h-5" />
            FILTERS
            <ChevronRight className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-90' : ''}`} />
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 border-2 border-black dark:border-white transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-black text-white dark:bg-white dark:text-black' 
                  : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 border-2 border-black dark:border-white transition-colors ${
                viewMode === 'list' 
                  ? 'bg-black text-white dark:bg-white dark:text-black' 
                  : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters Panel - ORIGINAL DESIGN */}
        {showFilters && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mb-8 border-2 border-black dark:border-white bg-gray-50 dark:bg-gray-900">
            <div>
              <label className="font-black text-sm mb-2 block">PRICING</label>
              <select 
                value={selectedPricing}
                onChange={(e) => {
                  setSelectedPricing(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full px-3 py-2 border-2 border-black dark:border-white bg-white dark:bg-black font-bold"
              >
                <option value="all">All Pricing</option>
                <option value="free">Free</option>
                <option value="freemium">Freemium</option>
                <option value="paid">Paid</option>
              </select>
            </div>
            
            <div>
              <label className="font-black text-sm mb-2 block">SOURCE</label>
              <select 
                value={selectedSource}
                onChange={(e) => {
                  setSelectedSource(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full px-3 py-2 border-2 border-black dark:border-white bg-white dark:bg-black font-bold"
              >
                {uniqueSources.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="font-black text-sm mb-2 block">SORT BY</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border-2 border-black dark:border-white bg-white dark:bg-black font-bold"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest First</option>
                <option value="stars">Most Stars</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>
            
            <div>
              <label className="font-black text-sm mb-2 block">PER PAGE</label>
              <select 
                value={itemsPerPage}
                onChange={(e) => handleItemsPerPageChange(e.target.value)}
                className="w-full px-3 py-2 border-2 border-black dark:border-white bg-white dark:bg-black font-bold"
              >
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Categories Sidebar - ORIGINAL DESIGN */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <h2 className="font-black text-xl mb-4 flex items-center gap-2">
              <Hash className="w-5 h-5" />
              CATEGORIES
            </h2>
            <div className="space-y-2">
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setCurrentPage(1)
                }}
                className={`w-full px-4 py-3 border-2 font-bold text-left transition-colors flex items-center justify-between ${
                  selectedCategory === 'All'
                    ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white'
                    : 'border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                }`}
              >
                <span>All Tools</span>
                <span className="text-sm">({allTools.length})</span>
              </button>
              
              {Object.keys(CATEGORIES).map(category => {
                const Icon = categoryIcons[category] || Zap
                const count = categoryCounts[category] || 0
                
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setCurrentPage(1)
                    }}
                    className={`w-full px-4 py-3 border-2 font-bold text-left transition-colors flex items-center gap-2 ${
                      selectedCategory === category
                        ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white'
                        : 'border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="flex-1">{category}</span>
                    <span className="text-sm">({count})</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header - ORIGINAL DESIGN */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black">
                {selectedCategory === 'All' ? 'ALL TOOLS' : selectedCategory.toUpperCase()}
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold opacity-70">
                  {filteredTools.length} tools • Page {currentPage} of {totalPages}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">Show:</span>
                  <select 
                    value={itemsPerPage}
                    onChange={(e) => handleItemsPerPageChange(e.target.value)}
                    className="px-3 py-1 border-2 border-black dark:border-white bg-white dark:bg-black font-bold"
                  >
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-1 border-2 border-black dark:border-white disabled:opacity-30 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="px-3 py-1 border-2 border-black dark:border-white font-bold">
                    {currentPage} / {totalPages}
                  </span>
                  <button
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-1 border-2 border-black dark:border-white disabled:opacity-30 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            )}

            {/* Tools Grid/List - ONLY THIS PART IS UPDATED */}
            {!loading && (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-4'
              }>
                {paginatedTools.map(tool => {
                  const Icon = categoryIcons[tool.category] || Zap
                  const faviconUrl = getFaviconUrl(tool.url)
                  const rating = getRating(tool)
                  
                  return viewMode === 'grid' ? (
                    // UPDATED GRID VIEW CARD - Enhanced with more info
                    <div 
                      key={tool.id}
                      className="group border-2 border-black dark:border-white bg-white dark:bg-black rounded-xl overflow-hidden hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all"
                    >
                      {/* Featured Badge */}
                      {tool.featured && (
                        <div className="bg-yellow-400 text-black px-3 py-1 text-xs font-bold flex items-center gap-1 justify-center">
                          <Crown className="w-3 h-3" />
                          FEATURED TOOL
                        </div>
                      )}
                      
                      <div className="p-5">
                        {/* Header with Favicon and Title */}
                        <div className="flex items-start gap-3 mb-3">
                          {/* Favicon */}
                          <div className="flex-shrink-0">
                            {faviconUrl ? (
                              <img 
                                src={faviconUrl} 
                                alt={tool.name}
                                className="w-14 h-14 rounded-lg object-cover bg-gray-100 p-1"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.style.display = 'none'
                                  target.parentElement!.innerHTML = `
                                    <div class="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                                      ${tool.name.charAt(0)}
                                    </div>
                                  `
                                }}
                              />
                            ) : (
                              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                                {tool.name.charAt(0)}
                              </div>
                            )}
                          </div>

                          {/* Title, Category and Rating */}
                          <div className="flex-1">
                            <h3 className="font-black text-lg leading-tight flex items-center gap-1">
                              {tool.name}
                              {tool.featured && (
                                <CheckCircle className="w-4 h-4 text-blue-500" title="Verified" />
                              )}
                            </h3>
                            {/* Category */}
                            <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                              {tool.category}
                            </p>
                            {/* Star Rating */}
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3.5 h-3.5 ${
                                    i < Math.floor(rating)
                                      ? 'text-yellow-400 fill-yellow-400'
                                      : 'text-gray-300 dark:text-gray-600'
                                  }`}
                                />
                              ))}
                              <span className="text-xs text-gray-500 ml-1 font-semibold">
                                ({tool.upvotes || 0} reviews)
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Pricing Badge */}
                        <div className="flex items-center gap-2 mb-3">
                          {getPricingBadge(tool.pricing)}
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            Added {new Date(tool.dateAdded).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-3 leading-relaxed">
                          {tool.description}
                        </p>

                        {/* Metrics Bar */}
                        <div className="flex items-center gap-3 mb-3 text-xs font-semibold">
                          {tool.downloads && tool.downloads > 0 && (
                            <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                              <Download className="w-3.5 h-3.5 text-green-500" />
                              {formatNumber(tool.downloads)} downloads
                            </span>
                          )}
                          {tool.upvotes && tool.upvotes > 100 && (
                            <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                              <Users className="w-3.5 h-3.5 text-blue-500" />
                              {formatNumber(tool.upvotes)} users
                            </span>
                          )}
                          {tool.stars && tool.stars > 0 && (
                            <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                              <GitBranch className="w-3.5 h-3.5 text-purple-500" />
                              {formatNumber(tool.stars)} GitHub stars
                            </span>
                          )}
                        </div>

                        {/* Tags */}
                        {tool.tags && tool.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-4">
                            {tool.tags.slice(0, 4).map((tag, index) => (
                              <span 
                                key={index}
                                className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-700 dark:text-gray-300"
                              >
                                #{tag.toLowerCase().replace(/\s+/g, '')}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Call to Action Section */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
                              {tool.source || 'AI Directory'}
                            </span>
                            <div className="flex gap-2">
                              <button 
                                className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" 
                                title="Save for later"
                              >
                                <Bookmark className="w-4 h-4 text-gray-500" />
                              </button>
                              <button 
                                className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" 
                                title="Share"
                              >
                                <Share2 className="w-4 h-4 text-gray-500" />
                              </button>
                            </div>
                          </div>
                          
                          {/* Main CTA Button */}
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-bold text-center flex items-center justify-center gap-2 transition-all group-hover:shadow-lg"
                          >
                            <Globe className="w-4 h-4" />
                            VISIT WEBSITE
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                          
                          {/* Secondary Link if available */}
                          {tool.sourceUrl && tool.sourceUrl !== tool.url && (
                            <a
                              href={tool.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full mt-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                              View Details
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // List View - Keep original style
                    <div key={tool.id} className="border-2 border-black dark:border-white bg-white dark:bg-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                      <div className="flex items-start gap-4">
                        <Icon className="w-6 h-6 flex-shrink-0 mt-1" />
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-black">{tool.name}</h3>
                              <p className="text-sm opacity-70">{tool.description}</p>
                            </div>
                            {getPricingBadge(tool.pricing)}
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <span className="font-bold">{tool.category}</span>
                            
                            {/* Real Metrics */}
                            {tool.stars && (
                              <span className="flex items-center gap-1">
                                <Star className="w-4 h-4" />
                                {tool.stars.toLocaleString()} stars
                              </span>
                            )}
                            {tool.upvotes && (
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                {tool.upvotes} votes
                              </span>
                            )}
                            {tool.downloads && (
                              <span className="flex items-center gap-1">
                                <Download className="w-4 h-4" />
                                {tool.downloads.toLocaleString()}
                              </span>
                            )}
                            
                            <div className="ml-auto flex gap-2">
                              <a
                                href={tool.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-1 bg-black dark:bg-white text-white dark:text-black font-black hover:bg-lime-400 hover:text-black transition-colors flex items-center gap-2"
                              >
                                <Globe className="w-4 h-4" />
                                VISIT
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

            {/* Bottom Pagination - ORIGINAL DESIGN */}
            {!loading && totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 border-2 border-black dark:border-white font-bold disabled:opacity-30 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  First
                </button>
                
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 border-2 border-black dark:border-white disabled:opacity-30 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                {/* Page numbers */}
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
                        className={`px-3 py-2 border-2 font-bold transition-colors ${
                          currentPage === pageNum
                            ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white'
                            : 'border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
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
                  className="p-2 border-2 border-black dark:border-white disabled:opacity-30 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 border-2 border-black dark:border-white font-bold disabled:opacity-30 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  Last
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

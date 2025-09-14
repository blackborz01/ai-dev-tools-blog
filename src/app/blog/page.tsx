'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Search, TrendingUp, Calendar, Clock, Eye, Code, Shield, BarChart,
  ChevronRight, ChevronLeft, Loader2, FileText, User, MessageCircle,
  Sparkles, X, Star, Share2, Bookmark, Brain, Cloud, Cpu, ArrowRight,
  Hash, Globe, GitBranch, Bug, Activity, Rocket, Zap, DollarSign, Wrench
} from 'lucide-react'
import { articles } from '@/lib/articles'
import Navbar from '@/components/Navbar'

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
  'API': {
    icon: Cloud,
    gradient: 'from-blue-600 via-cyan-500 to-teal-500',
    bgGradient: 'from-blue-900/20 via-cyan-900/20 to-teal-900/20',
    accentColor: 'blue',
    description: 'Deep dives into AI APIs, integration guides, and development workflows',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  'ANALYSIS': {
    icon: Brain,
    gradient: 'from-purple-600 via-violet-500 to-purple-500',
    bgGradient: 'from-purple-900/20 via-violet-900/20 to-purple-900/20',
    accentColor: 'violet',
    description: 'Tool comparisons, performance benchmarks, and in-depth reviews',
    iconBg: 'bg-gradient-to-br from-purple-500 to-violet-500'
  },
  'SECURITY': {
    icon: Shield,
    gradient: 'from-red-600 via-orange-500 to-yellow-500',
    bgGradient: 'from-red-900/20 via-orange-900/20 to-yellow-900/20',
    accentColor: 'red',
    description: 'AI security best practices, threat analysis, and protection strategies',
    iconBg: 'bg-gradient-to-br from-red-500 to-orange-500'
  },
  'TROUBLESHOOTING': {
    icon: Bug,
    gradient: 'from-slate-600 via-gray-500 to-zinc-500',
    bgGradient: 'from-slate-900/20 via-gray-900/20 to-zinc-900/20',
    accentColor: 'slate',
    description: 'Fix common issues, error solutions, and debugging guides',
    iconBg: 'bg-gradient-to-br from-slate-500 to-gray-500'
  },
  'PERFORMANCE': {
    icon: Activity,
    gradient: 'from-green-600 via-emerald-500 to-teal-500',
    bgGradient: 'from-green-900/20 via-emerald-900/20 to-teal-900/20',
    accentColor: 'green',
    description: 'Speed optimization, memory management, and performance tuning',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500'
  },
  'DEPLOYMENT': {
    icon: Rocket,
    gradient: 'from-orange-600 via-red-500 to-pink-500',
    bgGradient: 'from-orange-900/20 via-red-900/20 to-pink-900/20',
    accentColor: 'orange',
    description: 'Deployment strategies, CI/CD pipelines, and production best practices',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-500'
  },
  'AUTOMATION': {
    icon: Zap,
    gradient: 'from-yellow-600 via-amber-500 to-orange-500',
    bgGradient: 'from-yellow-900/20 via-amber-900/20 to-orange-900/20',
    accentColor: 'yellow',
    description: 'Workflow automation, AI agents, and productivity tools',
    iconBg: 'bg-gradient-to-br from-yellow-500 to-amber-500'
  },
  'PRICING': {
    icon: DollarSign,
    gradient: 'from-emerald-600 via-green-500 to-teal-500',
    bgGradient: 'from-emerald-900/20 via-green-900/20 to-teal-900/20',
    accentColor: 'emerald',
    description: 'Cost analysis, pricing comparisons, and budget optimization',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-green-500'
  },
  'TOOLS': {
    icon: Wrench,
    gradient: 'from-cyan-600 via-blue-500 to-indigo-500',
    bgGradient: 'from-cyan-900/20 via-blue-900/20 to-indigo-900/20',
    accentColor: 'cyan',
    description: 'Developer tools, IDE extensions, and productivity software',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500'
  },
  'PRODUCTIVITY': {
    icon: TrendingUp,
    gradient: 'from-purple-600 via-pink-500 to-rose-500',
    bgGradient: 'from-purple-900/20 via-pink-900/20 to-rose-900/20',
    accentColor: 'purple',
    description: 'Flow state, work optimization, and developer productivity strategies',
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500'
  }
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [loading] = useState(false)

  // Hide duplicate articles
  const duplicateSlugs = ['ai-security-vulnerabilities-hidden-crisis']
  const visibleArticles = articles.filter(a => !duplicateSlugs.includes(a.slug))
  
  // Sort articles by publish date (newest first)
  const sortedArticles = [...visibleArticles].sort((a, b) => {
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  })

  const featuredArticles = sortedArticles.filter(a => a.featured)
  
  const processedArticles = useMemo(() => {
    let filtered = [...sortedArticles]
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }
    
    // Apply category filter (case-insensitive)
    if (selectedCategory) {
      filtered = filtered.filter(article =>
        article.category && article.category.toUpperCase() === selectedCategory.toUpperCase()
      )
    }
    
    return filtered
  }, [searchQuery, selectedCategory, sortedArticles])

  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    return processedArticles.slice(start, end)
  }, [processedArticles, currentPage, itemsPerPage])

  const totalPages = Math.ceil(processedArticles.length / itemsPerPage)

  const categoryStats = useMemo(() => {
    const stats: { [key: string]: number } = {}
    Object.keys(categoryConfig).forEach(cat => {
      // Case-insensitive matching to handle both "PERFORMANCE" and "Performance"
      stats[cat] = sortedArticles.filter(article =>
        article.category && article.category.toUpperCase() === cat.toUpperCase()
      ).length
    })
    return stats
  }, [sortedArticles])

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('')
    } else {
      setSelectedCategory(category)
    }
    setCurrentPage(1)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${Math.floor(num / 100000) / 10}M`
    if (num >= 1000) {
      const thousands = Math.floor(num / 100) / 10
      if (thousands === Math.floor(thousands)) {
        return `${Math.floor(thousands)}K`
      }
      return `${thousands}K`
    }
    return Math.floor(num).toString()
  }

  return (
    <>
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
                <span className="text-sm font-medium text-purple-300">AI Development Insights</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Dev Blog
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Cutting-edge insights on AI tools, MCP servers, and development 
                workflows. No fluff, just actionable intelligence.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
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
                  <div className="text-3xl font-bold text-cyan-400">{sortedArticles.length}</div>
                  <div className="text-sm text-gray-400">Articles</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-purple-400">
                    <TrendingUp className="w-8 h-8 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-400">Updated Daily</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-green-400">47K+</div>
                  <div className="text-sm text-gray-400">Readers</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-blue-400">{Object.keys(categoryConfig).length}</div>
                  <div className="text-sm text-gray-400">Categories</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Hash className="w-6 h-6 text-cyan-400" />
            Browse by Category
          </h2>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {Object.entries(categoryConfig).map(([category, config]) => {
              const Icon = config.icon
              const isSelected = selectedCategory === category
              const count = categoryStats[category] || 0
              
              if (count === 0) return null
              
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300
                    ${isSelected 
                      ? 'bg-gradient-to-r ' + config.gradient + ' text-white shadow-lg scale-105' 
                      : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-semibold text-sm">{category}</span>
                  <span className={`
                    px-2 py-0.5 rounded-full text-xs font-medium
                    ${isSelected ? 'bg-white/20' : 'bg-white/10'}
                  `}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Featured Articles Carousel */}
          {featuredArticles.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                Featured Articles
              </h2>
              
              <div className="relative">
                <div className="overflow-hidden rounded-xl">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${carouselIndex * (100 / 3)}%)` }}
                  >
                    {featuredArticles.map((article) => (
                      <div key={article.slug} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2">
                        <article className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 h-full hover:border-cyan-500/30 transition-all">
                          <div className="flex flex-col h-full">
                            <div className="flex items-start justify-between mb-4">
                              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-xs font-medium text-cyan-400 border border-cyan-500/30">
                                {article.category}
                              </span>
                              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                              {article.title}
                            </h3>
                            
                            <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                              {article.excerpt}
                            </p>
                            
                            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {article.readTime} min
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {formatNumber(Math.floor(Math.random() * 50000) + 10000)}
                              </span>
                            </div>
                            
                            <Link 
                              href={`/blog/${article.slug}`}
                              className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 text-cyan-400 transition-all"
                            >
                              Read Article →
                            </Link>
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => setCarouselIndex(prev => Math.max(0, prev - 1))}
                  disabled={carouselIndex === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={() => setCarouselIndex(prev => Math.min(Math.max(0, featuredArticles.length - 3), prev + 1))}
                  disabled={carouselIndex >= Math.max(0, featuredArticles.length - 3)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
                
                <div className="flex justify-center gap-2 mt-4">
                  {Array.from({ length: Math.max(1, featuredArticles.length - 2) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCarouselIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === carouselIndex 
                          ? 'w-8 bg-cyan-400' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-center text-gray-400 mt-6">
                Click on a category above to explore all {sortedArticles.length} articles
              </p>
            </div>
          )}

          {/* All Articles Grid */}
          {(
            loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
              </div>
            ) : paginatedArticles.length === 0 ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
                  <Search className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedArticles.map((article) => {
                  const categoryInfo = categoryConfig[article.category] || {
                    gradient: 'from-gray-600 to-gray-700',
                    icon: FileText,
                    iconBg: 'bg-gradient-to-br from-gray-500 to-gray-600'
                  }
                  const Icon = categoryInfo.icon
                  
                  return (
                    <article
                      key={article.slug}
                      className="group relative bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10"
                    >
                      {article.featured && (
                        <div className="absolute top-4 right-4 z-10">
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        </div>
                      )}
                      
                      {/* Thumbnail */}
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                        <Image
                          src={article.thumbnail}
                          alt={article.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      <div className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 rounded-xl ${categoryInfo.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-white mb-1 line-clamp-2">
                              {article.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="inline-flex px-2 py-0.5 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                {article.category}
                              </span>
                              <span className="text-xs text-gray-400">{article.readTime} min</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {formatNumber(Math.floor(Math.random() * 50000) + 10000)}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="w-3 h-3" />
                              {Math.floor(Math.random() * 100) + 10}
                            </span>
                          </div>
                          <span>{formatDate(article.publishDate)}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Link
                            href={`/blog/${article.slug}`}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 text-cyan-400 transition-all duration-300"
                          >
                            Read Article
                          </Link>
                          <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                            <Bookmark className="w-4 h-4 text-gray-400" />
                          </button>
                          <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                            <Share2 className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            )
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
              Stay Updated with AI Development Insights
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get weekly updates on the latest AI tools, development practices, and vibe coding techniques
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
    </>
  )
}
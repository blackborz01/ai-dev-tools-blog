'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, Search, Filter, Calendar, Clock, 
  TrendingUp, ChevronRight, AlertCircle, Terminal,
  FileText, Tag, User, BarChart, Sparkles, Zap,
  Code, Brain, Shield, Cpu, Rocket, Star, Eye,
  MessageCircle, Bookmark, Share2, ArrowUpRight,
  Flame, Award, CheckCircle, Activity, Globe,
  PenTool, Database, GitBranch, Bug, Lock, Cloud
} from 'lucide-react'
import { articles } from '@/lib/articles'
import SearchBar from '@/components/SearchBar'
import Navbar from '@/components/Navbar'

// Category configuration with icons and colors
const categoryConfig: { [key: string]: { icon: any, gradient: string, bgColor: string, borderColor: string } } = {
  'API': {
    icon: Cloud,
    gradient: 'from-blue-600 to-cyan-500',
    bgColor: 'bg-blue-500',
    borderColor: 'border-blue-500'
  },
  'MCP GUIDE': {
    icon: Cpu,
    gradient: 'from-purple-600 to-pink-500',
    bgColor: 'bg-purple-500',
    borderColor: 'border-purple-500'
  },
  'COMPARISON': {
    icon: GitBranch,
    gradient: 'from-orange-600 to-red-500',
    bgColor: 'bg-orange-500',
    borderColor: 'border-orange-500'
  },
  'TUTORIAL': {
    icon: Code,
    gradient: 'from-green-600 to-emerald-500',
    bgColor: 'bg-green-500',
    borderColor: 'border-green-500'
  },
  'NEWS': {
    icon: Globe,
    gradient: 'from-indigo-600 to-purple-500',
    bgColor: 'bg-indigo-500',
    borderColor: 'border-indigo-500'
  },
  'ANALYSIS': {
    icon: Brain,
    gradient: 'from-pink-600 to-rose-500',
    bgColor: 'bg-pink-500',
    borderColor: 'border-pink-500'
  },
  'SECURITY': {
    icon: Shield,
    gradient: 'from-red-600 to-orange-500',
    bgColor: 'bg-red-500',
    borderColor: 'border-red-500'
  },
  'DEBUGGING': {
    icon: Bug,
    gradient: 'from-yellow-600 to-amber-500',
    bgColor: 'bg-yellow-500',
    borderColor: 'border-yellow-500'
  }
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Hide duplicate articles
  const duplicateSlugs = ['ai-security-vulnerabilities-hidden-crisis']
  const visibleArticles = articles.filter(a => !duplicateSlugs.includes(a.slug))
  
  // Sort articles by publish date (newest first)
  const sortedArticles = [...visibleArticles].sort((a, b) => {
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  })

  // Filter articles
  const filteredArticles = useMemo(() => {
    let result = sortedArticles
    
    if (selectedCategory !== 'ALL') {
      result = result.filter(article => article.category === selectedCategory)
    }
    
    if (searchQuery) {
      result = result.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }
    
    return result
  }, [sortedArticles, selectedCategory, searchQuery])

  // Get categories with counts
  const categories = [
    { name: "ALL", count: visibleArticles.length },
    ...Object.keys(categoryConfig).map(cat => ({
      name: cat,
      count: visibleArticles.filter(a => a.category === cat).length
    }))
  ].filter(cat => cat.count > 0)

  // Get featured articles
  const featuredArticles = sortedArticles.filter(a => a.featured).slice(0, 3)
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-800 mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id=%22grid%22%20width=%2260%22%20height=%2260%22%20patternUnits=%22userSpaceOnUse%22%3E%3Cpath%20d=%22M%2060%200%20L%200%200%200%2060%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%220.5%22%20opacity=%220.1%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20fill=%22url(%23grid)%22/%3E%3C/svg%3E')]" />
        </div>

        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/30 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-bold text-purple-300">AI DEVELOPMENT INSIGHTS</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Dev Blog
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl">
              Cutting-edge insights on AI tools, MCP servers, and development workflows. 
              No fluff, just actionable intelligence.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur border border-gray-700 rounded-lg">
                <FileText className="w-4 h-4 text-purple-400" />
                <span className="font-bold">{sortedArticles.length} Articles</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur border border-gray-700 rounded-lg">
                <Activity className="w-4 h-4 text-green-400" />
                <span className="font-bold">Updated Daily</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur border border-gray-700 rounded-lg">
                <Eye className="w-4 h-4 text-blue-400" />
                <span className="font-bold">47K+ Readers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="sticky top-16 z-40 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-3 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-gray-800/50 border border-gray-700 hover:border-gray-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="7" strokeWidth="2"/>
                  <rect x="3" y="14" width="7" height="7" strokeWidth="2"/>
                  <rect x="14" y="14" width="7" height="7" strokeWidth="2"/>
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-3 rounded-lg transition-all ${
                  viewMode === 'list' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-gray-800/50 border border-gray-700 hover:border-gray-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2"/>
                  <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2"/>
                  <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((cat) => {
              const config = categoryConfig[cat.name] || {}
              const Icon = config.icon
              
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${
                    selectedCategory === cat.name
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-gray-800/50 border border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {cat.name}
                  <span className="px-2 py-0.5 bg-black/30 rounded-full text-xs">
                    {cat.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles (only if ALL category selected) */}
      {selectedCategory === 'ALL' && featuredArticles.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-8">
            <Flame className="w-6 h-6 text-orange-500" />
            <h2 className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Featured Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => {
              const config = categoryConfig[article.category] || categoryConfig['TUTORIAL']
              const Icon = config.icon
              
              return (
                <Link href={`/blog/${article.slug}`} key={article.slug}>
                  <article className="group relative h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
                    <div className="absolute top-4 left-4 z-10">
                      <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        FEATURED
                      </div>
                    </div>

                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-80`} />
                      <Image
                        src={article.thumbnail}
                        alt={article.imageAlt}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 ${config.bgColor} text-white text-xs font-bold rounded-full flex items-center gap-1`}>
                          {Icon && <Icon className="w-3 h-3" />}
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-400">
                          {formatDate(article.publishDate)}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                        {article.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime} min
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {(index + 1) * 17}K views
                          </span>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* Main Articles Grid/List */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-gray-200">
            {selectedCategory === 'ALL' ? 'All Articles' : selectedCategory}
          </h2>
          <span className="text-sm text-gray-400">
            {filteredArticles.length} articles found
          </span>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => {
              const config = categoryConfig[article.category] || categoryConfig['TUTORIAL']
              const Icon = config.icon
              const isNew = new Date(article.publishDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
              
              return (
                <Link href={`/blog/${article.slug}`} key={article.slug}>
                  <article className="group relative h-full bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-0.5">
                    {isNew && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded text-xs font-bold">
                          NEW
                        </div>
                      </div>
                    )}

                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-60`} />
                      <Image
                        src={article.thumbnail}
                        alt={article.imageAlt}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover mix-blend-overlay opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                      
                      <div className="absolute bottom-4 left-4">
                        <span className={`px-3 py-1.5 ${config.bgColor} text-white text-xs font-bold rounded-lg flex items-center gap-1.5 backdrop-blur`}>
                          {Icon && <Icon className="w-3.5 h-3.5" />}
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(article.publishDate)}</span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime} min read</span>
                      </div>

                      <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                        {article.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                        <div className="flex flex-wrap gap-1">
                          {article.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-800/50 text-xs text-gray-400 rounded">
                              #{tag.toLowerCase().replace(/\s+/g, '')}
                            </span>
                          ))}
                        </div>
                        <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredArticles.map((article) => {
              const config = categoryConfig[article.category] || categoryConfig['TUTORIAL']
              const Icon = config.icon
              
              return (
                <Link href={`/blog/${article.slug}`} key={article.slug}>
                  <article className="group bg-gray-900/30 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:shadow-xl hover:shadow-purple-500/10">
                    <div className="flex gap-6">
                      <div className="relative w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-60`} />
                        <Image
                          src={article.thumbnail}
                          alt={article.imageAlt}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover mix-blend-overlay"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 ${config.bgColor} text-white text-xs font-bold rounded-full flex items-center gap-1`}>
                            {Icon && <Icon className="w-3 h-3" />}
                            {article.category}
                          </span>
                          {article.featured && (
                            <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              FEATURED
                            </span>
                          )}
                          <span className="text-xs text-gray-500">
                            {formatDate(article.publishDate)}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                          {article.title}
                        </h3>

                        <p className="text-gray-400 mb-3">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime} min
                            </span>
                            <span className="flex items-center gap-1">
                              <BarChart className="w-3 h-3" />
                              {article.wordCount} words
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {article.author.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                              <Bookmark className="w-4 h-4 text-gray-400" />
                            </button>
                            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                              <Share2 className="w-4 h-4 text-gray-400" />
                            </button>
                            <ArrowUpRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        )}

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800 rounded-full mb-4">
              <Search className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">No articles found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="relative overflow-hidden border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Stay Ahead of the Curve
            </h3>
            
            <p className="text-gray-400 mb-8 text-lg">
              Get weekly insights on AI development, tools, and best practices. 
              Join 47,000+ developers.
            </p>
            
            <div className="flex max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

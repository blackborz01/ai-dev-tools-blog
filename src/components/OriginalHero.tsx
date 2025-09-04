'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Boxes, Database, Activity, BarChart3, Search, ChevronRight, Sparkles, ArrowRight, Zap } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import NeuralNetworkAnimation from './NeuralNetworkAnimation'
import { useDataStats, useAnimatedCount } from '@/hooks/useDataStats'

// Type definitions for search results
interface SearchAPIResult {
  id: string
  type: 'tool' | 'mcp' | 'api'
  name: string
  title: string
  description: string
  excerpt: string
  url: string
  category: string
  icon?: string
  score: number
  metadata?: {
    provider?: string
    status?: string
    pricing?: string
    features?: string[]
    tags?: string[]
  }
}

interface SearchResult {
  id: string
  name: string
  category: string
  type: 'tool' | 'mcp' | 'api'
  url: string
  icon: string
  description?: string
  tags?: string[]
}

export default function OriginalHero() {
  // Reserve space to prevent layout shift
  const heroMinHeight = 'min-h-[600px] md:min-h-[700px] lg:min-h-[800px]'
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [showCategories, setShowCategories] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const searchRef = useRef<HTMLDivElement>(null)
  
  // Use dynamic stats from the data
  const { stats, loading } = useDataStats(60000) // Refresh every minute
  
  // Animated counters for visual appeal
  const toolsCount = useAnimatedCount(stats?.aiTools.total || 0, 2500)
  const mcpCount = useAnimatedCount(stats?.mcpServers.total || 0, 2000)
  const apisCount = useAnimatedCount(stats?.apis.total || 0, 2000)
  const dailyUpdates = useAnimatedCount(12, 1500) // Static daily updates
  
  // Debounce timer ref
  const debounceTimer = useRef<NodeJS.Timeout>()
  const [isSearching, setIsSearching] = useState(false)
  
  // Handle search input with API call
  useEffect(() => {
    if (searchQuery.length > 1) {
      // Clear previous timer
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
      
      // Set loading state
      setIsSearching(true)
      
      // Debounce search
      debounceTimer.current = setTimeout(async () => {
        try {
          // Map category to API type parameter
          let typeParam = ''
          if (selectedCategory === 'Tools') typeParam = '&type=tool'
          else if (selectedCategory === 'MCP Servers') typeParam = '&type=mcp'
          else if (selectedCategory === 'APIs') typeParam = '&type=api'
          
          const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&limit=12${typeParam}`)
          const data = await response.json()
          
          if (data.success && data.results) {
            // Convert API results to component format
            const formattedResults: SearchResult[] = data.results.map((result: SearchAPIResult) => ({
              id: result.id || `${result.type}-${result.name}`,
              name: result.name || result.title,
              category: result.category,
              type: result.type,
              url: result.url,
              icon: result.icon || getIconForType(result.type, result.category),
              description: result.description || result.excerpt,
              tags: result.metadata?.tags || []
            }))
            
            console.log('Search results:', formattedResults) // Debug log
            setSearchResults(formattedResults)
            setShowResults(true)
            setSelectedIndex(-1)
          } else {
            console.log('No results or unsuccessful search:', data) // Debug log
            setSearchResults([])
            setShowResults(false)
          }
        } catch (error) {
          console.error('Search error:', error)
          setSearchResults([])
        } finally {
          setIsSearching(false)
        }
      }, 300) // 300ms debounce
    } else {
      setSearchResults([])
      setShowResults(false)
      setIsSearching(false)
    }
    
    // Cleanup
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
    }
  }, [searchQuery, selectedCategory])
  
  // Helper function to get icon based on type
  const getIconForType = (type: string, category: string): string => {
    if (type === 'mcp') return '🔌'
    if (type === 'api') return '🔗'
    
    // For tools, use category-based icons
    const categoryLower = category.toLowerCase()
    if (categoryLower.includes('code') || categoryLower.includes('coding') || categoryLower.includes('development')) return '💻'
    if (categoryLower.includes('image') || categoryLower.includes('photo')) return '🎨'
    if (categoryLower.includes('video') || categoryLower.includes('animation')) return '🎬'
    if (categoryLower.includes('voice') || categoryLower.includes('audio') || categoryLower.includes('speech')) return '🎙️'
    if (categoryLower.includes('writing') || categoryLower.includes('text') || categoryLower.includes('content')) return '✍️'
    if (categoryLower.includes('chat') || categoryLower.includes('conversation')) return '💬'
    if (categoryLower.includes('data') || categoryLower.includes('analytics')) return '📊'
    if (categoryLower.includes('ml') || categoryLower.includes('machine learning')) return '🤖'
    if (categoryLower.includes('design')) return '🎨'
    if (categoryLower.includes('productivity')) return '⚡'
    if (categoryLower.includes('search')) return '🔍'
    if (categoryLower.includes('finance')) return '💰'
    if (categoryLower.includes('education')) return '🎓'
    
    return '🔧' // Default tool icon
  }
  
  // Handle click outside and keyboard shortcuts
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
        setShowCategories(false)
      }
    }
    
    // Handle Cmd+K or Ctrl+K to focus search
    const handleKeyboardShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        const searchInput = searchRef.current?.querySelector('input')
        searchInput?.focus()
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyboardShortcut)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyboardShortcut)
    }
  }, [])
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showResults || searchResults.length === 0) return
    
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => (prev + 1) % searchResults.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => prev <= 0 ? searchResults.length - 1 : prev - 1)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (selectedIndex >= 0) {
        router.push(searchResults[selectedIndex].url)
      } else if (searchQuery) {
        // General search
        router.push(`/tools?search=${encodeURIComponent(searchQuery)}`)
      }
    } else if (e.key === 'Escape') {
      setShowResults(false)
      setSelectedIndex(-1)
    }
  }
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery && searchResults.length === 0) {
      // Only go to tools page if no results found
      router.push(`/tools?search=${encodeURIComponent(searchQuery)}`)
    }
  }
  
  const handleResultClick = (result: SearchResult) => {
    // Use Next.js router for internal navigation
    router.push(result.url)
  }

  return (
    <section className={`relative overflow-hidden pt-16 pb-12 md:pb-20 border-b-4 border-black dark:border-white bg-white dark:bg-black ${heroMinHeight}`}>
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Original Content */}
          <div className="max-w-5xl">
            {/* Status Badge with Pulsing Animation */}
            <div className="inline-flex items-center space-x-2 mb-4 md:mb-6">
              <div className="status-active"></div>
              <span className="font-mono text-xs md:text-sm text-brutal-lime">SYSTEM.ONLINE</span>
              <span className="font-mono text-xs md:text-sm opacity-60">// UPDATES DAILY</span>
            </div>

            {/* Main Headline - Reserve space */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-4 md:mb-6" style={{ minHeight: '200px' }}>
              <span className="block">THE ONLY</span>
              <span className="block">
                <span className="ai-tools-gradient-text">VIBE CODING</span>
              </span>
              <span className="block">DATABASE</span>
              <span className="block">YOU NEED</span>
            </h1>

            {/* Description - Reserve space */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold max-w-3xl mb-6 md:mb-8 text-gray-700 dark:text-gray-300 leading-relaxed" style={{ minHeight: '80px' }}>
              <span className="block mb-2">
                <span className="text-cyan-600 dark:text-cyan-400">✓</span> Accelerate web development speed with performance optimization tools
              </span>
              <span className="block">
                <span className="text-green-600 dark:text-green-400">✓</span> Boost coding productivity through automated workflows and real-time analytics
              </span>
            </p>

            {/* Premium Search Bar with Conic Gradient */}
            <div ref={searchRef} className="max-w-3xl mb-8 relative">
              <form onSubmit={handleSearch}>
                <div className="relative group">
                  {/* Main Search Container */}
                  <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-700 group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-all duration-300">
                    <div className="flex items-center">
                      {/* Category Dropdown */}
                      <div className="flex items-center pl-6 pr-3">
                        <button
                          type="button"
                          onClick={() => setShowCategories(!showCategories)}
                          className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                          <span className="hidden sm:inline">{selectedCategory}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div className="h-8 w-px bg-gray-300 dark:bg-gray-700 ml-3"></div>
                      </div>
                      
                      {/* Search Icon */}
                      <div className="pl-3">
                        <Search className="w-5 h-5 text-gray-400" />
                      </div>
                      
                      {/* Input Field */}
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onFocus={() => searchQuery && setShowResults(true)}
                        placeholder="Search tools, MCP servers, APIs..."
                        className="flex-1 px-4 py-5 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none text-base font-medium"
                        aria-label="Search AI tools"
                      />
                      
                      {/* Keyboard Shortcut Hint */}
                      <div className="hidden lg:flex items-center pr-3">
                        <kbd className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 rounded border border-gray-300 dark:border-gray-700">
                          ⌘K
                        </kbd>
                      </div>
                      
                      {/* Search Button */}
                      <button
                        type="submit"
                        className="group/btn relative px-8 py-4 bg-gradient-to-r from-lime-400 to-green-400 hover:from-lime-500 hover:to-green-500 text-black font-bold rounded-r-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                        aria-label="Search button"
                      >
                        <span className="flex items-center gap-2">
                          <span className="hidden sm:inline">Search</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                  

                </div>
              </form>
              
              {/* Category Dropdown Menu */}
              {showCategories && (
                <div className="absolute top-20 left-0 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 p-2 z-50 min-w-[200px]">
                  {['All', 'Tools', 'MCP Servers', 'APIs'].map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(category)
                        setShowCategories(false)
                      }}
                      className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
              
              {/* Modern Loading State */}
              {isSearching && (
                <div className="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6 z-50">
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-lime-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-lime-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-lime-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Searching database...</span>
                  </div>
                </div>
              )}
              {showResults && !isSearching && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 max-h-[500px] overflow-hidden z-50">
                  {/* Results Header */}
                  <div className="px-6 py-3 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        Found {searchResults.length} results
                      </span>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">↑↓</kbd>
                        <span>Navigate</span>
                        <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Enter</kbd>
                        <span>Select</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Results List */}
                  <div className="overflow-y-auto max-h-[400px]">
                    {searchResults.map((result, index) => (
                      <button
                        key={result.id}
                        onClick={() => handleResultClick(result)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full px-6 py-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-150 text-left border-l-4 ${
                          selectedIndex === index 
                            ? 'bg-gradient-to-r from-lime-50 to-transparent dark:from-lime-900/20 border-lime-400' 
                            : 'border-transparent'
                        }`}
                      >
                        {/* Icon Container */}
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl flex items-center justify-center text-2xl">
                          {result.icon}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-900 dark:text-white truncate">
                              {result.name}
                            </span>
                            {result.type === 'mcp' && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                                MCP
                              </span>
                            )}
                            {result.type === 'api' && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                API
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                            {result.description || result.category}
                          </div>
                        </div>
                        
                        {/* Arrow */}
                        <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                          selectedIndex === index ? 'translate-x-1' : ''
                        }`} />
                      </button>
                    ))}
                  </div>
                  
                  {/* Results Footer */}
                  <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
                    <button
                      onClick={() => router.push(`/tools?search=${encodeURIComponent(searchQuery)}`)} 
                      className="text-sm font-medium text-lime-600 dark:text-lime-400 hover:text-lime-700 dark:hover:text-lime-300 transition-colors"
                    >
                      View all results →
                    </button>
                  </div>
                </div>
              )}
              {showResults && !isSearching && searchResults.length === 0 && searchQuery.length > 1 && (
                <div className="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-8 z-50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-2">No results found</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Try different keywords or browse all tools
                    </div>
                    <button
                      onClick={() => router.push('/tools')}
                      className="px-4 py-2 bg-lime-400 hover:bg-lime-500 text-black font-medium rounded-lg transition-colors"
                    >
                      Browse All Tools
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Buttons - Reserve space */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12" style={{ minHeight: '64px' }}>
              {/* Primary CTA - Browse All Tools with Glowing Effect */}
              <Link 
                href="/tools" 
                className="group relative inline-flex items-center justify-center px-10 py-4 text-white rounded-xl cursor-pointer border-0 outline-none overflow-visible"
              >
                {/* Animated rainbow gradient background */}
                <div 
                  className="absolute -inset-[2px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[5px]"
                  style={{
                    background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
                    backgroundSize: '400%',
                    animation: 'rainbow-glow 20s linear infinite'
                  }}
                />
                
                {/* Solid background */}
                <div className="absolute inset-0 bg-gray-900 rounded-xl" />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-3 font-bold">
                  <span className="text-lg tracking-wide">BROWSE ALL TOOLS</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              {/* Secondary CTA - Find Your Tool */}
              <button 
                onClick={() => document.getElementById('tool-finder')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-xl border-2 border-gray-700 bg-gray-900/90 backdrop-blur-sm text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500/50 hover:shadow-cyan-500/20"
                aria-label="Find your perfect tool"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
                
                {/* Button content */}
                <span className="relative flex items-center gap-3">
                  <Zap className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 group-hover:animate-pulse" />
                  <span className="text-lg font-bold tracking-wide">FIND YOUR TOOL</span>
                </span>
              </button>
            </div>

            {/* Live Stats - Reserve space */}
            <div className="grid grid-cols-4 gap-3" style={{ minHeight: '100px' }}>
              {[
                { label: "TOOLS", value: loading ? '...' : toolsCount.toLocaleString(), icon: Boxes },
                { label: "MCP", value: loading ? '...' : mcpCount.toString(), icon: Database },
                { label: "APIS", value: loading ? '...' : apisCount.toLocaleString(), icon: Activity },
                { label: "UPDATES", value: "DAILY", icon: BarChart3 }
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-all duration-200">
                    <div className="flex items-center gap-3">
                      <stat.icon className="w-5 h-5 text-gray-500" aria-hidden="true" />
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Reserved space for Animation */}
          <div className="hidden lg:flex lg:items-start" style={{ marginTop: '-280px', minHeight: '700px', minWidth: '700px' }}>
            <div className="w-full h-full">
              <NeuralNetworkAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

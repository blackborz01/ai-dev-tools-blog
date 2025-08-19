'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Boxes, Database, Activity, BarChart3, Search, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import NeuralNetworkAnimation from './NeuralNetworkAnimation'
import { useDataStats, useAnimatedCount } from '@/hooks/useDataStats'

// Type definitions for search results
interface SearchAPIResult {
  type: 'article' | 'tool' | 'mcp' | 'api' | 'guide'
  title: string
  excerpt: string
  url: string
  category: string
  score: number
  metadata?: {
    provider?: string
    status?: string
    pricing?: string
    capabilities?: string[]
    tags?: string[]
  }
}

interface SearchResult {
  id: string
  name: string
  category: string
  type: string
  url: string
  icon: string
  tags?: string[]
}

export default function OriginalHero() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  
  // Use dynamic stats from the data
  const { stats, loading } = useDataStats(60000) // Refresh every minute
  
  // Animated counters for visual appeal
  const toolsCount = useAnimatedCount(stats?.aiTools.total || 0, 2500)
  const mcpCount = useAnimatedCount(stats?.mcpServers.total || 0, 2000)
  const dailyUpdates = useAnimatedCount(12, 1500) // Keep this static for now
  const usersCount = useAnimatedCount(8543, 2000) // Keep this static for now
  
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
          const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&limit=12`)
          const data = await response.json()
          
          if (data.success && data.results) {
            // Convert API results to component format
            const formattedResults: SearchResult[] = data.results.map((result: SearchAPIResult, idx: number) => ({
              id: `${result.type}-${idx}`,
              name: result.title,
              category: result.category,
              type: result.type,
              url: result.url,
              icon: getIconForType(result.type, result.category),
              tags: result.metadata?.tags || []
            }))
            
            setSearchResults(formattedResults)
            setShowResults(true)
            setSelectedIndex(-1)
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
  }, [searchQuery])
  
  // Helper function to get icon based on type
  const getIconForType = (type: string, category: string): string => {
    if (type === 'tool') {
      if (category.toLowerCase().includes('coding')) return '💻'
      if (category.toLowerCase().includes('image')) return '🎨'
      if (category.toLowerCase().includes('video')) return '🎬'
      if (category.toLowerCase().includes('voice')) return '🎙️'
      if (category.toLowerCase().includes('writing')) return '✍️'
      if (category.toLowerCase().includes('chat')) return '💬'
      return '🔧'
    }
    if (type === 'mcp') return '🔌'
    if (type === 'api') return '🔗'
    if (type === 'article') return '📄'
    if (type === 'guide') return '📚'
    return '📦'
  }
  
  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
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
    // Navigate directly to the URL without search page
    window.location.href = result.url
  }

  return (
    <section className="relative overflow-hidden py-12 md:py-20 border-b-4 border-black dark:border-white bg-white dark:bg-black">
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

            {/* Main Headline - Single H1 for SEO */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-4 md:mb-6">
              <span className="block">THE ONLY</span>
              <span className="block ai-tools-animated">AI TOOLS</span>
              <span className="block">DATABASE</span>
              <span className="block">YOU NEED</span>
            </h1>

            {/* Description - Mobile Optimized */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold max-w-3xl mb-6 md:mb-8 font-mono">
              &gt; TRACKING {loading ? '...' : toolsCount.toLocaleString()}+ TOOLS // {dailyUpdates}+ DAILY UPDATES // 
              HONEST REVIEWS // REAL TESTING
            </p>

            {/* Search Bar - Integrated from HeroSection */}
            <div ref={searchRef} className="max-w-3xl mb-8 relative">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500 pointer-events-none z-10" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => searchQuery && setShowResults(true)}
                    placeholder="Search 3700+ tools, MCP servers, APIs... (e.g., 'cursor', 'GPT-4')"
                    className="w-full pl-16 pr-32 py-5 text-lg bg-white dark:bg-gray-900 text-black dark:text-white border-4 border-black dark:border-white font-bold placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-lime-400 transition-all"
                    aria-label="Search AI tools"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-3 bg-lime-400 text-black font-black hover:bg-lime-500 transition-colors"
                    aria-label="Search button"
                  >
                    SEARCH →
                  </button>
                </div>
              </form>
              
              {/* Instant Search Results Dropdown */}
              {isSearching && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 text-black dark:text-white border-4 border-black dark:border-white shadow-2xl p-8 z-50">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-lime-400 mb-2"></div>
                    <div className="font-mono text-sm opacity-60">Searching database...</div>
                  </div>
                </div>
              )}
              {showResults && !isSearching && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 text-black dark:text-white border-4 border-black dark:border-white shadow-2xl max-h-96 overflow-y-auto z-50">
                  {searchResults.map((result, index) => (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full px-6 py-4 flex items-center justify-between hover:bg-lime-100 dark:hover:bg-lime-900 transition-colors text-left ${
                        selectedIndex === index ? 'bg-lime-100 dark:bg-lime-900' : ''
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{result.icon}</span>
                        <div>
                          <div className="font-black">{result.name}</div>
                          <div className="text-sm opacity-60">{result.category}</div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 opacity-50" />
                    </button>
                  ))}
                  <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-sm text-center">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs opacity-60">Showing top results</span>
                      <span>Press <kbd className="px-2 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 font-mono text-xs">Enter</kbd> to see all</span>
                    </div>
                  </div>
                </div>
              )}
              {showResults && !isSearching && searchResults.length === 0 && searchQuery.length > 1 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 text-black dark:text-white border-4 border-black dark:border-white shadow-2xl p-6 z-50">
                  <div className="text-center">
                    <div className="font-black text-lg mb-2">No results found</div>
                    <div className="text-sm opacity-60">Try different keywords or browse all tools</div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Buttons - Mobile Stack */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
              <Link href="/tools" className="px-12 py-6 bg-green-500 text-black font-black text-xl md:text-2xl brutal-shadow-xl hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all inline-block text-center">
                BROWSE ALL TOOLS →
              </Link>
              <button 
                onClick={() => document.getElementById('tool-finder')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-4 border-black dark:border-white px-6 md:px-8 py-3 md:py-4 font-black text-base md:text-lg brutal-hover hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-center"
                aria-label="Take AI tool quiz"
              >
                🎯 TAKE QUIZ
              </button>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "TOOLS", value: loading ? '...' : toolsCount.toLocaleString(), icon: Boxes },
                { label: "MCP", value: loading ? '...' : mcpCount.toString(), icon: Database },
                { label: "USERS", value: usersCount >= 1000 ? `${(usersCount/1000).toFixed(1)}K+` : usersCount.toString(), icon: Activity },
                { label: "UPDATES", value: `${dailyUpdates}+/DAY`, icon: BarChart3 }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white dark:bg-black border-3 border-black dark:border-white p-4 brutal-shadow">
                  <stat.icon className="w-6 h-6 mb-2" aria-hidden="true" />
                  <div className="text-3xl font-black">{stat.value}</div>
                  <div className="text-xs font-mono opacity-60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Reserved for Animation */}
          <div className="hidden lg:flex lg:items-start" style={{ marginTop: '-280px' }}>
            <div className="w-full" style={{ minHeight: '700px', minWidth: '700px' }}>
              <NeuralNetworkAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

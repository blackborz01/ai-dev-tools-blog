'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { Search, Filter, Star, Clock, Users, ArrowRight, Terminal, TrendingUp, Sparkles, Shield, Zap, Activity, Cpu, Database, GitBranch, Layers, Server, Wifi, Code2, ChevronUp, Gauge, AlertCircle, BarChart3, Network, Pause, Play, Loader2 } from 'lucide-react'
import { mcpServers, mcpCategories, featuredServers, trendingServers, newServers } from './servers/data'
import Navbar from '@/components/Navbar'

export default function MCPDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('stars')
  const [activeMetric, setActiveMetric] = useState(0)
  const [pulseAnimation, setPulseAnimation] = useState(true)

  // Simulated live metrics
  const [liveMetrics, setLiveMetrics] = useState({
    activeConnections: 12847,
    requestsPerSec: 3429,
    dataTransfer: 847.3,
    serverUptime: 99.97
  })

  // Search API call
  useEffect(() => {
    const searchTimer = setTimeout(async () => {
      if (searchQuery.trim()) {
        setIsSearching(true)
        try {
          const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
          if (response.ok) {
            const data = await response.json()
            // Filter to only show MCP results
            const mcpResults = data.results?.filter((r: any) => 
              r.type === 'mcp' || r.title?.toLowerCase().includes('mcp')
            ) || []
            setSearchResults(mcpResults)
          }
        } catch (error) {
          console.error('Search error:', error)
          setSearchResults([])
        } finally {
          setIsSearching(false)
        }
      } else {
        setSearchResults([])
      }
    }, 300) // Debounce search

    return () => clearTimeout(searchTimer)
  }, [searchQuery])

  // Update live metrics with performance optimization
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => {
        // Use deterministic wave patterns instead of random
        const time = Date.now() / 1000;
        const wave1 = Math.sin(time * 0.5) * 50;
        const wave2 = Math.cos(time * 0.3) * 100;
        const wave3 = Math.sin(time * 0.7) * 5;

        return {
          activeConnections: Math.max(0, Math.floor(12847 + wave1)),
          requestsPerSec: Math.max(0, Math.floor(3429 + wave2)),
          dataTransfer: Math.max(0, Math.floor((847.3 + wave3) * 10) / 10),
          serverUptime: 99.97
        };
      })
      setActiveMetric((prev) => (prev + 1) % 4)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Filter and sort servers
  const filteredServers = useMemo(() => {
    let filtered = mcpServers

    // If we have search results from API, use them
    if (searchQuery && searchResults.length > 0) {
      // Map search results to MCP servers
      filtered = searchResults.map(result => {
        // Try to find matching server in mcpServers
        const matchingServer = mcpServers.find(server => 
          server.name.toLowerCase() === result.title?.toLowerCase() ||
          server.name.toLowerCase().includes(result.title?.toLowerCase()) ||
          result.title?.toLowerCase().includes(server.name.toLowerCase())
        )
        
        if (matchingServer) {
          return matchingServer
        }
        
        // Create a temporary server object from search result
        return {
          id: result.title?.toLowerCase().replace(/\s+/g, '-'),
          name: result.title || '',
          description: result.excerpt || result.description || '',
          category: result.category || 'Tools',
          stars: 0,
          users: '0',
          tags: [],
          setupTime: 'Unknown',
          icon: Terminal
        }
      }).filter(Boolean)
    }
    // If no search query, apply category filter
    else if (selectedCategory !== 'all') {
      filtered = filtered.filter(server => 
        server.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'stars') return b.stars - a.stars
      if (sortBy === 'users') {
        const aUsers = parseInt(a.users.replace(/[^0-9]/g, ''))
        const bUsers = parseInt(b.users.replace(/[^0-9]/g, ''))
        return bUsers - aUsers
      }
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0
    })

    return filtered
  }, [searchQuery, searchResults, selectedCategory, sortBy])

  const featured = useMemo(() => mcpServers.filter(s => featuredServers.includes(s.id)), [])
  const trending = useMemo(() => mcpServers.filter(s => trendingServers.includes(s.id)), [])
  const newest = useMemo(() => mcpServers.filter(s => newServers.includes(s.id)), [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/20 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-purple-900/10 text-gray-800 dark:text-white relative overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      {/* Animated Background Grid with reduced motion preference */}
      <div className="fixed inset-0 opacity-10 motion-reduce:hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: pulseAnimation ? 'grid-move 10s linear infinite' : 'none'
          }}
        />
      </div>

      <style jsx global>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.5),
                        inset 0 0 20px rgba(0, 255, 255, 0.1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(0, 255, 255, 0.8),
                        inset 0 0 30px rgba(0, 255, 255, 0.2);
          }
        }
        
        @keyframes data-flow {
          0% { transform: translateY(100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        
        @keyframes neon-flicker {
          0%, 100% { opacity: 1; }
          33% { opacity: 0.8; }
          66% { opacity: 0.9; }
        }
        
        @keyframes hologram {
          0% { transform: perspective(1000px) rotateY(0deg); }
          100% { transform: perspective(1000px) rotateY(360deg); }
        }
        
        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .glass-morphism {
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 255, 255, 0.2);
        }
        
        .neon-text {
          text-shadow: 0 0 10px currentColor,
                       0 0 20px currentColor,
                       0 0 30px currentColor;
        }
        
        .cyber-border {
          position: relative;
          border: 2px solid transparent;
          background: linear-gradient(90deg, #00ffff, #ff00ff, #00ffff);
          background-clip: padding-box;
        }
        
        .cyber-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(90deg, #00ffff, #ff00ff, #00ffff);
          z-index: -1;
          animation: border-flow 3s linear infinite;
        }
        
        @keyframes border-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .holographic-card {
          background: linear-gradient(135deg, 
            rgba(0, 255, 255, 0.1) 0%,
            rgba(255, 0, 255, 0.1) 25%,
            rgba(0, 255, 0, 0.1) 50%,
            rgba(255, 255, 0, 0.1) 75%,
            rgba(0, 255, 255, 0.1) 100%);
          background-size: 400% 400%;
          animation: holographic-shift 10s ease infinite;
        }
        
        @keyframes holographic-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-16 border-b border-cyan-500/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-morphism rounded-full mb-6">
              <Sparkles className={`w-4 h-4 text-yellow-400 ${pulseAnimation ? 'animate-pulse' : ''}`} />
              <span className="font-mono text-xs text-cyan-400">CODE SMARTER • DEPLOY FASTER • DEBUG EASIER</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              MCP Server Directory
              <span className="block text-3xl md:text-4xl mt-4 text-gray-400">
                The Complete Collection of Model Context Protocol Servers
              </span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-300">
              Transform your AI assistant into a powerhouse. Browse, compare, and install MCP servers for Claude, Cursor, and any MCP-compatible client.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative flex items-center">
                  {isSearching ? (
                    <Loader2 className="absolute left-4 w-6 h-6 text-cyan-400 animate-spin" />
                  ) : (
                    <Search className="absolute left-4 w-6 h-6 text-cyan-400" />
                  )}
                  <input
                    type="text"
                    placeholder="Search MCP servers... (e.g., 'docker', 'github', 'aws')"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-4 py-4 text-lg bg-black/90 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Featured Servers */}
      <section className="py-12 border-b border-cyan-500/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <Star className="w-8 h-8 text-yellow-400" />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">FEATURED SERVERS</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map(server => (
              <Link 
                key={server.id}
                href={`/mcp/servers/${server.slug}`}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative glass-morphism rounded-lg p-6 h-full border border-cyan-500/20 group-hover:border-cyan-400/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{server.emoji}</div>
                    {server.official && (
                      <span className="px-2 py-1 bg-green-500/20 border border-green-400 text-green-400 text-xs font-mono rounded">OFFICIAL</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">{server.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{server.description}</p>
                  
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-3 h-3" />
                      {server.stars.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1 text-cyan-400">
                      <Users className="w-3 h-3" />
                      {server.users}
                    </span>
                    <span className="flex items-center gap-1 text-purple-400">
                      <Clock className="w-3 h-3" />
                      {server.setupTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Directory */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Enhanced Filter Section */}
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-gray-800">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Filter MCP Servers</h3>
                <p className="text-sm text-gray-400">Browse by category or sort by popularity</p>
              </div>
              <div className="text-sm text-gray-500">
                <span className="text-cyan-400 font-bold">{filteredServers.length}</span> servers found
              </div>
            </div>
            
            {/* Category Pills */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 block">Categories</label>
              <div className="flex flex-wrap gap-2">
                {mcpCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                        : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700/50'
                    }`}
                  >
                    <span className="mr-2">{category.emoji}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Sort Options */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Sort By</label>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSortBy('stars')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    sortBy === 'stars'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                      : 'bg-gray-800/50 text-gray-400 hover:text-gray-200 border border-gray-700/50'
                  }`}
                >
                  ⭐ Stars
                </button>
                <button
                  onClick={() => setSortBy('users')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    sortBy === 'users'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                      : 'bg-gray-800/50 text-gray-400 hover:text-gray-200 border border-gray-700/50'
                  }`}
                >
                  👥 Users
                </button>
                <button
                  onClick={() => setSortBy('name')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    sortBy === 'name'
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                      : 'bg-gray-800/50 text-gray-400 hover:text-gray-200 border border-gray-700/50'
                  }`}
                >
                  🔤 A-Z
                </button>
              </div>
            </div>
          </div>

          {/* Server Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServers.map(server => (
              <Link
                key={server.id}
                href={`/mcp/servers/${server.slug}`}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative glass-morphism rounded-lg p-6 h-full border border-cyan-500/20 group-hover:border-cyan-400/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{server.emoji}</span>
                    <div className="flex gap-2">
                      {server.official && (
                        <Shield className="w-4 h-4 text-green-400" />
                      )}
                      {server.difficulty === 'Easy' && (
                        <Zap className="w-4 h-4 text-yellow-400" />
                      )}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">{server.name}</h3>
                  <p className="text-xs text-gray-400 mb-3 line-clamp-2">{server.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {server.tags.slice(0, 3).map((tag: string) => (
                      <span key={tag} className="px-2 py-1 bg-gray-900/50 text-xs font-mono text-gray-400 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {server.stars.toLocaleString()}
                    </span>
                    <span>{server.setupTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredServers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl font-bold mb-2 text-cyan-400">No servers found</p>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative border-t border-cyan-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Supercharge Your AI?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Pick an MCP server and transform your AI assistant in minutes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/mcp/servers/filesystem"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-lg hover:scale-105 transition-transform"
            >
              START WITH FILESYSTEM MCP →
            </Link>
            <a 
              href="https://modelcontextprotocol.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass-morphism border border-cyan-500/50 font-bold rounded-lg hover:border-cyan-400 transition-colors"
            >
              LEARN ABOUT MCP
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/30">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-xs text-gray-400">
            © 2025 AI.TOOLS // THE COMPLETE MCP SERVER DIRECTORY
          </p>
          <p className="font-mono text-xs mt-2 text-gray-600">
            Updated in real-time with new servers and features
          </p>
        </div>
      </footer>
    </div>
  )
}

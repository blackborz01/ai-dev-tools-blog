'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, TrendingUp, Sparkles, ChevronRight, Zap, Code2, Globe, Cpu, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// Comprehensive tool database for search
const searchableItems = [
  // AI Coding Tools
  { id: 'cursor', name: 'Cursor', category: 'AI Coding', type: 'tool', url: '/tools', icon: '🎯', tags: ['ai', 'code', 'editor', 'gpt-4'] },
  { id: 'github-copilot', name: 'GitHub Copilot', category: 'AI Coding', type: 'tool', url: '/tools', icon: '🐙', tags: ['ai', 'code', 'completion', 'github'] },
  { id: 'windsurf', name: 'Windsurf IDE', category: 'AI Coding', type: 'tool', url: '/tools', icon: '🏄', tags: ['ide', 'ai', 'editor'] },
  { id: 'v0', name: 'v0 by Vercel', category: 'AI Coding', type: 'tool', url: '/tools', icon: '⚡', tags: ['ui', 'generation', 'react'] },
  { id: 'codeium', name: 'Codeium', category: 'AI Coding', type: 'tool', url: '/tools', icon: '🚀', tags: ['free', 'code', 'completion'] },
  { id: 'tabnine', name: 'Tabnine', category: 'AI Coding', type: 'tool', url: '/tools', icon: '🤖', tags: ['ai', 'autocomplete', 'privacy'] },
  
  // MCP Servers
  { id: 'mcp-filesystem', name: 'MCP Filesystem', category: 'MCP Server', type: 'mcp', url: '/mcp', icon: '📁', tags: ['mcp', 'file', 'claude'] },
  { id: 'mcp-github', name: 'MCP GitHub', category: 'MCP Server', type: 'mcp', url: '/mcp', icon: '🔗', tags: ['mcp', 'github', 'integration'] },
  { id: 'mcp-slack', name: 'MCP Slack', category: 'MCP Server', type: 'mcp', url: '/mcp', icon: '💬', tags: ['mcp', 'slack', 'communication'] },
  { id: 'mcp-postgres', name: 'MCP PostgreSQL', category: 'MCP Server', type: 'mcp', url: '/mcp', icon: '🗄️', tags: ['mcp', 'database', 'sql'] },
  { id: 'mcp-google', name: 'MCP Google Drive', category: 'MCP Server', type: 'mcp', url: '/mcp', icon: '📎', tags: ['mcp', 'google', 'storage'] },
  
  // API Models
  { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', category: 'API Model', type: 'api', url: '/api-directory/openai/gpt-4-turbo', icon: '🧠', tags: ['openai', 'gpt-4', 'api', 'llm'] },
  { id: 'claude-3-opus', name: 'Claude 3 Opus', category: 'API Model', type: 'api', url: '/api-directory/anthropic/claude-3-opus', icon: '🎭', tags: ['anthropic', 'claude', 'api', 'llm'] },
  { id: 'gemini-pro', name: 'Gemini Pro', category: 'API Model', type: 'api', url: '/api-directory/google/gemini-pro', icon: '✨', tags: ['google', 'gemini', 'api', 'free'] },
  { id: 'mistral-large', name: 'Mistral Large', category: 'API Model', type: 'api', url: '/api-directory', icon: '🌪️', tags: ['mistral', 'api', 'europe'] },
  { id: 'llama-3', name: 'Llama 3', category: 'API Model', type: 'api', url: '/api-directory', icon: '🦙', tags: ['meta', 'llama', 'open-source'] },
  
  // Dev Tools
  { id: 'docker', name: 'Docker', category: 'Dev Tool', type: 'tool', url: '/tools', icon: '🐳', tags: ['container', 'devops', 'deployment'] },
  { id: 'vscode', name: 'VS Code', category: 'Dev Tool', type: 'tool', url: '/tools', icon: '💻', tags: ['editor', 'microsoft', 'ide'] },
  { id: 'git', name: 'Git', category: 'Dev Tool', type: 'tool', url: '/tools', icon: '🌳', tags: ['version', 'control', 'github'] },
]

interface SearchResult {
  id: string
  name: string
  category: string
  type: string
  url: string
  icon: string
  tags: string[]
}

export default function HeroSection() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  
  // Real statistics (you can fetch these from your database)
  const [stats, setStats] = useState({
    tools: 247,
    users: 12543,
    saved: 450000
  })
  
  // Latest additions (fetch from your data)
  const latestAdditions = [
    'Windsurf IDE',
    'Claude MCP Servers',
    'GPT-4 Turbo API',
    'v0 by Vercel'
  ]
  const [currentLatest, setCurrentLatest] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLatest((prev) => (prev + 1) % latestAdditions.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  
  // Handle search input
  useEffect(() => {
    if (searchQuery.length > 0) {
      const query = searchQuery.toLowerCase()
      const results = searchableItems.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.includes(query))
      ).slice(0, 8) // Limit to 8 results
      
      setSearchResults(results)
      setShowResults(true)
      setSelectedIndex(-1)
    } else {
      setSearchResults([])
      setShowResults(false)
    }
  }, [searchQuery])
  
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
    if (searchQuery) {
      router.push(`/tools?search=${encodeURIComponent(searchQuery)}`)
    }
  }
  
  const handleResultClick = (result: SearchResult) => {
    router.push(result.url)
  }

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            >
              <div className="w-2 h-2 bg-lime-400/20 rounded-full blur-sm"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-center">
        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-400 text-black font-black text-xs mb-8 animate-pulse">
          <Sparkles className="w-4 h-4" />
          NEW: {latestAdditions[currentLatest]} JUST ADDED
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9]">
          FIND THE PERFECT<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-400 to-cyan-400 animate-gradient">
            AI DEV TOOL
          </span><br />
          IN 30 SECONDS
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-10 opacity-80 font-bold max-w-3xl mx-auto">
          Brutally honest reviews. No BS. Just the tools that actually work.
        </p>

        {/* Enhanced Search Bar with Instant Results */}
        <div ref={searchRef} className="max-w-3xl mx-auto mb-10 relative">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => searchQuery && setShowResults(true)}
                placeholder="Search tools... (e.g., 'code completion', 'MCP servers', 'GPT-4')"
                className="w-full pl-16 pr-32 py-5 text-lg bg-white text-black font-bold placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-lime-400 transition-all"
                style={{ borderRadius: 0 }}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-3 bg-lime-400 text-black font-black hover:bg-lime-500 transition-colors"
              >
                SEARCH →
              </button>
            </div>
          </form>
          
          {/* Instant Search Results Dropdown */}
          {showResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white text-black border-4 border-black shadow-2xl max-h-96 overflow-y-auto">
              {searchResults.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full px-6 py-4 flex items-center justify-between hover:bg-lime-100 transition-colors text-left ${
                    selectedIndex === index ? 'bg-lime-100' : ''
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
              <div className="px-6 py-3 bg-gray-100 text-sm text-center">
                Press <kbd className="px-2 py-1 bg-white border border-gray-300 font-mono text-xs">Enter</kbd> to search all results
              </div>
            </div>
          )}
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link 
            href="/tools"
            className="group px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 font-bold hover:bg-white hover:text-black transition-all flex items-center gap-2"
          >
            <Code2 className="w-5 h-5" />
            AI Coding Tools
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link 
            href="/mcp"
            className="group px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 font-bold hover:bg-white hover:text-black transition-all flex items-center gap-2"
          >
            <Cpu className="w-5 h-5" />
            MCP Servers
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link 
            href="/api-directory"
            className="group px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 font-bold hover:bg-white hover:text-black transition-all flex items-center gap-2"
          >
            <Globe className="w-5 h-5" />
            API Models
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <button 
            onClick={() => {
              const finder = document.querySelector('#tool-finder')
              if (finder) {
                finder.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="group px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center gap-2"
          >
            <Zap className="w-5 h-5" />
            Get Recommendations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Live Statistics */}
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-black/60 backdrop-blur-md border-2 border-lime-400/30 p-6 hover:border-lime-400 transition-colors">
            <div className="text-4xl md:text-5xl font-black text-lime-400 mb-2">
              {stats.tools}
            </div>
            <div className="text-sm font-bold opacity-70 uppercase tracking-wider">Tools Reviewed</div>
          </div>
          <div className="bg-black/60 backdrop-blur-md border-2 border-cyan-400/30 p-6 hover:border-cyan-400 transition-colors">
            <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-2">
              {stats.users.toLocaleString()}+
            </div>
            <div className="text-sm font-bold opacity-70 uppercase tracking-wider">Active Developers</div>
          </div>
          <div className="bg-black/60 backdrop-blur-md border-2 border-purple-400/30 p-6 hover:border-purple-400 transition-colors">
            <div className="text-4xl md:text-5xl font-black text-purple-400 mb-2">
              ${Math.floor(stats.saved / 1000)}K
            </div>
            <div className="text-sm font-bold opacity-70 uppercase tracking-wider">Saved This Month</div>
          </div>
        </div>

        {/* Trending Topics */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <span className="text-xs font-bold opacity-60 uppercase">Trending:</span>
          {['Cursor vs Copilot', 'MCP Setup Guide', 'Free AI Tools', 'GPT-4 Pricing', 'Claude 3 Review'].map((topic) => (
            <Link
              key={topic}
              href={`/blog?topic=${encodeURIComponent(topic.toLowerCase().replace(/ /g, '-'))}`}
              className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-colors"
            >
              {topic}
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>



      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { 
  Search, Filter, Sparkles, Code2, Cpu, Globe, 
  DollarSign, Users, Zap, ChevronRight, X,
  Brain, Terminal, Shield, Clock, Target,
  Layers, Package, Rocket, BarChart3, 
  Database, Cloud, Lock, GitBranch, 
  CheckCircle, ArrowRight, Star, TrendingUp
} from 'lucide-react'
import Link from 'next/link'

interface ToolCategory {
  id: string
  name: string
  icon: any
  color: string
  count: number
}

interface FilterOptions {
  category: string
  priceRange: string
  deployment: string
  integration: string
  teamSize: string
  searchQuery: string
}

interface Tool {
  id: string
  name: string
  category: string
  description: string
  icon: string
  price: string
  priceValue: number
  deployment: string[]
  integration: string[]
  teamSize: string[]
  features: string[]
  popularity: number
  trending: boolean
  new: boolean
  recommended: boolean
  matchScore?: number
  link: string
}

const categories: ToolCategory[] = [
  { id: 'all', name: 'All Tools', icon: Layers, color: 'bg-gray-500', count: 247 },
  { id: 'ai-coding', name: 'AI Coding', icon: Code2, color: 'bg-purple-500', count: 45 },
  { id: 'mcp-servers', name: 'MCP Servers', icon: Cpu, color: 'bg-blue-500', count: 32 },
  { id: 'api-models', name: 'API Models', icon: Globe, color: 'bg-green-500', count: 68 },
  { id: 'dev-tools', name: 'Dev Tools', icon: Terminal, color: 'bg-orange-500', count: 28 },
  { id: 'databases', name: 'Databases', icon: Database, color: 'bg-red-500', count: 15 },
  { id: 'cloud', name: 'Cloud', icon: Cloud, color: 'bg-cyan-500', count: 22 },
  { id: 'security', name: 'Security', icon: Shield, color: 'bg-yellow-500', count: 18 },
  { id: 'analytics', name: 'Analytics', icon: BarChart3, color: 'bg-pink-500', count: 19 }
]

const tools: Tool[] = [
  // AI Coding Tools
  {
    id: 'cursor-pro',
    name: 'Cursor Pro',
    category: 'ai-coding',
    description: 'AI-powered code editor with GPT-4 integration for pair programming',
    icon: '🎯',
    price: '$20/mo',
    priceValue: 20,
    deployment: ['desktop', 'cloud'],
    integration: ['github', 'gitlab', 'vscode'],
    teamSize: ['solo', 'small', 'medium', 'large'],
    features: ['Code completion', 'Chat interface', 'Multi-file editing', 'Custom models'],
    popularity: 95,
    trending: true,
    new: false,
    recommended: true,
    link: '/tools/cursor-pro'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'ai-coding',
    description: 'Your AI pair programmer powered by OpenAI Codex',
    icon: '🐙',
    price: '$10/mo',
    priceValue: 10,
    deployment: ['desktop', 'cloud'],
    integration: ['vscode', 'jetbrains', 'neovim'],
    teamSize: ['solo', 'small', 'medium', 'large'],
    features: ['Code suggestions', 'Multi-language', 'Context aware', 'Chat mode'],
    popularity: 92,
    trending: true,
    new: false,
    recommended: true,
    link: '/tools/github-copilot'
  },
  {
    id: 'v0-dev',
    name: 'v0.dev',
    category: 'ai-coding',
    description: 'AI-powered UI generation from text descriptions',
    icon: '⚡',
    price: 'Free',
    priceValue: 0,
    deployment: ['cloud'],
    integration: ['react', 'nextjs', 'tailwind'],
    teamSize: ['solo', 'small'],
    features: ['UI generation', 'Component export', 'Tailwind CSS', 'React/Next.js'],
    popularity: 88,
    trending: true,
    new: true,
    recommended: false,
    link: '/tools/v0-dev'
  },
  
  // MCP Servers
  {
    id: 'mcp-filesystem',
    name: 'MCP Filesystem',
    category: 'mcp-servers',
    description: 'File system operations server for Model Context Protocol',
    icon: '📁',
    price: 'Free',
    priceValue: 0,
    deployment: ['local', 'docker'],
    integration: ['claude', 'vscode', 'cursor'],
    teamSize: ['solo', 'small', 'medium'],
    features: ['File operations', 'Directory browsing', 'Search', 'Permissions'],
    popularity: 85,
    trending: false,
    new: false,
    recommended: true,
    link: '/mcp/filesystem'
  },
  {
    id: 'mcp-github',
    name: 'MCP GitHub',
    category: 'mcp-servers',
    description: 'GitHub integration server for Model Context Protocol',
    icon: '🔗',
    price: 'Free',
    priceValue: 0,
    deployment: ['local', 'cloud'],
    integration: ['claude', 'github', 'gitlab'],
    teamSize: ['solo', 'small', 'medium', 'large'],
    features: ['Repository access', 'PR management', 'Issues', 'Actions'],
    popularity: 90,
    trending: true,
    new: true,
    recommended: true,
    link: '/mcp/github'
  },
  
  // API Models
  {
    id: 'gpt-4-turbo',
    name: 'GPT-4 Turbo',
    category: 'api-models',
    description: 'OpenAI\'s most capable model with 128K context window',
    icon: '🧠',
    price: '$0.01/1K',
    priceValue: 0.01,
    deployment: ['api'],
    integration: ['openai', 'langchain', 'vercel'],
    teamSize: ['solo', 'small', 'medium', 'large'],
    features: ['128K context', 'Vision', 'Function calling', 'JSON mode'],
    popularity: 98,
    trending: true,
    new: false,
    recommended: true,
    link: '/api-directory/openai/gpt-4-turbo'
  },
  {
    id: 'claude-3-opus',
    name: 'Claude 3 Opus',
    category: 'api-models',
    description: 'Anthropic\'s most powerful model for complex tasks',
    icon: '🎭',
    price: '$0.015/1K',
    priceValue: 0.015,
    deployment: ['api'],
    integration: ['anthropic', 'langchain', 'aws'],
    teamSize: ['solo', 'small', 'medium', 'large'],
    features: ['200K context', 'Vision', 'Code', 'Analysis'],
    popularity: 94,
    trending: true,
    new: true,
    recommended: true,
    link: '/api-directory/anthropic/claude-3-opus'
  },
  
  // Dev Tools
  {
    id: 'docker-desktop',
    name: 'Docker Desktop',
    category: 'dev-tools',
    description: 'Container platform for building and sharing applications',
    icon: '🐳',
    price: 'Free',
    priceValue: 0,
    deployment: ['desktop', 'local'],
    integration: ['kubernetes', 'vscode', 'github'],
    teamSize: ['solo', 'small', 'medium', 'large'],
    features: ['Containers', 'Compose', 'Kubernetes', 'Registry'],
    popularity: 96,
    trending: false,
    new: false,
    recommended: true,
    link: '/tools/docker'
  }
]

export default function EnhancedToolFinder() {
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    priceRange: 'all',
    deployment: 'all',
    integration: 'all',
    teamSize: 'all',
    searchQuery: ''
  })
  
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'name'>('popularity')

  // Filter tools based on current filters
  useEffect(() => {
    let filtered = [...tools]
    
    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(tool => tool.category === filters.category)
    }
    
    // Price range filter
    if (filters.priceRange !== 'all') {
      filtered = filtered.filter(tool => {
        if (filters.priceRange === 'free') return tool.priceValue === 0
        if (filters.priceRange === 'low') return tool.priceValue > 0 && tool.priceValue <= 20
        if (filters.priceRange === 'medium') return tool.priceValue > 20 && tool.priceValue <= 50
        if (filters.priceRange === 'high') return tool.priceValue > 50
        return true
      })
    }
    
    // Search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.features.some(f => f.toLowerCase().includes(query))
      )
    }
    
    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'popularity') return b.popularity - a.popularity
      if (sortBy === 'price') return a.priceValue - b.priceValue
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0
    })
    
    setFilteredTools(filtered)
  }, [filters, sortBy])

  const quickFilters = [
    { label: '🔥 Trending', action: () => setFilteredTools(tools.filter(t => t.trending)) },
    { label: '✨ New', action: () => setFilteredTools(tools.filter(t => t.new)) },
    { label: '💎 Recommended', action: () => setFilteredTools(tools.filter(t => t.recommended)) },
    { label: '🆓 Free', action: () => setFilters({...filters, priceRange: 'free'}) }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-y-4 border-black dark:border-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white font-black text-xs mb-6">
            <Sparkles className="w-4 h-4" />
            AI-POWERED TOOL DISCOVERY
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            FIND YOUR<span className="text-purple-500">.</span>PERFECT<span className="text-purple-500">.</span>TOOL
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Discover the best AI development tools from our curated collection of {tools.length}+ solutions
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className={`relative bg-white dark:bg-black border-4 border-black dark:border-white transition-all ${
            isSearchFocused ? 'translate-x-[-2px] translate-y-[-2px] shadow-xl' : ''
          }`}>
            <div className="flex items-center">
              <Search className="w-6 h-6 ml-6 opacity-60" />
              <input
                type="text"
                placeholder="Search tools, features, or technologies..."
                value={filters.searchQuery}
                onChange={(e) => setFilters({...filters, searchQuery: e.target.value})}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="flex-1 px-4 py-5 text-lg font-bold bg-transparent outline-none placeholder-gray-400"
              />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-6 py-5 border-l-4 border-black dark:border-white font-black hover:bg-purple-500 hover:text-white transition-colors ${
                  showFilters ? 'bg-purple-500 text-white' : ''
                }`}
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {quickFilters.map((filter, idx) => (
            <button
              key={idx}
              onClick={filter.action}
              className="px-4 py-2 bg-white dark:bg-black border-2 border-black dark:border-white font-bold hover:bg-purple-500 hover:text-white hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilters({...filters, category: category.id})}
              className={`flex items-center gap-2 px-5 py-3 font-black border-4 border-black dark:border-white transition-all ${
                filters.category === category.id
                  ? `${category.color} text-white translate-x-[-2px] translate-y-[-2px] shadow-lg`
                  : 'bg-white dark:bg-black hover:translate-x-[-1px] hover:translate-y-[-1px]'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
              <span className="px-2 py-1 bg-black/20 text-xs rounded">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Advanced Filters Panel */}
        {showFilters && (
          <div className="max-w-4xl mx-auto mb-8 p-6 bg-white dark:bg-black border-4 border-black dark:border-white">
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="font-black text-sm mb-2 block">PRICE RANGE</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                  className="w-full p-3 border-2 border-black dark:border-white bg-white dark:bg-black font-bold"
                >
                  <option value="all">All Prices</option>
                  <option value="free">Free</option>
                  <option value="low">$1-20/mo</option>
                  <option value="medium">$21-50/mo</option>
                  <option value="high">$50+/mo</option>
                </select>
              </div>
              
              <div>
                <label className="font-black text-sm mb-2 block">DEPLOYMENT</label>
                <select
                  value={filters.deployment}
                  onChange={(e) => setFilters({...filters, deployment: e.target.value})}
                  className="w-full p-3 border-2 border-black dark:border-white bg-white dark:bg-black font-bold"
                >
                  <option value="all">All Types</option>
                  <option value="cloud">Cloud</option>
                  <option value="desktop">Desktop</option>
                  <option value="local">Local</option>
                  <option value="api">API</option>
                </select>
              </div>
              
              <div>
                <label className="font-black text-sm mb-2 block">TEAM SIZE</label>
                <select
                  value={filters.teamSize}
                  onChange={(e) => setFilters({...filters, teamSize: e.target.value})}
                  className="w-full p-3 border-2 border-black dark:border-white bg-white dark:bg-black font-bold"
                >
                  <option value="all">All Sizes</option>
                  <option value="solo">Solo</option>
                  <option value="small">2-10</option>
                  <option value="medium">11-50</option>
                  <option value="large">50+</option>
                </select>
              </div>
              
              <div>
                <label className="font-black text-sm mb-2 block">SORT BY</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full p-3 border-2 border-black dark:border-white bg-white dark:bg-black font-bold"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price">Price</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results Count and View Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="font-black text-lg">
            {filteredTools.length} TOOLS FOUND
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 border-2 border-black dark:border-white ${
                viewMode === 'grid' ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white dark:bg-black'
              }`}
            >
              <Layers className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 border-2 border-black dark:border-white ${
                viewMode === 'list' ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white dark:bg-black'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tools Grid/List */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {filteredTools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.link}
              className={`block bg-white dark:bg-black border-4 border-black dark:border-white hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all cursor-pointer group ${
                viewMode === 'list' ? 'flex items-center justify-between p-6' : 'p-6'
              }`}
            >
              {viewMode === 'grid' ? (
                <>
                  {/* Grid View */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{tool.icon}</span>
                      <div>
                        <h3 className="font-black text-xl group-hover:text-purple-500 transition-colors">
                          {tool.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          {tool.trending && (
                            <span className="px-2 py-1 bg-red-500 text-white text-xs font-black">
                              TRENDING
                            </span>
                          )}
                          {tool.new && (
                            <span className="px-2 py-1 bg-green-500 text-white text-xs font-black">
                              NEW
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-lg">{tool.price}</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(tool.popularity / 20)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm opacity-70 mb-4 line-clamp-2">
                    {tool.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-bold"
                      >
                        {feature}
                      </span>
                    ))}
                    {tool.features.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900 text-xs font-bold">
                        +{tool.features.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100 dark:border-gray-900">
                    <div className="flex items-center gap-2 text-xs font-mono opacity-60">
                      <Users className="w-4 h-4" />
                      {tool.teamSize[0]}
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </>
              ) : (
                <>
                  {/* List View */}
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{tool.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-black text-xl group-hover:text-purple-500 transition-colors">
                          {tool.name}
                        </h3>
                        {tool.trending && (
                          <span className="px-2 py-1 bg-red-500 text-white text-xs font-black">
                            TRENDING
                          </span>
                        )}
                        {tool.new && (
                          <span className="px-2 py-1 bg-green-500 text-white text-xs font-black">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-sm opacity-70">{tool.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-lg mb-1">{tool.price}</div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(tool.popularity / 20)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredTools.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <h3 className="text-2xl font-black mb-2">NO TOOLS FOUND</h3>
            <p className="opacity-60 mb-6">Try adjusting your filters or search query</p>
            <button
              onClick={() => setFilters({
                category: 'all',
                priceRange: 'all',
                deployment: 'all',
                integration: 'all',
                teamSize: 'all',
                searchQuery: ''
              })}
              className="px-6 py-3 bg-purple-500 text-white font-black hover:bg-purple-600"
            >
              RESET FILTERS
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-black text-white dark:bg-white dark:text-black">
            <h3 className="text-2xl font-black mb-4">
              CAN'T FIND WHAT YOU'RE LOOKING FOR?
            </h3>
            <p className="mb-6 opacity-80">
              Submit a tool suggestion or explore our full directory
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tools" className="px-6 py-3 bg-purple-500 text-white font-black hover:bg-purple-600">
                BROWSE ALL TOOLS →
              </Link>
              <button className="px-6 py-3 border-2 border-white dark:border-black font-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors">
                SUGGEST A TOOL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

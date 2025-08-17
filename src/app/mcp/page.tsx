'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { Search, Filter, Star, Clock, Users, ArrowRight, Terminal, TrendingUp, Sparkles, Shield, Zap, Activity, Cpu, Database, GitBranch, Layers, Server, Wifi, Code2, ChevronUp, Gauge, AlertCircle, BarChart3, Network, Pause, Play } from 'lucide-react'
import { mcpServers, mcpCategories, featuredServers, trendingServers, newServers } from './servers/data'
import Navbar from '@/components/Navbar'

export default function MCPDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('')
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

  // Update live metrics with performance optimization
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        activeConnections: Math.max(0, prev.activeConnections + Math.floor(Math.random() * 100 - 50)),
        requestsPerSec: Math.max(0, prev.requestsPerSec + Math.floor(Math.random() * 200 - 100)),
        dataTransfer: Math.max(0, +(prev.dataTransfer + (Math.random() * 10 - 5)).toFixed(1)),
        serverUptime: Math.min(100, +(99.9 + Math.random() * 0.1).toFixed(2))
      }))
      setActiveMetric((prev) => (prev + 1) % 4)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Filter and sort servers
  const filteredServers = useMemo(() => {
    let filtered = mcpServers

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(server => 
        server.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(server => 
        server.name.toLowerCase().includes(query) ||
        server.description.toLowerCase().includes(query) ||
        server.tags.some((tag: string) => tag.toLowerCase().includes(query))
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
  }, [searchQuery, selectedCategory, sortBy])

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
              <span className="font-mono text-xs text-cyan-400">25+ MCP SERVERS • 500K+ DEVELOPERS • REAL-TIME UPDATES</span>
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
                  <Search className="absolute left-4 w-6 h-6 text-cyan-400" />
                  <input
                    type="text"
                    placeholder="Search MCP servers... (e.g., 'database', 'github', 'aws')"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-4 py-4 text-lg bg-black/90 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Live Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className={`glass-morphism rounded-lg p-4 border ${activeMetric === 0 ? 'border-cyan-400' : 'border-cyan-500/30'} transition-all`}>
                <Wifi className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-mono font-bold">{liveMetrics.activeConnections.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Active Connections</div>
              </div>
              <div className={`glass-morphism rounded-lg p-4 border ${activeMetric === 1 ? 'border-purple-400' : 'border-cyan-500/30'} transition-all`}>
                <Activity className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-mono font-bold">{liveMetrics.requestsPerSec.toLocaleString()}/s</div>
                <div className="text-xs text-gray-400">Requests/Sec</div>
              </div>
              <div className={`glass-morphism rounded-lg p-4 border ${activeMetric === 2 ? 'border-pink-400' : 'border-cyan-500/30'} transition-all`}>
                <Database className="w-5 h-5 text-pink-400 mb-2" />
                <div className="text-2xl font-mono font-bold">{liveMetrics.dataTransfer} GB</div>
                <div className="text-xs text-gray-400">Data Transfer</div>
              </div>
              <div className={`glass-morphism rounded-lg p-4 border ${activeMetric === 3 ? 'border-green-400' : 'border-cyan-500/30'} transition-all`}>
                <Gauge className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-mono font-bold">{liveMetrics.serverUptime}%</div>
                <div className="text-xs text-gray-400">Uptime</div>
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

      {/* LATEST INTEL - High-Tech Redesign */}
      <section className="py-16 relative border-b border-cyan-500/30">
        {/* Section Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl ${pulseAnimation ? 'animate-pulse' : ''}`} />
          <div className={`absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl ${pulseAnimation ? 'animate-pulse' : ''}`} style={{ animationDelay: pulseAnimation ? '1s' : '0s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header with Live Indicator */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="flex gap-1">
                <div className={`w-2 h-2 bg-red-500 rounded-full ${pulseAnimation ? 'animate-pulse' : ''}`} />
                <div className={`w-2 h-2 bg-yellow-500 rounded-full ${pulseAnimation ? 'animate-pulse' : ''}`} style={{ animationDelay: pulseAnimation ? '0.2s' : '0s' }} />
                <div className={`w-2 h-2 bg-green-500 rounded-full ${pulseAnimation ? 'animate-pulse' : ''}`} style={{ animationDelay: pulseAnimation ? '0.4s' : '0s' }} />
              </div>
              <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                LATEST INTEL
              </h2>
              <div className="flex gap-1">
                <div className={`w-2 h-2 bg-green-500 rounded-full ${pulseAnimation ? 'animate-pulse' : ''}`} style={{ animationDelay: pulseAnimation ? '0.4s' : '0s' }} />
                <div className={`w-2 h-2 bg-yellow-500 rounded-full ${pulseAnimation ? 'animate-pulse' : ''}`} style={{ animationDelay: pulseAnimation ? '0.2s' : '0s' }} />
                <div className={`w-2 h-2 bg-red-500 rounded-full ${pulseAnimation ? 'animate-pulse' : ''}`} />
              </div>
            </div>
            <p className="font-mono text-sm text-gray-400">REAL-TIME SERVER INTELLIGENCE • UPDATED EVERY 60 SECONDS</p>
          </div>

          {/* Main Intel Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Trending Analysis Panel */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative glass-morphism rounded-xl border border-red-500/30 overflow-hidden">
                {/* Panel Header */}
                <div className="p-6 border-b border-red-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <TrendingUp className="w-8 h-8 text-red-400" />
                        <div className={`absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full ${pulseAnimation ? 'animate-pulse' : ''}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-red-400">TRENDING VELOCITY</h3>
                        <p className="text-xs font-mono text-gray-500">GROWTH RATE: +847% THIS WEEK</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className={`w-5 h-5 text-red-400 ${pulseAnimation ? 'animate-pulse' : ''}`} />
                      <span className="font-mono text-xs text-red-400">LIVE</span>
                    </div>
                  </div>

                  {/* Mini Stats Bar */}
                  <div className="flex gap-4 text-xs font-mono">
                    <div className="flex items-center gap-1">
                      <ChevronUp className="w-3 h-3 text-green-400" />
                      <span className="text-gray-400">Install Rate:</span>
                      <span className="text-green-400">+234/hr</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Activity className="w-3 h-3 text-yellow-400" />
                      <span className="text-gray-400">Active Now:</span>
                      <span className="text-yellow-400">1,847</span>
                    </div>
                  </div>
                </div>

                {/* Trending Items with Advanced Cards */}
                <div className="p-6 space-y-4">
                  {trending.map((server, index) => (
                    <Link
                      key={server.id}
                      href={`/mcp/servers/${server.slug}`}
                      className="block group/item"
                    >
                      <div className="relative">
                        {/* Rank Badge */}
                        <div className="absolute -left-3 -top-2 z-10">
                          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center font-mono font-bold text-xs text-black">
                            #{index + 1}
                          </div>
                        </div>

                        {/* Card with Holographic Effect */}
                        <div className="holographic-card rounded-lg border border-red-500/20 p-4 group-hover/item:border-red-400/50 transition-all">
                          <div className="flex items-start gap-4">
                            <div className="relative">
                              <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
                              <span className="relative text-3xl">{server.emoji}</span>
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-bold text-lg group-hover/item:text-red-400 transition-colors">{server.name}</h4>
                                  <p className="text-xs text-gray-500 mt-1">{server.description}</p>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                  <div className="flex items-center gap-1 text-green-400">
                                    <ChevronUp className="w-3 h-3" />
                                    <span className="text-xs font-mono">+{287 - index * 50}%</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-3 h-3 text-yellow-400" />
                                    <span className="text-xs font-mono text-gray-400">{server.stars.toLocaleString()}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Live Activity Bar */}
                              <div className="mt-3 flex items-center gap-2">
                                <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                                    style={{ 
                                      width: `${Math.max(30, 85 - index * 10)}%`,
                                      animation: pulseAnimation ? 'pulse 2s ease-in-out infinite' : 'none'
                                    }}
                                  />
                                </div>
                                <span className="text-xs font-mono text-gray-500">{85 - index * 10}%</span>
                              </div>

                              {/* Tags */}
                              <div className="flex gap-2 mt-2">
                                {server.tags.slice(0, 3).map((tag: string) => (
                                  <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-red-500/10 border border-red-500/20 rounded text-red-400">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* View All Link */}
                <div className="p-6 pt-0">
                  <button className="w-full py-3 glass-morphism border border-red-500/30 rounded-lg font-mono text-sm text-red-400 hover:bg-red-500/10 transition-all flex items-center justify-center gap-2 group">
                    <Network className="w-4 h-4" />
                    ANALYZE ALL TRENDING
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* New Arrivals Panel */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative glass-morphism rounded-xl border border-cyan-500/30 overflow-hidden">
                {/* Panel Header */}
                <div className="p-6 border-b border-cyan-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Cpu className="w-8 h-8 text-cyan-400" />
                        <div className={`absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full ${pulseAnimation ? 'animate-pulse' : ''}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400">NEW DEPLOYMENTS</h3>
                        <p className="text-xs font-mono text-gray-500">LATEST ADDITIONS • AUTO-INDEXED</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className={`w-5 h-5 text-cyan-400 ${pulseAnimation ? 'animate-pulse' : ''}`} />
                      <span className="font-mono text-xs text-cyan-400">NEW</span>
                    </div>
                  </div>

                  {/* Scanner Line Effect */}
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      style={{ animation: 'scan-line 3s linear infinite' }}
                    />
                  </div>
                </div>

                {/* New Server Items */}
                <div className="p-6 space-y-4">
                  {newest.map((server, index) => (
                    <Link
                      key={server.id}
                      href={`/mcp/servers/${server.slug}`}
                      className="block group/item"
                    >
                      <div className="relative">
                        {/* New Badge with Pulse */}
                        <div className="absolute -left-3 -top-2 z-10">
                          <div className="relative">
                            {pulseAnimation && <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping" />}
                            <div className="relative w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                              <span className="font-mono text-xs font-bold text-black">NEW</span>
                            </div>
                          </div>
                        </div>

                        {/* Futuristic Card */}
                        <div className="relative overflow-hidden rounded-lg border border-cyan-500/20 group-hover/item:border-cyan-400/50 transition-all">
                          {/* Animated Background Pattern */}
                          <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500" style={{ animation: `holographic-shift ${10 + index * 2}s ease infinite` }} />
                          </div>

                          <div className="relative glass-morphism p-4">
                            <div className="flex items-start gap-4">
                              <div className="relative">
                                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full" />
                                <span className="relative text-3xl">{server.emoji}</span>
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h4 className="font-bold text-lg group-hover/item:text-cyan-400 transition-colors">{server.name}</h4>
                                    <p className="text-xs text-gray-500 mt-1">{server.description}</p>
                                  </div>
                                  <div className="flex flex-col items-end gap-1">
                                    <span className="px-2 py-0.5 text-xs font-mono bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-400">
                                      {index === 0 ? 'TODAY' : index === 1 ? '1 DAY AGO' : `${index + 1} DAYS AGO`}
                                    </span>
                                  </div>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-3 gap-2 mt-3">
                                  <div className="text-center p-1 bg-gray-900/50 rounded">
                                    <div className="text-xs font-mono text-cyan-400">{server.stars}</div>
                                    <div className="text-xs text-gray-600">stars</div>
                                  </div>
                                  <div className="text-center p-1 bg-gray-900/50 rounded">
                                    <div className="text-xs font-mono text-purple-400">{server.users}</div>
                                    <div className="text-xs text-gray-600">users</div>
                                  </div>
                                  <div className="text-center p-1 bg-gray-900/50 rounded">
                                    <div className="text-xs font-mono text-green-400">{server.setupTime}</div>
                                    <div className="text-xs text-gray-600">setup</div>
                                  </div>
                                </div>

                                {/* Tech Stack Indicators */}
                                <div className="flex items-center gap-2 mt-3">
                                  <Code2 className="w-3 h-3 text-gray-500" />
                                  {/* Tags - temporarily disabled
                                  <div className="flex gap-1">
                                    {server.tags.slice(0, 4).map((tag, i) => (
                                      <span 
                                        key={tag}
                                        className="w-2 h-2 rounded-full"
                                        style={{ 
                                          background: `hsl(${180 + i * 30}, 100%, 50%)`,
                                          boxShadow: `0 0 10px hsl(${180 + i * 30}, 100%, 50%)`
                                        }}
                                        title={tag}
                                      />
                                    ))}
                                  </div>
                                  */}
                                  <span className="text-xs font-mono text-gray-600">
                                    {server.category.toUpperCase()}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Explore Link */}
                <div className="p-6 pt-0">
                  <button className="w-full py-3 glass-morphism border border-cyan-500/30 rounded-lg font-mono text-sm text-cyan-400 hover:bg-cyan-500/10 transition-all flex items-center justify-center gap-2 group">
                    <Layers className="w-4 h-4" />
                    EXPLORE ALL NEW
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div className="mt-12 glass-morphism rounded-lg border border-cyan-500/20 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-green-400" />
                  <span className="font-mono text-xs text-gray-400">SYSTEM STATUS:</span>
                  <span className="font-mono text-xs text-green-400">OPTIMAL</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-purple-400" />
                  <span className="font-mono text-xs text-gray-400">LATEST COMMIT:</span>
                  <span className="font-mono text-xs text-purple-400">2 MIN AGO</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-1 h-4 bg-gradient-to-t from-cyan-500 to-cyan-300 rounded-full"
                      style={{ 
                        height: `${Math.random() * 16 + 8}px`,
                        animation: pulseAnimation ? `pulse ${1 + i * 0.2}s ease-in-out infinite` : 'none'
                      }}
                    />
                  ))}
                </div>
                <span className="font-mono text-xs text-gray-500">SIGNAL STRENGTH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Directory */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {mcpCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 font-mono text-sm rounded-lg transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black'
                      : 'glass-morphism border border-cyan-500/30 hover:border-cyan-400/50'
                  }`}
                >
                  {category.emoji} {category.name}
                </button>
              ))}
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 glass-morphism border border-cyan-500/30 rounded-lg bg-black font-mono text-sm focus:outline-none focus:border-cyan-400"
            >
              <option value="stars">⭐ Most Stars</option>
              <option value="users">👥 Most Users</option>
              <option value="name">🔤 Alphabetical</option>
            </select>
          </div>

          {/* Results Count */}
          <p className="font-mono text-sm mb-6 text-gray-400">
            Found {filteredServers.length} servers {selectedCategory !== 'all' && `in ${selectedCategory}`}
          </p>

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

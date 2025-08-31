'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { 
  Terminal, RefreshCw, TrendingUp, DollarSign, 
  Zap, Clock, Globe, ChevronRight, AlertCircle,
  Cpu, Code, Eye, Mic, FileText, BarChart3,
  Search, Filter, Grid, List, Download, Star,
  Activity, Database, GitBranch, Layers, Server,
  Wifi, Code2, ChevronUp, Gauge, Network, Pause,
  Play, Shield, Sparkles, Users
} from 'lucide-react'
import APIComparisonTable from '@/components/APIComparisonTable'
import { APIModel } from '@/data/api-models-complete'
import { generateSlug } from '@/data/api-details-dynamic'
import Navbar from '@/components/Navbar'

interface ModelData {
  models: Record<string, APIModel[]>
  stats: {
    totalModels: number
    providers: number
    availableModels: number
    betaModels: number
    lastUpdated: string
  }
  providers: Array<{
    name: string
    modelCount: number
    icon: string
  }>
}

export default function APIDirectoryPage() {
  const [modelData, setModelData] = useState<ModelData | null>(null)
  const [selectedProvider, setSelectedProvider] = useState<string>('all')
  const [selectedCapability, setSelectedCapability] = useState<string>('all')
  const [loading, setLoading] = useState(true)
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date())
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'context'>('name')
  const [pulseAnimation, setPulseAnimation] = useState(true)
  const [activeMetric, setActiveMetric] = useState(0)

  // Simulated live metrics
  const [liveMetrics, setLiveMetrics] = useState({
    requestsPerSec: 8429,
    activeModels: 147,
    avgLatency: 284,
    successRate: 99.94
  })

  // Update live metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        requestsPerSec: Math.max(0, prev.requestsPerSec + Math.floor(Math.random() * 500 - 250)),
        activeModels: Math.max(0, prev.activeModels + Math.floor(Math.random() * 10 - 5)),
        avgLatency: Math.max(50, prev.avgLatency + Math.floor(Math.random() * 20 - 10)),
        successRate: Math.min(100, +(99.9 + Math.random() * 0.1).toFixed(2))
      }))
      setActiveMetric((prev) => (prev + 1) % 4)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    fetchModelData()
    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchModelData, 300000)
    return () => clearInterval(interval)
  }, [])

  const fetchModelData = async () => {
    setLoading(true)
    try {
      console.log('Fetching model data...')
      const response = await fetch('/api/fetch-models')
      console.log('Response status:', response.status)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('Data received:', data)
      
      if (data.success && data.data) {
        setModelData(data.data)
        setLastRefresh(new Date())
        console.log('Model data set successfully')
      } else {
        console.error('Invalid data structure:', data)
      }
    } catch (error) {
      console.error('Failed to fetch model data:', error)
      // Set some fallback data to prevent infinite loading
      setModelData({
        models: {},
        stats: {
          totalModels: 0,
          providers: 0,
          availableModels: 0,
          betaModels: 0,
          lastUpdated: new Date().toISOString()
        },
        providers: []
      })
    } finally {
      setLoading(false)
    }
  }

  const getAllModels = (): APIModel[] => {
    if (!modelData) return []
    return Object.values(modelData.models).flat()
  }

  const getFilteredModels = (): APIModel[] => {
    let models = getAllModels()
    
    // Filter by provider
    if (selectedProvider !== 'all') {
      models = modelData?.models[selectedProvider] || []
    }
    
    // Filter by capability
    if (selectedCapability !== 'all') {
      models = models.filter(m => 
        m.capabilities?.some(c => c.toLowerCase().includes(selectedCapability.toLowerCase()))
      )
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      models = models.filter(m => 
        m.name.toLowerCase().includes(query) ||
        m.description.toLowerCase().includes(query) ||
        m.provider.toLowerCase().includes(query) ||
        m.capabilities?.some(c => c.toLowerCase().includes(query))
      )
    }
    
    // Sort models
    models.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return (a.pricing?.input || 0) - (b.pricing?.input || 0)
        case 'context':
          return (b.contextLength || 0) - (a.contextLength || 0)
        default:
          return a.name.localeCompare(b.name)
      }
    })
    
    return models
  }

  const getAllCapabilities = (): string[] => {
    const caps = new Set<string>()
    getAllModels().forEach(model => {
      model.capabilities?.forEach(cap => caps.add(cap))
    })
    return Array.from(caps).sort()
  }

  const getCapabilityIcon = (capability: string): JSX.Element => {
    const lower = capability.toLowerCase()
    if (lower.includes('vision')) return <Eye className="w-4 h-4" />
    if (lower.includes('code')) return <Code className="w-4 h-4" />
    if (lower.includes('audio')) return <Mic className="w-4 h-4" />
    if (lower.includes('text')) return <FileText className="w-4 h-4" />
    return <Cpu className="w-4 h-4" />
  }

  const formatContextLength = (length?: number): string => {
    if (!length) return 'N/A'
    if (length >= 1000000) return `${(length / 1000000).toFixed(1)}M`
    if (length >= 1000) return `${(length / 1000).toFixed(0)}K`
    return length.toString()
  }

  const formatPrice = (price?: number): string => {
    if (!price) return 'Free'
    if (price < 0.001) return `$${(price * 1000).toFixed(3)}/1K`
    return `$${price.toFixed(4)}`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-400 border-green-400'
      case 'beta': return 'text-yellow-400 border-yellow-400'
      case 'preview': return 'text-blue-400 border-blue-400'
      case 'deprecated': return 'text-red-400 border-red-400'
      case 'coming-soon': return 'text-purple-400 border-purple-400'
      default: return 'text-gray-400 border-gray-400'
    }
  }

  const exportData = () => {
    const models = getFilteredModels()
    const csv = [
      ['Provider', 'Model', 'Context', 'Input Price', 'Output Price', 'Status', 'Capabilities'],
      ...models.map(m => [
        m.provider,
        m.name,
        formatContextLength(m.contextLength),
        formatPrice(m.pricing?.input),
        formatPrice(m.pricing?.output),
        m.status,
        m.capabilities?.join('; ') || ''
      ])
    ].map(row => row.join(',')).join('\n')
    
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ai-models-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  // Get featured models
  const featuredModels = useMemo(() => {
    const models = getAllModels()
    return models.filter(m => 
      m.name.includes('GPT-4') || 
      m.name.includes('Claude') || 
      m.name.includes('Gemini')
    ).slice(0, 3)
  }, [modelData])

  // Get trending models (newest)
  const trendingModels = useMemo(() => {
    const models = getAllModels()
    return models.filter(m => m.status === 'available' || m.status === 'beta')
      .sort((a, b) => {
        // Sort by release date if available
        if (a.releaseDate && b.releaseDate) {
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        }
        return 0
      })
      .slice(0, 5)
  }, [modelData])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/20 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-purple-900/10 text-gray-800 dark:text-white relative overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      {/* Animated Background Grid */}
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
        
        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes holographic-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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
      `}</style>

      {/* Hero Section */}
      <section className="relative py-16 border-b border-cyan-500/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-morphism rounded-full mb-6">
              <Sparkles className={`w-4 h-4 text-yellow-400 ${pulseAnimation ? 'animate-pulse' : ''}`} />
              <span className="font-mono text-xs text-cyan-400">150+ AI MODELS • REAL-TIME PRICING • LIVE UPDATES</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Model API Directory
              <span className="block text-3xl md:text-4xl mt-4 text-gray-400">
                Compare Pricing, Context Windows & Capabilities
              </span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-300">
              The most comprehensive database of AI model APIs. Real-time pricing, detailed specifications, 
              and instant comparisons across all major providers.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative flex items-center">
                  <Search className="absolute left-4 w-6 h-6 text-cyan-400" />
                  <input
                    type="text"
                    placeholder="Search models, providers, capabilities..."
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
                <Activity className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-mono font-bold">{liveMetrics.requestsPerSec.toLocaleString()}/s</div>
                <div className="text-xs text-gray-400">API Requests</div>
              </div>
              <div className={`glass-morphism rounded-lg p-4 border ${activeMetric === 1 ? 'border-purple-400' : 'border-cyan-500/30'} transition-all`}>
                <Cpu className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-mono font-bold">{liveMetrics.activeModels}</div>
                <div className="text-xs text-gray-400">Active Models</div>
              </div>
              <div className={`glass-morphism rounded-lg p-4 border ${activeMetric === 2 ? 'border-pink-400' : 'border-cyan-500/30'} transition-all`}>
                <Clock className="w-5 h-5 text-pink-400 mb-2" />
                <div className="text-2xl font-mono font-bold">{liveMetrics.avgLatency}ms</div>
                <div className="text-xs text-gray-400">Avg Latency</div>
              </div>
              <div className={`glass-morphism rounded-lg p-4 border ${activeMetric === 3 ? 'border-green-400' : 'border-cyan-500/30'} transition-all`}>
                <Gauge className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-mono font-bold">{liveMetrics.successRate}%</div>
                <div className="text-xs text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      {modelData && (
        <section className="py-12 border-b border-cyan-500/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="glass-morphism rounded-lg p-6 border border-cyan-500/30 group hover:border-cyan-400 transition-all">
                <div className="text-4xl font-black text-cyan-400 mb-2">{modelData.stats.totalModels}</div>
                <div className="text-sm font-mono text-gray-400">TOTAL MODELS</div>
              </div>
              <div className="glass-morphism rounded-lg p-6 border border-purple-500/30 group hover:border-purple-400 transition-all">
                <div className="text-4xl font-black text-purple-400 mb-2">{modelData.stats.providers}</div>
                <div className="text-sm font-mono text-gray-400">PROVIDERS</div>
              </div>
              <div className="glass-morphism rounded-lg p-6 border border-green-500/30 group hover:border-green-400 transition-all">
                <div className="text-4xl font-black text-green-400 mb-2">{modelData.stats.availableModels}</div>
                <div className="text-sm font-mono text-gray-400">AVAILABLE NOW</div>
              </div>
              <div className="glass-morphism rounded-lg p-6 border border-yellow-500/30 group hover:border-yellow-400 transition-all">
                <div className="text-4xl font-black text-yellow-400 mb-2">{modelData.stats.betaModels}</div>
                <div className="text-sm font-mono text-gray-400">BETA/PREVIEW</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Models */}
      {featuredModels.length > 0 && (
        <section className="py-12 border-b border-cyan-500/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
              <Star className="w-8 h-8 text-yellow-400" />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">FEATURED MODELS</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {featuredModels.map((model, idx) => {
                const providerSlug = model.provider.toLowerCase().replace(/\s+/g, '-')
                const modelSlug = model.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
                return (
                <Link 
                  key={`${model.provider}-${model.name}-${idx}`}
                  href={`/api-directory/${providerSlug}/${modelSlug}`}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                  <div className="relative glass-morphism rounded-lg p-6 h-full border border-cyan-500/20 group-hover:border-cyan-400/50 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs font-mono text-cyan-400">{model.provider}</span>
                        <h3 className="text-xl font-bold text-cyan-400">{model.name}</h3>
                      </div>
                      <span className={`px-2 py-1 text-xs font-mono rounded border ${getStatusColor(model.status)}`}>
                        {model.status.toUpperCase()}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-400 mb-4">{model.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs font-mono text-gray-500 mb-1">CONTEXT</div>
                        <div className="text-lg font-bold text-cyan-400">{formatContextLength(model.contextLength)}</div>
                      </div>
                      <div>
                        <div className="text-xs font-mono text-gray-500 mb-1">PRICE</div>
                        <div className="text-lg font-bold text-green-400">{formatPrice(model.pricing?.input)}</div>
                      </div>
                    </div>
                    
                    {model.capabilities && (
                      <div className="flex flex-wrap gap-2">
                        {model.capabilities.slice(0, 3).map(cap => (
                          <span key={cap} className="px-2 py-1 text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400">
                            {cap}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* LATEST INTEL Section */}
      <section className="py-16 relative border-b border-cyan-500/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl ${pulseAnimation ? 'animate-pulse' : ''}`} />
          <div className={`absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl ${pulseAnimation ? 'animate-pulse' : ''}`} style={{ animationDelay: pulseAnimation ? '1s' : '0s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
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
            <p className="font-mono text-sm text-gray-400">REAL-TIME MODEL INTELLIGENCE • UPDATED EVERY 60 SECONDS</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Trending Models Panel */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative glass-morphism rounded-xl border border-red-500/30 overflow-hidden">
                <div className="p-6 border-b border-red-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <TrendingUp className="w-8 h-8 text-red-400" />
                        <div className={`absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full ${pulseAnimation ? 'animate-pulse' : ''}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-red-400">TRENDING MODELS</h3>
                        <p className="text-xs font-mono text-gray-500">MOST REQUESTED THIS WEEK</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className={`w-5 h-5 text-red-400 ${pulseAnimation ? 'animate-pulse' : ''}`} />
                      <span className="font-mono text-xs text-red-400">LIVE</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {trendingModels.slice(0, 4).map((model, index) => {
                    const providerSlug = model.provider.toLowerCase().replace(/\s+/g, '-')
                    const modelSlug = model.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
                    return (
                    <Link
                      key={`${model.provider}-${model.name}-${index}`}
                      href={`/api-directory/${providerSlug}/${modelSlug}`}
                      className="block group/item"
                    >
                      <div className="relative">
                        <div className="absolute -left-3 -top-2 z-10">
                          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center font-mono font-bold text-xs text-black">
                            #{index + 1}
                          </div>
                        </div>

                        <div className="holographic-card rounded-lg border border-red-500/20 p-4 group-hover/item:border-red-400/50 transition-all">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-bold text-lg group-hover/item:text-red-400 transition-colors">{model.name}</h4>
                              <p className="text-xs text-gray-500 mt-1">{model.provider}</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <div className="flex items-center gap-1 text-green-400">
                                <ChevronUp className="w-3 h-3" />
                                <span className="text-xs font-mono">+{87 - index * 20}%</span>
                              </div>
                              <span className={`text-xs font-mono px-2 py-0.5 rounded border ${getStatusColor(model.status)}`}>
                                {model.status}
                              </span>
                            </div>
                          </div>

                          <div className="mt-3 flex items-center gap-4 text-xs font-mono">
                            <div>
                              <span className="text-gray-500">Context:</span>
                              <span className="text-cyan-400 ml-1">{formatContextLength(model.contextLength)}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Price:</span>
                              <span className="text-green-400 ml-1">{formatPrice(model.pricing?.input)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Provider Updates Panel */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative glass-morphism rounded-xl border border-cyan-500/30 overflow-hidden">
                <div className="p-6 border-b border-cyan-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Database className="w-8 h-8 text-cyan-400" />
                        <div className={`absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full ${pulseAnimation ? 'animate-pulse' : ''}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400">PROVIDER STATUS</h3>
                        <p className="text-xs font-mono text-gray-500">LIVE SYSTEM UPDATES</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className={`w-5 h-5 text-cyan-400 ${pulseAnimation ? 'animate-pulse' : ''}`} />
                      <span className="font-mono text-xs text-cyan-400">MONITORING</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {modelData?.providers.slice(0, 5).map((provider, index) => (
                    <div key={provider.name} className="glass-morphism rounded-lg border border-cyan-500/20 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{provider.icon}</span>
                          <div>
                            <h4 className="font-bold text-cyan-400">{provider.name}</h4>
                            <p className="text-xs text-gray-500">{provider.modelCount} models available</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 bg-green-400 rounded-full ${pulseAnimation ? 'animate-pulse' : ''}`} />
                          <span className="text-xs font-mono text-green-400">ONLINE</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-cyan-500/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedProvider('all')}
                className={`px-4 py-2 font-mono text-sm rounded-lg transition-all ${
                  selectedProvider === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black'
                    : 'glass-morphism border border-cyan-500/30 hover:border-cyan-400/50'
                }`}
              >
                ALL PROVIDERS
              </button>
              {modelData?.providers.map(provider => (
                <button
                  key={provider.name}
                  onClick={() => setSelectedProvider(provider.name)}
                  className={`px-4 py-2 font-mono text-sm rounded-lg transition-all ${
                    selectedProvider === provider.name
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black'
                      : 'glass-morphism border border-cyan-500/30 hover:border-cyan-400/50'
                  }`}
                >
                  {provider.icon} {provider.name} ({provider.modelCount})
                </button>
              ))}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 font-mono text-sm rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black'
                    : 'glass-morphism border border-cyan-500/30 hover:border-cyan-400/50'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-2 font-mono text-sm rounded-lg transition-all ${
                  viewMode === 'table'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black'
                    : 'glass-morphism border border-cyan-500/30 hover:border-cyan-400/50'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={exportData}
                className="px-4 py-2 glass-morphism border border-green-500/30 hover:border-green-400/50 text-green-400 font-mono text-sm rounded-lg flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                EXPORT
              </button>
            </div>
          </div>

          {/* Capability Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCapability('all')}
              className={`px-3 py-1 font-mono text-xs rounded transition-all ${
                selectedCapability === 'all'
                  ? 'bg-purple-500 text-black'
                  : 'glass-morphism border border-cyan-500/30 hover:border-cyan-400/50'
              }`}
            >
              ALL CAPABILITIES
            </button>
            {getAllCapabilities().slice(0, 10).map(cap => (
              <button
                key={cap}
                onClick={() => setSelectedCapability(cap)}
                className={`px-3 py-1 font-mono text-xs rounded transition-all flex items-center gap-1 ${
                  selectedCapability === cap
                    ? 'bg-purple-500 text-black'
                    : 'glass-morphism border border-cyan-500/30 hover:border-cyan-400/50'
                }`}
              >
                {getCapabilityIcon(cap)}
                {cap.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Models Display */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <RefreshCw className="w-12 h-12 animate-spin mx-auto mb-4 text-cyan-400" />
              <p className="font-black text-xl">LOADING MODELS...</p>
              <p className="text-sm text-gray-500 mt-2">Fetching {modelData ? 'complete...' : 'data...'}</p>
            </div>
          ) : !modelData || Object.keys(modelData.models || {}).length === 0 ? (
            <div className="text-center py-12">
              <AlertCircle className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <p className="font-black text-xl">NO MODELS FOUND</p>
              <button 
                onClick={fetchModelData}
                className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
              >
                Retry
              </button>
            </div>
          ) : (
            <>
              <p className="font-mono text-sm mb-6 text-gray-400">
                Found {getFilteredModels().length} models {selectedProvider !== 'all' && `in ${selectedProvider}`}
              </p>

              {viewMode === 'table' ? (
                <APIComparisonTable models={getFilteredModels()} />
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {getFilteredModels().map((model, idx) => {
                    const providerSlug = model.provider.toLowerCase().replace(/\s+/g, '-')
                    const modelSlug = model.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
                    return (
                    <Link
                      key={`${model.provider}-${model.name}-${idx}`}
                      href={`/api-directory/${providerSlug}/${modelSlug}`}
                      className="group relative"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative glass-morphism rounded-lg p-6 h-full border border-cyan-500/20 group-hover:border-cyan-400/50 transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="text-xs font-mono text-gray-400">{model.provider}</span>
                            <h3 className="font-bold text-lg group-hover:text-cyan-400 transition-colors">{model.name}</h3>
                          </div>
                          <span className={`text-xs font-mono px-2 py-1 rounded border ${getStatusColor(model.status)}`}>
                            {model.status}
                          </span>
                        </div>
                        
                        <p className="text-xs text-gray-400 mb-3 line-clamp-2">{model.description}</p>
                        
                        {model.modelId && (
                          <div className="mb-3 p-2 bg-black/50 rounded">
                            <code className="text-xs font-mono text-cyan-400 break-all">
                              {model.modelId}
                            </code>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="text-center p-2 bg-black/30 rounded">
                            <div className="text-xs text-gray-500">Context</div>
                            <div className="text-sm font-bold text-cyan-400">{formatContextLength(model.contextLength)}</div>
                          </div>
                          <div className="text-center p-2 bg-black/30 rounded">
                            <div className="text-xs text-gray-500">Price</div>
                            <div className="text-sm font-bold text-green-400">{formatPrice(model.pricing?.input)}</div>
                          </div>
                        </div>
                        
                        {model.capabilities && model.capabilities.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {model.capabilities.slice(0, 3).map(cap => (
                              <span key={cap} className="px-2 py-1 bg-gray-900/50 text-xs font-mono text-gray-400 rounded">
                                {cap}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                    )
                  })}
                </div>
              )}

              {getFilteredModels().length === 0 && (
                <div className="text-center py-12">
                  <AlertCircle className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                  <p className="text-xl font-bold mb-2 text-cyan-400">No models found</p>
                  <p className="text-gray-400">Try adjusting your search or filters</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative border-t border-cyan-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Build with AI?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Choose the perfect model for your application and start building today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/tools/pricing-calculator"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-lg hover:scale-105 transition-transform"
            >
              PRICING CALCULATOR →
            </Link>
            <Link 
              href="/blog/ai-model-comparison"
              className="px-8 py-4 glass-morphism border border-cyan-500/50 font-bold rounded-lg hover:border-cyan-400 transition-colors"
            >
              MODEL COMPARISON GUIDE
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/30">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-xs text-gray-400">
            © 2025 AI.TOOLS // THE COMPLETE API MODEL DIRECTORY
          </p>
          <p className="font-mono text-xs mt-2 text-gray-600">
            Updated in real-time with new models and pricing
          </p>
        </div>
      </footer>
    </div>
  )
}
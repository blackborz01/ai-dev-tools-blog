'use client'

import { useState, useEffect } from 'react'
// import { useSession } from 'next-auth/react'
// import { redirect } from 'next/navigation'
import { 
  Activity, Database, Code2, Zap, RefreshCw, Download,
  CheckCircle, XCircle, Clock, TrendingUp, Calendar,
  Globe, GitBranch, Rss, Search
} from 'lucide-react'

interface DiscoveryStats {
  tools: {
    total: number
    static: number
    discovered: number
    lastDay: number
  }
  mcp: {
    total: number
    static: number
    discovered: number
  }
  apis: {
    total: number
    static: number
    discovered: number
  }
  lastUpdated: string
}

export default function AdminDashboard() {
  // const { data: session, status } = useSession()
  const [stats, setStats] = useState<DiscoveryStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [lastDiscovery, setLastDiscovery] = useState<any[]>([])
  const [discoveryLogs, setDiscoveryLogs] = useState<any[]>([])

  // Temporarily disabled authentication for testing
  // useEffect(() => {
  //   if (status === 'loading') return
  //   if (!session || session.user?.email !== 'admin@aidevtoolsdaily.com') {
  //     redirect('/')
  //   }
  // }, [session, status])

  // Fetch stats
  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      const data = await response.json()
      setStats(data.stats)
      setLastDiscovery(data.recentDiscoveries || [])
      setDiscoveryLogs(data.logs || [])
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  // Initial load
  useEffect(() => {
    fetchStats()
    // Refresh every 30 seconds
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [])

  // Manual discovery trigger
  const triggerDiscovery = async () => {
    setRefreshing(true)
    try {
      const response = await fetch('/api/discover', { method: 'GET' })
      const data = await response.json()
      
      if (data.success) {
        alert(`Discovered ${data.discovered.total} new items!`)
        await fetchStats() // Refresh stats
      }
    } catch (error) {
      console.error('Discovery error:', error)
      alert('Discovery failed')
    } finally {
      setRefreshing(false)
    }
  }

  // Trigger RSS aggregation
  const triggerRSS = async () => {
    setRefreshing(true)
    try {
      const response = await fetch('/api/rss-aggregator', { method: 'GET' })
      const data = await response.json()
      
      if (data.success) {
        alert(`Found ${data.count} items from RSS feeds!`)
        await fetchStats()
      }
    } catch (error) {
      console.error('RSS error:', error)
      alert('RSS aggregation failed')
    } finally {
      setRefreshing(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-cyan-400" />
          <p>Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 border-b border-gray-800 pb-6">
          <h1 className="text-4xl font-black mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI Tools Discovery Dashboard
          </h1>
          <p className="text-gray-400">Monitor automatic tool discovery and integration</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Total Tools */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Code2 className="w-8 h-8 text-cyan-400" />
              <span className="text-xs text-green-400 font-mono">
                +{stats?.tools.lastDay || 0} today
              </span>
            </div>
            <div className="text-3xl font-black mb-1">{stats?.tools.total.toLocaleString() || 0}</div>
            <div className="text-sm text-gray-400">Total AI Tools</div>
            <div className="mt-4 space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Static:</span>
                <span className="text-gray-300">{stats?.tools.static.toLocaleString() || 0}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Discovered:</span>
                <span className="text-green-400">{stats?.tools.discovered.toLocaleString() || 0}</span>
              </div>
            </div>
          </div>

          {/* MCP Servers */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Database className="w-8 h-8 text-purple-400" />
              <Activity className="w-4 h-4 text-green-400 animate-pulse" />
            </div>
            <div className="text-3xl font-black mb-1">{stats?.mcp.total || 0}</div>
            <div className="text-sm text-gray-400">MCP Servers</div>
            <div className="mt-4 space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Static:</span>
                <span className="text-gray-300">{stats?.mcp.static || 0}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Discovered:</span>
                <span className="text-green-400">{stats?.mcp.discovered || 0}</span>
              </div>
            </div>
          </div>

          {/* APIs */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-8 h-8 text-yellow-400" />
              <Activity className="w-4 h-4 text-green-400 animate-pulse" />
            </div>
            <div className="text-3xl font-black mb-1">{stats?.apis.total || 0}</div>
            <div className="text-sm text-gray-400">AI APIs</div>
            <div className="mt-4 space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Static:</span>
                <span className="text-gray-300">{stats?.apis.static || 0}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Discovered:</span>
                <span className="text-green-400">{stats?.apis.discovered || 0}</span>
              </div>
            </div>
          </div>

          {/* Last Update */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-green-400" />
              <CheckCircle className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-lg font-bold mb-1">
              {stats?.lastUpdated ? new Date(stats.lastUpdated).toLocaleTimeString() : 'Never'}
            </div>
            <div className="text-sm text-gray-400">Last Updated</div>
            <div className="mt-4">
              <div className="text-xs text-gray-500">
                Auto-refresh: Every hour
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <button
            onClick={triggerDiscovery}
            disabled={refreshing}
            className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold hover:from-cyan-500 hover:to-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {refreshing ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <Search className="w-5 h-5" />
            )}
            Discover Now
          </button>

          <button
            onClick={triggerRSS}
            disabled={refreshing}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold hover:from-purple-500 hover:to-pink-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Rss className="w-5 h-5" />
            Fetch RSS
          </button>

          <button
            onClick={() => window.location.href = '/api/discover'}
            className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg font-bold hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Export Data
          </button>

          <button
            onClick={fetchStats}
            className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg font-bold hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Refresh Stats
          </button>
        </div>

        {/* Recent Discoveries */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-cyan-400" />
            Recent Discoveries
          </h2>
          
          <div className="space-y-3">
            {lastDiscovery.length > 0 ? (
              lastDiscovery.slice(0, 10).map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0">
                  <div className="flex-1">
                    <div className="font-semibold text-white">{item.name}</div>
                    <div className="text-sm text-gray-400">{item.category} • {item.source}</div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(item.discoveredAt).toLocaleString()}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">No recent discoveries</p>
            )}
          </div>
        </div>

        {/* Discovery Sources Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GitHub Status */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-gray-400" />
                <span className="font-semibold">GitHub API</span>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Status:</span>
                <span className="text-green-400">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Rate Limit:</span>
                <span className="text-gray-300">5000/hour</span>
              </div>
            </div>
          </div>

          {/* RSS Feeds Status */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Rss className="w-5 h-5 text-gray-400" />
                <span className="font-semibold">RSS Feeds</span>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Active Feeds:</span>
                <span className="text-gray-300">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Last Check:</span>
                <span className="text-gray-300">5 min ago</span>
              </div>
            </div>
          </div>

          {/* Web Scraping Status */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-400" />
                <span className="font-semibold">Web Scraping</span>
              </div>
              <Clock className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Status:</span>
                <span className="text-yellow-400">Scheduled</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Next Run:</span>
                <span className="text-gray-300">In 45 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

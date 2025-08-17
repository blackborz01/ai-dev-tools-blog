'use client'

import { useDataStats, useAnimatedCount } from '@/hooks/useDataStats'
import { Activity, Database, Code2, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function DynamicStatsBar() {
  const { stats, formattedCounts, loading } = useDataStats(60000) // Refresh every minute
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Use animated counts for visual appeal
  const aiToolsCount = useAnimatedCount(stats?.aiTools.total || 0, 2500)
  const mcpCount = useAnimatedCount(stats?.mcpServers.total || 0, 2000)
  const apiCount = useAnimatedCount(stats?.apis.total || 0, 1500)

  if (!mounted) {
    return (
      <div className="flex items-center gap-6 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span className="text-gray-400">TOOLS:</span>
          <span className="text-cyan-400">---</span>
        </div>
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-purple-400" />
          <span className="text-gray-400">MCP:</span>
          <span className="text-purple-400">---</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-gray-400">APIs:</span>
          <span className="text-yellow-400">---</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-6 text-xs font-mono">
      {/* AI Tools Count */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <Code2 className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
        <span className="text-gray-400">TOOLS:</span>
        <span className="text-cyan-400 font-bold">
          {loading ? '...' : aiToolsCount.toLocaleString()}
        </span>
        {stats?.aiTools.new && stats.aiTools.new > 0 && (
          <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded text-[10px] font-bold">
            +{stats.aiTools.new}
          </span>
        )}
      </div>

      {/* MCP Servers Count */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <Database className="w-4 h-4 text-purple-400 group-hover:animate-pulse" />
        <span className="text-gray-400">MCP:</span>
        <span className="text-purple-400 font-bold">
          {loading ? '...' : mcpCount.toLocaleString()}
        </span>
        {stats?.mcpServers.beta && stats.mcpServers.beta > 0 && (
          <span className="px-1.5 py-0.5 bg-orange-500/20 text-orange-400 rounded text-[10px] font-bold">
            BETA
          </span>
        )}
      </div>

      {/* API Count */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <Zap className="w-4 h-4 text-yellow-400 group-hover:animate-pulse" />
        <span className="text-gray-400">APIs:</span>
        <span className="text-yellow-400 font-bold">
          {loading ? '...' : apiCount.toLocaleString()}
        </span>
      </div>

      {/* Live Status Indicator */}
      <div className="flex items-center gap-2">
        <Activity className="w-4 h-4 text-green-400 animate-pulse" />
        <span className="text-green-400 text-[10px]">LIVE</span>
      </div>
    </div>
  )
}

// Larger hero version with more details
export function DynamicStatsHero() {
  const { stats, loading } = useDataStats(30000) // Refresh every 30 seconds
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const totalTools = stats?.aiTools.total || 0
  const totalIntegrations = (stats?.mcpServers.total || 0) + (stats?.apis.total || 0)

  const animatedTools = useAnimatedCount(totalTools, 3000)
  const animatedIntegrations = useAnimatedCount(totalIntegrations, 2500)

  if (!mounted || loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="glass-card rounded-xl p-4 border border-cyan-500/20">
            <div className="h-8 bg-gray-800/50 rounded animate-pulse" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {/* Total AI Tools */}
      <div className="glass-card rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-400/50 transition-all group">
        <div className="flex items-center justify-between mb-2">
          <Code2 className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />
          <span className="text-[10px] text-green-400 font-mono">
            +{stats?.aiTools.new || 0} NEW
          </span>
        </div>
        <div className="text-2xl font-black text-white">
          {animatedTools.toLocaleString()}
        </div>
        <div className="text-xs text-gray-400 mt-1">AI Tools</div>
      </div>

      {/* MCP Servers */}
      <div className="glass-card rounded-xl p-4 border border-purple-500/20 hover:border-purple-400/50 transition-all group">
        <div className="flex items-center justify-between mb-2">
          <Database className="w-5 h-5 text-purple-400 group-hover:animate-pulse" />
          <span className="text-[10px] text-green-400 font-mono">
            {stats?.mcpServers.stable || 0} STABLE
          </span>
        </div>
        <div className="text-2xl font-black text-white">
          {stats?.mcpServers.total.toLocaleString() || '0'}
        </div>
        <div className="text-xs text-gray-400 mt-1">MCP Servers</div>
      </div>

      {/* APIs */}
      <div className="glass-card rounded-xl p-4 border border-yellow-500/20 hover:border-yellow-400/50 transition-all group">
        <div className="flex items-center justify-between mb-2">
          <Zap className="w-5 h-5 text-yellow-400 group-hover:animate-pulse" />
          <span className="text-[10px] text-green-400 font-mono">
            {stats?.apis.free || 0} FREE
          </span>
        </div>
        <div className="text-2xl font-black text-white">
          {stats?.apis.total.toLocaleString() || '0'}
        </div>
        <div className="text-xs text-gray-400 mt-1">AI APIs</div>
      </div>

      {/* Total Integrations */}
      <div className="glass-card rounded-xl p-4 border border-green-500/20 hover:border-green-400/50 transition-all group">
        <div className="flex items-center justify-between mb-2">
          <Activity className="w-5 h-5 text-green-400 animate-pulse" />
          <span className="text-[10px] text-green-400 font-mono">LIVE</span>
        </div>
        <div className="text-2xl font-black text-white">
          {animatedIntegrations.toLocaleString()}
        </div>
        <div className="text-xs text-gray-400 mt-1">Total Integrations</div>
      </div>
    </div>
  )
}

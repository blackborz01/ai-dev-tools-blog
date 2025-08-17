'use client'

import { useState, useEffect } from 'react'
import { RefreshCw, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface DiscoveredData {
  tools?: any[]
  servers?: any[]
  apis?: any[]
  lastUpdated?: string
}

export default function DataUpdateStatus() {
  const [isUpdating, setIsUpdating] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [discovered, setDiscovered] = useState<any>(null)

  useEffect(() => {
    // Check for last update time
    checkLastUpdate()
  }, [])

  const checkLastUpdate = async () => {
    try {
      // Try to fetch discovered data files
      const responses = await Promise.all([
        fetch('/api/cron/update-tools?check=true').catch(() => null)
      ])
      
      // Get the most recent update
      const now = new Date()
      const lastUpdateTime = localStorage.getItem('lastDataUpdate')
      if (lastUpdateTime) {
        setLastUpdate(new Date(lastUpdateTime).toLocaleString())
      }
    } catch (error) {
      console.error('Error checking last update:', error)
    }
  }

  const runUpdate = async () => {
    setIsUpdating(true)
    setStatus('loading')
    
    try {
      const response = await fetch('/api/cron/update-tools?manual=true')
      const data = await response.json()
      
      if (data.success) {
        setStatus('success')
        setDiscovered(data.discovered)
        const updateTime = new Date().toISOString()
        localStorage.setItem('lastDataUpdate', updateTime)
        setLastUpdate(new Date(updateTime).toLocaleString())
        
        // Refresh page after 2 seconds to show new data
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      } else {
        setStatus('error')
        console.error('Update failed:', data.error)
      }
    } catch (error) {
      setStatus('error')
      console.error('Update error:', error)
    } finally {
      setIsUpdating(false)
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setDiscovered(null)
      }, 5000)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-black/90 backdrop-blur-xl rounded-lg border border-cyan-500/30 p-4 min-w-[300px]">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-cyan-400">Data Updates</h3>
          <button
            onClick={runUpdate}
            disabled={isUpdating}
            className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            title="Run manual update"
          >
            {isUpdating ? (
              <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4 text-cyan-400" />
            )}
          </button>
        </div>
        
        {lastUpdate && (
          <p className="text-xs text-gray-400 mb-2">
            Last update: {lastUpdate}
          </p>
        )}
        
        {status === 'loading' && (
          <div className="flex items-center gap-2 text-xs text-yellow-400">
            <Loader2 className="w-3 h-3 animate-spin" />
            <span>Discovering new tools...</span>
          </div>
        )}
        
        {status === 'success' && discovered && (
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-green-400 mb-2">
              <CheckCircle className="w-3 h-3" />
              <span>Update successful!</span>
            </div>
            <div className="text-xs space-y-1 text-gray-300">
              <div>🤖 AI Tools: {discovered.aiTools} new</div>
              <div>🔧 MCP Servers: {discovered.mcpServers} new</div>
              <div>🌐 APIs: {discovered.apis} new</div>
              <div className="pt-1 border-t border-gray-700">
                Total: {discovered.total} items
              </div>
            </div>
          </div>
        )}
        
        {status === 'error' && (
          <div className="flex items-center gap-2 text-xs text-red-400">
            <AlertCircle className="w-3 h-3" />
            <span>Update failed. Try again.</span>
          </div>
        )}
        
        {status === 'idle' && !isUpdating && (
          <div className="text-xs text-gray-500">
            <p>• Auto-updates every hour</p>
            <p>• Click refresh to update now</p>
          </div>
        )}
      </div>
    </div>
  )
}

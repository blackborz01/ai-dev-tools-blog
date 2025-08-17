/**
 * Centralized data statistics service
 * Automatically counts and provides statistics for all data sources
 */

// Import AI tools data
import { generateMassiveToolsList } from '../data/ai-tools-mega'

// Import MCP servers data
import { mcpServers } from '../data/mcps-complete'

// Import API models data  
import { apiModels } from '../data/api-models-complete'

// Get the mega tools list once
const megaTools = generateMassiveToolsList()

export interface DataStats {
  aiTools: {
    total: number
    byCategory: Record<string, number>
    featured: number
    new: number
  }
  mcpServers: {
    total: number
    byCategory: Record<string, number>
    stable: number
    beta: number
    experimental: number
  }
  apis: {
    total: number
    byProvider: Record<string, number>
    free: number
    paid: number
  }
  totals: {
    allTools: number
    allIntegrations: number
    lastUpdated: string
  }
}

class DataStatsService {
  private static instance: DataStatsService
  private stats: DataStats | null = null
  private lastCalculated: Date | null = null
  private readonly CACHE_DURATION = 60000 // 1 minute cache

  private constructor() {}

  static getInstance(): DataStatsService {
    if (!DataStatsService.instance) {
      DataStatsService.instance = new DataStatsService()
    }
    return DataStatsService.instance
  }

  private shouldRecalculate(): boolean {
    if (!this.stats || !this.lastCalculated) return true
    
    const now = new Date()
    const timeDiff = now.getTime() - this.lastCalculated.getTime()
    return timeDiff > this.CACHE_DURATION
  }

  private calculateStats(): DataStats {
    // AI Tools Statistics
    const aiToolsStats = {
      total: megaTools.length,
      byCategory: megaTools.reduce((acc, tool) => {
        acc[tool.category] = (acc[tool.category] || 0) + 1
        return acc
      }, {} as Record<string, number>),
      featured: megaTools.filter(tool => 
        tool.description?.toLowerCase().includes('popular') || 
        tool.description?.toLowerCase().includes('leading')
      ).length,
      new: Math.floor(megaTools.length * 0.15) // 15% are considered "new"
    }

    // MCP Servers Statistics
    const mcpStats = {
      total: mcpServers.length,
      byCategory: mcpServers.reduce((acc, mcp) => {
        acc[mcp.category] = (acc[mcp.category] || 0) + 1
        return acc
      }, {} as Record<string, number>),
      stable: mcpServers.filter(mcp => mcp.status === 'stable').length,
      beta: mcpServers.filter(mcp => mcp.status === 'beta').length,
      experimental: mcpServers.filter(mcp => mcp.status === 'experimental').length
    }

    // API Statistics
    const apiStats = {
      total: apiModels.length,
      byProvider: apiModels.reduce((acc, api) => {
        const provider = api.provider || 'Unknown'
        acc[provider] = (acc[provider] || 0) + 1
        return acc
      }, {} as Record<string, number>),
      free: apiModels.filter(api => api.pricing === 'free').length,
      paid: apiModels.filter(api => api.pricing === 'paid').length
    }

    // Calculate totals
    const totals = {
      allTools: aiToolsStats.total,
      allIntegrations: mcpStats.total + apiStats.total,
      lastUpdated: new Date().toISOString()
    }

    return {
      aiTools: aiToolsStats,
      mcpServers: mcpStats,
      apis: apiStats,
      totals
    }
  }

  getStats(): DataStats {
    if (this.shouldRecalculate()) {
      this.stats = this.calculateStats()
      this.lastCalculated = new Date()
    }
    return this.stats!
  }

  // Convenience methods for common queries
  getTotalAITools(): number {
    return this.getStats().aiTools.total
  }

  getTotalMCPServers(): number {
    return this.getStats().mcpServers.total
  }

  getTotalAPIs(): number {
    return this.getStats().apis.total
  }

  getAllToolsCount(): number {
    return this.getStats().totals.allTools
  }

  getAllIntegrationsCount(): number {
    return this.getStats().totals.allIntegrations
  }

  getFormattedCounts() {
    const stats = this.getStats()
    return {
      aiTools: this.formatNumber(stats.aiTools.total),
      mcpServers: this.formatNumber(stats.mcpServers.total),
      apis: this.formatNumber(stats.apis.total),
      total: this.formatNumber(stats.totals.allTools + stats.totals.allIntegrations)
    }
  }

  private formatNumber(num: number): string {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K+`
    }
    return num.toString()
  }

  // Method to force refresh stats (useful after adding new data)
  refreshStats(): DataStats {
    this.stats = this.calculateStats()
    this.lastCalculated = new Date()
    return this.stats
  }
}

// Export singleton instance
export const dataStats = DataStatsService.getInstance()

// Export convenience functions
export const getDataStats = () => dataStats.getStats()
export const getTotalAITools = () => dataStats.getTotalAITools()
export const getTotalMCPServers = () => dataStats.getTotalMCPServers()
export const getTotalAPIs = () => dataStats.getTotalAPIs()
export const getFormattedCounts = () => dataStats.getFormattedCounts()

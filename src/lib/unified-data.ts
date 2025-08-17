/**
 * Unified Data Service
 * Combines static data with dynamically discovered tools
 */

import { generateMassiveToolsList } from '../data/ai-tools-mega'
import { mcpServers as staticMCPServers } from '../data/mcps-complete'
import { apiModels as staticAPIModels } from '../data/api-models-complete'
import fs from 'fs'
import path from 'path'

interface UnifiedData {
  aiTools: any[]
  mcpServers: any[]
  apis: any[]
  lastUpdated: Date
  sources: {
    static: number
    discovered: number
    total: number
  }
}

class UnifiedDataService {
  private static instance: UnifiedDataService
  private cache: UnifiedData | null = null
  private lastRefresh: Date | null = null
  private readonly CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

  static getInstance(): UnifiedDataService {
    if (!UnifiedDataService.instance) {
      UnifiedDataService.instance = new UnifiedDataService()
    }
    return UnifiedDataService.instance
  }

  // Load discovered tools from JSON files
  private loadDiscoveredTools(): any[] {
    try {
      const filePath = path.join(process.cwd(), 'src/data/discovered-tools.json')
      if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        return data.tools || []
      }
    } catch (error) {
      console.error('Error loading discovered tools:', error)
    }
    return []
  }

  // Load discovered MCP servers
  private loadDiscoveredMCP(): any[] {
    try {
      const filePath = path.join(process.cwd(), 'src/data/discovered-mcp.json')
      if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        return data.servers || []
      }
    } catch (error) {
      console.error('Error loading discovered MCP:', error)
    }
    return []
  }

  // Load discovered APIs
  private loadDiscoveredAPIs(): any[] {
    try {
      const filePath = path.join(process.cwd(), 'src/data/discovered-apis.json')
      if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        return data.apis || []
      }
    } catch (error) {
      console.error('Error loading discovered APIs:', error)
    }
    return []
  }

  // Merge and deduplicate data
  private mergeData(staticData: any[], discoveredData: any[]): any[] {
    const merged = [...staticData]
    const existingNames = new Set(staticData.map(item => 
      (item.name || item.title || '').toLowerCase()
    ))

    for (const item of discoveredData) {
      const itemName = (item.name || item.title || '').toLowerCase()
      if (!existingNames.has(itemName)) {
        merged.push({
          ...item,
          isDiscovered: true,
          addedAt: item.discoveredAt || new Date()
        })
        existingNames.add(itemName)
      }
    }

    return merged
  }

  // Get unified data
  getUnifiedData(): UnifiedData {
    const now = new Date()
    
    // Check cache
    if (this.cache && this.lastRefresh) {
      const timeSinceRefresh = now.getTime() - this.lastRefresh.getTime()
      if (timeSinceRefresh < this.CACHE_DURATION) {
        return this.cache
      }
    }

    // Load static data
    const staticTools = generateMassiveToolsList()
    const staticMCP = staticMCPServers
    const staticAPIs = staticAPIModels

    // Load discovered data
    const discoveredTools = this.loadDiscoveredTools()
    const discoveredMCP = this.loadDiscoveredMCP()
    const discoveredAPIs = this.loadDiscoveredAPIs()

    // Merge data
    const unifiedTools = this.mergeData(staticTools, discoveredTools)
    const unifiedMCP = this.mergeData(staticMCP, discoveredMCP)
    const unifiedAPIs = this.mergeData(staticAPIs, discoveredAPIs)

    // Create unified data object
    this.cache = {
      aiTools: unifiedTools,
      mcpServers: unifiedMCP,
      apis: unifiedAPIs,
      lastUpdated: now,
      sources: {
        static: staticTools.length + staticMCP.length + staticAPIs.length,
        discovered: discoveredTools.length + discoveredMCP.length + discoveredAPIs.length,
        total: unifiedTools.length + unifiedMCP.length + unifiedAPIs.length
      }
    }

    this.lastRefresh = now
    return this.cache
  }

  // Force refresh
  refresh(): UnifiedData {
    this.cache = null
    this.lastRefresh = null
    return this.getUnifiedData()
  }

  // Get statistics
  getStats() {
    const data = this.getUnifiedData()
    return {
      tools: {
        total: data.aiTools.length,
        static: data.aiTools.filter(t => !t.isDiscovered).length,
        discovered: data.aiTools.filter(t => t.isDiscovered).length,
        lastDay: data.aiTools.filter(t => {
          const addedAt = new Date(t.addedAt || 0)
          const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)
          return addedAt > dayAgo
        }).length
      },
      mcp: {
        total: data.mcpServers.length,
        static: data.mcpServers.filter(s => !s.isDiscovered).length,
        discovered: data.mcpServers.filter(s => s.isDiscovered).length
      },
      apis: {
        total: data.apis.length,
        static: data.apis.filter(a => !a.isDiscovered).length,
        discovered: data.apis.filter(a => a.isDiscovered).length
      },
      lastUpdated: data.lastUpdated
    }
  }
}

export const unifiedDataService = UnifiedDataService.getInstance()

// Export convenience functions
export const getUnifiedData = () => unifiedDataService.getUnifiedData()
export const getUnifiedStats = () => unifiedDataService.getStats()
export const refreshUnifiedData = () => unifiedDataService.refresh()

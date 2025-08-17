/**
 * Data Integration Module
 * Merges discovered data with existing data for display
 */

import fs from 'fs'
import path from 'path'

export interface DiscoveredTool {
  name: string
  description: string
  github?: string
  website?: string
  stars?: number
  category: string
  language?: string
  trending?: boolean
  dateAdded: string
}

export interface DiscoveredMCP {
  name: string
  description: string
  github: string
  stars: number
  language?: string
  category?: string
  official?: boolean
  updated?: string
}

export interface DiscoveredAPI {
  name: string
  provider: string
  description: string
  pricing: string
  category: string
  endpoint?: string
  dateAdded: string
  trending?: boolean
}

// Load discovered tools
export function loadDiscoveredTools(): DiscoveredTool[] {
  try {
    const filePath = path.join(process.cwd(), 'src/data/discovered-tools.json')
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8')
      const parsed = JSON.parse(data)
      return parsed.tools || []
    }
  } catch (error) {
    console.error('Error loading discovered tools:', error)
  }
  return []
}

// Load discovered MCP servers
export function loadDiscoveredMCPServers(): DiscoveredMCP[] {
  try {
    const filePath = path.join(process.cwd(), 'src/data/discovered-mcp.json')
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8')
      const parsed = JSON.parse(data)
      return parsed.servers || []
    }
  } catch (error) {
    console.error('Error loading discovered MCP servers:', error)
  }
  return []
}

// Load discovered APIs
export function loadDiscoveredAPIs(): DiscoveredAPI[] {
  try {
    const filePath = path.join(process.cwd(), 'src/data/discovered-apis.json')
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8')
      const parsed = JSON.parse(data)
      return parsed.apis || []
    }
  } catch (error) {
    console.error('Error loading discovered APIs:', error)
  }
  return []
}

// Convert discovered tool to standard format
export function convertDiscoveredTool(tool: DiscoveredTool, index: number) {
  return {
    id: `discovered_${index}`,
    name: tool.name,
    description: tool.description || 'AI-powered tool',
    category: tool.category || 'AI Tool',
    url: tool.website || tool.github || '#',
    sourceUrl: tool.github,
    pricing: 'unknown' as const,
    tags: [tool.category, 'AI', 'Discovered', tool.language].filter(Boolean),
    stars: tool.stars || 0,
    dateAdded: tool.dateAdded || new Date().toISOString(),
    source: 'GitHub Discovery',
    featured: tool.trending || false,
    upvotes: Math.floor((tool.stars || 0) / 10),
    downloads: Math.floor((tool.stars || 0) * 5),
    language: tool.language
  }
}

// Convert discovered MCP to standard format
export function convertDiscoveredMCP(server: DiscoveredMCP, index: number) {
  return {
    id: `mcp_discovered_${index}`,
    name: server.name,
    description: server.description,
    github: server.github,
    documentation: server.github + '/blob/main/README.md',
    category: server.category || 'Tools',
    tags: [server.category, 'MCP', server.language].filter(Boolean),
    difficulty: 'intermediate' as const,
    popularity: Math.min(100, Math.floor((server.stars || 0) / 100)),
    downloads: server.stars ? server.stars * 10 : 0,
    lastUpdated: server.updated || new Date().toISOString(),
    official: server.official || false,
    trending: server.stars > 1000,
    language: server.language
  }
}

// Convert discovered API to standard format
export function convertDiscoveredAPI(api: DiscoveredAPI, index: number) {
  // Parse pricing to determine free tier
  const pricingLower = api.pricing.toLowerCase()
  const hasFreeTier = pricingLower.includes('free') || 
                      pricingLower.includes('$0') || 
                      pricingLower === 'free'
  
  return {
    id: `api_discovered_${index}`,
    name: api.name,
    provider: api.provider,
    description: api.description,
    category: api.category,
    pricing: {
      model: api.pricing,
      hasFreeTier
    },
    features: [api.category, 'AI-Powered', 'API Access'],
    documentation: api.endpoint || '#',
    popularity: api.trending ? 95 : 75,
    added: api.dateAdded,
    trending: api.trending || false
  }
}

// Merge discovered tools with existing tools
export function mergeWithDiscoveredTools(existingTools: any[]): any[] {
  const discoveredTools = loadDiscoveredTools()
  const convertedTools = discoveredTools.map((tool, i) => convertDiscoveredTool(tool, i))
  
  // Add "NEW" badge to discovered tools
  convertedTools.forEach(tool => {
    tool.tags.unshift('🆕 NEW')
  })
  
  // Combine and deduplicate
  const combined = [...convertedTools, ...existingTools]
  const seen = new Set()
  
  return combined.filter(tool => {
    const key = tool.name.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

// Merge discovered MCP servers with existing
export function mergeWithDiscoveredMCP(existingServers: any[]): any[] {
  const discoveredServers = loadDiscoveredMCPServers()
  const convertedServers = discoveredServers.map((server, i) => convertDiscoveredMCP(server, i))
  
  // Add "NEW" badge
  convertedServers.forEach(server => {
    if (!server.tags.includes('🆕 NEW')) {
      server.tags.unshift('🆕 NEW')
    }
  })
  
  // Combine and deduplicate
  const combined = [...convertedServers, ...existingServers]
  const seen = new Set()
  
  return combined.filter(server => {
    const key = server.name.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

// Merge discovered APIs with existing
export function mergeWithDiscoveredAPIs(existingAPIs: any[]): any[] {
  const discoveredAPIs = loadDiscoveredAPIs()
  const convertedAPIs = discoveredAPIs.map((api, i) => convertDiscoveredAPI(api, i))
  
  // Add "NEW" badge
  convertedAPIs.forEach(api => {
    if (!api.features.includes('🆕 NEW')) {
      api.features.unshift('🆕 NEW')
    }
  })
  
  // Combine and deduplicate
  const combined = [...convertedAPIs, ...existingAPIs]
  const seen = new Set()
  
  return combined.filter(api => {
    const key = `${api.name.toLowerCase()}-${api.provider.toLowerCase()}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

/**
 * Client-side Data Integration
 * Loads discovered data for client components
 */

// Import discovered data directly (these will be generated at build time)
import discoveredToolsData from '@/data/discovered-tools.json'
import discoveredMCPData from '@/data/discovered-mcp.json'
import discoveredAPIsData from '@/data/discovered-apis.json'

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

// Get discovered tools
export function getDiscoveredTools(): DiscoveredTool[] {
  return discoveredToolsData?.tools || []
}

// Get discovered MCP servers
export function getDiscoveredMCPServers(): DiscoveredMCP[] {
  return discoveredMCPData?.servers || []
}

// Get discovered APIs
export function getDiscoveredAPIs(): DiscoveredAPI[] {
  return discoveredAPIsData?.apis || []
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
    tags: ['🆕 NEW', tool.category, 'AI', 'Discovered', tool.language].filter(Boolean),
    stars: tool.stars || 0,
    dateAdded: tool.dateAdded || new Date().toISOString(),
    source: 'GitHub Discovery',
    featured: tool.trending || (tool.stars && tool.stars > 10000),
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
    slug: server.name.toLowerCase().replace(/\s+/g, '-'),
    emoji: server.official ? '✅' : '🔧',
    description: server.description,
    category: server.category || 'Tools',
    stars: server.stars,
    users: server.stars > 10000 ? `${Math.floor(server.stars / 1000)}K+` : `${server.stars}+`,
    setupTime: '5 min',
    difficulty: server.stars > 5000 ? 'Easy' : 'Medium',
    tags: ['🆕 NEW', server.category, 'MCP', server.language].filter(Boolean),
    official: server.official || false,
    github: server.github,
    documentation: server.github + '/blob/main/README.md',
    lastUpdated: server.updated || new Date().toISOString(),
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
    features: ['🆕 NEW', api.category, 'AI-Powered', 'API Access'],
    documentation: api.endpoint || '#',
    popularity: api.trending ? 95 : 75,
    added: api.dateAdded,
    trending: api.trending || false
  }
}

// Merge discovered tools with existing tools
export function mergeWithDiscoveredTools(existingTools: any[]): any[] {
  try {
    const discoveredTools = getDiscoveredTools()
    const convertedTools = discoveredTools.map((tool, i) => convertDiscoveredTool(tool, i))
    
    // Combine and deduplicate
    const combined = [...convertedTools, ...existingTools]
    const seen = new Set()
    
    return combined.filter(tool => {
      const key = tool.name.toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
  } catch (error) {
    console.error('Error merging discovered tools:', error)
    return existingTools
  }
}

// Merge discovered MCP servers with existing
export function mergeWithDiscoveredMCP(existingServers: any[]): any[] {
  try {
    const discoveredServers = getDiscoveredMCPServers()
    const convertedServers = discoveredServers.map((server, i) => convertDiscoveredMCP(server, i))
    
    // Combine and deduplicate
    const combined = [...convertedServers, ...existingServers]
    const seen = new Set()
    
    return combined.filter(server => {
      const key = server.name.toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
  } catch (error) {
    console.error('Error merging discovered MCP:', error)
    return existingServers
  }
}

// Merge discovered APIs with existing
export function mergeWithDiscoveredAPIs(existingAPIs: any[]): any[] {
  try {
    const discoveredAPIs = getDiscoveredAPIs()
    const convertedAPIs = discoveredAPIs.map((api, i) => convertDiscoveredAPI(api, i))
    
    // Combine and deduplicate
    const combined = [...convertedAPIs, ...existingAPIs]
    const seen = new Set()
    
    return combined.filter(api => {
      const key = `${api.name.toLowerCase()}-${api.provider.toLowerCase()}`
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
  } catch (error) {
    console.error('Error merging discovered APIs:', error)
    return existingAPIs
  }
}

import { NextRequest, NextResponse } from 'next/server'
import Fuse from 'fuse.js'

// Import all data sources
import { generateMassiveToolsList } from '@/data/ai-tools-mega'
import discoveredTools from '@/data/discovered-tools.json'
import discoveredMCPs from '@/data/discovered-mcp.json'
import discoveredAPIs from '@/data/discovered-apis.json'
import { mcpServers } from '@/data/mcps'
import { mcpServers as mcpServersComplete } from '@/data/mcps-complete'
import { mcpServers as mcpServersUpdated } from '@/data/mcps-updated'

// Interface for search items
interface SearchItem {
  id: string
  name: string
  description: string
  category: string
  url: string
  type: 'tool' | 'mcp' | 'api'
  tags?: string[]
  features?: string[]
  status?: string
  pricing?: string
  searchText: string
}

// Cache for all searchable items
let SEARCH_INDEX_CACHE: Fuse<SearchItem> | null = null
let ALL_ITEMS_CACHE: SearchItem[] | null = null

// Function to get ALL searchable items (tools, MCPs, APIs)
function getAllSearchableItems(): SearchItem[] {
  if (ALL_ITEMS_CACHE) return ALL_ITEMS_CACHE
  
  const allItems: SearchItem[] = []
  const seenNames = new Set<string>() // Use names for deduplication
  
  // 1. Load AI Tools (from multiple sources)
  const toolSources = [
    { data: generateMassiveToolsList(), source: 'ai-tools-mega' },
    { data: discoveredTools?.tools || [], source: 'discovered-tools' }
  ]
  
  let toolCount = 0
  toolSources.forEach(({ data, source }) => {
    data.forEach((tool: any) => {
      const key = `tool-${tool.name?.toLowerCase().replace(/\s+/g, '-')}`
      if (tool.name && !seenNames.has(key)) {
        seenNames.add(key)
        toolCount++
        allItems.push({
          id: `tool-${toolCount}`,
          name: tool.name,
          description: tool.description || '',
          category: tool.category || 'AI Tool',
          url: tool.url || tool.website || tool.github || '#',
          type: 'tool',
          tags: tool.tags || [],
          features: tool.features || [],
          pricing: tool.pricing || 'unknown',
          searchText: `${tool.name} ${tool.description} ${tool.category}`.toLowerCase()
        })
      }
    })
  })
  console.log(`Loaded ${toolCount} unique tools`)
  
  // 2. Load MCP Servers (from multiple sources)
  const mcpSources = [
    { data: mcpServers || [], source: 'mcps' },
    { data: mcpServersComplete || [], source: 'mcps-complete' },
    { data: mcpServersUpdated || [], source: 'mcps-updated' },
    { data: discoveredMCPs?.servers || [], source: 'discovered-mcp' }
  ]
  
  let mcpCount = 0
  mcpSources.forEach(({ data, source }) => {
    data.forEach((mcp: any) => {
      const key = `mcp-${mcp.name?.toLowerCase().replace(/\s+/g, '-')}`
      if (mcp.name && !seenNames.has(key)) {
        seenNames.add(key)
        mcpCount++
        allItems.push({
          id: `mcp-${mcpCount}`,
          name: mcp.name,
          description: mcp.description || '',
          category: mcp.category || 'MCP Server',
          url: mcp.github || mcp.documentation || mcp.website || `/mcp/${mcp.id || mcp.name}`,
          type: 'mcp',
          status: mcp.status || 'stable',
          features: mcp.features || [],
          tags: mcp.tags || [],
          searchText: `${mcp.name} ${mcp.description} ${mcp.category} mcp server`.toLowerCase()
        })
      }
    })
  })
  console.log(`Loaded ${mcpCount} unique MCP servers`)
  
  // 3. Load APIs (from discovered-apis.json)
  let apiCount = 0
  if (discoveredAPIs && discoveredAPIs.apis) {
    discoveredAPIs.apis.forEach((api: any) => {
      const key = `api-${api.name?.toLowerCase().replace(/\s+/g, '-')}`
      if (api.name && !seenNames.has(key)) {
        seenNames.add(key)
        apiCount++
        allItems.push({
          id: `api-${apiCount}`,
          name: api.name,
          description: api.description || '',
          category: api.category || 'API',
          url: api.endpoint || api.website || `/apis/${api.name.toLowerCase().replace(/\s+/g, '-')}`,
          type: 'api',
          pricing: api.pricing || 'unknown',
          tags: api.tags || [],
          features: api.features || api.models || [],
          searchText: `${api.name} ${api.provider || ''} ${api.description} ${api.category} api`.toLowerCase()
        })
      }
    })
  }
  console.log(`Loaded ${apiCount} APIs`)
  
  // Add additional popular APIs if not already in discovered-apis.json
  const additionalAPIs = [
    { name: 'Perplexity API', description: 'Advanced search and question answering', category: 'AI API', tags: ['search', 'qa', 'llm'] },
    { name: 'Together AI', description: 'Open source model hosting', category: 'AI API', tags: ['open-source', 'llm', 'inference'] },
    { name: 'Groq API', description: 'Ultra-fast LLM inference', category: 'AI API', tags: ['fast', 'llm', 'inference'] },
    { name: 'Mistral API', description: 'European open-weight models', category: 'AI API', tags: ['mistral', 'llm', 'european'] },
    { name: 'Deepgram API', description: 'Speech recognition and transcription', category: 'Voice API', tags: ['speech', 'transcription', 'voice'] }
  ]
  
  additionalAPIs.forEach(api => {
    const key = `api-${api.name.toLowerCase().replace(/\s+/g, '-')}`
    if (!seenNames.has(key)) {
      seenNames.add(key)
      apiCount++
      allItems.push({
        id: `api-${apiCount}`,
        name: api.name,
        description: api.description,
        category: api.category,
        url: `/apis/${api.name.toLowerCase().replace(/\s+/g, '-')}`,
        type: 'api',
        tags: api.tags,
        searchText: `${api.name} ${api.description} ${api.category} ${api.tags.join(' ')}`.toLowerCase()
      })
    }
  })
  
  // Cache the results
  ALL_ITEMS_CACHE = allItems
  console.log(`Total items loaded: ${allItems.length} (${toolCount} Tools, ${mcpCount} MCPs, ${apiCount} APIs)`)
  
  return allItems
}

// Initialize Fuse.js search index with better configuration
function getSearchIndex(): Fuse<SearchItem> {
  if (SEARCH_INDEX_CACHE) return SEARCH_INDEX_CACHE
  
  const items = getAllSearchableItems()
  
  // Configure Fuse.js with optimized settings for better search
  const fuseOptions: Fuse.IFuseOptions<SearchItem> = {
    keys: [
      { name: 'name', weight: 3 },
      { name: 'description', weight: 2 },
      { name: 'category', weight: 1.5 },
      { name: 'tags', weight: 1.5 },
      { name: 'features', weight: 1 },
      { name: 'searchText', weight: 0.5 }
    ],
    threshold: 0.35, // Slightly more forgiving for typos
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2,
    shouldSort: true,
    findAllMatches: false,
    location: 0,
    distance: 100,
    useExtendedSearch: true,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    fieldNormWeight: 1
  }
  
  SEARCH_INDEX_CACHE = new Fuse(items, fuseOptions)
  return SEARCH_INDEX_CACHE
}

// Enhanced search function using Fuse.js
function searchItems(query: string, limit: number = 50) {
  if (!query || query.length < 1) return []
  
  const searchIndex = getSearchIndex()
  const searchTerm = query.trim()
  
  // Handle common shortcuts and aliases
  const shortcuts: Record<string, string> = {
    'gpt': 'gpt-4 chatgpt openai',
    'claude': 'claude anthropic',
    'dalle': 'dall-e dalle',
    'sd': 'stable diffusion',
    'mj': 'midjourney',
    'gh': 'github copilot',
    'hf': 'hugging face',
    'cursor': 'cursor ai code editor',
    'v0': 'v0 vercel',
    'bolt': 'bolt.new stackblitz'
  }
  
  // Expand shortcuts in query
  let expandedQuery = searchTerm.toLowerCase()
  for (const [shortcut, expansion] of Object.entries(shortcuts)) {
    if (expandedQuery === shortcut) {
      expandedQuery = expansion
      break
    }
  }
  
  // Perform Fuse.js search
  const fuseResults = searchIndex.search(expandedQuery, { limit: limit * 2 })
  
  // Format results
  const results = fuseResults.map(result => {
    const item = result.item
    const score = result.score || 0
    
    // Determine icon based on type
    let icon = '🔧'
    if (item.type === 'mcp') {
      icon = '🔌'
    } else if (item.type === 'api') {
      icon = '🔗'
    } else if (item.category?.toLowerCase().includes('image')) {
      icon = '🎨'
    } else if (item.category?.toLowerCase().includes('video')) {
      icon = '🎬'
    } else if (item.category?.toLowerCase().includes('voice')) {
      icon = '🎙️'
    } else if (item.category?.toLowerCase().includes('code') || item.category?.toLowerCase().includes('coding')) {
      icon = '💻'
    } else if (item.category?.toLowerCase().includes('chat')) {
      icon = '💬'
    } else if (item.category?.toLowerCase().includes('writing')) {
      icon = '✍️'
    } else if (item.category?.toLowerCase().includes('data')) {
      icon = '📊'
    }
    
    return {
      id: item.id,
      name: item.name,
      title: item.name,
      description: item.description || '',
      category: item.category || (item.type === 'mcp' ? 'MCP Server' : item.type === 'api' ? 'API' : 'AI Tool'),
      url: item.url || `/tools/${item.name.toLowerCase().replace(/\s+/g, '-')}`,
      type: item.type || 'tool',
      icon,
      score: 1 - score, // Fuse returns lower scores for better matches
      excerpt: (item.description || '').substring(0, 200) + (item.description?.length > 200 ? '...' : ''),
      metadata: {
        tags: item.tags || [],
        features: item.features || [],
        status: item.status,
        pricing: item.pricing
      }
    }
  })
  
  // Sort by relevance (lower Fuse score = better match)
  results.sort((a, b) => b.score - a.score)
  
  return results.slice(0, limit)
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q') || ''
    const limit = parseInt(searchParams.get('limit') || '50')
    const type = searchParams.get('type') // Optional filter: 'tool', 'mcp', 'api'
    
    // Initialize search index on first request
    const allItems = getAllSearchableItems()
    const totalItems = allItems.length
    
    if (!query || query.length < 1) {
      return NextResponse.json({
        success: true,
        results: [],
        query,
        message: 'Enter at least 1 character to search',
        totalItems,
        stats: {
          tools: allItems.filter(i => i.type === 'tool').length,
          mcps: allItems.filter(i => i.type === 'mcp').length,
          apis: allItems.filter(i => i.type === 'api').length
        }
      })
    }
    
    let results = searchItems(query, limit)
    
    // Apply type filter if specified
    if (type) {
      results = results.filter(r => r.type === type)
    }
    
    return NextResponse.json({
      success: true,
      query,
      total: results.length,
      results,
      totalItems,
      message: results.length === 0 ? `No results found for "${query}"` : null,
      stats: {
        tools: allItems.filter(i => i.type === 'tool').length,
        mcps: allItems.filter(i => i.type === 'mcp').length,
        apis: allItems.filter(i => i.type === 'api').length
      }
    })
    
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({
      success: false,
      query: request.nextUrl.searchParams.get('q') || '',
      results: [],
      total: 0,
      message: 'Search error occurred'
    })
  }
}

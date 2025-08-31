import { NextRequest, NextResponse } from 'next/server'
import Fuse from 'fuse.js'
import { getAllSearchableItems, getStats, COMPLETE_TOOLS_LIST, COMPLETE_MCP_LIST } from '@/data/search-index-complete'

// Interface for search items
interface SearchItem {
  id: string
  name: string
  description: string
  category: string
  url?: string
  type: 'tool' | 'mcp' | 'api'
  tags?: string[]
  features?: string[]
  status?: string
  pricing?: string
  provider?: string
  searchableText?: string
}

// Cache for search with TTL
let SEARCH_INDEX_CACHE: Fuse<SearchItem> | null = null
let CACHE_TIMESTAMP = 0
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes cache

// Initialize Fuse.js search with optimized settings
function getSearchIndex(): Fuse<SearchItem> {
  const now = Date.now()
  
  // Return cached index if still valid
  if (SEARCH_INDEX_CACHE && (now - CACHE_TIMESTAMP) < CACHE_TTL) {
    return SEARCH_INDEX_CACHE
  }
  
  const items = getAllSearchableItems()
  
  // Transform items to ensure all have proper URLs
  const searchItems = items.map((item: any) => {
    let url = item.url
    
    if (!url) {
      // Generate URLs based on type
      if (item.type === 'tool') {
        const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
        url = `/tools/${slug}`
      } else if (item.type === 'mcp') {
        const slug = (item.id || item.name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
        url = `/mcp/servers/${slug}`
      } else if (item.type === 'api') {
        const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
        url = `/api/${slug}`
      }
    }
    
    return {
      ...item,
      url,
      searchText: `${item.name} ${item.description || ''} ${item.category || ''} ${(item.tags || []).join(' ')} ${(item.features || []).join(' ')} ${item.type}`.toLowerCase()
    }
  })
  
  const fuseOptions: Fuse.IFuseOptions<SearchItem> = {
    keys: [
      { name: 'name', weight: 3 },
      { name: 'description', weight: 2 },
      { name: 'category', weight: 1.5 },
      { name: 'tags', weight: 1 },
      { name: 'features', weight: 0.8 },
      { name: 'searchText', weight: 0.5 },
      { name: 'searchableText', weight: 0.5 }
    ],
    threshold: 0.3, // More lenient matching
    includeScore: true,
    includeMatches: false,
    minMatchCharLength: 2,
    shouldSort: true,
    findAllMatches: true,
    location: 0,
    distance: 100,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    fieldNormWeight: 1,
    useExtendedSearch: false
  }
  
  SEARCH_INDEX_CACHE = new Fuse(searchItems, fuseOptions)
  CACHE_TIMESTAMP = now
  
  return SEARCH_INDEX_CACHE
}

// Enhanced search function with fuzzy matching
function searchItems(query: string, type?: string, limit: number = 50) {
  const searchIndex = getSearchIndex()
  const items = getAllSearchableItems()
  
  // Transform items for consistent structure
  const searchableItems = items.map((item: any) => {
    let url = item.url
    
    if (!url) {
      if (item.type === 'tool') {
        const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
        url = `/tools/${slug}`
      } else if (item.type === 'mcp') {
        const slug = (item.id || item.name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
        url = `/mcp/servers/${slug}`
      } else if (item.type === 'api') {
        const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
        url = `/api/${slug}`
      }
    }
    
    return { ...item, url }
  })
  
  // If query is very short, do prefix matching
  if (query.length <= 2) {
    const lowerQuery = query.toLowerCase()
    const filtered = searchableItems.filter((item: any) => {
      const matchesType = !type || item.type === type
      const matchesQuery = item.name?.toLowerCase().startsWith(lowerQuery) ||
                          item.searchableText?.includes(lowerQuery) ||
                          item.description?.toLowerCase().includes(lowerQuery)
      return matchesType && matchesQuery
    })
    
    return filtered.slice(0, limit).map((item: any) => ({
      id: item.id,
      name: item.name,
      title: item.name,
      description: item.description || '',
      category: item.category || '',
      url: item.url,
      type: item.type,
      provider: item.provider,
      score: 1,
      excerpt: (item.description || '').substring(0, 200) + ((item.description || '').length > 200 ? '...' : ''),
      metadata: {
        tags: item.tags || [],
        features: item.features || [],
        status: item.status,
        pricing: item.pricing
      }
    }))
  }
  
  // For longer queries, use Fuse.js fuzzy search
  let results = searchIndex.search(query, { limit: limit * 2 })
  
  // Filter by type if specified
  if (type) {
    results = results.filter(r => r.item.type === type)
  }
  
  // Format and limit results
  return results.slice(0, limit).map(result => {
    const item = result.item
    return {
      id: item.id,
      name: item.name,
      title: item.name,
      description: item.description || '',
      category: item.category || '',
      url: item.url || '',
      type: item.type,
      provider: item.provider,
      score: 1 - (result.score || 0),
      excerpt: (item.description || '').substring(0, 200) + ((item.description || '').length > 200 ? '...' : ''),
      metadata: {
        tags: item.tags || [],
        features: item.features || [],
        status: item.status,
        pricing: item.pricing
      }
    }
  })
}

// API Route Handler
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q') || ''
    const type = searchParams.get('type') || undefined
    const limit = parseInt(searchParams.get('limit') || '50')
    
    // Get stats
    const stats = getStats()
    
    // Return empty results if query is too short
    if (!query || query.length < 1) {
      return NextResponse.json({
        success: true,
        results: [],
        query,
        message: 'Enter at least 1 character to search',
        totalItems: stats.total,
        stats
      })
    }
    
    // Perform search
    const results = searchItems(query, type, limit)
    
    // Log search for debugging
    console.log(`Search query: "${query}", Results: ${results.length}, Total items: ${stats.total}`)
    
    return NextResponse.json({
      success: true,
      query,
      total: results.length,
      results,
      totalItems: stats.total,
      stats,
      message: results.length === 0 ? 'No results found. Try different keywords.' : undefined
    })
    
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({
      success: false,
      query: request.nextUrl.searchParams.get('q') || '',
      results: [],
      total: 0,
      message: 'Search error occurred. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// API Route for getting search stats
export async function POST(request: NextRequest) {
  try {
    const stats = getStats()
    
    return NextResponse.json({
      success: true,
      stats: {
        ...stats,
        lastUpdated: new Date().toISOString()
      }
    })
  } catch (error) {
    console.error('Stats error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to get stats'
    }, { status: 500 })
  }
}

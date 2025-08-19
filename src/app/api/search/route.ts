import { NextRequest, NextResponse } from 'next/server'

// Import all tool sources
import { generateMassiveToolsList } from '@/data/ai-tools-mega'
import discoveredTools from '@/data/discovered-tools.json'

// Try to import other sources with error handling
let aiToolsComplete: any[] = []
let toolsDatabase: any[] = []

try {
  const module = require('@/lib/ai-tools-database')
  aiToolsComplete = module.AI_TOOLS_COMPLETE || []
} catch (e) {}

try {
  const module = require('@/lib/toolsDatabase')
  toolsDatabase = module.toolsDatabase || []
} catch (e) {}

// Cache for all tools
let ALL_TOOLS_CACHE: any[] | null = null

// Function to get ALL tools (3700+)
function getAllTools() {
  if (ALL_TOOLS_CACHE) return ALL_TOOLS_CACHE
  
  const allTools: any[] = []
  const seenNames = new Set<string>()
  
  // 1. Load generated tools (3500+)
  try {
    const generatedTools = generateMassiveToolsList()
    generatedTools.forEach((tool: any) => {
      if (tool.name && !seenNames.has(tool.name)) {
        seenNames.add(tool.name)
        allTools.push({
          name: tool.name,
          description: tool.description || '',
          category: tool.category || 'AI Tool',
          url: tool.url || '',
          pricing: tool.pricing || 'unknown',
          type: 'tool'
        })
      }
    })
    console.log(`Loaded ${generatedTools.length} generated tools`)
  } catch (e) {
    console.error('Error loading generated tools:', e)
  }
  
  // 2. Load discovered tools
  if (discoveredTools && discoveredTools.tools) {
    discoveredTools.tools.forEach((tool: any) => {
      if (tool.name && !seenNames.has(tool.name)) {
        seenNames.add(tool.name)
        allTools.push({
          name: tool.name,
          description: tool.description || '',
          category: tool.category || 'AI Tool',
          url: tool.website || tool.github || '',
          pricing: tool.pricing || 'unknown',
          type: 'tool'
        })
      }
    })
    console.log(`Loaded ${discoveredTools.tools.length} discovered tools`)
  }
  
  // 3. Load AI tools complete
  if (aiToolsComplete.length > 0) {
    aiToolsComplete.forEach(tool => {
      if (tool.name && !seenNames.has(tool.name)) {
        seenNames.add(tool.name)
        allTools.push({
          name: tool.name,
          description: tool.description || '',
          category: tool.category || 'AI Tool',
          url: tool.url || '',
          pricing: tool.pricing || 'unknown',
          type: 'tool'
        })
      }
    })
  }
  
  // 4. Load tools database
  if (toolsDatabase.length > 0) {
    toolsDatabase.forEach(tool => {
      if (tool.name && !seenNames.has(tool.name)) {
        seenNames.add(tool.name)
        allTools.push({
          name: tool.name,
          description: tool.description || '',
          category: tool.category || 'AI Tool',
          url: tool.website || '',
          pricing: tool.pricing?.type || 'unknown',
          type: 'tool'
        })
      }
    })
  }
  
  // Cache the results
  ALL_TOOLS_CACHE = allTools
  console.log(`Total tools loaded: ${allTools.length}`)
  
  return allTools
}

// Optimized search function
function searchTools(query: string, limit: number = 50) {
  if (!query || query.length < 2) return []
  
  const searchTerm = query.toLowerCase().trim()
  const searchWords = searchTerm.split(/\s+/).filter(w => w.length > 1)
  const allTools = getAllTools()
  const results: any[] = []
  
  // Search through all tools
  for (const tool of allTools) {
    let score = 0
    let matchReason = ''
    
    const name = (tool.name || '').toLowerCase()
    const category = (tool.category || '').toLowerCase()
    const description = (tool.description || '').toLowerCase()
    const url = (tool.url || '').toLowerCase()
    
    // Exact name match (highest priority)
    if (name === searchTerm) {
      score = 10000
      matchReason = 'Exact match'
    }
    // Name starts with query
    else if (name.startsWith(searchTerm)) {
      score = 5000
      matchReason = 'Name starts with query'
    }
    // Name contains full query
    else if (name.includes(searchTerm)) {
      score = 3000
      matchReason = 'Name contains query'
    }
    // Category exact match
    else if (category === searchTerm) {
      score = 2000
      matchReason = 'Category match'
    }
    // Category contains query
    else if (category.includes(searchTerm)) {
      score = 1500
      matchReason = 'Category contains query'
    }
    // Description contains query
    else if (description.includes(searchTerm)) {
      score = 1000
      matchReason = 'Description match'
    }
    // URL contains query
    else if (url.includes(searchTerm)) {
      score = 500
      matchReason = 'URL match'
    }
    
    // Multi-word search
    if (searchWords.length > 1 && score === 0) {
      const fullText = `${name} ${category} ${description}`.toLowerCase()
      let matchedWords = 0
      
      for (const word of searchWords) {
        if (fullText.includes(word)) {
          matchedWords++
        }
      }
      
      if (matchedWords === searchWords.length) {
        score = 800
        matchReason = 'All words found'
      } else if (matchedWords > 0) {
        score = 300 * matchedWords
        matchReason = `${matchedWords}/${searchWords.length} words matched`
      }
    }
    
    // Partial word match (fuzzy)
    if (score === 0 && searchTerm.length >= 3) {
      // Check if any word in name starts with search term
      const nameWords = name.split(/[\s\-_]+/)
      for (const word of nameWords) {
        if (word.startsWith(searchTerm.substring(0, 3))) {
          score = 200
          matchReason = 'Partial match'
          break
        }
      }
    }
    
    // Handle common abbreviations and typos
    const shortcuts: Record<string, string[]> = {
      'gpt': ['chatgpt', 'gpt-4', 'gpt-3', 'openai'],
      'claude': ['claude', 'anthropic'],
      'dalle': ['dall-e', 'dalle', 'dall e'],
      'sd': ['stable diffusion', 'stablediffusion'],
      'mj': ['midjourney', 'mid journey'],
      'gh': ['github', 'copilot'],
      'hf': ['hugging face', 'huggingface'],
      'llm': ['language model', 'chat', 'assistant'],
      'img': ['image', 'photo', 'picture'],
      'vid': ['video', 'movie', 'animation'],
      'ai': ['artificial intelligence', 'machine learning', 'ml']
    }
    
    for (const [shortcut, targets] of Object.entries(shortcuts)) {
      if (searchTerm === shortcut || searchTerm.includes(shortcut)) {
        for (const target of targets) {
          if (name.includes(target) || description.includes(target)) {
            score = Math.max(score, 1000)
            matchReason = 'Shortcut match'
            break
          }
        }
      }
    }
    
    if (score > 0) {
      results.push({
        name: tool.name,
        title: tool.name,  // Ensure title is the tool name, not category
        description: tool.description || '',
        category: tool.category || 'AI Tool',
        url: tool.url || `/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`,
        type: 'tool',
        score,
        matchReason,
        excerpt: (tool.description || '').substring(0, 200) + '...'
      })
    }
  }
  
  // Sort by score (highest first)
  results.sort((a, b) => b.score - a.score)
  
  // Return limited results
  return results.slice(0, limit)
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q') || ''
    const limit = parseInt(searchParams.get('limit') || '50')
    
    // Initialize tools on first request
    const totalTools = getAllTools().length
    
    if (!query || query.length < 2) {
      return NextResponse.json({
        success: true,
        results: [],
        query,
        message: 'Enter at least 2 characters to search',
        totalTools
      })
    }
    
    const results = searchTools(query, limit)
    
    return NextResponse.json({
      success: true,
      query,
      total: results.length,
      results,
      totalTools,
      message: results.length === 0 ? `No results found for "${query}"` : null
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

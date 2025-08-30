// Vibe Coding Tools Fetcher - Focused Implementation
import { cache } from 'react'
import { generateMassiveToolsList } from '@/data/ai-tools-mega'

export interface AITool {
  id: string
  name: string
  description: string
  category: string
  url: string
  sourceUrl?: string
  imageUrl?: string
  logo?: string
  pricing: 'free' | 'freemium' | 'paid' | 'unknown'
  tags: string[]
  stars?: number
  forks?: number
  upvotes?: number
  comments?: number
  downloads?: number
  likes?: number
  dateAdded: string
  lastUpdated?: string
  source: string
  featured?: boolean
  author?: string
  license?: string
  language?: string
  framework?: string
}

export const CATEGORIES = {
  'Code & Development': ['AI Code Editors', 'Code Generation', 'IDE Extensions', 'Development Platforms'],
  'Chatbots & Assistants': ['AI Pair Programmers', 'Code Assistants', 'Copilots', 'Code Completion'],
  'Productivity': ['Development Agents', 'Workflow Automation', 'DevOps AI', 'Terminal Tools'],
  'Security & Privacy': ['Code Testing', 'Bug Detection', 'Vulnerability Scanning', 'Security Analysis'],
  'Data & Analytics': ['Code Analytics', 'Performance Monitoring', 'Development Metrics']
}

// Generate vibe coding tools database
function generateVibeCodingTools(): AITool[] {
  const tools = generateMassiveToolsList()
  console.log(`Loaded ${tools.length} vibe coding tools`)
  return tools
}

// Main fetch function with caching
export const fetchAllAITools = cache(async (): Promise<AITool[]> => {
  const tools = generateVibeCodingTools()
  
  // Sort by featured and popularity
  tools.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    const aScore = (a.upvotes || 0) + (a.downloads || 0) + (a.stars || 0)
    const bScore = (b.upvotes || 0) + (b.downloads || 0) + (b.stars || 0)
    return bScore - aScore
  })
  
  return tools
})

// Search and filter functions
export function searchTools(tools: AITool[], query: string): AITool[] {
  const searchTerm = query.toLowerCase()
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm) ||
    tool.description.toLowerCase().includes(searchTerm) ||
    tool.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    tool.category.toLowerCase().includes(searchTerm)
  )
}

export function filterByCategory(tools: AITool[], category: string): AITool[] {
  if (category === 'All') return tools
  return tools.filter(tool => tool.category === category)
}

export function filterByPricing(tools: AITool[], pricing: string): AITool[] {
  if (pricing === 'all') return tools
  return tools.filter(tool => tool.pricing === pricing)
}

export function filterBySource(tools: AITool[], source: string): AITool[] {
  if (source === 'All') return tools
  return tools.filter(tool => tool.source === source)
}

export function sortTools(tools: AITool[], sortBy: string): AITool[] {
  const sorted = [...tools]
  
  switch(sortBy) {
    case 'newest':
      return sorted.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
    case 'stars':
      return sorted.sort((a, b) => (b.stars || 0) - (a.stars || 0))
    case 'popular':
      return sorted.sort((a, b) => {
        const aScore = (a.stars || 0) + (a.upvotes || 0) + (a.downloads || 0)
        const bScore = (b.stars || 0) + (b.upvotes || 0) + (b.downloads || 0)
        return bScore - aScore
      })
    case 'alphabetical':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    default:
      return sorted
  }
}

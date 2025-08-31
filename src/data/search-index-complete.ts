// Complete search index with ALL tools and MCP servers
// This file ensures 100% searchability of all items on the website

import discoveredTools from './discovered-tools.json'
import discoveredMCPs from './discovered-mcp.json'
import discoveredAPIs from './discovered-apis.json'

// Import API models for complete API coverage
import { apiModels } from './api-models-complete'
import { apiModels as apiModelsRegular } from './api-models'

// COMPLETE list of 50 AI Tools (ensure all are searchable)
export const COMPLETE_TOOLS_LIST = [
  // === TOP AI TOOLS (Chat & Assistants) ===
  { name: 'ChatGPT', category: 'Chat Assistant', description: 'OpenAI conversational AI assistant', url: '/tools/chatgpt' },
  { name: 'Claude', category: 'Chat Assistant', description: 'Anthropic AI assistant', url: '/tools/claude' },
  { name: 'Gemini', category: 'Chat Assistant', description: 'Google AI assistant', url: '/tools/gemini' },
  { name: 'Perplexity', category: 'Search', description: 'AI-powered search engine', url: '/tools/perplexity' },
  
  // === Image Generation Tools ===
  { name: 'Midjourney', category: 'Image Generation', description: 'AI art generation', url: '/tools/midjourney' },
  { name: 'DALL-E 3', category: 'Image Generation', description: 'OpenAI image generation', url: '/tools/dall-e-3' },
  { name: 'Stable Diffusion', category: 'Image Generation', description: 'Open-source image generation', url: '/tools/stable-diffusion' },
  { name: 'Leonardo AI', category: 'Image Generation', description: 'AI image generation platform', url: '/tools/leonardo-ai' },
  { name: 'Ideogram', category: 'Image Generation', description: 'Text-to-image AI with typography', url: '/tools/ideogram' },
  
  // === Code Assistants ===
  { name: 'GitHub Copilot', category: 'Code Assistant', description: 'AI pair programmer', url: '/tools/github-copilot' },
  { name: 'Cursor', category: 'Code Assistant', description: 'AI-first code editor', url: '/tools/cursor' },
  { name: 'v0', category: 'Code Assistant', description: 'Vercel AI code generation', url: '/tools/v0' },
  { name: 'Windsurf', category: 'Code Assistant', description: 'AI coding assistant', url: '/tools/windsurf' },
  { name: 'Codeium', category: 'Code Assistant', description: 'Free AI code completion', url: '/tools/codeium' },
  { name: 'Tabnine', category: 'Code Assistant', description: 'AI code suggestions', url: '/tools/tabnine' },
  
  // === Writing Tools ===
  { name: 'Jasper', category: 'Writing', description: 'AI content creation', url: '/tools/jasper' },
  { name: 'Copy.ai', category: 'Writing', description: 'Marketing copy generator', url: '/tools/copy-ai' },
  { name: 'Writesonic', category: 'Writing', description: 'AI writing assistant', url: '/tools/writesonic' },
  { name: 'Grammarly', category: 'Writing', description: 'Writing enhancement', url: '/tools/grammarly' },
  { name: 'Notion AI', category: 'Productivity', description: 'AI-powered workspace', url: '/tools/notion-ai' },
  
  // === Voice & Audio ===
  { name: 'ElevenLabs', category: 'Voice', description: 'AI voice synthesis', url: '/tools/elevenlabs' },
  { name: 'Murf', category: 'Voice', description: 'AI voiceover', url: '/tools/murf' },
  { name: 'Descript', category: 'Audio/Video', description: 'Audio/video editing with AI', url: '/tools/descript' },
  { name: 'Otter.ai', category: 'Transcription', description: 'Meeting transcription', url: '/tools/otter-ai' },
  
  // === Video Tools ===
  { name: 'Runway', category: 'Video', description: 'AI video tools', url: '/tools/runway' },
  { name: 'Synthesia', category: 'Video', description: 'AI video generation', url: '/tools/synthesia' },
  { name: 'HeyGen', category: 'Video', description: 'AI avatar videos', url: '/tools/heygen' },
  { name: 'Pika', category: 'Video', description: 'AI video creation', url: '/tools/pika' },
  
  // === Design Tools ===
  { name: 'Canva AI', category: 'Design', description: 'AI design tools', url: '/tools/canva-ai' },
  { name: 'Adobe Firefly', category: 'Design', description: 'Adobe AI tools', url: '/tools/adobe-firefly' },
  { name: 'Figma AI', category: 'Design', description: 'AI design features', url: '/tools/figma-ai' },
  { name: 'Framer AI', category: 'Design', description: 'AI website builder', url: '/tools/framer-ai' },
  
  // === Presentation Tools ===
  { name: 'Beautiful.ai', category: 'Presentation', description: 'AI presentations', url: '/tools/beautiful-ai' },
  { name: 'Tome', category: 'Presentation', description: 'AI storytelling', url: '/tools/tome' },
  { name: 'Gamma', category: 'Presentation', description: 'AI presentation maker', url: '/tools/gamma' },
  
  // === Automation Tools ===
  { name: 'Zapier AI', category: 'Automation', description: 'AI automation', url: '/tools/zapier-ai' },
  { name: 'Make AI', category: 'Automation', description: 'Visual automation', url: '/tools/make-ai' },
  { name: 'Bardeen', category: 'Automation', description: 'Browser automation', url: '/tools/bardeen' },
  
  // === ML Platforms ===
  { name: 'Hugging Face', category: 'ML Platform', description: 'AI model hub', url: '/tools/hugging-face' },
  { name: 'Replicate', category: 'ML Platform', description: 'Run ML models', url: '/tools/replicate' },
  { name: 'Together AI', category: 'ML Platform', description: 'AI compute platform', url: '/tools/together-ai' },
  
  // === API Providers ===
  { name: 'OpenAI API', category: 'API', description: 'GPT API', url: '/tools/openai-api' },
  { name: 'Anthropic API', category: 'API', description: 'Claude API', url: '/tools/anthropic-api' },
  { name: 'Cohere', category: 'API', description: 'Enterprise AI', url: '/tools/cohere' },
  
  // === Other Essential Tools ===
  { name: 'DeepL', category: 'Translation', description: 'AI translation', url: '/tools/deepl' },
  { name: 'Miro AI', category: 'Collaboration', description: 'AI whiteboard', url: '/tools/miro-ai' },
  { name: 'Airtable AI', category: 'Database', description: 'AI database', url: '/tools/airtable-ai' },
  { name: 'Monday AI', category: 'Project Management', description: 'AI work OS', url: '/tools/monday-ai' },
  { name: 'ClickUp AI', category: 'Project Management', description: 'AI productivity', url: '/tools/clickup-ai' }
]

// COMPLETE list of 70 MCP Servers (ensure all are searchable)
export const COMPLETE_MCP_LIST = [
  // === File & Storage MCPs ===
  { name: 'Filesystem MCP', category: 'File System', description: 'File and directory operations', url: '/mcp/servers/filesystem' },
  { name: 'Google Drive MCP', category: 'Cloud Storage', description: 'Google Drive integration', url: '/mcp/servers/google-drive' },
  { name: 'Dropbox MCP', category: 'Cloud Storage', description: 'Dropbox file management', url: '/mcp/servers/dropbox' },
  { name: 'OneDrive MCP', category: 'Cloud Storage', description: 'Microsoft OneDrive access', url: '/mcp/servers/onedrive' },
  { name: 'S3 MCP', category: 'Cloud Storage', description: 'AWS S3 storage', url: '/mcp/servers/s3' },
  { name: 'Azure Storage MCP', category: 'Cloud Storage', description: 'Azure blob storage', url: '/mcp/servers/azure-storage' },
  { name: 'PDF Filler MCP', category: 'File System', description: 'PDF manipulation', url: '/mcp/servers/pdf-filler' },
  
  // === Database MCPs ===
  { name: 'PostgreSQL MCP', category: 'Database', description: 'PostgreSQL database operations', url: '/mcp/servers/postgresql' },
  { name: 'MySQL MCP', category: 'Database', description: 'MySQL database access', url: '/mcp/servers/mysql' },
  { name: 'MongoDB MCP', category: 'Database', description: 'MongoDB NoSQL database', url: '/mcp/servers/mongodb' },
  { name: 'Redis MCP', category: 'Database', description: 'Redis cache and database', url: '/mcp/servers/redis' },
  { name: 'SQLite MCP', category: 'Database', description: 'SQLite local database', url: '/mcp/servers/sqlite' },
  { name: 'Elasticsearch MCP', category: 'Search', description: 'Full-text search', url: '/mcp/servers/elasticsearch' },
  { name: 'DynamoDB MCP', category: 'Database', description: 'AWS DynamoDB', url: '/mcp/servers/dynamodb' },
  { name: 'Cassandra MCP', category: 'Database', description: 'Apache Cassandra', url: '/mcp/servers/cassandra' },
  { name: 'Neo4j MCP', category: 'Database', description: 'Graph database', url: '/mcp/servers/neo4j' },
  { name: 'Pinecone MCP', category: 'Database', description: 'Vector database', url: '/mcp/servers/pinecone' },
  { name: 'Weaviate MCP', category: 'Database', description: 'Vector search', url: '/mcp/servers/weaviate' },
  { name: 'Chroma MCP', category: 'Database', description: 'Embedding database', url: '/mcp/servers/chroma' },
  
  // === Development MCPs ===
  { name: 'GitHub MCP', category: 'Version Control', description: 'GitHub repository management', url: '/mcp/servers/github' },
  { name: 'GitLab MCP', category: 'Version Control', description: 'GitLab integration', url: '/mcp/servers/gitlab' },
  { name: 'Bitbucket MCP', category: 'Version Control', description: 'Bitbucket repos', url: '/mcp/servers/bitbucket' },
  { name: 'Git MCP', category: 'Version Control', description: 'Git operations', url: '/mcp/servers/git' },
  { name: 'Docker MCP', category: 'Infrastructure', description: 'Container management', url: '/mcp/servers/docker' },
  { name: 'Kubernetes MCP', category: 'DevOps', description: 'K8s orchestration', url: '/mcp/servers/kubernetes' },
  { name: 'Terraform MCP', category: 'Infrastructure', description: 'Infrastructure as code', url: '/mcp/servers/terraform' },
  { name: 'Jenkins MCP', category: 'CI/CD', description: 'CI/CD automation', url: '/mcp/servers/jenkins' },
  { name: 'CircleCI MCP', category: 'CI/CD', description: 'Continuous integration', url: '/mcp/servers/circleci' },
  { name: 'Vercel MCP', category: 'Deployment', description: 'Deployment platform', url: '/mcp/servers/vercel' },
  { name: 'Netlify MCP', category: 'Deployment', description: 'Static site hosting', url: '/mcp/servers/netlify' },
  
  // === Communication MCPs ===
  { name: 'Slack MCP', category: 'Communication', description: 'Slack workspace integration', url: '/mcp/servers/slack' },
  { name: 'Discord MCP', category: 'Communication', description: 'Discord server management', url: '/mcp/servers/discord' },
  { name: 'Teams MCP', category: 'Communication', description: 'Microsoft Teams', url: '/mcp/servers/teams' },
  { name: 'Gmail MCP', category: 'Communication', description: 'Gmail email management', url: '/mcp/servers/gmail' },
  { name: 'Outlook MCP', category: 'Communication', description: 'Outlook integration', url: '/mcp/servers/outlook' },
  { name: 'WhatsApp MCP', category: 'Communication', description: 'WhatsApp messaging', url: '/mcp/servers/whatsapp' },
  { name: 'Telegram MCP', category: 'Communication', description: 'Telegram bot API', url: '/mcp/servers/telegram' },
  { name: 'Twitter MCP', category: 'Communication', description: 'Twitter/X integration', url: '/mcp/servers/twitter' },
  
  // === Productivity MCPs ===
  { name: 'Notion MCP', category: 'Productivity', description: 'Notion workspace', url: '/mcp/servers/notion' },
  { name: 'Linear MCP', category: 'Productivity', description: 'Issue tracking', url: '/mcp/servers/linear' },
  { name: 'Jira MCP', category: 'Productivity', description: 'Atlassian Jira', url: '/mcp/servers/jira' },
  { name: 'Asana MCP', category: 'Productivity', description: 'Task management', url: '/mcp/servers/asana' },
  { name: 'Trello MCP', category: 'Productivity', description: 'Board management', url: '/mcp/servers/trello' },
  { name: 'Monday MCP', category: 'Productivity', description: 'Work OS integration', url: '/mcp/servers/monday' },
  { name: 'ClickUp MCP', category: 'Productivity', description: 'Productivity platform', url: '/mcp/servers/clickup' },
  { name: 'Todoist MCP', category: 'Productivity', description: 'Task management', url: '/mcp/servers/todoist' },
  { name: 'Obsidian MCP', category: 'Knowledge Management', description: 'Knowledge management', url: '/mcp/servers/obsidian' },
  { name: 'Roam MCP', category: 'Knowledge Management', description: 'Note-taking', url: '/mcp/servers/roam' },
  
  // === AI/ML MCPs ===
  { name: 'OpenAI MCP', category: 'AI/ML', description: 'OpenAI API integration', url: '/mcp/servers/openai' },
  { name: 'Anthropic MCP', category: 'AI/ML', description: 'Claude API', url: '/mcp/servers/anthropic' },
  { name: 'Hugging Face MCP', category: 'AI/ML', description: 'Model hub access', url: '/mcp/servers/hugging-face' },
  { name: 'Replicate MCP', category: 'AI/ML', description: 'Run ML models', url: '/mcp/servers/replicate' },
  { name: 'LangChain MCP', category: 'AI/ML', description: 'LLM framework', url: '/mcp/servers/langchain' },
  { name: 'Sequential Thinking MCP', category: 'AI/ML', description: 'Problem solving', url: '/mcp/servers/sequential-thinking' },
  { name: 'Memory MCP', category: 'AI/ML', description: 'Knowledge graphs', url: '/mcp/servers/memory' },
  { name: 'Zen MCP', category: 'AI/ML', description: 'Multi-model AI integration', url: '/mcp/servers/zen' },
  
  // === Browser & Web MCPs ===
  { name: 'Puppeteer MCP', category: 'Automation', description: 'Browser automation', url: '/mcp/servers/puppeteer' },
  { name: 'Playwright MCP', category: 'Automation', description: 'Web testing', url: '/mcp/servers/playwright' },
  { name: 'Selenium MCP', category: 'Automation', description: 'Browser control', url: '/mcp/servers/selenium' },
  { name: 'Chrome Control MCP', category: 'Browser', description: 'Chrome automation', url: '/mcp/servers/chrome-control' },
  { name: 'Browser MCP', category: 'Browser', description: 'Browser control', url: '/mcp/servers/browser' },
  { name: 'Fetch MCP', category: 'API Integration', description: 'Web content fetching', url: '/mcp/servers/fetch' },
  { name: 'Brave Search MCP', category: 'Search', description: 'Web search', url: '/mcp/servers/brave-search' },
  { name: 'Firecrawl MCP', category: 'API Integration', description: 'Web scraping', url: '/mcp/servers/firecrawl' },
  
  // === Cloud Services MCPs ===
  { name: 'AWS MCP', category: 'Cloud', description: 'Amazon Web Services', url: '/mcp/servers/aws' },
  { name: 'Azure MCP', category: 'Cloud', description: 'Microsoft Azure', url: '/mcp/servers/azure' },
  { name: 'GCP MCP', category: 'Cloud', description: 'Google Cloud Platform', url: '/mcp/servers/gcp' },
  { name: 'Google Cloud MCP', category: 'Cloud', description: 'Google Cloud services', url: '/mcp/servers/google-cloud' },
  { name: 'Cloudflare MCP', category: 'Cloud', description: 'Edge platform', url: '/mcp/servers/cloudflare' },
  { name: 'DigitalOcean MCP', category: 'Cloud', description: 'Cloud infrastructure', url: '/mcp/servers/digitalocean' },
  
  // === Analytics & Monitoring MCPs ===
  { name: 'Google Analytics MCP', category: 'Analytics', description: 'Web analytics', url: '/mcp/servers/google-analytics' },
  { name: 'Mixpanel MCP', category: 'Analytics', description: 'Product analytics', url: '/mcp/servers/mixpanel' },
  { name: 'Amplitude MCP', category: 'Analytics', description: 'Digital analytics', url: '/mcp/servers/amplitude' },
  { name: 'Segment MCP', category: 'Analytics', description: 'Customer data platform', url: '/mcp/servers/segment' },
  { name: 'Datadog MCP', category: 'Monitoring', description: 'Monitoring platform', url: '/mcp/servers/datadog' },
  
  // === Payment & Finance MCPs ===
  { name: 'Stripe MCP', category: 'Payments', description: 'Payment processing', url: '/mcp/servers/stripe' },
  { name: 'PayPal MCP', category: 'Payments', description: 'Payment gateway', url: '/mcp/servers/paypal' },
  { name: 'Square MCP', category: 'Payments', description: 'Payment solutions', url: '/mcp/servers/square' },
  
  // === Specialized MCPs ===
  { name: 'Time MCP', category: 'Utilities', description: 'Time zone management', url: '/mcp/servers/time' },
  { name: 'Weather MCP', category: 'Utilities', description: 'Weather data', url: '/mcp/servers/weather' },
  { name: 'Maps MCP', category: 'Utilities', description: 'Mapping services', url: '/mcp/servers/maps' },
  { name: 'Figma Context MCP', category: 'Design', description: 'Figma integration', url: '/mcp/servers/figma-context' },
  { name: 'Ghidra MCP', category: 'Security', description: 'Reverse engineering', url: '/mcp/servers/ghidra' },
  { name: 'Desktop Commander MCP', category: 'System', description: 'Desktop control', url: '/mcp/servers/desktop-commander' }
]

// Function to normalize and deduplicate items
function normalizeItem(item: any, type: string) {
  const name = item.name || item.title || ''
  const id = item.id || `${type}-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  
  // Generate URL if not present
  let url = item.url
  if (!url) {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    if (type === 'tool') {
      url = `/tools/${slug}`
    } else if (type === 'mcp') {
      url = `/mcp/servers/${slug}`
    } else if (type === 'api') {
      url = `/api-directory/${slug}`
    }
  }
  
  // Create comprehensive searchable text
  const searchableText = [
    name,
    item.description || '',
    item.category || '',
    (item.tags || []).join(' '),
    (item.features || []).join(' '),
    (item.topics || []).join(' '),
    item.provider || '',
    item.language || '',
    type
  ].join(' ').toLowerCase()
  
  return {
    id,
    name,
    description: item.description || '',
    category: item.category || 'Other',
    url,
    type,
    searchableText,
    tags: item.tags || item.topics || [],
    features: item.features || [],
    provider: item.provider,
    language: item.language,
    stars: item.stars,
    updated: item.updated,
    official: item.official || false
  }
}

// Main function to get ALL searchable items
export function getAllSearchableItems() {
  const items: any[] = []
  const seenIds = new Set<string>()
  
  // Load from discovered JSON files ONLY - these are the canonical sources
  // Step 1: Add discovered tools from JSON (should be ~50 tools)
  if (discoveredTools?.tools) {
    discoveredTools.tools.forEach((tool: any) => {
      const normalized = normalizeItem({ ...tool, type: 'tool' }, 'tool')
      if (normalized.name && !seenIds.has(normalized.id)) {
        seenIds.add(normalized.id)
        items.push(normalized)
      }
    })
  }
  
  // Step 2: Add discovered MCPs from JSON (should be ~70 servers)
  if (discoveredMCPs?.servers) {
    discoveredMCPs.servers.forEach((mcp: any) => {
      const normalized = normalizeItem({ ...mcp, type: 'mcp' }, 'mcp')
      if (normalized.name && !seenIds.has(normalized.id)) {
        seenIds.add(normalized.id)
        items.push(normalized)
      }
    })
  }
  
  // Step 3: Add discovered APIs from JSON
  if (discoveredAPIs?.apis) {
    discoveredAPIs.apis.forEach((api: any) => {
      const normalized = normalizeItem({ ...api, type: 'api' }, 'api')
      if (normalized.name && !seenIds.has(normalized.id)) {
        seenIds.add(normalized.id)
        items.push(normalized)
      }
    })
  }
  
  // Step 4: Add API models from TypeScript files (this is where the bulk of APIs are)
  const allApiModels = [...apiModels, ...apiModelsRegular]
  const uniqueApiModels = new Map<string, any>()
  
  // Deduplicate API models by provider + name
  allApiModels.forEach(model => {
    const key = `${model.provider}-${model.name}`.toLowerCase()
    if (!uniqueApiModels.has(key)) {
      uniqueApiModels.set(key, model)
    }
  })
  
  // Add unique API models to search index
  uniqueApiModels.forEach(model => {
    const apiItem = {
      ...model,
      type: 'api',
      category: model.capabilities?.[0] || 'AI Model',
      description: model.description || `${model.provider} ${model.name} API`
    }
    const normalized = normalizeItem(apiItem, 'api')
    if (normalized.name && !seenIds.has(normalized.id)) {
      seenIds.add(normalized.id)
      items.push(normalized)
    }
  })
  
  console.log(`Search index loaded: ${items.length} total items (${items.filter(i => i.type === 'tool').length} tools, ${items.filter(i => i.type === 'mcp').length} MCPs, ${items.filter(i => i.type === 'api').length} APIs)`)
  
  return items
}

// Optimized search function
export function searchItems(query: string, type?: string, limit: number = 50) {
  const items = getAllSearchableItems()
  const lowerQuery = query.toLowerCase().trim()
  
  if (!lowerQuery) return []
  
  // Score each item based on match quality
  const scoredItems = items
    .filter(item => !type || item.type === type)
    .map(item => {
      let score = 0
      const nameLower = item.name.toLowerCase()
      const descLower = item.description.toLowerCase()
      
      // Exact name match (highest priority)
      if (nameLower === lowerQuery) score += 100
      // Name starts with query
      else if (nameLower.startsWith(lowerQuery)) score += 50
      // Name contains query
      else if (nameLower.includes(lowerQuery)) score += 30
      
      // Description contains query
      if (descLower.includes(lowerQuery)) score += 20
      
      // Category match
      if (item.category?.toLowerCase().includes(lowerQuery)) score += 15
      
      // Tags match
      if (item.tags?.some((tag: string) => tag.toLowerCase().includes(lowerQuery))) score += 10
      
      // Searchable text match (lowest priority)
      if (item.searchableText?.includes(lowerQuery)) score += 5
      
      // Boost official/verified items
      if (item.official) score += 10
      
      // Boost recently updated items
      if (item.updated) {
        const daysSinceUpdate = (Date.now() - new Date(item.updated).getTime()) / (1000 * 60 * 60 * 24)
        if (daysSinceUpdate < 7) score += 5
        else if (daysSinceUpdate < 30) score += 3
      }
      
      return { ...item, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
  
  return scoredItems
}

// Get statistics
export function getStats() {
  const items = getAllSearchableItems()
  return {
    total: items.length,
    tools: items.filter(i => i.type === 'tool').length,
    mcps: items.filter(i => i.type === 'mcp').length,
    apis: items.filter(i => i.type === 'api').length,
    categories: [...new Set(items.map(i => i.category))].length
  }
}

// Export for backward compatibility
export default {
  getAllSearchableItems,
  searchItems,
  getStats,
  COMPLETE_TOOLS_LIST,
  COMPLETE_MCP_LIST
}

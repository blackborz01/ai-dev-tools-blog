// MCP Servers Data with SEO optimized content

export const mcpServers = [
  // ===== DESIGN / UI =====
  {
    id: 'figma-dev-mode',
    name: 'Figma Dev Mode MCP',
    slug: 'figma-dev-mode',
    emoji: '🎨',
    description: 'Design-to-code bridge - extract design tokens, components, and specs directly from Figma.',
    category: 'Design/UI',
    stars: 9200,
    users: '45K+',
    setupTime: '5 min',
    difficulty: 'Easy',
    tags: ['design', 'figma', 'ui', 'components', 'tokens'],
    official: true
  },
  {
    id: 'figma-context',
    name: 'Figma Context MCP (community)',
    slug: 'figma-context',
    emoji: '🖌️',
    description: 'Community-driven Figma integration - sync designs with code context and maintain consistency.',
    category: 'Design/UI',
    stars: 6800,
    users: '30K+',
    setupTime: '5 min',
    difficulty: 'Easy',
    tags: ['design', 'figma', 'context', 'sync', 'community'],
    official: false
  },

  // ===== REASONING / ORCHESTRATION =====
  {
    id: 'sequential-thinking',
    name: 'Sequential Thinking MCP',
    slug: 'sequential-thinking',
    emoji: '🧠',
    description: 'Advanced reasoning chains - break down complex problems into manageable steps with AI orchestration.',
    category: 'Reasoning/Orchestration',
    stars: 11500,
    users: '60K+',
    setupTime: '3 min',
    difficulty: 'Medium',
    tags: ['reasoning', 'orchestration', 'chains', 'logic'],
    official: true
  },

  // ===== SEARCH / CRAWL / GROUNDING =====
  {
    id: 'firecrawl',
    name: 'Firecrawl MCP Server',
    slug: 'firecrawl',
    emoji: '🔥',
    description: 'Web scraping powerhouse - crawl, extract, and process web data at scale with AI understanding.',
    category: 'Search/Crawl/Grounding',
    stars: 10200,
    users: '50K+',
    setupTime: '5 min',
    difficulty: 'Easy',
    tags: ['scraping', 'crawling', 'web', 'extraction', 'grounding'],
    official: true
  },
  {
    id: 'brave-search',
    name: 'Brave Search MCP Server',
    slug: 'brave-search',
    emoji: '🦁',
    description: 'Privacy-first search - access Brave Search API for independent, unbiased search results.',
    category: 'Search/Crawl/Grounding',
    stars: 8900,
    users: '40K+',
    setupTime: '3 min',
    difficulty: 'Easy',
    tags: ['search', 'privacy', 'brave', 'web', 'grounding'],
    official: true
  },
  {
    id: 'context7',
    name: 'Context7 MCP (Upstash)',
    slug: 'context7',
    emoji: '📚',
    description: 'Up-to-date framework/library docs - instant access to latest documentation for all major frameworks.',
    category: 'Search/Crawl/Grounding',
    stars: 9800,
    users: '55K+',
    setupTime: '2 min',
    difficulty: 'Easy',
    tags: ['docs', 'frameworks', 'libraries', 'reference', 'upstash'],
    official: true
  },

  // ===== CORE DEV CONTROL =====
  {
    id: 'filesystem',
    name: 'Filesystem MCP Server',
    slug: 'filesystem',
    emoji: '📁',
    description: 'Complete file system control - read, write, edit, and manage files with granular permissions.',
    category: 'Core Dev Control',
    stars: 15000,
    users: '100K+',
    setupTime: '2 min',
    difficulty: 'Easy',
    tags: ['files', 'folders', 'read', 'write', 'edit'],
    official: true
  },
  {
    id: 'terminal-process',
    name: 'Terminal / Process MCP',
    slug: 'terminal-process',
    emoji: '⚡',
    description: 'Command line mastery - execute terminal commands and manage processes with AI oversight.',
    category: 'Core Dev Control',
    stars: 12800,
    users: '80K+',
    setupTime: '2 min',
    difficulty: 'Easy',
    tags: ['terminal', 'bash', 'process', 'commands'],
    official: true
  },
  {
    id: 'github',
    name: 'GitHub MCP Server',
    slug: 'github', 
    emoji: '🐙',
    description: 'Full GitHub integration - manage repos, PRs, issues, and Actions through natural language.',
    category: 'Core Dev Control',
    stars: 14500,
    users: '90K+',
    setupTime: '5 min',
    difficulty: 'Easy',
    tags: ['git', 'version control', 'collaboration', 'ci/cd'],
    official: true
  },
  {
    id: 'gitmcp',
    name: 'GitMCP (per-repo hosted server)',
    slug: 'gitmcp',
    emoji: '📦',
    description: 'Per-repo hosted server - dedicated Git operations with deep repository understanding.',
    category: 'Core Dev Control',
    stars: 7600,
    users: '35K+',
    setupTime: '5 min',
    difficulty: 'Medium',
    tags: ['git', 'repository', 'hosted', 'dedicated', 'per-repo'],
    official: false
  },

  // ===== BROWSER AUTOMATION / TESTING =====
  {
    id: 'playwright',
    name: 'Playwright MCP (official)',
    slug: 'playwright-mcp',
    emoji: '🎭',
    description: 'Official browser automation - test, scrape, and automate across all browsers with AI precision.',
    category: 'Browser Automation/Testing',
    stars: 13200,
    users: '70K+',
    setupTime: '5 min',
    difficulty: 'Medium',
    tags: ['testing', 'automation', 'browser', 'e2e', 'official'],
    official: true
  },
  {
    id: 'puppeteer',
    name: 'Puppeteer MCP Server',
    slug: 'puppeteer',
    emoji: '🎪',
    description: 'Headless Chrome automation - control Chrome/Chromium for testing and web scraping.',
    category: 'Browser Automation/Testing',
    stars: 11800,
    users: '65K+',
    setupTime: '5 min',
    difficulty: 'Medium',
    tags: ['chrome', 'automation', 'testing', 'scraping'],
    official: true
  },

  // ===== DATABASES / BACKENDS =====
  {
    id: 'postgresql',
    name: 'Postgres MCP Server (read-only ref)',
    slug: 'postgresql',
    emoji: '🐘',
    description: 'Enterprise database control (read-only ref) - execute queries safely with AI assistance.',
    category: 'Databases/Backends',
    stars: 8200,
    users: '40K+',
    setupTime: '5 min',
    difficulty: 'Medium',
    tags: ['sql', 'database', 'queries', 'analytics', 'read-only'],
    official: true
  },
  {
    id: 'supabase',
    name: 'Supabase MCP Server (official)',
    slug: 'supabase',
    emoji: '⚡',
    description: 'Official Supabase integration - manage your entire backend with natural language commands.',
    category: 'Databases/Backends',
    stars: 10500,
    users: '50K+',
    setupTime: '5 min',
    difficulty: 'Easy',
    tags: ['supabase', 'backend', 'realtime', 'auth', 'official'],
    official: true
  },
  {
    id: 'prisma',
    name: 'Prisma MCP Server (local/remote)',
    slug: 'prisma',
    emoji: '◭',
    description: 'Modern ORM control (local/remote) - manage database schemas and queries with type-safe operations.',
    category: 'Databases/Backends',
    stars: 9300,
    users: '45K+',
    setupTime: '5 min',
    difficulty: 'Medium',
    tags: ['orm', 'database', 'typescript', 'schema', 'local', 'remote'],
    official: true
  },

  // ===== DEPLOY / OPS =====
  {
    id: 'vercel',
    name: 'Vercel MCP Server (official, remote w/ OAuth)',
    slug: 'vercel',
    emoji: '▲',
    description: 'Official Vercel deployment - manage deployments, domains, and serverless functions with OAuth.',
    category: 'Deploy/Ops',
    stars: 11200,
    users: '60K+',
    setupTime: '5 min',
    difficulty: 'Easy',
    tags: ['deployment', 'serverless', 'hosting', 'nextjs', 'oauth', 'official'],
    official: true
  },
  {
    id: 'docker',
    name: 'Docker MCP Server (community)',
    slug: 'docker',
    emoji: '🐳',
    description: 'Container management (community) - build, run, and orchestrate Docker containers with AI assistance.',
    category: 'Deploy/Ops',
    stars: 9100,
    users: '45K+',
    setupTime: '5 min',
    difficulty: 'Medium',
    tags: ['containers', 'devops', 'deployment', 'orchestration', 'community'],
    official: false
  },

  // ===== GAME DEV =====
  {
    id: 'unity',
    name: 'Unity MCP (community implementations)',
    slug: 'unity',
    emoji: '🎮',
    description: 'Unity engine integration (community) - control game objects, scripts, and scenes with AI commands.',
    category: 'Game Dev',
    stars: 7800,
    users: '25K+',
    setupTime: '10 min',
    difficulty: 'Hard',
    tags: ['unity', 'gamedev', '3d', 'c#', 'community'],
    official: false
  },
  {
    id: 'unreal',
    name: 'Unreal MCP (community)',
    slug: 'unreal',
    emoji: '🎯',
    description: 'Unreal Engine control (community) - manage blueprints, actors, and level design through conversation.',
    category: 'Game Dev',
    stars: 6900,
    users: '20K+',
    setupTime: '15 min',
    difficulty: 'Hard',
    tags: ['unreal', 'gamedev', 'blueprints', 'c++', 'community'],
    official: false
  }
]

// Categories configuration
export const mcpCategories = [
  { id: 'all', name: 'All', emoji: '🌟' },
  { id: 'design/ui', name: 'Design/UI', emoji: '🎨' },
  { id: 'reasoning/orchestration', name: 'Reasoning/Orchestration', emoji: '🧠' },
  { id: 'search/crawl/grounding', name: 'Search/Crawl/Grounding', emoji: '🔍' },
  { id: 'core dev control', name: 'Core Dev Control', emoji: '💻' },
  { id: 'browser automation/testing', name: 'Browser Automation/Testing', emoji: '🧪' },
  { id: 'databases/backends', name: 'Databases/Backends', emoji: '🗄️' },
  { id: 'deploy/ops', name: 'Deploy/Ops', emoji: '🚀' },
  { id: 'game dev', name: 'Game Dev', emoji: '🎮' }
]

// Featured servers by category
export const featuredServers = [
  'filesystem',
  'github',
  'sequential-thinking',
  'firecrawl',
  'playwright',
  'supabase',
  'vercel',
  'figma-dev-mode'
]

// Trending servers (most popular)
export const trendingServers = [
  'context7',
  'brave-search',
  'prisma',
  'terminal-process',
  'puppeteer'
]

// New servers (recently added)
export const newServers = [
  'figma-context',
  'gitmcp',
  'unity',
  'unreal',
  'docker'
]

// Helper function to get server by ID
export function getServerById(id: string) {
  return mcpServers.find(server => server.id === id)
}

// Helper function to get servers by category
export function getServersByCategory(category: string) {
  if (category === 'all') return mcpServers
  return mcpServers.filter(server => 
    server.category.toLowerCase() === category.toLowerCase() ||
    server.category.toLowerCase().includes(category.toLowerCase())
  )
}

// Helper function to search servers
export function searchServers(query: string) {
  const searchTerm = query.toLowerCase()
  return mcpServers.filter(server =>
    server.name.toLowerCase().includes(searchTerm) ||
    server.description.toLowerCase().includes(searchTerm) ||
    server.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}
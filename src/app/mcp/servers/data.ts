// MCP Servers Data with SEO optimized content
import { mergeWithDiscoveredMCP } from '@/lib/client-data-integration'

const baseMcpServers = [
  {
    id: 'filesystem',
    name: 'Filesystem MCP',
    slug: 'filesystem',
    emoji: '📁',
    description: 'Complete file system control - read, write, edit, and manage files with granular permissions.',
    category: 'Core',
    stars: 8500,
    users: '50K+',
    setupTime: '2 min',
    difficulty: 'Easy',
    tags: ['files', 'folders', 'read', 'write', 'edit'],
    official: true
  },
  {
    id: 'github',
    name: 'GitHub MCP',
    slug: 'github', 
    emoji: '🐙',
    description: 'Full GitHub integration - manage repos, PRs, issues, and Actions through natural language.',
    category: 'Development',
    stars: 12500,
    users: '100K+',
    setupTime: '5 min',
    difficulty: 'Easy',
    tags: ['git', 'version control', 'collaboration', 'ci/cd'],
    official: true
  },
  {
    id: 'slack',
    name: 'Slack MCP',
    slug: 'slack',
    emoji: '💬',
    description: 'Transform AI into a Slack power user - send messages, manage channels, search history.',
    category: 'Communication',
    stars: 8900,
    users: '100K+',
    setupTime: '3 min',
    difficulty: 'Easy',
    tags: ['chat', 'team', 'messaging', 'notifications'],
    official: true
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL MCP',
    slug: 'postgresql',
    emoji: '🐘',
    description: 'Enterprise-grade database control - execute queries, manage schemas, optimize performance.',
    category: 'Database',
    stars: 6200,
    users: '30K+',
    setupTime: '5 min',
    difficulty: 'Medium',
    tags: ['sql', 'database', 'queries', 'analytics'],
    official: true
  },
  {
    id: 'mongodb',
    name: 'MongoDB MCP',
    slug: 'mongodb',
    emoji: '🍃',
    description: 'NoSQL database operations - manage documents, collections, and aggregations naturally.',
    category: 'Database',
    stars: 5800,
    users: '25K+',
    setupTime: '5 min',
    difficulty: 'Medium',
    tags: ['nosql', 'documents', 'json', 'database'],
    official: false
  },
  {
    id: 'sqlite',
    name: 'SQLite MCP',
    slug: 'sqlite',
    emoji: '💾',
    description: 'Lightweight local database - perfect for development and embedded applications.',
    category: 'Database',
    stars: 4200,
    users: '20K+',
    setupTime: '2 min',
    difficulty: 'Easy',
    tags: ['sql', 'local', 'embedded', 'lightweight'],
    official: true
  },
  {
    id: 'docker',
    name: 'Docker MCP',
    slug: 'docker',
    emoji: '🐳',
    description: 'Container management - build, run, and orchestrate Docker containers with AI.',
    category: 'DevOps',
    stars: 9100,
    users: '45K+',
    setupTime: '5 min',
    difficulty: 'Medium',
    tags: ['containers', 'devops', 'deployment', 'orchestration'],
    official: false
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes MCP',
    slug: 'kubernetes',
    emoji: '☸️',
    description: 'K8s cluster management - deploy, scale, and manage containerized applications.',
    category: 'DevOps',
    stars: 7300,
    users: '35K+',
    setupTime: '10 min',
    difficulty: 'Hard',
    tags: ['k8s', 'orchestration', 'cloud', 'scaling'],
    official: false
  },
  {
    id: 'aws',
    name: 'AWS MCP',
    slug: 'aws',
    emoji: '☁️',
    description: 'AWS services integration - manage EC2, S3, Lambda, and more through conversation.',
    category: 'Cloud',
    stars: 10200,
    users: '60K+',
    setupTime: '10 min',
    difficulty: 'Medium',
    tags: ['cloud', 'aws', 's3', 'ec2', 'lambda'],
    official: false
  },
  {
    id: 'google-cloud',
    name: 'Google Cloud MCP',
    slug: 'google-cloud',
    emoji: '🌩️',
    description: 'GCP integration - manage Compute Engine, Cloud Storage, BigQuery, and more.',
    category: 'Cloud',
    stars: 6800,
    users: '40K+',
    setupTime: '10 min',
    difficulty: 'Medium',
    tags: ['cloud', 'gcp', 'bigquery', 'compute'],
    official: false
  },
  {
    id: 'redis',
    name: 'Redis MCP',
    slug: 'redis',
    emoji: '⚡',
    description: 'In-memory data store - manage caching, sessions, and real-time data.',
    category: 'Database',
    stars: 5500,
    users: '30K+',
    setupTime: '3 min',
    difficulty: 'Easy',
    tags: ['cache', 'memory', 'fast', 'realtime'],
    official: false
  },
  {
    id: 'elasticsearch',
    name: 'Elasticsearch MCP',
    slug: 'elasticsearch',
    emoji: '🔍',
    description: 'Full-text search and analytics - index, search, and analyze data at scale.',
    category: 'Search',
    stars: 7800,
    users: '35K+',
    setupTime: '8 min',
    difficulty: 'Medium',
    tags: ['search', 'analytics', 'logging', 'elk'],
    official: false
  },
  {
    id: 'stripe',
    name: 'Stripe MCP',
    slug: 'stripe',
    emoji: '💳',
    description: 'Payment processing - manage payments, subscriptions, and invoices programmatically.',
    category: 'Finance',
    stars: 8400,
    users: '25K+',
    setupTime: '5 min',
    difficulty: 'Medium',
    tags: ['payments', 'billing', 'subscriptions', 'invoices'],
    official: false
  },
  {
    id: 'sendgrid',
    name: 'SendGrid MCP',
    slug: 'sendgrid',
    emoji: '📧',
    description: 'Email automation - send transactional emails, manage campaigns, track analytics.',
    category: 'Communication',
    stars: 4900,
    users: '20K+',
    setupTime: '3 min',
    difficulty: 'Easy',
    tags: ['email', 'marketing', 'automation', 'smtp'],
    official: false
  },
  {
    id: 'twilio',
    name: 'Twilio MCP',
    slug: 'twilio',
    emoji: '📱',
    description: 'SMS and voice - send messages, make calls, and manage communications.',
    category: 'Communication',
    stars: 6100,
    users: '30K+',
    setupTime: '5 min',
    difficulty: 'Easy',
    tags: ['sms', 'voice', 'phone', 'messaging'],
    official: false
  },
  {
    id: 'jira',
    name: 'Jira MCP',
    slug: 'jira',
    emoji: '📋',
    description: 'Project management - create tickets, manage sprints, track progress.',
    category: 'Productivity',
    stars: 7200,
    users: '50K+',
    setupTime: '5 min',
    difficulty: 'Easy',
    tags: ['agile', 'tickets', 'sprints', 'planning'],
    official: false
  },
  {
    id: 'confluence',
    name: 'Confluence MCP',
    slug: 'confluence',
    emoji: '📚',
    description: 'Documentation management - create, update, and organize team knowledge.',
    category: 'Productivity',
    stars: 5300,
    users: '35K+',
    setupTime: '5 min',
    difficulty: 'Easy',
    tags: ['docs', 'wiki', 'knowledge', 'collaboration'],
    official: false
  },
  {
    id: 'notion',
    name: 'Notion MCP',
    slug: 'notion',
    emoji: '📝',
    description: 'All-in-one workspace - manage notes, databases, tasks, and wikis.',
    category: 'Productivity',
    stars: 9500,
    users: '80K+',
    setupTime: '3 min',
    difficulty: 'Easy',
    tags: ['notes', 'tasks', 'wiki', 'database'],
    official: false
  },
  {
    id: 'google-drive',
    name: 'Google Drive MCP',
    slug: 'google-drive',
    emoji: '📂',
    description: 'Cloud storage management - upload, organize, and share files and documents.',
    category: 'Storage',
    stars: 8700,
    users: '100K+',
    setupTime: '3 min',
    difficulty: 'Easy',
    tags: ['storage', 'files', 'docs', 'sheets'],
    official: false
  },
  {
    id: 'dropbox',
    name: 'Dropbox MCP',
    slug: 'dropbox',
    emoji: '📦',
    description: 'File synchronization - manage cloud storage and file sharing.',
    category: 'Storage',
    stars: 4600,
    users: '40K+',
    setupTime: '3 min',
    difficulty: 'Easy',
    tags: ['storage', 'sync', 'backup', 'sharing'],
    official: false
  },
  {
    id: 'git',
    name: 'Git MCP',
    slug: 'git',
    emoji: '🔀',
    description: 'Local Git operations - commit, branch, merge, and manage version control.',
    category: 'Development',
    stars: 6900,
    users: '60K+',
    setupTime: '2 min',
    difficulty: 'Easy',
    tags: ['version control', 'commits', 'branches', 'merge'],
    official: true
  },
  {
    id: 'puppeteer',
    name: 'Puppeteer MCP',
    slug: 'puppeteer',
    emoji: '🎭',
    description: 'Browser automation - scrape websites, generate PDFs, automate testing.',
    category: 'Automation',
    stars: 8200,
    users: '45K+',
    setupTime: '5 min',
    difficulty: 'Medium',
    tags: ['browser', 'scraping', 'automation', 'testing'],
    official: true
  },
  {
    id: 'selenium',
    name: 'Selenium MCP',
    slug: 'selenium',
    emoji: '🤖',
    description: 'Web testing automation - cross-browser testing and automation.',
    category: 'Automation',
    stars: 5700,
    users: '30K+',
    setupTime: '8 min',
    difficulty: 'Medium',
    tags: ['testing', 'qa', 'automation', 'browser'],
    official: false
  },
  {
    id: 'terraform',
    name: 'Terraform MCP',
    slug: 'terraform',
    emoji: '🏗️',
    description: 'Infrastructure as Code - provision and manage cloud infrastructure.',
    category: 'DevOps',
    stars: 7600,
    users: '25K+',
    setupTime: '10 min',
    difficulty: 'Hard',
    tags: ['iac', 'infrastructure', 'cloud', 'provisioning'],
    official: false
  },
  {
    id: 'ansible',
    name: 'Ansible MCP',
    slug: 'ansible',
    emoji: '⚙️',
    description: 'Configuration management - automate deployment and system configuration.',
    category: 'DevOps',
    stars: 5100,
    users: '20K+',
    setupTime: '8 min',
    difficulty: 'Medium',
    tags: ['automation', 'configuration', 'deployment', 'playbooks'],
    official: false
  },
  // New discovered servers with pages
  {
    id: 'playwright-mcp',
    name: 'Playwright MCP',
    slug: 'playwright-mcp',
    emoji: '🎭',
    description: 'Microsoft\'s official Playwright integration for browser automation and testing.',
    category: 'Automation',
    stars: 17100,
    users: '85K+',
    setupTime: '3 min',
    difficulty: 'Easy',
    tags: ['browser', 'testing', 'automation', 'microsoft'],
    official: true
  },
  {
    id: 'fastmcp',
    name: 'FastMCP',
    slug: 'fastmcp',
    emoji: '🚀',
    description: 'The fast, Pythonic way to build MCP servers and clients.',
    category: 'Development',
    stars: 16300,
    users: '75K+',
    setupTime: '1 min',
    difficulty: 'Easy',
    tags: ['python', 'framework', 'development', 'fast'],
    official: false
  },
  {
    id: 'figma-context-mcp',
    name: 'Figma Context MCP',
    slug: 'figma-context-mcp',
    emoji: '🎨',
    description: 'Provide Figma layout information to AI coding agents like Cursor.',
    category: 'Design',
    stars: 9900,
    users: '50K+',
    setupTime: '5 min',
    difficulty: 'Easy',
    tags: ['figma', 'design', 'ui', 'cursor'],
    official: false
  },
  {
    id: 'mcp-chrome',
    name: 'Chrome MCP',
    slug: 'mcp-chrome',
    emoji: '🌐',
    description: 'Chrome extension-based MCP server for browser automation and content analysis.',
    category: 'Browser',
    stars: 6000,
    users: '30K+',
    setupTime: '3 min',
    difficulty: 'Easy',
    tags: ['chrome', 'browser', 'extension', 'automation'],
    official: false
  },
  {
    id: 'whatsapp-mcp',
    name: 'WhatsApp MCP',
    slug: 'whatsapp-mcp',
    emoji: '💚',
    description: 'WhatsApp integration for AI - send messages and manage chats.',
    category: 'Communication',
    stars: 4700,
    users: '25K+',
    setupTime: '5 min',
    difficulty: 'Medium',
    tags: ['whatsapp', 'messaging', 'chat', 'communication'],
    official: false
  },
  {
    id: 'firecrawl-mcp-server',
    name: 'Firecrawl MCP',
    slug: 'firecrawl-mcp-server',
    emoji: '🔥',
    description: 'Official Firecrawl MCP Server - powerful web scraping for AI.',
    category: 'Automation',
    stars: 4200,
    users: '20K+',
    setupTime: '3 min',
    difficulty: 'Easy',
    tags: ['scraping', 'web', 'crawling', 'data'],
    official: true
  },
  {
    id: 'zen-mcp-server',
    name: 'Zen MCP Server',
    slug: 'zen-mcp-server',
    emoji: '☯️',
    description: 'Multiple AI models working as one - Gemini, OpenAI, Grok, Ollama.',
    category: 'AI/ML',
    stars: 6200,
    users: '30K+',
    setupTime: '5 min',
    difficulty: 'Medium',
    tags: ['ai', 'models', 'gemini', 'openai'],
    official: false
  },
  {
    id: 'ghidramcp',
    name: 'Ghidra MCP',
    slug: 'ghidramcp',
    emoji: '🔍',
    description: 'MCP Server for Ghidra reverse engineering framework.',
    category: 'Security',
    stars: 5600,
    users: '15K+',
    setupTime: '10 min',
    difficulty: 'Hard',
    tags: ['reverse-engineering', 'security', 'ghidra', 'analysis'],
    official: false
  },
  {
    id: 'git-mcp',
    name: 'Git MCP Remote',
    slug: 'git-mcp',
    emoji: '📡',
    description: 'Remote MCP server for any GitHub project - end code hallucinations.',
    category: 'Development',
    stars: 5300,
    users: '26K+',
    setupTime: '3 min',
    difficulty: 'Easy',
    tags: ['git', 'remote', 'github', 'code'],
    official: false
  },
  {
    id: 'desktopcommandermcp',
    name: 'Desktop Commander',
    slug: 'desktopcommandermcp',
    emoji: '💻',
    description: 'Terminal control and file system management for AI assistants.',
    category: 'System',
    stars: 4200,
    users: '21K+',
    setupTime: '2 min',
    difficulty: 'Easy',
    tags: ['terminal', 'filesystem', 'system', 'control'],
    official: false
  },
  {
    id: 'browser-mcp',
    name: 'Browser MCP',
    slug: 'browser-mcp',
    emoji: '🌍',
    description: 'Control your browser with AI - automation and web scraping.',
    category: 'Browser',
    stars: 3700,
    users: '18K+',
    setupTime: '5 min',
    difficulty: 'Medium',
    tags: ['browser', 'automation', 'scraping', 'control'],
    official: false
  },
  {
    id: 'mcp-use',
    name: 'MCP Use',
    slug: 'mcp-use',
    emoji: '🔧',
    description: 'The easiest way to interact with MCP servers with custom agents.',
    category: 'Tools',
    stars: 6500,
    users: '33K+',
    setupTime: '2 min',
    difficulty: 'Easy',
    tags: ['agents', 'client', 'tools', 'interaction'],
    official: false
  }
]

// Merge with discovered MCP servers
export const mcpServers = (() => {
  try {
    const merged = mergeWithDiscoveredMCP(baseMcpServers)
    console.log(`Total MCP servers after merging: ${merged.length}`)
    return merged
  } catch (error) {
    console.error('Error merging discovered MCP servers:', error)
    return baseMcpServers
  }
})()

// Categories for filtering
export const mcpCategories = [
  { id: 'all', name: 'All Servers', emoji: '🎯' },
  { id: 'Core', name: 'Core', emoji: '🔧' },
  { id: 'Development', name: 'Development', emoji: '💻' },
  { id: 'Database', name: 'Database', emoji: '🗄️' },
  { id: 'Communication', name: 'Communication', emoji: '💬' },
  { id: 'Cloud', name: 'Cloud', emoji: '☁️' },
  { id: 'DevOps', name: 'DevOps', emoji: '🚀' },
  { id: 'Productivity', name: 'Productivity', emoji: '📈' },
  { id: 'Storage', name: 'Storage', emoji: '💾' },
  { id: 'Automation', name: 'Automation', emoji: '🤖' },
  { id: 'Search', name: 'Search', emoji: '🔍' },
  { id: 'Finance', name: 'Finance', emoji: '💰' },
  { id: 'Browser', name: 'Browser', emoji: '🌐' },
  { id: 'Design', name: 'Design', emoji: '🎨' },
  { id: 'Security', name: 'Security', emoji: '🔒' },
  { id: 'System', name: 'System', emoji: '💻' },
  { id: 'AI/ML', name: 'AI/ML', emoji: '🤖' },
  { id: 'Tools', name: 'Tools', emoji: '🛠️' }
]

// SEO metadata for each MCP page
export const mcpMetadata = {
  filesystem: {
    title: 'Filesystem MCP Server - Complete File Management for AI | 2025 Guide',
    description: 'Control files and folders with AI using Filesystem MCP. Read, write, edit with granular permissions. 2-minute setup guide for Claude, VS Code, and Cursor.',
    keywords: 'filesystem mcp, file management ai, claude filesystem, mcp server files, ai file control'
  },
  github: {
    title: 'GitHub MCP Server - AI-Powered Repository Management | Official Integration',
    description: 'Automate GitHub workflows with AI. Manage repos, PRs, issues, and Actions through natural language. Complete setup guide with OAuth authentication.',
    keywords: 'github mcp, ai github integration, automated pull requests, github automation, mcp github server'
  },
  slack: {
    title: 'Slack MCP Server - AI Team Communication Automation | 100K+ Teams',
    description: 'Transform your AI into a Slack power user. Send messages, manage channels, search history. Bot and user token setup in 3 minutes.',
    keywords: 'slack mcp, ai slack integration, slack automation, team communication ai, mcp slack bot'
  },
  postgresql: {
    title: 'PostgreSQL MCP - Enterprise Database Management with AI | SQL Automation',
    description: 'Control PostgreSQL databases with natural language. Execute queries, manage schemas, optimize performance. Enterprise-grade security with SSL/TLS.',
    keywords: 'postgresql mcp, ai database management, sql automation, postgres ai, mcp database server'
  },
  mongodb: {
    title: 'MongoDB MCP Server - NoSQL Database AI Integration | Document Management',
    description: 'Manage MongoDB with AI. Natural language queries, aggregations, and document operations. Complete setup guide for developers.',
    keywords: 'mongodb mcp, nosql ai integration, document database ai, mongo automation, mcp mongodb'
  },
  sqlite: {
    title: 'SQLite MCP - Lightweight Local Database for AI | 2-Minute Setup',
    description: 'Perfect for development and embedded apps. Manage SQLite databases with natural language commands. Zero configuration required.',
    keywords: 'sqlite mcp, local database ai, embedded database, sqlite automation, mcp sqlite server'
  },
  docker: {
    title: 'Docker MCP Server - Container Management with AI | DevOps Automation',
    description: 'Build, run, and orchestrate Docker containers using natural language. Automate your container workflows with AI.',
    keywords: 'docker mcp, container automation, docker ai, devops automation, mcp docker server'
  },
  aws: {
    title: 'AWS MCP - Cloud Infrastructure Management with AI | EC2, S3, Lambda',
    description: 'Control AWS services through conversation. Manage EC2 instances, S3 buckets, Lambda functions, and more with natural language.',
    keywords: 'aws mcp, cloud automation ai, aws ai integration, cloud infrastructure, mcp aws server'
  },
  puppeteer: {
    title: 'Puppeteer MCP - Browser Automation with AI | Web Scraping & Testing',
    description: 'Automate browsers with natural language. Web scraping, PDF generation, automated testing. Official MCP server.',
    keywords: 'puppeteer mcp, browser automation ai, web scraping, automated testing, mcp puppeteer'
  },
  git: {
    title: 'Git MCP Server - Version Control with AI | Local Repository Management',
    description: 'Manage Git repositories with natural language. Commit, branch, merge, and more. Perfect for local development workflows.',
    keywords: 'git mcp, version control ai, git automation, repository management, mcp git server'
  }
}

// Installation commands for each server
export const mcpInstallCommands = {
  filesystem: 'npx -y @modelcontextprotocol/server-filesystem',
  github: 'git clone https://github.com/github/github-mcp-server.git',
  slack: 'npx -y @modelcontextprotocol/server-slack',
  postgresql: 'npm install -g @modelcontextprotocol/server-postgres',
  mongodb: 'npm install -g @modelcontextprotocol/server-mongodb',
  sqlite: 'npx -y @modelcontextprotocol/server-sqlite',
  docker: 'npm install -g docker-mcp-server',
  aws: 'npm install -g aws-mcp-server',
  puppeteer: 'npx -y @modelcontextprotocol/server-puppeteer',
  git: 'npx -y @modelcontextprotocol/server-git'
}

// Featured servers for homepage
export const featuredServers = ['filesystem', 'github', 'slack', 'postgresql', 'docker', 'puppeteer', 'playwright-mcp', 'fastmcp', 'figma-context-mcp']

// New and trending servers  
export const trendingServers = ['playwright-mcp', 'fastmcp', 'figma-context-mcp', 'zen-mcp-server', 'mcp-chrome']
export const newServers = ['whatsapp-mcp', 'firecrawl-mcp-server', 'ghidramcp', 'git-mcp', 'desktopcommandermcp', 'browser-mcp', 'mcp-use']

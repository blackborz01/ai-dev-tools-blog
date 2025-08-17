export interface MCP {
  id: string
  name: string
  description: string
  category: string
  icon: string
  features: string[]
  useCases: string[]
  status: 'stable' | 'beta' | 'experimental' | 'deprecated'
  documentation?: string
  github?: string
  author?: string
  stars?: number
  pricing?: 'free' | 'freemium' | 'paid'
  npmPackage?: string
  installCommand?: string
  isAvailable: boolean
  releaseDate?: string
  lastUpdated?: string
}

export const mcpServers: MCP[] = [
  // Official Reference Servers (Maintained by Anthropic/MCP Team)
  {
    id: 'filesystem',
    name: 'Filesystem MCP',
    description: 'Secure file operations with configurable access controls. Read, write, and manage files with granular permissions.',
    category: 'file',
    icon: '📁',
    features: [
      'Read/write files',
      'Directory management',
      'Access control',
      'File metadata',
      'Search files',
      'Move/rename operations'
    ],
    useCases: [
      'Project file management',
      'Log analysis',
      'Code generation',
      'File organization',
      'Batch operations'
    ],
    status: 'stable',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem',
    npmPackage: '@modelcontextprotocol/server-filesystem',
    installCommand: 'npx -y @modelcontextprotocol/server-filesystem',
    stars: 8500,
    pricing: 'free',
    isAvailable: true,
    author: 'Anthropic',
    lastUpdated: '2025-08'
  },
  {
    id: 'git',
    name: 'Git MCP',
    description: 'Tools to read, search, and manipulate Git repositories. Full Git operations support for version control.',
    category: 'dev',
    icon: '🔀',
    features: [
      'Repository management',
      'Commit history',
      'Branch operations',
      'Diff analysis',
      'Search code',
      'Git blame'
    ],
    useCases: [
      'Code review',
      'Version control',
      'History analysis',
      'Automated commits',
      'Branch management'
    ],
    status: 'stable',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/git',
    npmPackage: '@modelcontextprotocol/server-git',
    installCommand: 'npx -y @modelcontextprotocol/server-git',
    stars: 7200,
    pricing: 'free',
    isAvailable: true,
    author: 'Anthropic',
    lastUpdated: '2025-08'
  },
  {
    id: 'memory',
    name: 'Memory MCP',
    description: 'Knowledge graph-based persistent memory system for maintaining context across conversations.',
    category: 'ai',
    icon: '🧠',
    features: [
      'Knowledge graphs',
      'Entity management',
      'Relationship tracking',
      'Context persistence',
      'Memory search',
      'Graph visualization'
    ],
    useCases: [
      'Long-term memory',
      'Context retention',
      'Knowledge management',
      'Relationship mapping',
      'Learning systems'
    ],
    status: 'stable',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/memory',
    npmPackage: '@modelcontextprotocol/server-memory',
    installCommand: 'npx -y @modelcontextprotocol/server-memory',
    stars: 6800,
    pricing: 'free',
    isAvailable: true,
    author: 'Anthropic',
    lastUpdated: '2025-08'
  },
  {
    id: 'puppeteer',
    name: 'Puppeteer MCP',
    description: 'Browser automation and web scraping capabilities using Puppeteer. Control Chrome/Chromium programmatically.',
    category: 'browser',
    icon: '🎭',
    features: [
      'Browser automation',
      'Web scraping',
      'Screenshot capture',
      'Form filling',
      'Page navigation',
      'JavaScript execution'
    ],
    useCases: [
      'Web testing',
      'Data extraction',
      'UI automation',
      'Screenshot generation',
      'Web monitoring'
    ],
    status: 'stable',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer',
    npmPackage: '@modelcontextprotocol/server-puppeteer',
    installCommand: 'npx -y @modelcontextprotocol/server-puppeteer',
    stars: 9100,
    pricing: 'free',
    isAvailable: true,
    author: 'Anthropic',
    lastUpdated: '2025-08'
  },
  {
    id: 'fetch',
    name: 'Fetch MCP',
    description: 'Web content fetching and conversion for efficient LLM usage. Converts web pages to clean, readable format.',
    category: 'browser',
    icon: '🌐',
    features: [
      'Web fetching',
      'Content extraction',
      'HTML to markdown',
      'API requests',
      'Header management',
      'Response caching'
    ],
    useCases: [
      'Web research',
      'Content extraction',
      'API integration',
      'Data collection',
      'Web monitoring'
    ],
    status: 'stable',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/fetch',
    npmPackage: '@modelcontextprotocol/server-fetch',
    installCommand: 'npx -y @modelcontextprotocol/server-fetch',
    stars: 5400,
    pricing: 'free',
    isAvailable: true,
    author: 'Anthropic',
    lastUpdated: '2025-08'
  },
  {
    id: 'sequential-thinking',
    name: 'Sequential Thinking MCP',
    description: 'Dynamic and reflective problem-solving through thought sequences. Helps AI break down complex problems.',
    category: 'ai',
    icon: '🔄',
    features: [
      'Chain of thought',
      'Problem decomposition',
      'Hypothesis generation',
      'Verification loops',
      'Branching logic',
      'Revision tracking'
    ],
    useCases: [
      'Complex reasoning',
      'Problem solving',
      'Planning tasks',
      'Decision trees',
      'Analysis workflows'
    ],
    status: 'stable',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking',
    npmPackage: '@modelcontextprotocol/server-sequentialthinking',
    installCommand: 'npx -y @modelcontextprotocol/server-sequentialthinking',
    stars: 4200,
    pricing: 'free',
    isAvailable: true,
    author: 'Anthropic',
    lastUpdated: '2025-08'
  },

  // Official Integrations (Production-ready from companies)
  {
    id: 'github',
    name: 'GitHub MCP',
    description: 'Official GitHub integration for repository management, issues, PRs, and GitHub API operations.',
    category: 'dev',
    icon: '🐙',
    features: [
      'Repository management',
      'Issue tracking',
      'Pull requests',
      'Actions/CI',
      'Code search',
      'User management'
    ],
    useCases: [
      'Project management',
      'Code review',
      'CI/CD automation',
      'Issue triage',
      'Repository analytics'
    ],
    status: 'stable',
    github: 'https://github.com/github/github-mcp-server',
    documentation: 'https://docs.github.com/mcp',
    stars: 12500,
    pricing: 'free',
    isAvailable: true,
    author: 'GitHub',
    lastUpdated: '2025-08'
  },
  {
    id: 'slack',
    name: 'Slack MCP',
    description: 'Official Slack integration for workspace management, messaging, and channel operations.',
    category: 'communication',
    icon: '💬',
    features: [
      'Channel management',
      'Message sending',
      'Thread replies',
      'User lookup',
      'File sharing',
      'Search messages'
    ],
    useCases: [
      'Team communication',
      'Notifications',
      'Channel automation',
      'Message search',
      'Team coordination'
    ],
    status: 'stable',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/slack',
    npmPackage: '@modelcontextprotocol/server-slack',
    installCommand: 'npx -y @modelcontextprotocol/server-slack',
    documentation: 'https://api.slack.com/mcp',
    stars: 8900,
    pricing: 'free',
    isAvailable: true,
    author: 'Slack',
    lastUpdated: '2025-08'
  },
  {
    id: 'postgres',
    name: 'PostgreSQL MCP',
    description: 'PostgreSQL database integration with read-only mode by default. Query, analyze, and manage data.',
    category: 'database',
    icon: '🐘',
    features: [
      'SQL queries',
      'Schema inspection',
      'Data analysis',
      'Table management',
      'Query optimization',
      'Connection pooling'
    ],
    useCases: [
      'Database queries',
      'Data analysis',
      'Report generation',
      'Schema exploration',
      'Data migration'
    ],
    status: 'stable',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/postgres',
    npmPackage: '@modelcontextprotocol/server-postgres',
    installCommand: 'npx -y @modelcontextprotocol/server-postgres postgresql://connection-string',
    documentation: 'https://www.postgresql.org/docs/mcp',
    stars: 7600,
    pricing: 'free',
    isAvailable: true,
    author: 'PostgreSQL',
    lastUpdated: '2025-08'
  },
  {
    id: 'mongodb',
    name: 'MongoDB MCP',
    description: 'Official MongoDB and Atlas integration for NoSQL database operations and cluster management.',
    category: 'database',
    icon: '🍃',
    features: [
      'Query operations',
      'Atlas management',
      'Schema analysis',
      'Aggregation pipelines',
      'Index management',
      'Cluster monitoring'
    ],
    useCases: [
      'NoSQL queries',
      'Document management',
      'Atlas operations',
      'Data aggregation',
      'Performance tuning'
    ],
    status: 'stable',
    github: 'https://github.com/mongodb-js/mongodb-mcp-server',
    npmPackage: 'mongodb-mcp-server',
    installCommand: 'npx -y mongodb-mcp-server --connectionString mongodb://localhost:27017',
    documentation: 'https://www.mongodb.com/docs/mcp-server',
    stars: 5400,
    pricing: 'free',
    isAvailable: true,
    author: 'MongoDB',
    lastUpdated: '2025-08'
  },
  {
    id: 'sentry',
    name: 'Sentry MCP',
    description: 'Error tracking and performance monitoring integration. Access Sentry data and manage projects.',
    category: 'monitoring',
    icon: '🚨',
    features: [
      'Error tracking',
      'Performance monitoring',
      'Issue management',
      'Project setup',
      'Alert configuration',
      'Telemetry analysis'
    ],
    useCases: [
      'Error monitoring',
      'Performance analysis',
      'Debugging',
      'Alert management',
      'Issue triage'
    ],
    status: 'stable',
    github: 'https://github.com/getsentry/sentry-mcp-server',
    documentation: 'https://docs.sentry.io/mcp',
    stars: 4200,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Sentry',
    lastUpdated: '2025-08'
  },
  {
    id: 'brave-search',
    name: 'Brave Search MCP',
    description: 'Privacy-focused web and local search using Brave Search API. Independent search index.',
    category: 'search',
    icon: '🦁',
    features: [
      'Web search',
      'Local search',
      'Privacy-focused',
      'Independent index',
      'News search',
      'Image search'
    ],
    useCases: [
      'Web research',
      'Local business search',
      'News monitoring',
      'Private searching',
      'Content discovery'
    ],
    status: 'stable',
    github: 'https://github.com/brave/brave-search-mcp',
    documentation: 'https://brave.com/search/api',
    stars: 6700,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Brave',
    lastUpdated: '2025-08'
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare MCP',
    description: 'Deploy and manage resources on Cloudflare platform including Workers, KV, R2, and more.',
    category: 'cloud',
    icon: '☁️',
    features: [
      'Workers deployment',
      'KV storage',
      'R2 buckets',
      'DNS management',
      'Edge functions',
      'Analytics access'
    ],
    useCases: [
      'Edge deployment',
      'CDN management',
      'Serverless functions',
      'DNS configuration',
      'Performance optimization'
    ],
    status: 'stable',
    github: 'https://github.com/cloudflare/cloudflare-mcp-server',
    documentation: 'https://developers.cloudflare.com/mcp',
    stars: 8200,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Cloudflare',
    lastUpdated: '2025-08'
  },
  {
    id: 'stripe',
    name: 'Stripe MCP',
    description: 'Payment processing and financial operations through Stripe API integration.',
    category: 'finance',
    icon: '💳',
    features: [
      'Payment processing',
      'Customer management',
      'Subscription handling',
      'Invoice generation',
      'Refund processing',
      'Financial reporting'
    ],
    useCases: [
      'Payment automation',
      'Billing management',
      'Financial analysis',
      'Customer support',
      'Revenue tracking'
    ],
    status: 'stable',
    github: 'https://github.com/stripe/stripe-mcp-server',
    documentation: 'https://stripe.com/docs/mcp',
    stars: 5100,
    pricing: 'free',
    isAvailable: true,
    author: 'Stripe',
    lastUpdated: '2025-08'
  },
  {
    id: 'linear',
    name: 'Linear MCP',
    description: 'Project management and issue tracking through Linear. Manage tasks, projects, and workflows.',
    category: 'productivity',
    icon: '📊',
    features: [
      'Issue tracking',
      'Project management',
      'Sprint planning',
      'Workflow automation',
      'Team collaboration',
      'Analytics'
    ],
    useCases: [
      'Task management',
      'Sprint planning',
      'Bug tracking',
      'Project coordination',
      'Team productivity'
    ],
    status: 'stable',
    github: 'https://github.com/linear/linear-mcp-server',
    documentation: 'https://linear.app/docs/mcp',
    stars: 3800,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Linear',
    lastUpdated: '2025-08'
  },
  {
    id: 'asana',
    name: 'Asana MCP',
    description: 'Task and project management through Asana. Create tasks, manage projects, and track progress.',
    category: 'productivity',
    icon: '📋',
    features: [
      'Task creation',
      'Project management',
      'Team coordination',
      'Timeline views',
      'Custom fields',
      'Automation rules'
    ],
    useCases: [
      'Project planning',
      'Task tracking',
      'Team collaboration',
      'Workflow management',
      'Progress monitoring'
    ],
    status: 'stable',
    github: 'https://github.com/asana/asana-mcp-server',
    documentation: 'https://developers.asana.com/mcp',
    stars: 3200,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Asana',
    lastUpdated: '2025-08'
  },

  // Community Servers
  {
    id: 'docker',
    name: 'Docker MCP',
    description: 'Container management including images, volumes, networks, and container operations.',
    category: 'dev',
    icon: '🐳',
    features: [
      'Container management',
      'Image operations',
      'Volume control',
      'Network management',
      'Docker Compose',
      'Registry access'
    ],
    useCases: [
      'Container orchestration',
      'Development environments',
      'CI/CD pipelines',
      'Microservices',
      'Testing isolation'
    ],
    status: 'stable',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/docker',
    stars: 6300,
    pricing: 'free',
    isAvailable: true,
    author: 'Community',
    lastUpdated: '2025-07'
  },
  {
    id: 'sqlite',
    name: 'SQLite MCP',
    description: 'SQLite database operations with full SQL support for local database management.',
    category: 'database',
    icon: '💾',
    features: [
      'SQL queries',
      'Database creation',
      'Schema management',
      'Data import/export',
      'Transaction support',
      'Query optimization'
    ],
    useCases: [
      'Local databases',
      'Data analysis',
      'Prototyping',
      'Testing',
      'Embedded databases'
    ],
    status: 'stable',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite',
    npmPackage: '@modelcontextprotocol/server-sqlite',
    installCommand: 'npx -y @modelcontextprotocol/server-sqlite',
    stars: 4500,
    pricing: 'free',
    isAvailable: true,
    author: 'Community',
    lastUpdated: '2025-08'
  },
  {
    id: 'google-drive',
    name: 'Google Drive MCP',
    description: 'File access and management for Google Drive including docs, sheets, and collaborative features.',
    category: 'cloud',
    icon: '📂',
    features: [
      'File management',
      'Document editing',
      'Sheets operations',
      'Sharing controls',
      'Search capabilities',
      'Folder organization'
    ],
    useCases: [
      'Document management',
      'File sharing',
      'Collaborative editing',
      'Data backup',
      'Content organization'
    ],
    status: 'stable',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive',
    stars: 5200,
    pricing: 'free',
    isAvailable: true,
    author: 'Community',
    lastUpdated: '2025-08'
  },
  {
    id: 'notion',
    name: 'Notion MCP',
    description: 'Interact with Notion workspace including pages, databases, and collaborative content.',
    category: 'productivity',
    icon: '📝',
    features: [
      'Page management',
      'Database queries',
      'Content creation',
      'Block operations',
      'Search functionality',
      'Workspace navigation'
    ],
    useCases: [
      'Knowledge management',
      'Documentation',
      'Project wikis',
      'Database operations',
      'Content organization'
    ],
    status: 'stable',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/notion',
    stars: 7100,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Community',
    lastUpdated: '2025-07'
  },
  {
    id: 'discord',
    name: 'Discord MCP',
    description: 'Discord server management including channels, messages, and moderation features.',
    category: 'communication',
    icon: '🎮',
    features: [
      'Message management',
      'Channel operations',
      'User moderation',
      'Role management',
      'Voice channels',
      'Webhook support'
    ],
    useCases: [
      'Community management',
      'Bot operations',
      'Message automation',
      'Moderation tasks',
      'Event coordination'
    ],
    status: 'stable',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/discord',
    stars: 4800,
    pricing: 'free',
    isAvailable: true,
    author: 'Community',
    lastUpdated: '2025-07'
  },
  {
    id: 'jupyter',
    name: 'Jupyter MCP',
    description: 'Control Jupyter notebooks including code execution, cell management, and output handling.',
    category: 'dev',
    icon: '📓',
    features: [
      'Notebook control',
      'Code execution',
      'Cell management',
      'Output capture',
      'Kernel operations',
      'Variable inspection'
    ],
    useCases: [
      'Data science',
      'Code documentation',
      'Interactive computing',
      'Teaching',
      'Research notebooks'
    ],
    status: 'beta',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/jupyter',
    stars: 3600,
    pricing: 'free',
    isAvailable: true,
    author: 'Community',
    lastUpdated: '2025-07'
  },
  {
    id: 'figma',
    name: 'Figma MCP',
    description: 'Design tool integration for Figma. Extract designs, generate code, and manage components.',
    category: 'design',
    icon: '🎨',
    features: [
      'Design extraction',
      'Code generation',
      'Component access',
      'Style extraction',
      'Asset export',
      'Version history'
    ],
    useCases: [
      'Design to code',
      'Component library',
      'Design systems',
      'Asset management',
      'Style guides'
    ],
    status: 'beta',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/figma',
    stars: 5500,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Community',
    lastUpdated: '2025-06'
  },
  {
    id: 'aws',
    name: 'AWS MCP',
    description: 'Amazon Web Services integration for managing EC2, S3, Lambda, and other AWS services.',
    category: 'cloud',
    icon: '☁️',
    features: [
      'EC2 management',
      'S3 operations',
      'Lambda functions',
      'RDS databases',
      'CloudFormation',
      'IAM controls'
    ],
    useCases: [
      'Cloud infrastructure',
      'Serverless deployment',
      'Storage management',
      'Database operations',
      'Security configuration'
    ],
    status: 'stable',
    github: 'https://github.com/aws/aws-mcp-server',
    stars: 9200,
    pricing: 'free',
    isAvailable: true,
    author: 'AWS',
    lastUpdated: '2025-08'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes MCP',
    description: 'Kubernetes cluster management including deployments, services, and pod operations.',
    category: 'cloud',
    icon: '☸️',
    features: [
      'Cluster management',
      'Pod operations',
      'Service deployment',
      'ConfigMap/Secrets',
      'Scaling operations',
      'Log access'
    ],
    useCases: [
      'Container orchestration',
      'Microservices',
      'Auto-scaling',
      'Load balancing',
      'Service mesh'
    ],
    status: 'stable',
    github: 'https://github.com/kubernetes/kubernetes-mcp-server',
    stars: 7800,
    pricing: 'free',
    isAvailable: true,
    author: 'Kubernetes',
    lastUpdated: '2025-07'
  },
  {
    id: 'zapier',
    name: 'Zapier MCP',
    description: 'Automation platform integration to connect with 5000+ apps and create workflows.',
    category: 'automation',
    icon: '⚡',
    features: [
      'Workflow creation',
      'App connections',
      'Trigger management',
      'Action execution',
      'Data mapping',
      'Error handling'
    ],
    useCases: [
      'Process automation',
      'App integration',
      'Data synchronization',
      'Workflow orchestration',
      'Event triggers'
    ],
    status: 'stable',
    github: 'https://github.com/zapier/zapier-mcp-server',
    documentation: 'https://zapier.com/developer/mcp',
    stars: 4100,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Zapier',
    lastUpdated: '2025-08'
  },
  {
    id: 'paypal',
    name: 'PayPal MCP',
    description: 'PayPal commerce capabilities including payments, inventory, shipping, and refunds.',
    category: 'finance',
    icon: '💰',
    features: [
      'Payment processing',
      'Inventory management',
      'Order tracking',
      'Refund handling',
      'Subscription management',
      'Financial reporting'
    ],
    useCases: [
      'E-commerce',
      'Payment automation',
      'Order management',
      'Financial operations',
      'Subscription billing'
    ],
    status: 'stable',
    github: 'https://github.com/paypal/paypal-mcp-server',
    documentation: 'https://developer.paypal.com/mcp',
    stars: 3900,
    pricing: 'free',
    isAvailable: true,
    author: 'PayPal',
    lastUpdated: '2025-08'
  },
  {
    id: 'intercom',
    name: 'Intercom MCP',
    description: 'Customer messaging platform integration for support, engagement, and communication.',
    category: 'communication',
    icon: '💬',
    features: [
      'Customer messaging',
      'Ticket management',
      'User data access',
      'Conversation handling',
      'Automation rules',
      'Analytics'
    ],
    useCases: [
      'Customer support',
      'User engagement',
      'Support automation',
      'Conversation analysis',
      'Team collaboration'
    ],
    status: 'stable',
    github: 'https://github.com/intercom/intercom-mcp-server',
    documentation: 'https://developers.intercom.com/mcp',
    stars: 2800,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Intercom',
    lastUpdated: '2025-08'
  },
  {
    id: 'square',
    name: 'Square MCP',
    description: 'Square payment and commerce platform for managing transactions, inventory, and customers.',
    category: 'finance',
    icon: '◼️',
    features: [
      'Payment processing',
      'Inventory tracking',
      'Customer management',
      'Order management',
      'Analytics',
      'Loyalty programs'
    ],
    useCases: [
      'Point of sale',
      'E-commerce',
      'Inventory management',
      'Customer relations',
      'Business analytics'
    ],
    status: 'stable',
    github: 'https://github.com/square/square-mcp-server',
    documentation: 'https://developer.squareup.com/mcp',
    stars: 3100,
    pricing: 'free',
    isAvailable: true,
    author: 'Square (Block)',
    lastUpdated: '2025-08'
  },
  {
    id: 'atlassian',
    name: 'Atlassian MCP',
    description: 'Jira and Confluence integration for project management and documentation.',
    category: 'productivity',
    icon: '🔷',
    features: [
      'Jira issues',
      'Confluence pages',
      'Sprint management',
      'Documentation',
      'Workflow automation',
      'Team collaboration'
    ],
    useCases: [
      'Agile development',
      'Issue tracking',
      'Documentation',
      'Sprint planning',
      'Knowledge base'
    ],
    status: 'stable',
    github: 'https://github.com/atlassian/atlassian-mcp-server',
    documentation: 'https://developer.atlassian.com/mcp',
    stars: 5600,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Atlassian',
    lastUpdated: '2025-08'
  },
  {
    id: 'webflow',
    name: 'Webflow MCP',
    description: 'Visual web development platform integration for site management and deployment.',
    category: 'dev',
    icon: '🌊',
    features: [
      'Site management',
      'CMS operations',
      'Collection handling',
      'Asset management',
      'Publishing',
      'Form submissions'
    ],
    useCases: [
      'Website management',
      'Content updates',
      'CMS operations',
      'Site deployment',
      'Asset handling'
    ],
    status: 'stable',
    github: 'https://github.com/webflow/webflow-mcp-server',
    documentation: 'https://developers.webflow.com/mcp',
    stars: 3400,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Webflow',
    lastUpdated: '2025-08'
  },

  // AI & Vector Databases
  {
    id: 'pinecone',
    name: 'Pinecone MCP',
    description: 'Vector database for AI applications with similarity search and metadata filtering.',
    category: 'ai',
    icon: '🌲',
    features: [
      'Vector storage',
      'Similarity search',
      'Metadata filtering',
      'Namespace management',
      'Hybrid search',
      'Real-time updates'
    ],
    useCases: [
      'Semantic search',
      'RAG applications',
      'Recommendation systems',
      'Anomaly detection',
      'Embedding storage'
    ],
    status: 'stable',
    github: 'https://github.com/pinecone-io/pinecone-mcp-server',
    documentation: 'https://docs.pinecone.io/mcp',
    stars: 4700,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Pinecone',
    lastUpdated: '2025-08'
  },
  {
    id: 'weaviate',
    name: 'Weaviate MCP',
    description: 'Open-source vector search engine with hybrid search and GraphQL API.',
    category: 'ai',
    icon: '🔍',
    features: [
      'Vector search',
      'Hybrid search',
      'GraphQL API',
      'Module ecosystem',
      'Multi-tenancy',
      'Backup/restore'
    ],
    useCases: [
      'Semantic search',
      'Image search',
      'Recommendation',
      'Classification',
      'Knowledge graphs'
    ],
    status: 'stable',
    github: 'https://github.com/weaviate/weaviate-mcp-server',
    documentation: 'https://weaviate.io/developers/mcp',
    stars: 3800,
    pricing: 'free',
    isAvailable: true,
    author: 'Weaviate',
    lastUpdated: '2025-07'
  },
  {
    id: 'chroma',
    name: 'Chroma MCP',
    description: 'Open-source embedding database for AI applications with simple API.',
    category: 'ai',
    icon: '🎨',
    features: [
      'Embedding storage',
      'Similarity search',
      'Metadata filtering',
      'Collections',
      'Persistence',
      'Query relevance'
    ],
    useCases: [
      'RAG systems',
      'Semantic search',
      'Document retrieval',
      'AI memory',
      'Chat history'
    ],
    status: 'stable',
    github: 'https://github.com/chroma-core/chroma-mcp-server',
    documentation: 'https://docs.trychroma.com/mcp',
    stars: 3200,
    pricing: 'free',
    isAvailable: true,
    author: 'Chroma',
    lastUpdated: '2025-07'
  },

  // Specialized Tools
  {
    id: 'playwright',
    name: 'Playwright MCP',
    description: 'Modern web automation and testing framework supporting multiple browsers.',
    category: 'browser',
    icon: '🎭',
    features: [
      'Cross-browser testing',
      'Mobile emulation',
      'Network interception',
      'Visual testing',
      'API testing',
      'Parallel execution'
    ],
    useCases: [
      'E2E testing',
      'Web scraping',
      'UI automation',
      'Performance testing',
      'Cross-browser compatibility'
    ],
    status: 'stable',
    github: 'https://github.com/microsoft/playwright-mcp-server',
    stars: 6900,
    pricing: 'free',
    isAvailable: true,
    author: 'Microsoft',
    lastUpdated: '2025-08'
  },
  {
    id: 'dbt',
    name: 'dbt MCP',
    description: 'Data build tool integration for analytics engineering and data transformation.',
    category: 'database',
    icon: '📊',
    features: [
      'Semantic layer',
      'Project metadata',
      'Model information',
      'CLI commands',
      'Documentation',
      'Testing framework'
    ],
    useCases: [
      'Data transformation',
      'Analytics engineering',
      'Data quality',
      'Documentation',
      'Data lineage'
    ],
    status: 'stable',
    github: 'https://github.com/dbt-labs/dbt-mcp-server',
    documentation: 'https://docs.getdbt.com/mcp',
    stars: 4300,
    pricing: 'free',
    isAvailable: true,
    author: 'dbt Labs',
    lastUpdated: '2025-08'
  },
  {
    id: 'langchain',
    name: 'LangChain MCP',
    description: 'LLM application framework integration for building context-aware AI applications.',
    category: 'ai',
    icon: '🔗',
    features: [
      'Chain management',
      'Agent tools',
      'Memory systems',
      'Document loaders',
      'Vector stores',
      'Prompt templates'
    ],
    useCases: [
      'AI applications',
      'Agent development',
      'RAG systems',
      'Chain orchestration',
      'Tool integration'
    ],
    status: 'beta',
    github: 'https://github.com/langchain-ai/langchain-mcp-server',
    documentation: 'https://python.langchain.com/docs/mcp',
    stars: 8100,
    pricing: 'free',
    isAvailable: true,
    author: 'LangChain',
    lastUpdated: '2025-07'
  },
  {
    id: 'gmail',
    name: 'Gmail MCP',
    description: 'Gmail integration for email management, sending, and organization.',
    category: 'communication',
    icon: '📧',
    features: [
      'Email sending',
      'Inbox management',
      'Label organization',
      'Search capabilities',
      'Draft management',
      'Attachment handling'
    ],
    useCases: [
      'Email automation',
      'Inbox management',
      'Communication workflows',
      'Email analysis',
      'Automated responses'
    ],
    status: 'stable',
    github: 'https://github.com/google/gmail-mcp-server',
    stars: 5100,
    pricing: 'free',
    isAvailable: true,
    author: 'Google',
    lastUpdated: '2025-08'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp MCP',
    description: 'WhatsApp messaging integration for sending messages and managing contacts.',
    category: 'communication',
    icon: '📱',
    features: [
      'Message sending',
      'Contact management',
      'Chat loading',
      'Media handling',
      'Group messaging',
      'Status updates'
    ],
    useCases: [
      'Messaging automation',
      'Customer communication',
      'Notifications',
      'Group coordination',
      'Media sharing'
    ],
    status: 'beta',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/whatsapp',
    stars: 3600,
    pricing: 'free',
    isAvailable: true,
    author: 'Community',
    lastUpdated: '2025-06'
  },
  {
    id: 'twitter',
    name: 'Twitter/X MCP',
    description: 'Twitter/X platform integration for posting, reading tweets, and account management.',
    category: 'communication',
    icon: '🐦',
    features: [
      'Tweet posting',
      'Timeline reading',
      'User management',
      'Search tweets',
      'Media upload',
      'Analytics'
    ],
    useCases: [
      'Social media management',
      'Content posting',
      'Trend analysis',
      'Engagement tracking',
      'Automated posting'
    ],
    status: 'beta',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/twitter',
    stars: 4200,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Community',
    lastUpdated: '2025-06'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn MCP',
    description: 'Professional networking platform integration for profile and content management.',
    category: 'communication',
    icon: '💼',
    features: [
      'Profile management',
      'Post creation',
      'Connection handling',
      'Message sending',
      'Job searching',
      'Analytics'
    ],
    useCases: [
      'Professional networking',
      'Content sharing',
      'Job hunting',
      'Lead generation',
      'Brand building'
    ],
    status: 'beta',
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/linkedin',
    stars: 2900,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Community',
    lastUpdated: '2025-06'
  },
  {
    id: 'redis',
    name: 'Redis MCP',
    description: 'In-memory data structure store for caching, messaging, and real-time applications.',
    category: 'database',
    icon: '🔴',
    features: [
      'Key-value operations',
      'Pub/sub messaging',
      'Caching',
      'Session storage',
      'Real-time data',
      'Data persistence'
    ],
    useCases: [
      'Caching layer',
      'Session management',
      'Real-time messaging',
      'Leaderboards',
      'Rate limiting'
    ],
    status: 'stable',
    github: 'https://github.com/redis/redis-mcp-server',
    stars: 4100,
    pricing: 'free',
    isAvailable: true,
    author: 'Redis',
    lastUpdated: '2025-07'
  },
  {
    id: 'elasticsearch',
    name: 'Elasticsearch MCP',
    description: 'Full-text search and analytics engine for complex search operations.',
    category: 'database',
    icon: '🔎',
    features: [
      'Full-text search',
      'Analytics',
      'Aggregations',
      'Index management',
      'Query DSL',
      'Real-time indexing'
    ],
    useCases: [
      'Search engines',
      'Log analytics',
      'Application monitoring',
      'Security analytics',
      'Business intelligence'
    ],
    status: 'stable',
    github: 'https://github.com/elastic/elasticsearch-mcp-server',
    stars: 5300,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Elastic',
    lastUpdated: '2025-08'
  },
  {
    id: 'grafana',
    name: 'Grafana MCP',
    description: 'Observability platform for monitoring, visualization, and alerting.',
    category: 'monitoring',
    icon: '📈',
    features: [
      'Dashboard management',
      'Query datasources',
      'Alert configuration',
      'Visualization',
      'Team management',
      'Annotation'
    ],
    useCases: [
      'System monitoring',
      'Performance tracking',
      'Alert management',
      'Data visualization',
      'Incident response'
    ],
    status: 'stable',
    github: 'https://github.com/grafana/grafana-mcp-server',
    stars: 3700,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Grafana Labs',
    lastUpdated: '2025-07'
  },
  {
    id: 'terraform',
    name: 'Terraform MCP',
    description: 'Infrastructure as Code tool for building, changing, and versioning infrastructure.',
    category: 'cloud',
    icon: '🏗️',
    features: [
      'Infrastructure provisioning',
      'State management',
      'Plan generation',
      'Resource management',
      'Module handling',
      'Version control'
    ],
    useCases: [
      'Infrastructure automation',
      'Cloud provisioning',
      'Multi-cloud management',
      'Compliance',
      'Disaster recovery'
    ],
    status: 'stable',
    github: 'https://github.com/hashicorp/terraform-mcp-server',
    stars: 6200,
    pricing: 'freemium',
    isAvailable: true,
    author: 'HashiCorp',
    lastUpdated: '2025-08'
  },
  {
    id: 'tableau',
    name: 'Tableau MCP',
    description: 'Business intelligence and data visualization platform integration.',
    category: 'analytics',
    icon: '📊',
    features: [
      'Dashboard creation',
      'Data connections',
      'Visualization',
      'Report generation',
      'Data refresh',
      'User management'
    ],
    useCases: [
      'Business intelligence',
      'Data visualization',
      'Report automation',
      'Analytics',
      'Executive dashboards'
    ],
    status: 'beta',
    github: 'https://github.com/tableau/tableau-mcp-server',
    stars: 2800,
    pricing: 'paid',
    isAvailable: true,
    author: 'Tableau',
    lastUpdated: '2025-06'
  },
  {
    id: 'datadog',
    name: 'Datadog MCP',
    description: 'Monitoring and security platform for cloud applications and infrastructure.',
    category: 'monitoring',
    icon: '🐕',
    features: [
      'Metrics monitoring',
      'Log management',
      'APM tracing',
      'Alert configuration',
      'Dashboard creation',
      'Incident management'
    ],
    useCases: [
      'Application monitoring',
      'Infrastructure monitoring',
      'Security monitoring',
      'Log analysis',
      'Performance optimization'
    ],
    status: 'stable',
    github: 'https://github.com/datadog/datadog-mcp-server',
    stars: 4500,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Datadog',
    lastUpdated: '2025-08'
  },
  {
    id: 'shopify',
    name: 'Shopify MCP',
    description: 'E-commerce platform integration for store management and operations.',
    category: 'commerce',
    icon: '🛍️',
    features: [
      'Product management',
      'Order processing',
      'Inventory tracking',
      'Customer management',
      'Analytics',
      'App integration'
    ],
    useCases: [
      'E-commerce automation',
      'Inventory management',
      'Order fulfillment',
      'Customer service',
      'Sales analytics'
    ],
    status: 'stable',
    github: 'https://github.com/shopify/shopify-mcp-server',
    stars: 5400,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Shopify',
    lastUpdated: '2025-08'
  },
  {
    id: 'hubspot',
    name: 'HubSpot MCP',
    description: 'CRM and marketing platform integration for sales and marketing automation.',
    category: 'crm',
    icon: '🎯',
    features: [
      'Contact management',
      'Deal tracking',
      'Email marketing',
      'Pipeline management',
      'Analytics',
      'Workflow automation'
    ],
    useCases: [
      'CRM operations',
      'Marketing automation',
      'Sales pipeline',
      'Customer tracking',
      'Lead generation'
    ],
    status: 'stable',
    github: 'https://github.com/hubspot/hubspot-mcp-server',
    stars: 3100,
    pricing: 'freemium',
    isAvailable: true,
    author: 'HubSpot',
    lastUpdated: '2025-07'
  },
  {
    id: 'airtable',
    name: 'Airtable MCP',
    description: 'Spreadsheet-database hybrid for organizing and collaborating on information.',
    category: 'productivity',
    icon: '📋',
    features: [
      'Base management',
      'Record operations',
      'View configuration',
      'Automation',
      'Collaboration',
      'API access'
    ],
    useCases: [
      'Project management',
      'Content calendar',
      'CRM',
      'Inventory tracking',
      'Event planning'
    ],
    status: 'stable',
    github: 'https://github.com/airtable/airtable-mcp-server',
    stars: 3900,
    pricing: 'freemium',
    isAvailable: true,
    author: 'Airtable',
    lastUpdated: '2025-08'
  }
]

// Helper functions
export function getMCPsByCategory(category: string): MCP[] {
  return mcpServers.filter(mcp => mcp.category === category)
}

export function getMCPStats() {
  const total = mcpServers.length
  const stable = mcpServers.filter(m => m.status === 'stable').length
  const beta = mcpServers.filter(m => m.status === 'beta').length
  const experimental = mcpServers.filter(m => m.status === 'experimental').length
  const free = mcpServers.filter(m => !m.pricing || m.pricing === 'free').length
  const freemium = mcpServers.filter(m => m.pricing === 'freemium').length
  const paid = mcpServers.filter(m => m.pricing === 'paid').length
  const categories = [...new Set(mcpServers.map(m => m.category))].length
  const available = mcpServers.filter(m => m.isAvailable).length

  return {
    total,
    stable,
    beta,
    experimental,
    free,
    freemium,
    paid,
    categories,
    available
  }
}

export function searchMCPs(query: string): MCP[] {
  const lowerQuery = query.toLowerCase()
  return mcpServers.filter(mcp => 
    mcp.name.toLowerCase().includes(lowerQuery) ||
    mcp.description.toLowerCase().includes(lowerQuery) ||
    mcp.features.some(f => f.toLowerCase().includes(lowerQuery)) ||
    mcp.useCases.some(u => u.toLowerCase().includes(lowerQuery)) ||
    mcp.category.toLowerCase().includes(lowerQuery)
  )
}

export function getTopMCPs(limit: number = 10): MCP[] {
  return [...mcpServers]
    .filter(m => m.stars)
    .sort((a, b) => (b.stars || 0) - (a.stars || 0))
    .slice(0, limit)
}

export function getMCPCategories() {
  const categoryMap = new Map<string, { name: string; count: number; icon: string }>()
  
  const categoryIcons: Record<string, string> = {
    'file': '📁',
    'browser': '🌐',
    'database': '💾',
    'dev': '⚙️',
    'ai': '🤖',
    'cloud': '☁️',
    'communication': '💬',
    'security': '🔒',
    'monitoring': '📊',
    'productivity': '📋',
    'automation': '⚡',
    'finance': '💰',
    'search': '🔍',
    'design': '🎨',
    'analytics': '📈',
    'commerce': '🛍️',
    'crm': '🎯'
  }
  
  mcpServers.forEach(mcp => {
    if (!categoryMap.has(mcp.category)) {
      categoryMap.set(mcp.category, {
        name: mcp.category,
        count: 0,
        icon: categoryIcons[mcp.category] || '📦'
      })
    }
    const cat = categoryMap.get(mcp.category)!
    cat.count++
  })
  
  return Array.from(categoryMap.values()).sort((a, b) => b.count - a.count)
}

export function getAvailableMCPs(): MCP[] {
  return mcpServers.filter(m => m.isAvailable)
}

export function getMCPsByStatus(status: 'stable' | 'beta' | 'experimental' | 'deprecated'): MCP[] {
  return mcpServers.filter(m => m.status === status)
}

export function getMCPsByPricing(pricing: 'free' | 'freemium' | 'paid'): MCP[] {
  return mcpServers.filter(m => m.pricing === pricing || (!m.pricing && pricing === 'free'))
}

export interface MCP {
  id: string
  name: string
  description: string
  category: 'file' | 'browser' | 'data' | 'dev' | 'ai' | 'search' | 'utility'
  icon: string
  features: string[]
  useCases: string[]
  status: 'stable' | 'beta' | 'experimental'
  documentation?: string
  github?: string
}

export const mcpServers: MCP[] = [
  {
    id: 'pdf-filler',
    name: 'PDF Filler MCP',
    description: 'Comprehensive PDF manipulation - fill forms, extract data, bulk operations, and validation',
    category: 'file',
    icon: '📄',
    features: [
      'List and read PDF form fields',
      'Fill PDF forms programmatically',
      'Bulk fill from CSV data',
      'Save/load reusable profiles',
      'Extract form data to CSV',
      'Validate required fields'
    ],
    useCases: [
      'Automate form filling',
      'Batch process documents',
      'Extract data from PDFs',
      'Create document templates'
    ],
    status: 'stable'
  },
  {
    id: 'enrichr',
    name: 'Enrichr Gene Analysis',
    description: 'Gene set enrichment analysis with support for multiple biological databases',
    category: 'data',
    icon: '🧬',
    features: [
      'Gene function analysis',
      'Test enrichment across databases',
      'Biological pathway discovery',
      'Disease association analysis',
      'Drug target identification',
      'GO term analysis'
    ],
    useCases: [
      'Biomedical research',
      'Drug discovery',
      'Genomic analysis',
      'Academic research'
    ],
    status: 'stable',
    documentation: 'https://maayanlab.cloud/Enrichr/'
  },
  {
    id: 'figma-dev',
    name: 'Figma Dev Mode',
    description: 'Convert Figma designs to production-ready code with variable extraction',
    category: 'dev',
    icon: '🎨',
    features: [
      'Generate UI code from designs',
      'Extract design variables',
      'Get component mappings',
      'Export images from nodes',
      'Access design tokens'
    ],
    useCases: [
      'Design to code workflow',
      'Component library creation',
      'Design system implementation',
      'Rapid prototyping'
    ],
    status: 'stable',
    documentation: 'https://www.figma.com/developers/api'
  },
  {
    id: 'b12-website',
    name: 'B12 Website Generator',
    description: 'Instant website generation from business description',
    category: 'ai',
    icon: '🌐',
    features: [
      'AI-powered website creation',
      'Business-specific designs',
      'Instant preview links',
      'SEO optimization',
      'Mobile responsive'
    ],
    useCases: [
      'Quick website prototypes',
      'Business landing pages',
      'Portfolio sites',
      'MVP development'
    ],
    status: 'stable'
  },
  {
    id: 'chrome-control',
    name: 'Chrome Control',
    description: 'Full Chrome browser automation and control',
    category: 'browser',
    icon: '🌍',
    features: [
      'Open/close tabs',
      'Navigate URLs',
      'Execute JavaScript',
      'Get page content',
      'Browser history control',
      'Tab management'
    ],
    useCases: [
      'Web automation',
      'Testing workflows',
      'Data extraction',
      'Browser orchestration'
    ],
    status: 'stable'
  },
  {
    id: 'memory',
    name: 'Knowledge Graph Memory',
    description: 'Persistent knowledge graph for storing entities and relationships',
    category: 'data',
    icon: '🧠',
    features: [
      'Create entities and relations',
      'Add observations',
      'Search nodes',
      'Graph visualization',
      'Persistent storage'
    ],
    useCases: [
      'Knowledge management',
      'Research organization',
      'Relationship mapping',
      'Data persistence'
    ],
    status: 'stable'
  },
  {
    id: 'brave-search',
    name: 'Brave Search',
    description: 'Privacy-focused web and local search capabilities',
    category: 'search',
    icon: '🦁',
    features: [
      'Web search',
      'Local business search',
      'News aggregation',
      'Image search',
      'Privacy protection',
      'No tracking'
    ],
    useCases: [
      'Research',
      'Local discovery',
      'News monitoring',
      'Private browsing'
    ],
    status: 'stable',
    documentation: 'https://brave.com/search/api/'
  },
  {
    id: 'sequential-thinking',
    name: 'Sequential Thinking',
    description: 'Dynamic problem-solving through adaptive thought chains',
    category: 'ai',
    icon: '🤔',
    features: [
      'Multi-step reasoning',
      'Thought revision',
      'Branch exploration',
      'Hypothesis generation',
      'Solution verification'
    ],
    useCases: [
      'Complex problem solving',
      'Planning and design',
      'Analysis tasks',
      'Decision making'
    ],
    status: 'stable'
  },
  {
    id: 'github',
    name: 'GitHub Integration',
    description: 'Complete GitHub repository and code management',
    category: 'dev',
    icon: '🐙',
    features: [
      'Repository management',
      'File operations',
      'Issue tracking',
      'Pull request creation',
      'Code search',
      'Branch management'
    ],
    useCases: [
      'Code collaboration',
      'Version control',
      'Issue management',
      'CI/CD workflows'
    ],
    status: 'stable',
    github: 'https://github.com',
    documentation: 'https://docs.github.com/rest'
  },
  {
    id: 'filesystem',
    name: 'Filesystem Operations',
    description: 'Complete file and directory management with safety controls',
    category: 'file',
    icon: '📁',
    features: [
      'Read/write files',
      'Directory operations',
      'File search',
      'Bulk operations',
      'Media file handling',
      'Tree visualization'
    ],
    useCases: [
      'File management',
      'Data processing',
      'Backup operations',
      'Content organization'
    ],
    status: 'stable'
  },
  {
    id: 'puppeteer',
    name: 'Puppeteer Browser',
    description: 'Headless Chrome automation for web scraping and testing',
    category: 'browser',
    icon: '🎭',
    features: [
      'Navigate pages',
      'Take screenshots',
      'Click elements',
      'Fill forms',
      'Execute JavaScript',
      'Selector operations'
    ],
    useCases: [
      'Web scraping',
      'E2E testing',
      'PDF generation',
      'Performance monitoring'
    ],
    status: 'stable',
    github: 'https://github.com/puppeteer/puppeteer'
  },
  {
    id: 'repl',
    name: 'JavaScript REPL',
    description: 'Browser-based JavaScript execution environment for analysis',
    category: 'utility',
    icon: '⚡',
    features: [
      'Execute JavaScript',
      'Data analysis',
      'File processing',
      'Library imports',
      'CSV/Excel handling',
      'Math computations'
    ],
    useCases: [
      'Data analysis',
      'Quick calculations',
      'File processing',
      'Testing code'
    ],
    status: 'stable'
  }
]

export const mcpCategories = [
  { id: 'all', name: 'All MCPs', icon: '🎯' },
  { id: 'file', name: 'File Operations', icon: '📁' },
  { id: 'browser', name: 'Browser Control', icon: '🌐' },
  { id: 'data', name: 'Data & Analytics', icon: '📊' },
  { id: 'dev', name: 'Development', icon: '💻' },
  { id: 'ai', name: 'AI & ML', icon: '🤖' },
  { id: 'search', name: 'Search', icon: '🔍' },
  { id: 'utility', name: 'Utilities', icon: '🛠️' }
]

// MCP Server Page Generator
// This script generates all MCP server pages with SEO-optimized content

const mcpServerConfigs = [
  {
    id: 'aws',
    name: 'AWS MCP SERVER',
    theme: { primary: 'orange', secondary: 'yellow', gradient: 'from-orange-400 to-yellow-400' },
    badge: 'CLOUD LEADER',
    growth: '+198%',
    users: '60K+',
    rating: '4.9',
    setupTime: '10min',
    emoji: '☁️',
    shortDesc: 'Control AWS services through conversation. EC2, S3, Lambda, RDS - manage your entire cloud infrastructure with natural language.',
    problem: {
      stat: '92% of cloud costs are wasted on unused resources',
      pain: 'AWS console complexity, hundreds of services, IAM permission nightmares',
      solution: 'AWS MCP turns cloud management into conversation. Deploy infrastructure, monitor costs, and optimize resources automatically.'
    },
    features: [
      { icon: 'Cloud', title: 'Multi-Service Control', desc: 'Manage EC2, S3, Lambda, RDS, and 100+ AWS services naturally.' },
      { icon: 'DollarSign', title: 'Cost Optimization', desc: 'AI-powered cost analysis and automatic resource rightsizing.' },
      { icon: 'Shield', title: 'Security Automation', desc: 'IAM policies, security groups, and compliance configured correctly.' },
      { icon: 'GitBranch', title: 'Infrastructure as Code', desc: 'Generate CloudFormation and Terraform templates automatically.' }
    ],
    pros: ['Complete AWS service coverage', 'Built-in cost optimization', 'CloudFormation integration', 'Multi-region support', 'IAM best practices', 'Real-time monitoring'],
    cons: ['Requires AWS credentials', 'Complex operations need review', 'Rate limits apply', 'Learning curve for AWS concepts'],
    useCases: [
      { title: 'Cloud Architecture', desc: 'Design and deploy scalable cloud solutions.' },
      { title: 'Cost Management', desc: 'Monitor and optimize cloud spending.' },
      { title: 'DevOps Automation', desc: 'Streamline deployment pipelines.' }
    ]
  },
  {
    id: 'redis',
    name: 'REDIS MCP SERVER',
    theme: { primary: 'red', secondary: 'orange', gradient: 'from-red-400 to-orange-400' },
    badge: 'BLAZING FAST',
    growth: '+165%',
    users: '30K+',
    rating: '4.8',
    setupTime: '3min',
    emoji: '⚡',
    shortDesc: 'In-memory data store management through AI. Handle caching, sessions, pub/sub, and real-time data with lightning speed.',
    problem: {
      stat: '70% of web apps suffer from slow database queries',
      pain: 'Cache invalidation, memory management, complex Redis commands',
      solution: 'Redis MCP makes caching conversational. Optimize performance, manage memory, and handle real-time data effortlessly.'
    },
    features: [
      { icon: 'Zap', title: 'Instant Caching', desc: 'Smart cache management with automatic TTL and invalidation strategies.' },
      { icon: 'Activity', title: 'Real-time Pub/Sub', desc: 'Manage message queues and real-time communication channels.' },
      { icon: 'Database', title: 'Data Structures', desc: 'Work with strings, hashes, lists, sets, and sorted sets naturally.' },
      { icon: 'TrendingUp', title: 'Performance Analytics', desc: 'Monitor memory usage, hit rates, and optimize performance.' }
    ],
    pros: ['Sub-millisecond latency', 'Automatic memory management', 'Cluster support', 'Persistence options', 'Lua scripting support', 'Real-time operations'],
    cons: ['Limited by RAM', 'Data volatility risk', 'Single-threaded for commands', 'Complex cluster setup'],
    useCases: [
      { title: 'Session Management', desc: 'Store and manage user sessions at scale.' },
      { title: 'Real-time Analytics', desc: 'Process and cache real-time data streams.' },
      { title: 'Message Queuing', desc: 'Build pub/sub systems and job queues.' }
    ]
  },
  {
    id: 'notion',
    name: 'NOTION MCP SERVER',
    theme: { primary: 'gray', secondary: 'black', gradient: 'from-gray-400 to-black' },
    badge: 'PRODUCTIVITY KING',
    growth: '+223%',
    users: '80K+',
    rating: '4.9',
    setupTime: '3min',
    emoji: '📝',
    shortDesc: 'Transform Notion into an AI-powered workspace. Manage notes, databases, tasks, and wikis through natural language.',
    problem: {
      stat: 'Knowledge workers waste 20% of time searching for information',
      pain: 'Scattered documentation, manual updates, complex database queries',
      solution: 'Notion MCP creates an intelligent workspace. Auto-organize content, generate reports, and find anything instantly.'
    },
    features: [
      { icon: 'FileText', title: 'Smart Documentation', desc: 'Create, update, and organize pages with AI-powered structure.' },
      { icon: 'Database', title: 'Database Magic', desc: 'Query and manage Notion databases with natural language.' },
      { icon: 'CheckSquare', title: 'Task Automation', desc: 'Create tasks, manage projects, and track progress automatically.' },
      { icon: 'Search', title: 'Intelligent Search', desc: 'Find any information across your entire workspace instantly.' }
    ],
    pros: ['Full Notion API coverage', 'Database automation', 'Template generation', 'Cross-workspace sync', 'Rich content support', 'Collaboration features'],
    cons: ['API rate limits', 'Complex permissions', 'Offline limitations', 'Large database slowdowns'],
    useCases: [
      { title: 'Team Knowledge Base', desc: 'Build and maintain company wikis automatically.' },
      { title: 'Project Management', desc: 'Track projects, tasks, and deadlines.' },
      { title: 'Content Creation', desc: 'Generate and organize content at scale.' }
    ]
  },
  {
    id: 'git',
    name: 'GIT MCP SERVER',
    theme: { primary: 'orange', secondary: 'red', gradient: 'from-orange-400 to-red-400' },
    badge: 'VERSION CONTROL',
    growth: '+156%',
    users: '60K+',
    rating: '4.7',
    setupTime: '2min',
    emoji: '🔀',
    shortDesc: 'Master Git version control through conversation. Commit, branch, merge, and manage repositories without memorizing commands.',
    problem: {
      stat: 'Developers lose 13% of coding time to Git conflicts',
      pain: 'Complex merge conflicts, forgotten commands, messy commit history',
      solution: 'Git MCP makes version control intuitive. Handle branches, resolve conflicts, and maintain clean history effortlessly.'
    },
    features: [
      { icon: 'GitBranch', title: 'Branch Management', desc: 'Create, merge, and manage branches with smart conflict resolution.' },
      { icon: 'GitCommit', title: 'Smart Commits', desc: 'Generate meaningful commit messages and atomic commits automatically.' },
      { icon: 'GitMerge', title: 'Conflict Resolution', desc: 'AI-assisted merge conflict resolution with context understanding.' },
      { icon: 'History', title: 'History Management', desc: 'Rebase, cherry-pick, and manage commit history intelligently.' }
    ],
    pros: ['Local repository control', 'Smart conflict resolution', 'Commit message generation', 'Branch strategy automation', 'History visualization', 'Hook integration'],
    cons: ['Local only (no remote)', 'Large repo performance', 'Complex rebases need review', 'No GitHub/GitLab features'],
    useCases: [
      { title: 'Development Workflow', desc: 'Streamline your Git workflow with AI assistance.' },
      { title: 'Code Review Prep', desc: 'Clean up commits before pull requests.' },
      { title: 'Repository Maintenance', desc: 'Keep repositories clean and organized.' }
    ]
  },
  {
    id: 'puppeteer',
    name: 'PUPPETEER MCP SERVER',
    theme: { primary: 'purple', secondary: 'pink', gradient: 'from-purple-400 to-pink-400' },
    badge: 'AUTOMATION PRO',
    growth: '+201%',
    users: '45K+',
    rating: '4.8',
    setupTime: '5min',
    emoji: '🎭',
    shortDesc: 'Browser automation superpowers. Web scraping, testing, PDF generation, and UI automation through natural language.',
    problem: {
      stat: '60% of QA time is spent on repetitive browser testing',
      pain: 'Complex selectors, async handling, browser inconsistencies',
      solution: 'Puppeteer MCP automates browsers conversationally. Scrape data, test UIs, and generate reports without writing scripts.'
    },
    features: [
      { icon: 'Globe', title: 'Web Scraping', desc: 'Extract data from any website with intelligent selector detection.' },
      { icon: 'Camera', title: 'Screenshot & PDF', desc: 'Capture screenshots and generate PDFs of web pages automatically.' },
      { icon: 'MousePointer', title: 'UI Automation', desc: 'Automate form filling, clicking, and user interactions.' },
      { icon: 'TestTube', title: 'E2E Testing', desc: 'Create and run end-to-end tests with natural language.' }
    ],
    pros: ['Headless browser control', 'JavaScript execution', 'Network interception', 'Mobile emulation', 'Performance profiling', 'Parallel execution'],
    cons: ['Resource intensive', 'Dynamic content challenges', 'Anti-bot detection', 'Maintenance overhead'],
    useCases: [
      { title: 'Web Scraping', desc: 'Extract data from websites at scale.' },
      { title: 'Automated Testing', desc: 'Run UI and integration tests.' },
      { title: 'Report Generation', desc: 'Create PDFs and screenshots automatically.' }
    ]
  }
];

export default mcpServerConfigs;

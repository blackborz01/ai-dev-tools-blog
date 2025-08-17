import Link from 'next/link'
import { ArrowLeft, Terminal, CheckCircle, AlertCircle, Clock, Star, Users, Download, Copy, Book, Shield, Database, Table, Key, Search, BarChart, Lock, Zap, TrendingUp, GitBranch, Code, Server, Activity, HardDrive, Cpu } from 'lucide-react'
import { CopyButton, CopyCodeButton } from '@/components/CopyButton'

export default function PostgreSQLMCPPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Navigation */}
      <nav className="border-b-4 border-black dark:border-white sticky top-0 z-50 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center">
                <Terminal className="w-6 h-6 text-white dark:text-black" />
              </div>
              <div>
                <div className="text-2xl font-black">AI.TOOLS</div>
                <div className="text-xs font-mono text-red-500">MCP.DIRECTORY</div>
              </div>
            </Link>
            <Link href="/mcp" className="flex items-center gap-2 px-4 py-2 font-black text-sm hover:bg-black hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              BACK TO MCP LIST
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Schema.org potential */}
      <section className="py-16 border-b-4 border-black dark:border-white bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Breadcrumb for SEO */}
            <div className="flex items-center gap-2 text-sm font-mono mb-6 opacity-70">
              <Link href="/" className="hover:text-blue-500">Home</Link>
              <span>/</span>
              <Link href="/mcp" className="hover:text-blue-500">MCP Servers</Link>
              <span>/</span>
              <span className="text-blue-500">PostgreSQL</span>
            </div>

            {/* Trust Signal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-black text-xs mb-6">
              <CheckCircle className="w-4 h-4" />
              PRODUCTION READY • ENTERPRISE GRADE • ACID COMPLIANT
            </div>
            
            <div className="flex items-start gap-6 mb-8">
              <div className="text-6xl">🐘</div>
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-black mb-4">
                  PostgreSQL MCP Server
                  <span className="block text-2xl md:text-3xl mt-2 text-blue-500 font-mono">
                    @modelcontextprotocol/server-postgres
                  </span>
                </h1>
                
                <p className="text-xl mb-6 opacity-80">
                  Give your AI complete control over PostgreSQL databases. Execute complex queries, manage schemas, analyze performance, and automate database operations with natural language commands - the most powerful database MCP for enterprise applications.
                </p>

                {/* Social Proof Stats */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-bold">6,200+ Stars</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-500" />
                    <span className="font-bold">50M+ Queries/Day</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-500" />
                    <span className="font-bold">5 Min Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-500" />
                    <span className="font-bold">SSL/TLS Secure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap gap-4">
              <CopyCodeButton 
                text="npm install -g @modelcontextprotocol/server-postgres"
                label="INSTALL NOW"
              />
              <a 
                href="https://github.com/modelcontextprotocol/servers/tree/main/src/postgres"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 text-white font-black hover:bg-blue-600 flex items-center gap-2"
              >
                <Database className="w-5 h-5" />
                VIEW SOURCE
              </a>
              <a 
                href="https://modelcontextprotocol.io/docs/servers/postgres"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-4 border-black dark:border-white font-black hover:bg-gray-100 dark:hover:bg-gray-900 flex items-center gap-2"
              >
                <Book className="w-5 h-5" />
                DOCUMENTATION
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Snippet Target - Quick Answer Box */}
      <section className="py-8 bg-blue-100 dark:bg-blue-900/20 border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="font-black text-xl mb-4">⚡ QUICK ANSWER</h2>
            <div className="bg-white dark:bg-black p-6 border-4 border-black dark:border-white">
              <p className="text-lg font-bold mb-4">
                PostgreSQL MCP is a Model Context Protocol server that enables AI assistants like Claude to interact with PostgreSQL databases through natural language. It supports all SQL operations including SELECT, INSERT, UPDATE, DELETE, schema management, transactions, performance optimization, and advanced features like CTEs and window functions. Enterprise-grade security with SSL/TLS encryption, role-based access control, and connection pooling.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold text-sm">
                  ✓ Full SQL Support
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-bold text-sm">
                  ✓ Schema Management
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-bold text-sm">
                  ✓ ACID Transactions
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 font-bold text-sm">
                  ✓ Performance Analytics
                </span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 font-bold text-sm">
                  ✓ Migration Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Table of Contents for Better UX and SEO */}
          <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-900 border-4 border-black dark:border-white">
            <h2 className="font-black text-2xl mb-4">📚 COMPLETE GUIDE CONTENTS</h2>
            <nav className="space-y-2">
              <a href="#what-is" className="block py-2 px-4 hover:bg-blue-500 hover:text-white font-bold transition-colors">
                1. What is PostgreSQL MCP? Understanding the Power
              </a>
              <a href="#features" className="block py-2 px-4 hover:bg-blue-500 hover:text-white font-bold transition-colors">
                2. Enterprise Features & Capabilities
              </a>
              <a href="#installation" className="block py-2 px-4 hover:bg-blue-500 hover:text-white font-bold transition-colors">
                3. Complete Installation & Setup Guide
              </a>
              <a href="#commands" className="block py-2 px-4 hover:bg-blue-500 hover:text-white font-bold transition-colors">
                4. Essential SQL Commands & Examples
              </a>
              <a href="#use-cases" className="block py-2 px-4 hover:bg-blue-500 hover:text-white font-bold transition-colors">
                5. Real-World Use Cases & Workflows
              </a>
              <a href="#troubleshooting" className="block py-2 px-4 hover:bg-blue-500 hover:text-white font-bold transition-colors">
                6. Troubleshooting & Common Issues
              </a>
            </nav>
          </div>

          {/* What is PostgreSQL MCP - SEO Optimized Content */}
          <section id="what-is" className="mb-12">
            <h2 className="text-3xl font-black mb-6">🤔 What is PostgreSQL MCP Server?</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                PostgreSQL MCP transforms your AI assistant into a database administrator, data analyst, and performance engineer all rolled into one. Instead of writing complex SQL queries, debugging syntax errors, or manually optimizing database performance, you can simply tell your AI what you need in plain English, and it handles everything from simple SELECT statements to complex migrations and performance tuning.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 border-l-4 border-blue-500 mb-6">
                <h3 className="font-black text-xl mb-3">🎯 Who Benefits Most from PostgreSQL MCP:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span><strong>Data Engineers:</strong> Automate ETL pipelines, data cleaning, transformations, and data quality checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span><strong>Backend Developers:</strong> Schema design, migrations, query optimization, and database refactoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span><strong>Data Analysts:</strong> Complex queries, report generation, data visualization preparation, and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span><strong>DevOps Teams:</strong> Database monitoring, backup automation, performance tuning, and capacity planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span><strong>Business Analysts:</strong> Ad-hoc queries, KPI tracking, business intelligence, and data exploration</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-black text-2xl mb-4">How PostgreSQL MCP Works</h3>
              <ol className="space-y-4 mb-8">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white font-black flex items-center justify-center">1</span>
                  <div>
                    <strong>Database Connection:</strong> MCP server establishes secure connection to your PostgreSQL database using connection string with SSL/TLS
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white font-black flex items-center justify-center">2</span>
                  <div>
                    <strong>Natural Language Input:</strong> You describe what you want: "Find customers who haven't ordered in 6 months"
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white font-black flex items-center justify-center">3</span>
                  <div>
                    <strong>AI Query Generation:</strong> Your AI translates the request into optimized SQL with proper JOINs, indexes, and filters
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white font-black flex items-center justify-center">4</span>
                  <div>
                    <strong>Safe Execution:</strong> Queries are validated, sanitized, and executed with proper transaction handling
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white font-black flex items-center justify-center">5</span>
                  <div>
                    <strong>Results & Insights:</strong> Get formatted results, performance metrics, and optimization suggestions
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Enterprise Features - Comprehensive for SEO */}
          <section id="features" className="mb-12">
            <h2 className="text-3xl font-black mb-6">✨ Enterprise Features & Capabilities</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-4 border-black dark:border-white p-6">
                <h3 className="font-black text-xl mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-blue-500" />
                  Query Operations
                </h3>
                <ul className="space-y-2">
                  <li>• SELECT with complex JOINs</li>
                  <li>• INSERT/UPDATE/DELETE with RETURNING</li>
                  <li>• UPSERT (INSERT ON CONFLICT)</li>
                  <li>• CTEs (WITH clauses)</li>
                  <li>• Window functions</li>
                  <li>• Recursive queries</li>
                  <li>• Prepared statements</li>
                  <li>• Batch operations</li>
                </ul>
              </div>

              <div className="border-4 border-black dark:border-white p-6">
                <h3 className="font-black text-xl mb-4 flex items-center gap-2">
                  <Table className="w-6 h-6 text-green-500" />
                  Schema Management
                </h3>
                <ul className="space-y-2">
                  <li>• CREATE/ALTER/DROP tables</li>
                  <li>• Index management (B-tree, Hash, GIN, GiST)</li>
                  <li>• Foreign key constraints</li>
                  <li>• Views & Materialized Views</li>
                  <li>• Triggers & Functions</li>
                  <li>• Table partitioning</li>
                  <li>• Sequences & Serials</li>
                  <li>• Custom types & domains</li>
                </ul>
              </div>

              <div className="border-4 border-black dark:border-white p-6">
                <h3 className="font-black text-xl mb-4 flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-purple-500" />
                  Performance Analytics
                </h3>
                <ul className="space-y-2">
                  <li>• Query plan analysis (EXPLAIN ANALYZE)</li>
                  <li>• Index usage statistics</li>
                  <li>• Table bloat detection</li>
                  <li>• Slow query identification</li>
                  <li>• Cache hit ratios</li>
                  <li>• Lock monitoring</li>
                  <li>• Connection pool stats</li>
                  <li>• Autovacuum monitoring</li>
                </ul>
              </div>

              <div className="border-4 border-black dark:border-white p-6">
                <h3 className="font-black text-xl mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-red-500" />
                  Security Features
                </h3>
                <ul className="space-y-2">
                  <li>• SSL/TLS encryption</li>
                  <li>• Role-based access control (RBAC)</li>
                  <li>• Row-level security (RLS)</li>
                  <li>• Query sanitization</li>
                  <li>• Connection pooling</li>
                  <li>• Audit logging</li>
                  <li>• Read-only mode option</li>
                  <li>• Encrypted connections</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Installation Guide - Comprehensive */}
          <section id="installation" className="mb-12">
            <h2 className="text-3xl font-black mb-6">🚀 Complete Installation & Setup Guide</h2>
            
            {/* Prerequisites */}
            <div className="mb-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border-4 border-yellow-500">
              <h3 className="font-black text-xl mb-3">📋 Prerequisites</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>PostgreSQL 12+ installed and running</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Node.js 18+ and npm</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Database credentials (user, password, host, port, database)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Claude Desktop, VS Code, or Cursor IDE</span>
                </li>
              </ul>
            </div>

            {/* Claude Desktop Configuration */}
            <div className="mb-8">
              <h3 className="font-black text-2xl mb-4">Configure Claude Desktop</h3>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6 border-4 border-black dark:border-white mb-4">
                <h4 className="font-black mb-3">📍 Configuration File Locations:</h4>
                <ul className="space-y-2 font-mono text-sm">
                  <li><strong>MacOS:</strong> ~/Library/Application Support/Claude/claude_desktop_config.json</li>
                  <li><strong>Windows:</strong> %APPDATA%\Claude\claude_desktop_config.json</li>
                  <li><strong>Linux:</strong> ~/.config/claude/claude_desktop_config.json</li>
                </ul>
              </div>

              <div className="border-4 border-black dark:border-white p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-black">Add to Configuration</h4>
                  <CopyButton 
                    text={`{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://username:password@localhost:5432/database"
      ]
    }
  }
}`}
                    label="COPY CONFIG"
                  />
                </div>
                <pre className="bg-black text-white dark:bg-white dark:text-black p-4 overflow-x-auto text-sm">
                  <code>{`{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://username:password@localhost:5432/database"
      ]
    }
  }
}`}</code>
                </pre>
              </div>
            </div>

            {/* Verification */}
            <div className="bg-green-50 dark:bg-green-900/20 p-6 border-4 border-green-500">
              <h3 className="font-black text-xl mb-4">✅ Verify Installation</h3>
              <p className="mb-4">Test these commands in Claude after setup:</p>
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>"Show all tables in the database"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>"What's the schema of the users table?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>"Count total records in each table"</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Essential SQL Commands */}
          <section id="commands" className="mb-12">
            <h2 className="text-3xl font-black mb-6">💬 Essential SQL Commands & Examples</h2>
            
            <div className="space-y-6">
              <div className="border-4 border-black dark:border-white p-6">
                <h3 className="font-black text-xl mb-4">📊 Data Query Commands</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-900">
                    <p className="font-bold mb-1">Simple Select:</p>
                    <p className="font-mono text-sm">"Show me the 10 most recent orders"</p>
                    <p className="text-xs mt-1 opacity-70">Generates: SELECT * FROM orders ORDER BY created_at DESC LIMIT 10;</p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-900">
                    <p className="font-bold mb-1">Complex Join:</p>
                    <p className="font-mono text-sm">"Find customers who spent over $1000 last month with their order details"</p>
                    <p className="text-xs mt-1 opacity-70">Generates: Complex JOIN with GROUP BY and HAVING</p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-900">
                    <p className="font-bold mb-1">Aggregation:</p>
                    <p className="font-mono text-sm">"Calculate monthly revenue by product category for 2024"</p>
                    <p className="text-xs mt-1 opacity-70">Generates: SELECT with GROUP BY, DATE_TRUNC, SUM</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section id="use-cases" className="mb-12">
            <h2 className="text-3xl font-black mb-6">💡 Real-World Use Cases & Workflows</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-4 border-black dark:border-white p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                <h3 className="font-black text-xl mb-4">📊 Business Analytics Dashboard</h3>
                <p className="mb-3">Generate complex business reports instantly:</p>
                <div className="bg-white dark:bg-black p-3 text-sm font-mono">
                  "Calculate monthly recurring revenue, churn rate, and customer lifetime value for Q3 2024"
                </div>
              </div>

              <div className="border-4 border-black dark:border-white p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <h3 className="font-black text-xl mb-4">🚀 Database Migration</h3>
                <p className="mb-3">Safe schema changes with zero downtime:</p>
                <div className="bg-white dark:bg-black p-3 text-sm font-mono">
                  "Add an index on orders.customer_id and orders.created_at without locking the table"
                </div>
              </div>

              <div className="border-4 border-black dark:border-white p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
                <h3 className="font-black text-xl mb-4">🔍 Data Quality Audit</h3>
                <p className="mb-3">Automated data validation and cleanup:</p>
                <div className="bg-white dark:bg-black p-3 text-sm font-mono">
                  "Find duplicate customer records, orphaned orders, and invalid email addresses"
                </div>
              </div>

              <div className="border-4 border-black dark:border-white p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
                <h3 className="font-black text-xl mb-4">⚡ Performance Tuning</h3>
                <p className="mb-3">Instant query optimization:</p>
                <div className="bg-white dark:bg-black p-3 text-sm font-mono">
                  "Analyze and optimize the top 10 slowest queries from today's logs"
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting" className="mb-12">
            <h2 className="text-3xl font-black mb-6">🔧 Troubleshooting & Common Issues</h2>
            
            <div className="space-y-4">
              <details className="border-4 border-black dark:border-white">
                <summary className="p-4 bg-black text-white dark:bg-white dark:text-black font-black cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200">
                  ❌ Connection Refused Error
                </summary>
                <div className="p-4">
                  <p className="mb-3"><strong>Common Causes:</strong></p>
                  <ol className="space-y-2 ml-4">
                    <li>1. PostgreSQL not running: <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1">sudo service postgresql start</code></li>
                    <li>2. Wrong host/port: Default is localhost:5432</li>
                    <li>3. Firewall blocking: Check firewall rules</li>
                    <li>4. pg_hba.conf restrictions: Allow connections from your IP</li>
                  </ol>
                </div>
              </details>

              <details className="border-4 border-black dark:border-white">
                <summary className="p-4 bg-black text-white dark:bg-white dark:text-black font-black cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200">
                  🔒 Authentication Failed
                </summary>
                <div className="p-4">
                  <p className="mb-3"><strong>Solutions:</strong></p>
                  <ul className="space-y-2 ml-4">
                    <li>• Verify username and password</li>
                    <li>• Check user exists: <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1">\du</code> in psql</li>
                    <li>• Grant permissions: <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1">GRANT CONNECT ON DATABASE mydb TO myuser;</code></li>
                    <li>• Check pg_hba.conf authentication method</li>
                  </ul>
                </div>
              </details>
            </div>
          </section>

          {/* Related MCPs */}
          <section className="mb-12">
            <h2 className="text-3xl font-black mb-6">🔗 Related MCP Servers</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/mcp/servers/mongodb" className="border-4 border-black dark:border-white p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🍃</span>
                  <h3 className="font-black">MongoDB MCP</h3>
                </div>
                <p className="text-sm opacity-80">NoSQL document database operations</p>
              </Link>
              
              <Link href="/mcp/servers/sqlite" className="border-4 border-black dark:border-white p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">💾</span>
                  <h3 className="font-black">SQLite MCP</h3>
                </div>
                <p className="text-sm opacity-80">Lightweight local database</p>
              </Link>
              
              <Link href="/mcp/servers/redis" className="border-4 border-black dark:border-white p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">⚡</span>
                  <h3 className="font-black">Redis MCP</h3>
                </div>
                <p className="text-sm opacity-80">In-memory data caching</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center py-12 border-t-4 border-black dark:border-white">
            <h2 className="text-3xl font-black mb-4">Ready to Transform Your Database Workflow?</h2>
            <p className="text-xl mb-8 opacity-80">Install PostgreSQL MCP and turn your AI into a database expert in minutes!</p>
            
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <CopyCodeButton 
                text="npm install -g @modelcontextprotocol/server-postgres"
                label="COPY INSTALL COMMAND"
              />
              
              <Link 
                href="/mcp"
                className="px-8 py-4 border-4 border-black dark:border-white font-black text-lg hover:bg-gray-100 dark:hover:bg-gray-900 flex items-center gap-2 justify-center"
              >
                EXPLORE MORE MCPs →
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t-4 border-black dark:border-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-xs">
            © 2025 AI.TOOLS // MCP DIRECTORY // POSTGRESQL MCP COMPLETE GUIDE
          </p>
          <p className="font-mono text-xs mt-2 opacity-60">
            PostgreSQL® is a registered trademark of the PostgreSQL Global Development Group
          </p>
        </div>
      </footer>
    </div>
  )
}

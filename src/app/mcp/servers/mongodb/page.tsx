import Link from 'next/link'
import { ArrowLeft, Star, Database, FileText, Server, Zap, Search, CheckCircle, XCircle, TrendingUp, Users, Clock, Shield, Cpu } from 'lucide-react'

export default function MongoDBMCPPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-cyan-500/30 sticky top-0 z-50 bg-black/90 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/mcp" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold">Back to MCP Servers</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-500/20 border border-green-500 rounded-full text-xs font-bold text-green-400">
                ESSENTIAL
              </span>
              <span className="text-2xl font-black text-green-400">+156%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-emerald-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              MONGODB MCP SERVER
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Give Claude superpowers over your MongoDB databases. Query, analyze, and manage NoSQL data through natural language - no more complex aggregation pipelines or query syntax.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-green-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">18K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-green-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.7</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-green-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold">+156%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-green-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">5min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/modelcontextprotocol/servers/tree/main/src/mongodb" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  INSTALL NOW
                </button>
              </Link>
              <Link href="https://modelcontextprotocol.io/docs" target="_blank">
                <button className="px-6 py-3 border-2 border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500/10 transition-colors flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  DOCUMENTATION
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Quick Answer Box */}
            <div className="mb-12 p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg">
              <h2 className="text-2xl font-black mb-4 text-green-400">What is MongoDB MCP Server?</h2>
              <p className="text-gray-300">
                MongoDB MCP Server is a Model Context Protocol integration that connects AI assistants to MongoDB databases. It enables natural language database queries, automated data analysis, schema management, and complex aggregation pipelines without writing code.
              </p>
            </div>

            {/* Problem Statement */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">THE NOSQL COMPLEXITY CRISIS</h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="text-lg mb-4">
                  <strong>73% of developers struggle with MongoDB aggregation pipelines.</strong> Complex queries, nested documents, array operations - MongoDB's flexibility comes with a steep learning curve.
                </p>
                <p className="text-lg">
                  Now imagine asking Claude: "Find all users who made purchases over $100 last month and group them by country." Done. No pipeline syntax, no debugging, just results.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">GAME-CHANGING FEATURES</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Search className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Natural Language Queries</h3>
                  <p className="text-gray-400">Convert plain English to complex MongoDB queries and aggregations instantly.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Database className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Schema Intelligence</h3>
                  <p className="text-gray-400">Automatic schema inference and validation for dynamic NoSQL structures.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Cpu className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                  <p className="text-gray-400">AI-suggested indexes and query optimizations for faster operations.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Shield className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Secure Connections</h3>
                  <p className="text-gray-400">Support for MongoDB Atlas, replica sets, and encrypted connections.</p>
                </div>
              </div>
            </div>

            {/* Installation Guide */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">QUICK START GUIDE</h2>
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-full flex items-center justify-center">1</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Install the MCP Server</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400">npm install @modelcontextprotocol/server-mongodb</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-full flex items-center justify-center">2</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Set your MongoDB connection string</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400">mongodb://username:password@host:port/database</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-full flex items-center justify-center">3</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Configure in Claude Desktop</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400 whitespace-pre">{`{
  "mcpServers": {
    "mongodb": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-mongodb"],
      "env": {
        "MONGODB_URI": "your-connection-string"
      }
    }
  }
}`}</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-full flex items-center justify-center">4</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Start querying!</p>
                      <p className="text-sm text-gray-400">Ask Claude: "Show me all documents in the users collection"</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Pros and Cons */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-3xl font-black mb-6 text-green-400">PROS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Natural language database queries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Handles complex aggregations easily</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Works with MongoDB Atlas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Automatic schema detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Built-in data validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Supports all CRUD operations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Requires MongoDB knowledge for complex ops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Connection string setup needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Large datasets can be slow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">No real-time change streams yet</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">PERFECT FOR</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-green-400">Data Analysis</h3>
                  <p className="text-sm text-gray-400">Explore and analyze NoSQL data without writing complex queries.</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-emerald-400">Application Development</h3>
                  <p className="text-sm text-gray-400">Rapid prototyping and database operations during development.</p>
                </div>
                <div className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-teal-400">Database Administration</h3>
                  <p className="text-sm text-gray-400">Manage collections, indexes, and perform maintenance tasks.</p>
                </div>
              </div>
            </div>

            {/* Example Queries */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">EXAMPLE NATURAL LANGUAGE QUERIES</h2>
              <div className="space-y-4">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Find high-value customers:</p>
                  <code className="text-sm text-cyan-400">"Show me customers who spent over $1000 in the last 30 days"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Complex aggregation:</p>
                  <code className="text-sm text-cyan-400">"Group orders by product category and calculate average order value"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Data cleanup:</p>
                  <code className="text-sm text-cyan-400">"Find and remove duplicate user records based on email"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Performance optimization:</p>
                  <code className="text-sm text-cyan-400">"Suggest indexes for the most common queries on the products collection"</code>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">FREQUENTLY ASKED QUESTIONS</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-green-400">Does it work with MongoDB Atlas?</h3>
                  <p className="text-gray-400">Yes! Full support for MongoDB Atlas, including clusters and serverless instances.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-green-400">Can it handle large databases?</h3>
                  <p className="text-gray-400">Yes, but queries are optimized for collections under 1 million documents for best performance.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-green-400">Is my data secure?</h3>
                  <p className="text-gray-400">Absolutely. All connections use MongoDB's native security, and no data is stored by the MCP server.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-green-400">What MongoDB versions are supported?</h3>
                  <p className="text-gray-400">MongoDB 4.4+ is recommended, though it works with versions as old as 3.6.</p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Make MongoDB as easy as asking a question</h2>
              <p className="text-xl text-gray-400 mb-8">Join 18,000+ developers using natural language for NoSQL</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    START QUERYING NOW →
                  </button>
                </Link>
                <Link href="/mcp">
                  <button className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500/10 transition-colors">
                    EXPLORE MORE MCP SERVERS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

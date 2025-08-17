import Link from 'next/link'
import { ArrowLeft, Star, Zap, FileText, Activity, Database, TrendingUp, CheckCircle, XCircle, Users, Clock, Gauge, BarChart } from 'lucide-react'

export default function RedisMCPPage() {
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
              <span className="px-3 py-1 bg-red-500/20 border border-red-500 rounded-full text-xs font-bold text-red-400">
                BLAZING FAST
              </span>
              <span className="text-2xl font-black text-red-400">+165%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              REDIS MCP SERVER
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              In-memory data store management through AI. Handle caching, sessions, pub/sub, and real-time data with lightning speed and natural language.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-red-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-red-400 mb-2" />
                <div className="text-2xl font-bold">30K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-red-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-red-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+165%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-red-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">3min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  INSTALL NOW
                </button>
              </Link>
              <Link href="https://modelcontextprotocol.io/docs" target="_blank">
                <button className="px-6 py-3 border-2 border-red-500 text-red-400 font-bold rounded-lg hover:bg-red-500/10 transition-colors flex items-center gap-2">
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
            <div className="mb-12 p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-lg">
              <h2 className="text-2xl font-black mb-4 text-red-400">What is Redis MCP Server?</h2>
              <p className="text-gray-300">
                Redis MCP Server enables AI assistants to manage Redis in-memory data stores through natural language. Handle caching strategies, session management, pub/sub messaging, and real-time data operations with sub-millisecond latency.
              </p>
            </div>

            {/* Problem Statement */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">SPEED IS EVERYTHING</h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="text-lg mb-4">
                  <strong>70% of web apps suffer from slow database queries.</strong> Cache invalidation nightmares, memory management complexity, and Redis command syntax slow down development.
                </p>
                <p className="text-lg">
                  Redis MCP makes caching conversational. Optimize performance, manage memory, and handle real-time data effortlessly. Tell Claude what you need cached, and watch response times drop to microseconds.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">LIGHTNING-FAST FEATURES</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Zap className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Instant Caching</h3>
                  <p className="text-gray-400">Smart cache management with automatic TTL and invalidation strategies.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Activity className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Real-time Pub/Sub</h3>
                  <p className="text-gray-400">Manage message queues and real-time communication channels naturally.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Database className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Data Structures</h3>
                  <p className="text-gray-400">Work with strings, hashes, lists, sets, and sorted sets conversationally.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Gauge className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
                  <p className="text-gray-400">Monitor memory usage, hit rates, and optimize performance automatically.</p>
                </div>
              </div>
            </div>

            {/* Installation Guide */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">3-MINUTE SETUP</h2>
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 text-black font-bold rounded-full flex items-center justify-center">1</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Install Redis MCP Server</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400">npm install -g redis-mcp-server</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 text-black font-bold rounded-full flex items-center justify-center">2</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Set Redis connection</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400">redis://localhost:6379</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 text-black font-bold rounded-full flex items-center justify-center">3</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Configure Claude Desktop</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400 whitespace-pre">{`{
  "mcpServers": {
    "redis": {
      "command": "redis-mcp",
      "args": ["--url", "redis://localhost:6379"]
    }
  }
}`}</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 text-black font-bold rounded-full flex items-center justify-center">4</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Start caching!</p>
                      <p className="text-sm text-gray-400">Try: "Cache user sessions with 1-hour expiration"</p>
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
                    <span className="text-gray-300">Sub-millisecond latency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Automatic memory management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Cluster support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Persistence options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Lua scripting support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Real-time operations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Limited by RAM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Data volatility risk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Single-threaded for commands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Complex cluster setup</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">PERFECT FOR</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-red-400">Session Management</h3>
                  <p className="text-sm text-gray-400">Store and manage user sessions at scale.</p>
                </div>
                <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-orange-400">Real-time Analytics</h3>
                  <p className="text-sm text-gray-400">Process and cache real-time data streams.</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-yellow-400">Message Queuing</h3>
                  <p className="text-sm text-gray-400">Build pub/sub systems and job queues.</p>
                </div>
              </div>
            </div>

            {/* Example Commands */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">EXAMPLE COMMANDS</h2>
              <div className="space-y-4">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Cache management:</p>
                  <code className="text-sm text-cyan-400">"Cache API responses with 5-minute TTL"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Session handling:</p>
                  <code className="text-sm text-cyan-400">"Store user session data with automatic expiration"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Real-time messaging:</p>
                  <code className="text-sm text-cyan-400">"Create a pub/sub channel for notifications"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Performance monitoring:</p>
                  <code className="text-sm text-cyan-400">"Show cache hit rate and memory usage"</code>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">FREQUENTLY ASKED QUESTIONS</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-red-400">How fast is Redis really?</h3>
                  <p className="text-gray-400">Redis can handle 100,000+ operations per second with sub-millisecond latency.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-red-400">Does it support clustering?</h3>
                  <p className="text-gray-400">Yes! Full Redis Cluster support for horizontal scaling across multiple nodes.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-red-400">Is data persistent?</h3>
                  <p className="text-gray-400">Optional persistence with RDB snapshots and AOF (Append Only File) logging.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-red-400">Can it handle large datasets?</h3>
                  <p className="text-gray-400">Limited by RAM, but can handle datasets up to hundreds of GB with proper configuration.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-red-400">Works with Redis Stack?</h3>
                  <p className="text-gray-400">Full support for Redis Stack modules including RedisJSON, RedisSearch, and RedisGraph.</p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Accelerate your app to lightning speed</h2>
              <p className="text-xl text-gray-400 mb-8">Join 30,000+ developers using Redis MCP for blazing-fast caching</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    SPEED UP NOW →
                  </button>
                </Link>
                <Link href="/mcp">
                  <button className="px-8 py-4 border-2 border-red-500 text-red-400 font-bold rounded-lg hover:bg-red-500/10 transition-colors">
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

import Link from 'next/link'
import { ArrowLeft, Star, Zap, FileText, Code, Terminal, Layers, CheckCircle, XCircle, TrendingUp, Users, Clock, Cpu, GitBranch } from 'lucide-react'

export default function FastMCPPage() {
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
              <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500 rounded-full text-xs font-bold text-yellow-400">
                PYTHONIC POWER
              </span>
              <span className="text-2xl font-black text-yellow-400">+312%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-orange-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              FASTMCP SERVER
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              🚀 The fast, Pythonic way to build MCP servers and clients. Create powerful AI integrations with minimal code. The developer-friendly MCP framework.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">75K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+312%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">1min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/jlowin/fastmcp" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  INSTALL NOW
                </button>
              </Link>
              <Link href="https://github.com/jlowin/fastmcp/wiki" target="_blank">
                <button className="px-6 py-3 border-2 border-yellow-500 text-yellow-400 font-bold rounded-lg hover:bg-yellow-500/10 transition-colors flex items-center gap-2">
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
            <div className="mb-12 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-lg">
              <h2 className="text-2xl font-black mb-4 text-yellow-400">What is FastMCP?</h2>
              <p className="text-gray-300">
                FastMCP is the fastest, most Pythonic way to build MCP servers and clients. It provides a simple, declarative API for creating powerful AI integrations with minimal boilerplate. Build production-ready MCP servers in minutes, not hours.
              </p>
            </div>

            {/* Problem Statement */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">MCP DEVELOPMENT SIMPLIFIED</h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="text-lg mb-4">
                  <strong>90% of MCP server code is boilerplate.</strong> Complex protocols, type definitions, error handling - building MCP servers shouldn't require a framework expert.
                </p>
                <p className="text-lg">
                  FastMCP eliminates the complexity. Write simple Python functions, and FastMCP handles the rest. Your ideas become MCP servers in minutes.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">DEVELOPER SUPERPOWERS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Zap className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                  <p className="text-gray-400">Build MCP servers 10x faster with minimal code.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Code className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Pythonic API</h3>
                  <p className="text-gray-400">Simple decorators and intuitive patterns Python developers love.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Layers className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Type Safety</h3>
                  <p className="text-gray-400">Full type hints and validation with Pydantic models.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Terminal className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">CLI Tools</h3>
                  <p className="text-gray-400">Built-in CLI for testing, debugging, and deployment.</p>
                </div>
              </div>
            </div>

            {/* Installation Guide */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">1-MINUTE SETUP</h2>
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full flex items-center justify-center">1</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Install FastMCP</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400">pip install fastmcp</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full flex items-center justify-center">2</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Create your first server</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400 whitespace-pre">{`from fastmcp import FastMCP

app = FastMCP("my-server")

@app.tool()
def hello(name: str) -> str:
    return f"Hello, {name}!"

app.run()`}</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full flex items-center justify-center">3</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Configure Claude Desktop</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400 whitespace-pre">{`{
  "mcpServers": {
    "my-server": {
      "command": "python",
      "args": ["server.py"]
    }
  }
}`}</code>
                      </div>
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
                    <span className="text-gray-300">Minimal boilerplate code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Python-native development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Automatic type validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Built-in testing tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Async support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Extensive documentation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Python only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Requires Python knowledge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Limited to MCP features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Young ecosystem</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Build MCP servers at lightning speed</h2>
              <p className="text-xl text-gray-400 mb-8">Join 75,000+ developers using FastMCP for rapid MCP development</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/jlowin/fastmcp" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    GET STARTED →
                  </button>
                </Link>
                <Link href="/mcp">
                  <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-bold rounded-lg hover:bg-yellow-500/10 transition-colors">
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

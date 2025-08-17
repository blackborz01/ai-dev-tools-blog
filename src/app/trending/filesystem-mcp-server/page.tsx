import Link from 'next/link'
import { ArrowLeft, Star, GitBranch, FileText, Shield, Zap, AlertTriangle, CheckCircle, XCircle, TrendingUp, Users, Clock, ExternalLink } from 'lucide-react'

export default function FilesystemMCPServerPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-cyan-500/30 sticky top-0 z-50 bg-black/90 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-lime-500/20 border border-lime-500 rounded-full text-xs font-bold text-lime-400">
                NEW
              </span>
              <span className="text-2xl font-black text-lime-400">+67%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-900/20 via-black to-green-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
              FILESYSTEM MCP SERVER
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              The most essential MCP server for file system operations. Enable your AI assistant to read, write, and manage files with enterprise-grade security and performance.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-lime-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-lime-400 mb-2" />
                <div className="text-2xl font-bold">15K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-lime-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-lime-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+67%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-lime-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">2min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-lime-500 to-green-500 text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  VIEW ON GITHUB
                </button>
              </Link>
              <Link href="/mcp/servers/filesystem" target="_blank">
                <button className="px-6 py-3 border-2 border-lime-500 text-lime-400 font-bold rounded-lg hover:bg-lime-500/10 transition-colors flex items-center gap-2">
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
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">OVERVIEW</h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="text-lg mb-4">
                  The Filesystem MCP Server is a groundbreaking integration that transforms how AI assistants interact with your local file system. Built on the Model Context Protocol, it provides secure, sandboxed access to files and directories, enabling Claude and other AI assistants to perform complex file operations while maintaining strict security boundaries.
                </p>
                <p className="text-lg">
                  Whether you're managing code repositories, organizing documents, or automating file-based workflows, this server provides the essential bridge between AI intelligence and your file system, all while ensuring your data remains secure and under your control.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">KEY FEATURES</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Shield className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Sandboxed Security</h3>
                  <p className="text-gray-400">Operates within defined directory boundaries with configurable permissions to ensure data safety.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                  <p className="text-gray-400">Optimized for performance with async operations and intelligent caching mechanisms.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <FileText className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Full CRUD Operations</h3>
                  <p className="text-gray-400">Complete file management including read, write, create, delete, and directory operations.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <GitBranch className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Git Integration</h3>
                  <p className="text-gray-400">Native support for Git operations, making it perfect for code management workflows.</p>
                </div>
              </div>
            </div>

            {/* Pros and Cons */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Pros */}
              <div>
                <h2 className="text-3xl font-black mb-6 text-green-400">PROS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Essential for any file-based AI workflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Excellent security model with sandboxing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Easy 2-minute setup process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Active development and community support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Works seamlessly with Claude Desktop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Free and open source</span>
                  </li>
                </ul>
              </div>

              {/* Cons */}
              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Requires Node.js or Python runtime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Limited to local file system access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">No cloud storage integration yet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Requires manual permission configuration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">PERFECT FOR</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Code Development</h3>
                  <p className="text-sm text-gray-400">Managing source code, reading documentation, and automating development tasks.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Document Management</h3>
                  <p className="text-sm text-gray-400">Organizing files, creating reports, and processing large document collections.</p>
                </div>
                <div className="bg-gradient-to-br from-pink-900/20 to-orange-900/20 border border-pink-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Data Processing</h3>
                  <p className="text-sm text-gray-400">Reading CSV files, processing logs, and managing data workflows.</p>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">QUICK START</h2>
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6">
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-black font-bold rounded-full flex items-center justify-center">1</span>
                    <div>
                      <p className="font-bold mb-1">Install via npm or Python</p>
                      <code className="text-sm bg-gray-900 px-2 py-1 rounded text-cyan-400">npm install @modelcontextprotocol/server-filesystem</code>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-black font-bold rounded-full flex items-center justify-center">2</span>
                    <div>
                      <p className="font-bold mb-1">Configure in Claude Desktop settings</p>
                      <p className="text-sm text-gray-400">Add the server configuration to your claude_desktop_config.json</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-black font-bold rounded-full flex items-center justify-center">3</span>
                    <div>
                      <p className="font-bold mb-1">Set directory permissions</p>
                      <p className="text-sm text-gray-400">Define which directories the AI can access</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-black font-bold rounded-full flex items-center justify-center">4</span>
                    <div>
                      <p className="font-bold mb-1">Start using with Claude</p>
                      <p className="text-sm text-gray-400">Ask Claude to read, write, or manage your files!</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Ready to enhance your AI workflow?</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    GET STARTED NOW
                  </button>
                </Link>
                <Link href="/mcp">
                  <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-colors">
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

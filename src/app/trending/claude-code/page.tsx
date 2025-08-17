import Link from 'next/link'
import { ArrowLeft, Star, GitBranch, FileText, Terminal, Zap, Brain, CheckCircle, XCircle, TrendingUp, Users, Clock, Code, Command } from 'lucide-react'

export default function ClaudeCodePage() {
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
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500 rounded-full text-xs font-bold text-blue-400">
                TRENDING
              </span>
              <span className="text-2xl font-black text-blue-400">+234%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              CLAUDE CODE
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Anthropic's revolutionary AI coding agent. Build entire applications, debug complex issues, and refactor codebases with Claude's advanced reasoning and coding capabilities directly from your terminal.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-blue-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-blue-400 mb-2" />
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-blue-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-blue-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+234%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-blue-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">1min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://docs.anthropic.com/claude-code" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  GET CLAUDE CODE
                </button>
              </Link>
              <Link href="https://docs.anthropic.com" target="_blank">
                <button className="px-6 py-3 border-2 border-blue-500 text-blue-400 font-bold rounded-lg hover:bg-blue-500/10 transition-colors flex items-center gap-2">
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
                  Claude Code is Anthropic's game-changing AI coding agent that brings Claude's advanced reasoning capabilities directly to your development workflow. Unlike traditional code assistants, Claude Code can handle entire projects, understand complex architectures, and make intelligent decisions about implementation details.
                </p>
                <p className="text-lg">
                  With its terminal-first approach, Claude Code seamlessly integrates into your existing development environment. It can create full applications from scratch, debug intricate issues, refactor legacy code, write comprehensive tests, and even handle DevOps tasks - all while maintaining context across your entire codebase.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">KEY FEATURES</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Brain className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Advanced Reasoning</h3>
                  <p className="text-gray-400">Understands complex requirements and makes intelligent architectural decisions.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Code className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Full-Stack Capable</h3>
                  <p className="text-gray-400">Handles frontend, backend, databases, and infrastructure code with expertise.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Terminal className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Terminal Integration</h3>
                  <p className="text-gray-400">Works directly from your command line with full filesystem access.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Command className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Multi-File Editing</h3>
                  <p className="text-gray-400">Modifies multiple files simultaneously while maintaining consistency.</p>
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
                    <span className="text-gray-300">Exceptional code quality and best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Understands project context deeply</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Can build complete applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Excellent at debugging and refactoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Terminal-first approach for developers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Powered by Claude 3.5 Sonnet</span>
                  </li>
                </ul>
              </div>

              {/* Cons */}
              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Requires API credits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Can be expensive for large projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Terminal-only interface</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Limited to text-based interactions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">PERFECT FOR</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Rapid Prototyping</h3>
                  <p className="text-sm text-gray-400">Build MVPs and proof-of-concepts in hours instead of days.</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-900/20 to-green-900/20 border border-cyan-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Code Refactoring</h3>
                  <p className="text-sm text-gray-400">Modernize legacy codebases and improve code quality.</p>
                </div>
                <div className="bg-gradient-to-br from-green-900/20 to-purple-900/20 border border-green-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Learning & Teaching</h3>
                  <p className="text-sm text-gray-400">Learn new technologies with detailed explanations.</p>
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
                      <p className="font-bold mb-1">Install Claude Code CLI</p>
                      <code className="text-sm bg-gray-900 px-2 py-1 rounded text-cyan-400">npm install -g claude-code</code>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-black font-bold rounded-full flex items-center justify-center">2</span>
                    <div>
                      <p className="font-bold mb-1">Set up API key</p>
                      <code className="text-sm bg-gray-900 px-2 py-1 rounded text-cyan-400">claude-code auth</code>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-black font-bold rounded-full flex items-center justify-center">3</span>
                    <div>
                      <p className="font-bold mb-1">Start coding</p>
                      <code className="text-sm bg-gray-900 px-2 py-1 rounded text-cyan-400">claude-code "Build a React dashboard"</code>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Example Commands */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">EXAMPLE COMMANDS</h2>
              <div className="space-y-4">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <code className="text-sm text-cyan-400">claude-code "Create a REST API with Express and MongoDB"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <code className="text-sm text-cyan-400">claude-code "Debug this TypeError in my React component"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <code className="text-sm text-cyan-400">claude-code "Add unit tests to all functions in src/"</code>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Ready to code with AI superpowers?</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://docs.anthropic.com/claude-code" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    START CODING NOW
                  </button>
                </Link>
                <Link href="/tools">
                  <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-bold rounded-lg hover:bg-blue-500/10 transition-colors">
                    EXPLORE MORE AI TOOLS
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

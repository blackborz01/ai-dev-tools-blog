import Link from 'next/link'
import { ArrowLeft, Star, GitBranch, FileText, Code2, Zap, Sparkles, CheckCircle, XCircle, TrendingUp, Users, Clock, Monitor, Cpu } from 'lucide-react'

export default function CursorIDEPage() {
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
              <span className="px-3 py-1 bg-pink-500/20 border border-pink-500 rounded-full text-xs font-bold text-pink-400">
                HOT 🔥
              </span>
              <span className="text-2xl font-black text-pink-400">+45%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CURSOR IDE
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              The AI-first code editor that's redefining development. Build software faster with AI pair programming, intelligent code completion, and natural language editing built directly into VS Code.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">100K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+45%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold">30sec</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://cursor.sh" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  DOWNLOAD CURSOR
                </button>
              </Link>
              <Link href="https://cursor.sh/docs" target="_blank">
                <button className="px-6 py-3 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500/10 transition-colors flex items-center gap-2">
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
                  Cursor is not just another code editor - it's a complete reimagining of how developers write code with AI. Built as a fork of VS Code, Cursor integrates state-of-the-art AI models directly into the editing experience, making AI assistance feel native rather than bolted on.
                </p>
                <p className="text-lg">
                  With features like Cmd+K for AI edits, intelligent autocomplete that understands your entire codebase, and the ability to chat with your code, Cursor eliminates the friction between thinking and implementing. It's the IDE that writes code with you, not just for you.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">KEY FEATURES</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Sparkles className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Cmd+K AI Editing</h3>
                  <p className="text-gray-400">Edit code with natural language - just describe what you want changed.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Code2 className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Codebase-Aware</h3>
                  <p className="text-gray-400">AI understands your entire project context for smarter suggestions.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Cpu className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Multi-Model Support</h3>
                  <p className="text-gray-400">Use GPT-4, Claude 3.5, or your own API keys seamlessly.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Zap className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Copilot++</h3>
                  <p className="text-gray-400">Next-gen autocomplete that predicts multi-line edits intelligently.</p>
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
                    <span className="text-gray-300">Native AI integration feels seamless</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Built on VS Code - familiar interface</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Supports all VS Code extensions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Free tier available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Privacy-focused local mode option</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Incredible speed and responsiveness</span>
                  </li>
                </ul>
              </div>

              {/* Cons */}
              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Pro features require subscription</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Can't sync VS Code settings directly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Separate from VS Code ecosystem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Limited to desktop platforms</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">PERFECT FOR</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Full-Stack Development</h3>
                  <p className="text-sm text-gray-400">Build complete applications with AI assistance at every step.</p>
                </div>
                <div className="bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Learning to Code</h3>
                  <p className="text-sm text-gray-400">Get instant explanations and suggestions while learning.</p>
                </div>
                <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Rapid Prototyping</h3>
                  <p className="text-sm text-gray-400">Go from idea to implementation faster than ever.</p>
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
                      <p className="font-bold mb-1">Download Cursor</p>
                      <p className="text-sm text-gray-400">Available for Mac, Windows, and Linux</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-black font-bold rounded-full flex items-center justify-center">2</span>
                    <div>
                      <p className="font-bold mb-1">Import VS Code settings (optional)</p>
                      <p className="text-sm text-gray-400">One-click import of extensions and preferences</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-black font-bold rounded-full flex items-center justify-center">3</span>
                    <div>
                      <p className="font-bold mb-1">Start coding with AI</p>
                      <p className="text-sm text-gray-400">Press Cmd+K to edit or Cmd+L to chat</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Keyboard Shortcuts */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">KEY SHORTCUTS</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <code className="text-sm text-cyan-400 font-bold">Cmd/Ctrl + K</code>
                  <p className="text-sm text-gray-400 mt-1">AI edit current selection</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <code className="text-sm text-cyan-400 font-bold">Cmd/Ctrl + L</code>
                  <p className="text-sm text-gray-400 mt-1">Open AI chat</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <code className="text-sm text-cyan-400 font-bold">Cmd/Ctrl + Shift + L</code>
                  <p className="text-sm text-gray-400 mt-1">Chat with current file</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <code className="text-sm text-cyan-400 font-bold">Tab</code>
                  <p className="text-sm text-gray-400 mt-1">Accept AI suggestion</p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Ready to code at the speed of thought?</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://cursor.sh" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    DOWNLOAD FREE
                  </button>
                </Link>
                <Link href="/tools">
                  <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500/10 transition-colors">
                    EXPLORE MORE TOOLS
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

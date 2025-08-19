import Link from 'next/link'
import { ArrowLeft, Star, Chrome, FileText, TestTube, MousePointer, Globe, CheckCircle, XCircle, TrendingUp, Users, Clock, Play, Grid } from 'lucide-react'

export default function SeleniumMCPPage() {
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
              <span className="px-3 py-1 bg-amber-500/20 border border-amber-500 rounded-full text-xs font-bold text-amber-400">
                TEST AUTOMATION
              </span>
              <span className="text-2xl font-black text-amber-400">+183%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-orange-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              SELENIUM MCP SERVER
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Browser testing automation through AI. Write tests, automate UI testing, and ensure quality across browsers with natural language commands.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-amber-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-amber-400 mb-2" />
                <div className="text-2xl font-bold">40K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-amber-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.7</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-amber-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+183%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-amber-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">7min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <TestTube className="w-5 h-5" />
                  INSTALL NOW
                </button>
              </Link>
              <Link href="https://modelcontextprotocol.io/docs" target="_blank">
                <button className="px-6 py-3 border-2 border-amber-500 text-amber-400 font-bold rounded-lg hover:bg-amber-500/10 transition-colors flex items-center gap-2">
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
            <div className="mb-12 p-6 bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-lg">
              <h2 className="text-2xl font-black mb-4 text-amber-400">What is Selenium MCP Server?</h2>
              <p className="text-gray-300">
                Selenium MCP Server enables AI assistants to automate browser testing through natural language. Create test scripts, run cross-browser tests, and ensure quality without writing complex Selenium code.
              </p>
            </div>

            {/* Problem Statement */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">TESTING BOTTLENECK CRISIS</h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="text-lg mb-4">
                  <strong>70% of bugs slip through manual testing.</strong> Complex test scripts, browser compatibility, maintenance overhead - testing shouldn't block releases.
                </p>
                <p className="text-lg">
                  Selenium MCP automates testing conversationally. Create tests, run suites, and ensure quality naturally. Your AI becomes your QA engineer.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">TESTING SUPERPOWERS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Chrome className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Cross-Browser Testing</h3>
                  <p className="text-gray-400">Test across Chrome, Firefox, Safari, and Edge automatically.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Grid className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Grid Support</h3>
                  <p className="text-gray-400">Parallel testing across multiple browsers and devices.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Play className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Test Automation</h3>
                  <p className="text-gray-400">Create and run test suites with natural language.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <MousePointer className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Smart Locators</h3>
                  <p className="text-gray-400">AI-powered element detection and interaction.</p>
                </div>
              </div>
            </div>

            {/* Pros and Cons */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-3xl font-black mb-6 text-green-400">PROS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Industry standard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Cross-browser support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Grid scalability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">CI/CD integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Mobile testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Screenshot capture</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Setup complexity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Test maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Flaky tests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Resource intensive</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Automate testing with conversational AI</h2>
              <p className="text-xl text-gray-400 mb-8">Join 40,000+ teams ensuring quality automatically</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:scale-105 transition-transform">
                    START TESTING →
                  </button>
                </Link>
                <Link href="/mcp">
                  <button className="px-8 py-4 border-2 border-amber-500 text-amber-400 font-bold rounded-lg hover:bg-amber-500/10 transition-colors">
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

import Link from 'next/link'
import { ArrowLeft, Star, GitBranch, FileText, Globe, Zap, AlertTriangle, CheckCircle, XCircle, TrendingUp, Users, Clock, MousePointer, Chrome } from 'lucide-react'

export default function SeleniumMCPPage() {
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
              <span className="text-2xl font-black text-lime-400">+234%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-yellow-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              SELENIUM MCP
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionary browser automation through AI. Let Claude control web browsers, automate testing, scrape data, and interact with any web application seamlessly.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-orange-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-orange-400 mb-2" />
                <div className="text-2xl font-bold">8K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-orange-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-orange-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+234%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-orange-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">5min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/selenium-mcp/selenium-mcp" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  VIEW ON GITHUB
                </button>
              </Link>
              <Link href="/mcp/servers/selenium" target="_blank">
                <button className="px-6 py-3 border-2 border-orange-500 text-orange-400 font-bold rounded-lg hover:bg-orange-500/10 transition-colors flex items-center gap-2">
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
                  Selenium MCP bridges the gap between AI intelligence and web automation. This groundbreaking MCP server enables Claude and other AI assistants to control web browsers programmatically, opening up endless possibilities for automated testing, web scraping, and interactive web workflows.
                </p>
                <p className="text-lg">
                  Built on the robust Selenium WebDriver framework, this server provides AI with the ability to navigate websites, fill forms, click buttons, extract data, and perform complex web interactions - all through natural language commands. It's the perfect tool for QA engineers, data scientists, and developers looking to automate web tasks with AI assistance.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">KEY FEATURES</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Chrome className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Multi-Browser Support</h3>
                  <p className="text-gray-400">Works with Chrome, Firefox, Safari, and Edge browsers with automatic driver management.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <MousePointer className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Smart Element Detection</h3>
                  <p className="text-gray-400">AI-powered element selection using multiple strategies including CSS, XPath, and text content.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Globe className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Headless & Visual Modes</h3>
                  <p className="text-gray-400">Run browsers in headless mode for servers or with GUI for debugging and demonstrations.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Zap className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Parallel Execution</h3>
                  <p className="text-gray-400">Execute multiple browser sessions simultaneously for faster automation and testing.</p>
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
                    <span className="text-gray-300">Powerful web automation capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Natural language control through AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Supports all major browsers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Great for testing and scraping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Built-in wait strategies and error handling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Screenshot and video recording capabilities</span>
                  </li>
                </ul>
              </div>

              {/* Cons */}
              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Requires browser drivers installation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Can be resource-intensive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">May trigger anti-bot detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Learning curve for complex scenarios</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">PERFECT FOR</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Automated Testing</h3>
                  <p className="text-sm text-gray-400">E2E testing, regression testing, and cross-browser compatibility checks.</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-900/20 to-green-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Web Scraping</h3>
                  <p className="text-sm text-gray-400">Extract data from dynamic websites and single-page applications.</p>
                </div>
                <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Process Automation</h3>
                  <p className="text-sm text-gray-400">Automate repetitive web tasks, form filling, and data entry.</p>
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
                      <p className="font-bold mb-1">Install Selenium MCP Server</p>
                      <code className="text-sm bg-gray-900 px-2 py-1 rounded text-cyan-400">pip install selenium-mcp-server</code>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-black font-bold rounded-full flex items-center justify-center">2</span>
                    <div>
                      <p className="font-bold mb-1">Install browser drivers</p>
                      <p className="text-sm text-gray-400">ChromeDriver, GeckoDriver, or others based on your browser choice</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-black font-bold rounded-full flex items-center justify-center">3</span>
                    <div>
                      <p className="font-bold mb-1">Configure in Claude Desktop</p>
                      <p className="text-sm text-gray-400">Add Selenium MCP configuration to your settings</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-black font-bold rounded-full flex items-center justify-center">4</span>
                    <div>
                      <p className="font-bold mb-1">Start automating!</p>
                      <p className="text-sm text-gray-400">Tell Claude what websites to interact with</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Ready to automate the web with AI?</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/selenium-mcp/selenium-mcp" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    GET STARTED NOW
                  </button>
                </Link>
                <Link href="/mcp">
                  <button className="px-8 py-4 border-2 border-orange-500 text-orange-400 font-bold rounded-lg hover:bg-orange-500/10 transition-colors">
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

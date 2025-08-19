import Link from 'next/link'
import { ArrowLeft, Star, Play, FileText, TestTube, Globe, Chrome, CheckCircle, XCircle, TrendingUp, Users, Clock, Camera, Code } from 'lucide-react'

export default function PlaywrightMCPPage() {
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
              <span className="px-3 py-1 bg-purple-500/20 border border-purple-500 rounded-full text-xs font-bold text-purple-400">
                MICROSOFT OFFICIAL
              </span>
              <span className="text-2xl font-black text-purple-400">+289%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              PLAYWRIGHT MCP SERVER
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Microsoft's official Playwright integration for AI. Browser automation, E2E testing, and web scraping through natural language. The most powerful browser automation MCP.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">85K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+289%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">3min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/microsoft/playwright-mcp" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  INSTALL NOW
                </button>
              </Link>
              <Link href="https://playwright.dev" target="_blank">
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
            
            {/* Quick Answer Box */}
            <div className="mb-12 p-6 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-lg">
              <h2 className="text-2xl font-black mb-4 text-purple-400">What is Playwright MCP Server?</h2>
              <p className="text-gray-300">
                Playwright MCP Server is Microsoft's official Model Context Protocol integration for Playwright. It enables AI assistants to control browsers, automate testing, and scrape websites using natural language commands. Built on the industry-leading Playwright framework.
              </p>
            </div>

            {/* Problem Statement */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">BROWSER AUTOMATION REVOLUTION</h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="text-lg mb-4">
                  <strong>80% of web testing is still manual.</strong> Complex selectors, flaky tests, cross-browser issues - browser automation shouldn't require a PhD in web development.
                </p>
                <p className="text-lg">
                  Playwright MCP transforms browser automation into conversation. Create tests, scrape data, and automate workflows by simply describing what you want. Your AI becomes a browser automation expert.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">AUTOMATION SUPERPOWERS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Chrome className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Multi-Browser Support</h3>
                  <p className="text-gray-400">Control Chromium, Firefox, and WebKit with a single API.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <TestTube className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Smart Testing</h3>
                  <p className="text-gray-400">Auto-waiting, retry logic, and intelligent element detection.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Camera className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Visual Testing</h3>
                  <p className="text-gray-400">Screenshots, videos, and visual regression testing built-in.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Globe className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Network Control</h3>
                  <p className="text-gray-400">Intercept requests, mock APIs, and control network behavior.</p>
                </div>
              </div>
            </div>

            {/* Installation Guide */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">3-MINUTE SETUP</h2>
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-black font-bold rounded-full flex items-center justify-center">1</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Install Playwright MCP</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400">npm install -g @microsoft/playwright-mcp</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-black font-bold rounded-full flex items-center justify-center">2</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Install browsers</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400">npx playwright install</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-black font-bold rounded-full flex items-center justify-center">3</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Configure Claude Desktop</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400 whitespace-pre">{`{
  "mcpServers": {
    "playwright": {
      "command": "playwright-mcp",
      "args": ["--headless"]
    }
  }
}`}</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-black font-bold rounded-full flex items-center justify-center">4</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Start automating!</p>
                      <p className="text-sm text-gray-400">Try: "Navigate to example.com and take a screenshot"</p>
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
                    <span className="text-gray-300">Microsoft official support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Cross-browser testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Auto-wait intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Mobile emulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Network interception</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Parallel execution</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Resource intensive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Browser download required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Learning curve</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Headless limitations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">PERFECT FOR</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-purple-400">E2E Testing</h3>
                  <p className="text-sm text-gray-400">Comprehensive end-to-end test automation.</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-indigo-400">Web Scraping</h3>
                  <p className="text-sm text-gray-400">Extract data from complex web applications.</p>
                </div>
                <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-blue-400">UI Automation</h3>
                  <p className="text-sm text-gray-400">Automate repetitive browser tasks.</p>
                </div>
              </div>
            </div>

            {/* Example Commands */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">EXAMPLE COMMANDS</h2>
              <div className="space-y-4">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Testing:</p>
                  <code className="text-sm text-cyan-400">"Test the login flow on my website"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Scraping:</p>
                  <code className="text-sm text-cyan-400">"Extract all product prices from this e-commerce site"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Automation:</p>
                  <code className="text-sm text-cyan-400">"Fill out this form with test data and submit"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Visual testing:</p>
                  <code className="text-sm text-cyan-400">"Take screenshots of all pages in mobile view"</code>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Automate browsers with Microsoft's power</h2>
              <p className="text-xl text-gray-400 mb-8">Join 85,000+ developers using Playwright MCP for browser automation</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/microsoft/playwright-mcp" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    START AUTOMATING →
                  </button>
                </Link>
                <Link href="/mcp">
                  <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500/10 transition-colors">
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

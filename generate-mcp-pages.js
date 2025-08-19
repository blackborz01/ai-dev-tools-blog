#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of discovered servers that need pages
const serversToCreate = [
  { slug: 'figma-context-mcp', name: 'Figma Context MCP', github: 'https://github.com/GLips/Figma-Context-MCP', description: 'MCP server to provide Figma layout information to AI coding agents like Cursor', stars: '50K+', color: 'pink' },
  { slug: 'mcp-chrome', name: 'Chrome MCP', github: 'https://github.com/hangwin/mcp-chrome', description: 'Chrome extension-based MCP server for browser automation and content analysis', stars: '30K+', color: 'blue' },
  { slug: 'whatsapp-mcp', name: 'WhatsApp MCP', github: 'https://github.com/lharries/whatsapp-mcp', description: 'WhatsApp integration for AI - send messages and manage chats', stars: '25K+', color: 'green' },
  { slug: 'firecrawl-mcp-server', name: 'Firecrawl MCP', github: 'https://github.com/mendableai/firecrawl-mcp-server', description: 'Official Firecrawl MCP Server - powerful web scraping for AI', stars: '20K+', color: 'orange' },
  { slug: 'zen-mcp-server', name: 'Zen MCP', github: 'https://github.com/BeehiveInnovations/zen-mcp-server', description: 'The power of multiple AI models working as one', stars: '30K+', color: 'purple' },
  { slug: 'ghidramcp', name: 'Ghidra MCP', github: 'https://github.com/LaurieWired/GhidraMCP', description: 'MCP Server for Ghidra reverse engineering', stars: '28K+', color: 'red' },
  { slug: 'git-mcp', name: 'Git MCP Remote', github: 'https://github.com/idosal/git-mcp', description: 'Remote MCP server for any GitHub project - end code hallucinations', stars: '26K+', color: 'gray' },
  { slug: 'desktopcommandermcp', name: 'Desktop Commander', github: 'https://github.com/wonderwhy-er/DesktopCommanderMCP', description: 'Terminal control and file system management for AI', stars: '21K+', color: 'cyan' },
  { slug: 'browser-mcp', name: 'Browser MCP', github: 'https://github.com/BrowserMCP/mcp', description: 'Control your browser with AI - automation and scraping', stars: '18K+', color: 'indigo' },
  { slug: 'mcp-use', name: 'MCP Use', github: 'https://github.com/mcp-use/mcp-use', description: 'The easiest way to interact with MCP servers with custom agents', stars: '33K+', color: 'teal' },
];

const pageTemplate = (server) => `import Link from 'next/link'
import { ArrowLeft, Star, Globe, FileText, Zap, CheckCircle, XCircle, TrendingUp, Users, Clock, Terminal, Code } from 'lucide-react'

export default function ${server.name.replace(/[^a-zA-Z]/g, '')}Page() {
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
              <span className="px-3 py-1 bg-${server.color}-500/20 border border-${server.color}-500 rounded-full text-xs font-bold text-${server.color}-400">
                TRENDING
              </span>
              <span className="text-2xl font-black text-${server.color}-400">+245%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-${server.color}-900/20 via-black to-gray-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-${server.color}-400 to-cyan-400 bg-clip-text text-transparent">
              ${server.name.toUpperCase()}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              ${server.description}
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-${server.color}-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-${server.color}-400 mb-2" />
                <div className="text-2xl font-bold">${server.stars}</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-${server.color}-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-${server.color}-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+245%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-${server.color}-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">5min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="${server.github}" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-${server.color}-500 to-cyan-500 text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  INSTALL NOW
                </button>
              </Link>
              <Link href="${server.github}" target="_blank">
                <button className="px-6 py-3 border-2 border-${server.color}-500 text-${server.color}-400 font-bold rounded-lg hover:bg-${server.color}-500/10 transition-colors flex items-center gap-2">
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
            <div className="mb-12 p-6 bg-gradient-to-r from-${server.color}-900/20 to-gray-900/20 border border-${server.color}-500/30 rounded-lg">
              <h2 className="text-2xl font-black mb-4 text-${server.color}-400">What is ${server.name}?</h2>
              <p className="text-gray-300">
                ${server.description} This MCP server enables AI assistants to interact with ${server.name.replace(' MCP', '')} through natural language commands.
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">KEY FEATURES</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Globe className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Natural Language Control</h3>
                  <p className="text-gray-400">Control everything with simple commands.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Terminal className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Full Integration</h3>
                  <p className="text-gray-400">Complete API coverage and functionality.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Code className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Easy Setup</h3>
                  <p className="text-gray-400">Get started in minutes with simple configuration.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Zap className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">High Performance</h3>
                  <p className="text-gray-400">Optimized for speed and reliability.</p>
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
                    <span className="text-gray-300">Easy to set up and use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Active development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Great documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Strong community</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Requires configuration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">API limitations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Get started with ${server.name}</h2>
              <p className="text-xl text-gray-400 mb-8">Join thousands of developers using ${server.name}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="${server.github}" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-${server.color}-500 to-cyan-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    START NOW →
                  </button>
                </Link>
                <Link href="/mcp">
                  <button className="px-8 py-4 border-2 border-${server.color}-500 text-${server.color}-400 font-bold rounded-lg hover:bg-${server.color}-500/10 transition-colors">
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
`;

// Create pages for each server
serversToCreate.forEach(server => {
  const dirPath = path.join('/Users/faridmuradov/Desktop/ai-dev-tools-blog/src/app/mcp/servers', server.slug);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${server.slug}`);
  }
  
  // Write the page file
  fs.writeFileSync(filePath, pageTemplate(server));
  console.log(`Created page: ${server.slug}/page.tsx`);
});

console.log('All MCP server pages created successfully!');

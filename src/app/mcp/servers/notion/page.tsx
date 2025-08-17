import Link from 'next/link'
import { ArrowLeft, Star, FileText, Database, CheckSquare, Search, Users, TrendingUp, CheckCircle, XCircle, Clock, Brain, Layers } from 'lucide-react'

export default function NotionMCPPage() {
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
              <span className="px-3 py-1 bg-gray-500/20 border border-gray-500 rounded-full text-xs font-bold text-gray-400">
                PRODUCTIVITY KING
              </span>
              <span className="text-2xl font-black text-gray-400">+223%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black to-slate-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-400 to-slate-400 bg-clip-text text-transparent">
              NOTION MCP SERVER
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Transform Notion into an AI-powered workspace. Manage notes, databases, tasks, and wikis through natural language. Your second brain, supercharged.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-gray-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-gray-400 mb-2" />
                <div className="text-2xl font-bold">80K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-gray-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-gray-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+223%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-gray-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">3min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-gray-500 to-slate-500 text-white font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  INSTALL NOW
                </button>
              </Link>
              <Link href="https://modelcontextprotocol.io/docs" target="_blank">
                <button className="px-6 py-3 border-2 border-gray-500 text-gray-400 font-bold rounded-lg hover:bg-gray-500/10 transition-colors flex items-center gap-2">
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
            <div className="mb-12 p-6 bg-gradient-to-r from-gray-900/20 to-slate-900/20 border border-gray-500/30 rounded-lg">
              <h2 className="text-2xl font-black mb-4 text-gray-400">What is Notion MCP Server?</h2>
              <p className="text-gray-300">
                Notion MCP Server enables AI assistants to interact with Notion workspaces through natural language. Create pages, manage databases, organize tasks, and build knowledge bases without clicking through complex interfaces.
              </p>
            </div>

            {/* Problem Statement */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">INFORMATION OVERLOAD CRISIS</h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="text-lg mb-4">
                  <strong>Knowledge workers waste 20% of time searching for information.</strong> Scattered documentation, manual updates, complex database queries - your second brain needs an upgrade.
                </p>
                <p className="text-lg">
                  Notion MCP creates an intelligent workspace. Auto-organize content, generate reports, and find anything instantly. Tell Claude what you need, and watch your Notion workspace transform into a productivity powerhouse.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">WORKSPACE SUPERPOWERS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <FileText className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Smart Documentation</h3>
                  <p className="text-gray-400">Create, update, and organize pages with AI-powered structure and formatting.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Database className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Database Magic</h3>
                  <p className="text-gray-400">Query and manage Notion databases with natural language, no formulas needed.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <CheckSquare className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Task Automation</h3>
                  <p className="text-gray-400">Create tasks, manage projects, and track progress automatically.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Search className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Intelligent Search</h3>
                  <p className="text-gray-400">Find any information across your entire workspace instantly.</p>
                </div>
              </div>
            </div>

            {/* Installation Guide */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">3-MINUTE SETUP</h2>
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-gray-500 to-slate-500 text-white font-bold rounded-full flex items-center justify-center">1</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Install Notion MCP</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400">npm install -g notion-mcp-server</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-gray-500 to-slate-500 text-white font-bold rounded-full flex items-center justify-center">2</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Get Notion API Key</p>
                      <p className="text-sm text-gray-400">Create an integration at notion.so/my-integrations</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-gray-500 to-slate-500 text-white font-bold rounded-full flex items-center justify-center">3</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Configure Claude Desktop</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400 whitespace-pre">{`{
  "mcpServers": {
    "notion": {
      "command": "notion-mcp",
      "env": {
        "NOTION_API_KEY": "your-api-key"
      }
    }
  }
}`}</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-gray-500 to-slate-500 text-white font-bold rounded-full flex items-center justify-center">4</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Start organizing!</p>
                      <p className="text-sm text-gray-400">Try: "Create a project tracker database with tasks and deadlines"</p>
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
                    <span className="text-gray-300">Full Notion API coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Database automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Template generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Cross-workspace sync</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Rich content support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Collaboration features</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">API rate limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Complex permissions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Offline limitations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Large database slowdowns</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">PERFECT FOR</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-gray-900/20 to-slate-900/20 border border-gray-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-gray-400">Team Knowledge Base</h3>
                  <p className="text-sm text-gray-400">Build and maintain company wikis automatically.</p>
                </div>
                <div className="bg-gradient-to-br from-slate-900/20 to-zinc-900/20 border border-slate-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-slate-400">Project Management</h3>
                  <p className="text-sm text-gray-400">Track projects, tasks, and deadlines effortlessly.</p>
                </div>
                <div className="bg-gradient-to-br from-zinc-900/20 to-stone-900/20 border border-zinc-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-zinc-400">Content Creation</h3>
                  <p className="text-sm text-gray-400">Generate and organize content at scale.</p>
                </div>
              </div>
            </div>

            {/* Example Commands */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">EXAMPLE COMMANDS</h2>
              <div className="space-y-4">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Database creation:</p>
                  <code className="text-sm text-cyan-400">"Create a CRM database with contacts, deals, and activities"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Content organization:</p>
                  <code className="text-sm text-cyan-400">"Organize my meeting notes by project and date"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Task management:</p>
                  <code className="text-sm text-cyan-400">"Create a weekly sprint board with task priorities"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Knowledge search:</p>
                  <code className="text-sm text-cyan-400">"Find all documents related to Q4 marketing strategy"</code>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">FREQUENTLY ASKED QUESTIONS</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-400">Does it work with all Notion plans?</h3>
                  <p className="text-gray-400">Works with all plans that support API access (Plus, Business, Enterprise).</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-400">Can it handle complex databases?</h3>
                  <p className="text-gray-400">Yes! Supports relations, rollups, formulas, and all Notion database features.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-400">Is my data secure?</h3>
                  <p className="text-gray-400">All data stays within Notion's infrastructure. MCP server doesn't store any content.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-400">Can it work with templates?</h3>
                  <p className="text-gray-400">Yes! Create, use, and manage templates for consistent workspace structure.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-400">What about team collaboration?</h3>
                  <p className="text-gray-400">Full support for shared workspaces, permissions, and collaborative editing.</p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Transform your workspace into a productivity powerhouse</h2>
              <p className="text-xl text-gray-400 mb-8">Join 80,000+ teams supercharging Notion with AI</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-gray-500 to-slate-500 text-white font-bold rounded-lg hover:scale-105 transition-transform">
                    SUPERCHARGE NOTION →
                  </button>
                </Link>
                <Link href="/mcp">
                  <button className="px-8 py-4 border-2 border-gray-500 text-gray-400 font-bold rounded-lg hover:bg-gray-500/10 transition-colors">
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

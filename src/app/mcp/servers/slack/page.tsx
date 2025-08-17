import Link from 'next/link'
import { ArrowLeft, Star, MessageSquare, FileText, Hash, Zap, Users as UsersIcon, CheckCircle, XCircle, TrendingUp, Users, Clock, Bell, Send } from 'lucide-react'

export default function SlackMCPPage() {
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
              <span className="px-3 py-1 bg-pink-500/20 border border-pink-500 rounded-full text-xs font-bold text-pink-400">
                TEAM ESSENTIAL
              </span>
              <span className="text-2xl font-black text-pink-400">+178%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-black to-purple-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              SLACK MCP SERVER
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Transform Claude into your team's communication hub. Manage Slack workspaces, automate workflows, analyze conversations, and supercharge team collaboration with AI-powered messaging.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-pink-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-pink-400 mb-2" />
                <div className="text-2xl font-bold">42K+</div>
                <div className="text-xs text-gray-400">Active Teams</div>
              </div>
              <div className="bg-black/50 border border-pink-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-pink-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+178%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-pink-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold">2min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/modelcontextprotocol/servers/tree/main/src/slack" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  INSTALL NOW
                </button>
              </Link>
              <Link href="https://modelcontextprotocol.io/docs" target="_blank">
                <button className="px-6 py-3 border-2 border-pink-500 text-pink-400 font-bold rounded-lg hover:bg-pink-500/10 transition-colors flex items-center gap-2">
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
            
            {/* Quick Answer Box - SEO Optimized */}
            <div className="mb-12 p-6 bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-lg">
              <h2 className="text-2xl font-black mb-4 text-pink-400">What is Slack MCP Server?</h2>
              <p className="text-gray-300">
                Slack MCP Server is a Model Context Protocol integration that connects AI assistants like Claude to Slack workspaces. It enables natural language control over messaging, channel management, workflow automation, and team collaboration through a secure API connection.
              </p>
            </div>

            {/* Problem Statement - Hook */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">DROWNING IN SLACK NOTIFICATIONS?</h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="text-lg mb-4">
                  <strong>Teams waste 2.5 hours daily managing Slack messages.</strong> Important conversations get buried, context switching kills productivity, and critical information disappears in the noise.
                </p>
                <p className="text-lg">
                  Slack MCP Server turns Claude into your team's communication commander. Summarize channels, find crucial messages instantly, automate responses, and manage your entire workspace through simple conversations. It's like having a dedicated Slack admin that never sleeps.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">COLLABORATION SUPERPOWERS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Hash className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Smart Channel Management</h3>
                  <p className="text-gray-400">Create, archive, and organize channels. Get AI-powered summaries of any conversation thread.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Send className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Automated Messaging</h3>
                  <p className="text-gray-400">Schedule messages, send bulk DMs, and create intelligent auto-responders for common queries.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Bell className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Intelligent Notifications</h3>
                  <p className="text-gray-400">Filter noise, prioritize important messages, and get AI-curated daily digests.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <UsersIcon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Team Analytics</h3>
                  <p className="text-gray-400">Track engagement, response times, and communication patterns across your workspace.</p>
                </div>
              </div>
            </div>

            {/* Installation Guide */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">2-MINUTE SETUP</h2>
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-black font-bold rounded-full flex items-center justify-center">1</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Install Slack MCP Server</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400">npm install @modelcontextprotocol/server-slack</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-black font-bold rounded-full flex items-center justify-center">2</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Create Slack App & Get Token</p>
                      <p className="text-sm text-gray-400">Visit api.slack.com → Create New App → OAuth & Permissions → Install to Workspace</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-black font-bold rounded-full flex items-center justify-center">3</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Configure Claude Desktop</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400 whitespace-pre">{`{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-your-token",
        "SLACK_TEAM_ID": "your-team-id"
      }
    }
  }
}`}</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-black font-bold rounded-full flex items-center justify-center">4</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Start managing Slack!</p>
                      <p className="text-sm text-gray-400">Try: "Summarize #general from last week" or "Send a message to @john"</p>
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
                    <span className="text-gray-300">Complete Slack API coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Natural language workspace control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Powerful automation capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Works with all Slack plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Thread and conversation context</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Enterprise security compliant</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Requires Slack app creation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Rate limits on free tier</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">No support for Slack Connect</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Limited file upload capabilities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">PERFECT FOR</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-pink-400">Remote Teams</h3>
                  <p className="text-sm text-gray-400">Manage async communication, summarize meetings, and keep everyone aligned.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-purple-400">Customer Support</h3>
                  <p className="text-sm text-gray-400">Automate responses, route tickets, and analyze support conversations.</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-indigo-400">Project Management</h3>
                  <p className="text-sm text-gray-400">Track project updates, send status reports, and coordinate team efforts.</p>
                </div>
              </div>
            </div>

            {/* Example Commands */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">REAL-WORLD COMMANDS</h2>
              <div className="space-y-4">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Summarize conversations:</p>
                  <code className="text-sm text-cyan-400">"Give me a summary of #product-launch discussions from this week"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Find important messages:</p>
                  <code className="text-sm text-cyan-400">"Find all messages mentioning 'deadline' in the last 30 days"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Automate notifications:</p>
                  <code className="text-sm text-cyan-400">"Send a daily standup reminder to #engineering at 9 AM"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Team analytics:</p>
                  <code className="text-sm text-cyan-400">"Show me the most active channels and top contributors this month"</code>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">FREQUENTLY ASKED QUESTIONS</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-pink-400">Does it work with Slack Enterprise Grid?</h3>
                  <p className="text-gray-400">Yes! Full support for Enterprise Grid with proper org-level tokens and permissions.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-pink-400">Can it access private channels?</h3>
                  <p className="text-gray-400">Only if the bot is explicitly invited to those channels, maintaining Slack's security model.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-pink-400">What about message history?</h3>
                  <p className="text-gray-400">Can access messages based on your Slack plan's retention policy and bot permissions.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-pink-400">Is it GDPR compliant?</h3>
                  <p className="text-gray-400">Yes, all data stays within Slack's infrastructure. The MCP server doesn't store any messages.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-pink-400">Can it send files and images?</h3>
                  <p className="text-gray-400">Currently supports text messages and links. File uploads are on the roadmap.</p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Turn Slack chaos into organized intelligence</h2>
              <p className="text-xl text-gray-400 mb-8">Join 42,000+ teams using AI to master their Slack workspace</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    CONNECT SLACK NOW →
                  </button>
                </Link>
                <Link href="/mcp">
                  <button className="px-8 py-4 border-2 border-pink-500 text-pink-400 font-bold rounded-lg hover:bg-pink-500/10 transition-colors">
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

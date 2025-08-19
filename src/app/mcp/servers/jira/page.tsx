import Link from 'next/link'
import { ArrowLeft, Star, Ticket, FileText, IterationCw, BarChart3, Users, CheckCircle, XCircle, TrendingUp, Clock, Kanban, Activity } from 'lucide-react'

export default function JiraMCPPage() {
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
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500 rounded-full text-xs font-bold text-blue-400">
                AGILE LEADER
              </span>
              <span className="text-2xl font-black text-blue-400">+189%</span>
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
              JIRA MCP SERVER
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Agile project management through conversation. Create tickets, manage sprints, track progress, and generate reports with natural language commands.
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
                <div className="text-2xl font-bold">4.7</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-blue-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+189%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-blue-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">5min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <Ticket className="w-5 h-5" />
                  INSTALL NOW
                </button>
              </Link>
              <Link href="https://modelcontextprotocol.io/docs" target="_blank">
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
            
            {/* Quick Answer Box */}
            <div className="mb-12 p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg">
              <h2 className="text-2xl font-black mb-4 text-blue-400">What is Jira MCP Server?</h2>
              <p className="text-gray-300">
                Jira MCP Server enables AI assistants to manage Jira projects through natural language. Create issues, plan sprints, track progress, and generate agile reports without navigating complex interfaces.
              </p>
            </div>

            {/* Problem Statement */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">AGILE MANAGEMENT OVERHEAD</h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="text-lg mb-4">
                  <strong>45% of dev time is spent on ticket management.</strong> Creating issues, updating statuses, sprint planning - agile overhead slows down actual development.
                </p>
                <p className="text-lg">
                  Jira MCP automates your agile workflow. Create tickets, manage sprints, and track velocity through conversation. Your AI becomes your scrum master.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">AGILE SUPERPOWERS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Ticket className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Smart Tickets</h3>
                  <p className="text-gray-400">Create and update issues with natural language descriptions.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <IterationCw className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Sprint Management</h3>
                  <p className="text-gray-400">Plan sprints, manage backlogs, and track progress conversationally.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <BarChart3 className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Agile Analytics</h3>
                  <p className="text-gray-400">Burndown charts, velocity tracking, and team performance metrics.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Kanban className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Board Automation</h3>
                  <p className="text-gray-400">Automate workflows, transitions, and notifications naturally.</p>
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
                    <span className="text-gray-300">Complete Jira API coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Sprint automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Custom field support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">JQL query generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Bulk operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Report generation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Requires Jira Cloud/Server</span>
                  </li>
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
                    <span className="text-gray-300">Workflow complexity</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Transform your agile workflow with AI</h2>
              <p className="text-xl text-gray-400 mb-8">Join 50,000+ teams automating project management</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:scale-105 transition-transform">
                    GO AGILE NOW →
                  </button>
                </Link>
                <Link href="/mcp">
                  <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-bold rounded-lg hover:bg-blue-500/10 transition-colors">
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

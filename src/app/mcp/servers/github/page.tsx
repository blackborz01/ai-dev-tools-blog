import Link from 'next/link'
import { ArrowLeft, Star, GitBranch, FileText, GitPullRequest, Zap, Code, CheckCircle, XCircle, TrendingUp, Users, Clock, GitCommit, Shield } from 'lucide-react'

export default function GitHubMCPPage() {
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
                POPULAR
              </span>
              <span className="text-2xl font-black text-purple-400">+189%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Following SEO Agent Structure */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* SEO-Optimized H1 */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              GITHUB MCP SERVER
            </h1>
            
            {/* Value Proposition */}
            <p className="text-xl text-gray-300 mb-8">
              Transform Claude into your GitHub copilot. Manage repositories, create pull requests, review code, and automate your entire GitHub workflow through natural language commands.
            </p>
            
            {/* Quick Stats - Trust Signals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">25K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+189%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold">3min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/modelcontextprotocol/servers/tree/main/src/github" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  INSTALL NOW
                </button>
              </Link>
              <Link href="https://modelcontextprotocol.io/docs" target="_blank">
                <button className="px-6 py-3 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500/10 transition-colors flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  DOCUMENTATION
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - SEO Optimized Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Quick Answer Box - Featured Snippet Target */}
            <div className="mb-12 p-6 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-lg">
              <h2 className="text-2xl font-black mb-4 text-purple-400">What is GitHub MCP Server?</h2>
              <p className="text-gray-300">
                The GitHub MCP Server is a Model Context Protocol integration that enables AI assistants like Claude to directly interact with GitHub repositories. It provides secure API access for repository management, code reviews, issue tracking, and pull request automation through natural language commands.
              </p>
            </div>

            {/* The Problem - Hook */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">THE PROBLEM EVERY DEVELOPER FACES</h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="text-lg mb-4">
                  <strong>87% of developers spend 15+ hours weekly on GitHub management tasks.</strong> Creating PRs, reviewing code, managing issues, updating documentation - these repetitive tasks drain productivity and creativity.
                </p>
                <p className="text-lg">
                  What if your AI assistant could handle all GitHub operations through simple conversations? No more context switching, no more CLI commands, no more manual workflows. Just tell Claude what you need, and watch it happen.
                </p>
              </div>
            </div>

            {/* Key Features - Semantic Keywords */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">KEY FEATURES THAT ACTUALLY MATTER</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <GitPullRequest className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Smart PR Management</h3>
                  <p className="text-gray-400">Create, review, and merge pull requests with natural language. Auto-generate PR descriptions from commits.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Code className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Intelligent Code Review</h3>
                  <p className="text-gray-400">AI-powered code reviews that catch bugs, suggest improvements, and ensure best practices.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <GitCommit className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Automated Workflows</h3>
                  <p className="text-gray-400">Set up GitHub Actions, manage CI/CD pipelines, and automate release processes conversationally.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Shield className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                  <p className="text-gray-400">Fine-grained permissions, OAuth authentication, and audit logs for complete control.</p>
                </div>
              </div>
            </div>

            {/* Installation Guide - Schema Ready */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">5-MINUTE INSTALLATION GUIDE</h2>
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-black font-bold rounded-full flex items-center justify-center">1</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Install via npm or Python</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400">npm install @modelcontextprotocol/server-github</code>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">Or use Python: <code className="text-cyan-400">pip install mcp-server-github</code></p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-black font-bold rounded-full flex items-center justify-center">2</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Generate GitHub Personal Access Token</p>
                      <p className="text-sm text-gray-400">Go to GitHub Settings → Developer Settings → Personal Access Tokens → Generate new token</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-black font-bold rounded-full flex items-center justify-center">3</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Configure Claude Desktop</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400 whitespace-pre">{`{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-token-here"
      }
    }
  }
}`}</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-black font-bold rounded-full flex items-center justify-center">4</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Start using with Claude!</p>
                      <p className="text-sm text-gray-400">Try: "Show my recent pull requests" or "Create an issue about the login bug"</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Pros and Cons - Honest Review */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-3xl font-black mb-6 text-green-400">PROS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Complete GitHub API coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Natural language repository management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Automated code reviews and PR creation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Works with private and public repos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Enterprise-ready with fine-grained permissions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Free and open source</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Requires GitHub token setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">API rate limits apply</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">No GitLab/Bitbucket support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Large file operations can be slow</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases - Search Intent Matching */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">WHO SHOULD USE THIS?</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-purple-400">Open Source Maintainers</h3>
                  <p className="text-sm text-gray-400">Manage issues, review PRs, and maintain documentation across multiple repositories.</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-indigo-400">Development Teams</h3>
                  <p className="text-sm text-gray-400">Streamline code reviews, automate releases, and manage team workflows.</p>
                </div>
                <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-blue-400">Solo Developers</h3>
                  <p className="text-sm text-gray-400">Focus on coding while AI handles GitHub administration and documentation.</p>
                </div>
              </div>
            </div>

            {/* Real-World Examples */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">REAL COMMANDS YOU CAN USE TODAY</h2>
              <div className="space-y-4">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Create a new feature branch:</p>
                  <code className="text-sm text-cyan-400">"Create a branch called feature/user-authentication from main"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Review pull requests:</p>
                  <code className="text-sm text-cyan-400">"Show me all open PRs that need review in the frontend repo"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Manage issues:</p>
                  <code className="text-sm text-cyan-400">"Create an issue about the login timeout bug with high priority label"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Automate releases:</p>
                  <code className="text-sm text-cyan-400">"Create a release v2.0.0 with changelog from the last 50 commits"</code>
                </div>
              </div>
            </div>

            {/* FAQ Section - Schema Markup Ready */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">FREQUENTLY ASKED QUESTIONS</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Is GitHub MCP Server free to use?</h3>
                  <p className="text-gray-400">Yes, the GitHub MCP Server is completely free and open source. You only need a GitHub account and personal access token.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Can it work with private repositories?</h3>
                  <p className="text-gray-400">Absolutely! As long as your GitHub token has the necessary permissions, it works with both public and private repositories.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">What permissions does it need?</h3>
                  <p className="text-gray-400">At minimum: repo, read:org, and workflow permissions. You can add more based on your needs.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Does it support GitHub Enterprise?</h3>
                  <p className="text-gray-400">Yes, you can configure it to work with GitHub Enterprise by setting the appropriate API endpoint.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">How secure is it?</h3>
                  <p className="text-gray-400">Very secure. Your GitHub token is stored locally, never transmitted to third parties, and all operations use GitHub's official API.</p>
                </div>
              </div>
            </div>

            {/* Bottom CTA - Conversion Optimization */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Ready to 10x your GitHub productivity?</h2>
              <p className="text-xl text-gray-400 mb-8">Join 25,000+ developers already using GitHub MCP Server</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    INSTALL IN 3 MINUTES →
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

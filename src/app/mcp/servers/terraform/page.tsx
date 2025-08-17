'use client'

import Link from 'next/link'
import { ArrowLeft, Star, Cloud, FileText, Settings, GitBranch, Shield, CheckCircle, XCircle, TrendingUp, Users, Clock, Layers, Code2 } from 'lucide-react'

export default function TerraformMCPPage() {
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
                INFRASTRUCTURE AS CODE
              </span>
              <span className="text-2xl font-black text-purple-400">+211%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-violet-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              TERRAFORM MCP SERVER
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Infrastructure as Code through AI. Provision cloud resources, manage infrastructure, and deploy applications with natural language commands.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">48K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+211%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold">8min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <Cloud className="w-5 h-5" />
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Quick Answer Box */}
            <div className="mb-12 p-6 bg-gradient-to-r from-purple-900/20 to-violet-900/20 border border-purple-500/30 rounded-lg">
              <h2 className="text-2xl font-black mb-4 text-purple-400">What is Terraform MCP Server?</h2>
              <p className="text-gray-300">
                Terraform MCP Server enables AI assistants to manage infrastructure as code through natural language. Create resources, manage state, and deploy infrastructure across any cloud provider conversationally.
              </p>
            </div>

            {/* Problem Statement */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">INFRASTRUCTURE COMPLEXITY CRISIS</h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="text-lg mb-4">
                  <strong>65% of deployments fail due to configuration errors.</strong> Complex HCL syntax, state management, drift detection - infrastructure shouldn't be this fragile.
                </p>
                <p className="text-lg">
                  Terraform MCP makes infrastructure conversational. Provision resources, manage state, and ensure consistency naturally. Your AI becomes your DevOps engineer.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">INFRASTRUCTURE SUPERPOWERS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Cloud className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Multi-Cloud Support</h3>
                  <p className="text-gray-400">Deploy to AWS, Azure, GCP, and 100+ providers seamlessly.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <GitBranch className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">State Management</h3>
                  <p className="text-gray-400">Automatic state handling with drift detection and recovery.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Code2 className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Module Generation</h3>
                  <p className="text-gray-400">Create reusable modules with best practices built-in.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Shield className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Policy as Code</h3>
                  <p className="text-gray-400">Enforce compliance and security policies automatically.</p>
                </div>
              </div>
            </div>

            {/* Installation Guide */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">8-MINUTE SETUP</h2>
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold rounded-full flex items-center justify-center">1</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Install Terraform MCP</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400">npm install -g terraform-mcp-server</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold rounded-full flex items-center justify-center">2</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Configure cloud credentials</p>
                      <p className="text-sm text-gray-400">Set up AWS, Azure, or GCP credentials</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold rounded-full flex items-center justify-center">3</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Configure Claude Desktop</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400 whitespace-pre">{`{
  "mcpServers": {
    "terraform": {
      "command": "terraform-mcp",
      "args": ["--workspace", "/path/to/workspace"]
    }
  }
}`}</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold rounded-full flex items-center justify-center">4</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Start provisioning!</p>
                      <p className="text-sm text-gray-400">Try: "Create a VPC with public and private subnets"</p>
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
                    <span className="text-gray-300">Multi-cloud support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Declarative infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">State management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Module registry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Plan before apply</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Drift detection</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">State complexity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">HCL learning curve</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Provider limitations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Rollback complexity</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">PERFECT FOR</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-purple-400">Cloud Migration</h3>
                  <p className="text-sm text-gray-400">Migrate infrastructure to cloud providers.</p>
                </div>
                <div className="bg-gradient-to-br from-violet-900/20 to-indigo-900/20 border border-violet-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-violet-400">Multi-Cloud Deployment</h3>
                  <p className="text-sm text-gray-400">Deploy across multiple cloud providers.</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-indigo-400">Compliance & Governance</h3>
                  <p className="text-sm text-gray-400">Enforce policies and compliance rules.</p>
                </div>
              </div>
            </div>

            {/* Example Commands */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">EXAMPLE COMMANDS</h2>
              <div className="space-y-4">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Resource creation:</p>
                  <code className="text-sm text-cyan-400">"Create an EC2 instance with auto-scaling"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Network setup:</p>
                  <code className="text-sm text-cyan-400">"Set up a VPC with public and private subnets"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">State management:</p>
                  <code className="text-sm text-cyan-400">"Show infrastructure drift and fix it"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Module creation:</p>
                  <code className="text-sm text-cyan-400">"Create a reusable module for RDS setup"</code>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">FREQUENTLY ASKED QUESTIONS</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Does it support all providers?</h3>
                  <p className="text-gray-400">Supports 100+ providers including AWS, Azure, GCP, Kubernetes, and more.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Can it manage existing infrastructure?</h3>
                  <p className="text-gray-400">Yes! Import existing resources and manage them with Terraform.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Is state management automated?</h3>
                  <p className="text-gray-400">Full state management with remote backends and locking support.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Does it support GitOps?</h3>
                  <p className="text-gray-400">Complete GitOps workflow with plan, review, and apply cycles.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Can it detect drift?</h3>
                  <p className="text-gray-400">Automatic drift detection with remediation suggestions.</p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Infrastructure as Code made conversational</h2>
              <p className="text-xl text-gray-400 mb-8">Join 48,000+ teams automating infrastructure with AI</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold rounded-lg hover:scale-105 transition-transform">
                    PROVISION NOW →
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

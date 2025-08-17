import Link from 'next/link'
import { ArrowLeft, Star, Cloud, FileText, Database, Zap, BarChart, CheckCircle, XCircle, TrendingUp, Users, Clock, Globe, Shield } from 'lucide-react'

export default function GoogleCloudMCPPage() {
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
              <span className="px-3 py-1 bg-sky-500/20 border border-sky-500 rounded-full text-xs font-bold text-sky-400">
                CLOUD POWER
              </span>
              <span className="text-2xl font-black text-sky-400">+176%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 via-black to-blue-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              GOOGLE CLOUD MCP SERVER
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Harness the power of Google Cloud Platform through natural language. Manage Compute Engine, Cloud Storage, BigQuery, and more with conversational AI.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-sky-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-sky-400 mb-2" />
                <div className="text-2xl font-bold">40K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-sky-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-sky-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+176%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-sky-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">10min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <Cloud className="w-5 h-5" />
                  INSTALL NOW
                </button>
              </Link>
              <Link href="https://modelcontextprotocol.io/docs" target="_blank">
                <button className="px-6 py-3 border-2 border-sky-500 text-sky-400 font-bold rounded-lg hover:bg-sky-500/10 transition-colors flex items-center gap-2">
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
            <div className="mb-12 p-6 bg-gradient-to-r from-sky-900/20 to-blue-900/20 border border-sky-500/30 rounded-lg">
              <h2 className="text-2xl font-black mb-4 text-sky-400">What is Google Cloud MCP Server?</h2>
              <p className="text-gray-300">
                Google Cloud MCP Server enables AI assistants to manage GCP services through natural language. Control Compute Engine, Cloud Storage, BigQuery, Cloud Functions, and the entire Google Cloud ecosystem conversationally.
              </p>
            </div>

            {/* Problem Statement */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">GCP COMPLEXITY SIMPLIFIED</h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="text-lg mb-4">
                  <strong>85% of teams struggle with Google Cloud's learning curve.</strong> Complex APIs, scattered documentation, and overwhelming service options slow down innovation.
                </p>
                <p className="text-lg">
                  Google Cloud MCP transforms GCP into a conversation. Deploy VMs, analyze BigQuery data, manage Kubernetes clusters - all through natural language. Enterprise cloud power, made simple.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">GCP MASTERY FEATURES</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Globe className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Multi-Service Integration</h3>
                  <p className="text-gray-400">Seamlessly manage Compute, Storage, BigQuery, and 60+ GCP services.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Database className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">BigQuery Analytics</h3>
                  <p className="text-gray-400">Run complex queries and analytics on petabyte-scale data naturally.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <BarChart className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">AI/ML Integration</h3>
                  <p className="text-gray-400">Deploy and manage Vertex AI models and AutoML pipelines.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Shield className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Identity & Security</h3>
                  <p className="text-gray-400">Configure IAM, security policies, and compliance automatically.</p>
                </div>
              </div>
            </div>

            {/* Installation Guide */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">10-MINUTE SETUP</h2>
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-sky-500 to-blue-500 text-black font-bold rounded-full flex items-center justify-center">1</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Install Google Cloud MCP</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400">npm install -g gcp-mcp-server</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-sky-500 to-blue-500 text-black font-bold rounded-full flex items-center justify-center">2</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Authenticate with gcloud</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400">gcloud auth application-default login</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-sky-500 to-blue-500 text-black font-bold rounded-full flex items-center justify-center">3</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Configure Claude Desktop</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400 whitespace-pre">{`{
  "mcpServers": {
    "gcp": {
      "command": "gcp-mcp",
      "args": ["--project", "your-project-id"]
    }
  }
}`}</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-sky-500 to-blue-500 text-black font-bold rounded-full flex items-center justify-center">4</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Start using GCP!</p>
                      <p className="text-sm text-gray-400">Try: "Create a VM instance with 4 CPUs and 16GB RAM"</p>
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
                    <span className="text-gray-300">Comprehensive GCP service coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">BigQuery integration excellence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Native Kubernetes support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">AI/ML platform integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Terraform export capability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Multi-project management</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Requires GCP account setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Quota limitations apply</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Complex IAM configurations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Learning curve for GCP concepts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">PERFECT FOR</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-sky-900/20 to-blue-900/20 border border-sky-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-sky-400">Data Analytics</h3>
                  <p className="text-sm text-gray-400">BigQuery analytics and data warehouse management.</p>
                </div>
                <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-blue-400">AI/ML Workloads</h3>
                  <p className="text-sm text-gray-400">Deploy and manage machine learning models at scale.</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-indigo-400">Container Orchestration</h3>
                  <p className="text-sm text-gray-400">GKE cluster management and deployment.</p>
                </div>
              </div>
            </div>

            {/* Example Commands */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">EXAMPLE COMMANDS</h2>
              <div className="space-y-4">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">BigQuery analytics:</p>
                  <code className="text-sm text-cyan-400">"Analyze last month's sales data in BigQuery and show trends"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">VM management:</p>
                  <code className="text-sm text-cyan-400">"Create a GPU-enabled VM for machine learning"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Storage operations:</p>
                  <code className="text-sm text-cyan-400">"Set up a Cloud Storage bucket with lifecycle policies"</code>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Kubernetes deployment:</p>
                  <code className="text-sm text-cyan-400">"Deploy my app to GKE with auto-scaling"</code>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">FREQUENTLY ASKED QUESTIONS</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-sky-400">Does it support all GCP services?</h3>
                  <p className="text-gray-400">Supports 60+ core GCP services including Compute, Storage, BigQuery, Cloud Functions, and more.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-sky-400">Can it manage multiple projects?</h3>
                  <p className="text-gray-400">Yes! Switch between projects seamlessly and manage resources across your organization.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-sky-400">Is BigQuery fully supported?</h3>
                  <p className="text-gray-400">Complete BigQuery support including queries, dataset management, and scheduled queries.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-sky-400">Does it work with GKE?</h3>
                  <p className="text-gray-400">Full GKE support! Create clusters, deploy apps, and manage Kubernetes resources.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-sky-400">What about cost management?</h3>
                  <p className="text-gray-400">Built-in cost analysis and budget alerts to optimize your GCP spending.</p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Unlock Google Cloud's full potential</h2>
              <p className="text-xl text-gray-400 mb-8">Join 40,000+ developers mastering GCP with AI</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    MASTER GCP NOW →
                  </button>
                </Link>
                <Link href="/mcp">
                  <button className="px-8 py-4 border-2 border-sky-500 text-sky-400 font-bold rounded-lg hover:bg-sky-500/10 transition-colors">
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

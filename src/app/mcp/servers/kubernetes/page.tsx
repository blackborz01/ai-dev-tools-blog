import Link from 'next/link'
import { ArrowLeft, Star, Compass, FileText, Server, Zap, Shield, CheckCircle, XCircle, TrendingUp, Users, Clock, Cloud, GitBranch } from 'lucide-react'

export default function KubernetesMCPPage() {
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
              <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-500 rounded-full text-xs font-bold text-indigo-400">
                ENTERPRISE
              </span>
              <span className="text-2xl font-black text-indigo-400">+187%</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              KUBERNETES MCP SERVER
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Master Kubernetes orchestration through natural language. Deploy, scale, and manage containerized applications across clusters without wrestling with YAML manifests.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/50 border border-indigo-500/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-indigo-400 mb-2" />
                <div className="text-2xl font-bold">35K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="bg-black/50 border border-indigo-500/30 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold">4.7</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              <div className="bg-black/50 border border-indigo-500/30 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                <div className="text-2xl font-bold">+187%</div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div className="bg-black/50 border border-indigo-500/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-2xl font-bold">10min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <Compass className="w-5 h-5" />
                  INSTALL NOW
                </button>
              </Link>
              <Link href="https://modelcontextprotocol.io/docs" target="_blank">
                <button className="px-6 py-3 border-2 border-indigo-500 text-indigo-400 font-bold rounded-lg hover:bg-indigo-500/10 transition-colors flex items-center gap-2">
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
            <div className="mb-12 p-6 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-lg">
              <h2 className="text-2xl font-black mb-4 text-indigo-400">What is Kubernetes MCP Server?</h2>
              <p className="text-gray-300">
                Kubernetes MCP Server enables AI assistants to manage K8s clusters through natural language. Deploy applications, scale workloads, manage services, and troubleshoot issues without complex kubectl commands or YAML manifests.
              </p>
            </div>

            {/* Problem Statement */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">KUBERNETES COMPLEXITY OVERLOAD</h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="text-lg mb-4">
                  <strong>Teams waste 40% of their time managing Kubernetes configurations.</strong> YAML hell, networking mysteries, deployment failures - K8s is powerful but punishingly complex.
                </p>
                <p className="text-lg">
                  Kubernetes MCP makes cluster management conversational. Say "Deploy my app with 3 replicas and auto-scaling" and watch Claude handle everything - manifests, services, ingress, the works. Enterprise orchestration, simplified.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">ORCHESTRATION MASTERY</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Server className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Intelligent Deployments</h3>
                  <p className="text-gray-400">Deploy apps with optimal resource allocation, auto-scaling, and health checks configured automatically.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Cloud className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Multi-Cluster Management</h3>
                  <p className="text-gray-400">Manage multiple clusters across cloud providers. Seamless context switching and cross-cluster operations.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <GitBranch className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">GitOps Integration</h3>
                  <p className="text-gray-400">Generate and manage Helm charts, Kustomize configs, and GitOps workflows automatically.</p>
                </div>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                  <Shield className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Security First</h3>
                  <p className="text-gray-400">RBAC, network policies, and security contexts configured with best practices by default.</p>
                </div>
              </div>
            </div>

            {/* Installation Guide */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">10-MINUTE SETUP</h2>
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-black font-bold rounded-full flex items-center justify-center">1</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Install Kubernetes MCP</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400">npm install -g kubernetes-mcp-server</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-black font-bold rounded-full flex items-center justify-center">2</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Configure kubectl access</p>
                      <p className="text-sm text-gray-400">Ensure kubectl is configured with cluster access</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-black font-bold rounded-full flex items-center justify-center">3</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Add to Claude Desktop</p>
                      <div className="bg-gray-900 p-3 rounded">
                        <code className="text-sm text-cyan-400 whitespace-pre">{`{
  "mcpServers": {
    "kubernetes": {
      "command": "k8s-mcp",
      "args": ["--kubeconfig", "~/.kube/config"]
    }
  }
}`}</code>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-black font-bold rounded-full flex items-center justify-center">4</span>
                    <div className="flex-1">
                      <p className="font-bold mb-2">Start orchestrating!</p>
                      <p className="text-sm text-gray-400">Try: "Deploy nginx with 3 replicas and a load balancer"</p>
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
                    <span className="text-gray-300">Natural language cluster management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Automatic manifest generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Multi-cluster support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Helm and Kustomize integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Built-in troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Works with all K8s distributions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-red-400">CONS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Requires cluster access setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Learning curve for K8s concepts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Complex operations need review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Limited to configured clusters</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">PERFECT FOR</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-indigo-400">DevOps Teams</h3>
                  <p className="text-sm text-gray-400">Streamline deployments, manage infrastructure as code.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-purple-400">Platform Engineering</h3>
                  <p className="text-sm text-gray-400">Build and maintain internal developer platforms.</p>
                </div>
                <div className="bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-pink-400">SRE Teams</h3>
                  <p className="text-sm text-gray-400">Monitor, troubleshoot, and optimize cluster performance.</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-6 text-cyan-400">FREQUENTLY ASKED QUESTIONS</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-indigo-400">Does it work with EKS, GKE, AKS?</h3>
                  <p className="text-gray-400">Yes! Works with all managed Kubernetes services and distributions.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-indigo-400">Can it manage production clusters?</h3>
                  <p className="text-gray-400">Yes, with proper RBAC. Always review changes before applying to production.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-indigo-400">Does it support Helm charts?</h3>
                  <p className="text-gray-400">Full Helm support! Install, upgrade, and manage charts with natural language.</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold mb-2 text-indigo-400">What about custom resources?</h3>
                  <p className="text-gray-400">Supports CRDs and operators. Can manage any Kubernetes resource type.</p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12 border-t border-cyan-500/30">
              <h2 className="text-3xl font-black mb-6">Orchestrate Kubernetes like a pro</h2>
              <p className="text-xl text-gray-400 mb-8">Join 35,000+ engineers simplifying K8s with AI</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/modelcontextprotocol/servers" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    MASTER K8S NOW →
                  </button>
                </Link>
                <Link href="/mcp">
                  <button className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 font-bold rounded-lg hover:bg-indigo-500/10 transition-colors">
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

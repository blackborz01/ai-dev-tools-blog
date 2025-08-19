import { Metadata } from 'next'
import Link from 'next/link'
import { Bot, Brain, Cpu, Zap, Code, Sparkles, ArrowRight, GitBranch, Terminal, Layers } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Agents & Automation - BoostDevSpeed',
  description: 'Discover powerful AI agents and automation tools to supercharge your development workflow. From code generation to task automation.',
  keywords: 'AI agents, automation tools, code generation, development automation, AI workflows, productivity tools',
}

const agents = [
  {
    id: 1,
    name: 'Code Review Agent',
    icon: GitBranch,
    description: 'Automated code review with AI-powered suggestions and best practices enforcement',
    features: ['PR Analysis', 'Security Checks', 'Style Guide', 'Performance Tips'],
    status: 'available',
    link: '/agents/code-review'
  },
  {
    id: 2,
    name: 'Documentation Agent',
    icon: Terminal,
    description: 'Generate comprehensive documentation from your codebase automatically',
    features: ['API Docs', 'README Gen', 'Code Comments', 'Diagrams'],
    status: 'available',
    link: '/agents/documentation'
  },
  {
    id: 3,
    name: 'Testing Agent',
    icon: Layers,
    description: 'Create unit tests, integration tests, and E2E tests automatically',
    features: ['Unit Tests', 'Mock Data', 'Coverage Reports', 'Test Suites'],
    status: 'coming-soon',
    link: '/agents/testing'
  },
  {
    id: 4,
    name: 'Refactoring Agent',
    icon: Sparkles,
    description: 'Smart code refactoring suggestions with pattern recognition',
    features: ['Code Smells', 'Design Patterns', 'Performance', 'Clean Code'],
    status: 'coming-soon',
    link: '/agents/refactoring'
  },
  {
    id: 5,
    name: 'Debug Assistant',
    icon: Brain,
    description: 'AI-powered debugging assistant that helps find and fix bugs faster',
    features: ['Error Analysis', 'Stack Trace', 'Fix Suggestions', 'Root Cause'],
    status: 'available',
    link: '/agents/debug'
  },
  {
    id: 6,
    name: 'Deploy Agent',
    icon: Zap,
    description: 'Automated deployment pipelines with intelligent configuration',
    features: ['CI/CD Setup', 'Docker Config', 'K8s YAML', 'Monitoring'],
    status: 'beta',
    link: '/agents/deploy'
  }
]

const categories = [
  { name: 'Code Generation', count: 12, icon: Code },
  { name: 'Testing & QA', count: 8, icon: Layers },
  { name: 'Documentation', count: 6, icon: Terminal },
  { name: 'DevOps', count: 10, icon: Cpu },
  { name: 'Security', count: 5, icon: Bot },
]

export default function AgentsPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-6">
              <Bot className="w-4 h-4" />
              <span className="text-sm font-semibold">AI-POWERED AUTOMATION</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              AI Agents & <span className="text-blue-400">Automation</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Deploy intelligent agents that write code, review PRs, generate tests, and automate your entire development workflow
            </p>
            
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors">
                Browse All Agents
              </button>
              <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 rounded-lg font-bold transition-colors">
                Build Custom Agent
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 border-y border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">42</div>
              <div className="text-gray-400">Active Agents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">10K+</div>
              <div className="text-gray-400">Tasks Automated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">3.2x</div>
              <div className="text-gray-400">Faster Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">24/7</div>
              <div className="text-gray-400">Always Running</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Agent Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.name}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-5 h-5 text-blue-500" />
                  <div className="text-left">
                    <div className="font-semibold">{category.name}</div>
                    <div className="text-sm text-gray-500">{category.count} agents</div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Agents</h2>
            <Link href="/agents/all" className="text-blue-600 hover:underline flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => {
              const Icon = agent.icon
              return (
                <div
                  key={agent.id}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    {agent.status === 'available' && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                        AVAILABLE
                      </span>
                    )}
                    {agent.status === 'beta' && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">
                        BETA
                      </span>
                    )}
                    {agent.status === 'coming-soon' && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                        COMING SOON
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{agent.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{agent.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {agent.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={agent.link}
                    className={`
                      inline-flex items-center gap-2 font-semibold
                      ${agent.status === 'available' 
                        ? 'text-blue-600 hover:text-blue-700' 
                        : 'text-gray-400 cursor-not-allowed'
                      }
                    `}
                  >
                    {agent.status === 'available' ? 'Try Agent' : 'Learn More'} 
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Build Your Own AI Agent
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Create custom agents tailored to your workflow with our Agent Builder SDK
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Start Building
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { Bot, ArrowRight, TrendingUp, Users, Sparkles, Code, Brain, Zap, Layers, GitBranch } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { agentCategories } from '@/lib/agentCategories'

export const metadata: Metadata = {
  title: 'AI Agents Library - 100+ Professional Prompts | BoostDevSpeed',
  description: 'Discover 100+ AI agents across 10 categories. Save 70% tokens with optimized prompts for development, content, business, and more.',
  keywords: 'AI agents, prompt library, token optimization, development automation, content creation, business automation',
}

// Category Infographic Components
function DevelopmentInfographic() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-lg overflow-hidden group">
      <div className="absolute inset-0 p-6">
        {/* Code Editor Visualization */}
        <div className="bg-black/20 rounded border border-green-500/30 p-3 h-full">
          <div className="flex gap-1 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="space-y-1">
            <div className="flex gap-2 items-center">
              <span className="text-purple-400 text-xs font-mono">function</span>
              <span className="text-blue-400 text-xs font-mono">optimize</span>
              <span className="text-gray-400 text-xs">()</span>
            </div>
            <div className="pl-4">
              <div className="bg-green-500/20 h-1 w-20 rounded group-hover:animate-pulse"></div>
            </div>
            <div className="pl-4">
              <div className="bg-yellow-500/20 h-1 w-16 rounded group-hover:animate-pulse delay-75"></div>
            </div>
            <div className="flex gap-1 pl-4">
              <div className="bg-blue-500/20 h-1 w-12 rounded group-hover:animate-pulse delay-100"></div>
              <div className="bg-purple-500/20 h-1 w-8 rounded"></div>
            </div>
          </div>
        </div>
        {/* Floating metrics */}
        <div className="absolute top-4 right-4 bg-green-500/20 rounded px-2 py-1">
          <span className="text-xs text-green-400 font-bold">75% faster</span>
        </div>
      </div>
    </div>
  )
}

function ContentInfographic() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-purple-500/10 to-violet-600/10 rounded-lg overflow-hidden group">
      <div className="absolute inset-0 p-6">
        {/* Document Stack */}
        <div className="relative h-full">
          <div className="absolute bottom-0 left-4 w-32 h-20 bg-purple-500/20 rounded border border-purple-500/30 transform rotate-3 group-hover:rotate-6 transition-transform"></div>
          <div className="absolute bottom-0 left-6 w-32 h-20 bg-purple-500/30 rounded border border-purple-500/40 transform -rotate-2 group-hover:-rotate-4 transition-transform"></div>
          <div className="absolute bottom-0 left-8 w-32 h-20 bg-purple-500/40 rounded border border-purple-500/50 p-2">
            <div className="space-y-1">
              <div className="bg-white/20 h-1 w-full rounded"></div>
              <div className="bg-white/20 h-1 w-20 rounded"></div>
              <div className="bg-white/20 h-1 w-24 rounded"></div>
            </div>
          </div>
          {/* SEO Graph */}
          <div className="absolute top-2 right-4">
            <svg className="w-16 h-16" viewBox="0 0 64 64">
              <polyline
                points="8,40 20,30 32,35 44,20 56,25"
                fill="none"
                stroke="url(#purple-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                className="group-hover:animate-pulse"
              />
              <defs>
                <linearGradient id="purple-gradient">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function BusinessInfographic() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-lg overflow-hidden group">
      <div className="absolute inset-0 p-6">
        {/* Dashboard Grid */}
        <div className="grid grid-cols-2 gap-2 h-full">
          <div className="bg-blue-500/20 rounded border border-blue-500/30 p-2">
            <div className="text-xs text-blue-400 mb-1">Revenue</div>
            <div className="text-lg font-bold text-white">+42%</div>
            <div className="bg-blue-500/30 h-1 w-full rounded mt-2 group-hover:animate-pulse"></div>
          </div>
          <div className="bg-indigo-500/20 rounded border border-indigo-500/30 p-2">
            <div className="text-xs text-indigo-400 mb-1">Tasks</div>
            <div className="text-lg font-bold text-white">847</div>
            <div className="flex gap-1 mt-2">
              <div className="bg-indigo-500/30 h-4 w-2 rounded group-hover:animate-pulse"></div>
              <div className="bg-indigo-500/40 h-6 w-2 rounded group-hover:animate-pulse delay-75"></div>
              <div className="bg-indigo-500/50 h-8 w-2 rounded group-hover:animate-pulse delay-100"></div>
            </div>
          </div>
          <div className="bg-cyan-500/20 rounded border border-cyan-500/30 p-2 col-span-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-cyan-400">Efficiency</span>
              <span className="text-xs text-green-400">+65%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResearchInfographic() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-cyan-500/10 to-teal-600/10 rounded-lg overflow-hidden group">
      <div className="absolute inset-0 p-6">
        {/* Network Graph */}
        <svg className="w-full h-full" viewBox="0 0 200 150">
          {/* Nodes */}
          <circle cx="50" cy="30" r="8" fill="#06b6d4" opacity="0.6" className="group-hover:animate-ping" />
          <circle cx="100" cy="75" r="12" fill="#0891b2" opacity="0.8" />
          <circle cx="150" cy="40" r="6" fill="#06b6d4" opacity="0.5" className="group-hover:animate-ping delay-100" />
          <circle cx="130" cy="110" r="10" fill="#14b8a6" opacity="0.7" />
          <circle cx="40" cy="90" r="7" fill="#0891b2" opacity="0.6" className="group-hover:animate-ping delay-200" />
          
          {/* Connections */}
          <line x1="50" y1="30" x2="100" y2="75" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="75" x2="150" y2="40" stroke="#0891b2" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="75" x2="130" y2="110" stroke="#14b8a6" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="75" x2="40" y2="90" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
          <line x1="40" y1="90" x2="130" y2="110" stroke="#0891b2" strokeWidth="1" opacity="0.3" />
        </svg>
        {/* Data Label */}
        <div className="absolute bottom-2 right-2 bg-cyan-500/20 rounded px-2 py-1">
          <span className="text-xs text-cyan-400 font-bold">80% insights</span>
        </div>
      </div>
    </div>
  )
}

function CreativeInfographic() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-pink-500/10 to-rose-600/10 rounded-lg overflow-hidden group">
      <div className="absolute inset-0 p-6">
        {/* Color Palette */}
        <div className="flex gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 group-hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 group-hover:scale-110 transition-transform delay-75"></div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 group-hover:scale-110 transition-transform delay-100"></div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 group-hover:scale-110 transition-transform delay-150"></div>
        </div>
        {/* Design Elements */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-pink-500/20 h-12 rounded"></div>
          <div className="bg-rose-500/20 h-16 rounded"></div>
          <div className="bg-purple-500/20 h-10 rounded"></div>
        </div>
        <div className="absolute bottom-2 right-2">
          <Sparkles className="w-6 h-6 text-pink-400 group-hover:animate-spin" />
        </div>
      </div>
    </div>
  )
}

function MarketingInfographic() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-orange-500/10 to-amber-600/10 rounded-lg overflow-hidden group">
      <div className="absolute inset-0 p-6">
        {/* Growth Chart */}
        <div className="relative h-full">
          <svg className="w-full h-full" viewBox="0 0 200 150">
            <rect x="20" y="100" width="20" height="30" fill="#f97316" opacity="0.6" className="group-hover:animate-pulse" />
            <rect x="50" y="80" width="20" height="50" fill="#ea580c" opacity="0.7" className="group-hover:animate-pulse delay-75" />
            <rect x="80" y="60" width="20" height="70" fill="#f97316" opacity="0.8" className="group-hover:animate-pulse delay-100" />
            <rect x="110" y="40" width="20" height="90" fill="#ea580c" opacity="0.9" className="group-hover:animate-pulse delay-150" />
            <rect x="140" y="20" width="20" height="110" fill="#f97316" className="group-hover:animate-pulse delay-200" />
            
            {/* Trend Arrow */}
            <path d="M 30 90 Q 90 50 150 30" stroke="#f97316" strokeWidth="2" fill="none" strokeDasharray="5,5" />
            <polygon points="150,30 145,35 145,25" fill="#f97316" />
          </svg>
          <div className="absolute top-2 right-2 bg-orange-500/20 rounded px-2 py-1">
            <span className="text-xs text-orange-400 font-bold">+70% ROI</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function AutomationInfographic() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-teal-500/10 to-cyan-600/10 rounded-lg overflow-hidden group">
      <div className="absolute inset-0 p-6">
        {/* Workflow Diagram */}
        <div className="flex items-center justify-center h-full gap-2">
          <div className="bg-teal-500/30 w-8 h-8 rounded-full flex items-center justify-center">
            <div className="bg-teal-500 w-4 h-4 rounded-full group-hover:animate-ping"></div>
          </div>
          <div className="bg-teal-500/20 h-1 w-8 rounded"></div>
          <div className="bg-cyan-500/30 w-10 h-10 rounded flex items-center justify-center">
            <Zap className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />
          </div>
          <div className="bg-cyan-500/20 h-1 w-8 rounded"></div>
          <div className="bg-teal-500/30 w-8 h-8 rounded-full flex items-center justify-center">
            <div className="bg-teal-500 w-4 h-4 rounded-full group-hover:animate-ping delay-200"></div>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-teal-500/20 rounded px-2 py-1">
          <span className="text-xs text-teal-400 font-bold">85% automated</span>
        </div>
      </div>
    </div>
  )
}

function LearningInfographic() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-yellow-500/10 to-amber-600/10 rounded-lg overflow-hidden group">
      <div className="absolute inset-0 p-6">
        {/* Book Stack */}
        <div className="flex items-end justify-center h-full gap-2">
          <div className="bg-yellow-500/30 w-8 h-16 rounded border border-yellow-500/50 group-hover:h-20 transition-all"></div>
          <div className="bg-amber-500/40 w-8 h-20 rounded border border-amber-500/50 group-hover:h-24 transition-all"></div>
          <div className="bg-yellow-500/50 w-8 h-24 rounded border border-yellow-500/60 group-hover:h-28 transition-all"></div>
          <div className="bg-amber-500/40 w-8 h-18 rounded border border-amber-500/50 group-hover:h-22 transition-all"></div>
        </div>
        <div className="absolute top-4 right-4">
          <Brain className="w-6 h-6 text-yellow-400 group-hover:animate-pulse" />
        </div>
      </div>
    </div>
  )
}

function ProfessionalInfographic() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-lg overflow-hidden group">
      <div className="absolute inset-0 p-6">
        {/* Certificate/Badge */}
        <div className="flex items-center justify-center h-full">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full flex items-center justify-center border-2 border-indigo-500/50">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/50 to-purple-500/50 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-indigo-500/20 rounded px-3 py-1">
              <span className="text-xs text-indigo-400 font-bold">PRO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AdvancedInfographic() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-red-500/10 to-pink-600/10 rounded-lg overflow-hidden group">
      <div className="absolute inset-0 p-6">
        {/* Neural Network */}
        <svg className="w-full h-full" viewBox="0 0 200 150">
          {/* Input Layer */}
          <circle cx="30" cy="40" r="6" fill="#ef4444" opacity="0.6" className="group-hover:animate-pulse" />
          <circle cx="30" cy="75" r="6" fill="#ef4444" opacity="0.6" className="group-hover:animate-pulse delay-75" />
          <circle cx="30" cy="110" r="6" fill="#ef4444" opacity="0.6" className="group-hover:animate-pulse delay-100" />
          
          {/* Hidden Layer */}
          <circle cx="100" cy="30" r="8" fill="#dc2626" opacity="0.7" />
          <circle cx="100" cy="75" r="8" fill="#dc2626" opacity="0.7" />
          <circle cx="100" cy="120" r="8" fill="#dc2626" opacity="0.7" />
          
          {/* Output Layer */}
          <circle cx="170" cy="55" r="6" fill="#ef4444" opacity="0.8" className="group-hover:animate-pulse delay-200" />
          <circle cx="170" cy="95" r="6" fill="#ef4444" opacity="0.8" className="group-hover:animate-pulse delay-300" />
          
          {/* Connections */}
          <line x1="36" y1="40" x2="92" y2="30" stroke="#ef4444" strokeWidth="0.5" opacity="0.3" />
          <line x1="36" y1="40" x2="92" y2="75" stroke="#ef4444" strokeWidth="0.5" opacity="0.3" />
          <line x1="36" y1="75" x2="92" y2="75" stroke="#ef4444" strokeWidth="0.5" opacity="0.3" />
          <line x1="108" y1="30" x2="164" y2="55" stroke="#ef4444" strokeWidth="0.5" opacity="0.3" />
          <line x1="108" y1="75" x2="164" y2="95" stroke="#ef4444" strokeWidth="0.5" opacity="0.3" />
        </svg>
        <div className="absolute bottom-2 right-2 bg-red-500/20 rounded px-2 py-1">
          <span className="text-xs text-red-400 font-bold">90% optimized</span>
        </div>
      </div>
    </div>
  )
}

const infographicComponents: { [key: string]: () => JSX.Element } = {
  development: DevelopmentInfographic,
  content: ContentInfographic,
  business: BusinessInfographic,
  research: ResearchInfographic,
  creative: CreativeInfographic,
  marketing: MarketingInfographic,
  automation: AutomationInfographic,
  learning: LearningInfographic,
  professional: ProfessionalInfographic,
  advanced: AdvancedInfographic,
}

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
              <span className="text-sm font-semibold">100+ PROFESSIONAL AI AGENTS</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              AI Agent <span className="text-blue-400">Prompt Library</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Save 70% tokens with optimized prompts. From code generation to business automation - find the perfect AI agent for any task.
            </p>
            
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors">
                Explore All Agents
              </button>
              <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 rounded-lg font-bold transition-colors">
                Token Calculator
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
              <div className="text-3xl font-bold text-blue-400">100+</div>
              <div className="text-gray-400">AI Agents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">70%</div>
              <div className="text-gray-400">Token Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">10</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">5-25hrs</div>
              <div className="text-gray-400">Saved Per Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid with Infographics */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Agent Category</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Each category contains 10 specialized agents with optimized prompts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {agentCategories.map((category) => {
              const InfographicComponent = infographicComponents[category.id]
              return (
                <Link
                  key={category.id}
                  href={`/agents/${category.id}`}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Infographic */}
                    <InfographicComponent />
                    
                    {/* Category Info */}
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                        {category.shortDesc}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">
                          {category.agentCount} agents
                        </span>
                        <span className={`font-bold bg-gradient-to-r ${category.color.gradient} bg-clip-text text-transparent`}>
                          {category.tokenSavings} saved
                        </span>
                      </div>
                      
                      {/* Hover Action */}
                      <div className="flex items-center gap-2 mt-3 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className={`bg-gradient-to-r ${category.color.gradient} bg-clip-text text-transparent`}>
                          Explore Agents
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Agents Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Most Popular Agents</h2>
            <Link href="/agents/popular" className="text-blue-600 hover:underline flex items-center gap-2">
              View All Popular <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Sample popular agents - would be dynamic */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Code className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">
                  HOT
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">Code Review Pro</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Comprehensive code analysis with security and performance checks
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600 font-semibold">75% tokens saved</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">
                  TRENDING
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">SEO Blog Writer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Long-form SEO-optimized articles with keyword research
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-600 font-semibold">70% tokens saved</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                  ESSENTIAL
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">Meeting Summarizer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Extract action items and key decisions from meeting transcripts
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600 font-semibold">80% tokens saved</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Save 70% on AI Tokens Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get access to all 100+ optimized agent prompts and start saving immediately
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Get Started Free
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
              Calculate Savings
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Code, DollarSign, Users, Zap, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface UserPreferences {
  techStack: string[]
  teamSize: string
  budget: string
  primaryUse: string
}

interface ToolRecommendation {
  name: string
  icon: string
  matchScore: number
  reason: string
  price: string
  link: string
  category: string
  models: string[]
  features: string[]
}

export default function AIRecommendationEngine() {
  const [preferences, setPreferences] = useState<UserPreferences>({
    techStack: [],
    teamSize: '',
    budget: '',
    primaryUse: ''
  })
  const [recommendations, setRecommendations] = useState<ToolRecommendation[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const techOptions = ['JavaScript', 'Python', 'TypeScript', 'Java', 'Go', 'Rust', 'C++', 'Ruby']
  const teamSizes = ['Solo', '2-5', '6-20', '20+']
  const budgets = ['Free', '$0-50/mo', '$50-200/mo', '$200+/mo']
  const primaryUses = ['Code Completion', 'Code Review', 'Documentation', 'Testing', 'Debugging', 'Learning']

  // Comprehensive AI tools database with latest 2025 updates
  const toolsDatabase = [
    {
      name: 'Windsurf AI',
      icon: '🌊',
      category: 'IDE',
      price: '$15/mo',
      models: ['GPT-5', 'Claude 3.5 Sonnet', 'GPT-4o'],
      techStack: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Rust', 'Java'],
      teamSizes: ['Solo', '2-5', '6-20'],
      budgets: ['$0-50/mo'],
      primaryUses: ['Code Completion', 'Code Review', 'Testing', 'Debugging'],
      features: ['Cascade agent', 'Auto-context', 'One-click preview', 'MCP support'],
      link: '/tools'
    },
    {
      name: 'Cursor Pro',
      icon: '🎯',
      category: 'IDE',
      price: '$20/mo',
      models: ['GPT-5', 'Claude Opus 4.1', 'GPT-4o'],
      techStack: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go'],
      teamSizes: ['Solo', '2-5', '6-20', '20+'],
      budgets: ['$0-50/mo', '$50-200/mo'],
      primaryUses: ['Code Completion', 'Debugging', 'Code Review', 'Documentation'],
      features: ['Composer agent', 'Multi-file edit', 'Bug finder', 'Auto-commit'],
      link: '/tools'
    },
    {
      name: 'GitHub Copilot with GPT-5',
      icon: '🐙',
      category: 'Extension',
      price: '$10/mo',
      models: ['GPT-5', 'GPT-4o'],
      techStack: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Ruby', 'Go'],
      teamSizes: ['Solo', '2-5', '6-20', '20+'],
      budgets: ['$0-50/mo'],
      primaryUses: ['Code Completion', 'Learning', 'Documentation'],
      features: ['GPT-5 integration', 'Voice mode', 'Image support', 'Web search'],
      link: '/tools'
    },
    {
      name: 'Claude Code CLI',
      icon: '🧠',
      category: 'CLI Tool',
      price: '$20/mo',
      models: ['Claude Opus 4.1', 'Claude Sonnet 4'],
      techStack: ['Python', 'JavaScript', 'TypeScript', 'Go', 'Rust'],
      teamSizes: ['Solo', '2-5'],
      budgets: ['$0-50/mo'],
      primaryUses: ['Code Completion', 'Testing', 'Debugging', 'Code Review'],
      features: ['Agentic coding', 'Terminal integration', 'Project management'],
      link: '/tools'
    },
    {
      name: 'Cline (Open Source)',
      icon: '⚡',
      category: 'Extension',
      price: 'Free',
      models: ['GPT-5', 'Claude', 'Gemini', 'DeepSeek', 'Local LLMs'],
      techStack: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust'],
      teamSizes: ['Solo', '2-5'],
      budgets: ['Free'],
      primaryUses: ['Code Completion', 'Testing', 'Documentation', 'Debugging'],
      features: ['MCP protocol', 'Human-in-loop', 'Git integration', 'Multi-LLM'],
      link: '/tools'
    },
    {
      name: 'PearAI',
      icon: '🍐',
      category: 'IDE',
      price: '$15/mo',
      models: ['Claude 3.5', 'GPT-4o', 'Gemini 1.5 Pro', 'Llama 3.1'],
      techStack: ['JavaScript', 'TypeScript', 'Python'],
      teamSizes: ['Solo', '2-5'],
      budgets: ['$0-50/mo'],
      primaryUses: ['Code Completion', 'Learning', 'Debugging'],
      features: ['AI router', 'Memory layer', 'Integrated search', 'Tool curation'],
      link: '/tools'
    },
    {
      name: 'Aider',
      icon: '🤖',
      category: 'CLI Tool',
      price: 'Free',
      models: ['GPT-5', 'Claude', 'Local models'],
      techStack: ['Python', 'JavaScript', 'Go', 'Rust', 'Ruby'],
      teamSizes: ['Solo', '2-5'],
      budgets: ['Free'],
      primaryUses: ['Code Review', 'Testing', 'Debugging', 'Documentation'],
      features: ['Git integration', 'Test running', 'Multi-file edits'],
      link: '/tools'
    },
    {
      name: 'Continue.dev',
      icon: '🔄',
      category: 'Extension',
      price: 'Free',
      models: ['GPT-5', 'Claude', 'Ollama', 'Custom models'],
      techStack: ['JavaScript', 'TypeScript', 'Python', 'Java'],
      teamSizes: ['Solo', '2-5', '6-20'],
      budgets: ['Free'],
      primaryUses: ['Code Completion', 'Documentation', 'Learning'],
      features: ['Custom models', 'Local LLM support', 'IDE integration'],
      link: '/tools'
    },
    {
      name: 'Tabnine Pro',
      icon: '⌨️',
      category: 'Extension',
      price: '$12/mo',
      models: ['Proprietary AI', 'GPT models'],
      techStack: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go'],
      teamSizes: ['Solo', '2-5', '6-20', '20+'],
      budgets: ['$0-50/mo'],
      primaryUses: ['Code Completion', 'Learning'],
      features: ['Private models', 'Team learning', 'Security focused'],
      link: '/tools'
    },
    {
      name: 'Amazon Q Developer',
      icon: '☁️',
      category: 'IDE',
      price: '$25/mo',
      models: ['AWS Bedrock', 'Claude', 'GPT models'],
      techStack: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Go'],
      teamSizes: ['2-5', '6-20', '20+'],
      budgets: ['$0-50/mo', '$50-200/mo'],
      primaryUses: ['Code Completion', 'Testing', 'Documentation', 'Code Review'],
      features: ['AWS integration', 'Security scanning', 'Code migration'],
      link: '/tools'
    },
    {
      name: 'Roo Code',
      icon: '🦘',
      category: 'Extension',
      price: '$19/mo',
      models: ['GPT-5', 'Claude 3.5'],
      techStack: ['JavaScript', 'TypeScript', 'Python'],
      teamSizes: ['Solo', '2-5'],
      budgets: ['$0-50/mo'],
      primaryUses: ['Code Completion', 'Debugging', 'Testing'],
      features: ['Smart context', 'Test generation', 'Refactoring'],
      link: '/tools'
    },
    {
      name: 'Qodo Gen',
      icon: '🔍',
      category: 'Testing Tool',
      price: '$19/mo',
      models: ['GPT-4', 'Claude'],
      techStack: ['JavaScript', 'TypeScript', 'Python', 'Java'],
      teamSizes: ['2-5', '6-20', '20+'],
      budgets: ['$0-50/mo'],
      primaryUses: ['Testing', 'Code Review', 'Documentation'],
      features: ['Test generation', 'Coverage analysis', 'CI/CD integration'],
      link: '/tools'
    },
    {
      name: 'JetBrains AI Assistant',
      icon: '🚀',
      category: 'IDE',
      price: '$10/mo',
      models: ['GPT-4', 'Custom models'],
      techStack: ['Java', 'Python', 'Go', 'Rust', 'C++'],
      teamSizes: ['Solo', '2-5', '6-20', '20+'],
      budgets: ['$0-50/mo'],
      primaryUses: ['Code Completion', 'Debugging', 'Documentation', 'Code Review'],
      features: ['Deep IDE integration', 'Refactoring', 'Smart suggestions'],
      link: '/tools'
    },
    {
      name: 'Replit AI',
      icon: '💻',
      category: 'Cloud IDE',
      price: '$20/mo',
      models: ['GPT-4', 'Claude'],
      techStack: ['JavaScript', 'Python', 'TypeScript', 'Go', 'Java'],
      teamSizes: ['Solo', '2-5'],
      budgets: ['$0-50/mo'],
      primaryUses: ['Code Completion', 'Learning', 'Debugging'],
      features: ['Cloud deployment', 'Collaborative coding', 'Instant preview'],
      link: '/tools'
    },
    {
      name: 'Sourcegraph Cody',
      icon: '🔎',
      category: 'Extension',
      price: '$9/mo',
      models: ['Claude 3.5', 'GPT-4'],
      techStack: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Java'],
      teamSizes: ['2-5', '6-20', '20+'],
      budgets: ['$0-50/mo'],
      primaryUses: ['Code Review', 'Documentation', 'Debugging'],
      features: ['Code search', 'Context awareness', 'Enterprise ready'],
      link: '/tools'
    },
    {
      name: 'Bolt.new',
      icon: '⚡',
      category: 'Web App Builder',
      price: '$20/mo',
      models: ['Claude 3.5', 'GPT-4o'],
      techStack: ['JavaScript', 'TypeScript'],
      teamSizes: ['Solo', '2-5'],
      budgets: ['$0-50/mo'],
      primaryUses: ['Code Completion', 'Learning'],
      features: ['Full-stack apps', 'Deploy instantly', 'Visual building'],
      link: '/tools'
    },
    {
      name: 'v0 by Vercel',
      icon: '▲',
      category: 'UI Builder',
      price: '$20/mo',
      models: ['GPT-4', 'Custom models'],
      techStack: ['JavaScript', 'TypeScript'],
      teamSizes: ['Solo', '2-5'],
      budgets: ['$0-50/mo'],
      primaryUses: ['Code Completion', 'Documentation'],
      features: ['React components', 'Tailwind CSS', 'Shadcn/ui'],
      link: '/tools'
    },
    {
      name: 'Lovable AI',
      icon: '❤️',
      category: 'App Builder',
      price: '$20/mo',
      models: ['GPT-4', 'Claude'],
      techStack: ['JavaScript', 'TypeScript'],
      teamSizes: ['Solo', '2-5'],
      budgets: ['$0-50/mo'],
      primaryUses: ['Code Completion', 'Learning'],
      features: ['Visual editor', 'Database integration', 'Deploy ready'],
      link: '/tools'
    },
    {
      name: 'DeepSeek Coder',
      icon: '🌊',
      category: 'Model',
      price: 'Free',
      models: ['DeepSeek-V3'],
      techStack: ['Python', 'JavaScript', 'TypeScript', 'Go', 'Rust', 'Java'],
      teamSizes: ['Solo', '2-5'],
      budgets: ['Free'],
      primaryUses: ['Code Completion', 'Debugging', 'Learning'],
      features: ['Open source', 'Local running', 'High performance'],
      link: '/tools'
    },
    {
      name: 'Phind',
      icon: '🔍',
      category: 'Search Engine',
      price: '$20/mo',
      models: ['Phind-405B', 'GPT-4'],
      techStack: ['JavaScript', 'Python', 'TypeScript', 'Java', 'Go'],
      teamSizes: ['Solo', '2-5'],
      budgets: ['$0-50/mo'],
      primaryUses: ['Learning', 'Debugging', 'Documentation'],
      features: ['Code search', 'Technical answers', 'VSCode extension'],
      link: '/tools'
    }
  ]

  const analyzePreferences = () => {
    setIsAnalyzing(true)
    
    // Intelligent matching algorithm
    setTimeout(() => {
      const calculateMatchScore = (tool: any) => {
        let score = 0
        let reasons = []
        
        // Tech stack matching (35 points)
        const techMatches = preferences.techStack.filter(tech => 
          tool.techStack.includes(tech)
        ).length
        if (techMatches > 0) {
          score += (techMatches / preferences.techStack.length) * 35
          reasons.push(`Supports ${techMatches}/${preferences.techStack.length} of your tech stack`)
        }
        
        // Team size matching (20 points)
        if (tool.teamSizes.includes(preferences.teamSize)) {
          score += 20
          reasons.push(`Optimized for ${preferences.teamSize} teams`)
        }
        
        // Budget matching (25 points)
        let budgetMatch = false
        if (preferences.budget === 'Free' && tool.price === 'Free') {
          score += 25
          budgetMatch = true
        } else if (preferences.budget === '$0-50/mo' && 
                  (tool.price === 'Free' || 
                   parseInt(tool.price.replace(/[^0-9]/g, '')) <= 50)) {
          score += 25
          budgetMatch = true
        } else if (preferences.budget === '$50-200/mo' && 
                  parseInt(tool.price.replace(/[^0-9]/g, '')) <= 200) {
          score += 20
          budgetMatch = true
        } else if (preferences.budget === '$200+/mo') {
          score += 15
          budgetMatch = true
        }
        if (budgetMatch) reasons.push(`Fits your ${preferences.budget} budget`)
        
        // Primary use case matching (20 points)
        if (tool.primaryUses.includes(preferences.primaryUse)) {
          score += 20
          reasons.push(`Excellent for ${preferences.primaryUse}`)
        }
        
        // Bonus for latest models (5 points)
        if (tool.models.includes('GPT-5') || tool.models.includes('Claude Opus 4.1')) {
          score += 5
          reasons.push('Powered by latest AI models')
        }
        
        return {
          ...tool,
          matchScore: Math.round(score),
          reason: reasons.join('. ')
        }
      }
      
      // Calculate scores and sort
      const scoredTools = toolsDatabase
        .map(calculateMatchScore)
        .filter(tool => tool.matchScore > 30)
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 5)
      
      setRecommendations(scoredTools)
      setIsAnalyzing(false)
      setShowResults(true)
    }, 2000)
  }

  const toggleTechStack = (tech: string) => {
    setPreferences(prev => ({
      ...prev,
      techStack: prev.techStack.includes(tech)
        ? prev.techStack.filter(t => t !== tech)
        : [...prev.techStack, tech]
    }))
  }

  const isFormComplete = preferences.techStack.length > 0 && 
    preferences.teamSize && 
    preferences.budget && 
    preferences.primaryUse

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border-y-4 border-black dark:border-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white font-black text-xs mb-4">
            <Sparkles className="w-4 h-4" />
            AI RECOMMENDATION ENGINE
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            GET PERSONALIZED TOOL RECOMMENDATIONS
          </h2>
          <p className="text-lg opacity-70 font-bold">
            Our AI analyzes your needs and finds the perfect tools for you
          </p>
        </div>

        {!showResults ? (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-8 brutal-shadow-xl">
              {/* Tech Stack Selection */}
              <div className="mb-8">
                <label className="flex items-center gap-2 font-black text-sm mb-4">
                  <Code className="w-4 h-4" />
                  YOUR TECH STACK
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {techOptions.map(tech => (
                    <button
                      key={tech}
                      onClick={() => toggleTechStack(tech)}
                      className={`px-4 py-2 border-4 border-black font-bold text-sm transition-all ${
                        preferences.techStack.includes(tech)
                          ? 'bg-purple-500 text-white translate-x-[-2px] translate-y-[-2px]'
                          : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              {/* Team Size */}
              <div className="mb-8">
                <label className="flex items-center gap-2 font-black text-sm mb-4">
                  <Users className="w-4 h-4" />
                  TEAM SIZE
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {teamSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setPreferences(prev => ({ ...prev, teamSize: size }))}
                      className={`px-4 py-2 border-4 border-black font-bold text-sm transition-all ${
                        preferences.teamSize === size
                          ? 'bg-blue-500 text-white translate-x-[-2px] translate-y-[-2px]'
                          : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="mb-8">
                <label className="flex items-center gap-2 font-black text-sm mb-4">
                  <DollarSign className="w-4 h-4" />
                  MONTHLY BUDGET
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {budgets.map(budget => (
                    <button
                      key={budget}
                      onClick={() => setPreferences(prev => ({ ...prev, budget }))}
                      className={`px-4 py-2 border-4 border-black font-bold text-sm transition-all ${
                        preferences.budget === budget
                          ? 'bg-green-500 text-white translate-x-[-2px] translate-y-[-2px]'
                          : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Use */}
              <div className="mb-8">
                <label className="flex items-center gap-2 font-black text-sm mb-4">
                  <Zap className="w-4 h-4" />
                  PRIMARY USE CASE
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {primaryUses.map(use => (
                    <button
                      key={use}
                      onClick={() => setPreferences(prev => ({ ...prev, primaryUse: use }))}
                      className={`px-4 py-2 border-4 border-black font-bold text-sm transition-all ${
                        preferences.primaryUse === use
                          ? 'bg-orange-500 text-white translate-x-[-2px] translate-y-[-2px]'
                          : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900'
                      }`}
                    >
                      {use}
                    </button>
                  ))}
                </div>
              </div>

              {/* Analyze Button */}
              <button
                onClick={analyzePreferences}
                disabled={!isFormComplete || isAnalyzing}
                className={`w-full py-4 font-black text-lg transition-all ${
                  isFormComplete && !isAnalyzing
                    ? 'bg-purple-500 text-white hover:translate-x-[-2px] hover:translate-y-[-2px]'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isAnalyzing ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ANALYZING YOUR NEEDS...
                  </span>
                ) : (
                  'GET AI RECOMMENDATIONS →'
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Results */}
            <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-8 brutal-shadow-xl">
              <h3 className="text-2xl font-black mb-6">
                🎯 YOUR PERFECT TOOLS
              </h3>
              
              <div className="space-y-4 mb-8">
                {recommendations.map((tool, index) => (
                  <div
                    key={index}
                    className="border-4 border-black dark:border-white p-6 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{tool.icon}</span>
                        <div>
                          <h4 className="font-black text-xl">{tool.name}</h4>
                          <span className="text-sm opacity-60">{tool.price}</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-green-500">
                          {tool.matchScore}%
                        </div>
                        <div className="text-xs opacity-60">MATCH</div>
                      </div>
                    </div>
                    
                    <p className="text-sm mb-4 opacity-70">
                      {tool.reason}
                    </p>
                    
                    <Link href={tool.link}>
                      <button className="w-full py-3 bg-black text-white dark:bg-white dark:text-black font-black hover:bg-purple-500 hover:text-white transition-colors">
                        EXPLORE TOOL →
                      </button>
                    </Link>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setShowResults(false)
                  setPreferences({
                    techStack: [],
                    teamSize: '',
                    budget: '',
                    primaryUse: ''
                  })
                }}
                className="w-full py-3 border-4 border-black dark:border-white font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                TRY DIFFERENT PREFERENCES
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

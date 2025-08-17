'use client'

import { useState, useEffect } from 'react'
import { Calculator, DollarSign, TrendingUp, Users, Zap, ChevronDown, Save } from 'lucide-react'

interface Tool {
  name: string
  price: number
  category: string
  icon: string
}

export default function PricingCalculator() {
  const [teamSize, setTeamSize] = useState(5)
  const [selectedTools, setSelectedTools] = useState<string[]>([])
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [showBreakdown, setShowBreakdown] = useState(false)
  const [animatedSavings, setAnimatedSavings] = useState(0)

  const tools: Tool[] = [
    { name: 'GitHub Copilot', price: 10, category: 'Code Completion', icon: '🐙' },
    { name: 'Cursor Pro', price: 20, category: 'IDE', icon: '🎯' },
    { name: 'ChatGPT Plus', price: 20, category: 'AI Assistant', icon: '🤖' },
    { name: 'Claude Pro', price: 20, category: 'AI Assistant', icon: '🧠' },
    { name: 'Midjourney', price: 30, category: 'Image Gen', icon: '🎨' },
    { name: 'Perplexity Pro', price: 20, category: 'Search', icon: '🔍' },
    { name: 'Replit Core', price: 20, category: 'Cloud IDE', icon: '☁️' },
    { name: 'Tabnine Pro', price: 12, category: 'Code Completion', icon: '⚡' },
    { name: 'Codeium Teams', price: 15, category: 'Code Completion', icon: '🚀' },
    { name: 'V0 Pro', price: 20, category: 'UI Generation', icon: '🎯' }
  ]

  const recommendations = [
    { 
      combo: ['Cursor Pro', 'Claude Pro'],
      alternative: 'Windsurf',
      savings: 25,
      reason: 'Windsurf includes both IDE and AI chat in one'
    },
    {
      combo: ['GitHub Copilot', 'ChatGPT Plus'],
      alternative: 'Codeium Teams',
      savings: 15,
      reason: 'Codeium offers similar features at lower cost'
    },
    {
      combo: ['Tabnine Pro', 'Perplexity Pro'],
      alternative: 'Cursor Pro',
      savings: 12,
      reason: 'Cursor includes code completion and search'
    }
  ]

  const calculateTotal = () => {
    const selected = tools.filter(tool => selectedTools.includes(tool.name))
    const monthlyTotal = selected.reduce((sum, tool) => sum + tool.price, 0) * teamSize
    return billingCycle === 'yearly' ? monthlyTotal * 12 * 0.8 : monthlyTotal // 20% discount for yearly
  }

  const calculateSavings = () => {
    // Check if any selected combination matches our recommendations
    for (const rec of recommendations) {
      if (rec.combo.every(tool => selectedTools.includes(tool))) {
        return rec.savings * teamSize * (billingCycle === 'yearly' ? 12 : 1)
      }
    }
    return 0
  }

  const getBestAlternative = () => {
    for (const rec of recommendations) {
      if (rec.combo.every(tool => selectedTools.includes(tool))) {
        return rec
      }
    }
    return null
  }

  useEffect(() => {
    const savings = calculateSavings()
    let current = 0
    const increment = savings / 30
    const timer = setInterval(() => {
      current += increment
      if (current >= savings) {
        current = savings
        clearInterval(timer)
      }
      setAnimatedSavings(Math.floor(current))
    }, 30)
    return () => clearInterval(timer)
  }, [selectedTools, teamSize, billingCycle])

  const toggleTool = (toolName: string) => {
    setSelectedTools(prev => 
      prev.includes(toolName) 
        ? prev.filter(t => t !== toolName)
        : [...prev, toolName]
    )
  }

  const total = calculateTotal()
  const alternative = getBestAlternative()

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-lime-50 dark:from-green-950 dark:to-lime-950 border-y-4 border-black dark:border-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-black text-xs mb-4">
            <Calculator className="w-4 h-4" />
            ROI CALCULATOR
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            CALCULATE YOUR AI TOOL COSTS
          </h2>
          <p className="text-lg opacity-70 font-bold">
            See how much you're spending and how to save
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Calculator */}
          <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-8 brutal-shadow-xl">
            {/* Team Size Selector */}
            <div className="mb-6">
              <label className="font-black text-sm mb-2 block">
                TEAM SIZE: {teamSize} {teamSize === 1 ? 'DEVELOPER' : 'DEVELOPERS'}
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                className="w-full h-3 bg-black dark:bg-white rounded-none appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #00FF88 0%, #00FF88 ${teamSize * 2}%, #e5e5e5 ${teamSize * 2}%, #e5e5e5 100%)`
                }}
              />
              <div className="flex justify-between text-xs font-mono mt-2 opacity-60">
                <span>1</span>
                <span>10</span>
                <span>25</span>
                <span>50</span>
              </div>
            </div>

            {/* Billing Cycle Toggle */}
            <div className="mb-6">
              <label className="font-black text-sm mb-2 block">BILLING CYCLE</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`py-3 font-black text-sm border-4 border-black ${
                    billingCycle === 'monthly' 
                      ? 'bg-black text-white dark:bg-white dark:text-black' 
                      : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900'
                  }`}
                >
                  MONTHLY
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`py-3 font-black text-sm border-4 border-black relative ${
                    billingCycle === 'yearly' 
                      ? 'bg-black text-white dark:bg-white dark:text-black' 
                      : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900'
                  }`}
                >
                  YEARLY
                  <span className="absolute -top-2 -right-2 px-2 py-1 bg-red-500 text-white text-xs font-black">
                    -20%
                  </span>
                </button>
              </div>
            </div>

            {/* Tool Selection */}
            <div className="mb-6">
              <label className="font-black text-sm mb-3 block">
                SELECT YOUR CURRENT TOOLS
              </label>
              <div className="grid grid-cols-2 gap-2">
                {tools.map((tool) => (
                  <button
                    key={tool.name}
                    onClick={() => toggleTool(tool.name)}
                    className={`p-3 border-4 border-black text-left transition-all ${
                      selectedTools.includes(tool.name)
                        ? 'bg-lime-400 text-black brutal-shadow translate-x-[-2px] translate-y-[-2px]'
                        : 'bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{tool.icon}</span>
                        <div>
                          <div className="font-bold text-xs">{tool.name}</div>
                          <div className="text-xs opacity-60">${tool.price}/mo</div>
                        </div>
                      </div>
                      {selectedTools.includes(tool.name) && (
                        <div className="w-6 h-6 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center">
                          ✓
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div className="space-y-6">
            {/* Current Cost Display */}
            <div className="bg-black text-white dark:bg-white dark:text-black p-8 brutal-shadow-xl">
              <h3 className="font-black text-lg mb-4">YOUR CURRENT COSTS</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="font-mono text-sm">TOTAL {billingCycle.toUpperCase()}</span>
                  <span className="text-4xl font-black">
                    ${total.toLocaleString()}
                  </span>
                </div>
                
                {billingCycle === 'yearly' && (
                  <div className="flex justify-between text-sm opacity-70">
                    <span>Monthly equivalent</span>
                    <span>${Math.floor(total / 12)}/mo</span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span>Per developer</span>
                  <span>${Math.floor(total / teamSize)}/{billingCycle === 'yearly' ? 'yr' : 'mo'}</span>
                </div>
              </div>

              {selectedTools.length > 0 && (
                <button
                  onClick={() => setShowBreakdown(!showBreakdown)}
                  className="mt-4 text-xs font-bold flex items-center gap-1 hover:text-lime-400 transition-colors"
                >
                  {showBreakdown ? 'HIDE' : 'SHOW'} BREAKDOWN
                  <ChevronDown className={`w-4 h-4 transition-transform ${showBreakdown ? 'rotate-180' : ''}`} />
                </button>
              )}

              {showBreakdown && selectedTools.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
                  {tools
                    .filter(tool => selectedTools.includes(tool.name))
                    .map(tool => (
                      <div key={tool.name} className="flex justify-between text-sm">
                        <span>{tool.icon} {tool.name}</span>
                        <span>${tool.price * teamSize * (billingCycle === 'yearly' ? 12 * 0.8 : 1)}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Savings Alert */}
            {alternative && (
              <div className="bg-lime-400 text-black border-4 border-black p-6 brutal-shadow-xl animate-pulse">
                <div className="flex items-start gap-3">
                  <Save className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-black text-lg mb-2">
                      💰 SAVE ${animatedSavings}/{billingCycle === 'yearly' ? 'YEAR' : 'MONTH'}!
                    </h4>
                    <p className="font-bold text-sm mb-3">
                      Instead of {alternative.combo.join(' + ')}, use <span className="font-black">{alternative.alternative}</span>
                    </p>
                    <p className="text-xs opacity-70">
                      {alternative.reason}
                    </p>
                    <button className="mt-4 px-6 py-2 bg-black text-lime-400 font-black text-sm hover:scale-105 transition-transform">
                      LEARN MORE →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-4 text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-black">{selectedTools.length}</div>
                <div className="text-xs font-mono opacity-60">TOOLS SELECTED</div>
              </div>
              <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-4 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-black text-green-500">
                  {animatedSavings > 0 ? `$${animatedSavings}` : '$0'}
                </div>
                <div className="text-xs font-mono opacity-60">POTENTIAL SAVINGS</div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-purple-500 text-white p-6 text-center">
              <Zap className="w-12 h-12 mx-auto mb-3" />
              <h4 className="font-black text-lg mb-2">GET PERSONALIZED RECOMMENDATIONS</h4>
              <p className="text-sm mb-4 opacity-90">
                Our AI analyzes your stack and finds the perfect tools for your needs
              </p>
              <button className="px-8 py-3 bg-white text-purple-500 font-black hover:scale-105 transition-transform">
                GET MY CUSTOM STACK →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
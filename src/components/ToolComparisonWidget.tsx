'use client'

import { useState, useMemo } from 'react'
import { 
  ChevronRight, Zap, X, Check, Plus, 
  Star, Award, Download, Share2, 
  Search, RefreshCw, Grid3x3, ExternalLink
} from 'lucide-react'
import Link from 'next/link'
import { toolsDatabase, Tool, getCategories, searchTools } from '@/lib/toolsDatabase'

type ComparisonMode = 'quick' | 'detailed' | 'metrics' | 'pricing'

export default function ToolComparisonWidget() {
  const [selectedTools, setSelectedTools] = useState<string[]>([])
  const [comparisonMode, setComparisonMode] = useState<ComparisonMode>('quick')
  const [showAllFeatures, setShowAllFeatures] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [showSearch, setShowSearch] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)
  
  const categories = useMemo(() => getCategories(), [])
  
  // Filter tools
  const availableTools = useMemo(() => {
    let tools = [...toolsDatabase]
    
    if (searchQuery) {
      tools = searchTools(searchQuery)
    }
    
    if (categoryFilter !== 'all') {
      tools = tools.filter(tool => tool.category === categoryFilter)
    }
    
    return tools
  }, [searchQuery, categoryFilter])
  
  // Get selected tool objects
  const comparisonTools = useMemo(() => {
    return selectedTools.map(id => toolsDatabase.find(t => t.id === id)).filter(Boolean) as Tool[]
  }, [selectedTools])
  
  // Get all unique features
  const allFeatures = useMemo(() => {
    const features = new Set<string>()
    comparisonTools.forEach(tool => {
      tool.features.forEach(feature => features.add(feature))
    })
    return Array.from(features)
  }, [comparisonTools])
  
  // Calculate winner
  const calculateWinner = () => {
    if (comparisonTools.length < 2) return null
    
    const scores = comparisonTools.map(tool => {
      const totalScore = Object.values(tool.metrics).reduce((a, b) => a + b, 0)
      const avgScore = totalScore / Object.keys(tool.metrics).length
      return { id: tool.id, score: avgScore }
    })
    
    scores.sort((a, b) => b.score - a.score)
    return scores[0].id
  }
  
  const winner = calculateWinner()
  
  const addTool = (toolId: string) => {
    if (!selectedTools.includes(toolId) && selectedTools.length < 5) {
      setSelectedTools([...selectedTools, toolId])
      setShowSearch(false)
      setSearchQuery('')
    }
  }
  
  const removeTool = (toolId: string) => {
    setSelectedTools(selectedTools.filter(id => id !== toolId))
  }
  
  const shareComparison = () => {
    const url = `${window.location.origin}/compare?tools=${selectedTools.join(',')}`
    navigator.clipboard.writeText(url)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }
  
  const exportComparison = () => {
    const headers = ['Tool', 'Category', 'Price', 'Rating']
    const rows = comparisonTools.map(tool => [
      tool.name,
      tool.category,
      tool.pricing.free ? 'Free' : `$${tool.pricing.starting}/${tool.pricing.unit || 'mo'}`,
      tool.rating
    ])
    
    const csv = [headers.join(','), ...rows.map(row => row.join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `comparison-${Date.now()}.csv`
    a.click()
  }
  
  const getPriceDisplay = (tool: Tool) => {
    if (tool.pricing.free) return 'FREE'
    if (tool.pricing.type === 'usage-based') {
      return `$${tool.pricing.starting}/${tool.pricing.unit}`
    }
    return `$${tool.pricing.starting}/mo`
  }

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white border-y-4 border-black dark:border-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-black text-xs mb-6">
            <Zap className="w-4 h-4" />
            TOOL BATTLE
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            COMPARE AI TOOLS
          </h2>
          <p className="text-xl opacity-90">
            Pick your fighters. See who wins.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-4 py-2 font-bold border-2 transition-all ${
              categoryFilter === 'all'
                ? 'bg-white text-purple-900 border-white'
                : 'bg-purple-800/50 border-purple-600 hover:bg-purple-700'
            }`}
          >
            All Categories
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-4 py-2 font-bold border-2 transition-all ${
                categoryFilter === category
                  ? 'bg-white text-purple-900 border-white'
                  : 'bg-purple-800/50 border-purple-600 hover:bg-purple-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Selected Tools */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6 max-w-6xl mx-auto">
          {selectedTools.map(toolId => {
            const tool = toolsDatabase.find(t => t.id === toolId)
            if (!tool) return null
            
            return (
              <div key={toolId} className="relative">
                <div className="bg-white/10 backdrop-blur border-2 border-white/20 p-4">
                  <button
                    onClick={() => removeTool(toolId)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 flex items-center justify-center"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="text-3xl mb-2 text-center">{tool.logo}</div>
                  <div className="font-black text-sm text-center truncate">{tool.name}</div>
                  {winner === toolId && (
                    <div className="mt-2 px-2 py-1 bg-lime-400 text-black text-xs font-black flex items-center justify-center gap-1">
                      <Award className="w-3 h-3" />
                      WIN
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          
          {/* Add Tool Button */}
          {selectedTools.length < 5 && (
            <div className="relative">
              {showSearch ? (
                <div className="absolute top-0 left-0 right-0 z-20 bg-purple-900 border-2 border-white/20 p-2 min-w-[200px]">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full bg-white/10 px-2 py-1 text-sm outline-none mb-2"
                    autoFocus
                  />
                  <div className="max-h-60 overflow-y-auto space-y-1">
                    {availableTools
                      .filter(tool => !selectedTools.includes(tool.id))
                      .slice(0, 10)
                      .map(tool => (
                        <button
                          key={tool.id}
                          onClick={() => addTool(tool.id)}
                          className="w-full p-2 bg-white/5 hover:bg-white/10 text-left text-sm flex items-center gap-2"
                        >
                          <span>{tool.logo}</span>
                          <span className="truncate">{tool.name}</span>
                        </button>
                      ))}
                  </div>
                  <button
                    onClick={() => setShowSearch(false)}
                    className="w-full mt-2 text-xs opacity-60 hover:opacity-100"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="w-full h-full min-h-[100px] bg-white/5 border-2 border-dashed border-white/30 hover:bg-white/10 flex flex-col items-center justify-center"
                >
                  <Plus className="w-6 h-6 mb-1" />
                  <span className="text-sm font-bold">Add Tool</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Comparison Content */}
        {selectedTools.length >= 2 ? (
          <>
            {/* Mode Tabs */}
            <div className="flex justify-center gap-2 mb-8">
              {(['quick', 'detailed', 'metrics', 'pricing'] as const).map(mode => (
                <button
                  key={mode}
                  onClick={() => setComparisonMode(mode)}
                  className={`px-6 py-3 font-bold border-2 capitalize ${
                    comparisonMode === mode
                      ? 'bg-white text-purple-900 border-white'
                      : 'border-white/30 hover:bg-white/10'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>

            <div className="max-w-7xl mx-auto bg-black/30 backdrop-blur border-2 border-white/20 overflow-hidden">
              
              {/* Quick Mode */}
              {comparisonMode === 'quick' && (
                <div className="p-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {comparisonTools.map(tool => (
                      <div key={tool.id} className="text-center">
                        <div className="text-4xl mb-3">{tool.logo}</div>
                        <h3 className="font-black text-lg mb-1">{tool.name}</h3>
                        <div className="text-2xl font-black text-lime-400 mb-2">
                          {getPriceDisplay(tool)}
                        </div>
                        <div className="flex justify-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(tool.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm opacity-70">{tool.users} users</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Mode */}
              {comparisonMode === 'detailed' && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-white/20">
                        <th className="p-4 text-left font-black">Feature</th>
                        {comparisonTools.map(tool => (
                          <th key={tool.id} className="p-4 text-center font-black">
                            {tool.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="p-4 font-bold">Price</td>
                        {comparisonTools.map(tool => (
                          <td key={tool.id} className="p-4 text-center">
                            {getPriceDisplay(tool)}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-4 font-bold">Rating</td>
                        {comparisonTools.map(tool => (
                          <td key={tool.id} className="p-4 text-center">
                            {tool.rating}/5
                          </td>
                        ))}
                      </tr>
                      {allFeatures.slice(0, showAllFeatures ? undefined : 5).map(feature => (
                        <tr key={feature} className="border-b border-white/10">
                          <td className="p-4 font-bold">{feature}</td>
                          {comparisonTools.map(tool => (
                            <td key={tool.id} className="p-4 text-center">
                              {tool.features.includes(feature) ? (
                                <Check className="w-5 h-5 text-green-400 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-red-400 mx-auto" />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                      {!showAllFeatures && allFeatures.length > 5 && (
                        <tr>
                          <td colSpan={comparisonTools.length + 1} className="p-4 text-center">
                            <button
                              onClick={() => setShowAllFeatures(true)}
                              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 font-bold"
                            >
                              Show More Features
                            </button>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Metrics Mode */}
              {comparisonMode === 'metrics' && (
                <div className="p-8">
                  {Object.keys(comparisonTools[0]?.metrics || {}).map(metric => (
                    <div key={metric} className="mb-6">
                      <h3 className="font-black text-lg capitalize mb-3">
                        {metric.replace('_', ' ')}
                      </h3>
                      {comparisonTools.map(tool => {
                        const value = tool.metrics[metric as keyof typeof tool.metrics]
                        return (
                          <div key={tool.id} className="flex items-center gap-4 mb-2">
                            <div className="w-32 font-bold">{tool.name}</div>
                            <div className="flex-1">
                              <div className="h-6 bg-white/10">
                                <div 
                                  className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                                  style={{ width: `${value}%` }}
                                />
                              </div>
                            </div>
                            <div className="w-12 text-right font-black">{value}%</div>
                          </div>
                        )
                      })}
                    </div>
                  ))}
                </div>
              )}

              {/* Pricing Mode */}
              {comparisonMode === 'pricing' && (
                <div className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {comparisonTools.map(tool => {
                      const annualCost = tool.pricing.free 
                        ? 0 
                        : tool.pricing.type === 'usage-based'
                          ? 'Variable'
                          : (tool.pricing.starting || 0) * 12
                      
                      return (
                        <div key={tool.id} className="bg-white/5 border-2 border-white/20 p-6">
                          <div className="text-center mb-4">
                            <div className="text-4xl mb-2">{tool.logo}</div>
                            <h3 className="font-black text-lg">{tool.name}</h3>
                          </div>
                          
                          <div className="text-center mb-6">
                            <div className="text-3xl font-black text-lime-400">
                              {getPriceDisplay(tool)}
                            </div>
                            {tool.pricing.details && (
                              <div className="text-sm opacity-70 mt-2">
                                {tool.pricing.details}
                              </div>
                            )}
                          </div>
                          
                          <div className="text-center">
                            <div className="text-sm opacity-60">Annual Cost</div>
                            <div className="text-xl font-black">
                              {annualCost === 'Variable' ? 'Variable' : `${annualCost}`}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={shareComparison}
                className="px-6 py-3 bg-white/10 border-2 border-white/30 font-bold hover:bg-white/20 flex items-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                {copiedLink ? 'Copied!' : 'Share'}
              </button>
              <button
                onClick={exportComparison}
                className="px-6 py-3 bg-white/10 border-2 border-white/30 font-bold hover:bg-white/20 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Export
              </button>
              <Link
                href={`/compare/${selectedTools.join('-vs-')}`}
                className="px-6 py-3 bg-lime-400 text-black font-bold hover:bg-lime-500 flex items-center gap-2"
              >
                Full Comparison
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <Grid3x3 className="w-20 h-20 mx-auto mb-6 opacity-50" />
            <h3 className="text-2xl font-black mb-4">SELECT TOOLS TO COMPARE</h3>
            <p className="text-lg opacity-70 mb-8">
              Choose at least 2 tools from {toolsDatabase.length}+ AI tools
            </p>
            
            {/* Popular Comparisons */}
            <div className="space-y-2">
              <p className="font-bold opacity-60">POPULAR:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  ['cursor', 'github-copilot'],
                  ['gpt-4-turbo', 'claude-3-opus'],
                  ['vercel', 'netlify']
                ].map((tools, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTools(tools)}
                    className="px-4 py-2 bg-white/10 border border-white/30 font-bold text-sm hover:bg-white/20"
                  >
                    {toolsDatabase.find(t => t.id === tools[0])?.name} vs {toolsDatabase.find(t => t.id === tools[1])?.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
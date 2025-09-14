'use client'

import { useState, useMemo } from 'react'
import { APIModel } from '@/data/api-models-complete'
import { 
  ChevronDown, ChevronUp, Info, DollarSign, 
  Zap, Brain, Eye, Code, Mic, FileText, Hash,
  TrendingUp, AlertCircle, Check, X
} from 'lucide-react'

interface APIComparisonTableProps {
  models: APIModel[]
}

export default function APIComparisonTable({ models }: APIComparisonTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set())
  const [selectedModels, setSelectedModels] = useState<Set<string>>(new Set())
  const [comparisonMode, setComparisonMode] = useState(false)
  const [sortConfig, setSortConfig] = useState<{
    key: keyof APIModel | 'costPer1M'
    direction: 'asc' | 'desc'
  }>({ key: 'name', direction: 'asc' })

  // Calculate cost per 1M tokens
  const calculateCostPer1M = (model: APIModel) => {
    if (!model.pricing) return 0
    const inputCost = (model.pricing.input || 0) * 1000
    const outputCost = (model.pricing.output || 0) * 1000
    return inputCost + outputCost
  }

  // Sort models
  const sortedModels = useMemo(() => {
    const sorted = [...models].sort((a, b) => {
      let aVal: any, bVal: any
      
      if (sortConfig.key === 'costPer1M') {
        aVal = calculateCostPer1M(a)
        bVal = calculateCostPer1M(b)
      } else if (sortConfig.key === 'contextLength') {
        aVal = a.contextLength || 0
        bVal = b.contextLength || 0
      } else if (sortConfig.key === 'pricing') {
        aVal = a.pricing?.input || 0
        bVal = b.pricing?.input || 0
      } else {
        aVal = a[sortConfig.key] || ''
        bVal = b[sortConfig.key] || ''
      }
      
      if (typeof aVal === 'string') {
        return sortConfig.direction === 'asc' 
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal)
      }
      
      return sortConfig.direction === 'asc' 
        ? aVal - bVal
        : bVal - aVal
    })
    
    return sorted
  }, [models, sortConfig])

  // Filter models for comparison
  const comparisonModels = comparisonMode 
    ? sortedModels.filter(m => selectedModels.has(`${m.provider}-${m.name}`))
    : sortedModels

  const toggleExpanded = (modelId: string) => {
    const newExpanded = new Set(expandedRows)
    if (newExpanded.has(modelId)) {
      newExpanded.delete(modelId)
    } else {
      newExpanded.add(modelId)
    }
    setExpandedRows(newExpanded)
  }

  const toggleSelected = (modelId: string) => {
    const newSelected = new Set(selectedModels)
    if (newSelected.has(modelId)) {
      newSelected.delete(modelId)
    } else {
      newSelected.add(modelId)
    }
    setSelectedModels(newSelected)
  }

  const handleSort = (key: keyof APIModel | 'costPer1M') => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  const formatContextLength = (length?: number): string => {
    if (!length) return 'N/A'
    if (length >= 1000000) return `${Math.floor(length / 100000) / 10}M`
    if (length >= 1000) return `${Math.floor(length / 1000)}K`
    return length.toString()
  }

  const formatPrice = (price?: number, per1K = false): string => {
    if (!price) return 'Free'
    if (per1K) {
      return `$${Math.floor(price * 1000000) / 1000}`
    }
    return price < 0.001 ? `$${Math.floor(price * 10000000) / 10000}/K` : `$${Math.floor(price * 10000) / 10000}`
  }

  const getStatusBadge = (status: string) => {
    const colors = {
      'available': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      'beta': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
      'preview': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      'deprecated': 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
      'coming-soon': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
    }
    return colors[status as keyof typeof colors] || colors.available
  }

  const getCapabilityIcon = (capability: string) => {
    const lower = capability.toLowerCase()
    if (lower.includes('vision') || lower.includes('image')) return <Eye className="w-3 h-3" />
    if (lower.includes('code')) return <Code className="w-3 h-3" />
    if (lower.includes('audio') || lower.includes('speech')) return <Mic className="w-3 h-3" />
    if (lower.includes('reason')) return <Brain className="w-3 h-3" />
    if (lower.includes('fast')) return <Zap className="w-3 h-3" />
    return <FileText className="w-3 h-3" />
  }

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setComparisonMode(!comparisonMode)}
            className={`px-4 py-2 font-black text-sm border-4 border-black dark:border-white transition-all ${
              comparisonMode 
                ? 'bg-purple-500 text-white' 
                : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900'
            }`}
          >
            {comparisonMode ? 'EXIT COMPARISON' : 'COMPARE MODELS'}
          </button>
          {comparisonMode && (
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900">
              <span className="font-bold text-sm">
                {selectedModels.size} models selected
              </span>
              {selectedModels.size > 0 && (
                <button
                  onClick={() => setSelectedModels(new Set())}
                  className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline"
                >
                  CLEAR ALL
                </button>
              )}
            </div>
          )}
        </div>
        
        <div className="text-sm font-mono opacity-60">
          {comparisonModels.length} models
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border-4 border-black dark:border-white">
        <table className="w-full">
          <thead className="bg-black text-white dark:bg-white dark:text-black">
            <tr>
              {!comparisonMode && (
                <th className="p-3 text-left">
                  <span className="font-black text-xs">SELECT</span>
                </th>
              )}
              <th className="p-3 text-left cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200"
                  onClick={() => handleSort('provider')}>
                <span className="font-black text-xs flex items-center gap-1">
                  PROVIDER
                  {sortConfig.key === 'provider' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                  )}
                </span>
              </th>
              <th className="p-3 text-left cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200"
                  onClick={() => handleSort('name')}>
                <span className="font-black text-xs flex items-center gap-1">
                  MODEL
                  {sortConfig.key === 'name' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                  )}
                </span>
              </th>
              <th className="p-3 text-left cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200"
                  onClick={() => handleSort('contextLength')}>
                <span className="font-black text-xs flex items-center gap-1">
                  CONTEXT
                  {sortConfig.key === 'contextLength' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                  )}
                </span>
              </th>
              <th className="p-3 text-left cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200"
                  onClick={() => handleSort('pricing')}>
                <span className="font-black text-xs flex items-center gap-1">
                  INPUT $/1K
                  {sortConfig.key === 'pricing' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                  )}
                </span>
              </th>
              <th className="p-3 text-left">
                <span className="font-black text-xs">OUTPUT $/1K</span>
              </th>
              <th className="p-3 text-left cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200"
                  onClick={() => handleSort('costPer1M')}>
                <span className="font-black text-xs flex items-center gap-1">
                  COST/1M
                  {sortConfig.key === 'costPer1M' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                  )}
                </span>
              </th>
              <th className="p-3 text-left">
                <span className="font-black text-xs">STATUS</span>
              </th>
              <th className="p-3 text-center">
                <span className="font-black text-xs">DETAILS</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonModels.map((model, idx) => {
              const modelId = `${model.provider}-${model.name}`
              const isExpanded = expandedRows.has(modelId)
              const isSelected = selectedModels.has(modelId)
              const costPer1M = calculateCostPer1M(model)
              
              return (
                <React.Fragment key={modelId}>
                  <tr className={`border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-950 ${
                    isSelected ? 'bg-purple-50 dark:bg-purple-950' : ''
                  }`}>
                    {!comparisonMode && (
                      <td className="p-3">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelected(modelId)}
                          className="w-4 h-4 accent-purple-500"
                        />
                      </td>
                    )}
                    <td className="p-3">
                      <span className="font-bold text-xs opacity-60">
                        {model.provider}
                      </span>
                    </td>
                    <td className="p-3">
                      <div>
                        <div className="font-black">{model.name}</div>
                        {model.modelId && (
                          <div className="text-xs font-mono opacity-50 mt-1">
                            {model.modelId}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="font-mono text-sm font-bold">
                        {formatContextLength(model.contextLength)}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="font-mono text-sm text-green-600 dark:text-green-400">
                        {model.pricing?.input ? formatPrice(model.pricing.input, true) : 'Free'}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="font-mono text-sm text-orange-600 dark:text-orange-400">
                        {model.pricing?.output ? formatPrice(model.pricing.output, true) : 'Free'}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="font-mono text-sm font-bold text-purple-600 dark:text-purple-400">
                        {costPer1M > 0 ? `$${Math.floor(costPer1M * 100) / 100}` : 'Free'}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${getStatusBadge(model.status)}`}>
                        {model.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => toggleExpanded(modelId)}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </td>
                  </tr>
                  
                  {/* Expanded Details Row */}
                  {isExpanded && (
                    <tr className="bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
                      <td colSpan={comparisonMode ? 9 : 10} className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Description */}
                          <div>
                            <h4 className="font-black text-sm mb-2">DESCRIPTION</h4>
                            <p className="text-sm opacity-70">{model.description}</p>
                            
                            {model.releaseDate && (
                              <div className="mt-4">
                                <h4 className="font-black text-sm mb-2">RELEASE DATE</h4>
                                <p className="text-sm font-mono opacity-70">{model.releaseDate}</p>
                              </div>
                            )}
                          </div>
                          
                          {/* Capabilities */}
                          <div>
                            <h4 className="font-black text-sm mb-2">CAPABILITIES</h4>
                            {model.capabilities && model.capabilities.length > 0 ? (
                              <div className="flex flex-wrap gap-2">
                                {model.capabilities.map((cap, capIdx) => (
                                  <span
                                    key={capIdx}
                                    className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-bold"
                                  >
                                    {getCapabilityIcon(cap)}
                                    {cap}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <p className="text-sm opacity-50">No capabilities listed</p>
                            )}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="mt-6 flex gap-3">
                          <button className="px-4 py-2 bg-purple-500 text-white font-black text-sm hover:bg-purple-600">
                            VIEW DOCUMENTATION →
                          </button>
                          <button className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black font-black text-sm hover:bg-green-500 hover:text-white">
                            TRY IN PLAYGROUND
                          </button>
                          <button className="px-4 py-2 border-2 border-black dark:border-white font-black text-sm hover:bg-gray-100 dark:hover:bg-gray-900">
                            COPY MODEL ID
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
      </div>
      
      {/* No Results */}
      {comparisonModels.length === 0 && (
        <div className="text-center py-12">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p className="text-2xl font-black mb-2">NO MODELS TO DISPLAY</p>
          <p className="opacity-60">
            {comparisonMode ? 'Select models to compare' : 'No models match your criteria'}
          </p>
        </div>
      )}
    </div>
  )
}

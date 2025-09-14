'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Volume2, Thermometer, Lightbulb, Users,
  Headphones, Coffee, Laptop, Wifi,
  TreePine, Home, Building, Clock,
  TrendingUp, TrendingDown, Minus
} from 'lucide-react'

interface EnvironmentalFactor {
  id: string
  name: string
  category: 'audio' | 'visual' | 'thermal' | 'social' | 'ergonomic'
  icon: React.ReactNode
  impact: 'positive' | 'negative' | 'neutral'
  productivity: number
  focus: number
  creativity: number
  stressLevel: number
  description: string
  optimalRange: string
  tips: string[]
  research: string
}

const environmentalFactors: EnvironmentalFactor[] = [
  {
    id: 'background-music',
    name: 'Background Music',
    category: 'audio',
    icon: <Volume2 className="w-5 h-5" />,
    impact: 'positive',
    productivity: 15,
    focus: 8,
    creativity: 25,
    stressLevel: -20,
    description: 'Instrumental music can enhance cognitive performance and mood',
    optimalRange: '60-70 dB, instrumental genres',
    tips: ['Use lyric-free music', 'Match tempo to task complexity', 'Nature sounds for focus'],
    research: '13% productivity increase with ambient music (University of Windsor study)'
  },
  {
    id: 'noise-cancellation',
    name: 'Noise Cancellation',
    category: 'audio',
    icon: <Headphones className="w-5 h-5" />,
    impact: 'positive',
    productivity: 25,
    focus: 35,
    creativity: 10,
    stressLevel: -30,
    description: 'Eliminating distracting noise significantly improves concentration',
    optimalRange: '30-40 dB ambient noise level',
    tips: ['Quality noise-canceling headphones', 'White or brown noise', 'Consistent audio environment'],
    research: '66% improvement in complex cognitive tasks with noise reduction'
  },
  {
    id: 'temperature',
    name: 'Room Temperature',
    category: 'thermal',
    icon: <Thermometer className="w-5 h-5" />,
    impact: 'neutral',
    productivity: 20,
    focus: 15,
    creativity: 5,
    stressLevel: -10,
    description: 'Optimal temperature range critical for cognitive performance',
    optimalRange: '68-72°F (20-22°C)',
    tips: ['Personal climate control', 'Layer clothing options', 'Monitor room humidity'],
    research: '10% productivity loss for every 2°F outside optimal range'
  },
  {
    id: 'natural-light',
    name: 'Natural Light',
    category: 'visual',
    icon: <Lightbulb className="w-5 h-5" />,
    impact: 'positive',
    productivity: 18,
    focus: 22,
    creativity: 15,
    stressLevel: -25,
    description: 'Natural light regulates circadian rhythms and boosts alertness',
    optimalRange: '500-1000 lux daylight exposure',
    tips: ['Position screen perpendicular to windows', 'Use daylight-balanced LED', 'Take outdoor breaks'],
    research: '84% of workers report natural light improves mood and energy'
  },
  {
    id: 'open-office',
    name: 'Open Office',
    category: 'social',
    icon: <Building className="w-5 h-5" />,
    impact: 'negative',
    productivity: -25,
    focus: -40,
    creativity: 5,
    stressLevel: 35,
    description: 'Open offices create distractions but may facilitate collaboration',
    optimalRange: 'Mixed: private focus areas + collaboration spaces',
    tips: ['Use visual barriers', 'Implement quiet hours', 'Book private rooms for deep work'],
    research: '70% more interruptions in open offices, 50% longer task completion'
  },
  {
    id: 'remote-home',
    name: 'Remote/Home',
    category: 'social',
    icon: <Home className="w-5 h-5" />,
    impact: 'positive',
    productivity: 22,
    focus: 30,
    creativity: 12,
    stressLevel: -15,
    description: 'Home environment offers control and comfort but may lack structure',
    optimalRange: 'Dedicated workspace with minimal distractions',
    tips: ['Separate work area', 'Establish boundaries', 'Maintain social connections'],
    research: '25% productivity increase for remote workers with proper setup'
  },
  {
    id: 'plants-nature',
    name: 'Plants & Nature',
    category: 'visual',
    icon: <TreePine className="w-5 h-5" />,
    impact: 'positive',
    productivity: 12,
    focus: 18,
    creativity: 20,
    stressLevel: -22,
    description: 'Natural elements reduce stress and improve cognitive function',
    optimalRange: '1 plant per 100 sq ft minimum',
    tips: ['Add live plants to workspace', 'Nature views from window', 'Natural materials and textures'],
    research: '15% increase in well-being and productivity with plants in workspace'
  },
  {
    id: 'ergonomic-setup',
    name: 'Ergonomic Setup',
    category: 'ergonomic',
    icon: <Laptop className="w-5 h-5" />,
    impact: 'positive',
    productivity: 20,
    focus: 15,
    creativity: 5,
    stressLevel: -18,
    description: 'Proper ergonomics prevent fatigue and maintain concentration',
    optimalRange: 'Monitor at eye level, 90° elbow angle',
    tips: ['Adjustable desk and chair', 'External keyboard/mouse', 'Regular posture breaks'],
    research: '17% productivity improvement with ergonomic interventions'
  }
]

const categories = {
  audio: { name: 'Audio Environment', color: 'text-cyan-400', bgColor: 'bg-cyan-500/10' },
  visual: { name: 'Visual Environment', color: 'text-green-400', bgColor: 'bg-green-500/10' },
  thermal: { name: 'Thermal Comfort', color: 'text-orange-400', bgColor: 'bg-orange-500/10' },
  social: { name: 'Social Context', color: 'text-purple-400', bgColor: 'bg-purple-500/10' },
  ergonomic: { name: 'Physical Setup', color: 'text-blue-400', bgColor: 'bg-blue-500/10' }
}

export default function EnvironmentalFactors() {
  const [selectedFactor, setSelectedFactor] = useState<EnvironmentalFactor | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredFactors = selectedCategory === 'all'
    ? environmentalFactors
    : environmentalFactors.filter(f => f.category === selectedCategory)

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'positive': return <TrendingUp className="w-4 h-4 text-green-400" />
      case 'negative': return <TrendingDown className="w-4 h-4 text-red-400" />
      default: return <Minus className="w-4 h-4 text-yellow-400" />
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'positive': return 'border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10'
      case 'negative': return 'border-red-500/30 bg-gradient-to-br from-red-500/10 to-orange-500/10'
      default: return 'border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-amber-500/10'
    }
  }

  return (
    <div className="my-12 p-8 bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/30 rounded-xl">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-cyan-400 mb-2">Environmental Impact on Coding Performance</h3>
        <p className="text-gray-300">
          Research-backed analysis of how your environment affects productivity, focus, and creativity
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedCategory === 'all'
              ? 'bg-cyan-500/20 border border-cyan-500 text-cyan-400'
              : 'bg-gray-800/50 border border-gray-600 text-gray-400 hover:text-white'
          }`}
        >
          All Factors
        </button>
        {Object.entries(categories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === key
                ? `${category.bgColor} border border-current ${category.color}`
                : 'bg-gray-800/50 border border-gray-600 text-gray-400 hover:text-white'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Factors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <AnimatePresence mode="wait">
          {filteredFactors.map((factor, index) => {
            const categoryInfo = categories[factor.category]
            const isSelected = selectedFactor?.id === factor.id

            return (
              <motion.div
                key={factor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className={`
                  cursor-pointer rounded-lg border-2 p-4 transition-all duration-300
                  ${getImpactColor(factor.impact)}
                  ${isSelected ? 'ring-2 ring-cyan-400/50 scale-105' : 'hover:scale-102'}
                `}
                onClick={() => setSelectedFactor(isSelected ? null : factor)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-lg ${categoryInfo.bgColor}`}>
                    <div className={categoryInfo.color}>
                      {factor.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    {getImpactIcon(factor.impact)}
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-bold text-white mb-2">{factor.name}</h4>
                <p className="text-xs text-gray-400 mb-3 line-clamp-2">{factor.description}</p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400">
                      {factor.productivity > 0 ? '+' : ''}{factor.productivity}%
                    </div>
                    <div className="text-xs text-gray-400">Productivity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">
                      {factor.focus > 0 ? '+' : ''}{factor.focus}%
                    </div>
                    <div className="text-xs text-gray-400">Focus</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Detailed View */}
      <AnimatePresence>
        {selectedFactor && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-black/60 border border-gray-700 rounded-lg p-6 overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-lg ${categories[selectedFactor.category].bgColor}`}>
                <div className={categories[selectedFactor.category].color}>
                  {selectedFactor.icon}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{selectedFactor.name}</h4>
                <p className="text-sm text-gray-400">{categories[selectedFactor.category].name}</p>
              </div>
              <div className="ml-auto">
                {getImpactIcon(selectedFactor.impact)}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Performance Metrics */}
              <div>
                <h5 className="text-lg font-semibold text-cyan-400 mb-4">Performance Impact</h5>

                <div className="space-y-4">
                  {[
                    { label: 'Productivity', value: selectedFactor.productivity, color: 'cyan' },
                    { label: 'Focus', value: selectedFactor.focus, color: 'purple' },
                    { label: 'Creativity', value: selectedFactor.creativity, color: 'green' },
                    { label: 'Stress Reduction', value: Math.abs(selectedFactor.stressLevel), color: 'orange' }
                  ].map((metric) => (
                    <div key={metric.label} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">{metric.label}</span>
                        <span className={`text-sm font-medium text-${metric.color}-400`}>
                          {metric.value > 0 ? '+' : ''}{metric.value}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r from-${metric.color}-400 to-${metric.color}-500`}
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.abs(metric.value)}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="font-semibold text-blue-400">Research Finding</span>
                  </div>
                  <p className="text-sm text-gray-300">{selectedFactor.research}</p>
                </div>
              </div>

              {/* Tips and Optimization */}
              <div>
                <h5 className="text-lg font-semibold text-purple-400 mb-4">Optimization Tips</h5>

                <div className="mb-6">
                  <h6 className="text-sm font-medium text-green-400 mb-2">Optimal Range</h6>
                  <p className="text-sm text-gray-300 bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    {selectedFactor.optimalRange}
                  </p>
                </div>

                <div>
                  <h6 className="text-sm font-medium text-yellow-400 mb-3">Implementation Tips</h6>
                  <div className="space-y-2">
                    {selectedFactor.tips.map((tip, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{tip}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Summary Stats */}
      <div className="mt-8 grid md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4 text-center">
          <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <div className="text-lg font-bold text-green-400">
            {environmentalFactors.filter(f => f.impact === 'positive').length}
          </div>
          <div className="text-sm text-gray-400">Positive Factors</div>
        </div>

        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-lg p-4 text-center">
          <TrendingDown className="w-6 h-6 text-red-400 mx-auto mb-2" />
          <div className="text-lg font-bold text-red-400">
            {environmentalFactors.filter(f => f.impact === 'negative').length}
          </div>
          <div className="text-sm text-gray-400">Negative Factors</div>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-4 text-center">
          <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
          <div className="text-lg font-bold text-cyan-400">25%</div>
          <div className="text-sm text-gray-400">Max Productivity Gain</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
          <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <div className="text-lg font-bold text-purple-400">40%</div>
          <div className="text-sm text-gray-400">Focus Improvement</div>
        </div>
      </div>
    </div>
  )
}
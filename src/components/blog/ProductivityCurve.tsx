'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Coffee, Zap, Battery, Sunset, Clock } from 'lucide-react'

interface TimeSlot {
  hour: number
  time: string
  productivity: number
  energy: number
  focus: number
  label: string
  icon: React.ReactNode
  description: string
  color: string
  gradient: string
  vibeFactors: string[]
}

const productivityData: TimeSlot[] = [
  {
    hour: 6,
    time: '6 AM',
    productivity: 45,
    energy: 60,
    focus: 40,
    label: 'Early Bird',
    icon: <Sun className="w-4 h-4" />,
    description: 'Natural awakening, cortisol peak begins',
    color: 'text-orange-400',
    gradient: 'from-orange-400/20 to-yellow-400/20',
    vibeFactors: ['Natural light', 'Quiet environment', 'Fresh mind']
  },
  {
    hour: 8,
    time: '8 AM',
    productivity: 70,
    energy: 85,
    focus: 75,
    label: 'Morning Peak',
    icon: <Coffee className="w-4 h-4" />,
    description: 'Cortisol at peak, optimal cognitive function',
    color: 'text-amber-400',
    gradient: 'from-amber-400/20 to-orange-400/20',
    vibeFactors: ['Caffeine boost', 'Clear goals', 'No distractions']
  },
  {
    hour: 10,
    time: '10 AM',
    productivity: 90,
    energy: 95,
    focus: 95,
    label: 'Flow Zone',
    icon: <Zap className="w-4 h-4" />,
    description: 'Peak cognitive performance window',
    color: 'text-cyan-400',
    gradient: 'from-cyan-400/30 to-blue-400/30',
    vibeFactors: ['Optimal alertness', 'Problem-solving peak', 'Deep work ready']
  },
  {
    hour: 12,
    time: '12 PM',
    productivity: 75,
    energy: 80,
    focus: 70,
    label: 'Pre-Lunch',
    icon: <Sun className="w-4 h-4" />,
    description: 'Slight decline as body prepares for midday break',
    color: 'text-yellow-400',
    gradient: 'from-yellow-400/20 to-green-400/20',
    vibeFactors: ['Hunger starts', 'Social energy', 'Review time']
  },
  {
    hour: 14,
    time: '2 PM',
    productivity: 45,
    energy: 50,
    focus: 40,
    label: 'Post-Lunch Dip',
    icon: <Battery className="w-4 h-4" />,
    description: 'Natural circadian low, adenosine buildup',
    color: 'text-red-400',
    gradient: 'from-red-400/20 to-orange-400/20',
    vibeFactors: ['Energy crash', 'Reduced focus', 'Need movement']
  },
  {
    hour: 16,
    time: '4 PM',
    productivity: 80,
    energy: 85,
    focus: 85,
    label: 'Afternoon Rally',
    icon: <Zap className="w-4 h-4" />,
    description: 'Second wave of alertness and creativity',
    color: 'text-purple-400',
    gradient: 'from-purple-400/20 to-pink-400/20',
    vibeFactors: ['Creative surge', 'Problem solving', 'Collaboration peak']
  },
  {
    hour: 18,
    time: '6 PM',
    productivity: 60,
    energy: 65,
    focus: 55,
    label: 'Wind Down',
    icon: <Sunset className="w-4 h-4" />,
    description: 'Gradual decline as day ends',
    color: 'text-orange-400',
    gradient: 'from-orange-400/20 to-red-400/20',
    vibeFactors: ['Wrap-up tasks', 'Documentation', 'Planning ahead']
  },
  {
    hour: 20,
    time: '8 PM',
    productivity: 35,
    energy: 40,
    focus: 30,
    label: 'Evening Low',
    icon: <Moon className="w-4 h-4" />,
    description: 'Melatonin production begins, focus wanes',
    color: 'text-indigo-400',
    gradient: 'from-indigo-400/20 to-purple-400/20',
    vibeFactors: ['Routine tasks only', 'Reflection time', 'Personal projects']
  }
]

export default function ProductivityCurve() {
  const [selectedHour, setSelectedHour] = useState<TimeSlot | null>(null)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const maxProductivity = Math.max(...productivityData.map(d => d.productivity))

  return (
    <div className="my-12 p-8 bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/30 rounded-xl">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-cyan-400 mb-2">Developer Productivity Throughout the Day</h3>
        <p className="text-gray-300">
          Based on circadian rhythm research and cognitive performance studies
        </p>
      </div>

      {/* Chart Area */}
      <div className="relative mb-8">
        {/* Chart Background */}
        <div className="h-80 bg-black/30 rounded-lg border border-gray-700 p-6 overflow-hidden">
          {/* Y-axis labels */}
          <div className="absolute left-2 top-6 bottom-6 flex flex-col justify-between text-xs text-gray-400">
            <span>100%</span>
            <span>75%</span>
            <span>50%</span>
            <span>25%</span>
            <span>0%</span>
          </div>

          {/* Grid lines */}
          <div className="absolute left-12 right-6 top-6 bottom-6">
            {[0, 25, 50, 75, 100].map((percentage) => (
              <div
                key={percentage}
                className="absolute w-full border-t border-gray-800/50"
                style={{ bottom: `${percentage}%` }}
              />
            ))}
          </div>

          {/* Chart content */}
          <div className="ml-10 mr-4 h-full relative">
            {/* SVG for smooth curves */}
            <svg className="absolute inset-0 w-full h-full" style={{ height: '100%' }}>
              <defs>
                <linearGradient id="productivityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="energyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Productivity curve */}
              {animationComplete && (
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d={`M ${productivityData.map((d, i) =>
                    `${(i / (productivityData.length - 1)) * 100}% ${100 - d.productivity}%`
                  ).join(' L ')}`}
                  fill="url(#productivityGradient)"
                  stroke="#06b6d4"
                  strokeWidth="3"
                  className="drop-shadow-glow"
                />
              )}

              {/* Energy curve */}
              {animationComplete && (
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                  d={`M ${productivityData.map((d, i) =>
                    `${(i / (productivityData.length - 1)) * 100}% ${100 - d.energy}%`
                  ).join(' L ')}`}
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              )}
            </svg>

            {/* Data points */}
            {productivityData.map((timeSlot, index) => (
              <motion.div
                key={timeSlot.hour}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${(index / (productivityData.length - 1)) * 100}%`,
                  bottom: `${timeSlot.productivity}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + 1, duration: 0.3 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedHour(selectedHour?.hour === timeSlot.hour ? null : timeSlot)}
              >
                <div className={`
                  w-12 h-12 rounded-full border-2 border-cyan-400 bg-gradient-to-br ${timeSlot.gradient}
                  flex items-center justify-center backdrop-blur-sm
                  ${selectedHour?.hour === timeSlot.hour ? 'ring-4 ring-cyan-400/50' : ''}
                  transition-all duration-300
                `}>
                  <div className={timeSlot.color}>
                    {timeSlot.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-12 right-6 flex justify-between text-xs text-gray-400 pb-2">
            {productivityData.map((timeSlot) => (
              <span key={timeSlot.hour}>{timeSlot.time}</span>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-cyan-400" />
            <span className="text-sm text-cyan-400">Productivity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-purple-400 border-dashed" />
            <span className="text-sm text-purple-400">Energy Level</span>
          </div>
        </div>
      </div>

      {/* Time Slot Details */}
      {selectedHour && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/60 border border-gray-700 rounded-lg p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={selectedHour.color}>
              {selectedHour.icon}
            </div>
            <h4 className={`text-xl font-bold ${selectedHour.color}`}>
              {selectedHour.time} - {selectedHour.label}
            </h4>
            <div className="ml-auto">
              <Clock className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          <p className="text-gray-300 mb-6">{selectedHour.description}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Metrics */}
            <div className="space-y-4">
              <h5 className="text-sm font-semibold text-cyan-400 mb-3">Performance Metrics</h5>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Productivity</span>
                    <span className="text-sm font-medium text-cyan-400">{selectedHour.productivity}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedHour.productivity}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Energy</span>
                    <span className="text-sm font-medium text-purple-400">{selectedHour.energy}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedHour.energy}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Focus</span>
                    <span className="text-sm font-medium text-green-400">{selectedHour.focus}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedHour.focus}%` }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Vibe Factors */}
            <div className="md:col-span-2">
              <h5 className="text-sm font-semibold text-purple-400 mb-3">Optimal Vibe Factors</h5>
              <div className="grid grid-cols-1 gap-3">
                {selectedHour.vibeFactors.map((factor, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                    <span className="text-gray-300">{factor}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Key Insights */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold text-cyan-400">Peak Hours</span>
          </div>
          <p className="text-sm text-gray-300">
            10 AM and 4 PM show highest productivity. Plan complex tasks during these windows.
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Battery className="w-5 h-5 text-red-400" />
            <span className="font-semibold text-red-400">Danger Zone</span>
          </div>
          <p className="text-sm text-gray-300">
            2 PM post-lunch dip affects 87% of developers. Use this time for routine tasks.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Sun className="w-5 h-5 text-purple-400" />
            <span className="font-semibold text-purple-400">Natural Rhythms</span>
          </div>
          <p className="text-sm text-gray-300">
            Aligning with circadian rhythms can boost productivity by up to 40%.
          </p>
        </div>
      </div>
    </div>
  )
}
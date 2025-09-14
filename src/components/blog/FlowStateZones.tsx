'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Zap, Target, Timer, AlertTriangle, Coffee } from 'lucide-react'

interface FlowZone {
  id: string
  name: string
  description: string
  skillLevel: number
  challengeLevel: number
  color: string
  gradient: string
  icon: React.ReactNode
  characteristics: string[]
  productivity: number
}

const flowZones: FlowZone[] = [
  {
    id: 'anxiety',
    name: 'Anxiety Zone',
    description: 'High challenge, low skill - overwhelming and stressful',
    skillLevel: 30,
    challengeLevel: 85,
    color: 'text-red-400',
    gradient: 'from-red-500/20 to-orange-500/20',
    icon: <AlertTriangle className="w-5 h-5" />,
    characteristics: ['Stress', 'Confusion', 'Overwhelm', 'Frustration'],
    productivity: 25
  },
  {
    id: 'flow',
    name: 'Flow Zone',
    description: 'Perfect balance of challenge and skill - optimal performance',
    skillLevel: 75,
    challengeLevel: 75,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500/30 to-purple-500/30',
    icon: <Zap className="w-5 h-5" />,
    characteristics: ['Deep focus', 'Time distortion', 'Effortless action', '500% productivity'],
    productivity: 100
  },
  {
    id: 'boredom',
    name: 'Boredom Zone',
    description: 'Low challenge, high skill - understimulating',
    skillLevel: 85,
    challengeLevel: 30,
    color: 'text-gray-400',
    gradient: 'from-gray-500/20 to-slate-500/20',
    icon: <Coffee className="w-5 h-5" />,
    characteristics: ['Disengagement', 'Mind wandering', 'Lack of motivation', 'Routine'],
    productivity: 40
  },
  {
    id: 'apathy',
    name: 'Apathy Zone',
    description: 'Low challenge, low skill - disengagement',
    skillLevel: 25,
    challengeLevel: 25,
    color: 'text-slate-500',
    gradient: 'from-slate-600/20 to-gray-600/20',
    icon: <Timer className="w-5 h-5" />,
    characteristics: ['Passive', 'Uninvolved', 'Low energy', 'Indifference'],
    productivity: 15
  },
  {
    id: 'arousal',
    name: 'Arousal Zone',
    description: 'High challenge, very high skill - near flow state',
    skillLevel: 85,
    challengeLevel: 90,
    color: 'text-yellow-400',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    icon: <Target className="w-5 h-5" />,
    characteristics: ['High focus', 'Slight anxiety', 'Engaged', 'Need more skill'],
    productivity: 75
  },
  {
    id: 'control',
    name: 'Control Zone',
    description: 'Moderate challenge, high skill - controlled performance',
    skillLevel: 90,
    challengeLevel: 60,
    color: 'text-green-400',
    gradient: 'from-green-500/20 to-emerald-500/20',
    icon: <Brain className="w-5 h-5" />,
    characteristics: ['Confidence', 'Control', 'Need more challenge', 'Comfortable'],
    productivity: 65
  }
]

export default function FlowStateZones() {
  const [selectedZone, setSelectedZone] = useState<FlowZone | null>(null)
  const [hoveredZone, setHoveredZone] = useState<string | null>(null)

  return (
    <div className="my-12 p-8 bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/30 rounded-xl">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-cyan-400 mb-2">The Flow State Matrix</h3>
        <p className="text-gray-300">
          Understanding the relationship between challenge and skill levels in achieving optimal performance
        </p>
      </div>

      {/* Interactive Matrix */}
      <div className="relative mb-8">
        <div className="grid grid-cols-3 grid-rows-3 gap-2 h-96 w-full max-w-2xl mx-auto">
          {/* Background grid */}
          <div className="col-span-3 row-span-3 absolute inset-0 border-2 border-gray-700 rounded-lg">
            {/* Skill axis label */}
            <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 -rotate-90">
              <span className="text-sm text-gray-400 font-medium">SKILL LEVEL</span>
            </div>

            {/* Challenge axis label */}
            <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2">
              <span className="text-sm text-gray-400 font-medium">CHALLENGE LEVEL</span>
            </div>

            {/* Axis arrows */}
            <div className="absolute -left-8 top-2 text-gray-400">↑</div>
            <div className="absolute right-2 -bottom-8 text-gray-400">→</div>
          </div>

          {/* Zone positions based on skill vs challenge */}
          {flowZones.map((zone, index) => {
            const isHovered = hoveredZone === zone.id
            const isSelected = selectedZone?.id === zone.id

            return (
              <motion.div
                key={zone.id}
                className={`
                  absolute cursor-pointer p-4 rounded-lg border-2
                  bg-gradient-to-br ${zone.gradient}
                  transition-all duration-300
                  ${isHovered || isSelected ? 'scale-110 z-10' : 'scale-100'}
                  ${isSelected ? 'border-cyan-400' : 'border-transparent hover:border-gray-500'}
                `}
                style={{
                  left: `${(zone.challengeLevel / 100) * 85}%`,
                  bottom: `${(zone.skillLevel / 100) * 85}%`,
                  width: '80px',
                  height: '80px'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredZone(zone.id)}
                onMouseLeave={() => setHoveredZone(null)}
                onClick={() => setSelectedZone(selectedZone?.id === zone.id ? null : zone)}
              >
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className={zone.color}>
                    {zone.icon}
                  </div>
                  <span className={`text-xs font-medium mt-1 ${zone.color}`}>
                    {zone.name.split(' ')[0]}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Zone Details */}
      <AnimatePresence>
        {selectedZone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-black/60 border border-gray-700 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={selectedZone.color}>
                {selectedZone.icon}
              </div>
              <h4 className={`text-xl font-bold ${selectedZone.color}`}>
                {selectedZone.name}
              </h4>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-sm text-gray-400">Productivity:</span>
                <div className="w-20 bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${
                      selectedZone.productivity > 80 ? 'from-green-400 to-emerald-400' :
                      selectedZone.productivity > 60 ? 'from-yellow-400 to-orange-400' :
                      selectedZone.productivity > 40 ? 'from-orange-400 to-red-400' :
                      'from-red-400 to-red-500'
                    }`}
                    style={{ width: `${selectedZone.productivity}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-white">
                  {selectedZone.productivity}%
                </span>
              </div>
            </div>

            <p className="text-gray-300 mb-4">{selectedZone.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Characteristics</h5>
                <ul className="space-y-1">
                  {selectedZone.characteristics.map((char, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      {char}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-purple-400 mb-2">Zone Metrics</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Skill Level:</span>
                    <span className="text-white font-medium">{selectedZone.skillLevel}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Challenge Level:</span>
                    <span className="text-white font-medium">{selectedZone.challengeLevel}%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400 mb-4">
          Click on any zone to explore its characteristics and impact on coding performance
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {flowZones.slice(0, 3).map((zone) => (
            <div key={zone.id} className="flex items-center gap-2">
              <div className={zone.color}>
                {zone.icon}
              </div>
              <span className={`text-xs ${zone.color}`}>
                {zone.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
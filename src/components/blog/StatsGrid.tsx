import React, { memo } from 'react'
import { BarChart3 } from 'lucide-react'

interface StatItem {
  value: string | number
  label: string
  subtext?: string
  color?: 'blue' | 'purple' | 'green' | 'yellow' | 'red' | 'orange' | 'cyan'
}

interface StatsGridProps {
  title: string
  stats: StatItem[]
  columns?: 2 | 3 | 4
}

const colorStyles = {
  blue: 'border-blue-500/30 text-blue-400',
  purple: 'border-purple-500/30 text-purple-400',
  green: 'border-green-500/30 text-green-400',
  yellow: 'border-yellow-500/30 text-yellow-400',
  red: 'border-red-500/30 text-red-400',
  orange: 'border-orange-500/30 text-orange-400',
  cyan: 'border-cyan-500/30 text-cyan-400',
}

const StatsGrid = memo(({ title, stats, columns = 4 }: StatsGridProps) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }

  return (
    <div className="bg-black/50 from-gray-900 via-black to-blue-900/20 p-8 rounded-xl border border-blue-500/20 mb-12">
      <div className="flex items-center justify-center gap-3 mb-8">
        <BarChart3 className="w-6 h-6 text-blue-400" />
        <h3 className="text-2xl font-bold text-center text-blue-400">{title}</h3>
      </div>
      <div className={`grid ${gridCols[columns]} gap-4`}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-black/50 border ${
              colorStyles[stat.color || 'blue']
            } rounded-lg p-4 text-center transition-transform hover:scale-105`}
          >
            <div className={`text-4xl font-black mb-2 ${
              stat.color ? colorStyles[stat.color].split(' ')[1] : 'text-blue-400'
            }`}>
              {stat.value}
            </div>
            <p className="text-gray-300 font-bold">{stat.label}</p>
            {stat.subtext && (
              <p className="text-xs text-gray-400 mt-1">{stat.subtext}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
})

StatsGrid.displayName = 'StatsGrid'

export default StatsGrid
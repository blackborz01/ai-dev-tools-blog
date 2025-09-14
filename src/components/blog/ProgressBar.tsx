import React, { memo } from 'react'
import { TrendingUp } from 'lucide-react'

interface ProgressItem {
  label: string
  value: number
  maxValue: number
  unit?: string
  color?: string
}

interface ProgressBarProps {
  title: string
  items: ProgressItem[]
}

const ProgressBar = memo(({ title, items }: ProgressBarProps) => {
  return (
    <div className="bg-black/50 p-8 rounded-xl border border-cyan-500/20 mb-8">
      <div className="flex items-center justify-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-cyan-400" />
        <h4 className="text-xl font-bold text-center text-cyan-400">{title}</h4>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => {
          const percentage = (item.value / item.maxValue) * 100
          return (
            <div key={index} className="flex items-center gap-4">
              <div className="w-24 text-gray-300 text-sm font-bold">{item.label}</div>
              <div className="flex-1 bg-gray-800 rounded-full h-8 relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-end pr-2 transition-all duration-500"
                  style={{
                    width: `${percentage}%`,
                    background: item.color || undefined
                  }}
                >
                  <span className="text-xs font-bold text-white">
                    {item.value}{item.unit || ''}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
})

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
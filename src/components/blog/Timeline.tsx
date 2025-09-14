import React, { memo } from 'react'
import { Clock, CheckCircle } from 'lucide-react'

interface TimelineItem {
  time: string
  title: string
  items: string[]
  color?: 'green' | 'yellow' | 'orange' | 'cyan'
}

interface TimelineProps {
  title: string
  items: TimelineItem[]
}

const colorMap = {
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  orange: 'bg-orange-500',
  cyan: 'bg-cyan-500',
}

const textColorMap = {
  green: 'text-green-400',
  yellow: 'text-yellow-400',
  orange: 'text-orange-400',
  cyan: 'text-cyan-400',
}

const Timeline = memo(({ title, items }: TimelineProps) => {
  return (
    <div className="bg-black/50 p-8 rounded-xl border border-cyan-500/20 mb-8">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-cyan-400" />
        <h4 className="text-xl font-bold text-cyan-400">{title}</h4>
      </div>

      <div className="relative">
        <div className="absolute w-1 bg-gray-700 h-full left-6"></div>

        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className={`w-12 h-12 ${colorMap[item.color || 'green']} rounded-full flex items-center justify-center text-white font-bold z-10`}>
                {item.time}
              </div>
              <div className="flex-1">
                <h5 className={`font-bold ${textColorMap[item.color || 'green']}`}>
                  {item.title}
                </h5>
                <ul className="text-sm text-gray-300 mt-2 space-y-1">
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

Timeline.displayName = 'Timeline'

export default Timeline
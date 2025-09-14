import React, { memo } from 'react'
import { Zap } from 'lucide-react'

interface QuickAnswerProps {
  title: string
  content: string
  variant?: 'blue' | 'green' | 'orange' | 'purple' | 'cyan'
}

const variantStyles = {
  blue: 'border-blue-500/30 bg-black/50',
  green: 'border-green-500/30 bg-black/50',
  orange: 'border-orange-500/30 bg-black/50',
  purple: 'border-purple-500/30 bg-black/50',
  cyan: 'border-cyan-500/30 bg-black/50',
}

const variantTextColors = {
  blue: 'text-blue-400',
  green: 'text-green-400',
  orange: 'text-orange-400',
  purple: 'text-purple-400',
  cyan: 'text-cyan-400',
}

const QuickAnswer = memo(({ title, content, variant = 'blue' }: QuickAnswerProps) => {
  return (
    <div className={`rounded-lg p-6 mb-8 border ${variantStyles[variant]}`}>
      <div className="flex items-center gap-2 mb-3">
        <Zap className={`w-5 h-5 ${variantTextColors[variant]}`} />
        <h2 className={`text-xl font-bold ${variantTextColors[variant]}`}>
          {title}
        </h2>
      </div>
      <p className="text-gray-300 leading-relaxed">
        {content}
      </p>
    </div>
  )
})

QuickAnswer.displayName = 'QuickAnswer'

export default QuickAnswer
import React, { memo } from 'react'
import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react'

interface WarningBoxProps {
  title: string
  items?: string[]
  content?: string
  type?: 'warning' | 'info' | 'success' | 'error'
}

const typeConfig = {
  warning: {
    icon: AlertTriangle,
    borderColor: 'border-yellow-500/30',
    bgColor: 'bg-black/50',
    textColor: 'text-yellow-400',
    itemColor: 'text-yellow-400',
  },
  info: {
    icon: Info,
    borderColor: 'border-blue-500/30',
    bgColor: 'bg-black/50',
    textColor: 'text-blue-400',
    itemColor: 'text-blue-400',
  },
  success: {
    icon: CheckCircle,
    borderColor: 'border-green-500/30',
    bgColor: 'bg-black/50',
    textColor: 'text-green-400',
    itemColor: 'text-green-400',
  },
  error: {
    icon: XCircle,
    borderColor: 'border-red-500/30',
    bgColor: 'bg-black/50',
    textColor: 'text-red-400',
    itemColor: 'text-red-400',
  },
}

const WarningBox = memo(({ title, items, content, type = 'warning' }: WarningBoxProps) => {
  const config = typeConfig[type]
  const Icon = config.icon

  return (
    <div className={`${config.bgColor} border ${config.borderColor} rounded-lg p-6 mb-6`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${config.textColor} flex-shrink-0 mt-0.5`} />
        <div className="flex-1">
          <h3 className={`text-xl font-bold ${config.textColor} mb-4`}>{title}</h3>
          {content && (
            <p className="text-gray-300 mb-4">{content}</p>
          )}
          {items && items.length > 0 && (
            <ul className="space-y-3 text-gray-300">
              {items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className={`${config.itemColor} mr-2`}>•</span>
                  <div>{item}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
})

WarningBox.displayName = 'WarningBox'

export default WarningBox
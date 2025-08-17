'use client'

import { useState, useEffect } from 'react'
import { Activity, Star, Download, MessageSquare, TrendingUp, DollarSign } from 'lucide-react'

interface ActivityItem {
  id: number
  type: 'review' | 'signup' | 'save' | 'compare' | 'download'
  user: string
  action: string
  tool?: string
  value?: string
  time: string
  icon: React.ReactNode
}

export default function LiveActivityFeed() {
  const [activities, setActivities] = useState<ActivityItem[]>([])
  const [isLive, setIsLive] = useState(true)

  const names = ['Alex', 'Sarah', 'Mike', 'Emma', 'John', 'Lisa', 'David', 'Anna', 'Tom', 'Julia']
  const tools = ['Cursor', 'GitHub Copilot', 'Windsurf', 'Codeium', 'Claude', 'GPT-4', 'Tabnine']
  const actions = [
    { type: 'review', template: 'reviewed {tool}', icon: <Star className="w-4 h-4" /> },
    { type: 'signup', template: 'joined the community', icon: <TrendingUp className="w-4 h-4" /> },
    { type: 'save', template: 'saved ${value}/month with {tool}', icon: <DollarSign className="w-4 h-4" /> },
    { type: 'compare', template: 'compared {tool} vs GitHub Copilot', icon: <Activity className="w-4 h-4" /> },
    { type: 'download', template: 'downloaded {tool} guide', icon: <Download className="w-4 h-4" /> }
  ]

  const generateActivity = (): ActivityItem => {
    const action = actions[Math.floor(Math.random() * actions.length)]
    const user = names[Math.floor(Math.random() * names.length)]
    const tool = tools[Math.floor(Math.random() * tools.length)]
    const value = Math.floor(Math.random() * 300 + 50)
    
    let formattedAction = action.template
      .replace('{tool}', tool)
      .replace('{value}', value.toString())
    
    return {
      id: Date.now() + Math.random(),
      type: action.type as ActivityItem['type'],
      user,
      action: formattedAction,
      tool,
      value: action.type === 'save' ? `${value}` : undefined,
      time: 'just now',
      icon: action.icon
    }
  }

  useEffect(() => {
    // Initialize with some activities (reduced to 8 for better layout)
    const initial = Array.from({ length: 8 }, generateActivity)
    setActivities(initial)

    // Add new activity every 3-7 seconds
    const interval = setInterval(() => {
      if (isLive) {
        setActivities(prev => {
          const newActivity = generateActivity()
          const updated = [newActivity, ...prev].slice(0, 8) // Keep only 8 activities
          
          // Update times
          return updated.map((activity, index) => ({
            ...activity,
            time: index === 0 ? 'just now' : 
                  index === 1 ? '1m ago' :
                  index === 2 ? '2m ago' :
                  index === 3 ? '5m ago' :
                  index === 4 ? '10m ago' :
                  index === 5 ? '15m ago' :
                  index === 6 ? '30m ago' :
                  '45m ago'
          }))
        })
      }
    }, Math.random() * 4000 + 3000)

    return () => clearInterval(interval)
  }, [isLive])

  return (
    <div className="bg-white dark:bg-gray-900 border-4 border-black dark:border-white h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b-2 border-black/10 dark:border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-gray-400'}`} />
            <h3 className="font-black text-lg">LIVE ACTIVITY</h3>
          </div>
          <button
            onClick={() => setIsLive(!isLive)}
            className="px-3 py-1 text-xs font-bold border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            {isLive ? 'PAUSE' : 'RESUME'}
          </button>
        </div>
      </div>

      {/* Activity List - Scrollable */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={`flex items-start gap-2 p-2 border border-black/10 dark:border-white/10 ${
              index === 0 && isLive ? 'bg-lime-100 dark:bg-lime-900/20 animate-in slide-in-from-top duration-500' : ''
            }`}
          >
            {/* Icon */}
            <div className="p-1.5 bg-black text-white dark:bg-white dark:text-black flex-shrink-0">
              {activity.icon}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="font-bold text-xs">
                <span className="text-purple-600 dark:text-purple-400">{activity.user}</span>
                {' '}
                <span className="opacity-80">{activity.action}</span>
                {activity.type === 'review' && (
                  <span className="ml-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xs">★</span>
                    ))}
                  </span>
                )}
              </div>
              <div className="text-xs opacity-50 mt-0.5">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

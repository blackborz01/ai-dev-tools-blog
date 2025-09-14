'use client'

import React, { memo, useEffect, useState } from 'react'
import { ListTree, Clock, ChevronRight } from 'lucide-react'

interface TOCItem {
  id: string
  title: string
  level: number
  readTime?: number
}

interface BlogTOCProps {
  items: TOCItem[]
  title?: string
}

const BlogTOC = memo(({ items, title = "Table of Contents" }: BlogTOCProps) => {
  const [activeId, setActiveId] = useState<string>('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      // Find active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(items[i].id)
          break
        }
      }

      // Calculate progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / totalHeight) * 100
      setProgress(Math.min(100, Math.max(0, scrolled)))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const getIndentClass = (level: number) => {
    switch (level) {
      case 2: return 'pl-0'
      case 3: return 'pl-4'
      case 4: return 'pl-8'
      default: return 'pl-0'
    }
  }

  return (
    <div className="sticky top-24">
      <div className="bg-black/50 rounded-xl border border-cyan-500/20 p-6">
        <div className="flex items-center gap-2 mb-4">
          <ListTree className="w-5 h-5 text-cyan-400" />
          <h3 className="text-lg font-bold text-cyan-400">{title}</h3>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Reading Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* TOC Items */}
        <nav className="space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`
                w-full text-left transition-all duration-200
                ${getIndentClass(item.level)}
                ${activeId === item.id
                  ? 'text-cyan-400 font-semibold'
                  : 'text-gray-400 hover:text-gray-300'
                }
              `}
            >
              <div className="flex items-center gap-2 py-1">
                {activeId === item.id && (
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                )}
                <span className={`text-sm ${item.level === 2 ? 'font-medium' : ''}`}>
                  {item.title}
                </span>
                {item.readTime && (
                  <span className="text-xs text-gray-600 ml-auto flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.readTime}m
                  </span>
                )}
              </div>
            </button>
          ))}
        </nav>

        {/* Estimated time */}
        <div className="mt-4 pt-4 border-t border-gray-800">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Clock className="w-3 h-3" />
            <span>~{items.length * 2} min total read</span>
          </div>
        </div>
      </div>
    </div>
  )
})

BlogTOC.displayName = 'BlogTOC'

export default BlogTOC
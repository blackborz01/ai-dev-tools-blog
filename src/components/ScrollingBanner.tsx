'use client'

import { useEffect, useRef } from 'react'

const ScrollingBanner = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const announcements = [
    { type: 'NEW', text: 'GitHub Copilot X - 10x faster code completions', highlight: true },
    { type: 'TRENDING', text: 'Cursor IDE reaches 500K+ developers', highlight: false },
    { type: 'LAUNCH', text: 'OpenAI GPT-5 API with revolutionary capabilities', highlight: true },
    { type: 'UPDATE', text: 'MCP servers - Build custom AI tools in minutes', highlight: false },
    { type: 'ARTICLE', text: 'Why AI Makes Developers 19% Slower', highlight: false },
    { type: 'ALERT', text: 'AI Code Hallucinations - 48% Error Rate Crisis', highlight: true },
    { type: 'FIX', text: 'Cursor AI Memory Issues - 7 Proven Solutions', highlight: false },
    { type: 'INSIGHT', text: 'Context Blindness - AI Misses 65% of Requirements', highlight: false },
  ]

  // Duplicate for seamless loop
  const duplicatedAnnouncements = [...announcements, ...announcements]

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // Slower for premium feel

    const animate = () => {
      scrollPosition += scrollSpeed
      
      // Reset when scrolled halfway (seamless loop)
      const halfWidth = scrollElement.scrollWidth / 2
      if (scrollPosition >= halfWidth) {
        scrollPosition = 0
      }
      
      scrollElement.style.transform = `translateX(-${scrollPosition}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollElement.addEventListener('mouseenter', handleMouseEnter)
    scrollElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      if (scrollElement) {
        scrollElement.removeEventListener('mouseenter', handleMouseEnter)
        scrollElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Fade edges for seamless scroll */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />
      
      {/* Scrolling content */}
      <div className="py-1 relative">
        <div 
          ref={scrollRef}
          className="flex items-center whitespace-nowrap"
          style={{ willChange: 'transform' }}
        >
          {duplicatedAnnouncements.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 px-8 group cursor-pointer"
            >
              {/* Type badge */}
              <span 
                className={`
                  px-2.5 py-1 rounded-full text-xs font-bold tracking-wider
                  ${item.highlight 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-2 border-cyan-500/30' 
                    : 'bg-white/5 text-gray-500 border-2 border-white/20'
                  }
                `}
              >
                {item.type}
              </span>
              
              {/* Announcement text */}
              <span 
                className={`
                  text-base font-medium tracking-wide transition-all duration-300
                  ${item.highlight 
                    ? 'text-white group-hover:text-cyan-400' 
                    : 'text-gray-400 group-hover:text-white'
                  }
                `}
              >
                {item.text}
              </span>
              
              {/* Separator */}
              {index < duplicatedAnnouncements.length - 1 && (
                <span className="ml-8 text-gray-700">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrollingBanner

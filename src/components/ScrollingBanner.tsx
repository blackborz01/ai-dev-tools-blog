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
    <div className="relative w-full overflow-hidden my-12 rounded-2xl">
      {/* Premium dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900" />
      
      {/* Subtle animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.1) 25%, rgba(59, 130, 246, 0.1) 50%, rgba(6, 182, 212, 0.1) 75%, transparent 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 15s ease-in-out infinite'
        }}
      />
      
      {/* Noise texture for premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Premium glass effect */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/20" />
      
      {/* Top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Elegant fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10" />
      
      {/* Scrolling content */}
      <div className="py-4 relative z-20">
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
                  px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider
                  ${item.highlight 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/20' 
                    : 'bg-white/5 text-gray-500 border border-white/10'
                  }
                `}
              >
                {item.type}
              </span>
              
              {/* Announcement text */}
              <span 
                className={`
                  text-sm font-medium tracking-wide transition-all duration-300
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
      
      {/* Bottom highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-cyan-500/20 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-px h-8 bg-gradient-to-t from-cyan-500/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-px h-8 bg-gradient-to-t from-blue-500/20 to-transparent" />
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  )
}

export default ScrollingBanner

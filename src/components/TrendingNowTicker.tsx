'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  TrendingUp, Zap, Flame, Star, Activity, BarChart3, 
  ArrowUpRight, Sparkles, Code2, Brain, Cpu, Box
} from 'lucide-react'

const trendingItems = [
  {
    id: 1,
    name: "FILESYSTEM MCP",
    growth: "+67%",
    status: "NEW",
    icon: "✨",
    color: "text-lime-400",
    bgColor: "from-lime-400/20 to-green-400/20",
    link: "/trending/filesystem-mcp-server"
  },
  {
    id: 2,
    name: "SELENIUM MCP",
    growth: "+234%",
    status: "HOT",
    icon: "🔥",
    color: "text-orange-400",
    bgColor: "from-orange-400/20 to-red-400/20",
    link: "/trending/selenium-mcp"
  },
  {
    id: 3,
    name: "CLAUDE CODE",
    growth: "+234%",
    status: "TRENDING",
    icon: "📈",
    color: "text-cyan-400",
    bgColor: "from-cyan-400/20 to-blue-400/20",
    link: "/trending/claude-code"
  },
  {
    id: 4,
    name: "CURSOR IDE",
    growth: "+45%",
    status: "HOT",
    icon: "🔥",
    color: "text-purple-400",
    bgColor: "from-purple-400/20 to-pink-400/20",
    link: "/trending/cursor-ide"
  },
  {
    id: 5,
    name: "GPT-5 TURBO",
    growth: "+512%",
    status: "NEW",
    icon: "✨",
    color: "text-emerald-400",
    bgColor: "from-emerald-400/20 to-teal-400/20",
    link: "/api-directory"
  },
  {
    id: 6,
    name: "V0 BY VERCEL",
    growth: "+89%",
    status: "TRENDING",
    icon: "📈",
    color: "text-gray-400",
    bgColor: "from-gray-400/20 to-gray-600/20",
    link: "/tools"
  },
  {
    id: 7,
    name: "CLAUDE OPUS 4.1",
    growth: "+320%",
    status: "HOT",
    icon: "🔥",
    color: "text-amber-400",
    bgColor: "from-amber-400/20 to-orange-400/20",
    link: "/api-directory"
  },
  {
    id: 8,
    name: "WINDSURF IDE",
    growth: "+156%",
    status: "NEW",
    icon: "✨",
    color: "text-indigo-400",
    bgColor: "from-indigo-400/20 to-violet-400/20",
    link: "/tools"
  }
]

export default function TrendingNowTicker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Set mounted state
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Track mouse position for effects
  useEffect(() => {
    if (!mounted) return
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        })
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mounted])

  // Double the items for seamless loop
  const tickerItems = [...trendingItems, ...trendingItems]

  return (
    <div ref={containerRef} className="relative w-full bg-black border-b border-cyan-500/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/20 via-black to-cyan-950/20" />
        
        {/* Animated grid - only show when mounted */}
        {mounted && (
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
            }}
          />
        )}
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 py-3">
        <div className="flex items-center">
          {/* TRENDING.NOW Title - Fixed Position */}
          <div className="flex-shrink-0 px-6 border-r border-cyan-500/30">
            <div className="flex items-center gap-3">
              {/* Live indicator */}
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)]" style={{ animationDelay: '0.2s' }} />
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" style={{ animationDelay: '0.4s' }} />
              </div>
              
              {/* Animated Title */}
              <div className="relative">
                {/* Only show glitch effects when mounted */}
                {mounted && (
                  <>
                    {/* Glitch layers */}
                    <div className="absolute inset-0 text-lg font-black opacity-50 text-cyan-400 animate-glitch-1 select-none">
                      TRENDING.NOW
                    </div>
                    <div className="absolute inset-0 text-lg font-black opacity-50 text-pink-400 animate-glitch-2 select-none">
                      TRENDING.NOW
                    </div>
                  </>
                )}
                
                {/* Main title */}
                <h2 className="relative text-lg font-black">
                  <span 
                    className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    style={mounted ? {
                      backgroundSize: '200% auto',
                      animation: 'gradient 3s linear infinite',
                      filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))'
                    } : {
                      backgroundSize: '200% auto'
                    }}
                  >
                    TRENDING
                  </span>
                  <span className="text-white/20 mx-1">.</span>
                  <span 
                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    style={mounted ? {
                      backgroundSize: '200% auto',
                      animation: 'gradient 3s linear infinite reverse',
                      filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.5))'
                    } : {
                      backgroundSize: '200% auto'
                    }}
                  >
                    NOW
                  </span>
                </h2>
              </div>
              
              {/* Stats */}
              <div className="flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-full">
                <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span className="text-[10px] font-mono text-cyan-400 font-bold">3.7K+</span>
              </div>
            </div>
          </div>

          {/* Scrolling Ticker */}
          <div className="flex-1 overflow-hidden">
            <div className={`flex ${mounted ? 'animate-scroll-left' : ''}`}>
              {tickerItems.map((item, index) => (
                <Link
                  key={`${item.id}-${index}`}
                  href={item.link}
                  className="group flex-shrink-0 mx-2"
                >
                  <div className="flex items-center gap-3 px-4 py-2 bg-black/50 backdrop-blur-md border border-gray-800/50 rounded-lg hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105">
                    {/* Status Icon */}
                    <span className="text-lg">{item.icon}</span>
                    
                    {/* Tool Name */}
                    <span className={`font-bold text-sm ${item.color} group-hover:text-white transition-colors`}>
                      {item.name}
                    </span>
                    
                    {/* Growth Indicator */}
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-green-400" />
                      <span className="text-xs font-mono text-green-400 font-bold">
                        {item.growth}
                      </span>
                    </div>
                    
                    {/* Status Badge */}
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full bg-gradient-to-r ${item.bgColor} border border-gray-700/50`}>
                      {item.status}
                    </span>
                    
                    {/* Arrow */}
                    <ArrowUpRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex-shrink-0 px-6 border-l border-cyan-500/30">
            <Link href="/tools">
              <button className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-400 transition-all">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">View All</span>
                <ArrowUpRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </div>
  )
}
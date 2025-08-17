'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Activity, BarChart3, Box, TrendingUp, Sparkles, Code2, Brain, Cpu, Gauge, Globe, Layers, Shield, Star, Terminal } from 'lucide-react'

const trendingItems = [
  {
    id: 1,
    name: "FILESYSTEM MCP SERVER",
    slug: "filesystem-mcp-server",
    type: "CLOUD INTEGRATION",
    status: "NEW",
    statusIcon: "✨",
    growth: "+67%",
    color: "from-lime-400 to-green-400",
    glowColor: "lime",
    link: "/trending/filesystem-mcp-server",
    docs: "https://docs.microsoft.com/azure",
    github: "https://github.com/azure/mcp",
    demo: "/demo/azure-mcp",
    stats: { users: "12.5K", stars: "3.2K", commits: "892" },
    techStack: ["TypeScript", "Node.js", "Azure"],
    trending: [45, 52, 48, 65, 72, 85, 92]
  },
  {
    id: 2,
    name: "SELENIUM MCP",
    slug: "selenium-mcp",
    type: "AUTOMATION",
    status: "NEW",
    statusIcon: "✨",
    growth: "+234%",
    color: "from-lime-400 to-green-400",
    glowColor: "green",
    link: "/trending/selenium-mcp",
    docs: "https://selenium.dev/documentation",
    github: "https://github.com/selenium/mcp",
    demo: "/demo/selenium",
    stats: { users: "45.2K", stars: "8.7K", commits: "2.1K" },
    techStack: ["Python", "Selenium", "Docker"],
    trending: [20, 35, 42, 58, 75, 88, 95]
  },
  {
    id: 3,
    name: "CLAUDE CODE",
    slug: "claude-code",
    type: "AI AGENT",
    status: "TRENDING",
    statusIcon: "📈",
    growth: "+234%",
    color: "from-blue-500 to-cyan-500",
    glowColor: "cyan",
    link: "/trending/claude-code",
    docs: "https://docs.anthropic.com",
    github: "https://github.com/anthropic/claude-code",
    demo: "/demo/claude-code",
    stats: { users: "89.3K", stars: "15.4K", commits: "3.8K" },
    techStack: ["Python", "LangChain", "AI/ML"],
    trending: [60, 65, 70, 78, 85, 92, 98]
  },
  {
    id: 4,
    name: "CURSOR IDE",
    slug: "cursor-ide",
    type: "IDE EXTENSION",
    status: "HOT",
    statusIcon: "🔥",
    growth: "+45%",
    color: "from-purple-500 to-pink-500",
    glowColor: "purple",
    link: "/trending/cursor-ide",
    docs: "https://cursor.sh/docs",
    github: "https://github.com/getcursor/cursor",
    demo: "/demo/cursor",
    stats: { users: "125K", stars: "22.1K", commits: "5.4K" },
    techStack: ["TypeScript", "Electron", "React"],
    trending: [72, 75, 78, 82, 85, 88, 90]
  },
  {
    id: 5,
    name: "GPT-5 TURBO",
    slug: "gpt-5-turbo",
    type: "LLM API",
    status: "NEW",
    statusIcon: "✨",
    growth: "+512%",
    color: "from-emerald-500 to-teal-500",
    glowColor: "emerald",
    link: "/api-directory",
    docs: "https://platform.openai.com",
    github: "https://github.com/openai",
    demo: "/api-directory",
    stats: { users: "250K", stars: "45.2K", commits: "8.9K" },
    techStack: ["Python", "Transformer", "CUDA"],
    trending: [30, 45, 60, 75, 85, 92, 99]
  },
  {
    id: 6,
    name: "V0 BY VERCEL",
    slug: "v0-by-vercel",
    type: "UI GENERATOR", 
    status: "TRENDING",
    statusIcon: "📈",
    growth: "+89%",
    color: "from-gray-600 to-gray-800",
    glowColor: "slate",
    link: "/tools",
    docs: "https://v0.dev/docs",
    github: "https://github.com/vercel/v0",
    demo: "https://v0.dev",
    stats: { users: "67.8K", stars: "12.3K", commits: "2.7K" },
    techStack: ["Next.js", "React", "Tailwind"],
    trending: [55, 58, 62, 68, 72, 78, 85]
  },
  {
    id: 7,
    name: "CLAUDE OPUS 4.1",
    slug: "claude-opus-4-1",
    type: "AI MODEL",
    status: "HOT",
    statusIcon: "🔥",
    growth: "+320%",
    color: "from-amber-500 to-orange-600",
    glowColor: "amber",
    link: "/api-directory",
    docs: "https://docs.anthropic.com",
    github: "https://github.com/anthropic",
    demo: "/api-directory",
    stats: { users: "180K", stars: "28.5K", commits: "6.2K" },
    techStack: ["Python", "JAX", "TPU"],
    trending: [40, 52, 65, 75, 85, 92, 98]
  },
  {
    id: 8,
    name: "WINDSURF IDE",
    slug: "windsurf-ide",
    type: "DEVELOPMENT",
    status: "NEW",
    statusIcon: "✨",
    growth: "+156%",
    color: "from-indigo-500 to-violet-500",
    glowColor: "indigo",
    link: "/tools",
    docs: "https://windsurf.dev/docs",
    github: "https://github.com/windsurf",
    demo: "/tools",
    stats: { users: "34.5K", stars: "7.8K", commits: "1.9K" },
    techStack: ["Rust", "WebAssembly", "Vue"],
    trending: [35, 42, 48, 55, 62, 70, 78]
  }
]

// Mini sparkline component
const Sparkline = ({ data, color }: { data: number[], color: string }) => {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min
  const width = 60
  const height = 15
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width
    const y = height - ((value - min) / range) * height
    return `${x},${y}`
  }).join(' ')
  
  return (
    <svg width={width} height={height} className="opacity-80">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
        className="drop-shadow-[0_0_2px_currentColor]"
      />
      <polyline
        fill="url(#gradient)"
        fillOpacity="0.3"
        stroke="none"
        points={`${points} ${width},${height} 0,${height}`}
      />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function FuturisticTrending() {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Duplicate items for seamless loop
  const duplicatedItems = [...trendingItems, ...trendingItems, ...trendingItems]

  return (
    <section className="py-8 relative overflow-hidden bg-black border-t-2 border-b-2 border-cyan-500/50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'slide 10s linear infinite'
        }} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              REAL-TIME TOOL TRACKING
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-3 relative">
            <span 
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
              style={{
                backgroundSize: '200% auto',
                animation: 'gradient 3s linear infinite'
              }}
            >
              TRENDING
            </span>
            <span className="text-white mx-2">.</span>
            <span 
              className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient"
              style={{
                backgroundSize: '200% auto',
                animation: 'gradient 3s linear infinite reverse'
              }}
            >
              NOW
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-6 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-gray-400">TOOLS:</span>
              <span className="text-green-400">3,709+ ACTIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <Box className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-400">MCP SERVERS:</span>
              <span className="text-yellow-400">25 LIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-purple-400" />
              <span className="text-gray-400">AVG GROWTH:</span>
              <span className="text-purple-400">+147%</span>
            </div>
          </div>
        </div>

        {/* Premium Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards Container with Infinite Scroll */}
          <div className="relative">
            {/* Gradient Masks for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            
            <div 
              ref={containerRef}
              className={`flex gap-8 px-4 ${isPaused ? '' : 'animate-infinite-scroll-smooth'}`}
              style={{
                width: 'fit-content'
              }}
            >
              {duplicatedItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="relative group flex-shrink-0"
                  style={{ 
                    width: '380px'
                  }}
                >
                  {/* Premium card with 3D effect */}
                  <div className="relative transform-gpu transition-all duration-500">
                    {/* Card glow effect - reduced opacity */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Glass morphism card - reduced glow */}
                    <div className="relative bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-800/50 group-hover:border-cyan-400/30 overflow-hidden transition-all duration-500" style={{ height: '350px' }}>
                      {/* Holographic overlay */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(45deg, transparent 30%, ${item.glowColor === 'cyan' ? 'rgba(6,182,212,0.1)' : `rgba(139,92,246,0.1)`} 50%, transparent 70%)`,
                          animation: 'shimmer 2s infinite'
                        }}
                      />
                      
                      {/* Status badge with animation */}
                      <div className="absolute top-0 left-0 overflow-hidden rounded-tl-xl">
                        <div className={`px-3 py-2 bg-gradient-to-r ${item.color} ${item.status === 'HOT' ? 'animate-pulse' : ''} transform skew-x-12`}>
                          <span className="text-white font-black text-xs flex items-center gap-2 transform -skew-x-12">
                            <span className="text-lg">{item.statusIcon}</span>
                            {item.status}
                          </span>
                        </div>
                      </div>
                      
                      {/* Growth indicator - reduced glow */}
                      <div className="absolute top-3 right-3">
                        <span className="text-lg font-black text-white bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                          {item.growth}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="p-3 pt-10 flex flex-col h-full relative">
                        {/* Title - reduced glow */}
                        <h3 className="text-base font-black mb-1 relative">
                          <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {item.name}
                          </span>
                        </h3>
                        
                        {/* Type badge */}
                        <div className="flex items-center gap-2 mb-2">
                          <Code2 className="w-3 h-3 text-gray-500" />
                          <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">{item.type}</p>
                        </div>
                        
                        {/* Stats grid */}
                        <div className="grid grid-cols-3 gap-1 mb-1">
                          <div className="text-center p-1 bg-black/30 rounded border border-gray-800/50">
                            <Globe className="w-3 h-3 text-cyan-400 mx-auto mb-1" />
                            <div className="text-[10px] font-mono text-gray-500">USERS</div>
                            <div className="text-xs font-bold text-white">{item.stats.users}</div>
                          </div>
                          <div className="text-center p-1 bg-black/30 rounded border border-gray-800/50">
                            <Star className="w-3 h-3 text-yellow-400 mx-auto mb-1" />
                            <div className="text-[10px] font-mono text-gray-500">STARS</div>
                            <div className="text-xs font-bold text-white">{item.stats.stars}</div>
                          </div>
                          <div className="text-center p-1 bg-black/30 rounded border border-gray-800/50">
                            <Layers className="w-3 h-3 text-purple-400 mx-auto mb-1" />
                            <div className="text-[10px] font-mono text-gray-500">COMMITS</div>
                            <div className="text-xs font-bold text-white">{item.stats.commits}</div>
                          </div>
                        </div>
                        
                        {/* Tech stack pills - only show first 2 */}
                        <div className="flex gap-1 mb-2">
                          {item.techStack.slice(0, 2).map((tech, i) => (
                            <span 
                              key={i}
                              className="px-2 py-0.5 text-[9px] font-mono bg-gradient-to-r from-gray-800/50 to-gray-700/50 text-gray-400 rounded-full border border-gray-700/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {/* Action buttons */}
                        <div className="flex gap-1">
                          <a 
                            href={item.docs}
                            className="flex-1 px-2 py-1 text-xs font-mono text-center bg-black/50 text-cyan-400 border border-cyan-400/30 rounded hover:bg-cyan-400/10 hover:border-cyan-400 transition-all backdrop-blur-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            DOCS
                          </a>
                          <a 
                            href={item.github}
                            className="flex-1 px-2 py-1 text-xs font-mono text-center bg-black/50 text-purple-400 border border-purple-400/30 rounded hover:bg-purple-400/10 hover:border-purple-400 transition-all backdrop-blur-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            CODE
                          </a>
                          <a 
                            href={item.demo || '#'}
                            className="flex-1 px-2 py-1 text-xs font-mono text-center bg-black/50 text-pink-400 border border-pink-400/30 rounded hover:bg-pink-400/10 hover:border-pink-400 transition-all backdrop-blur-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            DEMO
                          </a>
                        </div>
                        

                      </div>
                      
                      {/* Premium CTA button - absolutely positioned at bottom */}
                      <div className="absolute bottom-2 left-2 right-2">
                        <Link href={item.link}>
                          <button className="relative w-full py-1.5 group/btn overflow-hidden rounded-md border border-cyan-400/30 bg-black/90 backdrop-blur">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                            <div className="relative flex items-center justify-center gap-1 font-bold text-[9px] uppercase tracking-wider">
                              <span className="text-cyan-400">◇</span>
                              <span className="text-cyan-400">EXPLORE PREMIUM FEATURES</span>
                              <ArrowRight className="w-2 h-2 text-cyan-400 group-hover/btn:translate-x-0.5 transition-transform" />
                            </div>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* View All Button - reduced glow */}
        <div className="text-center mt-8">
          <Link href="/tools">
            <button className="group relative px-8 py-4 bg-black rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden">
              {/* Subtle animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative flex items-center justify-center gap-4">
                <Zap className="w-6 h-6 text-cyan-400 group-hover:animate-pulse" />
                <span className="text-base font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider">
                  Explore All 3,709+ Tools
                </span>
                <ArrowRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-infinite-scroll-smooth {
          animation: infinite-scroll-smooth 80s linear infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes holographicGrid {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-50px, -50px) rotate(0.5deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(10px) translateX(-10px); }
          75% { transform: translateY(-10px) translateX(20px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(20% 0 30% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(50% 0 20% 0); transform: translate(2px, -2px); }
          60% { clip-path: inset(10% 0 60% 0); transform: translate(-1px, 1px); }
          80% { clip-path: inset(80% 0 5% 0); transform: translate(1px, -1px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -2px); }
          40% { clip-path: inset(20% 0 40% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(70% 0 15% 0); transform: translate(1px, -1px); }
          80% { clip-path: inset(5% 0 85% 0); transform: translate(-1px, 1px); }
        }
        
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-glitch-1 {
          animation: glitch-1 2s infinite linear alternate-reverse;
        }
        
        .animate-glitch-2 {
          animation: glitch-2 2s infinite linear alternate-reverse;
        }
      `}</style>
    </section>
  )
}
'use client'

import { useEffect, useRef, useState } from 'react'
import { 
  TrendingUp, Star, GitBranch, Sparkles, 
  Globe, Users, Activity, Zap, Shield, 
  ArrowUpRight, Code, Timer, Rocket,
  Trophy, Flame, Diamond
} from 'lucide-react'
import Link from 'next/link'

interface TrendingTool {
  id: string
  name: string
  category: string
  badge: 'NEW' | 'TRENDING' | 'HOT'
  badgeColor: string
  badgeGradient: string
  growth: string
  growthValue: number
  metrics: {
    users: string
    stars: string  
    commits: string
  }
  tags: string[]
  links: {
    docs: string
    code: string
    demo: string
  }
  spotlight?: boolean
}

const trendingTools: TrendingTool[] = [
  {
    id: 'filesystem-mcp',
    name: 'FILESYSTEM MCP SERVER',
    category: 'CLOUD INTEGRATION',
    badge: 'NEW',
    badgeColor: 'bg-[#7FFF00]',
    badgeGradient: 'from-emerald-400 via-green-400 to-lime-400',
    growth: '+67%',
    growthValue: 67,
    metrics: {
      users: '12.5K',
      stars: '3.2K',
      commits: '892'
    },
    tags: ['TypeScript', 'Node.js', 'Azure'],
    links: {
      docs: '/docs/filesystem-mcp',
      code: 'https://github.com/filesystem-mcp',
      demo: '/demo/filesystem-mcp'
    }
  },
  {
    id: 'selenium-mcp',
    name: 'SELENIUM MCP',
    category: 'AUTOMATION',
    badge: 'NEW',
    badgeColor: 'bg-[#7FFF00]',
    badgeGradient: 'from-emerald-400 via-green-400 to-lime-400',
    growth: '+234%',
    growthValue: 234,
    metrics: {
      users: '45.2K',
      stars: '8.7K',
      commits: '2.1K'
    },
    tags: ['Python', 'Selenium', 'Docker'],
    links: {
      docs: '/docs/selenium-mcp',
      code: 'https://github.com/selenium-mcp',
      demo: '/demo/selenium-mcp'
    },
    spotlight: true
  },
  {
    id: 'claude-code',
    name: 'CLAUDE CODE',
    category: 'AI AGENT',
    badge: 'TRENDING',
    badgeColor: 'bg-[#00D4FF]',
    badgeGradient: 'from-cyan-400 via-blue-400 to-indigo-400',
    growth: '+234%',
    growthValue: 234,
    metrics: {
      users: '89.3K',
      stars: '15.4K',
      commits: '3.8K'
    },
    tags: ['Python', 'LangChain', 'AI/ML'],
    links: {
      docs: '/docs/claude-code',
      code: 'https://github.com/claude-code',
      demo: '/demo/claude-code'
    },
    spotlight: true
  },
  {
    id: 'cursor-ai',
    name: 'CURSOR AI',
    category: 'EDITOR',
    badge: 'HOT',
    badgeColor: 'bg-[#FF6B6B]',
    badgeGradient: 'from-orange-400 via-red-400 to-pink-400',
    growth: '+234%',
    growthValue: 234,
    metrics: {
      users: '67.8K',
      stars: '12.3K',
      commits: '4.2K'
    },
    tags: ['TypeScript', 'VSCode', 'AI'],
    links: {
      docs: '/docs/cursor-ai',
      code: 'https://github.com/cursor-ai',
      demo: '/demo/cursor-ai'
    },
    spotlight: true
  }
]

export default function TrendingTools() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  
  // Duplicate for infinite scroll
  const duplicatedTools = [...trendingTools, ...trendingTools, ...trendingTools]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed
        const maxScroll = scrollContainer.scrollWidth / 3
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [isPaused])

  return (
    <section className="relative py-20 overflow-hidden bg-black">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-16 relative">
          {/* Live Indicator */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500 blur-xl animate-pulse" />
              <div className="relative flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-xl border border-red-500/50 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-red-400 uppercase tracking-wider font-bold">
                  LIVE TRACKING
                </span>
              </div>
            </div>
          </div>
          
          {/* Main Title with Premium Animation */}
          <div className="relative">
            <h2 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="relative inline-block trending-gradient">
                TRENDING
              </span>
              <span className="text-white mx-2">.</span>
              <span className="relative inline-block now-gradient">
                NOW
              </span>
            </h2>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 blur-3xl opacity-30">
              <h2 className="text-6xl md:text-8xl font-black tracking-tight">
                <span className="text-cyan-400">TRENDING</span>
                <span className="text-white mx-2">.</span>
                <span className="text-pink-400">NOW</span>
              </h2>
            </div>
          </div>
          
          {/* Premium Stats Bar */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 backdrop-blur-xl border border-cyan-500/20 rounded-lg">
              <Rocket className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-gray-400">TOOLS:</span>
              <span className="text-sm font-bold text-cyan-400">3,709+</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 backdrop-blur-xl border border-emerald-500/20 rounded-lg">
              <Shield className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-gray-400">MCP:</span>
              <span className="text-sm font-bold text-emerald-400">25</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 backdrop-blur-xl border border-amber-500/20 rounded-lg">
              <TrendingUp className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-xs font-mono text-gray-400">GROWTH:</span>
              <span className="text-sm font-bold text-amber-400">+147%</span>
            </div>
          </div>
        </div>

        {/* Premium Scrolling Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Manual Navigation Arrows */}
          <button
            onClick={() => {
              const container = scrollRef.current
              if (container) {
                container.scrollBy({ left: -500, behavior: 'smooth' })
              }
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all group"
          >
            <svg className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => {
              const container = scrollRef.current
              if (container) {
                container.scrollBy({ left: 500, behavior: 'smooth' })
              }
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all group"
          >
            <svg className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedTools.map((tool, index) => (
              <div
                key={`${tool.id}-${index}`}
                className="flex-none w-[480px] group"
                onMouseEnter={() => setHoveredCard(tool.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-[500px]">
                  {/* Spotlight Effect */}
                  {tool.spotlight && (
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  )}
                  
                  {/* Premium Card */}
                  <div className="relative h-full bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-black/90 backdrop-blur-xl rounded-2xl border border-gray-800/50 group-hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Scan Line Animation */}
                    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 animate-scan" />
                    
                    {/* Content */}
                    <div className="relative h-full p-8 flex flex-col">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-6">
                        {/* Premium Badge */}
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-r ${tool.badgeGradient} blur-xl opacity-70`} />
                          <div className={`relative px-4 py-2 bg-gradient-to-r ${tool.badgeGradient} rounded-lg`}>
                            <div className="flex items-center gap-2">
                              {tool.badge === 'NEW' && <Sparkles className="w-4 h-4 text-black" />}
                              {tool.badge === 'TRENDING' && <TrendingUp className="w-4 h-4 text-black" />}
                              {tool.badge === 'HOT' && <Flame className="w-4 h-4 text-black" />}
                              <span className="text-xs font-black text-black">{tool.badge}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Growth Indicator */}
                        <div className="text-right">
                          <div className="text-3xl font-black text-transparent bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text">
                            {tool.growth}
                          </div>
                          <div className="text-xs font-mono text-gray-500 uppercase">Growth</div>
                        </div>
                      </div>

                      {/* Title Section */}
                      <div className="mb-8">
                        <h3 className="text-2xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                          {tool.name}
                        </h3>
                        <p className="text-sm font-mono text-gray-500 uppercase tracking-wider flex items-center gap-2">
                          <Code className="w-3 h-3" />
                          {tool.category}
                        </p>
                      </div>

                      {/* Premium Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="relative group/metric">
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 blur-xl opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                          <div className="relative bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-4 text-center">
                            <Users className="w-5 h-5 mx-auto mb-2 text-cyan-400" />
                            <div className="text-xl font-black text-white">{tool.metrics.users}</div>
                            <div className="text-xs text-gray-500 uppercase">Users</div>
                          </div>
                        </div>
                        
                        <div className="relative group/metric">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 blur-xl opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                          <div className="relative bg-black/50 backdrop-blur-xl border border-yellow-500/20 rounded-xl p-4 text-center">
                            <Star className="w-5 h-5 mx-auto mb-2 text-yellow-400" />
                            <div className="text-xl font-black text-white">{tool.metrics.stars}</div>
                            <div className="text-xs text-gray-500 uppercase">Stars</div>
                          </div>
                        </div>
                        
                        <div className="relative group/metric">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-500/10 blur-xl opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                          <div className="relative bg-black/50 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4 text-center">
                            <GitBranch className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                            <div className="text-xl font-black text-white">{tool.metrics.commits}</div>
                            <div className="text-xs text-gray-500 uppercase">Commits</div>
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {tool.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 text-xs font-mono bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-lg text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Premium Action Buttons */}
                      <div className="mt-auto space-y-3">
                        <div className="grid grid-cols-3 gap-3">
                          <Link
                            href={tool.links.docs}
                            className="relative group/btn overflow-hidden rounded-lg"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                            <div className="relative px-4 py-3 bg-black/50 backdrop-blur-xl border border-gray-800/50 group-hover/btn:border-cyan-500/50 transition-all text-center">
                              <span className="text-xs font-bold text-gray-400 group-hover/btn:text-cyan-400">DOCS</span>
                            </div>
                          </Link>
                          
                          <Link
                            href={tool.links.code}
                            className="relative group/btn overflow-hidden rounded-lg"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                            <div className="relative px-4 py-3 bg-black/50 backdrop-blur-xl border border-gray-800/50 group-hover/btn:border-purple-500/50 transition-all text-center">
                              <span className="text-xs font-bold text-gray-400 group-hover/btn:text-purple-400">CODE</span>
                            </div>
                          </Link>
                          
                          <Link
                            href={tool.links.demo}
                            className="relative group/btn overflow-hidden rounded-lg"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-pink-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                            <div className="relative px-4 py-3 bg-black/50 backdrop-blur-xl border border-gray-800/50 group-hover/btn:border-pink-500/50 transition-all text-center">
                              <span className="text-xs font-bold text-gray-400 group-hover/btn:text-pink-400">DEMO</span>
                            </div>
                          </Link>
                        </div>
                        
                        {/* Main CTA */}
                        <Link
                          href={`/tools/${tool.id}`}
                          className="relative group/cta block"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-20 group-hover/cta:opacity-40 transition-opacity" />
                          <div className="relative px-6 py-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-gray-700/50 rounded-xl group-hover/cta:border-cyan-500/50 transition-all">
                            <div className="flex items-center justify-center gap-3">
                              <Diamond className="w-5 h-5 text-cyan-400" />
                              <span className="text-sm font-black text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text">
                                EXPLORE PREMIUM FEATURES
                              </span>
                              <ArrowUpRight className="w-5 h-5 text-pink-400 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mt-12">
          <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer" />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-slide {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes gradient-slide-reverse {
          0% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .trending-gradient {
          background: linear-gradient(
            90deg,
            #00ffff 0%,
            #00d4ff 25%,
            #0099ff 50%,
            #6b46c1 75%,
            #9333ea 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-slide 3s linear infinite;
        }
        
        .now-gradient {
          background: linear-gradient(
            90deg,
            #9333ea 0%,
            #c026d3 25%,
            #e11d48 50%,
            #f97316 75%,
            #eab308 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-slide-reverse 3s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

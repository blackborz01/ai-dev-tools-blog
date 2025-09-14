'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Home, Search, ArrowLeft, Sparkles } from 'lucide-react'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          {mounted && [...Array(20)].map((_, i) => {
            // Use deterministic values based on index
            const left = ((i * 37) % 100);
            const top = ((i * 53) % 100);
            const size = 50 + ((i * 97) % 400);
            const delay = (i * 0.5) % 10;
            const duration = 10 + ((i * 3) % 20);

            return (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 animate-float"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Glitch Effect 404 */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-black leading-none">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              404
            </span>
          </h1>
          
          {/* Glitch layers */}
          <div className="absolute inset-0 text-[150px] md:text-[200px] font-black leading-none opacity-50">
            <span className="text-cyan-400 animate-glitch-1">404</span>
          </div>
          <div className="absolute inset-0 text-[150px] md:text-[200px] font-black leading-none opacity-50">
            <span className="text-pink-400 animate-glitch-2">404</span>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Looks like this page got lost in the AI multiverse. Don't worry, even the best algorithms make mistakes sometimes!
          </p>
        </div>

        {/* Fun Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-400">404</div>
            <div className="text-xs text-gray-500">Error Code</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-cyan-400">∞</div>
            <div className="text-xs text-gray-500">Possibilities</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-pink-400">1</div>
            <div className="text-xs text-gray-500">Way Home</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Go Home
            <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-lg font-semibold transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          
          <Link
            href="/search"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-lg font-semibold transition-all"
          >
            <Search className="w-5 h-5" />
            Search
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-500 mb-4">Popular pages you might be looking for:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition-colors">
              Blog
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/tools" className="text-purple-400 hover:text-purple-300 transition-colors">
              AI Tools
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/mcp" className="text-purple-400 hover:text-purple-300 transition-colors">
              MCP Servers
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/trending" className="text-purple-400 hover:text-purple-300 transition-colors">
              Trending
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(100% 0 0 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(0 0 100% 0); transform: translate(2px, -2px); }
          60% { clip-path: inset(0 100% 0 0); transform: translate(-1px, 1px); }
          80% { clip-path: inset(0 0 0 100%); transform: translate(1px, -1px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(0 100% 0 0); transform: translate(2px, -1px); }
          40% { clip-path: inset(100% 0 0 0); transform: translate(-2px, 1px); }
          60% { clip-path: inset(0 0 0 100%); transform: translate(1px, 2px); }
          80% { clip-path: inset(0 0 100% 0); transform: translate(-1px, -2px); }
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-glitch-1 {
          animation: glitch-1 2s infinite linear alternate-reverse;
        }
        
        .animate-glitch-2 {
          animation: glitch-2 2s infinite linear alternate-reverse;
        }
      `}</style>
    </div>
  )
}

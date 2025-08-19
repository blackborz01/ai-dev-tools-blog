'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Terminal, ArrowRight, Code2, Cpu, Database,
  Cloud, User, Menu, X, Globe
} from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { name: 'HOME', href: '/', icon: Globe },
    { name: 'BLOG', href: '/blog', icon: Code2 },
    { name: 'TOOLS', href: '/tools', icon: Cpu },
    { name: 'MCP', href: '/mcp', icon: Database },
    { name: 'APIs', href: '/api-directory', icon: Cloud },
  ]

  // Determine active link based on pathname
  const getActiveLink = () => {
    if (pathname === '/') return 'HOME'
    if (pathname.startsWith('/blog')) return 'BLOG'
    if (pathname.startsWith('/tools')) return 'TOOLS'
    if (pathname.startsWith('/mcp')) return 'MCP'
    if (pathname.startsWith('/api')) return 'APIs'
    return 'HOME'
  }

  const activeLink = getActiveLink()

  if (!mounted) {
    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-gray-800">
          <div className="container mx-auto px-4 h-16" />
        </nav>
        <div className="h-16" />
      </>
    )
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700">
                  <Terminal className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Boost</span>
                  <span className="text-white">Dev</span>
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Speed</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
                  </div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                    Ship 3x Faster
                  </div>
                </div>
              </div>
            </Link>

            {/* Center Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = activeLink === link.name
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'bg-cyan-500 text-white' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-semibold tracking-wide">
                      {link.name}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Right Section - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              {/* Login Button */}
              <Link href="/auth/signin">
                <button className="flex items-center gap-2 px-5 py-2.5 text-gray-300 hover:text-white transition-colors">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-semibold">LOGIN</span>
                </button>
              </Link>
              
              {/* Subscribe Button */}
              <Link href="/subscribe">
                <button className="group flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span className="text-sm font-bold text-white">SUBSCRIBE</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-gray-800">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = activeLink === link.name
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                      ${isActive 
                        ? 'bg-cyan-500 text-white' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-semibold">{link.name}</span>
                  </Link>
                )
              })}
              
              <div className="border-t border-gray-800 pt-2 mt-2 space-y-2">
                <Link href="/auth/signin" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 rounded-lg text-white">
                    <User className="w-4 h-4" />
                    <span className="font-semibold">LOGIN</span>
                  </button>
                </Link>
                
                <Link href="/subscribe" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white">
                    <span className="font-bold">SUBSCRIBE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}

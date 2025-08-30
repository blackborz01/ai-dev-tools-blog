'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Terminal, ArrowRight, Code2, Cpu, Database,
  Cloud, User, Menu, X, Globe, ChevronDown,
  Bot, Zap
} from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false)
  const [mobilMoreOpen, setMobileMoreOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { name: 'HOME', href: '/', icon: Globe },
    { name: 'BLOG', href: '/blog', icon: Code2 },
    { name: 'TOOLS', href: '/tools', icon: Cpu },
    { name: 'MCP', href: '/mcp', icon: Database },
    { name: 'APIs', href: '/api-directory', icon: Cloud },
  ]

  const moreLinks = [
    { name: 'Agents', href: '/agents', icon: Bot, description: 'AI Agents & Automation' },
    { name: 'Fast Solutions', href: '/fast-solutions', icon: Zap, description: 'Quick Fixes & Snippets' },
  ]

  // Determine active link based on pathname
  const getActiveLink = () => {
    if (pathname === '/') return 'HOME'
    if (pathname.startsWith('/blog')) return 'BLOG'
    if (pathname.startsWith('/tools')) return 'TOOLS'
    if (pathname.startsWith('/mcp')) return 'MCP'
    if (pathname.startsWith('/api')) return 'APIs'
    if (pathname.startsWith('/agents') || pathname.startsWith('/fast-solutions')) return 'MORE'
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
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <div className="text-xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Boost</span>
                  <span className="text-white">Dev</span>
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Speed</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    <div className="w-1 h-1 bg-green-400 rounded-full" />
                    <div className="w-1 h-1 bg-yellow-400 rounded-full" />
                    <div className="w-1 h-1 bg-red-400 rounded-full" />
                  </div>
                  <div className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">
                    Ship 10x Faster 12:48:17
                  </div>
                </div>
              </div>
            </Link>

            {/* Center Navigation - Desktop */}
            <div className="hidden md:flex items-center gap-4">
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
                        ? 'bg-cyan-500 text-black font-semibold' 
                        : 'text-gray-400 hover:text-white'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {link.name}
                    </span>
                  </Link>
                )
              })}
              
              {/* More Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  onMouseEnter={() => setMoreDropdownOpen(true)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                    ${activeLink === 'MORE'
                      ? 'bg-cyan-500 text-black font-semibold' 
                      : 'text-gray-400 hover:text-white'
                    }
                  `}
                >
                  <span className="text-sm font-medium">MORE</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {moreDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden"
                    onMouseLeave={() => setMoreDropdownOpen(false)}
                  >
                    {moreLinks.map((link) => {
                      const Icon = link.icon
                      const isActive = pathname.startsWith(link.href)
                      
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setMoreDropdownOpen(false)}
                          className={`
                            flex items-start gap-3 px-4 py-3 transition-all
                            ${isActive
                              ? 'bg-cyan-500/20 text-cyan-400'
                              : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                            }
                          `}
                        >
                          <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">{link.name}</div>
                            <div className="text-xs opacity-70 mt-0.5">{link.description}</div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Right Section - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              {/* Login Button */}
              <Link href="/auth/signin">
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-gray-400 hover:text-gray-200 transition-colors">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">LOGIN</span>
                </button>
              </Link>
              
              {/* Subscribe Button */}
              <Link href="/subscribe">
                <button className="group flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-md hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="text-sm font-semibold">SUBSCRIBE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
              
              {/* Mobile More Section */}
              <div>
                <button
                  onClick={() => setMobileMoreOpen(!mobilMoreOpen)}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
                    ${activeLink === 'MORE'
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }
                  `}
                >
                  <span className="font-semibold">MORE</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobilMoreOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobilMoreOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {moreLinks.map((link) => {
                      const Icon = link.icon
                      const isActive = pathname.startsWith(link.href)
                      
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`
                            flex items-center gap-3 px-4 py-2 rounded-lg transition-all
                            ${isActive
                              ? 'bg-cyan-500/20 text-cyan-400'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                            }
                          `}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-sm font-semibold">{link.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
              
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

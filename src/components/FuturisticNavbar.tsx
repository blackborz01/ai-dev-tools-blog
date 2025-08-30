'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { 
  Terminal, ArrowRight, Sparkles, Cpu, Globe, 
  Code2, ChevronRight, Menu, X, Database, Cloud,
  User, LogOut, Settings, ChevronDown, Bot, Zap
} from 'lucide-react'
import UserProfileDropdown from './UserProfileDropdown'


export default function FuturisticNavbar() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('HOME')
  const [timeString, setTimeString] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false)

  // Set mounted state
  useEffect(() => {
    setMounted(true)
  }, [])

  // Track scroll for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update time for live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTimeString(now.toLocaleTimeString('en-US', { hour12: false }))
    }
    
    updateTime() // Set initial time
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.user-menu-container')) {
        setUserMenuOpen(false)
      }
    }
    
    if (userMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [userMenuOpen])

  const navLinks = [
    { name: 'HOME', href: '/', icon: Globe, color: 'from-cyan-400 to-blue-500', glow: 'cyan' },
    { name: 'BLOG', href: '/blog', icon: Code2, color: 'from-purple-400 to-pink-500', glow: 'purple' },
    { name: 'TOOLS', href: '/tools', icon: Cpu, color: 'from-green-400 to-emerald-500', glow: 'green' },
    { name: 'MCP', href: '/mcp', icon: Database, color: 'from-yellow-400 to-orange-500', glow: 'yellow' },
    { name: 'APIs', href: '/api-directory', icon: Cloud, color: 'from-pink-400 to-red-500', glow: 'pink' },
  ]

  const moreLinks = [
    { name: 'Agents', href: '/agents', icon: Bot, description: 'AI Agents & Automation' },
    { name: 'Fast Solutions', href: '/fast-solutions', icon: Zap, description: 'Quick Fixes & Snippets' },
  ]

  // Don't render interactive elements until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <>
        <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 py-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl border-b border-cyan-500/20" />
          <div className="container mx-auto px-4 relative">
            <div className="flex items-center justify-between">
              <Link href="/" className="group relative">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="relative w-14 h-14 bg-black border border-cyan-500/50 rounded-xl flex items-center justify-center">
                      <Terminal className="w-7 h-7 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      AI.TOOLS
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="text-[10px] font-mono text-cyan-400/80 tracking-[0.2em] uppercase">
                        Daily.Updates
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </nav>
        <div className="h-28 md:h-32" />
      </>
    )
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}>
        {/* Backdrop with glassmorphism */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl border-b border-cyan-500/20" />
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px),
                linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139,92,246,0.05) 2px, transparent 2px),
                linear-gradient(rgba(139,92,246,0.05) 2px, transparent 2px)
              `,
              backgroundSize: '40px 40px, 40px 40px, 80px 80px, 80px 80px',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          
          {/* Gradient orbs */}
          <div 
            className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"
            style={{ transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` }}
          />
          <div 
            className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
            style={{ transform: `translate(-${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo Section with Premium Effects */}
            <Link href="/" className="group relative">
              <div className="flex items-center space-x-4">
                {/* Animated logo container */}
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity animate-pulse" />
                  
                  {/* Logo box */}
                  <div className="relative w-14 h-14 bg-black border border-cyan-500/50 rounded-xl flex items-center justify-center overflow-hidden group-hover:border-cyan-400 transition-all duration-300">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Scanline effect */}
                    <div className="absolute inset-0 opacity-30 group-hover:opacity-50" style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6,182,212,0.1) 2px, rgba(6,182,212,0.1) 4px)',
                      animation: 'scanline 4s linear infinite'
                    }} />
                    
                    {/* Icon with glow */}
                    <Terminal className="w-7 h-7 text-cyan-400 relative z-10 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Text with gradient and effects */}
                <div>
                  <div className="relative">
                    {/* Glitch effect text layers */}
                    <div className="absolute inset-0 text-3xl font-black tracking-tighter opacity-50 text-cyan-400 animate-glitch-1 select-none">
                      BoostDevSpeed
                    </div>
                    <div className="absolute inset-0 text-3xl font-black tracking-tighter opacity-50 text-purple-400 animate-glitch-2 select-none">
                      BoostDevSpeed
                    </div>
                    
                    {/* Main text */}
                    <div className="relative text-3xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                      style={{
                        backgroundSize: '200% auto',
                        animation: 'gradient 3s linear infinite'
                      }}
                    >
                      BoostDevSpeed
                    </div>
                  </div>
                  
                  {/* Subtitle with typing effect */}
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-0.5">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <div className="text-[10px] font-mono text-cyan-400/80 tracking-[0.2em] uppercase">
                      Ship 10x Faster
                    </div>
                    {timeString && (
                      <div className="text-[10px] font-mono text-green-400">
                        {timeString}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>

            {/* Center Navigation Links */}
            <div className="flex items-center">
              {/* Links container with premium styling */}
              <div className="flex items-center space-x-2 px-6 py-2 bg-black/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl">
                {navLinks.map((link) => {
                  const Icon = link.icon
                  const isActive = activeLink === link.name
                  
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setActiveLink(link.name)}
                      className="group relative"
                    >
                      <div className={`
                        relative px-5 py-2.5 rounded-xl transition-all duration-300
                        ${isActive 
                          ? 'bg-gradient-to-r ' + link.color + ' text-white shadow-lg' 
                          : 'hover:bg-gray-900/50'
                        }
                      `}>
                        {/* Hover glow effect */}
                        {!isActive && (
                          <div className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity`} />
                        )}
                        
                        {/* Content */}
                        <div className="relative flex items-center gap-2">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-' + link.glow + '-400'} transition-colors`} />
                          <span className={`text-xs font-bold tracking-wider ${
                            isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                          } transition-colors`}>
                            {link.name}
                          </span>
                        </div>
                        
                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                        )}
                      </div>
                    </Link>
                  )
                })}
                
                {/* MORE Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                    className="group relative"
                  >
                    <div className={`
                      relative px-5 py-2.5 rounded-xl transition-all duration-300
                      ${moreDropdownOpen 
                        ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg' 
                        : 'hover:bg-gray-900/50'
                      }
                    `}>
                      <div className="relative flex items-center gap-2">
                        <span className={`text-xs font-bold tracking-wider ${
                          moreDropdownOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'
                        } transition-colors`}>
                          MORE
                        </span>
                        <ChevronDown className={`w-4 h-4 ${
                          moreDropdownOpen ? 'text-white rotate-180' : 'text-gray-400 group-hover:text-white'
                        } transition-all`} />
                      </div>
                    </div>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {moreDropdownOpen && (
                    <div className="absolute top-full mt-2 w-56 py-2 bg-gray-950/95 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl z-50">
                      {moreLinks.map((link) => {
                        const Icon = link.icon
                        return (
                          <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMoreDropdownOpen(false)}
                            className="block px-4 py-3 hover:bg-gray-800/50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="w-4 h-4 text-cyan-400" />
                              <div>
                                <div className="text-sm font-semibold text-white">{link.name}</div>
                                <div className="text-xs text-gray-400">{link.description}</div>
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>


            </div>

            {/* Right Section - Auth & Subscribe */}
            <div className="flex items-center gap-3">
              {/* Auth Section */}
              {status === 'loading' ? (
                <div className="px-5 py-2.5">
                  <div className="w-20 h-8 bg-gray-800 rounded-xl animate-pulse" />
                </div>
              ) : session ? (
                /* Use the new UserProfileDropdown component */
                <UserProfileDropdown />
              ) : (
                /* Login Button */
                <button
                  onClick={() => router.push('/auth/signin')}
                  className="group relative overflow-hidden"
                >
                  <div className="relative px-5 py-2.5 bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/30 group-hover:border-purple-400 transition-all">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-2">
                      <User className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-bold text-white/90 group-hover:text-white transition-colors">
                        LOGIN
                      </span>
                    </div>
                  </div>
                </button>
              )}
              
              {/* Premium Subscribe Button */}
              <Link href="/subscribe">
                <button className="group relative overflow-hidden">
                  {/* Outer glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity animate-pulse" />
                  
                  {/* Button container */}
                  <div className="relative px-6 py-3 bg-black rounded-xl border border-cyan-500/50 group-hover:border-cyan-400 transition-all">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent uppercase tracking-wider">
                        Subscribe
                      </span>
                      <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom border glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </nav>



      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-2xl border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  BoostDevSpeed
                </div>
                <div className="text-[9px] font-mono text-cyan-400/80">SHIP 10X FASTER</div>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-gray-900 rounded-lg border border-gray-800"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-cyan-400" />
              ) : (
                <Menu className="w-5 h-5 text-cyan-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-cyan-500/20">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name)
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center gap-3 px-4 py-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all"
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-bold text-white">{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-500 ml-auto" />
                  </Link>
                )
              })}
              
              {/* MORE Section in Mobile */}
              <div className="border-t border-gray-800 pt-2 mt-2">
                <div className="text-xs font-bold text-gray-500 px-4 mb-2">MORE</div>
                {moreLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all"
                    >
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <div className="flex-1">
                        <span className="text-sm font-bold text-white">{link.name}</span>
                        <div className="text-xs text-gray-400">{link.description}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-500" />
                    </Link>
                  )
                })}
              </div>
              
              {/* Mobile Auth Section */}
              <div className="border-t border-gray-800 pt-2 mt-2">
                {session ? (
                  <div className="space-y-2">
                    {/* User Info */}
                    <div className="px-4 py-3 bg-gray-900/50 rounded-lg">
                      <p className="text-sm font-semibold text-white">
                        {session.user?.name || 'User'}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {session.user?.email}
                      </p>
                    </div>
                    
                    {/* Mobile Menu Items */}
                    <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                      <button className="w-full px-4 py-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all flex items-center gap-3">
                        <User className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-bold text-white">Dashboard</span>
                      </button>
                    </Link>
                    
                    <Link href="/settings" onClick={() => setMobileMenuOpen(false)}>
                      <button className="w-full px-4 py-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all flex items-center gap-3">
                        <Settings className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-bold text-white">Settings</span>
                      </button>
                    </Link>
                    
                    {/* Sign Out Button */}
                    <button 
                      onClick={() => {
                        setMobileMenuOpen(false)
                        signOut({ callbackUrl: '/' })
                      }}
                      className="w-full px-4 py-3 bg-red-500/10 rounded-lg border border-red-500/30 hover:border-red-500/50 transition-all flex items-center gap-3"
                    >
                      <LogOut className="w-4 h-4 text-red-400" />
                      <span className="text-sm font-bold text-red-400">Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link href="/auth/signin" onClick={() => setMobileMenuOpen(false)}>
                      <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold text-white flex items-center justify-center gap-2">
                        <User className="w-4 h-4" />
                        LOGIN
                      </button>
                    </Link>
                    
                    <Link href="/auth/signup" onClick={() => setMobileMenuOpen(false)}>
                      <button className="w-full px-4 py-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all font-bold text-white flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        SIGN UP FREE
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Subscribe Button */}
              <Link href="/subscribe" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-white flex items-center justify-center gap-2 mt-2">
                  <Sparkles className="w-4 h-4" />
                  SUBSCRIBE
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>



      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-24" />
    </>
  )
}
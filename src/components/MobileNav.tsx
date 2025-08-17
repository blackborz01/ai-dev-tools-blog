'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Menu, X, Terminal, Home, BookOpen, 
  Wrench, Server, ChevronRight, Mail,
  Github, Twitter, Linkedin
} from 'lucide-react'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { href: '/', label: 'HOME', icon: Home },
    { href: '/blog', label: 'BLOG', icon: BookOpen },
    { href: '/tools', label: 'TOOLS', icon: Wrench },
    { href: '/mcp', label: 'MCP', icon: Server },
  ]

  return (
    <>
      {/* Mobile Navigation Bar */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b-4 border-black dark:border-white transition-all duration-300 ${
        scrolled ? 'shadow-2xl' : ''
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white dark:text-black" />
              </div>
              <div>
                <div className="text-xl font-black tracking-tighter">AI.TOOLS</div>
              </div>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-12 bg-black dark:bg-white flex items-center justify-center brutal-shadow-lg active:translate-x-1 active:translate-y-1 transition-transform"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white dark:text-black" />
              ) : (
                <Menu className="w-6 h-6 text-white dark:text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-16 right-0 bottom-0 w-full max-w-sm z-40 bg-white dark:bg-black border-l-4 border-black dark:border-white transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-8">
            <div className="px-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-4 border-4 border-black dark:border-white brutal-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform group"
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    <span className="font-black text-lg">{item.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>

            {/* Subscribe Section */}
            <div className="px-6 mt-8">
              <div className="bg-brutal-lime text-black p-6 border-4 border-black brutal-shadow-xl">
                <h3 className="font-black text-lg mb-2">GET WEEKLY UPDATES</h3>
                <p className="text-sm mb-4">Join 50K+ developers</p>
                <button 
                  className="w-full py-3 bg-black text-white font-black hover:scale-105 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  SUBSCRIBE NOW →
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="px-6 mt-8">
              <div className="grid grid-cols-2 gap-3">
                <div className="border-4 border-black dark:border-white p-3 text-center">
                  <div className="text-2xl font-black text-brutal-lime">1,247</div>
                  <div className="text-xs font-mono opacity-60">TOOLS</div>
                </div>
                <div className="border-4 border-black dark:border-white p-3 text-center">
                  <div className="text-2xl font-black text-brutal-red">500K+</div>
                  <div className="text-xs font-mono opacity-60">USERS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t-4 border-black dark:border-white p-6">
            <div className="flex justify-center space-x-4">
              <a href="https://github.com" className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center">
                <Github className="w-5 h-5 text-white dark:text-black" />
              </a>
              <a href="https://twitter.com" className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center">
                <Twitter className="w-5 h-5 text-white dark:text-black" />
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-white dark:text-black" />
              </a>
            </div>
            <p className="text-center text-xs font-mono opacity-60 mt-4">
              © 2025 AI.TOOLS v2.0.0
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for fixed nav on mobile */}
      <div className="md:hidden h-16" />
    </>
  )
}

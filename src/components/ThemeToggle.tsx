'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  // THEME TOGGLE HIDDEN - Light mode under development
  return null;
  
  /* TEMPORARILY DISABLED
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-20 h-10 bg-gray-200 dark:bg-gray-800 rounded-full border-3 border-black dark:border-white animate-pulse" />
    )
  }

  const currentTheme = resolvedTheme || theme

  return (
    <button
      onClick={() => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        // Force immediate update of the HTML class
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(newTheme)
      }}
      className="relative group"
      aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Toggle Container *//*}
      <div className="relative w-20 h-10 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-indigo-900 dark:to-purple-900 rounded-full border-3 border-gray-800 dark:border-gray-200 transition-all duration-300 hover:scale-105 shadow-brutal-sm">
        {/* Toggle Ball *//*}
        <div
          className={`absolute top-1 h-8 w-8 rounded-full border-2 border-gray-800 dark:border-gray-200 transition-all duration-300 flex items-center justify-center shadow-lg ${
            currentTheme === 'dark' 
              ? 'translate-x-10 bg-gradient-to-br from-indigo-600 to-purple-600' 
              : 'translate-x-1 bg-gradient-to-br from-yellow-400 to-orange-400'
          }`}
        >
          {/* Icons *//*}
          <div className="relative w-5 h-5">
            <Sun 
              className={`absolute inset-0 w-5 h-5 text-white transition-all duration-300 ${
                currentTheme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
              }`}
              strokeWidth={2.5}
            />
            <Moon 
              className={`absolute inset-0 w-5 h-5 text-white transition-all duration-300 ${
                currentTheme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
              }`}
              strokeWidth={2.5}
            />
          </div>
        </div>
        
        {/* Decorative Elements *//*}
        <div className={`absolute top-2 left-3 transition-all duration-500 ${
          theme === 'light' ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-1 h-1 bg-yellow-500 rounded-full animate-pulse" />
        </div>
        <div className={`absolute bottom-2 left-5 transition-all duration-500 delay-100 ${
          theme === 'light' ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-0.5 h-0.5 bg-orange-500 rounded-full animate-pulse" />
        </div>
        
        <div className={`absolute top-2 right-3 transition-all duration-500 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
        </div>
        <div className={`absolute bottom-2 right-5 transition-all duration-500 delay-100 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse" />
        </div>
      </div>
      
      {/* Hover Label *//*}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap rounded">
        {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
      </div>
    </button>
  )
  */
}

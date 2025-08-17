'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, Loader2, FileText, Wrench, TrendingUp } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  type: 'article' | 'tool'
  title: string
  excerpt: string
  url: string
  category: string
  score: number
}

interface SearchBarProps {
  className?: string
  placeholder?: string
}

export default function SearchBar({ className = '', placeholder = 'Search articles, tools, tutorials...' }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const debounceTimer = useRef<NodeJS.Timeout>()

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
        setTimeout(() => inputRef.current?.focus(), 100)
      }
      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Search function
  const performSearch = async (searchQuery: string) => {
    if (searchQuery.trim().length < 2) {
      setResults([])
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      
      if (!response.ok) {
        throw new Error('Search failed')
      }

      const data = await response.json()
      setResults(data.results || [])
    } catch (err) {
      console.error('Search error:', err)
      setError('Search failed. Please try again.')
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }

  // Debounced search
  const handleSearch = (value: string) => {
    setQuery(value)
    
    // Clear previous timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current)
    }

    // Set new timer
    debounceTimer.current = setTimeout(() => {
      performSearch(value)
    }, 300)
  }

  const handleResultClick = () => {
    setIsOpen(false)
    setQuery('')
    setResults([])
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <FileText className="w-4 h-4" />
      case 'tool':
        return <Wrench className="w-4 h-4" />
      default:
        return <TrendingUp className="w-4 h-4" />
    }
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-60" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3 bg-white dark:bg-black border-4 border-black dark:border-white font-bold focus:outline-none focus:brutal-shadow transition-all"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {isLoading && <Loader2 className="w-4 h-4 animate-spin opacity-60" />}
          {query && (
            <button
              onClick={() => {
                setQuery('')
                setResults([])
                inputRef.current?.focus()
              }}
              className="p-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden md:inline px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (query.length > 0 || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-black border-4 border-black dark:border-white brutal-shadow-xl max-h-96 overflow-y-auto z-50">
          {error && (
            <div className="p-4 text-red-500 font-bold">
              {error}
            </div>
          )}

          {isLoading && results.length === 0 && (
            <div className="p-8 text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 opacity-60" />
              <p className="font-mono text-sm opacity-60">Searching...</p>
            </div>
          )}

          {!isLoading && query.length >= 2 && results.length === 0 && (
            <div className="p-8 text-center">
              <p className="font-bold mb-2">No results found</p>
              <p className="text-sm opacity-60">Try different keywords</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="divide-y-2 divide-gray-100 dark:divide-gray-900">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  onClick={handleResultClick}
                  className="block p-4 hover:bg-lime-400 hover:text-black transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-black dark:bg-white text-white dark:text-black group-hover:bg-black group-hover:text-lime-400">
                      {getIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono opacity-60 uppercase">
                          {result.type}
                        </span>
                        <span className="text-xs font-bold px-2 py-1 bg-gray-100 dark:bg-gray-900 group-hover:bg-black group-hover:text-lime-400">
                          {result.category}
                        </span>
                      </div>
                      <h4 className="font-black text-sm mb-1 line-clamp-1">
                        {result.title}
                      </h4>
                      <p className="text-xs opacity-70 line-clamp-2">
                        {result.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {results.length > 0 && (
            <div className="p-3 bg-gray-50 dark:bg-gray-950 text-center">
              <p className="text-xs font-mono opacity-60">
                Press <kbd className="px-1 py-0.5 bg-white dark:bg-black border border-gray-300 dark:border-gray-700">ESC</kbd> to close
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

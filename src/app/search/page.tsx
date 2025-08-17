'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Search as SearchIcon, Calendar, User, Tag, ArrowRight, Loader2 } from 'lucide-react'
import { articles } from '@/lib/articles'
import Breadcrumb from '@/components/Breadcrumb'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  
  const [query, setQuery] = useState(initialQuery)
  const [isSearching, setIsSearching] = useState(false)

  // Simulate search delay for better UX
  useEffect(() => {
    if (query) {
      setIsSearching(true)
      const timer = setTimeout(() => setIsSearching(false), 300)
      return () => clearTimeout(timer)
    }
  }, [query])

  // Search logic
  const searchResults = useMemo(() => {
    if (!query.trim()) return []

    const searchTerm = query.toLowerCase()
    
    return articles.filter(article => {
      // Search in title
      if (article.title.toLowerCase().includes(searchTerm)) return true
      
      // Search in description
      if (article.description?.toLowerCase().includes(searchTerm)) return true
      
      // Search in category
      if (article.category?.toLowerCase().includes(searchTerm)) return true
      
      // Search in tags
      if (article.tags?.some(tag => tag.toLowerCase().includes(searchTerm))) return true
      
      // Search in content (if available)
      if (article.content && article.content.toLowerCase().includes(searchTerm)) return true
      
      // Search in author
      if (article.author.name.toLowerCase().includes(searchTerm)) return true
      
      return false
    }).sort((a, b) => {
      // Sort by relevance (title matches first)
      const aInTitle = a.title.toLowerCase().includes(searchTerm)
      const bInTitle = b.title.toLowerCase().includes(searchTerm)
      
      if (aInTitle && !bInTitle) return -1
      if (!aInTitle && bInTitle) return 1
      
      // Then by date
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
  }, [query])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/20 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-purple-900/10">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Search', current: true }
          ]}
          className="mb-8"
        />

        {/* Search Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Search AI Dev Tools
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, tools, MCP servers..."
                className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                autoFocus
              />
              {isSearching && (
                <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-600 animate-spin" />
              )}
            </div>
            
            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <button
                onClick={() => setQuery('MCP servers')}
                className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
              >
                MCP Servers
              </button>
              <button
                onClick={() => setQuery('Claude')}
                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
              >
                Claude
              </button>
              <button
                onClick={() => setQuery('Cursor')}
                className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
              >
                Cursor
              </button>
              <button
                onClick={() => setQuery('GitHub Copilot')}
                className="px-3 py-1 text-sm bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
              >
                GitHub Copilot
              </button>
              <button
                onClick={() => setQuery('AI productivity')}
                className="px-3 py-1 text-sm bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors"
              >
                Productivity
              </button>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div>
          {query && (
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                {isSearching ? (
                  'Searching...'
                ) : (
                  <>
                    Found <span className="font-semibold text-purple-600 dark:text-purple-400">{searchResults.length}</span> results 
                    for "<span className="font-semibold">{query}</span>"
                  </>
                )}
              </p>
            </div>
          )}

          {!isSearching && searchResults.length > 0 && (
            <div className="grid gap-6">
              {searchResults.map((article) => (
                <article 
                  key={article.slug}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all p-6 group"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Thumbnail */}
                    {article.image && (
                      <div className="md:w-48 h-32 md:h-auto">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex-1">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">
                          {article.category}
                        </span>
                        {article.featured && (
                          <span className="text-xs font-semibold px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        <Link href={`/blog/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h2>
                      
                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {article.description}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{article.author.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          <span>{article.tags?.slice(0, 3).join(', ')}</span>
                        </div>
                      </div>
                      
                      {/* Read More */}
                      <Link 
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-2 mt-4 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-colors"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {!isSearching && query && searchResults.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                <SearchIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No results found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your search terms or browse our categories
              </p>
              <div className="flex gap-4 justify-center">
                <Link 
                  href="/blog"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  Browse All Articles
                </Link>
                <Link 
                  href="/tools"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                >
                  View Tools
                </Link>
              </div>
            </div>
          )}

          {!query && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                <SearchIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Start searching
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enter a keyword above to search our articles and resources
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

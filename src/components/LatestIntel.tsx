'use client'

import Link from 'next/link'
import { Activity, Clock, TrendingUp, Zap, ChevronRight } from 'lucide-react'
import { articles } from '@/lib/articles'
import LazyImage from '@/components/optimized/LazyImage'

export default function LatestIntel() {
  // Get the first 3 articles
  const featuredArticle = articles[0]
  const otherArticles = articles.slice(1, 4)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-cyan-500/[0.03] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-cyan-400">LATEST</span>
            <span className="text-white mx-2">•</span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">INTEL</span>
          </h2>
          
          {/* Stats bar */}
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-gray-400">ARTICLES:</span>
              <span className="text-green-400 font-bold">8 LIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-400">AVG READ:</span>
              <span className="text-yellow-400 font-bold">8.4 MIN</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-gray-400">UPDATED:</span>
              <span className="text-blue-400 font-bold">2 MIN AGO</span>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-12">
            <Link href={`/blog/${featuredArticle.slug}`}>
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-gray-900/90 border border-cyan-500/30 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image side */}
                    <div className="lg:w-1/2 h-64 lg:h-auto relative bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                      {featuredArticle.featuredImage ? (
                        <LazyImage 
                          src={featuredArticle.featuredImage} 
                          alt={featuredArticle.title}
                          fill
                          className="w-full h-full object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
                          {/* Code pattern background as fallback */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="text-cyan-400 font-mono text-xs p-4 leading-relaxed">
                              {`const optimize = async () => {
  await loadContext();
  performance.boost(3.0);
  return faster;
}`}
                            </div>
                          </div>
                        </>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          FEATURED INTEL
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-2 py-1 bg-gray-800/80 text-cyan-400 text-xs font-mono rounded">
                          ANALYSIS
                        </span>
                      </div>
                    </div>
                    
                    {/* Content side */}
                    <div className="lg:w-1/2 p-8">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {featuredArticle.title}
                      </h3>
                      <p className="text-gray-400 mb-6 line-clamp-3">
                        {featuredArticle.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                            {featuredArticle.author.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-white font-semibold">{featuredArticle.author.name}</div>
                            <div className="text-gray-500 text-xs">{featuredArticle.author.role}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-xs">
                          <span className="text-gray-500">{featuredArticle.readTime}</span>
                          <span className="text-green-400">2.4K READS</span>
                          <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Other Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherArticles.map((article, index) => (
            <Link key={article.slug} href={`/blog/${article.slug}`}>
              <div className="group cursor-pointer h-full">
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg blur-lg group-hover:blur-xl transition-all" />
                  <div className="relative h-full bg-gray-900/90 border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all">
                    {/* Image */}
                    <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      {article.thumbnail ? (
                        <LazyImage 
                          src={article.thumbnail} 
                          alt={article.title}
                          fill
                          className="w-full h-full object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                      )}
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                      {index === 0 && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded">
                            HOT
                          </span>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 bg-purple-500 text-white text-xs font-bold rounded">
                            TRENDING
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">{article.readTime}</span>
                        <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-white overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                ACCESS ALL INTEL
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

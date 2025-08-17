import Link from 'next/link'
import { 
  ArrowRight, Search, Filter, Calendar, Clock, 
  TrendingUp, ChevronRight, AlertCircle, Terminal,
  FileText, Tag, User, BarChart
} from 'lucide-react'
import { articles } from '@/lib/articles'
import SearchBar from '@/components/SearchBar'
import Navbar from '@/components/Navbar'

// Categories for filtering
// Hide duplicate articles (only hide the security vulnerabilities one)
const duplicateSlugs = [
  'ai-security-vulnerabilities-hidden-crisis'
]

// Filter out duplicates for categories
const visibleArticlesForCategories = articles.filter(a => !duplicateSlugs.includes(a.slug))

const categories = [
  { name: "ALL", count: visibleArticlesForCategories.length, active: true },
  { name: "MCP GUIDE", count: visibleArticlesForCategories.filter(a => a.category === "MCP GUIDE").length, active: false },
  { name: "COMPARISON", count: visibleArticlesForCategories.filter(a => a.category === "COMPARISON").length, active: false },
  { name: "TUTORIAL", count: visibleArticlesForCategories.filter(a => a.category === "TUTORIAL").length, active: false },
  { name: "NEWS", count: visibleArticlesForCategories.filter(a => a.category === "NEWS").length, active: false },
]

export default async function BlogPage() {
  // Hide duplicate articles (only hide the security vulnerabilities one)
  const duplicateSlugs = [
    'ai-security-vulnerabilities-hidden-crisis'
  ]
  
  // Filter out duplicates
  const visibleArticles = articles.filter(a => !duplicateSlugs.includes(a.slug))
  
  // Get hot/featured articles (from visible articles only)
  const featuredArticles = visibleArticles.filter(a => a.featured)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/20 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-purple-900/10 text-gray-800 dark:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="border-b-4 border-black dark:border-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 mb-4">
            <FileText className="w-8 h-8" />
            <span className="font-mono text-sm">BLOG.ARTICLES</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            LATEST INTEL
          </h1>
          <p className="text-xl font-mono opacity-60">
            &gt; {visibleArticles.length} ARTICLES // UPDATED DAILY // NO FLUFF
          </p>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="border-b-4 border-black dark:border-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <SearchBar placeholder="SEARCH ARTICLES..." />
            </div>
            <button className="px-6 py-3 bg-lime-400 text-black font-black border-4 border-black brutal-hover">
              <Filter className="inline w-5 h-5 mr-2" />
              FILTER
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={`px-4 py-2 font-black text-sm border-3 ${
                  cat.active 
                    ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white' 
                    : 'bg-white dark:bg-black border-black dark:border-white brutal-hover'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Alert for Hot Topics */}
      {featuredArticles.length > 0 && (
        <section className="bg-red-500 text-white py-3 border-b-4 border-black">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 animate-pulse" />
              <span className="font-black text-sm">{featuredArticles.length} FEATURED ARTICLES TODAY</span>
              <span className="font-mono text-xs">// MUST READ</span>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            {visibleArticles.map((article) => (
              <Link href={`/blog/${article.slug}`} key={article.slug}>
                <article className="bg-white dark:bg-black border-4 border-black dark:border-white brutal-shadow-lg brutal-hover cursor-pointer">
                  <div className="flex">
                    {/* Category Sidebar */}
                    <div className={`w-2 md:w-32 ${
                      article.featured ? 'bg-red-500' : 
                      article.category === 'TUTORIAL' ? 'bg-lime-400' :
                      article.category === 'COMPARISON' ? 'bg-orange-500' :
                      article.category === 'MCP GUIDE' ? 'bg-cyan-500' :
                      'bg-black dark:bg-white'
                    } flex items-center justify-center`}>
                      <span className="hidden md:block transform -rotate-90 font-black text-sm whitespace-nowrap text-white dark:text-black">
                        {article.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          {/* Meta Info */}
                          <div className="flex items-center space-x-4 mb-3">
                            {article.featured && (
                              <span className="bg-red-500 text-white px-2 py-1 text-xs font-black animate-pulse">
                                ● FEATURED
                              </span>
                            )}
                            <span className="font-mono text-xs opacity-60">
                              <Calendar className="inline w-3 h-3 mr-1" />
                              {new Date(article.publishDate).toLocaleDateString()}
                            </span>
                            <span className="font-mono text-xs opacity-60">
                              <Clock className="inline w-3 h-3 mr-1" />
                              {article.readTime} MIN
                            </span>
                            <span className="font-mono text-xs opacity-60">
                              <BarChart className="inline w-3 h-3 mr-1" />
                              {article.wordCount} WORDS
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="text-2xl md:text-3xl font-black mb-3 leading-tight">
                            {article.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="text-lg mb-4 opacity-80">
                            {article.excerpt}
                          </p>

                          {/* Tags and Author */}
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {article.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-black">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            <span className="font-mono text-xs opacity-60">
                              BY: {article.author.name}
                            </span>
                          </div>
                        </div>

                        <ChevronRight className="w-8 h-8 ml-4" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 font-black text-lg brutal-shadow-xl brutal-hover">
              LOAD MORE ARTICLES →
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-lime-400 text-black border-t-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-4">GET DAILY UPDATES</h3>
            <p className="font-mono mb-6">NO SPAM // UNSUBSCRIBE ANYTIME // 47K+ SUBSCRIBERS</p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="flex-1 px-4 py-3 bg-white border-4 border-black font-mono font-bold focus:outline-none"
              />
              <button className="bg-black text-white px-6 py-3 font-black border-4 border-black border-l-0">
                JOIN
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t-4 border-black dark:border-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-xs">
            © 2025 AI.TOOLS // BLOG.SECTION // ALL SYSTEMS OPERATIONAL
          </p>
        </div>
      </footer>
    </div>
  )
}

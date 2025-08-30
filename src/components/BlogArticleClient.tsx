'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Terminal, Share2, Bookmark, Copy, ChevronRight, User, Calendar, Clock, BookOpen
} from 'lucide-react'
import ReadingProgress from '@/components/ReadingProgress'
import LazyImage from '@/components/optimized/LazyImage'

interface Article {
  slug: string
  title: string
  excerpt: string
  thumbnail: string
  featuredImage: string
  imageAlt: string
  category: string
  tags: string[]
  author: {
    name: string
    role: string
    bio: string
  }
  publishDate: string
  updateDate: string
  readTime: number
  wordCount: number
  tableOfContents: Array<{
    id: string
    title: string
    level: number
  }>
  content: string
  relatedArticles?: string[]
  featured: boolean
}

interface BlogArticleClientProps {
  article: Article
  relatedArticles: Article[]
}

export default function BlogArticleClient({ article, relatedArticles }: BlogArticleClientProps) {
  const [copiedLink, setCopiedLink] = useState(false)

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  const handleSubscribe = () => {
    localStorage.removeItem('newsletter_interacted')
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Reading Progress Bar */}
      <ReadingProgress />
      
      {/* Navigation */}
      <nav className="border-b-4 border-black dark:border-white sticky top-0 z-40 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center brutal-shadow-red brutal-hover">
                <Terminal className="w-6 h-6 text-white dark:text-black" />
              </div>
              <div>
                <div className="text-2xl font-black tracking-tighter">AI.TOOLS</div>
                <div className="text-xs font-mono text-red-500">DAILY.UPDATES</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="px-4 py-2 font-black text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                HOME
              </Link>
              <Link href="/blog" className="px-4 py-2 font-black text-sm bg-black text-white dark:bg-white dark:text-black">
                BLOG
              </Link>
              <Link href="/tools" className="px-4 py-2 font-black text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                TOOLS
              </Link>
              <Link href="/mcp" className="px-4 py-2 font-black text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                MCP
              </Link>
            </div>

            <button 
              onClick={handleSubscribe}
              className="bg-red-500 text-white px-6 py-3 font-black text-sm brutal-shadow brutal-hover"
            >
              SUBSCRIBE →
            </button>
          </div>
        </div>
      </nav>

      {/* Article Header with Featured Image */}
      <header className="border-b-4 border-black dark:border-white">
        {/* Featured Image */}
        {article.featuredImage && (
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <LazyImage 
              src={article.featuredImage}
              alt={article.imageAlt || article.title}
              fill
              priority
              className="w-full h-full object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 text-white p-8">
              <div className="container mx-auto">
                <div className="max-w-4xl">
                  {/* Breadcrumb */}
                  <div className="flex items-center space-x-2 mb-6 font-mono text-sm">
                    <Link href="/" className="hover:underline">HOME</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href="/blog" className="hover:underline">BLOG</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="opacity-80">{article.category}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                    {article.title}
                  </h1>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-6 font-mono text-sm">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {article.author.name}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(article.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {article.readTime} MIN READ
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      {article.wordCount} WORDS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* If no featured image, show regular header */}
        {!article.featuredImage && (
          <div className="py-12 bg-black text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 mb-6 font-mono text-sm">
                  <Link href="/" className="hover:underline">HOME</Link>
                  <ChevronRight className="w-4 h-4" />
                  <Link href="/blog" className="hover:underline">BLOG</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="opacity-80">{article.category}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                  {article.title}
                </h1>

                {/* Excerpt */}
                <p className="text-xl mb-8 opacity-90">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 font-mono text-sm">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {article.author.name}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(article.publishDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {article.readTime} MIN READ
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {article.wordCount} WORDS
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24">
                <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-6 brutal-shadow-lg">
                  <h3 className="font-black text-sm mb-4">TABLE OF CONTENTS</h3>
                  <nav className="space-y-2">
                    {article.tableOfContents.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.id}`}
                        className="block font-mono text-xs hover:text-red-500 transition-colors"
                      >
                        {item.level === 2 ? '→' : '  ↳'} {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Author Bio */}
                <div className="mt-6 bg-lime-400 text-black border-4 border-black p-6 brutal-shadow-lg">
                  <h3 className="font-black text-sm mb-2">AUTHOR</h3>
                  <p className="font-black text-lg mb-2">{article.author.name}</p>
                  <p className="text-sm mb-2">{article.author.role}</p>
                  <p className="text-xs">{article.author.bio}</p>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <div className="lg:col-span-9">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t-4 border-black dark:border-white">
                <h3 className="font-black text-sm mb-4">TAGS</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase()}`}
                      className="px-3 py-2 bg-black dark:bg-white text-white dark:text-black font-black text-sm brutal-shadow brutal-hover"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 flex items-center gap-4">
                <button className="px-4 py-2 border-3 border-black dark:border-white font-black text-sm brutal-hover">
                  <Share2 className="inline w-4 h-4 mr-2" />
                  SHARE
                </button>
                <button className="px-4 py-2 border-3 border-black dark:border-white font-black text-sm brutal-hover">
                  <Bookmark className="inline w-4 h-4 mr-2" />
                  BOOKMARK
                </button>
                <button 
                  onClick={copyLink}
                  className="px-4 py-2 border-3 border-black dark:border-white font-black text-sm brutal-hover"
                >
                  <Copy className="inline w-4 h-4 mr-2" />
                  {copiedLink ? 'COPIED!' : 'COPY LINK'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 bg-black dark:bg-white text-white dark:text-black border-t-4 border-black dark:border-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-black mb-8">RELATED ARTICLES</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.slug} href={`/blog/${relatedArticle.slug}`}>
                  <div className="bg-white dark:bg-black text-black dark:text-white border-4 border-white dark:border-black p-6 brutal-shadow brutal-hover cursor-pointer">
                    {/* Thumbnail */}
                    {relatedArticle.thumbnail && (
                      <div className="mb-4 -mx-6 -mt-6">
                        <img 
                          src={relatedArticle.thumbnail}
                          alt={relatedArticle.imageAlt || relatedArticle.title}
                          className="w-full h-48 object-cover border-b-4 border-white dark:border-black"
                        />
                      </div>
                    )}
                    <span className="font-black text-xs bg-red-500 text-white px-2 py-1">
                      {relatedArticle.category}
                    </span>
                    <h3 className="font-black text-lg mt-4 mb-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm opacity-80 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 border-t-4 border-black dark:border-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-xs">
            © 2025 AI.TOOLS // ARTICLE.PAGE // ALL SYSTEMS OPERATIONAL
          </p>
        </div>
      </footer>
    </div>
  )
}

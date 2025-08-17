import { notFound } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft, Clock, Calendar, User, Tag, 
  ChevronRight, BookOpen, Share2, Bookmark,
  Copy, TrendingUp, CheckCircle
} from 'lucide-react'
import { articles } from '@/lib/articles'

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | AI Dev Tools Daily`,
    description: article.excerpt,
    keywords: article.tags.join(', '),
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishDate,
      authors: [article.author.name],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-cyan-500/30 sticky top-0 z-50 bg-black/90 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/blog" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold">Back to Blog</span>
            </Link>
            <div className="flex items-center gap-4">
              {article.featured && (
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500 rounded-full text-xs font-bold text-purple-400">
                  FEATURED
                </span>
              )}
              <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500 rounded-full text-xs font-bold text-cyan-400">
                {article.category}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/20" />
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Glow Effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-8">
                <Link href="/" className="text-sm text-gray-500 hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">Home</Link>
                <ChevronRight className="w-3 h-3 text-gray-600" />
                <Link href="/blog" className="text-sm text-gray-500 hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">Blog</Link>
                <ChevronRight className="w-3 h-3 text-gray-600" />
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent uppercase tracking-wider">
                  {article.category}
                </span>
              </div>

              {/* Title with Animation */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-black leading-tight mb-2">
                  <span className="bg-gradient-to-br from-cyan-300 via-cyan-400 to-purple-500 bg-clip-text text-transparent inline-block hover:scale-[1.02] transition-transform duration-300">
                    {article.title.split('(')[0].trim()}
                  </span>
                  {article.title.includes('(') && (
                    <span className="block mt-4 text-4xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      ({article.title.split('(')[1]}
                    </span>
                  )}
                </h1>
              </div>

              {/* Excerpt with Better Styling */}
              <div className="mb-10">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                  {article.excerpt}
                </p>
              </div>

              {/* Meta Info Cards */}
              <div className="flex flex-wrap gap-4 mb-8">
                {/* Author Card */}
                <div className="group flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-full px-5 py-3 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-sm font-semibold text-cyan-400">{article.author.name}</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-full px-5 py-3 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">
                    {new Date(article.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                {/* Reading Time */}
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-full px-5 py-3 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300 font-medium">{article.readTime} min read</span>
                </div>

                {/* Word Count */}
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-yellow-500/20 rounded-full px-5 py-3 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                  <BookOpen className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-300 font-medium">{article.wordCount.toLocaleString()} words</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <button className="group px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                    <span className="text-sm font-medium text-gray-300">Share</span>
                  </div>
                </button>
                
                <button className="group px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-300">Save</span>
                  </div>
                </button>

                <button className="group px-6 py-3 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-lg hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2">
                    <Copy className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-300">Copy Link</span>
                  </div>
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 relative">
                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-1000" 
                       style={{width: '0%'}} 
                       id="reading-progress" />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">Start Reading</span>
                  <span className="text-xs text-gray-500">{article.readTime} min to complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6">
                  <h3 className="font-bold text-sm mb-4 text-cyan-400 uppercase tracking-wider">Table of Contents</h3>
                  <nav className="space-y-2 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-cyan-500/20 scrollbar-track-transparent">
                    {article.tableOfContents.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1"
                        style={{ 
                          paddingLeft: item.level === 2 ? '0' : item.level === 3 ? '1rem' : '2rem',
                          fontSize: item.level === 2 ? '0.875rem' : '0.8125rem'
                        }}
                      >
                        <span className="mr-2 text-gray-600">
                          {item.level === 2 ? '→' : item.level === 3 ? '↳' : '·'}
                        </span>
                        <span className={item.level === 2 ? 'font-medium' : ''}>
                          {item.title}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Author Bio */}
                <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="font-bold text-sm mb-4 text-purple-400 uppercase tracking-wider">Author</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-bold text-white">{article.author.name}</p>
                      <p className="text-sm text-purple-400">{article.author.role}</p>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {article.author.bio}
                    </p>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 border border-cyan-500/30 text-cyan-400 font-medium text-sm rounded-lg hover:bg-cyan-500/10 transition-colors flex items-center justify-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share Article
                  </button>
                  <button className="w-full px-4 py-3 border border-cyan-500/30 text-cyan-400 font-medium text-sm rounded-lg hover:bg-cyan-500/10 transition-colors flex items-center justify-center gap-2">
                    <Bookmark className="w-4 h-4" />
                    Save for Later
                  </button>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <div className="lg:col-span-9">
              {/* Article Body with enhanced readability */}
              <div className="article-content prose prose-invert max-w-none
                prose-headings:font-black prose-headings:text-cyan-400
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-purple-400
                prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
                prose-code:text-base prose-code:text-cyan-400 prose-code:bg-gray-900 prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:text-base prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800
                [&>div>p]:text-[1.125rem] [&>div>p]:leading-[1.75] [&>div>p]:text-gray-300 [&>div>p]:mb-6
                [&>div>ul>li]:text-[1.125rem] [&>div>ul>li]:leading-[1.75] [&>div>ul>li]:text-gray-300 [&>div>ul>li]:mb-3
                [&>div>ol>li]:text-[1.125rem] [&>div>ol>li]:leading-[1.75] [&>div>ol>li]:text-gray-300 [&>div>ol>li]:mb-3
                [&>div>ul]:mb-6 [&>div>ol]:mb-6
                [&>div>blockquote]:text-[1.125rem] [&>div>blockquote]:leading-[1.75]
                [&>div>div>p]:text-[1.0625rem] [&>div>div>ul>li]:text-[1.0625rem]
                [&_strong]:text-white [&_strong]:font-semibold">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>

              {/* Tags */}
              <div className="mt-16 pt-8 border-t border-cyan-500/30">
                <h3 className="font-bold text-sm mb-4 text-cyan-400 uppercase tracking-wider">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase().replace(' ', '-')}`}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium rounded-full hover:bg-cyan-500/20 transition-colors"
                    >
                      #{tag.toLowerCase().replace(' ', '-')}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <section className="py-16 border-t border-cyan-500/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-black mb-8 text-cyan-400">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {article.relatedArticles.map((related) => {
                const relatedArticle = articles.find(a => a.slug === related)
                if (!relatedArticle) return null
                
                return (
                  <Link key={related} href={`/blog/${related}`}>
                    <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-colors h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-purple-500/20 border border-purple-500 rounded text-xs font-bold text-purple-400">
                          {relatedArticle.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {relatedArticle.readTime} min
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-3 text-white hover:text-cyan-400 transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 border-t border-cyan-500/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Stay Updated with AI Dev Tools
            </h2>
            <p className="text-gray-400 mb-8">
              Get weekly insights on the latest AI coding tools, MCP servers, and productivity tips.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © 2025 AI Dev Tools Daily • All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}

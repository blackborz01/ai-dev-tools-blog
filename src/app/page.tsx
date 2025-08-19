'use client'

import { useState, lazy, Suspense } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight, AlertCircle, ChevronRight } from 'lucide-react'
import { articles } from '@/lib/articles'

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
  </div>
)

// Critical components - load immediately
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Lazy load heavy components with dynamic imports
const OriginalHero = dynamic(() => import('@/components/OriginalHero'), {
  loading: () => <LoadingSkeleton />,
  ssr: true
})

const SmartToolFinder = dynamic(() => import('@/components/SmartToolFinder'), {
  loading: () => <LoadingSkeleton />,
  ssr: false
})

const ToolComparisonWidget = dynamic(() => import('@/components/ToolComparisonWidget'), {
  loading: () => <LoadingSkeleton />,
  ssr: false
})

const LiveActivityFeed = dynamic(() => import('@/components/LiveActivityFeed'), {
  ssr: false
})

const NewsletterPopup = dynamic(() => import('@/components/NewsletterPopup'), {
  ssr: false
})

const TrustBadges = dynamic(() => import('@/components/TrustBadges'), {
  ssr: true
})

const FuturisticTrending = dynamic(() => import('@/components/FuturisticTrending'), {
  loading: () => <LoadingSkeleton />,
  ssr: false
})

const DynamicStatsHero = dynamic(
  () => import('@/components/DynamicStats').then(mod => ({ default: mod.DynamicStatsHero })),
  { ssr: false }
)

const SocialProof = dynamic(() => import('@/components/SocialProof'), {
  ssr: true
})

// Inline critical DealsSection to reduce imports
const DealsSection = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const deals = [
    {
      id: 1,
      tool: 'Cursor Pro',
      icon: '🎯',
      discount: '50% OFF',
      originalPrice: 20,
      dealPrice: 10,
      code: 'AITOOLS50',
      expiresIn: '2 days',
      isHot: true,
      description: 'First 3 months at half price',
      link: '/tools'
    },
    {
      id: 2,
      tool: 'GitHub Copilot',
      icon: '🐙',
      discount: 'FREE TRIAL',
      originalPrice: 10,
      dealPrice: 0,
      expiresIn: '30 days',
      isHot: false,
      description: '60-day free trial for students',
      link: '/tools'
    },
    {
      id: 3,
      tool: 'Claude Pro',
      icon: '🧠',
      discount: '25% OFF',
      originalPrice: 20,
      dealPrice: 15,
      code: 'CLAUDE25',
      expiresIn: '5 days',
      isHot: true,
      description: 'Annual subscription discount',
      link: '/tools'
    }
  ]

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section className="py-16 bg-white dark:bg-black border-b-4 border-black dark:border-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            EXCLUSIVE DISCOUNTS
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="p-6 border-4 border-black dark:border-white">
              <div className="text-3xl mb-2">{deal.icon}</div>
              <h3 className="text-xl font-bold">{deal.tool}</h3>
              <div className="text-2xl font-black text-red-500">{deal.discount}</div>
              {deal.code && (
                <button
                  onClick={() => copyCode(deal.code!)}
                  className="mt-2 px-4 py-2 bg-black text-white dark:bg-white dark:text-black"
                >
                  {copiedCode === deal.code ? 'COPIED!' : deal.code}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const featuredArticles = articles.slice(0, 3)

  return (
    <>
      <Navbar />
      
      {/* Hero Section - Critical, render immediately */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            SHIP CODE <span className="text-blue-600">3X FASTER</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Master AI Coding Tools. Fix MCP Errors. Boost Productivity.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/blog" 
              className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-bold hover:scale-105 transition-transform"
            >
              READ GUIDES
            </Link>
            <Link 
              href="/tools" 
              className="px-8 py-4 border-4 border-black dark:border-white font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              EXPLORE TOOLS
            </Link>
          </div>
        </div>
      </section>

      {/* Lazy load non-critical sections */}
      <Suspense fallback={<LoadingSkeleton />}>
        <OriginalHero />
      </Suspense>

      {/* Featured Articles - Important for SEO, keep static */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <article key={article.slug} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">
                  <Link href={`/blog/${article.slug}`} className="hover:text-blue-600">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{article.excerpt}</p>
                <Link 
                  href={`/blog/${article.slug}`} 
                  className="text-blue-600 font-semibold hover:underline inline-flex items-center"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DealsSection />

      {/* Lazy load heavy components */}
      <Suspense fallback={<LoadingSkeleton />}>
        <SmartToolFinder />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <ToolComparisonWidget />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <FuturisticTrending />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <TrustBadges />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <SocialProof />
      </Suspense>

      {/* Non-critical components - load after interaction */}
      <Suspense fallback={null}>
        <LiveActivityFeed />
      </Suspense>

      <Suspense fallback={null}>
        <NewsletterPopup />
      </Suspense>

      <Suspense fallback={null}>
        <DynamicStatsHero />
      </Suspense>

      <Footer />
    </>
  )
}

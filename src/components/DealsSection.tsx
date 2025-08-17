'use client'

import { useState, useEffect } from 'react'
import { Tag, Percent, Clock, Fire, ExternalLink, Star } from 'lucide-react'
import Link from 'next/link'

interface Deal {
  id: number
  tool: string
  icon: string
  discount: string
  originalPrice: number
  dealPrice: number
  code?: string
  expiresIn: string
  isHot: boolean
  verified: boolean
  category: string
  description: string
  link: string
  savedByUsers: number
}

export default function DealsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const deals: Deal[] = [
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
      verified: true,
      category: 'IDE',
      description: 'First 3 months at half price for new users',
      link: '/tools/cursor',
      savedByUsers: 234
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
      verified: true,
      category: 'Code Completion',
      description: '60-day free trial for verified students',
      link: '/tools/github-copilot',
      savedByUsers: 567
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
      verified: true,
      category: 'AI Assistant',
      description: 'Annual subscription discount',
      link: '/tools/claude',
      savedByUsers: 189
    },
    {
      id: 4,
      tool: 'Windsurf',
      icon: '🏄',
      discount: '40% OFF',
      originalPrice: 15,
      dealPrice: 9,
      code: 'SURF40',
      expiresIn: '1 week',
      isHot: false,
      verified: true,
      category: 'IDE',
      description: 'Launch week special offer',
      link: '/tools/windsurf',
      savedByUsers: 123
    },
    {
      id: 5,
      tool: 'V0 by Vercel',
      icon: '▲',
      discount: '$10 CREDIT',
      originalPrice: 20,
      dealPrice: 10,
      expiresIn: 'No expiry',
      isHot: false,
      verified: true,
      category: 'UI Generation',
      description: 'Free credits for new accounts',
      link: '/tools/v0',
      savedByUsers: 445
    },
    {
      id: 6,
      tool: 'Perplexity Pro',
      icon: '🔍',
      discount: '70% OFF',
      originalPrice: 20,
      dealPrice: 6,
      code: 'SEARCH70',
      expiresIn: '12 hours',
      isHot: true,
      verified: false,
      category: 'Search',
      description: 'Flash sale - limited time only!',
      link: '/tools/perplexity',
      savedByUsers: 892
    }
  ]

  const categories = ['all', ...Array.from(new Set(deals.map(d => d.category)))]
  
  const filteredDeals = selectedCategory === 'all' 
    ? deals 
    : deals.filter(d => d.category === selectedCategory)

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  // Sort deals by hot status and expiry time
  const sortedDeals = [...filteredDeals].sort((a, b) => {
    if (a.isHot && !b.isHot) return -1
    if (!a.isHot && b.isHot) return 1
    return 0
  })

  return (
    <section className="py-16 bg-white dark:bg-black border-b-4 border-black dark:border-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-black text-xs mb-4 animate-pulse">
            <Fire className="w-4 h-4" />
            LIMITED TIME DEALS
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            EXCLUSIVE DISCOUNTS
          </h2>
          <p className="text-lg opacity-70 font-bold">
            Save big on premium AI tools - verified daily
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 font-black text-sm border-4 border-black transition-all ${
                selectedCategory === category
                  ? 'bg-black text-white dark:bg-white dark:text-black brutal-shadow'
                  : 'bg-white dark:bg-black hover:brutal-shadow'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Deals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sortedDeals.map((deal) => (
            <div
              key={deal.id}
              className={`relative bg-white dark:bg-black border-4 border-black dark:border-white brutal-shadow-lg hover:brutal-shadow-xl hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all overflow-hidden ${
                deal.isHot ? 'ring-4 ring-red-500 ring-offset-2' : ''
              }`}
            >
              {/* Hot Badge */}
              {deal.isHot && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-red-500 text-white font-black text-xs">
                  🔥 HOT
                </div>
              )}

              <div className="p-6">
                {/* Tool Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{deal.icon}</span>
                    <div>
                      <h3 className="font-black text-lg">{deal.tool}</h3>
                      <span className="text-xs font-mono opacity-60">{deal.category}</span>
                    </div>
                  </div>
                  {deal.verified && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold">
                      ✓ VERIFIED
                    </div>
                  )}
                </div>

                {/* Discount Display */}
                <div className="mb-4">
                  <div className="text-3xl font-black text-red-500 mb-1">
                    {deal.discount}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg line-through opacity-50">${deal.originalPrice}</span>
                    <span className="text-2xl font-black">${deal.dealPrice}</span>
                    <span className="text-xs font-mono opacity-60">/month</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm mb-4 opacity-70">
                  {deal.description}
                </p>

                {/* Promo Code */}
                {deal.code && (
                  <div className="mb-4">
                    <div className="text-xs font-bold mb-1 opacity-60">PROMO CODE:</div>
                    <button
                      onClick={() => copyCode(deal.code!)}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 border-2 border-dashed border-black dark:border-white font-mono font-black hover:bg-lime-400 hover:text-black transition-colors"
                    >
                      {copiedCode === deal.code ? '✓ COPIED!' : deal.code}
                    </button>
                  </div>
                )}

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <div className="flex items-center gap-1 opacity-60">
                    <Clock className="w-3 h-3" />
                    <span className="font-bold">Expires: {deal.expiresIn}</span>
                  </div>
                  <div className="flex items-center gap-1 opacity-60">
                    <Star className="w-3 h-3" />
                    <span className="font-bold">{deal.savedByUsers} saved</span>
                  </div>
                </div>

                {/* CTA */}
                <Link href={deal.link}>
                  <button className="w-full py-3 bg-black text-white dark:bg-white dark:text-black font-black hover:bg-lime-400 hover:text-black transition-colors flex items-center justify-center gap-2">
                    GET DEAL
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA for Deals */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 text-center brutal-shadow-xl">
          <Tag className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-black mb-3">
            🎁 GET EXCLUSIVE DEALS IN YOUR INBOX
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Be the first to know about flash sales and limited-time offers
          </p>
          <button
            onClick={() => {
              localStorage.removeItem('newsletter_interacted')
              window.location.reload()
            }}
            className="px-8 py-3 bg-white text-purple-500 font-black hover:scale-105 transition-transform"
          >
            SUBSCRIBE FOR DEALS →
          </button>
        </div>
      </div>
    </section>
  )
}

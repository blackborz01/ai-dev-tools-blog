'use client'

import { useState } from 'react'
import { Tag, Clock, Fire, ExternalLink, Star } from 'lucide-react'
import Link from 'next/link'

const SimplifiedDeals = () => {
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
      verified: true,
      description: 'First 3 months at half price for new users',
      link: '/tools',
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
      description: '60-day free trial for verified students',
      link: '/tools',
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
      description: 'Annual subscription discount',
      link: '/tools',
      savedByUsers: 189
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

        {/* Deals Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className={`relative bg-white dark:bg-black border-4 border-black dark:border-white p-6 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all ${
                deal.isHot ? 'ring-4 ring-red-500 ring-offset-2' : ''
              }`}
            >
              {/* Hot Badge */}
              {deal.isHot && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-red-500 text-white font-black text-xs">
                  🔥 HOT
                </div>
              )}

              {/* Tool Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{deal.icon}</span>
                <div>
                  <h3 className="font-black text-lg">{deal.tool}</h3>
                  {deal.verified && (
                    <span className="text-xs text-green-600">✓ VERIFIED</span>
                  )}
                </div>
              </div>

              {/* Discount */}
              <div className="mb-4">
                <div className="text-3xl font-black text-red-500 mb-1">
                  {deal.discount}
                </div>
                <div className="flex items-center gap-3">
                  <span className="line-through opacity-50">${deal.originalPrice}</span>
                  <span className="text-2xl font-black">${deal.dealPrice}</span>
                  <span className="text-xs opacity-60">/month</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm mb-4 opacity-70">
                {deal.description}
              </p>

              {/* Promo Code */}
              {deal.code && (
                <div className="mb-4">
                  <button
                    onClick={() => copyCode(deal.code!)}
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-900 border-2 border-dashed border-black dark:border-white font-mono font-black hover:bg-lime-400 hover:text-black transition-colors text-sm"
                  >
                    {copiedCode === deal.code ? '✓ COPIED!' : deal.code}
                  </button>
                </div>
              )}

              {/* Meta Info */}
              <div className="flex items-center justify-between text-xs mb-4 opacity-60">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {deal.expiresIn}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {deal.savedByUsers} saved
                </span>
              </div>

              {/* CTA */}
              <Link href={deal.link}>
                <button className="w-full py-3 bg-black text-white dark:bg-white dark:text-black font-black hover:bg-lime-400 hover:text-black transition-colors">
                  GET DEAL →
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 text-center">
          <Tag className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-black mb-3">
            🎁 GET EXCLUSIVE DEALS IN YOUR INBOX
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Be the first to know about flash sales
          </p>
          <button className="px-8 py-3 bg-white text-purple-500 font-black hover:scale-105 transition-transform">
            SUBSCRIBE FOR DEALS →
          </button>
        </div>
      </div>
    </section>
  )
}

export default SimplifiedDeals

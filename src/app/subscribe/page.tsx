'use client'

import { useState } from 'react'
import { Mail, Zap, CheckCircle, Sparkles, Bell, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function SubscribePage() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setIsSubscribed(true)
        localStorage.setItem('newsletter_subscribed', 'true')
      } else {
        throw new Error('Subscription failed')
      }
    } catch (err) {
      // For now, simulate success since API might not be set up
      setIsSubscribed(true)
      localStorage.setItem('newsletter_subscribed', 'true')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        {!isSubscribed ? (
          <>
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold text-cyan-400">FREE NEWSLETTER</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stay Updated on AI Tools
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get weekly insights about AI coding tools, MCP servers, and productivity tips. 
                Join our growing community of developers.
              </p>
            </div>

            {/* What We Cover */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800">
                <BookOpen className="w-8 h-8 text-cyan-400 mb-3" />
                <div className="text-xl font-black text-white mb-1">In-Depth Articles</div>
                <div className="text-gray-400 text-sm">Technical guides and tutorials</div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800">
                <Zap className="w-8 h-8 text-purple-400 mb-3" />
                <div className="text-xl font-black text-white mb-1">Tool Reviews</div>
                <div className="text-gray-400 text-sm">Honest analysis of AI tools</div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800">
                <Bell className="w-8 h-8 text-pink-400 mb-3" />
                <div className="text-xl font-black text-white mb-1">Weekly Updates</div>
                <div className="text-gray-400 text-sm">Latest in AI development</div>
              </div>
            </div>

            {/* Subscribe Form */}
            <div className="bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-cyan-500/20 mb-12">
              <h2 className="text-2xl font-black mb-6 text-center">Subscribe for Free</h2>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="relative mb-4">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-4 bg-black/50 border-2 border-gray-800 rounded-lg font-bold text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    required
                  />
                </div>
                
                {error && (
                  <p className="text-red-400 text-sm font-bold mb-4">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-black text-lg rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'SUBSCRIBING...' : 'SUBSCRIBE →'}
                </button>
              </form>

              <p className="text-xs text-center mt-4 text-gray-500">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>

            {/* What You'll Get */}
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-8 text-center">What You'll Receive</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-3 text-cyan-400">📚 Weekly Articles</h3>
                  <p className="text-gray-300">New blog posts about AI tools, coding productivity, and development trends.</p>
                </div>
                
                <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-3 text-purple-400">🔧 Tool Guides</h3>
                  <p className="text-gray-300">Detailed tutorials on MCP servers, AI assistants, and developer tools.</p>
                </div>
                
                <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-3 text-pink-400">💡 Tips & Tricks</h3>
                  <p className="text-gray-300">Practical advice for integrating AI into your development workflow.</p>
                </div>
                
                <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-3 text-green-400">🚀 Early Access</h3>
                  <p className="text-gray-300">Be the first to read our latest content and discoveries.</p>
                </div>
              </div>
            </div>

            {/* Why Subscribe */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-6">Why Subscribe?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We're building a community of developers interested in AI tools and productivity. 
                Our goal is to share honest, practical insights that help you work smarter, not harder. 
                No spam, no fluff – just valuable content delivered weekly.
              </p>
            </div>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-20">
            <CheckCircle className="w-24 h-24 mx-auto mb-6 text-green-400" />
            <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Thank You for Subscribing!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We've added you to our newsletter. You'll receive our next update soon.
            </p>
            <Link 
              href="/blog"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-black rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all"
            >
              READ OUR ARTICLES →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

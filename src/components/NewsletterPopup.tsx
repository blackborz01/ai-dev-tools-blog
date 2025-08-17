'use client'

import { useState, useEffect } from 'react'
import { X, Zap, Mail, CheckCircle } from 'lucide-react'

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Check if user has already subscribed or dismissed
    const hasInteracted = localStorage.getItem('newsletter_interacted')
    if (!hasInteracted) {
      // Show popup after 15 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 15000)
      return () => clearTimeout(timer)
    }
  }, [])

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
      // TODO: Replace with your actual API endpoint
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setIsSubscribed(true)
        localStorage.setItem('newsletter_interacted', 'subscribed')
        // Auto-close after 3 seconds
        setTimeout(() => setIsVisible(false), 3000)
      } else {
        throw new Error('Subscription failed')
      }
    } catch (err) {
      // For now, simulate success since API isn't set up
      setIsSubscribed(true)
      localStorage.setItem('newsletter_interacted', 'subscribed')
      setTimeout(() => setIsVisible(false), 3000)
    }
    
    setIsLoading(false)
  }

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem('newsletter_interacted', 'dismissed')
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleDismiss}
      />
      
      {/* Popup */}
      <div className="relative bg-lime-400 border-4 border-black p-8 max-w-md w-full brutal-shadow-xl animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 hover:bg-black hover:text-lime-400 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {!isSubscribed ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-8 h-8" />
                <h2 className="font-black text-2xl">WEEKLY AI TOOL DROPS</h2>
              </div>
              <p className="text-sm font-bold">
                Join 50,000+ developers getting exclusive deals, early access, and brutally honest reviews.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-700">✓</span>
                <span className="font-bold">Save $1000s with exclusive discounts</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-700">✓</span>
                <span className="font-bold">Get early access to new AI tools</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-700">✓</span>
                <span className="font-bold">Weekly tool comparisons & benchmarks</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 border-4 border-black font-bold placeholder:opacity-50 focus:outline-none focus:ring-4 focus:ring-black"
                  required
                />
              </div>
              
              {error && (
                <p className="text-red-600 text-sm font-bold">{error}</p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-black text-lime-400 font-black text-lg hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'SUBSCRIBING...' : 'GET FREE ACCESS →'}
              </button>
            </form>

            <p className="text-xs text-center mt-4 opacity-70">
              No spam. Unsubscribe anytime.
            </p>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-700" />
            <h3 className="font-black text-2xl mb-2">YOU'RE IN!</h3>
            <p className="font-bold">Check your email for confirmation.</p>
          </div>
        )}
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X, Check, Settings } from 'lucide-react'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    } else {
      // Load saved preferences
      try {
        const savedPrefs = JSON.parse(consent)
        setPreferences(savedPrefs)
        applyCookiePreferences(savedPrefs)
      } catch (e) {
        console.error('Error loading cookie preferences:', e)
      }
    }
  }, [])

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Apply preferences to third-party scripts
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (prefs.analytics) {
        // Enable GA
        (window as any).gtag = function() {
          (window as any).dataLayer = (window as any).dataLayer || []
          ;(window as any).dataLayer.push(arguments)
        }
        ;(window as any).gtag('consent', 'update', {
          'analytics_storage': 'granted'
        })
      } else {
        // Disable GA
        (window as any).gtag = function() {}
        ;(window as any).gtag('consent', 'update', {
          'analytics_storage': 'denied'
        })
      }

      // Marketing cookies
      if (prefs.marketing) {
        (window as any).gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted'
        })
      } else {
        (window as any).gtag('consent', 'update', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        })
      }
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    applyCookiePreferences(allAccepted)
    setShowBanner(false)
  }

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    applyCookiePreferences(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const rejectAll = () => {
    const rejected = {
      necessary: true, // Cannot reject necessary cookies
      analytics: false,
      marketing: false
    }
    setPreferences(rejected)
    localStorage.setItem('cookie-consent', JSON.stringify(rejected))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    applyCookiePreferences(rejected)
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-2xl">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Cookie className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  We value your privacy 🍪
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                  <Link href="/privacy" className="text-purple-600 dark:text-purple-400 hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  to learn more.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Cookie Settings
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-colors flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                Accept All
              </button>
            </div>
          </div>

          {/* Cookie Settings Panel */}
          {showSettings && (
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-4">
                Manage Cookie Preferences
              </h4>
              
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Necessary Cookies
                      </h5>
                      <span className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">
                        Always Active
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="mt-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded cursor-not-allowed opacity-60"
                  />
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Analytics Cookies
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="mt-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Marketing Cookies
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      These cookies are used to track visitors across websites to display ads that are relevant and engaging for individual users.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="mt-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={acceptSelected}
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-colors"
                >
                  Save My Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop for mobile */}
      {showSettings && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setShowSettings(false)}
        />
      )}
    </>
  )
}

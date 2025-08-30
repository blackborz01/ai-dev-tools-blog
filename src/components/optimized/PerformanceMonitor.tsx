'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Defer non-critical tasks using requestIdleCallback
    const scheduleIdleTask = (callback: () => void, timeout = 2000) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { timeout })
      } else {
        setTimeout(callback, 1)
      }
    }

    // Monitor and optimize long tasks
    const optimizeMainThread = () => {
      // Break up long-running tasks
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn(`Long task detected: ${entry.name} (${entry.duration}ms)`)
          }
        }
      })

      try {
        observer.observe({ entryTypes: ['longtask'] })
      } catch (e) {
        // Longtask API might not be supported
      }

      // Defer third-party scripts initialization
      scheduleIdleTask(() => {
        // Initialize non-critical features
        const scripts = document.querySelectorAll('script[data-defer]')
        scripts.forEach((script) => {
          const newScript = document.createElement('script')
          newScript.src = script.getAttribute('src') || ''
          newScript.async = true
          document.body.appendChild(newScript)
        })
      })

      // Optimize animation frame usage
      let rafId: number | null = null
      const throttledRaf = (callback: () => void) => {
        if (rafId) return
        rafId = requestAnimationFrame(() => {
          callback()
          rafId = null
        })
      }

      // Optimize scroll handlers
      let scrollTimeout: NodeJS.Timeout
      const optimizedScrollHandler = () => {
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          throttledRaf(() => {
            // Handle scroll events
            document.dispatchEvent(new CustomEvent('optimizedScroll'))
          })
        }, 100)
      }

      window.addEventListener('scroll', optimizedScrollHandler, { passive: true })

      return () => {
        observer.disconnect()
        window.removeEventListener('scroll', optimizedScrollHandler)
      }
    }

    // Initialize performance optimizations after page load
    if (document.readyState === 'complete') {
      optimizeMainThread()
    } else {
      window.addEventListener('load', optimizeMainThread, { once: true })
    }

    // Report Web Vitals
    scheduleIdleTask(() => {
      if ('web-vital' in window) return
      
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      })
    }, 3000)
  }, [])

  return null
}
'use client'

import { useEffect } from 'react'

export default function OptimizedStyleLoader() {
  useEffect(() => {
    // Load non-critical CSS after initial render
    const loadDeferredStyles = () => {
      // Create link element for non-critical styles
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '/_next/static/css/non-critical.css'
      link.media = 'print' // Initially load as print stylesheet
      link.onload = function() {
        // @ts-ignore
        this.media = 'all' // Switch to all media after load
      }
      document.head.appendChild(link)
    }

    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      // @ts-ignore
      window.requestIdleCallback(loadDeferredStyles)
    } else {
      setTimeout(loadDeferredStyles, 1)
    }
  }, [])

  return null
}
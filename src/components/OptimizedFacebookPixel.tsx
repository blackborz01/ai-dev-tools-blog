'use client'

import { useEffect } from 'react'
import Script from 'next/script'

interface FacebookPixelProps {
  pixelId: string
}

export default function OptimizedFacebookPixel({ pixelId }: FacebookPixelProps) {
  useEffect(() => {
    // Only load after page is interactive
    if (typeof window !== 'undefined' && pixelId) {
      // Delay Facebook Pixel loading to not block initial render
      const timer = setTimeout(() => {
        window.fbq = window.fbq || function() {
          (window.fbq.q = window.fbq.q || []).push(arguments)
        }
        window.fbq.loaded = !0
        window.fbq.version = '2.0'
        window.fbq.queue = []
        
        // Initialize pixel
        window.fbq('init', pixelId)
        window.fbq('track', 'PageView')
      }, 3000) // Load after 3 seconds

      return () => clearTimeout(timer)
    }
  }, [pixelId])

  if (!pixelId) return null

  return (
    <>
      {/* Load Facebook Pixel with low priority */}
      <Script
        id="facebook-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          `,
        }}
      />
      
      {/* Noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

// Add type declarations
declare global {
  interface Window {
    fbq: any
  }
}
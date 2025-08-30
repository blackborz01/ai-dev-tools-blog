'use client'

import { useEffect } from 'react'
import Script from 'next/script'

interface ScriptLoaderProps {
  children?: React.ReactNode
}

export default function ScriptLoader({ children }: ScriptLoaderProps) {
  useEffect(() => {
    // Defer non-critical scripts
    const deferScripts = () => {
      // Google Analytics - load after interactive
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-1TGH1GMJKR', {
          page_path: window.location.pathname,
          send_page_view: false // We'll send it manually after full load
        })
        
        // Send page view after everything is loaded
        window.addEventListener('load', () => {
          window.gtag('event', 'page_view', {
            page_path: window.location.pathname,
            page_title: document.title
          })
        }, { once: true })
      }
    }

    // Run after the main thread is idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(deferScripts, { timeout: 2000 })
    } else {
      setTimeout(deferScripts, 1)
    }
  }, [])

  return (
    <>
      {/* Google Analytics - Load with afterInteractive strategy */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-1TGH1GMJKR`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            // Config will be called in useEffect after idle
          `,
        }}
      />
      
      {/* Facebook Pixel - Load only when needed */}
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
            
            // Defer fbq initialization
            if ('requestIdleCallback' in window) {
              requestIdleCallback(() => {
                fbq('init', '1234567890');
                fbq('track', 'PageView');
              }, { timeout: 3000 });
            } else {
              setTimeout(() => {
                fbq('init', '1234567890');
                fbq('track', 'PageView');
              }, 3000);
            }
          `,
        }}
      />
      
      {children}
    </>
  )
}
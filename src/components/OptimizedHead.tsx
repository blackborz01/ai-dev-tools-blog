import Script from 'next/script'

export default function OptimizedHead() {
  return (
    <>
      {/* Critical CSS inline for instant rendering - reduces render-blocking */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Critical above-fold styles - MINIMAL for fastest FCP */
          *,::after,::before{box-sizing:border-box}
          html{-webkit-text-size-adjust:100%;line-height:1.15}
          body{margin:0;padding:0;background:#000;color:#fff;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          main{display:block}
          h1{font-size:2em;margin:.67em 0}
          a{background-color:transparent;color:inherit;text-decoration:none}
          button,input,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}
          button,input{overflow:visible}
          button,select{text-transform:none}
          [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}
          
          /* Prevent layout shift */
          .min-h-screen{min-height:100vh}
          .container{width:100%;max-width:1280px;margin:0 auto;padding:0 1rem}
          .fixed{position:fixed}
          .relative{position:relative}
          .absolute{position:absolute}
          .z-10{z-index:10}
          .z-20{z-index:20}
          .z-50{z-index:50}
          
          /* Skeleton loading states to prevent CLS */
          .skeleton{animation:skeleton-loading 1s linear infinite alternate}
          @keyframes skeleton-loading{0%{background-color:hsl(200,20%,80%)}100%{background-color:hsl(200,20%,95%)}}
          
          /* Font loading optimization */
          .font-inter{font-family:Inter,system-ui,-apple-system,sans-serif}
          
          /* Hide elements until styles load */
          .opacity-0{opacity:0}
          .transition-opacity{transition:opacity .3s}
          
          /* Prevent FOUC */
          html:not(.hydrated) *{animation-duration:0s!important;transition:none!important}
        `
      }} />
      
      {/* High-priority preconnects */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for third-party resources */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://connect.facebook.net" />
      <link rel="dns-prefetch" href="https://vercel.live" />
      
      {/* Preload critical Inter font with correct URL */}
      <link 
        rel="preload" 
        href="/_next/static/media/2aaf0723e720e8b9-s.p.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous"
      />
      
      {/* Resource hints for faster navigation */}
      <link rel="prefetch" href="/blog" />
      <link rel="prefetch" href="/tools" />
      <link rel="prerender" href="/blog" />
      
      {/* Early hints for CSS loading */}
      <Script
        id="css-preload"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Preload CSS files asynchronously
            (function() {
              var links = document.querySelectorAll('link[rel="stylesheet"]');
              links.forEach(function(link) {
                link.media = 'print';
                link.onload = function() { this.media = 'all'; };
              });
            })();
          `
        }}
      />
      
      {/* Web Font Loader for optimal font loading */}
      <Script
        id="font-loader"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Font loading optimization
            if ('fonts' in document) {
              Promise.all([
                document.fonts.load('400 1em Inter'),
                document.fonts.load('700 1em Inter'),
              ]).then(function() {
                document.documentElement.classList.add('fonts-loaded');
              });
            }
          `
        }}
      />
      
      {/* Lazy load non-critical CSS */}
      <Script
        id="lazy-css"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Load non-critical CSS after page load
            window.addEventListener('load', function() {
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = '/_next/static/css/non-critical.css';
              document.head.appendChild(link);
            });
          `
        }}
      />
    </>
  )
}
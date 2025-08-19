// app/layout.tsx performance improvements
import { Metadata } from 'next'

// Preload critical fonts
export const metadata: Metadata = {
  // ... existing metadata
  other: {
    // DNS prefetch for external domains
    'dns-prefetch-0': 'https://fonts.googleapis.com',
    'dns-prefetch-1': 'https://fonts.gstatic.com',
    'dns-prefetch-2': 'https://images.unsplash.com',
    'dns-prefetch-3': 'https://www.googletagmanager.com',
    
    // Preconnect for faster connection
    'preconnect-0': 'https://fonts.googleapis.com',
    'preconnect-1': 'https://fonts.gstatic.com',
  }
}

// Add these to your layout.tsx head section
export const performanceLinks = `
  <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
  <link rel="dns-prefetch" href="https://images.unsplash.com" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  
  <!-- Preload critical CSS -->
  <link rel="preload" as="style" href="/_next/static/css/app.css" />
  
  <!-- Preload critical fonts -->
  <link rel="preload" as="font" type="font/woff2" crossorigin href="/fonts/inter-var-latin.woff2" />
`
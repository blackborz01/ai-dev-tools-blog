import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import dynamic from 'next/dynamic'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import CookieConsent from '@/components/CookieConsent'
import { websiteSchema, organizationSchema } from '@/lib/schema'
import { AuthProvider } from '@/providers/auth-provider'
import Script from 'next/script'

// Optimize font loading with display: swap and font-display
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
  adjustFontFallback: true,
})

// Lazy load analytics to not block initial render
const Analytics = dynamic(
  () => import('@vercel/analytics/react').then(mod => mod.Analytics),
  { 
    ssr: false,
    loading: () => null
  }
)

const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then(mod => mod.SpeedInsights),
  { 
    ssr: false,
    loading: () => null
  }
)

const GoogleAnalytics = dynamic(
  () => import('@/components/GoogleAnalytics'),
  { 
    ssr: false,
    loading: () => null
  }
)

const FacebookPixel = dynamic(
  () => import('@/components/FacebookPixel'),
  { 
    ssr: false,
    loading: () => null
  }
)

export const metadata: Metadata = {
  metadataBase: new URL('https://www.boostdevspeed.com'),
  title: 'BoostDevSpeed - Ship Code 3x Faster with AI Coding Tools',
  description: 'Master AI coding tools like Cursor, GitHub Copilot & Claude. Fix MCP errors, boost developer productivity 3x with proven strategies.',
  keywords: 'boost developer speed, AI coding tools, MCP servers, GitHub Copilot, Cursor IDE, Claude, developer productivity, AI code optimization, faster coding',
  authors: [{ name: 'BoostDevSpeed' }],
  alternates: {
    canonical: 'https://www.boostdevspeed.com',
  },
  openGraph: {
    title: 'BoostDevSpeed - Ship Code 3x Faster',
    description: 'Master AI coding tools. Real benchmarks. Proven strategies. Boost your development speed.',
    url: 'https://www.boostdevspeed.com',
    siteName: 'BoostDevSpeed',
    images: [
      {
        url: 'https://www.boostdevspeed.com/api/og',
        width: 1200,
        height: 630,
        alt: 'BoostDevSpeed - Ship Code 3x Faster'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BoostDevSpeed',
    description: 'Ship code 3x faster with AI. Real benchmarks & strategies.',
    images: ['https://www.boostdevspeed.com/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Critical CSS inline for instant rendering */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-fold styles */
            body{margin:0;padding:0;background:#000;color:#fff;font-family:system-ui,-apple-system,sans-serif}
            *{box-sizing:border-box}
            .min-h-screen{min-height:100vh}
            .container{width:100%;max-width:1280px;margin:0 auto;padding:0 1rem}
            @media(min-width:768px){.container{padding:0 2rem}}
            /* Prevent layout shift from font loading */
            .font-sans{font-family:Inter,system-ui,-apple-system,sans-serif}
            /* Initial brutal shadow styles */
            .brutal-shadow{box-shadow:4px 4px 0 0 currentColor}
            /* Prevent CLS from animations */
            @media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
          `
        }} />
        
        {/* Preconnect to critical domains with high priority */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Preload critical font */}
        <link 
          rel="preload" 
          href="https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
        
        {/* Favicons with proper sizes */}
        <link rel="icon" href="/icon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.svg?v=2" sizes="32x32" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16.svg?v=2" sizes="16x16" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg?v=2" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for better mobile experience */}
        <meta name="theme-color" content="#000000" />
        
        {/* Viewport for proper mobile rendering */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Structured Data - defer parsing */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ErrorBoundary>
          <AuthProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
              {children}
              <Toaster />
              
              {/* Load analytics after main content with lower priority */}
              {process.env.NODE_ENV === 'production' && (
                <>
                  <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
                  <FacebookPixel pixelId={process.env.NEXT_PUBLIC_FB_PIXEL_ID || ''} />
                  <Analytics />
                  <SpeedInsights />
                </>
              )}
              
              <CookieConsent />
            </ThemeProvider>
          </AuthProvider>
        </ErrorBoundary>
        
        {/* Prefetch key routes for instant navigation */}
        <link rel="prefetch" href="/blog" />
        <link rel="prefetch" href="/tools" />
      </body>
    </html>
  )
}

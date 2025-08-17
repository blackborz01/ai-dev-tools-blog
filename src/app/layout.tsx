import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
// import AuthProvider from '@/providers/auth-provider' - removed
import { ErrorBoundary } from '@/components/ErrorBoundary'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://aidevtoolsdaily.com'),
  title: 'AI Dev Tools Daily - Latest AI Coding Tools & MCP Servers | 2025',
  description: 'Discover the best AI development tools in 2025. Compare Cursor, GitHub Copilot, Claude Code. Browse 200+ MCP servers. Daily updates, honest reviews, real benchmarks.',
  keywords: 'AI coding tools, MCP servers, Model Context Protocol, Claude 3.5 Sonnet, GPT-4 Turbo, Cursor IDE, GitHub Copilot, Windsurf IDE, AI development tools, coding assistants 2025',
  authors: [{ name: 'AI Dev Tools Daily' }],
  alternates: {
    canonical: 'https://aidevtoolsdaily.com',
  },
  openGraph: {
    title: 'AI Dev Tools Daily',
    description: 'Premier destination for AI development tools and innovations',
    url: 'https://aidevtoolsdaily.com',
    siteName: 'AI Dev Tools Daily',
    images: [
      {
        url: 'https://aidevtoolsdaily.com/api/og',
        width: 1200,
        height: 630,
        alt: 'AI Dev Tools Daily'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Dev Tools Daily',
    description: 'Latest MCP, Claude Code & Cursor Innovations',
    images: ['https://aidevtoolsdaily.com/api/og'],
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
}

// Generate JSON-LD structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://aidevtoolsdaily.com/#organization',
      name: 'AI Dev Tools Daily',
      url: 'https://aidevtoolsdaily.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aidevtoolsdaily.com/logo.png',
        width: 512,
        height: 512
      },
      sameAs: [
        'https://twitter.com/aidevtools',
        'https://github.com/aidevtools'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://aidevtoolsdaily.com/#website',
      url: 'https://aidevtoolsdaily.com',
      name: 'AI Dev Tools Daily',
      description: 'Discover the best AI development tools, MCP servers, and coding assistants',
      publisher: {
        '@id': 'https://aidevtoolsdaily.com/#organization'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://aidevtoolsdaily.com/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ErrorBoundary>
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
          {/* <AuthProvider> - removed */}
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
              forcedTheme="dark"
              disableTransitionOnChange
            >
              {children}
              <Toaster />
              <CookieConsent />
              <Analytics />
              <SpeedInsights />
            </ThemeProvider>
          {/* </AuthProvider> - removed */}
        </ErrorBoundary>
      </body>
    </html>
  )
}

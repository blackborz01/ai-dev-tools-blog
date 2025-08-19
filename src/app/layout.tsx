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
  metadataBase: new URL('https://www.boostdevspeed.com'),
  title: 'BoostDevSpeed - Ship Code 3x Faster with AI Tools | 2025',
  description: 'Master AI coding tools and ship faster. Real benchmarks of Cursor, Copilot, Claude. Fix MCP errors, avoid AI slowdowns, boost your dev speed 3x.',
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
        <link rel="icon" href="/icon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.svg?v=2" sizes="32x32" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16.svg?v=2" sizes="16x16" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg?v=2" />
        <GoogleAnalytics />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
            {children}
            <Toaster />
            <Analytics />
            <SpeedInsights />
            <CookieConsent />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
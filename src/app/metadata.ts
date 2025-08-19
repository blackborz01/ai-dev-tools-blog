import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BoostDevSpeed - Ship Code 3x Faster with AI Coding Tools',
  description: 'Master AI coding tools like Cursor, GitHub Copilot & Claude. Fix MCP server errors, avoid AI slowdowns, boost developer productivity 3x with proven strategies & real benchmarks.',
  keywords: 'AI coding tools, MCP servers, GitHub Copilot, Cursor IDE, Claude, developer productivity, boost dev speed, ship code faster',
  openGraph: {
    title: 'BoostDevSpeed - Ship Code 3x Faster with AI',
    description: 'Master AI coding tools. Real benchmarks. Proven strategies. Boost your development speed.',
    url: 'https://boostdevspeed.com',
    siteName: 'BoostDevSpeed',
    images: [
      {
        url: 'https://boostdevspeed.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BoostDevSpeed - Ship Code 3x Faster'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BoostDevSpeed - Ship Code 3x Faster',
    description: 'Ship code 3x faster with AI. Real benchmarks & strategies.',
    images: ['https://boostdevspeed.com/og-image.jpg'],
    creator: '@BoostDevSpeed',
    site: '@BoostDevSpeed'
  },
  alternates: {
    canonical: 'https://boostdevspeed.com'
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
    google: 'add-your-google-verification-code',
  },
}

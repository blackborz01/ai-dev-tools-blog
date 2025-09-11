'use client'

import { lazy, Suspense, memo } from 'react'
import dynamic from 'next/dynamic'

// Loading skeleton component
const LoadingSkeleton = memo(() => (
  <div className="animate-pulse">
    <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
  </div>
))
LoadingSkeleton.displayName = 'LoadingSkeleton'

// Dynamic imports with proper loading states
const OriginalHero = dynamic(() => import('@/components/OriginalHero'), {
  loading: () => <LoadingSkeleton />,
  ssr: true
})

const FuturisticTrending = dynamic(() => import('@/components/FuturisticTrending'), {
  loading: () => <LoadingSkeleton />,
  ssr: true
})

const ShipFaster = dynamic(() => import('@/app/Sections/ShipFaster'), {
  loading: () => (
    <section className="py-12 md:py-16 bg-black" style={{ minHeight: 480 }}>
      <div className="container mx-auto px-6 md:px-10">
        <div className="h-32 bg-gray-900/20 rounded animate-pulse" />
      </div>
    </section>
  ),
  ssr: true // Keep SSR for initial render
})

const ScrollingBanner = dynamic(() => import('@/components/ScrollingBanner'), {
  loading: () => null,
  ssr: false
})

const SmartToolFinder = dynamic(() => import('@/components/SmartToolFinder'), {
  loading: () => <LoadingSkeleton />,
  ssr: false
})

const AIToolsLuxuryAnimation = dynamic(() => import('@/components/AIToolsLuxuryAnimation'), {
  loading: () => <LoadingSkeleton />,
  ssr: false
})

const TrustBadges = dynamic(() => import('@/components/TrustBadges'), {
  loading: () => null,
  ssr: false
})

export default function HomePageContent() {
  return (
    <>
      {/* Section with gradient background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: 'translateZ(0)',
            contain: 'layout style paint'
          }} />
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10">
          <Suspense fallback={<LoadingSkeleton />}>
            <OriginalHero />
          </Suspense>

          <Suspense fallback={<LoadingSkeleton />}>
            <FuturisticTrending />
          </Suspense>

          <Suspense fallback={
            <section className="py-12 md:py-16 bg-black" style={{ minHeight: 480 }}>
              <div className="container mx-auto px-6 md:px-10">
                <div className="h-32 bg-gray-900/20 rounded animate-pulse" />
              </div>
            </section>
          }>
            <ShipFaster />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={null}>
        <ScrollingBanner />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <SmartToolFinder />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <AIToolsLuxuryAnimation />
      </Suspense>

      <Suspense fallback={null}>
        <TrustBadges />
      </Suspense>
    </>
  )
}
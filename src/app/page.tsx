'use client'

import { useState, lazy, Suspense, memo } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Loading skeleton component - lightweight
const LoadingSkeleton = memo(() => (
  <div className="animate-pulse">
    <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
  </div>
))
LoadingSkeleton.displayName = 'LoadingSkeleton'

// Critical components - load immediately (above-fold)
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ShipFaster from '@/app/Sections/ShipFaster'

// High priority components - load with intersection observer
const OriginalHero = dynamic(() => import('@/components/OriginalHero'), {
  loading: () => <LoadingSkeleton />,
  ssr: true
})

const FuturisticTrending = dynamic(() => import('@/components/FuturisticTrending'), {
  loading: () => <LoadingSkeleton />,
  ssr: true
})

// Medium priority components
const LatestIntel = dynamic(() => import('@/components/LatestIntel'), {
  loading: () => <LoadingSkeleton />,
  ssr: true
})

const ScrollingBanner = dynamic(() => import('@/components/ScrollingBanner'), {
  loading: () => null,
  ssr: true
})

// Low priority components - lazy load on scroll
const SmartToolFinder = dynamic(() => import('@/components/SmartToolFinder'), {
  loading: () => <LoadingSkeleton />,
  ssr: false
})

const NewsletterPopup = dynamic(() => import('@/components/NewsletterPopup'), {
  ssr: false
})

const TrustBadges = dynamic(() => import('@/components/TrustBadges'), {
  loading: () => <LoadingSkeleton />,
  ssr: false
})

const DynamicStatsHero = dynamic(
  () => import('@/components/DynamicStats').then(mod => ({ default: mod.DynamicStatsHero })),
  { ssr: false }
)

const SocialProof = dynamic(() => import('@/components/SocialProof'), {
  ssr: false
})

export default function HomePage() {
  return (
    <>
      <Navbar />
      
      {/* Main content wrapper */}
      <div className="min-h-screen bg-black">
        {/* Section with gradient background - ONLY for Hero, Trending, and Ship Code */}
        <div className="relative overflow-hidden">
          {/* EXACT Background from FuturisticTrending - ALL ANIMATIONS INTACT */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
            
            {/* Animated Grid - ANIMATION PRESERVED */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              animation: 'slide 10s linear infinite',
              willChange: 'transform'
            }} />
            
            {/* Gradient Orbs - ANIMATIONS PRESERVED */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          
          {/* Content wrapper for gradient sections */}
          <div className="relative z-10">
            {/* Original Hero at top */}
            <Suspense fallback={<LoadingSkeleton />}>
              <OriginalHero />
            </Suspense>

            {/* TRENDING.NOW section */}
            <Suspense fallback={<LoadingSkeleton />}>
              <FuturisticTrending />
            </Suspense>

            {/* SHIP CODE 10X FASTER - Optimized for CLS */}
            <ShipFaster />
          </div>
        </div>

        {/* Scrolling Banner - OUTSIDE gradient background */}
        <Suspense fallback={null}>
          <ScrollingBanner />
        </Suspense>

        {/* Find Your Perfect AI Tool */}
        <Suspense fallback={<LoadingSkeleton />}>
          <SmartToolFinder />
        </Suspense>

        {/* LATEST INTEL section */}
        <Suspense fallback={<LoadingSkeleton />}>
          <LatestIntel />
        </Suspense>

        {/* SocialProof - TRUSTED BY DEVELOPERS with stats */}
        <Suspense fallback={<LoadingSkeleton />}>
          <SocialProof />
        </Suspense>

        {/* TrustBadges - Secure, Transparent, Community, Growing */}
        <Suspense fallback={<LoadingSkeleton />}>
          <TrustBadges />
        </Suspense>

        {/* Non-critical components */}
        <Suspense fallback={null}>
          <NewsletterPopup />
        </Suspense>
      </div>

      {/* Footer - Outside gradient wrapper with clean black background */}
      <Footer />

      {/* Animation styles - ALL PRESERVED with performance optimization */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        @keyframes rainbow-glow {
          0% { background-position: 0 0; }
          50% { background-position: 400% 0; }
          100% { background-position: 0 0; }
        }
        
        /* Use GPU acceleration for animations */
        * {
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        /* Optimize animation performance */
        .animate-pulse,
        .animate-infinite-scroll {
          will-change: transform, opacity;
        }
      `}</style>
    </>
  )
}

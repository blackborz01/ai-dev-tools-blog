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

// Memoized Ship Code section for performance
const ShipCodeSection = memo(() => (
  <section className="relative min-h-[60vh] flex items-center justify-center py-20">
    <div className="container mx-auto px-4 py-16 text-center relative">
      <h2 className="text-5xl md:text-7xl font-black mb-6 text-white">
        SHIP CODE <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">10X FASTER</span>
      </h2>
      <p className="text-xl md:text-2xl mb-8 text-gray-300">
        Master AI Coding Tools. Fix MCP Errors. Boost Productivity.
      </p>
      <div className="flex gap-4 justify-center">
        <Link 
          href="/blog" 
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:scale-105 transition-transform rounded-lg"
          prefetch={true}
        >
          READ GUIDES
        </Link>
        <Link 
          href="/tools" 
          className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500/10 transition-colors rounded-lg"
          prefetch={true}
        >
          EXPLORE TOOLS
        </Link>
      </div>
    </div>
  </section>
))
ShipCodeSection.displayName = 'ShipCodeSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      
      {/* Main content wrapper with EXACT TRENDING.NOW background - ALL ANIMATIONS PRESERVED */}
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* EXACT Background from FuturisticTrending - ALL ANIMATIONS INTACT */}
        <div className="fixed inset-0">
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
        
        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Original Hero at top */}
          <Suspense fallback={<LoadingSkeleton />}>
            <OriginalHero />
          </Suspense>

          {/* TRENDING.NOW section */}
          <Suspense fallback={<LoadingSkeleton />}>
            <FuturisticTrending />
          </Suspense>

          {/* SHIP CODE 10X FASTER - Memoized for performance */}
          <ShipCodeSection />

          {/* Scrolling Banner */}
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

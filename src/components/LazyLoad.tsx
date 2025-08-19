'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Loading component for lazy loaded components
const LoadingSpinner = () => (
  <div className="flex justify-center items-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
)

// Lazy load heavy components with dynamic imports
export const LazySmartToolFinder = dynamic(
  () => import('@/components/SmartToolFinder'),
  { 
    loading: () => <LoadingSpinner />,
    ssr: true 
  }
)

export const LazyToolComparisonWidget = dynamic(
  () => import('@/components/ToolComparisonWidget'),
  { 
    loading: () => <LoadingSpinner />,
    ssr: true 
  }
)

export const LazyLiveActivityFeed = dynamic(
  () => import('@/components/LiveActivityFeed'),
  { 
    loading: () => <LoadingSpinner />,
    ssr: false // This component likely uses client-side only features
  }
)

export const LazyNewsletterPopup = dynamic(
  () => import('@/components/NewsletterPopup'),
  { 
    loading: () => null,
    ssr: false 
  }
)

export const LazyFuturisticTrending = dynamic(
  () => import('@/components/FuturisticTrending'),
  { 
    loading: () => <LoadingSpinner />,
    ssr: true 
  }
)

// Wrapper component with Suspense for better error handling
export const LazyLoadWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  )
}

// Intersection Observer hook for lazy loading on scroll
import { useEffect, useRef, useState } from 'react'

export const useLazyLoad = () => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return { ref, isIntersecting }
}

// Component for lazy loading images
export const LazyImage = ({ 
  src, 
  alt, 
  className = '',
  priority = false 
}: { 
  src: string
  alt: string
  className?: string
  priority?: boolean
}) => {
  const { ref, isIntersecting } = useLazyLoad()

  if (priority) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className}
        loading="eager"
      />
    )
  }

  return (
    <div ref={ref} className={className}>
      {isIntersecting ? (
        <img 
          src={src} 
          alt={alt} 
          className={className}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className={`${className} bg-gray-200 dark:bg-gray-800 animate-pulse`} />
      )}
    </div>
  )
}

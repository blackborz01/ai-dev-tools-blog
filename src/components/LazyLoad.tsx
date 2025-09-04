'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Image from 'next/image'

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

// Component for lazy loading images using Next.js Image
export const LazyImage = ({ 
  src, 
  alt, 
  className = '',
  priority = false,
  width,
  height,
  fill = false,
  sizes
}: { 
  src: string
  alt: string
  className?: string
  priority?: boolean
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
}) => {
  const { ref, isIntersecting } = useLazyLoad()

  // If priority, load immediately with Next Image
  if (priority || isIntersecting) {
    if (fill) {
      return (
        <div ref={ref} className="relative w-full h-full">
          <Image 
            src={src} 
            alt={alt} 
            fill
            sizes={sizes || "100vw"}
            className={className}
            priority={priority}
          />
        </div>
      )
    }
    
    return (
      <div ref={ref}>
        <Image 
          src={src} 
          alt={alt} 
          width={width || 800}
          height={height || 600}
          sizes={sizes}
          className={className}
          priority={priority}
        />
      </div>
    )
  }

  // Placeholder while not intersecting
  return (
    <div ref={ref} className={fill ? "relative w-full h-full" : ""}>
      <div className={`${className} ${fill ? 'absolute inset-0' : `w-[${width}px] h-[${height}px]`} bg-gray-200 dark:bg-gray-800 animate-pulse`} />
    </div>
  )
}

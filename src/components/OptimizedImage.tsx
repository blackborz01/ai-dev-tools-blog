'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  fill?: boolean
  sizes?: string
  style?: React.CSSProperties
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  fill = false,
  sizes,
  style
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imgRef.current || priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    )

    observer.observe(imgRef.current)

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
    if (onLoad) {
      onLoad()
    }
  }

  // For external images, use regular img tag with lazy loading
  if (src.startsWith('http')) {
    return (
      <div ref={imgRef} className={`relative ${className}`} style={style}>
        {isInView && (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
            className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            style={{
              width: fill ? '100%' : width,
              height: fill ? '100%' : height,
              objectFit: 'cover',
              ...style
            }}
          />
        )}
        {!isLoaded && (
          <div 
            className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
            style={{
              width: fill ? '100%' : width,
              height: fill ? '100%' : height
            }}
          />
        )}
      </div>
    )
  }

  // For local images, use Next.js Image component
  return (
    <div ref={imgRef} className={`relative ${className}`} style={style}>
      {isInView && (
        <>
          {fill ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes || '100vw'}
              quality={quality}
              priority={priority}
              placeholder={placeholder}
              blurDataURL={blurDataURL}
              onLoad={handleLoad}
              className={`${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={width || 800}
              height={height || 600}
              quality={quality}
              priority={priority}
              placeholder={placeholder}
              blurDataURL={blurDataURL}
              onLoad={handleLoad}
              className={`${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            />
          )}
        </>
      )}
      {!isLoaded && !priority && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
          style={{
            width: fill ? '100%' : width,
            height: fill ? '100%' : height
          }}
        />
      )}
    </div>
  )
}

// Blur data URL generator for placeholder
export function generateBlurDataURL(color: string = '#f3f4f6'): string {
  const svg = `
    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" fill="${color}"/>
    </svg>
  `
  const base64 = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}

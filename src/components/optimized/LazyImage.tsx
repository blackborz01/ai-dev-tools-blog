'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  sizes?: string
  fill?: boolean
  style?: React.CSSProperties
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default function LazyImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  quality = 75,
  sizes,
  fill = false,
  style,
  placeholder = 'blur',
  blurDataURL
}: LazyImageProps) {
  const [isInView, setIsInView] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority || !imgRef.current) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
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
      observer.disconnect()
    }
  }, [priority])

  const dataUrl = blurDataURL || `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`

  if (!isInView && !priority) {
    return (
      <div 
        ref={imgRef}
        className={className}
        style={{
          ...style,
          position: fill ? 'absolute' : 'relative',
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
          backgroundColor: '#1a1a1a',
          backgroundImage: `url("${dataUrl}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    )
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        quality={quality}
        sizes={sizes || '100vw'}
        style={style}
        placeholder={placeholder}
        blurDataURL={dataUrl}
        onLoad={() => setHasLoaded(true)}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      sizes={sizes}
      style={style}
      placeholder={placeholder}
      blurDataURL={dataUrl}
      onLoad={() => setHasLoaded(true)}
    />
  )
}
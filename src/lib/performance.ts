// Performance monitoring and optimization utilities

export const measureWebVitals = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // First Contentful Paint
    const paintEntries = performance.getEntriesByType('paint')
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')
    
    // Largest Contentful Paint
    let lcp = 0
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      lcp = lastEntry.renderTime || lastEntry.loadTime
    })
    
    try {
      observer.observe({ type: 'largest-contentful-paint', buffered: true })
    } catch (e) {
      // LCP observer not supported
    }
    
    // First Input Delay
    let fid = 0
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        fid = entry.processingStart - entry.startTime
      })
    })
    
    try {
      fidObserver.observe({ type: 'first-input', buffered: true })
    } catch (e) {
      // FID observer not supported
    }
    
    // Cumulative Layout Shift
    let cls = 0
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cls += entry.value
        }
      })
    })
    
    try {
      clsObserver.observe({ type: 'layout-shift', buffered: true })
    } catch (e) {
      // CLS observer not supported
    }
    
    return { fcp, lcp, fid, cls }
  }
  
  return null
}

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/fonts/inter-var.woff2',
    '/icon.svg',
    '/_next/static/css/app.css'
  ]
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link')
    link.rel = 'preload'
    
    if (resource.endsWith('.woff2')) {
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
    } else if (resource.endsWith('.css')) {
      link.as = 'style'
    } else if (resource.endsWith('.js')) {
      link.as = 'script'
    } else if (resource.match(/\.(jpg|jpeg|png|webp|avif|svg)$/)) {
      link.as = 'image'
    }
    
    link.href = resource
    document.head.appendChild(link)
  })
}

// Optimize images on the fly
export const optimizeImageSrc = (src: string, width?: number): string => {
  if (!src || !src.includes('unsplash.com')) return src
  
  // Add Unsplash optimization parameters
  const url = new URL(src)
  url.searchParams.set('auto', 'format')
  url.searchParams.set('fit', 'crop')
  url.searchParams.set('q', '75')
  
  if (width) {
    url.searchParams.set('w', width.toString())
    // Set DPR for retina displays
    if (typeof window !== 'undefined' && window.devicePixelRatio > 1) {
      url.searchParams.set('dpr', '2')
    }
  }
  
  return url.toString()
}

// Debounce function for scroll and resize events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

// Throttle function for performance-critical events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Lazy load scripts
export const lazyLoadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.defer = true
    
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
    
    document.body.appendChild(script)
  })
}

// Request idle callback polyfill
export const requestIdleCallback = 
  (typeof window !== 'undefined' && window.requestIdleCallback) ||
  function (cb: () => void) {
    const start = Date.now()
    return setTimeout(() => {
      cb()
    }, 1)
  }

// Prefetch links on hover
export const prefetchOnHover = () => {
  if (typeof window === 'undefined') return
  
  const links = document.querySelectorAll('a[href^="/"]')
  
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const href = link.getAttribute('href')
      if (href) {
        const linkElement = document.createElement('link')
        linkElement.rel = 'prefetch'
        linkElement.href = href
        document.head.appendChild(linkElement)
      }
    }, { once: true, passive: true })
  })
}

// Progressive image loading
export const progressiveImageLoad = (lowQualitySrc: string, highQualitySrc: string) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = lowQualitySrc
    
    img.onload = () => {
      const highQualityImg = new Image()
      highQualityImg.src = highQualitySrc
      highQualityImg.onload = () => resolve(highQualitySrc)
    }
  })
}

// Check if element is in viewport
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Connection speed detection
export const getConnectionSpeed = (): string => {
  if (typeof window === 'undefined' || !('connection' in navigator)) {
    return 'unknown'
  }
  
  const connection = (navigator as any).connection
  const effectiveType = connection?.effectiveType || 'unknown'
  
  return effectiveType
}

// Adaptive loading based on connection
export const shouldLoadHighQuality = (): boolean => {
  const speed = getConnectionSpeed()
  return speed === '4g' || speed === 'unknown'
}

// Resource hints
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
    { rel: 'dns-prefetch', href: 'https://connect.facebook.net' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
  ]
  
  hints.forEach(hint => {
    const link = document.createElement('link')
    link.rel = hint.rel
    link.href = hint.href
    if (hint.crossOrigin) {
      link.crossOrigin = hint.crossOrigin
    }
    document.head.appendChild(link)
  })
}

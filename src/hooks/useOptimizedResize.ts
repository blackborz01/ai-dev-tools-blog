import { useEffect, useRef, useState } from 'react'

/**
 * Optimized resize hook that prevents forced reflows
 * Uses RAF and debouncing to batch DOM reads
 */
export function useOptimizedResize() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const rafRef = useRef<number>()
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    // Initial dimensions without forcing reflow
    const updateDimensions = () => {
      // Cancel any pending updates
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      // Use RAF to batch DOM reads
      rafRef.current = requestAnimationFrame(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        })
      })
    }

    // Debounced resize handler
    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(updateDimensions, 150)
    }

    // Set initial dimensions
    updateDimensions()

    // Add passive listener for better performance
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return dimensions
}

/**
 * Hook to batch DOM reads and prevent forced reflows
 */
export function useBatchedDOMRead<T>(
  readFn: () => T,
  deps: React.DependencyList = []
): T | undefined {
  const [value, setValue] = useState<T>()
  const rafRef = useRef<number>()

  useEffect(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = requestAnimationFrame(() => {
      const result = readFn()
      setValue(result)
    })

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, deps)

  return value
}
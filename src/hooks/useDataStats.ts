'use client'

import { useState, useEffect } from 'react'
import { getDataStats, getFormattedCounts, DataStats } from '@/lib/data-stats'

export function useDataStats(refreshInterval?: number) {
  const [stats, setStats] = useState<DataStats | null>(null)
  const [formattedCounts, setFormattedCounts] = useState({
    aiTools: '0',
    mcpServers: '0',
    apis: '0',
    total: '0'
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initial load
    const loadStats = () => {
      try {
        const data = getDataStats()
        const formatted = getFormattedCounts()
        setStats(data)
        setFormattedCounts(formatted)
        setLoading(false)
      } catch (error) {
        console.error('Error loading stats:', error)
        setLoading(false)
      }
    }

    loadStats()

    // Set up refresh interval if provided
    if (refreshInterval && refreshInterval > 0) {
      const interval = setInterval(loadStats, refreshInterval)
      return () => clearInterval(interval)
    }
  }, [refreshInterval])

  return {
    stats,
    formattedCounts,
    loading,
    refresh: () => {
      setLoading(true)
      const data = getDataStats()
      const formatted = getFormattedCounts()
      setStats(data)
      setFormattedCounts(formatted)
      setLoading(false)
    }
  }
}

// Hook for animated number counting
export function useAnimatedCount(end: number, duration: number = 2000) {
  // Start with the end value to prevent hydration mismatch
  const [count, setCount] = useState(end)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    // Only animate on the client side after hydration
    if (typeof window === 'undefined') return
    
    // Only animate once
    if (hasAnimated) return
    
    // Reset to 0 for animation after a small delay to ensure hydration is complete
    const resetTimeout = setTimeout(() => {
      setCount(0)
      
      let startTime: number | null = null
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(easeOutQuart * end)
        
        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setHasAnimated(true)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }, 100) // Small delay to ensure hydration completes

    return () => {
      clearTimeout(resetTimeout)
    }
  }, [end, duration, hasAnimated])

  return count
}

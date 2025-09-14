// Deterministic number formatting utilities to prevent hydration mismatches
// Uses Math.floor() instead of toFixed() to ensure consistent rounding

export const formatNumber = (num: number): string => {
  if (!num || isNaN(num)) return '0'

  if (num >= 1000000) {
    // Use integer math to avoid floating point issues
    return `${Math.floor(num / 100000) / 10}M`
  }

  if (num >= 1000) {
    // Always use Math.floor for deterministic rounding
    const thousands = Math.floor(num / 100) / 10
    // If it's a whole number, don't show decimal
    if (thousands === Math.floor(thousands)) {
      return `${Math.floor(thousands)}K`
    }
    return `${thousands}K`
  }

  return Math.floor(num).toString()
}

export const formatPrice = (price?: number): string => {
  if (!price) return 'Free'

  if (price < 0.001) {
    // Use integer math to avoid floating point issues
    return `$${Math.floor(price * 1000000) / 1000}/1K`
  }

  // Use integer math for consistent rounding
  return `$${Math.floor(price * 10000) / 10000}`
}

export const formatContextLength = (length?: number): string => {
  if (!length) return 'N/A'

  if (length >= 1000000) {
    return `${Math.floor(length / 100000) / 10}M`
  }

  if (length >= 1000) {
    return `${Math.floor(length / 1000)}K`
  }

  return length.toString()
}

// Safe locale string formatting with fallback
export const formatLocaleNumber = (num: number): string => {
  if (typeof window === 'undefined') {
    // Server-side: use simple formatting
    return formatNumber(num)
  }

  // Client-side: can use locale formatting
  try {
    return num.toLocaleString('en-US')
  } catch {
    return formatNumber(num)
  }
}

// Format views count consistently
export const formatViews = (views: number): string => {
  return formatNumber(views)
}

// Format user count consistently
export const formatUsers = (users: number): string => {
  return formatNumber(users)
}

// Format stars count consistently
export const formatStars = (stars: number): string => {
  return formatNumber(stars)
}

// Format downloads count consistently
export const formatDownloads = (downloads: number): string => {
  return formatNumber(downloads)
}
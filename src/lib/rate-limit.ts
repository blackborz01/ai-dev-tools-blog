// Rate limiting utility for API routes
import { NextRequest } from 'next/server'

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

class RateLimiter {
  private store: RateLimitStore = {}
  private windowMs: number
  private maxRequests: number

  constructor(windowMs: number = 60000, maxRequests: number = 10) {
    this.windowMs = windowMs
    this.maxRequests = maxRequests
    
    // Clean up old entries every minute
    setInterval(() => this.cleanup(), 60000)
  }

  private cleanup() {
    const now = Date.now()
    for (const key in this.store) {
      if (this.store[key].resetTime < now) {
        delete this.store[key]
      }
    }
  }

  private getKey(req: NextRequest): string {
    // Use IP address as key (fallback to 'anonymous' if not available)
    const forwarded = req.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'anonymous'
    return `${req.nextUrl.pathname}:${ip}`
  }

  async check(req: NextRequest): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
    const key = this.getKey(req)
    const now = Date.now()
    
    if (!this.store[key] || this.store[key].resetTime < now) {
      this.store[key] = {
        count: 1,
        resetTime: now + this.windowMs
      }
      return { allowed: true, remaining: this.maxRequests - 1, resetTime: this.store[key].resetTime }
    }
    
    if (this.store[key].count >= this.maxRequests) {
      return { allowed: false, remaining: 0, resetTime: this.store[key].resetTime }
    }
    
    this.store[key].count++
    return { 
      allowed: true, 
      remaining: this.maxRequests - this.store[key].count,
      resetTime: this.store[key].resetTime
    }
  }
}

// Create different rate limiters for different endpoints
export const authRateLimiter = new RateLimiter(60000, 5) // 5 requests per minute for auth
export const apiRateLimiter = new RateLimiter(60000, 30) // 30 requests per minute for general API
export const searchRateLimiter = new RateLimiter(60000, 20) // 20 requests per minute for search

// Helper function to apply rate limiting
export async function withRateLimit(
  req: NextRequest,
  limiter: RateLimiter = apiRateLimiter
): Promise<Response | null> {
  const { allowed, remaining, resetTime } = await limiter.check(req)
  
  if (!allowed) {
    return new Response(
      JSON.stringify({ 
        error: 'Too many requests. Please try again later.',
        resetTime: new Date(resetTime).toISOString()
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': '30',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': new Date(resetTime).toISOString(),
          'Retry-After': Math.ceil((resetTime - Date.now()) / 1000).toString()
        }
      }
    )
  }
  
  return null // Continue with request
}

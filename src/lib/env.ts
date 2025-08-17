import { z } from 'zod'

// Define the schema for environment variables
const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
  
  // Authentication
  NEXTAUTH_URL: z.string().url().optional(),
  NEXTAUTH_SECRET: z.string().min(32, 'NEXTAUTH_SECRET must be at least 32 characters'),
  
  // Email (optional but validated if present)
  EMAIL_SERVER_HOST: z.string().optional(),
  EMAIL_SERVER_PORT: z.string().regex(/^\d+$/).transform(Number).optional(),
  EMAIL_SERVER_USER: z.string().optional(),
  EMAIL_SERVER_PASSWORD: z.string().optional(),
  EMAIL_FROM: z.string().email().optional(),
  
  // OAuth Providers (optional)
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  GITHUB_CLIENT_ID: z.string().optional(),
  GITHUB_CLIENT_SECRET: z.string().optional(),
  
  // Analytics (optional)
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  VERCEL_ANALYTICS_ID: z.string().optional(),
  
  // API Keys (optional)
  OPENAI_API_KEY: z.string().optional(),
  
  // Node Environment
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  
  // Vercel Environment (automatically set by Vercel)
  VERCEL_ENV: z.enum(['production', 'preview', 'development']).optional(),
})

// Type for the validated environment
type Env = z.infer<typeof envSchema>

// Validate environment variables
function validateEnv(): Env {
  try {
    const env = envSchema.parse(process.env)
    return env
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.errors.map(err => {
        const path = err.path.join('.')
        return `  - ${path}: ${err.message}`
      }).join('\n')
      
      const errorMessage = `
❌ Environment Variable Validation Failed:

${missingVars}

Please check your .env file and ensure all required variables are set correctly.
`
      
      // In development, log the error but don't crash
      if (process.env.NODE_ENV === 'development') {
        console.error(errorMessage)
        // Return a partial env object with defaults for development
        return {
          DATABASE_URL: process.env.DATABASE_URL || 'file:./dev.db',
          NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'development-secret-change-in-production',
          NODE_ENV: 'development',
          ...process.env
        } as Env
      } else {
        // In production, throw error to prevent startup
        throw new Error(errorMessage)
      }
    }
    throw error
  }
}

// Export validated environment variables
export const env = validateEnv()

// Helper function to check if email is configured
export const isEmailConfigured = () => {
  return !!(
    env.EMAIL_SERVER_HOST &&
    env.EMAIL_SERVER_PORT &&
    env.EMAIL_SERVER_USER &&
    env.EMAIL_SERVER_PASSWORD &&
    env.EMAIL_FROM
  )
}

// Helper function to check if OAuth is configured
export const isOAuthConfigured = () => {
  return !!(
    (env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET) ||
    (env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET)
  )
}

// Helper function to check if analytics is configured
export const isAnalyticsConfigured = () => {
  return !!(env.NEXT_PUBLIC_GA_ID || env.VERCEL_ANALYTICS_ID)
}

// Export type for use in other files
export type { Env }

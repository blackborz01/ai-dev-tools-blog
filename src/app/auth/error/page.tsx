'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { AlertTriangle, ArrowLeft, Terminal } from 'lucide-react'

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams?.get('error')

  const getErrorMessage = () => {
    switch (error) {
      case 'Configuration':
        return 'There is a problem with the server configuration. Please contact support.'
      case 'AccessDenied':
        return 'Access denied. You do not have permission to sign in.'
      case 'Verification':
        return 'The verification token has expired or has already been used.'
      case 'OAuthSignin':
        return 'Error occurred while signing in with OAuth provider.'
      case 'OAuthCallback':
        return 'Error occurred while handling OAuth callback.'
      case 'OAuthCreateAccount':
        return 'Could not create OAuth provider user in the database.'
      case 'EmailCreateAccount':
        return 'Could not create email provider user in the database.'
      case 'Callback':
        return 'Error occurred in the OAuth callback handler route.'
      case 'OAuthAccountNotLinked':
        return 'This email is already associated with another account. Please sign in with the original method.'
      case 'EmailSignin':
        return 'The email could not be sent. Please try again.'
      case 'CredentialsSignin':
        return 'Sign in failed. Check the details you provided are correct.'
      case 'SessionRequired':
        return 'Please sign in to access this page.'
      default:
        return 'An unexpected error occurred. Please try again.'
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        {/* Logo Section */}
        <Link href="/" className="flex justify-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl blur-lg opacity-60 animate-pulse" />
              <div className="relative w-14 h-14 bg-black border border-red-500/50 rounded-xl flex items-center justify-center">
                <Terminal className="w-7 h-7 text-red-400" />
              </div>
            </div>
            <div>
              <div className="text-3xl font-black tracking-tighter bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                AI.TOOLS
              </div>
              <div className="text-xs font-mono text-red-400/60">AUTHENTICATION ERROR</div>
            </div>
          </div>
        </Link>

        {/* Error Card */}
        <div className="relative">
          {/* Card Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-2xl blur-lg opacity-20" />
          
          {/* Card Content */}
          <div className="relative bg-gray-950/90 backdrop-blur-2xl border border-red-800/50 rounded-2xl p-8">
            {/* Error Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 rounded-full blur-xl animate-pulse" />
                <div className="relative w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-black mb-3 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Authentication Failed
              </h1>
              <p className="text-gray-400 text-sm">
                {getErrorMessage()}
              </p>
              {error && (
                <p className="mt-4 text-xs text-gray-500 font-mono">
                  Error Code: {error}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link href="/auth/signin">
                <button className="w-full group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-300" />
                  <div className="relative flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-bold text-white group-hover:from-cyan-500 group-hover:to-purple-500 transition-all">
                    <span>Try Again</span>
                  </div>
                </button>
              </Link>

              <Link href="/">
                <button className="w-full group relative">
                  <div className="relative flex items-center justify-center gap-2 px-6 py-3 bg-gray-900/50 rounded-xl border border-gray-800 font-medium text-gray-400 hover:text-white hover:border-gray-700 transition-all">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                  </div>
                </button>
              </Link>
            </div>

            {/* Help Text */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Need help?{' '}
                <Link href="/support" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Contact Support
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

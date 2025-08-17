'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertCircle, RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-red-500 flex items-center justify-center brutal-shadow-xl animate-pulse">
              <AlertCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-6xl md:text-8xl font-black mb-4">OOPS!</h1>
          <h2 className="text-2xl md:text-3xl font-black mb-4">SOMETHING.WENT.WRONG</h2>
          <p className="font-mono text-lg mb-8 opacity-80">
            &gt; AN UNEXPECTED ERROR HAS OCCURRED
          </p>

          {/* Error Details */}
          <div className="bg-black dark:bg-white text-white dark:text-black p-4 mb-8 border-4 border-black dark:border-white">
            <p className="font-mono text-sm">
              ERROR.TYPE: APPLICATION_ERROR<br/>
              STATUS: 500<br/>
              MESSAGE: {error.message || 'Unknown error'}<br/>
              {error.digest && (
                <>DIGEST: {error.digest}<br/></>
              )}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-black font-black brutal-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              TRY AGAIN
            </button>
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-black brutal-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <Home className="w-5 h-5 mr-2" />
              GO HOME
            </Link>
          </div>

          {/* Help Text */}
          <div className="mt-12 font-mono text-xs opacity-60">
            <p>&gt; IF THIS ERROR PERSISTS:</p>
            <p>&gt; 1. CLEAR YOUR BROWSER CACHE</p>
            <p>&gt; 2. CHECK YOUR INTERNET CONNECTION</p>
            <p>&gt; 3. CONTACT SUPPORT WITH ERROR DETAILS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

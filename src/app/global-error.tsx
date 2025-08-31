'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertCircle, RefreshCw, Home } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-red-500 flex items-center justify-center rounded-lg shadow-xl animate-pulse">
                  <AlertCircle className="w-12 h-12 text-white" />
                </div>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-4">CRITICAL ERROR</h1>
              <h2 className="text-2xl md:text-3xl font-black mb-4">APPLICATION.CRASHED</h2>
              <p className="font-mono text-lg mb-8 opacity-80">
                &gt; A GLOBAL ERROR HAS OCCURRED
              </p>

              <div className="bg-black dark:bg-white text-white dark:text-black p-4 mb-8 border-4 border-black dark:border-white rounded-lg">
                <p className="font-mono text-sm">
                  ERROR.TYPE: GLOBAL_ERROR<br/>
                  STATUS: 500<br/>
                  MESSAGE: {error.message || 'Unknown error'}<br/>
                  {error.digest && (
                    <>DIGEST: {error.digest}<br/></>
                  )}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-black font-black rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  RESTART APP
                </button>
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-black rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Home className="w-5 h-5 mr-2" />
                  GO HOME
                </Link>
              </div>

              <div className="mt-12 font-mono text-xs opacity-60">
                <p>&gt; THIS IS A CRITICAL ERROR</p>
                <p>&gt; THE APPLICATION HAS BEEN RESET</p>
                <p>&gt; PLEASE TRY AGAIN OR CONTACT SUPPORT</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
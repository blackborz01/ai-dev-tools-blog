'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function DebugAuth() {
  const { data: session, status } = useSession()
  const [sessionData, setSessionData] = useState<any>(null)
  const [providers, setProviders] = useState<any>(null)

  useEffect(() => {
    // Fetch session from API
    fetch('/api/auth/session')
      .then(r => r.json())
      .then(data => setSessionData(data))
      .catch(err => console.error('Session fetch error:', err))

    // Fetch providers
    fetch('/api/auth/providers')
      .then(r => r.json())
      .then(data => setProviders(data))
      .catch(err => console.error('Providers fetch error:', err))
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Auth Debug Page</h1>
      
      <div className="space-y-6">
        <div className="p-4 bg-gray-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">useSession Hook Status:</h2>
          <pre className="text-green-400">{status}</pre>
        </div>

        <div className="p-4 bg-gray-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">useSession Data:</h2>
          <pre className="text-cyan-400 overflow-auto">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>

        <div className="p-4 bg-gray-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">API Session Data:</h2>
          <pre className="text-yellow-400 overflow-auto">
            {JSON.stringify(sessionData, null, 2)}
          </pre>
        </div>

        <div className="p-4 bg-gray-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Available Providers:</h2>
          <pre className="text-purple-400 overflow-auto">
            {JSON.stringify(providers, null, 2)}
          </pre>
        </div>

        <div className="p-4 bg-gray-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Environment Check:</h2>
          <div className="space-y-1">
            <p>NEXTAUTH_URL: {process.env.NEXT_PUBLIC_NEXTAUTH_URL || 'Not visible (server-side only)'}</p>
            <p>Current URL: {typeof window !== 'undefined' ? window.location.href : 'SSR'}</p>
            <p>Cookies: {typeof document !== 'undefined' ? document.cookie : 'SSR'}</p>
          </div>
        </div>

        <div className="p-4 bg-gray-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Quick Actions:</h2>
          <div className="space-x-4">
            <a href="/api/auth/signin" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
              Sign In
            </a>
            <a href="/api/auth/signout" className="px-4 py-2 bg-red-600 rounded hover:bg-red-700">
              Sign Out
            </a>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
      <div className="text-center">
        {/* Loading Animation */}
        <div className="mb-8">
          <div className="flex justify-center space-x-2">
            <div className="w-4 h-4 bg-lime-400 animate-pulse"></div>
            <div className="w-4 h-4 bg-lime-400 animate-pulse delay-100"></div>
            <div className="w-4 h-4 bg-lime-400 animate-pulse delay-200"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <h1 className="text-2xl font-black mb-2">LOADING...</h1>
        <p className="font-mono text-sm opacity-60">
          &gt; FETCHING DATA<span className="animate-pulse">_</span>
        </p>
      </div>
    </div>
  )
}

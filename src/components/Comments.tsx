'use client'

import { useEffect } from 'react'

interface CommentsProps {
  term?: string
}

export default function Comments({ term }: CommentsProps) {
  useEffect(() => {
    const script = document.createElement('script')
    const anchor = document.getElementById('comments-container')
    
    if (!anchor) return
    
    script.setAttribute('src', 'https://giscus.app/client.js')
    script.setAttribute('data-repo', 'YOUR_GITHUB_USERNAME/YOUR_REPO_NAME') // Replace with your repo
    script.setAttribute('data-repo-id', 'YOUR_REPO_ID') // Replace with your repo ID
    script.setAttribute('data-category', 'Comments')
    script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID') // Replace
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', 'dark')
    script.setAttribute('data-lang', 'en')
    script.setAttribute('data-loading', 'lazy')
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true
    
    anchor.appendChild(script)
    
    return () => {
      if (anchor && script) {
        anchor.removeChild(script)
      }
    }
  }, [term])
  
  return (
    <section className="py-12 border-t-4 border-black dark:border-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-black mb-8">💬 COMMENTS</h2>
        <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-6">
          <div id="comments-container"></div>
        </div>
        <p className="mt-4 text-sm opacity-60 text-center">
          Comments powered by GitHub Discussions via Giscus
        </p>
      </div>
    </section>
  )
}

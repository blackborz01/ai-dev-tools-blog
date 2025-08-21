'use client'

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { trackArticleRead } from '@/lib/stats/userStats'

interface ArticleTrackerProps {
  articleSlug: string
}

export default function ArticleTracker({ articleSlug }: ArticleTrackerProps) {
  const { data: session } = useSession()

  useEffect(() => {
    if (!session?.user?.email || !articleSlug) return

    // Track after 10 seconds of being on the page (indicates actual reading)
    const timer = setTimeout(() => {
      trackArticleRead(session.user.email!, articleSlug)
    }, 10000)

    return () => clearTimeout(timer)
  }, [session, articleSlug])

  return null // This component doesn't render anything
}

import Script from 'next/script'

interface GoogleAnalyticsProps {
  measurementId: string
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  if (!measurementId) {
    console.warn('Google Analytics: No measurement ID provided')
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

// Event tracking helper functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackToolComparison = (tool1: string, tool2: string, winner?: string) => {
  trackEvent('tool_comparison', 'engagement', `${tool1} vs ${tool2}`, winner ? 1 : 0)
  if (winner) {
    trackEvent('comparison_winner', 'engagement', winner)
  }
}

export const trackNewsletterSignup = (source: string) => {
  trackEvent('newsletter_signup', 'conversion', source)
}

export const trackToolClick = (toolName: string, section: string) => {
  trackEvent('tool_click', 'engagement', `${toolName} from ${section}`)
}

export const trackSearch = (query: string, resultsCount: number) => {
  trackEvent('search', 'engagement', query, resultsCount)
}

export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', 'engagement', `${percentage}%`)
}

export const trackReadingTime = (articleSlug: string, seconds: number) => {
  trackEvent('reading_time', 'engagement', articleSlug, seconds)
}

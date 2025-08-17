// SEO utilities and metadata generation

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aidevtools.blog'
export const SITE_NAME = 'AI Dev Tools Blog'
export const SITE_DESCRIPTION = 'Discover the latest AI coding tools, MCP servers, and productivity tips for developers'
export const SITE_AUTHOR = 'Farid Muradov'
export const TWITTER_HANDLE = '@aidevtools'

interface GenerateMetadataProps {
  title?: string
  description?: string
  path?: string
  image?: string
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
    tags?: string[]
  }
  noindex?: boolean
}

export function generateMetadata({
  title,
  description,
  path = '',
  image,
  article,
  noindex = false
}: GenerateMetadataProps) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const pageDescription = description || SITE_DESCRIPTION
  const canonicalUrl = `${SITE_URL}${path}`
  const ogImage = image || `${SITE_URL}/og-image.jpg`

  const metadata: any = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle
        }
      ],
      locale: 'en_US',
      type: article ? 'article' : 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      images: [ogImage]
    },
    alternates: {
      canonical: canonicalUrl
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      bing: process.env.NEXT_PUBLIC_BING_VERIFICATION
    }
  }

  if (article) {
    metadata.openGraph.type = 'article'
    if (article.publishedTime) {
      metadata.openGraph.article = {
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime || article.publishedTime,
        author: article.author || SITE_AUTHOR,
        tags: article.tags || []
      }
    }
  }

  return metadata
}

// Generate JSON-LD structured data
export function generateArticleSchema({
  title,
  description,
  path,
  image,
  publishedTime,
  modifiedTime,
  author
}: {
  title: string
  description: string
  path: string
  image?: string
  publishedTime: string
  modifiedTime?: string
  author?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image || `${SITE_URL}/og-image.jpg`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: author || SITE_AUTHOR,
      url: `${SITE_URL}/about`
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${path}`
    },
    url: `${SITE_URL}${path}`
  }
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  }
}

// Generate organization schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://twitter.com/aidevtools',
      'https://github.com/aidevtools',
      'https://linkedin.com/company/aidevtools'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '',
      contactType: 'customer support',
      email: 'support@aidevtools.blog',
      areaServed: 'Worldwide',
      availableLanguage: ['English']
    }
  }
}

// Generate website schema
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
}

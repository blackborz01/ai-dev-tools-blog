import Script from 'next/script'

interface StructuredDataProps {
  data: any
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  )
}

// Website structured data
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AI Dev Tools Daily",
  "description": "Your premier source for AI development tools, MCP updates, and coding assistant reviews",
  "url": "https://aidevtoolsdaily.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://aidevtoolsdaily.com/tools?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AI Dev Tools Daily",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aidevtoolsdaily.com/logo.png"
    }
  }
}

// Organization structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI Dev Tools Daily",
  "url": "https://aidevtoolsdaily.com",
  "logo": "https://aidevtoolsdaily.com/logo.png",
  "sameAs": [
    "https://twitter.com/aidevtoolsdaily",
    "https://github.com/aidevtoolsdaily"
  ]
}

// Article structured data generator
export function generateArticleSchema(article: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.featuredImage,
    "datePublished": article.publishDate,
    "dateModified": article.updateDate,
    "author": {
      "@type": "Person",
      "name": article.author.name,
      "jobTitle": article.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Dev Tools Daily",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aidevtoolsdaily.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://aidevtoolsdaily.com/blog/${article.slug}`
    },
    "wordCount": article.wordCount,
    "keywords": article.tags.join(", ")
  }
}

// Software application structured data for tools
export function generateSoftwareSchema(tool: any) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.description,
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": tool.platforms?.join(", ") || "Web, Windows, macOS, Linux",
    "offers": tool.pricing ? {
      "@type": "Offer",
      "price": tool.pricing.price || "0",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": tool.pricing.price || "0",
        "priceCurrency": "USD",
        "valueAddedTaxIncluded": false
      }
    } : undefined,
    "aggregateRating": tool.rating ? {
      "@type": "AggregateRating",
      "ratingValue": tool.rating.value,
      "ratingCount": tool.rating.count,
      "bestRating": "5",
      "worstRating": "1"
    } : undefined,
    "review": tool.reviews?.map((review: any) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.date,
      "reviewBody": review.content,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  }
}

// FAQ structured data generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Breadcrumb structured data generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

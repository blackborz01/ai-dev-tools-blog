export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BoostDevSpeed",
  "alternateName": "BDS",
  "url": "https://www.boostdevspeed.com",
  "description": "Master AI coding tools and boost developer productivity 3x with proven strategies and real benchmarks",
  "publisher": {
    "@type": "Organization",
    "name": "BoostDevSpeed",
    "url": "https://www.boostdevspeed.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.boostdevspeed.com/icon.svg",
      "width": 512,
      "height": 512
    },
    "sameAs": [
      "https://twitter.com/boostdevspeed",
      "https://github.com/boostdevspeed"
    ]
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.boostdevspeed.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "en-US"
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BoostDevSpeed",
  "url": "https://www.boostdevspeed.com",
  "logo": "https://www.boostdevspeed.com/icon.svg",
  "description": "Premier resource for AI coding tools, MCP servers, and developer productivity",
  "foundingDate": "2024",
  "email": "contact@boostdevspeed.com",
  "sameAs": [
    "https://twitter.com/boostdevspeed",
    "https://github.com/boostdevspeed"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  }
}

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const articleSchema = (article: any) => ({
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
    "jobTitle": article.author.role,
    "description": article.author.bio
  },
  "publisher": {
    "@type": "Organization",
    "name": "BoostDevSpeed",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.boostdevspeed.com/icon.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.boostdevspeed.com/blog/${article.slug}`
  },
  "wordCount": article.wordCount,
  "keywords": article.tags.join(", "),
  "articleSection": article.category,
  "inLanguage": "en-US"
})

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
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
})

export const howToSchema = (steps: Array<{name: string, text: string}>) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Boost Developer Speed with AI Tools",
  "description": "Step-by-step guide to increase coding productivity",
  "step": steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text
  }))
})

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BoostDevSpeed Tools Directory",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1247"
  }
}

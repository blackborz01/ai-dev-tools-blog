// Backup of original articles.ts before adding GPT-5 article
// Created: 2025-08-13

export interface Article {
  slug: string
  title: string
  excerpt: string
  thumbnail: string  
  featuredImage: string  
  imageAlt: string  
  category: string
  tags: string[]
  author: {
    name: string
    role: string
    bio: string
  }
  publishDate: string
  updateDate: string
  readTime: number
  wordCount: number
  tableOfContents: Array<{
    id: string
    title: string
    level: number
  }>
  content: string
  relatedArticles?: string[]
  featured: boolean
}

// Original articles array preserved here for backup

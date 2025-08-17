export interface Article {
  slug: string
  title: string
  excerpt: string
  thumbnail: string  // New field for blog listing thumbnails
  featuredImage: string  // New field for article hero images
  imageAlt: string  // New field for accessibility
  category: string
  tags: string[]
  author: {
    name: string
    role: string
    bio: string
  }
  publishDate: string
  update
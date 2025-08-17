import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
    ],
    sitemap: 'https://aidevtoolsdaily.com/sitemap.xml',
    host: 'https://aidevtoolsdaily.com',
  }
}

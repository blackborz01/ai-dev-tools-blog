'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { Fragment } from 'react'

export interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  // Always include home
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    ...items
  ]

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center space-x-2 text-sm ${className}`}
    >
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <Fragment key={index}>
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600" />
            )}
            <li>
              {item.current || !item.href ? (
                <span 
                  className="text-gray-900 dark:text-gray-100 font-medium"
                  aria-current={item.current ? 'page' : undefined}
                >
                  {index === 0 ? (
                    <Home className="w-4 h-4 inline mr-1" />
                  ) : null}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {index === 0 ? (
                    <Home className="w-4 h-4 inline mr-1" />
                  ) : null}
                  {item.label}
                </Link>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  )
}

// Schema generator for SEO
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    ...items
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': item.href ? `https://aidevtools.blog${item.href}` : undefined
    }))
  }
}

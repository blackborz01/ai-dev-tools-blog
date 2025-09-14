'use client'

import React, { memo, ReactNode } from 'react'
import dynamic from 'next/dynamic'

// Lazy load components for better performance
const QuickAnswer = dynamic(() => import('./QuickAnswer'), { ssr: true })
const StatsGrid = dynamic(() => import('./StatsGrid'), { ssr: true })
const ProgressBar = dynamic(() => import('./ProgressBar'), { ssr: true })
const ComparisonTable = dynamic(() => import('./ComparisonTable'), { ssr: true })
const CodeBlock = dynamic(() => import('./CodeBlock'), { ssr: true })
const Timeline = dynamic(() => import('./Timeline'), { ssr: true })
const WarningBox = dynamic(() => import('./WarningBox'), { ssr: true })
const FlowStateZones = dynamic(() => import('./FlowStateZones'), { ssr: false })
const ProductivityCurve = dynamic(() => import('./ProductivityCurve'), { ssr: false })
const EnvironmentalFactors = dynamic(() => import('./EnvironmentalFactors'), { ssr: false })

interface BlogContentProps {
  content: string | ReactNode
  className?: string
}

// Component mapping for dynamic rendering
export const componentMap = {
  QuickAnswer,
  StatsGrid,
  ProgressBar,
  ComparisonTable,
  CodeBlock,
  Timeline,
  WarningBox,
  FlowStateZones,
  ProductivityCurve,
  EnvironmentalFactors,
}

const BlogContent = memo(({ content, className = '' }: BlogContentProps) => {
  // If content is already a React element, render it directly
  if (React.isValidElement(content)) {
    return <div className={className}>{content}</div>
  }

  // If content is a string (HTML), render with dangerouslySetInnerHTML
  if (typeof content === 'string') {
    return (
      <div
        className={`
          article-content prose prose-invert max-w-none
          prose-headings:font-black prose-headings:text-cyan-400
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
          prose-ul:text-gray-300 prose-li:mb-2
          prose-strong:text-white prose-strong:font-semibold
          prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
          prose-code:text-cyan-400 prose-code:bg-gray-900 prose-code:px-1 prose-code:rounded
          prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800
          ${className}
        `}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )
  }

  return null
})

BlogContent.displayName = 'BlogContent'

export default BlogContent
import React from 'react'
import QuickAnswer from '@/components/blog/QuickAnswer'
import StatsGrid from '@/components/blog/StatsGrid'
import ProgressBar from '@/components/blog/ProgressBar'
import ComparisonTable from '@/components/blog/ComparisonTable'
import CodeBlock from '@/components/blog/CodeBlock'
import Timeline from '@/components/blog/Timeline'
import WarningBox from '@/components/blog/WarningBox'

// Unified author for all blog posts
export const BLOG_AUTHOR = {
  name: "BoostDevSpeed",
  role: "Performance Optimization Expert",
  bio: "Specializing in AI tool optimization, performance engineering, and developer productivity. Helping developers build faster, more efficient applications."
}

// Blog template sections interface
export interface BlogSection {
  type: 'quickAnswer' | 'statsGrid' | 'progressBar' | 'table' | 'code' | 'timeline' | 'warning' | 'text' | 'heading'
  data?: any
  content?: string
  props?: any
}

// Template builder for consistent blog structure
export class BlogTemplateBuilder {
  private sections: BlogSection[] = []

  addQuickAnswer(title: string, content: string, variant?: 'blue' | 'green' | 'orange' | 'purple' | 'cyan') {
    this.sections.push({
      type: 'quickAnswer',
      props: { title, content, variant }
    })
    return this
  }

  addStatsGrid(title: string, stats: any[], columns?: 2 | 3 | 4) {
    this.sections.push({
      type: 'statsGrid',
      props: { title, stats, columns }
    })
    return this
  }

  addProgressBar(title: string, items: any[]) {
    this.sections.push({
      type: 'progressBar',
      props: { title, items }
    })
    return this
  }

  addTable(title: string, columns: any[], data: any[], highlightFirst?: boolean) {
    this.sections.push({
      type: 'table',
      props: { title, columns, data, highlightFirst }
    })
    return this
  }

  addCode(code: string, language?: string, title?: string, showLineNumbers?: boolean) {
    this.sections.push({
      type: 'code',
      props: { code, language, title, showLineNumbers }
    })
    return this
  }

  addTimeline(title: string, items: any[]) {
    this.sections.push({
      type: 'timeline',
      props: { title, items }
    })
    return this
  }

  addWarning(title: string, items?: string[], content?: string, type?: 'warning' | 'info' | 'success' | 'error') {
    this.sections.push({
      type: 'warning',
      props: { title, items, content, type }
    })
    return this
  }

  addText(content: string) {
    this.sections.push({
      type: 'text',
      content
    })
    return this
  }

  addHeading(level: 2 | 3, id: string, text: string) {
    this.sections.push({
      type: 'heading',
      props: { level, id, text }
    })
    return this
  }

  build(): React.ReactNode {
    return (
      <>
        {this.sections.map((section, index) => {
          // Add ad placement zones every 3 major sections
          const adZone = index > 0 && index % 3 === 0 ? (
            <div key={`ad-${index}`} className="my-8" data-ad-zone={`article-mid-${Math.floor(index / 3)}`}>
              {/* Ad placement zone - consistent across all articles */}
            </div>
          ) : null

          let component = null

          switch (section.type) {
            case 'quickAnswer':
              component = <QuickAnswer key={index} {...section.props} />
              break
            case 'statsGrid':
              component = <StatsGrid key={index} {...section.props} />
              break
            case 'progressBar':
              component = <ProgressBar key={index} {...section.props} />
              break
            case 'table':
              component = <ComparisonTable key={index} {...section.props} />
              break
            case 'code':
              component = <CodeBlock key={index} {...section.props} />
              break
            case 'timeline':
              component = <Timeline key={index} {...section.props} />
              break
            case 'warning':
              component = <WarningBox key={index} {...section.props} />
              break
            case 'heading':
              const HeadingTag = `h${section.props.level}` as keyof JSX.IntrinsicElements
              component = (
                <HeadingTag
                  key={index}
                  id={section.props.id}
                  className={`${section.props.level === 2 ? 'text-3xl font-black mt-12 mb-6 text-cyan-400' : 'text-xl font-bold mb-4 text-purple-400'}`}
                >
                  {section.props.text}
                </HeadingTag>
              )
              break
            case 'text':
              component = (
                <div key={index} className="text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: section.content || '' }} />
              )
              break
          }

          return (
            <React.Fragment key={index}>
              {adZone}
              {component}
            </React.Fragment>
          )
        })}
      </>
    )
  }
}

// Helper function to convert old HTML content to new component-based structure
export function convertHtmlToTemplate(htmlContent: string): BlogTemplateBuilder {
  const builder = new BlogTemplateBuilder()

  // This is a simplified converter - in production, you'd parse the HTML properly
  // For now, just wrap the content
  builder.addText(htmlContent)

  return builder
}
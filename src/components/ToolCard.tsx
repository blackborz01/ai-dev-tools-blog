import React from 'react'
import { 
  Star, ArrowUpRight, Users, Download, 
  Clock, Tag, Bookmark, Share2, ExternalLink,
  CheckCircle, Award, TrendingUp
} from 'lucide-react'

interface ToolCardProps {
  tool: {
    id: string
    name: string
    description: string
    category: string
    url: string
    pricing: 'free' | 'freemium' | 'paid' | 'unknown'
    tags?: string[]
    stars?: number
    upvotes?: number
    downloads?: number
    users?: number
    dateAdded: string
    featured?: boolean
    verified?: boolean
    editorsPick?: boolean
  }
}

export default function ToolCard({ tool }: ToolCardProps) {

  // Format numbers
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${Math.floor(num / 100000) / 10}M`
    if (num >= 1000) {
      const thousands = Math.floor(num / 100) / 10
      if (thousands === Math.floor(thousands)) {
        return `${Math.floor(thousands)}k`
      }
      return `${thousands}k`
    }
    return Math.floor(num).toString()
  }

  // Get rating (mock rating based on metrics)
  const getRating = () => {
    const score = ((tool.stars || 0) + (tool.upvotes || 0)) / 1000
    return Math.min(5, Math.max(0, Math.round(score * 10) / 10))
  }

  const rating = getRating()

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
      {/* Header Section */}
      <div className="mb-4">
        {/* Title & Badges */}
        <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {tool.name}
                </h3>
                {tool.verified && (
                  <CheckCircle className="w-5 h-5 text-blue-500" title="Verified" />
                )}
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : i < rating
                          ? 'text-yellow-400 fill-yellow-400 opacity-50'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  ({tool.upvotes || 0})
                </span>
              </div>
            </div>

            {/* Pricing Badge */}
            <div className="flex flex-col items-end gap-2">
              <span className={`
                px-3 py-1 rounded-lg text-sm font-semibold
                ${tool.pricing === 'free' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                  : tool.pricing === 'freemium'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : tool.pricing === 'paid'
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                }
              `}>
                {tool.pricing === 'freemium' ? 'Freemium' : 
                 tool.pricing === 'free' ? 'Free' :
                 tool.pricing === 'paid' ? 'Paid' : 'Unknown'}
              </span>
              
              {/* Upvotes */}
              {tool.upvotes && tool.upvotes > 100 && (
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>{formatNumber(tool.upvotes)}</span>
                </div>
              )}
            </div>
          </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {tool.description}
      </p>

      {/* Tags */}
      {tool.tags && tool.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm flex items-center gap-1"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Special Badges */}
      {(tool.featured || tool.editorsPick) && (
        <div className="flex items-center gap-2 mb-4">
          {tool.featured && (
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-lg text-sm font-semibold flex items-center gap-1">
              <Award className="w-4 h-4" />
              Featured
            </span>
          )}
          {tool.editorsPick && (
            <span className="px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-lg text-sm font-semibold flex items-center gap-1">
              <Award className="w-4 h-4" />
              Editor's Pick
            </span>
          )}
        </div>
      )}

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <Bookmark className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors group"
        >
          Visit
          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  )
}

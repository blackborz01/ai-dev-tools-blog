import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Zap, Clock, Tag, Users, ChevronRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getCategoryById } from '@/lib/agentCategories'
import { getAgentsByCategory } from '@/lib/agents'

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = getCategoryById(params.category)
  
  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.'
    }
  }

  return {
    title: `${category.name} AI Agents - ${category.agentCount} Professional Prompts | BoostDevSpeed`,
    description: category.description,
    keywords: `${category.name}, AI agents, ${category.primaryUsers.join(', ')}, automation, prompt engineering`,
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategoryById(params.category)
  const agents = getAgentsByCategory(params.category)
  
  if (!category) {
    notFound()
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${category.color.gradient} py-16`}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-6">
            <Link href="/agents" className="hover:text-white">Agents</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{category.name}</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              {category.description}
            </p>
            
            {/* Category Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/20 rounded">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{category.tokenSavings}</div>
                  <div className="text-sm text-gray-300">Token Savings</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/20 rounded">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{category.metrics.avgTimeSaved}</div>
                  <div className="text-sm text-gray-300">Time Saved</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/20 rounded">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{category.metrics.popularityScore}%</div>
                  <div className="text-sm text-gray-300">Popularity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="bg-gray-50 dark:bg-gray-900 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <Link 
            href="/agents" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              {category.agentCount} {category.name} Agents
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Click on any agent to view its optimized prompt and implementation guide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {agents.map((agent) => (
              <Link
                key={agent.id}
                href={`/agents/${params.category}/${agent.id}`}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {agent.name}
                      </h3>
                      {agent.badge && (
                        <span className={`
                          px-2 py-1 text-xs font-semibold rounded
                          ${agent.badge === 'Popular' ? 'bg-red-100 text-red-700' : ''}
                          ${agent.badge === 'Essential' ? 'bg-green-100 text-green-700' : ''}
                          ${agent.badge === 'Trending' ? 'bg-yellow-100 text-yellow-700' : ''}
                          ${agent.badge === 'Hot' ? 'bg-orange-100 text-orange-700' : ''}
                          ${agent.badge === 'Advanced' ? 'bg-purple-100 text-purple-700' : ''}
                          ${agent.badge === 'Power User' ? 'bg-indigo-100 text-indigo-700' : ''}
                        `}>
                          {agent.badge}
                        </span>
                      )}
                    </div>
                    <div className={`
                      px-2 py-1 text-xs rounded font-medium
                      ${agent.difficulty === 'beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : ''}
                      ${agent.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : ''}
                      ${agent.difficulty === 'advanced' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : ''}
                    `}>
                      {agent.difficulty}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {agent.shortDesc}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">
                        <span className="font-semibold text-blue-600">{agent.tokenSavings}</span> tokens saved
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span className="text-sm">
                        <span className="font-semibold text-green-600">{agent.timeSavings}</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Use Cases */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Use Cases</p>
                    <div className="flex flex-wrap gap-2">
                      {agent.useCases.slice(0, 3).map((useCase, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded"
                        >
                          {useCase}
                        </span>
                      ))}
                      {agent.useCases.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded text-gray-500">
                          +{agent.useCases.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Key Features</p>
                    <div className="flex flex-wrap gap-2">
                      {agent.features.slice(0, 4).map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Popularity Bar */}
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-500">Popularity</span>
                          <span className="font-semibold">{agent.popularity}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.color.gradient} transition-all duration-500`}
                            style={{ width: `${agent.popularity}%` }}
                          />
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 ml-4 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {agents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No agents available in this category yet.</p>
              <Link href="/agents" className="text-blue-600 hover:underline mt-4 inline-block">
                Browse other categories
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Explore Other Categories</h2>
          <div className="flex flex-wrap gap-4">
            {['development', 'content', 'business', 'research', 'creative']
              .filter(cat => cat !== params.category)
              .slice(0, 4)
              .map((categoryId) => {
                const relatedCategory = getCategoryById(categoryId)
                if (!relatedCategory) return null
                
                return (
                  <Link
                    key={categoryId}
                    href={`/agents/${categoryId}`}
                    className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                  >
                    <div className={`p-2 rounded bg-gradient-to-br ${relatedCategory.color.gradient} bg-opacity-10`}>
                      <Tag className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <div className="font-semibold">{relatedCategory.name}</div>
                      <div className="text-xs text-gray-500">{relatedCategory.agentCount} agents</div>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

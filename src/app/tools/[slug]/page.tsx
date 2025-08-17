'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Terminal, Star, Download, Clock, TrendingUp,
  CheckCircle, XCircle, AlertCircle, ChevronRight,
  Copy, PlayCircle, Book, MessageSquare, Github,
  DollarSign, Users, Award, BarChart3, Info,
  ArrowRight, ExternalLink, Zap, Shield, Brain,
  ChevronDown, ChevronUp, Sparkles, ThumbsUp
} from 'lucide-react'
import { getToolBySlug } from '@/lib/tools-data'
import { cursorToolData } from '@/lib/cursor-tool-data'

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const [tool, setTool] = useState<any>(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([])
  const [copiedCode, setCopiedCode] = useState(false)

  useEffect(() => {
    // For now, if it's cursor-ide, use our comprehensive data
    if (params.slug === 'cursor-ide') {
      setTool(cursorToolData)
    } else {
      const toolData = getToolBySlug(params.slug)
      setTool(toolData)
    }
  }, [params.slug])

  const toggleFAQ = (index: number) => {
    setExpandedFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const copyInstallCommand = () => {
    navigator.clipboard.writeText(tool?.quickStart?.install || `npm install ${tool?.slug}`)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  if (!tool) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">TOOL NOT FOUND</h1>
          <Link href="/tools" className="text-red-500 hover:underline">
            ← Back to Tools
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Navigation */}
      <nav className="border-b-4 border-black dark:border-white sticky top-0 z-50 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center">
                <Terminal className="w-6 h-6 text-white dark:text-black" />
              </div>
              <div>
                <div className="text-2xl font-black tracking-tighter">AI.TOOLS</div>
                <div className="text-xs font-mono text-red-500">DAILY.UPDATES</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="px-4 py-2 font-black text-sm hover:bg-black hover:text-white transition-colors">
                HOME
              </Link>
              <Link href="/blog" className="px-4 py-2 font-black text-sm hover:bg-black hover:text-white transition-colors">
                BLOG
              </Link>
              <Link href="/tools" className="px-4 py-2 font-black text-sm bg-black text-white">
                TOOLS
              </Link>
              <Link href="/mcp" className="px-4 py-2 font-black text-sm hover:bg-black hover:text-white transition-colors">
                MCP
              </Link>
            </div>

            <button className="bg-red-500 text-white px-6 py-3 font-black text-sm">
              SUBSCRIBE →
            </button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="border-b-4 border-black dark:border-white py-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 font-mono text-sm">
            <Link href="/" className="hover:text-red-500">HOME</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/tools" className="hover:text-red-500">TOOLS</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="font-black">{tool.name?.toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b-4 border-black dark:border-white py-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`px-3 py-1 font-black text-xs border-2 ${
                tool.status === 'STABLE' 
                  ? 'bg-green-500 border-green-700' 
                  : 'bg-yellow-500 border-yellow-700'
              }`}>
                {tool.status}
              </span>
              {tool.version && (
                <span className="px-3 py-1 bg-black/20 border-2 border-white/20 font-mono text-xs">
                  v{tool.version}
                </span>
              )}
              {tool.trending && (
                <span className="px-3 py-1 bg-lime-400 text-black font-black text-xs animate-pulse">
                  🔥 TRENDING +{tool.growthRate}%
                </span>
              )}
              {tool.hot && (
                <span className="px-3 py-1 bg-red-600 font-black text-xs">
                  HOT
                </span>
              )}
              <span className="px-3 py-1 bg-white/20 backdrop-blur font-mono text-xs">
                Updated {tool.lastUpdate}
              </span>
            </div>

            {/* Title & Tagline */}
            <h1 className="text-5xl md:text-7xl font-black mb-4">
              {tool.name}
            </h1>
            <p className="text-2xl md:text-3xl mb-6 font-light">
              {tool.tagline}
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-4xl leading-relaxed">
              {tool.description}
            </p>

            {/* Stats Grid */}
            {tool.stats && (
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                <div className="bg-black/20 backdrop-blur p-4 border-2 border-white/20 rounded-lg">
                  <div className="text-3xl font-black">{(tool.stats.users / 1000).toFixed(0)}K+</div>
                  <div className="text-xs font-mono opacity-80">ACTIVE USERS</div>
                </div>
                <div className="bg-black/20 backdrop-blur p-4 border-2 border-white/20 rounded-lg">
                  <div className="text-3xl font-black flex items-center">
                    <Star className="w-6 h-6 mr-1 fill-current" />
                    {tool.stats.rating}
                  </div>
                  <div className="text-xs font-mono opacity-80">{tool.stats.reviews} REVIEWS</div>
                </div>
                <div className="bg-black/20 backdrop-blur p-4 border-2 border-white/20 rounded-lg">
                  <div className="text-3xl font-black">{(tool.stars / 1000).toFixed(0)}K</div>
                  <div className="text-xs font-mono opacity-80">GITHUB STARS</div>
                </div>
                <div className="bg-black/20 backdrop-blur p-4 border-2 border-white/20 rounded-lg">
                  <div className="text-3xl font-black">{tool.stats.recommendationRate}%</div>
                  <div className="text-xs font-mono opacity-80">RECOMMEND</div>
                </div>
                <div className="bg-black/20 backdrop-blur p-4 border-2 border-white/20 rounded-lg">
                  <div className="text-3xl font-black">#{tool.stats.npsScore}</div>
                  <div className="text-xs font-mono opacity-80">NPS SCORE</div>
                </div>
                <div className="bg-black/20 backdrop-blur p-4 border-2 border-white/20 rounded-lg">
                  <div className="text-3xl font-black">{tool.gettingStarted?.timeToFirstValue}</div>
                  <div className="text-xs font-mono opacity-80">TO VALUE</div>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a 
                href={tool.affiliateUrl || tool.urls?.official}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-black text-white font-black text-lg inline-flex items-center"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                {tool.cta || 'TRY IT FREE →'}
              </a>
              {tool.pricing?.trial && (
                <div className="px-6 py-4 bg-lime-400 text-black font-black inline-flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  {tool.pricing.trial.duration} {tool.pricing.trial.unit} free trial
                  {!tool.pricing.trial.creditCard && " • No credit card"}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="border-b-4 border-black dark:border-white sticky top-20 bg-white dark:bg-black z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {['overview', 'features', 'pricing', 'pros-cons', 'reviews', 'faqs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-black text-sm whitespace-nowrap border-b-4 transition-colors ${
                  activeTab === tab 
                    ? 'border-red-500 bg-gray-50 dark:bg-gray-900' 
                    : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-900'
                }`}
              >
                {tab.toUpperCase().replace('-', ' & ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl font-black mb-6 pb-2 border-b-4 border-black dark:border-white">
                    What is {tool.name}?
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl leading-relaxed">
                      {tool.longDescription || tool.description}
                    </p>
                  </div>
                </div>

                {/* Use Cases */}
                {tool.useCases && (
                  <div>
                    <h3 className="text-3xl font-black mb-6">Who Should Use {tool.name}?</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {tool.useCases.map((useCase: any, idx: number) => (
                        <div key={idx} className="border-4 border-black dark:border-white p-6">
                          <h4 className="font-black text-lg mb-2">{useCase.title}</h4>
                          <p className="text-sm font-bold mb-2 text-red-500">{useCase.persona}</p>
                          <p className="mb-3">{useCase.description}</p>
                          <p className="text-sm bg-lime-400 text-black p-2 font-bold">
                            💡 {useCase.benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && tool.features && (
              <div className="space-y-12">
                <h2 className="text-4xl font-black mb-8 pb-2 border-b-4 border-black dark:border-white">
                  {tool.name} Features Breakdown
                </h2>
                
                <div className="grid gap-8">
                  {tool.features.map((feature: any, idx: number) => {
                    const Icon = feature.icon
                    return (
                      <div key={idx} className="border-4 border-black dark:border-white overflow-hidden">
                        <div className="flex">
                          <div className="w-24 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                            <Icon className="w-12 h-12 text-white" />
                          </div>
                          <div className="flex-1 p-8">
                            <h3 className="text-2xl font-black mb-3">{feature.title}</h3>
                            <p className="text-lg mb-4">{feature.description}</p>
                            
                            {feature.example && (
                              <div className="bg-gray-100 dark:bg-gray-900 p-4 border-2 border-gray-300 dark:border-gray-700 mb-4">
                                <p className="font-mono text-sm mb-2">EXAMPLE:</p>
                                <p className="italic">{feature.example}</p>
                              </div>
                            )}
                            
                            <div className="flex items-center bg-lime-400 text-black p-4 font-black">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              BENEFIT: {feature.benefit}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Pricing Tab */}
            {activeTab === 'pricing' && tool.pricing && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl font-black mb-4 pb-2 border-b-4 border-black dark:border-white">
                    {tool.name} Pricing & Plans
                  </h2>
                  <p className="text-xl mb-8">
                    {tool.pricing.model === 'FREEMIUM' && 'Start free, upgrade when you need more power'}
                    {tool.pricing.model === 'SUBSCRIPTION' && 'Simple monthly pricing, cancel anytime'}
                    {tool.pricing.model === 'FREE' && 'Completely free to use'}
                  </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-4 gap-4">
                  {tool.pricing.tiers && Object.entries(tool.pricing.tiers).map(([key, tier]: [string, any]) => (
                    <div 
                      key={key}
                      className={`border-4 border-black dark:border-white ${
                        key === 'pro' ? 'transform -translate-y-4 scale-105' : ''
                      }`}
                    >
                      {key === 'pro' && (
                        <div className="bg-red-500 text-white py-2 text-center font-black">
                          MOST POPULAR - BEST VALUE
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="font-black text-2xl mb-2">{tier.name}</h3>
                        <p className="text-sm mb-4 opacity-80">{tier.description}</p>
                        
                        <div className="mb-6">
                          <span className="text-5xl font-black">${tier.price}</span>
                          {tier.period && <span className="text-lg">/{tier.period}</span>}
                        </div>

                        <div className="mb-6 p-4 bg-lime-400 text-black font-bold">
                          <p className="text-sm">BEST FOR:</p>
                          <p>{tier.bestFor}</p>
                        </div>

                        <div className="mb-6">
                          <p className="font-black mb-3">INCLUDES:</p>
                          <ul className="space-y-2">
                            {tier.features.map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-start text-sm">
                                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 text-green-500" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {tier.limitations && tier.limitations.length > 0 && (
                          <div className="mb-6">
                            <p className="font-black mb-3 text-red-500">LIMITATIONS:</p>
                            <ul className="space-y-2">
                              {tier.limitations.map((limitation: string, idx: number) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <XCircle className="w-4 h-4 mr-2 flex-shrink-0 text-red-500" />
                                  <span>{limitation}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <a 
                          href={tool.urls?.pricing || tool.urls?.official}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block w-full py-3 text-center font-black ${
                            key === 'pro' 
                              ? 'bg-black dark:bg-white text-white dark:text-black' 
                              : 'border-2 border-black dark:border-white'
                          }`}
                        >
                          {tier.price === 0 ? 'START FREE' : `GET ${tier.name.toUpperCase()}`}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pros & Cons Tab */}
            {activeTab === 'pros-cons' && (
              <div className="space-y-12">
                <h2 className="text-4xl font-black mb-8 pb-2 border-b-4 border-black dark:border-white">
                  {tool.name} Pros & Cons (Honest Review)
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Pros */}
                  {tool.pros && (
                    <div>
                      <h3 className="text-2xl font-black mb-6 text-green-600">
                        ✅ PROS - What We Love
                      </h3>
                      <div className="space-y-4">
                        {tool.pros.map((pro: any, idx: number) => (
                          <div key={idx} className="border-4 border-green-500 p-6 bg-green-50 dark:bg-green-900/20">
                            <h4 className="font-black text-lg mb-2">{pro.title}</h4>
                            <p className="mb-3">{pro.description}</p>
                            <p className="text-sm bg-white dark:bg-black p-2 border-2 border-green-300">
                              <strong>Impact:</strong> {pro.impact}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Cons */}
                  {tool.cons && (
                    <div>
                      <h3 className="text-2xl font-black mb-6 text-red-600">
                        ❌ CONS - Areas for Improvement
                      </h3>
                      <div className="space-y-4">
                        {tool.cons.map((con: any, idx: number) => (
                          <div key={idx} className="border-4 border-red-500 p-6 bg-red-50 dark:bg-red-900/20">
                            <h4 className="font-black text-lg mb-2">{con.title}</h4>
                            <p className="mb-3">{con.description}</p>
                            {con.workaround && (
                              <p className="text-sm bg-white dark:bg-black p-2 border-2 border-red-300">
                                <strong>Workaround:</strong> {con.workaround}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Verdict */}
                {tool.verdict && (
                  <div className="bg-black dark:bg-white text-white dark:text-black p-8">
                    <h3 className="text-2xl font-black mb-4">🎯 FINAL VERDICT</h3>
                    <p className="text-lg mb-4">{tool.verdict.summary}</p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div>
                        <p className="font-black mb-1">OVERALL SCORE</p>
                        <p className="text-3xl font-black text-lime-400 dark:text-lime-600">
                          {tool.verdict.score}/10
                        </p>
                      </div>
                      <div>
                        <p className="font-black mb-1">BEST FOR</p>
                        <p className="text-sm">{tool.verdict.bestFor}</p>
                      </div>
                      <div>
                        <p className="font-black mb-1">AVOID IF</p>
                        <p className="text-sm">{tool.verdict.avoidIf}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && tool.reviews && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl font-black mb-4 pb-2 border-b-4 border-black dark:border-white">
                    {tool.name} User Reviews & Testimonials
                  </h2>
                  {tool.stats && (
                    <div className="flex items-center gap-6 mb-8">
                      <div>
                        <div className="text-5xl font-black">{tool.stats.rating}</div>
                        <div className="flex mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-6 h-6 ${i < Math.floor(tool.stats.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <div className="text-sm font-mono">{tool.stats.reviews} REVIEWS</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Featured Reviews */}
                {tool.reviews.featured && (
                  <div>
                    <h3 className="text-2xl font-black mb-6">FEATURED REVIEWS</h3>
                    <div className="space-y-6">
                      {tool.reviews.featured.map((review: any, idx: number) => (
                        <div key={idx} className="border-4 border-black dark:border-white p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-black text-lg">{review.author}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {review.role} at {review.company} • {review.date}
                              </p>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-5 h-5 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <h5 className="font-black mb-2">{review.title}</h5>
                          <p className="mb-4">{review.content}</p>
                          {review.pros && (
                            <div className="mb-2">
                              <span className="font-black text-green-600">Pros:</span> {review.pros}
                            </div>
                          )}
                          {review.cons && (
                            <div className="mb-4">
                              <span className="font-black text-red-600">Cons:</span> {review.cons}
                            </div>
                          )}
                          {review.verified && (
                            <div className="flex items-center text-sm text-green-600">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Verified Purchase
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* FAQs Tab */}
            {activeTab === 'faqs' && tool.faqs && (
              <div className="space-y-12">
                <h2 className="text-4xl font-black mb-8 pb-2 border-b-4 border-black dark:border-white">
                  Frequently Asked Questions about {tool.name}
                </h2>

                {tool.faqs.map((faq: any, idx: number) => (
                  <div key={idx} className="border-4 border-black dark:border-white">
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full p-6 text-left flex items-start justify-between hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                    >
                      <h3 className="font-black text-lg pr-4">{faq.question}</h3>
                      {expandedFAQs.includes(idx) ? (
                        <ChevronUp className="w-6 h-6 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFAQs.includes(idx) && (
                      <div className="p-6 pt-0">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                        {faq.example && (
                          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700">
                            <p className="font-mono text-sm mb-2">EXAMPLE:</p>
                            <code className="text-sm">{faq.example}</code>
                          </div>
                        )}
                        {faq.link && (
                          <a 
                            href={faq.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-red-500 hover:underline font-bold"
                          >
                            Learn more →
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {/* Quick Start Guide */}
                {tool.quickStart && (
                  <div className="bg-lime-400 text-black p-8 border-4 border-black">
                    <h3 className="text-2xl font-black mb-6">⚡ QUICK START GUIDE</h3>
                    <div className="bg-black text-white p-4 font-mono text-sm mb-6 relative">
                      <button
                        onClick={copyInstallCommand}
                        className="absolute top-2 right-2 p-2 hover:bg-white/20 transition-colors"
                      >
                        {copiedCode ? (
                          <CheckCircle className="w-5 h-5 text-lime-400" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                      <pre>{tool.quickStart.install || `npm install ${tool.slug}`}</pre>
                    </div>
                    <ol className="space-y-3">
                      {tool.quickStart.steps?.map((step: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="font-black text-2xl mr-4">{idx + 1}.</span>
                          <span className="text-lg">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t-4 border-black dark:border-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-xs">
            © 2025 AI.TOOLS // ALL SYSTEMS OPERATIONAL
          </p>
        </div>
      </footer>
    </div>
  )
}

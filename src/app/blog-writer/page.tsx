'use client'

import { useState } from 'react'
import { 
  FileText, TrendingUp, Link2, Mail, Target, Brain,
  BarChart3, Users, Zap, Award, CheckCircle, Copy,
  Download, Send, Sparkles, Database, Globe, Shield,
  AlertCircle, Loader2, Check, X
} from 'lucide-react'

interface BlogResult {
  article: {
    title: string
    metaDescription: string
    content: string
    wordCount: number
    readingTime: number
  }
  backlinkAssets: {
    quotableStats: string[]
    tweetableQuotes: string[]
    visualConcepts: string[]
    namedStrategies: string[]
  }
  outreachStrategy: {
    targetWebsites: string[]
    emailTemplates: string[]
    pitchAngles: string[]
    promotionTimeline: any
  }
  seoOptimization: {
    primaryKeyword: string
    secondaryKeywords: string[]
    internalLinks: string[]
    schemaMarkup: string
  }
  humanizationMetrics: {
    perplexityScore: number
    burstinessScore: number
    predictedHumanScore: number
    intensity: string
    techniques: string[]
  }
}

export default function BlogWriterPro() {
  const [topic, setTopic] = useState('')
  const [keywords, setKeywords] = useState('')
  const [contentType, setContentType] = useState('ultimateGuides')
  const [industry, setIndustry] = useState('')
  const [targetAudience, setTargetAudience] = useState('')
  const [wordCount, setWordCount] = useState(3000)
  const [targetDR, setTargetDR] = useState(50)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<BlogResult | null>(null)
  const [activeTab, setActiveTab] = useState('article')
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const contentTypes = [
    { id: 'originalResearch', name: 'Original Research', icon: '📊', desc: 'Data-driven studies' },
    { id: 'ultimateGuides', name: 'Ultimate Guide', icon: '📚', desc: 'Comprehensive resource' },
    { id: 'namedStrategies', name: 'Branded Method', icon: '🎯', desc: 'Unique framework' },
    { id: 'tools', name: 'Interactive Tool', icon: '🛠️', desc: 'Calculators & tools' },
    { id: 'controversialOpinions', name: 'Thought Leadership', icon: '💡', desc: 'Industry insights' }
  ]

  const generateBlog = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/blog-writer-pro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          targetKeywords: keywords.split(',').map(k => k.trim()),
          contentType,
          industry,
          targetAudience,
          desiredWordCount: wordCount,
          backlinkGoals: {
            desiredDR: targetDR
          }
        })
      })

      const data = await response.json()
      if (data.success) {
        setResult(data.data)
        setActiveTab('article')
      }
    } catch (error) {
      console.error('Error generating blog:', error)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string, itemId: string) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(itemId)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  const downloadContent = () => {
    if (!result) return
    
    const content = `# ${result.article.title}

${result.article.metaDescription}

---

${result.article.content}

---

## SEO Optimization

**Primary Keyword:** ${result.seoOptimization.primaryKeyword}
**Secondary Keywords:** ${result.seoOptimization.secondaryKeywords.join(', ')}

## Quotable Statistics
${result.backlinkAssets.quotableStats.map(stat => `- ${stat}`).join('\n')}

## Tweetable Quotes
${result.backlinkAssets.tweetableQuotes.map(quote => `- ${quote}`).join('\n')}

## Outreach Email Templates
${result.outreachStrategy.emailTemplates.join('\n\n---\n\n')}

## Humanization Metrics
- Predicted Human Score: ${result.humanizationMetrics.predictedHumanScore}%
- Perplexity Score: ${result.humanizationMetrics.perplexityScore}%
- Burstiness Score: ${result.humanizationMetrics.burstinessScore}%
`
    
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${topic.toLowerCase().replace(/\s+/g, '-')}-blog.md`
    a.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-sm mb-6">
            <Shield className="w-5 h-5" />
            95-100% HUMAN SCORE GUARANTEED
            <Sparkles className="w-5 h-5" />
          </div>
          <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Blog Writer Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create undetectable, link-worthy content that bypasses all AI detectors and earns high-quality backlinks
          </p>
        </div>

        {/* Input Form */}
        {!result ? (
          <div className="glass-card rounded-2xl p-8 border border-purple-500/30 backdrop-blur-xl bg-black/50">
            {/* Topic and Keywords */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-bold mb-3 text-cyan-400 uppercase tracking-wider">
                  Topic/Title Focus
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., AI Coding Tools Comparison"
                  className="w-full px-5 py-4 bg-black/60 border-2 border-cyan-500/30 rounded-xl focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-cyan-400 uppercase tracking-wider">
                  Target Keywords
                </label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="best ai tools, ai coding assistant, github copilot"
                  className="w-full px-5 py-4 bg-black/60 border-2 border-cyan-500/30 rounded-xl focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500 transition-all"
                />
              </div>
            </div>

            {/* Content Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-bold mb-3 text-cyan-400 uppercase tracking-wider">
                Content Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {contentTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setContentType(type.id)}
                    className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                      contentType === type.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-400 shadow-lg shadow-purple-500/50'
                        : 'bg-black/40 border-gray-700 hover:border-purple-400'
                    }`}
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="font-bold text-xs">{type.name}</div>
                    <div className="text-xs text-gray-400 mt-1">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Industry and Audience */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-bold mb-3 text-cyan-400 uppercase tracking-wider">
                  Industry
                </label>
                <input
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g., Software Development, SaaS, Tech"
                  className="w-full px-5 py-4 bg-black/60 border-2 border-cyan-500/30 rounded-xl focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-cyan-400 uppercase tracking-wider">
                  Target Audience
                </label>
                <input
                  type="text"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  placeholder="e.g., Developers, CTOs, Tech Leaders"
                  className="w-full px-5 py-4 bg-black/60 border-2 border-cyan-500/30 rounded-xl focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500 transition-all"
                />
              </div>
            </div>

            {/* Sliders */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <label className="block text-sm font-bold mb-3 text-cyan-400 uppercase tracking-wider">
                  Word Count: <span className="text-white">{wordCount.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="1000"
                  max="10000"
                  step="500"
                  value={wordCount}
                  onChange={(e) => setWordCount(parseInt(e.target.value))}
                  className="w-full accent-purple-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1,000</span>
                  <span>5,000</span>
                  <span>10,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-cyan-400 uppercase tracking-wider">
                  Target Domain Rating: <span className="text-white">DR {targetDR}+</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="90"
                  step="10"
                  value={targetDR}
                  onChange={(e) => setTargetDR(parseInt(e.target.value))}
                  className="w-full accent-purple-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>DR 20</span>
                  <span>DR 50</span>
                  <span>DR 90</span>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateBlog}
              disabled={loading || !topic || !keywords || !industry}
              className="w-full py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-black text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-purple-500/30"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Generating Human-Like Content...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  Generate Undetectable Blog Post
                  <Sparkles className="w-6 h-6" />
                </span>
              )}
            </button>
          </div>
        ) : (
          /* Results Section */
          <div>
            {/* Humanization Score Banner */}
            <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Shield className="w-12 h-12 text-green-400" />
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">AI Detection Score</div>
                    <div className="text-3xl font-black text-green-400">
                      {result.humanizationMetrics.predictedHumanScore}% Human
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{result.humanizationMetrics.perplexityScore}%</div>
                    <div className="text-xs text-gray-400">Perplexity</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">{result.humanizationMetrics.burstinessScore}%</div>
                    <div className="text-xs text-gray-400">Burstiness</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-400">{result.article.wordCount}</div>
                    <div className="text-xs text-gray-400">Words</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {['article', 'backlinks', 'outreach', 'seo'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-bold capitalize transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-black/40 text-gray-400 hover:text-white'
                  }`}
                >
                  {tab === 'article' && <FileText className="inline w-4 h-4 mr-2" />}
                  {tab === 'backlinks' && <Link2 className="inline w-4 h-4 mr-2" />}
                  {tab === 'outreach' && <Mail className="inline w-4 h-4 mr-2" />}
                  {tab === 'seo' && <Target className="inline w-4 h-4 mr-2" />}
                  {tab}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="glass-card rounded-2xl p-8 border border-purple-500/30 backdrop-blur-xl bg-black/50">
              {/* Article Tab */}
              {activeTab === 'article' && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-3xl font-black mb-4">{result.article.title}</h2>
                    <p className="text-gray-400 mb-4">{result.article.metaDescription}</p>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>{result.article.readingTime} min read</span>
                      <span>•</span>
                      <span>{result.article.wordCount} words</span>
                    </div>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <div className="whitespace-pre-wrap">{result.article.content}</div>
                  </div>
                </div>
              )}

              {/* Backlinks Tab */}
              {activeTab === 'backlinks' && (
                <div>
                  <h3 className="text-2xl font-black mb-6">Linkable Assets</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold mb-3 text-cyan-400">📊 Quotable Statistics</h4>
                      {result.backlinkAssets.quotableStats.map((stat, i) => (
                        <div key={i} className="p-4 bg-black/40 rounded-lg mb-2 flex justify-between items-center">
                          <span>{stat}</span>
                          <button
                            onClick={() => copyToClipboard(stat, `stat-${i}`)}
                            className="text-cyan-400 hover:text-cyan-300"
                          >
                            {copiedItem === `stat-${i}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-3 text-purple-400">💬 Tweetable Quotes</h4>
                      {result.backlinkAssets.tweetableQuotes.map((quote, i) => (
                        <div key={i} className="p-4 bg-black/40 rounded-lg mb-2 flex justify-between items-center">
                          <span>{quote}</span>
                          <button
                            onClick={() => copyToClipboard(quote, `quote-${i}`)}
                            className="text-purple-400 hover:text-purple-300"
                          >
                            {copiedItem === `quote-${i}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Outreach Tab */}
              {activeTab === 'outreach' && (
                <div>
                  <h3 className="text-2xl font-black mb-6">Outreach Strategy</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold mb-3 text-cyan-400">🎯 Target Websites</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {result.outreachStrategy.targetWebsites.map((site, i) => (
                          <div key={i} className="p-3 bg-black/40 rounded-lg text-center">
                            {site}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-3 text-purple-400">📧 Email Templates</h4>
                      {result.outreachStrategy.emailTemplates.map((email, i) => (
                        <div key={i} className="p-4 bg-black/40 rounded-lg mb-4">
                          <pre className="whitespace-pre-wrap text-sm">{email}</pre>
                          <button
                            onClick={() => copyToClipboard(email, `email-${i}`)}
                            className="mt-3 text-purple-400 hover:text-purple-300"
                          >
                            <Copy className="inline w-4 h-4 mr-2" />
                            Copy Template
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SEO Tab */}
              {activeTab === 'seo' && (
                <div>
                  <h3 className="text-2xl font-black mb-6">SEO Optimization</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold mb-3 text-cyan-400">🎯 Keywords</h4>
                      <div className="p-4 bg-black/40 rounded-lg">
                        <div className="mb-3">
                          <span className="text-sm text-gray-400">Primary:</span>
                          <span className="ml-2 px-3 py-1 bg-purple-600/30 rounded-full">
                            {result.seoOptimization.primaryKeyword}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Secondary:</span>
                          {result.seoOptimization.secondaryKeywords.map((kw, i) => (
                            <span key={i} className="ml-2 px-3 py-1 bg-cyan-600/30 rounded-full text-sm">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-3 text-purple-400">📋 Schema Markup</h4>
                      <div className="p-4 bg-black/40 rounded-lg">
                        <pre className="text-sm overflow-x-auto">{result.seoOptimization.schemaMarkup}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={downloadContent}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold hover:from-cyan-700 hover:to-blue-700 transition-all"
              >
                <Download className="inline w-5 h-5 mr-2" />
                Download Content
              </button>
              <button
                onClick={() => setResult(null)}
                className="px-8 py-4 bg-black/40 border border-gray-700 rounded-xl font-bold hover:border-gray-500 transition-all"
              >
                Generate New Article
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

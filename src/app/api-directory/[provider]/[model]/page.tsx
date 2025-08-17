'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { 
  Terminal, ArrowLeft, Copy, Check, ExternalLink, 
  Code, BookOpen, Zap, DollarSign, Clock, Globe,
  ChevronRight, Star, TrendingUp, AlertCircle,
  Package, Key, Cpu, FileText, CheckCircle
} from 'lucide-react'
import { getAPIDetailsBySlug, getAllAPIDetails } from '@/data/api-details-dynamic'

export default function APIDetailPage() {
  const params = useParams()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string>('python')
  const [activeTab, setActiveTab] = useState<'overview' | 'quickstart' | 'pricing' | 'examples'>('overview')
  
  // Build slug from params - match the URL structure
  const providerSlug = params.provider as string
  const modelSlug = params.model as string
  
  // First try exact slug match, then try with provider-model format
  let api = getAPIDetailsBySlug(`${providerSlug}-${modelSlug}`)
  
  // If not found, try to find by iterating through all models
  if (!api) {
    // Import the raw models data to create details on the fly
    const allModels = getAllAPIDetails()
    api = allModels.find(m => 
      m.provider.toLowerCase().replace(/\s+/g, '-') === providerSlug &&
      m.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === modelSlug
    )
  }
  
  if (!api) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
          <h1 className="text-4xl font-black mb-4">API NOT FOUND</h1>
          <p className="text-xl mb-8 opacity-70">The requested API model could not be found.</p>
          <Link href="/api-directory" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-black hover:bg-purple-600">
            <ArrowLeft className="w-4 h-4" />
            BACK TO DIRECTORY
          </Link>
        </div>
      </div>
    )
  }
  
  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }
  
  const installCode = api.installation?.find(i => i.language === selectedLanguage)
  
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Navigation */}
      <nav className="border-b-4 border-black dark:border-white sticky top-0 z-50 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center">
                <Terminal className="w-6 h-6 text-white dark:text-black" />
              </div>
              <div>
                <div className="text-2xl font-black">AI.TOOLS</div>
                <div className="text-xs font-mono text-purple-500">API.DIRECTORY</div>
              </div>
            </Link>
            
            <div className="flex items-center gap-4">
              <Link href="/api-directory" className="px-4 py-2 font-black text-sm hover:bg-black hover:text-white transition-colors">
                ← BACK
              </Link>
              {api.tryApiUrl && (
                <a 
                  href={api.tryApiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-500 text-white font-black text-sm hover:bg-purple-600 flex items-center gap-2"
                >
                  TRY NOW
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 border-b-4 border-black dark:border-white bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm font-mono mb-6 opacity-70">
              <Link href="/api-directory" className="hover:text-purple-500">APIs</Link>
              <ChevronRight className="w-4 h-4" />
              <span>{api.provider}</span>
              <ChevronRight className="w-4 h-4" />
              <span>{api.name}</span>
            </div>
            
            {/* Title and Status */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-2">
                  {api.name}
                </h1>
                <p className="text-xl font-bold opacity-80">by {api.provider}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-4 py-2 font-black text-sm border-4 border-black ${
                  api.status === 'available' ? 'bg-green-500 text-white' :
                  api.status === 'beta' ? 'bg-yellow-500 text-black' :
                  api.status === 'preview' ? 'bg-blue-500 text-white' :
                  'bg-gray-500 text-white'
                }`}>
                  {api.status.toUpperCase()}
                </span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xl mb-8 leading-relaxed">
              {api.description}
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {api.contextLength && (
                <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-purple-500" />
                    <span className="text-xs font-bold opacity-60">CONTEXT</span>
                  </div>
                  <div className="text-2xl font-black">
                    {api.contextLength >= 1000000 ? `${(api.contextLength / 1000000).toFixed(1)}M` :
                     api.contextLength >= 1000 ? `${(api.contextLength / 1000).toFixed(0)}K` :
                     api.contextLength}
                  </div>
                  <div className="text-xs opacity-60">tokens</div>
                </div>
              )}
              
              {api.pricing && (
                <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    <span className="text-xs font-bold opacity-60">INPUT PRICE</span>
                  </div>
                  <div className="text-2xl font-black">
                    {api.pricing.input === 0 ? 'FREE' : 
                     api.pricing.input ? `$${api.pricing.input}` : 'N/A'}
                  </div>
                  <div className="text-xs opacity-60">per 1K tokens</div>
                </div>
              )}
              
              {api.specifications?.find(s => s.label === 'Response Time') && (
                <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span className="text-xs font-bold opacity-60">RESPONSE</span>
                  </div>
                  <div className="text-2xl font-black">
                    {api.specifications.find(s => s.label === 'Response Time')?.value.split(' ')[0]}
                  </div>
                  <div className="text-xs opacity-60">typical</div>
                </div>
              )}
              
              {api.specifications?.find(s => s.label === 'Languages') && (
                <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-orange-500" />
                    <span className="text-xs font-bold opacity-60">LANGUAGES</span>
                  </div>
                  <div className="text-2xl font-black">
                    {api.specifications.find(s => s.label === 'Languages')?.value.split(' ')[0]}
                  </div>
                  <div className="text-xs opacity-60">supported</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-4">
          <div className="flex gap-0">
            {(['overview', 'quickstart', 'pricing', 'examples'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-black text-sm uppercase transition-all ${
                  activeTab === tab 
                    ? 'bg-black text-white dark:bg-white dark:text-black' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              {/* Features */}
              {api.features && api.features.length > 0 && (
                <div>
                  <h2 className="text-3xl font-black mb-6">KEY FEATURES</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {api.features.map((feature, idx) => (
                      <div key={idx} className="border-4 border-black dark:border-white p-6 hover:shadow-lg transition-shadow">
                        <div className="text-3xl mb-3">{feature.icon}</div>
                        <h3 className="font-black text-lg mb-2">{feature.title}</h3>
                        <p className="opacity-80">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Capabilities */}
              {api.capabilities && api.capabilities.length > 0 && (
                <div>
                  <h2 className="text-3xl font-black mb-6">CAPABILITIES</h2>
                  <div className="flex flex-wrap gap-3">
                    {api.capabilities.map((cap, idx) => (
                      <span key={idx} className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-bold">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Use Cases */}
              {api.useCases && api.useCases.length > 0 && (
                <div>
                  <h2 className="text-3xl font-black mb-6">USE CASES</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {api.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Specifications */}
              {api.specifications && api.specifications.length > 0 && (
                <div>
                  <h2 className="text-3xl font-black mb-6">SPECIFICATIONS</h2>
                  <div className="border-4 border-black dark:border-white">
                    {api.specifications.map((spec, idx) => (
                      <div key={idx} className={`flex justify-between p-4 ${idx > 0 ? 'border-t-4 border-black dark:border-white' : ''}`}>
                        <span className="font-bold">{spec.label}</span>
                        <span className="font-mono">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Benchmarks */}
              {api.benchmarks && api.benchmarks.length > 0 && (
                <div>
                  <h2 className="text-3xl font-black mb-6">PERFORMANCE BENCHMARKS</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {api.benchmarks.map((benchmark, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-6 border-4 border-black dark:border-white">
                        <div className="text-3xl font-black text-purple-600 dark:text-purple-400 mb-2">
                          {benchmark.score}
                        </div>
                        <div className="font-black text-lg mb-1">{benchmark.name}</div>
                        {benchmark.description && (
                          <div className="text-sm opacity-70">{benchmark.description}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Limitations */}
              {api.limitations && api.limitations.length > 0 && (
                <div>
                  <h2 className="text-3xl font-black mb-6">LIMITATIONS</h2>
                  <div className="bg-yellow-50 dark:bg-yellow-950 border-4 border-black dark:border-white p-6">
                    <ul className="space-y-3">
                      {api.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Quickstart Tab */}
          {activeTab === 'quickstart' && (
            <div className="space-y-12">
              {/* Installation */}
              <div>
                <h2 className="text-3xl font-black mb-6">INSTALLATION</h2>
                
                {/* Language Selector */}
                <div className="flex gap-2 mb-6">
                  {api.installation?.map((install) => (
                    <button
                      key={install.language}
                      onClick={() => setSelectedLanguage(install.language)}
                      className={`px-4 py-2 font-black text-sm border-4 border-black transition-all ${
                        selectedLanguage === install.language
                          ? 'bg-purple-500 text-white'
                          : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900'
                      }`}
                    >
                      {install.language.toUpperCase()}
                    </button>
                  ))}
                </div>
                
                {/* Installation Code */}
                {installCode && (
                  <div className="border-4 border-black dark:border-white bg-gray-50 dark:bg-gray-950">
                    <div className="flex items-center justify-between p-4 border-b-4 border-black dark:border-white">
                      <div className="flex items-center gap-3">
                        <Package className="w-5 h-5" />
                        <span className="font-black">
                          {installCode.package && `Install ${installCode.package}`}
                        </span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(installCode.code, 'install')}
                        className="flex items-center gap-2 px-3 py-1 bg-black text-white dark:bg-white dark:text-black font-bold text-sm hover:bg-purple-500"
                      >
                        {copiedCode === 'install' ? (
                          <>
                            <Check className="w-4 h-4" />
                            COPIED
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            COPY
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-6 overflow-x-auto">
                      <code className="text-sm font-mono">{installCode.code}</code>
                    </pre>
                  </div>
                )}
              </div>
              
              {/* API Key Setup */}
              {api.apiKeyRequired && (
                <div>
                  <h2 className="text-3xl font-black mb-6">API KEY SETUP</h2>
                  <div className="bg-blue-50 dark:bg-blue-950 border-4 border-black dark:border-white p-6">
                    <div className="flex items-start gap-4">
                      <Key className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <p className="mb-4">
                          You'll need an API key to use {api.name}. Get your key from the {api.provider} dashboard.
                        </p>
                        {api.apiKeyUrl && (
                          <a
                            href={api.apiKeyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-black hover:bg-blue-700"
                          >
                            GET API KEY
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Quick Start Examples */}
              {api.quickstart && api.quickstart.length > 0 && (
                <div>
                  <h2 className="text-3xl font-black mb-6">QUICK START EXAMPLES</h2>
                  <div className="space-y-8">
                    {api.quickstart.map((example, idx) => (
                      <div key={idx} className="border-4 border-black dark:border-white">
                        <div className="p-4 border-b-4 border-black dark:border-white bg-gray-100 dark:bg-gray-900">
                          <h3 className="font-black text-lg mb-2">{example.title}</h3>
                          {example.description && (
                            <p className="opacity-80">{example.description}</p>
                          )}
                        </div>
                        <div className="relative">
                          <button
                            onClick={() => copyToClipboard(example.code, `example-${idx}`)}
                            className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black text-white dark:bg-white dark:text-black font-bold text-sm hover:bg-purple-500 z-10"
                          >
                            {copiedCode === `example-${idx}` ? (
                              <>
                                <Check className="w-4 h-4" />
                                COPIED
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                COPY
                              </>
                            )}
                          </button>
                          <pre className="p-6 overflow-x-auto bg-gray-50 dark:bg-gray-950">
                            <code className="text-sm font-mono">{example.code}</code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Pricing Tab */}
          {activeTab === 'pricing' && (
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black mb-6">PRICING DETAILS</h2>
                
                {api.pricing ? (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="border-4 border-black dark:border-white p-8 text-center">
                      <div className="text-xs font-bold opacity-60 mb-2">INPUT TOKENS</div>
                      <div className="text-4xl font-black mb-2">
                        {api.pricing.input === 0 ? 'FREE' : 
                         api.pricing.input ? `$${api.pricing.input}` : 'N/A'}
                      </div>
                      <div className="text-sm opacity-70">per 1K tokens</div>
                    </div>
                    
                    <div className="border-4 border-black dark:border-white p-8 text-center">
                      <div className="text-xs font-bold opacity-60 mb-2">OUTPUT TOKENS</div>
                      <div className="text-4xl font-black mb-2">
                        {api.pricing.output === 0 ? 'FREE' : 
                         api.pricing.output ? `${api.pricing.output}` : 'N/A'}
                      </div>
                      <div className="text-sm opacity-70">per 1K tokens</div>
                    </div>
                  </div>
                ) : (
                  <p className="text-xl opacity-70">Pricing information not available.</p>
                )}
                
                {/* Cost Calculator */}
                <div className="mt-12">
                  <h3 className="text-2xl font-black mb-6">COST ESTIMATOR</h3>
                  <div className="bg-purple-50 dark:bg-purple-950 border-4 border-black dark:border-white p-6">
                    <p className="mb-4">Estimate your costs based on usage:</p>
                    <Link href="/tools/pricing-calculator" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-black hover:bg-purple-600">
                      OPEN CALCULATOR
                      <Zap className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Examples Tab */}
          {activeTab === 'examples' && (
            <div className="space-y-12">
              {api.examples && api.examples.length > 0 ? (
                <div>
                  <h2 className="text-3xl font-black mb-6">EXAMPLE INTERACTIONS</h2>
                  <div className="space-y-8">
                    {api.examples.map((example, idx) => (
                      <div key={idx} className="border-4 border-black dark:border-white">
                        <div className="p-4 border-b-4 border-black dark:border-white bg-gray-100 dark:bg-gray-900">
                          <h3 className="font-black text-lg mb-2">{example.title}</h3>
                          {example.description && (
                            <p className="opacity-80">{example.description}</p>
                          )}
                        </div>
                        
                        <div className="p-6 space-y-6">
                          <div>
                            <div className="font-black text-sm mb-2 text-blue-600">INPUT:</div>
                            <div className="bg-blue-50 dark:bg-blue-950 p-4 border-2 border-blue-200 dark:border-blue-800">
                              <code className="text-sm">{example.input}</code>
                            </div>
                          </div>
                          
                          <div>
                            <div className="font-black text-sm mb-2 text-green-600">OUTPUT:</div>
                            <div className="bg-green-50 dark:bg-green-950 p-4 border-2 border-green-200 dark:border-green-800">
                              <pre className="text-sm whitespace-pre-wrap font-mono">{example.output}</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Code className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p className="text-xl opacity-70">Examples coming soon...</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Action Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6">READY TO GET STARTED?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start building with {api.name} today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {api.docsUrl && (
              <a
                href={api.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-purple-500 font-black hover:scale-105 transition-transform inline-flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                VIEW FULL DOCS
              </a>
            )}
            {api.tryApiUrl && (
              <a
                href={api.tryApiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-black text-white font-black hover:scale-105 transition-transform inline-flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                TRY API NOW
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t-4 border-black dark:border-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-xs">
            © 2025 AI.TOOLS // API DIRECTORY
          </p>
        </div>
      </footer>
    </div>
  )
}

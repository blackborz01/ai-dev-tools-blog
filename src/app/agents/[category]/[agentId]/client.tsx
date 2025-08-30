'use client'

import React, { useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Copy, CheckCircle, Clock, Zap, Users, Download, Share2, BookOpen, Code2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAgentPrompt } from '@/lib/agentPrompts'
import { getCategoryById } from '@/lib/agentCategories'
import { agents } from '@/lib/agents'

export default function AgentPageClient({ params }: { params: { category: string; agentId: string } }) {
  const [copied, setCopied] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  
  const prompt = getAgentPrompt(params.agentId)
  const agent = agents.find(a => a.id === params.agentId)
  const category = getCategoryById(params.category)
  
  if (!prompt || !agent || !category) {
    notFound()
  }

  const handleDownload = () => {
    // Create a complete prompt document
    const promptDocument = {
      name: prompt.name,
      version: prompt.version,
      category: category.name,
      lastUpdated: prompt.lastUpdated,
      systemPrompt: prompt.systemPrompt || '',
      mainPrompt: prompt.prompt,
      variables: prompt.variables || [],
      tips: prompt.tips || [],
      examples: prompt.examples || [],
      metadata: {
        tokenSavings: agent.tokenSavings,
        timeSavings: agent.timeSavings,
        difficulty: agent.difficulty,
        useCases: agent.useCases,
        features: agent.features
      }
    }
    
    // Convert to formatted JSON
    const jsonContent = JSON.stringify(promptDocument, null, 2)
    
    // Create blob and download
    const blob = new Blob([jsonContent], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${params.agentId}-prompt-v${prompt.version}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    
    // Show feedback
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 3000)
  }

  const handleShare = async () => {
    const shareUrl = window.location.href
    const shareText = `Check out this AI agent: ${prompt.name} - ${agent.shortDesc}`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: prompt.name,
          text: shareText,
          url: shareUrl
        })
      } catch (err) {
        // Fallback to copy URL
        copyToClipboard(shareUrl)
      }
    } else {
      // Fallback to copy URL
      copyToClipboard(shareUrl)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${category.color.gradient} py-16`}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative">
          <Link 
            href={`/agents/${params.category}`}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {category.name}
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              {prompt.name}
            </h1>
            <p className="text-xl text-white/90 mb-6">
              {agent.description}
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">{agent.tokenSavings} tokens saved</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">{agent.timeSavings} saved</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">{agent.popularity}% popularity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-6">
                {/* Quick Info Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-lg mb-4">Quick Info</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-500">Version</span>
                      <p className="font-semibold">{prompt.version}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Last Updated</span>
                      <p className="font-semibold">{prompt.lastUpdated}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Difficulty</span>
                      <p className="font-semibold capitalize">{agent.difficulty}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Category</span>
                      <p className="font-semibold">{category.name}</p>
                    </div>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-lg mb-4">Use Cases</h3>
                  <ul className="space-y-2">
                    {agent.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-lg mb-4">Features</h3>
                  <ul className="space-y-2">
                    {agent.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* System Prompt */}
              {prompt.systemPrompt && (
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="font-bold text-lg">System Prompt</h3>
                    <CopyButton text={prompt.systemPrompt} />
                  </div>
                  <div className="p-6">
                    <pre className="whitespace-pre-wrap text-sm font-mono bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                      {prompt.systemPrompt}
                    </pre>
                  </div>
                </div>
              )}

              {/* Main Prompt */}
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <h3 className="font-bold text-lg">Main Prompt</h3>
                  <CopyButton text={prompt.prompt} />
                </div>
                <div className="p-6">
                  <pre className="whitespace-pre-wrap text-sm font-mono bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    {prompt.prompt}
                  </pre>
                </div>
              </div>

              {/* Variables */}
              {prompt.variables && prompt.variables.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-lg">Variables</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {prompt.variables.map((variable, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4">
                          <div className="flex items-center gap-2 mb-1">
                            <code className="font-mono font-bold text-blue-600 dark:text-blue-400">
                              {variable.name}
                            </code>
                            {variable.required && (
                              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Required</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {variable.description}
                          </p>
                          <p className="text-xs text-gray-500">
                            Example: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">{variable.example}</code>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tips */}
              {prompt.tips && prompt.tips.length > 0 && (
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Pro Tips
                  </h3>
                  <ul className="space-y-2">
                    {prompt.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Examples */}
              {prompt.examples && prompt.examples.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-lg">Examples</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    {prompt.examples.map((example, index) => (
                      <div key={index} className="space-y-3">
                        <div>
                          <span className="text-sm font-semibold text-gray-500">Input:</span>
                          <pre className="mt-1 whitespace-pre-wrap text-sm font-mono bg-gray-50 dark:bg-gray-900 p-3 rounded">
                            {example.input}
                          </pre>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-500">Output:</span>
                          <pre className="mt-1 whitespace-pre-wrap text-sm font-mono bg-gray-50 dark:bg-gray-900 p-3 rounded">
                            {example.output}
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95"
                >
                  {downloaded ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Downloaded!
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Download Prompt
                    </>
                  )}
                </button>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Link Copied!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-5 h-5" />
                      Share Agent
                    </>
                  )}
                </button>
                <Link 
                  href={`/agents/${params.category}`}
                  className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition-colors"
                >
                  <Code2 className="w-5 h-5" />
                  More {category.name} Agents
                </Link>
              </div>

              {/* Related Agents */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Related Agents</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {agents
                    .filter(a => a.category === params.category && a.id !== params.agentId)
                    .slice(0, 4)
                    .map(relatedAgent => (
                      <Link
                        key={relatedAgent.id}
                        href={`/agents/${params.category}/${relatedAgent.id}`}
                        className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                      >
                        <h4 className="font-semibold mb-2">{relatedAgent.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {relatedAgent.shortDesc}
                        </p>
                        <div className="mt-3 flex items-center gap-3 text-xs">
                          <span className="text-green-600 font-semibold">{relatedAgent.tokenSavings} saved</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-500">{relatedAgent.timeSavings}</span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

// Copy Button Component
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
    >
      {copied ? (
        <>
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span className="text-sm font-medium text-green-600 dark:text-green-400">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span className="text-sm font-medium">Copy</span>
        </>
      )}
    </button>
  )
}

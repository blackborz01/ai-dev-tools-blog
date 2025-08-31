'use client'

import { useState, useEffect } from 'react'
import { Search, CheckCircle, XCircle, AlertCircle, Loader2 } from 'lucide-react'

interface TestResult {
  name: string
  query: string
  found: boolean
  score?: number
  url?: string
}

export default function SearchTestPage() {
  const [isTestingTools, setIsTestingTools] = useState(false)
  const [isTestingMCPs, setIsTestingMCPs] = useState(false)
  const [toolResults, setToolResults] = useState<TestResult[]>([])
  const [mcpResults, setMcpResults] = useState<TestResult[]>([])
  const [stats, setStats] = useState<any>(null)
  
  // List of tools to test (50 tools)
  const TOOLS_TO_TEST = [
    'ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Midjourney',
    'DALL-E', 'Stable Diffusion', 'GitHub Copilot', 'Cursor', 'v0',
    'Jasper', 'Copy.ai', 'Writesonic', 'Grammarly', 'Notion AI',
    'Otter.ai', 'Descript', 'Runway', 'ElevenLabs', 'Murf',
    'Synthesia', 'HeyGen', 'Canva AI', 'Adobe Firefly', 'Figma AI',
    'Framer AI', 'Beautiful.ai', 'Tome', 'Gamma', 'Slides AI',
    'Zapier AI', 'Make AI', 'Bardeen', 'Browse AI', 'DataRobot',
    'H2O.ai', 'Hugging Face', 'Replicate', 'Cohere', 'AI21 Labs',
    'Anthropic API', 'OpenAI API', 'DeepL', 'Speechify', 'Loom AI',
    'Miro AI', 'Coda AI', 'Airtable AI', 'Monday AI', 'ClickUp AI'
  ]
  
  // List of MCPs to test (70 MCPs)
  const MCPS_TO_TEST = [
    'Filesystem MCP', 'Google Drive MCP', 'Dropbox MCP', 'PDF Filler MCP',
    'PostgreSQL MCP', 'MySQL MCP', 'MongoDB MCP', 'Redis MCP', 'SQLite MCP',
    'Elasticsearch MCP', 'GitHub MCP', 'GitLab MCP', 'Docker MCP',
    'Kubernetes MCP', 'Terraform MCP', 'Slack MCP', 'Discord MCP', 
    'Teams MCP', 'Gmail MCP', 'WhatsApp MCP', 'Notion MCP', 'Linear MCP',
    'Jira MCP', 'Asana MCP', 'OpenAI MCP', 'Anthropic MCP', 'Hugging Face MCP',
    'Pinecone MCP', 'Weaviate MCP', 'Chroma MCP', 'LangChain MCP',
    'Sequential Thinking MCP', 'Memory MCP', 'Puppeteer MCP', 'Playwright MCP',
    'Chrome Control MCP', 'Fetch MCP', 'Brave Search MCP', 'AWS MCP',
    'Azure MCP', 'GCP MCP', 'Cloudflare MCP', 'DigitalOcean MCP',
    'OneDrive MCP', 'S3 MCP', 'Azure Storage MCP', 'DynamoDB MCP',
    'Cassandra MCP', 'Neo4j MCP', 'Bitbucket MCP', 'Jenkins MCP',
    'CircleCI MCP', 'Vercel MCP', 'Netlify MCP', 'Outlook MCP',
    'Telegram MCP', 'Twitter MCP', 'Trello MCP', 'Monday MCP',
    'ClickUp MCP', 'Todoist MCP', 'Obsidian MCP', 'Roam MCP',
    'Replicate MCP', 'Selenium MCP', 'Google Analytics MCP',
    'Mixpanel MCP', 'Amplitude MCP', 'Segment MCP', 'Datadog MCP'
  ]
  
  useEffect(() => {
    fetchStats()
  }, [])
  
  const fetchStats = async () => {
    try {
      const response = await fetch('/api/search', { method: 'POST' })
      const data = await response.json()
      if (data.success) {
        setStats(data.stats)
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    }
  }
  
  const testSearch = async (query: string, type?: string) => {
    try {
      const params = new URLSearchParams({ q: query })
      if (type) params.append('type', type)
      
      const response = await fetch(`/api/search?${params}`)
      const data = await response.json()
      
      return {
        found: data.results && data.results.length > 0,
        results: data.results || [],
        total: data.total || 0
      }
    } catch (error) {
      console.error('Search test failed:', error)
      return { found: false, results: [], total: 0 }
    }
  }
  
  const testTools = async () => {
    setIsTestingTools(true)
    const results: TestResult[] = []
    
    for (const tool of TOOLS_TO_TEST) {
      const searchResult = await testSearch(tool, 'tool')
      results.push({
        name: tool,
        query: tool,
        found: searchResult.found,
        score: searchResult.results[0]?.score,
        url: searchResult.results[0]?.url
      })
      
      // Update results in real-time
      setToolResults([...results])
      
      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    
    setIsTestingTools(false)
  }
  
  const testMCPs = async () => {
    setIsTestingMCPs(true)
    const results: TestResult[] = []
    
    for (const mcp of MCPS_TO_TEST) {
      const searchResult = await testSearch(mcp, 'mcp')
      results.push({
        name: mcp,
        query: mcp,
        found: searchResult.found,
        score: searchResult.results[0]?.score,
        url: searchResult.results[0]?.url
      })
      
      // Update results in real-time
      setMcpResults([...results])
      
      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    
    setIsTestingMCPs(false)
  }
  
  const getSuccessRate = (results: TestResult[]) => {
    if (results.length === 0) return 0
    const found = results.filter(r => r.found).length
    return Math.round((found / results.length) * 100)
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black mb-8 border-b-4 border-black dark:border-white pb-4">
          Search Functionality Test
        </h1>
        
        {/* Stats Section */}
        {stats && (
          <div className="mb-8 p-6 border-4 border-black dark:border-white brutal-shadow bg-lime-400">
            <h2 className="text-2xl font-black mb-4">Search Index Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-white dark:bg-black border-2 border-black dark:border-white">
                <div className="text-3xl font-black">{stats.total}</div>
                <div className="text-sm font-mono">Total Items</div>
              </div>
              <div className="p-4 bg-white dark:bg-black border-2 border-black dark:border-white">
                <div className="text-3xl font-black">{stats.tools}</div>
                <div className="text-sm font-mono">AI Tools</div>
              </div>
              <div className="p-4 bg-white dark:bg-black border-2 border-black dark:border-white">
                <div className="text-3xl font-black">{stats.mcps}</div>
                <div className="text-sm font-mono">MCP Servers</div>
              </div>
              <div className="p-4 bg-white dark:bg-black border-2 border-black dark:border-white">
                <div className="text-3xl font-black">{stats.apis}</div>
                <div className="text-sm font-mono">APIs</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Test Controls */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={testTools}
            disabled={isTestingTools}
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-black border-4 border-black dark:border-white brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:brutal-shadow-sm transition-all disabled:opacity-50"
          >
            {isTestingTools ? (
              <>
                <Loader2 className="inline-block w-5 h-5 mr-2 animate-spin" />
                Testing Tools...
              </>
            ) : (
              <>
                <Search className="inline-block w-5 h-5 mr-2" />
                Test {TOOLS_TO_TEST.length} Tools
              </>
            )}
          </button>
          
          <button
            onClick={testMCPs}
            disabled={isTestingMCPs}
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-black border-4 border-black dark:border-white brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:brutal-shadow-sm transition-all disabled:opacity-50"
          >
            {isTestingMCPs ? (
              <>
                <Loader2 className="inline-block w-5 h-5 mr-2 animate-spin" />
                Testing MCPs...
              </>
            ) : (
              <>
                <Search className="inline-block w-5 h-5 mr-2" />
                Test {MCPS_TO_TEST.length} MCPs
              </>
            )}
          </button>
          
          <button
            onClick={() => {
              setToolResults([])
              setMcpResults([])
            }}
            className="px-6 py-3 bg-red-500 text-white font-black border-4 border-black dark:border-white brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:brutal-shadow-sm transition-all"
          >
            Clear Results
          </button>
        </div>
        
        {/* Tools Test Results */}
        {toolResults.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-black">AI Tools Test Results</h2>
              <div className="text-xl font-black">
                Success Rate: {getSuccessRate(toolResults)}%
                ({toolResults.filter(r => r.found).length}/{toolResults.length})
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {toolResults.map((result, index) => (
                <div
                  key={index}
                  className={`p-3 border-2 border-black dark:border-white flex items-center gap-2 ${
                    result.found ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
                  }`}
                >
                  {result.found ? (
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  )}
                  <span className="font-mono text-sm">{result.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* MCPs Test Results */}
        {mcpResults.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-black">MCP Servers Test Results</h2>
              <div className="text-xl font-black">
                Success Rate: {getSuccessRate(mcpResults)}%
                ({mcpResults.filter(r => r.found).length}/{mcpResults.length})
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {mcpResults.map((result, index) => (
                <div
                  key={index}
                  className={`p-3 border-2 border-black dark:border-white flex items-center gap-2 ${
                    result.found ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
                  }`}
                >
                  {result.found ? (
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  )}
                  <span className="font-mono text-sm">{result.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Instructions */}
        <div className="mt-8 p-6 border-4 border-black dark:border-white brutal-shadow bg-yellow-200">
          <h3 className="text-xl font-black mb-3 flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            Testing Instructions
          </h3>
          <ul className="space-y-2 font-mono text-sm">
            <li>• Click "Test Tools" to verify all 50 AI tools are searchable</li>
            <li>• Click "Test MCPs" to verify all 70 MCP servers are searchable</li>
            <li>• Green = Found in search results</li>
            <li>• Red = Not found (needs to be added to search index)</li>
            <li>• Success rate shows percentage of items that are searchable</li>
            <li>• Goal: 100% success rate for both tools and MCPs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

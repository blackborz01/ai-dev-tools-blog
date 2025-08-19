'use client'

import Link from 'next/link'
import { Zap, Clock, Copy, Check, Search, Filter, Code2, Terminal, Rocket, FileCode } from 'lucide-react'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Note: Metadata cannot be used in Client Components
// Will need to handle SEO differently for this page

const QuickSolutionCard = ({ solution }: { solution: any }) => {
  const [copied, setCopied] = useState(false)
  
  const copyCode = () => {
    navigator.clipboard.writeText(solution.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg">{solution.title}</h3>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded">
            {solution.category}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{solution.description}</p>
        <div className="flex items-center gap-2 mt-2">
          <Clock className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-500">{solution.time} to implement</span>
        </div>
      </div>
      
      <div className="relative">
        <pre className="p-4 bg-gray-50 dark:bg-gray-900 text-sm overflow-x-auto">
          <code className="language-javascript">{solution.code}</code>
        </pre>
        <button
          onClick={copyCode}
          className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded text-white transition-colors"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {solution.tags.map((tag: string) => (
              <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                {tag}
              </span>
            ))}
          </div>
          <Link href={`/fast-solutions/${solution.id}`} className="text-blue-600 hover:underline text-sm font-semibold">
            View Details →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function FastSolutionsPage() {
  
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const solutions = [
    {
      id: 1,
      title: 'Fix "MCP Server Not Connecting" Error',
      category: 'MCP',
      description: 'Quick fix for Claude Desktop MCP connection issues',
      time: '30 seconds',
      code: `// 1. Check claude_desktop_config.json location
// MacOS: ~/Library/Application Support/Claude/
// Windows: %APPDATA%\\Claude\\

// 2. Correct config format:
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/folder"]
    }
  }
}

// 3. Restart Claude Desktop`,
      tags: ['MCP', 'Claude', 'Config']
    },
    {
      id: 2,
      title: 'Optimize React Re-renders',
      category: 'React',
      description: 'Prevent unnecessary re-renders with memo and callbacks',
      time: '2 minutes',
      code: `import { memo, useCallback, useMemo } from 'react';

const ExpensiveComponent = memo(({ data, onUpdate }) => {
  // Memoize expensive calculations
  const processedData = useMemo(() => {
    return data.map(item => item.value * 2);
  }, [data]);
  
  // Memoize callbacks
  const handleClick = useCallback((id) => {
    onUpdate(id);
  }, [onUpdate]);
  
  return <div>{/* Component JSX */}</div>;
});`,
      tags: ['React', 'Performance', 'Optimization']
    },
    {
      id: 3,
      title: 'Next.js Dynamic Import for Performance',
      category: 'Next.js',
      description: 'Reduce bundle size with dynamic imports',
      time: '1 minute',
      code: `import dynamic from 'next/dynamic';

// Lazy load heavy component
const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  { 
    loading: () => <div>Loading...</div>,
    ssr: false // Disable SSR if not needed
  }
);

// Use in your component
export default function Page() {
  return <HeavyComponent />;
}`,
      tags: ['Next.js', 'Performance', 'Bundle']
    },
    {
      id: 4,
      title: 'TypeScript Generic Utility Function',
      category: 'TypeScript',
      description: 'Type-safe array groupBy function',
      time: '1 minute',
      code: `function groupBy<T, K extends keyof T>(
  array: T[],
  key: K
): Record<string, T[]> {
  return array.reduce((result, item) => {
    const group = String(item[key]);
    result[group] = result[group] ?? [];
    result[group].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

// Usage
const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' }
];
const grouped = groupBy(users, 'role');`,
      tags: ['TypeScript', 'Utility', 'Generic']
    },
    {
      id: 5,
      title: 'Tailwind Dark Mode Toggle',
      category: 'CSS',
      description: 'Simple dark mode implementation with Tailwind',
      time: '2 minutes',
      code: `// 1. tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ... rest of config
}

// 2. Toggle component
function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);
  
  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? '☀️' : '🌙'}
    </button>
  );
}`,
      tags: ['Tailwind', 'CSS', 'Dark Mode']
    },
    {
      id: 6,
      title: 'Async/Await Error Handling Pattern',
      category: 'JavaScript',
      description: 'Clean error handling for async operations',
      time: '30 seconds',
      code: `// Wrapper function for clean error handling
async function asyncWrapper(fn) {
  try {
    const result = await fn();
    return [result, null];
  } catch (error) {
    return [null, error];
  }
}

// Usage
const [data, error] = await asyncWrapper(
  () => fetch('/api/data').then(r => r.json())
);

if (error) {
  console.error('Failed to fetch:', error);
  return;
}

// Use data safely`,
      tags: ['JavaScript', 'Async', 'Error Handling']
    }
  ]
  
  const categories = [
    { name: 'All', value: 'all', count: solutions.length },
    { name: 'MCP', value: 'MCP', count: 1 },
    { name: 'React', value: 'React', count: 1 },
    { name: 'Next.js', value: 'Next.js', count: 1 },
    { name: 'TypeScript', value: 'TypeScript', count: 1 },
    { name: 'CSS', value: 'CSS', count: 1 },
    { name: 'JavaScript', value: 'JavaScript', count: 1 },
  ]
  
  const filteredSolutions = solutions.filter(solution => {
    const matchesSearch = solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400">INSTANT SOLUTIONS</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Fast Solutions & <span className="text-yellow-400">Quick Fixes</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Copy-paste code snippets and instant solutions for common development problems. 
              No fluff, just working code.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-900 border-y border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <span className="text-2xl font-bold text-green-400">247</span>
              <span className="text-gray-400 ml-2">Solutions</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-blue-400">12</span>
              <span className="text-gray-400 ml-2">Categories</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-purple-400">&lt; 2min</span>
              <span className="text-gray-400 ml-2">Avg. Implementation</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-orange-400">100%</span>
              <span className="text-gray-400 ml-2">Copy-Paste Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:w-64">
              <div className="sticky top-20">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`
                        w-full text-left px-4 py-2 rounded-lg transition-colors flex justify-between items-center
                        ${selectedCategory === category.value
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }
                      `}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {selectedCategory === 'all' ? 'All Solutions' : `${selectedCategory} Solutions`}
                </h2>
                <span className="text-gray-500">
                  {filteredSolutions.length} results
                </span>
              </div>
              
              <div className="grid gap-6">
                {filteredSolutions.map((solution) => (
                  <QuickSolutionCard key={solution.id} solution={solution} />
                ))}
              </div>
              
              {filteredSolutions.length === 0 && (
                <div className="text-center py-12">
                  <FileCode className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No solutions found matching your criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-xl text-white/90 mb-6">
            Request a solution or contribute your own to help the community
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Request Solution
            </button>
            <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
              Contribute Code
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

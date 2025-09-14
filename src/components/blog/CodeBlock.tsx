import React, { memo, useState } from 'react'
import { Code2, Copy, Check, Terminal } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
}

const CodeBlock = memo(({ code, language = 'typescript', title, showLineNumbers = false }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split('\n')

  return (
    <div className="bg-black/50 rounded-xl border border-blue-500/20 mb-8 overflow-hidden">
      {title && (
        <div className="bg-gray-900/50 px-4 py-2 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-bold text-blue-400">{title}</span>
          </div>
          <span className="text-xs text-gray-500">{language}</span>
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors z-10"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
        <div className="overflow-x-auto">
          <pre className="p-4 bg-gray-900">
            <code className="text-sm text-gray-300">
              {showLineNumbers ? (
                <div className="flex">
                  <div className="pr-4 text-gray-600 select-none">
                    {lines.map((_, i) => (
                      <div key={i}>{(i + 1).toString().padStart(3, ' ')}</div>
                    ))}
                  </div>
                  <div className="flex-1">
                    {lines.map((line, i) => (
                      <div key={i}>{line || ' '}</div>
                    ))}
                  </div>
                </div>
              ) : (
                code
              )}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
})

CodeBlock.displayName = 'CodeBlock'

export default CodeBlock
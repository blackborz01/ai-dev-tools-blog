'use client'

import { useState } from 'react'
import { Copy, CheckCircle } from 'lucide-react'

interface CopyButtonProps {
  text: string
  label?: string
}

export function CopyButton({ text, label = 'COPY' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-xs font-black flex items-center gap-1 hover:opacity-80 transition-opacity"
    >
      {copied ? (
        <>
          <CheckCircle className="w-3 h-3" />
          COPIED!
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          {label}
        </>
      )}
    </button>
  )
}

export function CopyCodeButton({ text, label = 'COPY' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 border-4 border-black dark:border-white font-black hover:bg-gray-100 dark:hover:bg-gray-900 flex items-center gap-2 transition-colors"
    >
      {copied ? (
        <>
          <CheckCircle className="w-5 h-5" />
          COPIED!
        </>
      ) : (
        <>
          <Copy className="w-5 h-5" />
          {label}
        </>
      )}
    </button>
  )
}

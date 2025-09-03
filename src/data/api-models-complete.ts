export interface APIModel {
  provider: string
  name: string
  description: string
  contextLength?: number
  pricing?: {
    input?: number
    output?: number
  }
  capabilities?: string[]
  releaseDate?: string
  status: 'available' | 'beta' | 'deprecated' | 'coming-soon' | 'preview' | 'experimental'
  apiEndpoint?: string
  modelId?: string
  maxOutput?: number
  trainingCutoff?: string
  docsUrl?: string
  tryApiUrl?: string
}

export const apiModels: APIModel[] = [
  // === OPENAI GPT-5 SERIES ===
  {
    provider: 'OpenAI',
    name: 'GPT-5',
    description: 'Most balanced model for reasoning, tool-calling, and structured edits. Handles full repositories with ease.',
    contextLength: 256000,
    pricing: { input: 0.008, output: 0.032 },
    capabilities: ['Advanced Reasoning', 'Tool Calling', 'Structured Edits', 'Full Repo Analysis', 'Code Generation'],
    releaseDate: '2025-01',
    status: 'coming-soon',
    modelId: 'gpt-5',
    maxOutput: 32768
  },
  {
    provider: 'OpenAI',
    name: 'GPT-5 Mini',
    description: 'Smaller GPT-5 variant with excellent performance-to-cost ratio for coding tasks',
    contextLength: 256000,
    pricing: { input: 0.0015, output: 0.006 },
    capabilities: ['Reasoning', 'Tool Calling', 'Code Generation', 'Fast Response'],
    releaseDate: '2025-01',
    status: 'coming-soon',
    modelId: 'gpt-5-mini',
    maxOutput: 16384
  },

  // === ANTHROPIC CLAUDE 4 SERIES ===
  {
    provider: 'Anthropic',
    name: 'Claude Opus 4.1',
    description: 'Very strong reasoning with long context. Perfect for "read my whole repo + fix X" tasks.',
    contextLength: 500000,
    pricing: { input: 0.012, output: 0.06 },
    capabilities: ['Advanced Reasoning', 'Long Context', 'Full Repo Analysis', 'Complex Refactoring', 'Architecture Design'],
    releaseDate: '2025-01',
    status: 'coming-soon',
    modelId: 'claude-opus-4.1',
    maxOutput: 16384
  },
  {
    provider: 'Anthropic',
    name: 'Claude Sonnet 4',
    description: 'Balanced Claude model with excellent reasoning and massive context window for repository-wide operations',
    contextLength: 400000,
    pricing: { input: 0.004, output: 0.02 },
    capabilities: ['Reasoning', 'Long Context', 'Code Analysis', 'Bug Fixing', 'Documentation'],
    releaseDate: '2025-01',
    status: 'coming-soon',
    modelId: 'claude-sonnet-4',
    maxOutput: 12288
  },

  // === DEEPSEEK REASONER ===
  {
    provider: 'DeepSeek',
    name: 'DeepSeek Reasoner (R1)',
    description: 'Cheap but smart step-by-step reasoning. Good for draft fixes and explaining complex errors.',
    contextLength: 128000,
    pricing: { input: 0.00055, output: 0.0022 },
    capabilities: ['Step-by-Step Reasoning', 'Error Analysis', 'Draft Generation', 'Cost-Effective', 'Debugging'],
    releaseDate: '2024-12',
    status: 'available',
    modelId: 'deepseek-r1',
    maxOutput: 8192
  },

  // === MISTRAL CODESTRAL ===
  {
    provider: 'Mistral',
    name: 'Codestral 2508',
    description: 'Specialized model tuned for coding tasks including completion and generation across 80+ languages',
    contextLength: 256000,
    pricing: { input: 0.002, output: 0.006 },
    capabilities: ['Code Completion', 'Code Generation', 'Fill-in-Middle', '80+ Languages', 'IDE Integration'],
    releaseDate: '2025-01',
    status: 'coming-soon',
    modelId: 'codestral-2508',
    maxOutput: 8192
  },

  // === XAI GROK ===
  {
    provider: 'xAI',
    name: 'Grok Code Fast 1',
    description: 'Optimized for fast, cheap coding with massive 256K context window',
    contextLength: 256000,
    pricing: { input: 0.0005, output: 0.0015 },
    capabilities: ['Fast Coding', 'Large Context', 'Cost-Effective', 'Real-time Processing', 'Code Optimization'],
    releaseDate: '2025-01',
    status: 'beta',
    modelId: 'grok-code-fast-1',
    maxOutput: 8192
  },

  // === GOOGLE GEMINI ===
  {
    provider: 'Google',
    name: 'Gemini 2.0 Flash',
    description: 'Strong for multimodal, code execution, and tool use with huge context window',
    contextLength: 1000000,
    pricing: { input: 0.0003, output: 0.0012 },
    capabilities: ['Multimodal', 'Code Execution', 'Tool Use', 'Massive Context', 'Real-time', 'Native Tools'],
    releaseDate: '2024-12',
    status: 'experimental',
    modelId: 'gemini-2.0-flash-exp',
    maxOutput: 8192
  },

  // === COHERE COMMAND ===
  {
    provider: 'Cohere',
    name: 'Command A (Reasoning)',
    description: 'Decent for structured answers in workflows, though weaker on raw code than GPT/Claude',
    contextLength: 200000,
    pricing: { input: 0.003, output: 0.012 },
    capabilities: ['Structured Reasoning', 'Workflow Integration', 'RAG', 'Tool Use', 'Documentation'],
    releaseDate: '2025-01',
    status: 'coming-soon',
    modelId: 'command-a-reasoning',
    maxOutput: 4096
  }
]
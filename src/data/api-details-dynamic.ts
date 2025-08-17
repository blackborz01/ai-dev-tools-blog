import { APIModel, apiModels } from './api-models-complete'

export interface APIDetails extends APIModel {
  slug: string
  shortDescription: string
  logo?: string
  
  // Enhanced details for individual pages
  features?: {
    title: string
    description: string
    icon?: string
  }[]
  
  installation?: {
    package?: string
    language: 'python' | 'javascript' | 'curl' | 'ruby' | 'go' | 'java' | 'csharp'
    code: string
  }[]
  
  quickstart?: {
    title: string
    code: string
    language: string
    description?: string
  }[]
  
  useCases?: string[]
  
  specifications?: {
    label: string
    value: string
  }[]
  
  benchmarks?: {
    name: string
    score: string
    description?: string
  }[]
  
  limitations?: string[]
  
  apiKeyRequired?: boolean
  apiKeyUrl?: string
  
  examples?: {
    title: string
    description: string
    input: string
    output: string
    language?: string
  }[]
}

// Helper function to generate slug
export function generateSlug(provider: string, name: string): string {
  return `${provider.toLowerCase().replace(/\s+/g, '-')}-${name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`
}

// Convert basic model to detailed format
function modelToDetails(model: APIModel): APIDetails {
  const slug = generateSlug(model.provider, model.name)
  
  // Generate provider-specific URLs
  const providerUrls: Record<string, { docs: string, apiKey: string }> = {
    'OpenAI': { 
      docs: 'https://platform.openai.com/docs', 
      apiKey: 'https://platform.openai.com/api-keys' 
    },
    'Anthropic': { 
      docs: 'https://docs.anthropic.com', 
      apiKey: 'https://console.anthropic.com/settings/keys' 
    },
    'Google': { 
      docs: 'https://ai.google.dev/docs', 
      apiKey: 'https://aistudio.google.com/app/apikey' 
    },
    'Mistral': { 
      docs: 'https://docs.mistral.ai', 
      apiKey: 'https://console.mistral.ai/api-keys' 
    },
    'Cohere': { 
      docs: 'https://docs.cohere.com', 
      apiKey: 'https://dashboard.cohere.com/api-keys' 
    },
    'AI21': { 
      docs: 'https://docs.ai21.com', 
      apiKey: 'https://studio.ai21.com/account/api-keys' 
    },
    'Stability AI': { 
      docs: 'https://platform.stability.ai/docs', 
      apiKey: 'https://platform.stability.ai/account/keys' 
    },
    'Perplexity': { 
      docs: 'https://docs.perplexity.ai', 
      apiKey: 'https://perplexity.ai/settings/api' 
    },
    'Meta': { 
      docs: 'https://llama.meta.com/docs', 
      apiKey: 'https://llama.meta.com/llama-downloads' 
    },
    'Together AI': { 
      docs: 'https://docs.together.ai', 
      apiKey: 'https://api.together.xyz/settings/api-keys' 
    },
    'Replicate': { 
      docs: 'https://replicate.com/docs', 
      apiKey: 'https://replicate.com/account/api-tokens' 
    },
    'Hugging Face': { 
      docs: 'https://huggingface.co/docs', 
      apiKey: 'https://huggingface.co/settings/tokens' 
    },
    'Amazon': { 
      docs: 'https://docs.aws.amazon.com/bedrock', 
      apiKey: 'https://console.aws.amazon.com/bedrock' 
    }
  }
  
  const providerInfo = providerUrls[model.provider] || { 
    docs: model.docsUrl || '#', 
    apiKey: '#' 
  }
  
  // Generate installation code based on provider
  const installation = [
    {
      language: 'python' as const,
      package: model.provider.toLowerCase().replace(/\s+/g, '-'),
      code: `# Install the ${model.provider} Python library
pip install ${model.provider.toLowerCase().replace(/\s+/g, '-')}

# Set up your API key
import os
os.environ["API_KEY"] = "your-api-key-here"

# Initialize the client
from ${model.provider.toLowerCase().replace(/\s+/g, '_')} import Client
client = Client()

# Make a request
response = client.generate(
    model="${model.modelId || model.name.toLowerCase().replace(/\s+/g, '-')}",
    prompt="Hello, how can you help me today?"
)
print(response)`
    },
    {
      language: 'javascript' as const,
      package: `@${model.provider.toLowerCase().replace(/\s+/g, '-')}/sdk`,
      code: `// Install the ${model.provider} SDK
npm install @${model.provider.toLowerCase().replace(/\s+/g, '-')}/sdk

// Set up the client
import { Client } from '@${model.provider.toLowerCase().replace(/\s+/g, '-')}/sdk';

const client = new Client({
  apiKey: process.env.API_KEY
});

// Make a request
const response = await client.generate({
  model: "${model.modelId || model.name.toLowerCase().replace(/\s+/g, '-')}",
  prompt: "Hello, how can you help me today?"
});

console.log(response);`
    },
    {
      language: 'curl' as const,
      code: `# Make a request using cURL
curl -X POST https://api.${model.provider.toLowerCase().replace(/\s+/g, '')}.com/v1/generate \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${model.modelId || model.name.toLowerCase().replace(/\s+/g, '-')}",
    "prompt": "Hello, how can you help me today?",
    "max_tokens": 100
  }'`
    }
  ]
  
  // Generate specifications from available data
  const specifications = []
  if (model.contextLength) {
    specifications.push({ 
      label: 'Context Window', 
      value: `${model.contextLength.toLocaleString()} tokens` 
    })
  }
  if (model.modelId) {
    specifications.push({ 
      label: 'Model ID', 
      value: model.modelId 
    })
  }
  if (model.releaseDate) {
    specifications.push({ 
      label: 'Release Date', 
      value: model.releaseDate 
    })
  }
  if (model.trainingCutoff) {
    specifications.push({ 
      label: 'Training Cutoff', 
      value: model.trainingCutoff 
    })
  }
  if (model.maxOutput) {
    specifications.push({ 
      label: 'Max Output', 
      value: `${model.maxOutput.toLocaleString()} tokens` 
    })
  }
  if (model.apiEndpoint) {
    specifications.push({ 
      label: 'API Endpoint', 
      value: model.apiEndpoint 
    })
  }
  
  // Generate use cases based on capabilities
  const useCases = model.capabilities ? model.capabilities.map(cap => {
    const capLower = cap.toLowerCase()
    if (capLower.includes('text')) return 'Text generation and completion'
    if (capLower.includes('code')) return 'Code generation and debugging'
    if (capLower.includes('vision') || capLower.includes('image')) return 'Image analysis and generation'
    if (capLower.includes('audio') || capLower.includes('speech')) return 'Audio processing and transcription'
    if (capLower.includes('video')) return 'Video analysis and generation'
    if (capLower.includes('translation')) return 'Language translation'
    if (capLower.includes('embedding')) return 'Text embeddings and similarity'
    if (capLower.includes('function')) return 'Function calling and tool use'
    if (capLower.includes('long context')) return 'Processing long documents'
    return `Applications requiring ${cap}`
  }) : []
  
  return {
    ...model,
    slug,
    shortDescription: model.description,
    docsUrl: model.docsUrl || providerInfo.docs,
    apiKeyRequired: true,
    apiKeyUrl: providerInfo.apiKey,
    installation,
    specifications,
    useCases
  }
}

// Pre-defined detailed entries for showcase models
const detailedModels: Record<string, Partial<APIDetails>> = {
  'openai-gpt-4-turbo': {
    features: [
      {
        title: 'Advanced Reasoning',
        description: 'Complex problem-solving and multi-step reasoning capabilities',
        icon: '🧠'
      },
      {
        title: 'Vision Understanding',
        description: 'Analyze and understand images with detailed descriptions',
        icon: '👁️'
      },
      {
        title: 'Function Calling',
        description: 'Seamlessly integrate with external tools and APIs',
        icon: '🔧'
      },
      {
        title: 'JSON Mode',
        description: 'Guaranteed valid JSON output for structured data',
        icon: '📊'
      }
    ],
    benchmarks: [
      { name: 'MMLU', score: '86.4%', description: 'Massive Multitask Language Understanding' },
      { name: 'HumanEval', score: '67.0%', description: 'Code generation benchmark' },
      { name: 'GSM8K', score: '92.0%', description: 'Grade school math problems' }
    ],
    limitations: [
      'Knowledge cutoff date of April 2023',
      'Cannot browse the internet or access real-time information',
      'May occasionally generate plausible-sounding but incorrect information',
      'Limited to 4,096 tokens for output generation'
    ]
  },
  'anthropic-claude-3-opus': {
    features: [
      {
        title: 'Superior Reasoning',
        description: 'Graduate-level reasoning and complex problem solving',
        icon: '🎓'
      },
      {
        title: 'Extended Context',
        description: '200K token context for entire books and codebases',
        icon: '📖'
      },
      {
        title: 'Vision Capabilities',
        description: 'Analyze charts, diagrams, and photographs',
        icon: '📸'
      },
      {
        title: 'Code Excellence',
        description: 'Expert-level code generation and debugging',
        icon: '💻'
      }
    ],
    benchmarks: [
      { name: 'MMLU', score: '86.8%', description: 'Undergraduate level knowledge' },
      { name: 'GPQA', score: '50.4%', description: 'Graduate-level reasoning' },
      { name: 'HumanEval', score: '84.9%', description: 'Code generation' }
    ],
    limitations: [
      'Knowledge cutoff of August 2023',
      'No internet access or real-time data',
      'Higher latency for complex requests',
      'Premium pricing for high-volume usage'
    ]
  }
}

// Get all API details as array
export function getAllAPIDetails(): APIDetails[] {
  return apiModels.map(model => {
    const details = modelToDetails(model)
    const slug = details.slug
    
    // Merge with pre-defined detailed data if available
    if (detailedModels[slug]) {
      return { ...details, ...detailedModels[slug] }
    }
    
    return details
  })
}

// Get API details by slug
export function getAPIDetailsBySlug(slug: string): APIDetails | undefined {
  const allDetails = getAllAPIDetails()
  return allDetails.find(d => d.slug === slug)
}

// Get API details by provider and name
export function getAPIDetails(provider: string, name: string): APIDetails | undefined {
  const slug = generateSlug(provider, name)
  return getAPIDetailsBySlug(slug)
}

export interface APIDetails {
  provider: string
  name: string
  slug: string
  description: string
  shortDescription: string
  logo?: string
  contextLength?: number
  pricing?: {
    input?: number
    output?: number
    unit?: string
    free?: boolean
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

// Extended API details with installation and examples
export const apiDetailsMap: Record<string, APIDetails> = {
  'openai-gpt-4-turbo': {
    provider: 'OpenAI',
    name: 'GPT-4 Turbo',
    slug: 'openai-gpt-4-turbo',
    modelId: 'gpt-4-turbo-preview',
    shortDescription: 'Most capable OpenAI model with 128K context and enhanced capabilities',
    description: 'GPT-4 Turbo is OpenAI\'s most advanced language model, offering superior reasoning, creativity, and reliability. With a 128K token context window and training data up to April 2023, it excels at complex tasks requiring nuanced understanding and generation.',
    contextLength: 128000,
    pricing: {
      input: 0.01,
      output: 0.03,
      unit: 'per 1K tokens'
    },
    capabilities: ['Text Generation', 'Code Generation', 'Vision', 'Function Calling', 'JSON Mode'],
    releaseDate: '2023-11',
    status: 'available',
    apiEndpoint: 'https://api.openai.com/v1/chat/completions',
    docsUrl: 'https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo',
    tryApiUrl: 'https://platform.openai.com/playground?model=gpt-4-turbo-preview',
    apiKeyRequired: true,
    apiKeyUrl: 'https://platform.openai.com/api-keys',
    
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
      },
      {
        title: 'Extended Context',
        description: '128K token context window for long documents',
        icon: '📚'
      }
    ],
    
    installation: [
      {
        language: 'python',
        package: 'openai',
        code: `# Install the OpenAI Python library
pip install openai

# Set up your API key
import openai
openai.api_key = "your-api-key-here"`
      },
      {
        language: 'javascript',
        package: 'openai',
        code: `// Install the OpenAI Node.js library
npm install openai

// Set up the client
import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});`
      },
      {
        language: 'curl',
        code: `# Make a request using cURL
curl https://api.openai.com/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENAI_API_KEY" \\
  -d '{
    "model": "gpt-4-turbo-preview",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`
      }
    ],
    
    quickstart: [
      {
        title: 'Basic Text Generation',
        language: 'python',
        code: `from openai import OpenAI

client = OpenAI()

response = client.chat.completions.create(
  model="gpt-4-turbo-preview",
  messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Explain quantum computing in simple terms"}
  ]
)

print(response.choices[0].message.content)`,
        description: 'Generate text responses using the chat completions endpoint'
      },
      {
        title: 'Vision Analysis',
        language: 'python',
        code: `response = client.chat.completions.create(
  model="gpt-4-vision-preview",
  messages=[
    {
      "role": "user",
      "content": [
        {"type": "text", "text": "What's in this image?"},
        {
          "type": "image_url",
          "image_url": {"url": "https://example.com/image.jpg"}
        }
      ]
    }
  ]
)`,
        description: 'Analyze images and answer questions about visual content'
      }
    ],
    
    useCases: [
      'Complex document analysis and summarization',
      'Code generation and debugging',
      'Creative writing and content creation',
      'Data analysis and interpretation',
      'Multi-modal applications with vision',
      'Customer support automation',
      'Educational tutoring and explanations'
    ],
    
    specifications: [
      { label: 'Context Window', value: '128,000 tokens' },
      { label: 'Training Data', value: 'Up to April 2023' },
      { label: 'Max Output', value: '4,096 tokens' },
      { label: 'Languages', value: '95+ languages' },
      { label: 'API Rate Limit', value: '10,000 TPM (Tier 1)' },
      { label: 'Response Time', value: '~2-5 seconds' }
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
      'Limited to 4,096 tokens for output generation',
      'Higher cost compared to GPT-3.5 models'
    ],
    
    examples: [
      {
        title: 'Code Generation',
        description: 'Generate a Python function to calculate fibonacci numbers',
        input: 'Write an efficient Python function to calculate the nth Fibonacci number using dynamic programming',
        output: `def fibonacci(n):
    """Calculate the nth Fibonacci number using dynamic programming."""
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    
    # Initialize array for memoization
    fib = [0] * (n + 1)
    fib[1] = 1
    
    # Build up the fibonacci sequence
    for i in range(2, n + 1):
        fib[i] = fib[i-1] + fib[i-2]
    
    return fib[n]`,
        language: 'python'
      }
    ]
  },
  
  'anthropic-claude-3-opus': {
    provider: 'Anthropic',
    name: 'Claude 3 Opus',
    slug: 'anthropic-claude-3-opus',
    modelId: 'claude-3-opus-20240229',
    shortDescription: 'Most powerful Claude model for complex tasks requiring deep analysis',
    description: 'Claude 3 Opus is Anthropic\'s most capable model, excelling at complex analysis, creative tasks, and detailed content generation. With a 200K token context window and exceptional reasoning abilities, it\'s ideal for tasks requiring nuanced understanding and sophisticated outputs.',
    contextLength: 200000,
    pricing: {
      input: 0.015,
      output: 0.075,
      unit: 'per 1K tokens'
    },
    capabilities: ['Text Generation', 'Code Generation', 'Vision', 'Document Analysis', 'Multi-turn Conversation'],
    releaseDate: '2024-03',
    status: 'available',
    apiEndpoint: 'https://api.anthropic.com/v1/messages',
    docsUrl: 'https://docs.anthropic.com/claude/docs/models-overview#claude-3-opus',
    tryApiUrl: 'https://console.anthropic.com/workbench',
    apiKeyRequired: true,
    apiKeyUrl: 'https://console.anthropic.com/settings/keys',
    
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
      },
      {
        title: 'Nuanced Writing',
        description: 'Sophisticated creative and technical writing',
        icon: '✍️'
      }
    ],
    
    installation: [
      {
        language: 'python',
        package: 'anthropic',
        code: `# Install the Anthropic Python library
pip install anthropic

# Set up your API key
import anthropic
client = anthropic.Anthropic(
    api_key="your-api-key-here"
)`
      },
      {
        language: 'javascript',
        package: '@anthropic-ai/sdk',
        code: `// Install the Anthropic SDK
npm install @anthropic-ai/sdk

// Set up the client
import Anthropic from '@anthropic-ai/sdk';
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});`
      },
      {
        language: 'curl',
        code: `# Make a request using cURL
curl https://api.anthropic.com/v1/messages \\
  -H "x-api-key: $ANTHROPIC_API_KEY" \\
  -H "anthropic-version: 2023-06-01" \\
  -H "content-type: application/json" \\
  -d '{
    "model": "claude-3-opus-20240229",
    "max_tokens": 1024,
    "messages": [{"role": "user", "content": "Hello, Claude!"}]
  }'`
      }
    ],
    
    quickstart: [
      {
        title: 'Basic Message',
        language: 'python',
        code: `import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-3-opus-20240229",
    max_tokens=1000,
    temperature=0,
    system="You are a helpful AI assistant.",
    messages=[
        {"role": "user", "content": "Explain the theory of relativity"}
    ]
)

print(message.content[0].text)`,
        description: 'Send a basic message to Claude 3 Opus'
      },
      {
        title: 'Vision Analysis',
        language: 'python',
        code: `import base64

# Load and encode image
with open("chart.png", "rb") as f:
    image_data = base64.b64encode(f.read()).decode('utf-8')

message = client.messages.create(
    model="claude-3-opus-20240229",
    max_tokens=1000,
    messages=[{
        "role": "user",
        "content": [
            {"type": "image", "source": {
                "type": "base64",
                "media_type": "image/png",
                "data": image_data
            }},
            {"type": "text", "text": "Analyze this chart and provide insights"}
        ]
    }]
)`,
        description: 'Analyze images with Claude\'s vision capabilities'
      }
    ],
    
    useCases: [
      'Research paper analysis and synthesis',
      'Complex code architecture and refactoring',
      'Legal document review and analysis',
      'Advanced creative writing and storytelling',
      'Scientific data interpretation',
      'Business strategy and analysis',
      'Educational content creation'
    ],
    
    specifications: [
      { label: 'Context Window', value: '200,000 tokens' },
      { label: 'Training Data', value: 'Up to August 2023' },
      { label: 'Max Output', value: '4,096 tokens' },
      { label: 'Languages', value: '10+ major languages' },
      { label: 'API Rate Limit', value: '5 requests/minute (default)' },
      { label: 'Response Time', value: '~3-8 seconds' }
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
      'Premium pricing for high-volume usage',
      'Limited to 4,096 tokens per response'
    ]
  },
  
  'google-gemini-pro': {
    provider: 'Google',
    name: 'Gemini Pro',
    slug: 'google-gemini-pro',
    modelId: 'gemini-pro',
    shortDescription: 'Google\'s versatile AI model with multimodal capabilities',
    description: 'Gemini Pro is Google\'s advanced multimodal AI model, capable of understanding and generating text, analyzing images, and processing various types of content. It offers a good balance of performance and cost-effectiveness.',
    contextLength: 32768,
    pricing: {
      input: 0.00025,
      output: 0.0005,
      unit: 'per 1K tokens',
      free: true
    },
    capabilities: ['Text Generation', 'Vision', 'Code Generation', 'Multi-turn Chat', 'Safety Filters'],
    releaseDate: '2023-12',
    status: 'available',
    apiEndpoint: 'https://generativelanguage.googleapis.com/v1/models/',
    docsUrl: 'https://ai.google.dev/gemini-api/docs',
    tryApiUrl: 'https://aistudio.google.com',
    apiKeyRequired: true,
    apiKeyUrl: 'https://aistudio.google.com/app/apikey',
    
    features: [
      {
        title: 'Multimodal AI',
        description: 'Process text, images, and code seamlessly',
        icon: '🌐'
      },
      {
        title: 'Free Tier',
        description: 'Generous free quota for development',
        icon: '🎁'
      },
      {
        title: 'Safety Features',
        description: 'Built-in content filtering and safety settings',
        icon: '🛡️'
      },
      {
        title: 'Fast Response',
        description: 'Low latency for real-time applications',
        icon: '⚡'
      }
    ],
    
    installation: [
      {
        language: 'python',
        package: 'google-generativeai',
        code: `# Install the Google AI Python SDK
pip install google-generativeai

# Configure your API key
import google.generativeai as genai
genai.configure(api_key="your-api-key-here")`
      },
      {
        language: 'javascript',
        package: '@google/generative-ai',
        code: `// Install the Google AI JavaScript SDK
npm install @google/generative-ai

// Initialize the client
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);`
      }
    ],
    
    quickstart: [
      {
        title: 'Generate Text',
        language: 'python',
        code: `import google.generativeai as genai

genai.configure(api_key="your-api-key")
model = genai.GenerativeModel('gemini-pro')

response = model.generate_content("Write a poem about AI")
print(response.text)`,
        description: 'Simple text generation with Gemini Pro'
      }
    ],
    
    useCases: [
      'Content generation and summarization',
      'Code assistance and debugging',
      'Image analysis and description',
      'Language translation',
      'Educational applications',
      'Creative writing'
    ],
    
    specifications: [
      { label: 'Context Window', value: '32,768 tokens' },
      { label: 'Free Quota', value: '60 requests/minute' },
      { label: 'Max Output', value: '2,048 tokens' },
      { label: 'Languages', value: '100+ languages' },
      { label: 'Response Time', value: '~1-3 seconds' }
    ],
    
    limitations: [
      'Smaller context window compared to GPT-4',
      'Limited availability in some regions',
      'Safety filters may be overly restrictive',
      'Free tier has rate limits'
    ]
  }
}

// Get all API details as array
export function getAllAPIDetails(): APIDetails[] {
  return Object.values(apiDetailsMap)
}

// Get API details by slug
export function getAPIDetailsBySlug(slug: string): APIDetails | undefined {
  return apiDetailsMap[slug]
}

// Get API details by provider and name
export function getAPIDetails(provider: string, name: string): APIDetails | undefined {
  const slug = generateSlug(provider, name)
  return apiDetailsMap[slug]
}

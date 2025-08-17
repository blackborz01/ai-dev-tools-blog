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
  status: 'available' | 'beta' | 'deprecated' | 'coming-soon' | 'preview'
  apiEndpoint?: string
  modelId?: string
}

export const apiModels: APIModel[] = [
  // OPENAI MODELS
  {
    provider: 'OpenAI',
    name: 'GPT-4o',
    description: 'Most capable multimodal model with vision, function calling, and JSON mode',
    contextLength: 128000,
    pricing: { input: 0.0025, output: 0.01 },
    capabilities: ['Text', 'Vision', 'Function Calling', 'JSON Mode', 'Tool Use'],
    releaseDate: '2024-05',
    status: 'available',
    modelId: 'gpt-4o-2024-08-06'
  },
  {
    provider: 'OpenAI',
    name: 'GPT-4o-mini',
    description: 'Affordable small model with vision capabilities',
    contextLength: 128000,
    pricing: { input: 0.00015, output: 0.0006 },
    capabilities: ['Text', 'Vision', 'Function Calling', 'JSON Mode'],
    releaseDate: '2024-07',
    status: 'available',
    modelId: 'gpt-4o-mini-2024-07-18'
  },
  {
    provider: 'OpenAI',
    name: 'GPT-4 Turbo',
    description: 'Previous generation high-capability model with 128k context',
    contextLength: 128000,
    pricing: { input: 0.01, output: 0.03 },
    capabilities: ['Text', 'Vision', 'Function Calling', 'JSON Mode'],
    releaseDate: '2024-04',
    status: 'available',
    modelId: 'gpt-4-turbo-2024-04-09'
  },
  {
    provider: 'OpenAI',
    name: 'o1-preview',
    description: 'Advanced reasoning model for complex tasks in science, coding, and math',
    contextLength: 128000,
    pricing: { input: 0.015, output: 0.06 },
    capabilities: ['Advanced Reasoning', 'Code', 'Math', 'Science', 'Chain of Thought'],
    releaseDate: '2024-09',
    status: 'preview',
    modelId: 'o1-preview-2024-09-12'
  },
  {
    provider: 'OpenAI',
    name: 'o1-mini',
    description: 'Faster reasoning model optimized for coding and STEM',
    contextLength: 128000,
    pricing: { input: 0.003, output: 0.012 },
    capabilities: ['Reasoning', 'Code', 'Math', 'STEM'],
    releaseDate: '2024-09',
    status: 'preview',
    modelId: 'o1-mini'
  },
  {
    provider: 'OpenAI',
    name: 'GPT-3.5 Turbo',
    description: 'Fast, efficient model for simple tasks',
    contextLength: 16385,
    pricing: { input: 0.0005, output: 0.0015 },
    capabilities: ['Text', 'Function Calling', 'JSON Mode'],
    releaseDate: '2023-06',
    status: 'available',
    modelId: 'gpt-3.5-turbo-0125'
  },
  {
    provider: 'OpenAI',
    name: 'DALL-E 3',
    description: 'Advanced text-to-image generation model',
    pricing: { input: 0.04, output: 0.08 }, // per image
    capabilities: ['Image Generation', 'Text Understanding', 'Style Control'],
    releaseDate: '2023-10',
    status: 'available',
    modelId: 'dall-e-3'
  },
  {
    provider: 'OpenAI',
    name: 'Whisper',
    description: 'Speech recognition and transcription model',
    pricing: { input: 0.006 }, // per minute
    capabilities: ['Speech to Text', 'Multiple Languages', 'Translation'],
    releaseDate: '2023-03',
    status: 'available',
    modelId: 'whisper-1'
  },
  {
    provider: 'OpenAI',
    name: 'TTS-1',
    description: 'Text-to-speech model with multiple voices',
    pricing: { input: 0.015 }, // per 1k characters
    capabilities: ['Text to Speech', 'Multiple Voices', 'Multiple Languages'],
    releaseDate: '2023-11',
    status: 'available',
    modelId: 'tts-1'
  },

  // ANTHROPIC MODELS
  {
    provider: 'Anthropic',
    name: 'Claude 3.5 Sonnet',
    description: 'Most intelligent Claude model with superior coding and analysis',
    contextLength: 200000,
    pricing: { input: 0.003, output: 0.015 },
    capabilities: ['Text', 'Vision', 'Code', 'Analysis', 'Tool Use', 'Computer Use'],
    releaseDate: '2024-10',
    status: 'available',
    modelId: 'claude-3-5-sonnet-20241022'
  },
  {
    provider: 'Anthropic',
    name: 'Claude 3.5 Haiku',
    description: 'Fast, affordable model with excellent performance',
    contextLength: 200000,
    pricing: { input: 0.001, output: 0.005 },
    capabilities: ['Text', 'Vision', 'Code', 'Fast Response'],
    releaseDate: '2024-11',
    status: 'available',
    modelId: 'claude-3-5-haiku-20241022'
  },
  {
    provider: 'Anthropic',
    name: 'Claude 3 Opus',
    description: 'Powerful model for complex analysis and creative tasks',
    contextLength: 200000,
    pricing: { input: 0.015, output: 0.075 },
    capabilities: ['Text', 'Vision', 'Creative Writing', 'Deep Analysis'],
    releaseDate: '2024-03',
    status: 'available',
    modelId: 'claude-3-opus-20240229'
  },
  {
    provider: 'Anthropic',
    name: 'Claude 3 Sonnet',
    description: 'Balanced model for general tasks',
    contextLength: 200000,
    pricing: { input: 0.003, output: 0.015 },
    capabilities: ['Text', 'Vision', 'Code', 'Analysis'],
    releaseDate: '2024-03',
    status: 'available',
    modelId: 'claude-3-sonnet-20240229'
  },
  {
    provider: 'Anthropic',
    name: 'Claude 3 Haiku',
    description: 'Fastest Claude model for simple tasks',
    contextLength: 200000,
    pricing: { input: 0.00025, output: 0.00125 },
    capabilities: ['Text', 'Code', 'Basic Analysis'],
    releaseDate: '2024-03',
    status: 'available',
    modelId: 'claude-3-haiku-20240307'
  },

  // GOOGLE MODELS
  {
    provider: 'Google',
    name: 'Gemini 2.0 Flash',
    description: 'Next-gen experimental model with native tool use and real-time capabilities',
    contextLength: 1000000,
    pricing: { input: 0.000075, output: 0.0003 },
    capabilities: ['Text', 'Vision', 'Audio', 'Native Tools', 'Real-time', 'Multimodal Live'],
    releaseDate: '2024-12',
    status: 'beta',
    modelId: 'gemini-2.0-flash-exp'
  },
  {
    provider: 'Google',
    name: 'Gemini 1.5 Pro',
    description: 'Multimodal model with industry-leading 2M token context',
    contextLength: 2000000,
    pricing: { input: 0.00125, output: 0.005 },
    capabilities: ['Text', 'Vision', 'Audio', 'Video', 'Code', 'PDF Processing'],
    releaseDate: '2024-12',
    status: 'available',
    modelId: 'gemini-1.5-pro-002'
  },
  {
    provider: 'Google',
    name: 'Gemini 1.5 Flash',
    description: 'Fast multimodal model with 1M context optimized for speed',
    contextLength: 1000000,
    pricing: { input: 0.000075, output: 0.0003 },
    capabilities: ['Text', 'Vision', 'Audio', 'Code', 'Fast Response'],
    releaseDate: '2024-12',
    status: 'available',
    modelId: 'gemini-1.5-flash-002'
  },
  {
    provider: 'Google',
    name: 'Gemini 1.5 Flash-8B',
    description: 'Smaller, faster variant of Flash for edge deployment',
    contextLength: 1000000,
    pricing: { input: 0.0000375, output: 0.00015 },
    capabilities: ['Text', 'Vision', 'Audio', 'Edge Computing'],
    releaseDate: '2024-10',
    status: 'available',
    modelId: 'gemini-1.5-flash-8b'
  },
  {
    provider: 'Google',
    name: 'Gemini Nano',
    description: 'On-device model for mobile and edge applications',
    contextLength: 32000,
    capabilities: ['Text', 'On-device', 'Low Latency', 'Privacy'],
    releaseDate: '2024-06',
    status: 'available',
    modelId: 'gemini-nano'
  },
  {
    provider: 'Google',
    name: 'PaLM 2',
    description: 'Previous generation large language model',
    contextLength: 32000,
    pricing: { input: 0.0005, output: 0.001 },
    capabilities: ['Text', 'Code', 'Translation', 'Reasoning'],
    releaseDate: '2023-05',
    status: 'available',
    modelId: 'text-bison-002'
  },
  {
    provider: 'Google',
    name: 'Imagen 3',
    description: 'Latest text-to-image generation model',
    pricing: { input: 0.02 }, // per image
    capabilities: ['Image Generation', 'Photorealistic', 'Style Control'],
    releaseDate: '2024-08',
    status: 'available',
    modelId: 'imagen-3'
  },

  // META MODELS
  {
    provider: 'Meta',
    name: 'Llama 3.3 70B',
    description: 'Latest open-source model with enhanced multilingual support',
    contextLength: 128000,
    capabilities: ['Text', 'Code', 'Multilingual', 'Open Source', 'Tool Use'],
    releaseDate: '2024-12',
    status: 'available',
    modelId: 'llama-3.3-70b-instruct'
  },
  {
    provider: 'Meta',
    name: 'Llama 3.2 Vision 90B',
    description: 'Multimodal open-source model with vision capabilities',
    contextLength: 128000,
    capabilities: ['Text', 'Vision', 'Open Source', 'Multimodal'],
    releaseDate: '2024-09',
    status: 'available',
    modelId: 'llama-3.2-90b-vision-instruct'
  },
  {
    provider: 'Meta',
    name: 'Llama 3.2 Vision 11B',
    description: 'Smaller multimodal model for efficient deployment',
    contextLength: 128000,
    capabilities: ['Text', 'Vision', 'Open Source', 'Edge Deployment'],
    releaseDate: '2024-09',
    status: 'available',
    modelId: 'llama-3.2-11b-vision-instruct'
  },
  {
    provider: 'Meta',
    name: 'Llama 3.2 3B',
    description: 'Lightweight model for mobile and edge devices',
    contextLength: 128000,
    capabilities: ['Text', 'On-device', 'Open Source', 'Low Resource'],
    releaseDate: '2024-09',
    status: 'available',
    modelId: 'llama-3.2-3b-instruct'
  },
  {
    provider: 'Meta',
    name: 'Llama 3.2 1B',
    description: 'Ultra-lightweight model for edge deployment',
    contextLength: 128000,
    capabilities: ['Text', 'On-device', 'Open Source', 'Mobile'],
    releaseDate: '2024-09',
    status: 'available',
    modelId: 'llama-3.2-1b-instruct'
  },
  {
    provider: 'Meta',
    name: 'Llama 3.1 405B',
    description: 'Flagship open-source model competing with GPT-4',
    contextLength: 128000,
    capabilities: ['Text', 'Code', 'Math', 'Reasoning', 'Open Source'],
    releaseDate: '2024-07',
    status: 'available',
    modelId: 'llama-3.1-405b-instruct'
  },
  {
    provider: 'Meta',
    name: 'CodeLlama 70B',
    description: 'Specialized model for code generation and understanding',
    contextLength: 100000,
    capabilities: ['Code', 'Code Completion', 'Debugging', 'Open Source'],
    releaseDate: '2024-01',
    status: 'available',
    modelId: 'codellama-70b-instruct'
  },

  // MISTRAL MODELS
  {
    provider: 'Mistral',
    name: 'Mistral Large 2',
    description: 'Flagship model with 128k context and function calling',
    contextLength: 128000,
    pricing: { input: 0.002, output: 0.006 },
    capabilities: ['Text', 'Code', 'Function Calling', 'JSON Mode', 'Multilingual'],
    releaseDate: '2024-11',
    status: 'available',
    modelId: 'mistral-large-2411'
  },
  {
    provider: 'Mistral',
    name: 'Ministral 8B',
    description: 'Edge-optimized model with low latency',
    contextLength: 128000,
    pricing: { input: 0.0001, output: 0.0001 },
    capabilities: ['Text', 'Code', 'Edge Computing', 'Low Latency'],
    releaseDate: '2024-10',
    status: 'available',
    modelId: 'ministral-8b-2410'
  },
  {
    provider: 'Mistral',
    name: 'Ministral 3B',
    description: 'Ultra-lightweight model for mobile deployment',
    contextLength: 128000,
    pricing: { input: 0.00004, output: 0.00004 },
    capabilities: ['Text', 'On-device', 'Mobile', 'Low Resource'],
    releaseDate: '2024-10',
    status: 'available',
    modelId: 'ministral-3b-2410'
  },
  {
    provider: 'Mistral',
    name: 'Codestral',
    description: 'Specialized 22B model for code generation with fill-in-the-middle',
    contextLength: 32000,
    pricing: { input: 0.0002, output: 0.0006 },
    capabilities: ['Code', 'Fill-in-the-middle', '80+ Languages', 'Code Completion'],
    releaseDate: '2024-05',
    status: 'available',
    modelId: 'codestral-2405'
  },
  {
    provider: 'Mistral',
    name: 'Codestral Mamba',
    description: 'Fast code model with Mamba architecture',
    contextLength: 256000,
    pricing: { input: 0.00025, output: 0.00025 },
    capabilities: ['Code', 'Long Context', 'Fast Inference', 'Mamba Architecture'],
    releaseDate: '2024-07',
    status: 'available',
    modelId: 'codestral-mamba-2407'
  },
  {
    provider: 'Mistral',
    name: 'Pixtral 12B',
    description: 'Multimodal model with vision capabilities',
    contextLength: 128000,
    pricing: { input: 0.00015, output: 0.00015 },
    capabilities: ['Text', 'Vision', 'Multimodal', 'Image Understanding'],
    releaseDate: '2024-09',
    status: 'available',
    modelId: 'pixtral-12b-2409'
  },
  {
    provider: 'Mistral',
    name: 'Mistral Embed',
    description: 'State-of-the-art semantic embedding model',
    contextLength: 8192,
    pricing: { input: 0.00001 },
    capabilities: ['Embeddings', 'Semantic Search', 'RAG', 'Classification'],
    releaseDate: '2024-01',
    status: 'available',
    modelId: 'mistral-embed'
  },

  // COHERE MODELS
  {
    provider: 'Cohere',
    name: 'Command R+',
    description: 'Advanced RAG model with tool use and 10 language support',
    contextLength: 128000,
    pricing: { input: 0.0025, output: 0.01 },
    capabilities: ['Text', 'RAG', 'Tool Use', '10 Languages', 'Citations'],
    releaseDate: '2024-08',
    status: 'available',
    modelId: 'command-r-plus-08-2024'
  },
  {
    provider: 'Cohere',
    name: 'Command R',
    description: 'Efficient RAG model for production deployments',
    contextLength: 128000,
    pricing: { input: 0.00015, output: 0.0006 },
    capabilities: ['Text', 'RAG', 'Tool Use', 'Citations'],
    releaseDate: '2024-08',
    status: 'available',
    modelId: 'command-r-08-2024'
  },
  {
    provider: 'Cohere',
    name: 'Command',
    description: 'General-purpose text generation model',
    contextLength: 4096,
    pricing: { input: 0.0005, output: 0.0015 },
    capabilities: ['Text', 'Summarization', 'Generation'],
    releaseDate: '2024-01',
    status: 'available',
    modelId: 'command-nightly'
  },
  {
    provider: 'Cohere',
    name: 'Embed v3',
    description: 'Multilingual embedding model with 1024 dimensions',
    contextLength: 512,
    pricing: { input: 0.00001 },
    capabilities: ['Embeddings', 'Multilingual', 'Semantic Search', 'Clustering'],
    releaseDate: '2024-03',
    status: 'available',
    modelId: 'embed-english-v3.0'
  },
  {
    provider: 'Cohere',
    name: 'Rerank 3',
    description: 'Advanced reranking model for search optimization',
    pricing: { input: 0.002 }, // per 1000 searches
    capabilities: ['Reranking', 'Search Optimization', 'Relevance Scoring'],
    releaseDate: '2024-04',
    status: 'available',
    modelId: 'rerank-english-v3.0'
  },

  // XAI MODELS
  {
    provider: 'xAI',
    name: 'Grok-2',
    description: 'Advanced reasoning model with real-time knowledge',
    contextLength: 128000,
    pricing: { input: 0.002, output: 0.01 },
    capabilities: ['Text', 'Real-time Data', 'Reasoning', 'Web Access'],
    releaseDate: '2024-12',
    status: 'beta',
    modelId: 'grok-2-1212'
  },
  {
    provider: 'xAI',
    name: 'Grok-2 Vision',
    description: 'Multimodal Grok with vision capabilities',
    contextLength: 128000,
    pricing: { input: 0.002, output: 0.01 },
    capabilities: ['Text', 'Vision', 'Real-time Data', 'Image Understanding'],
    releaseDate: '2024-12',
    status: 'beta',
    modelId: 'grok-2-vision-1212'
  },
  {
    provider: 'xAI',
    name: 'Grok-1.5',
    description: 'Previous generation Grok model',
    contextLength: 128000,
    pricing: { input: 0.001, output: 0.005 },
    capabilities: ['Text', 'Code', 'Reasoning'],
    releaseDate: '2024-03',
    status: 'available',
    modelId: 'grok-1.5'
  },

  // AMAZON MODELS
  {
    provider: 'Amazon',
    name: 'Nova Pro',
    description: 'Multimodal model for complex reasoning with video understanding',
    contextLength: 300000,
    pricing: { input: 0.0008, output: 0.0032 },
    capabilities: ['Text', 'Vision', 'Video', 'Code', 'Multimodal'],
    releaseDate: '2024-12',
    status: 'available',
    modelId: 'amazon-nova-pro-v1'
  },
  {
    provider: 'Amazon',
    name: 'Nova Lite',
    description: 'Fast, cost-effective model for simple tasks',
    contextLength: 300000,
    pricing: { input: 0.00006, output: 0.00024 },
    capabilities: ['Text', 'Vision', 'Fast Response'],
    releaseDate: '2024-12',
    status: 'available',
    modelId: 'amazon-nova-lite-v1'
  },
  {
    provider: 'Amazon',
    name: 'Nova Micro',
    description: 'Text-only model with ultra-low latency',
    contextLength: 128000,
    pricing: { input: 0.000035, output: 0.00014 },
    capabilities: ['Text', 'Low Latency', 'Edge Deployment'],
    releaseDate: '2024-12',
    status: 'available',
    modelId: 'amazon-nova-micro-v1'
  },
  {
    provider: 'Amazon',
    name: 'Nova Canvas',
    description: 'Image generation model with style control',
    pricing: { input: 0.008 }, // per image
    capabilities: ['Image Generation', 'Style Control', 'Editing'],
    releaseDate: '2024-12',
    status: 'available',
    modelId: 'amazon-nova-canvas-v1'
  },
  {
    provider: 'Amazon',
    name: 'Nova Reel',
    description: 'Video generation model for short-form content',
    pricing: { input: 0.05 }, // per video
    capabilities: ['Video Generation', 'Animation', 'Short-form Content'],
    releaseDate: '2024-12',
    status: 'coming-soon',
    modelId: 'amazon-nova-reel-v1'
  },

  // ADDITIONAL PROVIDERS AND MODELS
  
  // PERPLEXITY MODELS
  {
    provider: 'Perplexity',
    name: 'Sonar Large',
    description: 'Online LLM with real-time web search integration',
    contextLength: 127072,
    pricing: { input: 0.001, output: 0.001 },
    capabilities: ['Text', 'Web Search', 'Real-time Data', 'Citations'],
    releaseDate: '2024-11',
    status: 'available',
    modelId: 'llama-3.1-sonar-large-128k-online'
  },
  {
    provider: 'Perplexity',
    name: 'Sonar Small',
    description: 'Fast online model with web search',
    contextLength: 127072,
    pricing: { input: 0.0002, output: 0.0002 },
    capabilities: ['Text', 'Web Search', 'Fast Response'],
    releaseDate: '2024-11',
    status: 'available',
    modelId: 'llama-3.1-sonar-small-128k-online'
  },
  {
    provider: 'Perplexity',
    name: 'Sonar Huge',
    description: 'Most capable Perplexity model for complex research',
    contextLength: 200000,
    pricing: { input: 0.005, output: 0.005 },
    capabilities: ['Text', 'Web Search', 'Deep Research', 'Multi-step Reasoning'],
    releaseDate: '2024-12',
    status: 'available',
    modelId: 'llama-3.1-sonar-huge-128k-online'
  },

  // ALIBABA MODELS
  {
    provider: 'Alibaba',
    name: 'Qwen 2.5 72B',
    description: 'Multilingual model with strong coding capabilities',
    contextLength: 131072,
    capabilities: ['Text', 'Code', 'Multilingual', 'Math'],
    releaseDate: '2024-11',
    status: 'available',
    modelId: 'qwen2.5-72b-instruct'
  },
  {
    provider: 'Alibaba',
    name: 'Qwen-VL Plus',
    description: 'Vision-language model for multimodal understanding',
    contextLength: 32768,
    capabilities: ['Text', 'Vision', 'OCR', 'Document Understanding'],
    releaseDate: '2024-08',
    status: 'available',
    modelId: 'qwen-vl-plus'
  },
  {
    provider: 'Alibaba',
    name: 'Qwen-Audio',
    description: 'Audio understanding and generation model',
    contextLength: 32768,
    capabilities: ['Audio', 'Speech Recognition', 'Music Understanding'],
    releaseDate: '2024-09',
    status: 'available',
    modelId: 'qwen-audio-turbo'
  },

  // DEEPSEEK MODELS
  {
    provider: 'DeepSeek',
    name: 'DeepSeek Coder 33B',
    description: 'Specialized coding model with repository-level understanding',
    contextLength: 16384,
    capabilities: ['Code', 'Repository Analysis', 'Code Review', 'Debugging'],
    releaseDate: '2024-11',
    status: 'available',
    modelId: 'deepseek-coder-33b-instruct'
  },
  {
    provider: 'DeepSeek',
    name: 'DeepSeek Math',
    description: 'Mathematical reasoning and problem-solving model',
    contextLength: 32768,
    capabilities: ['Math', 'Theorem Proving', 'Scientific Computing'],
    releaseDate: '2024-10',
    status: 'available',
    modelId: 'deepseek-math-7b-instruct'
  },

  // STABILITY AI MODELS
  {
    provider: 'Stability AI',
    name: 'Stable Diffusion 3.5',
    description: 'Latest image generation model with enhanced quality',
    pricing: { input: 0.035 }, // per image
    capabilities: ['Image Generation', 'Style Transfer', 'Inpainting', 'Outpainting'],
    releaseDate: '2024-10',
    status: 'available',
    modelId: 'stable-diffusion-3.5-large'
  },
  {
    provider: 'Stability AI',
    name: 'Stable Video Diffusion',
    description: 'Video generation from images',
    pricing: { input: 0.2 }, // per video
    capabilities: ['Video Generation', 'Image-to-Video', 'Motion Control'],
    releaseDate: '2024-11',
    status: 'beta',
    modelId: 'stable-video-diffusion-img2vid-xt'
  },
  {
    provider: 'Stability AI',
    name: 'Stable Audio 2.0',
    description: 'Audio and music generation model',
    pricing: { input: 0.008 }, // per generation
    capabilities: ['Audio Generation', 'Music Creation', 'Sound Effects'],
    releaseDate: '2024-06',
    status: 'available',
    modelId: 'stable-audio-open-1.0'
  },

  // AI21 MODELS
  {
    provider: 'AI21',
    name: 'Jamba 1.5 Large',
    description: 'Hybrid SSM-Transformer model with 256K context',
    contextLength: 256000,
    pricing: { input: 0.002, output: 0.008 },
    capabilities: ['Text', 'Long Context', 'Structured Output', 'Tool Use'],
    releaseDate: '2024-09',
    status: 'available',
    modelId: 'jamba-1.5-large'
  },
  {
    provider: 'AI21',
    name: 'Jamba 1.5 Mini',
    description: 'Efficient model with Mamba architecture',
    contextLength: 256000,
    pricing: { input: 0.0002, output: 0.0004 },
    capabilities: ['Text', 'Fast Inference', 'Long Context'],
    releaseDate: '2024-09',
    status: 'available',
    modelId: 'jamba-1.5-mini'
  },

  // INFLECTION AI MODELS
  {
    provider: 'Inflection',
    name: 'Inflection 2.5',
    description: 'Empathetic conversational AI model',
    contextLength: 32768,
    capabilities: ['Text', 'Emotional Intelligence', 'Personal Assistant'],
    releaseDate: '2024-03',
    status: 'available',
    modelId: 'inflection-2.5'
  },

  // 01.AI MODELS
  {
    provider: '01.AI',
    name: 'Yi-Large',
    description: 'Multilingual model with strong reasoning',
    contextLength: 200000,
    capabilities: ['Text', 'Code', 'Multilingual', 'Long Context'],
    releaseDate: '2024-11',
    status: 'available',
    modelId: 'yi-large'
  },
  {
    provider: '01.AI',
    name: 'Yi-Vision',
    description: 'Multimodal model with vision capabilities',
    contextLength: 200000,
    capabilities: ['Text', 'Vision', 'Document Understanding', 'OCR'],
    releaseDate: '2024-12',
    status: 'available',
    modelId: 'yi-vision'
  },

  // TOGETHER AI HOSTED MODELS
  {
    provider: 'Together',
    name: 'Mixtral 8x22B',
    description: 'MoE model with 176B parameters',
    contextLength: 65536,
    pricing: { input: 0.0009, output: 0.0009 },
    capabilities: ['Text', 'Code', 'Instruction Following'],
    releaseDate: '2024-04',
    status: 'available',
    modelId: 'mixtral-8x22b-instruct'
  },
  {
    provider: 'Together',
    name: 'Nous Hermes 2 Yi 34B',
    description: 'Fine-tuned Yi model for assistance',
    contextLength: 32768,
    pricing: { input: 0.0008, output: 0.0008 },
    capabilities: ['Text', 'Creative Writing', 'Roleplay'],
    releaseDate: '2024-03',
    status: 'available',
    modelId: 'nous-hermes-2-yi-34b'
  },

  // REKA AI MODELS
  {
    provider: 'Reka',
    name: 'Reka Core',
    description: 'Multimodal model with video understanding',
    contextLength: 128000,
    pricing: { input: 0.003, output: 0.015 },
    capabilities: ['Text', 'Vision', 'Video', 'Audio'],
    releaseDate: '2024-11',
    status: 'available',
    modelId: 'reka-core'
  },
  {
    provider: 'Reka',
    name: 'Reka Flash',
    description: 'Fast multimodal model',
    contextLength: 128000,
    pricing: { input: 0.0008, output: 0.002 },
    capabilities: ['Text', 'Vision', 'Fast Response'],
    releaseDate: '2024-11',
    status: 'available',
    modelId: 'reka-flash'
  },
  {
    provider: 'Reka',
    name: 'Reka Edge',
    description: 'Edge-optimized multimodal model',
    contextLength: 32768,
    pricing: { input: 0.0004, output: 0.001 },
    capabilities: ['Text', 'Vision', 'Edge Deployment'],
    releaseDate: '2024-11',
    status: 'available',
    modelId: 'reka-edge'
  }
]

// Helper function to get provider statistics
export function getProviderStats() {
  const providers = new Map<string, number>()
  
  apiModels.forEach(model => {
    providers.set(model.provider, (providers.get(model.provider) || 0) + 1)
  })
  
  return Array.from(providers.entries()).map(([name, count]) => ({
    name,
    modelCount: count,
    icon: getProviderIcon(name)
  }))
}

// Helper function to get provider icon
function getProviderIcon(provider: string): string {
  const icons: Record<string, string> = {
    'OpenAI': '🤖',
    'Anthropic': '🧠',
    'Google': '🔍',
    'Meta': '📘',
    'Mistral': '🌊',
    'Cohere': '🔗',
    'xAI': '🚀',
    'Amazon': '📦',
    'Perplexity': '🔎',
    'Alibaba': '🐉',
    'DeepSeek': '🔬',
    'Stability AI': '🎨',
    'AI21': '💡',
    'Inflection': '💬',
    '01.AI': '🌟',
    'Together': '🤝',
    'Reka': '👁️'
  }
  return icons[provider] || '🔧'
}

// Get model statistics
export function getModelStats() {
  const totalModels = apiModels.length
  const providers = new Set(apiModels.map(m => m.provider)).size
  const availableModels = apiModels.filter(m => m.status === 'available').length
  const betaModels = apiModels.filter(m => m.status === 'beta' || m.status === 'preview').length
  
  return {
    totalModels,
    providers,
    availableModels,
    betaModels,
    lastUpdated: new Date().toISOString()
  }
}

// Group models by provider
export function getModelsByProvider() {
  const grouped: Record<string, APIModel[]> = {}
  
  apiModels.forEach(model => {
    if (!grouped[model.provider]) {
      grouped[model.provider] = []
    }
    grouped[model.provider].push(model)
  })
  
  return grouped
}

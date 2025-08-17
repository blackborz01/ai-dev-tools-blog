import { APIModel } from '@/data/api-models-complete'

export function getModelDocsUrl(model: APIModel): string {
  // If custom URL is provided, use it
  if (model.docsUrl) return model.docsUrl

  const { provider, modelId, name } = model
  
  // Provider-specific documentation URL patterns
  switch (provider) {
    case 'OpenAI':
      // OpenAI model-specific docs
      if (modelId?.includes('gpt-4')) {
        return 'https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo'
      } else if (modelId?.includes('gpt-3.5')) {
        return 'https://platform.openai.com/docs/models/gpt-3-5-turbo'
      } else if (modelId?.includes('dall-e')) {
        return 'https://platform.openai.com/docs/models/dall-e'
      } else if (modelId?.includes('whisper')) {
        return 'https://platform.openai.com/docs/models/whisper'
      } else if (modelId?.includes('tts')) {
        return 'https://platform.openai.com/docs/models/tts'
      } else if (modelId?.includes('embedding')) {
        return 'https://platform.openai.com/docs/models/embeddings'
      }
      return 'https://platform.openai.com/docs/models'

    case 'Anthropic':
      // Anthropic model-specific docs
      if (name.toLowerCase().includes('claude-3-opus')) {
        return 'https://docs.anthropic.com/en/docs/models/claude-3-opus'
      } else if (name.toLowerCase().includes('claude-3-sonnet')) {
        return 'https://docs.anthropic.com/en/docs/models/claude-3-sonnet'
      } else if (name.toLowerCase().includes('claude-3-haiku')) {
        return 'https://docs.anthropic.com/en/docs/models/claude-3-haiku'
      } else if (name.toLowerCase().includes('claude-2')) {
        return 'https://docs.anthropic.com/en/docs/models/claude-2'
      }
      return 'https://docs.anthropic.com/en/docs/models/overview'

    case 'Google':
      // Google model-specific docs
      if (name.includes('Gemini Pro')) {
        return 'https://ai.google.dev/gemini-api/docs/models/gemini#gemini-pro'
      } else if (name.includes('Gemini Ultra')) {
        return 'https://ai.google.dev/gemini-api/docs/models/gemini#gemini-ultra'
      } else if (name.includes('Gemini Flash')) {
        return 'https://ai.google.dev/gemini-api/docs/models/gemini#gemini-flash'
      } else if (name.includes('PaLM')) {
        return 'https://ai.google.dev/api/rest/v1/models'
      }
      return 'https://ai.google.dev/gemini-api/docs'

    case 'Mistral':
      // Mistral model-specific docs
      if (name.includes('Large')) {
        return 'https://docs.mistral.ai/platform/endpoints/#large'
      } else if (name.includes('Medium')) {
        return 'https://docs.mistral.ai/platform/endpoints/#medium'
      } else if (name.includes('Small')) {
        return 'https://docs.mistral.ai/platform/endpoints/#small'
      } else if (name.includes('Embed')) {
        return 'https://docs.mistral.ai/platform/endpoints/#embeddings'
      }
      return 'https://docs.mistral.ai/platform/endpoints'

    case 'Cohere':
      // Cohere model-specific docs
      if (name.includes('Command')) {
        return 'https://docs.cohere.com/reference/chat'
      } else if (name.includes('Embed')) {
        return 'https://docs.cohere.com/reference/embed'
      } else if (name.includes('Rerank')) {
        return 'https://docs.cohere.com/reference/rerank'
      }
      return 'https://docs.cohere.com/reference/about'

    case 'Meta':
      // Meta Llama model docs
      if (name.includes('Llama 3')) {
        return 'https://llama.meta.com/docs/model-cards-and-prompt-formats/llama3'
      } else if (name.includes('Llama 2')) {
        return 'https://llama.meta.com/docs/model-cards-and-prompt-formats/llama2'
      } else if (name.includes('Code Llama')) {
        return 'https://llama.meta.com/docs/model-cards-and-prompt-formats/code-llama'
      }
      return 'https://llama.meta.com/docs/get-started'

    case 'AI21':
      // AI21 model-specific docs
      if (name.includes('Jamba')) {
        return 'https://docs.ai21.com/reference/jamba-1-5-complete'
      } else if (name.includes('Jurassic')) {
        return 'https://docs.ai21.com/reference/j2-complete'
      }
      return 'https://docs.ai21.com/reference'

    case 'Stability AI':
      // Stability AI model docs
      if (name.includes('SDXL')) {
        return 'https://platform.stability.ai/docs/api-reference#tag/SDXL-1.0-and-SDXL-Turbo'
      } else if (name.includes('Stable Diffusion 3')) {
        return 'https://platform.stability.ai/docs/api-reference#tag/Stable-Diffusion-3'
      } else if (name.includes('Stable LM')) {
        return 'https://platform.stability.ai/docs/api-reference#tag/Language'
      }
      return 'https://platform.stability.ai/docs/api-reference'

    case 'Perplexity':
      // Perplexity model docs
      return 'https://docs.perplexity.ai/reference/post_chat_completions'

    case 'Together AI':
      // Together AI model docs
      if (modelId) {
        return `https://docs.together.ai/docs/inference-models#${modelId.replace(/\//g, '-')}`
      }
      return 'https://docs.together.ai/docs/inference-models'

    case 'Replicate':
      // Replicate model docs - uses model ID in URL
      if (modelId && modelId.includes('/')) {
        return `https://replicate.com/${modelId}`
      }
      return 'https://replicate.com/docs'

    case 'Hugging Face':
      // Hugging Face model docs
      if (modelId) {
        return `https://huggingface.co/${modelId}`
      }
      return 'https://huggingface.co/docs'

    case 'Amazon':
      // AWS Bedrock model docs
      if (name.includes('Titan')) {
        return 'https://docs.aws.amazon.com/bedrock/latest/userguide/titan-models.html'
      } else if (name.includes('Claude')) {
        return 'https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters-anthropic-claude.html'
      }
      return 'https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html'

    default:
      // Fallback to provider main docs
      return `https://www.google.com/search?q=${encodeURIComponent(provider + ' ' + name + ' API documentation')}`
  }
}

export function getModelApiUrl(model: APIModel): string {
  // If custom URL is provided, use it
  if (model.tryApiUrl) return model.tryApiUrl

  const { provider, modelId, name } = model

  // Provider-specific API playground URLs
  switch (provider) {
    case 'OpenAI':
      // OpenAI playground with model preselected
      if (modelId) {
        return `https://platform.openai.com/playground?model=${modelId}`
      }
      return 'https://platform.openai.com/playground'

    case 'Anthropic':
      // Anthropic console
      return 'https://console.anthropic.com/workbench'

    case 'Google':
      // Google AI Studio with model context
      if (name.includes('Gemini')) {
        return 'https://aistudio.google.com/app/prompts/new_chat'
      }
      return 'https://makersuite.google.com'

    case 'Mistral':
      // Mistral console
      return 'https://console.mistral.ai/playground'

    case 'Cohere':
      // Cohere playground with model type
      if (name.includes('Command')) {
        return 'https://dashboard.cohere.com/playground/chat'
      } else if (name.includes('Embed')) {
        return 'https://dashboard.cohere.com/playground/embed'
      }
      return 'https://dashboard.cohere.com/playground'

    case 'Meta':
      // Meta doesn't have a direct playground, link to getting started
      return 'https://llama.meta.com/llama-downloads'

    case 'AI21':
      // AI21 Studio with model
      if (name.includes('Jamba')) {
        return 'https://studio.ai21.com/v2/chat'
      }
      return 'https://studio.ai21.com'

    case 'Stability AI':
      // Stability platform
      if (name.includes('SDXL') || name.includes('Stable Diffusion')) {
        return 'https://platform.stability.ai/sandbox'
      }
      return 'https://platform.stability.ai'

    case 'Perplexity':
      // Perplexity Labs
      return 'https://labs.perplexity.ai'

    case 'Together AI':
      // Together playground with model
      if (modelId) {
        return `https://api.together.xyz/playground/chat?model=${encodeURIComponent(modelId)}`
      }
      return 'https://api.together.xyz/playground'

    case 'Replicate':
      // Replicate model page
      if (modelId && modelId.includes('/')) {
        return `https://replicate.com/${modelId}`
      }
      return 'https://replicate.com/explore'

    case 'Hugging Face':
      // Hugging Face spaces or model page
      if (modelId) {
        return `https://huggingface.co/spaces?search=${encodeURIComponent(modelId)}`
      }
      return 'https://huggingface.co/spaces'

    case 'Amazon':
      // AWS Bedrock console
      return 'https://console.aws.amazon.com/bedrock/home#/models'

    default:
      // Fallback to search for API playground
      return `https://www.google.com/search?q=${encodeURIComponent(provider + ' ' + name + ' API playground try online')}`
  }
}

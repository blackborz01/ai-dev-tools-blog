import { NextResponse } from 'next/server'
import { apiModels } from '@/data/api-models-complete'

export async function GET() {
  try {
    // Group models by provider
    const modelsByProvider: Record<string, typeof apiModels> = {}
    const providerCounts: Record<string, number> = {}
    
    apiModels.forEach(model => {
      if (!modelsByProvider[model.provider]) {
        modelsByProvider[model.provider] = []
        providerCounts[model.provider] = 0
      }
      modelsByProvider[model.provider].push(model)
      providerCounts[model.provider]++
    })
    
    // Calculate stats
    const availableModels = apiModels.filter(m => m.status === 'available').length
    const betaModels = apiModels.filter(m => m.status === 'beta').length
    
    // Create provider list with icons
    const providerIcons: Record<string, string> = {
      'OpenAI': '🤖',
      'Anthropic': '🧠',
      'Google': '🌐',
      'Meta': '📘',
      'Mistral': '⚡',
      'Cohere': '🔮',
      'AI21': '🚀',
      'Stability AI': '🎨',
      'Inflection': '💭',
      'Perplexity': '🔍',
      'Together': '🤝',
      'Replicate': '🔄',
      'Hugging Face': '🤗',
      'Amazon': '☁️',
      'Microsoft': '💼',
      'Alibaba': '🏮',
      'Baidu': '🐼',
      'NVIDIA': '🎮',
      'Databricks': '📊',
      'Voyage': '🧭',
      'Nomic': '📍',
      '01.ai': '1️⃣',
      'xAI': '✨',
      'DeepSeek': '🔬',
      'Zhipu': '🏯'
    }
    
    const providers = Object.entries(providerCounts).map(([name, count]) => ({
      name,
      modelCount: count,
      icon: providerIcons[name] || '🤖'
    })).sort((a, b) => b.modelCount - a.modelCount)
    
    const data = {
      models: modelsByProvider,
      stats: {
        totalModels: apiModels.length,
        providers: Object.keys(modelsByProvider).length,
        availableModels,
        betaModels,
        lastUpdated: new Date().toISOString()
      },
      providers
    }
    
    return NextResponse.json({ 
      success: true, 
      data 
    })
  } catch (error) {
    console.error('Error fetching models:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch models' },
      { status: 500 }
    )
  }
}

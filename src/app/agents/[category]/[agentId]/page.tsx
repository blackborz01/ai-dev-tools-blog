import { Metadata } from 'next'
import AgentPageClient from './client'
import { getAgentPrompt } from '@/lib/agentPrompts'
import { agents } from '@/lib/agents'

export async function generateMetadata({ params }: { params: { category: string; agentId: string } }): Promise<Metadata> {
  const prompt = getAgentPrompt(params.agentId)
  const agent = agents.find(a => a.id === params.agentId)
  
  if (!prompt || !agent) {
    return {
      title: 'Agent Not Found',
      description: 'The requested AI agent prompt could not be found.'
    }
  }

  return {
    title: `${prompt.name} - AI Agent Prompt | BoostDevSpeed`,
    description: agent.description,
    keywords: `${prompt.name}, AI agent, prompt engineering, ${params.category}, automation, AI tools`,
  }
}

export default function AgentPage({ params }: { params: { category: string; agentId: string } }) {
  return <AgentPageClient params={params} />
}

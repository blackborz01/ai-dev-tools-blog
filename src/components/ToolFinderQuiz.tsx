'use client'

import { useState } from 'react'
import { 
  Code2, Users, DollarSign, Zap, ChevronRight, 
  ChevronLeft, CheckCircle, Sparkles, Rocket,
  Brain, Terminal, Globe, Shield, Clock, Target
} from 'lucide-react'
import Link from 'next/link'

interface QuizQuestion {
  id: number
  question: string
  icon: any
  options: {
    value: string
    label: string
    icon?: any
    description?: string
  }[]
}

interface QuizAnswers {
  language?: string
  teamSize?: string
  budget?: string
  useCase?: string
  experience?: string
}

interface ToolRecommendation {
  name: string
  description: string
  match: number
  features: string[]
  price: string
  color: string
  link: string
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "What's your primary programming language?",
    icon: Code2,
    options: [
      { value: 'javascript', label: 'JavaScript/TypeScript', icon: '🟨' },
      { value: 'python', label: 'Python', icon: '🐍' },
      { value: 'java', label: 'Java/C#', icon: '☕' },
      { value: 'go', label: 'Go/Rust', icon: '🦀' },
      { value: 'multiple', label: 'Multiple Languages', icon: '🌐' },
    ]
  },
  {
    id: 2,
    question: "How large is your team?",
    icon: Users,
    options: [
      { value: 'solo', label: 'Just Me', icon: '👤', description: 'Independent developer' },
      { value: 'small', label: '2-5 People', icon: '👥', description: 'Small team' },
      { value: 'medium', label: '6-20 People', icon: '👥👥', description: 'Growing team' },
      { value: 'large', label: '20+ People', icon: '🏢', description: 'Enterprise team' },
    ]
  },
  {
    id: 3,
    question: "What's your monthly budget for AI tools?",
    icon: DollarSign,
    options: [
      { value: 'free', label: 'Free Only', icon: '🆓' },
      { value: 'low', label: '$1-20/month', icon: '💵' },
      { value: 'medium', label: '$20-100/month', icon: '💰' },
      { value: 'high', label: '$100+/month', icon: '💎' },
    ]
  },
  {
    id: 4,
    question: "What's your main use case?",
    icon: Target,
    options: [
      { value: 'completion', label: 'Code Completion', description: 'Autocomplete & suggestions' },
      { value: 'generation', label: 'Code Generation', description: 'Build from scratch' },
      { value: 'review', label: 'Code Review', description: 'Find bugs & improvements' },
      { value: 'documentation', label: 'Documentation', description: 'Write docs & comments' },
      { value: 'all', label: 'Everything', description: 'All of the above' },
    ]
  },
  {
    id: 5,
    question: "What's your AI coding experience level?",
    icon: Brain,
    options: [
      { value: 'beginner', label: 'Beginner', description: 'Just starting with AI tools' },
      { value: 'intermediate', label: 'Intermediate', description: 'Used a few AI tools' },
      { value: 'advanced', label: 'Advanced', description: 'Power user of AI tools' },
      { value: 'expert', label: 'Expert', description: 'AI workflow master' },
    ]
  }
]

// Tool recommendation logic
const getRecommendations = (answers: QuizAnswers): ToolRecommendation[] => {
  const tools: ToolRecommendation[] = []
  
  // Logic for recommendations based on answers
  if (answers.budget === 'free') {
    tools.push({
      name: 'Codeium',
      description: 'Powerful free AI code completion with no limits',
      match: 95,
      features: ['Unlimited completions', '70+ languages', 'IDE support', 'Fast inference'],
      price: 'FREE',
      color: 'bg-brutal-lime',
      link: '/tools/codeium'
    })
  }
  
  if (answers.teamSize === 'large' || answers.budget === 'high') {
    tools.push({
      name: 'GitHub Copilot Business',
      description: 'Enterprise-grade AI pair programming with team features',
      match: 92,
      features: ['Team management', 'Policy controls', 'Security filters', 'Priority support'],
      price: '$19/user/month',
      color: 'bg-trust-blue',
      link: '/tools/github-copilot'
    })
  }
  
  if (answers.language === 'javascript' || answers.useCase === 'generation') {
    tools.push({
      name: 'Cursor',
      description: 'AI-first IDE built for modern development',
      match: 88,
      features: ['Built-in AI chat', 'Codebase context', 'Multi-file edits', 'Smart refactoring'],
      price: '$20/month',
      color: 'bg-brutal-purple',
      link: '/tools/cursor'
    })
  }
  
  if (answers.experience === 'advanced' || answers.experience === 'expert') {
    tools.push({
      name: 'Claude + MCP',
      description: 'Advanced AI with Model Context Protocol for custom integrations',
      match: 85,
      features: ['Custom tools', 'Database access', 'API integration', 'Full control'],
      price: '$20/month',
      color: 'bg-brutal-orange',
      link: '/tools/claude-mcp'
    })
  }
  
  // Default recommendations if not enough matches
  if (tools.length < 3) {
    tools.push({
      name: 'Windsurf',
      description: 'Next-gen AI IDE with flow-based coding',
      match: 82,
      features: ['Flow editor', 'AI agents', 'Real-time collab', 'Cloud sync'],
      price: '$15/month',
      color: 'bg-brutal-cyan',
      link: '/tools/windsurf'
    })
  }
  
  // Sort by match percentage
  return tools.sort((a, b) => b.match - a.match).slice(0, 3)
}

export default function ToolFinderQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({})
  const [showResults, setShowResults] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleAnswer = (value: string) => {
    const questionKey = ['language', 'teamSize', 'budget', 'useCase', 'experience'][currentQuestion]
    setAnswers({ ...answers, [questionKey]: value })
    
    if (currentQuestion < questions.length - 1) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
        setIsAnimating(false)
      }, 300)
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResults) {
    const recommendations = getRecommendations(answers)
    
    return (
      <section id="tool-quiz" className="py-20 bg-white dark:bg-black border-t-4 border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Results Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-brutal-lime mb-6">
              <Sparkles className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              YOUR PERFECT<span className="text-brutal-lime">.</span>TOOLS
            </h2>
            <p className="text-lg opacity-70">Based on your answers, we recommend these AI tools</p>
          </div>

          {/* Recommendations */}
          <div className="space-y-6 mb-12">
            {recommendations.map((tool, index) => (
              <div
                key={tool.name}
                className={`border-4 border-black dark:border-white brutal-shadow-xl p-6 ${
                  index === 0 ? 'scale-105' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {index === 0 && (
                      <span className="px-3 py-1 bg-brutal-red text-white font-black text-xs">
                        BEST MATCH
                      </span>
                    )}
                    <h3 className="text-2xl font-black">{tool.name}</h3>
                  </div>
                  <div className={`px-4 py-2 ${tool.color} text-white font-black`}>
                    {tool.match}% MATCH
                  </div>
                </div>
                
                <p className="text-lg mb-4 opacity-80">{tool.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {tool.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-brutal-lime" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black">{tool.price}</span>
                  <Link href={tool.link}>
                    <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-black brutal-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                      LEARN MORE →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="px-8 py-4 border-4 border-black dark:border-white font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              RETAKE QUIZ
            </button>
            <Link href="/tools">
              <button className="px-8 py-4 bg-brutal-lime text-black font-black brutal-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                BROWSE ALL TOOLS →
              </button>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const question = questions[currentQuestion]

  return (
    <section id="tool-quiz" className="py-20 bg-white dark:bg-black border-t-4 border-b-4 border-black dark:border-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Quiz Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-black dark:bg-white mb-6">
            <Rocket className="w-10 h-10 text-white dark:text-black" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            FIND YOUR<span className="text-brutal-lime">.</span>TOOL
          </h2>
          <p className="text-lg opacity-70">Answer 5 quick questions to get personalized recommendations</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-mono opacity-60">QUESTION {currentQuestion + 1} OF {questions.length}</span>
            <span className="text-sm font-mono opacity-60">{Math.round(progress)}% COMPLETE</span>
          </div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 border-2 border-black dark:border-white">
            <div 
              className="h-full bg-brutal-lime transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}`}>
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brutal-lime mb-4">
              <question.icon className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-2">{question.question}</h3>
          </div>

          {/* Options */}
          <div className="grid gap-4 mb-8">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="p-6 border-4 border-black dark:border-white text-left brutal-shadow-lg hover:translate-x-[-4px] hover:translate-y-[-4px] hover:bg-brutal-lime hover:text-black transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{option.icon}</span>
                    <div>
                      <p className="font-black text-lg">{option.label}</p>
                      {option.description && (
                        <p className="text-sm opacity-60 mt-1">{option.description}</p>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className={`px-6 py-3 border-4 border-black dark:border-white font-black flex items-center space-x-2 ${
                currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
              } transition-colors`}
              disabled={currentQuestion === 0}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>BACK</span>
            </button>
            
            <button
              onClick={resetQuiz}
              className="px-6 py-3 text-sm font-black opacity-60 hover:opacity-100 transition-opacity"
            >
              START OVER
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { Sparkles } from 'lucide-react'

export default function QuizBanner() {
  return (
    <section className="bg-gradient-to-r from-brutal-lime via-brutal-yellow to-brutal-orange py-8 border-b-4 border-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-12 h-12 bg-black flex items-center justify-center animate-pulse">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-black">NOT SURE WHICH TOOL TO CHOOSE?</h3>
              <p className="text-sm font-mono text-black/80">Take our 30-second quiz and get personalized recommendations</p>
            </div>
          </div>
          <button
            onClick={() => document.getElementById('tool-quiz')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-black text-white font-black brutal-shadow-xl hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
          >
            START QUIZ NOW →
          </button>
        </div>
      </div>
    </section>
  )
}

'use client'

import { CheckCircle, Code2, Zap, Clock, Star } from 'lucide-react'

export default function SocialProof() {

  const stats = [
    { 
      value: '3,709+', 
      label: 'AI Tools Listed',
      icon: <Code2 className="w-5 h-5" />
    },
    { 
      value: '25', 
      label: 'MCP Servers',
      icon: <Zap className="w-5 h-5" />
    },
    { 
      value: 'Fresh', 
      label: 'Content Daily',
      icon: <Clock className="w-5 h-5" />
    },
    { 
      value: 'No BS', 
      label: 'Clear Info',
      icon: <Star className="w-5 h-5" />
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-black border-b-4 border-black dark:border-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            TRUSTED BY DEVELOPERS
          </h2>
          <p className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto">
            Comprehensive AI tools database. We research, organize, and update daily.
          </p>
        </div>

        {/* Stats Grid - Clean and Simple */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-in fade-in-50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black dark:bg-white text-white dark:text-black mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold opacity-60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Three Pillars - Professional and Clean */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
            <CheckCircle className="w-10 h-10 mx-auto mb-4" />
            <h3 className="font-black text-xl mb-3">Comprehensive Database</h3>
            <p className="text-sm opacity-70">
              We track and organize 3,700+ AI tools in one searchable place.
            </p>
          </div>
          <div className="text-center p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
            <Star className="w-10 h-10 mx-auto mb-4" />
            <h3 className="font-black text-xl mb-3">Unbiased Information</h3>
            <p className="text-sm opacity-70">
              We present clear facts and pricing. No fluff, just what you need to know.
            </p>
          </div>
          <div className="text-center p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
            <Clock className="w-10 h-10 mx-auto mb-4" />
            <h3 className="font-black text-xl mb-3">Constantly Updated</h3>
            <p className="text-sm opacity-70">
              New tools added daily. Prices and features kept current.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

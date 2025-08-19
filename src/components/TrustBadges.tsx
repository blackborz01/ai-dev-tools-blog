'use client'

import { Shield, Award, Users, TrendingUp } from 'lucide-react'

export default function TrustBadges() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        {/* Clean Feature Grid - No heading, just the badges */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center group">
            <div className="mb-4 relative inline-block">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-all" />
              <Shield className="w-12 h-12 mx-auto text-cyan-400 relative" />
            </div>
            <h4 className="font-black text-white mb-2">Secure</h4>
            <p className="text-sm text-gray-400">HTTPS only</p>
          </div>
          
          <div className="text-center group">
            <div className="mb-4 relative inline-block">
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-all" />
              <Award className="w-12 h-12 mx-auto text-purple-400 relative" />
            </div>
            <h4 className="font-black text-white mb-2">Transparent</h4>
            <p className="text-sm text-gray-400">Clear methodology</p>
          </div>
          
          <div className="text-center group">
            <div className="mb-4 relative inline-block">
              <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl group-hover:bg-pink-500/30 transition-all" />
              <Users className="w-12 h-12 mx-auto text-pink-400 relative" />
            </div>
            <h4 className="font-black text-white mb-2">Community</h4>
            <p className="text-sm text-gray-400">Developer focused</p>
          </div>
          
          <div className="text-center group">
            <div className="mb-4 relative inline-block">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/30 transition-all" />
              <TrendingUp className="w-12 h-12 mx-auto text-green-400 relative" />
            </div>
            <h4 className="font-black text-white mb-2">Growing</h4>
            <p className="text-sm text-gray-400">More tools weekly</p>
          </div>
        </div>

        {/* Disclosure */}
        <div className="max-w-3xl mx-auto">
          <div className="p-6 bg-black/50 border border-gray-800 rounded-lg backdrop-blur-sm">
            <p className="text-sm text-gray-400 text-center">
              <span className="text-cyan-400 font-semibold">Disclosure:</span> We use affiliate links and display ads to keep this site running. 
              This doesn't affect our reviews - we always provide honest pros and cons for every tool.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

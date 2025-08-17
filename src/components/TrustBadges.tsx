'use client'

import { Shield, Award, Users, TrendingUp } from 'lucide-react'

export default function TrustBadges() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Clean Feature Grid */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          <div>
            <Shield className="w-8 h-8 mx-auto mb-3 opacity-60" />
            <h4 className="font-black text-sm mb-1">Secure</h4>
            <p className="text-xs opacity-50">HTTPS only</p>
          </div>
          <div>
            <Award className="w-8 h-8 mx-auto mb-3 opacity-60" />
            <h4 className="font-black text-sm mb-1">Transparent</h4>
            <p className="text-xs opacity-50">Clear methodology</p>
          </div>
          <div>
            <Users className="w-8 h-8 mx-auto mb-3 opacity-60" />
            <h4 className="font-black text-sm mb-1">Community</h4>
            <p className="text-xs opacity-50">Developer focused</p>
          </div>
          <div>
            <TrendingUp className="w-8 h-8 mx-auto mb-3 opacity-60" />
            <h4 className="font-black text-sm mb-1">Growing</h4>
            <p className="text-xs opacity-50">More tools weekly</p>
          </div>
        </div>

        {/* Disclosure */}
        <div className="max-w-2xl mx-auto mt-12 p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-center">
          <p className="text-xs opacity-60">
            <strong>Disclosure:</strong> We use affiliate links and display ads to keep this site running. 
            This doesn't affect our reviews - we always provide honest pros and cons for every tool.
          </p>
        </div>
      </div>
    </section>
  )
}

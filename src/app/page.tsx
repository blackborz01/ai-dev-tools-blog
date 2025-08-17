'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, AlertCircle, ChevronRight, Activity, BarChart3, 
  Boxes, Clock, User, Terminal, Zap, Tag, Flame, Star, Sun, Moon
} from 'lucide-react'
import { articles } from '@/lib/articles'
import MobileNav from '@/components/MobileNav'
import SmartToolFinder from '@/components/SmartToolFinder'
import OriginalHero from '@/components/OriginalHero'
import SocialProof from '@/components/SocialProof'
import ToolComparisonWidget from '@/components/ToolComparisonWidget'
import LiveActivityFeed from '@/components/LiveActivityFeed'
import NewsletterPopup from '@/components/NewsletterPopup'
import TrustBadges from '@/components/TrustBadges'
import OptimizedImage from '@/components/OptimizedImage'
import StructuredData, { websiteSchema, organizationSchema } from '@/components/StructuredData'
import ThemeToggle from '@/components/ThemeToggle'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import FuturisticTrending from '@/components/FuturisticTrending'
import { DynamicStatsHero } from '@/components/DynamicStats'

// Inline DealsSection component to avoid export issues
const DealsSection = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const deals = [
    {
      id: 1,
      tool: 'Cursor Pro',
      icon: '🎯',
      discount: '50% OFF',
      originalPrice: 20,
      dealPrice: 10,
      code: 'AITOOLS50',
      expiresIn: '2 days',
      isHot: true,
      description: 'First 3 months at half price',
      link: '/tools'
    },
    {
      id: 2,
      tool: 'GitHub Copilot',
      icon: '🐙',
      discount: 'FREE TRIAL',
      originalPrice: 10,
      dealPrice: 0,
      expiresIn: '30 days',
      isHot: false,
      description: '60-day free trial for students',
      link: '/tools'
    },
    {
      id: 3,
      tool: 'Claude Pro',
      icon: '🧠',
      discount: '25% OFF',
      originalPrice: 20,
      dealPrice: 15,
      code: 'CLAUDE25',
      expiresIn: '5 days',
      isHot: true,
      description: 'Annual subscription discount',
      link: '/tools'
    }
  ]

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section className="py-16 bg-white dark:bg-black border-b-4 border-black dark:border-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-black text-xs mb-4 animate-pulse">
            <Flame className="w-4 h-4" />
            LIMITED TIME DEALS
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            EXCLUSIVE DISCOUNTS
          </h2>
          <p className="text-lg opacity-70 font-bold">
            Save big on premium AI tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className={`relative bg-white dark:bg-black border-4 border-black dark:border-white p-6 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all ${
                deal.isHot ? 'ring-4 ring-red-500 ring-offset-2' : ''
              }`}
            >
              {deal.isHot && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-red-500 text-white font-black text-xs">
                  🔥 HOT
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{deal.icon}</span>
                <h3 className="font-black text-lg">{deal.tool}</h3>
              </div>

              <div className="mb-4">
                <div className="text-3xl font-black text-red-500 mb-1">
                  {deal.discount}
                </div>
                <div className="flex items-center gap-3">
                  <span className="line-through opacity-50">${deal.originalPrice}</span>
                  <span className="text-2xl font-black">${deal.dealPrice}</span>
                </div>
              </div>

              <p className="text-sm mb-4 opacity-70">
                {deal.description}
              </p>

              {deal.code && (
                <button
                  onClick={() => copyCode(deal.code!)}
                  className="w-full px-4 py-2 mb-4 bg-gray-100 dark:bg-gray-900 border-2 border-dashed border-black dark:border-white font-mono font-black hover:bg-lime-400 hover:text-black transition-colors text-sm"
                >
                  {copiedCode === deal.code ? '✓ COPIED!' : deal.code}
                </button>
              )}

              <Link href={deal.link}>
                <button className="w-full py-3 bg-black text-white dark:bg-white dark:text-black font-black hover:bg-lime-400 hover:text-black transition-colors">
                  GET DEAL →
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Removed latestTools - now handled in FuturisticTrending component

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData data={websiteSchema} />
      <StructuredData data={organizationSchema} />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/20 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-purple-900/10 text-gray-800 dark:text-white transition-all duration-300">
        {/* Skip to main content for accessibility */}
        <button 
          onClick={() => document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' })}
          className="skip-to-content"
        >
          Skip to main content
        </button>
        
        {/* Newsletter Popup - Will appear after 15 seconds */}
        <NewsletterPopup />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section with Integrated Search */}
        <OriginalHero />

      {/* Dynamic Stats Display */}
      <section className="py-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <DynamicStatsHero />
        </div>
      </section>

      {/* Alert Banner - Modern News Ticker */}
      <section className="relative py-2 overflow-hidden bg-black border-b border-cyan-500/30">
        <div className="relative flex items-center h-10">
          {/* News Ticker Container */}
          <div className="w-full overflow-hidden">
            <div className="flex">
              <div className="animate-ticker flex items-center whitespace-nowrap">
                {/* First set of news items */}
                <span className="inline-flex items-center gap-2 px-8">
                  <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-xs rounded-full">🔥 BREAKING</span>
                  <span className="text-gray-300 text-sm">Claude 3.5 Sonnet now supports MCP servers - Build custom tools in minutes</span>
                </span>
                <span className="text-cyan-400 mx-4">•</span>
                
                <span className="inline-flex items-center gap-2 px-8">
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-xs rounded-full">⚡ HOT</span>
                  <span className="text-gray-300 text-sm">GitHub Copilot X launches with 10x faster completions</span>
                </span>
                <span className="text-purple-400 mx-4">•</span>
                
                <span className="inline-flex items-center gap-2 px-8">
                  <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-xs rounded-full">📈 TRENDING</span>
                  <span className="text-gray-300 text-sm">Cursor IDE reaches 500K developers - Fastest growing dev tool</span>
                </span>
                <span className="text-pink-400 mx-4">•</span>
                
                <span className="inline-flex items-center gap-2 px-8">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-xs rounded-full">🚀 NEW</span>
                  <span className="text-gray-300 text-sm">OpenAI releases GPT-5 API with 100K context window</span>
                </span>
                <span className="text-green-400 mx-4">•</span>
                
                <span className="inline-flex items-center gap-2 px-8">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xs rounded-full">🎯 UPDATE</span>
                  <span className="text-gray-300 text-sm">Microsoft adds AI agents to VS Code - Autonomous coding arrives</span>
                </span>
                <span className="text-yellow-400 mx-4">•</span>
                
                {/* Duplicate for seamless loop */}
                <span className="inline-flex items-center gap-2 px-8">
                  <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-xs rounded-full">🔥 BREAKING</span>
                  <span className="text-gray-300 text-sm">Claude 3.5 Sonnet now supports MCP servers - Build custom tools in minutes</span>
                </span>
                <span className="text-cyan-400 mx-4">•</span>
                
                <span className="inline-flex items-center gap-2 px-8">
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-xs rounded-full">⚡ HOT</span>
                  <span className="text-gray-300 text-sm">GitHub Copilot X launches with 10x faster completions</span>
                </span>
                <span className="text-purple-400 mx-4">•</span>
                
                <span className="inline-flex items-center gap-2 px-8">
                  <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-xs rounded-full">📈 TRENDING</span>
                  <span className="text-gray-300 text-sm">Cursor IDE reaches 500K developers - Fastest growing dev tool</span>
                </span>
                <span className="text-pink-400 mx-4">•</span>
                
                <span className="inline-flex items-center gap-2 px-8">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-xs rounded-full">🚀 NEW</span>
                  <span className="text-gray-300 text-sm">OpenAI releases GPT-5 API with 100K context window</span>
                </span>
                <span className="text-green-400 mx-4">•</span>
                
                <span className="inline-flex items-center gap-2 px-8">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xs rounded-full">🎯 UPDATE</span>
                  <span className="text-gray-300 text-sm">Microsoft adds AI agents to VS Code - Autonomous coding arrives</span>
                </span>
                <span className="text-yellow-400 mx-4">•</span>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes ticker {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-ticker {
            animation: ticker 40s linear infinite;
          }
        `}</style>
      </section>

      {/* Futuristic Trending Section */}
      <FuturisticTrending />

      {/* 1. Find Your Perfect AI Tool - Smart Tool Finder */}
      <div id="tool-finder">
        <SmartToolFinder />
      </div>

      {/* 3. LATEST•INTEL - High-Tech Redesigned Section */}
      <section className="py-20 relative bg-black text-white overflow-hidden border-t-4 border-b-4 border-cyan-500/50">
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
          <div className="absolute inset-0 animate-pulse-glow" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(255, 255, 0, 0.05) 0%, transparent 50%)'
          }} />
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10 animate-slide-grid" style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>



        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header with Live Status */}
          <div className="text-center mb-16 relative">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">INTELLIGENCE FEED ACTIVE</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-4 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">LATEST</span>
              <span className="text-white mx-2">•</span>
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">INTEL</span>
            </h2>
            
            <div className="flex items-center justify-center gap-6 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-green-400 animate-pulse" />
                <span className="text-gray-400">ARTICLES:</span>
                <span className="text-green-400">{articles.length} LIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400">AVG READ:</span>
                <span className="text-yellow-400">8.4 MIN</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">UPDATED:</span>
                <span className="text-purple-400">2 MIN AGO</span>
              </div>
            </div>
          </div>

          {/* Featured Article - Holographic Design */}
          {articles.filter(a => a.featured)[0] && (
            <div className="mb-20">
              <Link href={`/blog/${articles.filter(a => a.featured)[0].slug}`}>
                <article className="group cursor-pointer relative">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
                  
                  <div className="relative glass-card rounded-xl overflow-hidden neon-glow">
                    <div className="grid lg:grid-cols-2 gap-0 h-full">
                      {/* Image Side with Holographic Overlay */}
                      <div className="relative overflow-hidden bg-gray-900 aspect-[4/3] lg:aspect-auto">
                        <div className="absolute inset-0">
                          <OptimizedImage
                            src={articles.filter(a => a.featured)[0].thumbnail}
                            alt={articles.filter(a => a.featured)[0].imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          {/* Holographic Overlay */}
                          <div className="absolute inset-0 holographic opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                          
                          {/* Scan Line Effect */}
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line" />
                          </div>
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                          
                          {/* Badge */}
                          <div className="absolute top-4 left-4">
                            <div className="relative">
                              <div className="absolute inset-0 bg-red-500 blur-xl animate-pulse" />
                              <span className="relative px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-black text-sm inline-flex items-center gap-2">
                                <Flame className="w-4 h-4 animate-pulse" />
                                FEATURED INTEL
                              </span>
                            </div>
                          </div>
                          
                          {/* Category Badge */}
                          <div className="absolute bottom-4 left-4">
                            <span className="px-3 py-1 glass-card border border-cyan-400/50 text-cyan-400 font-mono text-xs">
                              {articles.filter(a => a.featured)[0].category.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Side with Tech Design */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute inset-0" style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 255, 255, 0.1) 10px, rgba(0, 255, 255, 0.1) 20px)'
                          }} />
                        </div>
                        
                        <div className="relative space-y-6">
                          {/* Title with Gradient */}
                          <h3 className="text-3xl lg:text-4xl font-black leading-tight bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
                            {articles.filter(a => a.featured)[0].title}
                          </h3>
                          
                          {/* Excerpt */}
                          <p className="text-lg text-gray-300 leading-relaxed">
                            {articles.filter(a => a.featured)[0].excerpt}
                          </p>
                          
                          {/* Metadata Bar */}
                          <div className="pt-6 border-t border-cyan-500/30">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-6">
                                {/* Author */}
                                <div className="flex items-center gap-3">
                                  <div className="relative">
                                    <div className="absolute inset-0 bg-cyan-400 blur-md" />
                                    <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                                      <User className="w-5 h-5 text-black" />
                                    </div>
                                  </div>
                                  <div>
                                    <p className="font-bold text-sm text-cyan-400">{articles.filter(a => a.featured)[0].author.name}</p>
                                    <p className="text-xs text-gray-500 font-mono">{articles.filter(a => a.featured)[0].author.role}</p>
                                  </div>
                                </div>
                                
                                {/* Read Time */}
                                <div className="flex items-center gap-2 text-xs font-mono">
                                  <Clock className="w-4 h-4 text-purple-400" />
                                  <span className="text-gray-400">{articles.filter(a => a.featured)[0].readTime} MIN</span>
                                </div>
                                
                                {/* Views Counter */}
                                <div className="flex items-center gap-2 text-xs font-mono">
                                  <Activity className="w-4 h-4 text-green-400 animate-pulse" />
                                  <span className="text-gray-400">2.4K READS</span>
                                </div>
                              </div>
                              
                              {/* Arrow */}
                              <div className="text-3xl text-cyan-400 group-hover:translate-x-3 transition-transform duration-300">
                                →
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          )}

          {/* Article Grid - Cyberpunk Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {articles.slice(1, 7).map((article, index) => (
              <Link href={`/blog/${article.slug}`} key={article.slug}>
                <article className="group cursor-pointer h-full relative">
                  {/* Card Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  
                  <div className="relative h-full flex flex-col glass-card rounded-lg overflow-hidden border border-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300">
                    {/* Thumbnail with Effects */}
                    <div className="relative overflow-hidden bg-gray-900">
                      <div className="aspect-[16/10] relative">
                        <OptimizedImage
                          src={article.thumbnail}
                          alt={article.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Overlay Effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className={`px-3 py-1 font-mono text-xs backdrop-blur-md border ${
                            index % 3 === 0 ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400' :
                            index % 3 === 1 ? 'bg-purple-500/20 border-purple-400 text-purple-400' :
                            'bg-pink-500/20 border-pink-400 text-pink-400'
                          }`}>
                            {article.category.toUpperCase()}
                          </span>
                        </div>
                        
                        {/* Hot Badge */}
                        {index === 0 && (
                          <div className="absolute top-3 right-3">
                            <div className="relative">
                              <div className="absolute inset-0 bg-red-500 blur-md animate-pulse" />
                              <span className="relative px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white font-black text-xs inline-flex items-center gap-1">
                                <Flame className="w-3 h-3" />
                                HOT
                              </span>
                            </div>
                          </div>
                        )}
                        
                        {/* Scan Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 animate-scan-line" />
                      </div>
                    </div>
                    
                    {/* Content with Tech Design */}
                    <div className="p-6 flex-grow flex flex-col relative">
                      {/* Background Circuit Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <div className="w-full h-full" style={{
                          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0, 255, 255, 0.1) 10px, rgba(0, 255, 255, 0.1) 11px),
                                           repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0, 255, 255, 0.1) 10px, rgba(0, 255, 255, 0.1) 11px)`
                        }} />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 line-clamp-2 text-white group-hover:text-cyan-400 transition-colors duration-300 relative z-10">
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-gray-400 mb-6 line-clamp-3 flex-grow relative z-10">
                        {article.excerpt}
                      </p>
                      
                      {/* Metadata Bar */}
                      <div className="flex items-center justify-between text-xs font-mono pt-4 border-t border-cyan-500/20 relative z-10">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3 text-cyan-400" />
                            <span className="text-gray-500">{article.author.name.split(' ')[0]}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-purple-400" />
                            <span className="text-gray-500">{article.readTime}M</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Activity className="w-3 h-3 text-green-400 animate-pulse" />
                            <span className="text-gray-500">{850 - index * 120}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* View All Button - Futuristic Design */}
          <div className="text-center relative">
            <Link href="/blog">
              <button className="group relative px-16 py-6 font-black text-lg overflow-hidden">
                {/* Button Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-500" />
                
                {/* Button Body */}
                <div className="relative glass-card rounded-lg border border-cyan-400/50 px-16 py-6 group-hover:border-cyan-400 transition-all duration-300">
                  <div className="flex items-center justify-center gap-3">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">ACCESS ALL</span>
                    <span className="text-white font-mono">{articles.length}</span>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">INTEL FILES</span>
                    <ArrowRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  
                  {/* Animated Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line" />
                </div>
              </button>
            </Link>
            
            {/* Status Text */}
            <p className="mt-4 text-xs font-mono text-gray-500">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                DATABASE SYNCHRONIZED • LAST UPDATE: 2 MINUTES AGO
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 4. TRUSTED BY DEVELOPERS - Social Proof Section */}
      <SocialProof />

      {/* Trust Badges for Extra Social Proof */}
      <TrustBadges />

      {/* Live Activity Feed - Hidden for now */}
      {/* <section className="py-16 border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <LiveActivityFeed />
          </div>
        </div>
      </section> */}

      {/* Deals Section - Exclusive Discounts - Temporarily Disabled Due to Export Issue */}
      {/* TODO: Fix DealsSection component export issue */}

      {/* Pricing Calculator - ROI Tool */}
      {/* <PricingCalculator /> */}

      {/* Tool Comparison Widget - Hidden for now */}
      {/* <ToolComparisonWidget /> */}
      </main>

      <Footer />
    </div>
    </>
  )
}

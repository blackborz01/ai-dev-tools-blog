'use client'

import { useState, useEffect } from 'react'
import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import './hero-animations.css'
import { 
  Music, Sparkles, Zap, Star, ChevronRight, ArrowRight, 
  Check, X, TrendingUp, Users, Clock, Globe, Shield, 
  Headphones, Mic, Radio, Waves, Activity, BarChart3,
  Download, Upload, Share2, Heart, MessageCircle, Cpu,
  DollarSign, CreditCard, Gift, Award, Target, Layers,
  GitBranch, Cloud, Database, Lock, Smartphone, Monitor,
  ArrowLeft, ExternalLink, Info, BookOpen, Video, Code,
  Package, Palette, FileText, Bot, Brain, Image, Gamepad2,
  FlaskConical, GraduationCap, Building2, Rocket
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import { fetchAllAITools, type AITool } from '@/lib/ai-tools-fetcher'

// Icon mapping for categories
const categoryIcons: { [key: string]: any } = {
  'Writing & Content': FileText,
  'Code & Development': Code,
  'Image & Design': Image,
  'Audio & Music': Music,
  'Video & Animation': Video,
  'Productivity': Zap,
  'Data & Analytics': BarChart3,
  'Chatbots & Assistants': Bot,
  'Marketing & Sales': TrendingUp,
  'Education & Learning': GraduationCap,
  'Business & Finance': Building2,
  'Healthcare & Fitness': Activity,
  'Gaming & Entertainment': Gamepad2,
  'Security & Privacy': Shield,
  'Research & Science': FlaskConical
}

// Special detailed pages for featured tools
const featuredToolsData: { [key: string]: any } = {
  'soundcloud-ai': {
    name: 'SoundCloud AI',
    tagline: 'Next-Generation AI-Powered Music Distribution & Discovery Platform',
    description: 'Revolutionary AI platform transforming how 175M+ artists create, distribute, and monetize music worldwide',
    logo: '🎵',
    category: 'Audio & Music',
    website: 'https://soundcloud.com',
    pricing: {
      starter: { 
        price: 0, 
        name: 'SoundCloud Free', 
        features: [
          '3 hours total upload time',
          'Basic listener analytics',
          'Standard audio quality (128 kbps)',
          'Public playlists',
          'Basic embedding options'
        ],
        limitations: [
          'Limited to 3 hours',
          'No download options',
          'Basic stats only',
          'Ads displayed'
        ]
      },
      pro: { 
        price: 12, 
        name: 'SoundCloud Pro', 
        features: [
          'Unlimited upload time',
          'Advanced analytics & insights',
          'High-quality audio (256 kbps)',
          'Monetization enabled',
          'Scheduled releases',
          'Replace tracks without losing stats',
          'Spotlight feature for pinning tracks',
          'No ads on your tracks'
        ],
        bestFor: 'Serious musicians and podcasters'
      },
      enterprise: { 
        price: 144, 
        name: 'SoundCloud Pro Unlimited', 
        features: [
          'Everything in Pro',
          'Unlimited distribution to Spotify, Apple Music, etc.',
          'Advanced monetization options',
          'Priority customer support',
          'Detailed audience insights',
          'Custom branding options',
          'API access for integrations',
          'Team collaboration features'
        ],
        bestFor: 'Professional artists and labels'
      }
    },
    rating: 4.7,
    users: '175M+',
    established: '2007',
    aiLaunch: '2024',
    lastUpdate: 'Real-time',
    
    // Comprehensive feature list with descriptions
    features: [
      {
        name: 'AI-Powered Music Mastering',
        description: 'Automatically enhance your tracks with professional-grade mastering powered by machine learning algorithms trained on millions of hit songs.',
        benefit: 'Save $50-200 per track on mastering costs'
      },
      {
        name: 'Intelligent Recommendation Engine',
        description: 'Advanced AI analyzes listening patterns, genre preferences, and user behavior to surface your music to the right audience.',
        benefit: 'Increase plays by up to 300% through smart discovery'
      },
      {
        name: 'Automated Copyright Detection',
        description: 'Real-time content ID system prevents copyright strikes and helps you monetize samples legally.',
        benefit: 'Avoid DMCA takedowns and legal issues'
      },
      {
        name: 'Smart Playlist Generation',
        description: 'AI curates personalized playlists based on mood, tempo, and musical characteristics.',
        benefit: 'Boost engagement with 45% longer listening sessions'
      },
      {
        name: 'Voice-to-MIDI Conversion',
        description: 'Hum or sing melodies and convert them instantly to MIDI for production.',
        benefit: 'Speed up composition process by 10x'
      },
      {
        name: 'Real-time Collaboration Tools',
        description: 'Work with artists globally with zero latency and AI-assisted mixing.',
        benefit: 'Complete projects 50% faster with remote collaboration'
      },
      {
        name: 'AI Stem Separation',
        description: 'Extract vocals, drums, bass, and instruments from any track for remixing.',
        benefit: 'Create remixes and mashups in minutes, not hours'
      },
      {
        name: 'Predictive Analytics',
        description: 'Machine learning predicts track performance before release.',
        benefit: 'Optimize release timing for maximum impact'
      }
    ],
    
    // Detailed pros and cons
    pros: [
      'Largest music community with 175M+ active users',
      'Best-in-class AI recommendation algorithm',
      'Free tier generous enough for beginners',
      'Direct monetization without middlemen',
      'Instant global distribution',
      'No exclusive contracts required',
      'Mobile apps for iOS and Android',
      'Embeddable players for websites',
      'Detailed analytics and audience insights',
      'Strong hip-hop and electronic music community'
    ],
    
    cons: [
      'Pro features essential for serious artists',
      'Limited customer support on free tier',
      'Payout rates lower than Spotify ($0.003/stream)',
      'Some features only available in select countries',
      'Upload limits on free plan restrictive',
      'No video hosting capabilities',
      'Comments section can be toxic'
    ],
    
    integrations: [
      'Spotify', 'Apple Music', 'YouTube Music', 'Amazon Music',
      'TikTok', 'Instagram', 'Discord', 'Twitch',
      'Ableton Live', 'FL Studio', 'Logic Pro', 'Pro Tools'
    ],
    
    stats: {
      activeUsers: 175000000,
      monthlyCreators: 40000000,
      tracksUploaded: 400000000,
      hoursOfContent: 280000000,
      countriesAvailable: 190,
      aiProcessedTracks: 50000000,
      revenueShared: 500000000
    },
    
    // SEO content
    seoContent: {
      title: 'SoundCloud AI Review 2025: Features, Pricing & 175M Users Can\'t Be Wrong',
      metaDescription: 'Complete SoundCloud AI review with real pricing, pros/cons, and why 175M+ artists use it. AI mastering, smart playlists, copyright detection. Compare plans.',
      
      mainContent: `
        <div class="prose prose-lg max-w-none">
          <!-- 1. Overview -->
          <h2 class="text-3xl font-black mt-8 mb-4">What is SoundCloud AI? Complete Platform Overview</h2>
          
          <p class="text-lg leading-relaxed mb-6">
            SoundCloud AI represents the most significant evolution in music distribution since streaming began. Launched in 2024, this AI-powered upgrade to the world's largest open music platform combines <strong>175 million active users</strong> with cutting-edge machine learning to solve the biggest challenges facing independent artists today: discovery, distribution, and monetization.
          </p>
          
          <p class="mb-6">
            Unlike traditional music platforms that favor major labels, SoundCloud AI democratizes music creation with tools previously available only to artists with $100,000+ budgets. The platform's AI engine processes over <strong>12 hours of uploaded content every minute</strong>, automatically mastering tracks, detecting copyright issues, and connecting artists with their ideal audience through the industry's most sophisticated recommendation algorithm.
          </p>
          
          <p class="mb-6">
            SoundCloud's AI infrastructure leverages three core technologies that process <strong>50 million tracks annually</strong>: Neural Audio Processing for instant mastering, Recommendation Graph AI for discovery, and Content Recognition System for copyright protection.
          </p>
          
          <!-- 2. Statistics -->
          <h2 class="text-3xl font-black mt-12 mb-6">SoundCloud AI by the Numbers</h2>
          
          <div class="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-cyan-500/20 my-8">
            <div class="grid md:grid-cols-4 gap-6">
              <div class="text-center">
                <div class="text-4xl font-black text-white mb-2">175M+</div>
                <div class="text-sm text-gray-400">Active Users</div>
                <div class="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-cyan-500 to-cyan-400" style="width: 95%"></div>
                </div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-black text-white mb-2">40M</div>
                <div class="text-sm text-gray-400">Monthly Creators</div>
                <div class="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-purple-500 to-purple-400" style="width: 75%"></div>
                </div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-black text-white mb-2">400M</div>
                <div class="text-sm text-gray-400">Tracks Uploaded</div>
                <div class="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-yellow-500 to-yellow-400" style="width: 88%"></div>
                </div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-black text-white mb-2">$500M</div>
                <div class="text-sm text-gray-400">Revenue Shared</div>
                <div class="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-green-500 to-green-400" style="width: 85%"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Continue with rest of content... -->
        </div>
      `
    }
  }
}

export default function ToolDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [tool, setTool] = useState<AITool | null>(null)
  const [featuredData, setFeaturedData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState('pro')
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    async function loadTool() {
      setLoading(true)
      
      // Check if it's a featured tool with custom data
      if (featuredToolsData[slug]) {
        setFeaturedData(featuredToolsData[slug])
        setLoading(false)
        return
      }

      // Otherwise, try to find it in the general tools database
      try {
        const tools = await fetchAllAITools()
        
        // Try multiple slug variations to find the tool
        const foundTool = tools.find(t => {
          const toolSlug = t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
          // Check exact match or with 'ai' suffix
          return toolSlug === slug || toolSlug === slug.replace('-ai', '') || toolSlug === slug + '-ai'
        })
        
        if (foundTool) {
          // Check if this is SoundCloud and use featured data
          if (foundTool.name.toLowerCase().includes('soundcloud')) {
            setFeaturedData(featuredToolsData['soundcloud-ai'])
          } else {
            setTool(foundTool)
          }
        } else {
          // If not found, check if it's soundcloud variant
          if (slug.includes('soundcloud')) {
            setFeaturedData(featuredToolsData['soundcloud-ai'])
          } else {
            notFound()
          }
        }
      } catch (error) {
        console.error('Error loading tool:', error)
        notFound()
      } finally {
        setLoading(false)
      }
    }
    
    loadTool()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/20 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-purple-900/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading tool details...</p>
        </div>
      </div>
    )
  }

  // Render featured tool page (like SoundCloud AI)
  if (featuredData) {
    const Icon = categoryIcons[featuredData.category] || Zap
    
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        
        {/* Hero Section - Complete Redesign */}
        <section className="relative min-h-[90vh] overflow-hidden bg-black">
          {/* Content here... */}
          <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
            <h1 className="text-6xl font-black text-white">{featuredData.name}</h1>
            <p className="text-xl text-gray-300">{featuredData.tagline}</p>
            <a
              href={featuredData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl"
            >
              Visit Website
            </a>
          </div>
        </section>

        {/* Main SEO Content */}
        {featuredData.seoContent && (
          <section className="py-16 container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div dangerouslySetInnerHTML={{ __html: featuredData.seoContent.mainContent }} />
            </div>
          </section>
        )}
      </div>
    )
  }

  // Render generic tool page from database
  if (tool) {
    const Icon = categoryIcons[tool.category] || Zap
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/20 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-purple-900/10">
        <Navbar />
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Link 
              href="/tools" 
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-3xl font-bold">
                    {tool.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
                      {tool.name}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      {tool.description}
                    </p>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Globe className="w-5 h-5" />
                    Visit Website
                  </a>
                  <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return notFound()
}

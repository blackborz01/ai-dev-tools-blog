'use client'

import { useState, useEffect, useRef } from 'react'
import NextImage from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { 
  Star, Download, Users, Globe, Github, Twitter, Linkedin, Youtube,
  CheckCircle, XCircle, ArrowRight, ExternalLink, Code, Zap, Shield,
  TrendingUp, Award, Heart, MessageCircle, Share2, Copy, Check,
  ChevronRight, ChevronLeft, Play, Pause, Volume2, VolumeX,
  Calendar, Clock, Tag, Layers, Cpu, Database, Cloud, Lock,
  BarChart3, Activity, GitBranch, Terminal, Palette, Box,
  Sparkles, Rocket, Crown, Infinity, ArrowUpRight, AlertCircle,
  BookOpen, FileText, Video, Headphones, Mail, Phone, MapPin,
  DollarSign, CreditCard, Gift, ShoppingCart, Package, Truck,
  Settings, Tool, Wrench, Cog, Sliders, Filter, Search, Command,
  ChevronDown, ChevronUp, Plus, Minus, Info, HelpCircle, LightbulbIcon,
  Brain, Workflow, Network, Boxes, Gauge, FlaskConical, Microscope,
  Target, Flag, Trophy, Medal, Gem, Diamond, Coins, Wallet,
  LineChart, PieChart, TrendingDown, BarChart, AreaChart,
  Smartphone, Monitor, Tablet, Watch, Laptop, Server, HardDrive,
  Wifi, Bluetooth, Cast, Share, Send, Download as DownloadIcon,
  Upload, Save, Trash, Edit, Eye, EyeOff, Bell, BellOff
} from 'lucide-react'

interface ToolPageTemplateProps {
  toolData: {
    name: string
    tagline: string
    description: string
    url?: string
    logo?: string
    category: string
    pricing: {
      type: 'free' | 'freemium' | 'paid' | 'enterprise'
      startingPrice?: string
      hasFreeTier?: boolean
      plans?: Array<{
        name: string
        price: string
        features: string[]
        highlighted?: boolean
      }>
      businessPlans?: Array<{
        name: string
        price: string
        features: string[]
        highlighted?: boolean
      }>
    }
    metrics?: {
      users?: string
      stars?: string
      downloads?: string
      uptime?: string
      responseTime?: string
      accuracy?: string
    }
    features?: Array<{
      title: string
      description: string
      icon?: any
      highlight?: boolean
    }>
    integrations?: Array<{
      name: string
      logo?: string
      type: string
    }>
    comparisons?: Array<{
      feature: string
      tool: boolean | string
      competitors: { [key: string]: boolean | string }
    }>
    testimonials?: Array<{
      author: string
      role: string
      company: string
      avatar?: string
      content: string
      rating?: number
    }>
    resources?: {
      documentation?: string
      github?: string
      discord?: string
      youtube?: string
      blog?: string
    }
    faqs?: Array<{
      question: string
      answer: string
    }>
  }
}

export default function ToolPageTemplate({ toolData }: ToolPageTemplateProps) {
  const [activeTab, setActiveTab] = useState('overview')
  const [copied, setCopied] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(1)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  
  const overviewRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const integrationsRef = useRef<HTMLDivElement>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 })
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.3 })

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'overview', ref: overviewRef },
        { id: 'features', ref: featuresRef },
        { id: 'pricing', ref: pricingRef },
        { id: 'integrations', ref: integrationsRef },
        { id: 'reviews', ref: reviewsRef },
        { id: 'resources', ref: resourcesRef }
      ]

      const scrollPosition = window.scrollY + 100

      for (const section of sections.reverse()) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect()
          const top = rect.top + window.scrollY
          
          if (scrollPosition >= top) {
            setActiveTab(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getPricingGradient = (type: string) => {
    const gradients = {
      free: 'from-green-500 to-emerald-500',
      freemium: 'from-blue-500 to-cyan-500',
      paid: 'from-purple-500 to-pink-500',
      enterprise: 'from-orange-500 to-red-500'
    }
    return gradients[type as keyof typeof gradients] || gradients.paid
  }

  const getFeatureIcon = (index: number) => {
    const icons = [Code, Zap, Shield, Brain, Rocket, Target]
    return icons[index % icons.length]
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity }}
        />
      </div>

      {/* Hero Section / Overview */}
      <motion.section 
        ref={overviewRef}
        id="overview"
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative pt-24 pb-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">{toolData.category}</span>
              </motion.div>

              {/* Title and Tagline */}
              <div className="mb-6">
                <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  {toolData.name}
                </h1>
                <p className="text-xl text-gray-300 mt-2">{toolData.tagline}</p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                {toolData.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <motion.a
                  href={toolData.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-lg items-center gap-2 hover:shadow-2xl hover:shadow-purple-500/25 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  {toolData.resources?.github && (
                    <motion.a
                      href={toolData.resources.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/20 hover:border-purple-500/50 transition-all group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors" />
                    </motion.a>
                  )}
                  {toolData.resources?.discord && (
                    <motion.a
                      href={toolData.resources.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/20 hover:border-purple-500/50 transition-all group"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <MessageCircle className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors" />
                    </motion.a>
                  )}
                  {toolData.resources?.youtube && (
                    <motion.a
                      href={toolData.resources.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/20 hover:border-purple-500/50 transition-all group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Youtube className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors" />
                    </motion.a>
                  )}
                  {toolData.resources?.documentation && (
                    <motion.a
                      href={toolData.resources.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/20 hover:border-purple-500/50 transition-all group"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <BookOpen className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors" />
                    </motion.a>
                  )}
                  <motion.a
                    href={`https://twitter.com/intent/tweet?text=Check%20out%20${encodeURIComponent(toolData.name)}%20-%20${encodeURIComponent(toolData.tagline)}&url=${encodeURIComponent(toolData.url || '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/20 hover:border-purple-500/50 transition-all group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Twitter className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors" />
                  </motion.a>
                </div>
              </div>

              {/* Quick Stats */}
              {toolData.metrics && (
                <div className="grid grid-cols-3 gap-4">
                  {toolData.metrics.users && (
                    <motion.div 
                      className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span className="text-2xl font-bold text-white">{toolData.metrics.users}</span>
                      </div>
                      <span className="text-sm text-gray-400">Active Users</span>
                    </motion.div>
                  )}
                  {toolData.metrics.stars && (
                    <motion.div 
                      className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-2xl font-bold text-white">{toolData.metrics.stars}</span>
                      </div>
                      <span className="text-sm text-gray-400">GitHub Stars</span>
                    </motion.div>
                  )}
                  {toolData.metrics.downloads && (
                    <motion.div 
                      className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <DownloadIcon className="w-4 h-4 text-green-400" />
                        <span className="text-2xl font-bold text-white">{toolData.metrics.downloads}</span>
                      </div>
                      <span className="text-sm text-gray-400">Downloads</span>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* 3D Card Effect */}
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-3xl opacity-50"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-white/10 backdrop-blur-xl"
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: -5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Code Preview Window */}
                  <div className="bg-black/50 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="ml-auto text-xs text-gray-500">preview.tsx</span>
                    </div>
                    <pre className="text-sm text-gray-300 font-mono">
                      <code>{`// AI-powered code generation
const assistant = new ${toolData.name}({
  apiKey: process.env.API_KEY,
  model: 'advanced-v2'
});

const result = await assistant.generate({
  prompt: "Create a REST API",
  language: "TypeScript",
  framework: "Express"
});

console.log(result.code);`}</code>
                    </pre>
                  </div>

                  {/* Performance Metrics */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Performance</span>
                        <span className="text-cyan-400">98%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: '98%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Accuracy</span>
                        <span className="text-purple-400">95%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                          initial={{ width: 0 }}
                          animate={{ width: '95%' }}
                          transition={{ duration: 1, delay: 0.7 }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Satisfaction</span>
                        <span className="text-green-400">97%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                          initial={{ width: 0 }}
                          animate={{ width: '97%' }}
                          transition={{ duration: 1, delay: 0.9 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-8 overflow-x-auto py-4 scrollbar-hide">
            {[
              { id: 'overview', ref: overviewRef },
              { id: 'features', ref: featuresRef },
              { id: 'pricing', ref: pricingRef },
              { id: 'integrations', ref: integrationsRef },
              { id: 'reviews', ref: reviewsRef },
              { id: 'resources', ref: resourcesRef }
            ].map(({ id, ref }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveTab(id)
                  ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className={`
                  px-4 py-2 rounded-lg font-medium capitalize transition-all whitespace-nowrap
                  ${activeTab === id 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {id}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to supercharge your development workflow
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolData.features?.map((feature, index) => {
              const Icon = feature.icon || getFeatureIcon(index)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`
                    relative group p-6 rounded-2xl backdrop-blur-xl border transition-all
                    ${feature.highlight 
                      ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30' 
                      : 'bg-white/5 border-white/10 hover:border-purple-500/30'
                    }
                  `}
                >
                  {feature.highlight && (
                    <div className="absolute -top-3 -right-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-xs font-bold">
                        PRO
                      </span>
                    </div>
                  )}
                  
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center mb-4
                    ${feature.highlight 
                      ? 'bg-gradient-to-br from-purple-500 to-blue-500' 
                      : 'bg-white/10 group-hover:bg-gradient-to-br group-hover:from-purple-500/50 group-hover:to-blue-500/50'
                    }
                  `}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Feature Comparison Chart */}
          <motion.div 
            className="mt-20 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Feature Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4">{toolData.name}</th>
                    {toolData.comparisons && toolData.comparisons[0] && 
                      Object.keys(toolData.comparisons[0].competitors).map(competitorName => (
                        <th key={competitorName} className="text-center p-4">{competitorName}</th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                  {toolData.comparisons?.map((comparison, index) => (
                    <tr key={index} className="border-b border-white/5">
                      <td className="p-4 text-gray-400">{comparison.feature}</td>
                      <td className="text-center p-4">
                        {typeof comparison.tool === 'boolean' ? (
                          comparison.tool ? (
                            <CheckCircle className="w-5 h-5 text-green-400 inline" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-400 inline" />
                          )
                        ) : (
                          <span className="text-purple-400 font-medium">{comparison.tool}</span>
                        )}
                      </td>
                      {Object.entries(comparison.competitors).map(([key, value]) => (
                        <td key={key} className="text-center p-4">
                          {typeof value === 'boolean' ? (
                            value ? (
                              <CheckCircle className="w-5 h-5 text-green-400 inline" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-400 inline" />
                            )
                          ) : (
                            <span className="text-gray-400">{value}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      {toolData.pricing.plans && (
      <section ref={pricingRef} id="pricing" className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your needs
            </p>
          </motion.div>

          {/* Tab Selector for Individual vs Business */}
          {toolData.pricing.businessPlans && (
            <div className="flex justify-center mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-1 border border-white/20">
                <button
                  onClick={() => setSelectedPlan(0)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedPlan === 0
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  For Individuals
                </button>
                <button
                  onClick={() => setSelectedPlan(1)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedPlan === 1
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  For Businesses
                </button>
              </div>
            </div>
          )}

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {(selectedPlan === 0 ? toolData.pricing.plans : toolData.pricing.businessPlans || toolData.pricing.plans)?.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`
                  relative p-8 rounded-3xl backdrop-blur-xl border transition-all
                  ${plan.highlighted 
                    ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30 scale-105' 
                    : 'bg-white/5 border-white/10'
                  }
                `}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-black text-white mb-2">
                    {plan.price}
                    {plan.price !== 'Free' && <span className="text-lg font-normal text-gray-400">/mo</span>}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`
                  w-full py-3 rounded-xl font-semibold transition-all
                  ${plan.highlighted 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-xl hover:shadow-purple-500/25' 
                    : 'bg-white/10 hover:bg-white/20 border border-white/20'
                  }
                `}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Integration Ecosystem */}
      {toolData.integrations && toolData.integrations.length > 0 && (
      <section ref={integrationsRef} id="integrations" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Works With Your Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Seamlessly integrates with the tools you already use
            </p>
          </div>

          {/* Integration Grid with Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {toolData.integrations?.map((integration, index) => {
              const getIntegrationIcon = () => {
                switch(integration.type?.toLowerCase()) {
                  case 'deployment': return Cloud
                  case 'version control': return GitBranch
                  case 'design': return Palette
                  case 'framework': return Layers
                  case 'library': return Package
                  case 'component library': return Box
                  case 'styling': return Palette
                  case 'language': return Code
                  case 'database': return Database
                  case 'authentication': return Lock
                  case 'analytics': return BarChart3
                  case 'monitoring': return Activity
                  case 'testing': return FlaskConical
                  default: return Boxes
                }
              }
              
              const Icon = getIntegrationIcon()
              
              return (
                <motion.div
                  key={index}
                  className="group relative p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-purple-500/30 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-white">{integration.name}</span>
                      </div>
                      {integration.type && (
                        <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">
                          {integration.type}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      )}

      {/* Testimonials / Reviews */}
      {toolData.testimonials && toolData.testimonials.length > 0 && (
        <section ref={reviewsRef} id="reviews" className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Loved by Developers
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See what our users are saying
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  {testimonial.avatar && !testimonial.avatar.startsWith('http') ? (
                    <NextImage 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full" />
                  )}
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
                
                {testimonial.rating && (
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                )}
                
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {toolData.faqs?.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg text-white">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & CTA */}
      <section ref={resourcesRef} id="resources" className="py-20 px-4 bg-gradient-to-t from-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Resources */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Resources</h3>
              <div className="grid grid-cols-2 gap-4">
                {toolData.resources?.documentation && (
                  <a
                    href={toolData.resources.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-purple-500/30 transition-all flex items-center gap-3"
                  >
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <span>Documentation</span>
                  </a>
                )}
                {toolData.resources?.github && (
                  <a
                    href={toolData.resources.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-purple-500/30 transition-all flex items-center gap-3"
                  >
                    <Github className="w-5 h-5 text-purple-400" />
                    <span>GitHub</span>
                  </a>
                )}
                {toolData.resources?.discord && (
                  <a
                    href={toolData.resources.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-purple-500/30 transition-all flex items-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5 text-purple-400" />
                    <span>Discord</span>
                  </a>
                )}
                {toolData.resources?.youtube && (
                  <a
                    href={toolData.resources.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-purple-500/30 transition-all flex items-center gap-3"
                  >
                    <Youtube className="w-5 h-5 text-purple-400" />
                    <span>YouTube</span>
                  </a>
                )}
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl p-8 border border-purple-500/30 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of developers using {toolData.name} to build amazing products
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all">
                  Start Free Trial
                </button>
                <button className="px-8 py-3 bg-white/10 backdrop-blur-xl rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
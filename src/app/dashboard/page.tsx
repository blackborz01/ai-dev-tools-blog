'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  BarChart3, TrendingUp, Activity, Clock, BookOpen, Code2,
  Trophy, Star, Zap, Target, Award, Gift, Crown, Sparkles,
  Calendar, Users, MessageSquare, Heart, Share2, Eye,
  ArrowUp, ArrowDown, Minus, ChevronRight, MoreVertical,
  Download, Filter, Search, Bell, Settings, HelpCircle,
  Cpu, Database, Cloud, Globe, Terminal, Layers, GitBranch, User
} from 'lucide-react'

// Mock data - in production, fetch from API
const mockStats = {
  totalViews: 12543,
  viewsChange: 23.5,
  articlesRead: 89,
  articlesChange: 15.2,
  toolsUsed: 34,
  toolsChange: -5.3,
  achievements: 12,
  achievementsChange: 0,
  currentStreak: 7,
  longestStreak: 21,
  totalPoints: 4250,
  globalRank: 1234,
  level: 8,
  nextLevelProgress: 65,
  subscriptionType: 'pro' as 'free' | 'pro' | 'premium',
  subscriptionRenewal: '2025-09-21'
}

const recentActivities = [
  { id: 1, type: 'article', title: 'Read: AI Makes Developers 70% Slower', time: '2 hours ago', icon: BookOpen, color: 'cyan' },
  { id: 2, type: 'tool', title: 'Used: MCP Server Generator', time: '5 hours ago', icon: Cpu, color: 'purple' },
  { id: 3, type: 'achievement', title: 'Earned: Power Reader Badge', time: '1 day ago', icon: Trophy, color: 'yellow' },
  { id: 4, type: 'comment', title: 'Commented on: Context Blindness in AI', time: '2 days ago', icon: MessageSquare, color: 'green' },
  { id: 5, type: 'save', title: 'Saved: Security Vulnerabilities Guide', time: '3 days ago', icon: Heart, color: 'pink' }
]

const topArticles = [
  { title: 'AI Makes Developers 70% Slower', views: 3421, trend: 'up', change: 12 },
  { title: 'MCP Servers Troubleshooting Guide', views: 2856, trend: 'up', change: 8 },
  { title: 'The 70% Problem with AI Code', views: 2103, trend: 'down', change: -3 },
  { title: 'AI Security Vulnerabilities', views: 1847, trend: 'up', change: 15 },
  { title: 'Context Blindness in AI', views: 1523, trend: 'neutral', change: 0 }
]

const achievements = [
  { id: 1, name: 'Early Adopter', description: 'Joined in the first month', icon: Star, unlocked: true, color: 'yellow' },
  { id: 2, name: 'Power Reader', description: 'Read 50+ articles', icon: BookOpen, unlocked: true, color: 'cyan' },
  { id: 3, name: 'Tool Master', description: 'Used 25+ tools', icon: Cpu, unlocked: true, color: 'purple' },
  { id: 4, name: 'Streak Champion', description: '30 day streak', icon: Zap, unlocked: false, color: 'orange', progress: 23 },
  { id: 5, name: 'Community Leader', description: '100+ helpful comments', icon: Users, unlocked: false, color: 'green', progress: 67 },
  { id: 6, name: 'Premium Explorer', description: 'Try all premium features', icon: Crown, unlocked: false, color: 'pink', progress: 40 }
]

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d' | 'all'>('30d')
  const [chartData, setChartData] = useState<number[]>([])

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      redirect('/auth/signin')
    }
  }, [session, status])

  useEffect(() => {
    // Generate mock chart data
    const points = selectedPeriod === '7d' ? 7 : selectedPeriod === '30d' ? 30 : selectedPeriod === '90d' ? 90 : 365
    const data = Array.from({ length: Math.min(points, 20) }, () => Math.floor(Math.random() * 100) + 20)
    setChartData(data)
  }, [selectedPeriod])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-cyan-400 animate-pulse">Loading dashboard...</div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const getSubscriptionBadge = () => {
    switch (mockStats.subscriptionType) {
      case 'premium':
        return { icon: Crown, color: 'from-yellow-400 to-amber-600', text: 'Premium', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/30' }
      case 'pro':
        return { icon: Zap, color: 'from-purple-400 to-pink-600', text: 'Pro', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' }
      default:
        return { icon: User, color: 'from-gray-400 to-gray-600', text: 'Free', bgColor: 'bg-gray-500/10', borderColor: 'border-gray-500/30' }
    }
  }

  const subscription = getSubscriptionBadge()
  const SubscriptionIcon = subscription.icon

  return (
    <div className="min-h-screen bg-black">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <p className="text-gray-400 mt-2">
                Welcome back, {session.user?.name || session.user?.email?.split('@')[0]}! Here's your activity overview.
              </p>
            </div>
            
            {/* Period Selector */}
            <div className="flex gap-2 p-1 bg-gray-900/50 backdrop-blur rounded-lg border border-gray-800">
              {(['7d', '30d', '90d', 'all'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedPeriod === period
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {period === 'all' ? 'All Time' : `Last ${period.replace('d', ' days')}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Total Views */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative p-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <Eye className="w-6 h-6 text-cyan-400" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${mockStats.viewsChange > 0 ? 'text-green-400' : mockStats.viewsChange < 0 ? 'text-red-400' : 'text-gray-400'}`}>
                  {mockStats.viewsChange > 0 ? <ArrowUp className="w-4 h-4" /> : mockStats.viewsChange < 0 ? <ArrowDown className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                  {Math.abs(mockStats.viewsChange)}%
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {mockStats.totalViews.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Total Views</div>
            </div>
          </div>

          {/* Articles Read */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative p-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  <BookOpen className="w-6 h-6 text-purple-400" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${mockStats.articlesChange > 0 ? 'text-green-400' : mockStats.articlesChange < 0 ? 'text-red-400' : 'text-gray-400'}`}>
                  {mockStats.articlesChange > 0 ? <ArrowUp className="w-4 h-4" /> : mockStats.articlesChange < 0 ? <ArrowDown className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                  {Math.abs(mockStats.articlesChange)}%
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {mockStats.articlesRead}
              </div>
              <div className="text-sm text-gray-400">Articles Read</div>
            </div>
          </div>

          {/* Tools Used */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative p-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl hover:border-green-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-green-500/10 rounded-xl">
                  <Cpu className="w-6 h-6 text-green-400" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${mockStats.toolsChange > 0 ? 'text-green-400' : mockStats.toolsChange < 0 ? 'text-red-400' : 'text-gray-400'}`}>
                  {mockStats.toolsChange > 0 ? <ArrowUp className="w-4 h-4" /> : mockStats.toolsChange < 0 ? <ArrowDown className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                  {Math.abs(mockStats.toolsChange)}%
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {mockStats.toolsUsed}
              </div>
              <div className="text-sm text-gray-400">Tools Used</div>
            </div>
          </div>

          {/* Achievements */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative p-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl hover:border-yellow-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-yellow-500/10 rounded-xl">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Star className="w-4 h-4" />
                  Level {mockStats.level}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {mockStats.achievements}
              </div>
              <div className="text-sm text-gray-400">Achievements</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Activity & Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Activity Chart */}
            <div className="p-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Activity Overview</h2>
                <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              
              {/* Chart */}
              <div className="h-64 flex items-end gap-2">
                {chartData.map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t hover:opacity-100 transition-all cursor-pointer group relative"
                    style={{ height: `${height}%`, opacity: 0.7 }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      {height}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Chart Labels */}
              <div className="flex justify-between mt-4 text-xs text-gray-500">
                <span>{selectedPeriod === '7d' ? 'Mon' : 'Start'}</span>
                <span>Mid</span>
                <span>{selectedPeriod === '7d' ? 'Sun' : 'End'}</span>
              </div>
            </div>

            {/* Top Articles */}
            <div className="p-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Top Articles</h2>
                <Link href="/blog">
                  <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
              
              <div className="space-y-3">
                {topArticles.map((article, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{article.title}</div>
                        <div className="text-xs text-gray-400">{article.views.toLocaleString()} views</div>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${
                      article.trend === 'up' ? 'text-green-400' : 
                      article.trend === 'down' ? 'text-red-400' : 
                      'text-gray-400'
                    }`}>
                      {article.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : 
                       article.trend === 'down' ? <ArrowDown className="w-3 h-3" /> : 
                       <Minus className="w-3 h-3" />}
                      {Math.abs(article.change)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile & Activity */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="p-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-0.5">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      {session.user?.image ? (
                        <img src={session.user.image} alt="Profile" className="w-full h-full rounded-full object-cover" />
                      ) : (
                        <span className="text-2xl font-bold text-white">
                          {session.user?.name?.[0] || session.user?.email?.[0] || 'U'}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900" />
                </div>
                
                <div>
                  <div className="text-lg font-semibold text-white">
                    {session.user?.name || 'User'}
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${subscription.bgColor} ${subscription.borderColor} border w-fit`}>
                    <SubscriptionIcon className="w-3 h-3 text-white" />
                    <span className={`text-xs font-medium bg-gradient-to-r ${subscription.color} bg-clip-text text-transparent`}>
                      {subscription.text}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-gray-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-white">{mockStats.currentStreak}</div>
                  <div className="text-xs text-gray-400">Day Streak</div>
                </div>
                <div className="p-3 bg-gray-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-white">#{mockStats.globalRank}</div>
                  <div className="text-xs text-gray-400">Global Rank</div>
                </div>
                <div className="p-3 bg-gray-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-white">{mockStats.totalPoints.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Total Points</div>
                </div>
                <div className="p-3 bg-gray-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-white">Level {mockStats.level}</div>
                  <div className="text-xs text-gray-400">Current Level</div>
                </div>
              </div>
              
              {/* Level Progress */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">Level Progress</span>
                  <span className="text-xs text-cyan-400">{mockStats.nextLevelProgress}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all"
                    style={{ width: `${mockStats.nextLevelProgress}%` }}
                  />
                </div>
              </div>
              
              {/* Subscription Info */}
              {mockStats.subscriptionType !== 'premium' && (
                <Link href="/subscribe">
                  <button className="w-full mt-4 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <Crown className="w-4 h-4" />
                    Upgrade to Premium
                    <Sparkles className="w-4 h-4" />
                  </button>
                </Link>
              )}
            </div>
            
            {/* Recent Activity */}
            <div className="p-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Recent Activity</h2>
                <Link href="/activity">
                  <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    View All
                  </button>
                </Link>
              </div>
              
              <div className="space-y-3">
                {recentActivities.map((activity) => {
                  const Icon = activity.icon
                  return (
                    <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/30 transition-colors">
                      <div className={`p-2 rounded-lg bg-${activity.color}-500/10`}>
                        <Icon className={`w-4 h-4 text-${activity.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-white">{activity.title}</div>
                        <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

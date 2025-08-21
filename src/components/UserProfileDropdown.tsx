'use client'

import { useState, useEffect, useRef } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  User, Settings, LogOut, ChevronDown, Shield, CreditCard,
  BarChart3, Bell, Moon, Sun, Sparkles, Crown, Zap,
  BookOpen, Heart, Star, TrendingUp, Activity, Lock,
  Mail, Github, Twitter, Globe, CheckCircle2, AlertCircle,
  Palette, Languages, HelpCircle, FileText, Award, Gift,
  Trophy, Cpu, Calendar, Clock
} from 'lucide-react'
import { getUserStats, getLevelProgress, getGlobalRank, getMemberSince, type UserStats } from '@/lib/stats/userStats'

export default function UserProfileDropdown() {
  const { data: session } = useSession()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'profile' | 'stats' | 'settings'>('profile')
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('dark')
  const [notifications, setNotifications] = useState(true)
  const [userStats, setUserStats] = useState<UserStats | null>(null)
  const [levelProgress, setLevelProgress] = useState({ current: 0, next: 100, progress: 0 })
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Load real user stats
  useEffect(() => {
    if (session?.user?.email) {
      const stats = getUserStats(session.user.email)
      setUserStats(stats)
      setLevelProgress(getLevelProgress(stats))
    }
  }, [session])

  // Track time spent on page
  useEffect(() => {
    if (!session?.user?.email) return
    
    const startTime = Date.now()
    
    return () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000)
      if (timeSpent > 5) { // Only track if spent more than 5 seconds
        import('@/lib/stats/userStats').then(({ trackTimeSpent }) => {
          trackTimeSpent(session.user!.email!, timeSpent)
        })
      }
    }
  }, [session])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!session?.user || !userStats) return null

  const getSubscriptionBadge = () => {
    // Determine subscription based on actual user data
    // For now, default to free unless we detect otherwise
    const subscriptionType = userStats.subscriptionType || 'free'
    
    switch (subscriptionType) {
      case 'premium':
        return { icon: Crown, color: 'from-yellow-400 to-amber-600', text: 'Premium', glow: 'yellow' }
      case 'pro':
        return { icon: Zap, color: 'from-purple-400 to-pink-600', text: 'Pro', glow: 'purple' }
      default:
        return { icon: User, color: 'from-gray-400 to-gray-600', text: 'Free', glow: 'gray' }
    }
  }

  const subscriptionBadge = getSubscriptionBadge()
  const SubscriptionIcon = subscriptionBadge.icon
  const globalRank = getGlobalRank(userStats.totalPoints)
  const memberSince = getMemberSince(userStats)
  
  // Get unlocked achievements count
  const unlockedAchievements = userStats.achievements.filter(a => a.unlockedAt).length

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 px-3 py-2 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
        
        {/* Avatar with Status Ring */}
        <div className="relative">
          {/* Animated Ring for streak */}
          {userStats.currentStreak > 0 && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-spin-slow opacity-75" />
          )}
          <div className="absolute inset-0.5 rounded-full bg-black" />
          
          {/* Avatar */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-transparent bg-gradient-to-br from-cyan-400 to-purple-600">
            {session.user.image ? (
              <img 
                src={session.user.image} 
                alt={session.user.name || 'User'}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-purple-600">
                <User className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
          
          {/* Online Status */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse" />
        </div>

        {/* User Info */}
        <div className="hidden md:flex flex-col items-start">
          <span className="text-sm font-semibold text-white">
            {session.user.name || session.user.email?.split('@')[0]}
          </span>
          <div className="flex items-center gap-1">
            <SubscriptionIcon className="w-3 h-3 text-cyan-400" />
            <span className={`text-xs font-medium bg-gradient-to-r ${subscriptionBadge.color} bg-clip-text text-transparent`}>
              {subscriptionBadge.text} Member
            </span>
          </div>
        </div>

        {/* Dropdown Arrow */}
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-96 rounded-2xl bg-gray-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden animate-slideDown">
          {/* Header with Cover Image */}
          <div className="relative h-32 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-6">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
            
            {/* User Avatar Large */}
            <div className="absolute -bottom-10 left-6">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 blur-lg opacity-50" />
                
                {/* Avatar Container */}
                <div className="relative w-20 h-20 rounded-full border-4 border-gray-950 overflow-hidden bg-gradient-to-br from-cyan-400 to-purple-600">
                  {session.user.image ? (
                    <img 
                      src={session.user.image} 
                      alt={session.user.name || 'User'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-10 h-10 text-white" />
                    </div>
                  )}
                </div>
                
                {/* Subscription Badge */}
                <div className={`absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-r ${subscriptionBadge.color} flex items-center justify-center border-2 border-gray-950`}>
                  <SubscriptionIcon className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-white/10 backdrop-blur hover:bg-white/20 transition-colors"
              >
                {theme === 'dark' ? 
                  <Sun className="w-4 h-4 text-white" /> : 
                  <Moon className="w-4 h-4 text-white" />
                }
              </button>
              <button 
                onClick={() => setNotifications(!notifications)}
                className="p-2 rounded-lg bg-white/10 backdrop-blur hover:bg-white/20 transition-colors relative"
              >
                <Bell className={`w-4 h-4 text-white ${notifications ? '' : 'opacity-50'}`} />
                {notifications && userStats.articlesRead.length === 0 && (
                  <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </button>
            </div>
          </div>

          {/* User Info Section */}
          <div className="px-6 pt-14 pb-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {session.user.name || 'User'}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {session.user.email}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-500">Member since {memberSince}</span>
                  {session.user.provider === 'google' && (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                      <CheckCircle2 className="w-3 h-3 text-blue-400" />
                      <span className="text-xs text-blue-400">Verified</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-6 pb-2">
            <div className="flex gap-1 p-1 bg-gray-900/50 rounded-lg">
              {(['profile', 'stats', 'settings'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="px-6 pb-4 max-h-80 overflow-y-auto custom-scrollbar">
            {activeTab === 'profile' && (
              <div className="space-y-3">
                {/* Real Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                    <div className="flex items-center justify-between">
                      <BookOpen className="w-5 h-5 text-cyan-400" />
                      <span className="text-2xl font-bold text-white">{userStats.articlesRead.length}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Articles Read</p>
                  </div>
                  
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                    <div className="flex items-center justify-between">
                      <Cpu className="w-5 h-5 text-purple-400" />
                      <span className="text-2xl font-bold text-white">{userStats.toolsUsed.length}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Tools Used</p>
                  </div>
                  
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                    <div className="flex items-center justify-between">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-2xl font-bold text-white">{userStats.currentStreak}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Day Streak</p>
                  </div>
                  
                  <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                    <div className="flex items-center justify-between">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span className="text-2xl font-bold text-white">{unlockedAchievements}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Achievements</p>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="space-y-1 pt-2">
                  <Link href="/dashboard">
                    <button className="w-full px-3 py-2.5 rounded-lg flex items-center gap-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all group">
                      <BarChart3 className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                      <span className="text-sm font-medium">Dashboard</span>
                      <ChevronDown className="w-4 h-4 ml-auto -rotate-90 text-gray-600" />
                    </button>
                  </Link>
                  
                  <Link href="/profile/edit">
                    <button className="w-full px-3 py-2.5 rounded-lg flex items-center gap-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all group">
                      <User className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                      <span className="text-sm font-medium">Edit Profile</span>
                      <ChevronDown className="w-4 h-4 ml-auto -rotate-90 text-gray-600" />
                    </button>
                  </Link>
                  
                  <Link href="/saved">
                    <button className="w-full px-3 py-2.5 rounded-lg flex items-center gap-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all group">
                      <Heart className="w-4 h-4 text-gray-400 group-hover:text-pink-400" />
                      <span className="text-sm font-medium">Saved Articles</span>
                      {userStats.savedArticles.length > 0 && (
                        <span className="ml-auto px-2 py-0.5 rounded-full bg-pink-500/20 text-xs text-pink-400">
                          {userStats.savedArticles.length}
                        </span>
                      )}
                    </button>
                  </Link>
                  
                  <Link href="/achievements">
                    <button className="w-full px-3 py-2.5 rounded-lg flex items-center gap-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all group">
                      <Award className="w-4 h-4 text-gray-400 group-hover:text-yellow-400" />
                      <span className="text-sm font-medium">Achievements</span>
                      {unlockedAchievements < userStats.achievements.length && (
                        <span className="ml-auto px-2 py-0.5 rounded-full bg-yellow-500/20 text-xs text-yellow-400">
                          {unlockedAchievements}/{userStats.achievements.length}
                        </span>
                      )}
                    </button>
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'stats' && (
              <div className="space-y-4">
                {/* Level & Points */}
                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-white">Level {userStats.level}</h4>
                    <span className="text-xs text-cyan-400">{userStats.totalPoints} points</span>
                  </div>
                  
                  {/* Level Progress Bar */}
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all"
                      style={{ width: `${levelProgress.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>{levelProgress.current} pts</span>
                    <span>{levelProgress.next} pts</span>
                  </div>
                </div>

                {/* Detailed Stats */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-900/30">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-gray-300">Days Active</span>
                    </div>
                    <span className="text-sm font-bold text-white">
                      {Object.keys(userStats.dailyVisits).length}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-900/30">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-300">Longest Streak</span>
                    </div>
                    <span className="text-sm font-bold text-white">{userStats.longestStreak} days</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-900/30">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">Global Rank</span>
                    </div>
                    <span className="text-sm font-bold text-white">#{globalRank.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-900/30">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-300">Time Spent</span>
                    </div>
                    <span className="text-sm font-bold text-white">
                      {Math.floor(userStats.totalTimeSpent / 60)} min
                    </span>
                  </div>
                </div>

                {/* Recent Achievements */}
                {unlockedAchievements > 0 && (
                  <div className="p-3 rounded-lg bg-gray-900/30">
                    <h4 className="text-xs text-gray-400 mb-2">Recent Achievements</h4>
                    <div className="space-y-2">
                      {userStats.achievements
                        .filter(a => a.unlockedAt)
                        .slice(-3)
                        .map((achievement) => (
                          <div key={achievement.id} className="flex items-center gap-2">
                            <Trophy className={`w-3 h-3 text-${achievement.color}-400`} />
                            <span className="text-xs text-white">{achievement.name}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-1">
                <Link href="/settings/account">
                  <button className="w-full px-3 py-2.5 rounded-lg flex items-center gap-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all group">
                    <Settings className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                    <span className="text-sm font-medium">Account Settings</span>
                    <ChevronDown className="w-4 h-4 ml-auto -rotate-90 text-gray-600" />
                  </button>
                </Link>
                
                <Link href="/settings/privacy">
                  <button className="w-full px-3 py-2.5 rounded-lg flex items-center gap-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all group">
                    <Shield className="w-4 h-4 text-gray-400 group-hover:text-green-400" />
                    <span className="text-sm font-medium">Privacy & Security</span>
                    <ChevronDown className="w-4 h-4 ml-auto -rotate-90 text-gray-600" />
                  </button>
                </Link>
                
                <Link href="/settings/notifications">
                  <button className="w-full px-3 py-2.5 rounded-lg flex items-center gap-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all group">
                    <Bell className="w-4 h-4 text-gray-400 group-hover:text-yellow-400" />
                    <span className="text-sm font-medium">Notifications</span>
                    {notifications && <div className="w-2 h-2 bg-green-500 rounded-full ml-auto mr-3" />}
                  </button>
                </Link>
                
                <div className="border-t border-gray-800 my-2" />
                
                <Link href="/help">
                  <button className="w-full px-3 py-2.5 rounded-lg flex items-center gap-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all group">
                    <HelpCircle className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                    <span className="text-sm font-medium">Help & Support</span>
                    <ChevronDown className="w-4 h-4 ml-auto -rotate-90 text-gray-600" />
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t border-gray-800 space-y-3">
            {/* Subscription Upgrade */}
            {userStats.subscriptionType !== 'premium' && (
              <Link href="/subscribe">
                <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <Crown className="w-4 h-4" />
                  Upgrade to Premium
                  <Gift className="w-4 h-4" />
                </button>
              </Link>
            )}
            
            {/* Sign Out */}
            <button
              onClick={() => {
                setIsOpen(false)
                signOut({ callbackUrl: '/' })
              }}
              className="w-full px-4 py-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 font-medium text-sm hover:bg-red-500/20 transition-colors flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #a855f7);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #9333ea);
        }
      `}</style>
    </div>
  )
}

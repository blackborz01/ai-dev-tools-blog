// User stats management with localStorage for persistence
// In production, this should use a database

export interface UserStats {
  userId: string
  email: string
  articlesRead: string[] // Array of article slugs
  toolsUsed: string[] // Array of tool IDs
  lastVisit: string
  firstVisit: string
  dailyVisits: { [date: string]: number } // Track visits per day
  achievements: Achievement[]
  savedArticles: string[]
  totalTimeSpent: number // in seconds
  currentStreak: number
  longestStreak: number
  lastStreakDate: string
  totalPoints: number
  level: number
  subscriptionType: 'free' | 'pro' | 'premium'
}

export interface Achievement {
  id: string
  name: string
  description: string
  unlockedAt?: string
  progress?: number
  icon: string
  color: string
}

const STORAGE_KEY = 'boostdevspeed_user_stats'

// Initialize user stats
export function initializeUserStats(email: string): UserStats {
  const today = new Date().toISOString().split('T')[0]
  
  return {
    userId: email.replace('@', '_').replace('.', '_'),
    email,
    articlesRead: [],
    toolsUsed: [],
    lastVisit: new Date().toISOString(),
    firstVisit: new Date().toISOString(),
    dailyVisits: { [today]: 1 },
    achievements: getInitialAchievements(),
    savedArticles: [],
    totalTimeSpent: 0,
    currentStreak: 1,
    longestStreak: 1,
    lastStreakDate: today,
    totalPoints: 10, // Welcome bonus
    level: 1,
    subscriptionType: 'free'
  }
}

// Get initial achievements (all locked)
function getInitialAchievements(): Achievement[] {
  return [
    { id: 'first_visit', name: 'Welcome!', description: 'Join the community', icon: 'Star', color: 'yellow', unlockedAt: new Date().toISOString() },
    { id: 'first_article', name: 'First Read', description: 'Read your first article', icon: 'BookOpen', color: 'cyan', progress: 0 },
    { id: 'power_reader', name: 'Power Reader', description: 'Read 10 articles', icon: 'BookOpen', color: 'cyan', progress: 0 },
    { id: 'tool_explorer', name: 'Tool Explorer', description: 'Try 5 different tools', icon: 'Cpu', color: 'purple', progress: 0 },
    { id: 'week_streak', name: 'Week Warrior', description: '7 day visit streak', icon: 'Zap', color: 'orange', progress: 0 },
    { id: 'month_streak', name: 'Dedicated', description: '30 day visit streak', icon: 'Trophy', color: 'gold', progress: 0 },
  ]
}

// Get user stats from localStorage
export function getUserStats(email: string): UserStats {
  if (typeof window === 'undefined') return initializeUserStats(email)
  
  const stored = localStorage.getItem(`${STORAGE_KEY}_${email}`)
  if (stored) {
    const stats = JSON.parse(stored) as UserStats
    updateDailyVisit(stats)
    return stats
  }
  
  const newStats = initializeUserStats(email)
  saveUserStats(newStats)
  return newStats
}

// Save user stats to localStorage
export function saveUserStats(stats: UserStats): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(`${STORAGE_KEY}_${stats.email}`, JSON.stringify(stats))
}

// Update daily visit and streak
function updateDailyVisit(stats: UserStats): void {
  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
  
  // Update visit count for today
  if (!stats.dailyVisits[today]) {
    stats.dailyVisits[today] = 0
  }
  stats.dailyVisits[today]++
  
  // Update streak
  if (stats.lastStreakDate === yesterday) {
    stats.currentStreak++
    stats.lastStreakDate = today
  } else if (stats.lastStreakDate !== today) {
    stats.currentStreak = 1
    stats.lastStreakDate = today
  }
  
  // Update longest streak
  if (stats.currentStreak > stats.longestStreak) {
    stats.longestStreak = stats.currentStreak
  }
  
  // Check streak achievements
  if (stats.currentStreak >= 7) {
    const achievement = stats.achievements.find(a => a.id === 'week_streak')
    if (achievement && !achievement.unlockedAt) {
      achievement.unlockedAt = new Date().toISOString()
      achievement.progress = 100
      stats.totalPoints += 50
    }
  }
  
  if (stats.currentStreak >= 30) {
    const achievement = stats.achievements.find(a => a.id === 'month_streak')
    if (achievement && !achievement.unlockedAt) {
      achievement.unlockedAt = new Date().toISOString()
      achievement.progress = 100
      stats.totalPoints += 200
    }
  }
  
  stats.lastVisit = new Date().toISOString()
  saveUserStats(stats)
}

// Track article read
export function trackArticleRead(email: string, articleSlug: string): void {
  const stats = getUserStats(email)
  
  if (!stats.articlesRead.includes(articleSlug)) {
    stats.articlesRead.push(articleSlug)
    stats.totalPoints += 5
    
    // Update achievements
    if (stats.articlesRead.length === 1) {
      const achievement = stats.achievements.find(a => a.id === 'first_article')
      if (achievement) {
        achievement.unlockedAt = new Date().toISOString()
        achievement.progress = 100
        stats.totalPoints += 20
      }
    }
    
    if (stats.articlesRead.length >= 10) {
      const achievement = stats.achievements.find(a => a.id === 'power_reader')
      if (achievement && !achievement.unlockedAt) {
        achievement.unlockedAt = new Date().toISOString()
        achievement.progress = 100
        stats.totalPoints += 100
      }
    } else {
      const achievement = stats.achievements.find(a => a.id === 'power_reader')
      if (achievement) {
        achievement.progress = (stats.articlesRead.length / 10) * 100
      }
    }
    
    // Update level
    updateUserLevel(stats)
    saveUserStats(stats)
  }
}

// Track tool usage
export function trackToolUsage(email: string, toolId: string): void {
  const stats = getUserStats(email)
  
  if (!stats.toolsUsed.includes(toolId)) {
    stats.toolsUsed.push(toolId)
    stats.totalPoints += 10
    
    // Update achievement
    if (stats.toolsUsed.length >= 5) {
      const achievement = stats.achievements.find(a => a.id === 'tool_explorer')
      if (achievement && !achievement.unlockedAt) {
        achievement.unlockedAt = new Date().toISOString()
        achievement.progress = 100
        stats.totalPoints += 75
      }
    } else {
      const achievement = stats.achievements.find(a => a.id === 'tool_explorer')
      if (achievement) {
        achievement.progress = (stats.toolsUsed.length / 5) * 100
      }
    }
    
    updateUserLevel(stats)
    saveUserStats(stats)
  }
}

// Save/unsave article
export function toggleSaveArticle(email: string, articleSlug: string): boolean {
  const stats = getUserStats(email)
  
  const index = stats.savedArticles.indexOf(articleSlug)
  if (index > -1) {
    stats.savedArticles.splice(index, 1)
    saveUserStats(stats)
    return false
  } else {
    stats.savedArticles.push(articleSlug)
    stats.totalPoints += 2
    updateUserLevel(stats)
    saveUserStats(stats)
    return true
  }
}

// Update user level based on points
function updateUserLevel(stats: UserStats): void {
  const levels = [
    { level: 1, points: 0 },
    { level: 2, points: 50 },
    { level: 3, points: 150 },
    { level: 4, points: 300 },
    { level: 5, points: 500 },
    { level: 6, points: 750 },
    { level: 7, points: 1000 },
    { level: 8, points: 1500 },
    { level: 9, points: 2000 },
    { level: 10, points: 3000 }
  ]
  
  for (let i = levels.length - 1; i >= 0; i--) {
    if (stats.totalPoints >= levels[i].points) {
      stats.level = levels[i].level
      break
    }
  }
}

// Get level progress
export function getLevelProgress(stats: UserStats): { current: number; next: number; progress: number } {
  const levels = [
    { level: 1, points: 0 },
    { level: 2, points: 50 },
    { level: 3, points: 150 },
    { level: 4, points: 300 },
    { level: 5, points: 500 },
    { level: 6, points: 750 },
    { level: 7, points: 1000 },
    { level: 8, points: 1500 },
    { level: 9, points: 2000 },
    { level: 10, points: 3000 }
  ]
  
  const currentLevel = levels.find(l => l.level === stats.level)!
  const nextLevel = levels.find(l => l.level === stats.level + 1)
  
  if (!nextLevel) {
    return { current: currentLevel.points, next: currentLevel.points, progress: 100 }
  }
  
  const progress = ((stats.totalPoints - currentLevel.points) / (nextLevel.points - currentLevel.points)) * 100
  
  return {
    current: currentLevel.points,
    next: nextLevel.points,
    progress: Math.min(100, Math.max(0, progress))
  }
}

// Get global rank (simulated based on points)
export function getGlobalRank(points: number): number {
  // Simulate ranking - in production, this would query a database
  const baseRank = 50000
  const rankReduction = Math.floor(points / 10)
  return Math.max(1, baseRank - rankReduction)
}

// Track time spent (call on page unload)
export function trackTimeSpent(email: string, seconds: number): void {
  const stats = getUserStats(email)
  stats.totalTimeSpent += seconds
  stats.totalPoints += Math.floor(seconds / 60) // 1 point per minute
  updateUserLevel(stats)
  saveUserStats(stats)
}

// Get formatted member since date
export function getMemberSince(stats: UserStats): string {
  const date = new Date(stats.firstVisit)
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()
  return `${month} ${year}`
}

// Clear all stats (for testing)
export function clearUserStats(email: string): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(`${STORAGE_KEY}_${email}`)
}

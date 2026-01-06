import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

export function formatTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function formatDateTime(date: Date | string): string {
  return `${formatDate(date)} às ${formatTime(date)}`
}

export function getTimeOfDay(): 'morning' | 'afternoon' | 'evening' | 'night' {
  const hour = new Date().getHours()
  
  if (hour >= 5 && hour < 12) return 'morning'
  if (hour >= 12 && hour < 18) return 'afternoon'
  if (hour >= 18 && hour < 22) return 'evening'
  return 'night'
}

export function getGreeting(): string {
  const timeOfDay = getTimeOfDay()
  
  const greetings = {
    morning: 'Bom dia',
    afternoon: 'Boa tarde',
    evening: 'Boa noite',
    night: 'Boa noite'
  }
  
  return greetings[timeOfDay]
}

export function calculateStreak(dates: Date[]): number {
  if (dates.length === 0) return 0
  
  const sortedDates = dates.sort((a, b) => b.getTime() - a.getTime())
  let streak = 1
  
  for (let i = 0; i < sortedDates.length - 1; i++) {
    const current = new Date(sortedDates[i])
    const next = new Date(sortedDates[i + 1])
    
    current.setHours(0, 0, 0, 0)
    next.setHours(0, 0, 0, 0)
    
    const diffDays = Math.floor((current.getTime() - next.getTime()) / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) {
      streak++
    } else {
      break
    }
  }
  
  return streak
}

export function calculateAverageSleepHours(sleepData: { hours: number }[]): number {
  if (sleepData.length === 0) return 0
  
  const total = sleepData.reduce((sum, data) => sum + data.hours, 0)
  return Math.round((total / sleepData.length) * 10) / 10
}

export function getMoodEmoji(mood: string): string {
  const moodEmojis: Record<string, string> = {
    happy: '😊',
    calm: '😌',
    sad: '😔',
    anxious: '😰',
    tired: '😫'
  }
  
  return moodEmojis[mood] || '😐'
}

export function getSleepQualityLabel(quality: number): string {
  if (quality >= 4) return 'Excelente'
  if (quality === 3) return 'Boa'
  if (quality === 2) return 'Regular'
  return 'Ruim'
}

export function getProgressPercentage(current: number, goal: number): number {
  return Math.min(Math.round((current / goal) * 100), 100)
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`
  
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  
  if (mins === 0) return `${hours}h`
  return `${hours}h ${mins}min`
}

export function getDayOfWeek(date: Date): string {
  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  return days[date.getDay()]
}

export function getWeekDates(): Date[] {
  const today = new Date()
  const dates: Date[] = []
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    dates.push(date)
  }
  
  return dates
}

export function isToday(date: Date): boolean {
  const today = new Date()
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

export function generateRandomTip(tips: string[]): string {
  return tips[Math.floor(Math.random() * tips.length)]
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePassword(password: string): {
  valid: boolean
  errors: string[]
} {
  const errors: string[] = []
  
  if (password.length < 8) {
    errors.push('A senha deve ter pelo menos 8 caracteres')
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('A senha deve conter pelo menos uma letra maiúscula')
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('A senha deve conter pelo menos uma letra minúscula')
  }
  
  if (!/[0-9]/.test(password)) {
    errors.push('A senha deve conter pelo menos um número')
  }
  
  return {
    valid: errors.length === 0,
    errors
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
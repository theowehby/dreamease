import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export type CheckIn = {
  id: string
  user_id: string
  mood: string
  sleep_quality: number
  notes: string
  created_at: string
}

export type Session = {
  id: string
  user_id: string
  type: 'breathing' | 'sound' | 'story' | 'technique'
  duration: number
  completed: boolean
  created_at: string
}

export type UserProfile = {
  id: string
  name: string
  email: string
  goal: string
  streak: number
  total_sessions: number
  avg_sleep_hours: number
  created_at: string
  updated_at: string
}

// Helper functions
export async function saveCheckIn(data: Omit<CheckIn, 'id' | 'created_at'>) {
  const { data: checkIn, error } = await supabase
    .from('check_ins')
    .insert(data)
    .select()
    .single()

  if (error) throw error
  return checkIn
}

export async function saveSession(data: Omit<Session, 'id' | 'created_at'>) {
  const { data: session, error } = await supabase
    .from('sessions')
    .insert(data)
    .select()
    .single()

  if (error) throw error
  return session
}

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}

export async function updateUserProfile(userId: string, updates: Partial<UserProfile>) {
  const { data, error } = await supabase
    .from('user_profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getWeeklyStats(userId: string) {
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

  const { data, error } = await supabase
    .from('check_ins')
    .select('*')
    .eq('user_id', userId)
    .gte('created_at', oneWeekAgo.toISOString())
    .order('created_at', { ascending: true })

  if (error) throw error
  return data
}

export async function getUserSessions(userId: string, limit = 10) {
  const { data, error } = await supabase
    .from('sessions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw error
  return data
}

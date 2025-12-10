import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})

// Types para o banco de dados
export type Profile = {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  subscription_status: 'free' | 'monthly' | 'annual'
  subscription_expires_at?: string
  created_at: string
  updated_at: string
}

export type Testimonial = {
  id: string
  user_id: string
  content: string
  weight_lost: number
  rating: number
  image_before?: string
  image_after?: string
  created_at: string
  approved: boolean
}

export type Article = {
  id: string
  title: string
  slug: string
  content: string
  category: 'workout' | 'nutrition' | 'wellness' | 'news'
  image_url: string
  author: string
  published_at: string
  featured: boolean
}

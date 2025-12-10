'use client'

import { useState } from 'react'
import { Camera, Edit2, Award, TrendingUp, Calendar, Target, Dumbbell, Heart, Users, Share2, Settings } from 'lucide-react'
import Navbar from '@/components/custom/navbar'
import Link from 'next/link'

interface Achievement {
  id: number
  title: string
  description: string
  icon: string
  unlocked: boolean
  progress?: number
  total?: number
}

export default function PerfilPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userName, setUserName] = useState("Maria Silva")
  const [userBio, setUserBio] = useState("Transformando minha vida um treino por vez! 💪")

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Primeira Semana",
      description: "Complete 7 dias consecutivos",
      icon: "🔥",
      unlocked: true
    },
    {
      id: 2,
      title: "Guerreiro(a)",
      description: "Complete 30 dias de treino",
      icon: "⚔️",
      unlocked: true
    },
    {
      id: 3,
      title: "Maratonista",
      description: "Complete 100 treinos",
      icon: "🏃",
      unlocked: false,
      progress: 67,
      total: 100
    },
    {
      id: 4,
      title: "Influencer Fit",
      description: "Receba 1000 curtidas",
      icon: "⭐",
      unlocked: false,
      progress: 524,
      total: 1000
    },
    {
      id: 5,
      title: "Mentor(a)",
      description: "Ajude 10 pessoas",
      icon: "🎓",
      unlocked: true
    },
    {
      id: 6,
      title: "Transformação Total",
      description: "Atinja sua meta de peso",
      icon: "🏆",
      unlocked: false,
      progress: 8,
      total: 12
    }
  ]

  const stats = [
    { label: "Treinos Completos", value: "67", icon: Dumbbell, color: "text-[#C4A574]" },
    { label: "Dias Consecutivos", value: "23", icon: Calendar, color: "text-green-500" },
    { label: "Peso Perdido", value: "8kg", icon: TrendingUp, color: "text-blue-500" },
    { label: "Curtidas Recebidas", value: "524", icon: Heart, color: "text-red-500" }
  ]

  const recentPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
      likes: 124,
      comments: 18
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop",
      likes: 98,
      comments: 12
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
      likes: 156,
      comments: 24
    }
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="mb-8 bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              {/* Profile Picture */}
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=200&h=200&fit=crop&q=80"
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#C4A574]"
                />
                <button className="absolute bottom-0 right-0 p-3 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-full hover:scale-110 transition-transform">
                  <Camera size={20} />
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-4 py-2 bg-white/5 border border-[#8B6F47]/20 rounded-xl text-white focus:outline-none focus:border-[#C4A574]"
                    />
                    <textarea
                      value={userBio}
                      onChange={(e) => setUserBio(e.target.value)}
                      className="w-full px-4 py-2 bg-white/5 border border-[#8B6F47]/20 rounded-xl text-white focus:outline-none focus:border-[#C4A574] resize-none"
                      rows={2}
                    />
                    <div className="flex gap-3">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-6 py-2 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-full font-semibold hover:shadow-xl transition-all"
                      >
                        Salvar
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-6 py-2 border border-[#8B6F47]/40 rounded-full font-semibold hover:bg-white/5 transition-colors"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-4 mb-2">
                      <h1 className="text-3xl font-bold">{userName}</h1>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                      >
                        <Edit2 size={20} />
                      </button>
                    </div>
                    <p className="text-gray-300 mb-4">{userBio}</p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/comunidade"
                        className="px-6 py-2 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-full font-semibold hover:shadow-xl transition-all"
                      >
                        Ver Comunidade
                      </Link>
                      <button className="px-6 py-2 border border-[#8B6F47]/40 rounded-full font-semibold hover:bg-white/5 transition-colors flex items-center gap-2">
                        <Share2 size={18} />
                        Compartilhar Perfil
                      </button>
                      <Link
                        href="/configuracoes"
                        className="px-6 py-2 border border-[#8B6F47]/40 rounded-full font-semibold hover:bg-white/5 transition-colors flex items-center gap-2"
                      >
                        <Settings size={18} />
                        Configurações
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl hover:bg-white/10 transition-all"
              >
                <stat.icon className={`${stat.color} mb-3`} size={32} />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-[#C4A574]" size={32} />
              <h2 className="text-3xl font-bold">Conquistas</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-6 rounded-2xl border transition-all ${
                    achievement.unlocked
                      ? 'bg-gradient-to-br from-[#8B6F47]/20 to-[#C4A574]/20 border-[#C4A574] hover:scale-105'
                      : 'bg-white/5 border-[#8B6F47]/20 opacity-60'
                  }`}
                >
                  <div className="text-5xl mb-3">{achievement.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{achievement.description}</p>
                  
                  {!achievement.unlocked && achievement.progress && achievement.total && (
                    <div>
                      <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>Progresso</span>
                        <span>{achievement.progress}/{achievement.total}</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#8B6F47] to-[#C4A574] h-2 rounded-full transition-all"
                          style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                  
                  {achievement.unlocked && (
                    <div className="flex items-center gap-2 text-[#C4A574] font-semibold">
                      <Award size={18} />
                      Desbloqueada!
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-[#C4A574]" size={32} />
              <h2 className="text-3xl font-bold">Minhas Publicações</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <Heart size={24} />
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <Users size={24} />
                      {post.comments}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/comunidade"
              className="block mt-6 p-4 text-center border-2 border-dashed border-[#8B6F47]/40 rounded-2xl text-gray-400 hover:border-[#C4A574] hover:text-[#C4A574] transition-all"
            >
              Ver todas as publicações
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

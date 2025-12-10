'use client'

import { Users, MessageCircle, Heart, Share2, TrendingUp, Award } from 'lucide-react'

export default function ComunidadePage() {
  const posts = [
    {
      id: 1,
      author: 'Maria Silva',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      time: '2h atrás',
      content: 'Consegui completar meu primeiro mês de treinos! Perdi 3kg e estou me sentindo incrível! 💪',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
      likes: 124,
      comments: 18
    },
    {
      id: 2,
      author: 'João Santos',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      time: '5h atrás',
      content: 'Dica: Experimentem adicionar canela no shake pós-treino. Fica delicioso e ajuda no metabolismo!',
      likes: 89,
      comments: 12
    },
    {
      id: 3,
      author: 'Ana Costa',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      time: '1 dia atrás',
      content: 'Antes e depois de 6 meses! Não desistam, vale muito a pena! 🔥',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      likes: 256,
      comments: 34
    }
  ]

  const challenges = [
    {
      id: 1,
      title: 'Desafio 30 Dias de Treino',
      participants: 1234,
      daysLeft: 15,
      progress: 50
    },
    {
      id: 2,
      title: 'Desafio Hidratação',
      participants: 892,
      daysLeft: 7,
      progress: 75
    },
    {
      id: 3,
      title: 'Desafio 10K Passos',
      participants: 2156,
      daysLeft: 22,
      progress: 30
    }
  ]

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Comunidade Ativa</h1>
        <p className="text-gray-400">Conecte-se com pessoas na mesma jornada</p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-xl p-4 text-center">
          <Users size={24} className="mx-auto mb-2 text-[#C4A574]" />
          <p className="text-2xl font-bold mb-1">500K+</p>
          <p className="text-sm text-gray-400">Membros</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-xl p-4 text-center">
          <MessageCircle size={24} className="mx-auto mb-2 text-[#C4A574]" />
          <p className="text-2xl font-bold mb-1">2.5M</p>
          <p className="text-sm text-gray-400">Posts</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-xl p-4 text-center">
          <TrendingUp size={24} className="mx-auto mb-2 text-[#C4A574]" />
          <p className="text-2xl font-bold mb-1">1.2M</p>
          <p className="text-sm text-gray-400">Transformações</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-xl p-4 text-center">
          <Award size={24} className="mx-auto mb-2 text-[#C4A574]" />
          <p className="text-2xl font-bold mb-1">50K</p>
          <p className="text-sm text-gray-400">Desafios</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6">
            <textarea
              placeholder="Compartilhe sua jornada..."
              className="w-full p-4 bg-white/5 border border-[#8B6F47]/30 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C4A574] transition-colors resize-none"
              rows={3}
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  📷
                </button>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  🎥
                </button>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  😊
                </button>
              </div>
              <button className="px-6 py-2 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all">
                Publicar
              </button>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              {/* Author */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C4A574]"
                />
                <div className="flex-1">
                  <h4 className="font-bold">{post.author}</h4>
                  <p className="text-sm text-gray-400">{post.time}</p>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-4">{post.content}</p>

              {/* Image */}
              {post.image && (
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-full h-auto"
                  />
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center gap-6 pt-4 border-t border-[#8B6F47]/20">
                <button className="flex items-center gap-2 text-gray-400 hover:text-[#C4A574] transition-colors">
                  <Heart size={20} />
                  <span className="font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-[#C4A574] transition-colors">
                  <MessageCircle size={20} />
                  <span className="font-medium">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-[#C4A574] transition-colors ml-auto">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Active Challenges */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Desafios Ativos</h3>
            <div className="space-y-4">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="p-4 bg-white/5 rounded-xl">
                  <h4 className="font-bold mb-2">{challenge.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Users size={14} />
                    <span>{challenge.participants.toLocaleString()} participantes</span>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-400">Progresso</span>
                      <span className="font-bold">{challenge.progress}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-full"
                        style={{ width: `${challenge.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">{challenge.daysLeft} dias restantes</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all">
              Ver Todos
            </button>
          </div>

          {/* Top Members */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Top Membros</h3>
            <div className="space-y-3">
              {[
                { name: 'Carlos Mendes', points: 2450, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
                { name: 'Juliana Lima', points: 2180, avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop' },
                { name: 'Pedro Alves', points: 1950, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' }
              ].map((member, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{member.name}</p>
                    <p className="text-xs text-gray-400">{member.points} pontos</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

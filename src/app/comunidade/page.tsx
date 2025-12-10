'use client'

import { useState } from 'react'
import { Heart, MessageCircle, Share2, Upload, Image as ImageIcon, X, Camera, Search, Filter, TrendingUp, Clock, Award } from 'lucide-react'
import Navbar from '@/components/custom/navbar'

interface Post {
  id: number
  userName: string
  userImage: string
  timeAgo: string
  text: string
  image?: string
  likes: number
  comments: number
  isLiked: boolean
  category: 'progresso' | 'dica' | 'motivacao'
}

export default function ComunidadePage() {
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [postText, setPostText] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState<'todos' | 'progresso' | 'dica' | 'motivacao'>('todos')
  const [sortBy, setSortBy] = useState<'recentes' | 'populares'>('recentes')
  
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      userName: "Maria Silva",
      userImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=100&h=100&fit=crop&q=80",
      timeAgo: "2h atrás",
      text: "Consegui completar meu primeiro mês de treinos! Perdi 3kg e estou me sentindo incrível! 💪",
      likes: 124,
      comments: 18,
      isLiked: false,
      category: 'progresso'
    },
    {
      id: 2,
      userName: "Ana Costa",
      userImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=100&h=100&fit=crop&q=80",
      timeAgo: "5h atrás",
      text: "Antes e depois de 6 meses! Não desistam, vale muito a pena! 🔥",
      likes: 256,
      comments: 34,
      isLiked: false,
      category: 'progresso'
    },
    {
      id: 3,
      userName: "Juliana Oliveira",
      userImage: "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=100&h=100&fit=crop&q=80",
      timeAgo: "1d atrás",
      text: "Treino de pernas concluído! Cada dia mais forte 💪✨",
      likes: 189,
      comments: 22,
      isLiked: false,
      category: 'motivacao'
    },
    {
      id: 4,
      userName: "Carlos Mendes",
      userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      timeAgo: "2d atrás",
      text: "Dica: Beba água antes, durante e depois do treino! Faz toda diferença na performance 💧",
      likes: 98,
      comments: 12,
      isLiked: false,
      category: 'dica'
    }
  ])

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ))
  }

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePost = () => {
    if (selectedImage && postText) {
      const newPost: Post = {
        id: posts.length + 1,
        userName: "Você",
        userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
        timeAgo: "Agora",
        text: postText,
        image: selectedImage,
        likes: 0,
        comments: 0,
        isLiked: false,
        category: 'progresso'
      }
      setPosts([newPost, ...posts])
      setShowUploadModal(false)
      setSelectedImage(null)
      setPostText('')
    }
  }

  // Filtrar e ordenar posts
  const filteredPosts = posts
    .filter(post => {
      const matchesSearch = post.text.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.userName.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = filterCategory === 'todos' || post.category === filterCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === 'populares') {
        return b.likes - a.likes
      }
      return 0 // mantém ordem original (recentes)
    })

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Comunidade
              <span className="block text-[#C4A574]">FITPULSE</span>
            </h1>
            <p className="text-xl text-gray-300">
              Compartilhe sua jornada e inspire outras pessoas
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-6 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar posts, pessoas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-[#8B6F47]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C4A574] transition-colors"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {/* Category Filters */}
              <button
                onClick={() => setFilterCategory('todos')}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  filterCategory === 'todos'
                    ? 'bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white'
                    : 'bg-white/5 border border-[#8B6F47]/20 text-gray-300 hover:bg-white/10'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setFilterCategory('progresso')}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  filterCategory === 'progresso'
                    ? 'bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white'
                    : 'bg-white/5 border border-[#8B6F47]/20 text-gray-300 hover:bg-white/10'
                }`}
              >
                📊 Progresso
              </button>
              <button
                onClick={() => setFilterCategory('dica')}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  filterCategory === 'dica'
                    ? 'bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white'
                    : 'bg-white/5 border border-[#8B6F47]/20 text-gray-300 hover:bg-white/10'
                }`}
              >
                💡 Dicas
              </button>
              <button
                onClick={() => setFilterCategory('motivacao')}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  filterCategory === 'motivacao'
                    ? 'bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white'
                    : 'bg-white/5 border border-[#8B6F47]/20 text-gray-300 hover:bg-white/10'
                }`}
              >
                🔥 Motivação
              </button>

              {/* Sort Options */}
              <div className="ml-auto flex gap-2">
                <button
                  onClick={() => setSortBy('recentes')}
                  className={`px-4 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
                    sortBy === 'recentes'
                      ? 'bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white'
                      : 'bg-white/5 border border-[#8B6F47]/20 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Clock size={16} />
                  Recentes
                </button>
                <button
                  onClick={() => setSortBy('populares')}
                  className={`px-4 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
                    sortBy === 'populares'
                      ? 'bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white'
                      : 'bg-white/5 border border-[#8B6F47]/20 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <TrendingUp size={16} />
                  Populares
                </button>
              </div>
            </div>
          </div>

          {/* Upload Button */}
          <button
            onClick={() => setShowUploadModal(true)}
            className="w-full mb-8 p-6 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-2xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 font-bold text-lg"
          >
            <Camera size={24} />
            Compartilhar Meu Progresso
          </button>

          {/* Results Count */}
          {searchQuery && (
            <div className="mb-4 text-gray-400">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
            </div>
          )}

          {/* Posts Feed */}
          <div className="space-y-6">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">Nenhum post encontrado</p>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <div 
                  key={post.id}
                  className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
                >
                  {/* Post Header */}
                  <div className="p-4 flex items-center gap-3">
                    <img 
                      src={post.userImage}
                      alt={post.userName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#C4A574]"
                    />
                    <div className="flex-1">
                      <div className="font-bold">{post.userName}</div>
                      <div className="text-sm text-gray-400">{post.timeAgo}</div>
                    </div>
                    {/* Category Badge */}
                    <span className="px-3 py-1 bg-[#8B6F47]/20 border border-[#8B6F47]/30 rounded-full text-xs font-semibold text-[#C4A574]">
                      {post.category === 'progresso' && '📊 Progresso'}
                      {post.category === 'dica' && '💡 Dica'}
                      {post.category === 'motivacao' && '🔥 Motivação'}
                    </span>
                  </div>

                  {/* Post Text */}
                  <div className="px-4 pb-3">
                    <p className="text-gray-200">{post.text}</p>
                  </div>

                  {/* Post Image - Only show if exists */}
                  {post.image && (
                    <div className="w-full aspect-square bg-black/20">
                      <img 
                        src={post.image}
                        alt="Post"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="p-4 flex items-center gap-6">
                    <button 
                      onClick={() => handleLike(post.id)}
                      className="flex items-center gap-2 hover:scale-110 transition-transform"
                    >
                      <Heart 
                        size={24} 
                        className={post.isLiked ? "fill-red-500 text-red-500" : "text-gray-300"}
                      />
                      <span className={post.isLiked ? "text-red-500 font-semibold" : "text-gray-300"}>
                        {post.likes}
                      </span>
                    </button>

                    <button className="flex items-center gap-2 hover:scale-110 transition-transform">
                      <MessageCircle size={24} className="text-gray-300" />
                      <span className="text-gray-300">{post.comments}</span>
                    </button>

                    <button className="flex items-center gap-2 hover:scale-110 transition-transform ml-auto">
                      <Share2 size={24} className="text-gray-300" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1A1A1A] border border-[#8B6F47]/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-[#8B6F47]/20 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Compartilhar Progresso</h2>
              <button 
                onClick={() => {
                  setShowUploadModal(false)
                  setSelectedImage(null)
                  setPostText('')
                }}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Image Upload */}
              {!selectedImage ? (
                <label className="block">
                  <div className="border-2 border-dashed border-[#8B6F47]/40 rounded-2xl p-12 text-center cursor-pointer hover:border-[#C4A574] hover:bg-white/5 transition-all">
                    <ImageIcon size={48} className="mx-auto mb-4 text-[#C4A574]" />
                    <p className="text-lg font-semibold mb-2">Clique para selecionar uma foto</p>
                    <p className="text-sm text-gray-400">PNG, JPG até 10MB</p>
                  </div>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative">
                  <img 
                    src={selectedImage}
                    alt="Preview"
                    className="w-full rounded-2xl"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}

              {/* Text Input */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Conte sua história
                </label>
                <textarea
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  placeholder="Compartilhe sua conquista, dificuldades superadas ou dicas..."
                  className="w-full p-4 bg-white/5 border border-[#8B6F47]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C4A574] transition-colors resize-none"
                  rows={4}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowUploadModal(false)
                    setSelectedImage(null)
                    setPostText('')
                  }}
                  className="flex-1 py-3 border border-[#8B6F47]/40 rounded-full font-semibold hover:bg-white/5 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handlePost}
                  disabled={!selectedImage || !postText}
                  className="flex-1 py-3 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-full font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Publicar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

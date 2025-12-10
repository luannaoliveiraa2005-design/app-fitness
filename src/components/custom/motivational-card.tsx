'use client'

import { useState } from 'react'
import { Heart, Share2, Bookmark } from 'lucide-react'

interface MotivationalCardProps {
  message: string
  author?: string
  gradient?: string
}

export default function MotivationalCard({ 
  message, 
  author = 'FITPULSE Coach',
  gradient = 'from-purple-500 to-pink-500'
}: MotivationalCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100) + 50)

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setIsLiked(!isLiked)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Mensagem Motivacional',
        text: message,
      })
    }
  }

  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-8 shadow-2xl relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative">
        <div className="mb-6">
          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
            "{message}"
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-white/80 font-medium">— {author}</p>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm transition-all ${
                isLiked 
                  ? 'bg-white/30 scale-110' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <Heart 
                size={20} 
                className={`transition-all ${isLiked ? 'fill-white text-white' : 'text-white'}`}
              />
              <span className="text-white font-medium">{likes}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
            >
              <Share2 size={20} className="text-white" />
            </button>

            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                isSaved 
                  ? 'bg-white/30' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <Bookmark 
                size={20} 
                className={`transition-all ${isSaved ? 'fill-white text-white' : 'text-white'}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

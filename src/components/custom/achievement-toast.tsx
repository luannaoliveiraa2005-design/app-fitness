'use client'

import { useState, useEffect } from 'react'
import { Trophy, X, Sparkles } from 'lucide-react'

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
}

interface AchievementToastProps {
  achievement: Achievement | null
  onClose: () => void
}

export default function AchievementToast({ achievement, onClose }: AchievementToastProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (achievement) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(onClose, 300)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [achievement, onClose])

  if (!achievement) return null

  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-6 shadow-2xl shadow-yellow-500/20 min-w-[320px] relative overflow-hidden">
        {/* Sparkles Background */}
        <div className="absolute inset-0 overflow-hidden">
          <Sparkles className="absolute top-2 left-2 text-yellow-400 animate-pulse" size={16} />
          <Sparkles className="absolute bottom-2 right-2 text-orange-400 animate-pulse delay-75" size={16} />
          <Sparkles className="absolute top-1/2 right-4 text-yellow-300 animate-pulse delay-150" size={12} />
        </div>

        {/* Content */}
        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0 animate-bounce">
              <Trophy size={32} className="text-white" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-bold text-yellow-400">Nova Conquista!</h4>
                <button
                  onClick={() => {
                    setIsVisible(false)
                    setTimeout(onClose, 300)
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <p className="font-bold mb-1">{achievement.title}</p>
              <p className="text-sm text-gray-400">{achievement.description}</p>
            </div>
          </div>

          {/* Progress Bar Animation */}
          <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 animate-progress-bar" />
          </div>
        </div>
      </div>
    </div>
  )
}

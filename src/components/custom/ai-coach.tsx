'use client'

import { useState, useEffect } from 'react'
import { Sparkles, X } from 'lucide-react'
import { getMotivationalMessage } from '@/lib/ai-coach'

type AICoachProps = {
  context?: {
    hasWorkedOutToday?: boolean
    streak?: number
    progressPercentage?: number
    lastActivity?: string
  }
  showOnMount?: boolean
}

export default function AICoach({ context = {}, showOnMount = true }: AICoachProps) {
  const [isVisible, setIsVisible] = useState(showOnMount)
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Gerar mensagem motivacional baseada no contexto
    const motivationalMessage = getMotivationalMessage(context)
    setMessage(motivationalMessage)
  }, [context])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-gradient-to-br from-[#8B6F47] to-[#C4A574] rounded-2xl p-6 shadow-2xl border border-[#C4A574]/30">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Seu Coach IA</h3>
              <p className="text-white/80 text-sm">VITALIS</p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Message */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <p className="text-white leading-relaxed">{message}</p>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => {
              const newMessage = getMotivationalMessage(context)
              setMessage(newMessage)
            }}
            className="text-sm text-white/80 hover:text-white transition-colors font-medium"
          >
            ✨ Nova mensagem
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-white/60">Online</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente para mensagens inline no dashboard
export function AICoachInline({ message }: { message: string }) {
  return (
    <div className="bg-gradient-to-br from-[#8B6F47]/20 to-[#C4A574]/20 border border-[#8B6F47]/30 rounded-2xl p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center flex-shrink-0">
          <Sparkles size={24} className="text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-white">Seu Coach IA</h3>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          <p className="text-gray-300 leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  )
}

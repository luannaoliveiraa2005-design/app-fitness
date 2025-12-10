'use client'

import { useState, useEffect } from 'react'
import { Clock, Play, Pause, RotateCcw } from 'lucide-react'

export default function FastingTimer() {
  const [isActive, setIsActive] = useState(false)
  const [timeLeft, setTimeLeft] = useState(16 * 60 * 60) // 16 horas em segundos
  const [totalTime] = useState(16 * 60 * 60)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsActive(false)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timeLeft])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const progress = ((totalTime - timeLeft) / totalTime) * 100

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  const handleReset = () => {
    setIsActive(false)
    setTimeLeft(totalTime)
  }

  return (
    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <Clock size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Jejum Intermitente</h3>
          <p className="text-sm text-gray-400">Protocolo 16:8</p>
        </div>
      </div>

      {/* Circular Progress */}
      <div className="relative w-64 h-64 mx-auto mb-8">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-white/10"
          />
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 120}`}
            strokeDashoffset={`${2 * Math.PI * 120 * (1 - progress / 100)}`}
            className="transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            {formatTime(timeLeft)}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            {timeLeft === 0 ? 'Jejum Completo!' : 'Tempo Restante'}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handleToggle}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-all active:scale-95 shadow-lg shadow-purple-500/50"
        >
          {isActive ? (
            <Pause size={28} className="text-white" />
          ) : (
            <Play size={28} className="text-white ml-1" />
          )}
        </button>
        
        <button
          onClick={handleReset}
          className="w-16 h-16 rounded-full border-2 border-purple-500/50 flex items-center justify-center hover:bg-purple-500/10 transition-all"
        >
          <RotateCcw size={24} className="text-purple-500" />
        </button>
      </div>

      {/* Status */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          {isActive ? '🔥 Jejum em andamento' : timeLeft === 0 ? '✅ Jejum concluído!' : '⏸️ Jejum pausado'}
        </p>
      </div>
    </div>
  )
}

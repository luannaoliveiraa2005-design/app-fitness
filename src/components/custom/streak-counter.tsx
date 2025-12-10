'use client'

import { Flame } from 'lucide-react'

interface StreakCounterProps {
  streak: number
  maxStreak?: number
}

export default function StreakCounter({ streak, maxStreak = 30 }: StreakCounterProps) {
  const progress = (streak / maxStreak) * 100

  return (
    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center animate-pulse">
            <Flame size={32} className="text-white" />
          </div>
          {streak > 0 && (
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-xs font-bold animate-bounce">
              {streak}
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold">Sequência de Dias</h3>
          <p className="text-sm text-gray-400">Continue assim! 🔥</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Dias consecutivos</span>
          <span className="font-bold text-orange-500">{streak} / {maxStreak}</span>
        </div>
        
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000 ease-out relative"
            style={{ width: `${Math.min(progress, 100)}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-shimmer" />
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="mt-4 flex justify-between">
        {[7, 14, 21, 30].map((milestone) => (
          <div
            key={milestone}
            className={`flex flex-col items-center ${
              streak >= milestone ? 'opacity-100' : 'opacity-30'
            } transition-opacity`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                streak >= milestone
                  ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white'
                  : 'bg-white/10 text-gray-400'
              }`}
            >
              {milestone}
            </div>
            <p className="text-xs text-gray-400 mt-1">dias</p>
          </div>
        ))}
      </div>
    </div>
  )
}

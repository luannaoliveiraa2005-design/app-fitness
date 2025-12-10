'use client'

import { useState } from 'react'
import { Droplet, UtensilsCrossed, Footprints, Plus, Check } from 'lucide-react'

interface QuickLogProps {
  onLog?: (type: 'water' | 'food' | 'steps', value: number) => void
}

export default function QuickLog({ onLog }: QuickLogProps) {
  const [waterCount, setWaterCount] = useState(0)
  const [foodCount, setFoodCount] = useState(0)
  const [steps, setSteps] = useState(0)
  const [showFeedback, setShowFeedback] = useState<string | null>(null)

  const handleLog = (type: 'water' | 'food' | 'steps') => {
    let newValue = 0
    
    if (type === 'water') {
      newValue = waterCount + 1
      setWaterCount(newValue)
    } else if (type === 'food') {
      newValue = foodCount + 1
      setFoodCount(newValue)
    } else {
      newValue = steps + 1000
      setSteps(newValue)
    }

    // Feedback visual
    setShowFeedback(type)
    setTimeout(() => setShowFeedback(null), 1500)

    onLog?.(type, newValue)
  }

  return (
    <div className="space-y-4">
      {/* Water Logging */}
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Droplet size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Hidratação</h3>
              <p className="text-sm text-gray-400">{waterCount} copos hoje</p>
            </div>
          </div>
          <button
            onClick={() => handleLog('water')}
            className="group w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center hover:scale-110 transition-all active:scale-95"
          >
            <Plus size={24} className="text-white" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 ease-out"
            style={{ width: `${Math.min((waterCount / 8) * 100, 100)}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-2">Meta: 8 copos por dia</p>

        {/* Feedback Animation */}
        {showFeedback === 'water' && (
          <div className="absolute inset-0 flex items-center justify-center bg-blue-500/20 backdrop-blur-sm animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center animate-scale-in">
              <Check size={40} className="text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Food Logging */}
      <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <UtensilsCrossed size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Refeições</h3>
              <p className="text-sm text-gray-400">{foodCount} registradas</p>
            </div>
          </div>
          <button
            onClick={() => handleLog('food')}
            className="group w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center hover:scale-110 transition-all active:scale-95"
          >
            <Plus size={24} className="text-white" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 ease-out"
            style={{ width: `${Math.min((foodCount / 5) * 100, 100)}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-2">Meta: 5 refeições por dia</p>

        {/* Feedback Animation */}
        {showFeedback === 'food' && (
          <div className="absolute inset-0 flex items-center justify-center bg-orange-500/20 backdrop-blur-sm animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center animate-scale-in">
              <Check size={40} className="text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Steps Logging */}
      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Footprints size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Passos</h3>
              <p className="text-sm text-gray-400">{steps.toLocaleString()} passos</p>
            </div>
          </div>
          <button
            onClick={() => handleLog('steps')}
            className="group w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center hover:scale-110 transition-all active:scale-95"
          >
            <Plus size={24} className="text-white" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${Math.min((steps / 10000) * 100, 100)}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-2">Meta: 10.000 passos por dia</p>

        {/* Feedback Animation */}
        {showFeedback === 'steps' && (
          <div className="absolute inset-0 flex items-center justify-center bg-green-500/20 backdrop-blur-sm animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center animate-scale-in">
              <Check size={40} className="text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

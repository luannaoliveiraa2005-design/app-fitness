'use client'

import { useState } from 'react'
import { TrendingUp, Flame, Target, Award, Calendar, Activity } from 'lucide-react'
import Link from 'next/link'
import AICoach from '@/components/custom/ai-coach'
import QuickLog from '@/components/custom/quick-log'
import FastingTimer from '@/components/custom/fasting-timer'
import AchievementToast from '@/components/custom/achievement-toast'
import MotivationalCard from '@/components/custom/motivational-card'
import ProgressRing from '@/components/custom/progress-ring'
import StreakCounter from '@/components/custom/streak-counter'

export default function DashboardPage() {
  const [achievement, setAchievement] = useState<any>(null)

  // Contexto simulado - em produção, viria do Supabase
  const userContext = {
    hasWorkedOutToday: false,
    streak: 12,
    progressPercentage: 65
  }

  const handleLog = (type: 'water' | 'food' | 'steps', value: number) => {
    // Simular conquista ao atingir metas
    if (type === 'water' && value === 8) {
      setAchievement({
        id: '1',
        title: 'Hidratação Perfeita!',
        description: 'Você atingiu sua meta de 8 copos de água hoje! 💧',
        icon: '💧'
      })
    } else if (type === 'food' && value === 5) {
      setAchievement({
        id: '2',
        title: 'Nutrição em Dia!',
        description: 'Todas as 5 refeições registradas! 🍽️',
        icon: '🍽️'
      })
    } else if (type === 'steps' && value >= 10000) {
      setAchievement({
        id: '3',
        title: 'Meta de Passos!',
        description: 'Você caminhou 10.000 passos hoje! 👟',
        icon: '👟'
      })
    }
  }

  const motivationalMessages = [
    "Seu esforço hoje cria a sua versão de amanhã!",
    "O mais difícil é começar. O resto eu te ajudo!",
    "Você não está sozinho, estou com você nessa.",
    "Consistência vence perfeição.",
    "Pequenos avanços diários trazem grandes resultados."
  ]

  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Achievement Toast */}
      <AchievementToast 
        achievement={achievement} 
        onClose={() => setAchievement(null)} 
      />

      {/* Header */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Olá, Usuário! 👋</h1>
        <p className="text-gray-400">Veja seu progresso e continue sua jornada</p>
      </div>

      {/* Motivational Card */}
      <MotivationalCard 
        message={randomMessage}
        gradient="from-purple-500 via-pink-500 to-orange-500"
      />

      {/* AI Coach Message */}
      <AICoach context={userContext} />

      {/* Streak Counter */}
      <StreakCounter streak={userContext.streak} maxStreak={30} />

      {/* Quick Log Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Registro Rápido</h2>
        <QuickLog onLog={handleLog} />
      </div>

      {/* Fasting Timer */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Timer de Jejum</h2>
        <FastingTimer />
      </div>

      {/* Stats Grid with Progress Rings */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Suas Estatísticas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6 flex flex-col items-center">
            <ProgressRing 
              progress={75} 
              size={100} 
              color="#C4A574"
              label="Calorias"
              value="2.4k"
            />
            <div className="mt-4 text-center">
              <h3 className="text-gray-400 text-sm mb-1">Calorias Queimadas</h3>
              <p className="text-xl font-bold">2.450 kcal</p>
              <span className="text-sm text-green-400">+5% vs ontem</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6 flex flex-col items-center">
            <ProgressRing 
              progress={60} 
              size={100} 
              color="#10b981"
              label="Peso"
              value="72kg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-gray-400 text-sm mb-1">Peso Atual</h3>
              <p className="text-xl font-bold">72 kg</p>
              <span className="text-sm text-green-400">-3kg do início</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6 flex flex-col items-center">
            <ProgressRing 
              progress={40} 
              size={100} 
              color="#3b82f6"
              label="Treinos"
              value="12"
            />
            <div className="mt-4 text-center">
              <h3 className="text-gray-400 text-sm mb-1">Treinos Completos</h3>
              <p className="text-xl font-bold">Este mês</p>
              <span className="text-sm text-[#C4A574]">Meta: 20</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6 flex flex-col items-center">
            <ProgressRing 
              progress={85} 
              size={100} 
              color="#f59e0b"
              label="Conquistas"
              value="7"
            />
            <div className="mt-4 text-center">
              <h3 className="text-gray-400 text-sm mb-1">Conquistas</h3>
              <p className="text-xl font-bold">Desbloqueadas</p>
              <span className="text-sm text-[#C4A574]">3 novas!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Acesso Rápido</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/dashboard/progresso"
            className="group p-6 bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl hover:bg-white/10 hover:border-[#C4A574]/40 transition-all hover:scale-105"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Acompanhamento Real</h3>
            <p className="text-gray-400">Veja gráficos detalhados do seu progresso</p>
          </Link>

          <Link
            href="/dashboard/treinos"
            className="group p-6 bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl hover:bg-white/10 hover:border-[#C4A574]/40 transition-all hover:scale-105"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Activity size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Treinos Personalizados</h3>
            <p className="text-gray-400">Acesse seus planos de treino</p>
          </Link>

          <Link
            href="/dashboard/nutricao"
            className="group p-6 bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl hover:bg-white/10 hover:border-[#C4A574]/40 transition-all hover:scale-105"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Cardápios</h3>
            <p className="text-gray-400">Receitas e planos alimentares</p>
          </Link>
        </div>
      </div>

      {/* Today's Schedule */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Agenda de Hoje</h2>
        <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center flex-shrink-0">
              <Calendar size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold mb-1">Treino de Pernas</h4>
              <p className="text-sm text-gray-400">08:00 - 09:00</p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-lg font-medium hover:scale-105 transition-transform active:scale-95">
              Iniciar
            </button>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center flex-shrink-0">
              <Target size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold mb-1">Almoço Saudável</h4>
              <p className="text-sm text-gray-400">12:00 - 13:00</p>
            </div>
            <button className="px-4 py-2 border border-[#8B6F47] rounded-lg font-medium hover:bg-white/5 transition-colors">
              Ver Receita
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Sparkles, Target, TrendingUp, Heart, ArrowRight } from 'lucide-react'
import { generatePersonalizedAnalysis, type QuizData, type AIAnalysis } from '@/lib/ai-coach'

export default function QuizResultadoPage() {
  const router = useRouter()
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Recuperar dados do quiz
    const quizDataStr = localStorage.getItem('quizData')
    
    if (!quizDataStr) {
      router.push('/quiz')
      return
    }

    const quizData = JSON.parse(quizDataStr)
    
    // Converter para formato esperado
    const formattedQuiz: QuizData = {
      goal: quizData.goal,
      weightGoal: parseFloat(quizData.weightGoal),
      activityLevel: quizData.activityLevel,
      mainDifficulty: quizData.mainDifficulty,
      availableTime: quizData.availableTime
    }

    // Simular processamento da IA (animação)
    setTimeout(() => {
      const result = generatePersonalizedAnalysis(formattedQuiz)
      setAnalysis(result)
      setLoading(false)
    }, 2000)
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C4A574] to-[#8B6F47] flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Sparkles size={40} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Analisando seu perfil...</h2>
          <p className="text-gray-400">Criando seu plano personalizado</p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-2 h-2 bg-[#C4A574] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-[#C4A574] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-[#C4A574] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    )
  }

  if (!analysis) return null

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C4A574] to-[#8B6F47] flex items-center justify-center">
            <span className="text-white font-bold text-2xl">V</span>
          </div>
          <span className="text-white font-bold text-2xl tracking-wider">VITALIS</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4A574]/20 border border-[#C4A574]/30 rounded-full mb-6">
            <Sparkles size={20} className="text-[#C4A574]" />
            <span className="text-sm font-semibold text-[#C4A574]">Análise Completa</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Seu Plano Personalizado Está Pronto! 🎉</h1>
          <p className="text-xl text-gray-400">Vamos transformar seus objetivos em realidade</p>
        </div>

        {/* Análise do Perfil */}
        <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-8 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center flex-shrink-0">
              <Target size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Seu Perfil</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{analysis.profile}</p>
            </div>
          </div>
        </div>

        {/* Sugestões Personalizadas */}
        <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-8 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center flex-shrink-0">
              <TrendingUp size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Recomendações Personalizadas</h2>
              <div className="space-y-3">
                {analysis.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-[#C4A574]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#C4A574] font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-300">{suggestion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mensagem Motivacional */}
        <div className="bg-gradient-to-br from-[#8B6F47]/20 to-[#C4A574]/20 border border-[#C4A574]/30 rounded-2xl p-8 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center flex-shrink-0">
              <Heart size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Mensagem do seu Coach</h2>
              <p className="text-gray-200 leading-relaxed text-lg">{analysis.motivation}</p>
            </div>
          </div>
        </div>

        {/* Próximos Passos */}
        <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Próximos Passos</h2>
          <div className="space-y-3">
            {analysis.nextSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - Planos */}
        <div className="text-center">
          <button
            onClick={() => router.push('/#planos')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-2xl"
          >
            Ver Planos e Começar Agora
            <ArrowRight size={24} />
          </button>
          <p className="text-gray-400 mt-4">
            Escolha seu plano e comece sua transformação hoje mesmo!
          </p>
        </div>
      </div>
    </div>
  )
}

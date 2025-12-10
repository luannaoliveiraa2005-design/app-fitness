'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, ArrowLeft, Target, TrendingDown, Activity, AlertCircle, Clock } from 'lucide-react'

type QuizStep = 1 | 2 | 3 | 4 | 5

export default function QuizPage() {
  const router = useRouter()
  const [step, setStep] = useState<QuizStep>(1)
  const [quizData, setQuizData] = useState({
    goal: '',
    weightGoal: '',
    activityLevel: '',
    mainDifficulty: '',
    availableTime: ''
  })

  const totalSteps = 5
  const progress = (step / totalSteps) * 100

  const handleNext = () => {
    if (step < 5) {
      setStep((step + 1) as QuizStep)
    } else {
      // Salvar dados e ir para resultado
      localStorage.setItem('quizData', JSON.stringify(quizData))
      router.push('/quiz/resultado')
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as QuizStep)
    }
  }

  const isStepValid = () => {
    switch (step) {
      case 1: return quizData.goal !== ''
      case 2: return quizData.weightGoal !== ''
      case 3: return quizData.activityLevel !== ''
      case 4: return quizData.mainDifficulty !== ''
      case 5: return quizData.availableTime !== ''
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C4A574] to-[#8B6F47] flex items-center justify-center">
            <span className="text-white font-bold text-2xl">V</span>
          </div>
          <span className="text-white font-bold text-2xl tracking-wider">VITALIS</span>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Passo {step} de {totalSteps}</span>
            <span className="text-sm text-[#C4A574] font-semibold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#8B6F47] to-[#C4A574] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Quiz Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-8 lg:p-12">
          {/* Step 1 - Objetivo */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-3">Qual seu objetivo principal?</h2>
                <p className="text-gray-400">Vamos personalizar sua jornada</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { value: 'emagrecer', label: 'Emagrecer', icon: TrendingDown },
                  { value: 'ganhar_massa', label: 'Ganhar Massa', icon: Activity },
                  { value: 'saude', label: 'Melhorar Saúde', icon: Target },
                  { value: 'rotina', label: 'Criar Rotina', icon: Clock }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setQuizData({ ...quizData, goal: option.value })}
                    className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                      quizData.goal === option.value
                        ? 'border-[#C4A574] bg-[#C4A574]/10'
                        : 'border-[#8B6F47]/30 bg-white/5 hover:border-[#8B6F47]/50'
                    }`}
                  >
                    <option.icon size={32} className="mx-auto mb-3 text-[#C4A574]" />
                    <span className="font-semibold text-lg">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 - Meta de Peso */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center mx-auto mb-4">
                  <TrendingDown size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-3">
                  {quizData.goal === 'emagrecer' ? 'Quantos kg deseja perder?' : 'Quantos kg deseja ganhar?'}
                </h2>
                <p className="text-gray-400">Defina uma meta realista</p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="number"
                    value={quizData.weightGoal}
                    onChange={(e) => setQuizData({ ...quizData, weightGoal: e.target.value })}
                    placeholder="Ex: 10"
                    className="w-full px-6 py-4 bg-white/5 border-2 border-[#8B6F47]/30 rounded-xl text-white text-center text-2xl font-bold placeholder:text-gray-500 focus:outline-none focus:border-[#C4A574] transition-colors"
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl">kg</span>
                </div>
                <p className="text-sm text-gray-400 text-center mt-4">
                  💡 Metas saudáveis: 0,5-1kg por semana
                </p>
              </div>
            </div>
          )}

          {/* Step 3 - Nível de Atividade */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center mx-auto mb-4">
                  <Activity size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-3">Qual seu nível de atividade física hoje?</h2>
                <p className="text-gray-400">Seja honesto, vamos começar do seu ponto atual</p>
              </div>

              <div className="space-y-3">
                {[
                  { value: 'sedentario', label: 'Sedentário', desc: 'Pouca ou nenhuma atividade física' },
                  { value: 'leve', label: 'Leve', desc: '1-2 vezes por semana' },
                  { value: 'moderado', label: 'Moderado', desc: '3-4 vezes por semana' },
                  { value: 'intenso', label: 'Intenso', desc: '5+ vezes por semana' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setQuizData({ ...quizData, activityLevel: option.value })}
                    className={`w-full p-5 rounded-xl border-2 transition-all hover:scale-102 text-left ${
                      quizData.activityLevel === option.value
                        ? 'border-[#C4A574] bg-[#C4A574]/10'
                        : 'border-[#8B6F47]/30 bg-white/5 hover:border-[#8B6F47]/50'
                    }`}
                  >
                    <div className="font-bold text-lg mb-1">{option.label}</div>
                    <div className="text-sm text-gray-400">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 - Maior Dificuldade */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center mx-auto mb-4">
                  <AlertCircle size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-3">Qual sua maior dificuldade?</h2>
                <p className="text-gray-400">Vamos focar em resolver isso juntos</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { value: 'alimentacao', label: 'Alimentação', emoji: '🍽️' },
                  { value: 'rotina', label: 'Manter Rotina', emoji: '📅' },
                  { value: 'motivacao', label: 'Motivação', emoji: '💪' },
                  { value: 'exercicios', label: 'Exercícios', emoji: '🏋️' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setQuizData({ ...quizData, mainDifficulty: option.value })}
                    className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                      quizData.mainDifficulty === option.value
                        ? 'border-[#C4A574] bg-[#C4A574]/10'
                        : 'border-[#8B6F47]/30 bg-white/5 hover:border-[#8B6F47]/50'
                    }`}
                  >
                    <div className="text-4xl mb-3">{option.emoji}</div>
                    <span className="font-semibold text-lg">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5 - Tempo Disponível */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-3">Quanto tempo por dia pode dedicar?</h2>
                <p className="text-gray-400">Vamos criar um plano que cabe na sua rotina</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '15min', label: '15 min' },
                  { value: '30min', label: '30 min' },
                  { value: '45min', label: '45 min' },
                  { value: '60min', label: '60+ min' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setQuizData({ ...quizData, availableTime: option.value })}
                    className={`p-8 rounded-xl border-2 transition-all hover:scale-105 ${
                      quizData.availableTime === option.value
                        ? 'border-[#C4A574] bg-[#C4A574]/10'
                        : 'border-[#8B6F47]/30 bg-white/5 hover:border-[#8B6F47]/50'
                    }`}
                  >
                    <span className="font-bold text-2xl">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#8B6F47]/20">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#8B6F47]/30 hover:bg-white/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={20} />
              Voltar
            </button>

            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-xl font-bold hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {step === 5 ? 'Ver Análise' : 'Próximo'}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

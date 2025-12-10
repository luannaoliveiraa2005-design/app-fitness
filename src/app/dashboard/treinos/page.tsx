'use client'

import { Dumbbell, Clock, Flame, Play, CheckCircle } from 'lucide-react'

export default function TreinosPage() {
  const workouts = [
    {
      id: 1,
      title: 'Treino de Peito e Tríceps',
      duration: '45 min',
      calories: '350 kcal',
      level: 'Intermediário',
      exercises: 8,
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Treino de Costas e Bíceps',
      duration: '50 min',
      calories: '400 kcal',
      level: 'Avançado',
      exercises: 10,
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Treino de Pernas Completo',
      duration: '60 min',
      calories: '500 kcal',
      level: 'Intermediário',
      exercises: 12,
      image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Treino de Ombros e Abdômen',
      duration: '40 min',
      calories: '300 kcal',
      level: 'Iniciante',
      exercises: 7,
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop'
    }
  ]

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Treinos Personalizados</h1>
        <p className="text-gray-400">Planos de treino adaptados aos seus objetivos</p>
      </div>

      {/* Today's Workout */}
      <div className="bg-gradient-to-br from-[#8B6F47]/20 to-[#C4A574]/20 border-2 border-[#C4A574] rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center">
            <Dumbbell size={16} className="text-white" />
          </div>
          <span className="text-[#C4A574] font-bold text-sm">TREINO DE HOJE</span>
        </div>

        <h2 className="text-2xl font-bold mb-4">Treino de Peito e Tríceps</h2>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Clock size={16} className="text-[#C4A574]" />
            <span>45 minutos</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Flame size={16} className="text-[#C4A574]" />
            <span>350 kcal</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Dumbbell size={16} className="text-[#C4A574]" />
            <span>8 exercícios</span>
          </div>
        </div>

        <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
          <Play size={20} />
          Iniciar Treino
        </button>
      </div>

      {/* Workout Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Categorias de Treino</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Peito', 'Costas', 'Pernas', 'Ombros', 'Braços', 'Abdômen', 'Cardio', 'Full Body'].map((category) => (
            <button
              key={category}
              className="p-4 bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-xl hover:bg-white/10 hover:border-[#C4A574]/40 transition-all text-center font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* All Workouts */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Todos os Treinos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="group bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#C4A574]/40 transition-all"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={workout.image}
                  alt={workout.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#8B6F47]/20 border border-[#8B6F47]/30 rounded-full text-xs font-semibold text-[#C4A574]">
                    {workout.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">{workout.title}</h3>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{workout.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame size={16} />
                    <span>{workout.calories}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dumbbell size={16} />
                    <span>{workout.exercises} exercícios</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                  <Play size={18} />
                  Começar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Workouts */}
      <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">Treinos Concluídos Recentemente</h2>
        
        <div className="space-y-4">
          {[
            { name: 'Treino de Pernas', date: 'Ontem', duration: '60 min' },
            { name: 'Treino de Costas', date: '2 dias atrás', duration: '50 min' },
            { name: 'Treino de Peito', date: '3 dias atrás', duration: '45 min' }
          ].map((workout, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold mb-1">{workout.name}</h4>
                <p className="text-sm text-gray-400">{workout.date} • {workout.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

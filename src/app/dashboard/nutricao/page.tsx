'use client'

import { Apple, Flame, Droplet, Pizza, Coffee, Moon, ChefHat, BookOpen } from 'lucide-react'

export default function NutricaoPage() {
  const meals = [
    {
      id: 1,
      name: 'Omelete de Claras com Aveia',
      type: 'Café da Manhã',
      calories: 320,
      protein: 28,
      carbs: 35,
      fat: 8,
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
      icon: Coffee
    },
    {
      id: 2,
      name: 'Frango Grelhado com Batata Doce',
      type: 'Almoço',
      calories: 450,
      protein: 45,
      carbs: 48,
      fat: 10,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      icon: Pizza
    },
    {
      id: 3,
      name: 'Salmão com Legumes',
      type: 'Jantar',
      calories: 380,
      protein: 35,
      carbs: 25,
      fat: 18,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
      icon: Moon
    }
  ]

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Nutrição Inteligente</h1>
        <p className="text-gray-400">Cardápios balanceados para seus objetivos</p>
      </div>

      {/* Daily Macros */}
      <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">Macros de Hoje</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-xl">
            <Flame size={32} className="mx-auto mb-3 text-[#C4A574]" />
            <p className="text-gray-400 text-sm mb-2">Calorias</p>
            <p className="text-3xl font-bold mb-1">1850</p>
            <p className="text-sm text-gray-400">de 2000 kcal</p>
            <div className="mt-3 h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#8B6F47] to-[#C4A574]" style={{width: '92%'}}></div>
            </div>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-xl">
            <Apple size={32} className="mx-auto mb-3 text-[#C4A574]" />
            <p className="text-gray-400 text-sm mb-2">Proteínas</p>
            <p className="text-3xl font-bold mb-1">145g</p>
            <p className="text-sm text-gray-400">de 150g</p>
            <div className="mt-3 h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#8B6F47] to-[#C4A574]" style={{width: '97%'}}></div>
            </div>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-xl">
            <Pizza size={32} className="mx-auto mb-3 text-[#C4A574]" />
            <p className="text-gray-400 text-sm mb-2">Carboidratos</p>
            <p className="text-3xl font-bold mb-1">180g</p>
            <p className="text-sm text-gray-400">de 200g</p>
            <div className="mt-3 h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#8B6F47] to-[#C4A574]" style={{width: '90%'}}></div>
            </div>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-xl">
            <Droplet size={32} className="mx-auto mb-3 text-[#C4A574]" />
            <p className="text-gray-400 text-sm mb-2">Gorduras</p>
            <p className="text-3xl font-bold mb-1">48g</p>
            <p className="text-sm text-gray-400">de 60g</p>
            <div className="mt-3 h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#8B6F47] to-[#C4A574]" style={{width: '80%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Meal Plan */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Cardápio de Hoje</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <div
              key={meal.id}
              className="group bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#C4A574]/40 transition-all"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center">
                    <meal.icon size={20} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-[#C4A574] mb-2 block">{meal.type.toUpperCase()}</span>
                <h3 className="text-xl font-bold mb-4">{meal.name}</h3>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-gray-400">Calorias</span>
                    <span className="font-bold">{meal.calories}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-gray-400">Proteína</span>
                    <span className="font-bold">{meal.protein}g</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-gray-400">Carbs</span>
                    <span className="font-bold">{meal.carbs}g</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-gray-400">Gordura</span>
                    <span className="font-bold">{meal.fat}g</span>
                  </div>
                </div>

                <button className="w-full py-2 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all">
                  Ver Receita
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recipe Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Categorias de Receitas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Café da Manhã', icon: Coffee },
            { name: 'Almoço', icon: Pizza },
            { name: 'Jantar', icon: Moon },
            { name: 'Lanches', icon: Apple },
            { name: 'Sobremesas', icon: ChefHat },
            { name: 'Vegetariano', icon: Apple },
            { name: 'Low Carb', icon: Flame },
            { name: 'Proteico', icon: Droplet }
          ].map((category) => (
            <button
              key={category.name}
              className="p-4 bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-xl hover:bg-white/10 hover:border-[#C4A574]/40 transition-all flex flex-col items-center gap-2"
            >
              <category.icon size={24} className="text-[#C4A574]" />
              <span className="font-medium text-sm">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Nutrition Tips */}
      <div className="bg-gradient-to-br from-[#8B6F47]/20 to-[#C4A574]/20 border border-[#C4A574]/30 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center">
            <BookOpen size={24} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold">Dica Nutricional do Dia</h2>
        </div>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          Beba pelo menos 2 litros de água por dia! A hidratação adequada é essencial para o metabolismo, 
          ajuda na digestão e melhora o desempenho nos treinos. Mantenha uma garrafa de água sempre por perto.
        </p>

        <button className="px-6 py-2 bg-white/10 border border-[#C4A574]/30 rounded-lg font-medium hover:bg-white/20 transition-all">
          Ver Mais Dicas
        </button>
      </div>

      {/* Water Intake */}
      <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">Consumo de Água</h2>
        
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400">Meta diária</span>
              <span className="font-bold">1.8L / 2.0L</span>
            </div>
            <div className="h-4 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" style={{width: '90%'}}></div>
            </div>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
            + 250ml
          </button>
        </div>
      </div>
    </div>
  )
}

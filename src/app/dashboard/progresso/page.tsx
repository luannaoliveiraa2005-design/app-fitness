'use client'

import { TrendingUp, TrendingDown, Calendar, Target, Award } from 'lucide-react'

export default function ProgressoPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Acompanhamento Real</h1>
        <p className="text-gray-400">Monitore seu progresso com dados detalhados</p>
      </div>

      {/* Weight Progress */}
      <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Evolução de Peso</h2>
          <div className="flex items-center gap-2 text-green-400">
            <TrendingDown size={20} />
            <span className="font-bold">-5kg</span>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="h-64 bg-white/5 rounded-xl flex items-center justify-center border border-[#8B6F47]/20">
          <div className="text-center">
            <TrendingUp size={48} className="mx-auto mb-4 text-[#C4A574]" />
            <p className="text-gray-400">Gráfico de evolução de peso</p>
            <p className="text-sm text-gray-500 mt-2">Dados sendo carregados...</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-white/5 rounded-xl">
            <p className="text-gray-400 text-sm mb-1">Peso Inicial</p>
            <p className="text-2xl font-bold">80 kg</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl">
            <p className="text-gray-400 text-sm mb-1">Peso Atual</p>
            <p className="text-2xl font-bold text-[#C4A574]">75 kg</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl">
            <p className="text-gray-400 text-sm mb-1">Meta</p>
            <p className="text-2xl font-bold">70 kg</p>
          </div>
        </div>
      </div>

      {/* Body Measurements */}
      <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">Medidas Corporais</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <span className="text-gray-400">Cintura</span>
              <span className="font-bold text-lg">85 cm</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <span className="text-gray-400">Quadril</span>
              <span className="font-bold text-lg">95 cm</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <span className="text-gray-400">Peito</span>
              <span className="font-bold text-lg">98 cm</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <span className="text-gray-400">Braço</span>
              <span className="font-bold text-lg">32 cm</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <span className="text-gray-400">Coxa</span>
              <span className="font-bold text-lg">55 cm</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <span className="text-gray-400">Panturrilha</span>
              <span className="font-bold text-lg">38 cm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">Metas Semanais</h2>
        
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Target size={20} className="text-[#C4A574]" />
                <span className="font-medium">Treinos Completos</span>
              </div>
              <span className="text-sm text-gray-400">4/5</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-full" style={{width: '80%'}}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-[#C4A574]" />
                <span className="font-medium">Dias Ativos</span>
              </div>
              <span className="text-sm text-gray-400">6/7</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-full" style={{width: '85%'}}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Award size={20} className="text-[#C4A574]" />
                <span className="font-medium">Calorias Queimadas</span>
              </div>
              <span className="text-sm text-gray-400">2450/3000 kcal</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-full" style={{width: '82%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Before/After Photos */}
      <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">Fotos de Progresso</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-400 text-sm mb-3">Antes - 01/01/2024</p>
            <div className="aspect-[3/4] bg-white/5 rounded-xl border border-[#8B6F47]/20 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=600&fit=crop"
                alt="Antes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-3">Depois - 01/06/2024</p>
            <div className="aspect-[3/4] bg-white/5 rounded-xl border border-[#8B6F47]/20 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=600&fit=crop"
                alt="Depois"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <button className="w-full mt-6 py-3 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
          Adicionar Nova Foto
        </button>
      </div>
    </div>
  )
}

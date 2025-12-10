'use client'

import { User, Mail, Phone, Calendar, MapPin, Award, Settings, Bell, Lock, CreditCard, LogOut } from 'lucide-react'

export default function PerfilPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Meu Perfil</h1>
        <p className="text-gray-400">Gerencie suas informações e configurações</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6 text-center">
            <div className="relative inline-block mb-4">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#C4A574]"
              />
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-br from-[#8B6F47] to-[#C4A574] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Settings size={18} className="text-white" />
              </button>
            </div>

            <h2 className="text-2xl font-bold mb-1">João Silva</h2>
            <p className="text-gray-400 mb-4">Membro desde Jan 2024</p>

            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="px-4 py-2 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-full">
                <span className="font-bold text-sm">PRO</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl">
                <p className="text-2xl font-bold text-[#C4A574]">12</p>
                <p className="text-xs text-gray-400">Treinos</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <p className="text-2xl font-bold text-[#C4A574]">-5kg</p>
                <p className="text-xs text-gray-400">Perdidos</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <p className="text-2xl font-bold text-[#C4A574]">45</p>
                <p className="text-xs text-gray-400">Dias</p>
              </div>
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
              Editar Perfil
            </button>
          </div>

          {/* Achievements */}
          <div className="mt-6 bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Award size={24} className="text-[#C4A574]" />
              Conquistas
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { emoji: '🏆', name: 'Primeira Semana' },
                { emoji: '🔥', name: '7 Dias Seguidos' },
                { emoji: '💪', name: '10 Treinos' },
                { emoji: '⭐', name: 'Meta Atingida' },
                { emoji: '🎯', name: 'Consistente' },
                { emoji: '👑', name: 'Top 100' }
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white/5 rounded-xl flex flex-col items-center justify-center p-2 hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl mb-1">{achievement.emoji}</span>
                  <span className="text-xs text-gray-400 text-center">{achievement.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6">Informações Pessoais</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      defaultValue="João Silva"
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-[#8B6F47]/30 rounded-xl text-white focus:outline-none focus:border-[#C4A574] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">E-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      defaultValue="joao@email.com"
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-[#8B6F47]/30 rounded-xl text-white focus:outline-none focus:border-[#C4A574] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">Telefone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="tel"
                      defaultValue="(11) 99999-9999"
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-[#8B6F47]/30 rounded-xl text-white focus:outline-none focus:border-[#C4A574] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">Data de Nascimento</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="date"
                      defaultValue="1990-01-01"
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-[#8B6F47]/30 rounded-xl text-white focus:outline-none focus:border-[#C4A574] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-400">Localização</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    defaultValue="São Paulo, Brasil"
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-[#8B6F47]/30 rounded-xl text-white focus:outline-none focus:border-[#C4A574] transition-colors"
                  />
                </div>
              </div>

              <button className="px-6 py-3 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
                Salvar Alterações
              </button>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6">Preferências</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <Bell size={20} className="text-[#C4A574]" />
                  <div>
                    <p className="font-medium">Notificações Push</p>
                    <p className="text-sm text-gray-400">Receba lembretes de treinos</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#8B6F47] peer-checked:to-[#C4A574]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-[#C4A574]" />
                  <div>
                    <p className="font-medium">E-mails Semanais</p>
                    <p className="text-sm text-gray-400">Resumo semanal de progresso</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#8B6F47] peer-checked:to-[#C4A574]"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Subscription */}
          <div className="bg-gradient-to-br from-[#8B6F47]/20 to-[#C4A574]/20 border-2 border-[#C4A574] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <CreditCard size={24} className="text-[#C4A574]" />
                <div>
                  <h3 className="text-xl font-bold">Plano PRO Anual</h3>
                  <p className="text-sm text-gray-400">Renova em 15/12/2024</p>
                </div>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-full">
                <span className="font-bold text-sm">ATIVO</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-white/10 border border-[#C4A574]/30 rounded-xl font-medium hover:bg-white/20 transition-all">
                Gerenciar Assinatura
              </button>
              <button className="flex-1 py-3 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
                Upgrade
              </button>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Lock size={24} className="text-[#C4A574]" />
              Segurança
            </h3>
            <div className="space-y-3">
              <button className="w-full p-4 bg-white/5 rounded-xl text-left hover:bg-white/10 transition-colors flex items-center justify-between">
                <span className="font-medium">Alterar Senha</span>
                <span className="text-gray-400">→</span>
              </button>
              <button className="w-full p-4 bg-white/5 rounded-xl text-left hover:bg-white/10 transition-colors flex items-center justify-between">
                <span className="font-medium">Autenticação em Dois Fatores</span>
                <span className="text-gray-400">→</span>
              </button>
              <button className="w-full p-4 bg-white/5 rounded-xl text-left hover:bg-white/10 transition-colors flex items-center justify-between">
                <span className="font-medium">Dispositivos Conectados</span>
                <span className="text-gray-400">→</span>
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-red-400">Zona de Perigo</h3>
            <div className="space-y-3">
              <button className="w-full p-4 bg-white/5 border border-red-500/30 rounded-xl text-left hover:bg-red-500/10 transition-colors flex items-center justify-between text-red-400">
                <div className="flex items-center gap-3">
                  <LogOut size={20} />
                  <span className="font-medium">Sair da Conta</span>
                </div>
                <span>→</span>
              </button>
              <button className="w-full p-4 bg-white/5 border border-red-500/30 rounded-xl text-left hover:bg-red-500/10 transition-colors flex items-center justify-between text-red-400">
                <span className="font-medium">Excluir Conta</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

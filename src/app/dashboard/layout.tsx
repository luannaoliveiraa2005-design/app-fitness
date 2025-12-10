'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  TrendingUp, 
  Dumbbell, 
  Apple, 
  Users, 
  User,
  Menu,
  X,
  LogOut,
  Settings
} from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigation = [
    { name: 'Início', href: '/dashboard', icon: Home },
    { name: 'Progresso', href: '/dashboard/progresso', icon: TrendingUp },
    { name: 'Treinos', href: '/dashboard/treinos', icon: Dumbbell },
    { name: 'Nutrição', href: '/dashboard/nutricao', icon: Apple },
    { name: 'Comunidade', href: '/dashboard/comunidade', icon: Users },
    { name: 'Perfil', href: '/dashboard/perfil', icon: User },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#8B6F47]/20">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C4A574] to-[#8B6F47] flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-white font-bold text-xl tracking-wider">VITALIS</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-[#0A0A0A] border-r border-[#8B6F47]/20 flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#8B6F47]/20">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C4A574] to-[#8B6F47] flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-white font-bold text-xl tracking-wider">VITALIS</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-[#8B6F47]/20 space-y-2">
          <Link
            href="/dashboard/perfil"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all"
          >
            <Settings size={20} />
            <span className="font-medium">Configurações</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-red-400 transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Sair</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setSidebarOpen(false)}>
          <aside
            className="absolute left-0 top-0 bottom-0 w-64 bg-[#0A0A0A] border-r border-[#8B6F47]/20 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2 mt-20">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-[#8B6F47]/20 space-y-2">
              <Link
                href="/dashboard/perfil"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all"
              >
                <Settings size={20} />
                <span className="font-medium">Configurações</span>
              </Link>
              <Link
                href="/"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-red-400 transition-all"
              >
                <LogOut size={20} />
                <span className="font-medium">Sair</span>
              </Link>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="lg:ml-64 pt-20 lg:pt-0">
        {children}
      </main>
    </div>
  )
}

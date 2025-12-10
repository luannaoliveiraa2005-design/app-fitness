'use client'

import { Menu, X, Home, Users, Dumbbell, Calendar, Trophy, User } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    // Se não estiver na home, redireciona para home primeiro
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Altura da navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false) // Fecha o menu mobile após clicar
  }

  const handleStartFree = () => {
    if (pathname === '/') {
      scrollToSection('pricing')
    } else {
      router.push('/#pricing')
    }
  }

  const menuItems = [
    { label: 'Início', href: '/', icon: Home },
    { label: 'Funcionalidades', action: () => scrollToSection('features'), icon: Dumbbell },
    { label: 'Comunidade', href: '/comunidade', icon: Users },
    { label: 'Planos', action: () => scrollToSection('pricing'), icon: Trophy },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#8B6F47]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C4A574] to-[#8B6F47] flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-white font-bold text-xl tracking-wider">VITALIS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item, index) => (
              item.href ? (
                <Link 
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-2 transition-colors ${
                    pathname === item.href 
                      ? 'text-[#C4A574] font-semibold' 
                      : 'text-gray-300 hover:text-[#C4A574]'
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              ) : (
                <button 
                  key={index}
                  onClick={item.action}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C4A574] transition-colors"
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              )
            ))}
            <button 
              onClick={handleStartFree}
              className="px-6 py-2 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Começar Grátis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-[#8B6F47]/20">
            {menuItems.map((item, index) => (
              item.href ? (
                <Link 
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    pathname === item.href 
                      ? 'bg-[#8B6F47]/20 text-[#C4A574] font-semibold' 
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <item.icon size={20} />
                  {item.label}
                </Link>
              ) : (
                <button 
                  key={index}
                  onClick={item.action}
                  className="flex items-center gap-3 w-full text-left px-4 py-3 text-gray-300 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <item.icon size={20} />
                  {item.label}
                </button>
              )
            ))}
            <button 
              onClick={() => {
                handleStartFree()
                setIsOpen(false)
              }}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Começar Grátis
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

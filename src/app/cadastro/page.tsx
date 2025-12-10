'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, Phone } from 'lucide-react'

export default function CadastroPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!')
      return
    }

    setLoading(true)
    
    // Simulação de cadastro - substituir por autenticação real do Supabase
    setTimeout(() => {
      // Redirecionar para o quiz após cadastro
      router.push('/quiz')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C4A574] to-[#8B6F47] flex items-center justify-center">
            <span className="text-white font-bold text-2xl">V</span>
          </div>
          <span className="text-white font-bold text-2xl tracking-wider">VITALIS</span>
        </Link>

        {/* Signup Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-2 text-center">Crie sua conta</h1>
          <p className="text-gray-400 text-center mb-8">Comece sua transformação hoje</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Nome completo</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Seu nome"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-[#8B6F47]/30 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C4A574] transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="seu@email.com"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-[#8B6F47]/30 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C4A574] transition-colors"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2">Telefone</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="(00) 00000-0000"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-[#8B6F47]/30 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C4A574] transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Mínimo 8 caracteres"
                  required
                  minLength={8}
                  className="w-full pl-12 pr-12 py-3 bg-white/5 border border-[#8B6F47]/30 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C4A574] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Confirmar senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  placeholder="Digite a senha novamente"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-[#8B6F47]/30 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C4A574] transition-colors"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 rounded border-[#8B6F47]/30 bg-white/5 text-[#C4A574] focus:ring-[#C4A574]"
              />
              <label className="text-sm text-gray-400">
                Concordo com os{' '}
                <Link href="#" className="text-[#C4A574] hover:underline">
                  Termos de Uso
                </Link>{' '}
                e{' '}
                <Link href="#" className="text-[#C4A574] hover:underline">
                  Política de Privacidade
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Criando conta...' : 'Criar conta grátis'}
              {!loading && <ArrowRight size={20} />}
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-gray-400 mt-8">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-[#C4A574] font-semibold hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

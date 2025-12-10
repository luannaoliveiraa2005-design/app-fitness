'use client'

import { useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ArrowLeft, CheckCircle, CreditCard, Lock, Shield } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/custom/navbar'

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const plan = searchParams.get('plan') || 'monthly'
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    paymentMethod: 'credit'
  })

  const planDetails = {
    monthly: {
      name: 'Plano Mensal',
      price: 'R$ 30,00',
      period: 'por mês',
      trial: '7 dias grátis'
    },
    annual: {
      name: 'Plano Anual',
      price: 'R$ 299,90',
      period: 'por ano',
      trial: 'Economize R$ 60,00'
    }
  }

  const currentPlan = planDetails[plan as keyof typeof planDetails]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você integraria com sua API de pagamento
    alert('🎉 Pagamento processado com sucesso! Bem-vindo ao VITALIS!')
    router.push('/')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C4A574] transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Voltar para página inicial
          </Link>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Form */}
            <div>
              <h1 className="text-3xl font-bold mb-2">Finalizar Assinatura</h1>
              <p className="text-gray-400 mb-8">Complete seus dados para começar sua transformação</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Shield size={20} className="text-[#C4A574]" />
                    Dados Pessoais
                  </h2>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-[#8B6F47]/20 rounded-lg focus:outline-none focus:border-[#C4A574] transition-colors"
                      placeholder="João Silva"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-[#8B6F47]/20 rounded-lg focus:outline-none focus:border-[#C4A574] transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">CPF</label>
                    <input
                      type="text"
                      name="cpf"
                      required
                      value={formData.cpf}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-[#8B6F47]/20 rounded-lg focus:outline-none focus:border-[#C4A574] transition-colors"
                      placeholder="000.000.000-00"
                      maxLength={14}
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <CreditCard size={20} className="text-[#C4A574]" />
                    Forma de Pagamento
                  </h2>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, paymentMethod: 'credit'})}
                      className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                        formData.paymentMethod === 'credit'
                          ? 'border-[#C4A574] bg-[#C4A574]/10'
                          : 'border-[#8B6F47]/20 bg-white/5'
                      }`}
                    >
                      💳 Cartão de Crédito
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, paymentMethod: 'pix'})}
                      className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                        formData.paymentMethod === 'pix'
                          ? 'border-[#C4A574] bg-[#C4A574]/10'
                          : 'border-[#8B6F47]/20 bg-white/5'
                      }`}
                    >
                      💰 PIX
                    </button>
                  </div>

                  {formData.paymentMethod === 'credit' && (
                    <div className="space-y-4 pt-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Número do Cartão</label>
                        <input
                          type="text"
                          name="cardNumber"
                          required
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-[#8B6F47]/20 rounded-lg focus:outline-none focus:border-[#C4A574] transition-colors"
                          placeholder="0000 0000 0000 0000"
                          maxLength={19}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Nome no Cartão</label>
                        <input
                          type="text"
                          name="cardName"
                          required
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-[#8B6F47]/20 rounded-lg focus:outline-none focus:border-[#C4A574] transition-colors"
                          placeholder="JOÃO SILVA"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Validade</label>
                          <input
                            type="text"
                            name="expiry"
                            required
                            value={formData.expiry}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/5 border border-[#8B6F47]/20 rounded-lg focus:outline-none focus:border-[#C4A574] transition-colors"
                            placeholder="MM/AA"
                            maxLength={5}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            required
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/5 border border-[#8B6F47]/20 rounded-lg focus:outline-none focus:border-[#C4A574] transition-colors"
                            placeholder="123"
                            maxLength={4}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === 'pix' && (
                    <div className="p-6 bg-white/5 border border-[#8B6F47]/20 rounded-lg text-center">
                      <p className="text-gray-300 mb-4">
                        Após confirmar, você receberá o QR Code do PIX por e-mail para finalizar o pagamento.
                      </p>
                      <p className="text-sm text-[#C4A574]">
                        ⚡ Pagamento instantâneo e seguro
                      </p>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Lock size={20} />
                  Confirmar Assinatura
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Ao confirmar, você concorda com nossos Termos de Uso e Política de Privacidade.
                  Seus dados estão protegidos com criptografia SSL.
                </p>
              </form>
            </div>

            {/* Right Side - Summary */}
            <div>
              <div className="sticky top-24 p-8 bg-gradient-to-br from-[#8B6F47]/20 to-[#C4A574]/20 border border-[#8B6F47]/30 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Resumo do Pedido</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-lg">{currentPlan.name}</div>
                      <div className="text-sm text-gray-400">{currentPlan.period}</div>
                    </div>
                    <div className="text-2xl font-bold text-[#C4A574]">{currentPlan.price}</div>
                  </div>

                  <div className="pt-4 border-t border-[#8B6F47]/30">
                    <div className="flex items-center gap-2 text-[#C4A574] font-semibold mb-4">
                      <CheckCircle size={20} />
                      {currentPlan.trial}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h3 className="font-semibold">O que está incluído:</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#C4A574] flex-shrink-0" />
                      Acesso total ao app
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#C4A574] flex-shrink-0" />
                      Treinos personalizados ilimitados
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#C4A574] flex-shrink-0" />
                      Planos nutricionais brasileiros
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#C4A574] flex-shrink-0" />
                      Comunidade exclusiva
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#C4A574] flex-shrink-0" />
                      Suporte via WhatsApp
                    </li>
                    {plan === 'annual' && (
                      <>
                        <li className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-[#C4A574] flex-shrink-0" />
                          Consultas com nutricionista
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-[#C4A574] flex-shrink-0" />
                          Planos de treino avançados
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#8B6F47]/30">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Shield size={16} />
                    Pagamento 100% seguro
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle size={16} />
                    Cancele quando quiser
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#C4A574] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Carregando checkout...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  )
}

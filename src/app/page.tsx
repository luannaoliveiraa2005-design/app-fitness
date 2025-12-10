'use client'

import { ArrowRight, Dumbbell, Heart, TrendingUp, Users, Star, CheckCircle, Zap, Shield, Globe, Trophy, Calendar, Target, Award } from 'lucide-react'
import Navbar from '@/components/custom/navbar'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handlePlanClick = (plan: 'monthly' | 'annual') => {
    router.push(`/checkout?plan=${plan}`)
  }

  const scrollToPricing = () => {
    const element = document.getElementById('pricing')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-[#8B6F47]/20 border border-[#8B6F47]/30 rounded-full">
                <span className="text-[#C4A574] text-sm font-semibold">🏆 Mais de 500 mil brasileiros transformados</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Transforme Sua Vida
                <span className="block bg-gradient-to-r from-[#C4A574] to-[#8B6F47] bg-clip-text text-transparent">
                  Começando Hoje
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                O app de saúde e fitness feito para o brasileiro. Treinos, nutrição e comunidade que cabem no seu bolso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToPricing}
                  className="group px-8 py-4 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Começar Grátis por 7 Dias
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('features')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="px-8 py-4 border-2 border-[#8B6F47] text-white rounded-full font-bold text-lg hover:bg-[#8B6F47]/10 transition-all"
                >
                  Ver Como Funciona
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-[#C4A574]">500K+</div>
                  <div className="text-sm text-gray-400">Brasileiros Ativos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#C4A574]">4.9★</div>
                  <div className="text-sm text-gray-400">Na Play Store</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#C4A574]">2M+</div>
                  <div className="text-sm text-gray-400">Transformações</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#8B6F47]/20 to-[#C4A574]/20 border border-[#8B6F47]/30 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop" 
                  alt="Brasileiro treinando"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C4A574] to-[#8B6F47] flex items-center justify-center">
                    <TrendingUp size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">-15kg</div>
                    <div className="text-sm text-gray-300">Em 3 meses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Tudo Que Você Precisa
              <span className="block text-[#C4A574]">Em Um Só App</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Funcionalidades essenciais para sua transformação completa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Dumbbell,
                title: "Treinos Personalizados",
                description: "Planos adaptados ao seu nível, com vídeos explicativos em português"
              },
              {
                icon: Heart,
                title: "Nutrição Brasileira",
                description: "Cardápios com comidas que você conhece e ama, sem frescura"
              },
              {
                icon: Calendar,
                title: "Acompanhamento Diário",
                description: "Registre treinos, refeições e veja seu progresso em tempo real"
              },
              {
                icon: Users,
                title: "Comunidade Ativa",
                description: "Conecte-se com brasileiros na mesma jornada que você"
              },
              {
                icon: Target,
                title: "Metas Inteligentes",
                description: "Defina objetivos realistas e receba lembretes motivacionais"
              },
              {
                icon: Trophy,
                title: "Sistema de Conquistas",
                description: "Ganhe medalhas e desbloqueie recompensas conforme evolui"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl hover:bg-white/10 hover:border-[#C4A574]/40 transition-all hover:scale-105"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B6F47] to-[#C4A574] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Histórias de
              <span className="block text-[#C4A574]">Brasileiros Como Você</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Veja como o VITALIS mudou a vida de milhares de pessoas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                location: "São Paulo, SP",
                weight: "-12kg",
                time: "4 meses",
                rating: 5,
                text: "Perdi 12kg e ganhei muita autoestima! O app é fácil de usar e os treinos são perfeitos pra fazer em casa.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
              },
              {
                name: "João Santos",
                location: "Rio de Janeiro, RJ",
                weight: "-18kg",
                time: "6 meses",
                rating: 5,
                text: "Nunca imaginei que conseguiria. O preço cabe no bolso e os resultados são reais. Recomendo demais!",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              },
              {
                name: "Ana Costa",
                location: "Belo Horizonte, MG",
                weight: "-10kg",
                time: "3 meses",
                rating: 5,
                text: "Melhor investimento que já fiz! A comunidade é incrível e me motiva todos os dias a continuar.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#C4A574]"
                  />
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.location}</div>
                    <div className="text-[#C4A574] font-semibold">{testimonial.weight} em {testimonial.time}</div>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#C4A574] text-[#C4A574]" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Planos Que Cabem
              <span className="block text-[#C4A574]">No Seu Bolso</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Invista na sua saúde por menos de R$ 1 por dia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-[#8B6F47]/20 rounded-2xl hover:scale-105 transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Plano Mensal</h3>
                <div className="text-5xl font-bold text-[#C4A574] mb-2">R$ 30,00</div>
                <div className="text-gray-400">por mês</div>
                <div className="mt-2 text-sm text-[#C4A574] font-semibold">7 dias grátis para testar</div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Acesso total ao app",
                  "Treinos personalizados ilimitados",
                  "Planos nutricionais brasileiros",
                  "Acompanhamento de progresso",
                  "Comunidade exclusiva",
                  "Suporte via WhatsApp"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#C4A574] flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handlePlanClick('monthly')}
                className="w-full py-4 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                Começar Grátis
              </button>
            </div>

            {/* Annual Plan */}
            <div className="relative p-8 bg-gradient-to-br from-[#8B6F47]/20 to-[#C4A574]/20 border-2 border-[#C4A574] rounded-2xl hover:scale-105 transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] rounded-full">
                <span className="text-white font-bold text-sm">MAIS ECONÔMICO</span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Plano Anual</h3>
                <div className="text-5xl font-bold text-[#C4A574] mb-2">R$ 299,90</div>
                <div className="text-gray-400">por ano</div>
                <div className="mt-2 text-sm text-[#C4A574] font-semibold">Economize R$ 60,00 (17% OFF)</div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Tudo do plano mensal",
                  "2 meses grátis",
                  "Consultas com nutricionista",
                  "Planos de treino avançados",
                  "Acesso prioritário a novidades",
                  "Certificado de conclusão"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#C4A574] flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handlePlanClick('annual')}
                className="w-full py-4 bg-gradient-to-r from-[#C4A574] to-[#8B6F47] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                Assinar Agora
              </button>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Aceitamos todos os cartões e PIX</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="px-4 py-2 bg-white/5 border border-[#8B6F47]/20 rounded-lg text-sm">
                💳 Visa
              </div>
              <div className="px-4 py-2 bg-white/5 border border-[#8B6F47]/20 rounded-lg text-sm">
                💳 Mastercard
              </div>
              <div className="px-4 py-2 bg-white/5 border border-[#8B6F47]/20 rounded-lg text-sm">
                💳 Elo
              </div>
              <div className="px-4 py-2 bg-white/5 border border-[#8B6F47]/20 rounded-lg text-sm">
                💰 PIX
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-br from-[#8B6F47]/20 to-[#C4A574]/20 border border-[#8B6F47]/30 rounded-3xl">
            <Award size={64} className="mx-auto mb-6 text-[#C4A574]" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Comece Sua Transformação Hoje
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Junte-se a mais de 500 mil brasileiros que já transformaram suas vidas. 
              Teste grátis por 7 dias, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToPricing}
                className="px-12 py-5 bg-gradient-to-r from-[#8B6F47] to-[#C4A574] text-white rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Começar Grátis Agora
              </button>
              <Link href="/comunidade">
                <button className="px-12 py-5 border-2 border-[#8B6F47] text-white rounded-full font-bold text-xl hover:bg-[#8B6F47]/10 transition-all">
                  Ver Comunidade
                </button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              ✓ Sem cartão de crédito necessário • ✓ Cancele quando quiser • ✓ Suporte em português
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#8B6F47]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C4A574] to-[#8B6F47] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-white font-bold text-xl tracking-wider">VITALIS</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transformando vidas através da saúde e bem-estar.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-[#C4A574] transition-colors">Funcionalidades</a></li>
                <li><a href="#pricing" className="hover:text-[#C4A574] transition-colors">Planos</a></li>
                <li><a href="#testimonials" className="hover:text-[#C4A574] transition-colors">Depoimentos</a></li>
                <li><Link href="/comunidade" className="hover:text-[#C4A574] transition-colors">Comunidade</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#C4A574] transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-[#C4A574] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#C4A574] transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-[#C4A574] transition-colors">Imprensa</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#C4A574] transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-[#C4A574] transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-[#C4A574] transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-[#C4A574] transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#8B6F47]/20 text-center text-gray-400 text-sm">
            <p>© 2024 VITALIS. Todos os direitos reservados. Feito com ❤️ para o Brasil.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

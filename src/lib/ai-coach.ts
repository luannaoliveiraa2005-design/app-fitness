// Sistema de IA Coach - Mensagens personalizadas e motivacionais

export type QuizData = {
  goal: 'emagrecer' | 'ganhar_massa' | 'saude' | 'rotina'
  weightGoal: number
  activityLevel: 'sedentario' | 'leve' | 'moderado' | 'intenso'
  mainDifficulty: 'alimentacao' | 'rotina' | 'motivacao' | 'exercicios'
  availableTime: '15min' | '30min' | '45min' | '60min'
}

export type AIAnalysis = {
  profile: string
  suggestions: string[]
  motivation: string
  nextSteps: string[]
}

export function generatePersonalizedAnalysis(quiz: QuizData): AIAnalysis {
  // Análise do perfil baseada nas respostas
  const profileAnalysis = generateProfileAnalysis(quiz)
  
  // Sugestões personalizadas
  const suggestions = generateSuggestions(quiz)
  
  // Mensagem motivacional
  const motivation = generateMotivation(quiz)
  
  // Próximos passos
  const nextSteps = generateNextSteps(quiz)

  return {
    profile: profileAnalysis,
    suggestions,
    motivation,
    nextSteps
  }
}

function generateProfileAnalysis(quiz: QuizData): string {
  const goalText = {
    emagrecer: 'perder peso de forma saudável',
    ganhar_massa: 'ganhar massa muscular',
    saude: 'melhorar sua saúde geral',
    rotina: 'criar uma rotina fitness consistente'
  }[quiz.goal]

  const activityText = {
    sedentario: 'Você está começando do zero, e isso é incrível! Todo grande atleta começou exatamente onde você está agora.',
    leve: 'Você já tem alguma atividade física, ótimo ponto de partida! Vamos potencializar isso.',
    moderado: 'Você já é ativo! Vamos levar seu condicionamento para o próximo nível.',
    intenso: 'Você já treina pesado! Vamos otimizar seus resultados com estratégias avançadas.'
  }[quiz.activityLevel]

  return `Entendi seu perfil! Você quer ${goalText} e tem ${quiz.availableTime} disponíveis por dia. ${activityText} Com seu objetivo de ${Math.abs(quiz.weightGoal)}kg, vamos criar um plano personalizado que se encaixa perfeitamente na sua rotina.`
}

function generateSuggestions(quiz: QuizData): string[] {
  const suggestions: string[] = []

  // Sugestões baseadas no objetivo
  if (quiz.goal === 'emagrecer') {
    suggestions.push('Foco em déficit calórico controlado (300-500 kcal)')
    suggestions.push('Treinos combinando cardio e musculação')
    suggestions.push('Refeições balanceadas a cada 3-4 horas')
  } else if (quiz.goal === 'ganhar_massa') {
    suggestions.push('Superávit calórico de 300-500 kcal')
    suggestions.push('Treino de força 4-5x por semana')
    suggestions.push('Proteína em todas as refeições (1.8-2g/kg)')
  } else if (quiz.goal === 'saude') {
    suggestions.push('Atividades físicas regulares e prazerosas')
    suggestions.push('Alimentação equilibrada e variada')
    suggestions.push('Foco em bem-estar e qualidade de vida')
  } else {
    suggestions.push('Estabelecer horários fixos para treinar')
    suggestions.push('Começar com metas pequenas e alcançáveis')
    suggestions.push('Criar hábitos sustentáveis a longo prazo')
  }

  // Sugestões baseadas na dificuldade
  if (quiz.mainDifficulty === 'alimentacao') {
    suggestions.push('Planejamento de refeições aos domingos')
    suggestions.push('Receitas práticas e saborosas no app')
  } else if (quiz.mainDifficulty === 'motivacao') {
    suggestions.push('Sistema de conquistas e recompensas')
    suggestions.push('Comunidade ativa para apoio mútuo')
  } else if (quiz.mainDifficulty === 'exercicios') {
    suggestions.push('Treinos guiados passo a passo')
    suggestions.push('Vídeos demonstrativos de cada exercício')
  } else {
    suggestions.push('Lembretes inteligentes personalizados')
    suggestions.push('Treinos flexíveis que se adaptam à sua agenda')
  }

  return suggestions
}

function generateMotivation(quiz: QuizData): string {
  const motivations = {
    emagrecer: '🔥 Cada passo conta! Você não está apenas perdendo peso, está ganhando saúde, confiança e qualidade de vida. Seu corpo é capaz de coisas incríveis, e eu vou estar aqui para te lembrar disso todos os dias!',
    ganhar_massa: '💪 Construir músculos é construir disciplina! Cada treino é um tijolo na construção da sua melhor versão. Você tem tudo que precisa para alcançar o shape dos seus sonhos!',
    saude: '✨ Saúde é o maior patrimônio! Você está investindo no que realmente importa: seu bem-estar. Cada escolha saudável é um presente para o seu futuro. Vamos juntos nessa jornada!',
    rotina: '⚡ Consistência é a chave do sucesso! Criar uma rotina não é sobre perfeição, é sobre progresso. Pequenos passos todos os dias levam a grandes transformações. Você consegue!'
  }

  return motivations[quiz.goal]
}

function generateNextSteps(quiz: QuizData): string[] {
  return [
    'Complete seu perfil com medidas e fotos iniciais',
    'Explore os planos de assinatura e escolha o ideal',
    'Acesse seu primeiro treino personalizado',
    'Configure lembretes para manter a consistência',
    'Junte-se à comunidade VITALIS'
  ]
}

// Mensagens motivacionais contextuais para o dashboard
export function getMotivationalMessage(context: {
  hasWorkedOutToday?: boolean
  streak?: number
  progressPercentage?: number
  lastActivity?: string
}): string {
  const messages = {
    workedOut: [
      '🔥 Arrasou hoje! Seu corpo agradece cada gota de suor!',
      '💪 Treino completo! Você está mais perto do seu objetivo!',
      '⚡ Que energia! Continue assim e os resultados virão!',
      '🌟 Excelente! Cada treino é um passo rumo à sua melhor versão!'
    ],
    streak: [
      `🔥 ${context.streak} dias seguidos! Você é imparável!`,
      `💎 Sequência de ${context.streak} dias! Disciplina é seu sobrenome!`,
      `⚡ ${context.streak} dias de foco! Isso é compromisso de verdade!`
    ],
    progress: [
      `📈 ${context.progressPercentage}% do objetivo! Você está voando!`,
      `🎯 Já conquistou ${context.progressPercentage}% da meta! Incrível!`,
      `✨ ${context.progressPercentage}% completo! Continue nesse ritmo!`
    ],
    general: [
      '👋 Olá! Pronto para mais um dia incrível?',
      '🌅 Novo dia, novas oportunidades! Vamos treinar?',
      '💪 Seu corpo é capaz de muito mais do que você imagina!',
      '🔥 A melhor hora para começar é agora!',
      '⚡ Cada dia é uma chance de ser melhor que ontem!'
    ]
  }

  if (context.hasWorkedOutToday) {
    return messages.workedOut[Math.floor(Math.random() * messages.workedOut.length)]
  }

  if (context.streak && context.streak > 2) {
    return messages.streak[Math.floor(Math.random() * messages.streak.length)]
  }

  if (context.progressPercentage && context.progressPercentage > 0) {
    return messages.progress[Math.floor(Math.random() * messages.progress.length)]
  }

  return messages.general[Math.floor(Math.random() * messages.general.length)]
}

// Mensagens para marcos importantes
export function getMilestoneMessage(milestone: string): string {
  const milestones: Record<string, string> = {
    first_workout: '🎉 Primeiro treino completo! Você deu o passo mais importante: começou! Agora é só manter o ritmo!',
    week_1: '🌟 Uma semana de dedicação! Você provou que é capaz. Continue assim!',
    month_1: '🏆 Um mês de transformação! Olhe o quanto você evoluiu. Isso é só o começo!',
    goal_25: '🎯 25% do objetivo alcançado! Você está no caminho certo!',
    goal_50: '🔥 Metade do caminho! Você é imparável!',
    goal_75: '💎 75% completo! A linha de chegada está próxima!',
    goal_100: '🏆 OBJETIVO CONQUISTADO! Você é uma inspiração! Hora de celebrar e definir novos desafios!'
  }

  return milestones[milestone] || '🌟 Parabéns por mais uma conquista!'
}

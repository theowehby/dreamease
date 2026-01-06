export const APP_CONFIG = {
  name: 'DreamEase',
  description: 'Seu refúgio para noites tranquilas e dias mais leves',
  version: '1.0.0',
  
  // Cores da identidade visual
  colors: {
    primary: {
      yellow: '#FCD34D',
      green: '#90EE90',
      blue: '#87CEEB',
      cream: '#FFF8DC'
    },
    secondary: {
      coral: '#FF9999',
      pink: '#FFB6C1'
    }
  },

  // Configurações de sessão
  session: {
    breathingDurations: {
      inhale: 4000,
      hold: 7000,
      exhale: 8000
    },
    soundTimerMin: 5,
    soundTimerMax: 120,
    soundTimerStep: 5,
    defaultSoundTimer: 30
  },

  // Metas de progresso
  goals: {
    dailyStreak: 7,
    weeklySessions: 5,
    monthlyGoal: 20
  },

  // Contatos de emergência
  emergency: {
    cvv: '188',
    cvvDescription: 'Centro de Valorização da Vida - Apoio emocional e prevenção do suicídio',
    caps: '0800 026 2336',
    capsDescription: 'CAPS - Centro de Atenção Psicossocial'
  }
}

export const MOODS = [
  { emoji: '😊', label: 'Feliz', value: 'happy' },
  { emoji: '😌', label: 'Calmo', value: 'calm' },
  { emoji: '😔', label: 'Triste', value: 'sad' },
  { emoji: '😰', label: 'Ansioso', value: 'anxious' },
  { emoji: '😫', label: 'Cansado', value: 'tired' }
]

export const SOUNDS = [
  { 
    id: 'rain', 
    name: 'Chuva Suave', 
    emoji: '🌧️', 
    duration: '30 min', 
    color: 'from-blue-400 to-cyan-500', 
    description: 'Som relaxante de chuva',
    category: 'nature'
  },
  { 
    id: 'ocean', 
    name: 'Ondas do Mar', 
    emoji: '🌊', 
    duration: '45 min', 
    color: 'from-cyan-400 to-teal-500', 
    description: 'Ondas quebrando na praia',
    category: 'nature'
  },
  { 
    id: 'forest', 
    name: 'Floresta Tropical', 
    emoji: '🌳', 
    duration: '60 min', 
    color: 'from-green-400 to-emerald-500', 
    description: 'Sons da natureza',
    category: 'nature'
  },
  { 
    id: 'birds', 
    name: 'Pássaros ao Amanhecer', 
    emoji: '🐦', 
    duration: '20 min', 
    color: 'from-yellow-400 to-orange-400', 
    description: 'Canto dos pássaros',
    category: 'nature'
  },
  { 
    id: 'fire', 
    name: 'Lareira Crepitante', 
    emoji: '🔥', 
    duration: '40 min', 
    color: 'from-orange-400 to-red-400', 
    description: 'Som aconchegante de lareira',
    category: 'ambient'
  },
  { 
    id: 'wind', 
    name: 'Vento nas Folhas', 
    emoji: '🍃', 
    duration: '35 min', 
    color: 'from-teal-400 to-green-400', 
    description: 'Brisa suave',
    category: 'nature'
  }
]

export const STORIES = [
  { 
    id: '1', 
    title: 'Jardim Secreto', 
    narrator: 'Voz Feminina', 
    duration: '15 min', 
    emoji: '🌺', 
    color: 'from-pink-400 to-rose-400', 
    rating: 4.9,
    category: 'nature'
  },
  { 
    id: '2', 
    title: 'Noite Estrelada', 
    narrator: 'Voz Masculina', 
    duration: '20 min', 
    emoji: '⭐', 
    color: 'from-indigo-400 to-purple-400', 
    rating: 4.8,
    category: 'fantasy'
  },
  { 
    id: '3', 
    title: 'Praia ao Entardecer', 
    narrator: 'Voz Feminina', 
    duration: '18 min', 
    emoji: '🏖️', 
    color: 'from-amber-400 to-orange-400', 
    rating: 4.7,
    category: 'nature'
  },
  { 
    id: '4', 
    title: 'Montanhas Serenas', 
    narrator: 'Voz Masculina', 
    duration: '25 min', 
    emoji: '⛰️', 
    color: 'from-slate-400 to-gray-500', 
    rating: 4.9,
    category: 'nature'
  }
]

export const TECHNIQUES = [
  { 
    id: '1', 
    title: 'Respiração 4-7-8', 
    description: 'Técnica rápida para acalmar', 
    duration: '5 min', 
    emoji: '🫁', 
    color: 'from-blue-400 to-cyan-400',
    difficulty: 'easy'
  },
  { 
    id: '2', 
    title: 'Relaxamento Muscular', 
    description: 'Libere a tensão do corpo', 
    duration: '10 min', 
    emoji: '💆', 
    color: 'from-purple-400 to-pink-400',
    difficulty: 'medium'
  },
  { 
    id: '3', 
    title: 'Visualização Guiada', 
    description: 'Imagine um lugar tranquilo', 
    duration: '8 min', 
    emoji: '🌅', 
    color: 'from-orange-400 to-yellow-400',
    difficulty: 'easy'
  },
  { 
    id: '4', 
    title: 'Meditação Mindfulness', 
    description: 'Foque no momento presente', 
    duration: '12 min', 
    emoji: '🧘', 
    color: 'from-green-400 to-teal-400',
    difficulty: 'medium'
  }
]

export const DAILY_TIPS = [
  'Evite telas 1 hora antes de dormir. A luz azul pode interferir na produção de melatonina, o hormônio do sono.',
  'Mantenha seu quarto fresco, escuro e silencioso para uma melhor qualidade de sono.',
  'Estabeleça um horário regular para dormir e acordar, mesmo nos fins de semana.',
  'Pratique exercícios físicos regularmente, mas evite atividades intensas próximo ao horário de dormir.',
  'Evite cafeína e refeições pesadas nas horas que antecedem o sono.',
  'Crie um ritual relaxante antes de dormir, como ler um livro ou tomar um banho morno.',
  'Use técnicas de respiração profunda para acalmar a mente antes de dormir.',
  'Mantenha um diário de gratidão para reduzir pensamentos ansiosos à noite.',
  'Experimente aromaterapia com lavanda ou camomila para promover relaxamento.',
  'Se não conseguir dormir após 20 minutos, levante-se e faça uma atividade relaxante até sentir sono.'
]

export const ACHIEVEMENTS = [
  { 
    id: 'streak_7', 
    emoji: '🔥', 
    title: '7 dias seguidos', 
    description: 'Manteve uma sequência de 7 dias',
    requirement: 7
  },
  { 
    id: 'sessions_30', 
    emoji: '🌟', 
    title: '30 sessões', 
    description: 'Completou 30 sessões de relaxamento',
    requirement: 30
  },
  { 
    id: 'sleep_master', 
    emoji: '🏆', 
    title: 'Mestre do sono', 
    description: 'Manteve média de 8h de sono por 30 dias',
    requirement: 30
  },
  { 
    id: 'streak_100', 
    emoji: '💎', 
    title: '100 dias', 
    description: 'Manteve uma sequência de 100 dias',
    requirement: 100
  }
]

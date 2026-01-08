'use client'

import { useState } from 'react'
import { Trophy, Calendar, TrendingUp, Target, Flame, Star } from 'lucide-react'

export default function ProgressoPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('week')

  const stats = {
    week: {
      sessions: 7,
      totalTime: 210, // minutos
      streak: 5,
      mood: 4.2
    },
    month: {
      sessions: 28,
      totalTime: 840,
      streak: 12,
      mood: 4.1
    }
  }

  const achievements = [
    {
      id: 1,
      title: "Primeira Sessão",
      description: "Completou sua primeira sessão de relaxamento",
      icon: Star,
      unlocked: true,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Sequência de 7 Dias",
      description: "Manteve uma sequência de 7 dias consecutivos",
      icon: Flame,
      unlocked: true,
      date: "2024-01-20"
    },
    {
      id: 3,
      title: "Maratonista",
      description: "Completou 10 sessões em uma semana",
      icon: Trophy,
      unlocked: false,
      progress: 7,
      total: 10
    },
    {
      id: 4,
      title: "Especialista em Respiração",
      description: "Praticou técnicas de respiração por 5 dias",
      icon: Target,
      unlocked: false,
      progress: 3,
      total: 5
    }
  ]

  const currentStats = stats[selectedPeriod as keyof typeof stats]

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Seu Progresso</h1>
          <p className="text-white/80">Acompanhe sua jornada de bem-estar</p>
        </div>

        {/* Período */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
          <div className="flex space-x-2">
            {[
              { id: 'week', name: 'Esta Semana' },
              { id: 'month', name: 'Este Mês' }
            ].map((period) => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedPeriod === period.id
                    ? 'bg-yellow-500 text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {period.name}
              </button>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{currentStats.sessions}</div>
            <div className="text-sm text-gray-600">Sessões</div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{formatTime(currentStats.totalTime)}</div>
            <div className="text-sm text-gray-600">Tempo Total</div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{currentStats.streak}</div>
            <div className="text-sm text-gray-600">Sequência</div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{currentStats.mood.toFixed(1)}</div>
            <div className="text-sm text-gray-600">Humor Médio</div>
          </div>
        </div>

        {/* Conquistas */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
            Conquistas
          </h2>

          <div className="space-y-3">
            {achievements.map((achievement) => {
              const Icon = achievement.icon
              return (
                <div
                  key={achievement.id}
                  className={`p-3 rounded-lg border transition-all duration-200 ${
                    achievement.unlocked
                      ? 'bg-yellow-50 border-yellow-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      achievement.unlocked ? 'bg-yellow-500' : 'bg-gray-400'
                    }`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-medium ${achievement.unlocked ? 'text-gray-900' : 'text-gray-500'}`}>
                        {achievement.title}
                      </h3>
                      <p className={`text-sm ${achievement.unlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                        {achievement.description}
                      </p>
                      {achievement.unlocked && achievement.date && (
                        <p className="text-xs text-gray-500 mt-1">
                          Conquistado em {new Date(achievement.date).toLocaleDateString('pt-BR')}
                        </p>
                      )}
                      {!achievement.unlocked && achievement.progress && (
                        <div className="mt-2">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Progresso</span>
                            <span>{achievement.progress}/{achievement.total}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
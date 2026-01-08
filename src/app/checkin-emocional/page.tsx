'use client'

import { useState } from 'react'
import { Heart, Smile, Meh, Frown, Calendar, Save } from 'lucide-react'

export default function CheckInEmocionalPage() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [gratitude, setGratitude] = useState('')
  const [challenges, setChallenges] = useState('')
  const [goals, setGoals] = useState('')
  const [isSaved, setIsSaved] = useState(false)

  const moods = [
    { value: 1, label: 'Muito Mal', icon: Frown, color: 'text-red-500' },
    { value: 2, label: 'Mal', icon: Frown, color: 'text-orange-500' },
    { value: 3, label: 'Neutro', icon: Meh, color: 'text-yellow-500' },
    { value: 4, label: 'Bem', icon: Smile, color: 'text-green-500' },
    { value: 5, label: 'Muito Bem', icon: Smile, color: 'text-green-600' }
  ]

  const handleSave = () => {
    // Aqui seria salvo no Supabase
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Check-in Emocional</h1>
          <p className="text-white/80">{today}</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 space-y-6">
          {/* Humor */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-red-500" />
              Como você está se sentindo hoje?
            </h2>
            <div className="grid grid-cols-5 gap-2">
              {moods.map((mood) => {
                const Icon = mood.icon
                return (
                  <button
                    key={mood.value}
                    onClick={() => setSelectedMood(mood.value)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      selectedMood === mood.value
                        ? 'border-yellow-500 bg-yellow-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className={`w-6 h-6 mx-auto mb-1 ${mood.color}`} />
                    <span className="text-xs text-gray-600">{mood.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Gratidão */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Pelo que você é grato hoje?
            </h2>
            <textarea
              value={gratitude}
              onChange={(e) => setGratitude(e.target.value)}
              placeholder="Escreva algo que te deixou feliz hoje..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
              rows={3}
            />
          </div>

          {/* Desafios */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Que desafios você enfrentou?
            </h2>
            <textarea
              value={challenges}
              onChange={(e) => setChallenges(e.target.value)}
              placeholder="Descreva os desafios do dia..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
              rows={3}
            />
          </div>

          {/* Metas */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Metas para amanhã
            </h2>
            <textarea
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              placeholder="O que você quer alcançar amanhã..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
              rows={3}
            />
          </div>

          {/* Botão Salvar */}
          <button
            onClick={handleSave}
            disabled={!selectedMood || !gratitude.trim()}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-lg font-semibold transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <Save className="w-5 h-5 mr-2" />
            {isSaved ? 'Salvo!' : 'Salvar Check-in'}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/80 text-sm">
            💡 Lembre-se: seu bem-estar emocional é prioridade
          </p>
        </div>
      </div>
    </div>
  )
}
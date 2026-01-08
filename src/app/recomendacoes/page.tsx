'use client'

import { useState } from 'react'
import { BookOpen, Play, Heart, Star, TrendingUp } from 'lucide-react'

export default function RecomendacoesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const recommendations = [
    {
      id: 1,
      title: "Técnica 4-7-8 para Ansiedade",
      type: "Respiração",
      category: "relaxamento",
      description: "Uma técnica poderosa para acalmar a mente em momentos de crise.",
      duration: "5 min",
      difficulty: "Fácil",
      rating: 4.8
    },
    {
      id: 2,
      title: "História: O Vale Tranquilo",
      type: "História",
      category: "sono",
      description: "Uma jornada relaxante através de um vale mágico.",
      duration: "15 min",
      difficulty: "Fácil",
      rating: 4.9
    },
    {
      id: 3,
      title: "Meditação Guiada para Iniciantes",
      type: "Meditação",
      category: "relaxamento",
      description: "Introdução perfeita à meditação mindfulness.",
      duration: "10 min",
      difficulty: "Iniciante",
      rating: 4.7
    },
    {
      id: 4,
      title: "Som da Chuva na Floresta",
      type: "Som",
      category: "sono",
      description: "Chuva suave combinada com sons da natureza.",
      duration: "∞",
      difficulty: "Fácil",
      rating: 4.6
    }
  ]

  const categories = [
    { id: 'all', name: 'Todas', icon: BookOpen },
    { id: 'relaxamento', name: 'Relaxamento', icon: Heart },
    { id: 'sono', name: 'Sono', icon: Star }
  ]

  const filteredRecommendations = selectedCategory === 'all'
    ? recommendations
    : recommendations.filter(r => r.category === selectedCategory)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil': return 'bg-green-100 text-green-800'
      case 'Iniciante': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Recomendações</h1>
          <p className="text-white/80">Conteúdo personalizado para seu bem-estar</p>
        </div>

        {/* Categorias */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
          <div className="flex space-x-2 overflow-x-auto">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-yellow-500 text-white'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Recomendações */}
        <div className="space-y-4">
          {filteredRecommendations.map((rec) => (
            <div
              key={rec.id}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/30"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{rec.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>{rec.type}</span>
                    <span>{rec.duration}</span>
                    <span className={`px-2 py-1 rounded-full ${getDifficultyColor(rec.difficulty)}`}>
                      {rec.difficulty}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 ml-3">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{rec.rating}</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center">
                <Play className="w-4 h-4 mr-2" />
                Começar
              </button>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Seu Progresso
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-sm text-white/80">Sessões</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">4.7</div>
              <div className="text-sm text-white/80">Avaliação</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">85%</div>
              <div className="text-sm text-white/80">Concluído</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
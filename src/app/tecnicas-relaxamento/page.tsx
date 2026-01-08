'use client'

import { useState } from 'react'
import { Zap, Brain, Heart, Moon, Play, Clock } from 'lucide-react'

export default function TecnicasRelaxamentoPage() {
  const [selectedTechnique, setSelectedTechnique] = useState<number | null>(null)

  const techniques = [
    {
      id: 1,
      title: "Respiração 4-7-8",
      description: "Técnica poderosa para acalmar a mente rapidamente",
      icon: Brain,
      color: "bg-blue-500",
      duration: "4 min",
      difficulty: "Fácil",
      steps: [
        "Sente-se confortavelmente com a coluna ereta",
        "Inspire profundamente pelo nariz por 4 segundos",
        "Segure a respiração por 7 segundos",
        "Expire lentamente pela boca por 8 segundos",
        "Repita o ciclo 4 vezes"
      ]
    },
    {
      id: 2,
      title: "Relaxamento Muscular",
      description: "Liberte a tensão do corpo gradualmente",
      icon: Heart,
      color: "bg-green-500",
      duration: "10 min",
      difficulty: "Médio",
      steps: [
        "Deite-se em um lugar confortável",
        "Comece pelos pés: tensione os músculos por 5 segundos",
        "Solte lentamente, sentindo o relaxamento",
        "Suba gradualmente: pernas, abdômen, peito, braços, pescoço",
        "Respire profundamente durante todo o processo"
      ]
    },
    {
      id: 3,
      title: "Visualização Guiada",
      description: "Crie imagens mentais tranquilas em sua mente",
      icon: Moon,
      color: "bg-purple-500",
      duration: "8 min",
      difficulty: "Fácil",
      steps: [
        "Feche os olhos e respire profundamente",
        "Imagine um lugar seguro e tranquilo",
        "Explore os detalhes: cores, sons, texturas",
        "Permita-se sentir a paz desse lugar",
        "Quando estiver pronto, volte lentamente"
      ]
    },
    {
      id: 4,
      title: "Body Scan",
      description: "Varredura corporal para identificar e liberar tensão",
      icon: Zap,
      color: "bg-orange-500",
      duration: "15 min",
      difficulty: "Avançado",
      steps: [
        "Deite-se de barriga para cima",
        "Comece pelos dedos dos pés",
        "Mova sua atenção lentamente pelo corpo",
        "Observe sensações sem julgá-las",
        "Liberte qualquer tensão que encontrar"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Técnicas de Relaxamento</h1>
          <p className="text-white/80">Ferramentas imediatas para momentos de ansiedade</p>
        </div>

        {selectedTechnique === null ? (
          // Lista de técnicas
          <div className="space-y-4">
            {techniques.map((technique) => {
              const Icon = technique.icon
              return (
                <div
                  key={technique.id}
                  onClick={() => setSelectedTechnique(technique.id)}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/30 cursor-pointer hover:bg-white/95 transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${technique.color} rounded-full flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{technique.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{technique.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {technique.duration}
                        </span>
                        <span className={`px-2 py-1 rounded-full ${
                          technique.difficulty === 'Fácil' ? 'bg-green-100 text-green-800' :
                          technique.difficulty === 'Médio' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {technique.difficulty}
                        </span>
                      </div>
                    </div>
                    <Play className="w-6 h-6 text-gray-400" />
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          // Detalhes da técnica
          (() => {
            const technique = techniques.find(t => t.id === selectedTechnique)!
            const Icon = technique.icon

            return (
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
                <button
                  onClick={() => setSelectedTechnique(null)}
                  className="text-gray-500 hover:text-gray-700 mb-4"
                >
                  ← Voltar
                </button>

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${technique.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{technique.title}</h2>
                  <p className="text-gray-600">{technique.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Como praticar:</h3>
                  <ol className="space-y-3">
                    {technique.steps.map((step, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className={`w-6 h-6 ${technique.color} text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5`}>
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Iniciar Sessão
                  </button>
                  <button
                    onClick={() => setSelectedTechnique(null)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Lista
                  </button>
                </div>
              </div>
            )
          })()
        )}

        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
          <p className="text-white/80 text-sm">
            💡 Pratique regularmente para melhores resultados. Comece com sessões curtas e aumente gradualmente.
          </p>
        </div>
      </div>
    </div>
  )
}
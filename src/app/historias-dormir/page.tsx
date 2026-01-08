'use client'

import { useState } from 'react'
import { Book, Play, Pause, SkipBack, SkipForward, Moon } from 'lucide-react'

export default function HistoriasDormirPage() {
  const [currentStory, setCurrentStory] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const stories = [
    {
      title: "A Floresta Encantada",
      duration: "15 min",
      description: "Uma jornada mágica através de uma floresta onde as árvores contam histórias antigas.",
      category: "Fantasia"
    },
    {
      title: "O Barco das Estrelas",
      duration: "12 min",
      description: "Navegue pelos céus noturnos em um barco feito de luz das estrelas.",
      category: "Aventura"
    },
    {
      title: "O Jardim Secreto",
      duration: "18 min",
      description: "Descubra um jardim escondido onde flores dançam ao luar.",
      category: "Natureza"
    },
    {
      title: "O Ursinho Sonhador",
      duration: "10 min",
      description: "Acompanhe as aventuras noturnas de um ursinho que não consegue dormir.",
      category: "Infantil"
    }
  ]

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length)
    setProgress(0)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
    setProgress(0)
  }

  const story = stories[currentStory]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Histórias para Dormir</h1>
          <p className="text-purple-200">Deixe-se levar por contos encantadores</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Book className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
            <p className="text-purple-200 text-sm mb-2">{story.category} • {story.duration}</p>
            <p className="text-white/80 text-sm">{story.description}</p>
          </div>

          <div className="mb-6">
            <div className="w-full bg-white/20 rounded-full h-2 mb-2">
              <div 
                className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-white/60">
              <span>0:00</span>
              <span>{story.duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={prevStory}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <SkipBack className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={togglePlay}
              className="p-4 bg-yellow-500 hover:bg-yellow-600 rounded-full transition-colors"
            >
              {isPlaying ? 
                <Pause className="w-8 h-8 text-white" /> : 
                <Play className="w-8 h-8 text-white" />
              }
            </button>
            <button
              onClick={nextStory}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <SkipForward className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold mb-4">Outras Histórias</h3>
          {stories.map((s, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentStory(index)
                setProgress(0)
                setIsPlaying(false)
              }}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                index === currentStory ? 'bg-yellow-500/20 border border-yellow-500' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-white mb-1">{s.title}</h4>
                  <p className="text-sm text-white/70 mb-1">{s.category} • {s.duration}</p>
                  <p className="text-sm text-white/60 line-clamp-2">{s.description}</p>
                </div>
                {index === currentStory && (
                  <div className="ml-3">
                    <Moon className="w-5 h-5 text-yellow-400" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { Volume2, VolumeX, Play, Pause, Waves, Wind, CloudRain, TreePine } from 'lucide-react'

export default function SonsDormirPage() {
  const [playingSound, setPlayingSound] = useState<string | null>(null)
  const [volume, setVolume] = useState(50)

  const sounds = [
    {
      id: 'ocean',
      name: 'Oceano',
      description: 'Ondas suaves do mar',
      icon: Waves,
      color: 'bg-blue-500'
    },
    {
      id: 'forest',
      name: 'Floresta',
      description: 'Cantos de pássaros e vento',
      icon: TreePine,
      color: 'bg-green-500'
    },
    {
      id: 'rain',
      name: 'Chuva',
      description: 'Chuva leve na janela',
      icon: CloudRain,
      color: 'bg-gray-500'
    },
    {
      id: 'wind',
      name: 'Vento',
      description: 'Brisa suave nas folhas',
      icon: Wind,
      color: 'bg-purple-500'
    }
  ]

  const toggleSound = (soundId: string) => {
    if (playingSound === soundId) {
      setPlayingSound(null)
    } else {
      setPlayingSound(soundId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Sons para Dormir</h1>
          <p className="text-blue-200">Escolha um som relaxante para sua noite</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-medium">Volume</span>
            <div className="flex items-center space-x-2">
              <VolumeX className="w-5 h-5 text-white/60" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-20 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
              <Volume2 className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="text-center text-white/80">
            {volume}%
          </div>
        </div>

        <div className="space-y-4">
          {sounds.map((sound) => {
            const Icon = sound.icon
            const isPlaying = playingSound === sound.id

            return (
              <div
                key={sound.id}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border transition-all duration-200 ${
                  isPlaying ? 'border-yellow-400 bg-white/20' : 'border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${sound.color} rounded-full flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{sound.name}</h3>
                      <p className="text-sm text-white/70">{sound.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSound(soundId)}
                    className={`p-3 rounded-full transition-colors ${
                      isPlaying ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-white/20 hover:bg-white/30'
                    }`}
                  >
                    {isPlaying ? 
                      <Pause className="w-6 h-6 text-white" /> : 
                      <Play className="w-6 h-6 text-white" />
                    }
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">
            💡 Dica: Combine sons relaxantes com respiração profunda para melhores resultados
          </p>
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState, useEffect } from 'react'
import { Moon, Clock, Play, Pause, RotateCcw } from 'lucide-react'

export default function RitualNoturnoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutos

  const steps = [
    {
      title: "Preparação",
      description: "Crie um ambiente tranquilo. Apague as luzes e prepare-se para relaxar.",
      duration: 60,
      icon: Moon
    },
    {
      title: "Respiração Profunda",
      description: "Respire profundamente por 4 segundos, segure por 4, expire por 4.",
      duration: 120,
      icon: Clock
    },
    {
      title: "Relaxamento Muscular",
      description: "Tensione e relaxe cada grupo muscular do seu corpo, começando pelos pés.",
      duration: 120,
      icon: Moon
    }
  ]

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isPlaying && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0 && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setTimeLeft(steps[currentStep + 1].duration)
    }
    return () => clearTimeout(timer)
  }, [isPlaying, timeLeft, currentStep])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const reset = () => {
    setIsPlaying(false)
    setCurrentStep(0)
    setTimeLeft(steps[0].duration)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const Icon = steps[currentStep].icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Ritual Noturno</h1>
          <p className="text-purple-200">Prepare-se para uma noite de sono profundo</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{steps[currentStep].title}</h2>
            <p className="text-purple-200 text-sm">{steps[currentStep].description}</p>
          </div>

          <div className="text-center mb-6">
            <div className="text-4xl font-bold mb-2">{formatTime(timeLeft)}</div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-yellow-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${(timeLeft / steps[currentStep].duration) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={reset}
              className="p-3 bg-gray-600 hover:bg-gray-500 rounded-full transition-colors"
            >
              <RotateCcw className="w-6 h-6" />
            </button>
            <button
              onClick={togglePlay}
              className="p-4 bg-yellow-500 hover:bg-yellow-600 rounded-full transition-colors"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`p-3 rounded-lg flex items-center space-x-3 ${
                index === currentStep ? 'bg-yellow-500/20 border border-yellow-500' : 'bg-white/5'
              }`}
            >
              <step.icon className="w-5 h-5 text-yellow-400" />
              <div className="flex-1">
                <div className="font-medium">{step.title}</div>
                <div className="text-sm text-purple-200">{formatTime(step.duration)}</div>
              </div>
              {index < currentStep && <div className="text-green-400">✓</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
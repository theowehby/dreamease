'use client'

import { useState, useEffect } from 'react'
import { Wind, Play, Pause, RotateCcw } from 'lucide-react'

export default function RespiracaoGuiadaPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale')
  const [timeLeft, setTimeLeft] = useState(4)
  const [cycle, setCycle] = useState(0)

  const phases = {
    inhale: { duration: 4, label: 'Inspire', color: 'bg-blue-500' },
    hold: { duration: 4, label: 'Segure', color: 'bg-green-500' },
    exhale: { duration: 4, label: 'Expire', color: 'bg-purple-500' }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isPlaying) {
      timer = setTimeout(() => {
        if (timeLeft > 1) {
          setTimeLeft(timeLeft - 1)
        } else {
          // Próxima fase
          if (phase === 'inhale') {
            setPhase('hold')
            setTimeLeft(phases.hold.duration)
          } else if (phase === 'hold') {
            setPhase('exhale')
            setTimeLeft(phases.exhale.duration)
          } else {
            setPhase('inhale')
            setTimeLeft(phases.inhale.duration)
            setCycle(cycle + 1)
          }
        }
      }, 1000)
    }
    return () => clearTimeout(timer)
  }, [isPlaying, timeLeft, phase, cycle])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const reset = () => {
    setIsPlaying(false)
    setPhase('inhale')
    setTimeLeft(4)
    setCycle(0)
  }

  const currentPhase = phases[phase]
  const progress = ((currentPhase.duration - timeLeft) / currentPhase.duration) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Respiração Guiada</h1>
          <p className="text-blue-100">4-4-4: Inspire, segure, expire</p>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30">
          <div className="text-center mb-8">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-8 border-white/30"></div>
              <div 
                className={`absolute inset-0 rounded-full border-8 ${currentPhase.color} transition-all duration-1000`}
                style={{
                  clipPath: `polygon(0 0, 100% 0, 100% ${progress}%, 0 ${progress}%)`
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">{timeLeft}</div>
                  <div className="text-xl text-white/80">{currentPhase.label}</div>
                </div>
              </div>
            </div>

            <div className="text-white/80 mb-4">
              Ciclo: {cycle}
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={reset}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <RotateCcw className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={togglePlay}
              className="p-4 bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              {isPlaying ? 
                <Pause className="w-8 h-8 text-gray-800" /> : 
                <Play className="w-8 h-8 text-gray-800" />
              }
            </button>
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-white">Inspire (4s)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-white">Segure (4s)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span className="text-white">Expire (4s)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
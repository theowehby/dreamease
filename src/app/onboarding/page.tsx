'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Heart, Star, Moon, ArrowRight } from 'lucide-react'

export default function OnboardingPage() {
  const [step, setStep] = useState(0)
  const router = useRouter()

  const steps = [
    {
      title: "Bem-vindo ao DreamEase",
      description: "Seu companheiro para noites tranquilas e bem-estar emocional",
      icon: Moon,
      color: "text-yellow-500"
    },
    {
      title: "Descubra a Paz Interior",
      description: "Técnicas guiadas para relaxamento e controle da ansiedade",
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: "Sua Jornada Começa Agora",
      description: "Vamos juntos criar hábitos saudáveis para seu sono",
      icon: Star,
      color: "text-purple-500"
    }
  ]

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      router.push('/dashboard')
    }
  }

  const currentStep = steps[step]
  const Icon = currentStep.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-yellow-200/50 text-center">
          <div className={`w-20 h-20 ${currentStep.color} mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-100`}>
            <Icon className="w-10 h-10" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {currentStep.title}
          </h1>
          
          <p className="text-gray-600 mb-8">
            {currentStep.description}
          </p>

          <div className="flex justify-center space-x-2 mb-8">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === step ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
          >
            {step === steps.length - 1 ? 'Começar Jornada' : 'Próximo'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}
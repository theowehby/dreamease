'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Moon, Star, Heart, Zap, LogOut, User, BarChart3, Calendar, Clock, Wind, Book, MessageCircle, Target, Play } from 'lucide-react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }
      setUser(user)
      setLoading(false)
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        router.push('/login')
      } else {
        setUser(session.user)
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-900"></div>
      </div>
    )
  }

  const quickActions = [
    {
      title: 'Ritual Noturno',
      description: 'Prepare-se para dormir',
      icon: Moon,
      href: '/ritual-noturno',
      color: 'bg-indigo-500'
    },
    {
      title: 'Respiração Guiada',
      description: '4-4-4 para ansiedade',
      icon: Wind,
      href: '/respiracao-guiada',
      color: 'bg-blue-500'
    },
    {
      title: 'Sons para Dormir',
      description: 'Relaxantes e calmantes',
      icon: Play,
      href: '/sons-dormir',
      color: 'bg-green-500'
    },
    {
      title: 'Histórias para Dormir',
      description: 'Contos encantadores',
      icon: Book,
      href: '/historias-dormir',
      color: 'bg-purple-500'
    },
    {
      title: 'Check-in Emocional',
      description: 'Como você está hoje?',
      icon: Heart,
      href: '/checkin-emocional',
      color: 'bg-pink-500'
    },
    {
      title: 'Chat de Suporte',
      description: 'Fale com nosso assistente',
      icon: MessageCircle,
      href: '/chat-suporte',
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-yellow-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Moon className="w-8 h-8 text-yellow-800" />
              <span className="text-2xl font-bold text-yellow-900">DreamEase</span>
            </div>
            <div className="flex items-center space-4">
              <Link href="/admin" className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                Admin
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-yellow-900 hover:text-yellow-700 font-medium"
              >
                <LogOut className="w-5 h-5" />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-yellow-200/50 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Olá, {user?.user_metadata?.name || 'Usuário'}! 👋
              </h1>
              <p className="text-gray-600">Bem-vindo ao seu painel de controle do sono</p>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30">
              <User className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Horas de Sono</p>
                <p className="text-2xl font-bold text-gray-800">7.5h</p>
              </div>
              <Moon className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Qualidade</p>
                <p className="text-2xl font-bold text-gray-800">85%</p>
              </div>
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ciclos</p>
                <p className="text-2xl font-bold text-gray-800">5</p>
              </div>
              <BarChart3 className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Dias Seguidos</p>
                <p className="text-2xl font-bold text-gray-800">12</p>
              </div>
              <Calendar className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Ações Rápidas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Link
                  key={action.title}
                  href={action.href}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50 hover:bg-white/95 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                  </div>
                  <div className="text-yellow-600 font-medium text-sm group-hover:text-yellow-700">
                    Começar →
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Progress & Recommendations */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link
            href="/progresso"
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-yellow-200/50 hover:bg-white/95 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Seu Progresso</h2>
              <Target className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="text-gray-600 mb-4">Acompanhe suas conquistas e estatísticas</p>
            <div className="text-yellow-600 font-medium">Ver progresso →</div>
          </Link>

          <Link
            href="/recomendacoes"
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-yellow-200/50 hover:bg-white/95 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Recomendações</h2>
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="text-gray-600 mb-4">Conteúdo personalizado para você</p>
            <div className="text-yellow-600 font-medium">Ver recomendações →</div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-yellow-200/50">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Atividade Recente</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
              <Moon className="w-8 h-8 text-yellow-600" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">Sessão de meditação concluída</p>
                <p className="text-sm text-gray-600">Há 2 horas</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
              <Star className="w-8 h-8 text-yellow-600" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">Meta de sono atingida</p>
                <p className="text-sm text-gray-600">Ontem</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
              <Heart className="w-8 h-8 text-yellow-600" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">Exercício de respiração realizado</p>
                <p className="text-sm text-gray-600">2 dias atrás</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
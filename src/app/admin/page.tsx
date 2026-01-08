'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Moon, Users, BarChart3, Settings, LogOut, Shield, Database, Activity } from 'lucide-react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function AdminPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalSessions: 0,
    avgSleepHours: 0
  })
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

      // Mock stats - in a real app, you'd fetch from your database
      setStats({
        totalUsers: 1247,
        activeUsers: 892,
        totalSessions: 15432,
        avgSleepHours: 7.3
      })
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-yellow-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-yellow-800" />
              <span className="text-2xl font-bold text-yellow-900">DreamEase Admin</span>
            </div>
            <div className="flex items-center space-4">
              <Link href="/dashboard" className="text-yellow-900 hover:text-yellow-700 font-medium">
                Dashboard
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
                Painel Administrativo 👑
              </h1>
              <p className="text-gray-600">Gerencie usuários, dados e configurações do sistema</p>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Usuários</p>
                <p className="text-2xl font-bold text-gray-800">{stats.totalUsers.toLocaleString()}</p>
              </div>
              <Users className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Usuários Ativos</p>
                <p className="text-2xl font-bold text-gray-800">{stats.activeUsers.toLocaleString()}</p>
              </div>
              <Activity className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Sessões Totais</p>
                <p className="text-2xl font-bold text-gray-800">{stats.totalSessions.toLocaleString()}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Média Sono (h)</p>
                <p className="text-2xl font-bold text-gray-800">{stats.avgSleepHours}</p>
              </div>
              <Moon className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Admin Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <Users className="w-8 h-8 text-yellow-600" />
              <h3 className="text-lg font-bold text-gray-800">Gerenciar Usuários</h3>
            </div>
            <p className="text-gray-600 mb-4">Visualizar, editar e gerenciar contas de usuários</p>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white py-2 rounded-lg font-semibold transition-all duration-200">
              Acessar
            </button>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <Database className="w-8 h-8 text-yellow-600" />
              <h3 className="text-lg font-bold text-gray-800">Banco de Dados</h3>
            </div>
            <p className="text-gray-600 mb-4">Gerenciar dados, backups e configurações do banco</p>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white py-2 rounded-lg font-semibold transition-all duration-200">
              Acessar
            </button>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <BarChart3 className="w-8 h-8 text-yellow-600" />
              <h3 className="text-lg font-bold text-gray-800">Relatórios</h3>
            </div>
            <p className="text-gray-600 mb-4">Analisar métricas e gerar relatórios detalhados</p>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white py-2 rounded-lg font-semibold transition-all duration-200">
              Acessar
            </button>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <Settings className="w-8 h-8 text-yellow-600" />
              <h3 className="text-lg font-bold text-gray-800">Configurações</h3>
            </div>
            <p className="text-gray-600 mb-4">Configurar sistema, notificações e integrações</p>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white py-2 rounded-lg font-semibold transition-all duration-200">
              Acessar
            </button>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <Activity className="w-8 h-8 text-yellow-600" />
              <h3 className="text-lg font-bold text-gray-800">Monitoramento</h3>
            </div>
            <p className="text-gray-600 mb-4">Monitorar performance e logs do sistema</p>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white py-2 rounded-lg font-semibold transition-all duration-200">
              Acessar
            </button>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <Shield className="w-8 h-8 text-yellow-600" />
              <h3 className="text-lg font-bold text-gray-800">Segurança</h3>
            </div>
            <p className="text-gray-600 mb-4">Gerenciar permissões e configurações de segurança</p>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white py-2 rounded-lg font-semibold transition-all duration-200">
              Acessar
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-yellow-200/50">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Atividade Recente do Sistema</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
              <Users className="w-8 h-8 text-yellow-600" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">Novo usuário registrado</p>
                <p className="text-sm text-gray-600">Há 5 minutos - usuário: maria.silva@email.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
              <Database className="w-8 h-8 text-yellow-600" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">Backup automático concluído</p>
                <p className="text-sm text-gray-600">Há 2 horas - 1.2GB de dados</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
              <Activity className="w-8 h-8 text-yellow-600" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">Pico de uso detectado</p>
                <p className="text-sm text-gray-600">Há 4 horas - 95% de usuários ativos</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
              <Settings className="w-8 h-8 text-yellow-600" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">Configuração atualizada</p>
                <p className="text-sm text-gray-600">Há 1 dia - notificações push habilitadas</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
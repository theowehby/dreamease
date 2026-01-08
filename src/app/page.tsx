import Link from 'next/link'
import { Moon, Star, Heart, Zap, Wind, BookOpen, Calendar, TrendingUp, MessageCircle, Brain, UserPlus, LogIn, Settings } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      title: 'Onboarding',
      description: 'Bem-vindo ao DreamEase - comece sua jornada',
      icon: UserPlus,
      href: '/onboarding',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Ritual Noturno',
      description: 'Prepare-se para uma noite tranquila',
      icon: Moon,
      href: '/ritual-noturno',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Respiração Guiada',
      description: 'Exercícios visuais de respiração',
      icon: Wind,
      href: '/respiracao-guiada',
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Sons para Dormir',
      description: 'Biblioteca de sons relaxantes',
      icon: Zap,
      href: '/sons-dormir',
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      title: 'Histórias para Dormir',
      description: 'Contos encantadores antes de dormir',
      icon: BookOpen,
      href: '/historias-dormir',
      color: 'from-pink-500 to-pink-700'
    },
    {
      title: 'Check-in Emocional',
      description: 'Acompanhe seu bem-estar diário',
      icon: Heart,
      href: '/checkin-emocional',
      color: 'from-red-500 to-red-700'
    },
    {
      title: 'Recomendações',
      description: 'Conteúdo personalizado para você',
      icon: Star,
      href: '/recomendacoes',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      title: 'Progresso',
      description: 'Acompanhe sua evolução',
      icon: TrendingUp,
      href: '/progresso',
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      title: 'Chat de Suporte',
      description: 'Ajuda profissional para ansiedade',
      icon: MessageCircle,
      href: '/chat-suporte',
      color: 'from-orange-500 to-orange-700'
    },
    {
      title: 'Técnicas de Relaxamento',
      description: 'Ferramentas contra ansiedade',
      icon: Brain,
      href: '/tecnicas-relaxamento',
      color: 'from-teal-500 to-teal-700'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Moon className="w-8 h-8 text-slate-700" />
              <span className="text-2xl font-bold text-slate-800">DreamEase</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/dashboard" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Dashboard
              </Link>
              <Link href="/login" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Login
              </Link>
              <Link href="/register" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Registrar
              </Link>
              <Link href="/admin" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Admin
              </Link>
            </nav>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-slate-700 hover:text-slate-900">
                <Settings className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            <Moon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Bem-vindo ao DreamEase
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Seu centro de controle para uma melhor qualidade de sono e bem-estar emocional.
            Acesse todas as ferramentas e recursos em um só lugar.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Link
                key={index}
                href={feature.href}
                className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-200 transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-700">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Ações Rápidas</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              Ver Dashboard
            </Link>
            <Link
              href="/login"
              className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors font-medium"
            >
              Fazer Login
            </Link>
            <Link
              href="/register"
              className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors font-medium"
            >
              Criar Conta
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 DreamEase. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
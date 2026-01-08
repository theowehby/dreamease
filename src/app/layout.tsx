import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Menu, X, Moon } from 'lucide-react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DreamEase - Seu Companheiro para Noites Tranquilas',
  description: 'Aplicativo profissional para gerenciamento de sono e bem-estar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
          {/* Header de Navegação */}
          <header className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
            <div className="max-w-md mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Moon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold">DreamEase</span>
                </Link>

                <details className="relative">
                  <summary className="list-none cursor-pointer">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Menu className="w-5 h-5 text-white" />
                    </div>
                  </summary>

                  <div className="absolute right-0 mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 py-2">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-900">Navegação</h3>
                    </div>

                    <nav className="py-2">
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                        🏠 Início
                      </Link>
                      <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                        📊 Dashboard
                      </Link>
                      <Link href="/onboarding" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                        🎯 Onboarding
                      </Link>
                      <Link href="/ritual-noturno" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                        🌙 Ritual Noturno
                      </Link>
                      <Link href="/respiracao-guiada" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                        💨 Respiração Guiada
                      </Link>
                      <Link href="/sons-dormir" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                        🔊 Sons para Dormir
                      </Link>
                      <Link href="/historias-dormir" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                        📖 Histórias para Dormir
                      </Link>
                      <Link href="/checkin-emocional" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                        ❤️ Check-in Emocional
                      </Link>
                      <Link href="/recomendacoes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                        ⭐ Recomendações
                      </Link>
                      <Link href="/progresso" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                        📈 Progresso
                      </Link>
                      <Link href="/chat-suporte" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                        💬 Chat de Suporte
                      </Link>
                      <Link href="/tecnicas-relaxamento" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                        🧘 Técnicas de Relaxamento
                      </Link>
                      <Link href="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                        ⚙️ Admin
                      </Link>
                    </nav>
                  </div>
                </details>
              </div>
            </div>
          </header>

          {/* Conteúdo Principal */}
          <main className="pb-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
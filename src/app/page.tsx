'use client';

import { useState } from 'react';
import { Moon, ChevronDown, Settings, Home, User, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [showAdminMenu, setShowAdminMenu] = useState(false);

  const navigateTo = (page: string) => {
    setCurrentScreen(page);
    setShowAdminMenu(false);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Página Inicial</h2>
            <p className="text-gray-600">Bem-vindo à sua jornada de sonhos tranquilos!</p>
          </div>
        );
      case 'login':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
            <p className="text-gray-600">Faça login para continuar.</p>
          </div>
        );
      case 'admin':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Painel Admin</h2>
            <p className="text-gray-600">Gerencie seu aplicativo aqui.</p>
          </div>
        );
      case 'profile':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Perfil</h2>
            <p className="text-gray-600">Veja e edite seu perfil.</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Analytics</h2>
            <p className="text-gray-600">Visualize estatísticas do app.</p>
          </div>
        );
      default:
        return (
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-yellow-500/30">
              <Moon className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">DreamEase</h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Seu companheiro para noites tranquilas e sonhos doces. 
              Encontre paz, relaxamento e melhor qualidade de sono.
            </p>
            <div className="space-y-4">
              <Button
                onClick={() => navigateTo('home')}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white py-4 rounded-2xl shadow-lg shadow-yellow-500/30 text-lg font-semibold"
              >
                Começar Jornada 🌙
              </Button>
              <Button
                onClick={() => navigateTo('login')}
                variant="outline"
                className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-50 py-4 rounded-2xl text-lg font-semibold"
              >
                Já tenho conta
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 flex items-center justify-center p-6 relative">
      {/* Botão Admin no canto superior direito */}
      <div className="absolute top-4 right-4 z-10">
        <div className="relative">
          <Button
            onClick={() => setShowAdminMenu(!showAdminMenu)}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <Settings className="w-4 h-4" />
            Admin
            <ChevronDown className="w-4 h-4" />
          </Button>
          
          {showAdminMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
              <button
                onClick={() => navigateTo('welcome')}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-yellow-50 flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Início
              </button>
              <button
                onClick={() => navigateTo('home')}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-yellow-50 flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Página Inicial
              </button>
              <button
                onClick={() => navigateTo('profile')}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-yellow-50 flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                Perfil
              </button>
              <button
                onClick={() => navigateTo('analytics')}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-yellow-50 flex items-center gap-2"
              >
                <BarChart3 className="w-4 h-4" />
                Analytics
              </button>
              <button
                onClick={() => navigateTo('admin')}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-yellow-50 flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Painel Admin
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-md w-full bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-yellow-200/50">
        {renderScreen()}
      </div>
    </div>
  );
}
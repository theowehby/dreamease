'use client'

import { useState } from 'react'
import { MessageCircle, Send, Bot, User, Heart } from 'lucide-react'

export default function ChatSuportePage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! Sou seu assistente de suporte emocional. Estou aqui para ajudar você a lidar com a ansiedade. Como você está se sentindo hoje?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [newMessage, setNewMessage] = useState('')

  const quickResponses = [
    "Estou ansioso(a)",
    "Não consigo dormir",
    "Preciso de uma técnica",
    "Quero conversar"
  ]

  const botResponses = {
    "Estou ansioso(a)": "Entendo que você está se sentindo ansioso. Vamos tentar uma respiração simples: inspire por 4 segundos, segure por 4, expire por 4. Quer tentar comigo?",
    "Não consigo dormir": "Dificuldade para dormir é comum na ansiedade. Que tal experimentarmos sons relaxantes ou uma história para dormir? O que você prefere?",
    "Preciso de uma técnica": "Ótimo! Temos várias técnicas disponíveis: respiração 4-7-8, relaxamento muscular progressivo, ou visualização guiada. Qual gostaria de experimentar?",
    "Quero conversar": "Claro! Estou aqui para ouvir. O que está te incomodando hoje? Lembre-se de que compartilhar seus sentimentos já é um passo importante."
  }

  const sendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setNewMessage('')

    // Simular resposta do bot
    setTimeout(() => {
      const botResponse = botResponses[text as keyof typeof botResponses] ||
        "Obrigado por compartilhar. Lembre-se: você não está sozinho nessa jornada. Que tal tentarmos uma técnica de respiração juntos?"

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(newMessage)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex flex-col">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm p-4 border-b border-white/20">
        <div className="max-w-md mx-auto flex items-center space-x-3">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-white font-semibold">Suporte Emocional</h1>
            <p className="text-white/80 text-sm">Online agora</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-md mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-white/90 text-gray-900'
                }`}
              >
                <div className="flex items-center space-x-2 mb-1">
                  {message.sender === 'bot' ? (
                    <Bot className="w-4 h-4" />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                  <span className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Responses */}
      {messages.length === 1 && (
        <div className="p-4 border-t border-white/20">
          <div className="max-w-md mx-auto">
            <p className="text-white text-sm mb-3 text-center">Como posso ajudar?</p>
            <div className="grid grid-cols-2 gap-2">
              {quickResponses.map((response) => (
                <button
                  key={response}
                  onClick={() => sendMessage(response)}
                  className="bg-white/20 hover:bg-white/30 text-white py-2 px-3 rounded-lg text-sm transition-colors"
                >
                  {response}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="bg-white/10 backdrop-blur-sm p-4 border-t border-white/20">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 px-4 py-2 rounded-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="p-2 bg-yellow-500 hover:bg-yellow-600 rounded-full transition-colors"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </form>
          <div className="flex items-center justify-center mt-2 space-x-1">
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-white/80 text-xs">Conversa confidencial e segura</span>
          </div>
        </div>
      </div>
    </div>
  )
}
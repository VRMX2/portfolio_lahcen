'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const { messages, sendMessage, status } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const isLoading = status === 'streaming' || status === 'submitted'

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput('')
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 w-[340px] sm:w-[400px] h-[550px] z-50 glass-card flex flex-col overflow-hidden shadow-2xl bg-[#050b14]/90"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#3b82f6]/20 to-[#f59e0b]/20 border-b border-white/10 p-4 flex justify-between items-center glass">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center bg-white/5 relative">
                  <Bot className="w-4 h-4 text-amber-400" />
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#050b14]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold flex items-center gap-2 text-sm leading-none">
                    Lahcen's Assistant
                  </h3>
                  <span className="text-white/50 text-[10px] uppercase font-mono tracking-widest mt-1 block">Powered by Gemini</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {messages.length === 0 && (
                <div className="text-center text-white/50 text-sm mt-10 space-y-3">
                  <div className="w-16 h-16 rounded-full glass bg-white/5 mx-auto flex items-center justify-center mb-4">
                    <Bot className="w-8 h-8 opacity-50 text-amber-400" />
                  </div>
                  <p className="font-medium text-white/80">Hi! I'm Lahcen's AI assistant.</p>
                  <p className="text-sm">Ask me about his skills, experience, or how to contact him!</p>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex w-full ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className="w-8 h-8 mt-auto rounded-full flex-shrink-0 flex items-center justify-center glass bg-white/5 border border-white/10">
                      {message.role === 'user'
                        ? <User className="w-4 h-4 text-blue-400" />
                        : <Bot className="w-4 h-4 text-amber-400" />}
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                      <span className={`text-[10px] text-white/40 uppercase font-mono tracking-wider ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                        {message.role === 'user' ? 'You' : 'Assistant'}
                      </span>
                      <div
                        className={`px-4 py-3 text-sm leading-relaxed border border-white/5 shadow-lg ${message.role === 'user'
                            ? 'bg-blue-600 text-white rounded-2xl rounded-br-sm'
                            : 'glass bg-white/5 text-white/90 rounded-2xl rounded-bl-sm'
                          }`}
                      >
                        {message.parts
                          .filter((part) => part.type === 'text')
                          .map((part, i) => (
                            <span key={i}>{part.type === 'text' ? part.text : ''}</span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
                <div className="flex justify-start w-full">
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 mt-auto rounded-full flex-shrink-0 flex items-center justify-center glass bg-white/5 border border-white/10">
                      <Bot className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-white/40 uppercase font-mono tracking-wider text-left">Assistant</span>
                      <div className="px-4 py-3 rounded-2xl glass bg-white/5 rounded-bl-sm flex items-center gap-2 border border-white/5">
                        <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                        <span className="text-xs text-white/50">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} className="h-4" />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-white/10 glass bg-[#050b14]/50"
            >
              <div className="relative flex items-center">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="w-full bg-[#050b14] border border-white/20 rounded-full pl-5 pr-12 py-3.5 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all shadow-inner disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 w-9 h-9 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white disabled:opacity-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-xl shadow-amber-500/20 z-50 border border-white/20"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread indicator dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#050b14] rounded-full animate-pulse" />
        )}
      </motion.button>
    </>
  )
}
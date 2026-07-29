import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Send, Image as ImageIcon, Menu, X, MessageSquare,
  Plus, Clock, Sparkles, Zap, Brain
} from "lucide-react"
import { mockChats, mockSuggestions, getMockImages } from "@/data/aiChatbotData"
import "./AIChatbot.css"

interface Message {
  id: number
  role: "user" | "assistant"
  content: string
  timestamp: string
  images?: string[]
}

interface Chat {
  id: number
  title: string
  timestamp: string
  messages: Message[]
}

export function AIChatbot() {
  const [showChat, setShowChat] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [chats] = useState<Chat[]>(mockChats)
  const [activeChat, setActiveChat] = useState<Chat | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (activeChat) setMessages(activeChat.messages)
  }, [activeChat])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return
    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
      timestamp: new Date().toISOString()
    }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: `Thank you for your message! This is a demo response to: "${input}". In a live environment, this would be powered by Groq AI's Llama 3.3 70B model, providing intelligent and contextual responses to your queries.`,
        timestamp: new Date().toISOString(),
        images: getMockImages(input)
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  if (!showChat) {
    return (
      <section className="ai-chatbot-section" id="ai-chatbot">
        <div className="liquid-orb liquid-orb-1" />
        <div className="liquid-orb liquid-orb-2" />
        <div className="liquid-orb liquid-orb-3" />

        <div className="chatbot-hero-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="chatbot-hero-text"
          >
            <motion.div className="chatbot-icon-wrapper" variants={lineVariants}>
              <Sparkles className="chatbot-icon" size={48} />
            </motion.div>

            <motion.h2 variants={lineVariants} className="chatbot-hero-title">
              Experience the Future
            </motion.h2>
            <motion.h3 variants={lineVariants} className="chatbot-hero-subtitle">
              of Conversational AI
            </motion.h3>

            <motion.p variants={lineVariants} className="chatbot-hero-description">
              Powered by Groq AI's lightning-fast Llama 3.3 70B model,
              enhanced with intelligent image search
            </motion.p>

            <motion.div variants={lineVariants} className="chatbot-hero-features">
              <div className="chatbot-hero-feature">
                <Zap size={24} /><span>Lightning Fast</span>
              </div>
              <div className="chatbot-hero-feature">
                <Brain size={24} /><span>Smart Responses</span>
              </div>
              <div className="chatbot-hero-feature">
                <MessageSquare size={24} /><span>Natural Conversations</span>
              </div>
            </motion.div>

            <motion.button
              variants={lineVariants}
              className="chatbot-cta"
              onClick={() => setShowChat(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Chatting
              <motion.span
                className="chatbot-cta-arrow"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          <motion.div
            className="chatbot-hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="chatbot-stat-item">
              <div className="chatbot-stat-number">70B+</div>
              <div className="chatbot-stat-label">Parameters</div>
            </div>
            <div className="chatbot-stat-divider" />
            <div className="chatbot-stat-item">
              <div className="chatbot-stat-number chatbot-stat-icon">⚡</div>
              <div className="chatbot-stat-label">Real-time</div>
            </div>
            <div className="chatbot-stat-divider" />
            <div className="chatbot-stat-item">
              <div className="chatbot-stat-number">24/7</div>
              <div className="chatbot-stat-label">Available</div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="ai-chatbot-section chat-active" id="ai-chatbot">
      <div className="chat-layout">
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              className="chatbot-sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </AnimatePresence>

        <motion.aside
          className="chatbot-sidebar"
          initial={{ x: -320 }}
          animate={{ x: sidebarOpen ? 0 : -320 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="chatbot-sidebar-header">
            <div className="chatbot-sidebar-title">
              <MessageSquare size={24} />
              <h2>Chat History</h2>
            </div>
            <motion.button
              className="chatbot-sidebar-close"
              onClick={() => setSidebarOpen(false)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>
          </div>

          <motion.button
            className="chatbot-new-chat-btn"
            onClick={() => { setActiveChat(null); setSidebarOpen(false) }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus size={20} />
            <span>New Chat</span>
          </motion.button>

          <div className="chatbot-chat-list">
            {chats.map((chat) => (
              <motion.div
                key={chat.id}
                className={`chatbot-chat-item ${activeChat?.id === chat.id ? "active" : ""}`}
                onClick={() => { setActiveChat(chat); setSidebarOpen(false) }}
                whileHover={{ x: 4 }}
              >
                <div className="chatbot-chat-item-icon">
                  <MessageSquare size={18} />
                </div>
                <div className="chatbot-chat-item-content">
                  <h3>{chat.title}</h3>
                  <div className="chatbot-chat-item-meta">
                    <Clock size={12} />
                    <span>{new Date(chat.timestamp).toLocaleDateString()}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.aside>

        <div className="chatbot-interface">
          <motion.header
            className="chatbot-header"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="chatbot-menu-btn"
              onClick={() => setSidebarOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={24} />
            </motion.button>
            <div className="chatbot-header-info">
              <h1>AI Assistant</h1>
              <span className="chatbot-status-indicator">
                <span className="chatbot-status-dot" />
                Online
              </span>
            </div>
          </motion.header>

          <div className="chatbot-messages-container">
            {messages.length === 0 ? (
              <div className="chatbot-empty-state">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="chatbot-empty-state-content"
                >
                  <div className="chatbot-empty-icon">💬</div>
                  <h2>Start a Conversation</h2>
                  <p>Ask me anything, and I'll do my best to help!</p>
                  <div className="chatbot-suggestions">
                    {mockSuggestions.slice(0, 3).map((suggestion, index) => (
                      <motion.button
                        key={index}
                        className="chatbot-suggestion-chip"
                        onClick={() => setInput(suggestion)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className="chatbot-messages-list">
                <AnimatePresence mode="popLayout">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className={`chatbot-message ${message.role}`}
                    >
                      <div className="chatbot-message-avatar">
                        {message.role === "user" ? "👤" : "🤖"}
                      </div>
                      <div className="chatbot-message-content">
                        <div className="chatbot-message-text">{message.content}</div>
                        {message.images && message.images.length > 0 && (
                          <motion.div
                            className="chatbot-message-images"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ delay: 0.2 }}
                          >
                            <div className="chatbot-images-header">
                              <ImageIcon size={16} />
                              <span>{message.images.length} images</span>
                            </div>
                            <div className="chatbot-image-grid">
                              {message.images.map((img, idx) => (
                                <motion.div
                                  key={idx}
                                  className="chatbot-image-item"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.1 }}
                                  whileHover={{ scale: 1.05, zIndex: 10 }}
                                >
                                  <img src={img} alt={`Result ${idx + 1}`} loading="lazy" />
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {isTyping && (
                  <motion.div
                    className="chatbot-message assistant"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="chatbot-message-avatar">🤖</div>
                    <div className="chatbot-message-content">
                      <div className="chatbot-typing-indicator">
                        <span /><span /><span />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          <motion.div
            className="chatbot-input-container"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="chatbot-input-wrapper">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="chatbot-input"
                rows={1}
              />
              <motion.button
                className="chatbot-send-btn"
                onClick={handleSend}
                disabled={!input.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

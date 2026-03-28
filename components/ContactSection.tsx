'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { toast, Toaster } from 'react-hot-toast'

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function ContactSection() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }
      
      toast.success('Message sent successfully! I will get back to you soon.', {
        style: {
          background: '#050b14',
          color: '#fff',
          border: '1px solid rgba(59, 130, 246, 0.2)',
        },
        iconTheme: {
          primary: '#3b82f6',
          secondary: '#fff',
        },
      })
      
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      toast.error('Something went wrong. Please try again.', {
        style: {
          background: '#050b14',
          color: '#fff',
          border: '1px solid rgba(239, 68, 68, 0.2)',
        },
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <Toaster position="bottom-right" />
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-blue-500/[0.03] animate-spin-slow pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">05 / Contact</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Have a project in mind? Let's build something amazing.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Left: Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
              <p className="text-white/50 leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/40 font-medium mb-0.5">Email</p>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">{personalInfo.email}</p>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-violet-400 group-hover:bg-violet-500/10 group-hover:border-violet-500/30 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/40 font-medium mb-0.5">Phone</p>
                  <p className="text-white font-medium group-hover:text-violet-400 transition-colors">{personalInfo.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-green-400 group-hover:bg-green-500/10 group-hover:border-green-500/30 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/40 font-medium mb-0.5">Location</p>
                  <p className="text-white font-medium group-hover:text-green-400 transition-colors">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all hover:scale-110">
                <Github className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/70">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={loading}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/70">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={loading}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white/70">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  disabled={loading}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all disabled:opacity-50"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  disabled={loading}
                  rows={5}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none disabled:opacity-50"
                  placeholder="Hello Lahcen, I would like to talk about..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Code2, Wifi } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

const stats = [
  { value: '3+',  label: 'Years coding'   },
  { value: '5+',  label: 'Projects shipped' },
  { value: '100%', label: 'Passion'         },
  { value: '∞',   label: 'Curiosity'       },
]

const highlights = [
  { icon: MapPin,        text: 'Algeria 🇩🇿',                             color: 'text-blue-400'   },
  { icon: GraduationCap, text: 'USTHB — Licence ISIL 2025',              color: 'text-violet-400' },
  { icon: Wifi,          text: 'Networks & Distributed Systems',          color: 'text-green-400'  },
  { icon: Code2,         text: 'Full Stack Developer',                    color: 'text-amber-400'  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">01 / About</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — bio */}
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map(({ icon: Icon, text, color }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 glass-card px-4 py-3 hover:border-white/15 transition-all"
                >
                  <Icon className={`w-4 h-4 shrink-0 ${color}`} />
                  <span className="text-white/70 text-sm">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass-card p-8 text-center group hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-5xl font-black gradient-text mb-2">{value}</div>
                <div className="text-white/50 text-sm font-medium">{label}</div>
              </motion.div>
            ))}

            {/* Decorative card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="col-span-2 glass-card p-6 border-dashed border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <p className="text-white/40 text-sm font-mono leading-relaxed">
                <span className="text-blue-400">const</span>{' '}
                <span className="text-green-400">developer</span>{' '}
                <span className="text-white/60">= {'{'}</span>
                <br />
                &nbsp;&nbsp;<span className="text-violet-400">name</span>
                <span className="text-white/60">: </span>
                <span className="text-amber-400">&quot;{personalInfo.name}&quot;</span>,
                <br />
                &nbsp;&nbsp;<span className="text-violet-400">passion</span>
                <span className="text-white/60">: </span>
                <span className="text-amber-400">&quot;Building cool stuff&quot;</span>,
                <br />
                &nbsp;&nbsp;<span className="text-violet-400">available</span>
                <span className="text-white/60">: </span>
                <span className="text-green-400">true</span>,
                <br />
                <span className="text-white/60">{'}'};</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

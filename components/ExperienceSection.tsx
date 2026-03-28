'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data'

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/8 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">04 / Experience</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Education and professional experience
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent" />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[10px] md:left-1/2 top-6 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 border-2 border-[#050b14] shadow-lg shadow-blue-500/30 z-10" />

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="ml-10 md:ml-0 md:w-1/2 glass-card p-6 hover:border-white/15 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl shrink-0">{item.icon}</div>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        item.type === 'education'
                          ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                          : 'bg-green-500/15 text-green-400 border border-green-500/20'
                      }`}>
                        {item.period}
                      </span>
                      <h3 className="font-bold text-white text-lg leading-tight mb-1">
                        {item.role}
                      </h3>
                      <p className="text-blue-400 text-sm font-medium mb-3">
                        {item.organization}
                      </p>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

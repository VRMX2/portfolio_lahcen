'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'

const fadeUp = {
  hidden:   { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

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
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">02 / Skills</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Technologies I use to turn ideas into reality
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-card p-6 group hover:border-white/15 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-lg shadow-lg`}>
                  {skill.icon}
                </div>
                <h3 className="font-bold text-white text-base">{skill.category}</h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white/70 text-xs font-medium hover:border-white/20 hover:text-white hover:bg-white/[0.08] transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* Gradient bar */}
              <div className={`mt-5 h-0.5 w-full rounded-full bg-gradient-to-r ${skill.color} opacity-40 group-hover:opacity-70 transition-opacity`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom floating badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-14"
        >
          {['Problem Solver', 'Lightning-fast Typist', 'Efficient PC Workflow', 'Clean Code Advocate', 'Fast Learner', 'Team Player'].map(tag => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full glass border border-white/10 text-white/50 text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

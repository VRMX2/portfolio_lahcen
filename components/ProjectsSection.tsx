'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { projects, type Project } from '@/lib/data'

const categories = ['All', 'Web App', 'Productivity', 'E-Commerce']

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' },
  }),
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      custom={index}
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 250 }}
      className="glass-card group relative overflow-hidden flex flex-col hover:border-white/15 transition-all duration-500"
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`} />

      <div className="p-7 flex flex-col flex-1">
        {/* Category badge */}
        <div className="flex items-center justify-between mb-5">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent border border-white/10`}>
            {project.category}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 text-xs text-amber-400 font-medium">
              ⭐ Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
          {project.longDescription}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-white/50 text-xs font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.06]">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${project.gradient} shadow-lg hover:opacity-90 transition-opacity`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </motion.a>
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">03 / Projects</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Real products shipped and live in production
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25'
                  : 'glass border border-white/10 text-white/50 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/VRMX2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors group"
          >
            <Github className="w-4 h-4" />
            See more on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

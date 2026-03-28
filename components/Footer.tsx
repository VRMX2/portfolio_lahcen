import { personalInfo } from '@/lib/data'
import { Code2, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.04] bg-[#03060c] pt-16 pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center p-0.5">
              <div className="w-full h-full bg-[#03060c] rounded-[10px] flex items-center justify-center">
                 <Code2 className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div>
              <p className="font-bold text-white text-lg tracking-tight">Lahcen Grissi</p>
              <p className="text-white/40 text-xs">Full Stack Developer</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#about" className="text-sm font-medium text-white/50 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium text-white/50 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium text-white/50 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium text-white/50 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <p className="text-white/40 text-sm flex items-center gap-1.5">
            Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in <span className="font-medium text-white/60">{personalInfo.location}</span>
          </p>
          <p className="text-white/30 text-xs font-mono">
            &copy; {currentYear} Lahcen Grissi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

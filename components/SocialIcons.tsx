'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Send, Mail } from 'lucide-react'

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/abdulbosit-melikuziev',
    icon: Linkedin,
    label: 'LinkedIn Profile',
  },
  {
    href: 'https://github.com/Abdulbosit-AiM',
    icon: Github,
    label: 'GitHub Profile',
  },
  {
    href: 'https://t.me/abdulbositmelikuziev',
    icon: Send,
    label: 'Telegram Contact',
  },
  {
    href: 'mailto:abdulbosit.melikuziev@gmail.com',
    icon: Mail,
    label: 'Email Contact',
  },
]

export default function SocialIcons() {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-30 flex flex-col gap-4 md:flex-row md:justify-center md:relative md:bottom-auto md:left-auto md:mt-12"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {socialLinks.map((link, index) => {
        const Icon = link.icon
        return (
          <motion.a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-neutral-300 hover:text-white hover:bg-gradient-to-r hover:from-accent-orange hover:to-accent-pink hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
            aria-label={link.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        )
      })}
    </motion.div>
  )
}
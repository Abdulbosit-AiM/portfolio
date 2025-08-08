'use client'

import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="pt-24 pb-16 text-center relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-black mb-6 text-gradient"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let&apos;s Connect
        </motion.h1>
        <motion.p
          className="text-xl text-neutral-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to collaborate on innovative projects and digital solutions
        </motion.p>
      </div>
    </section>
  )
}
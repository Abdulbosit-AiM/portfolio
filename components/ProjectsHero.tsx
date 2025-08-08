'use client'

import { motion } from 'framer-motion'

export default function ProjectsHero() {
  return (
    <section className="pt-24 pb-16 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-black mb-6 text-gradient"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="text-xl text-neutral-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A collection of web applications and innovative solutions I&apos;ve built
        </motion.p>
      </div>
    </section>
  )
}
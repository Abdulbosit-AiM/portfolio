'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(8, 47, 73, 0.95), rgba(12, 74, 110, 0.9)), url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-orange rounded-full animate-float opacity-60" />
        <div className="absolute top-3/5 right-1/4 w-2 h-2 bg-accent-pink rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-accent-emerald rounded-full animate-float opacity-60" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl font-light text-neutral-200 mb-4">
            Hello! I'm
          </h2>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Abdulbosit{' '}
          <span className="text-gradient">
            Melikuziev
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-light text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Product Manager & AI Specialist with expertise in data analysis, 
          digital transformation, and user-centric technology solutions
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/about" className="btn btn-primary group">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/projects" className="btn btn-secondary">
            View Projects
          </Link>
        </motion.div>
      </div>

    </section>
  )
}
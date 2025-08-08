'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { portfolioData } from '@/lib/portfolio-data'

export default function ProjectsGrid() {
  const { projects } = portfolioData

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Floating action buttons */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent-orange text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label={`View ${project.title} source code`}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-accent-orange/20 text-accent-orange rounded-full text-xs font-medium border border-accent-orange/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
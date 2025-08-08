'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/portfolio-data'

export default function AboutContent() {
  const { about } = portfolioData

  return (
    <div className="max-w-6xl mx-auto px-6 pb-24">
      {/* Bio Section */}
      <motion.div
        className="card mb-16 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="space-y-6 text-lg text-neutral-200 leading-relaxed">
          {about.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-accent-orange">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {about.education.map((edu, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-1 h-full bg-gradient-to-b from-accent-orange to-accent-pink rounded-full" />
                <div className="flex-1">
                  <div className="inline-flex items-center px-3 py-1 bg-accent-orange/20 text-accent-orange rounded-full text-xs font-semibold mb-3">
                    {edu.badge}
                  </div>
                  <h3 className="text-xl font-semibold text-accent-orange mb-2">{edu.degree}</h3>
                  <h4 className="text-lg text-neutral-200 mb-1">{edu.institution}</h4>
                  <p className="text-sm text-neutral-400 uppercase tracking-wide mb-4">{edu.period}</p>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-3">{edu.dissertation}</p>
                  <p className="text-neutral-300 text-sm">{edu.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-accent-orange">Professional Experience</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {about.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-1 h-full bg-gradient-to-b from-accent-orange to-accent-pink rounded-full" />
                <div className="flex-1">
                  {exp.badge && (
                    <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold mb-3">
                      {exp.badge}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-accent-orange mb-2">{exp.title}</h3>
                  <h4 className="text-lg text-neutral-200 mb-1">{exp.company}</h4>
                  <p className="text-sm text-neutral-400 uppercase tracking-wide mb-4">{exp.period}</p>
                  <p className="text-neutral-300 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-accent-orange">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.skills.map((skill, index) => (
            <motion.div
              key={index}
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-accent-orange mb-3">{skill.category}</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">{skill.items}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Leadership */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-accent-orange">Leadership & Volunteering</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {about.leadership.map((role, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-1 h-full bg-gradient-to-b from-accent-orange to-accent-pink rounded-full" />
                <div className="flex-1">
                  {role.badge && (
                    <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold mb-3">
                      {role.badge}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-accent-orange mb-2">{role.title}</h3>
                  <h4 className="text-lg text-neutral-200 mb-1">{role.organization}</h4>
                  <p className="text-sm text-neutral-400 uppercase tracking-wide mb-4">{role.period}</p>
                  <p className="text-neutral-300 text-sm leading-relaxed">{role.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Career Vision */}
      <motion.div
        className="card text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-accent-orange">Career Vision</h2>
        <p className="text-lg text-neutral-200 leading-relaxed">
          {about.careerVision}
        </p>
      </motion.div>
    </div>
  )
}
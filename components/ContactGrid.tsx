'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: portfolioData.contact.email,
    href: `mailto:${portfolioData.contact.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: portfolioData.contact.phone,
    href: `tel:${portfolioData.contact.phone.replace(/\D/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: portfolioData.contact.location,
    href: null,
  },
]

export default function ContactGrid() {
  return (
    <div className="max-w-4xl mx-auto px-6 pb-24">
      <div className="grid md:grid-cols-3 gap-8">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          return (
            <motion.div
              key={index}
              className="card text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-accent-orange to-accent-pink rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{method.label}</h3>
              {method.href ? (
                <a
                  href={method.href}
                  className="text-accent-orange hover:text-accent-pink transition-colors font-medium"
                >
                  {method.value}
                </a>
              ) : (
                <span className="text-neutral-300">{method.value}</span>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
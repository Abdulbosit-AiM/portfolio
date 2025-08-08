'use client'

import { useState } from 'react'
import { Save, Plus, Trash2, Edit3 } from 'lucide-react'
import toast from 'react-hot-toast'
import type { PortfolioData } from '@/types/portfolio'

interface ContentEditorProps {
  data: PortfolioData
  setData: (data: PortfolioData) => void
}

export default function ContentEditor({ data, setData }: ContentEditorProps) {
  const [activeSection, setActiveSection] = useState<'personal' | 'about' | 'projects' | 'contact'>('personal')
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/portfolio', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success('Portfolio updated successfully!')
      } else {
        toast.error('Failed to update portfolio')
      }
    } catch (error) {
      toast.error('Failed to update portfolio')
    } finally {
      setIsLoading(false)
    }
  }

  const updatePersonalInfo = (field: string, value: string) => {
    setData({
      ...data,
      personal: {
        ...data.personal,
        [field]: value,
      },
    })
  }

  const updateAboutBio = (index: number, value: string) => {
    const newBio = [...data.about.bio]
    newBio[index] = value
    setData({
      ...data,
      about: {
        ...data.about,
        bio: newBio,
      },
    })
  }

  const addProject = () => {
    const newProject = {
      title: 'New Project',
      description: 'Project description',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'New project image',
      technologies: ['JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
    }
    
    setData({
      ...data,
      projects: [...data.projects, newProject],
    })
  }

  const updateProject = (index: number, field: string, value: any) => {
    const newProjects = [...data.projects]
    newProjects[index] = {
      ...newProjects[index],
      [field]: value,
    }
    setData({
      ...data,
      projects: newProjects,
    })
  }

  const removeProject = (index: number) => {
    const newProjects = data.projects.filter((_, i) => i !== index)
    setData({
      ...data,
      projects: newProjects,
    })
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Content Management</h1>
        <button
          onClick={handleSave}
          disabled={isLoading}
          className="flex items-center gap-2 px-6 py-3 bg-accent-orange text-white rounded-lg hover:bg-accent-orange/90 transition-colors disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {isLoading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {/* Section tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto">
        {[
          { key: 'personal', label: 'Personal Info' },
          { key: 'about', label: 'About' },
          { key: 'projects', label: 'Projects' },
          { key: 'contact', label: 'Contact' },
        ].map((section) => (
          <button
            key={section.key}
            onClick={() => setActiveSection(section.key as any)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeSection === section.key
                ? 'bg-accent-orange text-white'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Content sections */}
      <div className="space-y-8">
        {/* Personal Info */}
        {activeSection === 'personal' && (
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-6">Personal Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-200 mb-2">Name</label>
                <input
                  type="text"
                  value={data.personal.name}
                  onChange={(e) => updatePersonalInfo('name', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-orange"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-200 mb-2">Title</label>
                <input
                  type="text"
                  value={data.personal.title}
                  onChange={(e) => updatePersonalInfo('title', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-orange"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-200 mb-2">Subtitle</label>
                <textarea
                  value={data.personal.subtitle}
                  onChange={(e) => updatePersonalInfo('subtitle', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-orange resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-xl font-semibold text-white mb-6">Bio</h2>
              {data.about.bio.map((paragraph, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium text-neutral-200 mb-2">
                    Paragraph {index + 1}
                  </label>
                  <textarea
                    value={paragraph}
                    onChange={(e) => updateAboutBio(index, e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-orange resize-none"
                  />
                </div>
              ))}
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold text-white mb-6">Career Vision</h2>
              <textarea
                value={data.about.careerVision}
                onChange={(e) => setData({
                  ...data,
                  about: {
                    ...data.about,
                    careerVision: e.target.value,
                  },
                })}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-orange resize-none"
              />
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Projects</h2>
              <button
                onClick={addProject}
                className="flex items-center gap-2 px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-accent-orange/90 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Project
              </button>
            </div>

            {data.projects.map((project, index) => (
              <div key={index} className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">Project {index + 1}</h3>
                  <button
                    onClick={() => removeProject(index)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-200 mb-2">Title</label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => updateProject(index, 'title', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-200 mb-2">Image URL</label>
                    <input
                      type="url"
                      value={project.image}
                      onChange={(e) => updateProject(index, 'image', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-200 mb-2">Description</label>
                    <textarea
                      value={project.description}
                      onChange={(e) => updateProject(index, 'description', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-200 mb-2">Live URL</label>
                    <input
                      type="url"
                      value={project.liveUrl}
                      onChange={(e) => updateProject(index, 'liveUrl', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-200 mb-2">GitHub URL</label>
                    <input
                      type="url"
                      value={project.githubUrl}
                      onChange={(e) => updateProject(index, 'githubUrl', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-200 mb-2">Technologies (comma-separated)</label>
                    <input
                      type="text"
                      value={project.technologies.join(', ')}
                      onChange={(e) => updateProject(index, 'technologies', e.target.value.split(', ').filter(Boolean))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-200 mb-2">Email</label>
                <input
                  type="email"
                  value={data.contact.email}
                  onChange={(e) => setData({
                    ...data,
                    contact: { ...data.contact, email: e.target.value }
                  })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-200 mb-2">Phone</label>
                <input
                  type="tel"
                  value={data.contact.phone}
                  onChange={(e) => setData({
                    ...data,
                    contact: { ...data.contact, phone: e.target.value }
                  })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-200 mb-2">Location</label>
                <input
                  type="text"
                  value={data.contact.location}
                  onChange={(e) => setData({
                    ...data,
                    contact: { ...data.contact, location: e.target.value }
                  })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
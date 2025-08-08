export interface PortfolioData {
  personal: {
    name: string
    title: string
    subtitle: string
  }
  about: {
    bio: string[]
    education: Array<{
      badge?: string
      degree: string
      institution: string
      period: string
      dissertation: string
      details: string
    }>
    experience: Array<{
      badge?: string
      title: string
      company: string
      period: string
      description: string
    }>
    skills: Array<{
      category: string
      items: string
    }>
    leadership: Array<{
      badge?: string
      title: string
      organization: string
      period: string
      description: string
    }>
    careerVision: string
  }
  projects: Array<{
    title: string
    description: string
    image: string
    alt: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
  }>
  contact: {
    email: string
    phone: string
    location: string
  }
}
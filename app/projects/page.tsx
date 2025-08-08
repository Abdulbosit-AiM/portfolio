import Navigation from '@/components/Navigation'
import ProjectsHero from '@/components/ProjectsHero'
import ProjectsGrid from '@/components/ProjectsGrid'
import SocialIcons from '@/components/SocialIcons'

export default function Projects() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProjectsHero />
      <ProjectsGrid />
      <div className="flex justify-center pb-12 md:pb-20">
        <SocialIcons />
      </div>
    </main>
  )
}
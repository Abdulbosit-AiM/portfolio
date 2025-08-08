import Navigation from '@/components/Navigation'
import AboutHero from '@/components/AboutHero'
import AboutContent from '@/components/AboutContent'
import SocialIcons from '@/components/SocialIcons'

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutContent />
      <SocialIcons />
    </main>
  )
}
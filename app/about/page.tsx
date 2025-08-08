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
      <div className="flex justify-center pb-16 md:pb-24">
        <SocialIcons />
      </div>
    </main>
  )
}
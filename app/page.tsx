import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import SocialIcons from '@/components/SocialIcons'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      <Hero />
      <SocialIcons />
    </main>
  )
}
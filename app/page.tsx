import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import SocialIcons from '@/components/SocialIcons'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      <Hero />
      <div className="flex justify-center pb-20 md:pb-32">
        <SocialIcons />
      </div>
    </main>
  )
}
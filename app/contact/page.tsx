import Navigation from '@/components/Navigation'
import ContactHero from '@/components/ContactHero'
import ContactGrid from '@/components/ContactGrid'
import SocialIcons from '@/components/SocialIcons'

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactGrid />
      <div className="flex justify-center pb-24 md:pb-32">
        <SocialIcons />
      </div>
    </main>
  )
}
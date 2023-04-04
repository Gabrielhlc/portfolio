import { AboutMe } from '@/components/AboutMe'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { Nav } from '@/components/Nav'
import { Projects } from '@/components/Projects'
import { Technologies } from '@/components/Technologies'
import { Container } from '@/styles/home'

export default function Home() {
  return (
    <Container>
      <Nav />

      <HeroSection />

      <Projects />

      <Technologies />

      <AboutMe />

      <Footer />

    </Container>
  )
}

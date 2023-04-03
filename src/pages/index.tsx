import { HeroSection } from '@/components/HeroSection'
import { Nav } from '@/components/Nav'
import { Projects } from '@/components/Projects'
import { Technologies } from '@/components/Technologies'
import { Container } from '@/styles/home'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <Nav />

      <HeroSection />

      <Projects />

      <Technologies />

    </Container>
  )
}

import Hero from '../components/Hero'
import SelectedWork from '../components/SelectedWork'
import Experience from '../components/Experience'
import ResearchAndCredentials from '../components/ResearchAndCredentials'
import Competitions from '../components/Competitions'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <main id="main-content" className="flex-1">
        <Hero />
        <SelectedWork />
        <Experience />
        <ResearchAndCredentials />
        <Competitions />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

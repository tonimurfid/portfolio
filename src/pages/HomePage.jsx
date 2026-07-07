import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Competitions from '../components/Competitions'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div id="main-content" role="main" className="min-h-screen bg-bg text-foreground">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Competitions />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

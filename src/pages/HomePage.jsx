import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Competitions from '../components/Competitions'
import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#282a36] text-[#f8f8f2]">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Competitions />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

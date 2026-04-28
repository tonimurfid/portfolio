import { useState, useEffect } from 'react'

const SECTIONS = ['About', 'Skills', 'Experience', 'Projects', 'Competitions', 'Blog', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const elements = SECTIONS.map(id => document.getElementById(id.toLowerCase())).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(e => e.isIntersecting)
        if (visible) {
          setActive(visible.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const linkClass = (id) =>
    `text-sm font-mono tracking-wide transition-colors duration-300 ${
      active === id.toLowerCase() ? 'text-purple' : 'text-[#f8f8f2] hover:text-cyan'
    }`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#282a36]/80 backdrop-blur-lg border-b border-[#44475a]/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="font-mono text-sm md:text-base tracking-tight flex items-baseline gap-0">
          <span className="text-purple">from</span>
          <span className="text-cyan ml-1">toni</span>
          <span className="text-purple ml-1">import</span>
          <span className="text-green ml-1">portfolio</span>
          <span className="text-[#f8f8f2] cursor-blink ml-0.5">|</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {SECTIONS.map((s) => (
            <a key={s} href={`#${s.toLowerCase()}`} className={linkClass(s)}>
              {s}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-[#f8f8f2] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1e1f29]/95 backdrop-blur-lg border-t border-[#44475a]/30 px-4 py-4 flex flex-col gap-3">
          {SECTIONS.map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              className={linkClass(s)}
              onClick={() => setMenuOpen(false)}
            >
              {s}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

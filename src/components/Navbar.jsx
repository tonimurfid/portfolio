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
    if (elements.length === 0) return
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

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [menuOpen])

  const linkClass = (id) =>
    `text-sm font-mono tracking-wide transition-colors duration-300 min-h-[44px] flex items-center ${
      active === id.toLowerCase()
        ? 'text-purple underline decoration-purple underline-offset-4'
        : 'text-[#f8f8f2] hover:text-cyan'
    }`

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#282a36]/80 backdrop-blur-lg border-b border-[#44475a]/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm md:text-base tracking-tight flex items-baseline gap-0"
          aria-label="Fatoni Murfid Syaafii — home"
        >
          <span className="text-purple">from</span>
          <span className="text-cyan ml-1">toni</span>
          <span className="text-purple ml-1">import</span>
          <span className="text-green ml-1">portfolio</span>
          <span className="text-[#f8f8f2] cursor-blink ml-0.5" aria-hidden="true">|</span>
        </a>

        <div className="hidden md:flex items-center gap-6" role="menubar">
          {SECTIONS.map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              className={linkClass(s)}
              role="menuitem"
              aria-current={active === s.toLowerCase() ? 'true' : undefined}
            >
              {s}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-[#f8f8f2] p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#1e1f29]/95 backdrop-blur-lg border-t border-[#44475a]/30 px-4 py-4 flex flex-col gap-1" role="menu">
          {SECTIONS.map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              className={linkClass(s)}
              role="menuitem"
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

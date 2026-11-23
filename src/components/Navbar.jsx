import { useEffect, useState } from 'react'
import { PROFILE } from '../data/portfolio'

const NAV_ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const updateActive = () => {
      if (window.scrollY < 140) {
        setActive('')
        return
      }

      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 48
      if (nearBottom) {
        setActive('contact')
        return
      }

      let current = ''
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= 160) {
          current = id
        }
      }
      setActive(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-paper/92 backdrop-blur-md border-b border-rule'
          : 'bg-paper border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6"
      >
        <a
          href="#top"
          className="inline-flex items-baseline gap-2.5 text-ink hover:text-accent transition-colors shrink-0"
        >
          <span className="font-display text-xl sm:text-2xl tracking-tight leading-none whitespace-nowrap">
            {PROFILE.name}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = active === id
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`text-sm transition-colors py-1 ${
                  isActive
                    ? 'text-ink font-medium underline underline-offset-8 decoration-accent decoration-2'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {label}
              </a>
            )
          })}

          <a
            href={PROFILE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider border border-rule-strong text-ink hover:border-ink hover:bg-ink hover:text-paper transition-colors"
          >
            CV ↗
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-ink min-w-[44px] min-h-[44px] inline-flex items-center justify-center"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-paper border-b border-rule px-5 sm:px-8 py-4 flex flex-col gap-1"
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`py-2.5 text-sm border-b border-rule/60 last:border-b-0 ${
                active === id ? 'text-ink font-semibold' : 'text-muted'
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href={PROFILE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 py-2.5 text-center text-xs font-mono uppercase tracking-wider border border-ink text-ink"
          >
            Download CV ↗
          </a>
        </div>
      )}
    </header>
  )
}

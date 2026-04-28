import { useState, useEffect } from 'react'

export default function Footer() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-purple/20 border border-purple/40
          flex items-center justify-center text-purple hover:bg-purple/30 hover:shadow-[0_0_15px_rgba(189,147,249,0.4)]
          transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>

      <footer className="border-t border-[#44475a]/20 bg-[#1e1f29] py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-mono text-xs text-comment">
            &copy; {new Date().getFullYear()} Fatoni Murfid Syaafii. Built with
            <span className="text-red mx-1">&hearts;</span>
            and Python.
          </p>
        </div>
      </footer>
    </>
  )
}

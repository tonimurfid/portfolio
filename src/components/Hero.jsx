import { useEffect } from 'react'
import Typed from 'typed.js'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SocialIcons from './SocialIcons'

const ROLES = [
  'AI/ML Engineer',
  'RAG &amp; LLM Specialist',
  'Computer Vision Engineer',
]

export default function Hero() {
  const [ref, visible] = useScrollReveal()

  useEffect(() => {
    const typed = new Typed('#typed-role', {
      strings: ROLES,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 300,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    })
    return () => typed.destroy()
  }, [])

  return (
    <section
      id="home"
      className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #bd93f9 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div
        ref={ref}
        className={`relative z-10 text-center px-4 max-w-2xl mx-auto transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-6 inline-block">
          {/* REPLACE WITH ACTUAL PHOTO */}
          <div className="w-36 h-36 md:w-40 md:h-40 rounded-full mx-auto bg-surface border-[3px] border-purple shadow-[0_0_25px_rgba(189,147,249,0.3)] overflow-hidden">
            <img
              src="/profile.jpeg"
              alt="Fatoni Murfid Syaafii"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-mono mb-4 text-foreground">
          Fatoni Murfid Syaafii
        </h1>

        <div className="text-xl md:text-2xl font-mono text-cyan mb-4 h-10">
          <span id="typed-role"></span>
        </div>

        <p className="text-comment max-w-lg mx-auto mb-8 text-sm md:text-base leading-relaxed">
          Building production-ready ML systems — from Computer Vision to LLM-based RAG
          applications, deployed on VPS and cloud infrastructure.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a
            href="/cv.pdf"
            download
            className="px-6 py-2.5 font-mono text-sm rounded-lg border border-purple text-purple bg-purple/10
              hover:bg-purple/20 hover:shadow-[0_0_20px_rgba(189,147,249,0.3)] transition-all duration-300"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 font-mono text-sm rounded-lg bg-cyan text-bg
              hover:shadow-[0_0_20px_rgba(139,233,253,0.4)] transition-all duration-300 hover:scale-105"
          >
            Let&apos;s Connect
          </a>
        </div>

        <SocialIcons />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-comment" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  )
}

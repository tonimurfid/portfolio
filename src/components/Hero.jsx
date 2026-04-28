import { useEffect, useMemo, useState } from 'react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import Particles from '@tsparticles/react'
import Typed from 'typed.js'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ROLES = [
  'AI/ML Engineer',
  'RAG &amp; LLM Specialist',
  'Computer Vision Engineer',
]

export default function Hero() {
  const [init, setInit] = useState(false)
  const [ref, visible] = useScrollReveal()

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

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

  const particlesOptions = useMemo(() => ({
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
      },
      modes: {
        grab: { distance: 180, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: ['#bd93f9', '#8be9fd'] },
      links: {
        color: '#6272a4',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
      number: { density: { enable: true }, value: 60 },
      opacity: { value: 0.4 },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={particlesOptions}
        />
      )}

      <div
        ref={ref}
        className={`relative z-10 text-center px-4 max-w-2xl mx-auto transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-6 inline-block">
          {/* REPLACE WITH ACTUAL PHOTO */}
          <div className="w-36 h-36 md:w-40 md:h-40 rounded-full mx-auto bg-[#44475a] border-[3px] border-purple shadow-[0_0_25px_rgba(189,147,249,0.3)] overflow-hidden">
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
            href="#"
            className="px-6 py-2.5 font-mono text-sm rounded-lg border border-purple text-purple bg-purple/10
              hover:bg-purple/20 hover:shadow-[0_0_20px_rgba(189,147,249,0.3)] transition-all duration-300"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 font-mono text-sm rounded-lg bg-cyan text-[#282a36]
              hover:shadow-[0_0_20px_rgba(139,233,253,0.4)] transition-all duration-300 hover:scale-105"
          >
            Let&apos;s Connect
          </a>
        </div>

        <div className="flex gap-5 justify-center">
          {[
            { label: 'GitHub', href: 'https://github.com/tonimurfid', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/fatoni-murfid-syaafii', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
            { label: 'Email', href: 'mailto:fatonimurfids@gmail.com', icon: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z' },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-full border border-[#44475a] flex items-center justify-center
                text-[#6272a4] hover:text-purple hover:border-purple hover:shadow-[0_0_12px_rgba(189,147,249,0.3)]
                transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" role="img" aria-label={label}>
                <path d={icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6272a4" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
    </section>
  )
}

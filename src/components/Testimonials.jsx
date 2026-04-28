import { useState, useCallback } from 'react'
import Section from './Section'

const TESTIMONIALS = [
  {
    quote: 'An exceptional AI engineer who bridges the gap between cutting-edge research and production systems. Delivered our RAG pipeline ahead of schedule with outstanding quality.',
    name: 'Alex Chen',
    role: 'CTO, TechVentures Inc.',
  },
  {
    quote: 'Working with Fatoni was a game-changer for our computer vision project. His domain adaptation approach solved problems that had stumped previous engineers.',
    name: 'Sarah Johnson',
    role: 'Lead Researcher, AI Labs',
  },
  {
    quote: 'One of the most talented ML engineers I have collaborated with. His deep understanding of both models and infrastructure is rare and invaluable.',
    name: 'Michael Park',
    role: 'Engineering Manager, DataFlow',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1)), [])
  const next = useCallback(() => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1)), [])

  return (
    <Section id="testimonials" className="!bg-[#1e1f29] !max-w-none">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">
          <span className="text-comment font-mono text-sm">{'// '}</span>
          <span className="text-cyan font-mono text-2xl font-bold">What People Say</span>
        </h2>

        {/* REPLACE WITH REAL TESTIMONIALS */}
        <div className="relative max-w-xl mx-auto">
          <div className="bg-surface/40 border border-[#44475a]/30 rounded-xl p-6 md:p-8 text-center">
            <svg className="mx-auto mb-4 text-purple/60" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.167 11 15c0 1.933-1.567 3.5-3.5 3.5-1.23 0-2.334-.733-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.167 21 15c0 1.933-1.567 3.5-3.5 3.5-1.23 0-2.334-.733-2.917-1.179z" />
            </svg>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 italic">
              &ldquo;{TESTIMONIALS[current].quote}&rdquo;
            </p>

            {/* REPLACE WITH ACTUAL PHOTO */}
            <div className="w-12 h-12 rounded-full bg-[#44475a] mx-auto mb-2 border border-purple/30 overflow-hidden">
              <img
                src="https://via.placeholder.com/50"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-mono font-bold text-sm text-foreground">{TESTIMONIALS[current].name}</p>
            <p className="text-comment text-xs">{TESTIMONIALS[current].role}</p>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-[#44475a] flex items-center justify-center
                text-comment hover:text-purple hover:border-purple transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex gap-2 items-center">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-purple w-6' : 'bg-[#44475a] hover:bg-comment'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-[#44475a] flex items-center justify-center
                text-comment hover:text-purple hover:border-purple transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}

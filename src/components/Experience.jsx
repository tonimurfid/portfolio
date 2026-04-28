import { useData } from '../context/DataContext'
import Section from './Section'
import { useScrollReveal } from '../hooks/useScrollReveal'

function TimelineCard({ exp, index, visible }) {
  const isLeft = index % 2 === 0

  return (
    <div
      className={`flex items-center w-full mb-8 md:mb-12 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className={`flex-1 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <div
          className={`bg-surface/60 border border-[#44475a]/40 rounded-xl p-5 backdrop-blur-sm
            hover:border-purple/30 hover:shadow-[0_0_20px_rgba(189,147,249,0.15)]
            transition-all duration-500 ${
              visible ? 'opacity-100 translate-x-0' : isLeft ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
            }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <h3 className="text-cyan font-mono font-bold text-sm">{exp.company}</h3>
          <p className="text-pink font-mono text-xs mt-0.5">{exp.role}</p>
          <p className="text-comment text-xs mt-1">
            {exp.date} &middot; {exp.location}
          </p>
          <ul className={`mt-3 space-y-1 text-xs leading-relaxed text-foreground/80 ${isLeft ? 'md:text-right' : ''}`}>
            {(exp.highlights || []).map((h, i) => (
              <li key={i} className={`flex gap-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                <span className="text-purple mt-0.5 flex-shrink-0">&gt;</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-purple shadow-[0_0_10px_rgba(189,147,249,0.6)]" />
      </div>

      <div className="hidden md:block flex-1" />
    </div>
  )
}

export default function Experience() {
  const { experiences } = useData()
  const [ref, visible] = useScrollReveal()

  return (
    <Section id="experience" className="!bg-[#1e1f29] !max-w-none">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="text-center mb-16">
          <span className="text-comment font-mono text-sm">{'// '}</span>
          <span className="text-cyan font-mono text-2xl font-bold">Work Experience</span>
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-purple via-cyan to-purple/20" />

          {experiences.list.map((exp, i) => (
            <TimelineCard key={exp.id} exp={exp} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </Section>
  )
}

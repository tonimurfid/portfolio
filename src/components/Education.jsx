import { useData } from '../context/DataContext'
import Section from './Section'
import Reveal from './Reveal'

export default function Education() {
  const { education } = useData()

  return (
    <Section id="education" fullWidth className="!bg-bg-darker">
      <h2 className="text-center mb-12">
        <span className="text-comment font-mono text-sm">{'// '}</span>
        <span className="text-cyan font-mono text-2xl font-bold">Education</span>
      </h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {education.list.map((edu, i) => (
          <Reveal key={edu.id} delay={i * 120}>
            <div className="bg-surface/40 border border-surface/30 rounded-xl p-6
              hover:border-purple/30 hover:shadow-[0_0_20px_rgba(189,147,249,0.1)]
              transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-mono font-bold text-foreground text-sm">{edu.degree}</h3>
                  <p className="text-purple font-mono text-xs mt-0.5">{edu.school}</p>
                </div>
                <span className="text-comment text-xs font-mono whitespace-nowrap">{edu.date}</span>
              </div>
              <p className="text-comment text-xs mb-0.5">{edu.major} &middot; {edu.location}</p>
              <ul className="mt-3 space-y-1">
                {(edu.highlights || []).map((h, j) => (
                  <li key={j} className="flex gap-2 text-xs text-foreground/70">
                    <span className="text-purple flex-shrink-0">&gt;</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

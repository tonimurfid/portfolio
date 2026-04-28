import { useData } from '../context/DataContext'
import Section from './Section'

export default function Projects() {
  const { projects } = useData()

  return (
    <Section id="projects">
      <h2 className="text-center mb-12">
        <span className="text-comment font-mono text-sm">{'// '}</span>
        <span className="text-cyan font-mono text-2xl font-bold">Featured Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.list.map(({ id, name, desc, tags, link }) => (
          <div
            key={id}
            className="group bg-surface/40 border border-[#44475a]/30 rounded-xl p-5
              hover:border-purple/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(189,147,249,0.15)]
              transition-all duration-300 flex flex-col"
          >
            <h3 className="font-mono font-bold text-foreground text-base mb-2 group-hover:text-cyan transition-colors">
              {name}
            </h3>
            <p className="text-comment text-xs leading-relaxed mb-4 flex-1">
              {desc}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {(tags || []).map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-full text-[10px] font-mono border border-purple/30 text-purple bg-purple/5"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={link || '#'}
              className="inline-flex items-center gap-1 text-xs font-mono text-cyan hover:text-green transition-colors"
            >
              View Project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}

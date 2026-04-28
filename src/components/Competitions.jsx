import { useData } from '../context/DataContext'
import Section from './Section'

export default function Competitions() {
  const { competitions } = useData()

  return (
    <Section id="competitions" className="!bg-[#1e1f29] !max-w-none">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">
          <span className="text-comment font-mono text-sm">{'// '}</span>
          <span className="text-cyan font-mono text-2xl font-bold">Competitions & Awards</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {competitions.list.map(({ id, rank, competition, date, org, role, color }) => (
            <div
              key={id}
              className="bg-surface/40 border border-[#44475a]/30 rounded-xl p-5
                hover:-translate-y-1 hover:border-purple/30 hover:shadow-[0_6px_25px_rgba(189,147,249,0.12)]
                transition-all duration-300"
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold border mb-3 ${color}`}>
                {rank}
              </span>
              <h3 className="font-mono font-bold text-foreground text-sm mb-1">{competition}</h3>
              <p className="text-comment text-xs">{org}</p>
              <div className="flex items-center gap-4 mt-3 text-[10px] font-mono text-comment/70">
                <span>{date}</span>
                <span className="text-purple">{role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

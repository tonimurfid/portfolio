import { COMPETITIONS } from '../data/portfolio'

export default function Competitions() {
  return (
    <section id="awards" className="py-16 sm:py-24 bg-surface/55 border-y border-rule">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="mb-10 sm:mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted mb-2.5">
            04 / Recognition
          </p>
          <h2 className="font-display text-3xl sm:text-5xl leading-[1.08] tracking-[-0.01em] text-ink">
            Competitions &amp; honors.
          </h2>
        </div>

        <div className="hidden md:grid md:grid-cols-12 gap-6 pb-3 border-b border-rule font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          <div className="md:col-span-2">Period</div>
          <div className="md:col-span-3">Distinction</div>
          <div className="md:col-span-5">Competition &amp; Focus</div>
          <div className="md:col-span-2 text-right">Organizer</div>
        </div>

        <ul className="divide-y divide-rule border-b border-rule">
          {COMPETITIONS.map((item) => (
            <li
              key={`${item.event}-${item.date}`}
              className="py-5 grid grid-cols-1 md:grid-cols-12 gap-1.5 md:gap-6 items-baseline"
            >
              <div className="md:col-span-2 tabular-nums-mono text-xs text-muted">
                {item.date}
              </div>

              <div className="md:col-span-3 font-mono text-sm font-medium text-accent">
                {item.award}
              </div>

              <div className="md:col-span-5">
                <p className="text-[15px] font-semibold text-ink">{item.event}</p>
                <p className="text-sm text-muted mt-0.5 leading-relaxed">{item.scope}</p>
              </div>

              <div className="md:col-span-2 font-mono text-xs text-muted md:text-right pt-1 md:pt-0">
                {item.organizer}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { EXPERIENCES } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-surface/55 border-y border-rule">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="mb-10 sm:mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted mb-2.5">
            02 / Experience
          </p>
          <h2 className="font-display text-3xl sm:text-5xl leading-[1.08] tracking-[-0.01em] text-ink">
            Industry &amp; research track record.
          </h2>
        </div>

        <div className="border-b border-rule">
          {EXPERIENCES.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="border-t border-rule py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              <div className="md:col-span-4">
                <p className="tabular-nums-mono text-xs uppercase tracking-wider text-ink">
                  {exp.period}
                </p>
                <p className="text-xs text-muted mt-1">{exp.location}</p>
                <h3 className="text-lg font-semibold tracking-tight text-ink mt-3">
                  {exp.company}
                </h3>
                {exp.distinction && (
                  <p className="mt-2 pl-2.5 border-l-2 border-accent font-mono text-[11px] text-accent font-medium">
                    {exp.distinction}
                  </p>
                )}
              </div>

              <div className="md:col-span-8">
                <p className="text-base font-semibold text-ink mb-3">{exp.role}</p>
                <ul className="space-y-2.5">
                  {exp.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[15px] leading-[1.65] text-muted"
                    >
                      <span className="text-rule-strong select-none shrink-0" aria-hidden="true">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

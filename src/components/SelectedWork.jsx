import { SELECTED_WORK } from '../data/portfolio'

export default function SelectedWork() {
  return (
    <section id="work" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="mb-10 sm:mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted mb-2.5">
            01 / Selected Work
          </p>
          <h2 className="font-display text-3xl sm:text-5xl leading-[1.08] tracking-[-0.01em] text-ink">
            Systems shipped across production &amp; research.
          </h2>
        </div>

        <div className="border-b border-rule">
          {SELECTED_WORK.map((project) => (
            <article
              key={project.index}
              className="group border-t border-rule py-8 sm:py-9 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start transition-colors hover:bg-surface/55 -mx-3 px-3 sm:-mx-4 sm:px-4"
            >
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 font-mono text-xs text-muted mb-2">
                  <span className="text-ink font-medium">{project.index}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-ink leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mt-1">{project.organization}</p>

                <div className="mt-4 pt-3 border-t border-rule/70 inline-block">
                  <span className="tabular-nums-mono text-sm font-medium text-accent">
                    {project.metric}
                  </span>
                  <span className="font-mono text-xs text-muted ml-2">
                    {project.metricNote}
                  </span>
                </div>
              </div>

              <div className="md:col-span-6">
                <p className="text-[15px] leading-[1.68] text-muted">
                  {project.description}
                </p>
                <p className="mt-4 font-mono text-xs text-ink/80">
                  {project.stack.join(' · ')}
                </p>
              </div>

              <div className="md:col-span-2 flex flex-row md:flex-col items-start md:items-end justify-between gap-2 pt-1">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs font-medium text-ink hover:text-accent underline underline-offset-4 decoration-rule-strong hover:decoration-accent transition-colors"
                  >
                    {link.label} ↗
                  </a>
                ))}
                {project.status && (
                  <span className="font-mono text-[11px] text-muted md:text-right">
                    {project.status}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

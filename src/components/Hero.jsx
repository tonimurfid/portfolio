import { HERO_METRICS, PROFILE } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="pt-10 pb-16 sm:pt-14 sm:pb-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted mb-5">
              {PROFILE.role} · {PROFILE.location}
            </p>

            <h1 className="font-display text-[2.75rem] sm:text-[3.75rem] lg:text-[4.35rem] leading-[1.03] tracking-[-0.015em] text-ink mb-6">
              {PROFILE.headlineLead}{' '}
              <span className="italic text-accent">{PROFILE.headlineItalic}</span>
            </h1>

            <p className="text-base sm:text-[17px] leading-[1.68] text-muted max-w-2xl mb-8">
              {PROFILE.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="px-5 py-2.5 bg-ink text-paper text-sm font-medium hover:bg-accent transition-colors"
              >
                Get in Touch
              </a>

              <a
                href={PROFILE.cvUrl}
                download
                className="px-5 py-2.5 border border-rule-strong text-ink text-sm font-medium hover:border-ink transition-colors"
              >
                Download CV
              </a>

              <div className="flex items-center gap-5 sm:ml-3 pt-1 sm:pt-0 text-sm font-mono text-muted">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink underline underline-offset-4 decoration-rule-strong hover:decoration-ink transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink underline underline-offset-4 decoration-rule-strong hover:decoration-ink transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          <figure className="lg:col-span-4 max-w-[260px] lg:max-w-none w-full">
            <div className="aspect-[4/5] w-full overflow-hidden border border-rule bg-surface">
              <img
                src={PROFILE.photoUrl}
                alt={PROFILE.name}
                width="640"
                height="800"
                fetchPriority="high"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] leading-relaxed text-muted">
              {PROFILE.photoCaption}
            </figcaption>
          </figure>
        </div>

        <dl className="mt-14 sm:mt-16 border-y border-rule grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-rule">
          {HERO_METRICS.map((item, idx) => (
            <div
              key={item.label}
              className={`py-6 ${idx % 2 === 0 ? 'pr-4' : 'pl-4 sm:pl-6'} lg:px-6 lg:first:pl-0 lg:last:pr-0`}
            >
              <dt className="sr-only">{item.label}</dt>
              <dd className="tabular-nums-mono text-2xl sm:text-[1.7rem] font-medium tracking-tight text-ink">
                {item.value}
              </dd>
              <p className="mt-1.5 text-sm font-medium text-ink">{item.label}</p>
              <p className="mt-0.5 font-mono text-[11px] text-muted">{item.context}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

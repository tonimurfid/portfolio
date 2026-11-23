import { SKILL_GROUPS } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="mb-10 sm:mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted mb-2.5">
            05 / Technical Stack
          </p>
          <h2 className="font-display text-3xl sm:text-5xl leading-[1.08] tracking-[-0.01em] text-ink">
            Tools &amp; infrastructure.
          </h2>
        </div>

        <dl className="border-y border-rule divide-y divide-rule">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
            >
              <dt className="md:col-span-4 font-mono text-xs uppercase tracking-[0.1em] text-muted">
                {group.category}
              </dt>
              <dd className="md:col-span-8 text-[15px] sm:text-base text-ink leading-relaxed">
                {group.items.join(' · ')}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

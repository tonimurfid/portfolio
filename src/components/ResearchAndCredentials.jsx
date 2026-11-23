import { CERTIFICATION, EDUCATION, PUBLICATION } from '../data/portfolio'

export default function ResearchAndCredentials() {
  return (
    <section id="research" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="mb-10 sm:mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted mb-2.5">
            03 / Research &amp; Credentials
          </p>
          <h2 className="font-display text-3xl sm:text-5xl leading-[1.08] tracking-[-0.01em] text-ink">
            Research publication &amp; academic foundation.
          </h2>
        </div>

        <article className="bg-surface border border-rule p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted mb-4">
            <span className="uppercase tracking-[0.1em] text-accent font-medium">
              IEEE Paper Accepted · {PUBLICATION.date}
            </span>
            <span>{PUBLICATION.venue}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl leading-[1.15] text-ink max-w-3xl">
            {PUBLICATION.title}
          </h3>

          <p className="mt-4 text-[15px] leading-[1.68] text-muted max-w-2xl">
            {PUBLICATION.summary}
          </p>

          <div className="mt-6 pt-5 border-t border-rule flex flex-wrap items-center gap-6 font-mono text-xs">
            {PUBLICATION.loaUrl && (
              <a
                href={PUBLICATION.loaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink font-medium hover:text-accent underline underline-offset-4 decoration-rule-strong hover:decoration-accent transition-colors"
              >
                View Letter of Acceptance (LOA) ↗
              </a>
            )}
            <span className="text-muted">Accepted · IEEE 12th ITIS (Oct 2026)</span>
          </div>
        </article>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 border-y border-rule divide-y md:divide-y-0 md:divide-x divide-rule">
          <div className="py-7 md:pr-10">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-3">
              Education
            </p>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold tracking-tight text-ink">
                {EDUCATION.institution}
              </h3>
              <span className="tabular-nums-mono text-xs text-muted shrink-0">
                {EDUCATION.period}
              </span>
            </div>
            <p className="text-sm text-ink mt-1">{EDUCATION.degree}</p>
            <p className="mt-3 tabular-nums-mono text-sm font-medium text-accent">
              GPA {EDUCATION.gpa}
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{EDUCATION.note}</p>
          </div>

          <div className="py-7 md:pl-10">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-3">
              Certification
            </p>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold tracking-tight text-ink">
                {CERTIFICATION.title}
              </h3>
              <span className="tabular-nums-mono text-xs text-muted shrink-0">
                {CERTIFICATION.date}
              </span>
            </div>
            <p className="text-sm text-muted mt-1">{CERTIFICATION.issuer}</p>

            {CERTIFICATION.credentialUrl ? (
              <a
                href={CERTIFICATION.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 font-mono text-xs font-medium text-ink hover:text-accent underline underline-offset-4 decoration-rule-strong hover:decoration-accent transition-colors"
              >
                Verify Credential ↗
              </a>
            ) : (
              <p className="mt-4 font-mono text-xs text-muted">
                National Competency Certification · Indonesia
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

import { PROFILE } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-paper py-8">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-muted">
        <p>
          &copy; {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location}
        </p>
        <div className="flex items-center gap-5">
          <span>Built with React &amp; Tailwind CSS</span>
          <a
            href="#top"
            className="text-ink hover:text-accent underline underline-offset-4 decoration-rule-strong hover:decoration-accent transition-colors"
          >
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

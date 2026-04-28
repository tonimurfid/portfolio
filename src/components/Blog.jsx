import { useData } from '../context/DataContext'
import Section from './Section'

export default function Blog() {
  const { blogs } = useData()
  const items = blogs.list

  return (
    <Section id="blog">
      <h2 className="text-center mb-3">
        <span className="text-comment font-mono text-sm">{'// '}</span>
        <span className="text-cyan font-mono text-2xl font-bold">Blog</span>
      </h2>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono bg-yellow/10 text-yellow border border-yellow/30 mb-4">
            Under Construction
          </span>
          <p className="text-comment text-sm font-mono">No posts yet. Check back soon.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {items.map(({ id, title, date, content, tags }) => (
            <div
              key={id}
              className="bg-surface/40 border border-[#44475a]/30 rounded-xl p-5
                hover:border-purple/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-full h-32 rounded-lg bg-gradient-to-br from-purple/10 to-cyan/10 mb-4 flex items-center justify-center">
                <span className="font-mono text-purple text-3xl font-bold">#</span>
              </div>
              <p className="font-mono font-bold text-foreground text-sm mb-1">{title}</p>
              <p className="text-comment text-xs mb-2">{date}</p>
              <p className="text-comment/70 text-xs mb-3 line-clamp-2">{content}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {(tags || []).map((t, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#44475a]/30 text-comment">
                    {t}
                  </span>
                ))}
              </div>
              <button className="text-xs font-mono text-cyan hover:text-green transition-colors">
                Read More &rarr;
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="max-w-md mx-auto text-center">
        <p className="text-comment text-sm font-mono mb-3">
          {'>>> '}Subscribe for updates when posts go live
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-surface border border-[#44475a] rounded-lg px-4 py-2.5 text-sm font-mono
              text-foreground placeholder:text-comment/50 outline-none
              focus:border-purple focus:shadow-[0_0_10px_rgba(189,147,249,0.2)] transition-all duration-300"
          />
          <button
            className="px-5 py-2.5 rounded-lg font-mono text-sm bg-purple text-[#282a36] font-bold
              hover:shadow-[0_0_20px_rgba(189,147,249,0.4)] transition-all duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    </Section>
  )
}

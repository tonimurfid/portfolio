import Section from './Section'

const STATS = [
  { value: '6+', label: 'Competitions', color: 'text-yellow' },
  { value: '5+', label: 'Production Projects', color: 'text-cyan' },
  { value: '4+', label: 'Research Projects', color: 'text-purple' },
]

export default function About() {
  return (
    <Section id="about" className="!bg-[#1e1f29] !max-w-none">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">
          <span className="text-comment font-mono text-sm">{'// '}</span>
          <span className="text-cyan font-mono text-2xl font-bold">About Me</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="flex-shrink-0">
            {/* REPLACE WITH ACTUAL PHOTO */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-[#44475a] border-2 border-purple/40 shadow-[0_0_30px_rgba(189,147,249,0.2)] overflow-hidden">
              <img
                src="/profile.jpeg"
                alt="Fatoni Murfid Syaafii"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
              <p className="text-foreground/90 leading-relaxed mb-6 text-sm md:text-base">
                AI Engineer specializing in production-ready ML systems, bridging research
                and real-world deployment. Experienced in Computer Vision and LLM-based
                applications, including RAG systems, cross-domain adaptation, and end-to-end
                ML pipelines. Proven track record of deploying scalable AI services to VPS
                and cloud environments, with measurable performance improvements across
                research and industry projects.
              </p>

            <div className="grid grid-cols-3 gap-4">
              {STATS.map(({ value, label, color }) => (
                <div
                  key={label}
                  className="bg-surface/50 rounded-xl p-4 border border-[#44475a]/40
                    hover:border-purple/40 hover:shadow-[0_0_15px_rgba(189,147,249,0.15)]
                    transition-all duration-300 text-center"
                >
                  <div className={`text-2xl md:text-3xl font-bold font-mono ${color}`}>
                    {value}
                  </div>
                  <div className="text-comment text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

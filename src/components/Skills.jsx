import Section from './Section'

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    color: 'border-orange/40 text-orange bg-orange/10 hover:shadow-[0_0_12px_rgba(255,184,108,0.3)]',
    skills: ['Python', 'SQL', 'Java'],
  },
  {
    title: 'AI / ML',
    color: 'border-cyan/40 text-cyan bg-cyan/10 hover:shadow-[0_0_12px_rgba(139,233,253,0.3)]',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'HuggingFace'],
  },
  {
    title: 'MLOps & Deployment',
    color: 'border-green/40 text-green bg-green/10 hover:shadow-[0_0_12px_rgba(80,250,123,0.3)]',
    skills: ['Docker', 'MLflow', 'W&B', 'FastAPI', 'Azure', 'Git'],
  },
  {
    title: 'Data & Databases',
    color: 'border-purple/40 text-purple bg-purple/10 hover:shadow-[0_0_12px_rgba(189,147,249,0.3)]',
    skills: ['MongoDB', 'PostgreSQL', 'ChromaDB'],
  },
  {
    title: 'Platforms',
    color: 'border-pink/40 text-pink bg-pink/10 hover:shadow-[0_0_12px_rgba(255,121,198,0.3)]',
    skills: ['Linux', 'Jupyter', 'Google Colab', 'VS Code', 'Nano'],
  },
]

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-center mb-12">
        <span className="text-comment font-mono text-sm">{'// '}</span>
        <span className="text-cyan font-mono text-2xl font-bold">Technical Skills</span>
      </h2>

      <div className="space-y-8">
        {SKILL_CATEGORIES.map(({ title, color, skills }) => (
          <div key={title}>
            <h3 className="text-sm font-mono text-comment mb-3">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-300
                    hover:scale-110 cursor-default ${color}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

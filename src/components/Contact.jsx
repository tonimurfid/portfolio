import { useState } from 'react'
import Section from './Section'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSubmitted(true)
    }
  }

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  return (
    <Section id="contact">
      <h2 className="text-center mb-12">
        <span className="text-comment font-mono text-sm">{'// '}</span>
        <span className="text-cyan font-mono text-2xl font-bold">Let&apos;s Collaborate</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          {submitted ? (
            <div className="bg-green/10 border border-green/30 rounded-xl p-8 text-center">
              <svg className="mx-auto mb-4 text-green" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <p className="font-mono text-green font-bold text-lg">Message Sent!</p>
              <p className="text-comment text-sm mt-1">Thanks for reaching out. I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: 'Name', field: 'name', type: 'text' },
                { label: 'Email', field: 'email', type: 'email' },
                { label: 'Subject', field: 'subject', type: 'text' },
              ].map(({ label, field, type }) => (
                <div key={field}>
                  <label className="block text-xs font-mono text-comment mb-1">{label}</label>
                  <input
                    type={type}
                    value={form[field]}
                    onChange={handleChange(field)}
                    required={field !== 'subject'}
                    className="w-full bg-surface border border-[#44475a] rounded-lg px-4 py-2.5 text-sm
                      text-foreground placeholder:text-comment/50 outline-none
                      focus:border-purple focus:shadow-[0_0_10px_rgba(189,147,249,0.2)]
                      transition-all duration-300 font-mono"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-mono text-comment mb-1">Message</label>
                <textarea
                  value={form.message}
                  onChange={handleChange('message')}
                  required
                  rows={4}
                  className="w-full bg-surface border border-[#44475a] rounded-lg px-4 py-2.5 text-sm
                    text-foreground placeholder:text-comment/50 outline-none resize-none
                    focus:border-purple focus:shadow-[0_0_10px_rgba(189,147,249,0.2)]
                    transition-all duration-300 font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-mono text-sm font-bold bg-purple text-[#282a36]
                  hover:shadow-[0_0_25px_rgba(189,147,249,0.4)] active:scale-[0.98]
                  transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="flex-1 space-y-5">
          <div className="bg-surface/30 border border-[#44475a]/20 rounded-xl p-6 space-y-4">
            <h3 className="font-mono text-cyan font-bold text-sm mb-2">Contact Info</h3>

            {[
              { icon: '📧', label: 'Email', value: 'fatonimurfids@gmail.com', href: 'mailto:fatonimurfids@gmail.com' },
              { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/fatoni-murfid-syaafii', href: 'https://linkedin.com/in/fatoni-murfid-syaafii' },
              { icon: '🐙', label: 'GitHub', value: 'github.com/tonimurfid', href: 'https://github.com/tonimurfid' },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 text-sm hover:text-cyan transition-colors"
              >
                <span className="text-lg">{icon}</span>
                <div>
                  <p className="text-comment text-xs">{label}</p>
                  <p className="font-mono text-foreground/80 text-xs">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-surface/30 border border-[#44475a]/20 rounded-xl p-6">
            <h3 className="font-mono text-cyan font-bold text-sm mb-3">Find Me On</h3>
            <div className="flex gap-3">
              {[
                { label: 'GitHub', href: 'https://github.com/tonimurfid', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/fatoni-murfid-syaafii', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { label: 'Email', href: 'mailto:fatonimurfids@gmail.com', icon: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z' },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-[#44475a] flex items-center justify-center
                    text-comment hover:text-purple hover:border-purple hover:shadow-[0_0_12px_rgba(189,147,249,0.3)]
                    transition-all duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

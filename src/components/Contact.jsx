import { useState } from 'react'
import Section from './Section'
import SocialIcons from './SocialIcons'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('loading')

    try {
      const body = new FormData()
      body.append('access_key', ACCESS_KEY)
      body.append('name', form.name)
      body.append('email', form.email)
      body.append('subject', form.subject || 'Portfolio Contact')
      body.append('message', form.message)
      body.append('botcheck', '')

      const res = await fetch(WEB3FORMS_URL, { method: 'POST', body })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const reset = () => {
    setStatus('idle')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <Section id="contact">
      <h2 className="text-center mb-12">
        <span className="text-comment font-mono text-sm">{'// '}</span>
        <span className="text-cyan font-mono text-2xl font-bold">Let&apos;s Collaborate</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          {status === 'success' ? (
            <div className="bg-green/10 border border-green/30 rounded-xl p-8 text-center" role="status">
              <svg className="mx-auto mb-4 text-green" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <p className="font-mono text-green font-bold text-lg">Message Sent!</p>
              <p className="text-comment text-sm mt-1">Thanks for reaching out. I&apos;ll get back to you soon.</p>
              <button onClick={reset} className="mt-4 px-4 py-2 rounded-lg text-xs font-mono border border-green/40 text-green hover:bg-green/10 transition-colors">
                Send Another
              </button>
            </div>
          ) : status === 'error' ? (
            <div className="bg-red/10 border border-red/30 rounded-xl p-8 text-center" role="alert">
              <svg className="mx-auto mb-4 text-red" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              <p className="font-mono text-red font-bold text-lg">Something went wrong</p>
              <p className="text-comment text-sm mt-1">Please try again or email me directly.</p>
              <button onClick={reset} className="mt-4 px-4 py-2 rounded-lg text-xs font-mono border border-red/40 text-red hover:bg-red/10 transition-colors">
                Try Again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />

              {[
                { label: 'Name', field: 'name', type: 'text', autocomplete: 'name' },
                { label: 'Email', field: 'email', type: 'email', autocomplete: 'email' },
                { label: 'Subject', field: 'subject', type: 'text', autocomplete: 'off' },
              ].map(({ label, field, type, autocomplete }) => (
                <div key={field}>
                  <label htmlFor={`contact-${field}`} className="block text-xs font-mono text-comment mb-1">{label}</label>
                  <input
                    id={`contact-${field}`}
                    type={type}
                    value={form[field]}
                    onChange={handleChange(field)}
                    required={field !== 'subject'}
                    autoComplete={autocomplete}
                    disabled={status === 'loading'}
                    className="w-full bg-surface border border-surface rounded-lg px-4 py-2.5 text-sm
                      text-foreground placeholder:text-comment/50 outline-none
                      focus:border-purple focus:shadow-[0_0_10px_rgba(189,147,249,0.2)]
                      transition-all duration-300 font-mono disabled:opacity-50"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-comment mb-1">Message</label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={handleChange('message')}
                  required
                  rows={4}
                  disabled={status === 'loading'}
                  className="w-full bg-surface border border-surface rounded-lg px-4 py-2.5 text-sm
                    text-foreground placeholder:text-comment/50 outline-none resize-none
                    focus:border-purple focus:shadow-[0_0_10px_rgba(189,147,249,0.2)]
                    transition-all duration-300 font-mono disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 rounded-lg font-mono text-sm font-bold bg-purple text-bg
                  hover:shadow-[0_0_25px_rgba(189,147,249,0.4)] active:scale-[0.98]
                  transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        <div className="flex-1 space-y-5">
          <div className="bg-surface/30 border border-surface/20 rounded-xl p-6 space-y-4">
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

          <div className="bg-surface/30 border border-surface/20 rounded-xl p-6">
            <h3 className="font-mono text-cyan font-bold text-sm mb-3">Find Me On</h3>
            <SocialIcons className="!justify-start !gap-3" />
          </div>
        </div>
      </div>
    </Section>
  )
}

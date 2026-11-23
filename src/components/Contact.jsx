import { useState } from 'react'
import { PROFILE } from '../data/portfolio'
import SocialIcons from './SocialIcons'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${PROFILE.email}`
    }
  }

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return

    if (!ACCESS_KEY || ACCESS_KEY === 'your-access-key-here') {
      const subject = encodeURIComponent(form.subject.trim() || `Portfolio Inquiry from ${form.name.trim()}`)
      const body = encodeURIComponent(
        `${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`
      )
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
      setStatus('mailto')
      return
    }

    setStatus('loading')
    try {
      const body = new FormData()
      body.append('access_key', ACCESS_KEY)
      body.append('name', form.name.trim())
      body.append('email', form.email.trim())
      body.append('subject', form.subject.trim() || 'Portfolio Contact')
      body.append('message', form.message.trim())
      body.append('botcheck', '')

      const res = await fetch(WEB3FORMS_URL, { method: 'POST', body })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const reset = () => {
    setStatus('idle')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-surface/55 border-t border-rule">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted mb-2.5">
              06 / Contact
            </p>
            <h2 className="font-display text-3xl sm:text-5xl leading-[1.08] tracking-[-0.01em] text-ink">
              Let&apos;s build something reliable.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.68] text-muted">
              Open to AI/ML Engineering roles, applied research collaborations, and production LLM
              or Computer Vision consulting.
            </p>

            <div className="mt-8 pt-6 border-t border-rule">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted mb-2">
                Direct Email
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="font-mono text-sm text-ink hover:text-accent transition-colors"
                >
                  {PROFILE.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 border border-rule-strong font-mono text-[11px] text-ink hover:border-ink transition-colors cursor-pointer"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="mt-6">
              <SocialIcons />
            </div>
          </div>

          <div className="md:col-span-7">
            {status === 'success' ? (
              <div className="border border-rule bg-paper p-8" role="status">
                <p className="font-mono text-xs uppercase tracking-wider text-status-ok font-medium">
                  Message Received
                </p>
                <p className="mt-2 text-lg font-semibold text-ink">
                  Thanks for reaching out.
                </p>
                <p className="mt-1 text-sm text-muted">
                  Your message has been delivered. I&apos;ll get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-5 px-4 py-2 border border-rule-strong font-mono text-xs text-ink hover:border-ink transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : status === 'mailto' ? (
              <div className="border border-rule bg-paper p-8" role="status">
                <p className="font-mono text-xs uppercase tracking-wider text-accent font-medium">
                  Draft Opened in Mail Client
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Your email client should open with a pre-filled draft to{' '}
                  <span className="font-mono text-ink">{PROFILE.email}</span>. You can also copy
                  the address directly on the left.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-5 px-4 py-2 border border-rule-strong font-mono text-xs text-ink hover:border-ink transition-colors cursor-pointer"
                >
                  Reset Form
                </button>
              </div>
            ) : status === 'error' ? (
              <div className="border border-status-err/40 bg-paper p-8" role="alert">
                <p className="font-mono text-xs uppercase tracking-wider text-status-err font-medium">
                  Delivery Failed
                </p>
                <p className="mt-2 text-sm text-muted">
                  Something went wrong sending the form. Please try again or email{' '}
                  <a href={`mailto:${PROFILE.email}`} className="text-ink underline">
                    {PROFILE.email}
                  </a>{' '}
                  directly.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-5 px-4 py-2 border border-rule-strong font-mono text-xs text-ink hover:border-ink transition-colors cursor-pointer"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="hidden"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs uppercase tracking-[0.1em] text-muted mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={handleChange('name')}
                      required
                      autoComplete="name"
                      disabled={status === 'loading'}
                      placeholder="Your name"
                      className="w-full bg-paper border border-rule px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-ink focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs uppercase tracking-[0.1em] text-muted mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      required
                      autoComplete="email"
                      disabled={status === 'loading'}
                      placeholder="you@company.com"
                      className="w-full bg-paper border border-rule px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-ink focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs uppercase tracking-[0.1em] text-muted mb-2"
                  >
                    Subject <span className="normal-case tracking-normal">(optional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange('subject')}
                    autoComplete="off"
                    disabled={status === 'loading'}
                    placeholder="Role, collaboration, or research inquiry"
                    className="w-full bg-paper border border-rule px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-ink focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-[0.1em] text-muted mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={handleChange('message')}
                    required
                    rows={5}
                    disabled={status === 'loading'}
                    placeholder="Tell me about the system, role, or problem you are working on."
                    className="w-full bg-paper border border-rule px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-ink focus:outline-none resize-y transition-colors disabled:opacity-50"
                  />
                </div>

                <div className="pt-1 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-6 py-2.5 bg-ink text-paper text-sm font-medium hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="font-mono text-[11px] text-muted">
                    Typically replies within 24–48 hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

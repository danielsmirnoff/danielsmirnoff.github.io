import { useState, type FormEvent, type ReactNode } from 'react'

const FORM_ENDPOINT = 'https://formspree.io/f/mkjobona'

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

interface ContactLink {
  label: string
  href: string
  external: boolean
  icon: ReactNode
}

const links: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:danielsmirnoff8@gmail.com',
    external: false,
    icon: (
      <svg {...iconProps}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/danielsmirnoff',
    external: true,
    icon: (
      <svg {...iconProps}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/daniel-smirnoff-8132ba211/',
    external: true,
    icon: (
      <svg {...iconProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

const inputClass =
  'mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white ' +
  'placeholder-gray-500 transition focus:border-[#fca311] focus:outline-none ' +
  'focus:ring-2 focus:ring-[#fca311]/30 disabled:opacity-60'

const labelClass = 'block text-sm font-semibold text-gray-200'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactSection() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-32 px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Info */}
        <div>
          <p className="font-mono text-sm uppercase tracking-widest text-[#fca311]">
            Let's Work Together
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">Get in Touch</h2>
          <div className="mt-3 h-1 w-16 rounded bg-[#fca311]" />

          <p className="mt-6 max-w-lg leading-relaxed text-gray-300">
            I love connecting with like-minded people. If you're interested in working together
            or just want to say hi, send me a message. I'm always open to new opportunities,
            collaborations, and interesting game projects.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="inline-flex items-center gap-2 rounded-lg
                             bg-[#14213d] px-4 py-2.5 text-sm font-semibold text-gray-200
                             transition hover:-translate-y-0.5 hover:border-[#fca311]/60
                             hover:text-[#fca311]"
                >
                  {link.icon}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-[#14213d] p-6 shadow-lg md:p-8"
        >
          <div>
            <label htmlFor="name" className={labelClass}>Name</label>
            <input
              type="text" id="name" name="name" required autoComplete="name"
              placeholder="Your name" disabled={status === 'sending'} className={inputClass}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="email" className={labelClass}>Email</label>
            <input
              type="email" id="email" name="email" required autoComplete="email"
              placeholder="you@example.com" disabled={status === 'sending'} className={inputClass}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className={labelClass}>Message</label>
            <textarea
              id="message" name="message" rows={5} required
              placeholder="Tell me about your project..."
              disabled={status === 'sending'} className={`${inputClass} resize-y`}
            />
          </div>

          {/* Honeypot: hidden from people, bots fill it in */}
          <input
            type="text" name="_gotcha" tabIndex={-1} autoComplete="off"
            className="hidden" aria-hidden="true"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 w-full rounded-lg bg-[#fca311] px-5 py-3 text-sm font-semibold
                       text-[#14213d] transition hover:bg-[#ffb733]
                       disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          <div aria-live="polite" className="mt-4 min-h-[1.25rem] text-sm">
            {status === 'success' && (
              <p className="text-green-400">Thanks! Your message was sent, and I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400">
                Something went wrong. Please try again, or email me directly at{' '}
                <a href="mailto:danielsmirnoff8@gmail.com" className="underline">
                  danielsmirnoff8@gmail.com
                </a>.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
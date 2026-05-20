import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function Estimate() {
  const [submitted, setSubmitted] = useState(false)
  const [smsConsent, setSmsConsent] = useState(false)
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In production, POST this to your backend / form handler / GoHighLevel webhook
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10 lg:py-32 text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
          / Request Received
        </div>
        <h1 className="mt-4 font-display text-5xl uppercase leading-tight">
          Thanks — <span className="text-amber">we'll be in touch.</span>
        </h1>
        <p className="mt-6 text-concrete leading-relaxed">
          We've received your estimate request and will reach out within one
          business day. For anything urgent, give us a ring directly.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+12602585303"
            className="bg-amber px-7 py-4 font-display uppercase tracking-wider text-ink hover:bg-amber-dark transition-colors"
          >
            Call (260) 258-5303
          </a>
          <Link
            to="/"
            className="border border-bone/30 px-7 py-4 font-display uppercase tracking-wider text-bone hover:border-amber hover:text-amber transition-colors"
          >
            Back Home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="relative overflow-hidden noise border-b border-amber/20">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
            / Free Estimate
          </div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight slide-up">
            Tell us about <br />
            <span className="text-amber">your project.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-concrete leading-relaxed slide-up" style={{ animationDelay: '0.1s' }}>
            Estimates are always free and no-pressure. Fill out the form and we'll
            be in touch within one business day. Prefer a call?
            {' '}<a href="tel:+12602585303" className="text-amber link-hover">(260) 258-5303</a>.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* FORM */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="First Name" required>
                  <input
                    required
                    type="text"
                    name="firstName"
                    className="w-full bg-coal border border-steel px-4 py-3 text-bone focus:border-amber"
                  />
                </Field>
                <Field label="Last Name" required>
                  <input
                    required
                    type="text"
                    name="lastName"
                    className="w-full bg-coal border border-steel px-4 py-3 text-bone focus:border-amber"
                  />
                </Field>
              </div>

              <Field label="Email" required>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full bg-coal border border-steel px-4 py-3 text-bone focus:border-amber"
                />
              </Field>

              {/* Phone is OPTIONAL per A2P 10DLC best practice */}
              <Field label="Phone (optional)">
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 555-5555"
                  className="w-full bg-coal border border-steel px-4 py-3 text-bone focus:border-amber"
                />
              </Field>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Project Type" required>
                  <select
                    required
                    name="projectType"
                    defaultValue=""
                    className="w-full bg-coal border border-steel px-4 py-3 text-bone focus:border-amber"
                  >
                    <option value="" disabled>Select one…</option>
                    <option>Remodel / Renovation</option>
                    <option>Addition / New Build</option>
                    <option>Handyman / Repair</option>
                    <option>Deck / Outdoor</option>
                    <option>Commercial / Industrial</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Project Budget">
                  <select
                    name="budget"
                    defaultValue=""
                    className="w-full bg-coal border border-steel px-4 py-3 text-bone focus:border-amber"
                  >
                    <option value="" disabled>Select one…</option>
                    <option>Under $5,000</option>
                    <option>$5,000 – $20,000</option>
                    <option>$20,000 – $50,000</option>
                    <option>$50,000 – $100,000</option>
                    <option>$100,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </Field>
              </div>

              <Field label="Project Address (City / Zip is fine)">
                <input
                  type="text"
                  name="address"
                  className="w-full bg-coal border border-steel px-4 py-3 text-bone focus:border-amber"
                />
              </Field>

              <Field label="Tell us about your project" required>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Scope, timeline, materials you're considering, anything we should know…"
                  className="w-full bg-coal border border-steel px-4 py-3 text-bone focus:border-amber resize-none"
                />
              </Field>

              {/* === A2P 10DLC SMS CONSENT BLOCK === */}
              {phone.trim().length > 0 && (
                <div className="border-2 border-amber/40 bg-amber/5 p-5">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="smsConsent"
                      checked={smsConsent}
                      onChange={(e) => setSmsConsent(e.target.checked)}
                      className="mt-1 h-5 w-5 accent-amber flex-shrink-0"
                    />
                    <span className="text-sm text-bone leading-relaxed">
                      <strong className="text-amber font-display uppercase tracking-wider text-xs block mb-2">
                        SMS Consent (Optional)
                      </strong>
                      By providing your phone number and checking this box, you agree to
                      receive automated promotional and transactional text messages from{' '}
                      <strong>Dorsett Does It LLC</strong> at the number provided. Consent
                      is not a condition of any purchase. Message &amp; data rates may apply.
                      Message frequency varies. Reply <strong>STOP</strong> to opt-out or{' '}
                      <strong>HELP</strong> for help. View our{' '}
                      <Link to="/privacy-policy" className="text-amber underline">Privacy Policy</Link>
                      {' '}and{' '}
                      <Link to="/terms-of-service" className="text-amber underline">Terms of Service</Link>.
                    </span>
                  </label>
                </div>
              )}

              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-amber px-8 py-4 font-display uppercase tracking-wider text-ink hover:bg-amber-dark transition-colors"
              >
                Send Estimate Request
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <div className="border border-amber/30 bg-coal p-6">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
                  / Contact Direct
                </div>
                <div className="mt-4 space-y-3">
                  <a href="tel:+12602585303" className="block">
                    <div className="text-xs font-mono uppercase text-concrete">Call us</div>
                    <div className="font-display text-2xl text-bone hover:text-amber transition-colors">
                      (260) 258-5303
                    </div>
                  </a>
                  <div>
                    <div className="text-xs font-mono uppercase text-concrete">Service Area</div>
                    <div className="font-display text-lg text-bone">Local & Surrounding Areas</div>
                  </div>
                </div>
              </div>

              <div className="border border-steel p-6">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
                  / What Happens Next
                </div>
                <ol className="mt-5 space-y-4 text-sm">
                  {[
                    'We review your request within one business day.',
                    'We schedule a free on-site walk-through or call.',
                    'You receive a transparent, line-item written quote.',
                    'No pressure. Take your time. We\'re here when you decide.',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-display text-amber">0{i + 1}</span>
                      <span className="text-concrete leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-widest text-concrete">
        {label} {required && <span className="text-amber">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  )
}

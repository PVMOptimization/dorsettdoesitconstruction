import { Link } from 'react-router-dom'

const SERVICES_PREVIEW = [
  { n: '01', t: 'General Contracting', d: 'Full-scope project management from permits to punch list.' },
  { n: '02', t: 'Remodeling & Renovations', d: 'Kitchens, baths, basements, additions — built to last.' },
  { n: '03', t: 'Handyman Repairs', d: 'Drywall, doors, fixtures, decks — the long honey-do list, done.' },
  { n: '04', t: 'Commercial Buildouts', d: 'Office, retail, and industrial tenant improvements.' },
]

const PROCESS = [
  { step: '01', title: 'Free Estimate', body: 'Walk-through, scope review, transparent line-item quote.' },
  { step: '02', title: 'Plan & Schedule', body: 'Locked timeline, materials list, single point of contact.' },
  { step: '03', title: 'Build', body: 'Skilled crew, daily site cleanup, weekly progress check-ins.' },
  { step: '04', title: 'Final Walk', body: 'Punch list completed before you sign off. No loose ends.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden noise">
        <div className="absolute inset-0 blueprint-grid opacity-60" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-10 lg:pt-28 lg:pb-32">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 slide-up">
              <div className="inline-flex items-center gap-3 border border-amber/40 bg-amber/5 px-4 py-2">
                <span className="h-2 w-2 bg-amber animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
                  Now Booking Spring Projects
                </span>
              </div>

              <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[0.95] tracking-tight">
                Built right.<br />
                <span className="text-amber">Done</span> on time.
              </h1>

              <p className="mt-8 max-w-xl text-lg text-concrete leading-relaxed">
                Dorsett Does It is your local general contractor for repairs,
                remodels, and renovations. Residential and commercial — one team,
                one promise: quality work, honest pricing, finished when we said.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/get-a-estimate"
                  className="group relative inline-flex items-center gap-3 bg-amber px-7 py-4 font-display uppercase tracking-wider text-ink hover:bg-amber-dark transition-colors"
                >
                  Get A Free Quote
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="tel:+12602585303"
                  className="inline-flex items-center gap-3 border border-bone/30 px-7 py-4 font-display uppercase tracking-wider text-bone hover:border-amber hover:text-amber transition-colors"
                >
                  (260) 258-5303
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-8 text-sm">
                {[
                  ['15+', 'Years On The Tools'],
                  ['500+', 'Projects Delivered'],
                  ['100%', 'Licensed & Insured'],
                ].map(([num, label]) => (
                  <div key={label}>
                    <div className="font-display text-4xl text-amber">{num}</div>
                    <div className="mt-1 font-mono text-xs uppercase tracking-widest text-concrete">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual side */}
            <div className="lg:col-span-5 slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="caution-stripes h-3 w-full mb-4" />
                <div className="relative aspect-[4/5] bg-steel border border-amber/20 overflow-hidden">
                  <div className="absolute inset-0 blueprint-grid opacity-40" />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div>
                      <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
                        Project Spec / 2026
                      </div>
                      <div className="mt-2 font-display text-3xl uppercase text-bone">
                        Whatever<br />you need built —<br /><span className="text-amber">we build it.</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {['Permits & Inspections', 'Skilled Trades', 'Materials Sourcing', 'Project Management'].map((item) => (
                        <div key={item} className="flex items-center gap-3 font-mono text-sm">
                          <span className="text-amber">✓</span>
                          <span className="text-bone">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-amber/30 pt-4 flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-widest text-concrete">Signed</span>
                      <span className="font-display text-amber uppercase">Dorsett Does It</span>
                    </div>
                  </div>
                </div>
                <div className="caution-stripes h-3 w-full mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <section className="border-y border-amber/30 bg-coal overflow-hidden">
        <div className="ticker-track flex whitespace-nowrap py-5">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 font-display uppercase tracking-widest text-2xl">
              {['Remodels', 'Additions', 'Kitchens', 'Bathrooms', 'Decks', 'Drywall', 'Tile', 'Flooring', 'Trim Carpentry', 'Roof Repairs', 'Doors & Windows', 'Commercial Buildouts'].map((s) => (
                <span key={s} className="flex items-center gap-12">
                  <span className="text-bone">{s}</span>
                  <span className="text-amber">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
              / What We Build
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl uppercase leading-tight">
              Quality remodeling, real craftsmanship.
            </h2>
            <p className="mt-6 text-concrete leading-relaxed">
              Dorsett Does It specializes in comprehensive projects for residential,
              commercial, and industrial properties. Every detail meets high
              standards of quality and durability.
            </p>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 font-display uppercase tracking-wider text-amber link-hover"
            >
              See All Services →
            </Link>
          </div>

          <div className="lg:col-span-8 grid gap-px bg-amber/20 sm:grid-cols-2">
            {SERVICES_PREVIEW.map((s) => (
              <div key={s.n} className="group bg-ink p-8 transition-colors hover:bg-coal">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-amber">{s.n}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-concrete group-hover:text-amber transition-colors">
                    <path d="M7 17L17 7M17 7H8M17 7v9" />
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-2xl uppercase">{s.t}</h3>
                <p className="mt-3 text-concrete text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-coal py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
              / How It Works
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl uppercase leading-tight">
              A process that <span className="text-amber">respects</span> your time.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <div key={p.step} className="relative">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-6xl text-amber/30">{p.step}</span>
                  <h3 className="font-display text-2xl uppercase">{p.title}</h3>
                </div>
                <p className="mt-4 text-concrete leading-relaxed">{p.body}</p>
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-amber/30">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="relative overflow-hidden border-2 border-amber bg-ink p-10 lg:p-16">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-amber/20 blur-3xl" />
          <div className="caution-stripes-thin absolute top-0 left-0 h-1 w-full" />
          <div className="caution-stripes-thin absolute bottom-0 left-0 h-1 w-full" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
                / Ready When You Are
              </div>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl uppercase leading-tight">
                Got a project? <br />
                <span className="text-amber">Let's Build It.</span>
              </h2>
            </div>
            <div className="lg:text-right space-y-4">
              <p className="text-concrete leading-relaxed">
                Free estimates. No pressure. We'll walk your site, scope the work,
                and write you an honest quote.
              </p>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  to="/get-a-estimate"
                  className="bg-amber px-7 py-4 font-display uppercase tracking-wider text-ink hover:bg-amber-dark transition-colors"
                >
                  Get A Free Quote
                </Link>
                <a
                  href="tel:+12602585303"
                  className="border border-bone/30 px-7 py-4 font-display uppercase tracking-wider text-bone hover:border-amber hover:text-amber transition-colors"
                >
                  Call (260) 258-5303
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

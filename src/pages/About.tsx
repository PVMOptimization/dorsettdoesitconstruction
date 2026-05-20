import { Link } from 'react-router-dom'

const VALUES = [
  { t: 'Craftsmanship', d: 'We do it the right way the first time. Cut corners get cut elsewhere.' },
  { t: 'Honest Pricing', d: 'Line-item estimates. No surprise change orders unless scope actually changes.' },
  { t: 'On Schedule', d: 'We hit the dates we set, or we tell you well in advance — never the day-of.' },
  { t: 'Clean Sites', d: 'Daily cleanup. Respect your home, your business, and your neighbors.' },
]

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden noise border-b border-amber/20">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
            / About Us
          </div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight slide-up">
            Building <span className="text-amber">your dreams</span>,<br />
            one project at a time.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-concrete leading-relaxed slide-up" style={{ animationDelay: '0.1s' }}>
            At Dorsett Does It, every project is unique and deserves a personalized
            approach. Our team works closely with you from initial consultation to
            final walkthrough, ensuring your vision is brought to life with
            craftsmanship you can stand on.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
              / Our Story
            </div>
            <h2 className="mt-4 font-display text-4xl uppercase leading-tight">
              Years of experience. <br />
              <span className="text-amber">Built into every cut.</span>
            </h2>
            <div className="mt-8 space-y-5 text-concrete leading-relaxed">
              <p>
                Dorsett Does It was founded on a simple idea: a contractor should
                show up when they say, do the work they promised, and charge what
                they quoted. Sounds basic — but the industry has made that rare.
              </p>
              <p>
                We've completed a wide variety of projects, including custom homes,
                full-gut remodels, additions, and tenant buildouts. Every job — no
                matter the size — gets the same attention to detail and commitment
                to quality.
              </p>
              <p>
                From the first phone call to the final walk-through, you'll work with
                people who actually swing the hammer. No subcontracted-out
                middlemen, no vanishing project managers.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="caution-stripes h-3 w-full" />
            <div className="relative aspect-square bg-coal border border-amber/20 overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="text-center">
                  <div className="font-display text-9xl text-amber leading-none">15+</div>
                  <div className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-bone">
                    Years on the tools
                  </div>
                  <div className="mt-10 grid grid-cols-2 gap-6 border-t border-amber/30 pt-8">
                    <div>
                      <div className="font-display text-3xl text-bone">500+</div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-concrete mt-1">Projects</div>
                    </div>
                    <div>
                      <div className="font-display text-3xl text-bone">A+</div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-concrete mt-1">Rated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="caution-stripes h-3 w-full" />
          </div>
        </div>
      </section>

      <section className="bg-coal py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
            / What We Stand For
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl uppercase leading-tight max-w-3xl">
            Four values. <span className="text-amber">Every project.</span>
          </h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <div key={v.t} className="group border border-amber/20 bg-ink p-8 hover:border-amber transition-colors">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-amber text-sm">0{i + 1}</span>
                  <h3 className="font-display text-2xl uppercase">{v.t}</h3>
                </div>
                <p className="mt-4 text-concrete leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl uppercase leading-tight">
            Let's talk <span className="text-amber">about your project.</span>
          </h2>
          <p className="mt-6 text-concrete leading-relaxed">
            Estimates are always free. We'll listen first, scope honestly, and tell
            you straight up whether we're the right fit.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
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
      </section>
    </>
  )
}

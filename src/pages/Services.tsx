import { Link } from 'react-router-dom'

const SERVICES = [
  {
    n: '01',
    title: 'General Contracting',
    description:
      'End-to-end project management — permits, scheduling, trades coordination, inspections. One contract, one point of contact, one delivery date.',
    items: ['Permit pulling', 'Trade subcontracting', 'Daily site supervision', 'Final inspection coordination'],
  },
  {
    n: '02',
    title: 'Home Remodeling',
    description:
      'Kitchens, bathrooms, basements, whole-home gut-renos. We take dated and tired and turn it into bright, functional, built-to-last.',
    items: ['Kitchen remodels', 'Bathroom renovations', 'Basement finishing', 'Whole-home renovations'],
  },
  {
    n: '03',
    title: 'Additions & New Builds',
    description:
      'Need more space? Bump-outs, second stories, garages, accessory dwelling units. We build new construction on solid footings.',
    items: ['Room additions', 'Second-story additions', 'Detached garages', 'ADUs / in-law suites'],
  },
  {
    n: '04',
    title: 'Handyman & Repairs',
    description:
      'The honey-do list, knocked out by professionals. Drywall patches, doors that stick, leaky faucets, busted tile. We fix what other crews skip.',
    items: ['Drywall repair', 'Doors & trim', 'Tile & flooring repair', 'Fixture installation'],
  },
  {
    n: '05',
    title: 'Decks & Outdoor',
    description:
      'Composite and wood decks, pergolas, patios, fences. Outdoor living that holds up to weather and use.',
    items: ['Deck construction', 'Pergolas & covers', 'Fencing', 'Patio & hardscape'],
  },
  {
    n: '06',
    title: 'Commercial & Industrial',
    description:
      'Tenant improvements, office buildouts, retail fit-outs, light industrial. Minimize downtime, hit your opening date.',
    items: ['Office buildouts', 'Retail fit-outs', 'Tenant improvements', 'Industrial repairs'],
  },
]

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden noise border-b border-amber/20">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
            / Services
          </div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight slide-up">
            One crew. <span className="text-amber">Every trade.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-concrete leading-relaxed slide-up" style={{ animationDelay: '0.1s' }}>
            From a sticky door to a full-gut renovation, Dorsett Does It covers the
            scope. Residential. Commercial. Industrial. If it gets built, we build it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-px bg-amber/20 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.n} className="group bg-ink p-8 lg:p-10 hover:bg-coal transition-colors">
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-amber">{s.n}</span>
                <div className="caution-stripes-thin h-2 w-12 opacity-40" />
              </div>
              <h3 className="mt-6 font-display text-3xl uppercase leading-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-concrete leading-relaxed">
                {s.description}
              </p>
              <ul className="mt-6 space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="text-amber">▸</span>
                    <span className="text-bone">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-coal py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
            / Don't See It Listed?
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl uppercase leading-tight">
            If you can describe it, <br />
            <span className="text-amber">we can probably build it.</span>
          </h2>
          <p className="mt-6 text-concrete leading-relaxed">
            Reach out with your project. If it's outside our wheelhouse, we'll point
            you to someone we'd trust with our own house.
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

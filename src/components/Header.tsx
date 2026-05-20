import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from './Logo'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/get-a-estimate', label: 'Get An Estimate' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b-2 border-amber/30 bg-ink/95 backdrop-blur">
      <div className="caution-stripes-thin h-1 w-full" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `link-hover font-display uppercase tracking-wider text-sm ${
                  isActive ? 'text-amber' : 'text-bone hover:text-amber'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+12602585303"
            className="font-mono text-sm text-concrete hover:text-amber"
          >
            (260) 258-5303
          </a>
          <Link
            to="/get-a-estimate"
            className="bg-amber px-5 py-2.5 font-display uppercase tracking-wider text-sm text-ink hover:bg-amber-dark transition-colors"
          >
            Free Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-bone"
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-steel bg-coal">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 font-display uppercase tracking-wider ${
                    isActive ? 'text-amber' : 'text-bone'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a href="tel:+12602585303" className="py-3 font-mono text-sm text-concrete">
              (260) 258-5303
            </a>
            <Link
              to="/get-a-estimate"
              onClick={() => setOpen(false)}
              className="mt-2 bg-amber px-5 py-3 font-display uppercase tracking-wider text-sm text-ink text-center"
            >
              Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

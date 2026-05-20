import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t-2 border-amber/30 bg-coal mt-32">
      <div className="caution-stripes-thin h-1 w-full" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo size="lg" />
            <p className="mt-6 max-w-md text-concrete leading-relaxed">
              Reliable general contracting, remodeling, and handyman services. Built on
              craftsmanship, finished on time, priced honestly.
            </p>
            <div className="mt-6 space-y-2 font-mono text-sm">
              <div className="flex items-center gap-3">
                <span className="text-amber">TEL</span>
                <a href="tel:+12602585303" className="text-bone hover:text-amber">
                  (260) 258-5303
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber">WEB</span>
                <span className="text-bone">dorsettdoesit.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest text-amber text-sm">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3 text-bone">
              <li><Link to="/" className="link-hover">Home</Link></li>
              <li><Link to="/about-us" className="link-hover">About Us</Link></li>
              <li><Link to="/services" className="link-hover">Services</Link></li>
              <li><Link to="/get-a-estimate" className="link-hover">Get An Estimate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest text-amber text-sm">
              Legal
            </h4>
            <ul className="mt-4 space-y-3 text-bone">
              <li><Link to="/privacy-policy" className="link-hover">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="link-hover">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-steel pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-concrete">
            © {new Date().getFullYear()} <span className="text-bone font-semibold">Dorsett Does It LLC</span>. All rights reserved.
          </div>
          <div className="text-xs text-concrete font-mono uppercase tracking-wider">
            Licensed · Insured · Local
          </div>
        </div>
      </div>
    </footer>
  )
}

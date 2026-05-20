import { Link } from 'react-router-dom'

export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { box: 'h-9 w-9 text-xl', text: 'text-base' },
    md: { box: 'h-11 w-11 text-2xl', text: 'text-lg' },
    lg: { box: 'h-14 w-14 text-3xl', text: 'text-2xl' },
  }[size]

  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className={`${sizes.box} relative flex items-center justify-center bg-amber text-ink font-display font-bold tracking-tight transition-transform group-hover:rotate-3`}>
        <span className="relative z-10">DD</span>
        <span className="absolute -bottom-1 -right-1 h-full w-full bg-ink -z-0" />
      </div>
      <div className="leading-tight">
        <div className={`font-display ${sizes.text} text-bone tracking-wide uppercase`}>
          Dorsett <span className="text-amber">Does It</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-concrete font-mono">
          Construction · Handyman
        </div>
      </div>
    </Link>
  )
}

import { Link } from './ui'
import { BRAND, FOOTER_LINKS } from '../constants'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-white/6 bg-gradient-to-b from-transparent to-black/20 pt-8 pb-6" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-white">{BRAND.name}</p>
            <p className="mt-1 text-xs text-slate-400">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex gap-4 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

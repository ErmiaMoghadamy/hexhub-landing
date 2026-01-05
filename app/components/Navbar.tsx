import { useState } from 'react'
import { Link } from './ui'
import { NAV_LINKS, BRAND } from '../constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5 px-6 lg:px-8 py-4" aria-label="Main navigation">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg"
          aria-label="Home"
        >
          <div
            className="h-9 w-9 rounded-lg flex items-center justify-center text-white font-bold"
            style={{
              background: 'linear-gradient(135deg, rgb(99 102 241), rgb(56 189 248))',
            }}
          >
            {BRAND.initials}
          </div>
          <span className="text-sm font-semibold text-white">{BRAND.name}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="#" variant="button" className="ml-4">
            Donate
          </Link>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 px-2" role="menu">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-slate-800"
              onClick={closeMenu}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            variant="button"
            className="mt-2 block text-center"
            onClick={closeMenu}
            role="menuitem"
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  )
}

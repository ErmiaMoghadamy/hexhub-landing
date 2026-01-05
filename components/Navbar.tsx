"use client";

import { useState, useEffect, useRef } from 'react'
import { Link } from './ui'
import { NAV_LINKS, BRAND, NAVBAR } from '../constants'
import { LoginModal } from './LoginModal'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeDropdown])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5 px-6 lg:px-8 py-4" aria-label="Main navigation">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <Link
          href="/"
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
        </Link>

        <div className="hidden md:flex items-center gap-6" ref={dropdownRef}>
          {/* About Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('about')}
              className="flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors"
            >
              About
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl ring-1 ring-white/5 overflow-hidden z-50">
                <Link href="/about" onClick={() => setActiveDropdown(null)} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/contributors" onClick={() => setActiveDropdown(null)} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                  Contributors
                </Link>
              </div>
            )}
          </div>

          {/* Content Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('content')}
              className="flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors"
            >
              Community
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'content' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl ring-1 ring-white/5 overflow-hidden z-50">
                <Link href="/blog" onClick={() => setActiveDropdown(null)} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="/community" onClick={() => setActiveDropdown(null)} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                  Feed
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-sm text-slate-300 hover:text-white transition-colors">
            Contact
          </Link>

          <button
            onClick={() => setIsLoginOpen(true)}
            className="ml-4 px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
          >
            {NAVBAR.login}
          </button>
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
          <button
            onClick={() => {
              setIsLoginOpen(true)
              closeMenu()
            }}
            className="mt-2 w-full px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200"
            role="menuitem"
          >
            {NAVBAR.login}
          </button>
        </div>
      )}

        <button
          onClick={() => setIsLoginOpen(true)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-200 z-10"
          aria-label="Close modal"
        >
          
        </button>

    </nav>

    <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

    </>
  )
}

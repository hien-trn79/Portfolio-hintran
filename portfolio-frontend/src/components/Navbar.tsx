import { useState } from 'react'
import { SunIcon, MoonIcon } from './icons'
import type { Lang } from '../types'
import wordmarkLight from '../imports/Logo/wordmark-light.svg'
import wordmarkDark from '../imports/Logo/wordmark-dark.svg'

interface NavbarProps {
  dark: boolean
  lang: Lang
  onToggleDark: () => void
  onToggleLang: () => void
  activeSection: string
  scrolled: boolean
  t: any
}

export function Navbar({
  dark,
  lang,
  onToggleDark,
  onToggleLang,
  activeSection,
  scrolled,
  t,
}: NavbarProps) {
  const tr = t[lang].nav
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const navLinks = [
    { id: 'info', label: tr.info },
    { id: 'education', label: tr.education },
    { id: 'skills', label: tr.skills },
    { id: 'projects', label: tr.projects },
    { id: 'contact', label: tr.contact },
  ]

  const navBase = dark
    ? `bg-[#071a2b] border-b border-[#1a3a5c] ${scrolled ? 'shadow-lg shadow-black/20' : ''}`
    : `bg-white border-b border-[#e2e8f0] ${scrolled ? 'shadow-md' : ''}`

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${navBase}`}>
      <div className="flex h-[64px] items-center justify-between px-6 lg:px-[120px]">
        <div className="logo">
          <img src={dark ? wordmarkDark : wordmarkLight} alt="HinTran" className="h-18 w-auto" />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`py-2 font-medium text-[15px] font-['Inter',sans-serif] transition-colors hover:text-[#2196f3] ${
                activeSection === id ? 'text-[#2196f3]' : dark ? 'text-white' : 'text-[#0d1b2a]'
              }`}
            >
              {label}
            </button>
          ))}
          {/* Lang switcher */}
          <button
            onClick={onToggleLang}
            className={`flex h-[32px] items-center p-[2px] rounded-[16px] ${dark ? 'bg-[#0d263d]' : 'bg-[#f1f5f9]'}`}
            aria-label="Switch language"
          >
            {(['en', 'vi'] as Lang[]).map((l) => (
              <span
                key={l}
                className={`px-[10px] py-[4px] rounded-[12px] text-[12px] font-['Inter',sans-serif] transition-all ${
                  lang === l
                    ? dark
                      ? 'bg-[#163854] text-white font-bold'
                      : 'bg-white text-[#0d1b2a] font-bold shadow-sm'
                    : dark
                      ? 'text-[#b8c7d9] font-medium'
                      : 'text-[#4b5563] font-medium'
                }`}
              >
                {l.toUpperCase()}
              </span>
            ))}
          </button>
          {/* Theme toggle */}
          <button
            onClick={onToggleDark}
            className={`flex flex-col items-center justify-center rounded-[16px] size-[32px] transition-colors ${
              dark ? 'bg-[#0d263d] text-[#90caf9]' : 'bg-[#f1f5f9] text-[#0d1b2a]'
            }`}
            aria-label="Toggle dark mode"
          >
            {dark ? <MoonIcon color="#90CAF9" /> : <SunIcon />}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg ${dark ? 'text-white' : 'text-[#0d1b2a]'}`}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`md:hidden px-6 pb-4 ${dark ? 'bg-[#071a2b] border-b border-[#1a3a5c]' : 'bg-white border-b border-[#e2e8f0]'}`}
        >
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`block w-full text-left py-3 font-medium text-[15px] font-['Inter',sans-serif] transition-colors hover:text-[#2196f3] ${
                activeSection === id ? 'text-[#2196f3]' : dark ? 'text-white' : 'text-[#0d1b2a]'
              }`}
            >
              {label}
            </button>
          ))}
          <div className="flex items-center gap-4 pt-3">
            <button
              onClick={onToggleLang}
              className={`flex h-[32px] items-center p-[2px] rounded-[16px] ${dark ? 'bg-[#0d263d]' : 'bg-[#f1f5f9]'}`}
            >
              {(['en', 'vi'] as Lang[]).map((l) => (
                <span
                  key={l}
                  className={`px-[10px] py-[4px] rounded-[12px] text-[12px] font-['Inter',sans-serif] ${
                    lang === l
                      ? dark
                        ? 'bg-[#163854] text-white font-bold'
                        : 'bg-white text-[#0d1b2a] font-bold shadow-sm'
                      : dark
                        ? 'text-[#b8c7d9] font-medium'
                        : 'text-[#4b5563] font-medium'
                  }`}
                >
                  {l.toUpperCase()}
                </span>
              ))}
            </button>
            <button
              onClick={onToggleDark}
              className={`flex items-center justify-center rounded-[16px] size-[32px] ${dark ? 'bg-[#0d263d] text-[#90caf9]' : 'bg-[#f1f5f9] text-[#0d1b2a]'}`}
              aria-label="Toggle dark mode"
            >
              {dark ? <MoonIcon color="#90CAF9" /> : <SunIcon />}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}


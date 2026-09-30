import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { SunIcon, MoonIcon } from './icons'
import type { Lang } from '../types'
import wordmarkLight from '../imports/Logo/wordmark-light.svg'
import wordmarkDark from '../imports/Logo/wordmark-dark.svg'

/* ------------------------------------------------------------------ */
/* Styles + animation (tự chứa, không cần cấu hình thêm)               */
/* Chỉ animate transform / opacity để mượt trên cả máy yếu và mobile.  */
/* ------------------------------------------------------------------ */

const css = `
.nv {
  position: fixed; top: 0; left: 0; right: 0; z-index: 50;
  background: var(--nv-bg); border-bottom: 1px solid var(--nv-border);
  -webkit-backdrop-filter: saturate(1.4) blur(14px); backdrop-filter: saturate(1.4) blur(14px);
  transition: background .35s ease, box-shadow .35s ease;
  animation: nv-drop .8s cubic-bezier(.2, .8, .2, 1) backwards;
  -webkit-tap-highlight-color: transparent;
}
.nv button { touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
.nv.is-scrolled { background: var(--nv-bg-s); box-shadow: var(--nv-shadow); }
.nv button:focus-visible, .nv a:focus-visible { outline: 2px solid #2196f3; outline-offset: 2px; }

.nv-inner {
  display: flex; align-items: center; justify-content: space-between; gap: 16px; max-width: 1440px; margin: 0 auto; height: 64px;
  padding: 0 max(24px, env(safe-area-inset-right)) 0 max(24px, env(safe-area-inset-left));
  transition: height .35s cubic-bezier(.2, .8, .2, 1);
}
.nv.is-scrolled .nv-inner { height: 60px; }
@media (min-width: 1024px) { .nv-inner { padding: 0 120px; } }

/* Thanh tiến độ cuộn */
.nv-progress {
  position: absolute; left: 0; right: 0; bottom: -1px; height: 2px; transform-origin: left; pointer-events: none;
  transform: scaleX(var(--nv-p, 0)); opacity: 0; background: linear-gradient(90deg, #2196f3, #90caf9);
  transition: opacity .3s ease;
}
.nv.is-scrolled .nv-progress { opacity: 1; }

/* Logo */
.nv-logo { display: flex; align-items: center; flex-shrink: 0; min-width: 0; padding: 0; border: 0; background: none; cursor: pointer; }
.nv-logo img { height: 72px; width: auto; max-width: 55vw; object-fit: contain; transition: transform .4s cubic-bezier(.2, .8, .2, 1); }
@media (hover: hover) { .nv-logo:hover img { transform: scale(1.04); } }

/* Desktop */
.nv-desktop { display: none; align-items: center; gap: 20px; }
@media (min-width: 1024px) { .nv-desktop { display: flex; } }
.nv-list { position: relative; display: flex; align-items: center; gap: 2px; }
.nv-ind {
  position: absolute; left: 0; top: 50%; height: 100%; width: var(--ind-w, 0px); border-radius: 999px; pointer-events: none;
  background: var(--nv-ind); opacity: var(--ind-o, 0); transform: translate3d(var(--ind-x, 0px), -50%, 0);
}
.nv-list[data-ready] .nv-ind {
  transition: transform .5s cubic-bezier(.2, .8, .2, 1), width .5s cubic-bezier(.2, .8, .2, 1), opacity .3s ease;
}
.nv-link {
  position: relative; z-index: 1; padding: 10px 15px; border: 0; border-radius: 999px; background: none; cursor: pointer;
  font: 500 15px/1 'Inter', sans-serif; color: var(--nv-text); transition: color .25s ease;
  opacity: 0; animation: nv-fade .6s calc(var(--k) * 60ms + .3s) ease forwards;
}
.nv-link.is-active { color: #2196f3; }
@media (hover: hover) { .nv-link:hover { color: #2196f3; } }

/* Chuyển ngôn ngữ: thumb trượt */
.nv-lang {
  position: relative; display: grid; grid-template-columns: 1fr 1fr; height: 32px; padding: 2px; border: 0; border-radius: 999px;
  background: var(--nv-chip); cursor: pointer; font: 600 12px/1 'Inter', sans-serif;
}
.nv-lang.is-lg { height: 40px; min-width: 96px; font-size: 13px; }
.nv-lang-thumb {
  position: absolute; top: 2px; bottom: 2px; left: 2px; width: calc((100% - 4px) / 2); border-radius: 999px;
  background: var(--nv-thumb); box-shadow: 0 2px 8px -2px rgba(3, 15, 29, .35); transition: transform .45s cubic-bezier(.2, 1.1, .4, 1);
}
.nv-lang[data-lang='vi'] .nv-lang-thumb { transform: translateX(100%); }
.nv-lang-opt { position: relative; z-index: 1; display: grid; place-items: center; padding: 0 12px; color: var(--nv-sub); transition: color .3s ease; }
.nv-lang-opt.is-on { color: var(--nv-thumb-fg); }

/* Chuyển sáng / tối: icon xoay đổi chỗ */
.nv-theme {
  position: relative; display: grid; place-items: center; width: 32px; height: 32px; padding: 0; border: 0; border-radius: 50%;
  background: var(--nv-chip); color: var(--nv-text); cursor: pointer; transition: transform .35s cubic-bezier(.2, 1.2, .4, 1);
}
.nv-theme.is-lg { width: 40px; height: 40px; }
@media (hover: hover) { .nv-theme:hover { transform: rotate(18deg); } }
.nv-theme:active { transform: scale(.92); }
.nv-ico { position: absolute; display: grid; place-items: center; transition: transform .6s cubic-bezier(.2, 1.2, .4, 1), opacity .35s ease; }
.nv-ico-sun { opacity: 1; transform: rotate(0) scale(1); }
.nv-ico-moon { opacity: 0; transform: rotate(-90deg) scale(.4); }
.nv-theme[data-dark='true'] .nv-ico-sun { opacity: 0; transform: rotate(90deg) scale(.4); }
.nv-theme[data-dark='true'] .nv-ico-moon { opacity: 1; transform: rotate(0) scale(1); }

/* Hamburger -> X */
.nv-burger {
  position: relative; display: grid; place-items: center; flex-shrink: 0; width: 44px; height: 44px; margin-right: -10px; padding: 0;
  border: 0; border-radius: 12px; background: none; color: var(--nv-text); cursor: pointer;
}
@media (min-width: 1024px) { .nv-burger { display: none; } }
.nv-lines { position: relative; width: 22px; height: 16px; }
.nv-line {
  position: absolute; left: 0; width: 22px; height: 2px; border-radius: 2px; background: currentColor;
  transition: transform .45s cubic-bezier(.2, .8, .2, 1), opacity .25s ease;
}
.nv-line:nth-child(1) { top: 0; }
.nv-line:nth-child(2) { top: 7px; }
.nv-line:nth-child(3) { top: 14px; }
.nv-burger[aria-expanded='true'] .nv-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nv-burger[aria-expanded='true'] .nv-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
.nv-burger[aria-expanded='true'] .nv-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Menu mobile: mở bằng grid-rows để mượt, không cần biết chiều cao */
.nv-panel {
  display: grid; grid-template-rows: 0fr; visibility: hidden;
  transition: grid-template-rows .45s cubic-bezier(.2, .8, .2, 1), visibility 0s linear .45s;
}
.nv-panel.is-open { grid-template-rows: 1fr; visibility: visible; transition-delay: 0s; }
@media (min-width: 1024px) { .nv-panel { display: none; } }
.nv-panel-clip { min-height: 0; overflow: hidden; }
.nv-panel-inner {
  max-height: calc(100vh - 64px); max-height: calc(100dvh - 64px); overflow-y: auto; overscroll-behavior: contain;
  padding: 4px max(24px, env(safe-area-inset-right)) max(20px, env(safe-area-inset-bottom)) max(24px, env(safe-area-inset-left));
}
.nv-m-item { opacity: 0; transform: translateY(-8px); transition: opacity .3s ease, transform .4s cubic-bezier(.2, .8, .2, 1); }
.nv-panel.is-open .nv-m-item { opacity: 1; transform: none; transition-delay: calc(var(--k) * 45ms + 100ms); }
.nv-m-link {
  display: flex; align-items: center; justify-content: space-between; width: 100%; min-height: 52px; padding: 0 4px;
  border: 0; border-bottom: 1px solid var(--nv-border); background: none; text-align: left; cursor: pointer;
  font: 600 16px/1 'Inter', sans-serif; color: var(--nv-text); transition: color .25s ease, padding-left .3s cubic-bezier(.2, .8, .2, 1);
}
.nv-m-link.is-active { color: #2196f3; padding-left: 10px; }
.nv-m-dot { width: 8px; height: 8px; border-radius: 50%; background: #2196f3; transform: scale(0); transition: transform .4s cubic-bezier(.2, 1.4, .4, 1); }
.nv-m-link.is-active .nv-m-dot { transform: scale(1); }
.nv-m-tools { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding-top: 18px; }

/* Nền mờ phía sau menu mobile */
.nv-backdrop {
  position: fixed; inset: 0; z-index: 40; background: rgba(3, 15, 29, .5); opacity: 0; visibility: hidden;
  transition: opacity .35s ease, visibility 0s linear .35s;
}
.nv-backdrop.is-open { opacity: 1; visibility: visible; transition-delay: 0s; }
@media (min-width: 1024px) { .nv-backdrop { display: none; } }

@keyframes nv-drop { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes nv-fade { to { opacity: 1; } }

@media (prefers-reduced-motion: reduce) {
  .nv, .nv * { animation: none !important; transition-duration: 0s !important; transition-delay: 0s !important; }
  .nv-link, .nv-m-item { opacity: 1; transform: none; }
}
`

/* ------------------------------------------------------------------ */
/* Sub-components                                                       */
/* ------------------------------------------------------------------ */

function LangSwitch({
  lang,
  onToggle,
  large,
}: {
  lang: Lang
  onToggle: () => void
  large?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      data-lang={lang}
      className={`nv-lang ${large ? 'is-lg' : ''}`}
      aria-label={lang === 'en' ? 'Switch language to Vietnamese' : 'Chuyển sang tiếng Anh'}
    >
      <span className="nv-lang-thumb" />
      {(['en', 'vi'] as Lang[]).map((l) => (
        <span key={l} className={`nv-lang-opt ${lang === l ? 'is-on' : ''}`}>
          {l.toUpperCase()}
        </span>
      ))}
    </button>
  )
}

function ThemeToggle({
  dark,
  onToggle,
  large,
}: {
  dark: boolean
  onToggle: () => void
  large?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      data-dark={dark}
      className={`nv-theme ${large ? 'is-lg' : ''}`}
      aria-label="Toggle dark mode"
      aria-pressed={dark}
    >
      <span className="nv-ico nv-ico-sun">
        <SunIcon />
      </span>
      <span className="nv-ico nv-ico-moon">
        <MoonIcon color="#90CAF9" />
      </span>
    </button>
  )
}

/* ------------------------------------------------------------------ */
/* Navbar                                                               */
/* ------------------------------------------------------------------ */

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

  const navRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const burgerRef = useRef<HTMLButtonElement>(null)

  const navLinks = [
    { id: 'info', label: tr.info },
    { id: 'education', label: tr.education },
    { id: 'skills', label: tr.skills },
    { id: 'projects', label: tr.projects },
    { id: 'contact', label: tr.contact },
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const vars = {
    '--nv-bg': dark ? 'rgba(7,26,43,0.82)' : 'rgba(255,255,255,0.82)',
    '--nv-bg-s': dark ? 'rgba(7,26,43,0.94)' : 'rgba(255,255,255,0.95)',
    '--nv-border': dark ? '#1a3a5c' : '#e2e8f0',
    '--nv-shadow': dark
      ? '0 10px 30px -12px rgba(0,0,0,.5)'
      : '0 10px 30px -14px rgba(13,27,42,.25)',
    '--nv-text': dark ? '#ffffff' : '#0d1b2a',
    '--nv-sub': dark ? '#b8c7d9' : '#4b5563',
    '--nv-chip': dark ? '#0d263d' : '#f1f5f9',
    '--nv-thumb': dark ? '#163854' : '#ffffff',
    '--nv-thumb-fg': dark ? '#ffffff' : '#0d1b2a',
    '--nv-ind': dark ? 'rgba(33,150,243,0.16)' : 'rgba(33,150,243,0.1)',
  } as CSSProperties

  /* Thanh trượt dưới link đang active */
  const updateIndicator = useCallback(() => {
    const list = listRef.current
    if (!list) return
    const el = linkRefs.current[activeSection]
    if (!el) {
      list.style.setProperty('--ind-o', '0')
      return
    }
    list.style.setProperty('--ind-x', `${el.offsetLeft}px`)
    list.style.setProperty('--ind-w', `${el.offsetWidth}px`)
    list.style.setProperty('--ind-o', '1')
    if (!list.dataset.ready) requestAnimationFrame(() => (list.dataset.ready = '1'))
  }, [activeSection])

  useLayoutEffect(() => {
    updateIndicator()
  }, [updateIndicator, lang, dark])

  useEffect(() => {
    const list = listRef.current
    const onResize = () => updateIndicator()
    window.addEventListener('resize', onResize)
    let ro: ResizeObserver | undefined
    if (list && 'ResizeObserver' in window) {
      ro = new ResizeObserver(onResize)
      ro.observe(list)
    }
    // Font tải xong có thể làm đổi độ rộng chữ
    ;(document as any).fonts?.ready?.then(onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      ro?.disconnect()
    }
  }, [updateIndicator])

  /* Tiến độ cuộn: ghi thẳng vào CSS variable, không gây re-render */
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      navRef.current?.style.setProperty('--nv-p', String(p))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  /* Đóng menu: phím Esc, hoặc khi màn hình rộng ra desktop */
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        burgerRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e: MediaQueryListEvent) => e.matches && setMobileOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <>
      <nav ref={navRef} className={`nv ${scrolled ? 'is-scrolled' : ''}`} style={vars}>
        <style>{css}</style>

        <div className="nv-inner">
          <button
            type="button"
            className="nv-logo"
            onClick={() => scrollTo('info')}
            aria-label="HinTran"
          >
            <img src={dark ? wordmarkDark : wordmarkLight} alt="HinTran" />
          </button>

          {/* Desktop */}
          <div className="nv-desktop">
            <div ref={listRef} className="nv-list">
              <span className="nv-ind" aria-hidden="true" />
              {navLinks.map(({ id, label }, k) => (
                <button
                  key={id}
                  type="button"
                  ref={(el) => {
                    linkRefs.current[id] = el
                  }}
                  onClick={() => scrollTo(id)}
                  className={`nv-link ${activeSection === id ? 'is-active' : ''}`}
                  style={{ '--k': k } as CSSProperties}
                  aria-current={activeSection === id ? 'true' : undefined}
                >
                  {label}
                </button>
              ))}
            </div>
            <LangSwitch lang={lang} onToggle={onToggleLang} />
            <ThemeToggle dark={dark} onToggle={onToggleDark} />
          </div>

          {/* Hamburger */}
          <button
            ref={burgerRef}
            type="button"
            className="nv-burger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="nv-panel"
          >
            <span className="nv-lines" aria-hidden="true">
              <span className="nv-line" />
              <span className="nv-line" />
              <span className="nv-line" />
            </span>
          </button>
        </div>

        {/* Mobile / tablet menu */}
        <div
          id="nv-panel"
          className={`nv-panel ${mobileOpen ? 'is-open' : ''}`}
          aria-hidden={!mobileOpen}
        >
          <div className="nv-panel-clip">
            <div className="nv-panel-inner">
              {navLinks.map(({ id, label }, k) => (
                <div key={id} className="nv-m-item" style={{ '--k': k } as CSSProperties}>
                  <button
                    type="button"
                    onClick={() => scrollTo(id)}
                    className={`nv-m-link ${activeSection === id ? 'is-active' : ''}`}
                    tabIndex={mobileOpen ? 0 : -1}
                    aria-current={activeSection === id ? 'true' : undefined}
                  >
                    <span>{label}</span>
                    <span className="nv-m-dot" aria-hidden="true" />
                  </button>
                </div>
              ))}
              <div className="nv-m-item" style={{ '--k': navLinks.length } as CSSProperties}>
                <div className="nv-m-tools">
                  <LangSwitch lang={lang} onToggle={onToggleLang} large />
                  <ThemeToggle dark={dark} onToggle={onToggleDark} large />
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="nv-progress" aria-hidden="true" />
      </nav>

      <div
        className={`nv-backdrop ${mobileOpen ? 'is-open' : ''}`}
        style={vars}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
    </>
  )
}

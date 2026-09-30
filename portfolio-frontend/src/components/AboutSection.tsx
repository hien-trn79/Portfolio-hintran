import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent } from 'react'
import type { Lang } from '../types'
import { LayoutIcon, ServerIcon24, DatabaseIcon24 } from './icons'
import { SectionTitle } from '../shared/SectionTitle'

/* ------------------------------------------------------------------ */
/* Styles + animation (tự chứa, không cần cấu hình thêm)               */
/* ------------------------------------------------------------------ */

const css = `
.ab-intro { opacity: 0; transform: translateY(20px); max-width: 720px; text-align: center; font: 400 16px/1.75 'Inter', sans-serif; color: var(--ab-sub); }
.ab-grid.is-in .ab-intro { animation: ab-in .8s .1s cubic-bezier(.2, .8, .2, 1) forwards; }

.ab-item { opacity: 0; transform: translateY(28px); }
.ab-grid.is-in .ab-item { animation: ab-in .8s calc(var(--i) * 120ms + 200ms) cubic-bezier(.2, .8, .2, 1) forwards; }

.ab-card {
  position: relative; overflow: hidden; display: flex; flex-direction: column; gap: 22px; height: 100%; padding: 32px;
  border-radius: 22px; background: var(--ab-card); border: 1px solid var(--ab-border);
  transition: transform .45s cubic-bezier(.2, .8, .2, 1), border-color .3s ease, box-shadow .4s ease;
}
.ab-card:hover { transform: translateY(-6px); border-color: rgba(33, 150, 243, .5); box-shadow: var(--ab-shadow); }

.ab-spot {
  position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity .35s ease;
  background: radial-gradient(340px circle at var(--mx, 50%) var(--my, 0%), rgba(33, 150, 243, .13), transparent 62%);
}
.ab-card:hover .ab-spot { opacity: 1; }

/* Vạch nhấn phía dưới */
.ab-bar {
  position: absolute; left: 0; right: 0; bottom: 0; height: 3px; transform: scaleX(0); transform-origin: left;
  background: linear-gradient(90deg, #2196f3, #90caf9); transition: transform .6s cubic-bezier(.2, .8, .2, 1);
}
.ab-card:hover .ab-bar { transform: scaleX(1); }

/* Vòng sáng phía sau icon */
.ab-icon-wrap { position: relative; width: 56px; height: 56px; }
.ab-icon {
  position: relative; z-index: 1; display: grid; place-items: center; width: 100%; height: 100%; border-radius: 16px;
  background: var(--ab-icon-bg); border: 1px solid rgba(33, 150, 243, .22);
  transition: transform .5s cubic-bezier(.2, 1.2, .4, 1), background .3s ease;
}
.ab-halo {
  position: absolute; inset: 0; border-radius: 16px; background: #2196f3; opacity: 0; filter: blur(16px);
  transition: opacity .5s ease;
}
.ab-card:hover .ab-icon { transform: scale(1.08) rotate(-6deg); background: rgba(33, 150, 243, .2); }
.ab-card:hover .ab-halo { opacity: .35; }

.ab-title { position: relative; font: 700 20px/1.3 'Inter', sans-serif; color: var(--ab-text); transition: color .25s ease; }
.ab-card:hover .ab-title { color: #2196f3; }
.ab-desc { position: relative; font: 400 14.5px/1.7 'Inter', sans-serif; color: var(--ab-sub); }

@keyframes ab-in { to { opacity: 1; transform: translateY(0); } }

@media (prefers-reduced-motion: reduce) {
  .ab-intro, .ab-item { opacity: 1; transform: none; }
  .ab-grid.is-in .ab-intro, .ab-grid.is-in .ab-item { animation: none; }
  .ab-card, .ab-icon, .ab-halo, .ab-bar { transition: none; }
  .ab-card:hover { transform: none; }
}
`

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

interface AboutSectionProps {
  dark: boolean
  lang: Lang
  t: any
}

function useInView<T extends Element>() {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, seen] as const
}

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export function AboutSection({ dark, lang, t }: AboutSectionProps) {
  const tr = t[lang].about
  const bg = dark ? 'bg-[#071a2b]' : 'bg-white'

  const vars = {
    '--ab-card': dark ? '#0d263d' : '#ffffff',
    '--ab-border': dark ? '#1a3a5c' : '#e2e8f0',
    '--ab-text': dark ? '#ffffff' : '#0d1b2a',
    '--ab-sub': dark ? '#b8c7d9' : '#4b5563',
    '--ab-icon-bg': dark ? 'rgba(33,150,243,0.15)' : 'rgba(33,150,243,0.1)',
    '--ab-shadow': dark
      ? '0 26px 50px -22px rgba(0,0,0,.65)'
      : '0 26px 50px -24px rgba(33,150,243,.4)',
  } as CSSProperties

  const [gridRef, inView] = useInView<HTMLDivElement>()

  const cards = [
    { icon: <LayoutIcon color="#2196F3" />, title: tr.frontend, desc: tr.frontendDesc },
    { icon: <ServerIcon24 color="#2196F3" />, title: tr.backend, desc: tr.backendDesc },
    { icon: <DatabaseIcon24 color="#2196F3" />, title: tr.database, desc: tr.databaseDesc },
  ]

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section className={`${bg} py-24`} style={vars}>
      <style>{css}</style>
      <div
        ref={gridRef}
        className={`ab-grid px-6 lg:px-[120px] max-w-[1440px] mx-auto flex flex-col gap-12 items-center ${inView ? 'is-in' : ''}`}
      >
        <div className="flex flex-col gap-6 items-center">
          <SectionTitle title={tr.title} dark={dark} />
          <p className="ab-intro">{tr.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map(({ icon, title, desc }, i) => (
            <div key={title} className="ab-item" style={{ '--i': i } as CSSProperties}>
              <div className="ab-card" onPointerMove={onMove}>
                <span className="ab-spot" />
                <span className="ab-bar" />

                <div className="ab-icon-wrap">
                  <span className="ab-halo" />
                  <span className="ab-icon">{icon}</span>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="ab-title">{title}</h3>
                  <p className="ab-desc">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

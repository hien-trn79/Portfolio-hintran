import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent } from 'react'
import type { Lang } from '../types'
import { GradCapIcon } from './icons'
import { SectionTitle } from '../shared/SectionTitle'

/* ------------------------------------------------------------------ */
/* Styles + animation (tự chứa, không cần cấu hình thêm)               */
/* ------------------------------------------------------------------ */

const css = `
.ed-list { display: flex; flex-direction: column; gap: 32px; width: 100%; max-width: 820px; }
.ed-row { display: flex; gap: 24px; opacity: 0; transform: translateY(26px); }
.ed-list.is-in .ed-row { animation: ed-in .8s calc(var(--i) * 160ms) cubic-bezier(.2, .8, .2, 1) forwards; }

/* Timeline */
.ed-track { position: relative; display: flex; justify-content: center; flex-shrink: 0; width: 48px; }
.ed-node {
  position: relative; z-index: 2; display: grid; place-items: center; width: 46px; height: 46px; border-radius: 50%;
  background: linear-gradient(135deg, #42a5f5, #1976d2); box-shadow: 0 10px 24px -8px rgba(33, 150, 243, .75);
  transition: transform .5s cubic-bezier(.2, 1.2, .4, 1);
}
.ed-row:hover .ed-node { transform: scale(1.08) rotate(-6deg); }
.ed-pulse { position: absolute; inset: 0; border-radius: 50%; border: 2px solid #2196f3; animation: ed-ping 2.4s ease-out infinite; }
.ed-line {
  position: absolute; z-index: 1; left: 50%; top: 52px; bottom: -28px; width: 2px; margin-left: -1px; border-radius: 2px;
  background: linear-gradient(180deg, #2196f3, rgba(33, 150, 243, .25)); transform: scaleY(0); transform-origin: top;
}
.ed-list.is-in .ed-line { animation: ed-draw .9s calc(var(--i) * 160ms + 450ms) cubic-bezier(.2, .8, .2, 1) forwards; }

/* Card */
.ed-card {
  position: relative; overflow: hidden; flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 22px;
  padding: 28px 30px; border-radius: 20px; background: var(--ed-card); border: 1px solid var(--ed-border);
  transition: transform .45s cubic-bezier(.2, .8, .2, 1), border-color .3s ease, box-shadow .4s ease;
}
.ed-card:hover { transform: translateY(-4px); border-color: rgba(33, 150, 243, .5); box-shadow: var(--ed-shadow); }
.ed-spot {
  position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity .35s ease;
  background: radial-gradient(380px circle at var(--mx, 50%) var(--my, 0%), rgba(33, 150, 243, .12), transparent 62%);
}
.ed-card:hover .ed-spot { opacity: 1; }
.ed-bar {
  position: absolute; top: 0; left: 0; right: 0; height: 3px; transform: scaleX(0); transform-origin: left;
  background: linear-gradient(90deg, #2196f3, #90caf9); transition: transform .6s cubic-bezier(.2, .8, .2, 1);
}
.ed-card:hover .ed-bar { transform: scaleX(1); }

.ed-head { position: relative; display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 12px 16px; }
.ed-uni { font: 700 22px/1.3 'Inter', sans-serif; color: var(--ed-text); }
.ed-major { margin-top: 4px; font: 600 15px/1.4 'Inter', sans-serif; color: #2196f3; }
.ed-period {
  display: inline-flex; align-items: center; gap: 7px; padding: 7px 13px; border-radius: 999px;
  font: 600 12.5px/1 'Inter', sans-serif; color: var(--ed-chip-fg); background: rgba(33, 150, 243, .13); border: 1px solid rgba(33, 150, 243, .22);
}

.ed-gpa { position: relative; display: flex; flex-direction: column; gap: 10px; padding-top: 20px; border-top: 1px solid var(--ed-border); }
.ed-gpa-row { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
.ed-gpa-label { font: 500 13.5px/1.2 'Inter', sans-serif; color: var(--ed-sub); }
.ed-gpa-value { font: 700 20px/1 'Inter', sans-serif; color: var(--ed-text); }
.ed-gpa-max { font: 500 14px/1 'Inter', sans-serif; color: var(--ed-sub); }
.ed-track-bar { height: 8px; overflow: hidden; border-radius: 999px; background: var(--ed-chip); }
.ed-fill {
  height: 100%; width: var(--pct); border-radius: 999px; transform: scaleX(0); transform-origin: left;
  background: linear-gradient(90deg, #2196f3, #64b5f6);
}
.ed-list.is-in .ed-fill { animation: ed-fill 1.2s calc(var(--i) * 160ms + 600ms) cubic-bezier(.2, .8, .2, 1) forwards; }

@keyframes ed-in { to { opacity: 1; transform: translateY(0); } }
@keyframes ed-draw { to { transform: scaleY(1); } }
@keyframes ed-fill { to { transform: scaleX(1); } }
@keyframes ed-ping { 0% { transform: scale(1); opacity: .7; } 100% { transform: scale(1.8); opacity: 0; } }

@media (max-width: 520px) {
  .ed-row { gap: 14px; }
  .ed-card { padding: 22px 20px; }
  .ed-uni { font-size: 19px; }
}
@media (prefers-reduced-motion: reduce) {
  .ed-row { opacity: 1; transform: none; }
  .ed-line, .ed-fill { transform: none; }
  .ed-list.is-in .ed-row, .ed-list.is-in .ed-line, .ed-list.is-in .ed-fill, .ed-pulse { animation: none; }
  .ed-pulse { display: none; }
  .ed-card, .ed-node, .ed-bar { transition: none; }
  .ed-card:hover { transform: none; }
}
`

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

interface EducationSectionProps {
  dark: boolean
  lang: Lang
  education: any[] | null
  t: any
}

const CalendarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
)

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

export function EducationSection({ dark, lang, education, t }: EducationSectionProps) {
  const tr = t[lang].education
  const bg = dark ? 'bg-[#081c2c]' : 'bg-[#f8fafc]'

  const vars = {
    '--ed-card': dark ? '#0d263d' : '#ffffff',
    '--ed-border': dark ? '#1a3a5c' : '#e2e8f0',
    '--ed-text': dark ? '#ffffff' : '#0d1b2a',
    '--ed-sub': dark ? '#b8c7d9' : '#4b5563',
    '--ed-chip': dark ? 'rgba(255,255,255,0.08)' : '#e8eef6',
    '--ed-chip-fg': dark ? '#90caf9' : '#1976d2',
    '--ed-shadow': dark
      ? '0 26px 50px -22px rgba(0,0,0,.65)'
      : '0 26px 50px -24px rgba(33,150,243,.4)',
  } as CSSProperties

  const [listRef, inView] = useInView<HTMLDivElement>()

  const items =
    education && education.length > 0
      ? education
      : [
          {
            id: 1,
            university: tr.university,
            universityVI: tr.university,
            major: tr.major,
            majorVI: tr.major,
            currentGpa: tr.currentGpa,
            maxGpa: '4.0',
            period: tr.period,
            periodVI: tr.period,
          },
        ]

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section id="education" className={`${bg} py-24`} style={vars}>
      <style>{css}</style>
      <div className="px-6 lg:px-[120px] max-w-[1440px] mx-auto flex flex-col gap-14 items-center">
        <div className="flex flex-col items-center">
          <SectionTitle title={tr.title} dark={dark} />
        </div>

        <div ref={listRef} className={`ed-list ${inView ? 'is-in' : ''}`}>
          {items.map((item: any, index: number) => {
            const uniName = lang === 'en' ? item.university : item.universityVI || item.university
            const majorName = lang === 'en' ? item.major : item.majorVI || item.major
            const periodStr = lang === 'en' ? item.period : item.periodVI || item.period

            const maxGpa = String(item.maxGpa || '4.0')
            const cur = parseFloat(String(item.currentGpa).replace(',', '.'))
            const max = parseFloat(maxGpa.replace(',', '.'))
            const pct = Number.isFinite(cur) && max > 0 ? Math.min(100, (cur / max) * 100) : null

            return (
              <div
                key={item.id || index}
                className="ed-row"
                style={{ '--i': index } as CSSProperties}
              >
                <div className="ed-track">
                  <span className="ed-node">
                    {index === 0 && <span className="ed-pulse" />}
                    <GradCapIcon color="white" />
                  </span>
                  {index < items.length - 1 && <span className="ed-line" />}
                </div>

                <div className="ed-card" onPointerMove={onMove}>
                  <span className="ed-spot" />
                  <span className="ed-bar" />

                  <div className="ed-head">
                    <div className="min-w-0">
                      <h3 className="ed-uni">{uniName}</h3>
                      <p className="ed-major">{majorName}</p>
                    </div>
                    {periodStr && (
                      <span className="ed-period">
                        <CalendarIcon />
                        {periodStr}
                      </span>
                    )}
                  </div>

                  <div className="ed-gpa">
                    <div className="ed-gpa-row">
                      <span className="ed-gpa-label">{tr.gpa}</span>
                      <span className="ed-gpa-value">
                        {item.currentGpa}
                        <span className="ed-gpa-max"> / {maxGpa}</span>
                      </span>
                    </div>
                    {pct !== null && (
                      <div
                        className="ed-track-bar"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={max}
                        aria-valuenow={cur}
                      >
                        <div className="ed-fill" style={{ '--pct': `${pct}%` } as CSSProperties} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

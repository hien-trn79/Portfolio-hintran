import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent, ReactNode } from 'react'
import type { Lang } from '../types'
import {
  CircleXIcon,
  CodeIcon,
  TerminalIcon,
  FileCodeIcon,
  TextSelectIcon,
  FlashlightIcon,
  RouteIcon,
  CoffeeIcon,
  LeafIcon,
  ShieldIcon,
  ServerIcon16,
  DatabaseIcon16,
  MapIcon,
  GitBranchIcon,
  GithubIcon16Skill,
  LaptopIcon,
} from './icons'
import { SectionTitle } from '../shared/SectionTitle'
import { Braces, Database, Languages, Layers, LayoutTemplate, Server, Wrench } from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Styles + animation (tự chứa, không cần cấu hình thêm)               */
/* ------------------------------------------------------------------ */

const css = `
.sk-card {
  position: relative; overflow: hidden; display: flex; flex-direction: column; gap: 22px; height: 100%;
  padding: 28px; border-radius: 22px; background: var(--sk-card); border: 1px solid var(--sk-border);
  opacity: 0; transform: translateY(26px);
  transition: border-color .3s ease, box-shadow .4s ease;
}
.sk-grid.is-in .sk-card { animation: sk-in .8s calc(var(--i) * 110ms) cubic-bezier(.2, .8, .2, 1) forwards; }
.sk-card:hover { border-color: rgba(33, 150, 243, .5); box-shadow: var(--sk-shadow); }

.sk-spot {
  position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity .35s ease;
  background: radial-gradient(340px circle at var(--mx, 50%) var(--my, 0%), rgba(33, 150, 243, .12), transparent 62%);
}
.sk-card:hover .sk-spot { opacity: 1; }

/* Icon lớn mờ ở góc thẻ */
.sk-mark {
  position: absolute; right: -18px; top: -18px; width: 132px; height: 132px; color: #2196f3; opacity: .07; pointer-events: none;
  transform: rotate(-8deg); transition: transform .9s cubic-bezier(.2, .8, .2, 1), opacity .5s ease;
}
.sk-mark svg { width: 100%; height: 100%; stroke-width: 1.25; }
.sk-card:hover .sk-mark { transform: rotate(4deg) scale(1.08); opacity: .11; }

.sk-head { position: relative; z-index: 1; display: flex; align-items: center; gap: 12px; }
.sk-head-icon {
  display: grid; place-items: center; width: 40px; height: 40px; border-radius: 12px; color: #2196f3;
  background: rgba(33, 150, 243, .12); border: 1px solid rgba(33, 150, 243, .2);
  transition: background .3s ease, color .3s ease, transform .5s cubic-bezier(.2, .8, .2, 1);
}
.sk-head-icon svg { width: 20px; height: 20px; }
.sk-card:hover .sk-head-icon { background: #2196f3; color: #fff; transform: rotate(-6deg) scale(1.05); }
.sk-name { font: 700 18px/1.2 'Inter', sans-serif; color: var(--sk-text); }
.sk-count {
  margin-left: auto; padding: 4px 9px; border-radius: 999px; font: 600 11.5px/1 'Inter', sans-serif;
  color: var(--sk-sub); background: var(--sk-chip); border: 1px solid var(--sk-border);
}

.sk-chips { position: relative; z-index: 1; display: flex; flex-wrap: wrap; gap: 10px; }
.sk-chip {
  display: inline-flex; align-items: center; gap: 9px; padding: 7px 14px 7px 8px; border-radius: 999px;
  font: 600 13.5px/1 'Inter', sans-serif; color: var(--sk-text); background: var(--sk-chip); border: 1px solid var(--sk-border);
  opacity: 0; transform: translateY(10px) scale(.94);
  transition: transform .35s cubic-bezier(.2, .8, .2, 1), border-color .25s ease, background .25s ease, box-shadow .3s ease;
}
.sk-grid.is-in .sk-chip { animation: sk-pop .55s calc(var(--i) * 110ms + 260ms + var(--j) * 45ms) cubic-bezier(.2, 1.2, .4, 1) forwards; }
.sk-chip:hover {
  transform: translateY(-3px) !important; border-color: rgba(33, 150, 243, .6); background: rgba(33, 150, 243, .1);
  box-shadow: 0 10px 22px -12px rgba(33, 150, 243, .8);
}
.sk-chip-icon {
  display: grid; place-items: center; width: 26px; height: 26px; border-radius: 50%; background: rgba(33, 150, 243, .13);
  transition: transform .4s cubic-bezier(.2, .8, .2, 1);
}
.sk-chip:hover .sk-chip-icon { transform: scale(1.15) rotate(-8deg); }

@keyframes sk-in { to { opacity: 1; transform: translateY(0); } }
@keyframes sk-pop { to { opacity: 1; transform: translateY(0) scale(1); } }

@media (prefers-reduced-motion: reduce) {
  .sk-card, .sk-chip { opacity: 1; transform: none; }
  .sk-grid.is-in .sk-card, .sk-grid.is-in .sk-chip { animation: none; }
  .sk-mark, .sk-head-icon, .sk-chip, .sk-chip-icon { transition: none; }
  .sk-chip:hover { transform: none !important; }
}
`

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

interface SkillsSectionProps {
  dark: boolean
  lang: Lang
  skills: any[] | null
  t: any
}

function getSkillIcon(name: string, color: string) {
  const n = name.toLowerCase().trim()
  if (n.includes('reactjs') || n.includes('react js')) return <CircleXIcon color={color} />
  if (n.includes('react router')) return <RouteIcon color={color} />
  if (n.includes('node')) return <ServerIcon16 color={color} />
  if (n.includes('typescript') || n === 'ts') return <CodeIcon color={color} />
  if (n.includes('javascript') || n === 'js') return <TerminalIcon color={color} />
  if (n.includes('html')) return <FileCodeIcon color={color} />
  if (n.includes('tailwind')) return <TextSelectIcon color={color} />
  if (n.includes('vite')) return <FlashlightIcon color={color} />
  if (n.includes('spring boot')) return <LeafIcon color={color} />
  if (n.includes('spring security')) return <ShieldIcon color={color} />
  if (n.includes('java')) return <CoffeeIcon color={color} />
  if (n.includes('postgis') || n.includes('qgis') || n.includes('gis') || n.includes('map'))
    return <MapIcon color={color} />
  if (n.includes('postgres') || n.includes('mysql') || n.includes('mongo') || n.includes('sql'))
    return <DatabaseIcon16 color={color} />
  if (n.includes('github')) return <GithubIcon16Skill color={color} />
  if (n.includes('git')) return <GitBranchIcon color={color} />
  if (n.includes('intellij')) return <LaptopIcon color={color} />
  if (n === 'c') return <Braces color={color} size={16} />
  return <CodeIcon color={color} />
}

function getCategoryIcon(label: string): ReactNode {
  const l = label.toLowerCase()
  if (l.includes('front')) return <LayoutTemplate />
  if (l.includes('back')) return <Server />
  if (l.includes('data')) return <Database />
  if (l.includes('tool')) return <Wrench />
  if (l.includes('lang') || l.includes('ngôn')) return <Languages />
  return <Layers />
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
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, seen] as const
}

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export function SkillsSection({ dark, lang, skills, t }: SkillsSectionProps) {
  const tr = t[lang].skills
  const bg = dark ? 'bg-[#071a2b]' : 'bg-white'
  const iconColor = dark ? '#90caf9' : '#2196f3'

  const vars = {
    '--sk-card': dark ? '#0d263d' : '#f8fafc',
    '--sk-border': dark ? '#1a3a5c' : '#e2e8f0',
    '--sk-chip': dark ? 'rgba(255,255,255,0.04)' : '#ffffff',
    '--sk-text': dark ? '#ffffff' : '#0d1b2a',
    '--sk-sub': dark ? '#b8c7d9' : '#4b5563',
    '--sk-shadow': dark
      ? '0 26px 50px -22px rgba(0,0,0,.65)'
      : '0 26px 50px -24px rgba(33,150,243,.4)',
  } as CSSProperties

  const [gridRef, inView] = useInView<HTMLDivElement>()

  const categories =
    skills && skills.length > 0
      ? skills.map((c) => ({
          label: c.category,
          chips: c.skills.map((s: string) => ({
            icon: getSkillIcon(s, iconColor),
            label: s,
          })),
        }))
      : [
          {
            label: 'Frontend',
            chips: [
              { icon: <CircleXIcon color={iconColor} />, label: 'ReactJS' },
              { icon: <CodeIcon color={iconColor} />, label: 'TypeScript' },
              { icon: <TerminalIcon color={iconColor} />, label: 'JavaScript' },
              { icon: <FileCodeIcon color={iconColor} />, label: 'HTML' },
              { icon: <CodeIcon color={iconColor} />, label: 'CSS' },
              { icon: <TextSelectIcon color={iconColor} />, label: 'Tailwind CSS' },
              { icon: <FlashlightIcon color={iconColor} />, label: 'Vite' },
              { icon: <RouteIcon color={iconColor} />, label: 'React Router' },
            ],
          },
          {
            label: 'Backend',
            chips: [
              { icon: <CoffeeIcon color={iconColor} />, label: 'Java' },
              { icon: <LeafIcon color={iconColor} />, label: 'Spring Boot' },
              { icon: <ShieldIcon color={iconColor} />, label: 'Spring Security' },
              { icon: <ServerIcon16 color={iconColor} />, label: 'Node.js' },
            ],
          },
          {
            label: 'Database',
            chips: [
              { icon: <DatabaseIcon16 color={iconColor} />, label: 'PostgreSQL' },
              { icon: <DatabaseIcon16 color={iconColor} />, label: 'MySQL' },
              { icon: <DatabaseIcon16 color={iconColor} />, label: 'MongoDB' },
              { icon: <MapIcon color={iconColor} />, label: 'PostGIS' },
            ],
          },
          {
            label: 'Tools',
            chips: [
              { icon: <GitBranchIcon color={iconColor} />, label: 'Git' },
              { icon: <GithubIcon16Skill color={iconColor} />, label: 'GitHub' },
              { icon: <CodeIcon color={iconColor} />, label: 'VS Code' },
              { icon: <LaptopIcon color={iconColor} />, label: 'IntelliJ IDEA' },
              { icon: <CodeIcon color={iconColor} />, label: 'Postman' },
              { icon: <MapIcon color={iconColor} />, label: 'QGIS' },
            ],
          },
          {
            label: 'Languages',
            chips: [
              { icon: <CoffeeIcon color={iconColor} />, label: 'Java' },
              { icon: <TerminalIcon color={iconColor} />, label: 'JavaScript' },
              { icon: <CodeIcon color={iconColor} />, label: 'TypeScript' },
              { icon: <DatabaseIcon16 color={iconColor} />, label: 'SQL' },
              { icon: <Braces color={iconColor} size={16} />, label: 'C' },
            ],
          },
        ]

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section id="skills" className={`${bg} py-24`} style={vars}>
      <style>{css}</style>
      <div className="px-6 lg:px-[120px] max-w-[1440px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-center">
          <SectionTitle title={tr.title} dark={dark} />
        </div>

        <div
          ref={gridRef}
          className={`sk-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 ${inView ? 'is-in' : ''}`}
        >
          {categories.map(({ label, chips }, i) => (
            <div key={label} className={i === 0 ? 'md:col-span-2 lg:col-span-4' : 'lg:col-span-2'}>
              <div className="sk-card" style={{ '--i': i } as CSSProperties} onPointerMove={onMove}>
                <span className="sk-spot" />
                <span className="sk-mark" aria-hidden="true">
                  {getCategoryIcon(label)}
                </span>

                <div className="sk-head">
                  <span className="sk-head-icon">{getCategoryIcon(label)}</span>
                  <h3 className="sk-name">{label}</h3>
                  <span className="sk-count">{chips.length}</span>
                </div>

                <div className="sk-chips">
                  {chips.map(
                    ({ icon, label: chipLabel }: { icon: ReactNode; label: string }, j: number) => (
                      <span
                        key={chipLabel}
                        className="sk-chip"
                        style={{ '--j': j } as CSSProperties}
                      >
                        <span className="sk-chip-icon">{icon}</span>
                        {chipLabel}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

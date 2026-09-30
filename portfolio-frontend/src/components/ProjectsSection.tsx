import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent } from 'react'
import type { Lang } from '../types'
import { ProjectDetailModal } from './ProjectDetailModal'
import imgGIS from '../imports/DesktopLightBottom/5d555d989253bcd3af2afa33aedf572afd8e460e.png'
import imgEcommerce from '../imports/DesktopLightBottom/0ad1b1afa17ed01787c04f25ed153f34a606acb3.png'
import imgPortfolio from '../imports/DesktopLightBottom/fa115285f62613e20e83edac812574abf3c4c112.png'
import { SectionTitle } from '../shared/SectionTitle'
import localProjects from '../i18n/projectDetail'

/* ------------------------------------------------------------------ */
/* Styles + animation (tự chứa, không cần cấu hình thêm)               */
/* ------------------------------------------------------------------ */

const css = `
.pc-item { opacity: 0; transform: translateY(28px); }
.pc-grid.is-in .pc-item { animation: pc-in .8s calc(var(--i) * 90ms) cubic-bezier(.2, .8, .2, 1) forwards; }

.pc-card {
  position: relative; display: flex; flex-direction: column; height: 100%; overflow: hidden; border-radius: 20px;
  background: var(--pc-card); border: 1px solid var(--pc-border);
  transition: transform .45s cubic-bezier(.2, .8, .2, 1), box-shadow .45s ease, border-color .3s ease;
}
.pc-card:hover { transform: translateY(-6px); border-color: rgba(33, 150, 243, .55); box-shadow: var(--pc-shadow); }

/* Ánh sáng chạy theo con trỏ */
.pc-spot {
  position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity .35s ease;
  background: radial-gradient(360px circle at var(--mx, 50%) var(--my, 0%), rgba(33, 150, 243, .13), transparent 60%);
}
.pc-card:hover .pc-spot { opacity: 1; }

/* Vạch nhấn phía trên */
.pc-bar {
  position: absolute; z-index: 3; top: 0; left: 0; right: 0; height: 3px; transform: scaleX(0); transform-origin: left;
  background: linear-gradient(90deg, #2196f3, #90caf9); transition: transform .6s cubic-bezier(.2, .8, .2, 1);
}
.pc-card:hover .pc-bar { transform: scaleX(1); }

/* Ảnh */
.pc-media { position: relative; display: block; width: 100%; height: 210px; overflow: hidden; cursor: pointer; border: 0; padding: 0; background: var(--pc-tag-bg); }
.pc-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .9s cubic-bezier(.2, .8, .2, 1); }
.pc-card:hover .pc-img { transform: scale(1.07); }
.pc-veil {
  position: absolute; inset: 0; display: flex; align-items: flex-end; justify-content: flex-start; padding: 16px;
  background: linear-gradient(180deg, transparent 40%, rgba(8, 28, 44, .72)); opacity: 0; transition: opacity .4s ease;
}
.pc-card:hover .pc-veil, .pc-media:focus-visible .pc-veil { opacity: 1; }
.pc-pill {
  display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px; border-radius: 999px; color: #fff;
  font: 600 12px/1 'Inter', sans-serif; background: rgba(255, 255, 255, .16); border: 1px solid rgba(255, 255, 255, .28);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  transform: translateY(14px); opacity: 0; transition: transform .5s cubic-bezier(.2, .8, .2, 1) .05s, opacity .4s ease .05s;
}
.pc-card:hover .pc-pill, .pc-media:focus-visible .pc-pill { transform: translateY(0); opacity: 1; }

/* Nội dung */
.pc-body { position: relative; z-index: 2; display: flex; flex-direction: column; flex: 1; gap: 16px; padding: 22px 24px 24px; }
.pc-title { font: 700 20px/1.3 'Inter', sans-serif; color: var(--pc-text); transition: color .25s ease; }
.pc-card:hover .pc-title { color: #2196f3; }
.pc-role { margin-top: 4px; font: 600 13px/1.4 'Inter', sans-serif; color: #2196f3; }
.pc-desc { flex: 1; font: 400 14px/1.65 'Inter', sans-serif; color: var(--pc-sub); }

.pc-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.pc-tag {
  padding: 5px 9px; border-radius: 7px; font: 600 11px/1 'Inter', sans-serif; color: var(--pc-tag-fg); background: var(--pc-tag-bg);
  transition: background .25s ease, color .25s ease, transform .25s ease;
}
.pc-card:hover .pc-tag { background: rgba(33, 150, 243, .14); color: #2196f3; }

.pc-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding-top: 16px; border-top: 1px solid var(--pc-border); }
.pc-meta-item { display: flex; align-items: center; gap: 9px; min-width: 0; }
.pc-meta-icon { display: grid; place-items: center; flex-shrink: 0; width: 28px; height: 28px; border-radius: 9px; color: #2196f3; background: rgba(33, 150, 243, .12); }
.pc-meta-label { font: 500 10.5px/1.2 'Inter', sans-serif; color: var(--pc-sub); }
.pc-meta-value { margin-top: 2px; font: 600 12.5px/1.3 'Inter', sans-serif; color: var(--pc-text); overflow-wrap: anywhere; }

/* Nút */
.pc-actions { display: flex; gap: 10px; }
.pc-btn {
  display: inline-flex; flex: 1; align-items: center; justify-content: center; gap: 8px; padding: 11px 14px; border-radius: 11px;
  font: 600 14px/1 'Inter', sans-serif; cursor: pointer; text-decoration: none; transition: background .25s ease, border-color .25s ease, color .25s ease, box-shadow .25s ease;
}
.pc-btn svg { transition: transform .3s cubic-bezier(.2, .8, .2, 1); }
.pc-btn:hover svg { transform: translateX(3px); }
.pc-btn:focus-visible, .pc-media:focus-visible { outline: 2px solid #2196f3; outline-offset: 2px; }
.pc-btn-primary { color: #fff; background: #2196f3; border: 1px solid #2196f3; }
.pc-btn-primary:hover { background: #1976d2; border-color: #1976d2; box-shadow: 0 8px 20px -8px rgba(33, 150, 243, .7); }
.pc-btn-ghost { color: var(--pc-sub); background: transparent; border: 1px solid var(--pc-border); }
.pc-btn-ghost:hover { color: #2196f3; border-color: #2196f3; }

@keyframes pc-in { to { opacity: 1; transform: translateY(0); } }

@media (prefers-reduced-motion: reduce) {
  .pc-item { opacity: 1; transform: none; }
  .pc-grid.is-in .pc-item { animation: none; }
  .pc-card, .pc-img, .pc-bar, .pc-pill, .pc-veil, .pc-btn svg { transition: none; }
  .pc-card:hover { transform: none; }
}
`

/* ------------------------------------------------------------------ */
/* Icons                                                                */
/* ------------------------------------------------------------------ */

const svgProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const UsersIcon = () => (
  <svg {...svgProps}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const CalendarRangeIcon = () => (
  <svg {...svgProps}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
)
const ArrowIcon = () => (
  <svg {...svgProps} width={15} height={15}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
const GithubIcon = () => (
  <svg {...svgProps} width={15} height={15}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
)

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

interface ProjectsSectionProps {
  dark: boolean
  lang: Lang
  projects: any[] | null
  t: any
}

function getProjectImage(title: string) {
  const t = title.toLowerCase()
  if (t.includes('gis') || t.includes('map') || t.includes('bản đồ') || t.includes('ctu'))
    return imgGIS
  if (t.includes('regreen') || t.includes('ecommerce') || t.includes('thương mại'))
    return imgEcommerce
  if (t.includes('portfolio') || t.includes('trang cá nhân')) return imgPortfolio
  return imgEcommerce
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

export function ProjectsSection({ dark, lang, projects: dbProjects, t }: ProjectsSectionProps) {
  const tr = t[lang].projects
  const bg = dark ? 'bg-[#081c2c]' : 'bg-[#f0f7ff]'

  const vars = {
    '--pc-card': dark ? '#0d263d' : '#ffffff',
    '--pc-border': dark ? '#1a3a5c' : '#e2e8f0',
    '--pc-text': dark ? '#ffffff' : '#0d1b2a',
    '--pc-sub': dark ? '#b8c7d9' : '#4b5563',
    '--pc-tag-bg': dark ? 'rgba(33,150,243,0.15)' : '#f1f5f9',
    '--pc-tag-fg': dark ? '#90caf9' : '#4b5563',
    '--pc-shadow': dark
      ? '0 24px 48px -20px rgba(0,0,0,.6)'
      : '0 24px 48px -22px rgba(33,150,243,.35)',
  } as CSSProperties

  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [gridRef, inView] = useInView<HTMLDivElement>()

  const items = dbProjects && dbProjects.length > 0 ? dbProjects : localProjects

  const teamLabel = lang === 'vi' ? 'Nhóm' : 'Team'
  const periodLabel = lang === 'vi' ? 'Thời gian' : 'Period'

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <>
      <section id="projects" className={`${bg} py-24`} style={vars}>
        <style>{css}</style>
        <div className="px-6 lg:px-[120px] max-w-[1440px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center">
            <SectionTitle title={tr.title} dark={dark} />
          </div>

          <div
            ref={gridRef}
            className={`pc-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${inView ? 'is-in' : ''}`}
          >
            {items.map((p: any, i: number) => {
              const c = p.content[lang]
              const projectTitle = c.title
              const projectImg = p.img || getProjectImage(projectTitle)
              const tags: string[] = p.tags || []

              return (
                <div
                  key={p.id ?? projectTitle}
                  className="pc-item"
                  style={{ '--i': i } as CSSProperties}
                >
                  <div className="pc-card" onPointerMove={onMove}>
                    <span className="pc-spot" />
                    <span className="pc-bar" />

                    <button
                      type="button"
                      className="pc-media"
                      onClick={() => setSelectedProject(p)}
                      aria-label={`${tr.viewProject}: ${projectTitle}`}
                    >
                      <img src={projectImg} alt={projectTitle} className="pc-img" loading="lazy" />
                      <span className="pc-veil">
                        <span className="pc-pill">
                          {tr.viewProject}
                          <ArrowIcon />
                        </span>
                      </span>
                    </button>

                    <div className="pc-body">
                      <div>
                        <h3 className="pc-title">{projectTitle}</h3>
                        <p className="pc-role">{c.role}</p>
                      </div>

                      <p className="pc-desc">{c.desc}</p>

                      {tags.length > 0 && (
                        <div className="pc-tags">
                          {tags.map((tag) => (
                            <span key={tag} className="pc-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="pc-meta">
                        <div className="pc-meta-item">
                          <span className="pc-meta-icon">
                            <UsersIcon />
                          </span>
                          <div className="min-w-0">
                            <p className="pc-meta-label">{teamLabel}</p>
                            <p className="pc-meta-value">{c.team}</p>
                          </div>
                        </div>
                        <div className="pc-meta-item">
                          <span className="pc-meta-icon">
                            <CalendarRangeIcon />
                          </span>
                          <div className="min-w-0">
                            <p className="pc-meta-label">{periodLabel}</p>
                            <p className="pc-meta-value">{c.period}</p>
                          </div>
                        </div>
                      </div>

                      <div className="pc-actions">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(p)}
                          className="pc-btn pc-btn-primary"
                        >
                          {tr.viewProject}
                          <ArrowIcon />
                        </button>
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pc-btn pc-btn-ghost"
                          >
                            <GithubIcon />
                            {tr.repository}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectDetailModal
          project={{
            ...selectedProject,
            img: selectedProject.img || getProjectImage(selectedProject.content[lang].title),
          }}
          dark={dark}
          lang={lang}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}

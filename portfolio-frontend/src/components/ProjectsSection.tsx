import { useState } from 'react'
import type { Lang } from '../types'
import { ProjectDetailModal } from './ProjectDetailModal'
import imgGIS from '../imports/DesktopLightBottom/5d555d989253bcd3af2afa33aedf572afd8e460e.png'
import imgEcommerce from '../imports/DesktopLightBottom/0ad1b1afa17ed01787c04f25ed153f34a606acb3.png'
import imgPortfolio from '../imports/DesktopLightBottom/fa115285f62613e20e83edac812574abf3c4c112.png'
import { SectionTitle } from '../shared/SectionTitle'
import localProjects from '../i18n/projectDetail'

interface ProjectsSectionProps {
  dark: boolean
  lang: Lang
  projects: any[] | null
  t: any
}

function getProjectImage(title: string) {
  const t = title.toLowerCase()
  if (t.includes('gis') || t.includes('map') || t.includes('bản đồ') || t.includes('ctu')) return imgGIS
  if (t.includes('regreen') || t.includes('ecommerce') || t.includes('thương mại')) return imgEcommerce
  if (t.includes('portfolio') || t.includes('trang cá nhân')) return imgPortfolio
  return imgEcommerce
}

export function ProjectsSection({ dark, lang, projects: dbProjects, t }: ProjectsSectionProps) {
  const tr = t[lang].projects
  const bg = dark ? 'bg-[#081c2c]' : 'bg-[#f0f7ff]'
  const textPrimary = dark ? 'text-white' : 'text-[#0d1b2a]'
  const textSecondary = dark ? 'text-[#b8c7d9]' : 'text-[#4b5563]'
  const cardBg = dark ? 'bg-[#0d263d] border border-[#1a3a5c]' : 'bg-white border border-[#e2e8f0]'
  const tagBg = dark ? 'bg-[rgba(33,150,243,0.15)] text-[#90caf9]' : 'bg-[#f8fafc] text-[#4b5563]'
  const divider = dark ? 'border-[#1a3a5c]' : 'border-[#e2e8f0]'
  const metaColor = dark ? 'text-[#b8c7d9]' : 'text-[#4b5563]'
  const btnPrimary = 'bg-[#2196f3] hover:bg-[#1976d2] text-white'
  const btnSecondary = dark
    ? 'border border-[#1a3a5c] text-[#b8c7d9] hover:border-[#2196f3] hover:text-[#2196f3]'
    : 'border border-[#e2e8f0] text-[#4b5563] hover:border-[#2196f3] hover:text-[#2196f3]'

  const [selectedProject, setSelectedProject] = useState<any | null>(null)

  const items = dbProjects && dbProjects.length > 0 ? dbProjects : localProjects

  return (
    <>
      <section id="projects" className={`${bg} py-24`}>
        <div className="px-6 lg:px-[120px] max-w-[1440px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center">
            <SectionTitle title={tr.title} dark={dark} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p: any) => {
              const projectTitle = p.content[lang].title
              const projectImg = p.img || getProjectImage(projectTitle)

              return (
                <div
                  key={projectTitle}
                  className={`${cardBg} rounded-[20px] overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div
                    className="h-[200px] overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(p)}
                  >
                    <img
                      src={projectImg}
                      alt={projectTitle}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6 gap-4">
                    <div>
                      <p className={`font-bold text-[20px] font-['Inter',sans-serif] ${textPrimary}`}>
                        {projectTitle}
                      </p>
                      <p className="font-semibold text-[14px] text-[#2196f3] font-['Inter',sans-serif]">
                        {p.content[lang].role}
                      </p>
                    </div>
                    <p
                      className={`font-normal text-[14px] leading-[1.5] font-['Inter',sans-serif] ${textSecondary} flex-1`}
                    >
                      {p.content[lang].desc}
                    </p>
                    <div className="flex flex-wrap gap-[6px]">
                      {p.tags.slice(0, 4).map((tag: string) => (
                        <span
                          key={tag}
                          className={`${tagBg} font-semibold text-[11px] px-2 py-1 rounded-[6px] font-['Inter',sans-serif]`}
                        >
                          {tag}
                        </span>
                      ))}
                      {p.tags.length > 4 && (
                        <span
                          className={`${tagBg} font-semibold text-[11px] px-2 py-1 rounded-[6px] font-['Inter',sans-serif]`}
                        >
                          +{p.tags.length - 4}
                        </span>
                      )}
                    </div>
                    <div
                      className={`border-t ${divider} pt-4 flex items-center justify-between text-[12px] font-['Inter',sans-serif] ${metaColor}`}
                    >
                      <span>👥 Team: {p.content[lang].team}</span>
                      <span>📅 {p.content[lang].period}</span>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedProject(p)}
                        className={`${btnPrimary} flex-1 py-[10px] rounded-[10px] font-semibold text-[14px] font-['Inter',sans-serif] transition-colors`}
                      >
                        {tr.viewProject}
                      </button>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${btnSecondary} text-center flex-1 py-[10px] rounded-[10px] font-semibold text-[14px] font-['Inter',sans-serif] transition-colors`}
                      >
                        {tr.repository}
                      </a>
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


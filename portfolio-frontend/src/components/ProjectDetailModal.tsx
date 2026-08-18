import { useEffect } from 'react'
import type { Lang, Project, ProjectDetail } from '../types'
import { t } from '../i18n/translations'
import { useNavigate } from 'react-router'

interface ProjectDetailModalProps {
  project: ProjectDetail
  dark: boolean
  lang: Lang
  onClose: () => void
}

export function ProjectDetailModal({ project, dark, lang, onClose }: ProjectDetailModalProps) {
  const tr = t[lang].projects

  const navigate = useNavigate()

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const overlay = dark ? 'bg-[#071a2b]' : 'bg-white'
  const textPrimary = dark ? 'text-white' : 'text-[#0d1b2a]'
  const textSecondary = dark ? 'text-[#b8c7d9]' : 'text-[#4b5563]'
  const sectionBg = dark
    ? 'bg-[#0d263d] border border-[#1a3a5c]'
    : 'bg-[#f8fafc] border border-[#e2e8f0]'
  const tagBg = dark ? 'bg-[rgba(33,150,243,0.18)] text-[#90caf9]' : 'bg-[#e3f2fd] text-[#1565c0]'
  const challengeBg = dark
    ? 'bg-[#081c2c] border border-[#1a3a5c]'
    : 'bg-white border border-[#e2e8f0]'
  const divider = dark ? 'border-[#1a3a5c]' : 'border-[#e2e8f0]'
  const badgeBg = dark ? 'bg-[rgba(33,150,243,0.15)]' : 'bg-[#e3f2fd]'

  return (
    <div className="fixed inset-0 z-[100] flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: 'fadeIn 0.25s ease' }}
      />

      {/* Panel – slides in from right */}
      <div
        className={`relative ml-auto h-full w-full max-w-[720px] ${overlay} overflow-y-auto flex flex-col shadow-2xl`}
        style={{ animation: 'slideInRight 0.3s cubic-bezier(0.16,1,0.3,1)' }}
      >
        {/* Hero image */}
        <div className="relative h-[280px] flex-shrink-0 overflow-hidden">
          <img
            src={project.img}
            alt={project.content[lang].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full size-[40px] flex items-center justify-center transition-colors backdrop-blur-sm"
            aria-label={tr.close}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-[#2196f3] text-white text-[12px] font-semibold px-3 py-1 rounded-full font-['Inter',sans-serif]">
              {project.content[lang].status}
            </span>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white font-extrabold text-[28px] leading-tight font-['Inter',sans-serif]">
              {project.content[lang].title}
            </p>
            <p className="text-[#90caf9] font-semibold text-[15px] font-['Inter',sans-serif]">
              {project.content[lang].role}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 p-6 flex-1">
          {/* Meta row */}
          <div className={`grid grid-cols-3 gap-4`}>
            {[
              { label: tr.teamSize, value: project.content[lang].team },
              { label: tr.duration, value: project.content[lang].period },
              { label: tr.role, value: project.content[lang].role },
            ].map(({ label, value }) => (
              <div key={label} className={`${badgeBg} rounded-[12px] px-4 py-3 text-center`}>
                <p
                  className={`text-[11px] font-medium uppercase tracking-wide font-['Inter',sans-serif] ${textSecondary}`}
                >
                  {label}
                </p>
                <p
                  className={`text-[13px] font-semibold mt-1 font-['Inter',sans-serif] ${textPrimary}`}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {/* Overview */}
            <div className={`${sectionBg} rounded-[16px] p-5 flex flex-col gap-3`}>
              <h3
                className={`font-bold text-[16px] font-['Inter',sans-serif] ${textPrimary} flex items-center gap-2`}
              >
                <span className="text-[#2196f3]">◈</span> {tr.overview}
              </h3>
              <p
                className={`font-normal text-[14px] leading-[1.7] font-['Inter',sans-serif] ${textSecondary}`}
              >
                {project.content[lang].overview}
              </p>
            </div>

            {/* Key features */}
            <div className={`${sectionBg} rounded-[16px] p-5 flex flex-col gap-3`}>
              <h3
                className={`font-bold text-[16px] font-['Inter',sans-serif] ${textPrimary} flex items-center gap-2`}
              >
                <span className="text-[#2196f3]">◈</span> {tr.features}
              </h3>
              <ul className="flex flex-col gap-2">
                {project.content[lang].features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[5px] size-[6px] rounded-full bg-[#2196f3] flex-shrink-0" />
                    <span
                      className={`text-[14px] leading-[1.6] font-['Inter',sans-serif] ${textSecondary}`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div className={`${sectionBg} rounded-[16px] p-5 flex flex-col gap-3`}>
              <h3
                className={`font-bold text-[16px] font-['Inter',sans-serif] ${textPrimary} flex items-center gap-2`}
              >
                <span className="text-[#2196f3]">◈</span> {tr.responsibilities}
              </h3>
              <ul className="flex flex-col gap-2">
                {project.content[lang].responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[5px] size-[6px] rounded-full bg-[#90caf9] flex-shrink-0" />
                    <span
                      className={`text-[14px] leading-[1.6] font-['Inter',sans-serif] ${textSecondary}`}
                    >
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="flex flex-col gap-3">
              <h3
                className={`font-bold text-[16px] font-['Inter',sans-serif] ${textPrimary} flex items-center gap-2`}
              >
                <span className="text-[#2196f3]">◈</span> {tr.challenges}
              </h3>
              <div className="flex flex-col gap-3">
                {project.content[lang].challenges.map(({ problem, solution }, i) => (
                  <div key={i} className={`${challengeBg} rounded-[12px] p-4 flex flex-col gap-2`}>
                    <p
                      className={`text-[13px] font-semibold font-['Inter',sans-serif] text-[#ef5350]`}
                    >
                      ⚡ {problem}
                    </p>
                    <p
                      className={`text-[13px] leading-[1.6] font-['Inter',sans-serif] ${textSecondary}`}
                    >
                      ✓ {solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-col gap-3">
              <h3
                className={`font-bold text-[16px] font-['Inter',sans-serif] ${textPrimary} flex items-center gap-2`}
              >
                <span className="text-[#2196f3]">◈</span> {tr.techStack}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`${tagBg} font-semibold text-[13px] px-3 py-[6px] rounded-[8px] font-['Inter',sans-serif]`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className={`border-t ${divider} pt-5 flex gap-3`}>
              {/* <button className="bg-[#2196f3] hover:bg-[#1976d2] active:bg-[#1565c0] text-white font-semibold text-[14px] px-6 py-[12px] rounded-[12px] font-['Inter',sans-serif] transition-colors flex-1">
                {tr.liveDemo}
              </button> */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`border text-center border-[#2196f3] text-[#2196f3] hover:bg-[rgba(33,150,243,0.08)] font-semibold text-[14px] px-6 py-[12px] rounded-[12px] font-['Inter',sans-serif] transition-colors flex-1`}
              >
                {tr.viewRepo}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideInRight { from { transform: translateX(100%) } to { transform: translateX(0) } }
      `}</style>
    </div>
  )
}

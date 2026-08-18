import type { Lang } from '../types'
import { LayoutIcon, ServerIcon24, DatabaseIcon24 } from './icons'

interface AboutSectionProps {
  dark: boolean
  lang: Lang
  t: any
}

export function AboutSection({ dark, lang, t }: AboutSectionProps) {
  const tr = t[lang].about
  const bg = dark ? 'bg-[#071a2b]' : 'bg-white'
  const textPrimary = dark ? 'text-white' : 'text-[#0d1b2a]'
  const textSecondary = dark ? 'text-[#b8c7d9]' : 'text-[#4b5563]'
  const cardBg = dark
    ? 'bg-[#0d263d] border border-[#1a3a5c]'
    : 'bg-white border border-[#e2e8f0] shadow-sm'
  const iconBg = dark ? 'bg-[rgba(33,150,243,0.15)]' : 'bg-[rgba(33,150,243,0.1)]'

  const cards = [
    { icon: <LayoutIcon color="#2196F3" />, title: tr.frontend, desc: tr.frontendDesc },
    { icon: <ServerIcon24 color="#2196F3" />, title: tr.backend, desc: tr.backendDesc },
    { icon: <DatabaseIcon24 color="#2196F3" />, title: tr.database, desc: tr.databaseDesc },
  ]

  return (
    <section className={`${bg} py-24`}>
      <div className="px-6 lg:px-[120px] max-w-[1440px] mx-auto flex flex-col gap-12 items-center">
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-2 items-center">
            <h2
              className={`font-bold text-[36px] text-center font-['Inter',sans-serif] ${textPrimary}`}
            >
              {tr.title}
            </h2>
            <div className="bg-[#2196f3] h-[4px] rounded-[2px] w-[60px]" />
          </div>
          <p
            className={`font-normal text-[16px] leading-[1.5] text-justify max-w-6xl  font-['Inter',sans-serif] ${textSecondary}`}
          >
            {tr.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map(({ icon, title, desc }) => (
            <div
              key={title}
              className={`${cardBg} rounded-[16px] p-8 flex flex-col gap-4 transition-transform hover:-translate-y-1 hover:shadow-md`}
            >
              <div
                className={`${iconBg} flex items-center justify-center rounded-[12px] size-[48px]`}
              >
                {icon}
              </div>
              <div className="flex flex-col gap-2">
                <p className={`font-bold text-[20px] font-['Inter',sans-serif] ${textPrimary}`}>
                  {title}
                </p>
                <p
                  className={`font-normal text-[14px] leading-[1.6] font-['Inter',sans-serif] ${textSecondary}`}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


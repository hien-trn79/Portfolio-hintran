import type { Lang } from '../types'
import { GradCapIcon } from './icons'

interface EducationSectionProps {
  dark: boolean
  lang: Lang
  education: any[] | null
  t: any
}

export function EducationSection({ dark, lang, education, t }: EducationSectionProps) {
  const tr = t[lang].education
  const bg = dark ? 'bg-[#081c2c]' : 'bg-[#f8fafc]'
  const textPrimary = dark ? 'text-white' : 'text-[#0d1b2a]'
  const textSecondary = dark ? 'text-[#b8c7d9]' : 'text-[#4b5563]'
  const cardBg = dark
    ? 'bg-[#0d263d] border border-[#1a3a5c]'
    : 'bg-white border border-[#e2e8f0] shadow-sm'
  const divider = dark ? 'border-[#1a3a5c]' : 'border-[#e2e8f0]'

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

  return (
    <section id="education" className={`${bg} py-24`}>
      <div className="px-6 lg:px-[120px] max-w-[1440px] mx-auto flex flex-col gap-14 items-center">
        <div className="flex flex-col gap-2 items-center">
          <h2
            className={`font-bold text-[36px] text-center font-['Inter',sans-serif] ${textPrimary}`}
          >
            {tr.title}
          </h2>
          <div className="bg-[#2196f3] h-[4px] rounded-[2px] w-[60px]" />
        </div>
        <div className="flex flex-col gap-8 w-full max-w-[800px]">
          {items.map((item, index) => {
            const uniName = lang === 'en' ? item.university : item.universityVI || item.university
            const majorName = lang === 'en' ? item.major : item.majorVI || item.major
            const periodStr = lang === 'en' ? item.period : item.periodVI || item.period

            return (
              <div key={item.id || index} className="flex items-start w-full">
                {/* Timeline track */}
                <div className="flex flex-col items-center w-[48px] flex-shrink-0 self-stretch relative">
                  <div className="bg-[#2196f3] flex items-center justify-center rounded-[22px] size-[44px] z-10">
                    <GradCapIcon color="white" />
                  </div>
                  {index < items.length - 1 && (
                    <div className="absolute bg-[#2196f3] w-[2px] top-[44px] bottom-0" />
                  )}
                </div>
                {/* Card */}
                <div className={`${cardBg} rounded-[16px] flex-1 ml-6 p-8 flex flex-col gap-5`}>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <p
                        className={`font-bold text-[22px] font-['Inter',sans-serif] ${textPrimary}`}
                      >
                        {uniName}
                      </p>
                      <p className="font-semibold text-[16px] text-[#2196f3] font-['Inter',sans-serif]">
                        {majorName}
                      </p>
                    </div>
                    <div className="bg-[rgba(33,150,243,0.15)] px-[14px] py-[6px] rounded-[20px]">
                      <p className="font-semibold text-[13px] text-[#90caf9] font-['Inter',sans-serif]">
                        {periodStr}
                      </p>
                    </div>
                  </div>
                  <div className={`border-t ${divider}`} />
                  <div className="flex items-center gap-2">
                    <p
                      className={`font-medium text-[14px] font-['Inter',sans-serif] ${textSecondary}`}
                    >
                      {tr.gpa}
                    </p>
                    <p className={`font-bold text-[16px] font-['Inter',sans-serif] ${textPrimary}`}>
                      {item.currentGpa} — / {item.maxGpa || '4.0'}
                    </p>
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


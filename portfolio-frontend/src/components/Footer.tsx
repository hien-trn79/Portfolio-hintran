
import type { Lang } from '../types'
import { ArrowUpIcon, GithubIcon16Footer, LinkedinIcon16, MailIcon16 } from './icons'

interface FooterProps {
  dark: boolean
  lang: Lang
  t: any
}

export function Footer({ dark, lang, t }: FooterProps) {
  const tr = t[lang].footer
  const bg = dark ? 'bg-[#081c2c]' : 'bg-[#0d1b2a]'
  const iconColor = '#90caf9'
  const iconBtnBg = dark ? 'bg-[#0d263d]' : 'bg-[#163854]'

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={`${bg}`}>
      {/* Back to top bar */}
      <div className="flex items-center justify-end px-6 lg:px-[120px] py-6 border-t border-b border-[#1a3a5c]">
        <button
          onClick={scrollToTop}
          className={`${iconBtnBg} flex items-center justify-center rounded-[24px] size-[48px] border border-[#1a3a5c] hover:border-[#2196f3] transition-colors`}
          aria-label="Back to top"
        >
          <ArrowUpIcon color="#2196F3" />
        </button>
      </div>
      {/* Footer main */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 lg:px-[120px] py-12">
        <p className="font-extrabold text-[24px] text-white font-['Inter',sans-serif]">HinTran</p>
        <p className="font-normal text-[14px] text-[#b8c7d9] font-['Inter',sans-serif]">{tr.copyright}</p>
        <div className="flex gap-4 items-center">
          {[
            { icon: <GithubIcon16Footer color={iconColor} />, label: 'GitHub' },
            { icon: <LinkedinIcon16 color={iconColor} />, label: 'LinkedIn' },
            { icon: <MailIcon16 color={iconColor} />, label: 'Email' },
          ].map(({ icon, label }) => (
            <button key={label} className={`${iconBtnBg} flex items-center justify-center rounded-[18px] size-[36px] hover:border-[#2196f3] border border-transparent transition-colors`} aria-label={label}>
              {icon}
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}


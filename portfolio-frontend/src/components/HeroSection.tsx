import type { Lang } from '../types'
import imgAvatarDark from '../imports/DesktopDarkTop/6f2212818ed6b4aeb7501e9f341959aee59faae4.png'
import imgAvatarLight from '../imports/DesktopLightTop/eba5d5043177312d16ba4e17cc3d8af6e3ca9f48.png'
import {
  CalendarIcon,
  VenusIcon,
  MailIcon16,
  PhoneIcon16,
  MapPinIcon,
  LinkedinIcon16,
} from './icons'

interface HeroSectionProps {
  dark: boolean
  lang: Lang
  me: any
  t: any
}

export function HeroSection({ dark, lang, me, t }: HeroSectionProps) {
  const tr = t[lang].hero
  const accent = '#2196f3'
  const infoColor = dark ? '#2196f3' : accent

  const position =
    lang === 'en'
      ? me?.position || tr.position
      : me?.positionVI || me?.position || tr.position
  const name = me?.fullName || tr.name || 'TRAN THI THUY HIEN'
  const subtitle =
    lang === 'en'
      ? me?.subtitle || tr.subtitle
      : me?.subtitleVI || me?.subtitle || tr.subtitle
  const bio = lang === 'en' ? me?.bio || tr.bio : me?.bioVI || me?.bio || tr.bio

  const genderValue = me
    ? me.gender === 'Female' && lang === 'vi'
      ? 'Nữ'
      : me.gender
    : 'Female'

  const infoItems = [
    {
      icon: <CalendarIcon color={infoColor} />,
      label: tr.birth,
      value: me?.birthDate || '07/09/2005',
    },
    { icon: <VenusIcon color={infoColor} />, label: tr.gender, value: genderValue },
    {
      icon: <MailIcon16 color={infoColor} />,
      label: tr.email,
      value: me?.email || 'thuyhien2005lv@gmail.com',
    },
  ]
  const infoItems2 = [
    {
      icon: <PhoneIcon16 color={infoColor} />,
      label: tr.phone,
      value: me?.phoneNumber || '0978 910 289',
    },
    {
      icon: <MapPinIcon color={infoColor} />,
      label: 'Address',
      value:
        me?.address ||
        (lang === 'vi' ? 'phường Ninh Kiều, thành phố Cần Thơ' : 'Ninh Kieu, Can Tho City'),
    },
    {
      icon: <LinkedinIcon16 color={infoColor} />,
      label: tr.linkedin,
      value: me?.linkedin || 'linkedin.com/in/hintran',
    },
  ]

  const bg = dark ? 'bg-[#081c2c]' : 'bg-[#dbeafe]'
  const textPrimary = dark ? 'text-white' : 'text-[#0d1b2a]'
  const textSecondary = dark ? 'text-[#b8c7d9]' : 'text-[#4b5563]'
  const iconCircleBg = dark ? 'bg-[rgba(33,150,243,0.15)]' : 'bg-[rgba(33,150,243,0.12)]'

  return (
    <section id="info" className={`${bg} pt-16`}>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center px-6 lg:px-30 py-16 lg:py-20 max-w-[1440px] mx-auto">
        {/* Avatar */}
        <div className="flex-shrink-0 relative">
          <div className="absolute bg-[#2196f3] blur-[16px] opacity-30 rounded-[32px] w-[280px] h-[280px] top-4 left-4" />
          <div className="relative rounded-[24px] size-[280px] overflow-hidden border-2 border-[#2196f3]">
            <img
              src={dark ? imgAvatarDark : imgAvatarLight}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[14px] text-[#2196f3] font-['Inter',sans-serif]">
              {position}
            </p>
            <h1
              className={`font-extrabold text-[36px] sm:text-[48px] leading-tight font-['Inter',sans-serif] ${textPrimary}`}
            >
              {name}
            </h1>

            <p
              className={`font-semibold text-[36px] sm:text-[18px] italic leading-tight font-['Inter',sans-serif] ${textPrimary}`}
            >
              {subtitle}
            </p>
          </div>
          <p
            className={`font-normal text-[16px] leading-[1.6] font-['Inter',sans-serif] ${textSecondary}`}
          >
            {bio}
          </p>

          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              {infoItems.map(({ icon, label, value }) => (
                <div key={label} className="flex gap-3 items-center">
                  <div
                    className={`${iconCircleBg} flex items-center justify-center rounded-2xl size-8 shrink-0`}
                  >
                    {icon}
                  </div>
                  <div>
                    <p
                      className={`font-medium text-[11px] uppercase font-['Inter',sans-serif] ${textSecondary}`}
                    >
                      {label}
                    </p>
                    <p
                      className={`font-semibold text-[14px] font-['Inter',sans-serif] ${textPrimary}`}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {infoItems2.map(({ icon, label, value }) => (
                <div key={label} className="flex gap-3 items-center">
                  <div
                    className={`${iconCircleBg} flex items-center justify-center rounded-[16px] size-[32px] flex-shrink-0`}
                  >
                    {icon}
                  </div>
                  <div>
                    <p
                      className={`font-medium text-[11px] uppercase font-['Inter',sans-serif] ${textSecondary}`}
                    >
                      {label}
                    </p>
                    <p
                      className={`font-semibold text-[14px] font-['Inter',sans-serif] ${textPrimary} `}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-[#2196f3] hover:bg-[#1976d2] active:bg-[#1565c0] text-white font-semibold text-[15px] px-6 py-[14px] rounded-[12px] font-['Inter',sans-serif] transition-colors"
            >
              {tr.viewProjects}
            </button>
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className={`border-[1.5px] border-[#2196f3] text-[#2196f3] hover:bg-[rgba(33,150,243,0.08)] font-semibold text-[15px] px-6 py-[14px] rounded-[12px] font-['Inter',sans-serif] transition-colors`}
            >
              {tr.contactMe}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


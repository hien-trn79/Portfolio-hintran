import { useRef } from 'react'
import type { CSSProperties, PointerEvent, ReactNode } from 'react'
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

/* ------------------------------------------------------------------ */
/* AvatarFrame: khung ảnh có animation (tự chứa CSS, không cần setup)  */
/* ------------------------------------------------------------------ */

const avatarCss = `
@property --af-angle { syntax: '<angle>'; inherits: false; initial-value: 0deg; }

.af { position: relative; flex-shrink: 0; width: min(78vw, 300px); aspect-ratio: 3 / 4; perspective: 900px; }
.af-tilt {
  position: absolute; inset: 0; transform-style: preserve-3d;
  transform: rotateX(var(--af-rx, 0deg)) rotateY(var(--af-ry, 0deg));
  transition: transform .7s cubic-bezier(.2, .8, .2, 1);
}
.af.is-moving .af-tilt { transition: transform .12s ease-out; }

.af-glow {
  position: absolute; inset: 8% 4%; border-radius: 40px; background: #2196f3;
  filter: blur(48px); opacity: 0;
  animation: af-glow-in 1.2s .3s ease-out forwards, af-breathe 5s 1.5s ease-in-out infinite;
}

.af-plate {
  position: absolute; inset: 12px; border-radius: 28px; border: 1px solid rgba(33, 150, 243, .35);
  background: linear-gradient(160deg, rgba(33, 150, 243, .18), rgba(33, 150, 243, .04));
  transform: translate3d(0, 0, -30px); opacity: 0;
  animation: af-plate-in .9s .55s cubic-bezier(.2, .8, .2, 1) forwards;
}

.af-ring-base { position: absolute; inset: -3px; border-radius: 30px; border: 1px solid var(--af-line); opacity: 0; animation: af-fade .6s .2s forwards; }
.af-ring {
  position: absolute; inset: -3px; border-radius: 30px; padding: 2px; opacity: 0;
  background: conic-gradient(from var(--af-angle), transparent 0 50%, #2196f3 72%, #bbdefb 88%, transparent 100%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  animation: af-fade .6s .2s forwards, af-spin 6s linear infinite;
}

.af-photo {
  position: absolute; inset: 0; overflow: hidden; border-radius: 28px; background: var(--af-photo-bg);
  clip-path: inset(100% 0 0 0 round 28px);
  animation: af-reveal 1s .15s cubic-bezier(.2, .8, .2, 1) forwards;
  box-shadow: 0 30px 60px -20px rgba(3, 15, 29, .55);
}
.af-img { width: 100%; height: 100%; object-fit: cover; display: block; transform: scale(1.25); animation: af-zoom 1.4s .15s cubic-bezier(.2, .8, .2, 1) forwards; }
.af-glare {
  position: absolute; inset: 0; pointer-events: none; mix-blend-mode: soft-light;
  opacity: var(--af-glare, 0); transition: opacity .3s;
  background: radial-gradient(circle at var(--af-gx, 50%) var(--af-gy, 30%), rgba(255, 255, 255, .85), transparent 55%);
}
.af-tint { position: absolute; inset: 0; pointer-events: none; background: linear-gradient(180deg, transparent 60%, rgba(8, 28, 44, .35)); }

.af-chip {
  position: absolute; left: -14px; bottom: 28px; display: flex; align-items: center; gap: 8px;
  padding: 8px 14px 8px 12px; border-radius: 999px; font: 600 12px/1 'Inter', sans-serif; color: var(--af-chip-fg);
  background: var(--af-chip-bg); border: 1px solid var(--af-line);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 12px 30px -10px rgba(3, 15, 29, .5); transform: translate3d(0, 0, 60px); opacity: 0;
  animation: af-chip-in .7s 1.2s cubic-bezier(.2, 1.4, .4, 1) forwards, af-float 5s 2s ease-in-out infinite;
}
.af-dot { position: relative; width: 8px; height: 8px; border-radius: 50%; background: #22c55e; }
.af-dot::after { content: ''; position: absolute; inset: 0; border-radius: 50%; background: #22c55e; animation: af-ping 1.8s ease-out infinite; }

@keyframes af-spin { to { --af-angle: 360deg; } }
@keyframes af-fade { to { opacity: 1; } }
@keyframes af-reveal { to { clip-path: inset(0 0 0 0 round 28px); } }
@keyframes af-zoom { to { transform: scale(1); } }
@keyframes af-plate-in { to { opacity: 1; transform: translate3d(18px, 18px, -30px); } }
@keyframes af-glow-in { to { opacity: .35; } }
@keyframes af-breathe { 0%, 100% { opacity: .3; transform: scale(1); } 50% { opacity: .5; transform: scale(1.06); } }
@keyframes af-chip-in { from { opacity: 0; transform: translate3d(-16px, 12px, 60px) scale(.9); } to { opacity: 1; transform: translate3d(0, 0, 60px) scale(1); } }
@keyframes af-float { 0%, 100% { translate: 0 0; } 50% { translate: 0 -8px; } }
@keyframes af-ping { 0% { transform: scale(1); opacity: .7; } 100% { transform: scale(3); opacity: 0; } }

@media (prefers-reduced-motion: reduce) {
  .af-tilt { transition: none; transform: none; }
  .af-glow, .af-plate, .af-ring-base, .af-ring, .af-photo, .af-img, .af-chip, .af-dot::after { animation: none !important; }
  .af-glow { opacity: .3; }
  .af-plate { opacity: 1; transform: translate3d(18px, 18px, -30px); }
  .af-ring-base, .af-ring, .af-chip { opacity: 1; transform: none; }
  .af-photo { clip-path: none; }
  .af-img { transform: none; }
}
`

interface AvatarFrameProps {
  src: string
  alt: string
  dark: boolean
  badge: string
}

function AvatarFrame({ src, alt, dark, badge }: AvatarFrameProps) {
  const ref = useRef<HTMLDivElement>(null)

  const vars = {
    '--af-line': dark ? 'rgba(255,255,255,.14)' : 'rgba(33,150,243,.25)',
    '--af-photo-bg': dark ? '#0d263d' : '#e8f1fd',
    '--af-chip-bg': dark ? 'rgba(7,26,43,.72)' : 'rgba(255,255,255,.78)',
    '--af-chip-fg': dark ? '#ffffff' : '#0d1b2a',
  } as CSSProperties

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.classList.add('is-moving')
    el.style.setProperty('--af-ry', `${(x - 0.5) * 14}deg`)
    el.style.setProperty('--af-rx', `${(0.5 - y) * 14}deg`)
    el.style.setProperty('--af-gx', `${x * 100}%`)
    el.style.setProperty('--af-gy', `${y * 100}%`)
    el.style.setProperty('--af-glare', '0.5')
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.classList.remove('is-moving')
    el.style.setProperty('--af-rx', '0deg')
    el.style.setProperty('--af-ry', '0deg')
    el.style.setProperty('--af-glare', '0')
  }

  return (
    <div ref={ref} className="af" style={vars} onPointerMove={onMove} onPointerLeave={onLeave}>
      <style>{avatarCss}</style>
      <div className="af-tilt">
        <div className="af-glow" />
        <div className="af-plate" />
        <div className="af-ring-base" />
        <div className="af-ring" />
        <div className="af-photo">
          <img src={src} alt={alt} className="af-img" />
          <div className="af-tint" />
          <div className="af-glare" />
        </div>
        <div className="af-chip">
          <span className="af-dot" />
          {badge}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Styles + animation cho phần chữ (tự chứa)                           */
/* ------------------------------------------------------------------ */

const heroCss = `
/* Nền trang trí */
.hr-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
.hr-blob { position: absolute; border-radius: 50%; filter: blur(90px); }
.hr-blob-a { width: 440px; height: 440px; top: -140px; left: -120px; background: var(--hr-blob-a); animation: hr-drift 16s ease-in-out infinite alternate; }
.hr-blob-b { width: 380px; height: 380px; bottom: -140px; right: -100px; background: var(--hr-blob-b); animation: hr-drift 21s ease-in-out infinite alternate-reverse; }
.hr-dots {
  position: absolute; inset: 0; background-image: radial-gradient(var(--hr-dot) 1px, transparent 1.3px); background-size: 26px 26px;
  -webkit-mask-image: radial-gradient(ellipse at 72% 45%, #000 0, transparent 68%);
  mask-image: radial-gradient(ellipse at 72% 45%, #000 0, transparent 68%);
}

/* Hiệu ứng dùng chung */
.hr-up { opacity: 0; transform: translateY(18px); animation: hr-up .8s var(--d, 0s) cubic-bezier(.2, .8, .2, 1) forwards; }
.hr-blur-up { opacity: 0; transform: translateY(14px); filter: blur(8px); animation: hr-blur-up 1s var(--d, 0s) cubic-bezier(.2, .8, .2, 1) forwards; }

/* Eyebrow: vạch kẻ chạy ra rồi chữ hiện */
.hr-eyebrow { display: inline-flex; align-items: center; gap: 12px; font: 700 14px/1.3 'Inter', sans-serif; letter-spacing: .02em; color: #2196f3; }
.hr-eyebrow-line { display: block; width: 0; height: 2px; border-radius: 2px; background: #2196f3; animation: hr-line .8s .1s cubic-bezier(.2, .8, .2, 1) forwards; }

/* Tên: từng từ trượt lên từ sau mặt nạ */
.hr-name { font: 800 clamp(34px, 5vw, 56px)/1.1 'Inter', sans-serif; color: var(--hr-text); overflow-wrap: anywhere; }
.hr-mask { display: inline-block; overflow: hidden; vertical-align: top; padding: .4em .06em .2em; margin: -.4em -.06em -.2em; }
.hr-word { display: inline-block; padding: .36em 0 .18em; margin: -.36em 0 -.18em; transform: translateY(115%); animation: hr-word .95s calc(var(--d, 0s) + var(--w) * 90ms) cubic-bezier(.2, .8, .2, 1) forwards; }
.hr-grad {
  background: linear-gradient(90deg, var(--hr-g1), var(--hr-g2), var(--hr-g1)); background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent;
  animation: hr-word .95s calc(var(--d, 0s) + var(--w) * 90ms) cubic-bezier(.2, .8, .2, 1) forwards, hr-shift 6s linear infinite;
}

/* Phụ đề: từng từ hiện rõ dần */
.hr-sub { font: italic 600 clamp(17px, 2.2vw, 20px)/1.4 'Inter', sans-serif; color: var(--hr-text); overflow-wrap: anywhere; }
.hr-fw { display: inline-block; opacity: 0; transform: translateY(8px); filter: blur(6px); animation: hr-fw .7s calc(var(--d, 0s) + var(--w) * 50ms) ease-out forwards; }

.hr-bio { font: 400 16px/1.7 'Inter', sans-serif; color: var(--hr-sub); max-width: 62ch; }

/* Bảng thông tin */
.hr-panel {
  display: grid; grid-template-columns: 1fr; gap: 2px 20px; padding: 10px; border-radius: 22px;
  background: var(--hr-panel); border: 1px solid var(--hr-border); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
}
@media (min-width: 640px) { .hr-panel { grid-template-columns: 1fr 1fr; } }
.hr-col { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.hr-info {
  display: flex; align-items: center; gap: 12px; min-width: 0; padding: 10px 12px; border-radius: 14px; text-decoration: none;
  transition: background .3s ease, transform .35s cubic-bezier(.2, .8, .2, 1);
}
.hr-info:hover { background: var(--hr-hover); transform: translateX(4px); }
.hr-info-icon {
  display: grid; place-items: center; flex-shrink: 0; width: 36px; height: 36px; border-radius: 11px; background: var(--hr-icon-bg);
  transition: transform .4s cubic-bezier(.2, 1.2, .4, 1);
}
.hr-info:hover .hr-info-icon { transform: scale(1.1) rotate(-6deg); }
.hr-info-label { font: 500 11px/1.2 'Inter', sans-serif; text-transform: uppercase; letter-spacing: .04em; color: var(--hr-sub); }
.hr-info-value { margin-top: 2px; font: 600 14px/1.35 'Inter', sans-serif; color: var(--hr-text); overflow-wrap: anywhere; }

/* Nút */
.hr-btn {
  position: relative; overflow: hidden; display: inline-flex; align-items: center; gap: 10px; padding: 14px 24px; border-radius: 14px;
  font: 600 15px/1 'Inter', sans-serif; cursor: pointer; transition: transform .3s cubic-bezier(.2, .8, .2, 1), box-shadow .3s ease, color .3s ease;
}
.hr-btn > * { position: relative; z-index: 1; }
.hr-btn svg { transition: transform .35s cubic-bezier(.2, .8, .2, 1); }
.hr-btn:hover svg { transform: translateX(4px); }
.hr-btn:hover { transform: translateY(-2px); }
.hr-btn:active { transform: translateY(0); }
.hr-btn:focus-visible { outline: 2px solid #2196f3; outline-offset: 3px; }

.hr-btn-primary { color: #fff; background: #2196f3; border: 1.5px solid #2196f3; box-shadow: 0 10px 24px -12px rgba(33, 150, 243, .8); }
.hr-btn-primary:hover { background: #1976d2; border-color: #1976d2; box-shadow: 0 16px 30px -12px rgba(33, 150, 243, .9); }
.hr-btn-primary::before {
  content: ''; position: absolute; inset: 0; z-index: 0; transform: translateX(-120%);
  background: linear-gradient(105deg, transparent 30%, rgba(255, 255, 255, .35) 50%, transparent 70%); transition: transform .8s ease;
}
.hr-btn-primary:hover::before { transform: translateX(120%); }

.hr-btn-ghost { color: #2196f3; background: transparent; border: 1.5px solid #2196f3; }
.hr-btn-ghost::before {
  content: ''; position: absolute; inset: 0; z-index: 0; background: rgba(33, 150, 243, .12);
  transform: scaleX(0); transform-origin: left; transition: transform .45s cubic-bezier(.2, .8, .2, 1);
}
.hr-btn-ghost:hover::before { transform: scaleX(1); }

@keyframes hr-up { to { opacity: 1; transform: translateY(0); } }
@keyframes hr-blur-up { to { opacity: 1; transform: translateY(0); filter: blur(0); } }
@keyframes hr-line { to { width: 36px; } }
@keyframes hr-word { to { transform: translateY(0); } }
@keyframes hr-fw { to { opacity: 1; transform: translateY(0); filter: blur(0); } }
@keyframes hr-shift { to { background-position: -200% 0; } }
@keyframes hr-drift { from { transform: translate3d(0, 0, 0) scale(1); } to { transform: translate3d(50px, 30px, 0) scale(1.12); } }

@media (prefers-reduced-motion: reduce) {
  .hr-up, .hr-blur-up, .hr-fw { opacity: 1; transform: none; filter: none; animation: none; }
  .hr-word { transform: none; animation: none; }
  .hr-grad { transform: none; animation: none; }
  .hr-eyebrow-line { width: 36px; animation: none; }
  .hr-blob-a, .hr-blob-b { animation: none; }
  .hr-info, .hr-info-icon, .hr-btn, .hr-btn svg { transition: none; }
}
`

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

interface InfoItem {
  icon: ReactNode
  label: string
  value: string
  href?: string
}

const splitWords = (s: string) => (s ? s.trim().split(/\s+/) : [])

/* ------------------------------------------------------------------ */
/* HeroSection                                                         */
/* ------------------------------------------------------------------ */

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
    lang === 'en' ? me?.position || tr.position : me?.positionVI || me?.position || tr.position
  const name = me?.fullName || tr.name || 'TRAN THI THUY HIEN'
  const subtitle =
    lang === 'en' ? me?.subtitle || tr.subtitle : me?.subtitleVI || me?.subtitle || tr.subtitle
  const bio = lang === 'en' ? me?.bio || tr.bio : me?.bioVI || me?.bio || tr.bio

  const genderValue = me ? (me.gender === 'Female' && lang === 'vi' ? 'Nữ' : me.gender) : 'Female'
  const badge = tr.available || (lang === 'vi' ? 'Sẵn sàng làm việc' : 'Open to work')

  const email = me?.email || 'thuyhien2005lv@gmail.com'
  const phone = me?.phoneNumber || '0978 910 289'
  const linkedin = me?.linkedin || 'linkedin.com/in/hintran'

  const infoItems: InfoItem[] = [
    {
      icon: <CalendarIcon color={infoColor} />,
      label: tr.birth,
      value: me?.birthDate || '07/09/2005',
    },
    { icon: <VenusIcon color={infoColor} />, label: tr.gender, value: genderValue },
    {
      icon: <MailIcon16 color={infoColor} />,
      label: tr.email,
      value: email,
      href: `mailto:${email}`,
    },
  ]
  const infoItems2: InfoItem[] = [
    {
      icon: <PhoneIcon16 color={infoColor} />,
      label: tr.phone,
      value: phone,
      href: `tel:${String(phone).replace(/\s+/g, '')}`,
    },
    {
      icon: <MapPinIcon color={infoColor} />,
      label: lang === 'vi' ? 'Địa chỉ' : 'Address',
      value:
        me?.address ||
        (lang === 'vi' ? 'phường Ninh Kiều, thành phố Cần Thơ' : 'Ninh Kieu, Can Tho City'),
    },
    {
      icon: <LinkedinIcon16 color={infoColor} />,
      label: tr.linkedin,
      value: linkedin,
      href: /^https?:\/\//.test(linkedin) ? linkedin : `https://${linkedin}`,
    },
  ]

  const bg = dark ? 'bg-[#081c2c]' : 'bg-[#dbeafe]'

  const vars = {
    '--hr-text': dark ? '#ffffff' : '#0d1b2a',
    '--hr-sub': dark ? '#b8c7d9' : '#4b5563',
    '--hr-panel': dark ? 'rgba(13,38,61,0.6)' : 'rgba(255,255,255,0.6)',
    '--hr-border': dark ? 'rgba(255,255,255,0.08)' : 'rgba(33,150,243,0.16)',
    '--hr-hover': dark ? 'rgba(33,150,243,0.12)' : 'rgba(33,150,243,0.09)',
    '--hr-icon-bg': dark ? 'rgba(33,150,243,0.15)' : 'rgba(33,150,243,0.12)',
    '--hr-g1': dark ? '#42a5f5' : '#1976d2',
    '--hr-g2': dark ? '#90caf9' : '#42a5f5',
    '--hr-blob-a': dark ? 'rgba(33,150,243,0.28)' : 'rgba(33,150,243,0.22)',
    '--hr-blob-b': dark ? 'rgba(100,181,246,0.2)' : 'rgba(100,181,246,0.3)',
    '--hr-dot': dark ? 'rgba(144,202,249,0.2)' : 'rgba(33,150,243,0.28)',
  } as CSSProperties

  const nameWords = splitWords(name)
  const subWords = splitWords(subtitle)

  const renderCol = (items: InfoItem[], offset: number) => (
    <div className="hr-col">
      {items.map(({ icon, label, value, href }, i) => {
        const Wrapper: any = href ? 'a' : 'div'
        const extra = href
          ? {
              href,
              ...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
            }
          : {}
        return (
          <Wrapper
            key={label}
            className="hr-info hr-up"
            style={{ '--d': `${1.05 + (offset + i) * 0.07}s` } as CSSProperties}
            {...extra}
          >
            <span className="hr-info-icon">{icon}</span>
            <span className="min-w-0">
              <p className="hr-info-label">{label}</p>
              <p className="hr-info-value">{value}</p>
            </span>
          </Wrapper>
        )
      })}
    </div>
  )

  return (
    <section id="info" className={`${bg} pt-16 overflow-x-clip relative isolate`} style={vars}>
      <style>{heroCss}</style>

      <div className="hr-bg" aria-hidden="true">
        <span className="hr-blob hr-blob-a" />
        <span className="hr-blob hr-blob-b" />
        <span className="hr-dots" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center px-5 sm:px-6 lg:px-30 py-12 sm:py-16 lg:py-20 max-w-[1440px] mx-auto">
        {/* Avatar */}
        <AvatarFrame
          src={me?.profileImage || (dark ? imgAvatarDark : imgAvatarLight)}
          alt={name}
          dark={dark}
          badge={badge}
        />

        {/* Copy */}
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <div className="flex flex-col gap-3">
            <p className="hr-eyebrow">
              <span className="hr-eyebrow-line" />
              <span className="hr-up" style={{ '--d': '.25s' } as CSSProperties}>
                {position}
              </span>
            </p>

            <h1 className="hr-name" aria-label={name}>
              {nameWords.map((w, i) => (
                <span key={`${w}-${i}`} aria-hidden="true">
                  {i > 0 && ' '}
                  <span className="hr-mask">
                    <span
                      className={`hr-word ${i === nameWords.length - 1 ? 'hr-grad' : ''}`}
                      style={{ '--w': i, '--d': '.3s' } as CSSProperties}
                    >
                      {w}
                    </span>
                  </span>
                </span>
              ))}
            </h1>

            <p key={`sub-${lang}`} className="hr-sub" aria-label={subtitle}>
              {subWords.map((w, i) => (
                <span key={`${w}-${i}`} aria-hidden="true">
                  {i > 0 && ' '}
                  <span className="hr-fw" style={{ '--w': i, '--d': '.75s' } as CSSProperties}>
                    {w}
                  </span>
                </span>
              ))}
            </p>
          </div>

          <p
            key={`bio-${lang}`}
            className="hr-bio hr-blur-up"
            style={{ '--d': '.95s' } as CSSProperties}
          >
            {bio}
          </p>

          {/* Info grid */}
          <div className="hr-panel">
            {renderCol(infoItems, 0)}
            {renderCol(infoItems2, 3)}
          </div>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <button
              type="button"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="hr-btn hr-btn-primary hr-up"
              style={{ '--d': '1.5s' } as CSSProperties}
            >
              <span>{tr.viewProjects}</span>
              <ArrowRight />
            </button>
            <button
              type="button"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="hr-btn hr-btn-ghost hr-up"
              style={{ '--d': '1.6s' } as CSSProperties}
            >
              <span>{tr.contactMe}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

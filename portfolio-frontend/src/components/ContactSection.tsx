import { useState, type FormEvent } from 'react'
import type { Lang } from '../types'
import { MailIcon18, PhoneIcon18, LinkedinIcon18, GithubIcon18 } from './icons'
import { SectionTitle } from '../shared/SectionTitle'

interface ContactSectionProps {
  dark: boolean
  lang: Lang
  me: any
  t: any
}

export function ContactSection({ dark, lang, me, t }: ContactSectionProps) {
  const tr = t[lang].contact
  const bg = dark ? 'bg-[#071a2b]' : 'bg-white'
  const textPrimary = dark ? 'text-white' : 'text-[#0d1b2a]'
  const textSecondary = dark ? 'text-[#b8c7d9]' : 'text-[#4b5563]'
  const inputBg = dark
    ? 'bg-[#0d263d] border-[#1a3a5c] text-white placeholder-[#b8c7d9]'
    : 'bg-white border-[#e2e8f0] text-[#0d1b2a] placeholder-[#9ca3af]'
  const labelColor = dark ? 'text-white' : 'text-[#0d1b2a]'
  const iconBg = dark ? 'bg-[rgba(33,150,243,0.15)]' : 'bg-[rgba(33,150,243,0.1)]'
  const iconColor = '#2196f3'

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = tr.required
    if (!form.email.trim()) e.email = tr.required
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = tr.invalidEmail
    if (!form.message.trim()) e.message = tr.required
    return e
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const contactItems = [
    {
      icon: <MailIcon18 color={iconColor} />,
      label: tr.emailLabel,
      value: me?.email || 'thuyhien2005lv@gmail.com',
      href: `mailto:${me?.email || 'thuyhien2005lv@gmail.com'}`,
    },
    {
      icon: <PhoneIcon18 color={iconColor} />,
      label: tr.phoneLabel,
      value: me?.phoneNumber || '0978 910 289',
      href: `tel:${(me?.phoneNumber || '0978 910 289').replace(/[^\d+]/g, '')}`,
    },
    {
      icon: <LinkedinIcon18 color={iconColor} />,
      label: tr.linkedinLabel,
      value: me?.linkedin || 'linkedin.com/in/hintran',
      href: `https://${(me?.linkedin || 'linkedin.com/in/hintran').replace(/^https?:\/\//, '')}`,
    },
    {
      icon: <GithubIcon18 color={iconColor} />,
      label: tr.githubLabel,
      value: me?.github || 'github.com/hintran',
      href: `https://${(me?.github || 'github.com/hintran').replace(/^https?:\/\//, '')}`,
    },
  ]

  return (
    <section id="contact" className={`${bg} py-24`}>
      <div className="px-6 lg:px-[120px] max-w-[1440px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-center gap-3">
          <SectionTitle title={tr.title} dark={dark} />
          <p
            className={`font-normal text-[16px] leading-[1.5] text-center font-['Inter',sans-serif] ${textSecondary}`}
          >
            {tr.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: contact info */}
          <div className="flex flex-col gap-8">
            {contactItems.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex min-w-0 gap-4 items-center rounded-2xl p-2 -m-2 transition-colors hover:bg-[rgba(33,150,243,0.08)]"
              >
                <div
                  className={`${iconBg} flex items-center justify-center rounded-[20px] size-[40px] flex-shrink-0`}
                >
                  {icon}
                </div>
                <div className="min-w-0">
                  <p
                    className={`font-normal text-[12px] font-['Inter',sans-serif] ${textSecondary}`}
                  >
                    {label}
                  </p>
                  <p
                    className={`font-semibold text-[15px] font-['Inter',sans-serif] ${textPrimary}`}
                  >
                    <span className="break-words group-hover:text-[#2196f3] transition-colors">
                      {value}
                    </span>
                  </p>
                </div>
              </a>
            ))}
          </div>
          {/* Right: form */}
          {submitted ? (
            <div
              className={`flex flex-col items-center justify-center gap-4 p-10 rounded-[16px] ${dark ? 'bg-[#0d263d] border border-[#1a3a5c]' : 'bg-[#f0f9ff] border border-[#90caf9]'}`}
            >
              <div className="text-[48px]">✉️</div>
              <p
                className={`font-bold text-[22px] text-center font-['Inter',sans-serif] ${textPrimary}`}
              >
                {tr.successTitle}
              </p>
              <p className={`text-[15px] text-center font-['Inter',sans-serif] ${textSecondary}`}>
                {tr.successMsg}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              <div className="flex flex-col gap-2">
                <label
                  className={`font-medium text-[14px] font-['Inter',sans-serif] ${labelColor}`}
                >
                  {tr.nameLabel}
                </label>
                <input
                  type="text"
                  placeholder={tr.namePlaceholder}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`${inputBg} border rounded-[8px] p-[14px] text-[14px] font-['Inter',sans-serif] outline-none focus:border-[#2196f3] transition-colors w-full`}
                />
                {errors.name && (
                  <p className="text-red-400 text-[13px] font-['Inter',sans-serif]">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className={`font-medium text-[14px] font-['Inter',sans-serif] ${labelColor}`}
                >
                  {tr.emailField}
                </label>
                <input
                  type="email"
                  placeholder={tr.emailPlaceholder}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`${inputBg} border rounded-[8px] p-[14px] text-[14px] font-['Inter',sans-serif] outline-none focus:border-[#2196f3] transition-colors w-full`}
                />
                {errors.email && (
                  <p className="text-red-400 text-[13px] font-['Inter',sans-serif]">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className={`font-medium text-[14px] font-['Inter',sans-serif] ${labelColor}`}
                >
                  {tr.messageLabel}
                </label>
                <textarea
                  placeholder={tr.messagePlaceholder}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className={`${inputBg} border rounded-[8px] p-[14px] text-[14px] font-['Inter',sans-serif] outline-none focus:border-[#2196f3] transition-colors w-full resize-none`}
                />
                {errors.message && (
                  <p className="text-red-400 text-[13px] font-['Inter',sans-serif]">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#2196f3] hover:bg-[#1976d2] active:bg-[#1565c0] text-white font-semibold text-[15px] py-[14px] rounded-[12px] font-['Inter',sans-serif] transition-colors w-full"
              >
                {tr.send} ✈️
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

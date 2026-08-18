import type { ReactNode } from 'react'

interface SkillChipProps {
  icon: ReactNode
  label: string
  dark: boolean
}

export function SkillChip({ icon, label, dark }: SkillChipProps) {
  return (
    <div
      className={`flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 transition-transform hover:scale-105 cursor-default ${
        dark ? 'bg-[#0d263d] border border-[#1a3a5c]' : 'bg-white border border-[#e2e8f0] drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)]'
      }`}
    >
      {icon}
      <p className={`font-medium text-[14px] whitespace-nowrap font-['Inter',sans-serif] ${dark ? 'text-[#b8c7d9]' : 'text-[#0d1b2a]'}`}>{label}</p>
    </div>
  )
}

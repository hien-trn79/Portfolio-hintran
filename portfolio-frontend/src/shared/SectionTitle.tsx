interface SectionTitleProps {
  title: string
  dark: boolean
  centered?: boolean
}

export function SectionTitle({ title, dark, centered = true }: SectionTitleProps) {
  return (
    <div className={`flex flex-col gap-[8px] items-${centered ? 'center' : 'start'}`}>
      <p className={`font-extrabold text-[32px] leading-[1.2] font-['Inter',sans-serif] ${dark ? 'text-white' : 'text-[#0d1b2a]'}`}>{title}</p>
      <div className={`bg-[#2196f3] h-[4px] rounded-[2px] w-[64px]`} />
    </div>
  )
}

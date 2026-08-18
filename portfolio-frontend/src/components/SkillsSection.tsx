import type { Lang } from '../types'
import {
  CircleXIcon,
  CodeIcon,
  TerminalIcon,
  FileCodeIcon,
  TextSelectIcon,
  FlashlightIcon,
  RouteIcon,
  CoffeeIcon,
  LeafIcon,
  ShieldIcon,
  ServerIcon16,
  DatabaseIcon16,
  MapIcon,
  GitBranchIcon,
  GithubIcon16Skill,
  LaptopIcon,
} from './icons'
import { SectionTitle } from '../shared/SectionTitle'
import { SkillChip } from '../shared/SkillChip'
import { Braces } from 'lucide-react'

interface SkillsSectionProps {
  dark: boolean
  lang: Lang
  skills: any[] | null
  t: any
}

function getSkillIcon(name: string, color: string) {
  const n = name.toLowerCase()
  if (n.includes('reactjs') || n.includes('react js')) return <CircleXIcon color={color} />
  if (n.includes('typescript') || n.includes('ts')) return <CodeIcon color={color} />
  if (n.includes('javascript') || n.includes('js')) return <TerminalIcon color={color} />
  if (n.includes('html')) return <FileCodeIcon color={color} />
  if (n.includes('tailwindcss') || n.includes('tailwind')) return <TextSelectIcon color={color} />
  if (n.includes('vite')) return <FlashlightIcon color={color} />
  if (n.includes('react router')) return <RouteIcon color={color} />
  if (n.includes('java') && !n.includes('javascript')) return <CoffeeIcon color={color} />
  if (n.includes('spring boot')) return <LeafIcon color={color} />
  if (n.includes('spring security')) return <ShieldIcon color={color} />
  if (n.includes('node')) return <ServerIcon16 color={color} />
  if (n.includes('postgres') || n.includes('mysql') || n.includes('mongo') || n.includes('sql'))
    return <DatabaseIcon16 color={color} />
  if (n.includes('postgis') || n.includes('qgis') || n.includes('gis') || n.includes('map'))
    return <MapIcon color={color} />
  if (n.includes('git') && !n.includes('github')) return <GitBranchIcon color={color} />
  if (n.includes('github')) return <GithubIcon16Skill color={color} />
  if (n.includes('intellij')) return <LaptopIcon color={color} />
  if (n.includes('c') && n.length === 1) return <Braces color={color} />
  return <CodeIcon color={color} />
}

export function SkillsSection({ dark, lang, skills, t }: SkillsSectionProps) {
  const tr = t[lang].skills
  const bg = dark ? 'bg-[#071a2b]' : 'bg-white'
  const catBg = dark ? 'bg-[#0d263d] border border-[#1a3a5c]' : 'bg-[#f8fafc]'
  const catLabel = dark ? 'text-[#90caf9]' : 'text-[#2196f3]'
  const iconColor = dark ? '#90caf9' : '#2196f3'

  const categories =
    skills && skills.length > 0
      ? skills.map((c) => ({
          label: c.category,
          chips: c.skills.map((s: string) => ({
            icon: getSkillIcon(s, iconColor),
            label: s,
          })),
        }))
      : [
          {
            label: 'Frontend',
            chips: [
              { icon: <CircleXIcon color={iconColor} />, label: 'ReactJS' },
              { icon: <CodeIcon color={iconColor} />, label: 'TypeScript' },
              { icon: <TerminalIcon color={iconColor} />, label: 'JavaScript' },
              { icon: <FileCodeIcon color={iconColor} />, label: 'HTML' },
              { icon: <CodeIcon color={iconColor} />, label: 'CSS' },
              { icon: <TextSelectIcon color={iconColor} />, label: 'Tailwind CSS' },
              { icon: <FlashlightIcon color={iconColor} />, label: 'Vite' },
              { icon: <RouteIcon color={iconColor} />, label: 'React Router' },
            ],
          },
          {
            label: 'Backend',
            chips: [
              { icon: <CoffeeIcon color={iconColor} />, label: 'Java' },
              { icon: <LeafIcon color={iconColor} />, label: 'Spring Boot' },
              { icon: <ShieldIcon color={iconColor} />, label: 'Spring Security' },
              { icon: <ServerIcon16 color={iconColor} />, label: 'Node.js' },
            ],
          },
          {
            label: 'Database',
            chips: [
              { icon: <DatabaseIcon16 color={iconColor} />, label: 'PostgreSQL' },
              { icon: <DatabaseIcon16 color={iconColor} />, label: 'MySQL' },
              { icon: <DatabaseIcon16 color={iconColor} />, label: 'MongoDB' },
              { icon: <MapIcon color={iconColor} />, label: 'PostGIS' },
            ],
          },
          {
            label: 'Tools',
            chips: [
              { icon: <GitBranchIcon color={iconColor} />, label: 'Git' },
              { icon: <GithubIcon16Skill color={iconColor} />, label: 'GitHub' },
              { icon: <CodeIcon color={iconColor} />, label: 'VS Code' },
              { icon: <LaptopIcon color={iconColor} />, label: 'IntelliJ IDEA' },
              { icon: <CodeIcon color={iconColor} />, label: 'Postman' },
              { icon: <MapIcon color={iconColor} />, label: 'QGIS' },
            ],
          },
          {
            label: 'Languages',
            chips: [
              { icon: <CoffeeIcon color={iconColor} />, label: 'Java' },
              { icon: <TerminalIcon color={iconColor} />, label: 'JavaScript' },
              { icon: <CodeIcon color={iconColor} />, label: 'TypeScript' },
              { icon: <DatabaseIcon16 color={iconColor} />, label: 'SQL' },
              { icon: <Braces color={iconColor} />, label: 'C' },
            ],
          },
        ]

  return (
    <section id="skills" className={`${bg} py-24`}>
      <div className="px-6 lg:px-[120px] max-w-[1440px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-center">
          <SectionTitle title={tr.title} dark={dark} />
        </div>
        <div className="flex flex-col gap-8">
          {/* Row 1: First 2 categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.slice(0, 2).map(({ label, chips }) => (
              <div key={label} className={`${catBg} rounded-[20px] p-8 flex flex-col gap-4`}>
                <p
                  className={`font-bold text-[16px] uppercase font-['Inter',sans-serif] ${catLabel}`}
                >
                  {label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {chips.map(({ icon, label: chipLabel }) => (
                    <SkillChip key={chipLabel} icon={icon} label={chipLabel} dark={dark} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Row 2: Remaining categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.slice(2).map(({ label, chips }) => (
              <div key={label} className={`${catBg} rounded-[20px] p-8 flex flex-col gap-4`}>
                <p
                  className={`font-bold text-[16px] uppercase font-['Inter',sans-serif] ${catLabel}`}
                >
                  {label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {chips.map(({ icon, label: chipLabel }) => (
                    <SkillChip key={chipLabel} icon={icon} label={chipLabel} dark={dark} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


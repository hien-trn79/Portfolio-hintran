import svgDark from '../imports/DesktopDarkTop/svg-53720vj8i3'
import svgLight from '../imports/DesktopLightBottom/svg-1dy3ysiimm'

// ─── Generic / Nav icons (svgDark paths) ───────────────────────────────────
export function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.22 3.22l1.06 1.06M11.72 11.72l1.06 1.06M3.22 12.78l1.06-1.06M11.72 4.28l1.06-1.06"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function MoonIcon({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgDark.p7595a80} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}

export function CalendarIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgDark.p58fbb00} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function VenusIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgDark.pb11d8c0} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function MailIcon16({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgDark.p10d0c00} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function PhoneIcon16({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" clipRule="evenodd">
      <g clipPath="url(#ph16)">
        <path d={svgDark.p29098400} stroke={color} strokeLinecap="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="ph16">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export function MapPinIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgDark.p8b99100} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function LinkedinIcon16({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgDark.p198c9b00} stroke={color} strokeLinecap="round" strokeWidth="2" />
      <path d={svgDark.p18ae2552} stroke={color} strokeLinecap="round" strokeWidth="2" />
      <path d={svgDark.p33fd2780} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function LayoutIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={svgDark.p12ce9300} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function ServerIcon24({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={svgDark.p75fde00} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function DatabaseIcon24({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={svgDark.p37d79c40} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function GradCapIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d={svgDark.p2c3f6600} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function MailIcon18({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d={svgDark.pd3d5900} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function PhoneIcon18({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" clipRule="evenodd">
      <g clipPath="url(#ph18)">
        <path d={svgDark.p2a029800} stroke={color} strokeLinecap="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="ph18">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export function LinkedinIcon18({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d={svgDark.p19a5ee80} stroke={color} strokeLinecap="round" strokeWidth="2" />
      <path d={svgDark.p104b6a40} stroke={color} strokeLinecap="round" strokeWidth="2" />
      <path d={svgDark.p376a7880} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function GithubIcon18({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d={svgDark.p32832dc0} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function ArrowUpIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgDark.p271e8680} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function GithubIcon16Footer({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgDark.p35351800} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}

// ─── Skill chip icons (svgLight paths) ─────────────────────────────────────
export function CodeIcon({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" clipRule="evenodd">
      <g clipPath="url(#ci)">
        <path d={svgLight.p15a2a800} stroke={color} strokeLinecap="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="ci">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export function TerminalIcon({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgLight.p18863120} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function FileCodeIcon({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgLight.p192f1e00} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function TextSelectIcon({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgLight.p2f27ddc0} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function FlashlightIcon({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgLight.p3cb59600} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function RouteIcon({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgLight.p2c576c00} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function CircleXIcon({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" clipRule="evenodd">
      <g clipPath="url(#cx)">
        <path d={svgLight.p30250f00} stroke={color} strokeLinecap="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="cx">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export function CoffeeIcon({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgLight.p2aeb6fc0} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function LeafIcon({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" clipRule="evenodd">
      <g clipPath="url(#li)">
        <path d={svgLight.p8c44400} stroke={color} strokeLinecap="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="li">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export function ShieldIcon({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgLight.pae18800} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function ServerIcon16({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" clipRule="evenodd">
      <g clipPath="url(#si)">
        <path d={svgLight.p323db200} stroke={color} strokeLinecap="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="si">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export function DatabaseIcon16({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgLight.p1edebd00} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function MapIcon({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgLight.p26772680} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function GitBranchIcon({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgLight.p31ad68f0} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function GithubIcon16Skill({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgLight.p35351800} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
export function LaptopIcon({ color = '#2196F3' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgLight.p38365380} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}

import svgPaths from "./svg-t0o19o9p5t";
import imgAvatar from "./eba5d5043177312d16ba4e17cc3d8af6e3ca9f48.png";

function NavLinkInfo() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="nav-link-Info">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[15px] whitespace-nowrap">Info</p>
    </div>
  );
}

function NavLinkEducation() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="nav-link-Education">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[15px] whitespace-nowrap">Education</p>
    </div>
  );
}

function NavLinkSkills() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="nav-link-Skills">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[15px] whitespace-nowrap">Skills</p>
    </div>
  );
}

function NavLinkProjects() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="nav-link-Projects">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[15px] whitespace-nowrap">Projects</p>
    </div>
  );
}

function NavLinkContact() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="nav-link-Contact">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[15px] whitespace-nowrap">Contact</p>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="nav-links">
      <NavLinkInfo />
      <NavLinkEducation />
      <NavLinkSkills />
      <NavLinkProjects />
      <NavLinkContact />
    </div>
  );
}

function LangEn() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="lang-en">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[12px] whitespace-nowrap">EN</p>
    </div>
  );
}

function LangVi() {
  return (
    <div className="content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="lang-vi">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap">VI</p>
    </div>
  );
}

function LangSwitcher() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex h-[32px] items-center p-[2px] relative rounded-[16px] shrink-0" data-name="lang-switcher">
      <LangEn />
      <LangVi />
    </div>
  );
}

function Sun() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="sun">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_25)" id="sun">
          <path d={svgPaths.p37a9e280} id="Vector" stroke="#0D1B2A" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_25">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ThemeToggle() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="theme-toggle">
      <Sun />
    </div>
  );
}

function Switchers() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="switchers">
      <LangSwitcher />
      <ThemeToggle />
    </div>
  );
}

function NavControls() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="nav-controls">
      <NavLinks />
      <Switchers />
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-white content-stretch flex h-[64px] items-center justify-between px-[120px] relative shrink-0 w-full" data-name="navbar">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#0d47a1] text-[22px] whitespace-nowrap">HinTran</p>
      <NavControls />
    </div>
  );
}

function AvatarWrapper() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[310px]" data-name="avatar-wrapper">
      <div className="absolute bg-[#2196f3] blur-[12px] left-[15px] opacity-25 rounded-[32px] size-[280px] top-[15px]" data-name="avatar-glow" />
      <div className="h-[401px] pointer-events-none relative rounded-[24px] shrink-0 w-full" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full" src={imgAvatar} />
        <div aria-hidden className="absolute border-2 border-[rgba(33,150,243,0.19)] border-solid inset-0 rounded-[24px]" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2196f3] text-[14px] tracking-[2px] whitespace-nowrap">FULLSTACK DEVELOPER</p>
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold min-w-full relative shrink-0 text-[#0d1b2a] text-[48px] w-[min-content]">TRẦN THỊ THÚY HIỀN</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#4b5563] text-[20px] w-[min-content]">{`Software Engineering Student & Fullstack Developer`}</p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="calendar">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="calendar">
          <path d={svgPaths.p58fbb00} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconCircle() {
  return (
    <div className="bg-[rgba(33,150,243,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="icon-circle">
      <Calendar />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#4b5563] text-[12px] tracking-[0.12px] uppercase">Birth</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[#0d1b2a] text-[14px] text-ellipsis">7/9/2005</p>
    </div>
  );
}

function InfoItem() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="info-item">
      <IconCircle />
      <Frame2 />
    </div>
  );
}

function Venus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="venus">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="venus">
          <path d={svgPaths.pb11d8c0} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconCircle1() {
  return (
    <div className="bg-[rgba(33,150,243,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="icon-circle">
      <Venus />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#4b5563] text-[12px] tracking-[0.12px] uppercase">Gender</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[#0d1b2a] text-[14px] text-ellipsis">Female</p>
    </div>
  );
}

function InfoItem1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="info-item">
      <IconCircle1 />
      <Frame3 />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mail">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="mail">
          <path d={svgPaths.p10d0c00} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconCircle2() {
  return (
    <div className="bg-[rgba(33,150,243,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="icon-circle">
      <Mail />
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#4b5563] text-[12px] tracking-[0.12px] uppercase">Email</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[#0d1b2a] text-[14px] text-ellipsis">thuyhien2005lv@gmail.com</p>
    </div>
  );
}

function InfoItem2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="info-item">
      <IconCircle2 />
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Frame">
      <InfoItem />
      <InfoItem1 />
      <InfoItem2 />
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_23)" id="phone">
          <path d={svgPaths.p29098400} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_23">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconCircle3() {
  return (
    <div className="bg-[rgba(33,150,243,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="icon-circle">
      <Phone />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#4b5563] text-[12px] tracking-[0.12px] uppercase">Phone</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[#0d1b2a] text-[14px] text-ellipsis">0978 910 289</p>
    </div>
  );
}

function InfoItem3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="info-item">
      <IconCircle3 />
      <Frame6 />
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="map-pin">
          <path d={svgPaths.p8b99100} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconCircle4() {
  return (
    <div className="bg-[rgba(33,150,243,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="icon-circle">
      <MapPin />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#4b5563] text-[12px] tracking-[0.12px] uppercase">Address</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[#0d1b2a] text-[14px] text-ellipsis">Ninh Kieu, Can Tho City</p>
    </div>
  );
}

function InfoItem4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="info-item">
      <IconCircle4 />
      <Frame7 />
    </div>
  );
}

function Linkedin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="linkedin">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="linkedin">
          <g id="Vector">
            <path d={svgPaths.p198c9b00} stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p18ae2552} stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p33fd2780} stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconCircle5() {
  return (
    <div className="bg-[rgba(33,150,243,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="icon-circle">
      <Linkedin />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#4b5563] text-[12px] tracking-[0.12px] uppercase">LinkedIn</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[#0d1b2a] text-[14px] text-ellipsis">linkedin.com/in/hintran</p>
    </div>
  );
}

function InfoItem5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="info-item">
      <IconCircle5 />
      <Frame8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Frame">
      <InfoItem3 />
      <InfoItem4 />
      <InfoItem5 />
    </div>
  );
}

function InfoGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="info-grid">
      <Frame1 />
      <Frame5 />
    </div>
  );
}

function CtaFilled() {
  return (
    <div className="bg-[#2196f3] content-stretch flex items-center px-[24px] py-[14px] relative rounded-[12px] shrink-0" data-name="cta-filled">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">View My Projects</p>
    </div>
  );
}

function CtaOutlined() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[14px] relative rounded-[12px] shrink-0" data-name="cta-outlined">
      <div aria-hidden className="absolute border-[#2196f3] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[15px] whitespace-nowrap">Contact Me</p>
    </div>
  );
}

function CtaRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="cta-row">
      <CtaFilled />
      <CtaOutlined />
    </div>
  );
}

function HeroCopyColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="hero-copy-column">
      <Frame />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">I am a Software Engineering student passionate about building modern web applications, combining clean frontend experiences with reliable backend systems.</p>
      <InfoGrid />
      <CtaRow />
    </div>
  );
}

function HeroContainer() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-[1200px]" data-name="hero-container">
      <AvatarWrapper />
      <HeroCopyColumn />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-[#e3f2fd] content-stretch flex flex-col items-center opacity-95 px-[120px] py-[80px] relative shrink-0 w-full" data-name="hero-section">
      <HeroContainer />
    </div>
  );
}

function TitleGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="title-group">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[36px] text-center whitespace-nowrap">About Me</p>
      <div className="bg-[#2196f3] h-[4px] relative rounded-[2px] shrink-0 w-[60px]" data-name="accent-line" />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="section-header">
      <TitleGroup />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-center w-[640px]">I am a Software Engineering student with a strong interest in Fullstack Web Development. I enjoy designing user-friendly interfaces, developing scalable backend services, and working with databases to build complete web applications.</p>
    </div>
  );
}

function AppWindow() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="app-window">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="app-window">
          <path d={svgPaths.pa2ea600} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardIconBg() {
  return (
    <div className="bg-[rgba(33,150,243,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="card-icon-bg">
      <AppWindow />
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0d1b2a] text-[20px] w-full">Frontend Development</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#4b5563] text-[14px] w-full">Building fluid, highly responsive user interfaces using React, TypeScript, and modern styling solutions like Tailwind CSS.</p>
    </div>
  );
}

function HighlightCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_12px_12px_rgba(13,27,42,0.04)] flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px] self-stretch" data-name="highlight-card">
      <div aria-hidden className="absolute border border-[rgba(33,150,243,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardIconBg />
      <Frame9 />
    </div>
  );
}

function Database() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="database">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="database">
          <path d={svgPaths.p37d79c40} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardIconBg1() {
  return (
    <div className="bg-[rgba(33,150,243,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="card-icon-bg">
      <Database />
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0d1b2a] text-[20px] w-full">Backend Development</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#4b5563] text-[14px] w-full">Developing high-performance, robust, and secure RESTful APIs using Java Spring Boot, Node.js, and object relational mapping.</p>
    </div>
  );
}

function HighlightCard1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_12px_12px_rgba(13,27,42,0.04)] flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px] self-stretch" data-name="highlight-card">
      <div aria-hidden className="absolute border border-[rgba(33,150,243,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardIconBg1 />
      <Frame10 />
    </div>
  );
}

function DatabaseSearch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="database-search">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="database-search">
          <path d={svgPaths.p12882100} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardIconBg2() {
  return (
    <div className="bg-[rgba(33,150,243,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="card-icon-bg">
      <DatabaseSearch />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0d1b2a] text-[20px] w-full">{`Database & System Design`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#4b5563] text-[14px] w-full">Designing scalable, clean database schemas, analyzing queries, and structuring optimized indexes with MySQL and PostgreSQL.</p>
    </div>
  );
}

function HighlightCard2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_12px_12px_rgba(13,27,42,0.04)] flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px] self-stretch" data-name="highlight-card">
      <div aria-hidden className="absolute border border-[rgba(33,150,243,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardIconBg2 />
      <Frame11 />
    </div>
  );
}

function HighlightsRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="highlights-row">
      <HighlightCard />
      <HighlightCard1 />
      <HighlightCard2 />
    </div>
  );
}

function AboutContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-[1200px]" data-name="about-container">
      <SectionHeader />
      <HighlightsRow />
    </div>
  );
}

function AboutSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[120px] py-[96px] relative shrink-0 w-full" data-name="about-section">
      <AboutContainer />
    </div>
  );
}

function TitleGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="title-group">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[36px] text-center whitespace-nowrap">Education</p>
      <div className="bg-[#2196f3] h-[4px] relative rounded-[2px] shrink-0 w-[60px]" data-name="accent-line" />
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="section-header">
      <TitleGroup1 />
    </div>
  );
}

function GraduationCap() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="graduation-cap">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="graduation-cap">
          <path d={svgPaths.p2c3f6600} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TimelineBadge() {
  return (
    <div className="bg-[#2196f3] content-stretch drop-shadow-[0px_4px_6px_rgba(33,150,243,0.3)] flex flex-col items-center justify-center relative rounded-[22px] shrink-0 size-[44px]" data-name="timeline-badge">
      <GraduationCap />
    </div>
  );
}

function TimelineTrack() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[48px]" data-name="timeline-track">
      <div className="absolute bg-[#2196f3] h-[180px] left-[23px] top-[44px] w-[2px]" data-name="line-connector" />
      <TimelineBadge />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#0d1b2a] text-[22px] w-full">Can Tho University</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#2196f3] text-[16px] w-full">Software Engineering</p>
    </div>
  );
}

function PeriodBadge() {
  return (
    <div className="bg-[rgba(33,150,243,0.07)] content-stretch flex items-start px-[14px] py-[6px] relative rounded-[20px] shrink-0" data-name="period-badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[13px] whitespace-nowrap">2023 – Present</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <Frame12 />
      <PeriodBadge />
    </div>
  );
}

function Gpa() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="gpa">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#4b5563] text-[14px]">Cumulative GPA:</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#0d1b2a] text-[16px]">— / 4.0</p>
    </div>
  );
}

function GpaStats() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="gpa-stats">
      <Gpa />
    </div>
  );
}

function EducationCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_8px_10px_rgba(13,27,42,0.04)] flex flex-col gap-[20px] items-start p-[32px] relative rounded-[16px] shrink-0 w-full" data-name="education-card">
      <div aria-hidden className="absolute border border-[rgba(33,150,243,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 664 1" width="664">
            <line id="Line" stroke="#E5E7EB" x2="664" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <GpaStats />
    </div>
  );
}

function TimelineCardCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pl-[24px] relative" data-name="timeline-card-col">
      <EducationCard />
    </div>
  );
}

function TimelineLayout() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[800px]" data-name="timeline-layout">
      <TimelineTrack />
      <TimelineCardCol />
    </div>
  );
}

function EducationContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center relative shrink-0 w-[1200px]" data-name="education-container">
      <SectionHeader1 />
      <TimelineLayout />
    </div>
  );
}

function EducationSection() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-center pb-[120px] pt-[96px] px-[120px] relative shrink-0 w-full" data-name="education-section">
      <EducationContainer />
    </div>
  );
}

export default function DesktopLightTop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="desktop-light-top">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
    </div>
  );
}
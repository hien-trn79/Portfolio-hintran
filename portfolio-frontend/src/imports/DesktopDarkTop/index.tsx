import svgPaths from "./svg-53720vj8i3";
import imgAvatar from "./6f2212818ed6b4aeb7501e9f341959aee59faae4.png";
import imgRectangle from "./aaa8f59a301a3075bc03b87e54009abd579acdbb.png";
import imgRectangle1 from "./a1a13c81878857f40cb2996657d1daccaa6e3e4d.png";
import imgRectangle2 from "./7046d87dbeb33f82ae6bd77ff104e550a42d2fc8.png";

function NavLinkInfo() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="nav-link-Info">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[15px] whitespace-nowrap">Info</p>
    </div>
  );
}

function NavLinkEducation() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="nav-link-Education">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Education</p>
    </div>
  );
}

function NavLinkSkills() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="nav-link-Skills">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Skills</p>
    </div>
  );
}

function NavLinkProjects() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="nav-link-Projects">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Projects</p>
    </div>
  );
}

function NavLinkContact() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="nav-link-Contact">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Contact</p>
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
    <div className="bg-[#163854] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="lang-en">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">EN</p>
    </div>
  );
}

function LangVi() {
  return (
    <div className="content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="lang-vi">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#b8c7d9] text-[12px] whitespace-nowrap">VI</p>
    </div>
  );
}

function LangSwitcher() {
  return (
    <div className="bg-[#0d263d] content-stretch flex h-[32px] items-center p-[2px] relative rounded-[16px] shrink-0" data-name="lang-switcher">
      <LangEn />
      <LangVi />
    </div>
  );
}

function Moon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="moon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="moon">
          <path d={svgPaths.p7595a80} id="Vector" stroke="#90CAF9" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Moon />
    </div>
  );
}

function ThemeToggle() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="theme-toggle">
      <IconWrapper />
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
    <div className="bg-[#071a2b] content-stretch flex h-[64px] items-center justify-between px-[120px] relative shrink-0 w-full" data-name="navbar">
      <div aria-hidden className="absolute border-[#1a3a5c] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[22px] whitespace-nowrap">HinTran</p>
      <NavControls />
    </div>
  );
}

function AvatarWrapper() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[310px]" data-name="avatar-wrapper">
      <div className="absolute bg-[#2196f3] blur-[16px] left-[15px] opacity-30 rounded-[32px] size-[280px] top-[15px]" data-name="avatar-glow" />
      <div className="pointer-events-none relative rounded-[24px] shrink-0 size-[280px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full" src={imgAvatar} />
        <div aria-hidden className="absolute border-2 border-[#2196f3] border-solid inset-0 rounded-[24px]" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2196f3] text-[14px] whitespace-nowrap">FULLSTACK DEVELOPER</p>
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold min-w-full relative shrink-0 text-[48px] text-white w-[min-content]">TRẦN THỊ THÚY HIỀN</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#b8c7d9] text-[20px] w-[min-content]">{`Software Engineering Student & Fullstack Developer`}</p>
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

function IconWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Calendar />
    </div>
  );
}

function IconCircle() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="icon-circle">
      <IconWrapper1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#b8c7d9] text-[11px] uppercase">Birth</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white">7/9/2005</p>
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

function IconWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Venus />
    </div>
  );
}

function IconCircle1() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="icon-circle">
      <IconWrapper2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#b8c7d9] text-[11px] uppercase">Gender</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white">Female</p>
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

function IconWrapper3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Mail />
    </div>
  );
}

function IconCircle2() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="icon-circle">
      <IconWrapper3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#b8c7d9] text-[11px] uppercase">Email</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white">thuyhien2005lv@gmail.com</p>
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
        <g clipPath="url(#clip0_0_27)" id="phone">
          <path d={svgPaths.p29098400} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_27">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Phone />
    </div>
  );
}

function IconCircle3() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="icon-circle">
      <IconWrapper4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#b8c7d9] text-[11px] uppercase">Phone</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white">0978 910 289</p>
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

function IconWrapper5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <MapPin />
    </div>
  );
}

function IconCircle4() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="icon-circle">
      <IconWrapper5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#b8c7d9] text-[11px] uppercase">Address</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white">Ninh Kieu, Can Tho City</p>
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

function IconWrapper6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Linkedin />
    </div>
  );
}

function IconCircle5() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="icon-circle">
      <IconWrapper6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#b8c7d9] text-[11px] uppercase">LinkedIn</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white">linkedin.com/in/hintran</p>
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#b8c7d9] text-[16px] w-[min-content]">I am a Software Engineering student passionate about building modern web applications, combining clean frontend experiences with reliable backend systems.</p>
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
    <div className="bg-[#081c2c] content-stretch flex flex-col items-center px-[120px] py-[80px] relative shrink-0 w-full" data-name="hero-section">
      <HeroContainer />
    </div>
  );
}

function TitleGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="title-group">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-center text-white whitespace-nowrap">About Me</p>
      <div className="bg-[#2196f3] h-[4px] relative rounded-[2px] shrink-0 w-[60px]" data-name="accent-line" />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="section-header">
      <TitleGroup />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b8c7d9] text-[16px] text-center w-[640px]">I am a Software Engineering student with a strong interest in Fullstack Web Development. I enjoy designing user-friendly interfaces, developing scalable backend services, and working with databases to build complete web applications.</p>
    </div>
  );
}

function Layout() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="layout">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="layout">
          <path d={svgPaths.p12ce9300} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-wrapper">
      <Layout />
    </div>
  );
}

function CardIconBg() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="card-icon-bg">
      <IconWrapper7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-white w-full">Frontend Development</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#b8c7d9] text-[14px] w-full">Building fluid, highly responsive user interfaces using React, TypeScript, and modern styling solutions like Tailwind CSS.</p>
    </div>
  );
}

function HighlightCardFrontend() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px] self-stretch" data-name="highlight-card-frontend">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardIconBg />
      <Frame9 />
    </div>
  );
}

function Server() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="server">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="server">
          <path d={svgPaths.p75fde00} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-wrapper">
      <Server />
    </div>
  );
}

function CardIconBg1() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="card-icon-bg">
      <IconWrapper8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-white w-full">Backend Development</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#b8c7d9] text-[14px] w-full">Developing high-performance, robust, and secure RESTful APIs using Java Spring Boot, Node.js, and object relational mapping.</p>
    </div>
  );
}

function HighlightCardBackend() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px] self-stretch" data-name="highlight-card-backend">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardIconBg1 />
      <Frame10 />
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

function IconWrapper9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-wrapper">
      <Database />
    </div>
  );
}

function CardIconBg2() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="card-icon-bg">
      <IconWrapper9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-white w-full">{`Database & System Design`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#b8c7d9] text-[14px] w-full">Designing scalable, clean database schemas, analyzing queries, and structuring optimized indexes with MySQL and PostgreSQL.</p>
    </div>
  );
}

function HighlightCardDb() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px] self-stretch" data-name="highlight-card-db">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardIconBg2 />
      <Frame11 />
    </div>
  );
}

function HighlightsRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="highlights-row">
      <HighlightCardFrontend />
      <HighlightCardBackend />
      <HighlightCardDb />
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
    <div className="bg-[#071a2b] content-stretch flex flex-col items-center px-[120px] py-[96px] relative shrink-0 w-full" data-name="about-section">
      <AboutContainer />
    </div>
  );
}

function TitleGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="title-group">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-center text-white whitespace-nowrap">Education</p>
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

function IconWrapper10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <GraduationCap />
    </div>
  );
}

function TimelineBadge() {
  return (
    <div className="bg-[#2196f3] content-stretch flex flex-col items-center justify-center relative rounded-[22px] shrink-0 size-[44px]" data-name="timeline-badge">
      <IconWrapper10 />
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
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[22px] text-white w-full">Can Tho University</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#2196f3] text-[16px] w-full">Software Engineering</p>
    </div>
  );
}

function PeriodBadge() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex items-start px-[14px] py-[6px] relative rounded-[20px] shrink-0" data-name="period-badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[13px] whitespace-nowrap">2023 – Present</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#b8c7d9] text-[14px]">Cumulative GPA:</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[16px] text-white">— / 4.0</p>
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
    <div className="bg-[#0d263d] content-stretch flex flex-col gap-[20px] items-start p-[32px] relative rounded-[16px] shrink-0 w-full" data-name="education-card">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 664 1" width="664">
            <line id="Line" stroke="#1A3A5C" x2="664" y1="0.5" y2="0.5" />
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
    <div className="bg-[#081c2c] content-stretch flex flex-col items-center pb-[120px] pt-[96px] px-[120px] relative shrink-0 w-full" data-name="education-section">
      <EducationContainer />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">{`Skills & Technologies`}</p>
      <div className="bg-[#2196f3] h-[4px] relative rounded-[2px] shrink-0 w-[64px]" data-name="header-accent-line" />
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="section-header">
      <Frame13 />
    </div>
  );
}

function CategoryFrontend() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="category-Frontend">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#90caf9] text-[18px] w-full">Frontend</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b8c7d9] text-[14px] w-full">React, TypeScript, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Bootstrap, Responsive Web Design.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-[1_0_66px] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <CategoryFrontend />
    </div>
  );
}

function CategoryBackend() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="category-Backend">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#90caf9] text-[18px] w-full">Backend</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b8c7d9] text-[14px] w-full">Java, Spring Boot, Node.js, Express, RESTful API architecture, Object-Relational Mapping (Hibernate/JPA).</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-[1_0_66px] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <CategoryBackend />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function CategoryDatabase() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="category-Database">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#90caf9] text-[18px] w-full">Database</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b8c7d9] text-[14px] w-full">MySQL, PostgreSQL, MongoDB, Schema Design, Complex Queries, Index Optimization, Transaction Management.</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-[1_0_66px] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <CategoryDatabase />
    </div>
  );
}

function CategoryTools() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="category-Tools">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#90caf9] text-[18px] w-full">{`Tools & DevOps`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b8c7d9] text-[14px] w-full">Git, GitHub, Docker, Postman, VS Code, IntelliJ IDEA, Maven, npm, Agile / Scrum Methodologies.</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-[1_0_66px] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <CategoryTools />
    </div>
  );
}

function CategoryOther() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="category-Other">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#90caf9] text-[18px] w-full">Soft Skills</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b8c7d9] text-[14px] w-full">Technical Problem Solving, Teamwork, Communication, Lifelong Learning, Clean Code practices.</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-[1_0_66px] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <CategoryOther />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function CategoriesContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="categories-container">
      <Frame14 />
      <Frame17 />
    </div>
  );
}

function SkillsSectionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[1200px]" data-name="skills-section-content">
      <SectionHeader2 />
      <CategoriesContainer />
    </div>
  );
}

function SkillsSectionContainer() {
  return (
    <div className="bg-[#071a2b] content-stretch flex flex-col items-center py-[96px] relative shrink-0 w-full" data-name="skills-section-container">
      <SkillsSectionContent />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">Featured Projects</p>
      <div className="bg-[#2196f3] h-[4px] relative rounded-[2px] shrink-0 w-[64px]" data-name="header-accent-line" />
    </div>
  );
}

function SectionHeader3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="section-header">
      <Frame21 />
    </div>
  );
}

function CardTopContent() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic p-[24px] relative shrink-0 w-full" data-name="card-top-content">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-white w-full">E-Commerce Platform</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b8c7d9] text-[14px] w-full">A full-featured online shop with secure checkout, product catalog management, and user authentication.</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[12px] whitespace-nowrap">Spring Boot</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[12px] whitespace-nowrap">React</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[12px] whitespace-nowrap">MySQL</p>
    </div>
  );
}

function TagsRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="tags-row">
      <Frame22 />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function CardFooter() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] px-[24px] relative shrink-0 w-full" data-name="card-footer">
      <TagsRow />
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="bg-[#0d263d] flex-[1_0_2px] min-w-px relative rounded-[20px] self-stretch" data-name="project-card">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[180px] relative shrink-0 w-full" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
        </div>
        <CardTopContent />
        <CardFooter />
      </div>
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function CardTopContent1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic p-[24px] relative shrink-0 w-full" data-name="card-top-content">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-white w-full">Task Management System</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b8c7d9] text-[14px] w-full">Collaborative agile board where teams can create tasks, assign work, and track sprint progress seamlessly.</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[12px] whitespace-nowrap">Node.js</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[12px] whitespace-nowrap">TypeScript</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[12px] whitespace-nowrap">MongoDB</p>
    </div>
  );
}

function TagsRow1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="tags-row">
      <Frame25 />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function CardFooter1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] px-[24px] relative shrink-0 w-full" data-name="card-footer">
      <TagsRow1 />
    </div>
  );
}

function ProjectCard1() {
  return (
    <div className="bg-[#0d263d] flex-[1_0_2px] min-w-px relative rounded-[20px] self-stretch" data-name="project-card">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[180px] relative shrink-0 w-full" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
        </div>
        <CardTopContent1 />
        <CardFooter1 />
      </div>
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function CardTopContent2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic p-[24px] relative shrink-0 w-full" data-name="card-top-content">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-white w-full">{`Personal Blog & Portfolio`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b8c7d9] text-[14px] w-full">A performant static-generated blog featuring Markdown content, dark mode toggle, and rich search index.</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[12px] whitespace-nowrap">Next.js</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[12px] whitespace-nowrap">Tailwind</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[12px] whitespace-nowrap">Vercel</p>
    </div>
  );
}

function TagsRow2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="tags-row">
      <Frame28 />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function CardFooter2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] px-[24px] relative shrink-0 w-full" data-name="card-footer">
      <TagsRow2 />
    </div>
  );
}

function ProjectCard2() {
  return (
    <div className="bg-[#0d263d] flex-[1_0_2px] min-w-px relative rounded-[20px] self-stretch" data-name="project-card">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[180px] relative shrink-0 w-full" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
        </div>
        <CardTopContent2 />
        <CardFooter2 />
      </div>
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function ProjectsGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="projects-grid">
      <ProjectCard />
      <ProjectCard1 />
      <ProjectCard2 />
    </div>
  );
}

function ProjectsSectionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[1200px]" data-name="projects-section-content">
      <SectionHeader3 />
      <ProjectsGrid />
    </div>
  );
}

function ProjectsSectionContainer() {
  return (
    <div className="bg-[#081c2c] content-stretch flex flex-col items-center py-[96px] relative shrink-0 w-full" data-name="projects-section-container">
      <ProjectsSectionContent />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">{`Let's Work Together`}</p>
      <div className="bg-[#2196f3] h-[4px] relative rounded-[2px] shrink-0 w-[64px]" data-name="header-accent-line" />
    </div>
  );
}

function SectionHeader4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="section-header">
      <Frame31 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#b8c7d9] text-[16px] text-center w-[min-content]">Feel free to reach out if you would like to discuss a project, internship opportunity, or collaboration.</p>
    </div>
  );
}

function Mail1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="mail">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="mail">
          <path d={svgPaths.pd3d5900} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Mail1 />
    </div>
  );
}

function IconBg() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="icon-bg">
      <IconWrapper11 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#b8c7d9] text-[12px]">EMAIL ME AT</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[15px] text-white">thuyhien2005lv@gmail.com</p>
    </div>
  );
}

function ContactItemEmail() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="contact-item-Email">
      <IconBg />
      <Frame32 />
    </div>
  );
}

function Phone1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_33)" id="phone">
          <path d={svgPaths.p2a029800} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_33">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Phone1 />
    </div>
  );
}

function IconBg1() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="icon-bg">
      <IconWrapper12 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#b8c7d9] text-[12px]">CALL ME ON</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[15px] text-white">0978 910 289</p>
    </div>
  );
}

function ContactItemPhone() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="contact-item-Phone">
      <IconBg1 />
      <Frame33 />
    </div>
  );
}

function Linkedin1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="linkedin">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="linkedin">
          <g id="Vector">
            <path d={svgPaths.p19a5ee80} stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p104b6a40} stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p376a7880} stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconWrapper13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Linkedin1 />
    </div>
  );
}

function IconBg2() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="icon-bg">
      <IconWrapper13 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#b8c7d9] text-[12px]">CONNECT WITH ME</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[15px] text-white">linkedin.com/in/hintran</p>
    </div>
  );
}

function ContactItemLinkedIn() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="contact-item-LinkedIn">
      <IconBg2 />
      <Frame34 />
    </div>
  );
}

function Github() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="github">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="github">
          <path d={svgPaths.p32832dc0} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Github />
    </div>
  );
}

function IconBg3() {
  return (
    <div className="bg-[rgba(33,150,243,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="icon-bg">
      <IconWrapper14 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#b8c7d9] text-[12px]">VIEW MY REPOS</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[15px] text-white">github.com/hintran</p>
    </div>
  );
}

function ContactItemGitHub() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="contact-item-GitHub">
      <IconBg3 />
      <Frame35 />
    </div>
  );
}

function ContactLeftCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="contact-left-col">
      <ContactItemEmail />
      <ContactItemPhone />
      <ContactItemLinkedIn />
      <ContactItemGitHub />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#0d263d] content-stretch flex items-start p-[14px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b8c7d9] text-[14px] whitespace-nowrap">Enter your name</p>
    </div>
  );
}

function FieldName() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-Name">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Your Name</p>
      <Input />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#0d263d] content-stretch flex items-start p-[14px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b8c7d9] text-[14px] whitespace-nowrap">Enter your email</p>
    </div>
  );
}

function FieldEmail() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-Email">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Email Address</p>
      <Input1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#0d263d] content-stretch flex h-[120px] items-start p-[14px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#b8c7d9] text-[14px]">Type your message here...</p>
    </div>
  );
}

function FieldMessage() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-Message">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Message</p>
      <Input2 />
    </div>
  );
}

function BtnSubmit() {
  return (
    <div className="bg-[#2196f3] content-stretch flex items-center justify-center px-[28px] py-[14px] relative rounded-[12px] shrink-0 w-full" data-name="btn-submit">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Send Message</p>
    </div>
  );
}

function ContactRightCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="contact-right-col">
      <FieldName />
      <FieldEmail />
      <FieldMessage />
      <BtnSubmit />
    </div>
  );
}

function ContactColumns() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="contact-columns">
      <ContactLeftCol />
      <ContactRightCol />
    </div>
  );
}

function ContactSectionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[1200px]" data-name="contact-section-content">
      <SectionHeader4 />
      <ContactColumns />
    </div>
  );
}

function ContactSectionContainer() {
  return (
    <div className="bg-[#071a2b] content-stretch flex flex-col items-center py-[96px] relative shrink-0 w-full" data-name="contact-section-container">
      <ContactSectionContent />
    </div>
  );
}

function ArrowUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-up">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="arrow-up">
          <path d={svgPaths.p271e8680} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <ArrowUp />
    </div>
  );
}

function BackToTopBtn() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="back-to-top-btn">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <IconWrapper15 />
    </div>
  );
}

function BackToTopPanel() {
  return (
    <div className="bg-[#081c2c] content-stretch flex items-start justify-end pr-[120px] py-[24px] relative shrink-0 w-full" data-name="back-to-top-panel">
      <div aria-hidden className="absolute border-[#1a3a5c] border-b border-solid border-t inset-0 pointer-events-none" />
      <BackToTopBtn />
    </div>
  );
}

function Github1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="github">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="github">
          <path d={svgPaths.p35351800} id="Vector" stroke="#90CAF9" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Github1 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#0d263d] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <IconWrapper16 />
    </div>
  );
}

function Linkedin2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="linkedin">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="linkedin">
          <g id="Vector">
            <path d={svgPaths.p198c9b00} stroke="#90CAF9" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p18ae2552} stroke="#90CAF9" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p33fd2780} stroke="#90CAF9" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconWrapper17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Linkedin2 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#0d263d] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <IconWrapper17 />
    </div>
  );
}

function Mail2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mail">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="mail">
          <path d={svgPaths.p10d0c00} id="Vector" stroke="#90CAF9" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Mail2 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#0d263d] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <IconWrapper18 />
    </div>
  );
}

function FooterSocials() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="footer-socials">
      <Frame36 />
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function FooterMain() {
  return (
    <div className="content-stretch flex items-center justify-between px-[120px] py-[48px] relative shrink-0 w-full" data-name="footer-main">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">HinTran</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b8c7d9] text-[14px] whitespace-nowrap">© 2026 HinTran. All rights reserved.</p>
      <FooterSocials />
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="bg-[#081c2c] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer-container">
      <BackToTopPanel />
      <FooterMain />
    </div>
  );
}

export default function DesktopDarkTop() {
  return (
    <div className="bg-[#071a2b] content-stretch flex flex-col items-start relative size-full" data-name="desktop-dark-top">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSectionContainer />
      <ProjectsSectionContainer />
      <ContactSectionContainer />
      <FooterContainer />
    </div>
  );
}
import svgPaths from "./svg-1dy3ysiimm";
import imgProjectImage from "./5d555d989253bcd3af2afa33aedf572afd8e460e.png";
import imgProjectImage1 from "./0ad1b1afa17ed01787c04f25ed153f34a606acb3.png";
import imgProjectImage2 from "./fa115285f62613e20e83edac812574abf3c4c112.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[#0d1b2a] text-[32px] whitespace-nowrap">{`Skills & Technologies`}</p>
      <div className="bg-[#2196f3] h-[4px] relative rounded-[2px] shrink-0 w-[64px]" data-name="header-accent-line" />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="section-header">
      <Frame />
    </div>
  );
}

function CircleX() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_58)" id="circle-x">
          <path d={svgPaths.p30250f00} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_58">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipReactJs() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-ReactJS">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CircleX />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">ReactJS</p>
    </div>
  );
}

function Code() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="code">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_50)" id="code">
          <path d={svgPaths.p15a2a800} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_50">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipTypeScript() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-TypeScript">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Code />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">TypeScript</p>
    </div>
  );
}

function Terminal() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="terminal">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="terminal">
          <path d={svgPaths.p18863120} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipJavaScript() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-JavaScript">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Terminal />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">JavaScript</p>
    </div>
  );
}

function FileCode() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="file-code">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="file-code">
          <path d={svgPaths.p192f1e00} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipHtml() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-HTML">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FileCode />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">HTML</p>
    </div>
  );
}

function Code1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="code">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_50)" id="code">
          <path d={svgPaths.p15a2a800} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_50">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipCss() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-CSS">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Code1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">CSS</p>
    </div>
  );
}

function TextSelect() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="text-select">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="text-select">
          <path d={svgPaths.p2f27ddc0} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipTailwindCss() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Tailwind CSS">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <TextSelect />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">Tailwind CSS</p>
    </div>
  );
}

function Flashlight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="flashlight">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="flashlight">
          <path d={svgPaths.p3cb59600} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipVite() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Vite">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Flashlight />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">Vite</p>
    </div>
  );
}

function Route() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="route">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="route">
          <path d={svgPaths.p2c576c00} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipReactRouter() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-React Router">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Route />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">React Router</p>
    </div>
  );
}

function SkillsWrap() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="skills-wrap">
      <SkillChipReactJs />
      <SkillChipTypeScript />
      <SkillChipJavaScript />
      <SkillChipHtml />
      <SkillChipCss />
      <SkillChipTailwindCss />
      <SkillChipVite />
      <SkillChipReactRouter />
    </div>
  );
}

function CategoryFrontend() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="category-Frontend">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[16px] uppercase whitespace-nowrap">Frontend</p>
      <SkillsWrap />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <CategoryFrontend />
    </div>
  );
}

function Coffee() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="coffee">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="coffee">
          <path d={svgPaths.p2aeb6fc0} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipJava() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Java">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Coffee />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">Java</p>
    </div>
  );
}

function Leaf() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="leaf">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_30)" id="leaf">
          <path d={svgPaths.p8c44400} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_30">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipSpringBoot() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Spring Boot">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Leaf />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">Spring Boot</p>
    </div>
  );
}

function Shield() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="shield">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="shield">
          <path d={svgPaths.pae18800} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipSpringSecurity() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Spring Security">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Shield />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">Spring Security</p>
    </div>
  );
}

function Server() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="server">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_32)" id="server">
          <path d={svgPaths.p323db200} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_32">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipNodeJs() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Node.js">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Server />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">Node.js</p>
    </div>
  );
}

function SkillsWrap1() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="skills-wrap">
      <SkillChipJava />
      <SkillChipSpringBoot />
      <SkillChipSpringSecurity />
      <SkillChipNodeJs />
    </div>
  );
}

function CategoryBackend() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="category-Backend">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[16px] uppercase whitespace-nowrap">Backend</p>
      <SkillsWrap1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <CategoryBackend />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Database() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="database">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="database">
          <path d={svgPaths.p1edebd00} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipPostgreSql() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-PostgreSQL">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Database />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">PostgreSQL</p>
    </div>
  );
}

function Database1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="database">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="database">
          <path d={svgPaths.p1edebd00} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipMySql() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-MySQL">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Database1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">MySQL</p>
    </div>
  );
}

function Database2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="database">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="database">
          <path d={svgPaths.p1edebd00} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipMongoDb() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-MongoDB">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Database2 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">MongoDB</p>
    </div>
  );
}

function Map() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="map">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="map">
          <path d={svgPaths.p26772680} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipPostGis() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-PostGIS">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Map />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">PostGIS</p>
    </div>
  );
}

function SkillsWrap2() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="skills-wrap">
      <SkillChipPostgreSql />
      <SkillChipMySql />
      <SkillChipMongoDb />
      <SkillChipPostGis />
    </div>
  );
}

function CategoryDatabase() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="category-Database">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[16px] uppercase whitespace-nowrap">Database</p>
      <SkillsWrap2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <CategoryDatabase />
    </div>
  );
}

function GitBranch() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="git-branch">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="git-branch">
          <path d={svgPaths.p31ad68f0} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipGit() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Git">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <GitBranch />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">Git</p>
    </div>
  );
}

function Github() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="github">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="github">
          <path d={svgPaths.p35351800} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipGitHub() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-GitHub">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Github />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">GitHub</p>
    </div>
  );
}

function Code2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="code">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_50)" id="code">
          <path d={svgPaths.p15a2a800} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_50">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipVsCode() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-VS Code">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Code2 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">VS Code</p>
    </div>
  );
}

function Laptop() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="laptop">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="laptop">
          <path d={svgPaths.p38365380} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipIntelliJIdea() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-IntelliJ IDEA">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Laptop />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">IntelliJ IDEA</p>
    </div>
  );
}

function Code3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="code">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_50)" id="code">
          <path d={svgPaths.p15a2a800} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_50">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipPostman() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Postman">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Code3 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">Postman</p>
    </div>
  );
}

function Map1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="map">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="map">
          <path d={svgPaths.p26772680} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipQgis() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-QGIS">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Map1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">QGIS</p>
    </div>
  );
}

function SkillsWrap3() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="skills-wrap">
      <SkillChipGit />
      <SkillChipGitHub />
      <SkillChipVsCode />
      <SkillChipIntelliJIdea />
      <SkillChipPostman />
      <SkillChipQgis />
    </div>
  );
}

function CategoryTools() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="category-Tools">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[16px] uppercase whitespace-nowrap">Tools</p>
      <SkillsWrap3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <CategoryTools />
    </div>
  );
}

function Coffee1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="coffee">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="coffee">
          <path d={svgPaths.p2aeb6fc0} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipJava1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Java">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Coffee1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">Java</p>
    </div>
  );
}

function Terminal1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="terminal">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="terminal">
          <path d={svgPaths.p18863120} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipJavaScript1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-JavaScript">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Terminal1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">JavaScript</p>
    </div>
  );
}

function Code4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="code">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_50)" id="code">
          <path d={svgPaths.p15a2a800} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_50">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipTypeScript1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-TypeScript">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Code4 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">TypeScript</p>
    </div>
  );
}

function Database3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="database">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="database">
          <path d={svgPaths.p1edebd00} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SkillChipSql() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.03)] flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-SQL">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Database3 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] whitespace-nowrap">SQL</p>
    </div>
  );
}

function SkillsWrap4() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="skills-wrap">
      <SkillChipJava1 />
      <SkillChipJavaScript1 />
      <SkillChipTypeScript1 />
      <SkillChipSql />
    </div>
  );
}

function CategoryLanguages() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="category-Languages">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[16px] uppercase whitespace-nowrap">Languages</p>
      <SkillsWrap4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <CategoryLanguages />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function CategoriesContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="categories-container">
      <Frame1 />
      <Frame4 />
    </div>
  );
}

function SkillsSectionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[1200px]" data-name="skills-section-content">
      <SectionHeader />
      <CategoriesContainer />
    </div>
  );
}

function SkillsSectionContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center py-[96px] relative shrink-0 w-full" data-name="skills-section-container">
      <SkillsSectionContent />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[#0d1b2a] text-[32px] whitespace-nowrap">Featured Projects</p>
      <div className="bg-[#2196f3] h-[4px] relative rounded-[2px] shrink-0 w-[64px]" data-name="header-accent-line" />
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="section-header">
      <Frame8 />
    </div>
  );
}

function TitleRoleGroup() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="title-role-group">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#0d1b2a] text-[20px] w-full">GIS Web Application</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#2196f3] text-[14px] w-full">Fullstack Developer</p>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[11px] whitespace-nowrap">React</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[11px] whitespace-nowrap">Spring Boot</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[11px] whitespace-nowrap">PostgreSQL</p>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[11px] whitespace-nowrap">PostGIS</p>
    </div>
  );
}

function ProjectTags() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full" data-name="project-tags">
      <Tag />
      <Tag1 />
      <Tag2 />
      <Tag3 />
    </div>
  );
}

function CardBody() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-full" data-name="card-body">
      <TitleRoleGroup />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#4b5563] text-[14px] text-ellipsis w-full">Geographic information system for urban planning and zoning visualization. Provides robust spatial analysis tools directly inside the browser.</p>
      <ProjectTags />
    </div>
  );
}

function CardTopContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="card-top-content">
      <div className="aspect-video relative shrink-0 w-full" data-name="project-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProjectImage} />
      </div>
      <CardBody />
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_40)" id="users">
          <path d={svgPaths.p2277bd00} id="Vector" stroke="#4B5563" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_40">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Users />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap">Team: 4 members</p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="calendar">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_42)" id="calendar">
          <path d={svgPaths.p38abe4f0} id="Vector" stroke="#4B5563" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_42">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Calendar />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap">Sep 2025 – Dec 2025</p>
    </div>
  );
}

function MetaRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta-row">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function BtnView() {
  return (
    <div className="bg-[#2196f3] content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[10px] relative rounded-[8px]" data-name="btn-view">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">View Project</p>
    </div>
  );
}

function Github1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="github">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="github">
          <path d={svgPaths.p35fa8e00} id="Vector" stroke="#0D1B2A" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnRepo() {
  return (
    <div className="content-stretch flex flex-[1_0_2px] gap-[6px] items-center justify-center min-w-px py-[10px] relative rounded-[8px]" data-name="btn-repo">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Github1 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[13px] whitespace-nowrap">Repository</p>
    </div>
  );
}

function ActionsRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="actions-row">
      <BtnView />
      <BtnRepo />
    </div>
  );
}

function CardFooter() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] px-[24px] relative shrink-0 w-full" data-name="card-footer">
      <MetaRow />
      <ActionsRow />
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[20px] self-stretch shadow-[0px_8px_24px_0px_rgba(13,27,42,0.06)]" data-name="project-card">
      <CardTopContent />
      <CardFooter />
    </div>
  );
}

function TitleRoleGroup1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="title-role-group">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#0d1b2a] text-[20px] w-full">E-Commerce Platform</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#2196f3] text-[14px] w-full">Backend Developer</p>
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[11px] whitespace-nowrap">Java</p>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[11px] whitespace-nowrap">Spring Boot</p>
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[11px] whitespace-nowrap">MySQL</p>
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[11px] whitespace-nowrap">React</p>
    </div>
  );
}

function ProjectTags1() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full" data-name="project-tags">
      <Tag4 />
      <Tag5 />
      <Tag6 />
      <Tag7 />
    </div>
  );
}

function CardBody1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-full" data-name="card-body">
      <TitleRoleGroup1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#4b5563] text-[14px] text-ellipsis w-full">Online shopping platform with payment gateway integration, real-time inventory tracking, and robust order fulfillment flows.</p>
      <ProjectTags1 />
    </div>
  );
}

function CardTopContent1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="card-top-content">
      <div className="aspect-video relative shrink-0 w-full" data-name="project-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProjectImage1} />
      </div>
      <CardBody1 />
    </div>
  );
}

function Users1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_40)" id="users">
          <path d={svgPaths.p2277bd00} id="Vector" stroke="#4B5563" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_40">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Users1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap">Team: 3 members</p>
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="calendar">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_42)" id="calendar">
          <path d={svgPaths.p38abe4f0} id="Vector" stroke="#4B5563" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_42">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Calendar1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap">May 2025 – Aug 2025</p>
    </div>
  );
}

function MetaRow1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta-row">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function BtnView1() {
  return (
    <div className="bg-[#2196f3] content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[10px] relative rounded-[8px]" data-name="btn-view">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">View Project</p>
    </div>
  );
}

function Github2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="github">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="github">
          <path d={svgPaths.p35fa8e00} id="Vector" stroke="#0D1B2A" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnRepo1() {
  return (
    <div className="content-stretch flex flex-[1_0_2px] gap-[6px] items-center justify-center min-w-px py-[10px] relative rounded-[8px]" data-name="btn-repo">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Github2 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[13px] whitespace-nowrap">Repository</p>
    </div>
  );
}

function ActionsRow1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="actions-row">
      <BtnView1 />
      <BtnRepo1 />
    </div>
  );
}

function CardFooter1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] px-[24px] relative shrink-0 w-full" data-name="card-footer">
      <MetaRow1 />
      <ActionsRow1 />
    </div>
  );
}

function ProjectCard1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[20px] self-stretch shadow-[0px_8px_24px_0px_rgba(13,27,42,0.06)]" data-name="project-card">
      <CardTopContent1 />
      <CardFooter1 />
    </div>
  );
}

function TitleRoleGroup2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="title-role-group">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#0d1b2a] text-[20px] w-full">Portfolio Website</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#2196f3] text-[14px] w-full">Fullstack Developer</p>
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[11px] whitespace-nowrap">React</p>
    </div>
  );
}

function Tag9() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[11px] whitespace-nowrap">TypeScript</p>
    </div>
  );
}

function Tag10() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[11px] whitespace-nowrap">Node.js</p>
    </div>
  );
}

function Tag11() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[11px] whitespace-nowrap">MongoDB</p>
    </div>
  );
}

function ProjectTags2() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full" data-name="project-tags">
      <Tag8 />
      <Tag9 />
      <Tag10 />
      <Tag11 />
    </div>
  );
}

function CardBody2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-full" data-name="card-body">
      <TitleRoleGroup2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#4b5563] text-[14px] text-ellipsis w-full">Personal website portfolio integrated with a custom minimal Content Management System (CMS) to manage projects and updates dynamically.</p>
      <ProjectTags2 />
    </div>
  );
}

function CardTopContent2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="card-top-content">
      <div className="aspect-video relative shrink-0 w-full" data-name="project-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProjectImage2} />
      </div>
      <CardBody2 />
    </div>
  );
}

function Users2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_40)" id="users">
          <path d={svgPaths.p2277bd00} id="Vector" stroke="#4B5563" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_40">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Users2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap">Team: 1 member</p>
    </div>
  );
}

function Calendar2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="calendar">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_42)" id="calendar">
          <path d={svgPaths.p38abe4f0} id="Vector" stroke="#4B5563" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_42">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Calendar2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap">Jan 2026 – Feb 2026</p>
    </div>
  );
}

function MetaRow2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta-row">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function BtnView2() {
  return (
    <div className="bg-[#2196f3] content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[10px] relative rounded-[8px]" data-name="btn-view">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">View Project</p>
    </div>
  );
}

function Github3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="github">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="github">
          <path d={svgPaths.p35fa8e00} id="Vector" stroke="#0D1B2A" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnRepo2() {
  return (
    <div className="content-stretch flex flex-[1_0_2px] gap-[6px] items-center justify-center min-w-px py-[10px] relative rounded-[8px]" data-name="btn-repo">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Github3 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[13px] whitespace-nowrap">Repository</p>
    </div>
  );
}

function ActionsRow2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="actions-row">
      <BtnView2 />
      <BtnRepo2 />
    </div>
  );
}

function CardFooter2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] px-[24px] relative shrink-0 w-full" data-name="card-footer">
      <MetaRow2 />
      <ActionsRow2 />
    </div>
  );
}

function ProjectCard2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[20px] self-stretch shadow-[0px_8px_24px_0px_rgba(13,27,42,0.06)]" data-name="project-card">
      <CardTopContent2 />
      <CardFooter2 />
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
      <SectionHeader1 />
      <ProjectsGrid />
    </div>
  );
}

function ProjectsSectionContainer() {
  return (
    <div className="bg-[#e3f2fd] content-stretch flex flex-col items-center py-[96px] relative shrink-0 w-full" data-name="projects-section-container">
      <ProjectsSectionContent />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[#0d1b2a] text-[32px] whitespace-nowrap">{`Let's Work Together`}</p>
      <div className="bg-[#2196f3] h-[4px] relative rounded-[2px] shrink-0 w-[64px]" data-name="header-accent-line" />
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="section-header">
      <Frame15 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] text-center w-[min-content]">Feel free to reach out if you would like to discuss a project, internship opportunity, or collaboration.</p>
    </div>
  );
}

function Mail() {
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

function IconCircle() {
  return (
    <div className="bg-[#e3f2fd] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="icon-circle">
      <Mail />
    </div>
  );
}

function TextGroup() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="text-group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#4b5563] text-[12px] uppercase whitespace-nowrap">Email</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#0d1b2a] text-[16px] w-[min-content]">thuyhien2005lv@gmail.com</p>
    </div>
  );
}

function ContactItemEmail() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="contact-item-Email">
      <IconCircle />
      <TextGroup />
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_12)" id="phone">
          <path d={svgPaths.p2a029800} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_12">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconCircle1() {
  return (
    <div className="bg-[#e3f2fd] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="icon-circle">
      <Phone />
    </div>
  );
}

function TextGroup1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="text-group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#4b5563] text-[12px] uppercase whitespace-nowrap">Phone</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#0d1b2a] text-[16px] w-[min-content]">0978 910 289</p>
    </div>
  );
}

function ContactItemPhone() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="contact-item-Phone">
      <IconCircle1 />
      <TextGroup1 />
    </div>
  );
}

function Linkedin() {
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

function IconCircle2() {
  return (
    <div className="bg-[#e3f2fd] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="icon-circle">
      <Linkedin />
    </div>
  );
}

function TextGroup2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="text-group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#4b5563] text-[12px] uppercase whitespace-nowrap">LinkedIn</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#0d1b2a] text-[16px] w-[min-content]">linkedin.com/in/hintran</p>
    </div>
  );
}

function ContactItemLinkedIn() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="contact-item-LinkedIn">
      <IconCircle2 />
      <TextGroup2 />
    </div>
  );
}

function Github4() {
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

function IconCircle3() {
  return (
    <div className="bg-[#e3f2fd] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="icon-circle">
      <Github4 />
    </div>
  );
}

function TextGroup3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="text-group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#4b5563] text-[12px] uppercase whitespace-nowrap">GitHub</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#0d1b2a] text-[16px] w-[min-content]">github.com/hintran</p>
    </div>
  );
}

function ContactItemGitHub() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="contact-item-GitHub">
      <IconCircle3 />
      <TextGroup3 />
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

function InputBox() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] relative rounded-[12px] shrink-0 w-full" data-name="input-box">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Your Name</p>
    </div>
  );
}

function FieldName() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-Name">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] w-full">Name</p>
      <InputBox />
    </div>
  );
}

function InputBox1() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] relative rounded-[12px] shrink-0 w-full" data-name="input-box">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Your Email Address</p>
    </div>
  );
}

function FieldEmail() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-Email">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] w-full">Email</p>
      <InputBox1 />
    </div>
  );
}

function InputBox2() {
  return (
    <div className="bg-white content-stretch flex h-[120px] items-start px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="input-box">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">How can I help you?</p>
    </div>
  );
}

function FieldMessage() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-Message">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d1b2a] text-[14px] w-full">Message</p>
      <InputBox2 />
    </div>
  );
}

function Send() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="send">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_22)" id="send">
          <path d={svgPaths.p71e23f0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_22">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BtnSubmit() {
  return (
    <div className="bg-[#2196f3] content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[14px] relative rounded-[12px] shrink-0 w-full" data-name="btn-submit">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Send Message</p>
      <Send />
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
      <SectionHeader2 />
      <ContactColumns />
    </div>
  );
}

function ContactSectionContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center py-[96px] relative shrink-0 w-full" data-name="contact-section-container">
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

function BackToTopBtn() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="back-to-top-btn">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <ArrowUp />
    </div>
  );
}

function BackToTopPanel() {
  return (
    <div className="bg-white content-stretch flex items-start justify-end pr-[120px] py-[24px] relative shrink-0 w-full" data-name="back-to-top-panel">
      <BackToTopBtn />
    </div>
  );
}

function Github5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="github">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="github">
          <path d={svgPaths.p35351800} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#1d4ed8] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Github5 />
    </div>
  );
}

function Linkedin1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="linkedin">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="linkedin">
          <g id="Vector">
            <path d={svgPaths.p198c9b00} stroke="white" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p18ae2552} stroke="white" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p33fd2780} stroke="white" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#1d4ed8] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Linkedin1 />
    </div>
  );
}

function Mail1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mail">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="mail">
          <path d={svgPaths.p10d0c00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#1d4ed8] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Mail1 />
    </div>
  );
}

function FooterSocials() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="footer-socials">
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function FooterMain() {
  return (
    <div className="content-stretch flex items-center justify-between px-[120px] py-[48px] relative shrink-0 w-full" data-name="footer-main">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">HinTran</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#93c5fd] text-[14px] whitespace-nowrap">© 2026 HinTran. All rights reserved.</p>
      <FooterSocials />
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="bg-[#0d47a1] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer-container">
      <BackToTopPanel />
      <FooterMain />
    </div>
  );
}

export default function DesktopLightBottom() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start relative size-full" data-name="desktop-light-bottom">
      <SkillsSectionContainer />
      <ProjectsSectionContainer />
      <ContactSectionContainer />
      <FooterContainer />
    </div>
  );
}
import svgPaths from "./svg-ras141uiob";
import imgProjectImage from "./7fd1c3a23661d5bba0bf494c9c5c742837360c84.png";
import imgProjectImage1 from "./b7eec99326e008c4e66ebc05ef01ced3cbc93bd2.png";
import imgProjectImage2 from "./dfd2e4c0b98e0d819ea4aceda4c2d800b6909a55.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">{`Skills & Technologies`}</p>
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

function IconFrame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_58)" id="icon-frame">
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
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-ReactJS">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">ReactJS</p>
    </div>
  );
}

function IconFrame1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_46)" id="icon-frame">
          <path d={svgPaths.p12d99560} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_46">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipTypeScript() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-TypeScript">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">TypeScript</p>
    </div>
  );
}

function IconFrame2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_30)" id="icon-frame">
          <path d={svgPaths.pd22ac80} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
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

function SkillChipJavaScript() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-JavaScript">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame2 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">JavaScript</p>
    </div>
  );
}

function IconFrame3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_26)" id="icon-frame">
          <path d={svgPaths.p3e115d00} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_26">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipHtml() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-HTML">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame3 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">HTML</p>
    </div>
  );
}

function IconFrame4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_46)" id="icon-frame">
          <path d={svgPaths.p12d99560} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_46">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipCss() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-CSS">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame4 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">CSS</p>
    </div>
  );
}

function IconFrame5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_42)" id="icon-frame">
          <path d={svgPaths.p16e79500} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_42">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipTailwindCss() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Tailwind CSS">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame5 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Tailwind CSS</p>
    </div>
  );
}

function IconFrame6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_56)" id="icon-frame">
          <path d={svgPaths.p3556e900} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_56">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipVite() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Vite">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame6 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Vite</p>
    </div>
  );
}

function IconFrame7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_50)" id="icon-frame">
          <path d={svgPaths.p1500a000} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
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

function SkillChipReactRouter() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-React Router">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame7 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">React Router</p>
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
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[16px] uppercase w-full">Frontend</p>
      <SkillsWrap />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-[1_0_66px] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <CategoryFrontend />
    </div>
  );
}

function IconFrame8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_38)" id="icon-frame">
          <path d={svgPaths.pb3901c0} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_38">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipJava() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Java">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame8 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Java</p>
    </div>
  );
}

function IconFrame9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_54)" id="icon-frame">
          <path d={svgPaths.p140b7cf2} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_54">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipSpringBoot() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Spring Boot">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame9 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Spring Boot</p>
    </div>
  );
}

function IconFrame10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_34)" id="icon-frame">
          <path d={svgPaths.p30aa3800} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_34">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipSpringSecurity() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Spring Security">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame10 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Spring Security</p>
    </div>
  );
}

function IconFrame11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="icon-frame">
          <path d={svgPaths.p323db200} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipNodeJs() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Node.js">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame11 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Node.js</p>
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
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[16px] uppercase w-full">Backend</p>
      <SkillsWrap1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-[1_0_66px] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
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

function IconFrame12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_32)" id="icon-frame">
          <path d={svgPaths.p193c01c0} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
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

function SkillChipPostgreSql() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-PostgreSQL">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame12 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">PostgreSQL</p>
    </div>
  );
}

function IconFrame13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_32)" id="icon-frame">
          <path d={svgPaths.p193c01c0} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
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

function SkillChipMySql() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-MySQL">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame13 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">MySQL</p>
    </div>
  );
}

function IconFrame14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_32)" id="icon-frame">
          <path d={svgPaths.p193c01c0} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
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

function SkillChipMongoDb() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-MongoDB">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame14 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">MongoDB</p>
    </div>
  );
}

function IconFrame15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_28)" id="icon-frame">
          <path d={svgPaths.p3d60c400} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_28">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipPostGis() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-PostGIS">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame15 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">PostGIS</p>
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
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[16px] uppercase w-full">Database</p>
      <SkillsWrap2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-[1_0_66px] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <CategoryDatabase />
    </div>
  );
}

function IconFrame16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_24)" id="icon-frame">
          <path d={svgPaths.p27532e00} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_24">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipGit() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Git">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame16 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Git</p>
    </div>
  );
}

function IconFrame17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_22)" id="icon-frame">
          <path d={svgPaths.p1c789100} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
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

function SkillChipGitHub() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-GitHub">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame17 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">GitHub</p>
    </div>
  );
}

function IconFrame18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_46)" id="icon-frame">
          <path d={svgPaths.p12d99560} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_46">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipVsCode() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-VS Code">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame18 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">VS Code</p>
    </div>
  );
}

function IconFrame19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_20)" id="icon-frame">
          <path d={svgPaths.p5442800} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_20">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipIntelliJIdea() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-IntelliJ IDEA">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame19 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">IntelliJ IDEA</p>
    </div>
  );
}

function IconFrame20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_46)" id="icon-frame">
          <path d={svgPaths.p12d99560} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_46">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipPostman() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Postman">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame20 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Postman</p>
    </div>
  );
}

function IconFrame21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_28)" id="icon-frame">
          <path d={svgPaths.p3d60c400} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_28">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipQgis() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-QGIS">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame21 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">QGIS</p>
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
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[16px] uppercase w-full">Tools</p>
      <SkillsWrap3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-[1_0_66px] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <CategoryTools />
    </div>
  );
}

function IconFrame22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_38)" id="icon-frame">
          <path d={svgPaths.pb3901c0} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_38">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipJava1() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-Java">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame22 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Java</p>
    </div>
  );
}

function IconFrame23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_30)" id="icon-frame">
          <path d={svgPaths.pd22ac80} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
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

function SkillChipJavaScript1() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-JavaScript">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame23 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">JavaScript</p>
    </div>
  );
}

function IconFrame24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_46)" id="icon-frame">
          <path d={svgPaths.p12d99560} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_46">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillChipTypeScript1() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-TypeScript">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame24 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">TypeScript</p>
    </div>
  );
}

function IconFrame25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_32)" id="icon-frame">
          <path d={svgPaths.p193c01c0} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
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

function SkillChipSql() {
  return (
    <div className="bg-[#0d263d] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="skill-chip-SQL">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconFrame25 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">SQL</p>
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
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[16px] uppercase w-full">Languages</p>
      <SkillsWrap4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-[1_0_66px] flex-col items-start min-w-px p-[32px] relative rounded-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
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
    <div className="bg-[#071a2b] content-stretch flex flex-col items-center py-[96px] relative shrink-0 w-full" data-name="skills-section-container">
      <SkillsSectionContent />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">Featured Projects</p>
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
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[20px] text-white w-full">GIS Web Application</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#2196f3] text-[14px] w-full">Fullstack Developer</p>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#1a3a5c] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[11px] whitespace-nowrap">React</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#1a3a5c] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[11px] whitespace-nowrap">Spring Boot</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#1a3a5c] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[11px] whitespace-nowrap">PostgreSQL</p>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#1a3a5c] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[11px] whitespace-nowrap">PostGIS</p>
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#b8c7d9] text-[14px] text-ellipsis w-full">Geographic information system for urban planning and zoning visualization. Provides robust spatial analysis tools directly inside the browser.</p>
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

function UsersIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="users-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_48)" id="users-icon">
          <path d={svgPaths.p13b8f280} id="Vector" stroke="#B8C7D9" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_48">
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
      <UsersIcon />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b8c7d9] text-[12px] whitespace-nowrap">Team: 4 members</p>
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="calendar-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_18)" id="calendar-icon">
          <path d={svgPaths.p38abe4f0} id="Vector" stroke="#B8C7D9" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_18">
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
      <CalendarIcon />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b8c7d9] text-[12px] whitespace-nowrap">Sep 2025 – Dec 2025</p>
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

function GithubIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="github-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="github-icon">
          <path d={svgPaths.p207e400} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnRepo() {
  return (
    <div className="content-stretch flex flex-[1_0_2px] gap-[6px] items-center justify-center min-w-px py-[10px] relative rounded-[8px]" data-name="btn-repo">
      <div aria-hidden className="absolute border border-[#2196f3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <GithubIcon />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[13px] whitespace-nowrap">Repository</p>
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
    <div className="bg-[#0d263d] flex-[1_0_2px] min-w-px relative rounded-[20px] self-stretch" data-name="project-card">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <CardTopContent />
        <CardFooter />
      </div>
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function TitleRoleGroup1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="title-role-group">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[20px] text-white w-full">E-Commerce Platform</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#2196f3] text-[14px] w-full">Backend Developer</p>
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#1a3a5c] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[11px] whitespace-nowrap">Java</p>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[#1a3a5c] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[11px] whitespace-nowrap">Spring Boot</p>
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-[#1a3a5c] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[11px] whitespace-nowrap">MySQL</p>
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-[#1a3a5c] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[11px] whitespace-nowrap">React</p>
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#b8c7d9] text-[14px] text-ellipsis w-full">Online shopping platform with payment gateway integration, real-time inventory tracking, and robust order fulfillment flows.</p>
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

function UsersIcon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="users-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_48)" id="users-icon">
          <path d={svgPaths.p13b8f280} id="Vector" stroke="#B8C7D9" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_48">
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
      <UsersIcon1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b8c7d9] text-[12px] whitespace-nowrap">Team: 3 members</p>
    </div>
  );
}

function CalendarIcon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="calendar-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_18)" id="calendar-icon">
          <path d={svgPaths.p38abe4f0} id="Vector" stroke="#B8C7D9" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_18">
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
      <CalendarIcon1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b8c7d9] text-[12px] whitespace-nowrap">May 2025 – Aug 2025</p>
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

function GithubIcon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="github-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="github-icon">
          <path d={svgPaths.p207e400} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnRepo1() {
  return (
    <div className="content-stretch flex flex-[1_0_2px] gap-[6px] items-center justify-center min-w-px py-[10px] relative rounded-[8px]" data-name="btn-repo">
      <div aria-hidden className="absolute border border-[#2196f3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <GithubIcon1 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[13px] whitespace-nowrap">Repository</p>
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
    <div className="bg-[#0d263d] flex-[1_0_2px] min-w-px relative rounded-[20px] self-stretch" data-name="project-card">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <CardTopContent1 />
        <CardFooter1 />
      </div>
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function TitleRoleGroup2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="title-role-group">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[20px] text-white w-full">Portfolio Website</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#2196f3] text-[14px] w-full">Fullstack Developer</p>
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[#1a3a5c] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[11px] whitespace-nowrap">React</p>
    </div>
  );
}

function Tag9() {
  return (
    <div className="bg-[#1a3a5c] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[11px] whitespace-nowrap">TypeScript</p>
    </div>
  );
}

function Tag10() {
  return (
    <div className="bg-[#1a3a5c] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[11px] whitespace-nowrap">Node.js</p>
    </div>
  );
}

function Tag11() {
  return (
    <div className="bg-[#1a3a5c] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[11px] whitespace-nowrap">MongoDB</p>
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#b8c7d9] text-[14px] text-ellipsis w-full">Personal website portfolio integrated with a custom minimal Content Management System (CMS) to manage projects and updates dynamically.</p>
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

function UsersIcon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="users-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_48)" id="users-icon">
          <path d={svgPaths.p13b8f280} id="Vector" stroke="#B8C7D9" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_48">
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
      <UsersIcon2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b8c7d9] text-[12px] whitespace-nowrap">Team: 1 member</p>
    </div>
  );
}

function CalendarIcon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="calendar-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_18)" id="calendar-icon">
          <path d={svgPaths.p38abe4f0} id="Vector" stroke="#B8C7D9" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_18">
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
      <CalendarIcon2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b8c7d9] text-[12px] whitespace-nowrap">Jan 2026 – Feb 2026</p>
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

function GithubIcon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="github-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="github-icon">
          <path d={svgPaths.p207e400} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnRepo2() {
  return (
    <div className="content-stretch flex flex-[1_0_2px] gap-[6px] items-center justify-center min-w-px py-[10px] relative rounded-[8px]" data-name="btn-repo">
      <div aria-hidden className="absolute border border-[#2196f3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <GithubIcon2 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2196f3] text-[13px] whitespace-nowrap">Repository</p>
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
    <div className="bg-[#0d263d] flex-[1_0_2px] min-w-px relative rounded-[20px] self-stretch" data-name="project-card">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
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
      <SectionHeader1 />
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

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">{`Let's Work Together`}</p>
      <div className="bg-[#2196f3] h-[4px] relative rounded-[2px] shrink-0 w-[64px]" data-name="header-accent-line" />
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="section-header">
      <Frame15 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#b8c7d9] text-[16px] text-center w-[min-content]">Feel free to reach out if you would like to discuss a project, internship opportunity, or collaboration.</p>
    </div>
  );
}

function IconFrame26() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_44)" id="icon-frame">
          <path d={svgPaths.p5a510f0} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_44">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconCircle() {
  return (
    <div className="bg-[rgba(33,150,243,0.19)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="icon-circle">
      <IconFrame26 />
    </div>
  );
}

function TextGroup() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="text-group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#b8c7d9] text-[12px] uppercase w-full">Email</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[16px] text-white w-full">thuyhien2005lv@gmail.com</p>
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

function IconFrame27() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_16)" id="icon-frame">
          <path d={svgPaths.p195f9300} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_16">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconCircle1() {
  return (
    <div className="bg-[rgba(33,150,243,0.19)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="icon-circle">
      <IconFrame27 />
    </div>
  );
}

function TextGroup1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="text-group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#b8c7d9] text-[12px] uppercase w-full">Phone</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[16px] text-white w-full">0978 910 289</p>
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

function IconFrame28() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_14)" id="icon-frame">
          <g id="Vector">
            <path d={svgPaths.p2158140} stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p2e7f100} stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p86b380} stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconCircle2() {
  return (
    <div className="bg-[rgba(33,150,243,0.19)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="icon-circle">
      <IconFrame28 />
    </div>
  );
}

function TextGroup2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="text-group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#b8c7d9] text-[12px] uppercase w-full">LinkedIn</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[16px] text-white w-full">linkedin.com/in/hintran</p>
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

function IconFrame29() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_10)" id="icon-frame">
          <path d={svgPaths.p4cbc960} id="Vector" stroke="#2196F3" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconCircle3() {
  return (
    <div className="bg-[rgba(33,150,243,0.19)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="icon-circle">
      <IconFrame29 />
    </div>
  );
}

function TextGroup3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="text-group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#b8c7d9] text-[12px] uppercase w-full">GitHub</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[16px] text-white w-full">github.com/hintran</p>
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
    <div className="bg-[#0d263d] content-stretch flex h-[44px] items-center px-[16px] relative rounded-[12px] shrink-0 w-full" data-name="input-box">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#b8c7d9] text-[14px]">Your Name</p>
    </div>
  );
}

function FieldName() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-Name">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white w-full">Name</p>
      <InputBox />
    </div>
  );
}

function InputBox1() {
  return (
    <div className="bg-[#0d263d] content-stretch flex h-[44px] items-center px-[16px] relative rounded-[12px] shrink-0 w-full" data-name="input-box">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#b8c7d9] text-[14px]">Your Email Address</p>
    </div>
  );
}

function FieldEmail() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-Email">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white w-full">Email</p>
      <InputBox1 />
    </div>
  );
}

function InputBox2() {
  return (
    <div className="bg-[#0d263d] content-stretch flex h-[120px] items-start px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="input-box">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#b8c7d9] text-[14px]">How can I help you?</p>
    </div>
  );
}

function FieldMessage() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-Message">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white w-full">Message</p>
      <InputBox2 />
    </div>
  );
}

function SendIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="send-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_6)" id="send-icon">
          <path d={svgPaths.p71e23f0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
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
      <SendIcon />
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

function BackToTopBtn() {
  return (
    <div className="bg-[#071a2b] content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="back-to-top-btn">
      <div aria-hidden className="absolute border border-[#1a3a5c] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <ArrowUp />
    </div>
  );
}

function BackToTopPanel() {
  return (
    <div className="bg-[#0d263d] content-stretch flex items-start justify-end pr-[120px] py-[24px] relative shrink-0 w-full" data-name="back-to-top-panel">
      <div aria-hidden className="absolute border-[#1a3a5c] border-b border-solid inset-0 pointer-events-none" />
      <BackToTopBtn />
    </div>
  );
}

function GithubIcon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="github-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="github-icon">
          <path d={svgPaths.p35351800} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#1a3a5c] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <GithubIcon3 />
    </div>
  );
}

function LinkedinIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="linkedin-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="linkedin-icon">
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
    <div className="bg-[#1a3a5c] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <LinkedinIcon />
    </div>
  );
}

function MailIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mail-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="mail-icon">
          <path d={svgPaths.p10d0c00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#1a3a5c] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <MailIcon />
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
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#90caf9] text-[24px] whitespace-nowrap">HinTran</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b8c7d9] text-[14px] whitespace-nowrap">© 2026 HinTran. All rights reserved.</p>
      <FooterSocials />
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="bg-[#0d263d] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer-container">
      <BackToTopPanel />
      <FooterMain />
    </div>
  );
}

export default function DesktopDarkBottom() {
  return (
    <div className="bg-[#071a2b] content-stretch flex flex-col items-start relative size-full" data-name="desktop-dark-bottom">
      <SkillsSectionContainer />
      <ProjectsSectionContainer />
      <ContactSectionContainer />
      <FooterContainer />
    </div>
  );
}
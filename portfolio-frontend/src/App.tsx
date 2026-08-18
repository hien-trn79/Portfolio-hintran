import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import type { Lang } from './types'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { EducationSection } from './components/EducationSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { t as localT } from './i18n/translations'
import AdminApp from './admin/AdminApp'

function PortfolioPage({
  dark,
  setDark,
  lang,
  setLang,
}: {
  dark: boolean
  setDark: (d: boolean) => void
  lang: Lang
  setLang: (l: Lang) => void
}) {
  const [activeSection, setActiveSection] = useState('info')
  const [scrolled, setScrolled] = useState(false)

  // Dynamic states
  const [me, setMe] = useState<any>(null)
  const [projects, setProjects] = useState<any[] | null>(null)
  const [skills, setSkills] = useState<any[] | null>(null)
  const [education, setEducation] = useState<any[] | null>(null)
  const [translations, setTranslations] = useState<any>(localT)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      const sections = ['info', 'education', 'skills', 'projects', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 80) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fetch dynamic data
  useEffect(() => {
    const API_URL = 'http://localhost:3001/api'

    // Fetch Me
    fetch(`${API_URL}/me`)
      .then((res) => res.json())
      .then(setMe)
      .catch(() => {})

    // Fetch Projects
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then(setProjects)
      .catch(() => {})

    // Fetch Skills
    fetch(`${API_URL}/skills`)
      .then((res) => res.json())
      .then(setSkills)
      .catch(() => {})

    // Fetch Education
    fetch(`${API_URL}/education`)
      .then((res) => res.json())
      .then(setEducation)
      .catch(() => {})

    // Fetch Translations
    fetch(`${API_URL}/translations`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.en && data.vi) {
          setTranslations(data)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <div
      className={`min-h-screen ${dark ? 'bg-[#071a2b]' : 'bg-white'} transition-colors duration-300`}
    >
      <Navbar
        dark={dark}
        lang={lang}
        onToggleDark={() => setDark(!dark)}
        onToggleLang={() => setLang(lang === 'en' ? 'vi' : 'en')}
        activeSection={activeSection}
        scrolled={scrolled}
        t={translations}
      />

      <HeroSection dark={dark} lang={lang} me={me} t={translations} />
      <AboutSection dark={dark} lang={lang} t={translations} />
      <EducationSection dark={dark} lang={lang} education={education} t={translations} />
      <SkillsSection dark={dark} lang={lang} skills={skills} t={translations} />
      <ProjectsSection dark={dark} lang={lang} projects={projects} t={translations} />
      <ContactSection dark={dark} lang={lang} me={me} t={translations} />
      <Footer dark={dark} lang={lang} t={translations} />
    </div>
  )
}

export default function App() {
  const [dark, setDark] = useState(true)
  const [lang, setLang] = useState<Lang>('en')

  return (
    <div className={dark ? 'dark' : ''}>
      <Routes>
        <Route
          path="/*"
          element={
            <PortfolioPage dark={dark} setDark={setDark} lang={lang} setLang={setLang} />
          }
        />
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
    </div>
  )
}


import { Routes, Route, Navigate } from 'react-router-dom'
import { AdminLayout } from './components/AdminLayout'
import { AdminDashboard } from './pages/AdminDashboard'
import { AdminMe } from './pages/AdminMe'
import { AdminProjects } from './pages/AdminProjects'
import { AdminSkills } from './pages/AdminSkills'
import { AdminEducation } from './pages/AdminEducation'
import { AdminTranslations } from './pages/AdminTranslations'

export default function AdminApp() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="me" element={<AdminMe />} />
        <Route path="projects" element={<AdminProjects />} />
        <Route path="skills" element={<AdminSkills />} />
        <Route path="education" element={<AdminEducation />} />
        <Route path="translations" element={<AdminTranslations />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Route>
    </Routes>
  )
}

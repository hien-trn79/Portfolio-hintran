// ─── Admin API – Gọi Node.js backend tại port 3001 ──────────────────────────

const BASE_URL = 'http://localhost:3001/api'

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(err || `Request failed: ${res.status}`)
  }
  return res.json()
}

// ─── Me ─────────────────────────────────────────────────────────────────────
export interface MeData {
  fullName: string
  birthDate: string
  gender: string
  email: string
  phoneNumber: string
  address: string
  linkedin: string
  github: string
  position: string
  positionVI: string
  subtitle: string
  subtitleVI: string
  bio: string
  bioVI: string
}

export const meApi = {
  get: () => request<MeData>(`${BASE_URL}/me`),
  update: (data: MeData) =>
    request<MeData>(`${BASE_URL}/me`, { method: 'PUT', body: JSON.stringify(data) }),
}

// ─── Projects ────────────────────────────────────────────────────────────────
export interface ProjectChallenge {
  problem: string
  solution: string
}

export interface ProjectContentLocalized {
  title: string
  role: string
  desc: string
  status: string
  team: string
  period: string
  overview: string
  features: string[]
  responsibilities: string[]
  challenges: ProjectChallenge[]
}

export interface ProjectData {
  id: number
  github: string
  tags: string[]
  isFeatured: boolean
  content: {
    en: ProjectContentLocalized
    vi: ProjectContentLocalized
  }
}

export const projectsApi = {
  getAll: () => request<ProjectData[]>(`${BASE_URL}/projects`),
  getById: (id: number) => request<ProjectData>(`${BASE_URL}/projects/${id}`),
  create: (data: Omit<ProjectData, 'id'>) =>
    request<ProjectData>(`${BASE_URL}/projects`, { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: Partial<ProjectData>) =>
    request<ProjectData>(`${BASE_URL}/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    request<{ success: boolean }>(`${BASE_URL}/projects/${id}`, { method: 'DELETE' }),
}

// ─── Skills ──────────────────────────────────────────────────────────────────
export interface SkillCategory {
  id: number
  category: string
  skills: string[]
}

export const skillsApi = {
  getAll: () => request<SkillCategory[]>(`${BASE_URL}/skills`),
  updateAll: (data: SkillCategory[]) =>
    request<SkillCategory[]>(`${BASE_URL}/skills`, { method: 'PUT', body: JSON.stringify(data) }),
  create: (data: Omit<SkillCategory, 'id'>) =>
    request<SkillCategory>(`${BASE_URL}/skills`, { method: 'POST', body: JSON.stringify(data) }),
  delete: (id: number) =>
    request<{ success: boolean }>(`${BASE_URL}/skills/${id}`, { method: 'DELETE' }),
}

// ─── Education ───────────────────────────────────────────────────────────────
export interface EducationData {
  id: number
  university: string
  universityVI: string
  major: string
  majorVI: string
  currentGpa: string
  maxGpa: string
  period: string
  periodVI: string
  isDeleted: boolean
}

export const educationApi = {
  getAll: () => request<EducationData[]>(`${BASE_URL}/education`),
  create: (data: Omit<EducationData, 'id'>) =>
    request<EducationData>(`${BASE_URL}/education`, { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: Partial<EducationData>) =>
    request<EducationData>(`${BASE_URL}/education/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    request<{ success: boolean }>(`${BASE_URL}/education/${id}`, { method: 'DELETE' }),
}

// ─── Translations ─────────────────────────────────────────────────────────────
export interface TranslationsData {
  en: Record<string, Record<string, string>>
  vi: Record<string, Record<string, string>>
}

export const translationsApi = {
  get: () => request<TranslationsData>(`${BASE_URL}/translations`),
  update: (data: TranslationsData) =>
    request<TranslationsData>(`${BASE_URL}/translations`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
}

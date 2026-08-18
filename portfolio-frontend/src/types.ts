// ─── Shared Types ──────────────────────────────────────────────────────────

export type Lang = 'en' | 'vi'

export interface ProjectChallenge {
  problem: string
  solution: string
}

export interface Project {
  img: string
  title: string
  role: string
  desc: string
  tags: string[]
  team: string
  period: string
  overview: string
  features: string[]
  responsibilities: string[]
  challenges: ProjectChallenge[]
  status: string
}

// ─── Type Definitions ───────────────────────────────────────────────────────
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

export interface ProjectDetail {
  img: string
  tags: string[]
  github: string
  content: {
    en: ProjectContentLocalized
    vi: ProjectContentLocalized
  }
}

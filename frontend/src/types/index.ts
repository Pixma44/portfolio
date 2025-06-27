export interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactResponse {
  success: boolean
  message: string
  id: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image?: string
  githubUrl?: string
  liveUrl?: string
  category: 'infrastructure' | 'embedded' | 'game'
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  actions?: string[]
  technologies: string[]
  logo?: string
  location?: string
  contractType?: string
}

export interface Education {
  id: string
  degree: string
  school: string
  period: string
  description?: string
}

export interface Language {
  name: string
  level: {
    fr: string
    en: string
  }
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  url?: string
  score?: string
  level?: string
}

export interface Interest {
  category: {
    fr: string
    en: string
  }
  items: string[]
}
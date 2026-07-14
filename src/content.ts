// ============================================================
// Single source of truth for all portfolio copy.
// Swap real content here without touching component code.
// ============================================================

export type SectionId =
  | 'home'
  | 'about'
  | 'projects'
  | 'experience'
  | 'skills'
  | 'contact'

export interface NavItem {
  id: SectionId
  idx: string // "01".."06"
  label: string
}

/** Navigation order = section order. Home is the core (index 01). */
export const NAV: NavItem[] = [
  { id: 'home', idx: '01', label: 'Home' },
  { id: 'about', idx: '02', label: 'About' },
  { id: 'projects', idx: '03', label: 'Projects' },
  { id: 'experience', idx: '04', label: 'Experience' },
  { id: 'skills', idx: '05', label: 'Skills' },
  { id: 'contact', idx: '06', label: 'Contact' },
]

// ---------- HERO ----------
export const hero = {
  name: 'BORNA',
  tagline: 'JUNIOR SYSTEMS DEVELOPER · GÖTEBORG',
  enter: 'ENTER CORE',
}

// ---------- ABOUT ("Operator Profile") ----------
export const about = {
  profileLog: [
    "I'm a systems-development student at Högskolan Väst with a strong interest in how technology can streamline and automate the way businesses work. I've gained practical experience in IT support, troubleshooting across databases and servers, and building automation with PowerShell.",
    'I combine technical know-how with responsibility and a collaborative mindset carried over from earlier roles. My goal is to use that experience to help companies work smarter, grow, and keep evolving through solid digital solutions.',
  ],
  focusAreas: [
    'IT Support',
    'Automation',
    'Cloud',
    'Fullstack Dev',
    'PowerShell',
  ],
  metrics: [
    { num: '1+', label: 'YEARS IN IT' },
    { num: '3', label: 'ROLES · 2 COMPANIES' },
    { num: '∞', label: 'CAFFEINE' },
  ],
}

// ---------- PROJECTS ("Encrypted Archive") ----------
export interface Project {
  file: string // "FILE-001"
  year: string
  title: string
  blurb: string // short (card)
  desc: string // long (modal)
  tech: string[]
  demo?: string
  repo?: string
}

export const projects: Project[] = [
  {
    file: 'FILE-001',
    year: '2025',
    title: 'Parkera — Parking Marketplace',
    blurb: 'Peer-to-peer parking marketplace for Gothenburg.',
    desc: 'A peer-to-peer parking marketplace for Gothenburg — find a spot near you or rent out your own. Features listing search with location and price filters, a booking-request flow with owner approval, and secure Stripe payments.',
    tech: ['React', 'Supabase', 'Stripe'],
    demo: 'https://parkera-delta.vercel.app/',
    repo: 'https://github.com/Borna-ctrl/Parkera',
  },
  {
    file: 'FILE-002',
    year: '—',
    title: 'Project Two',
    blurb: 'Classified — awaiting declassification.',
    desc: 'Describe a project you built — the problem it solves, your role, the tech you used, and the outcome.',
    tech: ['PowerShell', 'Automation'],
  },
  {
    file: 'FILE-003',
    year: '—',
    title: 'Project Three',
    blurb: 'Classified — awaiting declassification.',
    desc: 'Describe a project you built — the problem it solves, your role, the tech you used, and the outcome.',
    tech: ['Node.js', 'SQL'],
  },
  {
    file: 'FILE-004',
    year: '—',
    title: 'Project Four',
    blurb: 'Classified — awaiting declassification.',
    desc: 'Describe a project you built — the problem it solves, your role, the tech you used, and the outcome.',
    tech: ['Supabase', 'REST API'],
  },
]

// ---------- EXPERIENCE ("Operational History") ----------
export interface Job {
  period: string
  role: string
  company: string
  desc: string
}

export const jobs: Job[] = [
  {
    period: '2026 — Present',
    role: 'Cloud Advisor',
    company: 'Upheads',
    desc: 'Hired at Upheads after my internship. I help clients adopt and get the most out of their cloud environments, building on hands-on experience in IT support and automation.',
  },
  {
    period: '2025 — 2026',
    role: 'IT Support & Automation Intern',
    company: 'Upheads',
    desc: 'Wrote and used PowerShell scripts to automate and streamline work processes. Gained hands-on experience in general IT support and technical problem solving.',
  },
  {
    period: 'Feb 2025 — May 2025',
    role: 'IT Intern',
    company: 'Goodfellows AB',
    desc: 'Completed an IT internship focused on systems and support. Worked on troubleshooting databases and servers and took part in systems-development tasks.',
  },
]

// ---------- SKILLS ("Neural Capability Map") ----------
export type SkillCat =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'cloud'
  | 'devops'
  | 'tools'

export interface SkillHub {
  cat: SkillCat
  label: string
  items: string[] // 3 tech nodes
}

// NOTE: CLOUD / DEVOPS are a best-guess mapping for a junior profile — tweak freely.
export const skillHubs: SkillHub[] = [
  { cat: 'frontend', label: 'FRONTEND', items: ['React', 'JavaScript', 'Tailwind CSS'] },
  { cat: 'backend', label: 'BACKEND', items: ['Node.js', 'C# / ASP.NET', 'REST APIs'] },
  { cat: 'database', label: 'DATABASE', items: ['SQL', 'MongoDB', 'Supabase'] },
  { cat: 'cloud', label: 'CLOUD', items: ['Vercel', 'Azure / M365', 'Cloud Support'] },
  { cat: 'devops', label: 'DEVOPS', items: ['Git', 'PowerShell', 'CI/CD'] },
  { cat: 'tools', label: 'TOOLS', items: ['Figma', 'Claude / LLMs', 'AI-Assisted Dev'] },
]

// ---------- CONTACT ("Open Channel") ----------
export interface Channel {
  label: string
  value: string
  href: string
}

export const contact = {
  channels: [
    { label: 'EMAIL', value: 'boraza0612@gmail.com', href: 'mailto:boraza0612@gmail.com' },
    { label: 'PHONE', value: '070 755 43 98', href: 'tel:+46707554398' },
    {
      label: 'LINKEDIN',
      value: 'in/borna-nobari',
      href: 'https://www.linkedin.com/in/borna-nobari-3b641a355/',
    },
    { label: 'GITHUB', value: 'github.com/Borna-ctrl', href: 'https://github.com/Borna-ctrl' },
  ] as Channel[],
}

// ---------- HUD (literal AI CORE flavor copy) ----------
export const hud = {
  brandTop: '◈ AI CORE',
  brandSub: 'NEURAL INTERFACE v3.0',
  timeLabel: 'SYSTEM TIME · UTC',
  statusMain: 'STATUS · NOMINAL',
  statusSub: 'CORE TEMP 34.2°C · LOAD 12%',
  renderMain: 'RENDER · 60 FPS',
  bootLine1: 'AI CORE INITIALIZING...',
  bootLine2: 'Identity Verified.',
}

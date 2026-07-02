export interface Project {
  idx: string
  title: string
  shot: string
  desc: string
  tags: string[]
}

export interface Job {
  period: string
  role: string
  company: string
  desc: string
}

export interface SkillGroup {
  sym: string
  name: string
  items: string[]
}

/** Roles cycled through by the hero typewriter effect. */
export const ROLES = [
  'Systems Developer',
  'IT Support & Automation',
  'Fullstack Developer',
  'PowerShell Automator',
]

/**
 * Placeholder projects — swap the title / desc / tags / shot for your own work.
 * Keep 4 entries so the 2×2 grid stays balanced (or add/remove as you like).
 */
export const projects: Project[] = [
  {
    idx: '01',
    title: 'Project One',
    shot: 'add screenshot',
    desc: 'Describe a project you built — the problem it solves, your role, the tech you used, and the outcome.',
    tags: ['React', 'TypeScript'],
  },
  {
    idx: '02',
    title: 'Project Two',
    shot: 'add screenshot',
    desc: 'Describe a project you built — the problem it solves, your role, the tech you used, and the outcome.',
    tags: ['PowerShell', 'Automation'],
  },
  {
    idx: '03',
    title: 'Project Three',
    shot: 'add screenshot',
    desc: 'Describe a project you built — the problem it solves, your role, the tech you used, and the outcome.',
    tags: ['Node.js', 'SQL'],
  },
  {
    idx: '04',
    title: 'Project Four',
    shot: 'add screenshot',
    desc: 'Describe a project you built — the problem it solves, your role, the tech you used, and the outcome.',
    tags: ['Supabase', 'REST API'],
  },
]

export const jobs: Job[] = [
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
  {
    period: '2022 — 2024',
    role: 'Forklift Operator',
    company: 'Kappahl Warehouse, Mölndal',
    desc: 'Full-time forklift operator at Kappahl’s warehouse. Loaded and unloaded pallets, placed goods in their correct spots, and kept the flow of goods running efficiently.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    sym: '{ }',
    name: 'Frontend',
    items: ['React', 'JavaScript', 'C#', 'ASP.NET', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    sym: '</>',
    name: 'Backend & Databases',
    items: ['Node.js', 'REST APIs', 'SQL', 'MongoDB', 'Supabase', 'PHPMyAdmin'],
  },
  {
    sym: '#!',
    name: 'Tools',
    items: ['Git', 'Figma', 'Vercel'],
  },
]

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SectionHeader from './SectionHeader'
import ProjectModal from './ProjectModal'
import { projects, type Project } from '../content'
import { useEye, dilateHandlers } from '../eye/EyeContext'

export default function Projects() {
  const eye = useEye()
  const [open, setOpen] = useState<Project | null>(null)

  return (
    <>
      <SectionHeader idx="03" name="ENCRYPTED ARCHIVE" title="Projects" />
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
        }}
      >
        {projects.map((p) => (
          <article
            key={p.file}
            className="glass proj-card"
            onClick={() => setOpen(p)}
            {...dilateHandlers(eye)}
          >
            <div style={{ height: 150, overflow: 'hidden' }}>
              {p.image ? (
                <img
                  className="proj-thumb"
                  src={`${import.meta.env.BASE_URL}${p.image}`}
                  alt={`${p.title} screenshot`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <div className="placeholder-img proj-thumb" style={{ height: '100%' }}>
                  <span className="mono" style={{ color: 'var(--fg-faint)', fontSize: 11, letterSpacing: 3 }}>
                    // PROJECT IMAGE
                  </span>
                </div>
              )}
            </div>
            <div style={{ padding: 20 }}>
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: 2,
                  color: 'var(--cy)',
                  marginBottom: 10,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>{p.file}</span>
                <span style={{ color: 'var(--fg-dim)' }}>{p.year}</span>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--fg)', marginBottom: 8 }}>
                {p.title}
              </h3>
              <p style={{ color: 'var(--fg-muted)', fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>
                {p.blurb}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {p.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </>
  )
}

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../content'
import { useEye } from '../eye/EyeContext'
import { dilateHandlers } from '../eye/EyeContext'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

/** "Secure file": shows a decrypt shimmer (~850ms), then the full dossier. */
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const eye = useEye()
  const [decrypted, setDecrypted] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setDecrypted(true), 850)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="file-modal"
      style={{ zIndex: 70, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        className="glass"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        onClick={(e) => e.stopPropagation()}
        style={{ width: 'min(640px, 100%)', maxHeight: '82vh', overflow: 'auto', padding: 0 }}
      >
        <div className="placeholder-img" style={{ height: 190 }}>
          <span className="mono" style={{ color: 'var(--fg-faint)', fontSize: 12, letterSpacing: 3 }}>
            // PROJECT IMAGE
          </span>
        </div>

        <div style={{ padding: 26 }}>
          {!decrypted ? (
            <div style={{ padding: '40px 0', textAlign: 'center' }}>
              <span className="decrypt-text">DECRYPTING FILE...</span>
            </div>
          ) : (
            <>
              <div
                className="mono"
                style={{ fontSize: 11, letterSpacing: 3, color: 'var(--cy)', marginBottom: 8 }}
              >
                {project.file} · {project.year}
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 600, color: 'var(--fg)', marginBottom: 14 }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--fg-muted)', fontSize: 14.5, lineHeight: 1.75, marginBottom: 18 }}>
                {project.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {project.repo && (
                  <a
                    className="hud-btn"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    {...dilateHandlers(eye)}
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    className="hud-btn hud-btn--primary"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    {...dilateHandlers(eye)}
                  >
                    Live Demo →
                  </a>
                )}
                <button className="hud-btn" onClick={onClose} {...dilateHandlers(eye)}>
                  Close ✕
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  )
}

import type { CSSProperties } from 'react'
import SectionHeader from './SectionHeader'
import { about } from '../content'
import { useEye } from '../eye/EyeContext'

const panelStyle: CSSProperties = { padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }
const cardLabel: CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
  letterSpacing: 3,
  color: 'var(--cy)',
}

export default function About() {
  const eye = useEye()

  return (
    <>
      <SectionHeader idx="02" name="OPERATOR PROFILE" title="About" />
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 18,
        }}
      >
        {/* PROFILE.LOG — eye glances left */}
        <div
          className="glass panel"
          style={panelStyle}
          onMouseEnter={() => eye.setLook(-0.85, -0.15, 1300)}
        >
          <div style={cardLabel}>PROFILE.LOG</div>
          {about.profileLog.map((p, i) => (
            <p
              key={i}
              style={{ color: i === 0 ? 'var(--fg-soft)' : 'var(--fg-muted)', fontSize: 14, lineHeight: 1.75 }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* FOCUS.AREAS — eye glances up */}
        <div
          className="glass panel"
          style={panelStyle}
          onMouseEnter={() => eye.setLook(0, -0.95, 1300)}
        >
          <div style={cardLabel}>FOCUS.AREAS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {about.focusAreas.map((f) => (
              <span
                key={f}
                className="mono"
                style={{
                  fontSize: 12,
                  padding: '7px 13px',
                  borderRadius: 999,
                  border: '1px solid var(--line)',
                  color: 'var(--fg-soft)',
                  background: 'rgba(34,211,238,.05)',
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* SIGNAL.METRICS — eye glances right */}
        <div
          className="glass panel"
          style={panelStyle}
          onMouseEnter={() => eye.setLook(0.85, -0.15, 1300)}
        >
          <div style={cardLabel}>SIGNAL.METRICS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {about.metrics.map((m) => (
              <div key={m.label}>
                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 600,
                    color: 'var(--fg)',
                    lineHeight: 1,
                    letterSpacing: 1,
                  }}
                >
                  {m.num}
                </div>
                <div
                  className="mono"
                  style={{ fontSize: 10, letterSpacing: 2, color: 'var(--fg-dim)', marginTop: 4 }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

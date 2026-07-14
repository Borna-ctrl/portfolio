import { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'
import { jobs } from '../content'

export default function Experience() {
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    // Let the initial (undrawn) styles paint, then trigger the draw + stagger.
    const id = window.setTimeout(() => setDrawn(true), 60)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <SectionHeader idx="04" name="OPERATIONAL HISTORY" title="Experience" />
      <div style={{ position: 'relative', maxWidth: 780, margin: '0 auto', paddingLeft: 34 }}>
        <div
          className={`exp-line${drawn ? ' draw' : ''}`}
          style={{
            position: 'absolute',
            left: 6,
            top: 6,
            bottom: 6,
            width: 2,
            background: 'linear-gradient(180deg, var(--cy), rgba(34,211,238,.05))',
          }}
        />
        {jobs.map((j, i) => (
          <div
            key={j.role}
            className={`exp-item${drawn ? ' show' : ''}`}
            style={{ transitionDelay: `${0.25 + i * 0.18}s`, position: 'relative', marginBottom: 20 }}
          >
            <span
              className="exp-dot"
              style={{
                position: 'absolute',
                left: -34,
                top: 8,
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: 'var(--bg-2)',
                border: '1px solid var(--cy)',
              }}
            />
            <div className="glass" style={{ padding: 20 }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: 2, color: 'var(--cy)' }}>
                {j.period}
              </div>
              <div
                style={{ display: 'flex', gap: 8, alignItems: 'baseline', flexWrap: 'wrap', margin: '6px 0 8px' }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--fg)' }}>{j.role}</h3>
                <span style={{ color: 'var(--cy)', fontSize: 14 }}>@ {j.company}</span>
              </div>
              <p style={{ color: 'var(--fg-muted)', fontSize: 13.5, lineHeight: 1.7 }}>{j.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

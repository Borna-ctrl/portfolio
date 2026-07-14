import { useMemo, useState, type CSSProperties } from 'react'
import { skillHubs, type SkillCat } from '../content'

const W = 820
const H = 600
const CX = W / 2
const CY = 300
const R_HUB = 158
const R_TECH = 108

interface Placed {
  cat: SkillCat
  label: string
  x: number
  y: number
  hub: { x: number; y: number }
  tech: { label: string; x: number; y: number }[]
}

function build(): Placed[] {
  return skillHubs.map((h, i) => {
    const deg = -90 + i * 60
    const rad = (deg * Math.PI) / 180
    const hx = CX + Math.cos(rad) * R_HUB
    const hy = CY + Math.sin(rad) * R_HUB
    const tech = h.items.map((label, j) => {
      const spread = (j - 1) * 40 // -40, 0, +40 around the outward normal
      const trad = ((deg + spread) * Math.PI) / 180
      // push the middle node further out so it clears its two siblings
      const r = j === 1 ? R_TECH + 18 : R_TECH
      return {
        label,
        x: hx + Math.cos(trad) * r,
        y: hy + Math.sin(trad) * r,
      }
    })
    return { cat: h.cat, label: h.label, x: hx, y: hy, hub: { x: hx, y: hy }, tech }
  })
}

const nodeBase: CSSProperties = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  fontFamily: 'var(--font-mono)',
  border: '1px solid var(--line)',
  background: 'rgba(10,20,30,.65)',
  color: 'var(--fg-soft)',
  borderRadius: 3,
  whiteSpace: 'nowrap',
}

/** SVG constellation: CORE + 6 category hubs + 3 tech nodes each. */
export default function SkillsConstellation() {
  const hubs = useMemo(build, [])
  const [hi, setHi] = useState<SkillCat | null>(null)

  const enter = (cat: SkillCat) => () => setHi(cat)
  const leave = () => setHi(null)

  return (
    <div
      className="skills"
      data-hi={hi ?? undefined}
      style={{ position: 'relative', width: W, height: H, margin: '0 auto' }}
    >
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
        {hubs.map((h) => (
          <g key={h.cat}>
            <line data-cat={h.cat} x1={CX} y1={CY} x2={h.x} y2={h.y} />
            {h.tech.map((t) => (
              <line key={t.label} data-cat={h.cat} x1={h.x} y1={h.y} x2={t.x} y2={t.y} />
            ))}
          </g>
        ))}
      </svg>

      {/* CORE node */}
      <div
        className="node"
        style={{
          ...nodeBase,
          left: CX,
          top: CY,
          padding: '12px 16px',
          fontSize: 12,
          letterSpacing: 3,
          color: '#eafcff',
          borderColor: 'var(--cy)',
          background: 'rgba(34,211,238,.12)',
          boxShadow: '0 0 22px rgba(34,211,238,.35)',
        }}
      >
        CORE
      </div>

      {/* hub + tech nodes */}
      {hubs.map((h) => (
        <div key={h.cat}>
          <div
            className="node"
            data-cat={h.cat}
            onMouseEnter={enter(h.cat)}
            onMouseLeave={leave}
            style={{
              ...nodeBase,
              left: h.x,
              top: h.y,
              padding: '8px 13px',
              fontSize: 11,
              letterSpacing: 2,
              cursor: 'default',
            }}
          >
            {h.label}
          </div>
          {h.tech.map((t) => (
            <div
              key={t.label}
              className="node"
              data-cat={h.cat}
              onMouseEnter={enter(h.cat)}
              onMouseLeave={leave}
              style={{
                ...nodeBase,
                left: t.x,
                top: t.y,
                padding: '5px 10px',
                fontSize: 10,
                letterSpacing: 1,
                cursor: 'default',
              }}
            >
              {t.label}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

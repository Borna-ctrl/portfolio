import { NAV, type SectionId } from '../content'

interface RadialNavProps {
  active: SectionId
  onNavigate: (id: SectionId) => void
}

const RADIUS = 232
const START = -178 // degrees
const SPAN = 176

/** Six pills orbiting the eye across the top arc (home screen). */
export default function RadialNav({ active, onNavigate }: RadialNavProps) {
  return (
    <div style={{ position: 'absolute', left: '50%', top: '50%', width: 0, height: 0 }}>
      {NAV.map((n, i) => {
        const deg = START + (i * SPAN) / (NAV.length - 1)
        const rad = (deg * Math.PI) / 180
        const x = Math.cos(rad) * RADIUS
        const y = Math.sin(rad) * RADIUS
        return (
          <button
            key={n.id}
            className="nav-pill"
            data-active={active === n.id ? '1' : '0'}
            data-reveal
            onClick={() => onNavigate(n.id)}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              transform: `translate(calc(-50% + ${x.toFixed(1)}px), calc(-50% + ${y.toFixed(1)}px))`,
            }}
          >
            <span className="idx">{n.idx}</span>
            <span className="name">{n.label}</span>
          </button>
        )
      })}
    </div>
  )
}

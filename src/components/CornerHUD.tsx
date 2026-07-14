import { useEffect, useState, type CSSProperties } from 'react'
import { hud, NAV, type SectionId } from '../content'

function useUtcClock(): string {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return now.toISOString().slice(11, 19) // HH:MM:SS (UTC)
}

const corner: CSSProperties = { position: 'absolute' }

export default function CornerHUD({ active }: { active: SectionId }) {
  const clock = useUtcClock()
  const item = NAV.find((n) => n.id === active) ?? NAV[0]

  return (
    <div className="hud-layer">
      <div className="hud-corner" style={{ ...corner, top: 20, left: 24 }} data-reveal>
        <div style={{ color: 'var(--cy)' }}>{hud.brandTop}</div>
        <div className="lg">{hud.brandSub}</div>
      </div>

      <div
        className="hud-corner"
        style={{ ...corner, top: 20, right: 24, textAlign: 'right' }}
        data-reveal
      >
        <div style={{ color: 'var(--fg)' }}>{clock}</div>
        <div className="lg">{hud.timeLabel}</div>
      </div>

      <div className="hud-corner" style={{ ...corner, bottom: 20, left: 24 }} data-reveal>
        <div>
          <span style={{ color: 'var(--ac)' }}>●</span> {hud.statusMain}
        </div>
        <div className="lg">{hud.statusSub}</div>
      </div>

      <div
        className="hud-corner"
        style={{ ...corner, bottom: 20, right: 24, textAlign: 'right' }}
        data-reveal
      >
        <div>{hud.renderMain}</div>
        <div className="lg">
          SECTOR {item.label.toUpperCase()} · {item.idx}/06
        </div>
      </div>
    </div>
  )
}

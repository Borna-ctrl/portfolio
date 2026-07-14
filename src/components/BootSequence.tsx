import type { CSSProperties } from 'react'
import type { BootPhase } from '../hooks/useBoot'
import { hud } from '../content'

const bracket: CSSProperties = {
  position: 'absolute',
  width: 26,
  height: 26,
  borderColor: 'var(--cy)',
  borderStyle: 'solid',
  opacity: 0.8,
}

/** Full-screen boot overlay: corner brackets, status lines, progress fill. */
export default function BootSequence({ phase }: { phase: BootPhase }) {
  const done = phase === 'ready'
  const progressed = phase === 'verify' || phase === 'eye' || phase === 'ready'
  const line2On = progressed

  return (
    <div
      data-phase={phase}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        background: 'var(--bg-0)',
        opacity: done ? 0 : 1,
        pointerEvents: done ? 'none' : 'auto',
        transition: 'opacity .8s ease',
      }}
      aria-hidden={done}
    >
      {/* corner brackets */}
      <span style={{ ...bracket, top: 26, left: 26, borderWidth: '1px 0 0 1px' }} />
      <span style={{ ...bracket, top: 26, right: 26, borderWidth: '1px 1px 0 0' }} />
      <span style={{ ...bracket, bottom: 26, left: 26, borderWidth: '0 0 1px 1px' }} />
      <span style={{ ...bracket, bottom: 26, right: 26, borderWidth: '0 1px 1px 0' }} />

      <div
        className="mono"
        style={{
          fontSize: 11,
          letterSpacing: 5,
          color: 'var(--fg-dim)',
          opacity: phase === 'boot' ? 0 : 0.55,
          transition: 'opacity .6s ease',
        }}
      >
        {hud.bootLine1}
      </div>

      <div style={{ width: 220, height: 1, background: 'rgba(125,211,252,.2)', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            background: 'var(--cy)',
            boxShadow: '0 0 12px var(--cy)',
            transformOrigin: 'left',
            transform: `scaleX(${progressed ? 1 : 0})`,
            transition: 'transform 2.4s var(--ease-cam)',
          }}
        />
      </div>

      <div
        className="mono"
        style={{
          fontSize: 11,
          letterSpacing: 3,
          color: 'var(--cy)',
          opacity: line2On ? 1 : 0,
          transition: 'opacity .6s ease',
        }}
      >
        {hud.bootLine2}
      </div>
    </div>
  )
}

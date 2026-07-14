import { hero } from '../content'

/** Home overlay: the big gradient name + tagline, sitting below the eye. */
export default function Home() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: '10vh',
        pointerEvents: 'none',
        zIndex: 18,
        textAlign: 'center',
      }}
    >
      <h1
        className="gradient-name"
        data-reveal
        style={{ fontSize: 'clamp(52px, 10vw, 116px)', margin: 0 }}
      >
        {hero.name}
      </h1>
      <div
        className="mono"
        data-reveal
        style={{ color: 'var(--fg-dim)', letterSpacing: 4, fontSize: 12, marginTop: 10 }}
      >
        {hero.tagline}
      </div>
    </div>
  )
}

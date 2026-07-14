import { useMemo } from 'react'

interface Particle {
  left: string
  top: string
  size: number
  delay: string
  duration: string
}

/** Static grid + fog blooms + drifting particles + scan bar. Purely decorative. */
export default function AmbientBackground() {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 26 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 2,
        delay: `-${(Math.random() * 12).toFixed(2)}s`,
        duration: `${(8 + Math.random() * 10).toFixed(2)}s`,
      })),
    [],
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="bg-grid" />

      <div
        className="bg-fog"
        style={{ width: 520, height: 520, left: '8%', top: '12%' }}
      />
      <div
        className="bg-fog"
        style={{
          width: 460,
          height: 460,
          right: '6%',
          bottom: '10%',
          background: 'radial-gradient(circle, rgba(74,222,128,.1), transparent 60%)',
          animationDuration: '28s',
        }}
      />

      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      <div className="bg-scan" />
    </div>
  )
}

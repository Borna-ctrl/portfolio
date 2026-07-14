import { useEffect, useRef } from 'react'
import { useEye } from '../eye/EyeContext'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const rand = (min: number, max: number) => min + Math.random() * (max - min)
const MAX_OFFSET = 27 // px, peak iris travel

interface EyeProps {
  /** Iris open state — plays the CSS "mechanical open" during the eye phase. */
  open: boolean
  /** Starts the rAF loop (after the open animation finishes, at 'ready'). */
  run: boolean
}

/**
 * The centerpiece HUD orb. All motion is driven by one requestAnimationFrame
 * loop mutating refs directly — no React re-renders per frame.
 */
export default function Eye({ open, run }: EyeProps) {
  const eye = useEye()
  const reduced = usePrefersReducedMotion()

  const wrapRef = useRef<HTMLDivElement>(null)
  const irisRef = useRef<HTMLDivElement>(null)
  const pupilRef = useRef<HTMLDivElement>(null)
  const hlRef = useRef<HTMLDivElement>(null)

  // Track the mouse globally (kept off React state).
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      eye.mouseX = e.clientX
      eye.mouseY = e.clientY
      eye.lastMove = performance.now()
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [eye])

  useEffect(() => {
    if (!run || reduced) return
    let raf = 0
    let prev = performance.now()
    const cur = { x: 0, y: 0 }
    let pupilScale = 1
    let nextBlink = performance.now() + rand(2600, 6000)
    let blinkStart = -1
    const idle = { x: 0, y: 0 }
    let nextIdle = performance.now() + rand(1400, 3100)

    const loop = (now: number) => {
      const dt = Math.min(48, now - prev)
      prev = now

      // ---- base gaze target (peak MAX_OFFSET px) ----
      let bx = 0
      let by = 0
      const wrap = wrapRef.current
      if (wrap) {
        const r = wrap.getBoundingClientRect()
        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        if (eye.look && now < eye.look.until) {
          bx = eye.look.dx * MAX_OFFSET
          by = eye.look.dy * MAX_OFFSET
        } else if (now - eye.lastMove < 2600) {
          const vx = eye.mouseX - cx
          const vy = eye.mouseY - cy
          const dist = Math.hypot(vx, vy) || 1
          const mag = Math.min(1, dist / 420) * MAX_OFFSET
          bx = (vx / dist) * mag
          by = (vy / dist) * mag
        } else {
          if (now > nextIdle) {
            const a = rand(0, Math.PI * 2)
            const rr = rand(7, 20)
            idle.x = Math.cos(a) * rr
            idle.y = Math.sin(a) * rr
            nextIdle = now + rand(1400, 3100)
          }
          bx = idle.x
          by = idle.y
        }
      }

      // frame-rate independent smoothing
      const k = Math.min(1, 0.14 * (dt / 16.67))
      cur.x += (bx - cur.x) * k
      cur.y += (by - cur.y) * k

      // ---- blink (triangle dip over 150ms) ----
      if (eye.forceBlink) {
        eye.forceBlink = false
        blinkStart = now
      }
      if (now > nextBlink) {
        blinkStart = now
        nextBlink = now + rand(2600, 6000)
      }
      let blinkScale = 1
      if (blinkStart >= 0) {
        const bt = now - blinkStart
        if (bt >= 150) blinkStart = -1
        else blinkScale = 1 - 0.95 * Math.sin((bt / 150) * Math.PI)
      }

      // ---- pupil focus / dilate ----
      const targetPupil = eye.dilateCount > 0 ? 1.22 : eye.focusCount > 0 ? 0.76 : 1
      pupilScale += (targetPupil - pupilScale) * k
      if (wrap) wrap.dataset.focus = eye.focusCount > 0 ? '1' : '0'

      // ---- write transforms ----
      if (irisRef.current)
        irisRef.current.style.transform = `translate(${cur.x * 0.35}px, ${cur.y * 0.35}px) scaleY(${blinkScale})`
      if (pupilRef.current)
        pupilRef.current.style.transform = `translate(${cur.x * 0.7}px, ${cur.y * 0.7}px) scale(${pupilScale})`
      if (hlRef.current)
        hlRef.current.style.transform = `translate(${cur.x * -0.45}px, ${cur.y * -0.45}px)`

      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [run, reduced, eye])

  return (
    <div className="eye-wrap" ref={wrapRef} data-focus="0">
      <div className="eye-glow" />
      <div className="eye-ring-outer" />
      <div className="eye-ring-inner" />
      <div className="eye-ring-solid" />
      <div className="eye-focusring" />
      <div className={`eye-iris ${open ? 'open' : 'booting'}`} ref={irisRef}>
        <div className="eye-iris-texture" />
      </div>
      <div className="eye-pupil" ref={pupilRef}>
        <div className="eye-hl" ref={hlRef} />
      </div>
    </div>
  )
}

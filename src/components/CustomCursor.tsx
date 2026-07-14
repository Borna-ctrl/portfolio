import { useEffect, useRef } from 'react'
import { useEye } from '../eye/EyeContext'

/** Cyan ring that follows the mouse and grows when the eye is focused. */
export default function CustomCursor() {
  const eye = useEye()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    // Sync the "grown" state to the eye's focus count each frame (cheap).
    const tick = () => {
      el.classList.toggle('focused', eye.focusCount > 0 || eye.dilateCount > 0)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [eye])

  return <div className="core-cursor" ref={ref} aria-hidden="true" />
}

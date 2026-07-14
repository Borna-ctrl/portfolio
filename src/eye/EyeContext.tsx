import { createContext, useContext, useRef, type ReactNode } from 'react'

interface LookTarget {
  dx: number // -1..1 (fraction of max offset), +x = right
  dy: number // -1..1, +y = down
  until: number // performance.now() timestamp
}

/**
 * Shared, mutable controller for the eye. Components steer the eye by calling
 * these methods on hover / focus / navigation; the rAF loop in <Eye> reads the
 * fields directly (never through React state) to stay at 60fps.
 */
export class EyeController {
  mouseX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  mouseY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  lastMove = 0
  focusCount = 0
  dilateCount = 0
  look: LookTarget | null = null
  forceBlink = false

  /** Look toward a direction (dx,dy in -1..1) for `ms`, overriding follow/idle. */
  setLook = (dx: number, dy: number, ms = 900) => {
    this.look = { dx, dy, until: performance.now() + ms }
  }
  addFocus = (on: boolean) => {
    this.focusCount = Math.max(0, this.focusCount + (on ? 1 : -1))
  }
  addDilate = (on: boolean) => {
    this.dilateCount = Math.max(0, this.dilateCount + (on ? 1 : -1))
  }
  blink = () => {
    this.forceBlink = true
  }
}

const Ctx = createContext<EyeController | null>(null)

export function EyeProvider({ children }: { children: ReactNode }) {
  const ref = useRef<EyeController | null>(null)
  if (!ref.current) ref.current = new EyeController()
  return <Ctx.Provider value={ref.current}>{children}</Ctx.Provider>
}

export function useEye(): EyeController {
  const c = useContext(Ctx)
  if (!c) throw new Error('useEye must be used within <EyeProvider>')
  return c
}

/** Hover handlers that make the pupil constrict + focus ring light up. */
export function focusHandlers(eye: EyeController) {
  return {
    onMouseEnter: () => eye.addFocus(true),
    onMouseLeave: () => eye.addFocus(false),
  }
}

/** Hover handlers that make the pupil dilate (buttons / CTAs). */
export function dilateHandlers(eye: EyeController) {
  return {
    onMouseEnter: () => eye.addDilate(true),
    onMouseLeave: () => eye.addDilate(false),
  }
}

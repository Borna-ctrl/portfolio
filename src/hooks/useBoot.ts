import { useEffect, useState } from 'react'

export type BootPhase = 'boot' | 'init' | 'verify' | 'eye' | 'ready'

/**
 * Runs the ~3s cinematic boot timeline once on mount. When reduced motion is
 * requested, jumps straight to 'ready'.
 */
export function useBoot(reduced: boolean): BootPhase {
  const [phase, setPhase] = useState<BootPhase>(reduced ? 'ready' : 'boot')

  useEffect(() => {
    if (reduced) {
      setPhase('ready')
      return
    }
    const timers = [
      window.setTimeout(() => setPhase('init'), 220),
      window.setTimeout(() => setPhase('verify'), 1150),
      window.setTimeout(() => setPhase('eye'), 1950),
      window.setTimeout(() => setPhase('ready'), 2950),
    ]
    return () => timers.forEach(clearTimeout)
  }, [reduced])

  return phase
}

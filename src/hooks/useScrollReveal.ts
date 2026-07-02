import { useEffect } from 'react'

/**
 * Fades in every element carrying `data-reveal` as it scrolls into view.
 * Adds an `.in` class via IntersectionObserver, with a safety net that
 * reveals anything still hidden after a short delay.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )

    let io: IntersectionObserver | null = null
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in')
              io?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 },
      )
      els.forEach((el) => io!.observe(el))
    } else {
      els.forEach((el) => el.classList.add('in'))
    }

    const safety = window.setTimeout(() => {
      document
        .querySelectorAll('[data-reveal]:not(.in)')
        .forEach((el) => el.classList.add('in'))
    }, 2600)

    return () => {
      io?.disconnect()
      window.clearTimeout(safety)
    }
  }, [])
}

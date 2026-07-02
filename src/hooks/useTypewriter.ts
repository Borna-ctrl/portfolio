import { useEffect, useState } from 'react'

interface TypewriterOptions {
  typeSpeed?: number
  deleteSpeed?: number
  pauseEnd?: number
  pauseStart?: number
}

/**
 * Cycles through `words`, typing each out character by character, pausing,
 * then deleting and moving to the next. Mirrors the reference design's timing.
 * Pass a stable `words` reference (e.g. a module constant) to avoid restarts.
 */
export function useTypewriter(
  words: string[],
  {
    typeSpeed = 105,
    deleteSpeed = 45,
    pauseEnd = 1500,
    pauseStart = 320,
  }: TypewriterOptions = {},
): string {
  const [text, setText] = useState('')

  useEffect(() => {
    if (words.length === 0) return

    let ri = 0
    let ci = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    const step = () => {
      const word = words[ri % words.length]
      if (deleting) ci--
      else ci++

      setText(word.slice(0, Math.max(0, ci)))

      let delay = deleting ? deleteSpeed : typeSpeed
      if (!deleting && ci >= word.length) {
        deleting = true
        delay = pauseEnd
      } else if (deleting && ci <= 0) {
        deleting = false
        ri++
        delay = pauseStart
      }
      timer = setTimeout(step, delay)
    }

    timer = setTimeout(step, typeSpeed)
    return () => clearTimeout(timer)
  }, [words, typeSpeed, deleteSpeed, pauseEnd, pauseStart])

  return text
}

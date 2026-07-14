import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV, type SectionId } from '../content'
import { useEye } from '../eye/EyeContext'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useBoot } from '../hooks/useBoot'

import AmbientBackground from './AmbientBackground'
import Eye from './Eye'
import RadialNav from './RadialNav'
import TopNav from './TopNav'
import CornerHUD from './CornerHUD'
import CustomCursor from './CustomCursor'
import BootSequence from './BootSequence'

import Home from '../sections/Home'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Skills from '../sections/Skills'
import Contact from '../sections/Contact'

const CAM_EASE = [0.16, 0.9, 0.2, 1] as const

function renderSection(id: SectionId) {
  switch (id) {
    case 'about':
      return <About />
    case 'projects':
      return <Projects />
    case 'experience':
      return <Experience />
    case 'skills':
      return <Skills />
    case 'contact':
      return <Contact />
    default:
      return null
  }
}

export default function CoreStage() {
  const eye = useEye()
  const reduced = usePrefersReducedMotion()
  const phase = useBoot(reduced)
  const [active, setActive] = useState<SectionId>('home')

  const eyeOpen = phase === 'eye' || phase === 'ready'
  const eyeRun = phase === 'ready'
  const revealed = phase === 'ready'
  const isHome = active === 'home'

  const navigate = useCallback(
    (id: SectionId) => {
      setActive((prev) => {
        if (prev === id) return prev
        // Blink and glance toward the target's radial angle.
        eye.blink()
        const i = NAV.findIndex((n) => n.id === id)
        if (id === 'home' || i <= 0) {
          eye.setLook(0, 0, 900)
        } else {
          const deg = -178 + (i * 176) / (NAV.length - 1)
          const rad = (deg * Math.PI) / 180
          eye.setLook(Math.cos(rad), Math.sin(rad), 1000)
        }
        return id
      })
    },
    [eye],
  )

  return (
    <div className={`core-stage${revealed ? ' revealed' : ''}`}>
      <AmbientBackground />

      {/* eye cluster — shrinks + lifts in section mode (camera pull-back) */}
      <div className="eye-cluster">
        <motion.div
          animate={isHome ? { scale: 1, y: 0 } : { scale: 0.4, y: '-24vh' }}
          transition={{ duration: 1.15, ease: CAM_EASE }}
          style={{ position: 'relative', cursor: isHome ? 'default' : 'pointer' }}
          onClick={isHome ? undefined : () => navigate('home')}
        >
          <Eye open={eyeOpen} run={eyeRun} />
        </motion.div>

        {isHome && <RadialNav active={active} onNavigate={navigate} />}
      </div>

      {/* home hero */}
      {isHome && <Home />}

      {/* section layers */}
      <AnimatePresence mode="popLayout">
        {!isHome && (
          <motion.div
            key={active}
            className="section-layer"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, ease: CAM_EASE }}
          >
            {renderSection(active)}
          </motion.div>
        )}
      </AnimatePresence>

      {/* section-mode top nav */}
      <AnimatePresence>{!isHome && <TopNav active={active} onNavigate={navigate} />}</AnimatePresence>

      <CornerHUD active={active} />
      <CustomCursor />
      <BootSequence phase={phase} />
    </div>
  )
}

import { motion } from 'framer-motion'
import { NAV, type SectionId } from '../content'

interface TopNavProps {
  active: SectionId
  onNavigate: (id: SectionId) => void
}

/** Compact glass nav bar shown in section mode (top-centered). */
export default function TopNav({ active, onNavigate }: TopNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'absolute', top: 18, left: '50%', translateX: '-50%', zIndex: 40 }}
    >
      <div className="topnav">
        {NAV.map((n) => (
          <button
            key={n.id}
            data-active={active === n.id ? '1' : '0'}
            onClick={() => onNavigate(n.id)}
          >
            {n.label}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

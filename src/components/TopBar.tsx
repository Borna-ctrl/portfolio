import type { Theme } from '../hooks/useTheme'

interface TopBarProps {
  active: string
  theme: Theme
  onToggleTheme: () => void
}

const NAV_LINKS = ['about', 'projects', 'experience', 'contact']

/** Editor tab bar: window buttons + filename on the left, nav + theme toggle. */
export default function TopBar({ active, theme, onToggleTheme }: TopBarProps) {
  return (
    <header className="tabbar">
      <div className="tab-left">
        <span className="dot dot-r" aria-hidden="true" />
        <span className="dot dot-y" aria-hidden="true" />
        <span className="dot dot-g" aria-hidden="true" />
        <span className="filename">~/borna-nobari — portfolio.tsx</span>
      </div>

      <div className="tab-right">
        <nav className="nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={active === link ? 'active' : undefined}
              aria-current={active === link ? 'true' : undefined}
            >
              {link}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? '☀ light' : '☾ dark'}
        </button>
      </div>
    </header>
  )
}

import TopBar from './components/TopBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { useTheme } from './hooks/useTheme'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useScrollSpy } from './hooks/useScrollSpy'

const SECTION_IDS = ['about', 'projects', 'experience', 'contact']

export default function App() {
  const { theme, toggle } = useTheme()
  useScrollReveal()
  const active = useScrollSpy(SECTION_IDS)

  return (
    <div className="page">
      <div className="editor">
        <TopBar active={active} theme={theme} onToggleTheme={toggle} />
        <main className="content">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  )
}

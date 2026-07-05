import { useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'
import { ROLES } from '../data'

function PortraitCard() {
  // Until a real photo is dropped into public/portrait.jpg, show a labelled
  // placeholder instead of a broken-image icon.
  const [hasImage, setHasImage] = useState(true)

  return (
    <div className="portrait-card">
      <div className="term-bar">
        <span className="dot dot-r" aria-hidden="true" />
        <span className="dot dot-y" aria-hidden="true" />
        <span className="dot dot-g" aria-hidden="true" />
        <span className="term-title">~/borna.jpg</span>
      </div>
      <div className="portrait-media">
        {hasImage ? (
          <img
            src={`${import.meta.env.BASE_URL}portrait.jpg`}
            alt="Borna Nobari"
            loading="lazy"
            onError={() => setHasImage(false)}
          />
        ) : (
          <span className="portrait-placeholder">// add public/portrait.jpg</span>
        )}
      </div>
      <div className="portrait-status">
        <span className="tok-accent">➜</span> <span className="tok-muted">~</span>{' '}
        Systemutvecklare · Göteborg
      </div>
    </div>
  )
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section className="hero" data-reveal>
      <div>
        <p className="prompt-line">borna@dev:~$ whoami</p>
        <h1 className="hero-title">Borna Nobari</h1>
        <p className="role-line">
          <span className="kw">const role = </span>
          <span className="role">
            "<span aria-live="polite">{typed}</span>"
          </span>
          <span className="cur cur-accent" aria-hidden="true" />
        </p>
        <p className="hero-intro">
          // Systems-development student with hands-on experience in IT support,
          troubleshooting and process automation with PowerShell. I combine
          technical skill with responsibility and teamwork — and I want to help
          companies work smarter through digital solutions.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#projects">
            ./view-projects
          </a>
          <a className="btn btn-ghost" href="#contact">
            ./contact-me
          </a>
        </div>
      </div>

      <PortraitCard />
    </section>
  )
}

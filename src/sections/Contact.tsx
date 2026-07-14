import { useState, type FormEvent } from 'react'
import SectionHeader from './SectionHeader'
import { contact } from '../content'
import { useEye, dilateHandlers } from '../eye/EyeContext'

export default function Contact() {
  const eye = useEye()
  const [charging, setCharging] = useState(false)
  const [queued, setQueued] = useState(false)

  const lookDown = () => eye.setLook(0, 0.9, 1600)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (charging || queued) return
    setCharging(true)
    window.setTimeout(() => {
      setCharging(false)
      setQueued(true)
      window.setTimeout(() => setQueued(false), 2000)
    }, 1300)
  }

  return (
    <>
      <SectionHeader idx="06" name="OPEN CHANNEL" title="Contact" />
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 22,
          alignItems: 'start',
        }}
      >
        {/* form */}
        <form className="glass" style={{ padding: 24, display: 'grid', gap: 14 }} onSubmit={onSubmit}>
          <input className="cin" name="name" type="text" placeholder="NAME" aria-label="Name" onFocus={lookDown} required />
          <input className="cin" name="email" type="email" placeholder="EMAIL" aria-label="Email" onFocus={lookDown} required />
          <textarea
            className="cin"
            name="message"
            rows={5}
            placeholder="MESSAGE"
            aria-label="Message"
            onFocus={lookDown}
            style={{ resize: 'vertical' }}
            required
          />
          <button
            type="submit"
            className="hud-btn hud-btn--primary send-btn"
            data-charging={charging ? '1' : '0'}
            style={{ position: 'relative', overflow: 'hidden' }}
            {...dilateHandlers(eye)}
          >
            <span className="charge-bar" style={{ position: 'absolute', left: 0, top: 0, bottom: 0 }} />
            <span style={{ position: 'relative' }}>
              {queued ? 'TRANSMISSION QUEUED →' : 'Transmit'}
            </span>
          </button>
        </form>

        {/* channels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {contact.channels.map((c) => (
            <a
              key={c.label}
              className="glass panel"
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={{ padding: '16px 18px', display: 'block' }}
              {...dilateHandlers(eye)}
            >
              <div className="mono" style={{ fontSize: 10, letterSpacing: 3, color: 'var(--cy)' }}>
                {c.label}
              </div>
              <div style={{ color: 'var(--fg-soft)', fontSize: 14, marginTop: 4 }}>{c.value}</div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

import { useState, type FormEvent } from 'react'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // No real backend — acknowledge locally so the form feels responsive.
    setSent(true)
  }

  return (
    <section id="contact" className="block block-last" data-reveal>
      <SectionHeading label="contact" />
      <div className="contact-grid">
        <div>
          <p className="contact-lead">
            Got a project, a role, or a hard problem worth solving? My inbox is
            open.
          </p>
          <div className="contact-links">
            <a href="mailto:boraza0612@gmail.com">
              <span className="lbl">email</span> &nbsp;→&nbsp; boraza0612@gmail.com
            </a>
            <a href="tel:+46707554398">
              <span className="lbl">phone</span> &nbsp;→&nbsp; 070 755 43 98
            </a>
            <a
              href="https://www.linkedin.com/in/borna-nobari-3b641a355/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="lbl">linkedin</span> &nbsp;→&nbsp; in/borna-nobari
            </a>
          </div>
        </div>

        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="c-name">name</label>
              <input id="c-name" name="name" type="text" placeholder="your name" required />
            </div>
            <div className="field">
              <label htmlFor="c-email">email</label>
              <input
                id="c-email"
                name="email"
                type="email"
                placeholder="you@mail.com"
                required
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="c-message">message</label>
            <textarea
              id="c-message"
              name="message"
              rows={4}
              placeholder="tell me about it..."
              required
            />
          </div>
          <button type="submit" className="btn-send">
            {sent ? 'message sent ✓' : 'send message →'}
          </button>
          {sent && (
            <p className="form-note" role="status">
              // thanks — this is a demo form, nothing was actually sent.
            </p>
          )}
        </form>
      </div>

      <footer className="footer">
        <span>© 2026 Borna Nobari — built from scratch</span>
        <span>designed &amp; developed with &lt;/&gt; and coffee</span>
      </footer>
    </section>
  )
}

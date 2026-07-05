import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="block" data-reveal>
      <SectionHeading label="about" />
      <div className="about-grid">
        <div>
          <p className="about-p1">
            I'm a systems-development student at Högskolan Väst with a strong
            interest in how technology can streamline and automate the way
            businesses work. I've gained practical experience in IT support,
            troubleshooting across databases and servers, and building
            automation with PowerShell.
          </p>
          <p className="about-p2">
            I combine technical know-how with responsibility and a collaborative
            mindset carried over from earlier roles. My goal is to use that
            experience to help companies work smarter, grow, and keep evolving
            through solid digital solutions.
          </p>
        </div>

        <div className="facts">
          <div className="tok-comment">// quick.facts</div>
          <div>
            <span className="tok-key">focus</span> ={' '}
            <span className="tok-str">"Always leveling up"</span>
          </div>
          <div>
            <span className="tok-key">location</span> ={' '}
            <span className="tok-str">"Göteborg, SE"</span>
          </div>
          <div>
            <span className="tok-key">education</span> ={' '}
            <span className="tok-str">"Högskolan Väst"</span>
          </div>
          <div>
            <span className="tok-key">caffeine</span> ={' '}
            <span className="tok-str">Infinity</span>
          </div>
        </div>
      </div>
    </section>
  )
}

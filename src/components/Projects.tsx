import SectionHeading from './SectionHeading'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="block" data-reveal>
      <SectionHeading label="projects" />
      <div className="projects-grid">
        {projects.map((p) => (
          <article className="proj-card" key={p.idx}>
            <div className="holo">
              <span>// {p.shot}</span>
            </div>
            <div className="proj-body">
              <div className="proj-head">
                <span className="proj-idx">{p.idx}</span>
                <h3 className="proj-title">{p.title}</h3>
              </div>
              <p className="proj-desc">{p.desc}</p>
              <div className="chip-row">
                {p.tags.map((t) => (
                  <span className="chip chip-accent" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="proj-links">
                <a
                  className="proj-git"
                  href="#projects"
                  aria-label={`${p.title} source on GitHub`}
                >
                  [ git ]
                </a>
                <a
                  className="proj-demo"
                  href="#projects"
                  aria-label={`${p.title} live demo`}
                >
                  live demo →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

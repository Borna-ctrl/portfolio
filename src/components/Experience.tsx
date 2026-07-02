import SectionHeading from './SectionHeading'
import { jobs, skillGroups } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="block" data-reveal>
      <SectionHeading label="experience" />

      <ol className="timeline">
        {jobs.map((j) => (
          <li className="job" key={j.role}>
            <span className="dot-node" aria-hidden="true" />
            <div className="job-period">{j.period}</div>
            <div className="job-head">
              <h3 className="job-role">{j.role}</h3>
              <span className="job-company">@ {j.company}</span>
            </div>
            <p className="job-desc">{j.desc}</p>
          </li>
        ))}
      </ol>

      <SectionHeading label="stack" />
      <div className="skills-grid">
        {skillGroups.map((g) => (
          <div className="skill-card" key={g.name}>
            <div className="skill-head">
              <span className="skill-sym">{g.sym}</span>
              <span className="skill-name">{g.name}</span>
            </div>
            <div className="chip-row">
              {g.items.map((s) => (
                <span className="chip chip-muted" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

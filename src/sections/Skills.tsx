import SectionHeader from './SectionHeader'
import SkillsConstellation from './SkillsConstellation'

export default function Skills() {
  return (
    <>
      <SectionHeader idx="05" name="NEURAL CAPABILITY MAP" title="Skills" />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
        <div className="skills-scale">
          <SkillsConstellation />
        </div>
      </div>
    </>
  )
}

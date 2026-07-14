interface SectionHeaderProps {
  idx: string
  name: string
  title: string
}

/** `// SECTOR 0N · NAME` kicker + large gradient title, reused per section. */
export default function SectionHeader({ idx, name, title }: SectionHeaderProps) {
  return (
    <div style={{ maxWidth: 1120, margin: '0 auto' }}>
      <div className="sechead">
        // SECTOR {idx} · {name}
      </div>
      <h2 className="sectitle">{title}</h2>
    </div>
  )
}

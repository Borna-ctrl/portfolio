interface SectionHeadingProps {
  label: string
}

/** `// LABEL` heading with a flexing rule, reused across every section. */
export default function SectionHeading({ label }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="sh-slash" aria-hidden="true">
        //
      </span>
      <h2 className="sh-title">{label}</h2>
      <span className="sh-line" aria-hidden="true" />
    </div>
  )
}

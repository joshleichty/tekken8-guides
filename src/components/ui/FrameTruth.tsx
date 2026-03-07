import styles from './FrameTruth.module.css'

interface FrameEntry {
  input: string
  displayed: string
  penalty: string
  actual: string
  consequence: string
  severity: 'danger' | 'warning' | 'safe'
}

interface FrameTruthProps {
  title: string
  description?: string
  entries: FrameEntry[]
  explanation?: string
}

export function FrameTruth({ title, description, entries, explanation }: FrameTruthProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon}>&#x26A0;&#xFE0F;</div>
        <div className={styles.headerText}>
          <div className={styles.label}>Frame Truth</div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>

      {description && <p className={styles.description}>{description}</p>}

      <div className={styles.table}>
        <div className={`${styles.row} ${styles.head}`}>
          <div className={styles.cell}>Move</div>
          <div className={styles.cell}>Shows</div>
          <div className={styles.cell}>Penalty</div>
          <div className={styles.cell}>Reality</div>
          <div className={styles.cell}>What This Means</div>
        </div>
        {entries.map((entry, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.cell}>
              <code className={styles.moveInput}>{entry.input}</code>
            </div>
            <div className={`${styles.cell} ${styles.displayed}`}>{entry.displayed}</div>
            <div className={styles.cell}>
              <span className={styles.penalty}>{entry.penalty}</span>
            </div>
            <div className={styles.cell}>
              <span className={styles.actual}>{entry.actual}</span>
            </div>
            <div className={styles.cell}>
              <span className={`${styles.consequence} ${styles[entry.severity]}`}>
                {entry.consequence}
              </span>
            </div>
          </div>
        ))}
      </div>

      {explanation && <div className={styles.explanation}>{explanation}</div>}
    </div>
  )
}

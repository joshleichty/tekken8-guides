import styles from './DecisionGrid.module.css'

interface DecisionRow {
  situation: string
  response: string
  reason: string
  risk?: string
}

interface DecisionGridProps {
  title: string
  description?: string
  rows: DecisionRow[]
}

export function DecisionGrid({ title, description, rows }: DecisionGridProps) {
  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        <div className={styles.icon}>🧭</div>
        <div className={styles.headerText}>
          <div className={styles.label}>Decision Map</div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>

      {description && <p className={styles.description}>{description}</p>}

      <div className={styles.table}>
        <div className={`${styles.row} ${styles.head}`}>
          <div className={styles.cell}>If you see</div>
          <div className={styles.cell}>Do this</div>
          <div className={styles.cell}>Why</div>
          <div className={styles.cell}>Risk</div>
        </div>
        {rows.map((row, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.cell}>{row.situation}</div>
            <div className={`${styles.cell} ${styles.response}`}>
              <code>{row.response}</code>
            </div>
            <div className={styles.cell}>{row.reason}</div>
            <div className={styles.cell}>{row.risk || '—'}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

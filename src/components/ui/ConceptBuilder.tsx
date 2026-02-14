import styles from './ConceptBuilder.module.css'

interface BuildingBlock {
  label: string
  description?: string
  input?: string
  isNew?: boolean
}

interface ConceptBuilderProps {
  title: string
  subtitle?: string
  foundation: BuildingBlock[]
  newAddition: BuildingBlock
  result: string
}

export function ConceptBuilder({
  title,
  subtitle,
  foundation,
  newAddition,
  result
}: ConceptBuilderProps) {
  return (
    <div className={styles.builder}>
      <div className={styles.header}>
        <div className={styles.icon}>🧱</div>
        <div className={styles.headerContent}>
          <div className={styles.title}>{title}</div>
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </div>
      </div>

      <div className={styles.steps}>
        {foundation.map((block, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.stepLabel}>{block.label}</div>
            {block.input && (
              <span className={styles.stepValue}>{block.input}</span>
            )}
            {block.description && (
              <div className={styles.stepDesc}>{block.description}</div>
            )}
          </div>
        ))}

        <div className={`${styles.step} ${styles.newStep}`}>
          <div className={styles.newBadge}>NEW</div>
          <div className={styles.stepLabel}>{newAddition.label}</div>
          {newAddition.input && (
            <span className={styles.stepValue}>{newAddition.input}</span>
          )}
          {newAddition.description && (
            <div className={styles.stepDesc}>{newAddition.description}</div>
          )}
        </div>
      </div>

      <div className={styles.result}>
        <div className={styles.resultLabel}>Result</div>
        <div className={styles.resultContent}>{result}</div>
      </div>
    </div>
  )
}

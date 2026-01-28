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

      <div className={styles.blocks}>
        <div className={styles.foundation}>
          <div className={styles.sectionLabel}>What you know</div>
          {foundation.map((block, index) => (
            <div key={index} className={styles.block}>
              <div className={styles.blockLabel}>{block.label}</div>
              {block.input && (
                <span className={styles.blockInput}>{block.input}</span>
              )}
              {block.description && (
                <div className={styles.blockDesc}>{block.description}</div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.plusSign}>+</div>

        <div className={styles.addition}>
          <div className={styles.sectionLabel}>New concept</div>
          <div className={`${styles.block} ${styles.newBlock}`}>
            <div className={styles.newBadge}>NEW</div>
            <div className={styles.blockLabel}>{newAddition.label}</div>
            {newAddition.input && (
              <span className={styles.blockInput}>{newAddition.input}</span>
            )}
            {newAddition.description && (
              <div className={styles.blockDesc}>{newAddition.description}</div>
            )}
          </div>
        </div>

        <div className={styles.equalsSign}>=</div>

        <div className={styles.result}>
          <div className={styles.sectionLabel}>Result</div>
          <div className={styles.resultContent}>
            {result}
          </div>
        </div>
      </div>
    </div>
  )
}

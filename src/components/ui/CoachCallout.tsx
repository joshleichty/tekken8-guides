import styles from './CoachCallout.module.css'

interface CoachCalloutProps {
  quote: string
  context?: string
  icon?: string
}

export function CoachCallout({ quote, context, icon = '🎙️' }: CoachCalloutProps) {
  return (
    <div className={styles.callout}>
      <div className={styles.accent} />
      <div className={styles.body}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.content}>
          <blockquote className={styles.quote}>{quote}</blockquote>
          {context && <p className={styles.context}>{context}</p>}
        </div>
      </div>
    </div>
  )
}

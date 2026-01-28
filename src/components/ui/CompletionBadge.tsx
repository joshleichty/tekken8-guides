import styles from './CompletionBadge.module.css'

interface CompletionBadgeProps {
  message?: string
  title?: string
  description?: string
}

export function CompletionBadge({ message, title, description }: CompletionBadgeProps) {
  return (
    <div className={styles.badge}>
      {title && <div className={styles.title}>{title}</div>}
      {message && <div className={styles.message}>{message}</div>}
      {description && <div className={styles.description}>{description}</div>}
    </div>
  )
}

import type { ReactNode } from 'react'
import styles from './SituationCard.module.css'

interface SituationCardProps {
  title: string
  children: ReactNode
}

export function SituationCard({ title, children }: SituationCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

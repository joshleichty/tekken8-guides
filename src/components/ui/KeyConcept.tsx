import type { ReactNode } from 'react'
import styles from './KeyConcept.module.css'

interface KeyConceptProps {
  title: string
  icon?: string
  children: ReactNode
}

export function KeyConcept({ title, icon = '🔑', children }: KeyConceptProps) {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <span className={styles.icon}>{icon}</span>
        {title}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

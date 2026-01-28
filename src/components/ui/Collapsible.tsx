import { useState, type ReactNode } from 'react'
import styles from './Collapsible.module.css'

interface CollapsibleProps {
  title: string
  icon?: string
  defaultOpen?: boolean
  children: ReactNode
}

export function Collapsible({ title, icon = '📖', defaultOpen = false, children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`${styles.collapsible} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.title}>
          <span className={styles.icon}>{icon}</span>
          {title}
        </span>
        <span className={styles.arrow}>▼</span>
      </div>
      <div className={styles.content}>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  )
}

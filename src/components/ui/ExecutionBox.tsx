import type { ReactNode } from 'react'
import styles from './ExecutionBox.module.css'

interface ExecutionBoxProps {
  title: string
  icon?: string
  children: ReactNode
}

export function ExecutionBox({ title, icon = '🎮', children }: ExecutionBoxProps) {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

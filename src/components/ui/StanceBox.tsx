import type { ReactNode } from 'react'
import styles from './StanceBox.module.css'

interface StanceBoxProps {
  name: string
  input: string
  icon?: string
  children: ReactNode
}

export function StanceBox({ name, input, icon = '🦁', children }: StanceBoxProps) {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.info}>
          <div className={styles.title}>{name}</div>
          <div className={styles.input}>{input}</div>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

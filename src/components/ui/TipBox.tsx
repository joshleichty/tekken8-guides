import type { ReactNode } from 'react'
import styles from './TipBox.module.css'

interface TipBoxProps {
  title: string
  children: ReactNode
  variant?: 'tip' | 'warning' | 'danger'
  icon?: string
}

const defaultIcons = {
  tip: '💡',
  warning: '⚠️',
  danger: '⚠️',
}

export function TipBox({ title, children, variant = 'tip', icon }: TipBoxProps) {
  return (
    <div className={`${styles.box} ${styles[variant]}`}>
      <span className={styles.icon}>{icon || defaultIcons[variant]}</span>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{children}</div>
      </div>
    </div>
  )
}

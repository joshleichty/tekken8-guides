import styles from './MobileHeader.module.css'

interface MobileHeaderProps {
  title: string
  onMenuClick: () => void
}

export function MobileHeader({ title, onMenuClick }: MobileHeaderProps) {
  return (
    <div className={styles.header}>
      <button className={styles.menuBtn} onClick={onMenuClick}>
        ☰
      </button>
      <span className={styles.title}>{title}</span>
      <span className={styles.spacer} />
    </div>
  )
}

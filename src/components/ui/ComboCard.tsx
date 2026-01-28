import type { ReactNode } from 'react'
import styles from './ComboCard.module.css'

interface ComboCardProps {
  title: string
  notation?: string
  damage?: string
  notes?: string | string[]
  children?: ReactNode
  // Extended props for richer combo cards
  starter?: string
  route?: string[]
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  wallCarry?: boolean
}

export function ComboCard({ title, notation, damage, notes, children, starter, route, difficulty, wallCarry }: ComboCardProps) {
  // Build notation from route array if provided
  const finalNotation = notation ?? (route ? route.join(' → ') : '')
  
  // Parse notation to highlight tornado markers
  const formattedNotation = finalNotation.replace(/T!/g, '<span class="tornado">T!</span>')
  
  // Handle notes as string or array
  const notesArray = typeof notes === 'string' ? [notes] : notes

  const difficultyColors = {
    beginner: 'var(--success)',
    intermediate: 'var(--warning)',
    advanced: 'var(--accent-secondary)'
  }
  
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        {(difficulty || wallCarry) && (
          <div className={styles.badges}>
            {difficulty && (
              <span 
                className={styles.badge}
                style={{ background: difficultyColors[difficulty] }}
              >
                {difficulty}
              </span>
            )}
            {wallCarry && (
              <span className={`${styles.badge} ${styles.wallBadge}`}>
                Wall Carry
              </span>
            )}
          </div>
        )}
      </div>
      {starter && (
        <div className={styles.starter}>
          <span className={styles.starterLabel}>Starter:</span>
          <span className={styles.starterValue}>{starter}</span>
        </div>
      )}
      <div 
        className={styles.notation}
        dangerouslySetInnerHTML={{ __html: formattedNotation }}
      />
      {damage && <div className={styles.damage}>{damage}</div>}
      {notesArray && notesArray.length > 0 && (
        <ul className={styles.notes}>
          {notesArray.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      )}
      {children}
    </div>
  )
}

import styles from './InputNotation.module.css'

interface InputNotationProps {
  notation: string
  size?: 'normal' | 'large'
}

export function InputNotation({ notation, size = 'normal' }: InputNotationProps) {
  // Parse notation and highlight arrows and buttons
  const parts = notation.split(/(\s*→\s*|\s*,\s*|\+)/)
  
  return (
    <div className={`${styles.box} ${styles[size]}`}>
      {parts.map((part, i) => {
        if (part.includes('→')) {
          return <span key={i} className={styles.arrow}>{part}</span>
        }
        if (/^[1-4]$/.test(part.trim())) {
          return <span key={i} className={styles.button}>{part}</span>
        }
        return <span key={i}>{part}</span>
      })}
    </div>
  )
}

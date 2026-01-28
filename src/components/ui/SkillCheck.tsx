import { useState } from 'react'
import styles from './SkillCheck.module.css'

interface SkillItem {
  id: string
  skill: string
  description?: string
}

interface SkillCheckProps {
  title: string
  subtitle?: string
  skills: SkillItem[]
  requiredToPass?: number
  onAllComplete?: () => void
}

export function SkillCheck({ 
  title, 
  subtitle,
  skills, 
  requiredToPass,
  onAllComplete 
}: SkillCheckProps) {
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const required = requiredToPass || skills.length
  const passed = checked.size >= required

  const handleCheck = (id: string) => {
    const newChecked = new Set(checked)
    if (checked.has(id)) {
      newChecked.delete(id)
    } else {
      newChecked.add(id)
    }
    setChecked(newChecked)
    
    if (newChecked.size >= required && !passed) {
      onAllComplete?.()
    }
  }

  return (
    <div className={`${styles.skillCheck} ${passed ? styles.passed : ''}`}>
      <div className={styles.header}>
        <div className={styles.icon}>{passed ? '✅' : '📋'}</div>
        <div className={styles.headerContent}>
          <div className={styles.title}>{title}</div>
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </div>
        <div className={`${styles.badge} ${passed ? styles.badgePassed : ''}`}>
          {checked.size}/{skills.length}
        </div>
      </div>

      {passed && (
        <div className={styles.passedMessage}>
          <span className={styles.passedIcon}>🎉</span>
          Ready to move on! You've demonstrated the core skills.
        </div>
      )}

      <div className={styles.skills}>
        {skills.map((skill) => {
          const isChecked = checked.has(skill.id)
          return (
            <div
              key={skill.id}
              className={`${styles.skill} ${isChecked ? styles.checked : ''}`}
              onClick={() => handleCheck(skill.id)}
            >
              <div className={styles.checkbox}>
                {isChecked && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <div className={styles.skillContent}>
                <div className={styles.skillText}>{skill.skill}</div>
                {skill.description && (
                  <div className={styles.skillDesc}>{skill.description}</div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {!passed && (
        <div className={styles.hint}>
          Check off each skill you can confidently perform. Need {required - checked.size} more to proceed.
        </div>
      )}
    </div>
  )
}

import { useState } from 'react'
import styles from './ModeSwitch.module.css'

interface Mode {
  name: string
  icon: string
  color: 'accent' | 'secondary'
  trigger: string
  rules: string[]
  keyTools: string[]
  exitCondition: string
}

interface ModeSwitchProps {
  title: string
  description?: string
  modes: Mode[]
}

export function ModeSwitch({ title, description, modes }: ModeSwitchProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon}>⚡</div>
        <div className={styles.headerText}>
          <div className={styles.label}>Mode Map</div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>

      {description && <p className={styles.description}>{description}</p>}

      <div className={styles.modes}>
        {modes.map((mode, index) => {
          const isActive = activeIndex === index
          const colorClass = mode.color === 'accent' ? styles.accentColor : styles.secondaryColor

          return (
            <div
              key={index}
              className={`${styles.mode} ${colorClass} ${isActive ? styles.expanded : ''}`}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <div className={styles.modeHeader}>
                <div className={styles.modeIcon}>{mode.icon}</div>
                <div className={styles.modeName}>{mode.name}</div>
                <div className={`${styles.chevron} ${isActive ? styles.chevronOpen : ''}`}>▾</div>
              </div>

              <div className={styles.modeTrigger}>
                <span className={styles.triggerLabel}>Enter when:</span> {mode.trigger}
              </div>

              {isActive && (
                <div className={styles.modeBody}>
                  <div className={styles.section}>
                    <div className={styles.sectionTitle}>Rules</div>
                    <ul className={styles.list}>
                      {mode.rules.map((rule, i) => (
                        <li key={i}>{rule}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.section}>
                    <div className={styles.sectionTitle}>Key Tools</div>
                    <div className={styles.tools}>
                      {mode.keyTools.map((tool, i) => (
                        <code key={i} className={styles.tool}>{tool}</code>
                      ))}
                    </div>
                  </div>

                  <div className={styles.exitBox}>
                    <span className={styles.exitLabel}>Exit when:</span> {mode.exitCondition}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

import { useState } from 'react'
import styles from './MatchScenario.module.css'

interface ScenarioOption {
  action: string
  input?: string
  result: string
  isOptimal?: boolean
  followup?: string
}

interface MatchScenarioProps {
  title: string
  situation: string
  context?: string
  options: ScenarioOption[]
  keyTakeaway: string
}

export function MatchScenario({ 
  title, 
  situation, 
  context,
  options,
  keyTakeaway 
}: MatchScenarioProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)

  const handleSelect = (index: number) => {
    if (revealed) return
    setSelectedIndex(index)
    setRevealed(true)
  }

  // Selected option info available if needed
  void (selectedIndex !== null && options[selectedIndex]?.isOptimal)

  return (
    <div className={styles.scenario}>
      <div className={styles.header}>
        <div className={styles.icon}>🎮</div>
        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.situation}>
        <div className={styles.situationLabel}>Situation</div>
        <div className={styles.situationText}>{situation}</div>
        {context && (
          <div className={styles.context}>{context}</div>
        )}
      </div>

      <div className={styles.question}>What do you do?</div>

      <div className={styles.options}>
        {options.map((option, index) => {
          let className = styles.option
          
          if (revealed) {
            if (option.isOptimal) {
              className += ` ${styles.optimal}`
            } else if (index === selectedIndex) {
              className += ` ${styles.selected}`
            } else {
              className += ` ${styles.dimmed}`
            }
          }

          return (
            <div
              key={index}
              className={className}
              onClick={() => handleSelect(index)}
            >
              <div className={styles.optionHeader}>
                <span className={styles.optionAction}>{option.action}</span>
                {option.input && (
                  <span className={styles.optionInput}>{option.input}</span>
                )}
              </div>
              {revealed && (
                <div className={styles.optionResult}>
                  {option.isOptimal && <span className={styles.optimalBadge}>✓ Best</span>}
                  {option.result}
                  {option.followup && (
                    <div className={styles.followup}>→ {option.followup}</div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {revealed && (
        <div className={styles.takeaway}>
          <div className={styles.takeawayIcon}>💡</div>
          <div className={styles.takeawayContent}>
            <div className={styles.takeawayLabel}>Key Takeaway</div>
            <div className={styles.takeawayText}>{keyTakeaway}</div>
          </div>
        </div>
      )}

      {revealed && (
        <button 
          className={styles.resetBtn}
          onClick={() => {
            setSelectedIndex(null)
            setRevealed(false)
          }}
        >
          Try Again
        </button>
      )}
    </div>
  )
}

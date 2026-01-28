import { useState } from 'react'
import styles from './GameChallenge.module.css'

interface ChallengeLevel {
  name: string
  description: string
  goal: string
  successCriteria: string
}

interface GameChallengeProps {
  title: string
  scenario: string
  setup: {
    opponent?: string
    cpuBehavior: string
    position?: string
    recordings?: string[]
    otherSettings?: string[]
  }
  goal: string
  successCriteria: string
  failureTeaches?: string
  hints?: string[]
  levels?: ChallengeLevel[]
  duration?: string
  whyThisWorks?: string
}

export function GameChallenge({
  title,
  scenario,
  setup,
  goal,
  successCriteria,
  failureTeaches,
  hints,
  levels,
  duration,
  whyThisWorks
}: GameChallengeProps) {
  const [expanded, setExpanded] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(0)
  const [completed, setCompleted] = useState<Set<number>>(new Set())

  const handleComplete = (level: number) => {
    const newCompleted = new Set(completed)
    if (completed.has(level)) {
      newCompleted.delete(level)
    } else {
      newCompleted.add(level)
    }
    setCompleted(newCompleted)
  }

  return (
    <div className={styles.challenge}>
      <div className={styles.header}>
        <div className={styles.icon}>🎯</div>
        <div className={styles.headerContent}>
          <div className={styles.title}>{title}</div>
          {duration && <div className={styles.duration}>{duration}</div>}
        </div>
        {levels && levels.length > 0 && (
          <div className={styles.levelBadge}>
            {completed.size}/{levels.length} levels
          </div>
        )}
      </div>

      <div className={styles.scenario}>
        <p>{scenario}</p>
      </div>

      <div className={styles.setupSection}>
        <div 
          className={styles.setupHeader}
          onClick={() => setExpanded(!expanded)}
        >
          <span className={styles.setupIcon}>⚙️</span>
          <span className={styles.setupTitle}>Practice Mode Setup</span>
          <span className={styles.expandIcon}>{expanded ? '−' : '+'}</span>
        </div>
        
        {expanded && (
          <div className={styles.setupContent}>
            {setup.opponent && (
              <div className={styles.setupItem}>
                <span className={styles.setupLabel}>Opponent</span>
                <span className={styles.setupValue}>{setup.opponent}</span>
              </div>
            )}
            <div className={styles.setupItem}>
              <span className={styles.setupLabel}>CPU Behavior</span>
              <span className={styles.setupValue}>{setup.cpuBehavior}</span>
            </div>
            {setup.position && (
              <div className={styles.setupItem}>
                <span className={styles.setupLabel}>Position</span>
                <span className={styles.setupValue}>{setup.position}</span>
              </div>
            )}
            {setup.recordings && setup.recordings.length > 0 && (
              <div className={styles.recordings}>
                <span className={styles.setupLabel}>Recordings</span>
                {setup.recordings.map((rec, i) => (
                  <div key={i} className={styles.recording}>
                    <span className={styles.recNumber}>Slot {i + 1}:</span> {rec}
                  </div>
                ))}
              </div>
            )}
            {setup.otherSettings && setup.otherSettings.length > 0 && (
              <div className={styles.otherSettings}>
                {setup.otherSettings.map((setting, i) => (
                  <div key={i} className={styles.setupItem}>• {setting}</div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {!levels || levels.length === 0 ? (
        <div className={styles.mainContent}>
          <div className={styles.goalBox}>
            <div className={styles.goalLabel}>Goal</div>
            <div className={styles.goalText}>{goal}</div>
          </div>

          <div className={styles.successBox}>
            <div className={styles.successLabel}>✓ Success</div>
            <div className={styles.successText}>{successCriteria}</div>
          </div>

          {failureTeaches && (
            <div className={styles.failureBox}>
              <div className={styles.failureLabel}>If you fail...</div>
              <div className={styles.failureText}>{failureTeaches}</div>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.levelsSection}>
          <div className={styles.levelTabs}>
            {levels.map((level, i) => (
              <button
                key={i}
                className={`${styles.levelTab} ${i === currentLevel ? styles.active : ''} ${completed.has(i) ? styles.completed : ''}`}
                onClick={() => setCurrentLevel(i)}
              >
                {completed.has(i) && <span className={styles.checkmark}>✓</span>}
                {level.name}
              </button>
            ))}
          </div>
          
          <div className={styles.levelContent}>
            <p className={styles.levelDesc}>{levels[currentLevel].description}</p>
            
            <div className={styles.goalBox}>
              <div className={styles.goalLabel}>Goal</div>
              <div className={styles.goalText}>{levels[currentLevel].goal}</div>
            </div>

            <div className={styles.successBox}>
              <div className={styles.successLabel}>✓ Success</div>
              <div className={styles.successText}>{levels[currentLevel].successCriteria}</div>
            </div>

            <button
              className={`${styles.completeBtn} ${completed.has(currentLevel) ? styles.completedBtn : ''}`}
              onClick={() => handleComplete(currentLevel)}
            >
              {completed.has(currentLevel) ? 'Completed ✓' : 'Mark Complete'}
            </button>
          </div>
        </div>
      )}

      {hints && hints.length > 0 && (
        <div className={styles.hints}>
          <div className={styles.hintsLabel}>💡 Tips</div>
          <ul>
            {hints.map((hint, i) => (
              <li key={i}>{hint}</li>
            ))}
          </ul>
        </div>
      )}

      {whyThisWorks && (
        <div className={styles.whyBox}>
          <div className={styles.whyLabel}>Why this works</div>
          <p>{whyThisWorks}</p>
        </div>
      )}
    </div>
  )
}

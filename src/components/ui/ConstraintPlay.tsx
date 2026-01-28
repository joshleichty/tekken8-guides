import { useState } from 'react'
import styles from './ConstraintPlay.module.css'

interface AllowedMove {
  input: string
  purpose: string
}

interface ConstraintPlayProps {
  title: string
  description: string
  allowedMoves: AllowedMove[]
  duration: string
  goal: string
  whatYouLearn: string[]
  setup?: {
    opponent?: string
    cpuBehavior: string
    rounds?: number
  }
  progressionHint?: string
}

export function ConstraintPlay({
  title,
  description,
  allowedMoves,
  duration,
  goal,
  whatYouLearn,
  setup,
  progressionHint
}: ConstraintPlayProps) {
  const [started, setStarted] = useState(false)
  const [completed, setCompleted] = useState(false)

  return (
    <div className={`${styles.constraint} ${completed ? styles.completedState : ''}`}>
      <div className={styles.header}>
        <div className={styles.icon}>🔒</div>
        <div className={styles.headerContent}>
          <div className={styles.label}>Constraint Play</div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.duration}>{duration}</div>
      </div>

      <div className={styles.description}>
        <p>{description}</p>
      </div>

      <div className={styles.movesSection}>
        <div className={styles.movesHeader}>
          <span className={styles.lockIcon}>🔐</span>
          <span>Your Only Moves</span>
        </div>
        <div className={styles.movesList}>
          {allowedMoves.map((move, i) => (
            <div key={i} className={styles.moveItem}>
              <code className={styles.input}>{move.input}</code>
              <span className={styles.purpose}>{move.purpose}</span>
            </div>
          ))}
        </div>
      </div>

      {setup && (
        <div className={styles.setup}>
          <div className={styles.setupTitle}>Setup</div>
          <div className={styles.setupContent}>
            {setup.opponent && <span>vs {setup.opponent}</span>}
            <span>CPU: {setup.cpuBehavior}</span>
            {setup.rounds && <span>{setup.rounds} rounds</span>}
          </div>
        </div>
      )}

      <div className={styles.goalSection}>
        <div className={styles.goalLabel}>Goal</div>
        <div className={styles.goalText}>{goal}</div>
      </div>

      <div className={styles.learnSection}>
        <div className={styles.learnLabel}>What You'll Discover</div>
        <ul>
          {whatYouLearn.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {progressionHint && (
        <div className={styles.progressionHint}>
          <span className={styles.hintIcon}>→</span>
          <span>{progressionHint}</span>
        </div>
      )}

      <div className={styles.actions}>
        {!started ? (
          <button 
            className={styles.startBtn}
            onClick={() => setStarted(true)}
          >
            Start Challenge
          </button>
        ) : !completed ? (
          <>
            <button 
              className={styles.completeBtn}
              onClick={() => setCompleted(true)}
            >
              I Did It
            </button>
            <button 
              className={styles.resetBtn}
              onClick={() => setStarted(false)}
            >
              Reset
            </button>
          </>
        ) : (
          <div className={styles.completedMessage}>
            <span className={styles.checkmark}>✓</span>
            <span>Challenge completed! You've internalized these tools.</span>
          </div>
        )}
      </div>
    </div>
  )
}

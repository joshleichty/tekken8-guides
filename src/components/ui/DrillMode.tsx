import { useState, useEffect, useRef } from 'react'
import styles from './DrillMode.module.css'

interface DrillStep {
  instruction: string
  detail?: string
  targetReps?: number
}

interface DrillModeProps {
  title: string
  objective: string
  setup?: string
  steps: DrillStep[]
  estimatedTime?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
}

export function DrillMode({ 
  title, 
  objective,
  setup, 
  steps,
  estimatedTime,
  difficulty = 'beginner'
}: DrillModeProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [reps, setReps] = useState<number[]>(steps.map(() => 0))
  const [isActive, setIsActive] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setElapsed(e => e + 1)
      }, 1000)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isActive])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const handleRep = () => {
    const newReps = [...reps]
    newReps[currentStep]++
    setReps(newReps)

    const target = steps[currentStep].targetReps || 10
    if (newReps[currentStep] >= target && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleStart = () => {
    setIsActive(true)
    setElapsed(0)
    setReps(steps.map(() => 0))
    setCurrentStep(0)
  }

  const handleStop = () => {
    setIsActive(false)
  }

  const totalProgress = reps.reduce((acc, rep, i) => {
    const target = steps[i].targetReps || 10
    return acc + Math.min(rep / target, 1)
  }, 0) / steps.length * 100

  const isComplete = reps.every((rep, i) => rep >= (steps[i].targetReps || 10))

  const difficultyColors = {
    beginner: 'var(--success)',
    intermediate: 'var(--warning)',
    advanced: 'var(--accent-secondary)'
  }

  return (
    <div className={`${styles.drill} ${isActive ? styles.active : ''} ${isComplete ? styles.complete : ''}`}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.icon}>🔥</div>
          <div className={styles.titleArea}>
            <div className={styles.title}>{title}</div>
            <div className={styles.meta}>
              <span 
                className={styles.difficulty}
                style={{ background: difficultyColors[difficulty] }}
              >
                {difficulty}
              </span>
              {estimatedTime && (
                <span className={styles.time}>⏱️ {estimatedTime}</span>
              )}
            </div>
          </div>
          {!isActive && !isComplete && (
            <button className={styles.startBtn} onClick={handleStart}>
              Start Drill
            </button>
          )}
          {isActive && (
            <div className={styles.timer}>
              {formatTime(elapsed)}
            </div>
          )}
          {isComplete && (
            <div className={styles.completeBadge}>✅ Complete!</div>
          )}
        </div>
        <div className={styles.objective}>{objective}</div>
      </div>

      {setup && (
        <div className={styles.setup}>
          <div className={styles.setupLabel}>Setup</div>
          <div className={styles.setupText}>{setup}</div>
        </div>
      )}

      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ width: `${totalProgress}%` }}
        />
      </div>

      <div className={styles.steps}>
        {steps.map((step, index) => {
          const target = step.targetReps || 10
          const done = reps[index] >= target
          const isCurrent = index === currentStep && isActive
          
          return (
            <div 
              key={index}
              className={`
                ${styles.step} 
                ${done ? styles.stepDone : ''} 
                ${isCurrent ? styles.stepCurrent : ''}
              `}
            >
              <div className={styles.stepHeader}>
                <span className={styles.stepNum}>{index + 1}</span>
                <span className={styles.stepInstruction}>{step.instruction}</span>
                <span className={styles.stepReps}>
                  {reps[index]}/{target}
                </span>
              </div>
              {step.detail && (
                <div className={styles.stepDetail}>{step.detail}</div>
              )}
              {isCurrent && (
                <button 
                  className={styles.repBtn}
                  onClick={handleRep}
                >
                  + Rep (tap or press Space)
                </button>
              )}
            </div>
          )
        })}
      </div>

      {isActive && (
        <div className={styles.controls}>
          <button className={styles.stopBtn} onClick={handleStop}>
            End Drill
          </button>
        </div>
      )}

      {isComplete && (
        <div className={styles.results}>
          <div className={styles.resultTitle}>🏆 Drill Complete!</div>
          <div className={styles.resultTime}>
            Completed in {formatTime(elapsed)}
          </div>
          <button className={styles.restartBtn} onClick={handleStart}>
            Run Again
          </button>
        </div>
      )}
    </div>
  )
}

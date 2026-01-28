import { useState, useEffect } from 'react'
import styles from './ProgressMilestone.module.css'

interface MilestoneStep {
  id: string
  label: string
  description?: string
}

interface ProgressMilestoneProps {
  title: string
  steps: MilestoneStep[]
  currentStep?: number
  onStepComplete?: (stepId: string, stepIndex: number) => void
}

export function ProgressMilestone({ 
  title, 
  steps, 
  currentStep = 0,
  onStepComplete 
}: ProgressMilestoneProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(
    new Set(Array.from({ length: currentStep }, (_, i) => i))
  )
  const [activeStep, setActiveStep] = useState(currentStep)

  useEffect(() => {
    const stored = localStorage.getItem(`milestone-${title}`)
    if (stored) {
      const parsed = JSON.parse(stored)
      setCompletedSteps(new Set(parsed.completed))
      setActiveStep(parsed.active)
    }
  }, [title])

  const handleStepClick = (index: number) => {
    if (index <= Math.max(...Array.from(completedSteps), -1) + 1) {
      const newCompleted = new Set(completedSteps)
      if (completedSteps.has(index)) {
        newCompleted.delete(index)
      } else {
        newCompleted.add(index)
        onStepComplete?.(steps[index].id, index)
      }
      setCompletedSteps(newCompleted)
      setActiveStep(index)
      
      localStorage.setItem(`milestone-${title}`, JSON.stringify({
        completed: Array.from(newCompleted),
        active: index
      }))
    }
  }

  const progress = (completedSteps.size / steps.length) * 100

  return (
    <div className={styles.milestone}>
      <div className={styles.header}>
        <div className={styles.icon}>🎯</div>
        <div className={styles.headerContent}>
          <div className={styles.title}>{title}</div>
          <div className={styles.progressText}>
            {completedSteps.size} of {steps.length} complete
          </div>
        </div>
        <div className={styles.percentBadge}>
          {Math.round(progress)}%
        </div>
      </div>

      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className={styles.steps}>
        {steps.map((step, index) => {
          const isCompleted = completedSteps.has(index)
          const isActive = index === activeStep
          const isAccessible = index <= Math.max(...Array.from(completedSteps), -1) + 1

          return (
            <div
              key={step.id}
              className={`
                ${styles.step} 
                ${isCompleted ? styles.completed : ''} 
                ${isActive ? styles.active : ''}
                ${isAccessible ? styles.accessible : styles.locked}
              `}
              onClick={() => handleStepClick(index)}
            >
              <div className={styles.stepNumber}>
                {isCompleted ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepLabel}>{step.label}</div>
                {step.description && (
                  <div className={styles.stepDescription}>{step.description}</div>
                )}
              </div>
              {!isAccessible && (
                <div className={styles.lockIcon}>🔒</div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

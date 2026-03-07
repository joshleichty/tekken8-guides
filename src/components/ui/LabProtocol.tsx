import { useState } from 'react'
import styles from './LabProtocol.module.css'

interface Phase {
  name: string
  objective: string
  setup: { character?: string; action: string; settings?: string[] }
  method: string
  targetReps?: number
  targetTime?: string
  successLooksLike: string
  commonPitfall?: string
}

interface LabProtocolProps {
  title: string
  objective: string
  estimatedTime: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  phases: Phase[]
  coachingNote?: string
  frequency?: string
}

const difficultyConfig = {
  beginner: { label: 'Beginner', color: 'beginner' },
  intermediate: { label: 'Intermediate', color: 'intermediate' },
  advanced: { label: 'Advanced', color: 'advanced' },
} as const

export function LabProtocol({
  title,
  objective,
  estimatedTime,
  difficulty,
  phases,
  coachingNote,
  frequency,
}: LabProtocolProps) {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0)
  const diffConfig = difficultyConfig[difficulty]

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon}>🔬</div>
        <div className={styles.headerText}>
          <div className={styles.label}>Lab Protocol</div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>

      <div className={styles.meta}>
        <div className={`${styles.metaTag} ${styles[diffConfig.color]}`}>
          {diffConfig.label}
        </div>
        <div className={styles.metaTag}>⏱ {estimatedTime}</div>
        {frequency && <div className={styles.metaTag}>🔁 {frequency}</div>}
      </div>

      <p className={styles.objective}>{objective}</p>

      <div className={styles.phases}>
        {phases.map((phase, index) => {
          const isExpanded = expandedPhase === index

          return (
            <div
              key={index}
              className={`${styles.phase} ${isExpanded ? styles.phaseExpanded : ''}`}
            >
              <div
                className={styles.phaseHeader}
                onClick={() => setExpandedPhase(isExpanded ? null : index)}
              >
                <div className={styles.phaseNumber}>{index + 1}</div>
                <div className={styles.phaseInfo}>
                  <div className={styles.phaseName}>{phase.name}</div>
                  <div className={styles.phaseObjective}>{phase.objective}</div>
                </div>
                <div className={`${styles.chevron} ${isExpanded ? styles.chevronOpen : ''}`}>▾</div>
              </div>

              {isExpanded && (
                <div className={styles.phaseBody}>
                  <div className={styles.setupBox}>
                    <div className={styles.setupTitle}>Setup</div>
                    {phase.setup.character && (
                      <div className={styles.setupLine}>
                        <span className={styles.setupLabel}>Opponent:</span> {phase.setup.character}
                      </div>
                    )}
                    <div className={styles.setupLine}>
                      <span className={styles.setupLabel}>Action:</span> {phase.setup.action}
                    </div>
                    {phase.setup.settings && phase.setup.settings.length > 0 && (
                      <div className={styles.setupSettings}>
                        {phase.setup.settings.map((s, i) => (
                          <code key={i} className={styles.setting}>{s}</code>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={styles.methodBox}>
                    <div className={styles.methodTitle}>Method</div>
                    <p className={styles.methodText}>{phase.method}</p>
                    <div className={styles.targets}>
                      {phase.targetReps && (
                        <div className={styles.target}>
                          <span className={styles.targetValue}>{phase.targetReps}</span>
                          <span className={styles.targetLabel}>reps</span>
                        </div>
                      )}
                      {phase.targetTime && (
                        <div className={styles.target}>
                          <span className={styles.targetValue}>{phase.targetTime}</span>
                          <span className={styles.targetLabel}>duration</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={styles.successBox}>
                    <span className={styles.successIcon}>✓</span>
                    <div>
                      <div className={styles.successLabel}>Success Looks Like</div>
                      <div className={styles.successText}>{phase.successLooksLike}</div>
                    </div>
                  </div>

                  {phase.commonPitfall && (
                    <div className={styles.pitfallBox}>
                      <span className={styles.pitfallIcon}>⚠</span>
                      <div>
                        <div className={styles.pitfallLabel}>Common Pitfall</div>
                        <div className={styles.pitfallText}>{phase.commonPitfall}</div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {coachingNote && (
        <div className={styles.coachNote}>
          <span className={styles.coachIcon}>🎙️</span>
          <p className={styles.coachText}>{coachingNote}</p>
        </div>
      )}
    </div>
  )
}

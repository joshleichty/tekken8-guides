import { useState } from 'react'
import styles from './SituationDrill.module.css'

interface OpponentAction {
  slot: number
  action: string
  yourResponse: string
  timing?: string
}

interface SituationDrillProps {
  title: string
  situation: string
  context: string
  opponentActions: OpponentAction[]
  setup: {
    cpuBehavior: string
    playbackMode: string
    position?: string
    healthSettings?: string
    otherSettings?: string[]
  }
  goal: string
  successCriteria: string
  commonMistakes?: string[]
  mentalCue?: string
}

export function SituationDrill({
  title,
  situation,
  context,
  opponentActions,
  setup,
  goal,
  successCriteria,
  commonMistakes,
  mentalCue
}: SituationDrillProps) {
  const [expandedAction, setExpandedAction] = useState<number | null>(null)

  return (
    <div className={styles.situationDrill}>
      <div className={styles.header}>
        <div className={styles.icon}>🎬</div>
        <div className={styles.headerContent}>
          <div className={styles.label}>Situation Drill</div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>

      <div className={styles.situation}>
        <div className={styles.situationLabel}>The Situation</div>
        <p className={styles.situationText}>{situation}</p>
        <p className={styles.contextText}>{context}</p>
      </div>

      <div className={styles.recordingsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.recordIcon}>⏺</span>
          Record These Actions
        </div>
        <p className={styles.recordInstructions}>
          Record each action in a separate slot, then set playback to "{setup.playbackMode}"
        </p>
        
        <div className={styles.actionsList}>
          {opponentActions.map((action, i) => (
            <div 
              key={i} 
              className={`${styles.actionItem} ${expandedAction === i ? styles.expanded : ''}`}
              onClick={() => setExpandedAction(expandedAction === i ? null : i)}
            >
              <div className={styles.actionHeader}>
                <span className={styles.slotNumber}>Slot {action.slot}</span>
                <span className={styles.actionText}>{action.action}</span>
                <span className={styles.expandIcon}>{expandedAction === i ? '−' : '+'}</span>
              </div>
              {expandedAction === i && (
                <div className={styles.actionDetail}>
                  <div className={styles.responseBox}>
                    <div className={styles.responseLabel}>Your Response</div>
                    <div className={styles.responseText}>{action.yourResponse}</div>
                    {action.timing && (
                      <div className={styles.timing}>
                        <span className={styles.timingIcon}>⏱</span>
                        {action.timing}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.setupSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.gearIcon}>⚙️</span>
          Practice Mode Settings
        </div>
        <div className={styles.setupGrid}>
          <div className={styles.setupItem}>
            <span className={styles.setupLabel}>CPU</span>
            <span className={styles.setupValue}>{setup.cpuBehavior}</span>
          </div>
          <div className={styles.setupItem}>
            <span className={styles.setupLabel}>Playback</span>
            <span className={styles.setupValue}>{setup.playbackMode}</span>
          </div>
          {setup.position && (
            <div className={styles.setupItem}>
              <span className={styles.setupLabel}>Position</span>
              <span className={styles.setupValue}>{setup.position}</span>
            </div>
          )}
          {setup.healthSettings && (
            <div className={styles.setupItem}>
              <span className={styles.setupLabel}>Health</span>
              <span className={styles.setupValue}>{setup.healthSettings}</span>
            </div>
          )}
        </div>
        {setup.otherSettings && setup.otherSettings.length > 0 && (
          <div className={styles.otherSettings}>
            {setup.otherSettings.map((setting, i) => (
              <div key={i} className={styles.otherSetting}>• {setting}</div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.goalSection}>
        <div className={styles.goalBox}>
          <div className={styles.goalLabel}>Goal</div>
          <div className={styles.goalText}>{goal}</div>
        </div>
        <div className={styles.successBox}>
          <div className={styles.successLabel}>✓ Success</div>
          <div className={styles.successText}>{successCriteria}</div>
        </div>
      </div>

      {commonMistakes && commonMistakes.length > 0 && (
        <div className={styles.mistakesSection}>
          <div className={styles.mistakesLabel}>Common Mistakes</div>
          <ul>
            {commonMistakes.map((mistake, i) => (
              <li key={i}>{mistake}</li>
            ))}
          </ul>
        </div>
      )}

      {mentalCue && (
        <div className={styles.mentalCue}>
          <div className={styles.cueIcon}>💭</div>
          <div className={styles.cueContent}>
            <div className={styles.cueLabel}>Mental Cue</div>
            <p>{mentalCue}</p>
          </div>
        </div>
      )}
    </div>
  )
}

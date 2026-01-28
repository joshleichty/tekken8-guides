import { useState } from 'react'
import styles from './ReadingChallenge.module.css'

interface Tell {
  observation: string
  meaning: string
  response: string
}

interface ReadingChallengeProps {
  title: string
  scenario: string
  theTells: Tell[]
  setup: {
    opponent?: string
    cpuBehavior: string
    recordings?: string[]
    playbackMode?: string
  }
  whatToWatch: string
  goal: string
  progressionLevels?: {
    level: string
    description: string
  }[]
  realMatchApplication?: string
}

export function ReadingChallenge({
  title,
  scenario,
  theTells,
  setup,
  whatToWatch,
  goal,
  progressionLevels,
  realMatchApplication
}: ReadingChallengeProps) {
  const [showTells, setShowTells] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(0)

  return (
    <div className={styles.readingChallenge}>
      <div className={styles.header}>
        <div className={styles.icon}>👁️</div>
        <div className={styles.headerContent}>
          <div className={styles.label}>Reading Challenge</div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>

      <div className={styles.scenario}>
        <p>{scenario}</p>
      </div>

      <div className={styles.watchSection}>
        <div className={styles.eyeIcon}>🔍</div>
        <div className={styles.watchContent}>
          <div className={styles.watchLabel}>What to Watch For</div>
          <p>{whatToWatch}</p>
        </div>
      </div>

      <div className={styles.tellsSection}>
        <button 
          className={styles.tellsToggle}
          onClick={() => setShowTells(!showTells)}
        >
          <span>{showTells ? 'Hide' : 'Show'} the Tells</span>
          <span className={styles.toggleHint}>
            (Try to figure them out first!)
          </span>
        </button>

        {showTells && (
          <div className={styles.tellsList}>
            {theTells.map((tell, i) => (
              <div key={i} className={styles.tellItem}>
                <div className={styles.tellObservation}>
                  <span className={styles.observeLabel}>If you see:</span>
                  <span className={styles.observeText}>{tell.observation}</span>
                </div>
                <div className={styles.tellMeaning}>
                  <span className={styles.meaningLabel}>It means:</span>
                  <span className={styles.meaningText}>{tell.meaning}</span>
                </div>
                <div className={styles.tellResponse}>
                  <span className={styles.responseLabel}>Respond with:</span>
                  <code className={styles.responseText}>{tell.response}</code>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.setupSection}>
        <div className={styles.setupHeader}>Practice Mode Setup</div>
        <div className={styles.setupContent}>
          {setup.opponent && (
            <div className={styles.setupRow}>
              <span className={styles.setupLabel}>Opponent</span>
              <span className={styles.setupValue}>{setup.opponent}</span>
            </div>
          )}
          <div className={styles.setupRow}>
            <span className={styles.setupLabel}>CPU</span>
            <span className={styles.setupValue}>{setup.cpuBehavior}</span>
          </div>
          {setup.playbackMode && (
            <div className={styles.setupRow}>
              <span className={styles.setupLabel}>Playback</span>
              <span className={styles.setupValue}>{setup.playbackMode}</span>
            </div>
          )}
          {setup.recordings && setup.recordings.length > 0 && (
            <div className={styles.recordings}>
              <span className={styles.setupLabel}>Record</span>
              <div className={styles.recordingsList}>
                {setup.recordings.map((rec, i) => (
                  <div key={i} className={styles.recording}>
                    <span className={styles.slotNum}>{i + 1}.</span> {rec}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.goalSection}>
        <div className={styles.goalLabel}>Goal</div>
        <div className={styles.goalText}>{goal}</div>
      </div>

      {progressionLevels && progressionLevels.length > 0 && (
        <div className={styles.progressionSection}>
          <div className={styles.progressionHeader}>Progression</div>
          <div className={styles.levelTabs}>
            {progressionLevels.map((level, i) => (
              <button
                key={i}
                className={`${styles.levelTab} ${i === currentLevel ? styles.active : ''}`}
                onClick={() => setCurrentLevel(i)}
              >
                {level.level}
              </button>
            ))}
          </div>
          <div className={styles.levelDescription}>
            {progressionLevels[currentLevel].description}
          </div>
        </div>
      )}

      {realMatchApplication && (
        <div className={styles.applicationBox}>
          <div className={styles.applicationIcon}>🎮</div>
          <div className={styles.applicationContent}>
            <div className={styles.applicationLabel}>In Real Matches</div>
            <p>{realMatchApplication}</p>
          </div>
        </div>
      )}
    </div>
  )
}

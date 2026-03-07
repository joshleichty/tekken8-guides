import { useState } from 'react'
import styles from './OptionTest.module.css'

interface TestResult {
  option: string
  input?: string
  result: 'works' | 'loses' | 'trades' | 'situational'
  successRate?: string
  detail: string
  verdict?: string
}

interface OptionTestProps {
  title: string
  situation: string
  frameData?: string
  testResults: TestResult[]
  bestOption: string
  reasoning: string
  practiceNote?: string
}

const resultConfig = {
  works: { label: 'Works', icon: '✓', className: 'works' },
  loses: { label: 'Loses', icon: '✗', className: 'loses' },
  trades: { label: 'Trades', icon: '⇌', className: 'trades' },
  situational: { label: 'Depends', icon: '~', className: 'situational' },
} as const

export function OptionTest({
  title,
  situation,
  frameData,
  testResults,
  bestOption,
  reasoning,
  practiceNote,
}: OptionTestProps) {
  const [revealedCount, setRevealedCount] = useState(0)
  const allRevealed = revealedCount >= testResults.length

  const revealNext = () => {
    if (revealedCount < testResults.length) {
      setRevealedCount(revealedCount + 1)
    }
  }

  const revealAll = () => {
    setRevealedCount(testResults.length)
  }

  const reset = () => {
    setRevealedCount(0)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon}>🧪</div>
        <div className={styles.headerText}>
          <div className={styles.label}>Option Test</div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>

      <div className={styles.situation}>
        <div className={styles.situationText}>{situation}</div>
        {frameData && <div className={styles.frameData}>{frameData}</div>}
      </div>

      <div className={styles.results}>
        {testResults.map((test, index) => {
          const isRevealed = index < revealedCount
          const config = resultConfig[test.result]

          return (
            <div
              key={index}
              className={`${styles.result} ${isRevealed ? styles[config.className] : styles.hidden}`}
              onClick={!isRevealed && index === revealedCount ? revealNext : undefined}
            >
              <div className={styles.resultHeader}>
                <span className={styles.optionName}>{test.option}</span>
                {test.input && <code className={styles.input}>{test.input}</code>}
                {isRevealed ? (
                  <span className={`${styles.badge} ${styles[config.className]}`}>
                    {config.icon} {config.label}
                    {test.successRate && ` (${test.successRate})`}
                  </span>
                ) : (
                  index === revealedCount && (
                    <span className={styles.tapHint}>tap to test</span>
                  )
                )}
              </div>

              {isRevealed && (
                <div className={styles.resultBody}>
                  <p className={styles.detail}>{test.detail}</p>
                  {test.verdict && <p className={styles.verdict}>{test.verdict}</p>}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {!allRevealed && revealedCount > 0 && (
        <button className={styles.revealAllBtn} onClick={revealAll}>
          Reveal All Results
        </button>
      )}

      {allRevealed && (
        <div className={styles.conclusion}>
          <div className={styles.conclusionHeader}>
            <span className={styles.conclusionIcon}>🏆</span>
            <span className={styles.conclusionLabel}>Best Default</span>
          </div>
          <div className={styles.bestOption}>{bestOption}</div>
          <p className={styles.reasoning}>{reasoning}</p>
          {practiceNote && (
            <div className={styles.practiceNote}>
              <span className={styles.practiceIcon}>🎯</span> {practiceNote}
            </div>
          )}
        </div>
      )}

      {allRevealed && (
        <button className={styles.resetBtn} onClick={reset}>
          Reset Tests
        </button>
      )}
    </div>
  )
}

import { useState } from 'react'
import styles from './SpacingGame.module.css'

interface RangeZone {
  name: string
  description: string
  yourTools: string[]
  danger?: string
}

interface SpacingGameProps {
  title: string
  description: string
  targetRange: string
  ranges: RangeZone[]
  cpuBehavior: string
  successMetric: string
  duration: string
  tips?: string[]
  whyThisMatters?: string
}

export function SpacingGame({
  title,
  description,
  targetRange,
  ranges,
  cpuBehavior,
  successMetric,
  duration,
  tips,
  whyThisMatters
}: SpacingGameProps) {
  const [activeRange, setActiveRange] = useState(0)
  const targetIndex = ranges.findIndex(r => r.name === targetRange)

  return (
    <div className={styles.spacingGame}>
      <div className={styles.header}>
        <div className={styles.icon}>📏</div>
        <div className={styles.headerContent}>
          <div className={styles.label}>Spacing Game</div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.duration}>{duration}</div>
      </div>

      <div className={styles.description}>
        <p>{description}</p>
      </div>

      <div className={styles.rangeVisual}>
        <div className={styles.rangeLine}>
          {ranges.map((range, i) => (
            <div
              key={i}
              className={`${styles.rangeMarker} ${i === targetIndex ? styles.target : ''} ${i === activeRange ? styles.active : ''}`}
              onClick={() => setActiveRange(i)}
            >
              <div className={styles.markerLabel}>{range.name}</div>
              <div className={styles.markerDot} />
            </div>
          ))}
        </div>
        <div className={styles.targetIndicator}>
          Target: <strong>{targetRange}</strong>
        </div>
      </div>

      <div className={styles.rangeDetail}>
        <div className={styles.rangeHeader}>
          <span className={styles.rangeName}>{ranges[activeRange].name}</span>
          {ranges[activeRange].name === targetRange && (
            <span className={styles.targetBadge}>Target Range</span>
          )}
        </div>
        <p className={styles.rangeDesc}>{ranges[activeRange].description}</p>
        
        <div className={styles.toolsSection}>
          <div className={styles.toolsLabel}>Your tools here:</div>
          <div className={styles.toolsList}>
            {ranges[activeRange].yourTools.map((tool, i) => (
              <code key={i} className={styles.tool}>{tool}</code>
            ))}
          </div>
        </div>

        {ranges[activeRange].danger && (
          <div className={styles.danger}>
            <span className={styles.dangerIcon}>⚠️</span>
            {ranges[activeRange].danger}
          </div>
        )}
      </div>

      <div className={styles.setup}>
        <div className={styles.setupRow}>
          <span className={styles.setupLabel}>CPU Behavior</span>
          <span className={styles.setupValue}>{cpuBehavior}</span>
        </div>
        <div className={styles.setupRow}>
          <span className={styles.setupLabel}>Success</span>
          <span className={styles.setupValue}>{successMetric}</span>
        </div>
      </div>

      {tips && tips.length > 0 && (
        <div className={styles.tips}>
          <div className={styles.tipsLabel}>Movement Tips</div>
          <ul>
            {tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      )}

      {whyThisMatters && (
        <div className={styles.whyBox}>
          <p>{whyThisMatters}</p>
        </div>
      )}
    </div>
  )
}

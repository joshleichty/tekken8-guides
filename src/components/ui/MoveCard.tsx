import type { ReactNode } from 'react'
import styles from './MoveCard.module.css'
import type { MoveData } from '../../types'
import { MoveVideoLink } from './MoveVideo'

interface MoveCardProps {
  // Direct props (original style)
  input?: string
  tags?: string[]
  description?: string | ReactNode
  stats?: {
    startup?: string
    onBlock?: string
    onHit?: string
    onCH?: string
    damage?: string
  }
  variant?: 'default' | 'stance' | 'throw'
  children?: ReactNode
  // Wrapped props (alternate style for move object)
  move?: MoveData
  // Video support
  videoId?: string | string[]  // The move command(s) for video lookup (defaults to input)
  character?: string  // Character name (defaults to "jin")
  showVideo?: boolean  // Whether to show video link (defaults to true if videoId or input exists)
}

const tagStyles: Record<string, string> = {
  mid: styles.tagMid,
  low: styles.tagLow,
  high: styles.tagHigh,
  heat: styles.tagHeat,
  homing: styles.tagHoming,
  throw: styles.tagThrow,
  stance: styles.tagStance,
  'power-crush': styles.tagPowerCrush,
  tornado: styles.tagHeat,
  'ch launcher': styles.tagHeat,
  'heat engager': styles.tagHeat,
  'plus on block': styles.tagHeat,
  'keepout': styles.tagHoming,
  'launch punish': styles.tagHeat,
  'whiff punish': styles.tagHoming,
  'snake eyes': styles.tagHeat,
  'power crush': styles.tagPowerCrush,
  'evasive': styles.tagStance,
  'launcher': styles.tagHeat,
  'plus on hit': styles.tagHeat,
  'tracking': styles.tagHoming,
  'punish': styles.tagMid,
  'extension': styles.tagStance,
  'confirmable': styles.tagHeat,
  'delayable': styles.tagStance,
  'natural on ch': styles.tagHeat,
  'snake eyes gain': styles.tagHeat,
  'consumes sne': styles.tagStance,
  'wall splat': styles.tagHoming,
  'unblockable': styles.tagHeat,
}

export function MoveCard({ input, tags = [], description, stats, variant = 'default', children, move, videoId, character = 'jin', showVideo }: MoveCardProps) {
  // If move object is provided, extract props from it
  const finalInput = move?.input ?? input ?? ''
  const finalTags = move?.tags ?? tags
  const finalDescription = move?.description ?? description ?? ''
  const finalStats = move ? {
    startup: move.startup,
    onBlock: move.onBlock,
    onHit: move.onHit,
    onCH: move.onCH,
    damage: move.damage,
  } : stats
  const notes = move?.notes
  
  // Video support - use videoId if provided, otherwise use input
  const finalVideoId = videoId ?? move?.videoId ?? finalInput
  const shouldShowVideo = showVideo ?? (finalVideoId ? true : false)
  // Normalize to always pass to MoveVideoLink (it handles both string and array)
  const videoCommands = finalVideoId

  return (
    <div className={`${styles.card} ${styles[variant] || ''}`}>
      <div className={styles.header}>
        <span className={styles.input}>{finalInput}</span>
        {finalTags.length > 0 && (
          <div className={styles.tags}>
            {finalTags.map((tag) => (
              <span 
                key={tag} 
                className={`${styles.tag} ${tagStyles[tag.toLowerCase()] || ''}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className={styles.description}>
        {finalDescription}
      </div>
      
      {finalStats && (
        <div className={styles.stats}>
          {finalStats.startup && (
            <div className={styles.stat}>
              <div className={styles.statValue}>{finalStats.startup}</div>
              <div className={styles.statLabel}>Startup</div>
            </div>
          )}
          {finalStats.onBlock && (
            <div className={styles.stat}>
              <div className={`${styles.statValue} ${getFrameClass(finalStats.onBlock)}`}>
                {finalStats.onBlock}
              </div>
              <div className={styles.statLabel}>On Block</div>
            </div>
          )}
          {finalStats.onHit && (
            <div className={styles.stat}>
              <div className={`${styles.statValue} ${getFrameClass(finalStats.onHit)}`}>
                {finalStats.onHit}
              </div>
              <div className={styles.statLabel}>On Hit</div>
            </div>
          )}
          {finalStats.onCH && (
            <div className={styles.stat}>
              <div className={`${styles.statValue} ${getFrameClass(finalStats.onCH)}`}>
                {finalStats.onCH}
              </div>
              <div className={styles.statLabel}>Counter Hit</div>
            </div>
          )}
          {finalStats.damage && (
            <div className={styles.stat}>
              <div className={styles.statValue}>{finalStats.damage}</div>
              <div className={styles.statLabel}>Damage</div>
            </div>
          )}
        </div>
      )}

      {notes && notes.length > 0 && (
        <ul className={styles.notes}>
          {notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      )}

      {shouldShowVideo && videoCommands && (
        <MoveVideoLink command={videoCommands} character={character} />
      )}
      
      {children}
    </div>
  )
}

function getFrameClass(value: string): string {
  const num = parseInt(value.replace(/[^-\d]/g, ''))
  if (isNaN(num)) return ''
  if (num > 0) return styles.plus
  if (num < 0) return styles.minus
  return styles.neutral
}

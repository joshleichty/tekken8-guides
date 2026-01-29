import { useState, useRef, useEffect } from 'react'
import styles from './MoveVideo.module.css'
import { useSettings } from '../../contexts/SettingsContext'

interface MoveVideoProps {
  /** The move command (e.g., "f+4", "df+1", "ZEN.2") */
  command: string
  /** Character name for the video URL (defaults to "jin") */
  character?: string
  /** Optional label override (defaults to command) */
  label?: string
}

/**
 * Encodes a move command for Okizeme CDN URLs
 * - Replaces `:` with `colon` (e.g., df:2 -> dfcolon2)
 * - URL encodes special characters like `,` and `+`
 */
function encodeCommand(command: string): string {
  return command
    .replace(/:/g, 'colon')  // Replace : with 'colon'
    .split('')
    .map(char => {
      if (char === ',') return '%2C'
      if (char === '+') return '%2B'
      if (char === ' ') return '%20'
      return char
    })
    .join('')
}

/**
 * Generates the Okizeme CDN URL for a move video
 * Pattern: https://okizeme.b-cdn.net/{character}/{encoded_command}.mp4
 */
function getVideoUrl(character: string, command: string): string {
  return `https://okizeme.b-cdn.net/${character.toLowerCase()}/${encodeCommand(command)}.mp4`
}

// Cache for video availability checks (persists across renders)
const videoAvailabilityCache: Record<string, boolean | null> = {}

export function MoveVideo({ 
  command, 
  character = 'jin', 
  label,
}: MoveVideoProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const url = getVideoUrl(character, command)
  const displayLabel = label || command

  const handleToggle = () => {
    if (isExpanded) {
      // Collapsing - pause video
      videoRef.current?.pause()
    }
    setIsExpanded(!isExpanded)
  }

  const handleVideoClick = () => {
    const video = videoRef.current
    if (!video) return
    
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  if (hasError) {
    return null // Don't show anything if video fails to load
  }

  return (
    <div className={styles.wrapper}>
      <button 
        className={`${styles.trigger} ${isExpanded ? styles.expanded : ''}`}
        onClick={handleToggle}
        title={`${isExpanded ? 'Hide' : 'Watch'} ${displayLabel}`}
      >
        <svg className={styles.playIcon} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          {isExpanded ? (
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          ) : (
            <path d="M8 5v14l11-7z"/>
          )}
        </svg>
        <span className={styles.label}>{isExpanded ? 'Hide' : 'Watch'}</span>
      </button>
      
      {isExpanded && (
        <div className={styles.videoContainer}>
          <video
            ref={videoRef}
            className={styles.video}
            src={url}
            loop
            muted
            playsInline
            autoPlay
            onClick={handleVideoClick}
            onError={() => setHasError(true)}
          />
          <div className={styles.videoOverlay} onClick={handleVideoClick}>
            <span className={styles.clickHint}>Click to pause</span>
          </div>
        </div>
      )}
    </div>
  )
}

// Standalone link version for use in MoveCard
interface MoveVideoLinkProps {
  /** Single command or array of commands */
  command: string | string[]
  character?: string
}

/**
 * Check if a video URL exists via HEAD request
 * Results are cached to avoid repeated requests
 */
async function checkVideoExists(url: string): Promise<boolean> {
  if (url in videoAvailabilityCache) {
    return videoAvailabilityCache[url] === true
  }
  
  try {
    const response = await fetch(url, { method: 'HEAD' })
    const exists = response.ok
    videoAvailabilityCache[url] = exists
    return exists
  } catch {
    videoAvailabilityCache[url] = false
    return false
  }
}

export function MoveVideoLink({ command, character = 'jin' }: MoveVideoLinkProps) {
  const commands = Array.isArray(command) ? command : [command]
  const { settings } = useSettings()
  const [isExpanded, setIsExpanded] = useState(false)
  const [errorStates, setErrorStates] = useState<Record<string, boolean>>({})
  const [availabilityChecked, setAvailabilityChecked] = useState(false)
  const [availableCommands, setAvailableCommands] = useState<string[]>(commands)
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({})

  // Pre-check video availability on mount
  useEffect(() => {
    let cancelled = false
    
    async function checkVideos() {
      const results = await Promise.all(
        commands.map(async cmd => {
          const url = getVideoUrl(character, cmd)
          const exists = await checkVideoExists(url)
          return { cmd, exists }
        })
      )
      
      if (!cancelled) {
        const available = results.filter(r => r.exists).map(r => r.cmd)
        setAvailableCommands(available)
        setAvailabilityChecked(true)
        
        // Auto-expand if setting is enabled and videos exist
        if (settings.autoExpandVideos && available.length > 0) {
          setIsExpanded(true)
        }
      }
    }
    
    checkVideos()
    return () => { cancelled = true }
  }, [commands.join(','), character, settings.autoExpandVideos])

  const handleToggle = () => {
    if (isExpanded) {
      // Pause all videos when collapsing
      Object.values(videoRefs.current).forEach(video => video?.pause())
    }
    setIsExpanded(!isExpanded)
  }

  const handleVideoClick = (cmd: string) => {
    const video = videoRefs.current[cmd]
    if (!video) return
    
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  const handleError = (cmd: string) => {
    setErrorStates(prev => ({ ...prev, [cmd]: true }))
    // Also update cache
    const url = getVideoUrl(character, cmd)
    videoAvailabilityCache[url] = false
  }

  // Filter out commands that have errored (fallback for any that slip through)
  const validCommands = availableCommands.filter(cmd => !errorStates[cmd])
  
  // Don't render anything until we've checked availability
  // If all videos failed, hide the component entirely
  if (!availabilityChecked) {
    return null // Don't show button until we know if videos exist
  }
  
  if (validCommands.length === 0) {
    return null
  }

  const buttonLabel = validCommands.length > 1 
    ? `Watch Videos (${validCommands.length})`
    : 'Watch Video'

  return (
    <div className={styles.linkWrapper}>
      <button 
        className={`${styles.videoLink} ${isExpanded ? styles.active : ''}`}
        onClick={handleToggle}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          {isExpanded ? (
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          ) : (
            <path d="M8 5v14l11-7z"/>
          )}
        </svg>
        <span>{isExpanded ? 'Hide' : buttonLabel}</span>
      </button>
      
      {isExpanded && (
        <div className={styles.videoGrid}>
          {validCommands.map(cmd => (
            <div key={cmd} className={styles.inlineVideo}>
              {validCommands.length > 1 && (
                <div className={styles.videoLabel}>{cmd}</div>
              )}
              <video
                ref={el => { videoRefs.current[cmd] = el }}
                className={styles.video}
                src={getVideoUrl(character, cmd)}
                loop
                muted
                playsInline
                autoPlay
                onClick={() => handleVideoClick(cmd)}
                onError={() => handleError(cmd)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Export the URL generator for use elsewhere
export { getVideoUrl }

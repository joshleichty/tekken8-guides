import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { getCharacterImageUrl, getCharacterImageSrcSet } from '../../utils/character-images'
import styles from './CharacterCard.module.css'

interface CharacterCardProps {
  slug: string
  name: string
  icon: string
  image?: string
  accentColor?: string
  counterAccentColor?: string
  isAvailable?: boolean
  imagePosition?: string
  imageScale?: number
  imageTranslateY?: string
  hasCounter?: boolean
}

export function CharacterCard({
  slug,
  name,
  icon,
  image,
  accentColor,
  counterAccentColor = '#dc2626',
  isAvailable = true,
  imagePosition,
  imageScale,
  imageTranslateY,
  hasCounter = false,
}: CharacterCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFlipped(prev => !prev)
  }, [])

  const imageSrc = image || getCharacterImageUrl(slug, 512)
  const imageSrcSet = getCharacterImageSrcSet(slug)

  const imageStyle: React.CSSProperties & { '--image-scale'?: number; '--image-translate-y'?: string } = {
    ...(imagePosition && { objectPosition: imagePosition }),
    ...(imageScale && { '--image-scale': imageScale }),
    ...(imageTranslateY && { '--image-translate-y': imageTranslateY }),
  }

  // Single flip icon used on both faces
  const flipIcon = (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  )

  const imageElement = imageSrc ? (
    <img 
      src={imageSrc} 
      srcSet={imageSrcSet}
      sizes="(max-width: 480px) 40vw, (max-width: 768px) 30vw, 200px"
      alt={name} 
      className={styles.image}
      style={Object.keys(imageStyle).length > 0 ? imageStyle : undefined}
      loading="lazy"
      decoding="async"
    />
  ) : (
    <div className={styles.iconPlaceholder}>{icon}</div>
  )

  // Pointer events: only the visible face should receive them
  const frontPointerEvents = hasCounter && isFlipped ? 'none' : 'auto'
  const backPointerEvents = isFlipped ? 'auto' : 'none'

  // --- FRONT FACE (Mastery Guide) ---
  const frontFace = (
    <div className={styles.cardFace} style={{ pointerEvents: frontPointerEvents }}>
      {isAvailable ? (
        <Link to={`/${slug}`} className={styles.card} style={{ '--card-accent': accentColor } as React.CSSProperties}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>{imageElement}</div>
            <div className={styles.glowEffect} />
          </div>
          <div className={styles.info}>
            <span className={styles.name}>{name}</span>
          </div>
          {hasCounter && (
            <button className={styles.flipBtn} onClick={handleFlip} aria-label="Flip card">
              {flipIcon}
            </button>
          )}
        </Link>
      ) : (
        <div className={`${styles.card} ${styles.unavailable}`} style={{ '--card-accent': accentColor } as React.CSSProperties}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>{imageElement}</div>
            <div className={styles.glowEffect} />
          </div>
          <div className={styles.info}>
            <span className={styles.name}>{name}</span>
          </div>
          <div className={styles.comingSoonBadge}>
            <span>Coming Soon</span>
          </div>
        </div>
      )}
    </div>
  )

  // --- BACK FACE (Counter Guide) ---
  const backFace = hasCounter ? (
    <div className={`${styles.cardFace} ${styles.cardFaceBack}`} style={{ pointerEvents: backPointerEvents }}>
      <Link to={`/vs/${slug}`} className={`${styles.card} ${styles.counterCard}`} style={{ '--card-accent': counterAccentColor } as React.CSSProperties}>
        <div className={styles.imageWrapper}>
          <div className={`${styles.imageContainer} ${styles.counterImage}`}>{imageElement}</div>
          <div className={`${styles.glowEffect} ${styles.counterGlow}`} />
        </div>
        <div className={styles.info}>
          <span className={`${styles.name} ${styles.counterName}`}>vs {name.split(' ')[0]}</span>
        </div>
        <button className={styles.flipBtn} onClick={handleFlip} aria-label="Flip card">
          {flipIcon}
        </button>
      </Link>
    </div>
  ) : null

  // Cards without counter: no 3D flip wrapper needed
  if (!hasCounter) {
    return frontFace
  }

  // Cards with counter: 3D flip container
  return (
    <div className={`${styles.flipContainer} ${isFlipped ? styles.flipped : ''}`}>
      <div className={styles.flipInner}>
        {frontFace}
        {backFace}
      </div>
    </div>
  )
}

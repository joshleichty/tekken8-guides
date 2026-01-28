import { Link } from 'react-router-dom'
import { getCharacterImageUrl, getCharacterImageSrcSet } from '../../utils/character-images'
import styles from './CharacterCard.module.css'

interface CharacterCardProps {
  slug: string
  name: string
  icon: string
  image?: string
  accentColor?: string
  isAvailable?: boolean
}

export function CharacterCard({
  slug,
  name,
  icon,
  image,
  accentColor,
  isAvailable = true,
}: CharacterCardProps) {
  const cardStyle = accentColor
    ? { '--card-accent': accentColor } as React.CSSProperties
    : undefined

  // Get responsive image sources - use 512 for higher quality with fewer guides
  const imageSrc = image || getCharacterImageUrl(slug, 512)
  const imageSrcSet = getCharacterImageSrcSet(slug)

  const cardContent = (
    <>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          {imageSrc ? (
            <img 
              src={imageSrc} 
              srcSet={imageSrcSet}
              sizes="(max-width: 480px) 40vw, (max-width: 768px) 30vw, 200px"
              alt={name} 
              className={styles.image}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className={styles.iconPlaceholder}>{icon}</div>
          )}
        </div>
        <div className={styles.glowEffect} />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
      </div>
      {!isAvailable && (
        <div className={styles.comingSoonBadge}>
          <span>Coming Soon</span>
        </div>
      )}
    </>
  )

  if (!isAvailable) {
    return (
      <div className={`${styles.card} ${styles.unavailable}`} style={cardStyle}>
        {cardContent}
      </div>
    )
  }

  return (
    <Link to={`/${slug}`} className={styles.card} style={cardStyle}>
      {cardContent}
    </Link>
  )
}

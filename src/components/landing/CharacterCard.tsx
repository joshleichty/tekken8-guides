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
  imagePosition?: string
  imageScale?: number
  imageTranslateY?: string
}

export function CharacterCard({
  slug,
  name,
  icon,
  image,
  accentColor,
  isAvailable = true,
  imagePosition,
  imageScale,
  imageTranslateY,
}: CharacterCardProps) {
  const cardStyle = accentColor
    ? { '--card-accent': accentColor } as React.CSSProperties
    : undefined

  // Get responsive image sources - use 512 for higher quality with fewer guides
  const imageSrc = image || getCharacterImageUrl(slug, 512)
  const imageSrcSet = getCharacterImageSrcSet(slug)

  // Build custom image styles for non-standard character images
  const imageStyle: React.CSSProperties & { '--image-scale'?: number; '--image-translate-y'?: string } = {
    ...(imagePosition && { objectPosition: imagePosition }),
    ...(imageScale && { '--image-scale': imageScale }),
    ...(imageTranslateY && { '--image-translate-y': imageTranslateY }),
  }

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
              style={Object.keys(imageStyle).length > 0 ? imageStyle : undefined}
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

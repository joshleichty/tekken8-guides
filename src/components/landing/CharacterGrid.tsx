import { CharacterCard } from './CharacterCard'
import styles from './CharacterGrid.module.css'

interface Character {
  slug: string
  name: string
  icon: string
  image?: string
  accentColor?: string
  isAvailable?: boolean
  imagePosition?: string
  imageScale?: number
  imageTranslateY?: string
  hasCounter?: boolean
}

interface CharacterGridProps {
  characters: Character[]
}

export function CharacterGrid({ characters }: CharacterGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {characters.map((char, index) => (
          <div 
            key={char.slug} 
            className={styles.cardWrapper}
            style={{ '--delay': `${index * 0.03}s` } as React.CSSProperties}
          >
            <CharacterCard {...char} />
          </div>
        ))}
      </div>
    </section>
  )
}

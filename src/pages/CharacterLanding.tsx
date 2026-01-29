import { CharacterGrid } from '../components/landing'
import { characters } from '../characters'
import { getCharacterImageUrl } from '../utils/character-images'
import styles from './CharacterLanding.module.css'

// Custom image adjustments for characters with non-standard image layouts
const IMAGE_OVERRIDES: Record<string, { position?: string; scale?: number; translateY?: string }> = {
  'fahkumram': { position: 'left center', translateY: '20%' },
}

export function CharacterLanding() {
  const availableCharacters = Object.values(characters)
    .map(char => {
      const overrides = IMAGE_OVERRIDES[char.slug]
      return {
        slug: char.slug,
        name: char.name,
        icon: char.icon,
        image: getCharacterImageUrl(char.slug, 512),
        accentColor: char.theme.colors?.accent,
        isAvailable: true,
        imagePosition: overrides?.position,
        imageScale: overrides?.scale,
        imageTranslateY: overrides?.translateY,
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Tekken 8 <span className={styles.subtitle}>Mastery Guides</span></h1>
      </header>
      
      <main className={styles.main}>
        <CharacterGrid 
          characters={availableCharacters} 
        />
      </main>
    </div>
  )
}

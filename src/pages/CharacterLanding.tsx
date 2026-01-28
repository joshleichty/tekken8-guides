import { CharacterGrid } from '../components/landing'
import { characters } from '../characters'
import { getCharacterImageUrl } from '../utils/character-images'
import styles from './CharacterLanding.module.css'

export function CharacterLanding() {
  // Only show characters that have actual guides
  // Use higher resolution images since there are fewer guides
  const availableCharacters = Object.values(characters)
    .map(char => ({
      slug: char.slug,
      name: char.name,
      icon: char.icon,
      image: getCharacterImageUrl(char.slug, 512),
      accentColor: char.theme.colors?.accent,
      isAvailable: true,
    }))
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

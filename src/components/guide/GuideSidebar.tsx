import { Link } from 'react-router-dom'
import styles from './GuideSidebar.module.css'

interface Chapter {
  id: number
  title: string
  section: string
}

interface GuideSidebarProps {
  characterName: string
  characterSubtitle: string
  characterIcon: string
  chapters: Chapter[]
  currentChapter: number
  completedChapters: number[]
  progress: { completed: number; total: number }
  onChapterSelect: (id: number) => void
  onReset: () => void
  isOpen?: boolean
  onClose?: () => void
}

export function GuideSidebar({
  characterName,
  characterSubtitle,
  characterIcon,
  chapters,
  currentChapter,
  completedChapters,
  progress,
  onChapterSelect,
  onReset,
  isOpen = true,
  onClose,
}: GuideSidebarProps) {
  // Group chapters by section
  const sections = chapters.reduce((acc, ch) => {
    if (!acc[ch.section]) acc[ch.section] = []
    acc[ch.section].push(ch)
    return acc
  }, {} as Record<string, Chapter[]>)

  const progressPercent = (progress.completed / progress.total) * 100

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <Link to="/" className={styles.backLink}>
        ← All Guides
      </Link>
      
      <div className={styles.header}>
        <div className={styles.logo}>{characterIcon}</div>
        <div className={styles.title}>{characterName}</div>
        <div className={styles.subtitle}>{characterSubtitle}</div>
      </div>

      <div className={styles.progress}>
        <div className={styles.progressLabel}>Your Progress</div>
        <div className={styles.progressBarContainer}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className={styles.progressText}>
          {progress.completed} of {progress.total} chapters complete
        </div>
      </div>

      <nav className={styles.nav}>
        {Object.entries(sections).map(([section, sectionChapters], sectionIdx) => (
          <div key={section}>
            <div className={`${styles.section} ${sectionIdx === 0 ? styles.first : ''}`}>
              {section}
            </div>
            {sectionChapters.map((ch) => {
              const isCompleted = completedChapters.includes(ch.id)
              const isActive = currentChapter === ch.id
              return (
                <div
                  key={ch.id}
                  className={`${styles.navItem} ${isActive ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}
                  onClick={() => {
                    onChapterSelect(ch.id)
                    onClose?.()
                  }}
                >
                  <div className={styles.navIcon}>
                    {isCompleted ? '✓' : ch.id}
                  </div>
                  <span className={styles.navText}>{ch.title}</span>
                </div>
              )
            })}
          </div>
        ))}
      </nav>

      <div className={styles.footer}>
        <button className={styles.resetBtn} onClick={onReset}>
          Reset Progress
        </button>
      </div>
    </aside>
  )
}

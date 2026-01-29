import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './GuideSidebar.module.css'
import { SettingsPanel } from '../ui/SettingsPanel'

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
  const [settingsOpen, setSettingsOpen] = useState(false)
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
        <div className={styles.footerButtons}>
          <button className={styles.settingsBtn} onClick={() => setSettingsOpen(true)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
            </svg>
            Settings
          </button>
          <button className={styles.resetBtn} onClick={onReset}>
            Reset Progress
          </button>
        </div>
      </div>
      
      <SettingsPanel isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </aside>
  )
}

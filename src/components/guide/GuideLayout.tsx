import { useState, useCallback, type ReactNode } from 'react'
import { GuideSidebar } from './GuideSidebar'
import { MobileHeader } from './MobileHeader'
import styles from './GuideLayout.module.css'

interface Chapter {
  id: number
  title: string
  section: string
}

interface GuideLayoutProps {
  characterName: string
  characterSubtitle: string
  characterIcon: string
  chapters: Chapter[]
  currentChapter: number
  completedChapters: number[]
  onChapterSelect: (id: number) => void
  onReset: () => void
  children: ReactNode
  isCounterMode?: boolean
  onModeSwitch?: () => void
}

export function GuideLayout({
  characterName,
  characterSubtitle,
  characterIcon,
  chapters,
  currentChapter,
  completedChapters,
  onChapterSelect,
  onReset,
  children,
  isCounterMode = false,
  onModeSwitch,
}: GuideLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const currentChapterData = chapters.find(c => c.id === currentChapter)

  const handleChapterSelect = useCallback((id: number) => {
    onChapterSelect(id)
    window.scrollTo(0, 0)
  }, [onChapterSelect])

  return (
    <div className={styles.container}>
      <MobileHeader
        title={currentChapterData?.title || `Chapter ${currentChapter}`}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />

      <GuideSidebar
        characterName={characterName}
        characterSubtitle={characterSubtitle}
        characterIcon={characterIcon}
        chapters={chapters}
        currentChapter={currentChapter}
        completedChapters={completedChapters}
        progress={{ completed: completedChapters.length, total: chapters.length }}
        onChapterSelect={handleChapterSelect}
        onReset={onReset}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isCounterMode={isCounterMode}
        onModeSwitch={onModeSwitch}
      />

      {sidebarOpen && (
        <div 
          className={styles.overlay} 
          onClick={() => setSidebarOpen(false)} 
        />
      )}

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

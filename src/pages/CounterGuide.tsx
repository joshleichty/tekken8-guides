import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { useState, useCallback, useEffect } from 'react'
import { counterGuides, characters } from '../characters'
import { ThemeProvider } from '../themes/ThemeContext'
import { GuideLayout } from '../components/guide'
import type { GuideProgress } from '../types'

const STORAGE_PREFIX = 'tekken-counter-'

export function CounterGuide() {
  const { characterSlug } = useParams<{ characterSlug: string }>()
  const navigate = useNavigate()
  
  const counter = characterSlug ? counterGuides[characterSlug] : null
  const character = characterSlug ? characters[characterSlug] : null
  
  // Load progress from localStorage
  const [progress, setProgress] = useState<GuideProgress>(() => {
    if (!characterSlug) return getDefaultProgress()
    const saved = localStorage.getItem(`${STORAGE_PREFIX}${characterSlug}`)
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch {
        return getDefaultProgress()
      }
    }
    return getDefaultProgress()
  })

  // Save progress to localStorage
  useEffect(() => {
    if (characterSlug) {
      localStorage.setItem(
        `${STORAGE_PREFIX}${characterSlug}`,
        JSON.stringify(progress)
      )
    }
  }, [progress, characterSlug])

  const goToChapter = useCallback((id: number) => {
    setProgress(prev => {
      const newCompleted = [...prev.completedChapters]
      if (id > prev.currentChapter && !newCompleted.includes(prev.currentChapter)) {
        newCompleted.push(prev.currentChapter)
      }
      return {
        ...prev,
        currentChapter: id,
        completedChapters: newCompleted,
      }
    })
    window.scrollTo(0, 0)
  }, [])

  const resetProgress = useCallback(() => {
    if (confirm('Are you sure you want to reset all progress?')) {
      setProgress(getDefaultProgress())
    }
  }, [])

  // If counter guide doesn't exist, redirect to landing
  if (!counter || !character) {
    return <Navigate to="/" replace />
  }

  const chapters = counter.chapters.map(ch => ({
    id: ch.id,
    title: ch.title,
    section: ch.section,
  }))

  const currentChapterConfig = counter.chapters.find(
    ch => ch.id === progress.currentChapter
  )

  const renderChapterContent = () => {
    if (!currentChapterConfig) return null

    const ChapterContent = currentChapterConfig.content as React.ComponentType<{
      characterSlug: string
      chapterId: number
      goToChapter: (id: number) => void
    }>

    if (typeof ChapterContent === 'function') {
      return (
        <ChapterContent
          characterSlug={counter.slug}
          chapterId={progress.currentChapter}
          goToChapter={goToChapter}
        />
      )
    }

    return <div>Data-driven chapters coming soon</div>
  }

  return (
    <ThemeProvider theme={counter.theme}>
      <GuideLayout
        characterName={counter.name}
        characterSubtitle={counter.subtitle}
        characterIcon={counter.icon}
        chapters={chapters}
        currentChapter={progress.currentChapter}
        completedChapters={progress.completedChapters}
        onChapterSelect={goToChapter}
        onReset={resetProgress}
        isCounterMode
        onModeSwitch={() => navigate(`/${characterSlug}`)}
      >
        {renderChapterContent()}
      </GuideLayout>
    </ThemeProvider>
  )
}

function getDefaultProgress(): GuideProgress {
  return {
    currentChapter: 1,
    completedChapters: [],
    tasks: {},
    quizzes: {},
  }
}

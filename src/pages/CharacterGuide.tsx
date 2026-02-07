import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { useState, useCallback, useEffect } from 'react'
import { characters, hasCounterGuide } from '../characters'
import { ThemeProvider } from '../themes/ThemeContext'
import { GuideLayout } from '../components/guide'
import type { GuideProgress } from '../types'

const STORAGE_PREFIX = 'tekken-guide-'

export function CharacterGuide() {
  const { characterSlug } = useParams<{ characterSlug: string }>()
  const navigate = useNavigate()
  
  const character = characterSlug ? characters[characterSlug] : null
  const counterAvailable = characterSlug ? hasCounterGuide(characterSlug) : false
  
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
      // Mark current chapter as completed when moving forward
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
    // Scroll to top when changing chapters
    window.scrollTo(0, 0)
  }, [])

  const resetProgress = useCallback(() => {
    if (confirm('Are you sure you want to reset all progress?')) {
      setProgress(getDefaultProgress())
    }
  }, [])

  // If character doesn't exist, redirect to landing
  if (!character) {
    return <Navigate to="/" replace />
  }

  // If character has a custom guide component, use that
  if (character.customGuideComponent) {
    const CustomGuide = character.customGuideComponent
    return (
      <ThemeProvider theme={character.theme}>
        <CustomGuide />
      </ThemeProvider>
    )
  }

  // Otherwise, use the standard guide layout
  const chapters = character.chapters.map(ch => ({
    id: ch.id,
    title: ch.title,
    section: ch.section,
  }))

  const currentChapterConfig = character.chapters.find(
    ch => ch.id === progress.currentChapter
  )

  // Render chapter content
  const renderChapterContent = () => {
    if (!currentChapterConfig) return null

    const ChapterContent = currentChapterConfig.content as React.ComponentType<{
      characterSlug: string
      chapterId: number
      goToChapter: (id: number) => void
    }>

    // If it's a component, render it
    if (typeof ChapterContent === 'function') {
      return (
        <ChapterContent
          characterSlug={character.slug}
          chapterId={progress.currentChapter}
          goToChapter={goToChapter}
        />
      )
    }

    // Otherwise it's data - would need a data renderer here
    return <div>Data-driven chapters coming soon</div>
  }

  return (
    <ThemeProvider theme={character.theme}>
      <GuideLayout
        characterName={character.name}
        characterSubtitle={character.subtitle}
        characterIcon={character.icon}
        chapters={chapters}
        currentChapter={progress.currentChapter}
        completedChapters={progress.completedChapters}
        onChapterSelect={goToChapter}
        onReset={resetProgress}
        isCounterMode={false}
        onModeSwitch={counterAvailable ? () => navigate(`/vs/${characterSlug}`) : undefined}
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

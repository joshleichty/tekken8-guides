import type { ReactNode } from 'react'
import styles from './Chapter.module.css'

interface ChapterProps {
  number: number
  title: string
  intro: string
  children: ReactNode
  onPrevious?: () => void
  onNext?: () => void
  hasPrevious?: boolean
  hasNext?: boolean
  nextLabel?: string
}

export function Chapter({
  number,
  title,
  intro,
  children,
  onPrevious,
  onNext,
  hasPrevious = true,
  hasNext = true,
  nextLabel = 'Continue',
}: ChapterProps) {
  return (
    <section className={styles.chapter}>
      <div className={styles.header}>
        <div className={styles.number}>Chapter {number}</div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.intro}>{intro}</p>
      </div>

      <div className={styles.content}>{children}</div>

      <div className={styles.nav}>
        <button
          className={styles.navBtn}
          onClick={onPrevious}
          disabled={!hasPrevious}
        >
          ← Previous
        </button>
        <button
          className={`${styles.navBtn} ${styles.primary}`}
          onClick={onNext}
          disabled={!hasNext}
        >
          {nextLabel} →
        </button>
      </div>
    </section>
  )
}

// Section heading component
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </>
  )
}

export function SubSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <h3 className={styles.subSectionTitle}>{title}</h3>
      {children}
    </>
  )
}

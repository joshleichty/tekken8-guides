import { useState } from 'react'
import styles from './Quiz.module.css'

interface QuizOption {
  text: string
  isCorrect: boolean
}

interface QuizProps {
  question: string
  options: QuizOption[]
  correctFeedback: string
  incorrectFeedback: string
  onComplete?: (wasCorrect: boolean) => void
}

export function Quiz({ question, options, correctFeedback, incorrectFeedback, onComplete }: QuizProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [hasAnswered, setHasAnswered] = useState(false)

  const handleSelect = (index: number) => {
    if (hasAnswered) return
    
    setSelectedIndex(index)
    setHasAnswered(true)
    
    const wasCorrect = options[index].isCorrect
    onComplete?.(wasCorrect)
  }

  const wasCorrect = selectedIndex !== null && options[selectedIndex].isCorrect

  return (
    <div className={styles.box}>
      <div className={styles.question}>{question}</div>
      <div className={styles.options}>
        {options.map((option, index) => {
          let className = styles.option
          
          if (hasAnswered) {
            className += ` ${styles.disabled}`
            if (index === selectedIndex) {
              className += option.isCorrect ? ` ${styles.correct}` : ` ${styles.incorrect}`
            } else if (option.isCorrect) {
              // Show the correct answer
              className += ` ${styles.correct}`
            }
          }
          
          return (
            <div
              key={index}
              className={className}
              onClick={() => handleSelect(index)}
            >
              {option.text}
            </div>
          )
        })}
      </div>
      
      {hasAnswered && (
        <div className={`${styles.feedback} ${wasCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect}`}>
          {wasCorrect ? correctFeedback : incorrectFeedback}
        </div>
      )}
    </div>
  )
}

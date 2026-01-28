import { useState, useCallback } from 'react'
import styles from './PracticeBox.module.css'

interface Task {
  id: string
  text: string
  detail?: string
  type: 'toggle' | 'counter'
  target?: number
}

interface PracticeBoxProps {
  title: string
  setup?: string
  tasks: Task[]
  onTaskComplete?: (taskId: string, completed: boolean | number) => void
  initialState?: Record<string, boolean | number>
}

export function PracticeBox({ 
  title, 
  setup, 
  tasks, 
  onTaskComplete,
  initialState = {} 
}: PracticeBoxProps) {
  const [taskState, setTaskState] = useState<Record<string, boolean | number>>(initialState)

  const handleToggle = useCallback((taskId: string) => {
    setTaskState(prev => {
      const newValue = !prev[taskId]
      onTaskComplete?.(taskId, newValue)
      return { ...prev, [taskId]: newValue }
    })
  }, [onTaskComplete])

  const handleIncrement = useCallback((taskId: string, target: number) => {
    setTaskState(prev => {
      const current = (prev[taskId] as number) || 0
      if (current >= target) return prev
      const newValue = current + 1
      onTaskComplete?.(taskId, newValue >= target ? true : newValue)
      return { ...prev, [taskId]: newValue }
    })
  }, [onTaskComplete])

  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <div className={styles.icon}>🎮</div>
        <div className={styles.title}>{title}</div>
      </div>

      {setup && (
        <div className={styles.setup}>
          <div className={styles.setupTitle}>Practice Mode Setup</div>
          <div className={styles.setupContent}>{setup}</div>
        </div>
      )}

      <div className={styles.tasks}>
        {tasks.map((task) => {
          const isCompleted = task.type === 'toggle' 
            ? !!taskState[task.id]
            : ((taskState[task.id] as number) || 0) >= (task.target || 1)
          const count = task.type === 'counter' ? ((taskState[task.id] as number) || 0) : 0

          return (
            <div
              key={task.id}
              className={`${styles.task} ${isCompleted ? styles.completed : ''}`}
              onClick={() => {
                if (task.type === 'toggle') {
                  handleToggle(task.id)
                } else {
                  handleIncrement(task.id, task.target || 1)
                }
              }}
            >
              <div className={styles.checkbox}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className={styles.taskContent}>
                <div className={styles.taskText}>{task.text}</div>
                {task.detail && <div className={styles.taskDetail}>{task.detail}</div>}
              </div>
              {task.type === 'counter' && (
                <span className={styles.counter}>
                  {count}/{task.target}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import styles from './FeedbackMode.module.css'

interface ScreenRect {
  top: number
  left: number
  width: number
  height: number
}

interface SelectedTarget {
  element: HTMLElement
  selector: string
  textPreview: string
}

interface QueuedFeedback {
  id: string
  message: string
  page: string
  createdAt: string
  context: string
}

const FEEDBACK_UI_SELECTOR = '[data-feedback-ui="true"]'

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

function isElementEditable(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName.toLowerCase()
  return (
    target.isContentEditable ||
    tag === 'input' ||
    tag === 'textarea' ||
    tag === 'select' ||
    Boolean(target.closest('input, textarea, select, [contenteditable="true"]'))
  )
}

function escapeSelectorValue(value: string): string {
  if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') {
    return CSS.escape(value)
  }
  return value.replace(/[^a-zA-Z0-9_-]/g, '\\$&')
}

function getInspectableElements(x: number, y: number): HTMLElement[] {
  if (typeof document === 'undefined' || !document.elementsFromPoint) return []

  return document
    .elementsFromPoint(x, y)
    .filter((node): node is HTMLElement => node instanceof HTMLElement)
    .filter(el => !el.closest(FEEDBACK_UI_SELECTOR))
    .filter(el => el.tagName !== 'HTML' && el.tagName !== 'BODY')
    .filter(el => {
      const rect = el.getBoundingClientRect()
      return rect.width >= 4 && rect.height >= 4
    })
}

function getTextPreview(element: HTMLElement): string {
  if (element instanceof HTMLImageElement) {
    const altText = element.alt.trim()
    if (altText) return `Image: ${altText}`
    const fileName = element.currentSrc.split('/').pop()
    if (fileName) return `Image file: ${fileName}`
    return 'Image (no description)'
  }

  const ariaLabel = element.getAttribute('aria-label')?.trim()
  if (ariaLabel) return ariaLabel

  const cleanText = element.textContent?.replace(/\s+/g, ' ').trim() ?? ''
  if (!cleanText) return 'This selection has no text content.'
  return cleanText.length > 120 ? `${cleanText.slice(0, 117)}...` : cleanText
}

function getElementSelector(element: HTMLElement): string {
  const segments: string[] = []
  let current: HTMLElement | null = element

  while (current && current.tagName !== 'BODY' && segments.length < 6) {
    let segment = current.tagName.toLowerCase()

    if (current.id) {
      segment += `#${escapeSelectorValue(current.id)}`
      segments.unshift(segment)
      break
    }

    const classNames =
      typeof current.className === 'string'
        ? current.className.split(/\s+/).filter(Boolean).slice(0, 2)
        : []

    if (classNames.length > 0) {
      const escaped = classNames.map(name => escapeSelectorValue(name)).join('.')
      segment += `.${escaped}`
    }

    if (current.parentElement) {
      const currentNode = current
      const siblings = Array.from(current.parentElement.children).filter(
        child => child.tagName === currentNode.tagName,
      )
      if (siblings.length > 1) {
        const siblingIndex = siblings.indexOf(currentNode) + 1
        segment += `:nth-of-type(${siblingIndex})`
      }
    }

    segments.unshift(segment)
    current = current.parentElement
  }

  return segments.join(' > ')
}

function getPaddedRect(element: HTMLElement, padding = 4): ScreenRect | null {
  if (!document.contains(element)) return null

  const rect = element.getBoundingClientRect()
  if (rect.width <= 0 || rect.height <= 0) return null

  const top = clamp(rect.top - padding, 0, window.innerHeight)
  const left = clamp(rect.left - padding, 0, window.innerWidth)
  const right = clamp(rect.right + padding, 0, window.innerWidth)
  const bottom = clamp(rect.bottom + padding, 0, window.innerHeight)
  const width = right - left
  const height = bottom - top

  if (width <= 0 || height <= 0) return null
  return { top, left, width, height }
}

function rectStyle(rect: ScreenRect) {
  return {
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
  }
}

function chipStyle(rect: ScreenRect) {
  const maxWidth = Math.min(360, window.innerWidth - 24)
  const top = rect.top > 70 ? rect.top - 44 : rect.top + rect.height + 10
  const left = clamp(rect.left, 12, Math.max(12, window.innerWidth - maxWidth - 12))

  return {
    top: `${top}px`,
    left: `${left}px`,
    maxWidth: `${maxWidth}px`,
  }
}

export function FeedbackMode() {
  const location = useLocation()
  const [isMounted, setIsMounted] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const [layeredElements, setLayeredElements] = useState<HTMLElement[]>([])
  const [layerIndex, setLayerIndex] = useState(0)
  const [selectedTarget, setSelectedTarget] = useState<SelectedTarget | null>(null)
  const [isGeneralDraft, setIsGeneralDraft] = useState(false)
  const [messageDraft, setMessageDraft] = useState('')
  const [queuedFeedback, setQueuedFeedback] = useState<QueuedFeedback[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [viewportTick, setViewportTick] = useState(0)

  const topLayerRef = useRef<HTMLElement | null>(null)
  const layeredElementsRef = useRef<HTMLElement[]>([])
  const layerIndexRef = useRef(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    layeredElementsRef.current = layeredElements
  }, [layeredElements])

  useEffect(() => {
    layerIndexRef.current = layerIndex
  }, [layerIndex])

  useEffect(() => {
    if (!isEnabled) {
      setLayeredElements([])
      setLayerIndex(0)
      setSelectedTarget(null)
      setIsGeneralDraft(false)
      topLayerRef.current = null
    }
  }, [isEnabled])

  const composerOpen = Boolean(selectedTarget) || isGeneralDraft

  useEffect(() => {
    if (composerOpen) {
      setLayeredElements([])
      setLayerIndex(0)
    }
  }, [composerOpen])

  useEffect(() => {
    if (!selectedTarget) return
    if (!document.contains(selectedTarget.element)) {
      setSelectedTarget(null)
    }
  }, [location.key, selectedTarget])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isEnabled) return

      if (event.key === 'Escape') {
        event.preventDefault()
        if (selectedTarget || isGeneralDraft) {
          setSelectedTarget(null)
          setIsGeneralDraft(false)
        } else {
          setIsEnabled(false)
        }
        return
      }

      if (isElementEditable(event.target)) return

      if (event.key === '[' || event.key === ']') {
        if (layeredElementsRef.current.length <= 1) return
        event.preventDefault()
        const direction = event.key === ']' ? 1 : -1
        setLayerIndex(prev =>
          clamp(prev + direction, 0, Math.max(0, layeredElementsRef.current.length - 1)),
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown, true)
    return () => window.removeEventListener('keydown', handleKeyDown, true)
  }, [isEnabled, isGeneralDraft, selectedTarget])

  useEffect(() => {
    if (!isEnabled) return

    const updateLayers = (x: number, y: number) => {
      if (composerOpen) return
      const stack = getInspectableElements(x, y)
      setLayeredElements(stack)

      const previousTop = topLayerRef.current
      const currentTop = stack[0] ?? null
      topLayerRef.current = currentTop

      if (currentTop !== previousTop) {
        setLayerIndex(0)
      } else {
        setLayerIndex(prev => clamp(prev, 0, Math.max(0, stack.length - 1)))
      }
    }

    const handleMove = (event: MouseEvent) => {
      updateLayers(event.clientX, event.clientY)
    }

    const handleClickCapture = (event: MouseEvent) => {
      const target = event.target
      if (target instanceof HTMLElement && target.closest(FEEDBACK_UI_SELECTOR)) return
      if (composerOpen) return

      const stack = getInspectableElements(event.clientX, event.clientY)
      if (stack.length === 0) return

      event.preventDefault()
      event.stopPropagation()

      const chosenTarget = stack[Math.min(layerIndexRef.current, stack.length - 1)] ?? stack[0]
      if (!chosenTarget) return

      setSelectedTarget({
        element: chosenTarget,
        selector: getElementSelector(chosenTarget),
        textPreview: getTextPreview(chosenTarget),
      })
      setIsGeneralDraft(false)
    }

    const handleWheelCapture = (event: WheelEvent) => {
      if (!event.altKey || isElementEditable(event.target) || composerOpen) return

      const stack =
        layeredElementsRef.current.length > 0
          ? layeredElementsRef.current
          : getInspectableElements(event.clientX, event.clientY)

      if (stack.length <= 1) return

      event.preventDefault()
      const direction = event.deltaY > 0 ? 1 : -1
      setLayerIndex(prev => clamp(prev + direction, 0, stack.length - 1))
    }

    const handleViewportChange = () => {
      setViewportTick(prev => prev + 1)
    }

    window.addEventListener('mousemove', handleMove, true)
    window.addEventListener('click', handleClickCapture, true)
    window.addEventListener('wheel', handleWheelCapture, { passive: false, capture: true })
    window.addEventListener('resize', handleViewportChange)
    window.addEventListener('scroll', handleViewportChange, true)

    return () => {
      window.removeEventListener('mousemove', handleMove, true)
      window.removeEventListener('click', handleClickCapture, true)
      window.removeEventListener('wheel', handleWheelCapture, true)
      window.removeEventListener('resize', handleViewportChange)
      window.removeEventListener('scroll', handleViewportChange, true)
    }
  }, [composerOpen, isEnabled])

  const currentPath = `${location.pathname}${location.search}${location.hash}`
  const notesApiUrl =
    (import.meta.env.DEV
      ? import.meta.env.VITE_NOTES_API_URL_DEV
      : import.meta.env.VITE_NOTES_API_URL) || '/api/notes'
  const hoveredElement = layeredElements[Math.min(layerIndex, Math.max(0, layeredElements.length - 1))] ?? null
  const hoveredRect = useMemo(() => (hoveredElement ? getPaddedRect(hoveredElement, 4) : null), [
    hoveredElement,
    viewportTick,
  ])
  const selectedRect = useMemo(
    () => (selectedTarget ? getPaddedRect(selectedTarget.element, 6) : null),
    [selectedTarget, viewportTick],
  )

  const submitFeedback = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (!messageDraft.trim()) return
      if (!selectedTarget && !isGeneralDraft) return

      const now = new Date()
      const feedbackContext = selectedTarget ? 'Selected content' : 'General note'
      const baseQueuedItem: QueuedFeedback = {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        message: messageDraft.trim(),
        page: currentPath,
        createdAt: now.toLocaleTimeString([], {
          hour: 'numeric',
          minute: '2-digit',
        }),
        context: feedbackContext,
      }

      setIsSubmitting(true)
      setSubmitStatus('')

      try {
        const response = await fetch(notesApiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: messageDraft.trim(),
            page: currentPath,
            context: feedbackContext,
            selectedText: selectedTarget?.textPreview ?? '',
            selector: selectedTarget?.selector ?? '',
            website: '',
          }),
        })

        if (!response.ok) {
          throw new Error('Request failed')
        }

        setQueuedFeedback(prev => [baseQueuedItem, ...prev].slice(0, 4))
        setSubmitStatus('Note saved.')
      } catch {
        setQueuedFeedback(prev => [baseQueuedItem, ...prev].slice(0, 4))
        setSubmitStatus('Could not reach the server. Saved locally for now.')
      } finally {
        setIsSubmitting(false)
        setMessageDraft('')
        setSelectedTarget(null)
        setIsGeneralDraft(false)
      }
    },
    [currentPath, isGeneralDraft, messageDraft, notesApiUrl, selectedTarget],
  )

  if (!isMounted) return null

  return createPortal(
    <div className={styles.root} data-feedback-ui="true">
      <button
        type="button"
        className={`${styles.toggle} ${isEnabled ? styles.toggleActive : ''}`}
        onClick={() => setIsEnabled(prev => !prev)}
        aria-label={isEnabled ? 'Disable feedback mode' : 'Enable feedback mode'}
        aria-pressed={isEnabled}
        data-feedback-ui="true"
      >
        <span className={styles.toggleDot} />
        {isEnabled ? 'Notes Mode On' : 'Add Note'}
      </button>

      {isEnabled && (
        <>
          <div className={styles.scrim} data-feedback-ui="true" />

          <div className={styles.toolbar} data-feedback-ui="true">
            <span className={styles.toolbarTitle}>Make a quick guide note</span>
            <span className={styles.toolbarHint}>Esc to close</span>
            <button
              type="button"
              className={styles.toolbarAction}
              onClick={() => {
                setSelectedTarget(null)
                setIsGeneralDraft(true)
              }}
            >
              General note
            </button>
          </div>

          {hoveredRect && !composerOpen && (
            <>
              <div
                className={styles.hoverHighlight}
                style={rectStyle(hoveredRect)}
                data-feedback-ui="true"
              />

              <div
                className={styles.targetChip}
                style={chipStyle(hoveredRect)}
                data-feedback-ui="true"
              >
                <span className={styles.targetLabel}>Click to add a note here</span>
              </div>
            </>
          )}

          {selectedRect && (
            <div
              className={styles.selectedHighlight}
              style={rectStyle(selectedRect)}
              data-feedback-ui="true"
            />
          )}

          {(selectedTarget || isGeneralDraft) && (
            <aside className={styles.panel} data-feedback-ui="true">
              <div className={styles.panelHeader}>
                <h2 className={styles.panelTitle}>Add a note</h2>
                <button
                  type="button"
                  className={styles.secondaryAction}
                  onClick={() => {
                    setSelectedTarget(null)
                    setIsGeneralDraft(false)
                  }}
                >
                  Close
                </button>
              </div>

              {selectedTarget ? (
                <div className={styles.targetDetails}>
                  <p className={styles.detailTitle}>Note about this area</p>
                  <p className={styles.detailText}>{selectedTarget.textPreview}</p>
                </div>
              ) : (
                <div className={styles.targetDetails}>
                  <p className={styles.detailTitle}>General note</p>
                  <p className={styles.detailText}>
                    Share feedback that applies to the page or website overall.
                  </p>
                </div>
              )}

              <form onSubmit={submitFeedback} className={styles.form}>
                <p className={styles.helperText}>
                  Use this for guide corrections, visual bugs, or improvement ideas.
                </p>
                {submitStatus && <p className={styles.submitStatus}>{submitStatus}</p>}

                <label htmlFor="feedback-message" className={styles.formLabel}>
                  What should be updated?
                </label>
                <textarea
                  id="feedback-message"
                  className={styles.textarea}
                  value={messageDraft}
                  onChange={event => setMessageDraft(event.target.value)}
                  placeholder="Example: This says -14, but I think this is -13."
                  rows={5}
                  data-feedback-ui="true"
                  autoFocus
                />

                <div className={styles.actions}>
                  <span className={styles.pagePill}>{currentPath}</span>
                  <button
                    type="submit"
                    className={styles.primaryAction}
                    disabled={!messageDraft.trim() || isSubmitting}
                  >
                    {isSubmitting ? 'Saving...' : 'Save note'}
                  </button>
                </div>
              </form>
            </aside>
          )}

          {queuedFeedback.length > 0 && (
            <div className={styles.queue} data-feedback-ui="true">
              <p className={styles.queueTitle}>Recent notes</p>
              <ul className={styles.queueList}>
                {queuedFeedback.map(item => (
                  <li key={item.id} className={styles.queueItem}>
                    <p className={styles.queueMessage}>{item.message}</p>
                    <p className={styles.queueMeta}>
                      {item.context} • {item.createdAt}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>,
    document.body,
  )
}

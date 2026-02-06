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
  htmlSnippet: string
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

  const raw = document.elementsFromPoint(x, y)
  const result: HTMLElement[] = []

  for (let i = 0; i < raw.length; i++) {
    const node = raw[i]
    if (!(node instanceof HTMLElement)) continue
    const tag = node.tagName
    if (tag === 'HTML' || tag === 'BODY') continue
    if (node.closest(FEEDBACK_UI_SELECTOR)) continue
    const rect = node.getBoundingClientRect()
    if (rect.width >= 4 && rect.height >= 4) {
      result.push(node)
    }
  }

  return result
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

function getElementHtmlSnippet(element: HTMLElement): string {
  const raw = element.outerHTML || ''
  const compact = raw.replace(/\s+/g, ' ').trim()
  return compact.slice(0, 8000)
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [toastTone, setToastTone] = useState<'success' | 'error'>('success')
  const [viewportTick, setViewportTick] = useState(0)
  const [isSuccess, setIsSuccess] = useState(false)
  const [notesSent, setNotesSent] = useState(() => {
    try {
      const stored = parseInt(localStorage.getItem('feedback-notes-sent') || '0', 10)
      return Number.isFinite(stored) ? stored : 0
    } catch {
      return 0
    }
  })

  const topLayerRef = useRef<HTMLElement | null>(null)
  const layeredElementsRef = useRef<HTMLElement[]>([])
  const layerIndexRef = useRef(0)
  const moveRafRef = useRef(0)
  const viewportRafRef = useRef(0)

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
      setIsSuccess(false)
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
    if (!toastMessage) return
    const timer = window.setTimeout(() => setToastMessage(null), 2200)
    return () => window.clearTimeout(timer)
  }, [toastMessage])

  useEffect(() => {
    if (!isSuccess) return
    const timer = window.setTimeout(() => {
      setIsSuccess(false)
      setMessageDraft('')
      setSelectedTarget(null)
      setIsGeneralDraft(false)
      setIsEnabled(false)
    }, 2800)
    return () => window.clearTimeout(timer)
  }, [isSuccess])

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
      const currentTop = stack[0] ?? null
      const previousTop = topLayerRef.current

      // Always keep the ref current for keyboard layer navigation
      layeredElementsRef.current = stack

      // Skip React re-render when hovering the same top element
      if (currentTop === previousTop) {
        const maxIdx = Math.max(0, stack.length - 1)
        if (layerIndexRef.current > maxIdx) {
          setLayerIndex(maxIdx)
        }
        return
      }

      topLayerRef.current = currentTop
      setLayeredElements(stack)
      setLayerIndex(0)
    }

    const handleMove = (event: MouseEvent) => {
      const x = event.clientX
      const y = event.clientY
      cancelAnimationFrame(moveRafRef.current)
      moveRafRef.current = requestAnimationFrame(() => {
        updateLayers(x, y)
      })
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
        htmlSnippet: getElementHtmlSnippet(chosenTarget),
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
      cancelAnimationFrame(viewportRafRef.current)
      viewportRafRef.current = requestAnimationFrame(() => {
        setViewportTick(prev => prev + 1)
      })
    }

    window.addEventListener('mousemove', handleMove, true)
    window.addEventListener('click', handleClickCapture, true)
    window.addEventListener('wheel', handleWheelCapture, { passive: false, capture: true })
    window.addEventListener('resize', handleViewportChange)
    window.addEventListener('scroll', handleViewportChange, true)

    return () => {
      cancelAnimationFrame(moveRafRef.current)
      cancelAnimationFrame(viewportRafRef.current)
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

      const feedbackContext = selectedTarget ? 'Selected content' : 'General note'

      setIsSubmitting(true)

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
            selectedHtml: selectedTarget?.htmlSnippet ?? '',
            website: '',
          }),
        })

        if (!response.ok) {
          throw new Error('Request failed')
        }

        const newCount = notesSent + 1
        setNotesSent(newCount)
        try {
          localStorage.setItem('feedback-notes-sent', String(newCount))
        } catch {
          // Storage unavailable
        }
        setIsSuccess(true)
      } catch {
        setToastTone('error')
        setToastMessage('Could not save note')
      } finally {
        setIsSubmitting(false)
      }
    },
    [currentPath, isGeneralDraft, messageDraft, notesSent, notesApiUrl, selectedTarget],
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
        {isEnabled ? 'Exit Notes' : 'Add Note'}
      </button>

      {isEnabled && (
        <>
          <div className={styles.scrim} data-feedback-ui="true" />

          {composerOpen && (
            <div
              className={styles.sheetBackdrop}
              data-feedback-ui="true"
              onClick={() => {
                if (isSuccess) {
                  setIsSuccess(false)
                  setMessageDraft('')
                }
                setSelectedTarget(null)
                setIsGeneralDraft(false)
                if (isSuccess) setIsEnabled(false)
              }}
            />
          )}

          <div className={styles.toolbar} data-feedback-ui="true">
            <span className={styles.toolbarTitle}>
              <span className={styles.desktopText}>Click any element to leave a note</span>
              <span className={styles.mobileText}>Tap any element</span>
            </span>
            <span className={styles.toolbarHint}>Esc</span>
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
            <button
              type="button"
              className={styles.toolbarClose}
              onClick={() => setIsEnabled(false)}
              aria-label="Close notes mode"
              data-feedback-ui="true"
            >
              ×
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

          {selectedRect && !isSuccess && (
            <div
              className={styles.selectedHighlight}
              style={rectStyle(selectedRect)}
              data-feedback-ui="true"
            />
          )}

          {(selectedTarget || isGeneralDraft) && (
            <aside className={styles.panel} data-feedback-ui="true">
              {isSuccess ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>✓</div>
                  <p className={styles.successTitle}>Thanks for the feedback</p>
                  <p className={styles.successText}>
                    This helps keep the guide accurate and up to date.
                  </p>
                </div>
              ) : (
                <>
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
                      <p className={styles.detailTitle}>Selected element</p>
                      <p className={styles.detailText}>{selectedTarget.textPreview}</p>
                    </div>
                  ) : (
                    <div className={styles.targetDetails}>
                      <p className={styles.detailTitle}>General</p>
                      <p className={styles.detailText}>
                        Feedback about the page overall.
                      </p>
                    </div>
                  )}

                  <form onSubmit={submitFeedback} className={styles.form}>
                    <textarea
                      id="feedback-message"
                      className={styles.textarea}
                      value={messageDraft}
                      onChange={event => setMessageDraft(event.target.value)}
                      placeholder="e.g. This says -14 but I think it should be -13"
                      aria-label="Your note"
                      rows={4}
                      data-feedback-ui="true"
                      autoFocus={window.innerWidth > 900}
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
                </>
              )}
            </aside>
          )}
        </>
      )}

      {toastMessage && (
        <div
          className={`${styles.toast} ${toastTone === 'error' ? styles.toastError : ''}`}
          data-feedback-ui="true"
        >
          {toastMessage}
        </div>
      )}
    </div>,
    document.body,
  )
}

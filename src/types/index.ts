// Theme types
export interface CharacterThemeColors {
  bgPrimary?: string
  bgSecondary?: string
  bgCard?: string
  bgCardHover?: string
  accent?: string
  accentDim?: string
  accentSecondary?: string
  accentSecondaryDim?: string
  success?: string
  successDim?: string
  warning?: string
  danger?: string
  textPrimary?: string
  textSecondary?: string
  textMuted?: string
  border?: string
  inputBg?: string
  // Character-specific glows/effects
  characterGlow?: string
  heatGlow?: string
}

export interface CharacterTheme {
  name?: string
  colors?: CharacterThemeColors
  // Optional custom CSS variables
  customVars?: Record<string, string>
}

// Character metadata
export interface CharacterConfig {
  slug: string
  name: string
  subtitle: string
  icon: string // Emoji or image path
  description: string
  theme: Partial<CharacterTheme>
  chapters: ChapterConfig[]
  // Optional: completely custom guide component
  customGuideComponent?: React.ComponentType
}

// Chapter configuration
export interface ChapterConfig {
  id: number
  title: string
  section: string
  // Can be a component or a data object
  content: React.ComponentType<ChapterProps> | ChapterData
}

export interface ChapterProps {
  characterSlug: string
  chapterId: number
  goToChapter: (id: number) => void
}

// For data-driven chapters
export interface ChapterData {
  intro: string
  sections: SectionData[]
}

export interface SectionData {
  title: string
  content: ContentBlock[]
}

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'move-card'; move: MoveData }
  | { type: 'tip-box'; title: string; text: string; variant?: 'tip' | 'warning' | 'danger' }
  | { type: 'practice-box'; title: string; setup: string; tasks: TaskData[] }
  | { type: 'flowchart'; title: string; nodes: FlowchartNode[] }
  | { type: 'collapsible'; title: string; content: ContentBlock[] }
  | { type: 'key-concept'; title: string; content: string; list?: string[] }
  | { type: 'custom'; component: React.ComponentType }

// Move data
export interface MoveData {
  input: string
  hitLevel: string[]
  damage?: string
  startup: string
  onBlock: string
  onHit: string
  onCH?: string
  tags?: string[]
  description: string
  notes?: string[]
}

export interface TaskData {
  id: string
  text: string
  detail?: string
  type: 'toggle' | 'counter'
  target?: number
}

export interface FlowchartNode {
  type: 'start' | 'decision' | 'branch' | 'end'
  label: string
  branches?: { label: string; action: string }[]
}

// Progress state
export interface GuideProgress {
  currentChapter: number
  completedChapters: number[]
  tasks: Record<string, boolean | number>
  quizzes: Record<string, boolean>
}

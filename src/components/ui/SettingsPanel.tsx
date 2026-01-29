import { useSettings } from '../../contexts/SettingsContext'
import styles from './SettingsPanel.module.css'

interface SettingsPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function SettingsPanel({ isOpen, onClose }: SettingsPanelProps) {
  const { settings, updateSettings } = useSettings()

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>Settings</h3>
          <button className={styles.closeButton} onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        
        <div className={styles.content}>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Videos</h4>
            
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={settings.autoExpandVideos}
                onChange={e => updateSettings({ autoExpandVideos: e.target.checked })}
              />
              <span className={styles.toggleSwitch} />
              <span className={styles.toggleLabel}>
                <span className={styles.toggleTitle}>Auto-expand videos</span>
                <span className={styles.toggleDescription}>
                  Automatically show all move videos when viewing a chapter
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Chapter } from '../../../components/guide'
import type { ChapterProps } from '../../../types'

export function CheatSheet({ goToChapter }: ChapterProps) {
  const cardStyle: React.CSSProperties = {
    background: 'var(--background-secondary)',
    borderRadius: '8px',
    padding: '10px',
    border: '1px solid var(--border)',
  }

  const headerStyle: React.CSSProperties = {
    fontSize: '0.8rem',
    fontWeight: 700,
    color: 'var(--accent)',
    marginBottom: '8px',
    paddingBottom: '4px',
    borderBottom: '2px solid var(--accent)',
  }

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3px 0',
    fontSize: '0.8rem',
  }

  const moveStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    fontWeight: 600,
    color: 'var(--text-primary)',
    background: 'var(--background-primary)',
    padding: '2px 6px',
    borderRadius: '4px',
  }

  const frameStyle = (value: string): React.CSSProperties => ({
    fontWeight: 600,
    color: value.startsWith('+') ? 'var(--success)' : value.startsWith('-') && parseInt(value) <= -13 ? 'var(--danger)' : 'var(--text-secondary)',
  })

  return (
    <Chapter
      number={19}
      title="Cheat Sheet"
      intro=""
      onPrevious={() => goToChapter(18)}
    >
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '10px',
      }}>
        
        {/* Column 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          
          {/* POKES */}
          <div style={cardStyle}>
            <div style={headerStyle}>Pokes</div>
            <div style={rowStyle}>
              <span style={moveStyle}>1</span>
              <span>i10</span>
              <span style={frameStyle('+1')}>+1</span>
            </div>
            <div style={rowStyle}>
              <span style={moveStyle}>df+1</span>
              <span>i13</span>
              <span style={frameStyle('-3')}>-3</span>
            </div>
            <div style={rowStyle}>
              <span style={moveStyle}>f+4</span>
              <span>i16</span>
              <span style={{ color: 'var(--accent-secondary)' }}>CH⚡</span>
            </div>
            <div style={rowStyle}>
              <span style={moveStyle}>4</span>
              <span>i11</span>
              <span style={{ color: 'var(--text-muted)' }}>homing</span>
            </div>
          </div>

          {/* LOWS */}
          <div style={cardStyle}>
            <div style={headerStyle}>Lows</div>
            <div style={rowStyle}>
              <span style={moveStyle}>d+4</span>
              <span>i16</span>
              <span style={frameStyle('-12')}>-12</span>
            </div>
            <div style={rowStyle}>
              <span style={moveStyle}>db+4</span>
              <span>i20</span>
              <span style={frameStyle('+3')}>+3 hit</span>
            </div>
            <div style={rowStyle}>
              <span style={moveStyle}>CD.df+4,2</span>
              <span></span>
              <span style={{ color: 'var(--text-muted)' }}>KND</span>
            </div>
          </div>

          {/* HEAT */}
          <div style={cardStyle}>
            <div style={{...headerStyle, color: 'var(--accent-secondary)', borderColor: 'var(--accent-secondary)'}}>Heat Engagers</div>
            <div style={rowStyle}>
              <span style={moveStyle}>ff+2</span>
              <span style={frameStyle('-8')}>-8</span>
              <span style={{ color: 'var(--success)' }}>best</span>
            </div>
            <div style={rowStyle}>
              <span style={moveStyle}>1+2</span>
              <span style={frameStyle('-14')}>-14</span>
              <span style={{ color: 'var(--text-muted)' }}>13f</span>
            </div>
            <div style={rowStyle}>
              <span style={moveStyle}>df+4</span>
              <span style={frameStyle('+0')}>+0</span>
              <span style={{ color: 'var(--success)' }}>safe</span>
            </div>
          </div>

        </div>

        {/* Column 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          
          {/* STANDING PUNISH */}
          <div style={cardStyle}>
            <div style={headerStyle}>Standing Punish</div>
            <div style={rowStyle}>
              <span style={{ color: 'var(--text-muted)' }}>-10</span>
              <span style={moveStyle}>2,4</span>
            </div>
            <div style={rowStyle}>
              <span style={{ color: 'var(--text-muted)' }}>-12</span>
              <span style={moveStyle}>b+1,2</span>
            </div>
            <div style={rowStyle}>
              <span style={{ color: 'var(--text-muted)' }}>-13</span>
              <span style={moveStyle}>1+2</span>
            </div>
            <div style={rowStyle}>
              <span style={{ color: 'var(--text-muted)' }}>-14</span>
              <span style={moveStyle}>f+1+2</span>
            </div>
            <div style={rowStyle}>
              <span style={{ color: 'var(--danger)' }}>-15+</span>
              <span style={{...moveStyle, background: 'var(--danger)', color: 'white'}}>d+3+4</span>
            </div>
          </div>

          {/* WS PUNISH */}
          <div style={cardStyle}>
            <div style={headerStyle}>WS Punish</div>
            <div style={rowStyle}>
              <span style={{ color: 'var(--text-muted)' }}>-11</span>
              <span style={moveStyle}>ws4,4</span>
            </div>
            <div style={rowStyle}>
              <span style={{ color: 'var(--text-muted)' }}>-13</span>
              <span style={moveStyle}>ws1,3,2,1,4,2</span>
            </div>
            <div style={rowStyle}>
              <span style={{ color: 'var(--danger)' }}>-14+</span>
              <span style={{...moveStyle, background: 'var(--danger)', color: 'white'}}>ws2</span>
            </div>
          </div>

          {/* THROWS */}
          <div style={cardStyle}>
            <div style={headerStyle}>Command Grabs</div>
            <div style={rowStyle}>
              <span style={moveStyle}>qcb+1+3</span>
              <span style={{ 
                background: 'var(--accent)', 
                color: 'white', 
                padding: '2px 8px', 
                borderRadius: '4px',
                fontWeight: 600 
              }}>1</span>
            </div>
            <div style={rowStyle}>
              <span style={moveStyle}>df+2+4</span>
              <span style={{ 
                background: 'var(--accent)', 
                color: 'white', 
                padding: '2px 8px', 
                borderRadius: '4px',
                fontWeight: 600 
              }}>2</span>
            </div>
            <div style={rowStyle}>
              <span style={moveStyle}>uf+1+2</span>
              <span style={{ 
                background: 'var(--accent)', 
                color: 'white', 
                padding: '2px 8px', 
                borderRadius: '4px',
                fontWeight: 600 
              }}>1+2</span>
            </div>
          </div>

        </div>

        {/* Column 3 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          
          {/* COMBOS */}
          <div style={cardStyle}>
            <div style={headerStyle}>Combos</div>
            <div style={{ 
              background: 'var(--background-primary)', 
              padding: '6px 8px', 
              borderRadius: '4px',
              marginBottom: '6px',
              fontSize: '0.75rem',
            }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '2px' }}>Standard</div>
              <div style={{ color: 'var(--text-primary)', fontFamily: 'monospace' }}>
                df+2,4 → bf+2,3~f → ZEN.u+1 T! → (2),4~f → ZEN.1,3
              </div>
            </div>
            <div style={{ 
              background: 'var(--background-primary)', 
              padding: '6px 8px', 
              borderRadius: '4px',
              marginBottom: '6px',
              fontSize: '0.75rem',
            }}>
              <div style={{ color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '2px' }}>CH f+4</div>
              <div style={{ color: 'var(--text-primary)', fontFamily: 'monospace' }}>
                dash → b+3~f → ZEN.1 → bf+2,3~f → T!
              </div>
            </div>
            <div style={{ 
              background: 'var(--background-primary)', 
              padding: '6px 8px', 
              borderRadius: '4px',
              fontSize: '0.75rem',
            }}>
              <div style={{ color: 'var(--warning)', fontWeight: 600, marginBottom: '2px' }}>Wall</div>
              <div style={{ color: 'var(--text-primary)', fontFamily: 'monospace' }}>1 → db+2,2,3</div>
            </div>
          </div>

          {/* TIPS */}
          <div style={cardStyle}>
            <div style={headerStyle}>Situations</div>
            <div style={{ fontSize: '0.75rem', lineHeight: 1.6 }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '2px' }}>
                <span style={{ color: 'var(--warning)', minWidth: '55px' }}>Duck?</span>
                <span style={moveStyle}>2,1</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '2px' }}>
                <span style={{ color: 'var(--warning)', minWidth: '55px' }}>Mash?</span>
                <span><span style={moveStyle}>1</span> → <span style={moveStyle}>f+4</span></span>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '2px' }}>
                <span style={{ color: 'var(--warning)', minWidth: '55px' }}>Turtle?</span>
                <span style={moveStyle}>db+4</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '2px' }}>
                <span style={{ color: 'var(--warning)', minWidth: '55px' }}>Wall?</span>
                <span style={moveStyle}>ZEN.3+4</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: 'var(--warning)', minWidth: '55px' }}>Whiff?</span>
                <span style={moveStyle}>EWHF</span>
              </div>
            </div>
          </div>

          {/* OKI */}
          <div style={cardStyle}>
            <div style={headerStyle}>Oki</div>
            <div style={{ fontSize: '0.75rem', lineHeight: 1.6 }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '2px' }}>
                <span style={{ color: 'var(--text-muted)', minWidth: '60px' }}>Stay down</span>
                <span style={moveStyle}>d+2</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '2px' }}>
                <span style={{ color: 'var(--text-muted)', minWidth: '60px' }}>Tech roll</span>
                <span style={moveStyle}>hellsweep</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: 'var(--text-muted)', minWidth: '60px' }}>Wake kick</span>
                <span>block → launch</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </Chapter>
  )
}

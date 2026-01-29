import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Heat System"
      intro="Heat is Tekken 8's biggest mechanic. Law gets auto-punch parry on DSS, a safe 1+2 launcher, and Heat meter recovery. Here's how to maximize your Heat pressure."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Defense & Back Turn"
    >
      <Section title="Law's Heat Benefits">
        <p>
          When Law activates Heat, he gains several powerful upgrades:
        </p>

        <KeyConcept title="Heat Mode Bonuses" icon="🔥">
          <ul>
            <li><strong>1+2 becomes safe launcher</strong> — -8 on block, launches on normal hit</li>
            <li><strong>DSS auto-parries punches</strong> — High and mid punches are parried automatically</li>
            <li><strong>uf+2 upgrades</strong> — +4 on block, knockdown on normal hit</li>
            <li><strong>Heat meter recovery</strong> — 1+2 and uf+2 restore Heat time on hit</li>
            <li><strong>Chip damage</strong> — Blocked attacks deal chip</li>
            <li><strong>Recoverable health regenerates</strong> — White health comes back</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Infinite Heat Glitch">
          Every time you land 1+2 or uf+2 in Heat, you recover some Heat meter. If you keep 
          landing these moves (like after slide), you can stay in Heat mode for a very long time.
        </TipBox>
      </Section>

      <Section title="Heat 1+2 — The God Move">
        <MoveCard character="law"
          videoId="H.1+2"
          move={{
            input: 'Heat 1+2',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i16~17',
            onBlock: '-8',
            onHit: '+66a (Launch T!)',
            tags: ['Mid', 'Safe Launcher', 'Heat Only', 'Recovers Heat'],
            description: 'In Heat, 1+2 becomes a SAFE NORMAL HIT LAUNCHER. This move is broken.',
          }}
          showVideo
        />

        <p>
          <span className="highlight">Heat 1+2 is arguably the best move Law has</span>. It's a 
          safe mid that launches on normal hit, has crazy range, tracks to Law's left, and 
          recovers Heat meter.
        </p>

        <KeyConcept title="Why Heat 1+2 is Broken" icon="💀">
          <ul>
            <li><strong>Safe on block</strong> — Only -8 with pushback</li>
            <li><strong>Launches on normal hit</strong> — No counter-hit needed</li>
            <li><strong>Great range</strong> — Covers the range Law usually struggles at</li>
            <li><strong>Tracks left</strong> — Catches people stepping your jabs</li>
            <li><strong>Recovers Heat</strong> — Stay in Heat longer</li>
            <li><strong>Hits grounded</strong> — Amazing for oki</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Only 3 Uses Per Heat">
          You can only use Heat 1+2 three times per Heat activation. Don't waste them on 
          blocked slide follow-ups — save them for guaranteed hits or neutral situations.
        </TipBox>
      </Section>

      <Section title="DSS Auto-Parry">
        <p>
          In Heat, whenever Law is in Dragon Charge, he <span className="highlight">automatically 
          parries all punches</span> (high and mid). This makes DSS pressure nearly unstoppable.
        </p>

        <KeyConcept title="Auto-Parry Implications" icon="🛡️">
          <ul>
            <li><strong>Unsafe strings become safe</strong> — Can't be jab punished in DSS</li>
            <li><strong>b+1,2~f becomes terrifying</strong> — -10 but parries their punish</li>
            <li><strong>ws+4~f pressure</strong> — They can't contest with jabs</li>
            <li><strong>Manual DSS in their face</strong> — d+1+2 to bait and parry</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            When they parry, Law automatically throws them and recovers Heat meter.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Kicks Still Work">
          The auto-parry only works on punches. Smart opponents will use kicks (4, ws+4, etc.) 
          to beat your DSS. Mix your options and don't get predictable.
        </TipBox>
      </Section>

      <Section title="Heat Engagers">
        <p>
          <span className="highlight">Heat Engagers</span> are moves that activate Heat on hit. 
          Using them is better than Heat Burst because you don't lose 1/3 of your Heat bar.
        </p>

        <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
          <MoveCard character="law"
            move={{
              input: 'uf+3',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i18',
              onBlock: '-8',
              onHit: '+42d (Heat Engager)',
              tags: ['Mid', 'Heat Engager', 'Safe', 'Low Crush'],
              description: 'Your best heat engager. Safe, low crushes, works from crouch. Use in slide mixup.',
            }}
          />

          <MoveCard character="law"
            move={{
              input: '1,1,1',
              hitLevel: ['h', 'h', 'm'],
              damage: '5, 5, 20',
              startup: 'i10',
              onBlock: '-12',
              onHit: '+41d (Heat Engager)',
              tags: ['Heat Engager', 'Counter-Hit Confirmable', 'Wall Splat'],
              description: 'Counter-hit confirmable engager from jab. Becomes Heat Dash launcher in Heat.',
            }}
          />

          <MoveCard character="law"
            move={{
              input: 'b+1,2,2',
              hitLevel: ['m', 'm', 'm'],
              damage: '12, 12, 22',
              startup: 'i14',
              onBlock: '-14',
              onHit: '+12a (Heat Engager)',
              tags: ['Heat Engager', 'All Mids', 'Tracks Right', 'Wall Splat'],
              description: 'All-mid rekka that tracks right. Wall splats. In Heat, becomes a launcher.',
            }}
          />

          <MoveCard character="law"
            move={{
              input: 'DSS.f+1',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i14',
              onBlock: '-11',
              onHit: '+39d (Heat Engager)',
              tags: ['Heat Engager', 'Mid', 'Chip Damage'],
              description: 'Fast mid heat engager from DSS. Use after plus frame DSS transitions.',
            }}
          />

          <MoveCard character="law"
            move={{
              input: 'DSS.f+3',
              hitLevel: ['m'],
              damage: '27',
              startup: 'i20',
              onBlock: '-9',
              onHit: '+22d (Heat Engager)',
              tags: ['Heat Engager', 'Mid', 'Safe', 'Wall/Floor Break'],
              description: 'Safe mid heat engager from DSS. Breaks walls and floors.',
            }}
          />
        </div>

        <KeyConcept title="Which Engager to Use?" icon="🎯">
          <ul>
            <li><strong>uf+3</strong> — Best overall. Safe, works from crouch, low crushes.</li>
            <li><strong>1,1,1</strong> — Frame trap situations, wall game.</li>
            <li><strong>b+1,2,2</strong> — Track steppers, wall game, in Heat becomes launcher.</li>
            <li><strong>DSS.f+1</strong> — After plus frame DSS entries.</li>
            <li><strong>DSS.f+3</strong> — Safe option, breaks walls.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat Smash">
        <MoveCard character="law"
          move={{
            input: 'H.2+3',
            hitLevel: ['m', 't'],
            damage: '50',
            startup: 'i14',
            onBlock: '+11g (into DSS)',
            onHit: 'Attack Throw',
            tags: ['Heat Smash', 'Mid', 'Plus on Block', 'DSS.Transition'],
            description: 'One of the best Heat Smashes in the game. Plus on block, auto-transitions to DSS for free mixup.',
          }}
          showVideo
        />

        <p>
          Law's Heat Smash is <span className="highlight">one of the best in the game</span>. 
          It's +11 on block and automatically transitions to DSS, giving you a free mixup. 
          At the wall, blocked Heat Smash leads to guaranteed wall combo.
        </p>

        <KeyConcept title="Heat Smash Properties" icon="💥">
          <ul>
            <li><strong>+11 on block</strong> — Massively plus</li>
            <li><strong>Auto DSS transition</strong> — Free mixup on block</li>
            <li><strong>Wall combo on block</strong> — At the wall, you get guaranteed damage</li>
            <li><strong>Decent damage</strong> — 50 damage throw on hit</li>
            <li><strong>i14 startup</strong> — Faster than many Heat Smashes</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Heat Smash Usage">
          Don't save Heat Smash for combos only. Throw it out in pressure — if they block, 
          you're +11 into DSS. If they get hit, 50 damage. Win-win.
        </TipBox>
      </Section>

      <Section title="Heat Pressure Strategy">
        <KeyConcept title="How to Use Heat" icon="🔥">
          <ol>
            <li><strong>Activate with engager</strong> — uf+3 or 1,1,1 on hit</li>
            <li><strong>Spam 1+2</strong> — Safe launcher that recovers Heat</li>
            <li><strong>DSS pressure with parry</strong> — They can't jab you</li>
            <li><strong>Keep sliding</strong> — Slide → 1+2 → repeat</li>
            <li><strong>Heat Smash for chip/plus frames</strong> — Or at wall for combo</li>
          </ol>
        </KeyConcept>

        <p>
          In Heat, Law's already-strong pressure becomes nearly unstoppable. The combination of 
          safe 1+2 launcher, auto-parry on DSS, and Heat recovery means you can maintain 
          pressure for extended periods.
        </p>

        <TipBox variant="tip" title="Don't Waste Heat">
          Plan your Heat activation. Know what you want to accomplish before you commit. 
          Don't activate Heat and then do nothing special — maximize your timer.
        </TipBox>
      </Section>

      <Collapsible title="Heat Move Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Type</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>uf+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>Best engager, safe, low crush</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,1,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>CH confirmable, Heat Dash launcher</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+1,2,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>All mids, tracks right, launcher in Heat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DSS.f+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>Fast mid from DSS</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DSS.f+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>Safe mid, breaks walls</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>Heat 1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Heat Only</td>
                <td style={{ padding: '8px' }}>Safe launcher, recovers Heat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>Heat uf+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Heat Only</td>
                <td style={{ padding: '8px' }}>+4 oB, recovers Heat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>H.2+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Smash</td>
                <td style={{ padding: '8px' }}>+11 oB, DSS transition</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DSS (Heat)</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Stance</td>
                <td style={{ padding: '8px' }}>Auto-parries punches</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}

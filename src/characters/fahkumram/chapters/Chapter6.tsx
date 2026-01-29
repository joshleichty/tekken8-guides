import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Garuda Force Install"
      intro="Garuda Force (GRF) is Fahkumram's install mechanic. When active, you gain access to enhanced moves, guard breaks, and the devastating Rama stance. Understanding how to earn and use GRF is essential."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Learn Rama Stance"
    >
      <Section title="What is Garuda Force?">
        <p>
          Garuda Force is shown as an <span className="highlight">icon beneath your health bar</span>. 
          When you have a charge, the icon glows and Fahkumram's scars light up with electricity.
        </p>

        <KeyConcept title="Garuda Force Benefits" icon="⚡">
          <ul>
            <li><strong>Enhanced moves</strong> — New extensions and properties</li>
            <li><strong>Guard breaks</strong> — Charged kicks that stun blocking opponents</li>
            <li><strong>Rama stance access</strong> — The 5-way mixup stance</li>
            <li><strong>GRF 1+2 parry</strong> — Special reversal that leads to Rama</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Heat Grants Permanent GRF">
          While in Heat, you have permanent Garuda Force. You don't need to earn it — 
          all GRF moves are available for the duration of Heat.
        </TipBox>
      </Section>

      <Section title="How to Earn Garuda Force">
        <p>
          These moves grant Garuda Force when they <strong>hit</strong>:
        </p>

        <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
          <MoveCard character="fahkumram"
            move={{
              input: 'f+3+4',
              hitLevel: ['m'],
              damage: '22',
              startup: 'i22',
              onBlock: '-14',
              onHit: '+19a (+14)',
              tags: ['Mid', 'Power Crush', 'Grants GRF', 'Knee'],
              description: 'Power crush that grants GRF on hit. -14 on block so use carefully.',
            }}
          />

          <MoveCard character="fahkumram"
            move={{
              input: 'b+4,3,2',
              hitLevel: ['m', 'm', 'm'],
              damage: '14, 14, 21',
              startup: 'i14',
              onBlock: '-12',
              onHit: '+16d',
              tags: ['Mid', 'Mid', 'Mid', 'Grants GRF', 'Combo Ender'],
              description: 'Knee string that grants GRF on hit. Common combo ender.',
            }}
          />

          <MoveCard character="fahkumram"
            move={{
              input: 'df+1,2',
              hitLevel: ['m', 'm'],
              damage: '12, 20',
              startup: 'i15',
              onBlock: '-13',
              onHit: '+12d',
              tags: ['Mid', 'Mid', 'Grants GRF', 'Floor Break', 'Low Crush'],
              description: 'df+1 extension that grants GRF and floor breaks.',
            }}
          />

          <MoveCard character="fahkumram"
            move={{
              input: 'f,f+1+2',
              hitLevel: ['m'],
              damage: '22',
              startup: 'i18',
              onBlock: '-14',
              onHit: '+43a (+33)',
              tags: ['Mid', 'Grants GRF', 'Launcher'],
              description: 'Running mid launcher that grants GRF. Also a guaranteed follow-up after some knockdowns.',
            }}
          />
        </div>

        <KeyConcept title="Common Ways to Get GRF" icon="📋">
          <ol>
            <li><strong>In combos</strong> — End with b+4,3,2 or df+1,2</li>
            <li><strong>After knockdown</strong> — Use f,f+1+2 as follow-up</li>
            <li><strong>Power crush</strong> — f+3+4 when you read an attack</li>
            <li><strong>Punch parry</strong> — b+2+4 success grants GRF + health</li>
            <li><strong>Heat mode</strong> — Permanent GRF for the duration</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="GRF-Enhanced Moves">
        <p>
          With Garuda Force, these moves gain new properties or extensions:
        </p>

        <MoveCard character="fahkumram"
          move={{
            input: 'GRF.df+3+4,3',
            hitLevel: ['m', 'm', 'm'],
            damage: '8, 16, 23',
            startup: 'i13',
            onBlock: '-9',
            onHit: '+13g (Rama)',
            tags: ['Mid', 'Mid', 'Mid', 'Rama Transition', 'Consumes GRF'],
            description: 'GRF-only move. Hit-confirmable third kick that transitions to Rama stance on hit.',
          }}
          showVideo
        />

        <p>
          GRF df+3+4,3 is <span className="highlight">your best GRF tool</span>. It's hit-confirmable 
          — if the first two hits land, complete the string. On hit, you go into Rama stance for 
          the mixup.
        </p>

        <TipBox variant="tip" title="Hit Confirm It">
          The third hit is only -9 on block if you stop at df+3+4 (two hits, -10). But the 
          third hit confirms into Rama on HIT. Watch for the hit confirm and complete it.
        </TipBox>

        <MoveCard character="fahkumram"
          move={{
            input: 'GRF.f+2,1,2',
            hitLevel: ['m', 'm', 'm'],
            damage: '14, 22, 20',
            startup: 'i15',
            onBlock: '+2',
            onHit: '+15d',
            tags: ['Mid', 'Mid', 'Mid', 'Plus on Block', 'Floor Break', 'Consumes GRF'],
            description: 'Triple mid string that\'s +2 ON BLOCK. Excellent pressure tool.',
          }}
          showVideo
        />

        <p>
          GRF f+2,1,2 is <span className="highlight">+2 on block</span> — you maintain pressure 
          even when blocked. However, it can be sidestepped left between hits 2 and 3.
        </p>

        <TipBox variant="warning" title="Can Be Stepped">
          Smart opponents will sidestep left after blocking f+2,1. Mix in f+2,1 by itself 
          or use other options to condition them.
        </TipBox>

        <MoveCard character="fahkumram"
          move={{
            input: 'GRF.1+2',
            hitLevel: ['sp'],
            damage: '—',
            startup: '—',
            onBlock: '—',
            onHit: '—',
            tags: ['Special', 'Parry', 'Power Crush', 'Rama Transition', 'Consumes GRF'],
            description: 'Special parry that absorbs mids/highs and transitions to Rama. Power crush frames 5-19.',
          }}
          showVideo
        />

        <p>
          GRF 1+2 is a <span className="highlight">parry that leads to Rama stance</span>. 
          If you absorb an attack, you automatically enter Rama with frame advantage for the mixup.
        </p>
      </Section>

      <Section title="Charged Guard Breaks">
        <p>
          With GRF, certain moves can be <strong>charged</strong> to create guard breaks:
        </p>

        <MoveCard character="fahkumram"
          move={{
            input: '3,4~3* (hold)',
            hitLevel: ['m', 'm'],
            damage: '11, 23',
            startup: 'i13, i36 (charged)',
            onBlock: '+9 (Guard Break → Rama)',
            onHit: '+70a (T!)',
            tags: ['Mid', 'Mid', 'Guard Break', 'Rama Transition', 'Needs GRF'],
            description: 'Charged Tornado Kick. On block, guard breaks into Rama stance.',
          }}
        />

        <MoveCard character="fahkumram"
          move={{
            input: '4,3~4* (hold)',
            hitLevel: ['h', 'm'],
            damage: '10, 25',
            startup: 'i12, i36 (charged)',
            onBlock: '+9 (Guard Break → Rama)',
            onHit: '+73a (T!)',
            tags: ['High', 'Mid', 'Guard Break', 'Rama Transition', 'Needs GRF'],
            description: 'Charged Eruption Kick. Same guard break property.',
          }}
        />

        <KeyConcept title="Guard Break Flow" icon="🔓">
          <ol>
            <li>Have Garuda Force active</li>
            <li>Do a string with charge option (3,4~3, 4,3~4, etc.)</li>
            <li><strong>Hold</strong> the final button to charge</li>
            <li>If blocked, opponent is stunned → auto-enter Rama</li>
            <li>Execute your 5-way mixup</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="Can Be Interrupted">
          The charged versions are slow (i36). Opponents can interrupt with fast moves.
          Use the charge when they're conditioned to block, not randomly.
        </TipBox>

        <Collapsible title="Charge Cancel" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <p>
              If you start charging but realize you'll get interrupted, press <code>F</code> 
              (forward) during frames 16-24 to cancel into full crouch.
            </p>
            <p style={{ marginTop: '12px' }}>
              You can also press <code>D</code> at frames 16-24 to cancel into a sweep 
              (GRF 3*~d) which is a different option.
            </p>
          </div>
        </Collapsible>
      </Section>

      <Section title="GRF Strategy">
        <KeyConcept title="When to Go for GRF" icon="🎯">
          <ul>
            <li><strong>After a combo</strong> — End with b+4,3,2 for guaranteed GRF</li>
            <li><strong>After knockdown</strong> — Use f,f+1+2 follow-up</li>
            <li><strong>With Heat available</strong> — Activate Heat for permanent GRF</li>
            <li><strong>When they press buttons</strong> — f+3+4 power crush</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Using GRF Effectively" icon="⚡">
          <ol>
            <li><strong>Don't waste it</strong> — GRF moves consume the charge</li>
            <li><strong>Go for Rama</strong> — GRF df+3+4,3 on hit or guard break on block</li>
            <li><strong>Pressure with f+2,1,2</strong> — +2 on block pressure</li>
            <li><strong>Save for reads</strong> — GRF 1+2 parry when you predict an attack</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Combo into GRF into Rama">
          The ideal flow: Launch → Combo ending in b+4,3,2 → Get GRF → Next interaction 
          do GRF df+3+4,3 on hit → Enter Rama → Execute mixup
        </TipBox>
      </Section>

      <Collapsible title="GRF Move Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Grants GRF</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Requires GRF</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>f+3+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>✓</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ padding: '8px' }}>Power crush, -14</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+4,3,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>✓</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ padding: '8px' }}>Combo ender</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>✓</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ padding: '8px' }}>Floor break</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>✓</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ padding: '8px' }}>Launcher, follow-up</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+2+4 (parry)</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>✓</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ padding: '8px' }}>Punch parry, heals</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>GRF df+3+4,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>✓</td>
                <td style={{ padding: '8px' }}>Hit → Rama</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>GRF f+2,1,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>✓</td>
                <td style={{ padding: '8px' }}>+2 on block</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>GRF 1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>✓</td>
                <td style={{ padding: '8px' }}>Parry → Rama</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>3,4~3* (charged)</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>✓</td>
                <td style={{ padding: '8px' }}>Guard break → Rama</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}

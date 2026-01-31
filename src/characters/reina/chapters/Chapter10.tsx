import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Heat System"
      intro="In heat, Reina becomes even more dangerous. Auto-electrics, auto-parries in WRA, and devastating heat moves. Learn when to activate and how to maximize your heat time."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Wall Game"
    >
      <Section title="Heat Activation">
        <p>
          You can activate heat two ways: <strong>Heat Burst</strong> (2+3) or landing a 
          <strong>Heat Engager</strong>.
        </p>

        <KeyConcept title="Heat Engagers" icon="🔥">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f+3</code></td>
                <td style={{ padding: '8px' }}>Safe mid, good in combos</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1,2</code></td>
                <td style={{ padding: '8px' }}>13f punish, -14 on block</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 3</code></td>
                <td style={{ padding: '8px' }}>Guaranteed after f,f+2 hit</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>WRA 2</code></td>
                <td style={{ padding: '8px' }}>Safe mid from WRA</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>UNS 4</code></td>
                <td style={{ padding: '8px' }}>Massive range, whiff punish</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <TipBox variant="tip" title="Best Way to Activate">
          Your most common heat activation will be <strong>f,f+2 hit → SEN 3</strong>. 
          It's natural, gives good damage, and starts your pressure.
        </TipBox>
      </Section>

      <Section title="What Heat Gives You">
        <KeyConcept title="Heat Mode Buffs" icon="⚡">
          <ul>
            <li><strong>Auto-Electrics</strong> — EWGF and EWGK don't require just-frame input</li>
            <li><strong>WRA Auto-Parry</strong> — Standing in WRA parries mids/highs automatically</li>
            <li><strong>Chip damage boost</strong> — All moves do extra chip</li>
            <li><strong>New string extensions</strong> — 3,4,4 and 3+4,4,4 become available</li>
            <li><strong>Heat recovery in UNS</strong> — Entering Unsoku restores some heat meter</li>
          </ul>
        </KeyConcept>

        <MoveCard character="reina"
          videoId="H.3,4,4"
          move={{
            input: 'H.3,4,4 (Heat only)',
            hitLevel: ['h', 'm', 'm'],
            damage: '12, 20, 28',
            startup: 'i18~19',
            onBlock: '-8',
            onHit: '+23a',
            tags: ['High', 'Mid', 'Mid', 'Heat Only', 'Safe'],
            description: 'Heat-only extension. High crushes. -8 makes it much safer than non-heat version.',
            notes: ['Only available in heat', 'High crush on first hit', '-8 is safe']
          }}
          showVideo
        />
      </Section>

      <Section title="Heat Smash">
        <MoveCard character="reina"
          videoId="H.2+3"
          move={{
            input: 'Heat Smash (2+3 in heat)',
            hitLevel: ['m', 'm'],
            damage: '20, 25',
            startup: 'i21',
            onBlock: '+8',
            onHit: '+0d',
            tags: ['Mid', 'Mid', 'Heat Smash', 'Plus on Block'],
            description: 'Heat smash. +8 on block! Huge wall carry. Goes to WRA.',
            notes: ['Balcony break', 'Transitions to WRA', '+19d if only second hit connects', 'Wall break']
          }}
          showVideo
        />

        <p>
          Reina's heat smash is <strong>+8 on block</strong>, which is insane. It also has massive 
          wall carry and breaks walls. Use it when you want guaranteed pressure or wall break.
        </p>

        <MoveCard character="reina"
          videoId="H.WRA.2+3"
          move={{
            input: 'WRA Heat Smash (2+3 in WRA during heat)',
            hitLevel: ['l', 'm', 'm', 'm'],
            damage: '12, 8, 3, 12',
            startup: 'i18~19',
            onBlock: '-17',
            onHit: '+0',
            tags: ['Low', 'Mid', 'Mid', 'Mid', 'Heat Smash', 'Floor Break'],
            description: 'Low-starting heat smash from WRA. Floor breaks. Very unsafe.',
            notes: ['Attack throw on first hit', 'Floor break', '+4a if blocked after first hit', 'Consumes 300F heat']
          }}
          showVideo
        />

        <TipBox variant="warning" title="WRA Heat Smash is Risky">
          The WRA version starts low and is -17 if the first hit is blocked. Only use it 
          when you've conditioned them to stand block or for floor breaks.
        </TipBox>
      </Section>

      <Section title="Heat Dash Follow-ups">
        <p>
          After landing a heat engager, you can <strong>heat dash</strong> for combo extension. 
          The follow-up depends on which engager you used.
        </p>

        <KeyConcept title="Heat Dash Routes" icon="➡️">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>After...</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Heat Dash into</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1,2</code></td>
                <td style={{ padding: '8px' }}>d+4:1 → f,n,d,df+3 (best oki)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 3</code></td>
                <td style={{ padding: '8px' }}>d+4:1 → f,n,d,df+3</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>WRA 2</code></td>
                <td style={{ padding: '8px' }}>Full combo (launches)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>UNS 4</code></td>
                <td style={{ padding: '8px' }}>Full combo (launches)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f+3</code></td>
                <td style={{ padding: '8px' }}>Full combo (launches)</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <TipBox variant="tip" title="The d+4:1 Just Frame">
          After heat dash from df+1,2 or SEN 3, <code>d+4:1</code> is a just-frame input. 
          It gives better oki than the regular stomp. Practice the timing.
        </TipBox>
      </Section>

      <Section title="When to Activate Heat">
        <KeyConcept title="Heat Timing Strategy" icon="⏰">
          <ul>
            <li><strong>Early heat</strong> — Get pressure, chip damage, auto-electrics</li>
            <li><strong>Late heat</strong> — Save for comeback potential or guaranteed situations</li>
            <li><strong>Mid-combo heat</strong> — Use heat burst in combo for extra damage</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Generally, activating heat early is fine because Reina benefits so much from the 
            pressure and auto-electric options. Don't hoard it.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Practice: Heat">
        <PracticeBox
          title="Heat Activation Drill"
          setup="Start without heat. Practice activating via different engagers."
          tasks={[
            { id: 'heat-1', text: 'Activate via f,f+2 → SEN 3 five times', type: 'counter', target: 5 },
            { id: 'heat-2', text: 'Activate via UNS 4 from range three times', type: 'counter', target: 3 },
            { id: 'heat-3', text: 'Use heat smash after activation three times', type: 'counter', target: 3 },
          ]}
        />

        <PracticeBox
          title="Auto-Electric Drill"
          setup="Activate heat. Practice electric without just-frame."
          tasks={[
            { id: 'auto-1', text: 'Do 5 auto-electrics in heat', type: 'counter', target: 5 },
            { id: 'auto-2', text: 'Punish -15 move with auto-electric 3 times', type: 'counter', target: 3 },
          ]}
        />
      </Section>

      <Collapsible title="Heat Reference" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Heat Engagers</h4>
          <p style={{ color: 'var(--text-secondary)' }}>f,f+3, df+1,2, SEN 3, WRA 2, UNS 4</p>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px', marginTop: '16px' }}>Heat Buffs</h4>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li>Auto-electrics (no just-frame needed)</li>
            <li>WRA auto-parry</li>
            <li>New string extensions (3,4,4 etc.)</li>
            <li>UNS restores heat meter</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}

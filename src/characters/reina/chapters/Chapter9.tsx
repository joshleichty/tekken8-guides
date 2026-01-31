import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Defense & Movement"
      intro="Reina is known for offense, but you still need to defend. This chapter covers her defensive tools—from Unsoku evasion to parries—and how to survive pressure."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Heat System"
    >
      <Section title="The Unsoku Defense">
        <p>
          Reina's primary defensive tool is <strong>Unsoku</strong>—the evasive backstep stance 
          accessed via b+3, d+3, or u+3.
        </p>

        <MoveCard character="reina"
          videoId="b+3"
          move={{
            input: 'b+3 (Unsoku Gen)',
            hitLevel: [],
            damage: '',
            startup: '',
            onBlock: '',
            onHit: '',
            tags: ['Stance', 'Evasive', 'Defense'],
            description: 'Backstep into Unsoku stance. Chain multiple for extended evasion.',
            notes: ['Can chain b+3 → b+3 → b+3...', 'Can cancel to WGS with df', 'Can do UNS 4 from stance']
          }}
          showVideo
        />

        <KeyConcept title="The Unsoku Chain" icon="🌀">
          <p>
            By pressing <code>b+3</code> repeatedly, Reina does an extended evasive backdash. 
            During any part of this chain, you can:
          </p>
          <ul>
            <li><strong>UNS 4</strong> — Whiff punish with massive range</li>
            <li><strong>df~</strong> — Cancel to WGS for electric</li>
            <li><strong>f+3</strong> — Cancel to Sentai</li>
            <li><strong>db</strong> — Cancel to neutral and block</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="When to Use Unsoku Defense">
          Use b+3 chains when you're under pressure and need to create space. Watch for whiffs 
          and punish with UNS 4. It's not a replacement for blocking—use it to reset to neutral.
        </TipBox>
      </Section>

      <Section title="Parries">
        <p>
          Reina has three different parry mechanics:
        </p>

        <MoveCard character="reina"
          videoId="b+1+3"
          move={{
            input: 'b+1+3 or b+2+4',
            hitLevel: [],
            damage: '',
            startup: '',
            onBlock: '',
            onHit: 'Varies',
            tags: ['Parry', 'Mids', 'Highs'],
            description: 'Parries standing mids and highs. Leads to WRA. Frame advantage varies by move parried.',
            notes: ['Parry window 3~8 frames', 'Works on knees, elbows, weapons', 'Self-chip damage', 'Partially restores heat on success']
          }}
          showVideo
        />

        <KeyConcept title="b+1+3 Parry Follow-ups" icon="🛡️">
          <ul>
            <li><strong>After parry</strong> — You're in Heaven's Wrath with advantage</li>
            <li><strong>Fast recovery moves</strong> — Can do WRA 4 or WRA 2</li>
            <li><strong>Slow recovery moves</strong> — Can do electric for launch</li>
            <li><strong>If unsure</strong> — WRA 1,4 is safe</li>
          </ul>
        </KeyConcept>

        <p>
          Reina also has <strong>punch parry</strong> on d+3 and u+3 (Unsoku Kou), and a 
          <strong>Wind God Step parry</strong> on f,n:
        </p>

        <KeyConcept title="Other Parries" icon="✋">
          <ul>
            <li><strong>d+3 / u+3</strong> — Punch parry frames 5~12. On success, goes to WGS +10.</li>
            <li><strong>f,n (Wind Step)</strong> — Parry on frames 2~8. Very tight timing. Goes to WGS +10.</li>
            <li><strong>Heat WRA</strong> — Auto-parries mids/highs while in WRA stance during heat.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Parries Are Advanced">
          Parries require reads and good timing. Don't rely on them until you're comfortable 
          with Reina's basic defense. They're tools to add later, not fundamentals.
        </TipBox>
      </Section>

      <Section title="Power Crush Options">
        <p>
          When you need to armor through pressure:
        </p>

        <MoveCard character="reina"
          videoId="b+1+2"
          move={{
            input: 'b+1+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i18',
            onBlock: '-13',
            onHit: '+14g',
            tags: ['Mid', 'Power Crush', 'Unsafe'],
            description: 'Standing power crush. -13 on block is punishable.',
            notes: ['Power crush 7~', 'Balcony break', 'Use as a read, not spam']
          }}
          showVideo
        />

        <p>
          You also have <strong>SEN 1,2</strong> and <strong>WRA 1+2</strong> from stances. All 
          power crushes are punishable—use them only when you're confident the opponent will press.
        </p>
      </Section>

      <Section title="Movement Basics">
        <p>
          Reina's movement is decent but not exceptional. Key movement concepts:
        </p>

        <KeyConcept title="Movement Tools" icon="🏃">
          <ul>
            <li><strong>Backdash</strong> — Standard. Can chain into b+3 for more distance.</li>
            <li><strong>Sidestep</strong> — Standard. b+2 catches steppers if they get predictable.</li>
            <li><strong>Crouch Dash</strong> — f,n,d,df gives access to mixups while moving forward.</li>
            <li><strong>Side Step 4</strong> — Low kick from sidestep, neutral on hit.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Sidestep Direction">
          Most of Reina's linear moves track SSL. When facing Reina, SSR is generally safer. 
          When playing Reina, be aware opponents will SSR and use b+2 or homing moves to catch them.
        </TipBox>
      </Section>

      <Section title="Under Pressure">
        <KeyConcept title="What to Do When Minus" icon="😰">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Situation</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Options</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>Slightly minus (-1 to -5)</td>
                <td style={{ padding: '8px' }}>Block, backdash, or take a calculated risk</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Very minus (-6 to -9)</td>
                <td style={{ padding: '8px' }}>Block and wait. They have options.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Against wall</td>
                <td style={{ padding: '8px' }}>Sidestep block to escape, or block and watch for throw</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>After knockdown</td>
                <td style={{ padding: '8px' }}>Tech roll, stay down, or get-up kick (mix it up)</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Mash">
          Reina has bad panic tools. Her b+1+2 is slow and punishable. Her lows are weak. 
          When you're minus, the best option is usually to block and wait for your turn.
        </TipBox>
      </Section>

      <Section title="Practice: Defense">
        <PracticeBox
          title="Unsoku Defense Drill"
          setup="Record opponent doing pressure strings. Practice b+3 to escape."
          tasks={[
            { id: 'def-1', text: 'Escape pressure with b+3 chains 5 times', type: 'counter', target: 5 },
            { id: 'def-2', text: 'Whiff punish with UNS 4 after escape 5 times', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Parry Drill (Advanced)"
          setup="Record opponent doing a jab string."
          tasks={[
            { id: 'parry-1', text: 'Parry with b+1+3 3 times', type: 'counter', target: 3 },
            { id: 'parry-2', text: 'Follow parry with WRA 1,4', type: 'toggle' },
          ]}
        />
      </Section>

      <Collapsible title="Defense Reference" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Primary Defense</h4>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li><strong>Block</strong> — Always the safest option</li>
            <li><strong>b+3 chain</strong> — Evasive backdash, whiff punish with UNS 4</li>
            <li><strong>Sidestep block</strong> — Especially at wall</li>
          </ul>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px', marginTop: '16px' }}>Parries (Advanced)</h4>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li><strong>b+1+3</strong> — Mids/highs, leads to WRA</li>
            <li><strong>d+3/u+3</strong> — Punch parry, leads to WGS</li>
            <li><strong>Heat WRA</strong> — Auto-parry in stance</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}

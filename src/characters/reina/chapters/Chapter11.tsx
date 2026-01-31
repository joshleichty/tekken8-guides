import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Flowchart,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Wall Game"
      intro="Reina's wall game is where her pressure becomes truly oppressive. Unbreakable throws, plus-on-block mids, and devastating wall combos. Learn to end rounds at the wall."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="The Electric Path"
    >
      <Section title="Getting to the Wall">
        <p>
          Reina's combos have excellent wall carry. Key enders for wall carry:
        </p>

        <KeyConcept title="Wall Carry Enders" icon="🏃">
          <ul>
            <li><strong>uf+3+4,1+2</strong> — Long carry, consistent</li>
            <li><strong>3,2</strong> — Even longer carry</li>
            <li><strong>df+1,1</strong> — Short carry, use when close to wall</li>
            <li><strong>Heat Smash</strong> — Massive carry and wall break</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Wall Pressure Tools">
        <MoveCard character="reina"
          videoId="f+4"
          move={{
            input: 'f+4 (at wall)',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i19~20',
            onBlock: '+2c',
            onHit: '+5c',
            tags: ['Mid', 'Plus on Block', 'Wall Pressure'],
            description: '+2 on block and forces crouch. At wall, this is devastating.',
            notes: ['+13c on crouching hit gives df+1,2', 'Opponent can\'t escape easily', 'Mix with throws']
          }}
          showVideo
        />

        <p>
          f+4 at the wall is your <strong>main pressure tool</strong>. Being +2 and forcing crouch 
          means opponents can't jab or escape. Mix with throws and mids.
        </p>

        <MoveCard character="reina"
          videoId="WRA.1+3"
          move={{
            input: 'WRA 1+3 (at wall)',
            hitLevel: ['t(h)'],
            damage: '35 (at wall)',
            startup: 'i16',
            onBlock: '',
            onHit: '+10d',
            tags: ['Throw', 'Unbreakable', 'Wall Damage'],
            description: 'Unbreakable throw does 35 at wall instead of 20. Excellent oki.',
          }}
          showVideo
        />

        <KeyConcept title="Wall Throw Setups" icon="🤼">
          <ul>
            <li><strong>After f+4 block</strong> — Mix WRA grab with mids</li>
            <li><strong>After wall combo</strong> — Opponent must guess tech direction</li>
            <li><strong>After SEN 4 block</strong> — +4 gives safe throw attempt</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Hell Sweep Wall Loop">
        <p>
          Near the wall, the hell sweep becomes much scarier:
        </p>

        <Flowchart 
          title="Wall Hell Sweep Loop"
          nodes={[
            { type: 'start', label: 'WGS.df+4,2~D (hell sweep hit)' },
            { type: 'decision', label: 'You\'re +6 in WRA', branches: [
              { label: 'Mid option', action: 'WRA 3,4~D (+8 WRA) or WRA 2' },
              { label: 'Low option', action: 'WRA d+4 or exit to more hell sweep' },
              { label: 'Grab option', action: 'WRA 1+3 (35 damage unbreakable)' }
            ]},
            { type: 'end', label: 'Loop or reset' }
          ]}
        />

        <TipBox variant="tip" title="Wall Loop Conditioning">
          At the wall, hell sweep becomes much better because opponents can't escape. 
          Hit them with WRA 3,4 a few times to show the mid threat, then start mixing in 
          the grab and more sweeps.
        </TipBox>
      </Section>

      <Section title="Wall Combos">
        <KeyConcept title="Wall Combo Options" icon="🧱">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Combo</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Damage</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1,1 → 1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~25</td>
                <td style={{ padding: '8px' }}>Easy, consistent</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,1 → d+3+4,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~28</td>
                <td style={{ padding: '8px' }}>Good oki</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+1,(delay)3 → SEN 2~D → WRA 3+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~55</td>
                <td style={{ padding: '8px' }}>Optimal, requires delay timing</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <TipBox variant="tip" title="The b+1,3 Wall Combo">
          The optimal wall combo requires delaying the second hit of b+1,3. Delay until you 
          see Reina start sliding down. Then SEN 2~D into WRA 3+4 for oki. Practice this—it's 
          worth the extra damage.
        </TipBox>
      </Section>

      <Section title="Wall Oki">
        <p>
          After wall combos, you have strong oki options:
        </p>

        <KeyConcept title="Wall Oki Situations" icon="😴">
          <ul>
            <li><strong>After WRA 3+4 ender</strong> — +3 on their wakeup, df+1 beats most options</li>
            <li><strong>After 3+4,4 ender</strong> — Can use ws+4,4~D for spike trap</li>
            <li><strong>Tech roll read</strong> — Step toward their tech, f+4 or grab</li>
            <li><strong>Stay down read</strong> — f,n,d,df+3 hits grounded</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Toe Kick Warning">
          Toe kick (tech roll up) beats many oki options. If opponent keeps toe kicking, 
          block it and launch punish with FC df+4. They'll stop.
        </TipBox>
      </Section>

      <Section title="Wall Break">
        <p>
          Reina can break walls with:
        </p>

        <ul>
          <li><strong>1+2</strong> — Standard wall break mid</li>
          <li><strong>f+4</strong> — Floor break</li>
          <li><strong>Heat Smash</strong> — Breaks any wall</li>
        </ul>

        <p>
          After wall break, you often get another combo opportunity or strong oki.
        </p>
      </Section>

      <Section title="Practice: Wall Game">
        <PracticeBox
          title="Wall Combo Drill"
          setup="Position near wall. Land wall splat."
          tasks={[
            { id: 'wall-1', text: 'Do df+1,1 → 1+2 wall combo 5 times', type: 'counter', target: 5 },
            { id: 'wall-2', text: 'Practice b+1,(delay)3 wall combo 5 times', detail: 'Get the delay timing', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Wall Pressure Drill"
          setup="Put opponent against wall. Practice pressure."
          tasks={[
            { id: 'press-1', text: 'Do f+4 → throw mixup 3 times', type: 'counter', target: 3 },
            { id: 'press-2', text: 'Do hell sweep → WRA pressure 3 times', type: 'counter', target: 3 },
          ]}
        />
      </Section>

      <Collapsible title="Wall Quick Reference" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Wall Pressure</h4>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li><strong>f+4</strong> — +2c, main tool</li>
            <li><strong>WRA 1+3</strong> — 35 damage unbreakable</li>
            <li><strong>Hell sweep loop</strong> — WGS.df+4,2~D → WRA options</li>
          </ul>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px', marginTop: '16px' }}>Wall Combos</h4>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li><strong>Easy:</strong> df+1,1 → 1+2</li>
            <li><strong>Optimal:</strong> b+1,(delay)3 → SEN 2~D → WRA 3+4</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}

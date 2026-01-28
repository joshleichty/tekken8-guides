import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, ExecutionBox, Collapsible, PracticeBox, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Crouch Dash Moves"
      intro="The crouch dash (CD) opens up a world of options — Dark Upper, Lariat, the unblockable mist, and more. Let's master each one."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Continue to Throws"
    >
      <ExecutionBox title="Crouch Dash Input Reminder" icon="🎮">
        <p>Crouch Dash = <strong>f, n, d, df</strong></p>
        <p>Forward → Neutral → Down → Down-Forward</p>
        <p>All CD moves are performed by adding a button at the end of this motion.</p>
      </ExecutionBox>

      <Section title="CD+1 — Shadow Lariat">
        <MoveCard
          input="CD+1 (f,n,d,df+1)"
          tags={['high', '+5 on block']}
          description={
            <>
              <span className="highlight">+5 on block!</span> A spinning lariat that does chip damage. On hit, 
              guarantees stomp (d+4,4,3+4). Your go-to plus frame tool from crouch dash.
            </>
          }
          stats={{
            startup: 'i15',
            onBlock: '+5',
            onHit: 'KND (stomp guaranteed)',
          }}
        />

        <TipBox title="CD1 Hit = Free Stomp">
          <p>
            When CD1 hits, immediately input d+4,4,3+4 for the stomp. This is guaranteed damage!
          </p>
        </TipBox>
      </Section>

      <Section title="CD+2 — Dark Upper">
        <MoveCard
          input="CD+2 (f,n,d,df+2)"
          tags={['high', 'launcher']}
          description={
            <>
              Your primary launcher and whiff punisher. Fast at i11-12, incredible range, launches on hit, 
              and only -10 on block. The signature Armor King move.
            </>
          }
          stats={{
            startup: 'i11-12',
            onBlock: '-10',
            onHit: '+36a Launch',
          }}
        />
      </Section>

      <Section title="CD+4 — Safe Mid">
        <MoveCard
          input="CD+4 (f,n,d,df+4)"
          tags={['mid', 'Tornado']}
          description={
            <>
              Safe mid from crouch dash. On <span className="highlight-secondary">counter hit</span>, 
              gives Tornado for combo. Low crushes during the motion.
            </>
          }
          stats={{
            startup: 'i16',
            onBlock: '-9',
            onHit: '+28a',
            onCH: 'Tornado',
          }}
        />
      </Section>

      <Section title="CD+1+2 — Poison Mist">
        <MoveCard
          input="CD+1+2 (f,n,d,df+1+2)"
          tags={['high', 'stun']}
          description={
            <>
              Armor King spits mist! On hit, opponent is stunned and{' '}
              <span className="highlight-secondary">throws become unbreakable</span> for 23 frames. 
              Very slow at 35 frames (25f in Heat).
            </>
          }
          stats={{
            startup: 'i35 (i25 Heat)',
            onHit: '+23g (throws unbreakable)',
          }}
        />

        <TipBox title="Mist is Reactable" variant="warning">
          <p>
            At 35 frames, most players can react to mist and duck. In Heat it becomes 25 frames — still 
            reactable but much scarier. Use it to test if your opponent knows the matchup.
          </p>
        </TipBox>
      </Section>

      <Section title="CD+1+3 / CD+2+4 — Chain Throw Starter">
        <MoveCard
          input="CD+1+3 or CD+2+4"
          tags={['throw', 'chain starter']}
          variant="throw"
          description={
            <>
              Starts a chain throw sequence! CD+1+3 is broken with 1, CD+2+4 is broken with 2. 
              Leads into Dark Moonsault Driver (DMD) chain throws.
            </>
          }
          stats={{
            startup: 'i12',
            damage: '20 (starter)',
          }}
        />
      </Section>

      <KeyConcept title="Crouch Dash Mixup" icon="🔑">
        <p>From crouch dash, you can:</p>
        <ul>
          <li><strong>CD+1</strong> — +5 on block, sets up throws</li>
          <li><strong>CD+2</strong> — Launcher, whiff punish</li>
          <li><strong>CD+4</strong> — Safe mid, CH Tornado</li>
          <li><strong>CD+1+3/2+4</strong> — Chain throw starter</li>
          <li><strong>CD+1+2</strong> — Mist (risky but rewarding)</li>
        </ul>
        <p>Wave dash to close distance, then threaten any of these options!</p>
      </KeyConcept>

      <Collapsible title="CD Move Summary Table" icon="📊" defaultOpen>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
              <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Startup</th>
              <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
              <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Best Use</th>
            </tr>
          </thead>
          <tbody style={{ color: 'var(--text-secondary)' }}>
            <tr>
              <td style={{ padding: '8px' }}>CD+1</td>
              <td style={{ textAlign: 'center' }}>i15</td>
              <td style={{ textAlign: 'center', color: 'var(--success)' }}>+5</td>
              <td style={{ padding: '8px' }}>Plus frames, throw setup</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>CD+2</td>
              <td style={{ textAlign: 'center' }}>i11-12</td>
              <td style={{ textAlign: 'center', color: 'var(--danger)' }}>-10</td>
              <td style={{ padding: '8px' }}>Whiff punish, launcher</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>CD+4</td>
              <td style={{ textAlign: 'center' }}>i16</td>
              <td style={{ textAlign: 'center', color: 'var(--danger)' }}>-9</td>
              <td style={{ padding: '8px' }}>Safe mid, CH Tornado</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>CD+1+2</td>
              <td style={{ textAlign: 'center' }}>i35</td>
              <td style={{ textAlign: 'center' }}>—</td>
              <td style={{ padding: '8px' }}>Mist (risky)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>CD+1+3/2+4</td>
              <td style={{ textAlign: 'center' }}>i12</td>
              <td style={{ textAlign: 'center' }}>Throw</td>
              <td style={{ padding: '8px' }}>Chain throw starter</td>
            </tr>
          </tbody>
        </table>
      </Collapsible>

      <PracticeBox
        title="Crouch Dash Move Practice"
        setup="Set dummy to Guard All. Focus on clean crouch dash inputs."
        tasks={[
          { id: 'ch9-cd1', text: 'Do CD+1 (Shadow Lariat)', detail: 'f,n,d,df+1 — Notice the +5 on block', type: 'counter', target: 15 },
          { id: 'ch9-cd2', text: 'Do CD+2 (Dark Upper) 20 times cleanly', detail: 'f,n,d,df+2 — This is your bread and butter', type: 'counter', target: 20 },
          { id: 'ch9-cd4', text: 'Do CD+4 (Safe mid)', detail: 'f,n,d,df+4 — Your safe mid from CD', type: 'counter', target: 10 },
          { id: 'ch9-wavedark', text: 'Wave dash 2-3 times, then Dark Upper', detail: 'Close distance with wave dash, then launch!', type: 'counter', target: 10 },
          { id: 'ch9-cd1stomp', text: 'CD+1 on hit → d+4,4,3+4 (stomp)', detail: 'Practice the guaranteed follow-up', type: 'counter', target: 10 },
        ]}
      />

      <Quiz
        question="You've waved dashed close to your opponent and they're blocking. What's the safest CD option that also gives you plus frames?"
        options={[
          { text: 'CD+2 — Dark Upper launches', isCorrect: false },
          { text: 'CD+1 — +5 on block, sets up throws', isCorrect: true },
          { text: 'CD+1+2 — Mist is unblockable', isCorrect: false },
          { text: 'CD+4 — Safe mid', isCorrect: false },
        ]}
        correctFeedback="Correct! CD+1 gives you +5 on block, which is perfect for setting up throws. It's also safe and does chip damage. CD+2 is great but -10, and CD+4 is -9 but doesn't give plus frames."
        incorrectFeedback="Not quite. While CD+2 is your launcher, it's -10 on block. CD+1 is +5 on block, making it the safest option that also gives you frame advantage for throw setups!"
      />
    </Chapter>
  )
}

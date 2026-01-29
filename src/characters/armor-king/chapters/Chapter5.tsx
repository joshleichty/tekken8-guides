import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, Collapsible, PracticeBox, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Counter Hit Tools"
      intro="Armor King has an embarrassingly good selection of safe mid counter-hit launchers. The catch? Most are linear. Let's learn when and how to use them."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Continue to Plus Frames"
    >
      <KeyConcept title="Counter Hit Philosophy" icon="🔑">
        <p>All of Armor King's best counter hit tools are:</p>
        <ul>
          <li><strong>Safe on block</strong> — Low risk to throw them out</li>
          <li><strong>Mid attacks</strong> — Can't be ducked</li>
          <li><strong>Linear</strong> — Can be sidestepped</li>
        </ul>
        <p>The key is using them when your opponent is <span className="highlight">likely to press buttons</span>, not when they're looking to step.</p>
      </KeyConcept>

      <Section title="df+3 — The Knee">
        <MoveCard character="armor-king"
          input="df+3"
          tags={['mid', 'CH launcher']}
          description={
            <>
              Your safest CH tool at only -5 on block. On <span className="highlight-secondary">counter hit</span>, 
              launches for a full combo! Very linear though — can be stepped easily.
            </>
          }
          stats={{
            startup: 'i17',
            onBlock: '-5',
            onHit: '+5',
            onCH: 'Launch +49a',
          }}
        />

        <TipBox title="When to Use df+3">
          <p>
            Use df+3 when you think your opponent will press buttons. After a blocked move where you're 
            slightly minus, after a tech roll, or when they're getting impatient.
          </p>
        </TipBox>
      </Section>

      <Section title="uf+3 — The Hopkick Alternative">
        <MoveCard character="armor-king"
          input="uf+3"
          tags={['mid', 'CH launcher']}
          description={
            <>
              Another safe CH launcher. -8 on block, launches on <span className="highlight-secondary">counter hit</span>. 
              Also launches airborne opponents.
            </>
          }
          stats={{
            startup: 'i19',
            onBlock: '-8',
            onHit: '+5',
            onCH: 'Launch +35a',
          }}
        />
      </Section>

      <Section title="ff+2 — The Long Range CH Tool">
        <MoveCard character="armor-king"
          input="ff+2"
          tags={['mid', 'CH launcher']}
          description={
            <>
              Excellent range and only -6 on block. On <span className="highlight-secondary">counter hit</span>, 
              gives a special stun for a full combo. Great for catching people pressing at range 2.
            </>
          }
          stats={{
            startup: 'i16',
            onBlock: '-6',
            onHit: '+6',
            onCH: 'Launch +44a',
          }}
        />
      </Section>

      <Section title="ws+2 — The True Dark Smash">
        <MoveCard character="armor-king"
          input="ws+2"
          tags={['mid', 'CH launcher']}
          description={
            <>
              Armor King's signature move. On <span className="highlight-secondary">counter hit</span>, triggers 
              "True Dark Smash" — an automatic follow-up for big damage. Only -9 on block!
            </>
          }
          stats={{
            startup: 'i12',
            onBlock: '-9',
            onHit: '+3',
            onCH: 'True Dark Smash +27a',
          }}
        />

        <KeyConcept title="True Dark Smash" icon="💀">
          <p>When ws+2 counter hits, it automatically transitions into a special animation called "True Dark Smash." 
          You don't need to input anything — it just happens. This gives you a full combo opportunity!</p>
          <p>This same effect happens on:</p>
          <ul>
            <li><strong>CH ws+2</strong> — While standing 2</li>
            <li><strong>CH b+1+3,2</strong> — Parry follow-up</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="SS+4 — Sidestep CH Tool">
        <MoveCard character="armor-king"
          input="SS+4"
          tags={['mid', 'CH launcher']}
          description={
            <>
              A sidestep into a mid kick. -8 on block. On <span className="highlight-secondary">counter hit</span>, 
              launches for a full combo. Good for evading linear attacks while fishing for CH.
            </>
          }
          stats={{
            startup: 'i19',
            onBlock: '-8',
            onHit: '+13a',
            onCH: 'Launch +58a',
          }}
        />
      </Section>

      <Collapsible title="CH Tool Summary Table" icon="📊" defaultOpen>
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
              <td style={{ padding: '8px' }}>df+3</td>
              <td style={{ textAlign: 'center', padding: '8px' }}>i17</td>
              <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-5</td>
              <td style={{ padding: '8px' }}>Safest option, close range</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>uf+3</td>
              <td style={{ textAlign: 'center', padding: '8px' }}>i19</td>
              <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-8</td>
              <td style={{ padding: '8px' }}>Low crush option</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>ff+2</td>
              <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
              <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
              <td style={{ padding: '8px' }}>Long range</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>ws+2</td>
              <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
              <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
              <td style={{ padding: '8px' }}>Frame traps, fastest option</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>SS+4</td>
              <td style={{ textAlign: 'center', padding: '8px' }}>i19</td>
              <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-8</td>
              <td style={{ padding: '8px' }}>After sidestep</td>
            </tr>
          </tbody>
        </table>
      </Collapsible>

      <PracticeBox
        title="Counter Hit Practice"
        setup="Set dummy to After Block → 1 (jab). This simulates opponents pressing after your moves. Practice fishing for counter hits."
        tasks={[
          { id: 'ch5-df3', text: 'Get a CH df+3 launch', detail: 'Block something, then do df+3. If they jab, you launch them!', type: 'counter', target: 5 },
          { id: 'ch5-ff2', text: 'Get a CH ff+2 from range', detail: 'Backdash then do ff+2 to catch them pressing', type: 'counter', target: 5 },
          { id: 'ch5-ws2', text: 'Get a CH ws+2 (True Dark Smash)', detail: 'After SS+2 on hit, do ws+2 to catch button pressers', type: 'counter', target: 5 },
          { id: 'ch5-ss4', text: 'Get a CH SS+4 after sidestep', detail: 'Sidestep then 4 — launches on CH', type: 'counter', target: 5 },
        ]}
      />

      <Quiz
        question="You blocked your opponent's move and you're at -3. You think they'll press a button. Which CH tool is best here?"
        options={[
          { text: 'ff+2 — it has the most range', isCorrect: false },
          { text: 'df+3 — safest at -5 if they block', isCorrect: true },
          { text: 'db+3 — the CH low launcher', isCorrect: false },
          { text: 'ws+2 — fastest CH tool', isCorrect: false },
        ]}
        correctFeedback="Correct! df+3 is only -5 on block, making it the safest option to throw out when fishing for counter hits at close range."
        incorrectFeedback="Not quite. While all options can work, df+3 is the safest at only -5 on block. If they block it, you're barely negative. If it counter hits, full combo!"
      />
    </Chapter>
  )
}

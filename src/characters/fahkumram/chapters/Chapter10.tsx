import { Chapter, Section } from '../../../components/guide'
import { KeyConcept, TipBox, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Frame Traps & Setups"
      intro="Frame traps are how you punish opponents for pressing buttons when it's not their turn. Fahkumram has several powerful plus frame situations that lead to counter-hit damage or continued pressure."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Heat System"
    >
      <Section title="What is a Frame Trap?">
        <KeyConcept title="Frame Trap Definition" icon="🪤">
          <p>
            A <strong>frame trap</strong> is using a plus frame move to keep yourself at advantage, 
            then following up with a fast attack that beats your opponent's retaliation.
          </p>
          <p style={{ marginTop: '12px' }}>
            If you're <strong>+2</strong> and do a <strong>12 frame</strong> move, it effectively 
            comes out in <strong>10 frames</strong> — the same speed as a jab. If they try to jab back, 
            you trade or beat them.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Fahkumram's Plus Frame Moves">
        <KeyConcept title="Plus Frame Situations" icon="➕">
          <ul>
            <li><strong>1 (jab)</strong> — +1 on block. Can continue pressure.</li>
            <li><strong>df+3~3</strong> — +2 on block. Mid fake-out from low start.</li>
            <li><strong>3,4~4</strong> — +3 on block. High extension but plus!</li>
            <li><strong>f,f,f+3</strong> — +6 on block. Running knee approach.</li>
            <li><strong>b,f+4</strong> — +6 on block. Jet kick (high).</li>
            <li><strong>GRF f+2,1,2</strong> — +2 on block. Triple mid string.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Key Frame Traps">
        <Collapsible title="1 (Jab) → Follow-up (+1 on block)" defaultOpen>
          <p>
            <strong>Jab</strong> is <strong>+1 on block</strong>. Not a huge advantage, but enough 
            to make your next move come out first in a trade.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>Best follow-ups:</strong></p>
          <ul>
            <li><strong>3</strong> — i13 mid, becomes i12 effective. Your main mid poke.</li>
            <li><strong>1,4</strong> — Another jab string for pressure.</li>
            <li><strong>df+1</strong> — i15 mid, becomes i14 effective. Tracks left.</li>
            <li><strong>d+4</strong> — Low check when they're freezing.</li>
          </ul>

          <TipBox variant="tip" title="The Basic Pressure Loop">
            Jab → 3 → Jab → d+4 → Jab → df+1...
            Mix these to keep opponents guessing. Jab resets your pressure safely.
          </TipBox>
        </Collapsible>

        <Collapsible title="df+3~3 → Follow-up (+2 on block)">
          <p>
            <strong>df+3~3</strong> (the low fake-out into mid) is <strong>+2 on block</strong>.
            Opponents expect the low (df+3) but get the mid instead and now you're plus.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>Best follow-ups:</strong></p>
          <ul>
            <li><strong>3</strong> — i13 mid, becomes i11 effective. Beats jabs.</li>
            <li><strong>1,4</strong> — i10 punish string, becomes i8 effective.</li>
            <li><strong>d+4</strong> — i14 low when they freeze.</li>
          </ul>
        </Collapsible>

        <Collapsible title="3,4~4 → Follow-up (+3 on block)">
          <p>
            <strong>3,4~4</strong> is <strong>+3 on block</strong> and homing. The second hit is 
            high so opponents might duck, but on block you have solid advantage.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>Best follow-ups:</strong></p>
          <ul>
            <li><strong>d+2</strong> — i12 mid jab, becomes i9 effective.</li>
            <li><strong>3</strong> — i13 mid, becomes i10 effective.</li>
            <li><strong>df+1</strong> — i15 mid, becomes i12 effective.</li>
          </ul>

          <TipBox variant="warning" title="Second Hit is High">
            3,4~4 can be ducked. Use 3,4 (mid-mid) when they start ducking. The threat of 
            the plus frames makes them scared to duck.
          </TipBox>
        </Collapsible>

        <Collapsible title="f,f,f+3 → Follow-up (+6 on block)">
          <p>
            <strong>Running knee</strong> is <strong>+6 on block</strong>. This is huge — you're 
            approaching with a move that's massively plus even when blocked.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>Best follow-ups:</strong></p>
          <ul>
            <li><strong>3</strong> — i13 mid, becomes i7 effective. BEATS JABS.</li>
            <li><strong>df+1</strong> — i15 mid, becomes i9 effective.</li>
            <li><strong>d+4</strong> — i14 low, becomes i8 effective.</li>
            <li><strong>throw</strong> — If they're freezing completely.</li>
          </ul>

          <KeyConcept title="The Running Knee Pressure" icon="🦵">
            <p>
              After f,f,f+3 on block, you're +6. Your 13f moves (like 3) effectively come out 
              in 7 frames — faster than any jab. If they press anything, they get counter-hit.
            </p>
          </KeyConcept>
        </Collapsible>

        <Collapsible title="b,f+4 → Follow-up (+6 on block)">
          <p>
            <strong>Jet kick</strong> is <strong>+6 on block</strong> with massive pushback. 
            The distance limits options but you're still at huge advantage.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>Best follow-ups:</strong></p>
          <ul>
            <li><strong>f,f+3</strong> — Low approach to close distance</li>
            <li><strong>f,f,f+3</strong> — Running knee to continue pressure</li>
            <li><strong>Another b,f+4</strong> — If they try to press, launch again</li>
            <li><strong>Dash → 3</strong> — Close distance and poke</li>
          </ul>

          <TipBox variant="tip" title="Jet Kick Pressure">
            After blocked b,f+4, many players panic and try to press buttons. If you read this, 
            another b,f+4 will launch them for a full combo.
          </TipBox>
        </Collapsible>

        <Collapsible title="GRF f+2,1,2 → Follow-up (+2 on block)">
          <p>
            <strong>GRF f+2,1,2</strong> is <strong>+2 on block</strong>. Triple mid pressure 
            that keeps you plus. However, it can be sidestepped left between hits.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>Best follow-ups:</strong></p>
          <ul>
            <li><strong>3</strong> — i13 mid, becomes i11 effective</li>
            <li><strong>1,4</strong> — i10 punish string</li>
            <li><strong>d+4</strong> — Low when they freeze</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Frame Trap Setups">
        <Collapsible title="1,4 → f,f+3 Setup" defaultOpen>
          <p>
            <strong>1,4</strong> gives <strong>+8 on hit</strong>. This is a great situation:
          </p>
          
          <ul>
            <li>You land your 10f punish</li>
            <li>You're +8 — massive advantage</li>
            <li><strong>f,f+3</strong> (i21 low) becomes i13 effective — same as their jab!</li>
          </ul>

          <KeyConcept title="The 1,4 Mixup" icon="⚡">
            <p>
              After 1,4 hits (+8), your f,f+3 trades with their jab. If they try to jab, 
              they eat the low. If they block low, go for 3,4~3 (mid string).
            </p>
          </KeyConcept>
        </Collapsible>

        <Collapsible title="f+4 Setup (+3 on block)">
          <p>
            <strong>f+4</strong> is <strong>+3 on block</strong>. It's a slow mid (i25) but 
            leaves you plus on block:
          </p>
          
          <ul>
            <li><strong>+3 on block</strong> — 3 becomes i10 effective</li>
            <li><strong>+8 on hit</strong> — Big advantage for mixup</li>
            <li><strong>+14 on CH</strong> — Guarantees d+4</li>
          </ul>

          <TipBox variant="tip" title="CH f+4 Follow-up">
            On counter-hit (+14), f+4 guarantees <code>d+4</code> or <code>ws1,2</code> 
            for Heat activation.
          </TipBox>
        </Collapsible>
      </Section>

      <Section title="The 'Do Nothing' Technique">
        <KeyConcept title="Why Doing Nothing Works" icon="⏸️">
          <p>
            After a plus frame move, you have options: frame trap, mixup, or <strong>do nothing</strong>.
          </p>
          <p style={{ marginTop: '12px' }}>
            If you do nothing, your opponent might think "it's my turn now" and press a button.
            Then you frame trap them. They die for being impatient.
          </p>
        </KeyConcept>

        <p><strong>The Pattern:</strong></p>
        <ol>
          <li>Do plus frame move (f,f,f+3, b,f+4, etc.)</li>
          <li><strong>Do nothing</strong> — just block</li>
          <li>They press a button thinking you gave up your turn</li>
          <li>Next time, do the <strong>frame trap</strong> — they get counter-hit</li>
        </ol>
      </Section>

      <Section title="Quick Reference">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)' }}>
                <th style={{ padding: '12px 8px', textAlign: 'left' }}>Setup Move</th>
                <th style={{ padding: '12px 8px', textAlign: 'left' }}>Frames</th>
                <th style={{ padding: '12px 8px', textAlign: 'left' }}>Best Follow-up</th>
                <th style={{ padding: '12px 8px', textAlign: 'left' }}>Reward</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>1 (block)</td>
                <td style={{ padding: '10px 8px' }}>+1</td>
                <td style={{ padding: '10px 8px' }}>3 or df+1</td>
                <td style={{ padding: '10px 8px' }}>Continued pressure</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>1,4 (hit)</td>
                <td style={{ padding: '10px 8px' }}>+8</td>
                <td style={{ padding: '10px 8px' }}>f,f+3 or 3</td>
                <td style={{ padding: '10px 8px' }}>Low mixup / pressure</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>df+3~3 (block)</td>
                <td style={{ padding: '10px 8px' }}>+2</td>
                <td style={{ padding: '10px 8px' }}>3 or 1,4</td>
                <td style={{ padding: '10px 8px' }}>Frame trap</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>3,4~4 (block)</td>
                <td style={{ padding: '10px 8px' }}>+3</td>
                <td style={{ padding: '10px 8px' }}>d+2 or 3</td>
                <td style={{ padding: '10px 8px' }}>Frame trap</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>f,f,f+3 (block)</td>
                <td style={{ padding: '10px 8px' }}>+6</td>
                <td style={{ padding: '10px 8px' }}>3 or df+1</td>
                <td style={{ padding: '10px 8px' }}>Big frame trap</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>b,f+4 (block)</td>
                <td style={{ padding: '10px 8px' }}>+6</td>
                <td style={{ padding: '10px 8px' }}>f,f+3 or b,f+4</td>
                <td style={{ padding: '10px 8px' }}>Low mixup / launch</td>
              </tr>
              <tr>
                <td style={{ padding: '10px 8px' }}>GRF f+2,1,2 (block)</td>
                <td style={{ padding: '10px 8px' }}>+2</td>
                <td style={{ padding: '10px 8px' }}>3 or d+4</td>
                <td style={{ padding: '10px 8px' }}>Frame trap</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </Chapter>
  )
}

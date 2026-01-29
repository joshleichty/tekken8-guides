import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="Frame Traps & Pressure"
      intro="Frame traps are how you punish opponents for pressing buttons when it's not their turn. Victor has excellent plus frame moves and counter-hit tools that create devastating pressure loops."
      onPrevious={() => goToChapter(11)}
      onNext={() => goToChapter(13)}
      nextLabel="Learn Heat System"
    >
      <Section title="What is a Frame Trap?">
        <KeyConcept title="Frame Trap Definition" icon="🪤">
          <p>
            A <strong>frame trap</strong> is using plus frames to make your next move come out 
            before the opponent can retaliate. If they try to press, they get counter-hit.
          </p>
          <p style={{ marginTop: '12px' }}>
            Example: If you're <strong>+4</strong> and do a <strong>15 frame</strong> move, 
            it effectively comes out in <strong>11 frames</strong>. If they jab (i10), 
            you trade or beat them.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Victor's Key Plus Frame Situations">
        <Collapsible title="After db+4 Hit (+4 in FC)" defaultOpen>
          <p>
            <code>db+4</code> on hit is <strong>+4 in full crouch</strong>. This is one of 
            Victor's best situations.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>Best follow-ups:</strong></p>
          <ul>
            <li><code>ws2</code> — i14 CH launcher, becomes i10 effective. <strong>Beats jab!</strong></li>
            <li><code>ws1+2</code> — i13 safe mid, becomes i9 effective. Frame trap city.</li>
            <li><code>FC.1+2</code> — Low mixup option.</li>
          </ul>

          <KeyConcept title="The db+4 Trap" icon="⚡">
            <p>
              After db+4 hit → <code>ws2</code>. If they press anything, they get CH launched 
              for a full combo. If they block, you're only -8 (safe).
            </p>
          </KeyConcept>
        </Collapsible>

        <Collapsible title="After PRF.1 Hit (+4 in FC)">
          <p>
            <code>PRF.1</code> on hit leaves you +4 in full crouch. Same situation as db+4.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>Best follow-ups:</strong></p>
          <ul>
            <li><code>ws2</code> — CH launcher (becomes i10)</li>
            <li><code>ws1+2</code> — Safe mid, +8 on hit</li>
            <li><code>FC.1+2</code> — Low if they're blocking high</li>
          </ul>
        </Collapsible>

        <Collapsible title="After ws1+2 Hit (+8)">
          <p>
            <code>ws1+2</code> on hit is <strong>+8</strong>. This is Victor's best frame 
            trap situation.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>Best follow-ups:</strong></p>
          <ul>
            <li><code>d+2</code> — Becomes uninterruptible AND tracks fully!</li>
            <li><code>1+2</code> — i15 CH launcher, becomes i7. <strong>Beats everything.</strong></li>
            <li><code>f+1+2</code> — i24 becomes i16, still plus on block.</li>
          </ul>

          <TipBox variant="tip" title="The +8 Rule">
            At +8 or higher, <code>d+2</code> becomes completely safe — it can't be stepped 
            or interrupted. This is a guaranteed pressure situation.
          </TipBox>
        </Collapsible>

        <Collapsible title="After uf+1,1 Hit (+15gc)">
          <p>
            <code>uf+1,1</code> leaves opponent crouching at +15. Huge frame trap potential.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>Best follow-ups:</strong></p>
          <ul>
            <li><code>PRF.1+2</code> — Guaranteed. Can't be interrupted.</li>
            <li><code>d+2</code> — If they try to stand and press.</li>
            <li>Enter PRF/IAI for pressure</li>
          </ul>
        </Collapsible>

        <Collapsible title="After f,f,f+2 Block (+2) / Hit (+34)">
          <p>
            <code>f,f,f+2</code> on block is +2. With ~d transition, you're +5 in IAI.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>From +5 in IAI:</strong></p>
          <ul>
            <li><code>IAI.1,1</code> — i13 becomes i8. Beats jab.</li>
            <li><code>IAI.2</code> — Safe mid.</li>
            <li><code>IAI.d+2</code> — Chip and plus frames.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Mental Frame Traps">
        <KeyConcept title="What Are Mental Frames?" icon="🧠">
          <p>
            <strong>Mental frames</strong> exist because your strings have extensions. 
            Opponents block expecting the extension, even when you're minus.
          </p>
          <p style={{ marginTop: '12px' }}>
            You're not actually plus — but they <em>think</em> they need to block.
          </p>
        </KeyConcept>

        <Collapsible title="2,1 Mental Frame" defaultOpen>
          <p>
            <code>2,1</code> is <strong>-6 on block</strong>. Technically their turn.
            But opponents know about the PRF transition and might hesitate.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>The Mind Game:</strong></p>
          <ol>
            <li>Do <code>2,1~f → PRF.1</code> — They get hit by the low</li>
            <li>They start ducking PRF.1 — Use <code>PRF.1+2</code> or <code>PRF.3</code></li>
            <li>They start pressing to interrupt — Stop at <code>2,1</code> and block</li>
            <li>Punish their whiff → Full combo</li>
          </ol>
        </Collapsible>

        <Collapsible title="1,2 Mental Frame">
          <p>
            <code>1,2</code> is -3 on block, but <code>1,2,1</code> exists and CH launches.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>The Mind Game:</strong></p>
          <ol>
            <li>Do <code>1,2,1</code> — They mash, they get CH launched</li>
            <li>They respect the third hit — Stop at <code>1,2</code></li>
            <li>Now take your turn with mid/low/throw</li>
          </ol>
        </Collapsible>
      </Section>

      <Section title="IAI Frame Traps">
        <KeyConcept title="IAI Pressure Loop" icon="🔁">
          <p>From plus frames in IAI (like after f,f,f+2~d):</p>
          <ol>
            <li><code>IAI.d+2</code> — +4 on block, chip damage</li>
            <li>You're still in IAI at +4</li>
            <li>Mix <code>IAI.2</code> (mid) and <code>IAI.d+1+2</code> (low)</li>
            <li>If they try to interrupt → <code>IAI.1,1</code> beats them</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Wall Amplification">
          IAI frame traps become even more terrifying at the wall. IAI.2 wall splats, 
          so they HAVE to respect it. This makes the low mixup more threatening.
        </TipBox>
      </Section>

      <Section title="The 'Do Nothing' Technique">
        <KeyConcept title="Why Doing Nothing Works" icon="⏸️">
          <p>
            After a plus frame move, you can: frame trap, mixup, or <strong>do nothing</strong>.
          </p>
          <p style={{ marginTop: '12px' }}>
            If you do nothing, opponents think "it's my turn" and press. Then you block 
            and punish them. They die for being impatient.
          </p>
        </KeyConcept>

        <p><strong>The Pattern:</strong></p>
        <ol>
          <li>Land plus frame move (ws1+2, db+4 hit, etc.)</li>
          <li><strong>Do nothing</strong> — just block</li>
          <li>They press thinking you gave up your turn</li>
          <li>Block and punish their attack</li>
          <li>Next time, frame trap them — they die</li>
        </ol>
      </Section>

      <Section title="Frame Trap Quick Reference">
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
                <td style={{ padding: '10px 8px' }}>db+4 (hit)</td>
                <td style={{ padding: '10px 8px' }}>+4 FC</td>
                <td style={{ padding: '10px 8px' }}>ws2</td>
                <td style={{ padding: '10px 8px' }}>CH launch</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>PRF.1 (hit)</td>
                <td style={{ padding: '10px 8px' }}>+4 FC</td>
                <td style={{ padding: '10px 8px' }}>ws2</td>
                <td style={{ padding: '10px 8px' }}>CH launch</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>ws1+2 (hit)</td>
                <td style={{ padding: '10px 8px' }}>+8</td>
                <td style={{ padding: '10px 8px' }}>d+2 or 1+2</td>
                <td style={{ padding: '10px 8px' }}>Uninterruptible / CH launch</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>uf+1,1 (hit)</td>
                <td style={{ padding: '10px 8px' }}>+15gc</td>
                <td style={{ padding: '10px 8px' }}>PRF.1+2</td>
                <td style={{ padding: '10px 8px' }}>Guaranteed oki</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>f,f,f+2~d (block)</td>
                <td style={{ padding: '10px 8px' }}>+5 IAI</td>
                <td style={{ padding: '10px 8px' }}>IAI.d+2 or IAI.2</td>
                <td style={{ padding: '10px 8px' }}>Pressure / wall splat</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>IAI.d+2 (block)</td>
                <td style={{ padding: '10px 8px' }}>+4 IAI</td>
                <td style={{ padding: '10px 8px' }}>IAI.2 or IAI.d+1+2</td>
                <td style={{ padding: '10px 8px' }}>50/50 mixup</td>
              </tr>
              <tr>
                <td style={{ padding: '10px 8px' }}>b+4 CH</td>
                <td style={{ padding: '10px 8px' }}>+14</td>
                <td style={{ padding: '10px 8px' }}>f+4,1</td>
                <td style={{ padding: '10px 8px' }}>Guaranteed HE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Putting It Together">
        <KeyConcept title="Victor's Pressure Gameplan" icon="🎯">
          <ol>
            <li><strong>Land plus frame move</strong> — db+4, PRF.1, ws1+2, f,f,f+2</li>
            <li><strong>Mix "do nothing" and frame traps</strong> — Condition them</li>
            <li><strong>When they freeze</strong> — Go for mixups (low, throw, mid)</li>
            <li><strong>When they mash</strong> — Frame trap with 1+2 or ws2 for CH</li>
            <li><strong>Push to wall</strong> — Victor's wall game is elite</li>
            <li><strong>Apply IAI pressure</strong> — The 50/50 closes games</li>
          </ol>
        </KeyConcept>
      </Section>
    </Chapter>
  )
}

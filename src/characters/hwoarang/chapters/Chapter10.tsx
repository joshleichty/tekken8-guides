import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Frame Traps & Pressure"
      intro="This is where Hwoarang becomes terrifying. Frame traps are sequences that catch opponents pressing buttons. With Hwoarang's plus frames, you can create inescapable pressure."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Heat System"
    >
      <Section title="What is a Frame Trap?">
        <KeyConcept title="Frame Trap Definition" icon="🪤">
          <p>
            A <strong>frame trap</strong> is using plus frames to make your next attack 
            beat whatever your opponent does. If you're +4 and do an 8-frame move, it 
            effectively comes out in 4 frames. Their 10-frame jab loses.
          </p>
        </KeyConcept>

        <p>
          Hwoarang has some of the best frame traps in Tekken because:
        </p>

        <ul>
          <li>Multiple moves that leave you plus</li>
          <li>An 8-frame counter-hit launcher (RFS f+4,4)</li>
          <li>Stance transitions that maintain advantage</li>
        </ul>
      </Section>

      <Section title="Core Frame Traps">
        <Collapsible title="d+3,4 → RFS f+4,4 (The Classic)" defaultOpen>
          <p>
            <strong>d+3,4</strong> leaves you at <strong>+8 to +10</strong> in RFS on block.
          </p>
          
          <KeyConcept title="Why This is Broken" icon="💀">
            <ul>
              <li>You're +8 minimum</li>
              <li>RFS f+4,4 is 8 frames</li>
              <li>Net result: effectively 0 frames from their POV</li>
              <li><strong>They cannot jab.</strong> If they press anything, they die.</li>
            </ul>
          </KeyConcept>

          <p style={{ marginTop: '12px' }}>
            After d+3,4 is blocked, doing RFS f+4,4 catches anyone who presses a button. 
            Full combo on counter-hit.
          </p>

          <TipBox variant="warning" title="They Can Duck">
            The counter to this trap is ducking. If they duck, RFS f+4,4 whiffs and you get 
            launched. This is why you mix in RFS 4,3 and RFS df+4 — mids that beat ducking.
          </TipBox>
        </Collapsible>

        <Collapsible title="1,2,4 → RFS f+4,4 (+3)">
          <p>
            <strong>1,2,4</strong> leaves you at <strong>+3</strong> in RFS on block.
          </p>
          
          <p style={{ marginTop: '12px' }}>
            At +3, RFS f+4,4 (8 frames) effectively comes out at 5 frames. Their 10-frame 
            jab comes out at 10 frames. You win by 5 frames — your attack counter-hits them.
          </p>

          <p style={{ marginTop: '12px' }}><strong>Common situations:</strong></p>
          <ul>
            <li>After punishing with 1,2,4</li>
            <li>After d+3,4 on hit (actually +14-16, even better)</li>
            <li>After any string that ends in RFS entry</li>
          </ul>
        </Collapsible>

        <Collapsible title="RFF 2,4~f → RFS f+4,4 (+4)">
          <p>
            <strong>RFF 2,4~f</strong> leaves you at <strong>+4</strong> in RFS on block.
          </p>
          
          <p style={{ marginTop: '12px' }}>
            This is your loop from RFF. After any move that goes to RFF (df+4, RFS 2, etc.), 
            do RFF 2,4~f to enter RFS at +4. Then RFS f+4,4 beats everything.
          </p>

          <KeyConcept title="The RFF 2,4~f Loop" icon="🔄">
            <div style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '8px', marginTop: '8px' }}>
              <p>df+4 (hit) → RFF (+8)</p>
              <p>RFF 2,4~f → RFS (+4)</p>
              <p>RFS f+4,4 / RFS 4,3 / RFS df+4</p>
              <p>RFS 2 → RFF (+5)</p>
              <p>RFF 2,4~f → RFS (+4)</p>
              <p>Loop forever...</p>
            </div>
          </KeyConcept>
        </Collapsible>

        <Collapsible title="RFS df+4 → RFS df+4 (+1)">
          <p>
            <strong>RFS df+4</strong> is <strong>+1 on block</strong>.
          </p>
          
          <p style={{ marginTop: '12px' }}>
            This is a "soft" frame trap. At +1, their jab and your next move trade priority. 
            But the mental pressure is real — most players don't know it's only +1 because 
            the animation looks very plus.
          </p>

          <p style={{ marginTop: '12px' }}><strong>The trick:</strong></p>
          <ul>
            <li>Do RFS df+4 → they block, you're +1</li>
            <li>Do RFS df+4 again → they think "this must be plus"</li>
            <li>They eventually try to press → RFS f+4,4 CH launches them</li>
          </ul>
        </Collapsible>

        <Collapsible title="RFS 4,3 → LFS 1 (+4 → +5)">
          <p>
            <strong>RFS 4,3</strong> is <strong>+4 on block</strong> and transitions to LFS.
          </p>
          
          <p style={{ marginTop: '12px' }}>
            From LFS at +4, your LFS 1 (13f jab) effectively comes out at 9 frames. 
            LFS 1 is +5 on block, so you can continue with LFS f+3 or loop back to pressure.
          </p>

          <p style={{ marginTop: '12px' }}><strong>The sequence:</strong></p>
          <ol>
            <li>RFS 4,3 (blocked, +4 LFS)</li>
            <li>LFS 1 (beats their jab, +5 on block)</li>
            <li>LFS f+3 (heat engager, +4) or LFS d+3,4 (back to RFS)</li>
          </ol>
        </Collapsible>

        <Collapsible title="db+4~f → RFS f+4,4 (CH Setup)">
          <p>
            <strong>db+4~f</strong> is <strong>+3 on counter-hit</strong> in RFS.
          </p>
          
          <p style={{ marginTop: '12px' }}>
            This is a read-based trap. If you hit db+4 on counter-hit (meaning they were 
            attacking), you're +3 in RFS. RFS f+4,4 beats their next button.
          </p>

          <TipBox variant="tip" title="The Conditioning">
            <ol>
              <li>Establish d+3,4 pressure → they start respecting</li>
              <li>Throw in db+4~f → if they try to interrupt, they CH</li>
              <li>You're +3 → RFS f+4,4 → full combo</li>
            </ol>
          </TipBox>
        </Collapsible>
      </Section>

      <Section title="Complete Pressure Flowcharts">
        <KeyConcept title="Flowchart 1: d+3,4 Starter" icon="📊">
          <div style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '16px', borderRadius: '8px', marginTop: '12px', fontSize: '0.9rem' }}>
            <p><strong>d+3,4</strong> (hit or block) → RFS (+8 to +16)</p>
            <p style={{ marginLeft: '16px' }}>├─ <strong>RFS f+4,4</strong> → Catches mashers, CH combo</p>
            <p style={{ marginLeft: '16px' }}>├─ <strong>RFS 4,3</strong> → Catches duckers, +4 LFS</p>
            <p style={{ marginLeft: '16px' }}>├─ <strong>RFS df+4</strong> → Plus mid, loop or CH launch</p>
            <p style={{ marginLeft: '16px' }}>├─ <strong>RFS d+4,3,4</strong> → Power low, KD in Heat</p>
            <p style={{ marginLeft: '16px' }}>└─ <strong>RFS 2</strong> → Reset to RFF, loop</p>
          </div>
        </KeyConcept>

        <KeyConcept title="Flowchart 2: Punishment Starter" icon="📊">
          <div style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '16px', borderRadius: '8px', marginTop: '12px', fontSize: '0.9rem' }}>
            <p><strong>Block -10 move → 1,2,4</strong> → RFS (+3/+12)</p>
            <p style={{ marginLeft: '16px' }}>├─ On block (+3): <strong>RFS f+4,4</strong> beats jabs</p>
            <p style={{ marginLeft: '16px' }}>├─ On hit (+12): <strong>Anything works</strong></p>
            <p style={{ marginLeft: '16px' }}>└─ Continue with d+3,4 flowchart...</p>
          </div>
        </KeyConcept>

        <KeyConcept title="Flowchart 3: RFF Loop" icon="📊">
          <div style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '16px', borderRadius: '8px', marginTop: '12px', fontSize: '0.9rem' }}>
            <p><strong>Enter RFF</strong> (df+4, 3+4, RFS 2)</p>
            <p style={{ marginLeft: '16px' }}>├─ <strong>RFF 2,4~f</strong> → RFS (+4) → pressure</p>
            <p style={{ marginLeft: '16px' }}>├─ <strong>RFF df+3</strong> → Heat engager (+1)</p>
            <p style={{ marginLeft: '16px' }}>├─ <strong>RFF 3~4</strong> → Backlash, PC (+4-7)</p>
            <p style={{ marginLeft: '16px' }}>└─ <strong>RFF b+2</strong> → Safe mid (+4-5)</p>
          </div>
        </KeyConcept>
      </Section>

      <Section title="The 'Do Nothing' Technique">
        <KeyConcept title="Why Doing Nothing Works" icon="⏸️">
          <p>
            When you have plus frames, you don't HAVE to attack. Sometimes the best option 
            is to <strong>do nothing</strong> and see what they do.
          </p>
          <ul style={{ marginTop: '12px' }}>
            <li>If they mash → punish with your frame trap next time</li>
            <li>If they duck → use mids next time</li>
            <li>If they try to sidestep → use homing moves</li>
          </ul>
        </KeyConcept>

        <p>
          <strong>The Pattern:</strong>
        </p>
        <ol>
          <li>Do d+3,4 → RFS</li>
          <li>Do nothing — just stand there</li>
          <li>Watch what they do</li>
          <li>Next time, counter their habit</li>
        </ol>

        <TipBox variant="tip" title="Information Gathering">
          The first few d+3,4s of each match are information gathering. See how they respond. 
          Do they mash? Duck? Step? Once you know, exploit it.
        </TipBox>
      </Section>

      <Section title="Dealing with Counters">
        <p>
          Good players will try to escape your pressure. Here's how to beat their counters:
        </p>

        <KeyConcept title="Counter to Counter" icon="⚔️">
          <div style={{ display: 'grid', gap: '12px', marginTop: '12px' }}>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <strong>They duck your highs</strong>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                → Use RFS 4,3, RFS df+4, or JFSR (mids)
              </p>
            </div>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <strong>They jab out of pressure</strong>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                → RFS f+4,4 CH launches them
              </p>
            </div>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <strong>They sidestep</strong>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                → Use df+4 (homing), RFF df+3 (homing), or 1,2,f+3 (tracks)
              </p>
            </div>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <strong>They power crush</strong>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                → Block and punish, or use lows (PC doesn't absorb lows)
              </p>
            </div>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <strong>They dickjab (d+1)</strong>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                → 1,2,f+4 low crushes. RFS 3~4 low crushes.
              </p>
            </div>
          </div>
        </KeyConcept>
      </Section>

      <Section title="Mental Frames">
        <KeyConcept title="What Are Mental Frames?" icon="🧠">
          <p>
            <strong>Mental frames</strong> occur when your opponent thinks they can't act, 
            even when they technically can. Hwoarang's animations look very plus even when 
            they're not.
          </p>
        </KeyConcept>

        <p>
          Examples of moves that look more plus than they are:
        </p>

        <ul>
          <li><code>RFS df+4</code> — Only +1 but looks very plus</li>
          <li><code>RFF b+2</code> — +4-5 but the animation is intimidating</li>
          <li><code>RFF df+3</code> — +1 but the Heat activation is scary</li>
        </ul>

        <TipBox variant="tip" title="Exploit Mental Frames">
          When opponents are scared to press, they block everything. That's when you go 
          for throws, lows, and resets. Mental frames are real advantage.
        </TipBox>
      </Section>

      <Collapsible title="Quick Frame Trap Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Setup Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Frames</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Best Follow-up</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Reward</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>d+3,4 (block)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+8~+10</td>
                <td style={{ padding: '8px' }}>RFS f+4,4</td>
                <td style={{ padding: '8px' }}>CH full combo</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>1,2,4 (block)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+3</td>
                <td style={{ padding: '8px' }}>RFS f+4,4</td>
                <td style={{ padding: '8px' }}>CH full combo</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>RFF 2,4~f (block)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+4</td>
                <td style={{ padding: '8px' }}>RFS f+4,4 / RFS 4,3</td>
                <td style={{ padding: '8px' }}>CH combo / +4 LFS</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>RFS 4,3 (block)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+4</td>
                <td style={{ padding: '8px' }}>LFS 1</td>
                <td style={{ padding: '8px' }}>Beats jabs, +5</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>RFS df+4 (block)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+1</td>
                <td style={{ padding: '8px' }}>RFS df+4 / RFS f+4,4</td>
                <td style={{ padding: '8px' }}>Loop / CH trap</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>db+4~f (CH)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+3</td>
                <td style={{ padding: '8px' }}>RFS f+4,4</td>
                <td style={{ padding: '8px' }}>CH full combo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}

import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Plus Frame Prison"
      intro="You've closed the distance. You're plus. Now what? This chapter teaches you how to keep the pressure going with Dragunov's oppressive plus frame tools."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Learn Command Grabs"
    >
      <Section title="Understanding Plus Frames">
        <p>
          When you're <span className="highlight">plus on block</span>, your next move comes out 
          before your opponent's. At +4, your 10-frame jab becomes effectively 6 frames from their 
          perspective. They can't contest with normal moves.
        </p>

        <KeyConcept title="Plus Frame Sources" icon="➕">
          <ul>
            <li><strong>WR+2 on block</strong> — +4</li>
            <li><strong>b+1+2 on block</strong> — +6</li>
            <li><strong>qcf+4 on block</strong> — +7 (in crouch)</li>
            <li><strong>Jab (1) on block</strong> — +1</li>
            <li><strong>d+2 on CH</strong> — +13 (in crouch)</li>
          </ul>
        </KeyConcept>

        <p>
          Your goal is to chain these plus frame situations together, mixing throws and mids 
          until the opponent cracks.
        </p>
      </Section>

      <Section title="b+1+2 — The Shoulder">
        <MoveCard character="dragunov"
          move={{
            input: 'b+1+2',
            hitLevel: ['m'],
            damage: '26',
            startup: 'i22',
            onBlock: '+6',
            onHit: '+13c (crouch)',
            tags: ['Mid', 'Plus on Block', 'Plus on Hit'],
            description: 'Slow but massively plus mid. On hit, guaranteed crouch throw.',
          }}
          showVideo
        />

        <p>
          b+1+2 is <span className="highlight">+6 on block</span> — the most plus you can be 
          from a single blocked mid. It's slow (22 frames), but the reward is enormous.
        </p>

        <KeyConcept title="b+1+2 Situations" icon="🎯">
          <ul>
            <li><strong>On block (+6)</strong> — Jab is uninterruptible, b+4 beats their fastest moves</li>
            <li><strong>On hit (+13c)</strong> — Crouch throw (d+1+3 or d+2+4) is GUARANTEED</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Guaranteed Crouch Throw">
          When b+1+2 hits, the opponent is forced crouching at -13. Your crouch throw 
          (d+1+3 or d+2+4) is guaranteed because throws are i12. This is 26 + 35 = 61 damage.
        </TipBox>

        <TipBox variant="warning" title="When to Use">
          b+1+2 is slow enough to get interrupted. Use it when you're already plus (after WR+2 block), 
          or when you expect the opponent to freeze. Don't throw it in neutral.
        </TipBox>
      </Section>

      <Section title="qcf+4 (SNK 4) — Midrange Pressure">
        <MoveCard character="dragunov"
          videoId="SNK.4"
          move={{
            input: 'qcf+4',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i19',
            onBlock: '+7 (crouch)',
            onHit: '+8c (crouch)',
            tags: ['Mid', 'Heat Engager', 'Plus on Block', 'Hits Grounded'],
            description: 'Long range heat engager. Plus on block in crouch, hits grounded.',
          }}
          showVideo
        />

        <p>
          qcf+4 is Dragunov's <span className="highlight">midrange heat engager</span>. It's +7 
          on block (in crouch), has excellent range, and hits grounded opponents.
        </p>

        <KeyConcept title="qcf+4 Uses" icon="🔥">
          <ul>
            <li><strong>Midrange approach</strong> — Alternative to WR+2 with better tracking</li>
            <li><strong>On block (+7c)</strong> — You're in crouch with massive advantage</li>
            <li><strong>Heat engager</strong> — Heat dash gives combo on hit</li>
            <li><strong>Oki tool</strong> — Hits grounded opponents</li>
            <li><strong>Wall pressure</strong> — Pushback is minimal, keeps them trapped</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="After qcf+4 on Block">
          You're +7 in crouch. Your options:
          <ul style={{ marginTop: '8px' }}>
            <li><code>ws+4</code> — 11f mid, beats their jab</li>
            <li><code>FC df+1,4</code> — Low mix, +7 on hit</li>
            <li><code>ws+3</code> — Same speed as FC df+1,4, but mid</li>
            <li><code>Crouch throw</code> — If they freeze</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="db+3+4 — The Big Low">
        <MoveCard character="dragunov"
          move={{
            input: 'db+3+4',
            hitLevel: ['l'],
            damage: '23',
            startup: 'i20',
            onBlock: '-31',
            onHit: '+3g',
            onCH: '+20a (Launch!)',
            tags: ['Low', 'High Risk', 'CH Launcher'],
            description: 'Huge damage low. Launch punishable on block but +3 on hit with oki.',
          }}
          showVideo
        />

        <p>
          db+3+4 is your <span className="highlight">high-damage low option</span>. It's very 
          risky (-31 on block, launch punishable), but on hit you get +3 and they're grounded.
        </p>

        <KeyConcept title="db+3+4 Risk/Reward" icon="⚠️">
          <ul>
            <li><strong>On hit</strong> — +3 with opponent grounded, db+3 follow-up guaranteed</li>
            <li><strong>On CH</strong> — Full combo (20+ advantage)</li>
            <li><strong>On block</strong> — Launch punished, game over</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Use Sparingly">
          This is not a poke. Use db+3+4 to open up opponents who are turtling at the wall 
          or when you need a hard read. One or two per game maximum. Don't get predictable.
        </TipBox>
      </Section>

      <Section title="Plus Frame Chains">
        <p>
          The real power comes from chaining plus frame moves together:
        </p>

        <KeyConcept title="Example Pressure String" icon="🔗">
          <ol>
            <li><strong>WR+2</strong> — +4 on block</li>
            <li><strong>df+1</strong> — Safe mid check (-2 on block)</li>
            <li><strong>If they froze</strong> — b+1+2 (+6 on block)</li>
            <li><strong>Now +6</strong> — Throw or another mid</li>
            <li><strong>Throw hits?</strong> — Repeat pressure</li>
            <li><strong>They duck?</strong> — df+1 or b+4 hits them</li>
          </ol>
        </KeyConcept>

        <p>
          The opponent is in a prison of plus frames. Every time they try to act, 
          you're already hitting them. The only way out is to make a read — which is where 
          your mixups come in.
        </p>
      </Section>

      <Section title="When They Don't Respect">
        <p>
          Some opponents will press buttons even when minus. Here's how to handle it:
        </p>

        <KeyConcept title="Punishing Disrespect" icon="👊">
          <ul>
            <li><strong>At +1 to +3</strong> — Use 1,2,1 to counter-hit them</li>
            <li><strong>At +4 to +6</strong> — df+1 or jab beats their fastest options</li>
            <li><strong>At +7+</strong> — Almost anything works, even slow moves like b+1+2</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Read the Opponent">
          If they press after your plus frames, counter-hit them. If they freeze, throw them. 
          If they duck, mid them. It's that simple. The plus frames force them to guess.
        </TipBox>
      </Section>

      <Section title="Wall Pressure">
        <p>
          Plus frames are even more dangerous at the wall. With no room to escape, 
          the opponent must guess correctly or die.
        </p>

        <KeyConcept title="Wall Plus Frame Tools" icon="🧱">
          <ul>
            <li><strong>b+1+2</strong> — +6, wall splats on hit</li>
            <li><strong>qcf+4</strong> — +7c, minimal pushback</li>
            <li><strong>b+4,3</strong> — Heat engager, wall splats</li>
            <li><strong>Throws</strong> — Wall throws do extra damage</li>
            <li><strong>db+3+4</strong> — Risky but devastating if they respect too much</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Wall Kill">
          At the wall with plus frames: throw or mid. If they duck the throw → mid splats them. 
          If they respect the mid → throw them into the wall. This is Dragunov's kill zone.
        </TipBox>
      </Section>

      <Section title="Putting It All Together">
        <p>
          Here's the complete plus frame gameplan:
        </p>

        <KeyConcept title="The Plus Frame Prison" icon="🔒">
          <ol>
            <li><strong>Get plus</strong> — WR+2, b+1+2, qcf+4, jab</li>
            <li><strong>Test respect</strong> — Throw attempt or quick mid</li>
            <li><strong>They duck?</strong> — Mid hits, continue pressure</li>
            <li><strong>They freeze?</strong> — Throw hits, continue pressure</li>
            <li><strong>They press?</strong> — Counter-hit, continue pressure</li>
            <li><strong>Repeat</strong> — Until they're dead or break free</li>
          </ol>
        </KeyConcept>

        <p>
          Notice the pattern: <span className="highlight">every outcome leads to more pressure</span>. 
          That's the plus frame prison. The only way out is to guess correctly multiple times 
          in a row — and most players can't.
        </p>
      </Section>

      <Collapsible title="Frame Trap Examples" icon="📊">
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '12px' }}><strong>From WR+2 block (+4):</strong></p>
          <ul>
            <li><code>1</code> (i10) beats anything i15 or slower</li>
            <li><code>df+1</code> (i13) beats anything i18 or slower</li>
            <li><code>b+1+2</code> (i22) beats anything i27 or slower</li>
          </ul>
          
          <p style={{ marginTop: '16px', marginBottom: '12px' }}><strong>From b+1+2 block (+6):</strong></p>
          <ul>
            <li><code>1</code> (i10) beats anything i17 or slower</li>
            <li><code>df+1</code> (i13) beats anything i20 or slower</li>
            <li><code>b+4</code> (i14) beats anything i21 or slower</li>
          </ul>

          <p style={{ marginTop: '16px', marginBottom: '12px' }}><strong>From qcf+4 block (+7c):</strong></p>
          <ul>
            <li><code>ws+4</code> (i11) beats anything i19 or slower</li>
            <li><code>FC df+1,4</code> (i16) beats anything i24 or slower</li>
            <li><code>Crouch throw</code> (i12) guaranteed if they don't attack</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}

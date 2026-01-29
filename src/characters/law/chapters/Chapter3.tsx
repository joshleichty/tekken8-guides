import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Core Mids & Lows"
      intro="Law's offense is built on plus frame mids and annoying lows. These moves condition opponents to block, react, and eventually make mistakes you can punish."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Learn Jab Strings"
    >
      <Section title="The High-Mid-Low Triangle">
        <p>
          Tekken offense is built on three attack heights:
        </p>

        <KeyConcept title="Attack Heights" icon="📐">
          <ul>
            <li><strong>Highs</strong> — Fast, but can be ducked</li>
            <li><strong>Mids</strong> — Hit crouching opponents, can't be ducked</li>
            <li><strong>Lows</strong> — Must be blocked crouching, force reactions</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Law's gameplan: use plus frame mids and lows to condition blocking, then punish 
            their reactions with counter-hit tools.
          </p>
        </KeyConcept>
      </Section>

      <Section title="f+1+2 — Dragon Hammer">
        <MoveCard character="law"
          move={{
            input: 'f+1+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i20',
            onBlock: '+3c',
            onHit: '+8c',
            onCH: '+55a (Launch)',
            tags: ['Mid', 'Plus on Block', 'Counter-Hit Launcher', 'Forces Crouch'],
            description: 'Law\'s signature plus frame mid. Counter-hit launches. Forces both players into crouch state.',
          }}
          showVideo
        />

        <p>
          f+1+2 is <span className="highlight">THE mid</span> for Law. It's +3 on block, forces 
          crouch on both players, and <strong>counter-hit launches</strong>. This move defines 
          Law's pressure game.
        </p>

        <KeyConcept title="Why Dragon Hammer is Broken" icon="🔨">
          <ul>
            <li><strong>+3 on block</strong> — Continue pressure safely</li>
            <li><strong>Forces crouch</strong> — Opens up slide mixup</li>
            <li><strong>Counter-hit launches</strong> — Full combo if they press</li>
            <li><strong>+8 on hit</strong> — Massive advantage on normal hit</li>
          </ul>
        </KeyConcept>

        <p>
          After f+1+2, you can hold down to stay crouching for slide mixup, or stand up and 
          continue with jabs. Your opponent is +3 behind and can't really contest safely.
        </p>

        <TipBox variant="tip" title="Frame Trap with f+1+2">
          After your jab (+1), f+1+2 is a frame trap. If they press any button, they get 
          counter-hit launched. Jab → f+1+2 is one of Law's strongest conditioning tools.
        </TipBox>
      </Section>

      <Section title="db+3 — The Poking Low">
        <MoveCard character="law"
          move={{
            input: 'db+3',
            hitLevel: ['l'],
            damage: '15',
            startup: 'i17',
            onBlock: '-13',
            onHit: '+3c',
            onCH: '+13g',
            tags: ['Low', 'Plus on Hit', 'Tracks Left', 'Forces Crouch'],
            description: 'Law\'s best poking low. Plus on hit, tracks well, forces crouch like f+1+2.',
          }}
          showVideo
        />

        <p>
          db+3 is the low you want to mix with f+1+2. It's <span className="highlight">+3 on hit</span>, 
          forces crouch like Dragon Hammer, and tracks to Law's left (catches opponents stepping right).
        </p>

        <KeyConcept title="The db+3 / f+1+2 Mix" icon="🎲">
          <ol>
            <li><strong>Both are +3</strong> — Same advantage on hit/block</li>
            <li><strong>Both force crouch</strong> — Opens slide mixup</li>
            <li><strong>One is mid, one is low</strong> — They can't block both</li>
            <li><strong>Tracks different directions</strong> — Covers stepping</li>
          </ol>
          <p style={{ marginTop: '12px' }}>
            Spam these two moves and opponents will eventually crack. They have to guess.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="-13 on Block">
          db+3 is -13 on block — opponents get a while standing punish. Don't overuse it 
          against players who block and punish consistently. Mix with f+1+2.
        </TipBox>
      </Section>

      <Section title="d+4,3 — The Chunky Low">
        <MoveCard character="law"
          move={{
            input: 'd+4,3',
            hitLevel: ['l', 'h'],
            damage: '7, 12',
            startup: 'i15',
            onBlock: '-12 (d+4 alone: -11)',
            onHit: '+0',
            onCH: '+5',
            tags: ['Low', 'High', 'Low Crushes', 'Can Be Ducked'],
            description: 'Low-high string. Good poke damage. Second hit is high and can be ducked.',
          }}
          showVideo
        />

        <p>
          d+4,3 is Law's <span className="highlight">quick low string</span>. The first hit is 
          a fast low, and the second is a high kick that catches people trying to punish.
        </p>

        <p>
          However, the second hit is <strong>high</strong> — if opponents duck, they launch you. 
          Mix d+4 alone with d+4,3 to stay unpredictable.
        </p>

        <KeyConcept title="d+4 vs d+4,3" icon="🔄">
          <ul>
            <li><strong>d+4 alone</strong> — -11 on block, safer, use when they're ducking</li>
            <li><strong>d+4,3</strong> — Catches standing punishes, but can be ducked</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Condition them with d+4,3 a few times, then when they start ducking the 
            second hit, just use d+4 alone.
          </p>
        </KeyConcept>
      </Section>

      <Section title="df+2 — The Launcher">
        <MoveCard character="law"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '12',
            startup: 'i15',
            onBlock: '-7',
            onHit: '+34a (Launch)',
            tags: ['Mid', 'Launcher', 'Safe', 'Whiff Punish'],
            description: 'Law\'s standard safe mid launcher. Use for whiff punishment and CH fishing.',
          }}
          showVideo
        />

        <p>
          df+2 is Law's <span className="highlight">go-to launcher</span>. It's safe at -7, has 
          decent range, and launches for a full combo. Most of your conversions will come from this.
        </p>

        <p>
          Law's df+2 has surprisingly good tracking at close range. Sometimes it catches side 
          steps that should avoid it. Don't be afraid to throw it out.
        </p>

        <TipBox variant="tip" title="90% of Law's Game">
          According to pro player Landon D: "90% of the time you want people to run into df+2, 
          heat 1+2, b+1,2,2 or dragon hammer." If opponents aren't running into df+2, hit them 
          until they do.
        </TipBox>
      </Section>

      <Section title="b+4 — The Homing Mid">
        <MoveCard character="law"
          move={{
            input: 'b+4',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i14',
            onBlock: '-7',
            onHit: '+3',
            tags: ['Mid', 'Homing', 'Safe', 'Back Turn Transition'],
            description: 'Fast homing mid. Catches all sidesteps. Can transition to back turn with hold back.',
          }}
          showVideo
        />

        <p>
          b+4 is your <span className="highlight">homing move</span>. When opponents start stepping 
          your jabs and df+1, b+4 catches them regardless of direction. It's your "stay still" button.
        </p>

        <p>
          After db+3 or f+1+2, doing b+4 has incredible option coverage. It catches stepping, 
          beats slow attacks, and is safe on block.
        </p>

        <TipBox variant="tip" title="The b+4 Setup">
          After plus frames (db+3 on hit, f+1+2 on block), b+4 is one of the best follow-ups. 
          It covers so many options that opponents learn to just block, which lets you do more lows.
        </TipBox>
      </Section>

      <Section title="The Basic Gameplan">
        <p>
          With your jabs (Chapter 2) and these mids/lows, you now have functional Law offense:
        </p>

        <KeyConcept title="Mixing Your Offense" icon="🎲">
          <ol>
            <li><strong>Get to jab range</strong> — Use movement to close distance</li>
            <li><strong>Poke with jabs</strong> — Build respect, check opponents</li>
            <li><strong>Chip with db+3</strong> — Force them to block low</li>
            <li><strong>Pressure with f+1+2</strong> — Counter-hit launch mashers</li>
            <li><strong>Catch steppers with b+4</strong> — Make them stand still</li>
            <li><strong>Launch with df+2</strong> — Convert when they crack</li>
          </ol>
        </KeyConcept>

        <p>
          Opponents who block everything eat lows. Opponents who try to duck eat f+1+2. 
          Opponents who step eat b+4. Opponents who press buttons eat counter-hits. 
          This triangle wins games.
        </p>
      </Section>

      <Collapsible title="Other Lows to Know" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Law has several other lows with specific uses:
          </p>

          <p><strong>ss+3</strong> (i18, -13 oB, +7 oH)</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Side step low that goes into DSS automatically</li>
            <li>+7 on hit means guaranteed DSS pressure</li>
            <li>Counter-hit gives DSS f+1 or 3+4,4 follow-ups</li>
            <li>Mix with ss+2 (mid) for 50/50</li>
          </ul>

          <p><strong>FC df,d,df+3</strong> (The Slide)</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Law's signature low from full crouch</li>
            <li>We'll cover this in detail in Chapter 7</li>
          </ul>

          <p><strong>d+3</strong> (i16, -14 oB)</p>
          <ul>
            <li>Fast low with crouch transition</li>
            <li>Can transition to slide by holding df</li>
            <li>Has d+3,3 extension (counter-hit launch)</li>
          </ul>
        </div>
      </Collapsible>

      <Collapsible title="Frame Data Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Hit</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>f+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i20</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3c</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8c</td>
                <td style={{ padding: '8px' }}>CH launches!</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>db+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3c</td>
                <td style={{ padding: '8px' }}>Best poke low</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+4,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+0</td>
                <td style={{ padding: '8px' }}>Low-high string</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-7</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Launch</td>
                <td style={{ padding: '8px' }}>Safe launcher</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i14</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-7</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3</td>
                <td style={{ padding: '8px' }}>Homing mid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}

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
      title="Low Attacks & Mixups"
      intro="Victor's lows are risky but rewarding. His poke lows chip away at turtles, while his power low (db+4) launches on counter-hit. Understanding when to use each is key to opening up blocking opponents."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Learn Perfumer Stance"
    >
      <Section title="Victor's Low Philosophy">
        <p>
          Victor's lows are <span className="highlight">not his strength</span>. They're 
          mediocre on frames and risky on block. But you still need them to force opponents 
          to stop holding back.
        </p>

        <KeyConcept title="Low Categories" icon="👇">
          <ul>
            <li><strong>Poke lows</strong> — d+3, d+4, d+1 (chip damage, annoy)</li>
            <li><strong>Power low</strong> — db+4 (big damage, CH launches)</li>
            <li><strong>Stance lows</strong> — PRF.1, IAI.d+1+2 (covered in Chapters 5-6)</li>
            <li><strong>Full crouch low</strong> — FC.1+2 (mixup from crouch)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="High Risk, Necessary Evil">
          Victor's main lows are launch punishable. Use them sparingly — just enough to make 
          opponents afraid to hold back, then capitalize with your superior mids.
        </TipBox>
      </Section>

      <Section title="d+3 — The Safe(r) Poke Low">
        <MoveCard character="victor"
          move={{
            input: 'd+3',
            hitLevel: ['l'],
            damage: '11',
            startup: 'i18-19',
            onBlock: '-13',
            onHit: '-2',
            tags: ['Low', 'Poke', 'Good Range'],
            description: 'Your safest low poke. -13 on block means many characters can\'t launch it.',
          }}
          showVideo
        />

        <p>
          d+3 is Victor's <span className="highlight">safest low poke</span>. At -13 on block, 
          many characters can only punish with ws4 (around 16 damage) instead of a launch. 
          It has surprisingly good range for a poke low.
        </p>

        <KeyConcept title="When to Use d+3" icon="🎯">
          <ul>
            <li><strong>Chip turtles</strong> — Force them to take action</li>
            <li><strong>Against non-launch punishers</strong> — If they can't launch -13, spam it</li>
            <li><strong>At range</strong> — The range catches people off guard</li>
            <li><strong>Round ender</strong> — Low HP opponent blocking? d+3.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Know the Matchup">
          Some characters CAN launch -13. Claudio, Lee, and others have i13 ws launchers. 
          Check the matchup before relying on d+3.
        </TipBox>
      </Section>

      <Section title="d+4 — The CH Poke Low">
        <MoveCard character="victor"
          move={{
            input: 'd+4',
            hitLevel: ['l'],
            damage: '10',
            startup: 'i16',
            onBlock: '-13',
            onHit: '-2',
            onCH: '+0 (guaranteed follow-up)',
            tags: ['Low', 'Poke', 'Fast', 'CH Bonus'],
            description: 'Faster than d+3. On counter-hit, guarantees a follow-up hit.',
          }}
          showVideo
        />

        <p>
          d+4 is <span className="highlight">faster than d+3</span> (i16 vs i18) and has a 
          counter-hit bonus. On CH, you get a guaranteed follow-up for extra damage.
        </p>

        <KeyConcept title="d+4 vs d+3" icon="🔄">
          <ul>
            <li><strong>d+4</strong> — Faster (i16), better tracking, CH bonus</li>
            <li><strong>d+3</strong> — Better range, slightly more damage</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Use d+4 up close when you expect them to press. Use d+3 at range or when you just 
            need chip damage.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Counter-Hit Follow-up">
          After CH d+4, you can do <code>dash f+1+2</code> to catch all wake-up options. 
          It hits grounded, catches tech rolls, and does good damage.
        </TipBox>
      </Section>

      <Section title="d+1 — The Unparryable Low">
        <MoveCard character="victor"
          move={{
            input: 'd+1',
            hitLevel: ['l'],
            damage: '7',
            startup: 'i16',
            onBlock: '-17',
            onHit: '-6',
            tags: ['Low', 'Weapon', 'Cannot Be Low Parried'],
            description: 'Knife low that CANNOT be low parried. Useful against parry-happy players.',
          }}
          showVideo
        />

        <p>
          d+1 is a special low — it's a <span className="highlight">weapon attack</span>, which 
          means it <strong>cannot be low parried</strong>. Against characters who love to 
          low parry (Lei, Asuka, Jin), this is valuable.
        </p>

        <MoveCard character="victor"
          move={{
            input: 'd+1,1',
            hitLevel: ['l', 'h'],
            damage: '7, 15',
            startup: 'i16',
            onBlock: '-7 (if blocked)',
            onHit: '+6',
            onCH: 'Guaranteed combo',
            tags: ['Low', 'High', 'Weapon', 'CH Guaranteed'],
            description: 'Extension is guaranteed on hit. On block, can be ducked — but jails on hit.',
          }}
          showVideo
        />

        <KeyConcept title="d+1,1 Quirk" icon="⚠️">
          <p>
            The d+1,1 string is <strong>low-high</strong>. On hit, the high is guaranteed. 
            On block, the opponent CAN duck the second hit and launch.
          </p>
          <p style={{ marginTop: '8px' }}>
            But here's the trick: if they block the first hit and try to punish, they're 
            going to stand up — and the second hit catches them. This creates a mental game.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="On Block Risk">
          d+1 by itself is -17 on block — launch punishable. If they know the matchup, 
          they'll punish. Only use this against low parry-heavy players or when you're 
          confident they don't know the punish.
        </TipBox>
      </Section>

      <Section title="db+4 — The Power Low (Counter-Hit Launcher)">
        <MoveCard character="victor"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i20-21',
            onBlock: '-26',
            onHit: '+4c',
            onCH: 'Launch',
            tags: ['Low', 'CH Launcher', 'High Crush', 'Full Crouch', 'Long Range'],
            description: 'Victor\'s power low. Launches on counter-hit! Has crazy range. Leaves you in FC.',
          }}
          showVideo
        />

        <p>
          db+4 is Victor's <span className="highlight">power low and counter-hit launcher</span>. 
          It has insane range (hits from range 3!), high crushes, and launches on CH for a 
          full combo. On normal hit, you're +4 in full crouch.
        </p>

        <KeyConcept title="Why db+4 is Special" icon="⚡">
          <ul>
            <li><strong>Counter-hit launches</strong> — Full combo on CH</li>
            <li><strong>Insane range</strong> — Catches people from far away</li>
            <li><strong>High crushes</strong> — Ducks under jabs and high strings</li>
            <li><strong>+4 in FC on hit</strong> — Sets up full crouch mixup</li>
            <li><strong>Tracks SSR</strong> — Actually tracks Victor's weak side!</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="-26 on Block">
          db+4 is VERY punishable on block. Every character launches this. Use it as a 
          <strong>read</strong>, not a spam tool. When you predict they'll press or use a 
          high attack, db+4 catches them.
        </TipBox>

        <TipBox variant="tip" title="Keep-Out Application">
          db+4 is excellent for keep-out. When opponents try to approach with aggressive 
          movement or high attacks, db+4 from range will either high crush or CH launch them.
        </TipBox>
      </Section>

      <Section title="Full Crouch Game">
        <p>
          After db+4 hits (+4c), you're in full crouch. Victor has a legitimate FC mixup:
        </p>

        <MoveCard character="victor"
          move={{
            input: 'FC.1+2',
            hitLevel: ['l', 'h'],
            damage: '10, 10',
            startup: 'i16',
            onBlock: '-23 / -13 PRF',
            onHit: '+0 / +6 PRF',
            tags: ['Low', 'High', 'Weapon', 'PRF.Transition'],
            description: 'Full crouch low with high extension. Can transition to PRF. Risky but rewarding.',
          }}
          showVideo
        />

        <p>
          FC.1+2 is Victor's <span className="highlight">full crouch low mixup</span>. It's 
          risky (-23 on block), but on hit you're even and can transition to PRF at +6.
        </p>

        <MoveCard character="victor"
          move={{
            input: 'ws1+2',
            hitLevel: ['m', 'm'],
            damage: '10, 12',
            startup: 'i13-14',
            onBlock: '-8',
            onHit: '+8',
            tags: ['Mid', 'Mid', 'Safe', 'PRF.Transition'],
            description: 'The mid complement to FC.1+2. Safe on block, +8 on hit, transitions to PRF.',
          }}
          showVideo
        />

        <p>
          ws1+2 is the <span className="highlight">mid option</span> from crouch. It's safe 
          (-8), gives +8 on hit, and transitions to PRF with ~f. This is Victor's main FC mixup.
        </p>

        <KeyConcept title="The FC Mixup" icon="🎲">
          <p>After db+4 hits (+4 in FC):</p>
          <ul>
            <li><code>FC.1+2</code> — Low option (risky, rewarding)</li>
            <li><code>ws1+2</code> — Mid option (safe, +8)</li>
            <li><code>ws2</code> — CH launcher (safe, fishing)</li>
            <li><code>ws1</code> — i15 launcher (risky, for hard reads)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Default to ws1+2">
          Until you've conditioned them to duck, use ws1+2 most of the time. It's safe and 
          +8 on hit sets up your pressure. Only go for FC.1+2 when they're clearly expecting 
          the mid.
        </TipBox>
      </Section>

      <Section title="The Running Low: f,f,f+1+2">
        <MoveCard character="victor"
          videoId="f,f,F+1+2"
          move={{
            input: 'f,f,f+1+2',
            hitLevel: ['l', 'l'],
            damage: '10, 14',
            startup: 'i18',
            onBlock: '-14',
            onHit: '+4 IAI',
            onCH: '+15g',
            tags: ['Low', 'Low', 'IAI.Transition', 'Running', 'High Crush'],
            description: 'Running low that transitions to IAI stance. The complement to f,f,f+2.',
          }}
          showVideo
        />

        <p>
          f,f,f+1+2 is Victor's <span className="highlight">running low</span> — the complement 
          to his running mid (f,f,f+2). On hit, you're +4 in IAI stance, setting up mixups.
        </p>

        <KeyConcept title="Running Mixup" icon="🏃">
          <ul>
            <li><code>f,f,f+2</code> — Mid, +2 on block, CH launches</li>
            <li><code>f,f,f+1+2</code> — Low, -14 on block, +4 IAI on hit</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Mix these together when approaching. They can't block both!
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Also Steppable">
          Like f,f,f+2, this loses to sidestep right. Condition with homing moves first.
        </TipBox>
      </Section>

      <Section title="Low Gameplan Summary">
        <KeyConcept title="When to Use Each Low" icon="📋">
          <ul>
            <li><strong>d+3</strong> — At range, chip damage, safer poke</li>
            <li><strong>d+4</strong> — Up close, faster, has CH bonus</li>
            <li><strong>d+1</strong> — Against low-parry players specifically</li>
            <li><strong>db+4</strong> — BIG READ for CH launch or keep-out</li>
            <li><strong>FC.1+2</strong> — After db+4 hit, FC mixup option</li>
            <li><strong>f,f,f+1+2</strong> — Running approach low</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Victor's Low Philosophy" icon="🧠">
          <ol>
            <li><strong>Lows are not your main offense</strong> — They're a tool to open up blockers</li>
            <li><strong>Use poke lows sparingly</strong> — Just enough to force reaction</li>
            <li><strong>db+4 is your power low</strong> — Use it on reads, not randomly</li>
            <li><strong>Capitalize on hit</strong> — +4 FC from db+4 → mixup</li>
            <li><strong>Your mids are your strength</strong> — Use lows to make mids better</li>
          </ol>
        </KeyConcept>
      </Section>

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
                <td style={{ padding: '8px' }}><code>d+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-2</td>
                <td style={{ padding: '8px' }}>Safer poke, good range</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-2</td>
                <td style={{ padding: '8px' }}>Faster, CH bonus</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-17</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-6</td>
                <td style={{ padding: '8px' }}>Can't be low parried</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>db+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i20</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-26</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4c</td>
                <td style={{ padding: '8px' }}>CH LAUNCHES!</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>FC.1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-23</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+0</td>
                <td style={{ padding: '8px' }}>FC mixup low, ~f to PRF</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-8</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8</td>
                <td style={{ padding: '8px' }}>FC mixup mid, ~f to PRF</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f,f+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4 IAI</td>
                <td style={{ padding: '8px' }}>Running low, to IAI</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}

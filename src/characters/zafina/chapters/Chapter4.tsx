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
      title="Scarecrow Stance (SCR)"
      intro="Scarecrow is Zafina's primary offensive stance. It's where your best heat engager lives, where your mixups are scariest, and where opponents struggle most. Master this stance first."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Mantis Stance"
    >
      <Section title="Entering Scarecrow">
        <p>
          Scarecrow can be entered manually with <code>3+4</code>, but you'll almost always enter 
          through move transitions. Here are your main entries:
        </p>

        <KeyConcept title="Scarecrow Entry Methods" icon="🚪">
          <ul>
            <li><strong>1,3</strong> — 10f punish, -2 on block, +7 on hit</li>
            <li><strong>3</strong> — Fast entry, 0 on block, +9 on hit</li>
            <li><strong>f,f+3</strong> — Key mid, +4 on block, +9 on hit</li>
            <li><strong>WR3</strong> — Running mid, +7 on block</li>
            <li><strong>db+3</strong> — Quick low, -8 on block, +3 on hit</li>
            <li><strong>f+2,3</strong> — Mid-high, 0 on block, +9 on hit</li>
            <li><strong>MNT 1,3</strong> — From Mantis, 0 on block, +9 on hit</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Cancel Any Transition">
          Hold <code>B</code> during any transition to stay neutral instead of entering SCR. 
          Use this when you don't want to commit to stance pressure.
        </TipBox>
      </Section>

      <Section title="Scarecrow Properties">
        <KeyConcept title="Important: You Cannot Block" icon="⚠️">
          <p>
            In Scarecrow stance, <strong>Zafina cannot block</strong>. You must commit to:
          </p>
          <ul>
            <li>An attack (mid, low, heat engager, etc.)</li>
            <li>Movement (sidestep, backdash, forward step)</li>
            <li>Cancel the stance with <code>db</code></li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            This is why frame advantage matters so much. At +4 or better, your options 
            are much safer. At minus frames, you're taking a risk.
          </p>
        </KeyConcept>

        <p>
          In Scarecrow, you can:
        </p>
        <ul>
          <li>Move forward and backward slowly</li>
          <li>Sidestep in both directions</li>
          <li>Cancel to neutral with <code>db</code></li>
          <li>Transition to Tarantula or Mantis via certain moves</li>
        </ul>
      </Section>

      <Section title="SCR 2,1 — The Heat Engager">
        <MoveCard character="zafina"
          videoId="SCR.2,1"
          move={{
            input: 'SCR 2,1',
            hitLevel: ['m', 'm'],
            damage: '17, 25',
            startup: 'i14',
            onBlock: '-6',
            onHit: '+30a',
            tags: ['Mid', 'Mid', 'Heat Engager', 'Safe', 'Azazel Power'],
            description: 'Your best heat engager. Safe mid-mid that grants heat. Deals self-damage outside heat.',
          }}
          showVideo
        />

        <p>
          SCR 2,1 is Zafina's <span className="highlight">best heat engager</span> and one of 
          her most important moves. It's a safe mid-mid string that activates heat.
        </p>

        <KeyConcept title="Why SCR 2,1 is Amazing" icon="⭐">
          <ul>
            <li><strong>Safe</strong> — -6 on block, opponents can't punish</li>
            <li><strong>Mid-mid</strong> — Can't be ducked</li>
            <li><strong>Heat engager</strong> — Activates heat on hit</li>
            <li><strong>42 damage</strong> — Excellent damage for a safe move</li>
            <li><strong>CH f,f+3</strong> — Guaranteed after CH f,f+3 for 52 damage + heat!</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Self-Damage Warning">
          SCR 2,1 is an Azazel power move. Outside of heat, it deals <strong>10 recoverable 
          damage</strong> to Zafina. In heat, there's no self-damage.
        </TipBox>
      </Section>

      <Section title="SCR 1+2 — The Knockdown Mid">
        <MoveCard character="zafina"
          videoId="SCR.1+2"
          move={{
            input: 'SCR 1+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i17',
            onBlock: '+6 (TRT)',
            onHit: '+17a (b+3 guaranteed)',
            tags: ['Mid', 'Plus on Block', 'TRT Transition', 'Knockdown'],
            description: 'Knockdown mid that goes into Tarantula. +6 on block. Guarantees b+3 on hit.',
          }}
          showVideo
        />

        <p>
          SCR 1+2 is a <span className="highlight">plus on block mid</span> that transitions to 
          Tarantula. On hit, you get a guaranteed b+3 (stomp) on the grounded opponent.
        </p>

        <KeyConcept title="SCR 1+2 Properties" icon="💥">
          <ul>
            <li><strong>On block</strong> — +6 in Tarantula. Strong mixup position.</li>
            <li><strong>On hit</strong> — Knockdown, b+3 guaranteed for extra damage</li>
            <li><strong>Mix with SCR 2,1</strong> — Both are mids, opponent must respect</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="SCR 3 — Fast Mid Poke">
        <MoveCard character="zafina"
          videoId="SCR.3"
          move={{
            input: 'SCR 3',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i13',
            onBlock: '-6',
            onHit: '+5',
            tags: ['Mid', 'Fast', 'Safe', 'Extensions'],
            description: 'Your fastest mid in Scarecrow. 13f, safe. Has extensions.',
          }}
          showVideo
        />

        <p>
          SCR 3 is your <span className="highlight">fastest mid option</span> from Scarecrow at 
          13 frames. It's your go-to when you need something quick and safe.
        </p>

        <KeyConcept title="SCR 3,3 Extension" icon="📋">
          <ul>
            <li><strong>SCR 3,3</strong> — Mid-high, wall splats, +0 on block</li>
            <li>Second hit is a high — can be ducked</li>
            <li>Use to catch people pressing after SCR 3</li>
            <li>Don't spam — good players will duck the second hit</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="SCR 4 — Power Crush Launcher">
        <MoveCard character="zafina"
          videoId="SCR.4"
          move={{
            input: 'SCR 4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i15',
            onBlock: '-18',
            onHit: '+58a (T! Launch)',
            tags: ['Mid', 'Power Crush', 'Tornado', 'Unsafe'],
            description: 'Power crush that launches on hit. Very unsafe but beats button mashing.',
          }}
          showVideo
        />

        <p>
          SCR 4 is a <span className="highlight">power crush launcher</span>. It absorbs hits and 
          gives you a tornado launch. Use it to blow up opponents who mash after your stance entries.
        </p>

        <KeyConcept title="When to Use SCR 4" icon="💥">
          <ul>
            <li><strong>Against mashers</strong> — Absorbs their attack, launches them</li>
            <li><strong>At minus frames</strong> — If you expect them to press, armor through</li>
            <li><strong>As a read</strong> — When you know they'll attack</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--danger)' }}>
            ⚠️ <strong>-18 on block</strong> — Launch punishable. Don't spam this.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="High Risk, High Reward">
          SCR 4 is extremely punishable. Use it sparingly and as a read. If opponents 
          block it, they get a full combo on you.
        </TipBox>
      </Section>

      <Section title="SCR 1 — Fast Jab">
        <MoveCard character="zafina"
          videoId="SCR.1"
          move={{
            input: 'SCR 1',
            hitLevel: ['h'],
            damage: '12',
            startup: 'i10',
            onBlock: '-2',
            onHit: '+9',
            tags: ['High', 'Fast', 'Extensions'],
            description: '10f jab from Scarecrow. Has extensions including TRT transition.',
          }}
          showVideo
        />

        <p>
          SCR 1 is a <span className="highlight">10-frame high</span> from Scarecrow. It's your 
          fastest option and has useful extensions.
        </p>

        <KeyConcept title="SCR 1 Extensions" icon="📋">
          <ul>
            <li><strong>SCR 1,4</strong> — Goes to Tarantula at -6/+7, second hit is mid</li>
            <li>On CH, second hit causes knockdown with guaranteed follow-up</li>
            <li>Good for setting up TRT mixups</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="SCR Lows">
        <MoveCard character="zafina"
          videoId="SCR.df+4"
          move={{
            input: 'SCR df+4',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i19',
            onBlock: '-14',
            onHit: '+7c (MNT)',
            onCH: '+37a (Launch)',
            tags: ['Low', 'MNT Transition', 'CH Launcher', 'High Crush'],
            description: 'Main low from Scarecrow. Goes to Mantis. CH launches.',
          }}
          showVideo
        />

        <p>
          SCR df+4 is your <span className="highlight">main low option</span> from Scarecrow. 
          It goes into Mantis on hit and counter-hit launches.
        </p>

        <MoveCard character="zafina"
          videoId="SCR.b+1+2"
          move={{
            input: 'SCR b+1+2',
            hitLevel: ['l'],
            damage: '20',
            startup: 'i16',
            onBlock: '-18',
            onHit: '+23g',
            tags: ['Low', 'Long Range', 'Evasive', 'Azazel Power', 'Unsafe'],
            description: 'Long range evasive low. Azazel power. -18 on block but great for ending rounds.',
          }}
          showVideo
        />

        <p>
          SCR b+1+2 is a <span className="highlight">long range low</span> with evasive properties. 
          It's very unsafe but excellent for ending rounds when you need chip damage.
        </p>

        <TipBox variant="warning" title="Launch Punishable">
          SCR b+1+2 is -18 on block — most characters can launch punish this. Use it 
          sparingly and primarily as a round ender.
        </TipBox>
      </Section>

      <Section title="SCR df+1 — Azazel Launcher">
        <MoveCard character="zafina"
          videoId="SCR.df+1"
          move={{
            input: 'SCR df+1',
            hitLevel: ['m', 'm'],
            damage: '10, 30',
            startup: 'i18',
            onBlock: '-9',
            onHit: '+68a (T! Launch)',
            tags: ['Mid', 'Mid', 'Launcher', 'Safe', 'Azazel Power', 'Tornado'],
            description: 'Safe normal-hit launcher from Scarecrow. Azazel power deals self-damage.',
          }}
          showVideo
        />

        <p>
          SCR df+1 is a <span className="highlight">safe mid launcher</span> that deals self-damage. 
          It's a tornado move that gives you a combo on hit.
        </p>

        <KeyConcept title="SCR df+1 Properties" icon="🔮">
          <ul>
            <li><strong>Safe</strong> — -9 on block</li>
            <li><strong>Normal hit launch</strong> — Get combo on regular hit</li>
            <li><strong>Self-damage</strong> — Deals 18 recoverable damage outside heat</li>
            <li><strong>Armor in heat</strong> — Gains power crush properties in heat</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The SCR Mixup Game">
        <KeyConcept title="At Plus Frames (+4 or better)" icon="🎯">
          <p>When you enter SCR at advantage (f,f+3 on block, WR3, etc.):</p>
          <ul>
            <li><strong>SCR 2,1</strong> — Safe heat engager, main option</li>
            <li><strong>SCR 1+2</strong> — Plus on block, TRT transition</li>
            <li><strong>SCR df+4</strong> — Low option, MNT transition</li>
            <li><strong>SCR 3</strong> — Fast mid check</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="At Even/Minus Frames" icon="⚠️">
          <p>When you enter SCR at disadvantage (1,3 on block, etc.):</p>
          <ul>
            <li><strong>SCR 4</strong> — Power crush if you expect them to press</li>
            <li><strong>Cancel (db)</strong> — Safe option to reset</li>
            <li><strong>Sidestep</strong> — Can evade linear attacks</li>
            <li><strong>SCR 3</strong> — Trade favorably with slower moves</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Conditioning is Key">
          The power of SCR comes from mixing options. If you always do SCR 2,1, they'll 
          duck or interrupt. Mix in lows, SCR 1+2 for TRT, and occasionally SCR 4 to 
          keep them guessing.
        </TipBox>
      </Section>

      <Section title="Heat Smash from SCR">
        <MoveCard character="zafina"
          videoId="H.2+3"
          move={{
            input: 'SCR.H.2+3 (Heat Smash)',
            hitLevel: ['l', 'm', 'm', 'sm'],
            damage: '6, 15, 3, 10',
            startup: 'i19',
            onBlock: '-14',
            onHit: '-13a',
            tags: ['Low', 'Heat Smash', 'Knockdown'],
            description: 'Scarecrow heat smash. Low starter that guarantees follow-up. 41 damage in open, 56 at wall.',
          }}
          showVideo
        />

        <p>
          In heat, Zafina has a <span className="highlight">Scarecrow-specific heat smash</span>. 
          It's a low that knocks down and guarantees a stomp.
        </p>

        <KeyConcept title="SCR Heat Smash" icon="🔥">
          <ul>
            <li><strong>In open</strong> — Guarantees b+3 stomp for 41 total damage</li>
            <li><strong>At wall</strong> — Guarantees df+1,2,1 for 56 total damage</li>
            <li><strong>Mix with mids</strong> — SCR 2,1 makes them scared to duck</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Heat Gameplan">
          When in heat, get to Scarecrow (via f,f+3, 1,3, etc.) and mix between the 
          heat smash (low) and SCR 2,1/SCR 1+2 (mids). This is your most powerful offense.
        </TipBox>
      </Section>

      <Collapsible title="SCR Move Reference" icon="📊" defaultOpen>
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>SCR 1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-2</td>
                <td style={{ padding: '8px' }}>Fast high, extensions</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SCR 2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i14</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                <td style={{ padding: '8px' }}>Heat engager, safe</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SCR 3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                <td style={{ padding: '8px' }}>Fast mid</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SCR 4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-18</td>
                <td style={{ padding: '8px' }}>Power crush, T! launch</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SCR 1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6 (TRT)</td>
                <td style={{ padding: '8px' }}>Plus, TRT transition</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SCR df+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>Safe launcher, self-dmg</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SCR df+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i19</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14</td>
                <td style={{ padding: '8px' }}>Low, MNT trans, CH launch</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SCR b+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-18</td>
                <td style={{ padding: '8px' }}>Long low, very unsafe</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}

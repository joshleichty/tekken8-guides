import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Mantis Stance (MNT)"
      intro="Mantis is Zafina's defensive and evasive stance. Unlike Scarecrow, you CAN block in Mantis, and the stance naturally evades highs and some mids. It's your safe haven and setup tool."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Tarantula Stance"
    >
      <Section title="Entering Mantis">
        <p>
          Mantis can be entered manually with <code>d+3+4</code>, but you'll mainly enter 
          through transitions. Here are your key entries:
        </p>

        <KeyConcept title="Mantis Entry Methods" icon="🚪">
          <ul>
            <li><strong>d+3~D</strong> — Main entry, -13 on block, +7 on hit</li>
            <li><strong>db+4~D</strong> — Long range low, -13 on block, -4 on hit</li>
            <li><strong>SCR df+4</strong> — From Scarecrow, +7 on hit</li>
            <li><strong>f,f+3+4~D</strong> — Starfish, -12 on block, +14a on hit</li>
            <li><strong>TRT d+1+2</strong> — From Tarantula low</li>
            <li><strong>ws+2~D</strong> — After launcher, roll back entry</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Best Entry: d+3~D">
          d+3 into Mantis is your bread and butter. On CH, you get a full combo. On regular 
          hit, you're +7 in a stance where you can block. Practice this transition.
        </TipBox>
      </Section>

      <Section title="Mantis Properties">
        <KeyConcept title="You CAN Block in Mantis" icon="🛡️">
          <p>
            Unlike Scarecrow and Tarantula, <strong>Mantis allows blocking</strong>:
          </p>
          <ul>
            <li>Hold <code>b</code> to block mids and highs (exits stance)</li>
            <li>Hold <code>db</code> to block lows (exits stance)</li>
            <li>Any block or hit will exit you from the stance</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Natural Evasion" icon="👻">
          <p>
            Mantis stance naturally evades:
          </p>
          <ul>
            <li><strong>All high attacks</strong> — Zafina crouches low</li>
            <li><strong>Some mid attacks</strong> — Depends on the move's hitbox</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            This makes Mantis excellent for baiting and punishing.
          </p>
        </KeyConcept>

        <p>
          In Mantis, you can:
        </p>
        <ul>
          <li>Move forward and backward slowly</li>
          <li>Dash forward with <code>f,f</code></li>
          <li>Sidestep in both directions</li>
          <li>Block by holding back (exits stance)</li>
          <li>Cancel to neutral with <code>db</code></li>
        </ul>
      </Section>

      <Section title="MNT 1,3 — The SCR Transition">
        <MoveCard character="zafina"
          videoId="MNT.1,3"
          move={{
            input: 'MNT 1,3',
            hitLevel: ['m', 'h'],
            damage: '12, 12',
            startup: 'i13',
            onBlock: '0 (SCR)',
            onHit: '+9 (SCR)',
            tags: ['Mid', 'High', 'SCR Transition', 'Jails'],
            description: 'Mid-high string that jails and goes to Scarecrow. Your main mid from Mantis.',
          }}
          showVideo
        />

        <p>
          MNT 1,3 is your <span className="highlight">primary mid option</span> from Mantis. 
          It jails (second hit can't be ducked on block) and transitions to Scarecrow.
        </p>

        <KeyConcept title="MNT 1,3 Flow" icon="🔄">
          <ul>
            <li><strong>On hit</strong> — +9 in Scarecrow for strong mixups</li>
            <li><strong>On block</strong> — 0 in Scarecrow, relatively safe to continue</li>
            <li>Can hold <code>B</code> to stay neutral instead of SCR</li>
            <li>Loops back into pressure: MNT → SCR → MNT...</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="MNT 3,1 — The Safe Low-Mid">
        <MoveCard character="zafina"
          videoId="MNT.3,1"
          move={{
            input: 'MNT 3,1',
            hitLevel: ['l', 'm'],
            damage: '12, 16',
            startup: 'i15',
            onBlock: '-9',
            onHit: '+22a (+15)',
            onCH: 'Launch',
            tags: ['Low', 'Mid', 'Safe', 'CH Launcher'],
            description: 'Low-mid string that\'s safe. Counter-hit launches. Your best low from MNT.',
          }}
          showVideo
        />

        <p>
          MNT 3,1 is Zafina's <span className="highlight">best low from Mantis</span>. The mid 
          extension makes it safe, and counter-hit gives a full combo.
        </p>

        <KeyConcept title="MNT 3,1 is Special" icon="⭐">
          <ul>
            <li><strong>Safe</strong> — -9 on block, can't be punished</li>
            <li><strong>CH launches</strong> — High damage combo on counter</li>
            <li><strong>Mix with mids</strong> — MNT 1,3 vs MNT 3,1</li>
            <li><strong>Good damage</strong> — 28 damage on normal hit</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Reason They Fear MNT">
          This move is why opponents can't just mash when you're in Mantis. If they press, 
          they eat a CH launch. If they block, you're safe at -9. It's excellent.
        </TipBox>
      </Section>

      <Section title="MNT df+2 — Safe Launcher">
        <MoveCard character="zafina"
          videoId="MNT.df+2"
          move={{
            input: 'MNT df+2',
            hitLevel: ['m'],
            damage: '10',
            startup: 'i19',
            onBlock: '-9',
            onHit: '+32a (Launch)',
            tags: ['Mid', 'Launcher', 'Safe'],
            description: 'Safe mid launcher from Mantis. Slower but safe at -9.',
          }}
          showVideo
        />

        <p>
          MNT df+2 is a <span className="highlight">safe mid launcher</span>. At 19 frames it's 
          slow, but being safe on block makes it valuable for reads.
        </p>

        <KeyConcept title="When to Use MNT df+2" icon="🎯">
          <ul>
            <li><strong>When you have big advantage</strong> — +7 or better</li>
            <li><strong>Against hesitant opponents</strong> — They respect your lows</li>
            <li><strong>For oki</strong> — f,f+3+4 into MNT df+2 catches many get-ups</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="MNT df+1 — Heat Engager">
        <MoveCard character="zafina"
          videoId="MNT.df+1"
          move={{
            input: 'MNT df+1',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i20',
            onBlock: '+10 / +6 (neutral)',
            onHit: '+11a',
            tags: ['Mid', 'Heat Engager', 'Plus on Block', 'Azazel Power'],
            description: 'Heat engager from Mantis. Plus on block. Deals self-damage outside heat.',
          }}
          showVideo
        />

        <p>
          MNT df+1 is your <span className="highlight">Mantis heat engager</span>. It's plus on 
          block and transitions to Scarecrow on normal hit.
        </p>

        <KeyConcept title="MNT df+1 Properties" icon="🔮">
          <ul>
            <li><strong>Plus on block</strong> — +10 in SCR or +6 neutral with B</li>
            <li><strong>Heat engager</strong> — Activates heat on hit</li>
            <li><strong>Self-damage</strong> — 8 recoverable damage outside heat</li>
            <li><strong>Armor in heat</strong> — Gains power crush in heat</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="MNT 2 & Extensions">
        <MoveCard character="zafina"
          videoId="MNT.2"
          move={{
            input: 'MNT 2',
            hitLevel: ['m'],
            damage: '19',
            startup: 'i13',
            onBlock: '-14',
            onHit: '-3',
            onCH: '+57a (Launch)',
            tags: ['Mid', 'Fast', 'CH Launcher', 'Unsafe'],
            description: 'Fast mid that CH launches. Unsafe but has extensions to discourage punishment.',
          }}
          showVideo
        />

        <p>
          MNT 2 is a <span className="highlight">fast 13f mid</span> that counter-hit launches. 
          It's unsafe at -14 but has extensions that discourage punishment.
        </p>

        <KeyConcept title="MNT 2 Extensions" icon="📋">
          <ul>
            <li><strong>MNT 2,1</strong> — Second mid, -14 on block</li>
            <li><strong>MNT 2,1,4</strong> — Wall splats, combo ender</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            The extensions make opponents hesitate to punish, but they're still unsafe.
          </p>
        </KeyConcept>
      </Section>

      <Section title="MNT 4 — Counter-Hit Low">
        <MoveCard character="zafina"
          videoId="MNT.4"
          move={{
            input: 'MNT 4',
            hitLevel: ['l'],
            damage: '13',
            startup: 'i17',
            onBlock: '-19 (TRT)',
            onHit: '-3 (TRT)',
            onCH: '+7 (Launch setup)',
            tags: ['Low', 'TRT Transition', 'Evasive', 'CH'],
            description: 'Low slide that goes into Tarantula. Evasive. Has extension that CH launches.',
          }}
          showVideo
        />

        <p>
          MNT 4 is a <span className="highlight">low slide</span> that enters Tarantula. It's 
          very evasive and has a CH launching extension.
        </p>

        <KeyConcept title="MNT 4,3 Extension" icon="🕷️">
          <ul>
            <li><strong>MNT 4,3</strong> — Low-mid, -30 on block but has pushback</li>
            <li>On CH: Full combo with tornado</li>
            <li>Very evasive — goes under many attacks</li>
            <li>Long range launcher can punish</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="MNT 1+2 — Power Crush">
        <MoveCard character="zafina"
          videoId="MNT.1+2"
          move={{
            input: 'MNT 1+2',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i20',
            onBlock: '-12',
            onHit: '+18a (b+3 guaranteed)',
            tags: ['Mid', 'Power Crush', 'Knockdown'],
            description: 'Power crush from Mantis. Knockdown with guaranteed b+3 follow-up.',
          }}
          showVideo
        />

        <p>
          MNT 1+2 is your <span className="highlight">power crush</span> from Mantis. Use it 
          when you expect opponents to attack.
        </p>
      </Section>

      <Section title="MNT df+4 — Homing Mid to TRT">
        <MoveCard character="zafina"
          videoId="MNT.df+4"
          move={{
            input: 'MNT df+4',
            hitLevel: ['m'],
            damage: '18',
            startup: 'i17',
            onBlock: '-5 (TRT)',
            onHit: '+13g (TRT)',
            tags: ['Mid', 'Homing', 'TRT Transition', 'Wall Splat'],
            description: 'Homing mid that goes into Tarantula. Wall splats. Good tracking.',
          }}
          showVideo
        />

        <p>
          MNT df+4 is a <span className="highlight">homing mid</span> that catches sidesteps and 
          transitions to Tarantula. It wall splats and leaves you advantaged.
        </p>
      </Section>

      <Section title="Paradox (MNT 2+3)">
        <MoveCard character="zafina"
          videoId="MNT.2+3"
          move={{
            input: 'MNT 2+3',
            hitLevel: [],
            damage: '0',
            startup: '-',
            onBlock: '-',
            onHit: '-',
            tags: ['Stance Switch', 'Axis Realignment'],
            description: 'Switches sides in Mantis. Mirrors all inputs. Use to realign with off-axis opponents.',
          }}
          showVideo
        />

        <p>
          MNT 2+3 (Paradox) is a <span className="highlight">stance switch</span> that flips Zafina 
          to the other side. Everything becomes mirrored — left becomes right, right becomes left.
        </p>

        <TipBox variant="tip" title="When to Use Paradox">
          Mantis doesn't realign with your opponent. If you find yourself off-axis, use 
          Paradox to switch sides and realign. It's situational but can save you.
        </TipBox>
      </Section>

      <Section title="The MNT Mixup Game">
        <KeyConcept title="At Plus Frames (+7 from d+3)" icon="🎯">
          <ul>
            <li><strong>MNT 1,3</strong> — Safe mid-high, SCR transition</li>
            <li><strong>MNT 3,1</strong> — Safe low-mid, CH launches</li>
            <li><strong>MNT df+2</strong> — Safe launcher (slower)</li>
            <li><strong>MNT df+1</strong> — Heat engager, plus on block</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="At Minus Frames (-13 from d+3 blocked)" icon="⚠️">
          <ul>
            <li><strong>Block (hold b)</strong> — Safest option, exits stance</li>
            <li><strong>MNT 1+2</strong> — Power crush if you expect attack</li>
            <li><strong>MNT uf+3</strong> — Low crush option</li>
            <li><strong>Cancel (db)</strong> — Reset to neutral</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Beauty of MNT">
          Mantis is safe because you can block. Use it to bait attacks — opponents 
          swing, you evade highs naturally, then punish with MNT 3,1 CH or MNT df+2.
        </TipBox>
      </Section>

      <Collapsible title="MNT Move Reference" icon="📊" defaultOpen>
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
                <td style={{ padding: '8px' }}><code>MNT 1,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>0 (SCR)</td>
                <td style={{ padding: '8px' }}>Main mid, SCR trans</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>MNT 2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14</td>
                <td style={{ padding: '8px' }}>CH launcher, extensions</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>MNT 3,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>Safe low-mid, CH launch</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>MNT 4,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-30</td>
                <td style={{ padding: '8px' }}>Low-mid, evasive, T! on CH</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>MNT df+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i20</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+10</td>
                <td style={{ padding: '8px' }}>Heat engager, plus OB</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>MNT df+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i19</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>Safe launcher</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>MNT df+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-5 (TRT)</td>
                <td style={{ padding: '8px' }}>Homing, wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>MNT 1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i20</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ padding: '8px' }}>Power crush</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}

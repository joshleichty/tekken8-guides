import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Azazel Power & Heat"
      intro="Zafina's left arm contains the power of Azazel — powerful moves that deal damage to herself. In heat, these become even stronger with no self-damage and added power crush. This is where Zafina truly shines."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Punishment"
    >
      <Section title="Understanding Azazel Power">
        <p>
          Zafina has moves that use <span className="highlight">Azazel's power</span> — her left 
          arm transforms into a purple claw. These moves are powerful but have a cost.
        </p>

        <KeyConcept title="Azazel Power Properties" icon="🔮">
          <ul>
            <li><strong>Self-damage</strong> — Each move deals recoverable damage to Zafina</li>
            <li><strong>Recoverable health</strong> — The damage is gray and can be healed by hitting opponent</li>
            <li><strong>Heat engagers</strong> — All Azazel moves are heat engagers</li>
            <li><strong>ORB gain</strong> — Some moves grant the ORB resource for follow-ups</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Use Early in Combos">
          If using Azazel moves in combos, use them early. Subsequent hits recover the gray 
          health. Using them as enders means no recovery opportunity.
        </TipBox>
      </Section>

      <Section title="Azazel Moves List">
        <KeyConcept title="All Azazel Power Moves" icon="📋">
          <ul>
            <li><strong>f+1+2</strong> — Safe mid, 8 self-damage</li>
            <li><strong>df+4,1</strong> — Extension, 10 self-damage</li>
            <li><strong>b+1+2</strong> — Neutral launcher, 12 self-damage</li>
            <li><strong>SCR 2,1</strong> — Best heat engager, 10 self-damage</li>
            <li><strong>SCR df+1</strong> — Safe launcher, 18 self-damage</li>
            <li><strong>SCR b+1+2</strong> — Long range low, 10 self-damage</li>
            <li><strong>MNT df+1</strong> — Plus on block mid, 8 self-damage</li>
            <li><strong>TRT df+1</strong> — Plus on block mid, 8 self-damage</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat Engagers">
        <p>
          Your primary goal is to <span className="highlight">land a heat engager</span> and activate 
          heat. Here are your best options:
        </p>

        <MoveCard character="zafina"
          videoId="SCR.2,1"
          move={{
            input: 'SCR 2,1',
            hitLevel: ['m', 'm'],
            damage: '42',
            startup: 'i14',
            onBlock: '-6',
            onHit: '+30a (Heat Dash)',
            tags: ['Heat Engager', 'Safe', 'From Scarecrow'],
            description: 'Best heat engager. Safe, good damage, easy to confirm from CH f,f+3.',
          }}
          showVideo
        />

        <p>
          SCR 2,1 is your <span className="highlight">go-to heat engager</span>. Get into Scarecrow, 
          land this, and you're in heat with good damage.
        </p>

        <MoveCard character="zafina"
          move={{
            input: 'f+1+2',
            hitLevel: ['m', 'm'],
            damage: '16, 22',
            startup: 'i19',
            onBlock: '-9',
            onHit: '+5a (Heat Dash)',
            tags: ['Heat Engager', 'Safe', 'Neutral'],
            description: 'Safe mid heat engager from neutral. Good range, high crushes.',
          }}
          showVideo
        />

        <p>
          f+1+2 is your <span className="highlight">neutral heat engager</span>. It's safe, has good 
          range, and high crushes. Use when you can't get into stance.
        </p>

        <MoveCard character="zafina"
          move={{
            input: 'df+4,1',
            hitLevel: ['m', 'm'],
            damage: '14, 22',
            startup: 'i13',
            onBlock: '-9',
            onHit: '+3a (Heat Dash)',
            tags: ['Heat Engager', 'Fast', 'Punishment'],
            description: '13f heat engager. Good for punishment situations.',
          }}
          showVideo
        />

        <p>
          df+4,1 is a <span className="highlight">fast heat engager</span> for punishment. Use as 
          a 13f punish when you want heat instead of damage.
        </p>

        <KeyConcept title="Heat Engager Priority" icon="🎯">
          <ol>
            <li><strong>CH f,f+3 → SCR 2,1</strong> — Best option, 52 damage + heat</li>
            <li><strong>SCR 2,1</strong> — From any Scarecrow entry</li>
            <li><strong>f+1+2</strong> — From neutral when can't get to stance</li>
            <li><strong>df+4,1</strong> — For punishment</li>
            <li><strong>MNT df+1</strong> — From Mantis, plus on block</li>
            <li><strong>TRT df+1</strong> — From Tarantula, plus on block</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="In Heat: Azazel Upgrades">
        <p>
          When Zafina is in heat, her Azazel moves gain <span className="highlight">two major upgrades</span>:
        </p>

        <KeyConcept title="Heat Upgrades" icon="🔥">
          <ul>
            <li><strong>No self-damage</strong> — Azazel moves no longer hurt Zafina</li>
            <li><strong>Power Crush</strong> — Stance Azazel moves (SCR df+1, MNT df+1, TRT df+1) gain armor</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Abuse the Armor">
          In heat, SCR df+1, MNT df+1, and TRT df+1 have power crush. If opponents try to 
          interrupt your stance pressure, you can armor through and launch them.
        </TipBox>
      </Section>

      <Section title="Heat Smashes">
        <p>
          Zafina has <span className="highlight">two heat smashes</span> — one from neutral and one 
          from Scarecrow. Both are excellent.
        </p>

        <MoveCard character="zafina"
          videoId="H.2+3"
          move={{
            input: 'H.2+3 (Neutral Heat Smash)',
            hitLevel: ['h', 'sm'],
            damage: '51',
            startup: 'i12',
            onBlock: '+3',
            onHit: '+0d',
            tags: ['Heat Smash', 'High', 'Fast', 'Reversal Break'],
            description: 'Fast 12f heat smash. High into attack throw. Can miss first hit and catch with second.',
          }}
          showVideo
        />

        <p>
          The neutral heat smash is <span className="highlight">12 frames</span> — very fast. It's 
          excellent for punishment and sometimes catches opponents who try to punish whiffs.
        </p>

        <KeyConcept title="Neutral Heat Smash Uses" icon="⚡">
          <ul>
            <li><strong>Punishment</strong> — 12f makes it one of your fastest punishes</li>
            <li><strong>Whiff punishment</strong> — Second hit can catch whiff punish attempts</li>
            <li><strong>After b+2</strong> — b+2 on hit gives +12, guaranteed heat smash</li>
            <li><strong>Chip damage</strong> — 10 chip on block</li>
          </ul>
        </KeyConcept>

        <MoveCard character="zafina"
          videoId="H.2+3"
          move={{
            input: 'SCR.H.2+3 (Scarecrow Heat Smash)',
            hitLevel: ['l', 'm', 'm', 'sm'],
            damage: '6+15+3+10 (34)',
            startup: 'i19',
            onBlock: '-14',
            onHit: '-13a (b+3 guaranteed)',
            tags: ['Heat Smash', 'Low', 'From Scarecrow', 'Knockdown'],
            description: 'Low heat smash from Scarecrow. Knockdown with guaranteed follow-up.',
          }}
          showVideo
        />

        <p>
          The SCR heat smash is a <span className="highlight">low option</span> that's devastating 
          for mixups. Opponents must choose between blocking SCR 2,1/1+2 (mids) or ducking this (low).
        </p>

        <KeyConcept title="SCR Heat Smash Damage" icon="💥">
          <ul>
            <li><strong>In open</strong> — Guarantees b+3 for ~41 total damage</li>
            <li><strong>At wall</strong> — Guarantees df+1,2,1 for ~56 total damage</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Heat Gameplan">
          <ol>
            <li>Activate heat via CH f,f+3 → SCR 2,1 (or other engager)</li>
            <li>Get into Scarecrow (via f,f+3, 1,3, WR3, etc.)</li>
            <li>Mix between SCR heat smash (low) and SCR 2,1/1+2 (mids)</li>
            <li>This is your most powerful pressure in the game</li>
          </ol>
        </TipBox>
      </Section>

      <Section title="ORB System">
        <p>
          Some Azazel moves grant an <span className="highlight">ORB</span> — a resource that enables 
          powerful follow-ups.
        </p>

        <KeyConcept title="ORB Mechanics" icon="🔵">
          <ul>
            <li><strong>Gaining ORB</strong> — Land certain Azazel moves (b+1+2, SCR df+1, etc.)</li>
            <li><strong>Using ORB</strong> — Enables special follow-ups with 1+2</li>
            <li><strong>In Heat</strong> — ORB moves consume some Heat time</li>
            <li><strong>Outside Heat</strong> — ORB moves deal extra self-damage</li>
          </ul>
        </KeyConcept>

        <Collapsible title="ORB Follow-ups" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <ul>
              <li><strong>b+1:1+2</strong> → <strong>ORB.1+2</strong> — Extended combo ender</li>
              <li><strong>b+3</strong> → <strong>ORB.1+2</strong> — After power crush</li>
              <li><strong>SCR df+3+4</strong> (Heat) — Consumes ORB for special heat smash</li>
            </ul>
            <p style={{ marginTop: '12px', color: 'var(--text-muted)' }}>
              ORB is mostly for advanced optimization. Focus on heat smashes first.
            </p>
          </div>
        </Collapsible>
      </Section>

      <Section title="The Reversal (b+1+3)">
        <MoveCard character="zafina"
          videoId="b+1+3"
          move={{
            input: 'b+1+3 (or b+2+4)',
            hitLevel: ['parry'],
            damage: '5+23 (on success)',
            startup: 'i6-29',
            onBlock: '-',
            onHit: '+12d',
            tags: ['Parry', 'Reversal', 'Azazel Power', 'Self-Damage'],
            description: 'Parries mids and highs. On success, deals damage and grants guaranteed stomp.',
          }}
          showVideo
        />

        <p>
          b+1+3 is Zafina's <span className="highlight">reversal</span>. It parries mids and highs, 
          deals damage, and guarantees a stomp (b+3) for additional damage.
        </p>

        <KeyConcept title="Reversal Properties" icon="🛡️">
          <ul>
            <li><strong>Active frames</strong> — 6-29 (long window)</li>
            <li><strong>On success</strong> — 28 damage + guaranteed b+3 (18) = 46 total</li>
            <li><strong>Self-damage</strong> — 8 recoverable outside heat</li>
            <li><strong>Risk</strong> — If they throw or low, you're wide open</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="High Risk Tool">
          The reversal is powerful but risky. Opponents can throw you (unbreakable during 
          reversal) or hit you with lows. Use sparingly and as a hard read.
        </TipBox>
      </Section>

      <Section title="Heat Strategy Summary">
        <KeyConcept title="The Complete Heat Gameplan" icon="🎯">
          <ol>
            <li><strong>Fish for CH f,f+3</strong> — +4 on block, +14 on CH</li>
            <li><strong>On CH</strong> — Confirm into SCR 2,1 for heat</li>
            <li><strong>Alternative engagers</strong> — f+1+2, df+4,1, MNT df+1, TRT df+1</li>
            <li><strong>In heat, get to SCR</strong> — Via f,f+3, 1,3, WR3, etc.</li>
            <li><strong>SCR mixup</strong> — Heat smash (low) vs SCR 2,1/1+2 (mids)</li>
            <li><strong>Neutral heat smash</strong> — For fast punishment or chip</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Heat Smash Priority">
          Always save enough heat time for at least one heat smash. The SCR heat smash 
          mixup is too strong to waste. Don't burn all your heat on Azazel moves.
        </TipBox>
      </Section>

      <Collapsible title="Heat Reference" icon="📊" defaultOpen>
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Type</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Self Dmg</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>SCR 2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Heat Engager</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>10</td>
                <td style={{ padding: '8px' }}>Best engager, safe</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Heat Engager</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>8</td>
                <td style={{ padding: '8px' }}>Neutral option</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+4,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Heat Engager</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>10</td>
                <td style={{ padding: '8px' }}>Fast (13f)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>H.2+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Heat Smash</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-</td>
                <td style={{ padding: '8px' }}>12f, neutral</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SCR.H.2+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Heat Smash</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-</td>
                <td style={{ padding: '8px' }}>Low, from SCR</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+1+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Reversal</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>8</td>
                <td style={{ padding: '8px' }}>Parry mid/high</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}

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
      title="Important Strings"
      intro="Yoshimitsu's strings give you frame advantage, Heat engagers, and stance transitions. These are your tools for applying pressure and getting your offense started."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Learn Launchers"
    >
      <Section title="The Best String: 3,1">
        <MoveCard character="yoshimitsu"
          move={{
            input: '3,1',
            hitLevel: ['m', 'h'],
            damage: '12, 20',
            startup: 'i15-16',
            onBlock: '+7 (DGF)',
            onHit: '+18g (DGF)',
            tags: ['Mid', 'High', 'Heat Engager', 'DGF.Transition', 'Plus Frames'],
            description: 'THE string. Heat engager, +7 into Dragonfly on block, +18 on hit. Your go-to pressure tool.',
          }}
          showVideo
        />

        <p>
          3,1 is <span className="highlight">Yoshimitsu's best string</span>. It's a Heat Engager, 
          transitions to Dragonfly, and gives you plus frames on block AND hit.
        </p>

        <KeyConcept title="Why 3,1 is Amazing" icon="⚡">
          <ul>
            <li><strong>Heat Engager</strong> — Activates Heat on hit</li>
            <li><strong>+7 into DGF on block</strong> — Frame traps galore</li>
            <li><strong>+18g on hit</strong> — Huge advantage, pressure continues</li>
            <li><strong>Combo tool</strong> — Used in many combo routes</li>
            <li><strong>Wall splats</strong> — Leads to wall pressure</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Second Hit is High">
          The 1 in 3,1 is a HIGH. Good players can duck and launch you. But because you're 
          in Dragonfly after, they have to commit to the duck early — and if they don't, they 
          eat the frame trap.
        </TipBox>

        <KeyConcept title="3,1 → DGF Frame Traps" icon="🔄">
          <p>After 3,1 on block, you're +7 in Dragonfly:</p>
          <ul>
            <li><code>DGF f+1+2</code> (i16) — Frame trap vs jabs, beats mashing</li>
            <li><code>DGF 2,4</code> (i16) — Launcher on hit, frame trap</li>
            <li><code>DGF 4</code> (i18) — Heat engager mid</li>
            <li><code>DGF 3+4</code> (i20) — Unbreakable throw, floor breaks</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            We'll cover DGF in detail in Chapter 10. For now, know that 3,1 sets up these mixups.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Running 3 — Free Plus Frames">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'f,f,F+3',
            hitLevel: ['M'],
            damage: '30',
            startup: 'i22-23',
            onBlock: '+5g (DGF option)',
            onHit: '+13a',
            tags: ['Mid', 'Plus on Block', 'New in T8', 'DGF.Transition'],
            description: 'Running 3 is PLUS ON BLOCK. One of the best approach tools in the game. Transitions to DGF.',
          }}
          showVideo
        />

        <p>
          Running 3 (<code>f,f,F+3</code>) is <span className="highlight">plus on block</span>. This 
          is a Tekken 8 buff that made Yoshimitsu's approach game significantly better.
        </p>

        <KeyConcept title="Running 3 Applications" icon="🏃">
          <ul>
            <li><strong>+5 on block</strong> — They HAVE to respect you</li>
            <li><strong>DGF transition</strong> — Hold up for Dragonfly at +7</li>
            <li><strong>Chip damage</strong> — 9 chip damage on block</li>
            <li><strong>Approach tool</strong> — Run in, they block, you're plus</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Running 3 → DGF Mixup">
          After Running 3 on block, hold up to enter DGF at +7. Now you have all the DGF 
          mixups available. This is how you force your stance game on opponents who don't 
          want to interact.
        </TipBox>
      </Section>

      <Section title="The 3,2,1+2 Wall Tool">
        <MoveCard character="yoshimitsu"
          move={{
            input: '3,2,1+2',
            hitLevel: ['m', 'm', 'M'],
            damage: '12, 12, 26',
            startup: 'i15-16',
            onBlock: '-14c',
            onHit: '+20a',
            tags: ['Mid', 'Mid', 'Mid', 'Wall Break', 'Combo Ender'],
            description: 'Mid-mid-mid string that wall breaks. Essential combo ender at walls. Enhanced in NSS/Heat.',
          }}
          showVideo
        />

        <p>
          3,2,1+2 is your <span className="highlight">wall ender string</span>. The full string 
          wall breaks and does significant damage. In NSS or Heat, the damage increases further.
        </p>

        <KeyConcept title="When to Use 3,2,1+2" icon="🧱">
          <ul>
            <li><strong>Wall combos</strong> — Go-to wall ender</li>
            <li><strong>After tornado at wall</strong> — Maximum wall damage</li>
            <li><strong>In Heat/NSS</strong> — Enhanced damage (27 on last hit)</li>
            <li><strong>Delay the last hit</strong> — For grounded opponents, delay for +10 damage</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Delay for Damage">
          The last hit of 3,2,1+2 can be delayed. If you delay it so it hits grounded opponents, 
          you get extra damage (about 10 more). Practice the timing in wall combos.
        </TipBox>
      </Section>

      <Section title="The Sword Poke: b+1 Series">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'b+1',
            hitLevel: ['h'],
            damage: '8',
            startup: 'i17',
            onBlock: '+1',
            onHit: '+7',
            onCH: '+12',
            tags: ['High', 'Plus on Block', 'Spin Transition'],
            description: 'High poke that\'s plus on block. Can be extended into the spin series or canceled into Manji Spin.',
          }}
          showVideo
        />

        <p>
          b+1 is a <span className="highlight">plus on block high</span> that leads into the 
          famous spin series (b+1,1,1,1...). More importantly, it can transition to Manji Spin.
        </p>

        <KeyConcept title="b+1 Options" icon="🔄">
          <ul>
            <li><strong>b+1 → b+3/b+4</strong> — Cancel into Manji Spin</li>
            <li><strong>b+1,1</strong> — Continue the spin for chip</li>
            <li><strong>b+1,1,db+3,3</strong> — Transitions into low spin</li>
            <li><strong>On CH</strong> — +12 frames, huge advantage</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Flash Setup">
          After b+1 on block (+1), if they press a button, you can Flash (1+4) them. b+1 → Flash 
          is a classic Yoshimitsu frame trap. We'll cover Flash in Chapter 8.
        </TipBox>
      </Section>

      <Section title="The Mid String: b+2 Series">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'b+2',
            hitLevel: ['m'],
            damage: '12',
            startup: 'i14-15',
            onBlock: '-9',
            onHit: '+2',
            tags: ['Mid', 'KIN.Transition', 'Whiff Punisher'],
            description: 'Mid poke that can transition to Kincho or extend to b+2,2 (Heat Engager).',
          }}
          showVideo
        />

        <MoveCard character="yoshimitsu"
          move={{
            input: 'b+2,2',
            hitLevel: ['m', 'h'],
            damage: '12, 21',
            startup: 'i14-15',
            onBlock: '-9',
            onHit: '+2a',
            tags: ['Mid', 'High', 'Heat Engager', 'Whiff Punisher'],
            description: 'Your 14f punish and best whiff punisher. Heat engager. The go-to whiff punish tool.',
          }}
          showVideo
        />

        <p>
          b+2,2 is Yoshimitsu's <span className="highlight">14-frame punish</span> and his best 
          whiff punisher. It's a Heat Engager with excellent range.
        </p>

        <KeyConcept title="b+2,2 Applications" icon="🎯">
          <ul>
            <li><strong>14f standing punish</strong> — For -14 moves</li>
            <li><strong>Whiff punisher</strong> — Long range, fast recovery</li>
            <li><strong>Heat Engager</strong> — Activates Heat on hit</li>
            <li><strong>Combo starter in Heat</strong> — Launches in Heat</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Second Hit is High">
          The 2 in b+2,2 is a HIGH. Don't autopilot it — if they duck, they launch you. Use 
          the full string for punishment and whiff punishes, but be careful throwing it in neutral.
        </TipBox>
      </Section>

      <Section title="The Approach String: f+2 Series">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'f+2',
            hitLevel: ['h'],
            damage: '18',
            startup: 'i17-18',
            onBlock: '-4',
            onHit: '+14g',
            onCH: '+39a',
            tags: ['High', 'Counter-Hit Launcher', 'Safe'],
            description: 'High poke that counter-hit launches. Has mid extension f+2,1 for mixups.',
          }}
          showVideo
        />

        <MoveCard character="yoshimitsu"
          move={{
            input: 'f+2,1',
            hitLevel: ['h', 'M'],
            damage: '18, 21',
            startup: 'i17-18',
            onBlock: '-12',
            onHit: '+17a',
            onCH: '+66a (full combo)',
            tags: ['High', 'Mid', 'Tornado', 'Counter-Hit Confirm'],
            description: 'High-mid string. The 1 is a Tornado move. Counter-hit confirmable for full combo.',
          }}
          showVideo
        />

        <p>
          f+2 is a <span className="highlight">counter-hit launcher</span> with a mid extension. 
          On CH, f+2,1 gives you a full combo. The CH window is confirmable with practice.
        </p>

        <KeyConcept title="f+2 Usage" icon="⚡">
          <ul>
            <li><strong>Counter-hit fishing</strong> — On CH f+2,1 gives full combo</li>
            <li><strong>Mid mixup</strong> — f+2,1 catches duckers</li>
            <li><strong>Combo tool</strong> — f+2,1 is used in many combos</li>
            <li><strong>Wall splats</strong> — Both versions wall splat</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="String Strategy">
        <KeyConcept title="Choosing Your Strings" icon="📋">
          <ul>
            <li><strong>3,1</strong> — Your go-to. Heat engager, plus frames, DGF mixups.</li>
            <li><strong>Running 3</strong> — Approach tool. Plus on block, forces respect.</li>
            <li><strong>b+2,2</strong> — Punishment and whiff punishing.</li>
            <li><strong>3,2,1+2</strong> — Wall combos and enders.</li>
            <li><strong>f+2,1</strong> — Counter-hit fishing and combos.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Pattern">
          Notice how most of Yoshimitsu's good strings have a high in them. This is intentional — 
          the game gives you frame advantage or damage for the risk of being ducked. Learn when 
          opponents will duck and when they won't.
        </TipBox>
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
                <td style={{ padding: '8px' }}><code>3,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15-16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+7 DGF</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+18g</td>
                <td style={{ padding: '8px' }}>Heat Engager, best string</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f,F+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i22-23</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+5g</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+13a</td>
                <td style={{ padding: '8px' }}>Plus on block approach</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>3,2,1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15-16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14c</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+20a</td>
                <td style={{ padding: '8px' }}>Wall ender, combo tool</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+2,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i14-15</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+2a</td>
                <td style={{ padding: '8px' }}>14f punish, Heat Engager</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17-18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+17a / CH combo</td>
                <td style={{ padding: '8px' }}>CH confirmable, Tornado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}

import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Wall Game"
      intro="Zafina's wall game is strong. Her combos carry well, she has multiple wall splat options, and her Scarecrow pressure becomes even scarier with wall splat threats. Master this for maximum damage."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Complete Zafina"
    >
      <Section title="Wall Splat Moves">
        <KeyConcept title="Primary Wall Splat Options" icon="🧱">
          <ul>
            <li>
              <strong>df+1,4</strong> — i13, mid-high, -6 on block
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Your fastest wall splat. Great for punishment and neutral.</p>
            </li>
            <li>
              <strong>f,f+4</strong> — i17, homing mid, -8 on block
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Long range, safe, catches sidesteps.</p>
            </li>
            <li>
              <strong>f,f+3+4</strong> — i21, mid-mid, -11 on block
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Good range, second hit wall splats, hits grounded.</p>
            </li>
            <li>
              <strong>SCR 3,3</strong> — i13, mid-high, 0 on block
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>From Scarecrow. Second hit can be ducked.</p>
            </li>
            <li>
              <strong>SCR 2,1</strong> — i14, mid-mid, -6 on block
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Heat engager that wall splats. Use in heat for big damage.</p>
            </li>
            <li>
              <strong>MNT df+4</strong> — i17, homing mid, -5 on block (TRT)
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>From Mantis. Good tracking.</p>
            </li>
            <li>
              <strong>b+4,4</strong> — i22, mid-mid, -14 on block
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Neutral option. Second hit wall splats.</p>
            </li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Wall Combos">
        <KeyConcept title="Standard Wall Combo" icon="⚡">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            [Wall Splat] → 2,1,3
          </p>
          <p style={{ marginTop: '8px' }}>Simple and reliable. ~25 damage from splat.</p>
        </KeyConcept>

        <KeyConcept title="Optimal Wall Combo (Mid-Screen Carry)" icon="⚡">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            [Launcher] → ... → [Carry to Wall] → uf+1 → df+1,2,1 (delay last hit)
          </p>
          <p style={{ marginTop: '8px' }}>The delayed last hit gets 50% scaling bonus. ~70+ total.</p>
        </KeyConcept>

        <KeyConcept title="With Tornado at Wall" icon="⚡">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            [Tornado at Wall] → uf+1 → df+1,2,1 (delay last hit)
          </p>
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)', marginTop: '8px' }}>
            df+4,2 T! → 2,1,3
          </p>
        </KeyConcept>

        <KeyConcept title="Scarecrow Pressure Ender" icon="🦅">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            [Wall Splat] → f+2,3 → SCR 3 (follow with SCR mixup)
          </p>
          <p style={{ marginTop: '8px' }}>Less damage but leaves you in SCR for pressure.</p>
        </KeyConcept>

        <TipBox variant="tip" title="50% Scaling Bonus">
          Moves that hit as the opponent is about to slide down the wall get 50% scaling 
          instead of the usual combo scaling. Time your df+1,2,1 with a delay on the 
          last hit to maximize damage.
        </TipBox>
      </Section>

      <Section title="Heat Smash at Wall">
        <KeyConcept title="SCR Heat Smash Wall Damage" icon="🔥">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            SCR Heat Smash → df+1,2,1 (wall combo)
          </p>
          <p style={{ marginTop: '8px' }}>
            <strong>56 total damage</strong> (vs 41 in open). The wall makes the low heat 
            smash significantly more rewarding.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Wall = Heat Smash Time">
          When you have the opponent at the wall and you're in heat, get to Scarecrow 
          immediately. The heat smash 50/50 is at its most dangerous here.
        </TipBox>
      </Section>

      <Section title="Wall Pressure">
        <p>
          At the wall, your stance pressure becomes even more threatening because <span className="highlight">
          multiple options wall splat</span>.
        </p>

        <KeyConcept title="SCR Wall Pressure" icon="🦅">
          <ul>
            <li><strong>SCR 3,3</strong> — Wall splat (high can be ducked)</li>
            <li><strong>SCR 2,1</strong> — Wall splat + heat engager</li>
            <li><strong>SCR 1+2</strong> — Knockdown, goes to TRT</li>
            <li><strong>SCR df+4</strong> — Low, MNT transition</li>
            <li><strong>SCR Heat Smash</strong> — Low, 56 damage with wall combo</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="MNT Wall Pressure" icon="🦗">
          <ul>
            <li><strong>MNT df+4</strong> — Wall splat, homing</li>
            <li><strong>MNT 1,3</strong> — Goes to SCR for more pressure</li>
            <li><strong>MNT 3,1</strong> — Safe low-mid</li>
            <li><strong>MNT df+2</strong> — Safe launcher</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="TRT Wall Pressure" icon="🕷️">
          <ul>
            <li><strong>TRT 3</strong> → <strong>TRT df+1</strong> — Mid sequence, wall splats</li>
            <li><strong>TRT 1</strong> — Low option</li>
            <li><strong>TRT 1+2</strong> — Homing mid, wall splats</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Wall Carry Enders">
        <KeyConcept title="Combo Enders for Wall Carry" icon="🏃">
          <ul>
            <li><strong>df+4,2</strong> — Good carry, tornado</li>
            <li><strong>df+1,4</strong> — Fast, good carry</li>
            <li><strong>f,f+3+4</strong> — Excellent carry</li>
            <li><strong>f,f+4</strong> — Good carry, wall break</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Wall Break / Balcony Break">
        <KeyConcept title="Wall Break Options" icon="💥">
          <ul>
            <li><strong>f,f+4</strong> — Reliable wall break</li>
            <li><strong>df+1,4</strong> — Fast wall break</li>
            <li><strong>df+1,2,1</strong> — Multiple hits, good for break</li>
            <li><strong>f+2,3,4</strong> — Strong option from SCR entry</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Floor Break Options" icon="⬇️">
          <ul>
            <li><strong>1+2</strong> — Reliable floor break</li>
            <li><strong>MNT 1+2</strong> — From Mantis</li>
            <li><strong>TRT 3</strong> — From Tarantula</li>
            <li><strong>df+1,2</strong> — Mid combo floor break</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Oki at Wall">
        <p>
          After wall combos, you have strong <span className="highlight">oki options</span>.
        </p>

        <KeyConcept title="Wall Oki Options" icon="💤">
          <ul>
            <li>
              <strong>db+3</strong> — Hits grounded, goes to SCR at +3
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>If they stay down, you get a hit. If they get up, you're plus in SCR.</p>
            </li>
            <li>
              <strong>f,f+3</strong> — Mid pressure starter
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>+4 on block in SCR. Good for continuing pressure.</p>
            </li>
            <li>
              <strong>f,f+3+4</strong> — Second hit catches many wake-up options
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Hits grounded, can go into MNT.</p>
            </li>
            <li>
              <strong>ws+3</strong> → <strong>SCR 4</strong> — If you're in crouch
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Power crush catches wake-up attacks.</p>
            </li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Back to Wall (Defensive)">
        <p>
          When YOUR back is to the wall, adjust your play:
        </p>

        <KeyConcept title="Back to Wall Options" icon="🛡️">
          <ul>
            <li><strong>Sidestep</strong> — Try to escape the corner</li>
            <li><strong>b+3</strong> — Power crush to create space</li>
            <li><strong>d+3</strong> — Low that can evade and CH launch</li>
            <li><strong>b+1+3</strong> — Reversal if you read an attack</li>
            <li><strong>df+2</strong> — Launch punish if they whiff</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Panic">
          With your back to wall, don't panic and spam buttons. Look for sidestep 
          opportunities, use your backdash even if limited, and wait for whiff punishes.
        </TipBox>
      </Section>

      <Collapsible title="Wall Combo Reference" icon="📊" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Situation</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Combo</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>Standard</td>
                <td style={{ padding: '8px' }}>2,1,3</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Optimal</td>
                <td style={{ padding: '8px' }}>uf+1 → df+1,2,1 (delay)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Pressure</td>
                <td style={{ padding: '8px' }}>f+2,3 → SCR 3 (continue)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>With Tornado</td>
                <td style={{ padding: '8px' }}>ws+2 T! → uf+1 → df+1,2,1</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Heat Smash</td>
                <td style={{ padding: '8px' }}>SCR Heat Smash → df+1,2,1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
